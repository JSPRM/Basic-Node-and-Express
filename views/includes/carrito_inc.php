<?php

if (isset($_POST['add_to_cart'])) {

    if(isset($_SESSION['cart'])) {
        $session_array_id = array_column($_SESSION['cart'], 'id');

        if(!in_array($_GET['id'], $session_array_id)){
            $session_array = [
                "id" => $_GET['id'],
                "name" => $_POST['name'],
                "price" => $_POST['price'],
                "quantity" => $_POST['quantity'],
                "image" => $_POST['image']
            ];

            $_SESSION['cart'][] = $session_array;

        }
        

    }else{

        $session_array = [
            "id" => $_GET['id'],
            "name" => $_POST['name'],
            "price" => $_POST['price'],
            "quantity" => $_POST['quantity'],
            "image" => $_POST['image']
        ];
        
        $_SESSION['cart'][] = $session_array;
    }
}

if(isset($_GET['action'])){
    if($_GET['action'] == "clearall"){
        unset($_SESSION['cart']);
    }
    if($_GET['action']=="remove"){
        foreach($_SESSION['cart'] as $key => $value){
            if($value['id'] == $_GET['id']){
                unset($_SESSION['cart'][$key]);
            }
        }
    }
}