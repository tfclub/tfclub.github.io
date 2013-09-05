function show(obj) {
	if (obj) {
		document.getElementById(obj).style.display = 'block';
	}
}

function hide(obj) {
	if (obj) {
		document.getElementById(obj).style.display = 'none';
	}
}

function popup(url, winName, features) {
	window.open(url, winName, features);
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
		document.getElementById("form_status").innerHTML = "<i>Authenticating...</i>";
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



//Press Releases story toggle

function toggle(story){
    var d = document.getElementById(story);
    (d.style.display=="")?d.style.display="none":d.style.display="";
}


//Show hide for charts on Compare.jsp screen 

function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


//Create Cookie Function

function setCookie(name, value, expires) {
	document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

var exp = new Date();                                   // make new date object
exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 365)); // set the expiry 365 days ahead as per requirement from John

//-->

function Toggle(theDiv) { 
	document.getElementById("forgotUserID").style.display = "none"; 
	document.getElementById("forgotPassword").style.display = "none"; 
	document.getElementById(theDiv).style.display = "block"; 
} 

function onlyNumbers(e)
{
var keynum;
var keychar;
var numcheck;

if(window.event) // IE
{
keynum = e.keyCode;
}
else if(e.which) // Netscape/Firefox/Opera
{
keynum = e.which;
}

if (keynum!=8 && keynum >0)
{
keychar = String.fromCharCode(keynum);
numcheck = /\d/;
return numcheck.test(keychar);
}
}
function onlyAlphabets(e) {
var keynum;
if(window.event) // IE
{
keynum = e.keyCode;
}
else if(e.which) // Netscape/Firefox/Opera
{
keynum = e.which;
}

if (keynum!=8 && keynum >0)
{
return ((keynum > 64 && keynum < 91) || (keynum > 96 && keynum < 123) || keynum==32);
}
}

/* Rollover image for Open Account green button & Sub Navigation roll over */

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/* functions to show/hide text in an <input type="text" /> */
function clickclear(thisfield, defaulttext, statusMsgDivName) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
	
	if(thisfield.id) {
		jQuery("#"+thisfield.id).css("color", "#3E3E3E");
	}
	
	if(document.getElementById(statusMsgDivName)) {
		document.getElementById(statusMsgDivName).innerHTML = "";
	}
}
function clickrecall(thisfield, defaulttext) {

	if (thisfield.value == "") {
		thisfield.value = defaulttext;
		if(thisfield.id) {
			jQuery("#"+thisfield.id).css("color", "#A1A1A1");
		}
	} else if(thisfield.value != defaulttext) {
		if(thisfield.id) {
			jQuery("#"+thisfield.id).css("color", "#3E3E3E");
		}
	}
}

/* quoteband related */
function cleanSymbol(userInput) {  /* cater for cut-n-paste */
	var symbolRegex = /[^a-zA-Z0-9\.-]+/g;
	var tempSymbol = userInput.replace(symbolRegex, '');
	return tempSymbol.toUpperCase();
}

function toggleQuotbaFloater(inputObjSymbol) {
	var floater = document.getElementById('quotba_floater');
	inputObjSymbol.value = cleanSymbol(inputObjSymbol.value);
	
	if(inputObjSymbol.value == '') {
		floater.style.display='block';
		floater.innerHTML ='enter symbol';
		inputObjSymbol.value = '';
	} else {
		floater.innerHTML ='';
		floater.style.display='none';
	}
}

function validateQuoteForm(quoteForm) {
	quoteForm.symbol = cleanSymbol(quoteForm.symbol);
	if(quoteForm.symbol.value == '') {
		return false;
	} else { 
		/* quoteForm.symbol.type='password'; */
		return true;
	}
}

function setQbData (dta) {		
	jQuery(dta).each(function(index, obj) {
		var qsymbol = obj.prfx;
		var atag = jQuery("a#"+qsymbol);
		var href1 = atag.attr("href");
		if(parseFloat(obj.chng) < 0) {
			atag.toggleClass( "red", true );
		} else {
			atag.toggleClass( "green", true );
		}
		jQuery("a#"+qsymbol+" .mark").html(obj.mark);
		jQuery("a#"+qsymbol+" .change").html(obj.chng);
	});
}

function populateAjaxQuoteBand() {
	
	var urlOrigin = (window.location.origin)?(window.location.origin):(window.location.protocol+"//"+window.location.host);

	/* specify delayed quotes server names for each case */
	var urlBaseDelayedQuotes = urlOrigin.toLowerCase();
	if(urlBaseDelayedQuotes.indexOf("trademonster.com") != -1) {
		urlBaseDelayedQuotes = "https://st.trademonster.com";
	} else {
		urlBaseDelayedQuotes = "https://st.qa.monstersecurities.com";
	}

	/* bind to after-entire-page-load */
	jQuery(window).bind("load", function() {
		//jQuery.support.cors = true;
		jQuery.ajax({
		     url: (urlBaseDelayedQuotes + "/common/templates/ajaxResponder_quoteBand.jsp"),
		     cache: false,
		     dataType: "jsonp",
		     jsonpCallback: 'setQbData',
		     type: "POST",
		     crossDomain: true,
		     data: { Origin : urlOrigin }
			//,success: setQbData
			//,error: function(jxhr, status, err) { alert("statusText="+jxhr.statusText+"\n status = " + status + "\n err = " + err); }
		});
		
		//jQuery.getJSON(urlBaseDelayedQuotes + "/common/templates/ajaxResponder_quoteBand.jsp", { Origin : urlOrigin, callback : "setQbData" }, setQbData);
	});
}
/* end quoteband related */

/* menu functions including highlight */
function uhash(e,t){
	if(/^http(s)?:\/\/(www.)?(education|optionmonster).+/gi.test(e)==false){e=e.substr(t.length)}var n=e.length;var r=e.split("-").length;var i=0;var s=e.lastIndexOf("#");if(s+1<n){i=e.charAt(s+1).charCodeAt(0)}var o=0;var u=e.lastIndexOf(".");while(u>0){o+=e.charCodeAt(u);u=u-2}o=o%33;var a=e.match(/[aeiou]{1}/gi);var f=a==null?0:a.length;var l=e.match(/[bcdfghjklmnpqrstvwxyz]{1}/gi);var c=l==null?0:l.length;var h=e.match(/[0123456789]{1}/g);var p=h==null?0:h.length;var d=(e.lastIndexOf(".")+2)*33;var v=e.charAt(d%n).charCodeAt(0);var m=""+n+f+v+p+c+i+r+o;return parseInt(m).toString(16);
}
function singleActiveMenu(fullPath, umap) {
    if (umap) {
        var baseurl = window.location.protocol + "//" + window.location.host;
        var currHash = uhash(baseurl + fullPath, baseurl);
        if (typeof umap[currHash] != 'undefined') {
            jQuery("#mnuid" + umap[currHash]).addClass('activemenu');
        }
    }
    
	jQuery("#menu-bg #dropdown li[id^='mnuid']").each(function() {
		jQuery(this).find("a").bind("click", function() {
			var clickedHref = jQuery(this).attr("href");
			var nohashref = window.location.pathname+window.location.search;
			var hashref = nohashref + window.location.hash;
			if((clickedHref != hashref) && (clickedHref.indexOf(nohashref) !== -1)) {
				clearMenuHighlights();
				singleActiveMenu(clickedHref, hmp);
			}
		});
	});
}
function clearMenuHighlights() {
    jQuery("#menu-bg #dropdown li[id^='mnuid']").each(function () {
        jQuery(this).removeClass('activemenu');
    });
}
/* end menu functions */

/* utility functions */
function temporaryShowMessage(targetDivId, tempMsg) {
	
	if(jQuery("#"+targetDivId)) {
		jQuery("#"+targetDivId).text(tempMsg);
		jQuery("#"+targetDivId).fadeIn(400, function() {
			setTimeout(function() {
				jQuery("#"+targetDivId).fadeOut(700, function() {
					jQuery("#"+targetDivId).text('');
				});
			},4000);
		});
	
	}
}

function addLoadEvent(func) { /* includes containing sitemesh reserved tag '<body onload="foo">' should use this to load foo */

	var oldonload = window.onload;
	
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			if(func) {
				func();
			}
		}
	}
}

/* on page load - pre-load all the swappable images? */
function getInputSelection(el) {
    var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
}

function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	} else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}

function setCaretToPos (input, pos) {
	setSelectionRange(input, pos, pos);
}

function getInputCharCode(event) {
	if (!event) { event = window.event; }

	var code;
	if (event.keyCode) {
		code = event.keyCode;
	} else if (event.which) {
		code = event.which;
	}

	return code;
}

function isDigit(charCode) {

	if ((charCode > 31) && (charCode < 48 || charCode > 57)) { 
        return false; 
	} else {
		return true;
	}

	/*
	if( ((charCode >= 48) && (charCode <= 57)) || ((charCode >= 96) && (charCode <= 105)) ) {
        return true; 
	} else {
		return false;
	}
	*/
}

function isEditNav(charCode) {
	if (
		(charCode == 8) || 

		((charCode >= 35) && (charCode <= 40)) || 
		((charCode >= 45) && (charCode <= 46))
	   ) { 
        return true; 
	} else {
		return false;
	} 
}

function hideStatusMsgs() {

	if(jQuery("#successMsg").attr("display") == "block") {
		jQuery("#successMsg").fadeOut(300, function() {
			jQuery("#successMsg").css("display","none");
		});		
	}

	if(jQuery("#failMsg").attr("display") == "block") {
		jQuery("#failMsg").fadeOut(300, function() {
			jQuery("#failMsg").css("display","none");
		});		
	}
	
}