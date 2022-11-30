<?php

  const TOKEN = '5937589873:AAFub2em64G3k105LLMIPCAKhs0Zy0C5P9k';
 
  const CHATID = '-841611332';
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $fileSendStatus = '';
  $textSendStatus = '';
  $msgs = [];
   
  if (!empty($_POST['name']) && !empty($_POST['last_name']) && !empty($_POST['email']) && !empty($_POST['phone'])) {
     
    $txt = "";
     
    if (isset($_POST['name']) && !empty($_POST['name'])) {
        $txt .= "First Name: " . strip_tags(trim(urlencode($_POST['name']))) . "%0A";
    }

    if (isset($_POST['last_name']) && !empty($_POST['last_name'])) {
      $txt .= "Last Name: " . strip_tags(trim(urlencode($_POST['last_name']))) . "%0A";
    }

    if (isset($_POST['email']) && !empty($_POST['email'])) {
      $txt .= "Email: " . strip_tags(trim(urlencode($_POST['email']))) . "%0A";
    }
    
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Phone: " . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
  
    if (isset($_POST['theme']) && !empty($_POST['theme'])) {
        $txt .= "Subject: " . strip_tags(urlencode($_POST['theme']));
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
    if( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
      echo json_encode('SUCCESS');
    } else {
      echo json_encode('ERROR');
    }
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}
?>