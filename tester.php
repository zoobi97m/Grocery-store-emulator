<?php
   if ( session_id()=="")
  {
    session_start();
    //echo "hello";
  
 
    }

    $val;
      
    if(! isset($_SESSION['power']))//first time request
    {
        $_SESSION['power'] = "first time use ";
    }
    
    else 
    {
        $_SESSION['power'] = "been there before";
    }
    
   

  
  
  
  
  
  
  
  
    $_SESSION['count']+=1;
   $v =   $_SESSION['count'];
    $_SESSION['this_session'] = session_id();
    echo $_SESSION['power']." The count value is: ". $v;
    if( $_SESSION['count'] == 10)
    {
       session_regenerate_id(FALSE);
    session_unset();
    }
    //session_unset();
    //session_destroy();
    
?>