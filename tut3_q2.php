

<?php
    function message($income,$inhouse,$loans,$finances)
    {
        $totals = $inhouse+$loans+$finances;
        $perct = $totals / $income;
        $ratio = $perct *100;
        
        if($ratio <=35)
        {
            return "35% or less: looking good-relative to your income, your debt is at a managable level";
        }
        
        elseif($ratio >= 36 && $ratio < 50)
        {
            return "Opportunity to improve";
        }
        elseif($ratio>= 50 && $ratio <101)
        {
            return "<strong>"."TAKE ACTION"."</strong>";
        }
        
        elseif($ration > 100 )
        {
            return "<strong>"."YOU A BROKE ASS NIGGA"."</strong>";
        }
        
        
        else
        {
            return "Invalid input";
        }
    }
    $names = array();
    $incomes = array();
    $i_h_exps = array();
    $loanss = array();
    $finns = array();
    if($_SERVER["REQUEST_METHOD"] == 'POST')
    {
        if($_POST["name"] && $_POST["loans"] && $_POST["income"] && $_POST["in_house_exp"] && $_POST["finances"])
        {
            $names[] = $_POST["name"];
            $loans[] = $_POST["loans"];
            $incomes[] =$_POST["income"];
            $finss[] = $_POST["finances"];
            $i_h_exps[] = $_POST["in_house_exp"];
            echo $names[0]."!!!". message($incomes[0],$i_h_exps[0],$loanss[0],$finss[0]);
            
        }
        else
        {
  
            echo "Please fill in all fields";
            unset($names);
            unset($incomes);
            unset($i_h_exps);
            unset($loanss );
            unset($finns);
        }
        
        
        
    }
?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>Mark to grade letter</h1><br>
        
        <form action = "" method = "post">
            
            
            <table cellspacing = "5" width = "350">  
                
                    <tr><td>Name:</td><td><input type = "text" name = "name"></input><br></td></tr>
                    <tr><td>Income: </td><td><input type = "text" name = "income"></input><br></td></tr>
                    <tr><td>In house expenses:</td><td><input type = "text" name = "in_house_exp"></input><br></td></tr>
                    <tr><td>Loans: </td><td><input type = "text" name = "loans"></input><br></td></tr>
                    <tr><td>Finances:</td><td><input type = "text" name = "finances"></input><br></td></tr>
                    <tr><td align = "right"><input type = "submit" align = "center"></td></tr>
            </table>

            
        </form>
    </body>
</html>
