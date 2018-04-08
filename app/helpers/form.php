<?php

  # send email
  $errors = '';

  $myemail = 'taran.tpdesign@gmail.com';//<-----Put Your email address here.

  if ( empty($_POST['first_name'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']) ) {
         $errors .= "\n Error: We need more information.";
  }

  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $whole_name = $first_name . $last_name;
  $email_address = $_POST['email'];
  $subject_line = $_POST['subject'];
  $message = $_POST['message'];

  if ( !preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address) ) {
      $errors .= "\n Error: Invalid email address";
  }

  if ( empty( $errors ) ) {
    $to = $myemail;
    $email_subject = "Contact form submission: $whole_name, $subject_line";
    $email_body = "You have received a new message. ".
      "Here are the details:\n".
      "Name: $whole_name \n ".
      "Email: $email_address\n".
      "Message: \n $message";

    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";

    mail( $to, $email_subject, $email_body, $headers);

    //redirect to the 'thank you' page
    header('Location: contact.html');
  }
?>