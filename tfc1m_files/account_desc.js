// JavaScript Document

// JavaScript Document

/***********************************************
* Fixed ToolTip script- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/
		
var tipwidth='150px' //default tooltip width
var tipbgcolor='white'  //tooltip bgcolor
var disappeardelay=250  //tooltip disappear speed onMouseout (in miliseconds)
var vertical_offset="0px" //horizontal offset of tooltip from anchor link
var horizontal_offset="150px" //horizontal offset of tooltip from anchor link
var top_header='url(/common/images/account/rollover_header.jpg)' 

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="fixedtipdiv" style="visibility:hidden;width:'+tipwidth+';background-color:'+tipbgcolor+';background-image:'+top_header+'; background-repeat:no-repeat; padding:10px 10px 10px 10px; border-right: 1px solid #DADADA; border-left: 1px solid #DADADA; border-top: 0px; border-bottom: 1px solid #DADADA;"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, tipwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (tipwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=tipwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=(whichedge=="rightedge")? parseInt(horizontal_offset)*-1 : parseInt(vertical_offset)*-1
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
}
return edgeoffset
}

function fixedtooltip(menucontents, obj, e, tipwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidetip()
dropmenuobj=document.getElementById? document.getElementById("fixedtipdiv") : fixedtipdiv
dropmenuobj.innerHTML=menucontents

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", tipwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}
}

function hidetip(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidetip(){
if (ie4||ns6)
delayhide=setTimeout("hidetip()",disappeardelay)
}

function clearhidetip(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}


function showAccountInfo(object,accountType,event1)
{
	
	var INDIVIDUAL_ACCOUNT_DESC="<b>INDIVIDUAL</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account owned by one person.  Upon death of the individual, ownership is passed to his or her estate. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and drivers license number of the individual. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";

	var JOINT_TENANTS_COMMON_DESC="<b>JOINT TENANTS IN COMMON</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account owned by two or more people in which percentage ownership of interest in the account is equally divided. Upon death of an account owner, the deceased's interest is passed to his or her estate. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of each account owner. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completed online.";

	var JOINT_TENANTS_ENTIRETY_DESC="<b>JOINT TENANTS IN THE ENTIRETY</b><br><br><b>ACCOUNT DESCRIPTION</b><br>Exclusively for married couples, an account in which owners have and equal and undivided ownership interest. Property cannot be used to pay the debts of one of the account owners. Upon death of an account owner, the account is passed to the other owner. <br> <br> Not available in all states.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of each account owner. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";
	
		var JOINT_TENANTS_RIGHTS_SURVIVORSHIP_DESC="<b>JOINT WITH RIGHT OF SURVIVORSHIP</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account equally and undividedly owned by two or more people. Upon death of an account owner, the entire account is passed to the other owner(s).<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of each account owner. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online."; 

	var TRADITIONAL_IRA_DESC="<b>IRA TRADITIONAL</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A self funded retirement account for individuals. Annual contribution amounts are capped by law and dependent on the year and the age of the account owner. Taxes on account earnings are deferred until withdrawals begin. Qualified withdrawals can be taken without penalty starting at age 59 ½.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of the individual. (Married persons must provide the same for their spouse.). <br><br>Date of birth, social security number and address of each beneficiary. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";

	var ROTH_IRA_DESC="<b>IRA ROLL ROTH</b><br><br><b>ACCOUNT DESCRIPTION</b><br>Annual contribution amounts are capped by law and dependent on the year and the age of the account owner. Contributions are subject to taxes however qualified withdrawals are tax-exempt. Qualified withdrawals can be taken without penalty starting at age 59 ½.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of the individual. (Married persons must provide the same for their spouse.). <br><br>Date of birth, social security number and address of each beneficiary. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";

	var ROLLOVER_IRA_DESC="<b>IRA ROLL OVER</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A non-contributory IRA that holds funds from an employer's qualified retirement plan, such as a 401(k) or 403(b). Allows funds to be returned to another employer's qualified plan in the future.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and address of each beneficiary. Married persons must provide the same for their spouse. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";
	
	var IRA_SEP="<b>SEP-IRA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>SEPs are used by small employers and self employed individuals where the employer contributes to the IRA.  <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and drivers license number of the individual. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online." ;

	var CUSTODIAL_UGMA_DESC="<b>CUSTODIAL UGMA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account where a minor is the beneficial owner but is controlled by a custodian until the minor reaches the age of majority in the state in which the account was set up. Uniform Gift to Minor's Act (UGMA) accounts are offered in South Carolina and Vermont. All other states offer UTMA accounts.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of the custodian and minor. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";

	var CUSTODIAL_UTMA_DESC="<b>CUSTODIAL UTMA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account where a minor is the beneficial owner but is controlled by a custodian until the minor reaches the age of majority in the state in which the account was set up.  Uniform Transfer to Minor's Act (UTMA) accounts are offered in all states with the exception of South Carolina and Vermont.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and driver's license number of the custodian and minor. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online.";

	var TRUST_DESC="<b>TRUST</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a trust where the trustee controls the management of the investments.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date, tax ID number and address of the Trust. <br><br>Date of birth, social security number and address of the trustees.	<br><br><b>PAPERWORK TO SEND US</b><br>None. Trust Account Agreement signed by all trustees. (You will be prompted to print the application at the end of the online portion.). Either Trust Certification of Investment Powers or 2 copies of the section of the trust that state its investment powers.";

	var CORPORATE_DESC= "<b>CORPORATE</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a legally established corporation where the officers designate the person(s) who may act on the company's behalf.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Incorporation, tax ID number and address of the Corporation. <br><br>Date of birth, social security number and address of each officer/authorized agent. <br><br><b>PAPERWORK TO SEND US</b><br>None. Corporate Account Agreement signed by all officers. (You will be prompted to print the application at the end of the online portion.)Corporate Resolution";

	var PARTNERSHIP_DESC="<b>PARTNERSHIP</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of two or more members who have an established partnership agreement. Each member may act on the partnership's behalf.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Formation, tax ID number and address of the partnership. <br><br>Date of birth, social security number and address of each member. <br><br><b>PAPERWORK TO SEND US</b><br>None. This account type can be opened completely online." ;

	var LLC_DESC="<b>LLC ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a legally established LLC where its members designate the person(s) who may act on the company's behalf.<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Formation, tax ID number and address of the LLC. <br><br>Date of birth, social security number and address of each officer/authorized agent. <br><br><b>PAPERWORK TO SEND US</b><br>None. Limited Liability Company (LLC) Authorization Form signed by all members.(You will be prompted to print the application at the end of the online portion.)";

	
	var INVESTMENT_CLUB_DESC="<b>INVESTMENT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of an investment club where the partners designate the person(s) who may act on the club's behalf (Primary Agent).<br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Organization, tax ID number and address of the Investment Club. <br><br>Date of birth, social security number and address of the Primary Agent. <br><br><b>PAPERWORK TO SEND US</b><br>None. Investment Club Account Agreement signed by all members. (You will be prompted to print the application at the end of the online portion.)";
   
   var COVERDELL_EDUCATION_IRA="<b>COVERDELL EDUCATION IRA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>Also known as an Education IRA, a Coverdell Education Savings Account (ESA) is a tax-advantaged account that allows you to save for your child&acute;s higher education expenses. Tax-free withdrawals can be made for certain qualified elementary and secondary school expenses, as well as college expenses.";
   
   var APEX_PROFIT_SHARING_PLAN_DESC="<b>APEX PROFIT SHARING PLAN</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A tax-deferred retirement employer sponsored retirement plan that lets you contribute up to 25% of an employee's income, up to a maximum. You can vary the percentage contributed from year to year and there are no annual mandatory contributions.";
	
	var APEX_MONEY_PURCHASE_PLAN_DESC="<b>APEX MONEY PURCHASE PLAN</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A tax-deferred retirement employer sponsored retirement plan that lets you contribute up to 25% of an employee's income, up to a maximum. The plan Requires a fixed percentage contribution.";
	
	var NRA_INDIVIDUAL_DESC="<b>NRA INDIVIDUAL</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account owned by one person.  Upon death of the NRA individual, ownership is passed to his or her estate. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of birth, social security number and drivers license number of the individual. <br><br>For Non-Resident Aliens ONLY.";
	
	var NRA_CORPORATE_ACCOUNT_DESC="<b>NRA CORPORATE ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a legally established corporation where the officers designate the person(s) who may act on the company's behalf. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Incorporation, tax ID number and address of the Corporation. <br><br>Date of birth, social security number and address of each officer/authorized agent. <br><br><b>PAPERWORK TO SEND US</b><br>Corporate Account Agreement signed by all officers. (You will be prompted to print the application at the end of the online portion.)Corporate Resolution <br><br>For Non-Resident Aliens ONLY.";
	
	var NRA_TRUST_ACCOUNT_DESC="<b>NRA TRUST ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a trust where the trustee controls the management of the investments. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date, tax ID number and address of the Trust. <br><br>Date of birth, social security number and address of the trustees.	<br><br><b>PAPERWORK TO SEND US</b><br>Trust Account Agreement signed by all trustees. (You will be prompted to print the application at the end of the online portion.). Either Trust Certification of Investment Powers or 2 copies of the section of the trust that state its investment powers. <br><br>For Non-Resident Aliens ONLY.";
	
	var NRA_PARTNERSHIP_ACCOUNT_DESC="<b>NRA PARTNERSHIP ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of two or more members who have an established partnership agreement. Each member may act on the partnership's behalf. <br><br><b>INFORMATION YOU&acute;LL NEED</b><br>Date of Formation, tax ID number and address of the partnership. <br><br>Date of birth, social security number and address of each member. <br><br> For Non-Resident Aliens ONLY.";
	
	var ESTATE_ACCOUNT_DESC="<b>ESTATE ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A brokerage account in which the securities are registered in the name of the trust, estate, or conservatorship and managed by a trustee(s), executor, or conservator.";
	
	var TAX_EXEMPT_ORG_DESC="<b>TAX EXEMPT ORGANIZATION</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A brokerage account specifically designed for Non-Profit and other Tax Exempt Corporations and registered organizations.";
	
	var SIMPLE_IRA_DESC="<b>SIMPLE IRA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A Savings Incentive Match Plan for Employees (SIMPLE) IRA is an employer-run savings plan that features employee tax-deferred contributions and matching contributions by the employer. Employers with 100 or fewer eligible employees who did not maintain another retirement plan are eligible to establish a SIMPLE IRA.";
	
	var BENEFICIARY_IRA_DESC="<b>BENEFICIARY IRA</b><br><br><b>ACCOUNT DESCRIPTION</b><br>A Beneficiary IRA is opened by a beneficiary of a Traditional, Rollover, Roth, SEP or SIMPLE IRA to receive their inherited IRA assets. The Beneficiary IRA allows the beneficiary to keep their inherited IRA assets tax-deferred until they are distributed according to the IRS regulations.";
  
  var TRANSFER_ON_DEATH_DESC="<b>TRANSFER ON DEATH INDIVIDUAL</b><br><br>An individual account that allows you to pass control and ownership of the assets to another person (beneficiary) upon your death without the need for probate. The executor or administrator of your estate will not have to take any action to ensure the securities transfer to whomever is designated."; 
  
  var INDIVIDUAL_401K_DESC="<b>INDIVIDUAL 401K</b><br><br><b>ACCOUNT DESCRIPTION</b><br>The Individual 401(k) Plan allows self&minus;employed individuals and small business owners (and spouses) the opportunity to save more for retirement."; 
  
  var NRA_LLC_DESC="<b>NRA LLC ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account in the name of a legally established LLC where its members designate the person(s) who may act on the company&acute;s behalf.<br><br>For Non-Resident Aliens ONLY.";
  
  var NRA_JOINT_DESC="<b>NRA JOINT ACCOUNT</b><br><br><b>ACCOUNT DESCRIPTION</b><br>An account owned by two or more people in which percentage ownership of interest in the account is equally divided. Upon death of an account owner, the deceased&acute;s interest is passed to his or her estate. <br><br>For Non-Resident Aliens ONLY.";


	if(accountType.toLowerCase()=='individual')
	   {
		   fixedtooltip(INDIVIDUAL_ACCOUNT_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='corporate')
   {
	   		fixedtooltip(CORPORATE_DESC, object, event1, '360px')

    }
	if(accountType.toLowerCase()=='custodial_ugma' )
	   {
		   	fixedtooltip(CUSTODIAL_UGMA_DESC, object, event1, '360px')

	    }
	if(accountType.toLowerCase()=='custodial_utma' )
	   {
		   	fixedtooltip(CUSTODIAL_UTMA_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ic' )
	   {
		   	fixedtooltip(INVESTMENT_CLUB_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_roll')
	   {
			fixedtooltip(ROLLOVER_IRA_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_roth' )
	   {
			fixedtooltip(ROTH_IRA_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_trad' )
	   {
		   	fixedtooltip(TRADITIONAL_IRA_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_sep' )
	   {
			fixedtooltip(IRA_SEP, object, event1, '360px')
	    }    
	if(accountType.toLowerCase()=='jtic' )
	   {
			fixedtooltip(JOINT_TENANTS_COMMON_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='jtite' )
	   {
			fixedtooltip(JOINT_TENANTS_ENTIRETY_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='jtwros' )
	   {
			fixedtooltip(JOINT_TENANTS_RIGHTS_SURVIVORSHIP_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='llc' )
	    {
			fixedtooltip(LLC_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='partnershp' )
	    {
			fixedtooltip(PARTNERSHIP_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='trust' )
	    {
			fixedtooltip(TRUST_DESC, object, event1, '360px')
	    }
		
	if(accountType.toLowerCase()=='ira_coverdell' )
	    {
			fixedtooltip(COVERDELL_EDUCATION_IRA, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='profit_sharing_plan' )
	    {
			fixedtooltip(APEX_PROFIT_SHARING_PLAN_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='money_purchase_plan' )
	    {
			fixedtooltip(APEX_MONEY_PURCHASE_PLAN_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='nra_indiviual' )
	    {
			fixedtooltip(NRA_INDIVIDUAL_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='nra_corporate' )
	    {
			fixedtooltip(NRA_CORPORATE_ACCOUNT_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='nra_trust' )
	    {
			fixedtooltip(NRA_TRUST_ACCOUNT_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='nra_patnershp' )
	    {
			fixedtooltip(NRA_PARTNERSHIP_ACCOUNT_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='transfer_on_death' )
	    {
			fixedtooltip(TRANSFER_ON_DEATH_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='estate_account' )
	    {
			fixedtooltip(ESTATE_ACCOUNT_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='tax_exempt_org' )
	    {
			fixedtooltip(TAX_EXEMPT_ORG_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_simple' )
	    {
			fixedtooltip(SIMPLE_IRA_DESC, object, event1, '360px')
	    }
	if(accountType.toLowerCase()=='ira_beneficiary' )
	    {
			fixedtooltip(BENEFICIARY_IRA_DESC, object, event1, '360px')
	    }	
	if(accountType.toLowerCase()=='individual_401k' )
	    {
			fixedtooltip(INDIVIDUAL_401K_DESC, object, event1, '360px')
	    }	
	if(accountType.toLowerCase()=='nra_joint' )
	    {
			fixedtooltip(NRA_JOINT_DESC, object, event1, '360px')
	    }	
	if(accountType.toLowerCase()=='nra_llc' )
	    {
			fixedtooltip(NRA_LLC_DESC, object, event1, '360px')
	    }	
}

