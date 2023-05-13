<?php
         // datos para la conexion a mysql
        $db_host        ="localhost";
        $db_user        ="root";
        $db_password    ="1234";
        $db_name        ="nombre_de_base_de_datos";
        $db_table_name  ="nombre_de_tabla";
        $db_connection  = mysqli_connect($db_host, $db_user, $db_password);

        if (!$db_connection) {
            die('.::No se ha podido conectar a la base de datos::.');
        }
        $subs_name  =$_POST['nombre'];
        $subs_last  =$_POST['apellido'];
        $subs_email =$_POST['email'];

        $resultado  =mysqli_query("SELECT * FROM ".$db_table_name." WHERE Email = '".$subs_email."'", $db_connection);

        if (mysqli_num_rows($resultado)>0)
        {

        header('Location: Fail.html');

        } else {
            
            $insert_value = 'INSERT INTO `' . $db_name . '`.`'.$db_table_name.'` (`Nombre` , `Apellido` , `Email`) VALUES ("' . $subs_name . '", "' . $subs_last . '", "' . $subs_email . '")';

        mysqli_select_db($db_name, $db_connection);
        $retry_value = mysqli_query($insert_value, $db_connection);

        if (!$retry_value) {
        die('Error: ' . mysqli_error());
        }
            
        header('Location: Success.html');
        }

        mysqli_close($db_connection);
		
?>