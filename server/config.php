<?php
// server/config.php
// Copy this file to config.local.php and edit values. Keep secrets out of version control.

return [
    // If set, the endpoint will require this API key in Authorization: Bearer <key>
    'SERVER_API_KEY' => getenv('SERVER_API_KEY') ?: '',

    // Allowed origins (comma-separated) — requests with other Origin will be rejected
    'ALLOWED_ORIGINS' => explode(',', getenv('ALLOWED_ORIGINS') ?: ''),

    // Email settings (used with PHP mail() by default). Change to SMTP/PHPMailer if needed.
    'EMAIL_TO' => getenv('EMAIL_TO') ?: 'you@yourdomain.com',
    'EMAIL_FROM' => getenv('EMAIL_FROM') ?: 'noreply@yourdomain.com',
    // Optional SMTP settings. If SMTP_HOST is set, contact.php will use direct SMTP to send mail.
    'SMTP_HOST' => getenv('SMTP_HOST') ?: '',
    'SMTP_PORT' => getenv('SMTP_PORT') ?: '',
    'SMTP_USER' => getenv('SMTP_USER') ?: '',
    'SMTP_PASS' => getenv('SMTP_PASS') ?: '',
    'SMTP_SECURE' => getenv('SMTP_SECURE') ?: 'ssl', // 'ssl' or 'tls'

    // File storage path for submissions (must be writable by webserver)
    'SUBMISSIONS_FILE' => __DIR__ . '/data/submissions.json',

    // If you want server-side reCAPTCHA verification, set the secret here
    'RECAPTCHA_SECRET' => getenv('RECAPTCHA_SECRET') ?: '',

    // Rate limit (requests per IP per minute) — set 0 to disable
    'RATE_LIMIT_PER_MIN' => intval(getenv('RATE_LIMIT_PER_MIN') ?: 10),
];
