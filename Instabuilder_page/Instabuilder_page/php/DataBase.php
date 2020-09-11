<?php

require '../vendor/autoload.php';

use Medoo\Medoo;

function DB() {
    $hostname = '140.131.114.143';
    $username = 'root';
    $password = 'superman12334667';
    $db_name = 'instabuilder';

    try {
        $db = new PDO("mysql:host=" . $hostname . ";dbname=" . $db_name, $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        //PDO::MYSQL_ATTR_INIT_COMMAND 設定編碼
        //echo '連線成功';
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //錯誤訊息提醒
        $db->query("set names utf8mb4");
        return $db;
//    $db = null; //結束與資料庫連線
    } catch (PDOException $e) {
        //error message
        echo $e->getMessage();
    }
}

function DBuseMedoo() {
    $hostname = '140.131.114.143';
    $username = 'root';
    $password = 'superman12334667';
    $db_name = 'instabuilder';
// Initialize
    try {
        $database = new Medoo([
            'database_type' => 'mysql',
            'database_name' => $db_name,
            'server' => $hostname,
            'username' => $username,
            'password' => $password,
            "charset" => "utf8mb4",
        ]);
        return $database;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
?>



