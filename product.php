<?php


    $host = "awseb-e-xjas2iihcp-stack-awsebrdsdatabase-5b5hvzqpzmvn.c4kd3wyzxsf5.us-east-1.rds.amazonaws.com";
    $database = "assignment1";
    $user  = "uts";
    $pass = "internet";
    $connection = mysqli_connect($host,$user,$pass,$database) or die("Could not connect to server");

$piid;
foreach ($_POST as $pid)
{
    $piid = $pid;
}
$query_string = "select * from products WHERE (product_id = $piid)";
$result = mysqli_query($connection, $query_string);//the result variable contains a mysqli_result object

$num_rows = mysqli_num_rows($result); //returns the number of rows as a variable

//run the query and assign the return values to $result


 //check the number of records returned using $num_rows
// $options= "<h>i am product.php i sent this correctly</h>";
/*

$options= "<option>List of the films</option>";
*/

$resultss;
if($num_rows > 0)
{

   while($a_row = mysqli_fetch_assoc($result))
   {
      $resultss = "\n"."<tr>"."<td class = 'left'>"."Product Name: "."</td>"."<td>". $a_row["product_name"]."</td>"."</tr>".
       "\n"."<tr>"."<td class = 'left'>"."Unit Price: "."</td>"."<td>"."$". $a_row["unit_price"]."</td>"."</tr>".
       "\n"."<tr>"."<td class = 'left'>"."Unit quantity: "."</td>"."<td>". $a_row["unit_quantity"]."</td>"."</tr>".
       "\n"."<tr>"."<td class = 'left'>"."Unit Stock: "."</td>"."<td>". $a_row["in_stock"]."</td>"."</tr>";

   }
}


//check if the $num_rows has values


	//add while loop to fetch the values using mysqli_fetch_assoc


	 //use

//close the connection
mysqli_close($connection);
echo "<h1 id = 'unit_iden' >$piid</h1>";

echo $resultss;




?>
