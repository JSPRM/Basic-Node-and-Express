<?php

function vacioRegistro($nombre,$nickname,$email,$pwd,$pwd2){
    $r;
    if (empty($nombre) || empty($nickname) || empty($email) || empty($pwd) || empty($pwd2)){
        $r = true;
    }
    else{
        $r = false;
    }
    return $r;
}

function invalidNick($nickname){
    $r;
    if (!preg_match("/^[a-zA-Z0-9]*$/", $nickname)){
        $r = true;
    }
    else{
        $r = false;
    }
    return $r;
}

function invalidEmail($email){
    $r;
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $r = true;
    }
    else{
        $r = false;
    }
    return $r;
}

function pwdMatch($pwd,$pwd2){
    $r;
    if ($pwd !== $pwd2){
        $r = true;
    }
    else{
        $r = false;
    }
    return $r;
}

function nickExiste($conn,$nickname,$email){  
    $sql = "SELECT * FROM usuarios WHERE usuariosNickname = ? OR usuariosEmail = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../registro.php?error=stmtFailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $nickname,$email);
    mysqli_stmt_execute($stmt);

    $r = mysqli_stmt_get_result($stmt);
    if ($row = mysqli_fetch_assoc($r)){
        return $row;
    }else{
        $r = false;
        return $r;
    }
    mysqli_stmt_close($stmt);
}

function crearUsuario($conn,$nombre,$nickname,$email,$pwd){  
    $sql = "INSERT INTO usuarios (usuariosNombre,usuariosNickname,usuariosEmail,usuariosPwd) VALUES (?,?,?,?);";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../registro.php?error=stmtFailed");
        exit();
    }

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "ssss", $nombre, $nickname, $email, $hashedPwd);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    header("location: ../registro.php?error=none");
}


function vacioIngreso($username,$pwd){
    $r;
    if (empty($username) || empty($pwd)){
        $r = true;
    }
    else{
        $r = false;
    }
    return $r;
}

function loginUser($conn, $username, $pwd){
    $nickExiste = nickExiste($conn,$username,$username);

    if ($nickExiste === false) {
        header("location: ../ingresar.php?error=Error");
        exit();
    }

    $pwdHashed = $nickExiste["usuariosPwd"];
    $checkPwd = password_verify($pwd, $pwdHashed);

    if ($checkPwd === false){
        header("location: ../ingresar.php?error=Error");
        exit();
    }
    else if ($checkPwd === true){
        session_start();
        $_SESSION["usuarioid"] = $nickExiste["usuariosId"];
        $_SESSION["usuarionickname"] = $nickExiste["usuariosNickname"];
        header("location: ../index.php#productos");
        exit();
    }

}