function toDo(description, date, category, isPending, isReminder, reminderDate,isPublic, image){
	this.description=description;
	this.date=date;
	this.category=category;
	this.isPending=isPending;
	this.isReminder=isReminder;
	this.reminderDate=reminderDate;
	this.isPublic=isPublic;
	this.image=image;
}
function getList(){
	/*var newItem = new toDo();
	newItem.description="description";
	newItem.date="27/08/2018";
	newItem.category="category";
	newItem.isPending="No";
	newItem.isPublic="Yes";
	newItem.reminderDate="27/08/2018";*/
	var array= new Array();
	/*array.push(newItem);
	var newItem1= new toDo();
	newItem1.description="description1";
	newItem1.date="27/08/2018";
	newItem1.category="category";
	newItem1.isPending="No";
	newItem1.isPublic="No";
	newItem1.reminderDate="27/08/2018";
	array.push(newItem1);*/
	//localStorage.setItem('mayankList',JSON.stringify(array) );
	console.log	(array);
	var string="";
	var table = document.getElementById("toDoTable");
	array=JSON.parse(localStorage.getItem("mayankList"));
	for(var item in array){
		var row=table.insertRow(-1);
		var description=row.insertCell(0);
		var date=row.insertCell(1);
		var category=row.insertCell(2);
		var completed=row.insertCell(3);
		var reminderDate=row.insertCell(4);
		var public=row.insertCell(5);
		description.innerHTML=array[item].description;
		date.innerHTML=array[item].date;
		category.innerHTML=array[item].category;
		completed.innerHTML=array[item].isPending;
		reminderDate.innerHTML=array[item].reminderDate;
		public.innerHTML=array[item].isPublic;
		console.log(item);
	}
}