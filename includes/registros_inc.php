<?php
if (isset($_POST["submit"])){

    $nombre=$_POST["nombre"];
    $nickname=$_POST["nickname"];
    $email = $_POST["email"];
    $pwd=$_POST["pwd"];
    $pwd2=$_POST["pwd2"];

    require_once 'dbh_inc.php';
    require_once 'functions_inc.php';

    if (vacioRegistro($nombre,$nickname,$email,$pwd,$pwd2) !== false){
        header("location: ../registro.php?error=vacioRegistro");
        exit();
    }
    if (invalidNick($nickname) !== false){
        header("location: ../registro.php?error=invalidNick");
        exit();
    }
    if (invalidEmail($email) !== false){
        header("location: ../registro.php?error=invalidEmail");
        exit();
    }
    if (pwdMatch($pwd,$pwd2) !== false){
        header("location: ../registro.php?error=pwdMatch");
        exit();
    }
    if (nickExiste($conn, $nickname, $email) !== false){
        header("location: ../registro.php?error=nickExiste");
        exit();
    }

    crearUsuario($conn,$nombre,$nickname,$email,$pwd);
}else{
    header("location: ../registro.php");
    exit();
}