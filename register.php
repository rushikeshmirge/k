<?php
include 'db.php';

if(isset($_POST['register'])) {
    $email = $conn->real_escape_string($_POST['email']);
    $number = $conn->real_escape_string($_POST['number']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt password

    $sql = "INSERT INTO user (email, number, password) VALUES ('$email', '$number', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>