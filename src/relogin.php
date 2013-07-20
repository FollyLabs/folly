<?php
include("include/header.php");
?>

<table border="0" width="100%">
<tr><td>
	<table align="right" cellspacing="5">
	<tr><td ><div id="home_button" class="button" >Home </div> </td>
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
</br></br>
<table width="100%">
<tr><td align="center">
<div class="error_msg">Your Username / Password is incorrect</div>
</td></tr>
<tr><td>
</br>
</td></tr>
<tr><td align="center">
<div id="relogin-dialog">
	<div style="padding-bottom: 20px; text-align:center;"><font color="#4c97be">Please Login Again</font></div>
	<form method="post" action="./secure/dorelogin.php" id="resubForm">
	<div><input name="reuid" id="releuid" type="text" placeholder="UserId"/></div>
   	<div><input name="repassword" id="relpassword" type="password" placeholder="Password"/></div>
	<div><input name="relogin" id="relogin" type="submit" value="Log In"/></div> 
<!--	<div><a id = "forgot-password"href="./include/forgotpassword.php" style="text-decoration: none; font-size: 12pt; color: blue;">Forgot Password</a></div> -->

	</form>
</div>
</td></tr>
</table>
</div>

<!----------- main Window Over Here -------------->
 </td></tr>
</table>

<?php
include("include/footer.php");
?>
