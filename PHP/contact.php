<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // تأكد من تضمين autoload

$mail = new PHPMailer(true);

try {
    // SMTP إعدادات
    $mail->isSMTP(); // تفعيل SMTP
    $mail->Host = 'smtp.gmail.com'; // خادم SMTP
    $mail->SMTPAuth = true; // تفعيل المصادقة
    $mail->Username = 'ahmedmijdo2@gmail.com'; // بريدك الإلكتروني
    $mail->Password = 'your-app-password'; // كلمة مرور التطبيق
    $mail->SMTPSecure = 'tls'; // نوع الأمان
    $mail->Port = 587; // المنفذ

    // المستلم
    $mail->setFrom('your-email@gmail.com', 'Your Name'); // البريد والاسم الخاص بك
    $mail->addAddress('recipient@example.com'); // البريد الذي تريد إرسال الرسالة إليه

    // محتوى البريد
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email sent using PHPMailer.';
    
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>