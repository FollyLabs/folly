<html>
<head>
<title>Folly Labs </title>
<link rel="stylesheet" type="text/css" href="./css/common.css">
<link rel="stylesheet" type="text/css" href="./css/form_design.css">
<link rel="stylesheet" type="text/css" href="./css/header_design.css">
<link rel="stylesheet" type="text/css" href="./css/footer_design.css">
<link rel="stylesheet" type="text/css" href="./css/menu_bar.css">
<link rel="stylesheet" type="text/css" href="./css/reset.css">
<link rel="stylesheet" type="text/css" href="./css/index_node.css">
<link rel="stylesheet" type="text/css" href="./css/team_node.css">
<link rel="stylesheet" type="text/css" href="./css/relogin_node.css"
</head>

<body>

<div id="container">

<!-- Header -->
<div id="topheader">
<div class="padding">

<div id="org_name" >
<font color="#1a74a2">Folly Labs </font>| <font color="#4f8a1f">Learn Best By Doing</font>
</div>

<div id="login-button" >Login</div>
<div id="register-button" >Contact Us</div>

<div id="login-dialog">
	<div style="padding-bottom: 20px; text-align:center;"><font color="#dc4646">Login</font></div>
	<form method="post" action="./secure/dologin.php" id="subForm">
	<div><input name="uid" id="leuid" type="text" placeholder="UserId"/></div>
   	<div><input name="password" id="lpassword" type="password" placeholder="Password"/></div>
	<div><input name="login" id="login" type="submit" value="Log In"/></div> 
<!--	<div><a id = "forgot-password"href="./include/forgotpassword.php" style="text-decoration: none; font-size: 12pt; color: blue;">Forgot Password</a></div> -->

	</form>
</div>
				
<div id="register-dialog">
	<div style="padding-bottom: 20px; text-align:center;"><font color="#dc4646">Contact Us</font></div>
	<form method="post" action="./secure/docontact.php" id="registerForm">
	<div><input name="name" id="name" type="text" placeholder="Name"/></div>
	<div><input name="email" id="email" type="text" placeholder="Email"></div>
	<div><input name="phone" id="phone" type="text" placeholder="Contact number"/></div>
        <div><input name="comment" id="comment" type="text" placeholder="Write your message here.."/></div>
        <div><input name="register" id="register" type="submit" value="Register"/></div> 
        </form>
</div>

</div>
</div>

<!-- Center -->

<div id="main">
<div class="padding">

