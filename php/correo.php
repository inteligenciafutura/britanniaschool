<?php
header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

try {

    // Obtener los datos del formulario a través de POST
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$preescolar = isset($_POST["preescolar"]) ? "Preescolar" : "";
$primaria = isset($_POST["primaria"]) ? "Primaria" : "";
$bachillerato = isset($_POST["bachillerato"]) ? "Bachillerato" : "";

// Construir el mensaje de correo
$mensaje = "Nombre: " . $nombre . "\n";
$mensaje .= "Teléfono: " . $telefono . "\n";
$mensaje .= "Email: " . $email . "\n";
$mensaje .= "Intereses: " . $preescolar . ", " . $primaria . ", " . $bachillerato;

    // Crear una instancia de la clase PHPMailer
    $mail = new PHPMailer(true);

    // Autenticación vía SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    // Configuración del servidor SMTP
    $mail->Host = "mail.britanniaschool.com.co"; // Cambia esto al servidor SMTP de tu proveedor de correo
    $mail->Port = 465; // Puerto SMTP (cambia según la configuración de tu proveedor)
    $mail->Username = "academicobritanniaschool@britanniaschool.com.co"; // Tu dirección de correo electrónico SMTP
    $mail->Password = "Eternidad2680@"; // Tu contraseña SMTP

    // Establecer el cifrado y seguridad
    $mail->SMTPSecure = 'ssl'; // Puedes cambiar a ENCRYPTION_SMTPS si es necesario

    // Configurar el charset y encoding
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Configurar el correo en formato HTML
    $mail->isHTML(true);
    $mail->Subject = 'Matriculas';
    $mail->Body = $mensaje;
    $mail->AltBody = 'Nuevo correo';

    // Dirección del destinatario (cambia a la dirección de correo deseada)
    $mail->addAddress('academicobritanniaschool@britanniaschool.com.co');

    // Enviar el correo electrónico
    $mail->send();
    echo "El correo se envió correctamente.";
} catch (Exception $e) {
    echo "No se pudo enviar el correo. Error del remitente: " . $mail->ErrorInfo;
}
?>
