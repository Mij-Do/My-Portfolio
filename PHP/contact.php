<?php
// لعرض الأخطاء
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // تأكد من أن هذا المسار صحيح

// استخدم متغير بيئي أو قاعدة بيانات مشفرة لتخزين كلمة المرور
$mailPassword = getenv('ahmedcr7$22#23#'); // مثال على استخدام متغير بيئي

$mail = new PHPMailer(true); // إنشاء كائن PHPMailer

try {
    // إعدادات SMTP (تغيير كلمة المرور إلى المتغير)
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mailto:ahmedmijdo2@gmail.com';
    $mail->Password = $mailPassword;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // ... باقي الكود كما هو ...

    // إرسال البريد
    $mail->send();
    echo 'رسالتك قد تم إرسالها بنجاح.';
    header('Location: thank-you.php'); // إعادة توجيه إلى صفحة الشكر
} catch (Exception $e) {
    // تسجيل الخطأ في ملف سجل (اختياري)
    error_log("Error sending email: " . $e->getMessage());

    // عرض رسالة خطأ مفصلة للمستخدم
    echo "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى. تفاصيل الخطأ: " . $e->getMessage();
}
?>