<!-- Ajax exmple with php -->
 
<html>
<style>
table,th,td {
  border : 1px solid black;
  border-collapse: collapse;
}
th,td {
  padding: 5px;
}
</style>
<body onload="showFilms();">

<form action=""> 
Select a film:
<select name="films" id="films">
</select>
</form>
<br>
 
<script>
function showFilms() 
{
  var xhttp =  new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("films").innerHTML = xhttp.responseText;
    }
};
 //add the missing code to get the films title from dbcode.php and add them to select html "films" using innerHTML
 
 //look to the previous exercise Ex2.html
  xhttp.open("GET", "dbcode.php", true);
  xhttp.send();
  
}
</script>

</body>
</html>
