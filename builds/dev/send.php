<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$sitename = "teslatoys.ru";
	$mail = "webdb81@gmail.com";
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
	$headers .= "From: teslatoys.ru\r\n";
	$td1_style = "border: 1px solid #000; max-width: 140px; padding: 5px 10px; font-weight: bold; background-color: #e8e8e8;";
	$td2_style = "border: 1px solid #000; max-width: 460px; min-width: 300px; padding: 5px 10px;";

	$msg_top = "
		<html>
			<body>
				<table style=\"border-collapse: collapse;\">
					<tr>
						<td style=\"$td1_style\">Имя</td>
						<td style=\"$td2_style\">$name</td>
					</tr>";
	$msg_bot = "
				</table>
			</body>
		</html>";
	$msg_phone = "
					<tr>
						<td style=\"$td1_style\">Телефон</td>
						<td style=\"$td2_style\">$phone</td>
					</tr>";





	if(!empty($_POST['callback'])) {
		$subject = "=?utf-8?B?" . base64_encode("Заявка с teslatoys.ru") . "?=";
		$message = $msg_top.$msg_phone.$msg_bot;
	}
	if(!empty($_POST['callback'])) {
		
			mail($mail, $subject, $message, $headers) or print "Не могу отправить письмо !!!";
		
	}
	unset($name,$phone);
?>