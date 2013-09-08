//used to highlight different sections of the form
var pieceHolder = "";
function selectPiece(piecenum) 
{ 
	var piece = "p" + piecenum;
	var obj = document.getElementById(piece);
	if (obj.className == "pieceOn") return false;
	obj.className = (obj.className == "pieceOff") ? "pieceOn" : "pieceOff";
	if (pieceHolder != "") document.getElementById(pieceHolder).className = "pieceOff";
	pieceHolder = "p" + piecenum;
}

// Populates content inside of the glossary div
function glossary(event,type) {

	var g = document.getElementById('g');
	var c = document.getElementById('gContent');

	//get the position of the cursor
	if (window.event) { // IE
		x = window.event.clientX  + parseInt(document.body.scrollLeft);
		y = window.event.clientY + parseInt(document.body.scrollTop);
	} else { //NN 
		x = event.clientX + parseInt(document.body.scrollLeft);
		y = event.clientY + parseInt(document.body.scrollTop);
	}		  

	g.style.display = '';
	g.style.left = x + "px"; 
	g.style.top  = y + "px"; 
	g.style.zIndex = 10000;

	c.innerHTML = content[type];
	document.getElementById("gShadow").style.height = document.getElementById("gTable").offsetHeight;
	//document.getElementById("gShield").style.height = document.getElementById("gShadow").style.height
}

// Auto-tabs to next phone number textfield
var phone_field_length=0;
function TabNext(obj,event,len,next_field) {
	if (event == "down") {
		phone_field_length=obj.value.length;
	}
	else if (event == "up") {
		if (obj.value.length != phone_field_length) {
			phone_field_length=obj.value.length;
			if (phone_field_length == len) {
				next_field.focus();
			}
		}
	}
}

// Displays US or non-US address fields
function displayUS()
{
	var country = document.forms['paperMoney']['country'];
	//alert(country.options[country.selectedIndex].value);

	if (country.options[country.selectedIndex].value == "USA") {
	//alert("yes");
		document.getElementById("USinfo").style.display = 'block';
		document.getElementById("nonUSinfo").style.display = 'none';
	} else {
		document.getElementById("USinfo").style.display = 'none';
		document.getElementById("nonUSinfo").style.display = 'block';
	}
	
	//alert(document.getElementById("USinfo").style.display);
}



function clearState()
{
	document.forms["paperMoney"]["state"].value='';
}



function validateForm()
{

	var mandFields = '';

	var userName=document.forms["paperMoney"]["username"].value;

	if (!validateField(userName,'Please enter the User name')){
		highLightField('username',true);
		document.paperMoney.username.focus();
		return false;

	}
	else {
		highLightField('username',false);
	}



	if (!checkUserNameLength(userName,'User Name should be between 8 and 15 characters long')){
		highLightField('username',true);
		document.paperMoney.username.focus();
		return false;

	}
	else {
		highLightField('username',false);
	}

	if (!checkCharAndNumeral(userName,'Username must be a combination of letters and numbers')){
		highLightField('username',true);
		document.paperMoney.username.focus();
		return false;

	}
	else {
		highLightField('username',false);
	}

	if (checkIllegalChars(userName,'Username must not contain special characters')){
		highLightField('username',true);
		document.paperMoney.username.focus();
		return false;

	}
	else {
		highLightField('username',false);
	}


	var passwd=document.forms["paperMoney"]["password"].value;

	if (!validateField(passwd,'Please enter the password')){
		highLightField('password',true);
		document.paperMoney.password.focus();
		return false;

	}
	else {
		highLightField('password',false);
	}


	if (!checkPasswordLength(passwd,'Password should be between 7 and 15 characters long')){
		highLightField('password',true);
		document.paperMoney.password.focus();
		return false;

	}
	else {
		highLightField('password',false);
	}
	if (!checkCharAndNumeral(passwd,'Password must be a combination of letters and numbers')){
		highLightField('password',true);
		document.paperMoney.password.focus();
		return false;

	}
	else {
		highLightField('password',false);
	}
	
	if (checkIllegalChars(passwd,'Password must not contain special characters')){
		highLightField('password',true);
		document.paperMoney.password.focus();
		return false;

	}
	else {
		highLightField('password',false);
	}

	if (passwd==userName){
		validateField('','User Name and Password should not be the same');
		highLightField('password',true);
		highLightField('username',true);
		document.paperMoney.password.focus();
		return false;

	}
	else {
		//highLightField('confirmPassword',false);
		highLightField('password',false);
		highLightField('username',false);

	}	

	var cx=document.forms["paperMoney"]["confirmPassword"].value;

	if (!validateField(cx,'Please confirm the password')){
		highLightField('confirmPassword',true);
		document.paperMoney.confirmPassword.focus();
		return false;

	}
	else {
		highLightField('confirmPassword',false);
	}


	if (passwd!=cx){
		validateField('','Password mismatch');
		highLightField('password',true);
		highLightField('confirmPassword',true);
		document.paperMoney.confirmPassword.focus();
		return false;

	}
	else {
		//highLightField('confirmPassword',false);
		highLightField('password',false);
		highLightField('confirmPassword',false);

	}

	var x=document.forms["paperMoney"]["email"].value;

	if (!validateField(x,'Please enter the email address')){
		highLightField('email',true);
		document.paperMoney.email.focus();
		return false;

	}
	else {
		highLightField('email',false);
	}


	if (!checkEmail(x,'Invalid email address')){
		highLightField('email',true);
		document.paperMoney.email.focus();
		return false;

	}
	else {
		highLightField('email',false);
	}

	var cx=document.forms["paperMoney"]["confirmEmail"].value;

	if (!validateField(cx,'Please confirm the email address')){
		highLightField('confirmEmail',true);
		document.paperMoney.confirmEmail.focus();
		return false;

	}
	else {
		highLightField('confirmEmail',false);
	}

	if (x!=cx){
		validateField('','Email mismatch');
		highLightField('email',true);
		highLightField('confirmEmail',true);
		document.paperMoney.confirmEmail.focus();
		return false;

	}
	else {
		//highLightField('confirmPassword',false);
		highLightField('email',false);
		highLightField('confirmEmail',false);

	}


	var firstName=document.forms["paperMoney"]["firstName"].value;

	if (!validateField(firstName,'Please enter the First Name')){
		highLightField('firstName',true);
		document.paperMoney.firstName.focus();
		return false;

	}
	else {
		highLightField('firstName',false);
	}
	
	if (!checkCharsOnly(firstName,'First Name must contain only letters, spaces and hyphens')){
		highLightField('firstName',true);
		document.paperMoney.firstName.focus();
		return false;

	}
	else {
		highLightField('firstName',false);
	}
	

	var lastName=document.forms["paperMoney"]["lastName"].value;

	if (!validateField(lastName,'Please enter the Last Name')){
		highLightField('lastName',true);
		document.paperMoney.lastName.focus();
		return false;

	}
	else {
		highLightField('lastName',false);
	}

	if (!checkCharsOnly(lastName,'Last Name must contain only letters, spaces and hyphens')){
		highLightField('lastName',true);
		document.paperMoney.lastName.focus();
		return false;

	}
	else {
		highLightField('lastName',false);
	}


	var middleName=document.forms["paperMoney"]["middleName"].value;
	
	if(middleName!=null && middleName!=''){


		if (!checkCharsOnly(middleName,'Middle Name must contain only letters, spaces and hyphens')){
			highLightField('middleName',true);
			document.paperMoney.middleName.focus();
			return false;

		}
		else {
			highLightField('middleName',false);
		}
	
	}



	var x=document.forms["paperMoney"]["citizenship"].value;

	if (!validateField(x,'Please choose your country of citizenship')){
		return false;

	}



	var cx=document.forms["paperMoney"]["country"].value;

	if (!validateField(cx,'Please choose your country of residence')){
		return false;

	}
	var stMsg = 'Please enter a State';
	var zipMsg = 'Please enter the Postal Code';
	var cityId = 'city';
	var stateId = 'state';
	var zipId = 'zip';
	var phoneId = 'daytimePhone';
	var cntry = cx;
	if(cntry=='USA'){
		stMsg = 'Please choose a State';
		zipMsg = 'Please enter the Zip Code';
		cityId = 'cityu'
		stateId = 'stateu'
		zipId = 'zipu'
		phoneId = 'daytimePhoneu'
		setUSValues();
	}

	var x=document.forms["paperMoney"]["address1"].value;

	if (!validateField(x,'Please enter the Street Address')){
		highLightField('address1',true);
		document.paperMoney.address1.focus();
		return false;

	}
	else {
		highLightField('address1',false);
	}

	var city=document.forms["paperMoney"]["city"].value;


	
	if (!validateField(city,'Please enter the City')){		
		highLightField(cityId,true);
		if(cntry=='USA')
			document.paperMoney.cityu.focus();
		else
			document.paperMoney.city.focus();
			
		return false;

	}
	else {
		highLightField(cityId,false);
	}

	if (!checkCharsOnly(city,'City must contain only letters, spaces and hyphens')){
		highLightField(cityId,true);
		if(cntry=='USA')
			document.paperMoney.cityu.focus();
		else
			document.paperMoney.city.focus();
			
		return false;

	}
	else {
		highLightField(cityId,false);
	}



	var x=document.forms["paperMoney"]["state"].value;

	if (!validateField(x,stMsg)){
		highLightField(stateId,true);
		
		if(cntry=='USA')
			document.paperMoney.stateu.focus();
		else
			document.paperMoney.state.focus();
			
		return false;


	}
	else {
		highLightField(stateId,false);
	}

	var x=document.forms["paperMoney"]["zip"].value;


	if (!validateField(x,zipMsg)){
		highLightField(zipId,true);
		if(cntry=='USA')
			document.paperMoney.zipu.focus();
		else
			document.paperMoney.zip.focus();
			
		return false;	
		

	}
	else {
		highLightField(zipId,false);
	}

	if ((cntry=='USA') && !isZip(x)){
		validateField(null,'Please enter a valid Zip Code');		
		highLightField(zipId,true);	
		
		document.paperMoney.zipu.focus();		
			
		return false;	

	}
	else {
		highLightField(zipId,false);

	}

	var x=document.forms["paperMoney"]["daytimePhone"].value;

	if (!validateField(x,'Please enter the Primary Phone Number')){
		//alert ("phone:"+x);
		highLightField(phoneId,true);	
		
		if(cntry=='USA')
			document.paperMoney.Phone_1.focus();
		else
			document.paperMoney.daytimePhone.focus();
			
		return false;	

	}
	else {
		highLightField(phoneId,false);

	}
	

	if ((cntry=='USA') && (isNaN(x) || x.length != 10) ){	
		validateField(null,'Please enter a valid Phone Number');
		//alert ("phone:"+x);
		highLightField(phoneId,true);	
		
		document.paperMoney.Phone_1.focus();		
			
		return false;	

	}
	else {
		highLightField(phoneId,false);

	}	

}

function isZip(s) 
{

     
     reZip = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

     if (!reZip.test(s)) {          
          return false;
     }

return true;
}

function validateField(field, errField) {



	if (field==null || field=="")
	{

		showErrorMessage(errField);

		return false;
	}

	return true;

}

function checkEmail(field, errField) {



	if (!isEmailValid(field))
	{

		showErrorMessage(errField);

		return false;
	}

	return true;

}


function isEmailValid(str) {

	var at="@"
		var dot="."
			var lat=str.indexOf(at)
			var lstr=str.length
			var ldot=str.indexOf(dot)
			if (str.indexOf(at)==-1){
				//alert("Invalid E-mail ID")
				return false
			}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		////alert("Invalid E-mail ID")
		return false
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		//alert("Invalid E-mail ID")
		return false
	}

	if (str.indexOf(at,(lat+1))!=-1){
		//alert("Invalid E-mail ID")
		return false
	}

	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		//alert("Invalid E-mail ID")
		return false
	}

	if (str.indexOf(dot,(lat+2))==-1){
		//alert("Invalid E-mail ID")
		return false
	}

	if (str.indexOf(" ")!=-1){
		//alert("Invalid E-mail ID")
		return false
	}

	return true					
}

function checkUserNameLength(username, errField) {



	if (username.length < 8 || username.length > 15)
	{

		showErrorMessage(errField);

		return false;
	}

	return true;

}


function checkPasswordLength(password, errField) {



	if (password.length < 7 || password.length > 15)
	{

		showErrorMessage(errField);

		return false;
	}

	return true;

}

function highLightField(field, error) {

	var errFld = document.getElementById(field);

	if (error)
	{
		var newClassName = errFld.className.replace("fieldlabel", "fieldlabelon");
		errFld.className = newClassName;    	

	}
	else {
		var newClassName = errFld.className.replace("fieldlabelon", "fieldlabel");
		errFld.className = newClassName;  

	}

	return true;

}


function showErrorMessage(message){
	var ni = document.getElementById('errorMessage');
	ni.innerHTML = message; 
	errorContainer(true);


}

function errorContainer(show){
	if(show==false){
		document.getElementById("errorContainer").style.display = 'none';
	}
	else {
		document.getElementById("errorContainer").style.display = 'block';

	}
}

function errorContainerSwitch() {
	var ni = document.getElementById('errorMessage');

	if(ni.innerHTML.length<2){
	//alert(ni.innerHTML);
		errorContainer(false);
	}	

}


function setUSValues() {
	document.forms["paperMoney"]["zip"].value = document.forms["paperMoney"]["zipu"].value;
	document.forms["paperMoney"]["city"].value = document.forms["paperMoney"]["cityu"].value;
	document.forms["paperMoney"]["state"].value = document.forms["paperMoney"]["stateu"].value;
	var ph = document.forms["paperMoney"]["Phone_1"].value + document.forms["paperMoney"]["Phone_2"].value + document.forms["paperMoney"]["Phone_3"].value;
	document.forms["paperMoney"]["daytimePhone"].value = ph;



}

function popWindow()
{
    privWindow = window.open("http://www.tdameritrade.com/privacy.html", "PrivacyWindow", "location=1,status=0,scrollbars=1,width=1020,height=600");
    privWindow.moveTo(200, 200);
}

function checkIllegalChars (strng, errMsg) {
 var illegalChars = /[\W_]/; 
 
 if (illegalChars.test(strng)) {
      showErrorMessage(errMsg);
      return true;
 }
 else {
 	return false;
 }
}

function checkCharAndNumeral (strng, errMsg) {
 if ( 
 	(   (strng.search(/[a-z]+/) > -1) || (strng.search(/[A-Z]+/) > -1)   )
                 && 
        (strng.search(/[0-9]+/) > -1)  
    ) {
      return true;
 }
 else {
 	showErrorMessage(errMsg);
 	return false;
 }

}


function checkCharsOnly (strng, errMsg) {

var regexLetter = /^[A-Za-z]+[- A-Za-z]*$/;
//alert(strng + regexLetter.test(strng));
 if (   regexLetter.test(strng) ){
      return true;
 }
 else {
 	showErrorMessage(errMsg);
 	return false;
 }

}


function init(country, citizenship,state, phone) {
 //alert(country+citizenship+state+ phone);
 //alert(document.forms["paperMoney"]["stateu"].options[1]);
 
 
 
 if(country == 'USA'){

 for(var i=0;i<document.forms["paperMoney"]["stateu"].options.length;i++){ 
 	if(document.forms["paperMoney"]["stateu"].options[i].value==state){
 		
 		document.forms["paperMoney"]["stateu"].options[i].selected=1;
 		break;
 	}
 } 
 
 if(phone.length==10){
 
 document.forms["paperMoney"]["Phone_1"].value = phone.substring(0,3);
 document.forms["paperMoney"]["Phone_2"].value = phone.substring(3,6);
 document.forms["paperMoney"]["Phone_3"].value = phone.substring(6,10); 
 }
 
 
 }
 
 if(country == null || country == '')
 	country = 'USA';
 if(citizenship == null || citizenship == '')
  	citizenship = 'USA';
  

 for(var i=0;i<document.forms["paperMoney"]["country"].options.length;i++){ 
 	if(document.forms["paperMoney"]["country"].options[i].value==country){
 		
 		document.forms["paperMoney"]["country"].options[i].selected=1;
 		break;
 	}
 } 
 
 for(var i=0;i<document.forms["paperMoney"]["citizenship"].options.length;i++){ 
 	if(document.forms["paperMoney"]["citizenship"].options[i].value==citizenship){
 		
 		document.forms["paperMoney"]["citizenship"].options[i].selected=1;
 		break;
 	}
 } 
 
 
 
}