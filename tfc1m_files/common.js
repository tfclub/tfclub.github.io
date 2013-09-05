// Function to swap the Launch Trading button images
function LaunchImage(sImgName,sImgFile) {
    document.images[sImgName].src = sImgFile; 
} 

// Function to swap the View Details button images
function DetailsImage(sImgName,sImgFile) {
    document.images[sImgName].src = sImgFile; 
} 

// Function to pop-up new broswer window
function MM_openBrWindow(theURL,winName,features) {
    window.open(theURL,winName,features);
}

// Function to swap menu image
function menuSwap(sImgName,sImgFile) {
    document.images[sImgName].src = sImgFile; 
} 

function launchAppWindowSelected() {
    var dropdownValue = document.getElementById('acctselect').value;
    window.open('/ACCOUNTMANAGER/launchTradingApp.jsp?accountNumber='+dropdownValue, 'tradingWindow', 'width=1200, height=800, resizable=1, location=0');
} 
function launchAppWindow(account) {
    window.open('/ACCOUNTMANAGER/launchTradingApp.jsp?accountNumber='+account, 'tradingWindow', 'width=1200, height=800, resizable=1, location=0');
} 
function launchAppWindowDefault() {
    return window.open('/ACCOUNTMANAGER/launchTradingApp.jsp', 'tradingWindow', 'width=1200, height=800, resizable=1, location=0');
}
function launchTradingWidget(acct) {
    window.open('/WIDGET/index.jsp?accountNumber='+ acct, 'tradingWidget', 'status=1, width=717, height=265,location=0');
} 

function launchHelpVideo(url) {
    RH_ShowHelp(0, url, 15, 50);
}

function logout() {
    if (window.tradingWindow && !window.tradingWindow.closed) {
        window.tradingWindow.close();
    }
    if (window.tradingWidget && !window.tradingWidget.closed) {
        window.tradingWidget.close();
    }
    window.location='/j_acegi_logout';
}

function trim(str) {
    var trimmed = str.replace(/^\s+|\s+$/g, '') ;
    return trimmed;
}

/* ------------------------------------------------------------------------------
 * FORM VALIDATION FUNCTIONS
 * ------------------------------------------------------------------------------
 * Various functions to check fields identified within the calling FORM tag for
 * non-blank values, email and password formats, and comparisons such as
 * 'password' and 'confirm password' fields.
 *
 * Use the following FORM tag syntax to validate/check fields.
 * Modify the onsubmit event handler to include the name of each form  
 * field to be checked, as well as the corresponding message to display
 * if the field is blank.

 *  <form name="lookup" method="POST" action="/cgi/processing-script.jsp" 
 *		  onSubmit="this.name.required = true;
 *					this.name.message = 'Your name';
 *					this.email.required = true;
 *					this.email.message = 'Your email address';
 *					this.email.checkEmail = true;
 *					this.password.checkPassword = true;
 *					this.password.compareFields = this.confirm_password;
 *					this.confirm_password.required = true;
 *					this.confirm_password.message = 'Your password confirmation';
 *					return validateForm(this);">
 * ------------------------------------------------------------------------------*/

// BEGIN FORM VALIDATION FUNCTIONS

// Check email input for proper format:  a@a.aa
function validateEmail(e) {
	var error = "";
	var usEmail = true;
	var str = e.value;
	var lenSuffix = (usEmail) ? 3 : 3;
	var goodAddr = false;
	var ndxAt = ndxDot = 0;

	ndxAt	= str.indexOf("@");
	ndxDot	= str.indexOf(".");
	ndxDot2	= str.lastIndexOf(".");

	// Test field if non-blank continuous character string only
	if (str != "") {
		if ( (str != trim(str)) || (ndxDot < 0) || (ndxAt < 0) || (ndxAt < 1) || ((ndxDot2 - 1) <= ndxAt) || ( str.length < (ndxDot2 + lenSuffix)) ) {
			error = "<br \/> - Please enter a valid email address";
		}
	}
	return error; 
}

// Check password input for proper format:  7-15 characters, a-zA-Z0-9 with at least one 0-9
function validatePassword(e) {
    var error = "";
	var pwd = e.value;
	var illegalChars = /[\W_]/; // allow only letters and numbers 
 
 	if (!isblank(pwd)) {
		if ( ((pwd.length < 7) || (pwd.length > 15)) ) {
	        error = "<br \/> - The password must contain 7 to 15 characters (letters and numbers only)";
	    } else if (illegalChars.test(pwd)) {
	    	error = "<br \/> - The password contains illegal characters (use uppercase and lowercase letters and at least one number)";
	    } else if (!( ((pwd.search(/[a-z]+/) > -1) || (pwd.search(/[A-Z]+/) > -1)) && (pwd.search(/[0-9]+/) > -1))) {
		  	error = "<br \/> - The password must contain at least one uppercase or lowercase letter, and one number";
		}
	}
	return error;
}  
  
// Check input fields for blank entries (called by 'verify' function)
function isblank(s) {
	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if ((c != ' ') && (c != '\n') && (c != '\t')) {
			return false;
		}
	}
	return true;
}

function validateForm(f) {
	var msg;
	var empty_fields = "";
	var typeCC = "";
	var month = "";
	var year = "";
	
	for (var i = 0; i < f.length; i++) {
		var e = f.elements[i];

		if (e.required) {
		
			if ( (e.value == null) || (e.value == "") || (isblank(e.value))  
			     || (e.type == "checkbox" && !e.checked) || (e.type == "radio" && !e.checked) 
			     || e.selectedIndex == "" || e.selectedIndex == 0 ) {

				empty_fields += "<br \/> - " + e.message;
			}
		}

		if (e.checkEmail) {
			empty_fields += validateEmail(e);
		}
		
		if (e.checkPassword) {
			empty_fields += validatePassword(e);
		}

		if (e.name == "credit_card_type"){
	    	typeCC = e.value;
		}
		
		if (e.checkCreditCard) {
			// empty_fields += checkCard(e.value, typeCC);
			empty_fields += checkCardValidation(e.value, typeCC);
		}	
		
		if (e.checkCCSecCode) {		
			empty_fields += validateSecCode(e.value);
		}
		
		if (e.checkPhone) {
			empty_fields += isPhoneNumber(e.value);
		}	

		if (e.checkZipCode) {
			empty_fields += validateUSZip(e.value);
		}	
				
		if (e.name == "pp_expMonth"){
	    	month = e.value;
		}
		if (e.name == "pp_expYear"){
	    	year = e.value;
		}
		
		if (e.checkExpDate) {
			empty_fields += ValidCCExpDate(month, year);
		}	
		
		if (e.compareFields) {
			if (e.value != e.compareFields.value) {
				empty_fields += "<br \/> - " + e.message + " confirmation does not match";
			}
		}
	}	

	// if required fields all validate correctly, then return and submit form
	if (isblank(empty_fields)) {
		document.getElementById("form_status").innerHTML = "<i>Submitting form...</i>";
		document.getElementById("form_status").style.display = "block";
		return true;
	} else {
		msg = "<b>Please complete the following:</b>" + empty_fields + "<br \/>";
    }

	// alert user
	document.getElementById("form_status").innerHTML = msg;
	document.getElementById("form_status").style.display = "block";
	document.getElementById("form_status").focus();

// stop form submission
	return false;
}
/* ------------------------------------------------------------------------------
 * DIV IFRAME POSITIONING FUNCTIONS
 * ------------------------------------------------------------------------------
 * Lets us find div x and y positions on the page for any object that we supply to the function
 * ------------------------------------------------------------------------------*/
 
 var fcXPosition = 0;
 var fcYPosition = 0;
    
	
 function findPosX(obj)
{
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
 }

 function findPosY(obj)
 {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
 }
 
/**Start  Added to set the cookie value to keep track of the SOURCE(SRC)**/
function setCookie(name, value, expires) 
{
 document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

var exp = new Date();                                   // make new date object
exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 365)); // set the expiry 365 days ahead as per requirement from John

function setSourceValue(value) 
{
      var src=getCookie("hula");
      var srcValue="";
      if((src==null || src==" ")&& value==" ")
      {
            var sURL = window.document.URL.toString();
        if (sURL.indexOf("?") > 0)
        {   
           var arrParams = sURL.split("?");
           var arrURLParams = arrParams[1].split("&");
           var arrParamNames = new Array(arrURLParams.length);
           var arrParamValues = new Array(arrURLParams.length);
           var i = 0;
           for (i=0;i<arrURLParams.length;i++)
            {
             var sParam =  arrURLParams[i].split("=");
             arrParamNames[i] = sParam[0];
             if (sParam[1] != "")
                  arrParamValues[i] = unescape(sParam[1]);
            }
            for (i=0;i<arrURLParams.length;i++)
            {
              if(arrParamNames[i].toLowerCase()=="src")
              {
                 srcValue=arrParamValues[i];
                   setCookie('hula', srcValue, exp); 
               }
              }
       }
      }else if(src != null && src!="")
      {
            srcValue=src;
            setCookie('hula', src, exp);
      }else if(value!=null && value!=" ")
      {
            srcValue=value;
            setCookie('hula', value, exp);
      }
      
      return srcValue;
}


function setPromoCodeValue(value) 
{
      var promoCode=getCookie("promocode");
   var sURL = window.document.URL.toString();
   if (sURL.indexOf("?") > 0)
    {       
           var arrParams = sURL.split("?");
           var arrURLParams = arrParams[1].split("&");
           var arrParamNames = new Array(arrURLParams.length);
           var arrParamValues = new Array(arrURLParams.length);
           var i = 0;
           for (i=0;i<arrURLParams.length;i++)
            {
             var sParam =  arrURLParams[i].split("=");
             arrParamNames[i] = sParam[0];
             if (sParam[1] != "")
                  arrParamValues[i] = unescape(sParam[1]);
            }
            for (i=0;i<arrURLParams.length;i++)
            {
              if(arrParamNames[i]=="PC")
              {
                 promoCode=arrParamValues[i];
                 setCookie('promocode', promoCode, exp); 
                }
              }
     }else if(promoCode!=null)
     {
        setCookie('promocode', promoCode, exp);  
      }
    return promoCode;

}
function getCookie (name) {
   var cname = name + "=";               
   var dc = document.cookie;

if (dc.length > 0) {              
                   begin = dc.indexOf(cname);       
                                   if (begin != -1) {           
                                   begin += cname.length;       
                                   end = dc.indexOf(";", begin);
                                                   if (end == -1) end = dc.length;
                                                   return unescape(dc.substring(begin, end));
                                   } 
                   }
   return null;
}
/** End  Added to set the cookie value to keep track of the SOURCE(SRC)**/


/*START : Header javascript */

<!--
// copyright 1999-2001 Idocs, Inc. http://www.idocs.com/tags/
// Distribute this script freely, but keep this 
// notice with the code.
var submitRolls = new Object();

function submitroll(src, oversrc, name)
{
this.src=src;
this.oversrc=oversrc;
this.name=name;
this.alt="Submit Query";
this.TabIndex="5";
this.write=submitroll_write;
}

function submitroll_write()
{
var thisform = 'document.forms[' + (document.forms.length - 1) + ']';
submitRolls[this.name] = new Object();
submitRolls[this.name].over = new Image();
submitRolls[this.name].over.src = this.oversrc;
submitRolls[this.name].out = new Image();
submitRolls[this.name].out.src = this.src;

document.write
	(
	'<A onMouseOver="if (document.images)document.images[\'' + this.name + "'].src=submitRolls['" + this.name + '\'].over.src"' + 
	' onMouseOut="if (document.images)document.images[\'' + this.name + "'].src=submitRolls['" + this.name + '\'].out.src"' + 
	' HREF="javascript:'
	);

if (this.sendfield)
	{
	if (! this.sendvalue)
		this.sendvalue = 1;
	document.write(thisform, ".elements['", this.sendfield, "'].value='", this.sendvalue, "';");
	}

document.write(thisform + '.submit();void(0);"');
if (this.msg)document.write(' onClick="return confirm(\'' , this.msg, '\')"');
document.write('>');

document.write('<IMG SRC="' + this.src + '" ALT="' + this.alt + '" BORDER=0 TabIndex=5 NAME="' + this.name + '"');
if (this.height)document.write(' HEIGHT=' + this.height);
if (this.width)document.write(' WIDTH='  + this.width);
if (this.otheratts)document.write(' ' + this.otheratts);
document.write('></A>');
if (this.sendfield)
	{
	document.write('<INPUT TYPE=HIDDEN NAME="' + this.sendfield + '">');
	document.forms[document.forms.length - 1].elements[this.sendfield].value='';
	}
}

//-->

/* This code is added to make the button for the login work if user hits the "ENTER" button */
function addInputSubmitEvent(form, input,e) {
    var keynum;
	var userNameInput=document.getElementById('j_username').value;
	
	if(input.value!=''&& (userNameInput!='User ID' && userNameInput.value!='') && input.value!='Password')
	{
	   input.onkeydown = function(e) 
	   {
	  	e = e || window.event;
        if (e.keyCode == 13)
		{
            form.submit();
            return false;
        }else if(e.which==13)
		{
		  form.submit();
          return false;
		 }
    };
}
}

function addForm(e)
{
     var forms = document.getElementsByTagName('form');

    for (var i=0;i < forms.length;i++) {
        var inputs = forms[i].getElementsByTagName('input');

        for (var j=0;j < inputs.length;j++)
            addInputSubmitEvent(forms[i], inputs[j],e);
    }
}
//window.onload = addForm();
/*END of ENTER button code*/


/*END : Header Javascript */