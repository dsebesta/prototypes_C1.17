<?php

require 'mysql_connect.php';

print_r($_POST);


$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$password = md5($_POST['password']);


$query = "INSERT INTO `students` SET
              `name` = '$name',
              `email` = '$email',
              `age` = '$age',
              `password` = '$password'";

$result = mysqli_query($conn, $query);

print('rows inserted: '.mysqli_affected_rows($conn).'<br>');

?>