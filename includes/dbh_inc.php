<?php

$serverName = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dbName = "proyectophp"; /*Nombre BD en phpadmin*/

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dbName);

if(!$conn){
    die("Conexión fallida: " . mysqli_connect_error());
}