function order()
{
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var mail = document.forms["messageForm"]["email"].value;
	var content = document.forms["messageForm"]["message"].value;

	if (fname == "" && lname == "" && mail == "" && content == ""){
		alert("Empty fields found. Please fill the form.");
	}
	else if(fname==""){
		alert( "Please provide your Firstname!" );
		fname.focus() ;
        return false;
	}
	else if(lname==""){
		alert( "Please provide your Lastname!" );
		lname.focus() ;
        return false;
	}
	else if(mail==""){
		alert( "Please provide your Email!" );
		mail.focus() ;
        return false;
	}
	else if(content==""){
		alert( "Please provide your Message!" );
		content.focus() ;
        return false;
	}
	else{
		alert("Sent successfully");
	}
}