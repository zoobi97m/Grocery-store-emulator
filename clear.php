<?php
    session_start();
     $piid=[];

    foreach ($_POST as $pid)
    {
        $piid[] = $pid;
        echo $pid;
    }
    
    if(sizeof($piid)>0)
    {
      session_regenerate_id(FALSE);
      session_unset();
      exit();

    }
    
 

?>