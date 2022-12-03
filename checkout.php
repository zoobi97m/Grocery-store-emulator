<?php
    session_start();
    
    echo $_SESSION["table_data_checkout"];
    echo "\n"."<tr>"."<td class = 'price_final'>"."Total Price: $".$_SESSION["total_price"]."</td>"."</tr>";

   //session_regenerate_id(FALSE);
      //session_unset();
      //exit();
        
?>