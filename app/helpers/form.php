<?php
  #print_r( "Testing!" );

  # form data
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $full_name = $first_name . ' ' . $last_name;

  #print_r( 'Name: ' . $full_name );
  #print_r( 'Email: ' . $email );
  #print_r( 'Subject: ' . $subject );
  #print_r( 'Message: ' . $message );

  $email_from = $email;

  $email_body = "You have received a new message from the user $full_name.\n\n" .
    "Here is the message:\n $message";

  $to = "rich@caddolakebayoutours.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email_from \r\n";

  function IsInjected( $str ) {
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );

    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  if ( IsInjected( $email_from ) ) {
    echo "Bad email value!";
    exit;
  }



  mail( $to, $subject, $email_body, $headers);

  header("Location: /thank-you");
  die();
?>