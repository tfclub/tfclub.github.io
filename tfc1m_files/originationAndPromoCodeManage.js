function showHidePromoCode(){
	if(document.getElementById('txtPromoCode').value!=''){
     document.getElementById('promoCodeRDButtontrue').checked=true;
     document.getElementById('promoCodeRDButtonfalse').checked=false;
     document.getElementById('originCategoryRow').className="hide";
     document.getElementById('originSubCategoryRow').className="hide";
     document.getElementById('promoCodeRow').className="showRow";

	}else{
	 document.getElementById('promoCodeRDButtonfalse').checked=true;
     document.getElementById('promoCodeRDButtontrue').checked=false;
	 document.getElementById('originCategoryRow').className="showRow";
     document.getElementById('originSubCategoryRow').className="showRow";
     document.getElementById('promoCodeRow').className="hide";
	}
}
function updatePromoCodeRDbuttons(){
	if(document.getElementById('promoCodeRDButtontrue').checked==true){
		 document.getElementById('originCategoryRow').className="hide";
	     document.getElementById('originSubCategoryRow').className="hide";
	     document.getElementById('otherSubCategoryRow').className="hide";
	     document.getElementById('promoCodeRow').className="showRow";
	}else{
		 document.getElementById('originCategoryRow').className="showRow";
	     document.getElementById('originSubCategoryRow').className="showRow";
	     document.getElementById('promoCodeRow').className="hide";
	 	 document.getElementById('promoCodeError').className="hide";
	}
}
function setUserDontValidateFields(){
	if(document.getElementById('promoCodeRDButtontrue').checked==true){
      document.getElementById('userDontValidateFieldsId').value="";
	}else{
	  document.getElementById('userDontValidateFieldsId').value="promoCode";
	}
}