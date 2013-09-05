// JavaScript Document

//<!--
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
//-->


function updateDrivingLicenseDetails(chkBoxElem, prefix) {
    var flagVal = false;
    if (chkBoxElem.checked) {
        flagVal = true;
        document.getElementById(prefix + 'drivingLicenseNumberId').value = "";
    }
    chkBoxElem.value=flagVal;
    document.getElementById(prefix + 'drivingLicenseNumberId').disabled = flagVal;
    document.getElementById(prefix + 'stateOfIssuanceDLId').disabled = flagVal;
}


function updateEmploymentDetails(selBoxElem, prefix) {
    var txt = selBoxElem.value;
    var flagVal = true;
    if (txt == 'Employed') {
        flagVal = false;
    }
    document.getElementById(prefix + 'occupationId').disabled = flagVal;
    document.getElementById(prefix + 'employerNameId').disabled = flagVal;
    document.getElementById(prefix + 'natureOfBusinessId').disabled = flagVal;
    document.getElementById(prefix + 'employerAddressaddress1Id').disabled = flagVal;
    document.getElementById(prefix + 'employerAddressaddress2Id').disabled = flagVal;
    document.getElementById(prefix + 'employerAddresscityId').disabled = flagVal;
    document.getElementById(prefix + 'employerAddressstateCodeId').disabled = flagVal;
    document.getElementById(prefix + 'employerAddressnonUsStateId').disabled = flagVal;
    document.getElementById(prefix + 'addresszipId').disabled = flagVal;
    document.getElementById(prefix + 'employerAddresscountryCodeId').disabled = flagVal;
    document.getElementById(prefix + 'employerPhoneId').disabled = flagVal;
    //document.getElementById(prefix + 'brokerDealerIdfalse').disabled = flagVal;
    //document.getElementById(prefix + 'brokerDealerIdtrue').disabled = flagVal;
    /*document.getElementById(prefix + 'shareHolderinPublicCompanyIdtrue').disabled = flagVal;
    document.getElementById(prefix + 'shareHolderinPublicCompanyIdfalse').disabled = flagVal;
    document.getElementById(prefix + 'politicalFigureIdtrue').disabled = flagVal;
    document.getElementById(prefix + 'politicalFigureIdfalse').disabled = flagVal;
    document.getElementById(prefix + 'exchangeFirmIdfalse').disabled = flagVal;
    document.getElementById(prefix + 'exchangeFirmIdtrue').disabled = flagVal;
    document.getElementById(prefix + 'exchangeFirmName').disabled = flagVal;
    document.getElementById(prefix + 'shareHolderCompanyName').disabled = flagVal;
    if( document.getElementById(prefix + 'exchangeFirmIdfalse').checked){
    	document.getElementById(prefix + 'exchangeFirmName').disabled = true;
    	document.getElementById(prefix+'nasdFirmRelationship').disabled = true;
    }
    if( document.getElementById(prefix + 'shareHolderinPublicCompanyIdfalse').checked){
    	document.getElementById(prefix + 'shareHolderCompanyName').disabled = true;
    }*/
    updateExchangeFirm(prefix);
    if(document.getElementById(prefix + 'employerAddresscountryCodeId').options[document.getElementById(prefix + 'employerAddresscountryCodeId').selectedIndex].value=='US'){
    	document.getElementById(prefix + 'addresszipId').maxLength=5;
    }else{
    	document.getElementById(prefix + 'addresszipId').maxLength=25;
    }

}

function updateExchangeFirm(prefix)
{

	if(document.getElementById(prefix+'exchangeFirmIdtrue').checked
			|| document.getElementById(prefix+'shareHolderinPublicCompanyIdtrue').checked){
		document.getElementById(prefix+'exchangeFirmName').disabled = false;
		document.getElementById(prefix+'nasdFirmRelationship').disabled = false;
	} else {
		document.getElementById(prefix+'exchangeFirmName').disabled = true;
		document.getElementById(prefix+'nasdFirmRelationship').disabled = true;
		document.getElementById(prefix+'exchangeFirmName').value="";
		document.getElementById(prefix+'nasdFirmRelationship').value="";
	}
	if(prefix=='joint'){
		updateFirmNameAndRelationshipLabels('joint');
	}else{
		updateFirmNameAndRelationshipLabels('');
	}
	/*if( document.getElementById(prefix+'exchangeFirmIdfalse').checked){
		document.getElementById(prefix+'exchangeFirmIdfalse').checked="checked";
    	document.getElementById(prefix+'exchangeFirmName').disabled = true;
    	document.getElementById(prefix+'exchangeFirmName').value="";
    	document.getElementById(prefix+'nasdFirmRelationship').disabled = true;
    	document.getElementById(prefix+'nasdFirmRelationship').value="";
    }else{
    	document.getElementById(prefix+'exchangeFirmName').disabled = false;
    	document.getElementById(prefix+'nasdFirmRelationship').disabled = false;
    	document.getElementById(prefix+'exchangeFirmIdtrue').checked="checked";
    	document.getElementById(prefix+'nasdFirmRelationship').disabled = false;
    }*/
}
function updateShareHolderCompany(prefix){
	updateExchangeFirm(prefix);
	/*if( document.getElementById(prefix+'shareHolderinPublicCompanyIdfalse').checked){
    	document.getElementById(prefix+'shareHolderCompanyName').disabled = true;
    	document.getElementById(prefix+'shareHolderinPublicCompanyIdfalse').checked="checked";
    	document.getElementById(prefix+'shareHolderCompanyName').value="";
    }else{
    	document.getElementById(prefix+'shareHolderCompanyName').disabled = false;
    	document.getElementById(prefix+'shareHolderinPublicCompanyIdtrue').checked="checked";
    }*/
}


function updateOptionsExpereience(flagVal){
	 document.getElementById('buyingOptionExp').disabled=flagVal;
	 document.getElementById('coveredWritingExp').disabled=flagVal;
	 document.getElementById('uncoveredEritingExp').disabled=flagVal;
	 document.getElementById('spreadExp').disabled=flagVal;
	 if(flagVal){
		 document.getElementById('buyingOptionExp').checked=false;
		 document.getElementById('coveredWritingExp').checked=false;
		 document.getElementById('uncoveredEritingExp').checked=false;
		 document.getElementById('spreadExp').checked=false;
	 }

}

function changeStateInputElem(selBoxElem, prefix) {
    var txt = selBoxElem.value;
    if (txt == 'US') {
        document.getElementById(prefix + 'addressstateCodeDivId').style.display = 'block';
        document.getElementById(prefix + 'addressnonUsStateDivId').style.display = 'none';
        document.getElementById(prefix + 'addresszipId').maxLength=5;
        if(document.getElementById(prefix + 'employerPhoneId')){
        	document.getElementById(prefix + 'employerPhoneId').maxLength=10;}
    } else {
        document.getElementById(prefix + 'addressstateCodeDivId').style.display = 'none';
        document.getElementById(prefix + 'addressnonUsStateDivId').style.display = 'block';
        document.getElementById(prefix + 'addresszipId').maxLength=25;
        if(document.getElementById(prefix + 'employerPhoneId')){
        document.getElementById(prefix + 'employerPhoneId').maxLength=14;}
    }
}
function changePhoneInputElem(selBoxElem,prefix){
	var txt = selBoxElem.value;
 	if (txt == 'US') {
 		document.getElementById(prefix + 'PrimaryPhoneId').maxLength=10;
 		if(document.getElementById(prefix + 'SecondaryPhoneId')){
 		document.getElementById(prefix + 'SecondaryPhoneId').maxLength=10;
 		}
 	}else{
 		if(document.getElementById(prefix + 'SecondaryPhoneId')){
 		 document.getElementById(prefix + 'SecondaryPhoneId').maxLength=14;
 		}
 		document.getElementById(prefix + 'PrimaryPhoneId').maxLength=14;
 	}

}
function changeMinorStateInputElem(selBoxElem) {
    var txt = selBoxElem.value;
    if (txt == 'US') {
        document.getElementById('minorOwnerInfoAddressstateCodeDivId').style.display = 'block';
        document.getElementById('minorOwnerInfoAddressnonUsStateDivId').style.display = 'none';
        document.getElementById('minorOwnerInfoaddresszipId').maxLength=5;
        document.getElementById('minorOwnerInfodayTimePhoneId').maxLength=10;
        document.getElementById('minorOwnerInfoeveningPhoneId').maxLength=10;

    } else {
        document.getElementById('minorOwnerInfoAddressstateCodeDivId').style.display = 'none';
        document.getElementById('minorOwnerInfoAddressnonUsStateDivId').style.display = 'block';
        document.getElementById('minorOwnerInfoaddresszipId').maxLength=5;
        document.getElementById('minorOwnerInfoaddresszipId').maxLength=14;
        document.getElementById('minorOwnerInfoaddresszipId').maxLength=14;
    }
}
function createCorpTitle() {
	var corpTitle = document.getElementById('corpTitle').value;
	var corpname1 = (corpTitle.substr(0, 1)).toUpperCase();
	var corpname2 = (corpTitle.substr(1)).toLowerCase();
	document.getElementById('corpNameHeader').innerHTML = corpname1 + corpname2
			+ " Name:";
	document.getElementById('corpTaxIdHeader').innerHTML = corpname1
			+ corpname2 + " Tax ID:";
	if (corpTitle == 'CORPORATION') {
		document.getElementById('corpDateHeader').innerHTML = "Date of Incorporation:";
	} else if (corpTitle == 'LLC') {
		document.getElementById('corpNameHeader').innerHTML = "LLC Name:";
		document.getElementById('corpTaxIdHeader').innerHTML = "LLC Tax ID:";
		document.getElementById('corpDateHeader').innerHTML = "Date of Incorporation:";
	} else if (corpTitle == 'TRUST') {
		document.getElementById('corpDateHeader').innerHTML = "Trust Date: ";
	} else if (corpTitle == 'PARTNERSHIP') {
		document.getElementById('corpDateHeader').innerHTML = "Establishment Date:";
	} else if (corpTitle == 'INVESTMENT CLUB') {
		document.getElementById('corpDateHeader').innerHTML = "Date of Formation:";
		document.getElementById('corpNameHeader').innerHTML = "Investment Club Name:";
		document.getElementById('corpTaxIdHeader').innerHTML = "Investment Club Tax ID:";
	} else if (corpTitle == 'TAX EXEMPT ORGANIZATION') {
		document.getElementById('corpDateHeader').innerHTML = "Date of Formation:";
		document.getElementById('corpNameHeader').innerHTML = "Organization Name:";
		document.getElementById('corpTaxIdHeader').innerHTML = "Organization Tax ID:";
	}
}
function setBeneficiaryCountValue(currentValue){
	var newValue;
	if(newValue>7){
		newValue=currentValue;
	}else{
		newValue=currentValue+1;
	}
	document.getElementById('beneficiaryCount').value=newValue;
}
function updateJointOwnerInfo(accountType)
{
	var ssnTaxIDElem=document.getElementById('jointOwnerInfossnTaxIdRow');
	var passportTaxIdElem=document.getElementById('jointOwnerInfopassportRow');
	var governmentidElem=document.getElementById('jointOwnerInfogovermentIdRow');
	var countryOfResidence=document.getElementById('jointOwnerInfocountryOfResidenceId');
    var citizenShip=document.getElementById('jointOwnerInfocitizenshipId');
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US" && citizenShip.options[citizenShip.selectedIndex].value!="US"){
		ssnTaxIDElem.className="hide";
		passportTaxIdElem.className="showRow";
		governmentidElem.className="showRow";
		/*ssnTaxIDElem.style.visibility="hidden";
		ssnTaxIDElem.style.display="none";
		passportTaxIdElem.style.visibility="visible";
		passportTaxIdElem.style.display="table-row";
		governmentidElem.style.visibility="visible";
		governmentidElem.style.display="table-row";*/

	}else{
		ssnTaxIDElem.className="showRow";
		passportTaxIdElem.className="hide";
		governmentidElem.className="hide";
		/*ssnTaxIDElem.style.visibility="visible";
		ssnTaxIDElem.style.display="table-row";
		passportTaxIdElem.style.visibility="hidden";
		passportTaxIdElem.style.display="none";
		governmentidElem.style.visibility="hidden";
		governmentidElem.style.display="none";*/
	}
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US"){
		document.getElementById('jointOwnerInfoaddresszipId').maxLength="25";
		document.getElementById('jointOwnerInfodayTimePhoneId').maxLength="14";
		document.getElementById('jointOwnerInfoeveningPhoneId').maxLength="14";
	}else{
		document.getElementById('jointOwnerInfoaddresszipId').maxLength="5";
		document.getElementById('jointOwnerInfodayTimePhoneId').maxLength="10";
		document.getElementById('jointOwnerInfoeveningPhoneId').maxLength="10";
	}
	if(accountType=='CUSTODIAL_UGMA'||accountType=='CUSTODIAL_UTMA'){
		createCustodailDontValidateFields();
	}else if(accountType=='JTIC'||accountType=='JTWROS'||accountType=='JTITE'){
	    createJointDontValidateFields();
	}else if(accountType=='CORPORATE' || accountType=='PARTNERSHP'){
	    createCorporateDontValidateFields();
	}else if(accountType=='TRUST'){
		createTrutseeDontValidateFields();
	}

}

function updatePrimaryOwnerInfo(prefix)
{
	var ssnTaxIDElem=document.getElementById(prefix+'ssnTaxIdRow');
	var passportTaxIdElem=document.getElementById(prefix+'passportRow');
	var governmentidElem=document.getElementById(prefix+'govermentIdRow');
	var countryOfResidence=document.getElementById(prefix+'countryOfResidenceId');
    var citizenShip=document.getElementById(prefix+'citizenshipId');
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US" && citizenShip.options[citizenShip.selectedIndex].value!="US"){
		ssnTaxIDElem.className="hide";
		passportTaxIdElem.className="showRow";
		governmentidElem.className="showRow";
		document.getElementById('primaryOwnerDontValidateFieldsId').value="ssnTaxId"
		/*ssnTaxIDElem.style.visibility="hidden";
		ssnTaxIDElem.style.display="none";
		passportTaxIdElem.style.visibility="visible";
		passportTaxIdElem.style.display="table-row";
		governmentidElem.style.visibility="visible";
		governmentidElem.style.display="table-row";*/

	}else{
		ssnTaxIDElem.className="showRow";
		passportTaxIdElem.className="hide";
		governmentidElem.className="hide";
		document.getElementById('primaryOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment";
		/*ssnTaxIDElem.style.visibility="visible";
		ssnTaxIDElem.style.display="table-row";
		passportTaxIdElem.style.visibility="hidden";
		passportTaxIdElem.style.display="none";
		governmentidElem.style.visibility="hidden";
		governmentidElem.style.display="none";*/
	}
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US"){
		document.getElementById(prefix+'addresszipId').maxLength="25";
		document.getElementById(prefix+'dayTimePhoneId').maxLength="14";
		document.getElementById(prefix+'eveningPhoneId').maxLength="14";
	}else{
		document.getElementById(prefix+'addresszipId').maxLength="5";
		document.getElementById(prefix+'dayTimePhoneId').maxLength="10";
		document.getElementById(prefix+'eveningPhoneId').maxLength="10";
	}
}



function updateMinorInfo()
{
	var ssnTaxIDElem=document.getElementById('minorSsnTaxIdRow');
	var passportTaxIdElem=document.getElementById('minorPassportRow');
	var governmentidElem=document.getElementById('minorGovermentIdRow');
	var countryOfResidence=document.getElementById('minorOwnerInfocountryOfResidenceId');
    var citizenShip=document.getElementById('minorOwnerInfocitizenshipId');
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US" && citizenShip.options[citizenShip.selectedIndex].value!="US"){
		ssnTaxIDElem.className="hide";
		passportTaxIdElem.className="showRow";
		governmentidElem.className="showRow";

		/*ssnTaxIDElem.style.visibility="hidden";
		ssnTaxIDElem.style.display="none";
		passportTaxIdElem.style.visibility="visible";
		passportTaxIdElem.style.display="table-row";
		governmentidElem.style.visibility="visible";
		governmentidElem.style.display="table-row";*/

	}else{
		ssnTaxIDElem.className="showRow";
		passportTaxIdElem.className="hide";
		governmentidElem.className="hide";

		/*ssnTaxIDElem.style.visibility="visible";
		ssnTaxIDElem.style.display="table-row";
		passportTaxIdElem.style.visibility="hidden";
		passportTaxIdElem.style.display="none";
		governmentidElem.style.visibility="hidden";
		governmentidElem.style.display="none";*/
	}
	if(countryOfResidence.options[countryOfResidence.selectedIndex].value!="US"){
		document.getElementById('minorOwnerInfoaddresszipId').maxLength="25";
		document.getElementById('minorOwnerInfodayTimePhoneId').maxLength="14";
		document.getElementById('minorOwnerInfoeveningPhoneId').maxLength="14";
	}else{
		document.getElementById('minorOwnerInfoaddresszipId').maxLength="5";
		document.getElementById('minorOwnerInfodayTimePhoneId').maxLength="10";
		document.getElementById('minorOwnerInfoeveningPhoneId').maxLength="10";
	}
	createCustodailDontValidateFields();
}

function createCustodailDontValidateFields()
{
 var minorCountryOfResidence=document.getElementById('minorOwnerInfocountryOfResidenceId');
 var minorCountryOfCitizenship=document.getElementById('minorOwnerInfocitizenshipId');
 var jointOwnerCountryOfresidence=document.getElementById('jointOwnerInfocountryOfResidenceId');
 var jointOwnerCountryOfCitizenship=document.getElementById('jointOwnerInfocitizenshipId');
 if(minorCountryOfResidence.options[minorCountryOfResidence.selectedIndex].value != "US" && minorCountryOfCitizenship.options[minorCountryOfCitizenship.selectedIndex].value !="US"){
       	 document.getElementById('minorOwnerDontValidateFields').value = "ssnTaxId";
         }else{
       	  document.getElementById('minorOwnerDontValidateFields').value ="idNumber,issuingGovernment";
         }
         if(jointOwnerCountryOfresidence.options[jointOwnerCountryOfresidence.selectedIndex].value != 'US' && jointOwnerCountryOfCitizenship.options[jointOwnerCountryOfCitizenship.selectedIndex].value  !='US'){
       	  document.getElementById('jointOwnerDontValidateFields').value = "ssnTaxId";
           }else{
             document.getElementById('jointOwnerDontValidateFields').value ="idNumber,issuingGovernment";
        }
  document.getElementById('minorUserDontValidateFields').value="userName,password,confirmPassword,email,confirmEmail";
  document.getElementById('jointUserDontValidateFields').value="userName,password,confirmPassword,email,confirmEmail";
}
function createJointDontValidateFields()
{
  var primaryCountryOfResidence=document.getElementById('primaryOwnerCountryCode');
  var primaryCountryOfCitizenship=document.getElementById('primaryOwnerCitizenship');
  var jointOwnerCountryOfresidence=document.getElementById('jointOwnerInfocountryOfResidenceId');
  var jointOwnerCountryOfCitizenship=document.getElementById('jointOwnerInfocitizenshipId');

 if(primaryCountryOfResidence.value != 'US' && primaryCountryOfCitizenship.value !='US'){
   	 document.getElementById('primaryOwnerDontValidateFieldsId').value = "ssnTaxId";
  }else{
	 document.getElementById('primaryOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment";
  }
 if(jointOwnerCountryOfresidence.options[jointOwnerCountryOfresidence.selectedIndex].value != 'US' && jointOwnerCountryOfCitizenship.options[jointOwnerCountryOfCitizenship.selectedIndex].value  !='US'){
  	  document.getElementById('jointOwnerDontValidateFieldsId').value = "ssnTaxId";
   }else{
      document.getElementById('jointOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment";
  }
}
function createTrutseeDontValidateFields()
{
	var jointOwnerCountryOfresidence=document.getElementById('jointOwnerInfocountryOfResidenceId');
	  var jointOwnerCountryOfCitizenship=document.getElementById('jointOwnerInfocitizenshipId');
	  if(jointOwnerCountryOfresidence.options[jointOwnerCountryOfresidence.selectedIndex].value != 'US' && jointOwnerCountryOfCitizenship.options[jointOwnerCountryOfCitizenship.selectedIndex].value  !='US'){
	 	  document.getElementById('jointOwnerDontValidateFieldsId').value = "ssnTaxId,role";
	   }else{
	      document.getElementById('jointOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment,role";
	   }
	  if(trusteeCountId==1){
		  document.getElementById('trusteeUserDontValidateFields').value = "userName,password,confirmPassword,email,confirmEmail";
	  }
}
function createInvestClubAgentDontValidateFields()
{
	if(document.getElementById('ownerInfoCountryCode').value != 'US' && document.getElementById('citizenship').value !='US'){
	  document.getElementById('dontValidateFieldsId').value = "ssnTaxId,role";
	}else{
		document.getElementById('dontValidateFieldsId').value ="idNumber,issuingGovernment,role";
	}
}

function createCorporateDontValidateFields()
{
  var primaryCountryOfResidence=document.getElementById('primarycountryOfResidenceId');
  var primaryCountryOfCitizenship=document.getElementById('primarycitizenshipId');
  var jointOwnerCountryOfresidence=document.getElementById('jointOwnerInfocountryOfResidenceId');
  var jointOwnerCountryOfCitizenship=document.getElementById('jointOwnerInfocitizenshipId');

 if(primaryCountryOfResidence.value != 'US' && primaryCountryOfCitizenship.value !='US'){
   	 document.getElementById('primaryOwnerDontValidateFieldsId').value = "ssnTaxId";
  }else{
	 document.getElementById('primaryOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment";
  }
 if(jointOwnerCountryOfresidence.options[jointOwnerCountryOfresidence.selectedIndex].value != 'US' && jointOwnerCountryOfCitizenship.options[jointOwnerCountryOfCitizenship.selectedIndex].value  !='US'){
  	  document.getElementById('jointOwnerDontValidateFieldsId').value = "ssnTaxId";
   }else{
      document.getElementById('jointOwnerDontValidateFieldsId').value ="idNumber,issuingGovernment";
  }
}

/** Function for Numeric Validation **/
function onlyNumbers(e){
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
/** Function for Date Validation **/
function onlyValidateDate(e){
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
    if (keynum!=8 && keynum >0 && keynum!=47)
    {
    keychar = String.fromCharCode(keynum);
    numcheck = /\d/;
    return numcheck.test(keychar);
    }
}

/**Function for AlphaNumeric Validation **/
function onlyAlphaNumeric(e){
    var keynum;
    var keychar;
    var charcheck;
    if(window.event) //IE
       keynum = e.keyCode;
    else if(e.which) //Netscape/Firefox/Opera
       keynum = e.which;
    if(keynum!=8 && keynum >0 && keynum!=32)
    {
    keychar = String.fromCharCode(keynum);
    charcheck = /[a-zA-Z0-9]/;
    return charcheck.test(keychar);
    }
}

function onlyAlpha(e)
{
    var keynum;
    var keychar;
    var charcheck;
    if(window.event) //IE
       keynum = e.keyCode;
    else if(e.which) //Netscape/Firefox/Opera
       keynum = e.which;

    if(keynum!=8 && keynum >0 && keynum!=32)
    {
    keychar = String.fromCharCode(keynum);
    charcheck = /[a-zA-Z]/;
    return charcheck.test(keychar);
    }
}

/**function to show and hide depending on ID **/
function expandDIV(id)
{
    document.getElementById(id).style.visibility = 'visible';
    document.getElementById(id).style.display = 'inline';
}

function collapseDIV(id)
{
    document.getElementById(id).style.visibility = 'hidden';
    document.getElementById(id).style.display = 'none';
 }
function showHideAddMoreTrusteeButton(){
	if (trusteeCountId > 1 && trusteeCountId < 7) {
		//show addMorTrusteeButtonId
		expandDIV('saveNContinueButtonId');
		document.getElementById('addMorTrusteeButtonId').src="/common/images/account/add_more_trustee_button.jpg";
		expandDIV('addMorTrusteeButtonId');
	} else if(trusteeCountId == 1){
		collapseDIV('saveNContinueButtonId');
		document.getElementById('addMorTrusteeButtonId').src="/common/images/account/saveNcont_button.jpg";
		expandDIV('addMorTrusteeButtonId');
	} else {
		//hide addMorTrusteeButtonId
		document.getElementById('addMorTrusteeButtonId').src="/common/images/account/add_more_trustee_button.jpg";
		collapseDIV('addMorTrusteeButtonId');
		expandDIV('saveNContinueButtonId');
	}
}

function showHideExistingTrusteeDiv()
{
	if(trusteeCountId==1){
     	if(document.getElementById('jointNonExistingUserDivId')){
     		document.getElementById('jointNonExistingUserDivId').className="hide";
     		document.getElementById('existingUserCheckBoxRow').className="hide";
     	/*commented this to handle css problem in IE */
     		//document.getElementById('jointNonExistingUserDivId').style.display='none';
     	//document.getElementById('jointNonExistingUserDivId').style.visibility='hidden';
     	//document.getElementById('existingUserCheckBoxRow').style.visibility='hidden';
     	//document.getElementById('existingUserCheckBoxRow').style.display='none';
        	}
     	document.getElementById('trusteeUserDontValidateFields').value="userName,password,confirmPassword,email,confirmEmail";
      }else{
    	  document.getElementById('jointNonExistingUserDivId').className="showRow";
   		document.getElementById('existingUserCheckBoxRow').className="showRow";
   		/*commented this to handle css problem in IE */
     	//document.getElementById('jointNonExistingUserDivId').style.display='block';
      	//document.getElementById('jointNonExistingUserDivId').style.visibility='visible';
      	//document.getElementById('existingUserCheckBoxRow').style.visibility='visible';
     	//document.getElementById('existingUserCheckBoxRow').style.display='table-row';
   		if(document.getElementById('existingUserId').checked){
   			document.getElementById('trusteeUserDontValidateFields').value="userName,password,confirmPassword,email,confirmEmail";
   		}else{
      	document.getElementById('trusteeUserDontValidateFields').value=null;
      	}
         }
}
function showHideElement(agreementAcceptValue,id)
{
	if(agreementAcceptValue)
	{
     document.getElementById(id).style.visibility = 'visible';
     document.getElementById(id).style.display = 'inline';
	}else{
     document.getElementById(id).style.visibility = 'hidden';
     document.getElementById(id).style.display = 'none';
	}
}

function showHideMailingAddress(agreementAcceptValue,id)
{
	if(agreementAcceptValue.checked)
	{
	 document.getElementById(id).className="showTable"	;
     //document.getElementById(id).style.visibility = 'visible';
     //document.getElementById(id).style.display = 'table';
	}else{
	 document.getElementById(id).className="hide"	;
    // document.getElementById(id).style.visibility = 'hidden';
    // document.getElementById(id).style.display = 'none';
	}
}


function updateSpouseAndWitnessSignature(num)
{
	var flagVal = false;
	var signatureReq=false;
	var i=0;
	var j=0;
	while(i<7){
		if (document.getElementById('marriedRadioButtonUNMARRIED').checked ){
		flagVal=true;
		break;
		}else if(document.getElementById('percent_'+i) && document.getElementById('beneficiaryType_'+i+'_PRIMARY') && document.getElementById('beneficiaries['+i+'].beneficiarySelectedId')){
			var selElem= document.getElementById('relationship_'+i);
			var txt = selElem.options[selElem.selectedIndex].value;
			if((txt == '001'|| txt=='002' || txt=='007')&& document.getElementById('beneficiaryType_'+i+'_PRIMARY').checked && document.getElementById('percent_'+i).value=='100' ){
			flagVal=true;
			populateSpouseName(i);
			break;
			}else{
			populateSpouseName(i);
			flagVal=false;
			}
		}
	  	i++;
	}

	while(j<7){
		if(document.getElementById('beneficiaries['+j+'].beneficiarySelectedId').checked && flagVal==false){
			signatureReq=true;
			break;
	  	}else{
	  		signatureReq=false;
	  	}
		j++;
	}

	if(!signatureReq){
	 document.getElementById('beneficiaryDontValidateFields').value="spouseName,spouseSign,witnessName,witnessSign";
	}else{
	 document.getElementById('beneficiaryDontValidateFields').value="";
	}
	document.getElementById('setupBeneficiaries_spouseName').disabled = flagVal;
    document.getElementById('spouseSignId').disabled = flagVal;
    document.getElementById('setupBeneficiaries_witnessName').disabled = flagVal;
    document.getElementById('witnessSignId').disabled = flagVal;
    if(flagVal){
    document.getElementById('spousalConsentTable').className="hide";
    }else{
   	document.getElementById('spousalConsentTable').className="showTable";
    }
}
function populateSpouseName(num)
{
	var selElem= document.getElementById('relationship_'+num);
	var txt = selElem.options[selElem.selectedIndex].value;
	if((txt == '001'|| txt=='002' || txt=='007')&& document.getElementById('setupBeneficiaries_spouseName').value=='' ){
   	document.getElementById('setupBeneficiaries_spouseName').value=document.getElementById('beneficiaryFirstName_'+num).value+" "+document.getElementById('beneficiaryLastName_'+num).value;
    document.getElementById('spouseSignId').checked="checked";
	}/*else{
	document.getElementById('setupBeneficiaries_spouseName').value="";
	}*/
}

function createIRABeneficiaryDontValidateFields(){
	var spouseNameElem=document.getElementById('setupBeneficiaries_spouseName');
    var spouseSignElem=document.getElementById('spouseSignId');
    var witnessNameElem=document.getElementById('setupBeneficiaries_witnessName');
    var witnessSignElem=document.getElementById('witnessSignId');
    document.getElementById('beneficiaryDontValidateFields').value="";
	if(spouseNameElem.disabled=='disabled'|| spouseNameElem.disabled==true){
	 document.getElementById('beneficiaryDontValidateFields').value+="spouseName,";
	}
	if(spouseSignElem.disabled=='disabled'|| spouseSignElem.disabled==true){
		 document.getElementById('beneficiaryDontValidateFields').value+="spouseSign,";
		}

	if(witnessNameElem.disabled=='disabled'|| witnessNameElem.disabled==true){
		 document.getElementById('beneficiaryDontValidateFields').value+="witnessName,";
		}
	if(witnessSignElem.disabled=='disabled'|| witnessSignElem.disabled==true){
		 document.getElementById('beneficiaryDontValidateFields').value+="witnessSign";
		}

}
/**Allows only float numbers **/
function onlyFLoatNumbers(e)
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

if (keynum!=8 && keynum!=46 && keynum >0)
{
keychar = String.fromCharCode(keynum);
numcheck = /\d/;
return numcheck.test(keychar);
}
}

//
function enableDisableElem(selElem,id){
	 var flagVal = true;
	 if (selElem.checked) {
	        flagVal = false;
	    }
	 document.getElementById(id).disabled=flagVal;

}


/* TO EXPAND AND COLLAPSE DIV USING PLUS AND MINUS GRAPHIC */


// --------------------- Variables --------------------------
// Default values for image names of the images/text to expand and collapse the hidden text.
// ----------------------------------------------------------
var expandImage = "/common/images/account/plus.jpg";
var collapseImage = "/common/images/account/minus.jpg";

/* deepa
var defaultExpandText = "Show More...";
var defaultCollapseText = "Show Less....";

*/

// ---------------- setDefaultExpanderImages(...) ------------------
// Call this method to change the names of the images used for the "expand" and "collapse" buttons
// The parameters should be the actual image URLS for the images, which may be relative or absolute
// ----------------------------------------------------------
function setDefaultExpanderImages(expandImgName, collapseImgName) {
    expandImage = expandImgName;
		collapseImage = collapseImgName;
}

// ---------------- setDefaultExpanderText(...) ------------------
// Call this method to change the strings used for the "expand" and "collapse" links
// expandText = "Expand" or "Show More" or "Reveal Answer" etc.
// collapseText = "Hide" or "Show Less" or "Hide Answer" etc.
// ----------------------------------------------------------
/* deepa
function setDefaultExpanderText(expandText, collapseText) {
    defaultExpandText = expandText;
		defaultCollapseText = collapseText;
}
*/
// ------------------- toggleBlock(...) ---------------------
// Method to Collapse/Expand a block of text, using default image names
// hiddenDivId - the ID of div or span to show/hide
// expander - pass in a reference to the image tag for the expender
//     usually this will just be "this" (without any quotes)
// ----------------------------------------------------------
//function toggleBlockImage (hiddenDivId, expander) {
//	alert(collapseImage);
//		toggleBlockImage(hiddenDivId, expander, expandImage, collapseImage);
//}

// ------------------- toggleBlockImage(...) ---------------------
// Method to Collapse/Expand a block of text, using custom image names
// hiddenDivId - the ID of div or span to show/hide
// expander - pass in a reference to the image tag for the expender
//     usually this will just be "this" (without any quotes)
// expandImageName & collapseImageName are optional parameters
// ----------------------------------------------------------
function toggleBlockImage (hiddenDivId, expander, expandImageName, collapseImageName) {
    if (document.getElementById) {
        if (document.getElementById(hiddenDivId).style.display == "none") {
            document.getElementById(hiddenDivId).style.display = "";
						expander.src = (collapseImageName)?collapseImageName:collapseImage;
        } else {
            document.getElementById(hiddenDivId).style.display = "none";
            expander.src = (expandImageName)?expandImageName:expandImage;
        }
    }
}


// ----------------- toggleBlockText(...) -------------------
// Method to show or hide a paragraph or other block or span of text.
// Use this version for text links to show/hide, and custom link text
// Parameters:
// hiddenDivId - the ID attribute of div to show or hide
// expander - pass in a reference to the image tag for the expender
//     usually this will just be "this" (without any quotes)
// expandText - the text to show when the block of text is hidden (to show the text) OPTIONAL
// collapseText - the text to show when the block of text is showing (to hide the text) OPTIONAL
// ----------------------------------------------------------

/* deepa

function toggleBlockText (hiddenDivId, expander, expandText, collapseText) {
    if (document.getElementById) {
        if (document.getElementById(hiddenDivId).style.display == "none") {
            document.getElementById(hiddenDivId).style.display = "";
						expander.innerHTML = collapseText?collapseText:defaultCollapseText;
        } else {
            document.getElementById(hiddenDivId).style.display = "none";
						expander.innerHTML = expandText?expandText:defaultExpandText;
        }
    }
}
*/
// ----------------------------------------------------------
// another different way to toggle how much is shown...scrollbars
// collapseHeight - eg: "200px"
// ----------------------------------------------------------
function toggleOverflowImage (hiddenDivId, expander, expandImageName, collapseImageName, collapseHeight) {
    if (document.getElementById) {
        if (document.getElementById(hiddenDivId).style.overflow == "scroll") {
            document.getElementById(hiddenDivId).style.overflow = "auto";
						document.getElementById(hiddenDivId).style.height = "";
						expander.src = (collapseImageName)?collapseImageName:collapseImage;
				} else {
            document.getElementById(hiddenDivId).style.overflow = "scroll";
						document.getElementById(hiddenDivId).style.height = collapseHeight;
            expander.src = (expandImageName)?expandImageName:expandImage;
				}
    }
}

// ----------------------------------------------------------
// another different way to toggle how much is shown...scrollbars
// collapseHeight - eg: "200px"
// ----------------------------------------------------------
/* deepa
function toggleOverflowText (hiddenDivId, expander, expandText, collapseText, collapseHeight) {
    if (document.getElementById) {
        if (document.getElementById(hiddenDivId).style.overflow == "scroll") {
            document.getElementById(hiddenDivId).style.overflow = "auto";
						document.getElementById(hiddenDivId).style.height = "";
					  expander.innerHTML = collapseText?collapseText:defaultHideText;
				} else {
            document.getElementById(hiddenDivId).style.overflow = "scroll";
						document.getElementById(hiddenDivId).style.height = collapseHeight;
						expander.innerHTML = expandText?expandText:defaultExpandText;
				}
    }
}
*/
/* end: TO EXPAND AND COLLAPSE DIV USING PLUS AND MINUS GRAPHIC */
function makeSsnReadOnly(field) {
	if(field!=null){
	if(field.value!=null && field.value.length == 9){
		field.readOnly=true;
	} else {
		field.readOnly=false;
	}
}
}


function createSoleOfficerDontValidateFields(soleOfficer) {
    var flagValue = soleOfficer.checked;
	/*if (soleOfficer.checked) {
		document.getElementById('jointUserDontValidateFieldsId').value = "firstName,lastName,middleInitial,dateOfBirth,userName,password,confirmPassword,password,email,confirmEmail"
		document.getElementById('jointOwnerDontValidateFieldsId').value = "ssnTaxId,suffix,dayTimePhone,address.address1,address.city,address.zip,mailingAddress.address1,mailingAddress.city,mailingAddress.zip,eveningPhone,issuingGovernment,idNumber";
		document.getElementById('jointPersonalInformationDontValidateFieldsId').value = "drivingLicenseNumber";
	} else {
		document.getElementById('jointUserDontValidateFieldsId').value = ""
		document.getElementById('jointOwnerDontValidateFieldsId').value = "";
		document.getElementById('jointPersonalInformationDontValidateFieldsId').value = "";
	}*/

	if(flagValue){
		//document.getElementById('existingUserId').checked = flagValue;
		document.getElementById('existingUserId').disabled = true;
	}else{
		document.getElementById('existingUserId').disabled = false;
	}

	if (document.getElementById('jointExistingUserDivId').style.display == 'block') {
		document.getElementById('jointExistingUsernameId').disabled = flagValue;
		document.getElementById('jointExistingUserPasswordId').disabled = flagValue;
	} else if (document.getElementById('jointNonExistingUserDivId').style.display == 'block') {
		document.getElementById('jointuserInfouserNameId').disabled = flagValue;
		document.getElementById('jointuserInfoPasswordId').disabled = flagValue;
		document.getElementById('jointuserInfoConfirmPasswordId').disabled = flagValue;
		document.getElementById('jointuserInfoEmailId').disabled = flagValue;
		document.getElementById('jointuserInfoConfirmEmailId').disabled = flagValue;
	}

	document.getElementById('jointOwnerInfoFirstNameId').disabled = flagValue;
	document.getElementById('jointOwnerInfoMiddleInitialId').disabled = flagValue;
	document.getElementById('jointOwnerInfoLastNameId').disabled = flagValue;
	document.getElementById('jointOwnerInfoSuffixId').disabled = flagValue;
	document.getElementById('jointOwnerInfoDateOfBirthId').disabled = flagValue;
	document.getElementById('jointOwnerInfocountryOfResidenceId').disabled = flagValue;
	document.getElementById('jointOwnerInfoaddressaddress1Id').disabled = flagValue;
	document.getElementById('jointOwnerInfoaddressaddress2Id').disabled = flagValue;
	document.getElementById('jointOwnerInfoaddresscityId').disabled = flagValue;

	if (document.getElementById('jointOwnerInfoaddressstateCodeDivId').style.display == 'block') {
		document.getElementById('jointOwnerInfoaddressstateCodeId').disabled = flagValue;
	} else if (document.getElementById('jointOwnerInfoaddressnonUsStateDivId').style.display == 'block') {
		document.getElementById('jointOwnerInfoaddressnonUsStateId').disabled = flagValue;
	}
	document.getElementById('jointOwnerInfoaddresszipId').disabled = flagValue;
	document.getElementById('jointOwnerInfodayTimePhoneId').disabled = flagValue;
	document.getElementById('jointOwnerInfoeveningPhoneId').disabled = flagValue;
	document.getElementById('jointOwnerInfocitizenshipId').disabled = flagValue;

	if (document.getElementById('jointOwnerInfossnTaxIdRow')) {
		document.getElementById('jointOwnerInfoSSNTaxId').disabled = flagValue;
	} else if (document.getElementById('jointOwnerInfopassportRow')
			&& document.getElementById('jointOwnerInfogovermentIdRow')) {
		document.getElementById('corporateOwnerInformation_jointOwnerInfo_idNumber').disabled = flagValue;
		document.getElementById('corporateOwnerInformation_jointOwnerInfo_issuingGovernment').disabled = flagValue;
	}
	document.getElementById('jointMailingAddressId').disabled = flagValue;

	if (document.getElementById('jointMailingAddressId').checked) {
		document.getElementById('jointmailingAddressaddress1Id').disabled = flagValue;
		document.getElementById('jointmailingAddressaddress2Id').disabled = flagValue;
		document.getElementById('jointmailingAddresscityId').disabled = flagValue;
		if (document.getElementById('jointmailingaddressstateCodeDivId').style.display == 'block') {
			document.getElementById('jointOwnerInfoaddressstateCodeId').disabled = flagValue;
		} else if (document
				.getElementById('jointmailingaddressnonUsStateDivId').style.display == 'block') {
			document.getElementById('jointOwnerInfoaddressnonUsStateId').disabled = flagValue;
		}
		document.getElementById('jointmailingAddresscountryCodeId').disabled = flagValue;
		document.getElementById('jointmailingaddresszipId').disabled = flagValue;
	}
	document.getElementById('jointOwnerInfoMaritalStatusId').disabled = flagValue;
	document.getElementById('jointOwnerInfoNumberOfDependentsId').disabled = flagValue;
	document.getElementById('jointOwnerInfodoNotHaveLicenseId').disabled = flagValue;
	document.getElementById('jointOwnerInfodrivingLicenseNumberId').disabled = flagValue;
	document.getElementById('jointOwnerInfostateOfIssuanceDLId').disabled = flagValue;
}

function setNumbersOnly(elemField) {
    var fieldValue = elemField.value;
    var newValue = "";
    var numcheck = /\d/;

    for (var i = 0; i < fieldValue.length; ++i ) {
        if (numcheck.test(fieldValue.charAt(i))) {
            newValue = newValue.concat(fieldValue.charAt(i));
        }
    }
    elemField.value = newValue;
}

function setLabelRequiredProperty(prefix,countryElem){
	if(countryElem!=null){
	if(countryElem.options[countryElem.selectedIndex].value=='US'){
	document.getElementById(prefix+'USCityLabel').className='showTableCell';
	document.getElementById(prefix+'NonUSCityLabel').className='hide';
	document.getElementById(prefix+'USZipLabel').className='showTableCell';
	document.getElementById(prefix+'NonUSZipLabel').className='hide';
	document.getElementById(prefix+'USStateLabel').className='showTableCell';
	document.getElementById(prefix+'NonUSStateLabel').className='hide';
	}else{
	document.getElementById(prefix+'USCityLabel').className='hide';
	document.getElementById(prefix+'NonUSCityLabel').className='showTableCell';
	document.getElementById(prefix+'USZipLabel').className='hide';
	document.getElementById(prefix+'NonUSZipLabel').className='showTableCell';
	document.getElementById(prefix+'USStateLabel').className='hide';
	document.getElementById(prefix+'NonUSStateLabel').className='showTableCell';
	}
	}
}
function setPersonalDetailsLabel(prefix,selElem){
 var flagVal=true;
 if(selElem.checked){
  flagVal=false;
 }
 if(flagVal){
	 document.getElementById(prefix+'DLStateIssuanceRequiredLabel').className='showTableCell';
	 document.getElementById(prefix+'DriverLicenseRequiredLabel').className='showTableCell';
	 document.getElementById(prefix+'DLStateIssuanceLabel').className='hide';
	 document.getElementById(prefix+'DriverLicenseLabel').className='hide';
 }else{
	 document.getElementById(prefix+'DLStateIssuanceRequiredLabel').className='hide';
	 document.getElementById(prefix+'DriverLicenseRequiredLabel').className='hide';
	 document.getElementById(prefix+'DLStateIssuanceLabel').className='showTableCell';
	 document.getElementById(prefix+'DriverLicenseLabel').className='showTableCell';
 }
}
function setEmploymentLabels(prefix,selElem){
	var txt = selElem.value;
    var flagVal = true;
    if (txt == 'Employed') {
        flagVal = false;
    }
    if(flagVal){
    	 document.getElementById(prefix+'OccupationLabel').className='showTableCell';
    	 document.getElementById(prefix+'NameLabel').className='showTableCell';
    	 document.getElementById(prefix+'NatureOfBusLabel').className='showTableCell';
    	 document.getElementById(prefix+'AddressLine1Label').className='showTableCell';
    	 document.getElementById(prefix+'addressNonUSCityLabel').className='showTableCell';
    	 document.getElementById(prefix+'addressNonUSStateLabel').className='showTableCell';
    	 document.getElementById(prefix+'addressNonUSZipLabel').className='showTableCell';
    	 document.getElementById(prefix+'CountryLabel').className='showTableCell';
    	 document.getElementById(prefix+'PhoneLabel').className='showTableCell';

    	 document.getElementById(prefix+'RequiredOccupationLabel').className='hide';
    	 document.getElementById(prefix+'RequiredNameLabel').className='hide';
    	 document.getElementById(prefix+'RequiredNatureOfBusLabel').className='hide';
    	 document.getElementById(prefix+'RequiredAddressLine1Label').className='hide';
    	 document.getElementById(prefix+'addressUSCityLabel').className='hide';
    	 document.getElementById(prefix+'addressUSStateLabel').className='hide';
    	 document.getElementById(prefix+'RequiredCountryLabel').className='hide';
    	 document.getElementById(prefix+'addressUSZipLabel').className='hide';
    	 document.getElementById(prefix+'RequiredPhoneLabel').className='hide';
    	 }else{
    	 document.getElementById(prefix+'RequiredOccupationLabel').className='showTableCell';
    	 document.getElementById(prefix+'RequiredNameLabel').className='showTableCell';
    	 document.getElementById(prefix+'RequiredNatureOfBusLabel').className='showTableCell';
    	 document.getElementById(prefix+'RequiredAddressLine1Label').className='showTableCell';
    	 document.getElementById(prefix+'addressUSCityLabel').className='showTableCell';
    	 document.getElementById(prefix+'addressUSStateLabel').className='showTableCell';
    	 document.getElementById(prefix+'RequiredCountryLabel').className='showTableCell';
    	 document.getElementById(prefix+'addressUSZipLabel').className='showTableCell';
    	 document.getElementById(prefix+'RequiredPhoneLabel').className='showTableCell';

    	 document.getElementById(prefix+'OccupationLabel').className='hide';
    	 document.getElementById(prefix+'NameLabel').className='hide';
    	 document.getElementById(prefix+'NatureOfBusLabel').className='hide';
    	 document.getElementById(prefix+'AddressLine1Label').className='hide';
    	 document.getElementById(prefix+'addressNonUSCityLabel').className='hide';
    	 document.getElementById(prefix+'addressNonUSStateLabel').className='hide';
    	 document.getElementById(prefix+'CountryLabel').className='hide';
    	 document.getElementById(prefix+'addressNonUSZipLabel').className='hide';
    	 document.getElementById(prefix+'PhoneLabel').className='hide';
    	}
    if(document.getElementById(prefix+'AddresscountryCodeId').value=='US'&& flagVal){
     document.getElementById(prefix+'addressNonRequiredUSStateLabel').className='showTableCell';
   	 document.getElementById(prefix+'addressNonRequiredUSZipLabel').className='showTableCell';
   	 document.getElementById(prefix+'addressNonUSStateLabel').className='hide';
	 document.getElementById(prefix+'addressNonUSZipLabel').className='hide';
    }else{
       	document.getElementById(prefix+'addressNonRequiredUSZipLabel').className='hide';
      	document.getElementById(prefix+'addressNonRequiredUSStateLabel').className='hide';
    }
     if(document.getElementById(prefix+'AddresscountryCodeId').value!='US'&& flagVal){
     //document.getElementById('addressNonRequiredUSZipLabel').className='hide';
     //document.getElementById('addressNonRequiredUSStateLabel').className='hide';
     document.getElementById(prefix+'addressNonUSStateLabel').className='showTableCell';
     document.getElementById(prefix+'addressNonUSZipLabel').className='showTableCell';
    }
}

function setOwnerInformationLabels(prefix,selElem){
	var flagValue=false;
	if(selElem.checked){
	flagValue=true;
	}
	 if(flagValue){
		 document.getElementById(prefix+'FirstNameLabel').className='showTableCell';
		 document.getElementById(prefix+'LastNameLabel').className='showTableCell';
		 document.getElementById(prefix+'DateOfBirthLabel').className='showTableCell';
		 document.getElementById(prefix+'ResidenceCountryLabel').className='showTableCell';
		 document.getElementById(prefix+'AddressLine1Label').className='showTableCell';
		 document.getElementById('jointaddressNonUSCityLabel').className='showTableCell';
		 document.getElementById('jointaddressNonUSStateLabel').className='showTableCell';
		 document.getElementById('jointaddressNonUSZipLabel').className='showTableCell';
		 document.getElementById(prefix+'DayTimePhoneLabel').className='showTableCell';
		 document.getElementById(prefix+'EveningPhoneLabel').className='showTableCell';
		 document.getElementById(prefix+'CitizenshipLabel').className='showTableCell';
		 document.getElementById(prefix+'SSNLabel').className='showTableCell';
		 document.getElementById(prefix+'PassportLabel').className='showTableCell';
		 document.getElementById(prefix+'IssuingGovtLabel').className='showTableCell';
		 document.getElementById(prefix+'MartialStausLabel').className='showTableCell';
		 document.getElementById(prefix+'DependentLabel').className='showTableCell';
		 document.getElementById(prefix+'UserNameLabel').className='showTableCell';
		 document.getElementById(prefix+'PasswordLabel').className='showTableCell';
		 document.getElementById(prefix+'ConfPasswordLabel').className='showTableCell';
		 document.getElementById(prefix+'EmailLabel').className='showTableCell';
		 document.getElementById(prefix+'ConfEmailLabel').className='showTableCell';

		 if( document.getElementById('jointMailingAddressId').checked){
		 document.getElementById(prefix+'MailingAddressLine1').className='showTableCell';
		 document.getElementById('jointmailingaddressNonUSCityLabel').className='showTableCell';
		 document.getElementById('jointmailingaddressNonUSStateLabel').className='showTableCell';
		 document.getElementById(prefix+'MailingAddressCountryLabel').className='showTableCell';
		 document.getElementById('jointmailingaddressNonUSZipLabel').className='showTableCell';
	    }

		 document.getElementById(prefix+'RequiredFirstNameLabel').className='hide';
		 document.getElementById(prefix+'RequiredLastNameLabel').className='hide';
		 document.getElementById(prefix+'RequiredDateOfBirthLabel').className='hide';
		 document.getElementById(prefix+'RequiredResidenceCountryLabel').className='hide';
		 document.getElementById(prefix+'RequiredAddressLine1Label').className='hide';
		 document.getElementById('jointaddressUSCityLabel').className='hide';
		 document.getElementById('jointaddressUSStateLabel').className='hide';
		 document.getElementById('jointaddressUSZipLabel').className='hide';
		 document.getElementById(prefix+'RequiredDayTimePhoneLabel').className='hide';
		 document.getElementById(prefix+'RequiredEveningPhoneLabel').className='hide';
		 document.getElementById(prefix+'RequiredCitizenshipLabel').className='hide';
		 document.getElementById(prefix+'RequiredSSNLabel').className='hide';
		 document.getElementById(prefix+'RequiredPassportLabel').className='hide';
		 document.getElementById(prefix+'RequiredIssuingGovtLabel').className='hide';
		 document.getElementById(prefix+'RequiredMartialStausLabel').className='hide';
		 document.getElementById(prefix+'RequiredDependentLabel').className='hide';
		 document.getElementById(prefix+'RequiredUserNameLabel').className='hide';
		 document.getElementById(prefix+'RequiredPasswordLabel').className='hide';
		 document.getElementById(prefix+'RequiredConfPasswordLabel').className='hide';
		 document.getElementById(prefix+'RequiredEmailLabel').className='hide';
		 document.getElementById(prefix+'RequiredConfEmailLabel').className='hide';
		 if( document.getElementById('jointMailingAddressId').checked){
		 document.getElementById(prefix+'RequiredMailingAddressLine1').className='hide';
		 document.getElementById('jointmailingaddressUSCityLabel').className='hide';
		 document.getElementById('jointmailingaddressUSStateLabel').className='hide';
		 document.getElementById(prefix+'RequiredMailingAddressCountryLabel').className='hide';
		 document.getElementById('jointmailingaddressUSZipLabel').className='hide';
	    }
		 if(flagValue && (document.getElementById('jointOwnerInfodoNotHaveLicenseId').checked||!document.getElementById('jointOwnerInfodoNotHaveLicenseId').checked)){
		 document.getElementById('jointpersonalDLStateIssuanceLabel').className='showTableCell';
		 document.getElementById('jointpersonalDriverLicenseLabel').className='showTableCell';
		 document.getElementById('jointpersonalDLStateIssuanceRequiredLabel').className='hide';
		 document.getElementById('jointpersonalDriverLicenseRequiredLabel').className='hide';
		 }


	 }else{
		 document.getElementById(prefix+'FirstNameLabel').className='hide';
		 document.getElementById(prefix+'LastNameLabel').className='hide';
		 document.getElementById(prefix+'DateOfBirthLabel').className='hide';
		 document.getElementById(prefix+'ResidenceCountryLabel').className='hide';
		 document.getElementById(prefix+'AddressLine1Label').className='hide';
		 document.getElementById('jointaddressNonUSCityLabel').className='hide';
		 document.getElementById('jointaddressNonUSStateLabel').className='hide';
		 document.getElementById('jointaddressNonUSZipLabel').className='hide';
		 document.getElementById(prefix+'DayTimePhoneLabel').className='hide';
		 document.getElementById(prefix+'EveningPhoneLabel').className='hide';
		 document.getElementById(prefix+'CitizenshipLabel').className='hide';
		 document.getElementById(prefix+'SSNLabel').className='hide';
		 document.getElementById(prefix+'PassportLabel').className='hide';
		 document.getElementById(prefix+'IssuingGovtLabel').className='hide';
		 document.getElementById(prefix+'MartialStausLabel').className='hide';
		 document.getElementById(prefix+'DependentLabel').className='hide';
		 document.getElementById(prefix+'UserNameLabel').className='hide';
		 document.getElementById(prefix+'PasswordLabel').className='hide';
		 document.getElementById(prefix+'ConfPasswordLabel').className='hide';
		 document.getElementById(prefix+'EmailLabel').className='hide';
		 document.getElementById(prefix+'ConfEmailLabel').className='hide';

		 if( document.getElementById('jointMailingAddressId').checked){
		 document.getElementById(prefix+'MailingAddressLine1').className='hide';
		 document.getElementById('jointmailingaddressNonUSCityLabel').className='hide';
		 document.getElementById('jointmailingaddressNonUSStateLabel').className='hide';
		 document.getElementById(prefix+'MailingAddressCountryLabel').className='hide';
		 document.getElementById('jointmailingaddressNonUSZipLabel').className='hide';
	    }

		 document.getElementById(prefix+'RequiredFirstNameLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredLastNameLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredDateOfBirthLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredResidenceCountryLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredAddressLine1Label').className='showTableCell';
		 document.getElementById('jointaddressUSCityLabel').className='showTableCell';
		 document.getElementById('jointaddressUSStateLabel').className='showTableCell';
		 document.getElementById('jointaddressUSZipLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredDayTimePhoneLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredEveningPhoneLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredCitizenshipLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredSSNLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredPassportLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredIssuingGovtLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredMartialStausLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredDependentLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredUserNameLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredPasswordLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredConfPasswordLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredEmailLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredConfEmailLabel').className='showTableCell';
		 if( document.getElementById('jointMailingAddressId').checked){
		 document.getElementById(prefix+'RequiredMailingAddressLine1').className='showTableCell';
		 document.getElementById('jointmailingaddressUSCityLabel').className='showTableCell';
		 document.getElementById('jointmailingaddressUSStateLabel').className='showTableCell';
		 document.getElementById(prefix+'RequiredMailingAddressCountryLabel').className='showTableCell';
		 document.getElementById('jointmailingaddressUSZipLabel').className='showTableCell';

	 }
	}
	 if(flagValue && (document.getElementById('jointOwnerInfodoNotHaveLicenseId').checked)){
		 document.getElementById('jointpersonalDLStateIssuanceRequiredLabel').className='showTableCell';
		 document.getElementById('jointpersonalDriverLicenseRequiredLabel').className='showTableCell';
		 document.getElementById('jointpersonalDLStateIssuanceLabel').className='hide';
		 document.getElementById('jointpersonalDriverLicenseLabel').className='hide';
		 }
}


function updateFirmNameAndRelationshipLabels(prefix){
	if(document.getElementById(prefix+'exchangeFirmIdtrue').checked	|| document.getElementById(prefix+'shareHolderinPublicCompanyIdtrue').checked){
		document.getElementById(prefix+'employerNonRequiredfirmNameLabel').className='hide';
		document.getElementById(prefix+'employerRequiredfirmNameLabel').className='showTableCell';
		document.getElementById(prefix+'employerNonRequiredfirmRelationLabel').className='hide';
		document.getElementById(prefix+'employerRequiredfirmRelationLabel').className='showTableCell';
	}else{
	document.getElementById(prefix+'employerNonRequiredfirmNameLabel').className='showTableCell';
	document.getElementById(prefix+'employerRequiredfirmNameLabel').className='hide';
	document.getElementById(prefix+'employerNonRequiredfirmRelationLabel').className='showTableCell';
	document.getElementById(prefix+'employerRequiredfirmRelationLabel').className='hide';
	}
}
function enableDisableCopyAddressCheckBox(accountType){
	if(accountType=='CUSTODIAL_UGMA'){
    var selState=document.getElementById('jointOwnerInfoaddressstateCodeId');
    if(selState.options[selState.selectedIndex].value=='SC'||selState.options[selState.selectedIndex].value=='VT'){
      document.getElementById('copyDetailsId').disabled=false;
    }else{
 	 document.getElementById('copyDetailsId').disabled=true;
    }
}
}

function makeFieldReadOnly(field) {
	if(field!=null){
	if(field.value!=null){
		field.readOnly=true;
	} else {
		field.readOnly=false;
	}
}
}

function createPrimaryDontValidateFields(anyAccountExist){

	if(anyAccountExist==true){
	document.getElementById('dontValidateUserInfoFields').value="userName,password,confirmPassword,email,confirmEmail,firstName,dateOfBirth,lastName";
	}else{
	document.getElementById('dontValidateUserInfoFields').value="userName,password,confirmPassword,email,confirmEmail";
	}
}

function restrictPasswordFieldCharacters(e){
	var keynum;
	    var keychar;
	    var charcheck;
	    if(window.event) //IE
	       keynum = e.keyCode;
	    else if(e.which) //Netscape/Firefox/Opera
	       keynum = e.which;

	    if(keynum==32)
	    	return false;
	    else
	    	return true;
}

function checkAge(input){
	var today = new Date();
	var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
	var d =input.value;
	if (!validformat.test(input.value)) {   // check valid format
	showMessage(input);
	return false;
	}
    d = (d).split("/");
	var byr = parseInt(d[2]);
	var nowyear = today.getFullYear();
	if (byr >= nowyear || byr < 1910) {  // check valid year
	showMessage(input);
	return false;
	}
	var bmth = parseInt(d[0],10)-1;   // radix 10!
	if (bmth <0 || bmth >11) {  // check valid month 0-11
	showMessage(input)
	return false;
	}
	var bdy = parseInt(d[1],10);   // radix 10!
	var dim = daysInMonth(bmth+1,byr);
	if (bdy <1 || bdy > dim) {  // check valid date according to month
	showMessage(input);
	return false;
	}

	var age = nowyear - byr;
	var nowmonth = today.getMonth();
	var nowday = today.getDate();
	if (bmth > nowmonth) {age = age - 1}  // next birthday not yet reached
	else if (bmth == nowmonth && nowday < bdy) {age = age - 1}
	if (age < 18) {
	alert ("You should be 18 years to open an account.");
	return false;
	}
}

function showMessage(input) {
	alert ("Invalid date of birth - please re-enter as MM/DD/YYYY");
	input.value = "";
	input.focus();
	}

function daysInMonth(month,year) {  // months are 1-12
	var dd = new Date(year, month, 0);
	return dd.getDate();
	}

function notExistingUser(existingUser,prefix){
	if(existingUser==false){
	  if(document.getElementById(prefix+'OwnerInfoUserId').value==""){
	  document.getElementById(prefix+'OwnerInfoFirstNameId').value="";
	  document.getElementById(prefix+'OwnerInfoMiddleInitialId').value="";
	  document.getElementById(prefix+'OwnerInfoLastNameId').value="";
	  document.getElementById(prefix+'OwnerInfoDateOfBirthId').value="";
	  document.getElementById(prefix+'OwnerInfoaddressaddress1Id').value="";
	  document.getElementById(prefix+'OwnerInfoaddressaddress2Id').value="";
	  document.getElementById(prefix+'OwnerInfoaddresscityId').value="";
	  document.getElementById(prefix+'OwnerInfoaddresszipId').value="";
	  document.getElementById(prefix+'OwnerInfodayTimePhoneId').value="";
	  document.getElementById(prefix+'OwnerInfoeveningPhoneId').value="";
	  document.getElementById(prefix+'OwnerInfoSSNTaxId').value="";
	  if(document.getElementById(prefix+'OwnerInfopassportRow')){
		  document.getElementById(prefix+'OwnerInfoidNumber').value=""; 
		  document.getElementById(prefix+'OwnerInfoissuingGovernment').value="";
	  }
	  if(document.getElementById(prefix+'MailingAddressId').checked){
		  document.getElementById('jointmailingAddressaddress1Id').value="";
		  document.getElementById('jointmailingAddressaddress2Id').value="";
		  document.getElementById('jointmailingAddresscityId').value="";
		  document.getElementById('jointmailingaddresszipId').value="";
	   }
	  if(document.getElementById(prefix+'MaritalStatusId')){
			 document.getElementById(prefix+'OwnerInfoMaritalStatusId').value="";
		  }
		 if(document.getElementById(prefix+'OwnerInfodoNotHaveLicenseId')){
			 document.getElementById(prefix+'OwnerInfodoNotHaveLicenseId').checked = false;
			 document.getElementById(prefix+'OwnerInfodrivingLicenseNumberId').value = "";
			 document.getElementById(prefix+'OwnerInfodrivingLicenseNumberId').disabled = false;
			 document.getElementById(prefix+'OwnerInfostateOfIssuanceDLId').disabled = false;
			 document.getElementById(prefix+'OwnerInfostateOfIssuanceDLId').selectedIndex = 0;
		  }
	  }
	}
}

function notExistingTrusteeUser(existingUser,prefix){
	
	if(existingUser==false){
		  if(document.getElementById(prefix+'OwnerInfoUserId').value==""){
			  notExistingUser(existingUser,prefix);
			  document.getElementById(prefix+'employmentStatusId').selectedIndex=0;
			  document.getElementById(prefix+'occupationId').value="";
		      document.getElementById(prefix+'employerNameId').value="";
			  document.getElementById(prefix+'natureOfBusinessId').value="";
			  document.getElementById(prefix+'employerAddressaddress1Id').value="";
			  document.getElementById(prefix+'employerAddressaddress2Id').value="";
			  document.getElementById(prefix+'employerAddresscityId').value="";
			  if(document.getElementById(prefix+'addressnonUsStateDivId')){
				  document.getElementById(prefix+'employerAddressnonUsStateId').value="";
			  }
			  document.getElementById(prefix+'addresszipId').value="";
			  document.getElementById(prefix+'employerPhoneId').value="";
			  document.getElementById(prefix+'exchangeFirmName').value="";
			  document.getElementById(prefix+'nasdFirmRelationship').value="";
			  updateEmploymentDetails(document.getElementById(prefix+'employmentStatusId'), 'joint');
		  }
	}
}

function notPrimaryExistingUser(existingUser,prefix){
	if(existingUser==false){
	  if(document.getElementById(prefix+'UserId').value==""){
	  document.getElementById(prefix+'FirstNameId').value="";
	  document.getElementById(prefix+'MiddleInitialId').value="";
	  document.getElementById(prefix+'LastNameId').value="";
	  document.getElementById(prefix+'DateOfBirthId').value="";
	  document.getElementById(prefix+'addressaddress1Id').value="";
	  document.getElementById(prefix+'addressaddress2Id').value="";
	  document.getElementById(prefix+'addresscityId').value="";
	  document.getElementById(prefix+'addresszipId').value="";
	  document.getElementById(prefix+'dayTimePhoneId').value="";
	  document.getElementById(prefix+'eveningPhoneId').value="";
	  document.getElementById(prefix+'SSNTaxId').value="";
	  if(document.getElementById(prefix+'passportRow')){
		  document.getElementById(prefix+'idNumber').value=""; 
		  document.getElementById(prefix+'issuingGovernment').value="";
	  }
	  if(document.getElementById(prefix+'mailingAddressId').checked){
		  document.getElementById(prefix+'mailingAddressaddress1Id').value="";
		  document.getElementById(prefix+'mailingAddressaddress2Id').value="";
		  document.getElementById(prefix+'mailingAddresscityId').value="";
		  document.getElementById(prefix+'mailingaddresszipId').value="";
	}
	  if(document.getElementById(prefix+'MaritalStatusId')){
			 document.getElementById(prefix+'MaritalStatusId').value="";
		  }
		 if(document.getElementById(prefix+'doNotHaveLicenseId')){
			 document.getElementById(prefix+'doNotHaveLicenseId').checked = false;
			 document.getElementById(prefix+'drivingLicenseNumberId').value = "";
			 document.getElementById(prefix+'drivingLicenseNumberId').disabled = false;
			 document.getElementById(prefix+'stateOfIssuanceDLId').disabled = false;
			 document.getElementById(prefix+'stateOfIssuanceDLId').selectedIndex = 0;
		  }
	  }
	}
}


function disableFieldsIfExistingUser(existingUser,prefix){
	if(existingUser==true){
	  document.getElementById(prefix+'TitleId').disabled=true;
	  document.getElementById(prefix+'SuffixId').disabled=true;
	  document.getElementById(prefix+'FirstNameId').disabled=true;
	  document.getElementById(prefix+'MiddleInitialId').disabled=true;
	  document.getElementById(prefix+'LastNameId').disabled=true;
	  document.getElementById(prefix+'DateOfBirthId').disabled=true;
	  document.getElementById(prefix+'addressaddress1Id').disabled=true;
	  document.getElementById(prefix+'addressaddress2Id').disabled=true;
	  document.getElementById(prefix+'addresscityId').disabled=true;
	  document.getElementById(prefix+'addresszipId').disabled=true;
	  document.getElementById(prefix+'dayTimePhoneId').disabled=true;
	  document.getElementById(prefix+'eveningPhoneId').disabled=true;
	  document.getElementById(prefix+'SSNTaxId').readOnly=true;
	  document.getElementById(prefix+'citizenshipId').disabled=true;
	  document.getElementById(prefix+'countryOfResidenceId').disabled=true;
	  if(document.getElementById(prefix+'addressstateCodeDivId')){
		  document.getElementById(prefix+'addressstateCodeId').disabled=true;
	  }
	  if(document.getElementById(prefix+'addressnonUsStateDivId')){
		  document.getElementById(prefix+'addressnonUsStateId').disabled=true;
	  }
	  if(document.getElementById(prefix+'passportRow')){
		  document.getElementById(prefix+'idNumber').disabled=true; 
		  document.getElementById(prefix+'issuingGovernment').disabled=true;
	  }
	  if(prefix=="jointOwnerInfo"){
		  if(document.getElementById('jointMailingAddressId').checked){
			  document.getElementById('jointmailingAddressaddress1Id').disabled=true;;
			  document.getElementById('jointmailingAddressaddress2Id').disabled=true;
			  document.getElementById('jointmailingAddresscityId').disabled=true;
			  document.getElementById('jointmailingaddresszipId').disabled=true;
			  if (document.getElementById('jointmailingaddressstateCodeDivId')) {
					document.getElementById('jointaddressstateCodeId').disabled = true;
				} else if (document.getElementById('jointmailingaddressnonUsStateDivId')) {
					document.getElementById('jointaddressnonUsStateId').disabled = true;
				}
				document.getElementById('jointmailingAddresscountryCodeId').disabled = true;
		  }
	  }
	  if(prefix=="primary"){
		  if(document.getElementById('primarymailingAddressId').checked){
			  document.getElementById(prefix+'mailingAddressaddress1Id').disabled=true;
			  document.getElementById(prefix+'mailingAddressaddress2Id').disabled=true;
			  document.getElementById(prefix+'mailingAddresscityId').disabled=true;
			  document.getElementById(prefix+'mailingaddresszipId').disabled=true;
			  if (document.getElementById(prefix+'mailingaddressstateCodeDivId')) {
					document.getElementById(prefix+'addressstateCodeId').disabled = true;
				} else if (document.getElementById(prefix+'mailingaddressnonUsStateDivId')) {
					document.getElementById(prefix+'addressnonUsStateId').disabled = true;
				}
			document.getElementById(prefix+'mailingAddresscountryCodeId').disabled = true;
		  }
	  }
	  if(document.getElementById(prefix+'MaritalStatusId')){
			 document.getElementById(prefix+'MaritalStatusId').disabled=true;
		  }
	  if(document.getElementById(prefix+'doNotHaveLicenseId')){
			 document.getElementById(prefix+'doNotHaveLicenseId').checked = false;
			 document.getElementById(prefix+'doNotHaveLicenseId').disabled=true;
			 document.getElementById(prefix+'drivingLicenseNumberId').disabled=true;
			 document.getElementById(prefix+'drivingLicenseNumberId').disabled = true;
			 document.getElementById(prefix+'stateOfIssuanceDLId').disabled = true;
	 }
	  if(document.getElementById('jointemploymentStatusId')){
		  document.getElementById('jointemploymentStatusId').disabled=true;
		  document.getElementById('jointoccupationId').disabled=true;
		  document.getElementById('jointemployerNameId').disabled=true;
		  document.getElementById('jointnatureOfBusinessId').disabled=true;
		  document.getElementById('jointemployerAddressaddress1Id').disabled=true;
		  document.getElementById('jointemployerAddressaddress2Id').disabled=true;
		  document.getElementById('jointemployerAddresscityId').disabled=true;
		  if(document.getElementById('jointaddressnonUsStateDivId')){
		  document.getElementById('jointemployerAddressnonUsStateId').disabled=true;
		  }
		  if(document.getElementById('jointaddressstateCodeDivId')){
			  document.getElementById('jointemployerAddressstateCodeId').disabled=true;
	      }
		  document.getElementById('jointemployerAddresscountryCodeId').disabled=true;
		  document.getElementById('jointaddresszipId').disabled=true;
		  document.getElementById('jointemployerPhoneId').disabled=true;
		  document.getElementById('jointexchangeFirmName').disabled=true;
		  document.getElementById('jointnasdFirmRelationship').disabled=true;
		 }
	 
	}else{
		document.getElementById(prefix+'FirstNameId').disabled=false;
		  document.getElementById(prefix+'MiddleInitialId').disabled=false;
		  document.getElementById(prefix+'LastNameId').disabled=false;
		  document.getElementById(prefix+'DateOfBirthId').disabled=false;
		  document.getElementById(prefix+'addressaddress1Id').disabled=false;
		  document.getElementById(prefix+'addressaddress2Id').disabled=false;
		  document.getElementById(prefix+'addresscityId').disabled=false;
		  document.getElementById(prefix+'addresszipId').disabled=false;
		  document.getElementById(prefix+'dayTimePhoneId').disabled=false;
		  document.getElementById(prefix+'eveningPhoneId').disabled=false;
		  document.getElementById(prefix+'SSNTaxId').readOnly=false;
		  document.getElementById(prefix+'citizenshipId').disabled=false;
		  document.getElementById(prefix+'countryOfResidenceId').disabled=false;
		  document.getElementById(prefix+'TitleId').disabled=false;
		  document.getElementById(prefix+'SuffixId').disabled=false;
		  if(document.getElementById(prefix+'addressstateCodeDivId')){
			  document.getElementById(prefix+'addressstateCodeId').disabled=false;
		  }
		  if(document.getElementById(prefix+'addressnonUsStateDivId')){
			  document.getElementById(prefix+'addressnonUsStateId').disabled=false;
		  }
		  if(document.getElementById(prefix+'passportRow')){
			  document.getElementById(prefix+'idNumber').disabled=false; 
			  document.getElementById(prefix+'issuingGovernment').disabled=false;
		  }
		  if(prefix=="jointOwnerInfo"){
			  if(document.getElementById('jointMailingAddressId').checked){
				  document.getElementById('jointmailingAddressaddress1Id').disabled=false;
				  document.getElementById('jointmailingAddressaddress2Id').disabled=false;
				  document.getElementById('jointmailingAddresscityId').disabled=false;
				  document.getElementById('jointmailingaddresszipId').disabled=false;
				  if (document.getElementById('jointmailingaddressstateCodeDivId')) {
						document.getElementById('jointaddressstateCodeId').disabled = false;
					} else if (document.getElementById('jointmailingaddressnonUsStateDivId')) {
						document.getElementById('jointaddressnonUsStateId').disabled = false;
					}
					document.getElementById('jointmailingAddresscountryCodeId').disabled = false;
			  }
		  }
		  if(prefix=="primary"){
			  if(document.getElementById('primarymailingAddressId').checked){
				  document.getElementById(prefix+'mailingAddressaddress1Id').disabled=false;
				  document.getElementById(prefix+'mailingAddressaddress2Id').disabled=false;
				  document.getElementById(prefix+'mailingAddresscityId').disabled=false;
				  document.getElementById(prefix+'mailingaddresszipId').disabled=false;
				  if (document.getElementById(prefix+'mailingaddressstateCodeDivId')) {
						document.getElementById(prefix+'addressstateCodeId').disabled = false;
					} else if (document.getElementById(prefix+'mailingaddressnonUsStateDivId')) {
						document.getElementById(prefix+'addressnonUsStateId').disabled = false;
					}
				document.getElementById(prefix+'mailingAddresscountryCodeId').disabled = false;
			  }
		  }
		  if(document.getElementById(prefix+'MaritalStatusId')){
				 document.getElementById(prefix+'MaritalStatusId').disabled=false;
			  }
		  if(document.getElementById(prefix+'doNotHaveLicenseId')){
				 document.getElementById(prefix+'doNotHaveLicenseId').checked = false;
				 document.getElementById(prefix+'doNotHaveLicenseId').disabled=false;
				 document.getElementById(prefix+'drivingLicenseNumberId').disabled=false;
				 document.getElementById(prefix+'drivingLicenseNumberId').disabled = false;
				 document.getElementById(prefix+'stateOfIssuanceDLId').disabled = false;
			  }
		 if(document.getElementById('jointemploymentStatusId')){
				  document.getElementById('jointemploymentStatusId').disabled=false;
				  document.getElementById('jointoccupationId').disabled=false;
				  document.getElementById('jointemployerNameId').disabled=false;
				  document.getElementById('jointnatureOfBusinessId').disabled=false;
				  document.getElementById('jointemployerAddressaddress1Id').disabled=false;
				  document.getElementById('jointemployerAddressaddress2Id').disabled=false;
				  document.getElementById('jointemployerAddresscityId').disabled=false;
				  if(document.getElementById('jointaddressnonUsStateDivId')){
				  document.getElementById('jointemployerAddressnonUsStateId').disabled=false;
				  }
				  document.getElementById('jointaddresszipId').disabled=false;
				  document.getElementById('jointemployerPhoneId').disabled=false;
				  document.getElementById('jointexchangeFirmName').disabled=false;
				  document.getElementById('jointnasdFirmRelationship').disabled=false;
				  updateEmploymentDetails(document.getElementById('jointemploymentStatusId'), 'joint'); 
			  }
		}
	}

function enableFieldsAfterGetDetails(prefix){
	document.getElementById(prefix+'FirstNameId').disabled=false;
	  document.getElementById(prefix+'MiddleInitialId').disabled=false;
	  document.getElementById(prefix+'LastNameId').disabled=false;
	  document.getElementById(prefix+'DateOfBirthId').disabled=false;
	  document.getElementById(prefix+'addressaddress1Id').disabled=false;
	  document.getElementById(prefix+'addressaddress2Id').disabled=false;
	  document.getElementById(prefix+'addresscityId').disabled=false;
	  document.getElementById(prefix+'addresszipId').disabled=false;
	  document.getElementById(prefix+'dayTimePhoneId').disabled=false;
	  document.getElementById(prefix+'eveningPhoneId').disabled=false;
	  document.getElementById(prefix+'SSNTaxId').disabled=false;
	  document.getElementById(prefix+'citizenshipId').disabled=false;
	  document.getElementById(prefix+'countryOfResidenceId').disabled=false;
	  document.getElementById(prefix+'TitleId').disabled=false;
	  document.getElementById(prefix+'SuffixId').disabled=false;
	  if(document.getElementById(prefix+'addressstateCodeDivId')){
		  document.getElementById(prefix+'addressstateCodeId').disabled=false;
	  }
	  if(document.getElementById(prefix+'addressnonUsStateDivId')){
		  document.getElementById(prefix+'addressnonUsStateId').disabled=false;
	  }
	  if(document.getElementById(prefix+'passportRow')){
		  document.getElementById(prefix+'idNumber').disabled=false; 
		  document.getElementById(prefix+'issuingGovernment').disabled=false;
	  }
	  if(prefix=="jointOwnerInfo"){
		  if(document.getElementById('jointMailingAddressId').checked){
			  document.getElementById('jointmailingAddressaddress1Id').disabled=false;
			  document.getElementById('jointmailingAddressaddress2Id').disabled=false;
			  document.getElementById('jointmailingAddresscityId').disabled=false;
			  document.getElementById('jointmailingaddresszipId').disabled=false;
			  if (document.getElementById('jointmailingaddressstateCodeDivId')) {
					document.getElementById('jointaddressstateCodeId').disabled = false;
				} else if (document.getElementById('jointmailingaddressnonUsStateDivId')) {
					document.getElementById('jointaddressnonUsStateId').disabled = false;
				}
				document.getElementById('jointmailingAddresscountryCodeId').disabled = false;
		  }
	  }
	  if(prefix=="primary"){
		  if(document.getElementById('primarymailingAddressId').checked){
			  document.getElementById(prefix+'mailingAddressaddress1Id').disabled=false;
			  document.getElementById(prefix+'mailingAddressaddress2Id').disabled=false;
			  document.getElementById(prefix+'mailingAddresscityId').disabled=false;
			  document.getElementById(prefix+'mailingaddresszipId').disabled=false;
			  if (document.getElementById(prefix+'mailingaddressstateCodeDivId')) {
					document.getElementById(prefix+'addressstateCodeId').disabled = false;
				} else if (document.getElementById(prefix+'mailingaddressnonUsStateDivId')) {
					document.getElementById(prefix+'addressnonUsStateId').disabled = false;
				}
			document.getElementById(prefix+'mailingAddresscountryCodeId').disabled = false;
		  }
	  }
	  if(document.getElementById(prefix+'MaritalStatusId')){
			 document.getElementById(prefix+'MaritalStatusId').disabled=false;
	  }
	  if(document.getElementById(prefix+'doNotHaveLicenseId')){
		  document.getElementById(prefix+'doNotHaveLicenseId').disabled=false;
		  updateDrivingLicenseDetails(document.getElementById(prefix+'doNotHaveLicenseId'),prefix);
		}
	  if(document.getElementById('jointemploymentStatusId')){
		  document.getElementById('jointemploymentStatusId').disabled=false;
		  document.getElementById('jointoccupationId').disabled=false;
		  document.getElementById('jointemployerNameId').disabled=false;
		  document.getElementById('jointnatureOfBusinessId').disabled=false;
		  document.getElementById('jointemployerAddressaddress1Id').disabled=false;
		  document.getElementById('jointemployerAddressaddress2Id').disabled=false;
		  document.getElementById('jointemployerAddresscityId').disabled=false;
		  if(document.getElementById('jointaddressnonUsStateDivId')){
		  document.getElementById('jointemployerAddressnonUsStateId').disabled=false;
		  }
		  document.getElementById('jointaddresszipId').disabled=false;
		  document.getElementById('jointemployerPhoneId').disabled=false;
		  document.getElementById('jointexchangeFirmName').disabled=false;
		  document.getElementById('jointnasdFirmRelationship').disabled=false;
		  updateEmploymentDetails(document.getElementById('jointemploymentStatusId'), 'joint'); 
	  }
}