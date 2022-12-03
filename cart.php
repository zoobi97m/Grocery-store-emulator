<?php

session_start();
   $resultss;

    $piid=[];

    foreach ($_POST as $pid)
    {
        $piid[] = $pid;
    }
    /*
    if(isset($piid[2]))
    {
       $tester2 = $piid[2];

       echo $tester2;
       exit();

    }
    */


    $a = $piid[1];
    $host = "awseb-e-xjas2iihcp-stack-awsebrdsdatabase-5b5hvzqpzmvn.c4kd3wyzxsf5.us-east-1.rds.amazonaws.com";
    $database = "assignment1";
    $user  = "uts";
    $pass = "internet";
    $connection = mysqli_connect($host,$user,$pass,$database) or die("Could not connect to server");

    $query_string = "select * from products WHERE (product_id = $a)";

    $result = mysqli_query($connection, $query_string);//the result variable contains a mysqli_result object

    $num_rows = mysqli_num_rows($result); //returns the number of rows as a variable


    if(!isset($_SESSION["table_data"])  )//first time
    {
       $_SESSION['counter'] = 0;
       $_SESSION['checkout_default'] = "\n"."<tr>"."<td class = 'top_checkout'>"."Product Name"."</td>"."<td class = 'top_checkout'>"."Unit Price"."</td>"."<td class = 'top_checkout' >"."Amount"."</td>"."</tr>";
       $_SESSION['default'] = "\n"."<tr>"."<td class = 'top'>"."Product Name"."</td>"."<td class = 'top'>"."Unit Price"."</td>"."<td class = 'top'>"."Unit quantity"."</td>"."<td class = 'top'>"."Unit stock"."</td>"."<td class = 'top' >"."Amount"."</td>"."</tr>";
       $_SESSION['total_price'] = 0;
        if($num_rows > 0)
        {

           while($a_row = mysqli_fetch_assoc($result))
           {
               $_SESSION['latter_sub_checkout'][ $_SESSION['counter']]= "\n"."<tr>"."<td class = 'bottom_checkout'>". $a_row["product_name"]."</td>"."<td class = 'bottom_checkout'>"."$". $a_row["unit_price"]."</td>"."<td class = 'bottom_checkout' id = $a>";

               $_SESSION['unit_price'][ $_SESSION['counter']] = $a_row["unit_price"];
                $_SESSION['latter_sub'][ $_SESSION['counter']]= "\n"."<tr>"."<td class = 'bottom'>". $a_row["product_name"]."</td>"."<td class = 'bottom'>"."$". $a_row["unit_price"]."</td>"."<td class = 'bottom'>". $a_row["unit_quantity"]."</td>"."<td class = 'bottom'>". $a_row["in_stock"]."</td>"."<td class = 'bottom' id = $a>";
                $_SESSION['amount_sub'][ $_SESSION['counter']] = $piid[0]."</td>"."</tr>";
           }


        }


        $_SESSION["table_data"] = $_SESSION['default'].$_SESSION['latter_sub'][ $_SESSION['counter']].$_SESSION['amount_sub'][ $_SESSION['counter']];


         $_SESSION['pid'][$_SESSION['counter']]= $piid[1];// first elelemt in the pid array
         $_SESSION['amount'][$_SESSION['counter']] = $piid[0];//string
        $_SESSION['total_price'] = $_SESSION['amount'][$_SESSION['counter']] * $_SESSION['unit_price'][ $_SESSION['counter']];
        $_SESSION["table_data_checkout"] = $_SESSION['checkout_default'].$_SESSION['latter_sub_checkout'][ $_SESSION['counter']].$_SESSION['amount_sub'][ $_SESSION['counter']];

    }
    else

    {
        for($i=0;$i<=$_SESSION['counter'];$i++)
        {



                if( $piid[1] == $_SESSION['pid'][$i] )//if he's ordering the same product
                {
                    $t = $_SESSION['amount'][$i];
                    $s =  $_SESSION['pid'][$i];

                    $_SESSION['total_price'] = $_SESSION['total_price'] +($piid[0] * $_SESSION['unit_price'][ $_SESSION['counter']]);


                    $temp = $_SESSION['amount'][$i] +  $piid[0];

                    $_SESSION['amount'][$i] = $temp;
                    //$_SESSION['pid'] [$i]= $piid[1];//string
                    $_SESSION['amount_sub'][$i]= str_replace("$t","$temp",$_SESSION['amount_sub'][$i]);
                    echo "<h3 id = 'unit_amount' >$temp</h3>";
                    echo "<h6 id = 'unit_identification' >$s</h6>";



                      unset($_SESSION["table_data"]);
                        $_SESSION["table_data"] = $_SESSION['default'];
                        unset($_SESSION["table_data_checkout"]);
                        $_SESSION["table_data_checkout"] = $_SESSION['checkout_default'];

                    for($j=0;$j<=$_SESSION['counter']+1;$j++)
                    {
                        $_SESSION["table_data"] = $_SESSION["table_data"]. $_SESSION['latter_sub'][$j].$_SESSION['amount_sub'][$j];
                        $_SESSION["table_data_checkout"] = $_SESSION["table_data_checkout"].$_SESSION['latter_sub_checkout'][ $j].$_SESSION['amount_sub'][$j];


                    }
                   break;

                }
                else
                {
                    if($i == $_SESSION['counter'])//none so far, make a new row and record it
                    {
                         $index = $_SESSION['counter']+1;
                        $_SESSION['pid'] [$i+1] = $piid[1];//string
                        $_SESSION['amount'][$i+1] = $piid[0];//string
                        $holder = $piid[1];//can be changed to piid[1]
                        while($a_row = mysqli_fetch_assoc($result))
                        {
                            $_SESSION['latter_sub_checkout'][ $i+1]= "\n"."<tr>"."<td class = 'bottom_checkout'>". $a_row["product_name"]."</td>"."<td class = 'bottom_checkout'>"."$". $a_row["unit_price"]."</td>"."<td class = 'bottom_checkout' id = $a>";
                            $_SESSION['unit_price'][ $i+1] = $a_row["unit_price"];
                            $_SESSION['latter_sub'][$i+1] = "\n"."<tr>"."<td class = 'bottom'>". $a_row["product_name"]."</td>"."<td class = 'bottom'>"."$". $a_row["unit_price"]."</td>"."<td class = 'bottom'>". $a_row["unit_quantity"]."</td>"."<td class = 'bottom'>". $a_row["in_stock"]."</td>"."<td class = 'bottom' id = $holder>";
                            $_SESSION['amount_sub'][$i+1] = $piid[0]."</td>"."</tr>";
                        }
                        $_SESSION['total_price'] = $_SESSION['total_price'] +($piid[0] * $_SESSION['unit_price'][ $i+1]);

                        unset($_SESSION["table_data"]);
                        unset($_SESSION["table_data_checkout"]);
                        $_SESSION["table_data"] = $_SESSION['default'];
                        $_SESSION["table_data_checkout"] = $_SESSION['checkout_default'];

                    for($j=0;$j<=$index;$j++)
                    {
                        $_SESSION["table_data"] = $_SESSION["table_data"]. $_SESSION['latter_sub'][$j].$_SESSION['amount_sub'][$j];
                        $_SESSION["table_data_checkout"] = $_SESSION["table_data_checkout"].$_SESSION['latter_sub_checkout'][ $j].$_SESSION['amount_sub'][$j];

                    }
                        $_SESSION['flag'] =  $_SESSION['counter']+1;
                    }

                }



        }

        if(isset($_SESSION['flag']))
        {
            $_SESSION['counter'] = $_SESSION['flag'];
            unset($_SESSION['flag']);
        }


    }

   $_SESSION['count']+=1;

    if( $_SESSION['count'] == 20 )
    {
       session_regenerate_id(FALSE);
    session_unset();
    }
    mysqli_close($connection);


  echo $_SESSION["table_data"];
  echo "Total Price: $".$_SESSION["total_price"];



?>
