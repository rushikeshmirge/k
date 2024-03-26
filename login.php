<?php
include 'db.php';

if(isset($_POST['login'])) {
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];

    $sql = "SELECT id, password FROM user WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if(password_verify($password, $row['password'])) {
            echo "Login success";
            // Start session, set session variables, redirect user, etc.
        } else {
            echo "Invalid password";
        }
    } else {
        echo "No user found with that email address";
    }

    $conn->close();
}
?>