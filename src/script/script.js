$(document).ready(function() {

/* ----------  Menu Setup in all pages ------------- */
function setupMenu() {

$('#home_button').click( function() {
	window.location = "./index.php";  		
  	});
$('#team_button').click( function() {
	window.location = "./team.php";  		
  	});

$('#project_button').click( function() {
	window.location = "./project.php";  		
  	});

$('#about_button').click( function() {
	window.location = "./about.php";  		
  	});

$('#subscibe').click( function() {
	window.location = "./secure/dosubscribe.php";  		
  	});

$('#org_name').click( function() {
	window.location = "./index.php";  		
  	});

}

/* ---------- header login And register setup ------------- */
function setupLoginDialog() {

$('#logout-button').click( function() {
	window.location = "./logout.php";  		
  	});
 
$('#login-button').click( function() {
	var dialogdiv = $('#login-dialog');
	if (dialogdiv.css('display') == 'none') {
		dialogdiv.show();
		$('#loginwrapper').show();
		setTimeout(function() {
			dialogdiv.css('top', '70px');
  			}, 20);
  		}
  	});

$('#register-button').click( function() {
	var dialogdiv = $('#register-dialog');
	if (dialogdiv.css('display') == 'none') {
		dialogdiv.show();
		$('#loginwrapper').show();
		setTimeout(function() {
  				dialogdiv.css('top', '70px');
  			}, 20);
  		}
  	});

$('#loginwrapper').click( function() {
  	var dialogdiv = $('#login-dialog');
  	if (dialogdiv.css('display') == 'block') {
  		dialogdiv.css('top', '-300px');
  		setTimeout(function() {
  				dialogdiv.hide();
  				$('#loginwrapper').hide();
  			}, 300);
  		}
  		var dialogdiv1 = $('#register-dialog');
  		if (dialogdiv1.css('display') == 'block') {
  			dialogdiv1.css('top', '-600px');
  			setTimeout(function() {
  				dialogdiv1.hide();
  				$('#loginwrapper').hide();
  			}, 300);
  		}
  	});	
}

/* ---------- header Registration validation ------------- */

function setupRegistrationValidate() {

	$('#name').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#email').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#password').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#confirmpassword').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#phone').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#comment').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });


$('#registerForm').submit( function () {
	var toReturn = true;

	if ($('#password').val() == '') {
		toReturn = false;
		$('#password').addClass('validationerror');
	}

	if ($('#password').val() != $('#confirmpassword').val()) {
		toReturn = false;
		$('#confirmpassword').addClass('validationerror');
	}

	var email = $('#email').val();
  		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
  			toReturn = false;
  			$('#email').addClass('validationerror');
  		}
  		if ($('#name').val() == '') {
  			toReturn = false;
  			$('#name').addClass('validationerror');
  		}

  		var phone = $('#phone').val();
  		if (/^(\d)+$/.test(phone) == false) {
  			toReturn = false;
  			$('#phone').addClass('validationerror');
  		}
  		if ($('#comment').val() == '') {
  			toReturn = false;
  			$('#comment').addClass('validationerror');
  		}

  		return toReturn;
  	});
  }

/* ---------- header login validation ------------- */

function loginValidate() {

    $('#leuid').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#lpassword').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });

$('#subForm').submit( function () {
	var toReturn = true;

 		if ($('#leuid').val() == '') {
  			toReturn = false;
  			$('#leuid').addClass('validationerror');
  		}
  		if ($('#lpassword').val() == '') {
  			toReturn = false;
  			$('#lpassword').addClass('validationerror');
  		}
  		return toReturn;
  	});
  }

function reloginValidate() {

    $('#releuid').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });
    $('#relpassword').keyup( function() {
    	$(this).removeClass('validationerror'); 
    });

$('#resubForm').submit( function () {
	var toReturn = true;

 		if ($('#releuid').val() == '') {

  			toReturn = false;
  			$('#releuid').addClass('validationerror');
  		}
  		if ($('#relpassword').val() == '') {
  			toReturn = false;
  			$('#relpassword').addClass('validationerror');
  		}
  		return toReturn;
  	});
  }

/* ------- only for index.php ----------------- */

function subscribeValidate() {
	$('#subscibe_form').submit( function () {
	var toReturn = true;
	var sub_email = $('#subemail').val();
  		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sub_email) == false) {
  			toReturn = false;
  			$('#subemail').addClass('validationerror');
  		}
 
  		if ($('#subemail').val() == '') {
  			toReturn = false;
  			$('#subemail').addClass('validationerror');
  		}
  		return toReturn;
});
}
/* ---------------------------- */

  subscribeValidate();
  loginValidate();
  reloginValidate();
  setupLoginDialog();
  setupRegistrationValidate();
  setupMenu();
});

