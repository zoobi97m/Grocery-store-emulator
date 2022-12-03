<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>List the movies by year</h1><br>
        
        <form action = "" method = "post">
            
            
            <table cellspacing = "5" width = "350">  
                
                    <tr><td>Year made in or afer:</td><td><input type = "text" name = "made_in"></input><br></td></tr>
                    <tr><td>Year made before or in: </td><td><input type = "text" name = "made_before"></input><br></td></tr>
                 
                    <tr><td align = "right"><input type = "submit" align = "center" value = "Retrieve data"></td></tr>
            </table>

            
        </form>
    </body>
</html>

<?php

    $host = "localhost";
    $database = "uts";
    $user  = "uts";
    $pass = "internet";
    
    if($_SERVER["REQUEST_METHOD"] == 'POST')
    {
        if($_POST["made_in"] && $_POST["made_before"])
        {
            $made_in = $_POST["made_in"];
            $made_before = $_POST["made_before"];
    
            $connection = mysqli_connect($host,$user,$pass,$database) or die("Could not connect to server");
            $sql1= "SELECT * FROM  film WHERE (year >= $made_in AND year <= $made_before)";
              $sql = "SELECT * FROM film";
            //mysqli_query($connection, $sql1);
            $result_set = mysqli_query($connection, $sql1);
            
            
            $num_rows  = mysqli_num_rows($result_set);
            if ($num_rows > 0)
            {
                print "<table border = 0>";
                while ($a_row = mysqli_fetch_row($result_set))
                {
                    print "<tr>\n";
                        foreach($a_row as $field)
                        print "<td>$field</td>";
                    print "</tr>";
                    
                }
                print "</table>";
            }
            
            mysqli_close($connection);
        }
    }
?>