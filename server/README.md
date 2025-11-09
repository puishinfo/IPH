# Contact endpoint (PHP) — server/README.md

Place the `server/` directory on your shared hosting (outside webroot if possible) or inside a folder served by PHP.

Quick setup

1. Copy `config.php` to `config.local.php` and set values or export environment variables (SERVER_API_KEY, EMAIL_TO, EMAIL_FROM, ALLOWED_ORIGINS).
2. Ensure `server/data/` is writable by the webserver user (where submissions.json will be stored).
3. Put `contact.php` at a public path (e.g., `/api/contact.php`) or configure your webserver to route `/api/contact` to it.
4. Restart PHP/Apache if necessary.

Example nginx (proxy) snippet if you proxy to PHP-FPM:

location /api/contact.php {
    fastcgi_pass unix:/run/php/php8.1-fpm.sock; # adjust for your PHP-FPM socket/version
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME /path/to/project/server/contact.php;
}

Environment variables (recommended):

- SERVER_API_KEY=your_api_key_here
- ALLOWED_ORIGINS=https://yourdomain.com
- EMAIL_TO=you@yourdomain.com
- EMAIL_FROM=noreply@yourdomain.com
- RECAPTCHA_SECRET=... (if used)

Test with curl:

curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello there"}'

PHPMailer (recommended)
-----------------------
If you want more reliable SMTP (STARTTLS, better error handling, attachments), install PHPMailer via Composer in the `server/` folder:

1. SSH into your host and change to the `server/` directory.
2. Run:

```bash
composer require phpmailer/phpmailer
```

After this, the `contact.php` script will automatically use PHPMailer for SMTP if `vendor/autoload.php` is present.

