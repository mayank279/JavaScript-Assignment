function user(username, password, firstName, lastName, gender, addressLine1, addressLine2){
	this.username=username,
	this.password=password;
	this.firstName=firstName,
	this.lastName=lastName,
	this.gender=gender,
	this.addressLine1=addressLine1,
	this.addressLine2=addressLine2
}
function registerUser(){
	var newUser= new user();
	newUser.username=document.querySelector("#username").value;
	newUser.password=document.querySelector("#password").value;
	newUser.firstName=document.querySelector("#firstName").value;
	newUser.lastName=document.querySelector("#lastName").value;
	newUser.gender=document.querySelector("#gender").value;
	newUser.addressLine1=document.querySelector("#addressLine1").value;
	newUser.addressLine2=document.querySelector("#addressLine2").value;
	var error="";

	if (newUser.username.match(/(\w{6,15})$/)  == null) {
		error+= "<br/>Invalid username";
	}
	else if (newUser.password.match(/(\w{3,15})$/)  == null) {
		error+= "<br/>Invalid password ";
	}
	else if (newUser.firstName.match(/(\w{3,15})$/)  == null) {
		error+= "<br/>Invalid First name ";
	}
	else if (newUser.lastName.match(/(\w{3,15})$/)  == null) {
		error+= "<br/>Invalid Last name";
	}
	else if (newUser.gender!=="Male" && newUser.gender!=="Female") {
		error+= "<br/>Select valid gender";
	}
	else if (newUser.addressLine1.match(/^[a-zA-Z0-9\s,'-]{6,50}$/)  == null) {
		error+= "<br/>Invalid entry in address line 1";
	}
	else{
		localStorage.clear();
		//localStorage.setItem('newUser.username',JSON.stringify(newUser));
		var username=localStorage.getItem('newUser.username');
		if (username === null) {
			localStorage.setItem(newUser.username,JSON.stringify(newUser));
			var username=localStorage.getItem('newUser.username');
			console.log(username);
			redirect();
		}
		else{
			error="Please choose a different username or email id already registered";
		}
	}	
	if (error!=="") {
		document.querySelector('#errorMsg').innerHTML=error;
		document.querySelector('#error').style.visibility="visible";
	}
	console.log(error);
}
function redirect(){
	window.location="login.html";
}