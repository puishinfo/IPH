<?php
// server/contact.php
// Simple contact endpoint in PHP. Configure via server/config.local.php or environment variables.

header('Content-Type: application/json');

$config = require __DIR__ . '/config.php';
// allow override with local config file
if (file_exists(__DIR__ . '/config.local.php')) {
    $local = require __DIR__ . '/config.local.php';
    $config = array_merge($config, $local);
}

// CORS / origin check
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($config['ALLOWED_ORIGINS'])) {
    if (!in_array($origin, $config['ALLOWED_ORIGINS'])) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Origin not allowed']);
        exit;
    }
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    // fallback: allow same origin
    header('Access-Control-Allow-Origin: *');
}

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
// also accept form-encoded fallback
if (!$data) {
    $data = $_POST;
}

// Honeypot: website field should be empty
if (!empty($data['website'])) {
    // silent success for bots
    echo json_encode(['success' => true]);
    exit;
}

// Check API key if configured
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? ($headers['authorization'] ?? '');
$apiKey = '';
if ($authHeader) {
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $apiKey = trim($matches[1]);
    }
}
if (!empty($config['SERVER_API_KEY'])) {
    if (empty($apiKey) || $apiKey !== $config['SERVER_API_KEY']) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Unauthorized']);
        exit;
    }
}

// Basic validation
$errors = [];
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
if ($name === '') $errors[] = 'Name is required';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required';
if (strlen($message) < 10) $errors[] = 'Message must be at least 10 characters';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode('; ', $errors)]);
    exit;
}

// Compose email
$to = $config['EMAIL_TO'];
$subject = '[Website Inquiry] ' . ($data['tourType'] ?? 'General Inquiry');
$body = "New contact form submission:\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: " . ($data['phone'] ?? '') . "\n";
$body .= "Language: " . ($data['language'] ?? '') . "\n";
$body .= "Tour Type: " . ($data['tourType'] ?? '') . "\n";
$body .= "Group Size: " . ($data['groupSize'] ?? '') . "\n";
$body .= "Dates: " . ($data['dates'] ?? '') . "\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$body .= "Time: " . date('c') . "\n";

$headers_mail = 'From: ' . ($config['EMAIL_FROM']) . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// Use SMTP if configured, otherwise fallback to mail()
$mailSent = false;
if (!empty($config['SMTP_HOST'])) {
    // basic SMTP send using stream sockets (AUTH LOGIN)
    function send_smtp($host, $port, $user, $pass, $from, $to, $subject, $body, $headers = []) {
        $errno = 0; $errstr = '';
        $conn = stream_socket_client('ssl://' . $host . ':' . $port, $errno, $errstr, 10);
        if (!$conn) return false;
        stream_set_timeout($conn, 10);
        $res = fgets($conn, 512);

        $send = function($cmd) use ($conn) {
            fwrite($conn, $cmd . "\r\n");
            return fgets($conn, 512);
        };

        $ehlo = $send("EHLO localhost");
        // AUTH LOGIN
        $send("AUTH LOGIN");
        $send(base64_encode($user));
        $send(base64_encode($pass));

        $send("MAIL FROM: <{$from}>");
        $send("RCPT TO: <{$to}>");
        $send("DATA");
        $headerLines = "From: {$from}\r\n" . implode("\r\n", $headers) . "\r\n" . "Subject: {$subject}\r\n" . "MIME-Version: 1.0\r\n" . "Content-Type: text/plain; charset=UTF-8\r\n";
        $data = $headerLines . "\r\n" . $body . "\r\n.";
        $send($data);
        $send("QUIT");
        fclose($conn);
        return true;
    }

    $smtpHost = $config['SMTP_HOST'];
    $smtpPort = $config['SMTP_PORT'] ?: 465;
    $smtpUser = $config['SMTP_USER'];
    $smtpPass = $config['SMTP_PASS'];
    $smtpHeaders = [
        'Reply-To: ' . $email,
    ];
    $mailSent = @send_smtp($smtpHost, $smtpPort, $smtpUser, $smtpPass, $config['EMAIL_FROM'], $to, $subject, $body, $smtpHeaders);
} else {
    $mailSent = @mail($to, $subject, $body, $headers_mail);
}

// Save submission to file
try {
    $submissionsFile = $config['SUBMISSIONS_FILE'];
    $dir = dirname($submissionsFile);
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    $entry = [
        'name' => $name,
        'email' => $email,
        'phone' => $data['phone'] ?? '',
        'language' => $data['language'] ?? '',
        'tourType' => $data['tourType'] ?? '',
        'groupSize' => $data['groupSize'] ?? '',
        'dates' => $data['dates'] ?? '',
        'message' => $message,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'time' => date('c')
    ];
    $existing = [];
    if (file_exists($submissionsFile)) {
        $txt = file_get_contents($submissionsFile);
        $existing = json_decode($txt, true) ?: [];
    }
    $existing[] = $entry;
    file_put_contents($submissionsFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
} catch (Exception $e) {
    // ignore file write errors
}

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Sent']);
} else {
    // still return success if mail failed but saved to file
    echo json_encode(['success' => true, 'message' => 'Recorded (mail may have failed)']);
}
