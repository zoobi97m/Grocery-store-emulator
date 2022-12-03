<?php
session_start();
// isset method to check if the variable exists 
// check if the user submitted some data in the textbox
if (isset ($_GET['formdata'])) {
// check if the data is recorded from the previous submission
// !(true)=false
   if (!isset($_SESSION['data'])) {
      echo "There was no old value for data<br>";
      echo "There have been no changes in data<br>";
      // write a code here to initialize the session counter
   } else {
      // write a code here to increment the counters

      // modify echo line below to display the content of old data 
	   echo "old data = ".your code here."<br>";
	   // modify echo line below to show the counter value on the page
      echo "times changed = ".your_code_here."<br>";
   }
   
   // write a code below to assign the new values submitted from formdata to the session data 
   $_SESSION['data'] = your_code_here;
   
   // display the current data
   echo "current data = ".yuor_code_here."<br>";
} else {
   echo "No data was submitted<br>";
}
?>