<?php


    $host = "aa1fuebc25vdvnx.csr7pmx6tvv6.us-east-1.rds.amazonaws.com";
    $database = "uts";
    $user  = "uts";
    $pass = "internet";
    $connection = mysqli_connect($host,$user,$pass,$database) or die("Could not connect to server");


$query_string = "select * from film";
$result = mysqli_query($connection, $query_string);//the result variable contains a mysqli_result object

$num_rows = mysqli_num_rows($result); //returns the number of rows as a variable

//run the query and assign the return values to $result


 //check the number of records returned using $num_rows


$options= "<option>List of the films</option>";
if($num_rows > 0)
{
   $a_row = mysqli_fetch_assoc($result);
   while($a_row)
   {
      $options = $options."\n"."<option>". $a_row["name"]."</option>";
   }
}
//check if the $num_rows has values


	//add while loop to fetch the values using mysqli_fetch_assoc


	 //use


//close the connection
mysqli_close($connection);
 echo $options;

?>
