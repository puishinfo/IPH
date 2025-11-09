<?php
// server/contact.php
// Simple contact endpoint in PHP. Configure via server/config.local.php or environment variables.

// TEMPORARY DEBUG: write an early marker so we can confirm this file is executed
$earlyLogDir = __DIR__ . '/logs';
if (!is_dir($earlyLogDir)) {
    @mkdir($earlyLogDir, 0755, true);
}
@file_put_contents($earlyLogDir . '/contact-debug.txt', "[" . date('c') . "] contact.php executed\n", FILE_APPEND);

header('Content-Type: application/json');

$config = require __DIR__ . '/config.php';
// allow override with local config file
if (file_exists(__DIR__ . '/config.local.php')) {
    $local = require __DIR__ . '/config.local.php';
    $config = array_merge($config, $local);
}

// Debug helpers: when 'DEBUG' => true in config.local.php, enable error display and log exceptions to server/logs/contact-error.log
$logDir = __DIR__ . '/logs';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logFile = $logDir . '/contact-error.log';
if (!empty($config['DEBUG'])) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

set_exception_handler(function ($e) use ($logFile, $config) {
    $msg = "[" . date('c') . "] Exception: " . $e->getMessage() . "\n" . $e->getTraceAsString() . "\n\n";
    @file_put_contents($logFile, $msg, FILE_APPEND);
    http_response_code(500);
    header('Content-Type: application/json');
    if (!empty($config['DEBUG'])) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Server error']);
    }
    exit;
});

set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    // convert warnings/notices to exceptions so they are caught by exception handler
    throw new ErrorException($errstr, $errno, 0, $errfile, $errline);
});

// CORS / origin check
// CORS / origin check
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($config['ALLOWED_ORIGINS'])) {
    // If no Origin header provided (server-side curl/CLI), allow the request but don't send CORS header.
    if ($origin === '') {
        // allow server/CLI requests
        $allowOriginHeader = false;
    } else {
        if (!in_array($origin, $config['ALLOWED_ORIGINS'])) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Origin not allowed']);
            exit;
        }
        $allowOriginHeader = true;
    }
    if ($allowOriginHeader) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
} else {
    // fallback: allow all origins
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

// reCAPTCHA verification (optional)
if (!empty($config['RECAPTCHA_SECRET'])) {
    $token = trim($data['recaptchaToken'] ?? $data['g-recaptcha-response'] ?? '');
    if (empty($token)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'reCAPTCHA token missing']);
        exit;
    }

    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $postData = http_build_query([
        'secret' => $config['RECAPTCHA_SECRET'],
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ]);

    $opts = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'content' => $postData,
            'timeout' => 10
        ]
    ];
    $context  = stream_context_create($opts);
    $result = @file_get_contents($verifyUrl, false, $context);
    $resp = $result ? json_decode($result, true) : null;
    if (!$resp || empty($resp['success'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed']);
        exit;
    }
    // If v3, optionally check score
    if (isset($resp['score'])) {
        $min = isset($config['RECAPTCHA_MIN_SCORE']) ? floatval($config['RECAPTCHA_MIN_SCORE']) : 0.5;
        if ($resp['score'] < $min) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'reCAPTCHA score too low']);
            exit;
        }
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

// Determine envelope/sender address. When using SMTP many providers require the
// MAIL FROM / envelope-from to match the authenticated SMTP user. Use the SMTP
// user as the envelope sender when SMTP is configured; otherwise fall back to
// configured EMAIL_FROM.
$envelopeFrom = (!empty($config['SMTP_HOST']) && !empty($config['SMTP_USER'])) ? $config['SMTP_USER'] : $config['EMAIL_FROM'];

$headers_mail = 'From: ' . ($envelopeFrom) . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// Use PHPMailer via Composer if available, otherwise use SMTP stream sender, otherwise fallback to mail()
$mailSent = false;
$smtpConfigured = !empty($config['SMTP_HOST']);

// Try PHPMailer if vendor autoload exists
$autoloadPaths = [__DIR__ . '/vendor/autoload.php', __DIR__ . '/../vendor/autoload.php'];
$autoload = null;
foreach ($autoloadPaths as $p) {
    if (file_exists($p)) { $autoload = $p; break; }
}

if ($autoload) {
    require_once $autoload;
    try {
        // use PHPMailer
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        if ($smtpConfigured) {
            $mail->isSMTP();
            $mail->Host = $config['SMTP_HOST'];
            $mail->SMTPAuth = true;
            $mail->Username = $config['SMTP_USER'];
            $mail->Password = $config['SMTP_PASS'];
            $mail->SMTPSecure = !empty($config['SMTP_SECURE']) ? $config['SMTP_SECURE'] : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = $config['SMTP_PORT'] ?: 465;

            // When DEBUG is enabled, capture PHPMailer SMTP debug output to our
            // contact-error.log so we can diagnose authentication and TLS issues
            if (!empty($config['DEBUG'])) {
                $mail->SMTPDebug = 2; // low-level client/server conversation
                $mail->Debugoutput = function($str, $level) use ($logFile) {
                    @file_put_contents($logFile, "[" . date('c') . "] PHPMailer debug [" . $level . "]: " . $str . "\n", FILE_APPEND);
                };
            }
        }
        // Use the SMTP user as the From/envelope when SMTP is configured and a
        // specific SMTP user is provided. This avoids "Sender address rejected"
        // errors on hosts that require the From to match the authenticated user.
        $fromAddress = ($smtpConfigured && !empty($config['SMTP_USER'])) ? $config['SMTP_USER'] : $config['EMAIL_FROM'];
        $mail->setFrom($fromAddress);
        $mail->addAddress($to);
        $mail->addReplyTo($email);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        $mailSent = true;
    @file_put_contents($logFile, "[" . date('c') . "] PHPMailer: send() succeeded\n", FILE_APPEND);

        // Autoresponse to submitter if email valid
        if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $reply = new PHPMailer\PHPMailer\PHPMailer(true);
            if ($smtpConfigured) {
                $reply->isSMTP();
                $reply->Host = $config['SMTP_HOST'];
                $reply->SMTPAuth = true;
                $reply->Username = $config['SMTP_USER'];
                $reply->Password = $config['SMTP_PASS'];
                $reply->SMTPSecure = !empty($config['SMTP_SECURE']) ? $config['SMTP_SECURE'] : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
                $reply->Port = $config['SMTP_PORT'] ?: 465;
            }
            $reply->setFrom($config['EMAIL_FROM']);
            $reply->addAddress($email);
            $reply->Subject = 'Thank you for contacting Inner Peace Holidays';
            $reply->Body = "Dear {$name},\n\nThank you for getting in touch. We have received your message and will respond shortly.\n\nBest regards,\nInner Peace Holidays";
            $reply->send();
        }
    } catch (Exception $e) {
        // PHPMailer failed, log the exception for diagnostics and fallback
        $msg = "[" . date('c') . "] PHPMailer Exception: " . $e->getMessage() . "\n" . $e->getTraceAsString() . "\n\n";
        @file_put_contents($logFile, $msg, FILE_APPEND);
        $mailSent = false;
    }
} elseif ($smtpConfigured) {
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
    if ($mailSent) {
        @file_put_contents($logFile, "[" . date('c') . "] SMTP: send_smtp() succeeded for host {$smtpHost}:{$smtpPort}\n", FILE_APPEND);
    } else {
        @file_put_contents($logFile, "[" . date('c') . "] SMTP send_smtp() reported failure for host {$smtpHost}:{$smtpPort}\n", FILE_APPEND);
    }
    // autoresponse
    if ($mailSent && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $replyBody = "Dear {$name},\n\nThank you for getting in touch. We have received your message and will respond shortly.\n\nBest regards,\nInner Peace Holidays";
        @send_smtp($smtpHost, $smtpPort, $smtpUser, $smtpPass, $config['EMAIL_FROM'], $email, 'Thank you for contacting Inner Peace Holidays', $replyBody, ['Reply-To: ' . $config['EMAIL_FROM']]);
    }
} else {
    $mailSent = @mail($to, $subject, $body, $headers_mail);
    if ($mailSent) {
        @file_put_contents($logFile, "[" . date('c') . "] PHP mail() returned true\n", FILE_APPEND);
    } else {
        @file_put_contents($logFile, "[" . date('c') . "] PHP mail() returned false\n", FILE_APPEND);
    }
    if ($mailSent && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        @mail($email, 'Thank you for contacting Inner Peace Holidays', "Dear {$name},\n\nThank you for getting in touch. We have received your message and will respond shortly.\n\nBest regards,\nInner Peace Holidays", 'From: ' . $config['EMAIL_FROM'] . "\r\nReply-To: " . $config['EMAIL_FROM']);
    }
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
