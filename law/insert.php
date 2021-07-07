<?php

$d = file_get_contents("php://input");
$m = json_decode($d,true);

//Connection
require_once("conn.php");

// sql

$sql = "INSERT INTO user(name,email,password) VALUES(?,?,?)";
$result = $conn->prepare($sql);
if($result){
    $result->bind_param("sss", $name,$email,$password);
    //values are come from
    $name = $m['name'];
    $email = $m['email'];
    $password = $m['password'];
    $result->execute();
    echo json_encode("yes");
}else{
    echo json_encode("no");
}
?>