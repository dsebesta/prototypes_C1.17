<?php
require 'mysql_connect.php';

$query = "SELECT `name`,`email`,`age` FROM students";

$result = mysqli_query($conn, $query);

if (!empty($result) && mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output[] = $row;
        print("<pre>".print_r($row, true)."</pre>");
    }
}


?>
