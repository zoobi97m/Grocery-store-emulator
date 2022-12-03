<?php
    session_start();
    $heading =  "<p1 style='font-weight: bold;'>"."Thank you for ordering with us, here is your order summary:"."</p1>";
    $confirmation_table = "<table cellspacing = '5' width = '300' id = 'confirmation_table'>". "\n".
    "<tr>"."<td class = 'lefters'>". "<p1 style='font-weight: bold;'>"."Name:"."</p1>"."</td>"."<td>".$_POST['name_tf']."</td>"."</tr>". "\n".
    "<tr>"."<td class = 'lefters'>"."<p1 style='font-weight: bold;'>"."Address:"."</p1>"."</td>"."<td>".$_POST['address_tf']."</td>"."</tr>". "\n".
    "<tr>"."<td class = 'lefters'>"."<p1 style='font-weight: bold;'>"."Suburb:"."</p1>"."</td>"."<td>".$_POST['suburb_tf']."</td>"."</tr>". "\n".
    "<tr>"."<td class = 'lefters'>"."<p1 style='font-weight: bold;'>"."State:"."</p1>"."</td>"."<td>".$_POST['state_tf']."</td>"."</tr>". "\n".
    "<tr>"."<td class = 'lefters'>"."<p1 style='font-weight: bold;'>"."Country:"."</p1>"."</td>"."<td>".$_POST['country_tf']."</td>"."</tr>". "\n".
    "<tr>"."<td class = 'lefters'>"."<p1 style='font-weight: bold;'>"."Email:"."</p1>"."</td>"."<td>".$_POST['email_tf']."</td>"."</tr>". "\n".
    "</table>";
    echo $heading."<br>";
    $details =  "<p1 style='font-weight: bold;'>"."Your personal Details: "."</p1>";
    echo "<br>".$details;
    $order_details =  "<p1 style='font-weight: bold;'>"."Your Order Details: "."</p1>";
    echo $confirmation_table;
       echo "<br>".$order_details;
    echo "<table cellspacing = '5' width = '300' >".
        $_SESSION["table_data_checkout"] .
    "\n"."<tr>"."<td class = 'price_final'>"."Total Price: $".$_SESSION["total_price"]."</td>"."</tr>".
    "\n"."</table>";

    session_regenerate_id(FALSE);
    session_unset();
    exit();

?>
    