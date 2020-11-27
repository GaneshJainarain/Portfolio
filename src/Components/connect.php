<?php

    if (isset($_POST['submit'])) {
        $firstName = $_POST['firstname'];
        $lastName = $_POST['lastname'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
    }


    $mailTo = "GaneshJainarain23@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have Received an e-mail from ".$firstName. $lastName.".\n\n".$subject;



    mail($mailTo, $txt, $headers);

    header("Location: connect.php?mailsend");

?>