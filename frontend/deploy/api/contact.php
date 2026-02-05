<?php
// Configuración de headers para CORS y JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit();
}

// Configuración SMTP - Hostinger
$smtp_host = 'smtp.hostinger.com';
$smtp_port = 465;
$smtp_user = 'msalinas@biofilia.com.mx';
$smtp_password = 'Saem@2618';
$to_email = 'msalinas@biofilia.com.mx';

// Obtener datos del formulario
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos inválidos']);
    exit();
}

// Extraer campos
$nombre = htmlspecialchars($data['nombre'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars($data['telefono'] ?? 'No proporcionado');
$tipoTelefono = htmlspecialchars($data['tipoTelefono'] ?? 'N/A');
$empresa = htmlspecialchars($data['empresa'] ?? 'No proporcionada');
$cargo = htmlspecialchars($data['cargo'] ?? 'No proporcionado');
$servicios = isset($data['servicios']) ? implode(', ', $data['servicios']) : 'No especificado';
$descripcion = htmlspecialchars($data['descripcion'] ?? 'No proporcionada');

// Validar campos requeridos
if (empty($nombre) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nombre y email son requeridos']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit();
}

// Crear contenido del email
$subject = "Nuevo contacto de $nombre - " . ($empresa !== 'No proporcionada' ? $empresa : 'Sin empresa');

$html_body = "
<html>
<body style='font-family: Arial, sans-serif; padding: 20px;'>
    <h2 style='color: #3dae2b;'>Nuevo mensaje de contacto - Biofilia CoCreativa</h2>
    <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Nombre:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$nombre</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Email:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$email</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Teléfono:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$telefono ($tipoTelefono)</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Empresa:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$empresa</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Cargo:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$cargo</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Servicios de interés:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$servicios</td>
        </tr>
        <tr>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'><strong>Descripción del proyecto:</strong></td>
            <td style='padding: 10px; border-bottom: 1px solid #eee;'>$descripcion</td>
        </tr>
    </table>
    <p style='color: #666; font-size: 12px; margin-top: 20px;'>
        Este mensaje fue enviado desde el formulario de contacto de biofilia.com.mx
    </p>
</body>
</html>
";

// Headers del email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $smtp_user\r\n";
$headers .= "Reply-To: $email\r\n";

// Intentar enviar con mail() primero (más simple en Hostinger)
$mail_sent = @mail($to_email, $subject, $html_body, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    // Si mail() falla, intentar con SMTP directo
    try {
        $smtp_result = send_smtp_mail($smtp_host, $smtp_port, $smtp_user, $smtp_password, $to_email, $subject, $html_body, $email);
        if ($smtp_result) {
            echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
        } else {
            throw new Exception('SMTP send failed');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Por favor intenta más tarde.']);
    }
}

function send_smtp_mail($host, $port, $user, $pass, $to, $subject, $body, $reply_to) {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);
    
    $socket = @stream_socket_client(
        "ssl://$host:$port",
        $errno,
        $errstr,
        30,
        STREAM_CLIENT_CONNECT,
        $context
    );
    
    if (!$socket) {
        return false;
    }
    
    // Leer respuesta inicial
    fgets($socket, 512);
    
    // EHLO
    fputs($socket, "EHLO $host\r\n");
    while ($line = fgets($socket, 512)) {
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 512);
    
    fputs($socket, base64_encode($user) . "\r\n");
    fgets($socket, 512);
    
    fputs($socket, base64_encode($pass) . "\r\n");
    $auth_response = fgets($socket, 512);
    
    if (substr($auth_response, 0, 3) != '235') {
        fclose($socket);
        return false;
    }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM:<$user>\r\n");
    fgets($socket, 512);
    
    // RCPT TO
    fputs($socket, "RCPT TO:<$to>\r\n");
    fgets($socket, 512);
    
    // DATA
    fputs($socket, "DATA\r\n");
    fgets($socket, 512);
    
    // Headers y cuerpo
    $message = "From: $user\r\n";
    $message .= "To: $to\r\n";
    $message .= "Reply-To: $reply_to\r\n";
    $message .= "Subject: $subject\r\n";
    $message .= "MIME-Version: 1.0\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "\r\n";
    $message .= $body;
    $message .= "\r\n.\r\n";
    
    fputs($socket, $message);
    fgets($socket, 512);
    
    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return true;
}
?>
