function toDo(description, date, category, isPending,  reminderDate, isPublic, image){
	this.description=description;
	this.date=date;
	this.category=category;
	this.isPending=isPending;
	this.isPublic=isPublic;
	//this.isReminder=isReminder;
	this.reminderDate=reminderDate;
	this.image=image;
}

		
function addItem(){
	var error="";

	var newItem= new toDo();
	newItem.description=document.querySelector("#description").value;
	newItem.date=document.querySelector('#date').value;
	newItem.category="category3";
	//newItem.category=document.querySelector('#category').value;
	var markAsDone=document.querySelector('#markAsDone').value;
	if (markAsDone==="Yes") {
		newItem.isPending=false;
	}
	else if (markAsDone==="No") {
		newItem.isPending=true;
	}
	else{
		error+="Invalid selection for mark as done";
	}
	//newItem.isReminder=document.querySelector('#isReminder').value;
	newItem.reminderDate=document.querySelector('#reminderDate').value;
	if (document.querySelector("#isPublicYes").checked){
		newItem.isPublic="Yes";
	} else if (document.querySelector("#isPublicNo").checked) {
		newItem.isPublic="No";
	}
	
	//newItem.image=document.querySelector('#image').value;
	if (newItem.description.match(/([\w ]{6,50})$/)  == null) {
		error+= "<br/>Invalid description";
	}
	else if (newItem.date==='dd/mmm/yyyy'){
		error+= "<br/>Please select to do date";
	}
	else if (reminderDate==='dd/mmm/yyyy') {
		error+="<br/> Please select reminder date";
	}
	
	if (error==="") {
		var name="mayankList";

		var toDoItemArray=localStorage.getItem(name);
		console.log(toDoItemArray);
		if (toDoItemArray === null) {
			localStorage.setItem(name,JSON.stringify(newItem));
			var username=localStorage.getItem(name);
			console.log(username);
			redirect();
		}
		else{
			toDoItemArray=JSON.parse(toDoItemArray);
			toDoItemArray.push(newItem);
			localStorage.removeItem(name);
			localStorage.setItem(name,JSON.stringify(toDoItemArray));
			console.log(JSON.parse(localStorage.getItem(name)));

		}
	}


	



}