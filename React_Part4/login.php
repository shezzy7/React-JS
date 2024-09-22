<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($password === "123") {
        echo "<h2>Login successfully!</h2>";
    } else {
        echo "<h2>Invalid password!</h2>";
    }
} else {
    echo "<h2>Invalid request method.</h2>";
}
?>
