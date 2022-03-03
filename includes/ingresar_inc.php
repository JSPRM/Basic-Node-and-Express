<?php

if (isset($_POST["submit"])){

    $username = $_POST["name"];
    $pwd = $_POST["pwd"];

    require_once 'dbh_inc.php';
    require_once 'functions_inc.php';

    if (vacioIngreso($username,$pwd) !== false){
        header("location: ../ingresar.php?error=vacioIngreso");
        exit();
    }

    loginUser($conn, $username, $pwd);
}
else {
    header("location: ../ingresar.php");
    exit();
}