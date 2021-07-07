<?php
$conn = new mysqli("localhost","root","","bvdu");
if($conn->connect_error){
    die("Sorry Connection Failed");
}
?>