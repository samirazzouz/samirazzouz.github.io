<?php
// require_once('PHPmailer/PHPMailerAutoload.php');
 ini_set('display_errors', '1');
// $mail = new PHPMailer();

// $mail->isSMTP();
// $mail->Host = 'smtp.gmail.com';
// $mail->SMTPAuth = true;
// $mail->Username = 'sambrancowitz@gmail.com';
// $mail->Password = 'papademos81';
// $mail->SMTPSecure = 'tls';
// $mail->Port = 465;

// $mail->From = 'toz';
// $mail->AddAddress('azzouz.sam@gmail.com');
// $mail->Subject = 'lol';
// $mail->Body = 'looaijzelrkjazlkejr kazekr jazekljrlkazejrlkzjlak';

// if (!$mail->send()) {
// 	$data = array('success' => false, 'message' => 'erreur');
// 	echo json_encode($data);
// 	exit;
// } else {
// 	$data = array('success' => true, 'message' => 'bien ouej');
// 	echo json_encode($data);
// }

mail('azzouz.sam@gmail.com', 'toz', 'a toz');