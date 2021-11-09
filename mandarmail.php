<?php

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$mensaje=$_POST['mensaje'];
$correo=$_POST['correo'];

echo "Mi nombre es $nombre $apellido $mensaje";

$destinatario="ramonero27@gmail.com";
$asunto="Recomendar lugar";
$headers='From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" . 
        'X-Mailer: PHP/' . phpversion();


mail($destinatario,$asunto,$mensaje,$headers);