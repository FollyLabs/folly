<?php
include("include/header.php");
?>

<table border="0" width="100%">
<tr><td>
	<table align="right" cellspacing="5">
	<tr><td ><div id="home_button" class="me" >Home </div> </td>
	<td>	<div id="team_button" class="button"> Team </div>		</td>
	<td >	<div id="about_button" class="button"> About </div></td></tr>
	</table>
</td></tr>
<tr><td>
 	<hr>
</td></tr>
<tr><td>
<!-- ------------ main window to code ----------- -->

 <div id="Window" style="width:100%;">
 <div id="subscibe-window" align="justify">

Folly Labs is a team of some pass out student of NIT Durgapur. We are committed to the ideal that this Team can and should provide innovative Products. </br></br>
<div id="subscibe-box">
<font color="#dc4646" size="5pt">Live Updated : </font></br></br>
Enter Your Email Address and We'll Let You Know As Soon As Product Gets Ready.</br></br>

<form method="post" action="./secure/dosubscribe.php" id="subscibe_form">
<div><input name="subemail" id="subemail" type="text" placeholder="Email"/></div>

<div><input name="subscibe" id="lesubscribe" type="submit" value="Subscribe Me" class="special" /></div>
<!--  <div id="subscibe" class="me">submit</div>  -->
</form>

</br>
</div>
</div>

<div id="wallpic" >
</br></br>
 <img src="./img/logo.jpg"  align="center" height="300px" width="100%">
</div>
</div>

 </td></tr>
</table>

<?php
include("include/footer.php");
?>
