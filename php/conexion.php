<?php
    // datos para la conexion a mysql
   $usuario     = "root@localhost";
   $password    = "1234";
   $servidor    = "localhost";
   $basededatos = "bd_registro"; //nombre de la BD

   // creación de la conexión a la base de datos con mysql_connect()
   $conexion = mysqli_connect($servidor, $usuario, $password) or die (".::No se ha podido conectar al servidor de Base de datos::.");

   // Selección del a base de datos a utilizar
   $db = mysqli_select_db( $conexion, $basededatos ) or die ( ".::Upps! Pues va a ser que no se ha podido conectar a la base de datos::." );
   mysqli_close($conexion);
?>