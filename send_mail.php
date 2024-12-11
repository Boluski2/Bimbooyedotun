<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $selection = $_POST['selection'];
    $message = $_POST['message'];

    $to = "babatundebolu@gmail.com";
    $subject = "New Contact";
    
    // Properly construct the email headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Construct the email message body
    $body = "You have a new message from your website:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Selection: $selection\n";
    $body .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Email sent successfully";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong.";
    }

} else {
    http_response_code(403);
    echo "Access denied";
}

?>
