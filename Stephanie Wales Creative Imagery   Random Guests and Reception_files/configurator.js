function zf_PriceInfo(){this.basePrice=0;this.zenfolioPrice=0;this.customerPrice=0;}function zf_Color(){}zf_Color.hexToRgb=function(hex){var rgb={r:0,g:0,b:0};if(hex.length==3){rgb.r=parseInt(hex.substring(0,
1),16);rgb.g=parseInt(hex.substring(1,2),16);rgb.b=parseInt(hex.substring(2,3),16);}else if(hex.length==6){rgb.r=parseInt(hex.substring(0,2),16);rgb.g=parseInt(hex.substring(2,
4),16);rgb.b=parseInt(hex.substring(4,6),16);}return rgb;};zf_Color.stringToRgb=function(s){if(s=='transparent')return null;if(s.length==3||s.length==6)return zf_Color.hexToRgb(s);
else return zf_Color.cssToRgb(s);};zf_Color.rgbToHex=function(rgb){return[zf_Color.intToHex(rgb.r),zf_Color.intToHex(rgb.g),zf_Color.intToHex(rgb.b)].join('');};zf_Color.rgbToHsv=function(rgb){var r=rgb.r/255;
var g=rgb.g/255;var b=rgb.b/255;var min=Math.min(r,g,b);var max=Math.max(r,g,b);var delta=max-min;var hsv={h:0,s:0,v:max};if(delta!=0){hsv.s=delta/max;if(r==max)hsv.h=(g-b)/delta;
else if(g==max)hsv.h=2+(b-r)/delta;else hsv.h=4+(r-g)/delta;hsv.h=Math.round(hsv.h*6000)/100;if(hsv.h<0)hsv.h+=360;}hsv.s=Math.round(hsv.s*1000)/10;hsv.v=Math.round(hsv.v*1000)/10;
return hsv;};zf_Color.rgbToCss=function(rgb,alpha){var rgbParams=[rgb.r,rgb.g,rgb.b].join(',');var a="1.0";if(!isNaN(alpha)&&alpha<1){a=alpha;}else{if(!isNaN(rgb.a)&&rgb.a<1){a=rgb.a;
}}if(a=="1.0"){return '#'+zf_Color.rgbToHex(rgb);}else{return "rgba("+rgbParams+","+a+")";}};zf_Color.intToHex=function(i){var res=parseInt(i,10).toString(16);if(res.length==1)res="0"+res;
return res;};zf_Color.hsvToRgb=function(hsv){rgb={r:0,g:0,b:0};var h=hsv.h==360?0:hsv.h;var s=hsv.s;var v=hsv.v;if(s==0){if(v==0)rgb.r=rgb.g=rgb.b=0;else rgb.r=rgb.g=rgb.b=Math.round(v*255/100);
}else{h=h/60;s=s/100;v=v/100;var i=Math.floor(h);var f=h-i;var p=v*(1-s);var q=v*(1-(s*f));var t=v*(1-(s*(1-f)));switch(i){case 0:rgb.r=v;rgb.g=t;rgb.b=p;break;case 1:rgb.r=q;
rgb.g=v;rgb.b=p;break;case 2:rgb.r=p;rgb.g=v;rgb.b=t;break;case 3:rgb.r=p;rgb.g=q;rgb.b=v;break;case 4:rgb.r=t;rgb.g=p;rgb.b=v;break;case 5:rgb.r=v;rgb.g=p;rgb.b=q;
break;default:;throw{};}rgb.r=Math.round(rgb.r*255);rgb.g=Math.round(rgb.g*255);rgb.b=Math.round(rgb.b*255);}return rgb;};zf_Color.toCss=function(color){if(color==null){return '';
}if(!isNaN(color.r))return '#'+zf_Color.rgbToHex(color);if(typeof(color)=='string'){if(color=='transparent')return color;if(color.length==6||color.length==3)return '#'+color;
return zf_Color.toCss(zf_Color.cssToRgb(color));}if(!isNaN(color.h))return zf_Color.toCss(zf_Color.hsvToRgb(color));;return '';};zf_Color.toRgbaCss=function(color,alpha){if(!isNaN(color.r))return zf_Color.rgbToCss(color,
alpha);if(typeof(color)=='string'){if(color=='transparent')return color;if(color.length==6||color.length==3)return zf_Color.toRgbaCss(zf_Color.hexToRgb(color),alpha);
return zf_Color.toRgbaCss(zf_Color.cssToRgb(color),alpha);}if(!isNaN(color.h))return zf_Color.toRgbaCss(zf_Color.hsvToRgb(color),alpha);;return '';};zf_Color.cssToRgb=function(css){var rgb;
if(css=='transparent')return null;if(css.charAt(0)=='#'){rgb=zf_Color.hexToRgb(css.substring(1));}else{var parts=/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(0?(\.\d{1,2})?|1(\.0)?)?\)$/.exec(css);
if(parts&&parts[4]!=null&&parseFloat(parts[4])==0){return null;}if(parts){if(parts[4]!=null){rgb={r:parseInt(parts[1],10),g:parseInt(parts[2],10),b:parseInt(parts[3],
10),a:parseFloat(parts[4])};}else{rgb={r:parseInt(parts[1],10),g:parseInt(parts[2],10),b:parseInt(parts[3],10),a:parseFloat("1.0")};}}else{rgb=null;}}return rgb;
};zf_Color.getOpacity=function(cssColor){var opacity=1.0;var rgb=zf_Color.cssToRgb(cssColor);if(rgb=='transparent'||rgb==null){opacity=0;}else{if(!isNaN(rgb.a)){opacity=rgb.a;
}}return opacity;};zf_Color.hsvEquals=function(hsv1,hsv2){if(!hsv1||!hsv2)return false;return hsv1.h==hsv2.h&&hsv1.s==hsv2.s&&hsv1.v==hsv2.v;};zf_Color.toHsv=function(color){if(typeof(color)=='string'){var rgb=zf_Color.stringToRgb(color);
return rgb?zf_Color.rgbToHsv(rgb):rgb;}else if(!isNaN(color.r))return zf_Color.rgbToHsv(color);return color;};zf_Color.getComplementaryColor=function(hsv){;;;hsv.h=hsv.h||0;
hsv.s=hsv.s||0;hsv.v=hsv.v||0;hsv.s=hsv.s/100;hsv.v=hsv.v/100;var chsv={};chsv.h=hsv.h>=180?hsv.h-180:hsv.h+180;chsv.v=(hsv.v*(hsv.s-1)+1);chsv.s=(hsv.v*hsv.s)/(chsv.v==0?1:chsv.v);
chsv.s=Math.round(chsv.s*100);chsv.v=Math.round(chsv.v*100);return chsv;};function zf_CurrencyInfo(){this.name=null;this.code=null;this.numericCode=0;}zf_CurrencyInfo.prototype.toString=function(){return this.code;
};zf_CurrencyInfo.all=_zf_stdTransformResponse([{"$type":"CurrencyInfo","name":"US Dollar","pluralName":"US Dollars","shortName":"USD","code":"USD","symbol":"$"},{"$type":"CurrencyInfo",
"name":"Canadian Dollar","pluralName":"Canadian Dollars","shortName":"CAD","code":"CAD","symbol":"C$"},{"$type":"CurrencyInfo","name":"Euro","pluralName":"Euros",
"shortName":"EUR","code":"EUR","symbol":"\u20AC"},{"$type":"CurrencyInfo","name":"Pound Sterling","pluralName":"Pounds Sterling","shortName":"GBP","code":"GBP","symbol":"\u00A3"},
{"$type":"CurrencyInfo","name":"Australian Dollar","pluralName":"Australian Dollars","shortName":"AUD","code":"AUD","symbol":"AU$"},{"$type":"CurrencyInfo","name":"Czech Koruna",
"pluralName":"Czech Koruny","shortName":"CZK","code":"CZK","symbol":"K\u010D"},{"$type":"CurrencyInfo","name":"Danish Krone","pluralName":"Danish Kroner","shortName":"DKK",
"code":"DKK","symbol":"kr"},{"$type":"CurrencyInfo","name":"Hong Kong Dollar","pluralName":"Hong Kong Dollars","shortName":"HKD","code":"HKD","symbol":"HK$"},{"$type":"CurrencyInfo",
"name":"Hungarian Forint","pluralName":"Hungarian Forint","shortName":"HUF","code":"HUF","symbol":"Ft"},{"$type":"CurrencyInfo","name":"Israeli New Shekel","pluralName":"Israeli New Shekels",
"shortName":"ILS","code":"ILS","symbol":"\u20AA"},{"$type":"CurrencyInfo","name":"Japanese Yen","pluralName":"Japanese Yen","shortName":"JPY","code":"JPY","symbol":"\u00A5"},
{"$type":"CurrencyInfo","name":"Mexican Peso","pluralName":"Mexican Pesos","shortName":"MXN","code":"MXN","symbol":"Mex$"},{"$type":"CurrencyInfo","name":"New Zealand Dollar",
"pluralName":"New Zealand Dollars","shortName":"NZD","code":"NZD","symbol":"NZ$"},{"$type":"CurrencyInfo","name":"Norwegian Krone","pluralName":"Norwegian Kroner",
"shortName":"NOK","code":"NOK","symbol":"kr"},{"$type":"CurrencyInfo","name":"Polish Zloty","pluralName":"Polish Zloty","shortName":"PLN","code":"PLN","symbol":"z\u0142"},
{"$type":"CurrencyInfo","name":"Singapore Dollar","pluralName":"Singapore Dollars","shortName":"SGD","code":"SGD","symbol":"S$"},{"$type":"CurrencyInfo","name":"Swedish Krona",
"pluralName":"Swedish Kronor","shortName":"SEK","code":"SEK","symbol":"kr"},{"$type":"CurrencyInfo","name":"Swiss Franc","pluralName":"Swiss Francs","shortName":"CHF",
"code":"CHF","symbol":"Fr."}]);(function(){var cnt=zf_CurrencyInfo.all?zf_CurrencyInfo.all.length:0;for(var i=0;i<cnt;i++){zf_CurrencyInfo.all[zf_CurrencyInfo.all[i].code]=zf_CurrencyInfo.all[i];
}})();;function zf_stdFormatMoney(val,currency){return zf_NumberFormat.current.formatMoney(val,currency);}function zf_stdRoundMoney(value){if(isNaN(value))return value;value*=100;
var r=Math.round(value);;return r/100;}function zf_stdFormatEditableMoney(val){var format=zf_NumberFormat.current;return val.toFixed(format.currencyDecimalDigits).replace(/\./i,
format.currencyDecimalSeparator);}function zf_stdParseEditableMoney(val){if(val&&val.length>0)val=val.replace(/^\s+|\s+$/g,'');var format=zf_NumberFormat.current;var separator=format.currencyDecimalSeparator;
if(!new RegExp("^\\d*\\"+separator+"?\\d*$").test(val)){return NaN;}return zf_stdRoundMoney(parseFloat(val.replace(new RegExp("(\\"+separator+")"),".")));}function zf_stdCheckEditableMoney(val){if(isNaN(zf_stdParseEditableMoney(val))){return zf_stdFormatString("Please use the correct amount (e.g. {0})",
zf_stdFormatEditableMoney(1234.56));}return undefined;}(function(window){'use strict';var lastTime=0,vendors=['moz','webkit','o','ms'],x;for(x=0;x<vendors.length&&!window.requestAnimationFrame;
x+=1){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];
}if(!window.cancelAnimationFrame){if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback){var now=new Date().getTime(),nextTime=Math.max(lastTime+16,
now);return window.setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=window.clearTimeout;}else{vendors=window.requestAnimationFrame;
lastTime={};window.requestAnimationFrame=function(callback){var id=x;x+=1;lastTime[id]=callback;vendors(function(timestamp){if(lastTime.hasOwnProperty(id)){var error;
try{lastTime[id](timestamp);}catch(e){error=e;}finally{delete lastTime[id];if(error){throw error;}}}});return id;};window.cancelAnimationFrame=function(id){delete lastTime[id];
};}}}(window));function zf_ModalDialog(id){this.id=id;this._settings={dynamicresize:true,headerhtml:'',bodyhtml:'',boxclass:'pc-bgcolor1 pc-border1',headerclass:'pc-font7 pc-bgcolor5',
bodyclass:'',footerclass:'',visibleclass:'visible'};this._buttons=[];}zf_ModalDialog.inherits(zf_Object);zf_ModalDialog.prototype.init=function(container,buttons,settings){;this._container=container;
$(this._container).attr('id',this.id);$('#'+this.id).appendTo('body');this._selectors={container:$('#'+this.id)};this._initSelectors();if(typeof settings==='object'){$.extend(this._settings,
settings);}if(typeof buttons==='object'){this._buttons=buttons;}};zf_ModalDialog.prototype.getSetting=function(key){if(typeof this._settings==='object'&&this._settings.hasOwnProperty(key)){return this._settings[key];
}else{return undefined;}};zf_ModalDialog.prototype.setSetting=function(key,value){this._settings[key]=value;};zf_ModalDialog.prototype.setButtons=function(buttons,clear){if(clear===true){this._buttons=buttons;
}else{this._buttons.concat(buttons);}};zf_ModalDialog.prototype.headerHTML=function(html){if(typeof html==='string'){this._settings.headerhtml=html;this._selectors['header'].html(html);
}return this._selectors['header'].html();};zf_ModalDialog.prototype.bodyHTML=function(html){if(typeof html==='string'){this._settings.bodyhtml=html;this._selectors['body'].html(html);
}return this._selectors['body'].html();};zf_ModalDialog.prototype.footerHTML=function(html){if(typeof html==='string'){this._selectors['footer'].html(html);}return this._selectors['footer'].html();
};zf_ModalDialog.prototype.draw=function(){var html=['<div class="modal-dialog-box ',this._settings.boxclass,'">','<div class="modal-dialog-header ',this._settings.headerclass,
'">',this._settings.headerhtml,'</div>','<div class="modal-dialog-body ',this._settings.bodyclass,'">',this._settings.bodyhtml,'</div>','<div class="modal-dialog-footer ',
this._settings.footerclass,'">'];var button;for(button in this._buttons){html.push(this._buttons[button].toString());}html.push('</div></div>');this._selectors['container'].html(html.join(''));
this._initSelectors();for(button in this._buttons){this._buttons[button].bindEvents();}};zf_ModalDialog.prototype.show=function(){if(!this._selectors['container'].hasClass(this._settings.visibleclass)){this.resize();
this._selectors['container'].addClass(this._settings.visibleclass);}};zf_ModalDialog.prototype.resize=function(){if(!this._selectors){return;}if(this._settings.dynamicresize){var w=0;
if(this._selectors['footer'].length>0){this._selectors['footer'].children().each(function(){w+=$(this).outerWidth(true);});w+=(this._selectors['footer'].outerWidth(true)-this._selectors['footer'].innerWidth());
}if(this._selectors['box'].length>0){this._selectors['box'].width(w);}}var x=0,y=0,bw=this._selectors['box'].length>0?this._selectors['box'].outerWidth():0,bh=this._selectors['box'].length>0?this._selectors['box'].outerHeight():0;
x=(this._selectors['container'].outerWidth()-bw)/2;y=(2*($(window).height()-bh))/5;this._selectors['box'].css('top',y+'px').css('left',x+'px');};zf_ModalDialog.prototype.hide=function(){this._selectors['container'].removeClass(this._settings.visibleclass);
};zf_ModalDialog.prototype._initSelectors=function(){this._selectors['box']=this._selectors['container'].find('.modal-dialog-box');this._selectors['header']=this._selectors['container'].find('.modal-dialog-header');
this._selectors['body']=this._selectors['container'].find('.modal-dialog-body');this._selectors['footer']=this._selectors['container'].find('.modal-dialog-footer');
this._selectors['buttons']=this._selectors['container'].find('.modal-dialog-footer .pc-button');};function zfp_ModalButton(id,settings){;this.id=id;this._settings={buttonclass:'pc-button button-font1 button-color1 button-bgcolor1 button-border1',
text:'',alt:'',src:'#',events:{}};if(typeof settings==='object'){$.extend(this._settings,settings);}}zfp_ModalButton.prototype.getSetting=function(key){if(this._settings.hasOwnProperty(key)){return this._settings[key];
}else{return undefined;}};zfp_ModalButton.prototype.setSetting=function(key,value){this._settings[key]=value;};zfp_ModalButton.prototype.toString=function(){var cssclass=[''];if(typeof this._settings.buttonclass==='string'&&this._settings.buttonclass.length>0){cssclass.push(this._settings.buttonclass);
cssclass.push(' ');}var html=[''];html=['<a class="',cssclass.join(''),'" id="',this.id,'" href="',this._settings.src,'" alt="',this._settings.alt,'">',this._settings.text,
'</a>'];return html.join('');};zfp_ModalButton.prototype.bindEvents=function(){var button=$('#'+this.id),evt={};for(evt in this._settings.events){button.unbind(evt).bind(evt,this._settings.events[evt]);
}};function zf_PageSelector(id){;this.id=id;this._settings={buttonleftclass:'ps-buttonleft',buttonrightclass:'ps-buttonright',trackclass:'ps-track',pageclass:'ps-page',pageboxclass:'ps-pagebox',
unselectedborderclass:'pc-border12',selectedborderclass:'pc-border10',selectedclass:'selected',pagenameclass:'ps-pagetext',hiddenlinkclass:'ps-linkstyle',pageprefix:'page-',
pageiconwidth:86,pageiconmargin:10,buttoncolor:'#000',buttondisabledcolor:'#000'};this._parent=$('#'+id);this._selectedpage='';this._visiblewidth=0;this._trackwidth=0;
this._trackpagelocations=[0];this._trackpage=0;this._pagewidths=[0];this._labelsHaveResized=false;this._template=null;this._templateSettings=null;this._templatesapi=null;
}zf_PageSelector.inherits(zf_Object);zf_PageSelector.prototype.init=function(settings,callback){this._nullImg=new Image();this._nullImg.src='/zf/img/null.gif';this._settings.buttoncolor=this._parent.find('.'+this._settings.hiddenlinkclass).css('color');
this._settings.buttondisabledcolor=this._parent.css('color');if(typeof settings==='object'){$.extend(this._settings,settings);}if(typeof callback==='function'){callback();
}};zf_PageSelector.prototype.initUI=function(template,ownerid,photomap,textmap,settings,callback){var html=[],index=0,page={},i={},w=0,icon={},p='',pageid='',layoutid='',self=this;
this._template=template;this._templateSettings=settings;this._templatephotomap=photomap;this._templatetextmap=textmap;this._templatesapi=new zft_TemplatesApi(ownerid,
this._template.id,zf_stdGetCookie('zf_keyring'),zf_stdGetCookie('zf_5y_visitor'));this._trackwidth=0;this._labelsHaveResized=false;this._pagewidths=[];this._trackpage=0;
this._urlRequests={};for(index=0;index<this._template.pagecount;index++){page=this._getPage(this._template,index,this._templateSettings,true);if(page){w=0;p=this._getPageName(this._template,
index);layoutid=p;pageid=this._settings.pageprefix+layoutid;icon=new zf_TemplateImage(this._template.id,page.width,page.height,new Date());var size={cx:80,cy:80},
offset={cx:0,cy:0};if(page.width<page.height){size.cy=Math.ceil((80/page.width)*page.height);offset.cy=((size.cy-80)/2)*-1;w=this._settings.pageiconwidth;}else{size.cx=Math.ceil((80/page.height)*page.width);
w=size.cx+6;}if(page.meta.hasAlternatives&&this._templateSettings){layoutid=this._getSavedPageAlternative(layoutid,page,this._templateSettings);}this._urlRequests[pageid]=this._templatesapi.createRequest(layoutid,
new zf_Size(size.cx,size.cy),null,this._templatephotomap[p]||{},this._templatetextmap[p]||{});html.push('<div class="',this._settings.pageboxclass,'" style="width:',
w,'px;">','<div class="',this._settings.pageclass,' ',this._settings.unselectedborderclass,'" id="',pageid,'" style="width:',(w-4),'px;">','<img src="',this._nullImg.src,
'" style="background-position:',offset.cx,'px ',offset.cy,'px;width:',(w-6),'px;" />','</div>','<span class="',this._settings.pagenameclass,'">',(this._getPage(this._template,
index,this._templateSettings,false).meta.name||'&nbsp;'),'</span>','</div>');this._trackwidth+=w+this._settings.pageiconmargin;this._pagewidths.push(w+this._settings.pageiconmargin);
}}this._parent.find('.'+this._settings.trackclass).html(html.join('')).width(this._trackwidth);this._setButtonGradients();this._drawButtonArrows();for(i in this._urlRequests){(function(iconimg){self._templatesapi.registerRequest(self._urlRequests[iconimg],
function(url){self._parent.find('#'+iconimg+' img').css('background-image','url(\''+url.replace('"','')+'\')');});})(i);}this._parent.find('.'+this._settings.pageboxclass).unbind('mouseover').mouseover(function(){var p=$(this).find('.'+self._settings.pageclass);
if(!p.hasClass(self._settings.selectedclass)){p.removeClass(self._settings.unselectedborderclass).addClass(self._settings.selectedborderclass);}}).unbind('mouseout').mouseout(function(){var p=$(this).find('.'+self._settings.pageclass);
if(!p.hasClass(self._settings.selectedclass)){p.removeClass(self._settings.selectedborderclass).addClass(self._settings.unselectedborderclass);}}).unbind('click').click(function(){var p=$(this).find('.'+self._settings.pageclass);
if(p.length>0){self.selectPage(p[0].id.replace(self._settings.pageprefix,''));}});this._parent.find('.'+this._settings.buttonleftclass).unbind('click').click(function(){if($(this).hasClass('active')){self.scrollToPage(self._trackpage-1);
}else{var track=$(this).siblings('.ps-track');track.addClass('bounce-left');setTimeout(function(){track.removeClass('bounce-left');},1000);}return false;});this._parent.find('.'+this._settings.buttonrightclass).unbind('click').click(function(){if($(this).hasClass('active')){self.scrollToPage(self._trackpage+1);
}else{var track=$(this).siblings('.ps-track');track.addClass('bounce-right');setTimeout(function(){track.removeClass('bounce-right');},1000);}return false;});if(typeof callback==='function'){callback();
}};zf_PageSelector.prototype.updatePageIcon=function(pageid,layoutid){var p='page-'+pageid,self=this;if(this._urlRequests&&this._urlRequests[p]){if(typeof layoutid==='string'){this._urlRequests[p].page=layoutid;
}this._urlRequests[p].photoParams=this._templatephotomap[pageid]||{};this._urlRequests[p].textParams=this._templatetextmap[pageid]||{};this._templatesapi.registerRequest(this._urlRequests[p],
function(url){if(self._template.id===this._templateId){var parent=self._parent.find('#'+p+' img'),currentcssurl=parent.css('background-image').replace('url(','').replace('http://',
'').replace('https://','').replace(zf_currentHost,'').replace(/\"/g,'').replace(/\'/g,'').replace(')','');if(currentcssurl!==url){parent.addClass('transparent');
setTimeout(function(){parent.removeClass('transparent').css('background-image','url(\''+url+'\')');},200);}}});}};zf_PageSelector.prototype.selectPage=function(pageid,notify){this._selectedpage=pageid;
this._parent.find('.'+this._settings.pageclass).removeClass(this._settings.selectedclass);this._parent.find('.'+this._settings.pagenameclass).removeClass('show');
var page=this._parent.find('#'+this._settings.pageprefix+pageid);page.removeClass(this._settings.unselectedborderclass).addClass(this._settings.selectedborderclass).addClass(this._settings.selectedclass);
$(page).siblings('.'+this._settings.pagenameclass).addClass('show');var i=0,stp=0,scrollto=0,pageindex=this._getPageNumber(this._template,page.attr('id').replace(this._settings.pageprefix,
''));for(i=0;i<=pageindex;i++){if((scrollto+this._pagewidths[i])>((stp+1)*this._visiblewidth)){stp++;}scrollto+=this._pagewidths[i];}this.scrollToPage(stp);if(notify!==false&&typeof this.onchange==='function'){this.onchange(pageid);
}};zf_PageSelector.prototype.scrollToPage=function(page){if(page>=0&&page<this._trackpagelocations.length){this.scrollTo(this._trackpagelocations[page]);this._trackpage=page;if(this._trackpage===0){this._parent.find('.'+this._settings.buttonleftclass).removeClass('active');
this._parent.find('.'+this._settings.buttonrightclass).addClass('active');}else if(this._trackpage===(this._trackpagelocations.length-1)){this._parent.find('.'+this._settings.buttonrightclass).removeClass('active');
this._parent.find('.'+this._settings.buttonleftclass).addClass('active');}else{this._parent.find('.'+this._settings.buttonrightclass+', .'+this._settings.buttonleftclass).addClass('active');
}}};zf_PageSelector.prototype.scrollTo=function(location){if(location<=0&&location>(this._trackwidth*-1)){this._parent.find('.'+this._settings.trackclass).css(this._getTransform(),
'translateX('+location+'px)');}};zf_PageSelector.prototype.hide=function(){this._parent.hide();};zf_PageSelector.prototype.fadeOut=function(){this._parent.fadeOut(200);};zf_PageSelector.prototype.show=function(){this._parent.show();
};zf_PageSelector.prototype.fadeIn=function(){this._parent.fadeIn(200);};zf_PageSelector.prototype.resize=function(width){this._trackpagelocations=[0];this._visiblewidth=(width||this._parent.width())-100;
if(this._visiblewidth>this._trackwidth){this._parent.addClass('hide-buttons');}else{this._parent.removeClass('hide-buttons');var i=0,l=this._pagewidths.length,scrollto=0;
for(i=0;i<l;i++){if((scrollto-this._pagewidths[i])<=(this._trackpagelocations.length*this._visiblewidth*-1)){this._trackpagelocations.push(scrollto);}scrollto-=this._pagewidths[i];
}}this.truncatePageLabels();if(this._selectedpage!==''){this.selectPage(this._selectedpage,false);}this._setBounceRight();};zf_PageSelector.prototype.truncatePageLabels=function(){if(!this._labelsHaveResized){var pspageheight=this._parent.find('.'+this._settings.pageclass).height(),
parentheight=this._parent.height();this._parent.find('.'+this._settings.pagenameclass).each(function(){while(($(this).outerHeight()+pspageheight)>parentheight){$(this).html(function(index,
text){return text.replace(/\W*\s(\S)*$/,'&#8230;');});}});this._labelsHaveResized=true;}};zf_PageSelector.prototype._getTransform=function(){var t='transform';t='-webkit-transform';
return t;};zf_PageSelector.prototype._setButtonGradients=function(){var leftbutton=this._parent.find('.'+this._settings.buttonleftclass),bg=this._parent.css('background-color'),
rightbutton=this._parent.find('.'+this._settings.buttonrightclass),leftgradient='',rightgradient='';leftgradient='-webkit-gradient(linear, right top, left top, '+'color-stop(0%, '+zf_Color.toRgbaCss(bg,
0)+'), '+'color-stop(20%, '+zf_Color.toRgbaCss(bg,1)+'))';rightgradient='-webkit-gradient(linear, left top, right top, '+'color-stop(0%, '+zf_Color.toRgbaCss(bg,
0)+'), '+'color-stop(20%, '+zf_Color.toRgbaCss(bg,1)+'))';if(leftgradient!==''&&rightgradient!==''){leftbutton.css('background-image',leftgradient);rightbutton.css('background-image',
rightgradient);}else{leftbutton.css('background-color',bg);rightbutton.css('background-color',bg);}};zf_PageSelector.prototype._drawButtonArrows=function(){var canvai=this._parent.find('.'+this._settings.buttonleftclass+' canvas, .'+this._settings.buttonrightclass+' canvas'),
ctx={},i=0,len=canvai.length;for(i=0;i<len;i++){if(canvai[i].getContext){ctx=canvai[i].getContext('2d');ctx.strokeStyle=this._settings.buttoncolor;ctx.lineCap='round';
ctx.lineWidth=5;ctx.beginPath();if(canvai[i].parentElement.className.indexOf(this._settings.buttonleftclass)!==-1){ctx.moveTo(32.5,35);ctx.lineTo(25,42.5);ctx.lineTo(32.5,
50);ctx.stroke();}else{ctx.moveTo(17.5,35);ctx.lineTo(25,42.5);ctx.lineTo(17.5,50);ctx.stroke();}}}};zf_PageSelector.prototype._getPageAlternative=function(template,pageFamily,
id){var pa=null;if(template.pageAlternatives&&template.pageAlternatives[pageFamily]&&template.pageAlternatives[pageFamily][id]){pa=template.pageAlternatives[pageFamily][id];
}return pa;};zf_PageSelector.prototype._getPage=function(template,index,settings,addAlternative){var p='',pname='',pg={},returnPage=null;if(template&&index>=0){for(p in template.pages){pg=template.pages[p];
if(pg.number===index){returnPage=pg;pname=p;break;}}if(addAlternative&&returnPage.meta.hasAlternatives&&settings){var altid=this._getSavedPageAlternative(pname,returnPage,
settings);returnPage=$.extend({},returnPage,this._getPageAlternative(template,returnPage.meta.pageFamily,altid));returnPage.meta.hasAlternatives=template.pages[pname].meta.hasAlternatives;
returnPage.meta.defaultAlternative=template.pages[pname].meta.defaultAlternative;returnPage.meta.name=template.pages[pname].meta.name;returnPage.meta.pageGradient=template.pages[pname].meta.pageGradient;
returnPage.meta.gutterWidth=template.pages[pname].meta.gutterWidth;}}return returnPage;};zf_PageSelector.prototype._getSavedPageAlternatives=function(settings){var vals=[],pgalt=[],
kvp={},len=0,i=0;if(settings['page-mapping']){vals=settings['page-mapping'].split(',');len=vals.length;for(i=0;i<len;i++){if(vals[i].indexOf(':')>=0){pgalt=vals[i].split(':');
kvp[pgalt[0]]=pgalt[1];}}}return kvp;};zf_PageSelector.prototype._getSavedPageAlternative=function(pageid,page,settings){var returnVal=null;if(page.meta.hasAlternatives&&settings['page-mapping']){returnVal=this._getSavedPageAlternatives(settings)[pageid]||page.meta.defaultAlternative;
}else if(page.meta.hasAlternatives&&page.meta.defaultAlternative){returnVal=page.meta.defaultAlternative;}return returnVal;};zf_PageSelector.prototype._getPageName=function(template,
index){;;var p='',returnPage='',pg={};for(p in template.pages){pg=template.pages[p];if(pg.number===index){returnPage=p;break;}}return returnPage;};zf_PageSelector.prototype._getPageNumber=function(template,
name){;;var n=-1;if(template.pages[name]&&typeof template.pages[name].number==='number'){n=template.pages[name].number;}return n;};zf_PageSelector.prototype._setBounceRight=function(){if(this._trackpagelocations){var keyframes=$('head #bounce-right-style'),
step0=this._trackpagelocations[this._trackpagelocations.length-1],step1=step0-30,step2=step0-15,transform=this._getTransform(),kfname='@keyframes',css=[''];if(window.CSSRule.WEBKIT_KEYFRAMES_RULE){kfname='@-webkit-keyframes';
}else if(window.CSSRule.MOZ_KEYFRAMES_RULE){kfname='@-moz-keyframes';}else if(window.CSSRule.O_KEYFRAMES_RULE){kfname='@-o-keyframes';}css=[kfname,' bounceright {\n',
'0%, 20%, 50%, 80%, 100% {',transform,': translateX('+step0+'px);}\n','40% {',transform,': translateX('+step1+'px);}\n','60% {',transform,': translateX('+step2+'px);}\n',
'}'];if(keyframes.length<=0){$('head').append('<style type="text/css" id="bounce-right-style">\n '+css.join('')+'</style>');}else{keyframes.html(css.join(''));}}};
function zf_ScrollView(id,cyLine){zf_Control.prototype.constructor.call(this,id);zf_stdSetClientObject(id,this);if(cyLine!=null)this._init(cyLine);}zf_ScrollView.inherits(zf_Control);
zf_ScrollView.prototype.getContentNode=zf_Control.prototype.dom;zf_ScrollView.prototype.update=function(sync){if(sync)this._bar._update();else this._bar.update();};zf_ScrollView.prototype.getScrollPos=function(){return this._bar.getScrollPos();
};zf_ScrollView.prototype.scrollTo=function(pos){this._bar.scrollTo(pos);};zf_ScrollView.prototype.getLineHeight=function(){return this._bar.getLineHeight();};zf_ScrollView.prototype.lineUp=function(){this._bar.lineUp();
};zf_ScrollView.prototype.lineDown=function(){this._bar.lineDown();};zf_ScrollView.prototype.pageUp=function(){this._bar.pageUp();};zf_ScrollView.prototype.pageDown=function(){this._bar.pageDown();};zf_ScrollView.prototype.setHeight=function(cy){if(cy<0)cy=0;
this.dom().parentNode.parentNode.style.height=cy+"px";};zf_ScrollView.prototype.disable=function(){this._bar.close();};zf_ScrollView.prototype.getHeight=function(){return document.getElementById(this.id).parentNode.offsetHeight;
};zf_ScrollView.prototype.ensureVisible=function(top,height,speed,completed,needQueue){this._bar._ensureVisible(top,height,speed,completed,needQueue);};zf_ScrollView.prototype.isVisible=function(top,
height){return this._bar._isVisible(top,height);};zf_ScrollView.prototype._init=function(cyLine){;this._bar=new zf_ScrollBar(this.id,cyLine);this._bar.onscrollstart=this.closure(this._bar_onscrollstart);
this._bar.onscrolling=this.closure(this._bar_onscrolling);this._bar.onscroll=this.closure(this._bar_onscroll);};zf_ScrollView.prototype._bar_onscrollstart=function(){if(this.onscrollstart!=null)this.onscrollstart();
};zf_ScrollView.prototype._bar_onscrolling=function(){if(this.onscrolling!=null)this.onscrolling();};zf_ScrollView.prototype._bar_onscroll=function(){if(this.onscroll!=null)this.onscroll();
};function zf_SelectBox(id){zf_Control.prototype.constructor.call(this,id);this.constrainWidth=true;this._speed=150;this._disabled=false;var selection=this.$(".zf-current-selection");
if(selection.length==0){$(this.dom()).prepend('<div class="zf-outer-current-selection"><div tabindex="-1" class="zf-current-selection"></div></div>');selection=this.$(".zf-current-selection");
}if(this.$(".focus-handler").length==0){$(this.dom()).prepend('<input type="button" tabindex="0" class="focus-handler" style="position: absolute; z-index: -1; top:5px; left:10px; width: 0px; height: 0px; border: none" ></a>');
}this.refreshOptions();zf_stdAttachEvent($(this._getOptions()).get(0),"click",zf_stdStopPropagation);var self=this;function onmousedown(event){var $target=$(event.target);
if($target.parents("#"+self.id).length==0&&$target.parents("#"+self._optionsId).length==0&&$target.filter("#"+self.id).length==0&&$target.filter("#"+self._optionsId).length==0){self._onFocusLost();
}}if(document.addEventListener)document.addEventListener('mousedown',onmousedown,true);else $(document).mousedown(onmousedown);$(this.dom()).mousedown(function(event){if(self._disabled)return;
self._toggleDownView();self.$(".focus-handler").focus();});$(this.dom()).click(function(event){if(self._disabled)return;self.$(".focus-handler").focus();});selection.focus(function(event){var focus=self.$(".focus-handler");
focus.focus();event.preventDefault();event.stopPropagation();return false;});this.$(".focus-handler").focus(function(event){$(event.target).data("zf-selector-focused",
true);self._onFocusGained();}).blur(function(event){$(event.target).removeData("zf-selector-focused",true);});this._getOptions().hide();this._getOptions().css("position",
"absolute");this._getOptions().css("z-index","9999");if(selection.find(function(){return $(this).attr("zf:value");}).length==0){var selected=this._getOptions().find(".zf-option-selected");
if(selected.length>0)this._selectItem(selected);else this._moveSelectionFirst();}var button=this.$(".zf-current-selection-button");if(button.length>0){$(this.dom()).hover(function(event){if(self._disabled)return;
$(self.dom()).addClass("zf-select-hovered");},function(event){if(self._disabled)return;$(self.dom()).removeClass("zf-select-hovered");});}}zf_SelectBox.inherits(zf_Control);
zf_SelectBox.prototype.refreshView=function(){button.css("top",(($(this.dom()).height()-button.outerHeight(true))>>1)+"px");button.css("left",($(this.dom()).width()-button.outerWidth(true))+"px");
};zf_SelectBox.prototype.enable=function(enable){if(enable){this._disabled=false;this.$(".focus-handler").removeAttr("disabled");}else{this._disabled=true;this.$(".focus-handler").attr("disabled",
"disabled");}};zf_SelectBox.prototype.getSelected=function(){var res;this.$(".zf-current-selection").find("*").filter(function(){var attr=$(this).attr("zf:value");if(attr!=null){res=attr;
}});return res;};zf_SelectBox.prototype.setSelected=function(value){var availOptions=this._getOptions().find(".zf-option-selectable");var toSelect=availOptions.filter(function(){var attr=$(this).attr("zf:value");
if(attr==value){return true;}return false;});if(toSelect.length>0){this._selectItem(toSelect);}};zf_SelectBox.prototype._getOptions=function(){return this._optionsId==null?$([]):$("#"+this._optionsId);
};zf_SelectBox.prototype._toggleDownView=function(){var focus=this.$(".focus-handler");focus.focus();var options=this._getOptions();var ownerPos=this.$dom().offset();if(options.is(":hidden")){options.each(function(){this.style.visibility="hidden";
});options.show();var outerHeightOptions=options.outerHeight();var heightOptions=options.height();var top1=Math.floor(ownerPos.top+$(this.dom()).outerHeight());var top2=ownerPos.top-outerHeightOptions;
var top;if(top1+outerHeightOptions-$(window).scrollTop()<zf_stdGetClientHeight()-20){top=top1;this._effect=1;}else if((this.disableOpenUpward==null||this.disableOpenUpward!=true)&&top2>$(window).scrollTop()+20){top=top2;
this._effect=2;}else{top=top1;this._effect=1;}options.hide();options.each(function(){this.style.visibility="visible";});options.css("left",ownerPos.left);var width=this.$(".zf-outer-current-selection").outerWidth()-(options.outerWidth()-options.width());
if(this.constrainWidth)options.width(width);else options.css('min-width',width+'px');options.find(".zf-option-hovered").removeClass("zf-option-hovered select-color2 select-bgcolor2");
options.find(".zf-option-selected").addClass("zf-option-hovered select-color2 select-bgcolor2");switch(this._effect){case 2:options.show();options.css("height",1);
options.css("top",ownerPos.top);this._getOptions().animate({top:top,height:heightOptions},this._speed,function(){options.height("auto");});break;default:options.css("top",
top);options.slideDown(this._speed);break;}this.$dom().trigger('dropDown');}else{this._animateHideOptions();}};zf_SelectBox.prototype._animateHideOptions=function(){var options=this._getOptions();
if(options.is(":hidden"))return;var self=this;switch(this._effect){case 2:options.animate({height:1,top:$(self.dom()).offset().top},this._speed,function(){options.hide().height("auto");
});break;default:options.slideUp(this._speed);break;}this.$dom().trigger('pullUp');};zf_SelectBox.prototype._moveSelectionFirst=function(){var availOptions=this._getOptions().find(".zf-option-selectable");
var nextSelected=availOptions.filter(".zf-option-selectable").filter(":first");if(nextSelected.length>0){this._selectItem(nextSelected);}};zf_SelectBox.prototype._moveSelectionLast=function(){var availOptions=this._getOptions().find(".zf-option-selectable");
var nextSelected=availOptions.filter(".zf-option-selectable").filter(":last");if(nextSelected.length>0){this._selectItem(nextSelected);}};zf_SelectBox.prototype._moveSelectionDown=function(){var availOptions=this._getOptions().find(".zf-option-selectable");
var selected=availOptions.filter(".zf-option-selected");var nextSelected;if(selected.length==0){nextSelected=availOptions.filter(".zf-option-selectable").filter(":first");
}else{nextSelected=selected.nextAll(".zf-option-selectable");}if(nextSelected.length>0){this._selectItem(nextSelected.eq(0));}};zf_SelectBox.prototype._moveSelectionUp=function(){var availOptions=this._getOptions().find(".zf-option-selectable");
var selected=availOptions.filter(".zf-option-selected");var nextSelected;if(selected.length==0){nextSelected=availOptions.filter(".zf-option-selectable").filter(":last");
}else{nextSelected=selected.prevAll(".zf-option-selectable");}if(nextSelected.length>0){this._selectItem(nextSelected.eq(0));}};zf_SelectBox.prototype._keyboardHandler=function(event){if(!this._getOptions().is(":hidden")){var hovered=this._getOptions().find(".zf-option-hovered");
if(hovered.length>0)this._selectItem(hovered);}switch(event.keyCode){case 9:this._onFocusLost();return true;case 34:case 35:this._moveSelectionLast();event.preventDefault();
event.stopPropagation();return false;case 33:case 36:this._moveSelectionFirst();event.preventDefault();event.stopPropagation();return false;case 39:case 40:this._moveSelectionDown();
event.preventDefault();event.stopPropagation();return false;case 37:case 38:this._moveSelectionUp();event.preventDefault();event.stopPropagation();return false;case 27:this._animateHideOptions();
event.preventDefault();event.stopPropagation();return false;case 32:this._toggleDownView();event.preventDefault();event.stopPropagation();return false;case 13:this._animateHideOptions();
event.preventDefault();event.stopPropagation();return false;default:break;}return true;};zf_SelectBox.prototype._onFocusGained=function(){if(this._disabled)return;this.$(".zf-current-selection").addClass("zf-current-selection-focused");
var self=this;if(this._installedKeyboardHandler==null){this._installedKeyboardHandler=function(event){self._keyboardHandler(event);};$(document).bind("keydown",this._installedKeyboardHandler);
}};zf_SelectBox.prototype._onFocusLost=function(){if(this._disabled)return;this.$(".zf-current-selection").removeClass("zf-current-selection-focused");this._animateHideOptions();
if(this._installedKeyboardHandler!=null){$(document).unbind("keydown",this._installedKeyboardHandler);this._installedKeyboardHandler=null;}};zf_SelectBox.prototype._selectItem=function(item){this.$(".zf-current-selection").empty().append(item.clone().removeClass("zf-option-hovered select-color2 select-bgcolor2"));
var oldSelected=this._getOptions().find(".zf-option-selected");oldSelected.removeClass("zf-option-selected");oldSelected.removeClass("zf-option-hovered select-color2 select-bgcolor2");
item.addClass("zf-option-selected");item.addClass("zf-option-hovered select-color2 select-bgcolor2");$(this.dom()).trigger('zf-change');};zf_SelectBox.prototype.refreshOptions=function(){var optionsRaw=[];
var self=this;var alreadyInitialized=this._optionsId!=null;var container=this._optionsId==null?this.$("div:not(.zf-current-selection) div"):this._getOptions().find("div");
container.filter(function(){return $(this).attr("zf:value");}).each(function(idx,v){optionsRaw.push(v.parentNode);var option=$(v);if(option.data("zf-option-initialized")==null){option.addClass("zf-option-selectable");
option.data("zf-option-initialized",true);option.mousedown(function(event){var focus=self.$(".focus-handler");focus.focus();});option.click(function(event){var focus=self.$(".focus-handler");
focus.focus();});option.focus(function(event){var focus=self.$(".focus-handler");focus.focus();event.preventDefault();event.stopPropagation();return false;});option.mouseup(function(event){self._selectItem($(this));
self._animateHideOptions();});option.mouseenter(function(event){self._getOptions().find(".zf-option-hovered").removeClass("zf-option-hovered select-color2 select-bgcolor2");
$(this).addClass("zf-option-hovered select-color2 select-bgcolor2");event.preventDefault();event.stopPropagation();return false;});}});if(!alreadyInitialized&&optionsRaw.length>0){var o=optionsRaw.pop();
var attr=o.getAttribute("id");if(attr==null||attr.length==0){o.setAttribute("id",this.id+"-options");attr=o.getAttribute("id");}$("body").prepend($(o));this._optionsId=attr;
}};function zf_Slider(id,vertical,step,precision,immediateInit){zf_Control.prototype.constructor.call(this,id);zf_stdSetClientObject(id,this);this._vertical=vertical;this._step=step;
this._precision=precision;this._pos=0;this._barOffset=20;if(immediateInit===true){this._init();return;}zf_stdDeferCall(null,this._init,this);}zf_Slider.inherits(zf_Control);
zf_Slider.prototype.setPos=function(pos){;;pos=Math.round(pos/this._precision)*this._precision;if(pos<0)pos=0;if(pos>100)pos=100;if(pos==this._pos)return false;this._pos=pos;
pos=pos/100*this._size;if(this._vertical){this.$('.slider-h').css('margin-top',this._size-pos+'px');}else{this.$('.slider-h').css('margin-left',pos+'px');}return true;
};zf_Slider.prototype.getPos=function(){return this._pos;};zf_Slider.prototype._init=function(){this._size=zf_stdExtractPixels(this.$().css(this._vertical?'height':'width'));if(this._vertical){this._attachButton('A:first',
this._step);this._attachButton('A:last',-this._step);this._size-=this._barOffset;}else{this._attachButton('A:first',-this._step);this._attachButton('A:last',this._step);
}var self=this;this._mouseup=this.closure(this._handle_onmouseup);this._mousemove=this.closure(this._handle_onmousemove);this.$('.slider-h').mousedown(this.closure(this._handle_onmousedown)).bind('touchstart',
this.closure(this._handle_onmousedown)).bind('selectstart',zf_stdFalse);this.$().mousedown(this.closure(this._slider_onmousedown)).bind('touchstart',this.closure(this._slider_onmousedown));
};zf_Slider.prototype._attachButton=function(selector,delta){this.$(selector).mousedown(this.closure(this._button_onmousedown,delta,false)).dblclick(zf_stdFalse).click(zf_stdFalse).mouseup(this.closure(this._button_onmouseup)).mouseout(this.closure(this._button_onmouseup));
};zf_Slider.prototype._slider_onmousedown=function(e){var offset=this.$().offset();var pageX=e.pageX;var pageY=e.pageY;if(this._vertical){offset=offset.top+zf_stdExtractPixels(this.$().css('border-top-width'))+this._barOffset;
offset=this._size-(pageY-offset-this._barOffset);}else{offset=offset.left+zf_stdExtractPixels(this.$().css('border-left-width'));offset=pageX-offset;}if(this.setPos(100*offset/this._size)){if(this.onchange!=null)this.onchange(this._pos);
}};zf_Slider.prototype._button_onmousedown=function(e,delta,dbl){if(e!=null){e.stopPropagation();$(e.currentTarget).parent().addClass('selected');}if(this.setPos(this._pos+delta)){if(this.onchange!=null)this.onchange(this._pos);
}var self=this;var repeat=function(){self._button_onmousedown(null,delta);};if(this._delayTimer==null){this._delayTimer=setTimeout(repeat,400);}else if(this._repeatTimer==null){this._repeatTimer=setInterval(repeat,
80);}return false;};zf_Slider.prototype._button_onmouseup=function(e){if(this._repeatTimer!=null){clearInterval(this._repeatTimer);this._repeatTimer=null;}if(this._delayTimer!=null){clearTimeout(this._delayTimer);
this._delayTimer=null;}if(e!=null){$(e.currentTarget).parent().removeClass('selected');}};zf_Slider.prototype._handle_onmousedown=function(e){e.stopPropagation();e.preventDefault();
if(!zf_stdIsLeftButton(e))return;var node=e.currentTarget;if(document.addEventListener){document.addEventListener("mousemove",this._mousemove,true);document.addEventListener("mouseup",
this._mouseup,true);document.addEventListener("selectstart",zf_stdFalse,true);}else if(node.setCapture){$(node).mousemove(this._mousemove).mouseup(this._mouseup);
node.setCapture();}if(node){$(node).addClass('selected');}var pageX=e.pageX;var pageY=e.pageY;if(this._vertical)this._anchorY=pageY;else this._anchorX=pageX;this._anchorPos=this._pos;
};zf_Slider.prototype._handle_onmouseup=function(e){e=jQuery.event.fix(e);e.stopPropagation();e.preventDefault();this._handle_onmousemove(e);var node=this.$('.slider-h')[0];
if(document.removeEventListener){document.removeEventListener("mousemove",this._mousemove,true);document.removeEventListener("mouseup",this._mouseup,true);document.removeEventListener("selectstart",
zf_stdFalse,true);}else if(node.releaseCapture){node.releaseCapture();$(node).unbind('mousemove mouseup');}if(node){$(node).removeClass('selected');}};zf_Slider.prototype._handle_onmousemove=function(e){e=jQuery.event.fix(e);
var pos;var pageX=e.pageX;var pageY=e.pageY;if(this._vertical)pos=this._anchorPos+100*(this._anchorY-pageY)/this._size;else pos=this._anchorPos+100*(pageX-this._anchorX)/this._size;
if(this.setPos(pos)){if(this.onchange!=null)this.onchange(this._pos);}};function zf_Toolbar(id){;this._settings={containerclass:'toolbar-container',toolbarclass:'toolbar',
spacerclass:'spacer',selectedclass:'selected',cornerclass:{all:'corner-all',top:'corner-top',bottom:'corner-bottom',left:'corner-left',right:'corner-right'},corners:'all',
css:''};this._buttons=[];this._parent={};}zf_Toolbar.inherits(zf_Object);zf_Toolbar.prototype.init=function(parent,buttons,settings){;this._parent=parent;if(typeof settings==='object'){$.extend(this._settings,
settings);}if(typeof buttons==='object'){this._buttons=buttons;var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){this._buttons[i].setSetting('parent',
this._parent);}}this.draw();};zf_Toolbar.prototype.getSetting=function(key){if(typeof this._settings==='object'&&this._settings.hasOwnProperty(key)){return this._settings[key];
}else{return undefined;}};zf_Toolbar.prototype.setSetting=function(key,value){this._settings[key]=value;};zf_Toolbar.prototype.getButtons=function(){return this._buttons;};zf_Toolbar.prototype.getButton=function(indexid){var button={},
i=0,buttonlen=this._buttons.length;if(typeof indexid==='number'){if(indexid>=0&&indexid<this._buttons.length){button=this._buttons[indexid];}else{button=null;}}else{for(i=0;
i<buttonlen;i++){if(this._buttons[i].id===indexid){button=this._buttons[i];break;}}if(button==={}){button=null;}}return button;};zf_Toolbar.prototype.addButton=function(button,
index){button.setSetting('parent',this._parent);if(arguments.length==2&&typeof index==='number'&&index>=0&&index<this._buttons.length){this._buttons.splice(index,
0,button);}else{this._buttons.push(button);}};zf_Toolbar.prototype.removeButton=function(id){var i=0,x=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons.splice(x,
1);break;}x++;}};zf_Toolbar.prototype.hideButton=function(id){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('visible',
false);this._parent.find('.'+id).hide();break;}}};zf_Toolbar.prototype.hideAllButtons=function(){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){this._buttons[i].setSetting('visible',
false);this._parent.find('.'+this._buttons[i].id).hide();}};zf_Toolbar.prototype.hideAllButButton=function(id){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('visible',
true);this._parent.find('.'+id).show();}else{this._buttons[i].setSetting('visible',false);this._parent.find('.'+this._buttons[i].id).hide();}}};zf_Toolbar.prototype.showButton=function(id){var i=0,
buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('visible',true);this._parent.find('.'+id).show();
break;}}};zf_Toolbar.prototype.showAllButButton=function(id){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('visible',
false);this._parent.find('.'+id).hide();}else{this._buttons[i].setSetting('visible',true);this._parent.find('.'+this._buttons[i].id).show();}}};zf_Toolbar.prototype.showAllButtons=function(){var i=0,
buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){this._buttons[i].setSetting('visible',true);this._parent.find('.'+this._buttons[i].id).show();}};zf_Toolbar.prototype.selectButton=function(id,
groupclass){var i=0,buttonlen=this._buttons.length;if(typeof groupclass==='string'){$(this._parent).find('.'+groupclass).removeClass(this._settings.selectedclass);
}for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('selected',true);this._parent.find('.'+id).addClass(this._settings.selectedclass);
break;}}};zf_Toolbar.prototype.unselectButton=function(id){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){this._buttons[i].setSetting('selected',
false);this._parent.find('.'+id).removeClass(this._settings.selectedclass);break;}}};zf_Toolbar.prototype.toggleButton=function(id){var i=0,buttonlen=this._buttons.length;
for(i=0;i<buttonlen;i++){if(this._buttons[i].id===id){if(this._buttons[i].getSetting('selected')){this._buttons[i].setSetting('selected',false);this._parent.find('.'+id).removeClass(this._settings.selectedclass);
}else{this._buttons[i].setSetting('selected',true);this._parent.find('.'+id).addClass(this._settings.selectedclass);}break;}}};zf_Toolbar.prototype.hideButtonGroup=function(groupclass){var i=0,
buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].getSetting('groupclass')===groupclass){this._buttons[i].setSetting('visible',false);this._parent.find('.'+this._buttons[i].id).hide();
}}};zf_Toolbar.prototype.showButtonGroup=function(groupclass){var i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){if(this._buttons[i].getSetting('groupclass')===groupclass){this._buttons[i].setSetting('visible',
true);this._parent.find('.'+this._buttons[i].id).show();}}};zf_Toolbar.prototype.format=function(){var lastbutton,i=0,x=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;
i++){var b=this._parent.find('.'+this._buttons[i].id);this._buttons[i].setSetting('corners','');b.removeClass(this._settings.cornerclass.all).removeClass(this._settings.cornerclass.left).removeClass(this._settings.cornerclass.right).removeClass(this._settings.cornerclass.top).removeClass(this._settings.cornerclass.bottom);
if(this._buttons[i].getSetting('visible')===true){if(x===0&&(this._settings.corners==='all'||this._settings.corners==='left')){this._buttons[i].setSetting('corners',
this._settings.cornerclass.left);b.addClass(this._settings.cornerclass.left);}lastbutton=i;x++;}}if(typeof lastbutton==='number'&&(this._settings.corners==='all'||this._settings.corners==='right')){this._buttons[lastbutton].setSetting('corners',
this._settings.cornerclass.right);this._parent.find('.'+this._buttons[lastbutton].id).addClass(this._settings.cornerclass.right);}};zf_Toolbar.prototype.draw=function(){var html=['<div class="',
this._settings.containerclass,'">','<div class="',this._settings.toolbarclass,' ',this._settings.cornerclass[this._settings.corners],'">'],i=0,buttonlen=this._buttons.length;
for(i=0;i<buttonlen;i++){html.push(this._buttons[i].toString());}html.push('</div></div>');this._parent.html(html.join(''));for(i=0;i<buttonlen;i++){var events=this._buttons[i].getSetting('events');
for(var evt in events){if(typeof events[evt]==='object'&&events[evt].hasOwnProperty('type')&&events[evt].hasOwnProperty('handler')){this._parent.find('.'+this._settings.containerclass+' .'+this._buttons[i].id).unbind(events[evt].type).bind(events[evt].type,
events[evt].handler);}}if(this._buttons[i].getSetting('selected')===true){this._parent.find('.'+this._buttons[i].id).addClass(this._settings.selectedclass);}else{this._parent.find('.'+this._buttons[i].id).removeClass(this._settings.selectedclass);
}}this.format();};zf_Toolbar.prototype.hide=function(){this._parent.find('.'+this._settings['containerclass']).hide();};zf_Toolbar.prototype.fadeOut=function(){this._parent.find('.'+this._settings['containerclass']).fadeOut(200,
function(){$(this).hide();});};zf_Toolbar.prototype.fadeIn=function(){this._parent.find('.'+this._settings['containerclass']).fadeIn(200);};zf_Toolbar.prototype.show=function(){this._parent.find('.'+this._settings['containerclass']).show();
};zf_Toolbar.prototype.getWidth=function(margin){var useMargin=margin||false;return this._parent.find('.'+this._settings['containerclass']).outerWidth(useMargin);};zf_Toolbar.prototype.getHeight=function(margin){var useMargin=margin||false;
return this._parent.find('.'+this._settings['containerclass']).outerHeight(useMargin);};function zf_ToolbarButton(id,settings){;this.id=id;this._settings={buttonclass:'toolbar-button',
groupclass:'',text:'',title:'',css:'',cornerclass:{all:'corner-all',top:'corner-top',bottom:'corner-bottom',left:'corner-left',right:'corner-right'},corners:'',selected:false,
visible:true,events:{},parent:null};if(typeof settings==='object'){$.extend(this._settings,settings);}}zf_ToolbarButton.prototype.getSetting=function(key){if(this._settings.hasOwnProperty(key)){return this._settings[key];
}else{return undefined;}};zf_ToolbarButton.prototype.setSetting=function(key,value){this._settings[key]=value;if(key==='text'&&this._settings['parent']!=null){$(this._settings['parent']).find('.'+this.id+' .text').html(value).attr('title',
value);}};zf_ToolbarButton.prototype.toString=function(){var cssclass=[''];if(typeof this._settings.buttonclass==='string'&&this._settings.buttonclass.length>0){cssclass.push(this._settings.buttonclass);
cssclass.push(' ');}if(typeof this._settings.groupclass==='string'&&this._settings.groupclass.length>0){cssclass.push(this._settings.groupclass);cssclass.push(' ');
}if(typeof this._settings.corners==='string'&&typeof this._settings.cornerclass[this._settings.corners]==='string'&&this._settings.cornerclass[this._settings.corners].length>0){cssclass.push(this._settings.cornerclass[this._settings.corners]);
cssclass.push(' ');}var html=[''];if(this._settings.type==='image-text-button'){cssclass.push('imagetext ');cssclass.push(this.id);html=['<a class="',cssclass.join(''),
'" href="#" title="',this._settings.title,'"><span class="image">&nbsp;</span>','<span class="text">',this._settings.text,'</span></a>'];}else if(this._settings.type==='image-button'){cssclass.push('image ');
cssclass.push(this.id);html=['<a class="',cssclass.join(''),'" href="#" title="',this._settings.title,'"><span class="image">&nbsp;</span></a>'];}else{cssclass.push(this.id);
html=['<a class="',cssclass.join(''),'" href="#" title="',this._settings.title,'"><span class="text">',this._settings.text,'</span></a>'];}return html.join('');};
function zf_ZoomSlider(id,slider){;this._settings={containerclass:'zoomslider-container',buttoncontainerclass:'zoomslider-button-container',carrotcontainerclass:'zoomslider-carrot',
toolbarclass:'zoomslider',spacerclass:'spacer',backgroundclass:'zoomslider-bg',selectedclass:'selected',cornerclass:{all:'corner-all',top:'corner-top',bottom:'corner-bottom',
left:'corner-left',right:'corner-right'},corners:'all',css:''};this._slider=slider;this._buttons=[];this._parent=$('#'+id);}zf_ZoomSlider.inherits(zf_Toolbar);zf_ZoomSlider.prototype.init=function(buttons,
settings,callback){if(typeof settings==='object'){$.extend(this._settings,settings);}if(typeof buttons!=='undefined'&&buttons!==null){this._buttons=buttons;var i=0,
buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){this._buttons[i].setSetting('parent',this._parent);}}this.draw();if(typeof callback==='function'){callback();
}};zf_ZoomSlider.prototype.format=function(){var lastbutton,i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){var b=this._parent.find('.'+this._buttons[i].id);this._buttons[i].setSetting('corners',
'');b.removeClass(this._settings.cornerclass.all).removeClass(this._settings.cornerclass.left).removeClass(this._settings.cornerclass.right).removeClass(this._settings.cornerclass.top).removeClass(this._settings.cornerclass.bottom);
if(this._buttons[i].getSetting('visible')===true){lastbutton=i;}}if(typeof lastbutton==='number'&&(this._settings.corners==='all'||this._settings.corners==='right')){this._buttons[lastbutton].setSetting('corners',
this._settings.cornerclass.right);this._parent.find('.'+this._buttons[lastbutton].id).addClass(this._settings.cornerclass.right);}};zf_ZoomSlider.prototype.draw=function(){var html=[],
i=0,buttonlen=this._buttons.length;for(i=0;i<buttonlen;i++){html.push(this._buttons[i].toString());}this._parent.find('.'+this._settings.buttoncontainerclass).html(html.join(''));
for(i=0;i<buttonlen;i++){var events=this._buttons[i].getSetting('events');for(var evt in events){if(typeof events[evt]==='object'&&events[evt].hasOwnProperty('type')&&events[evt].hasOwnProperty('handler')){this._parent.find('.'+this._settings.buttoncontainerclass+' .'+this._buttons[i].id).unbind(events[evt].type).bind(events[evt].type,
events[evt].handler);}}if(this._buttons[i].getSetting('selected')===true){this._parent.find('.'+this._buttons[i].id).addClass(this._settings.selectedclass);}else{this._parent.find('.'+this._buttons[i].id).removeClass(this._settings.selectedclass);
}}this.format();};zf_ZoomSlider.prototype.getSlider=function(){return this._slider;};zf_ZoomSlider.prototype.setPos=function(top,left){this._parent.css('top',top+'px').css('left',left+'px');
};zf_ZoomSlider.prototype.hide=function(){this._parent.hide();};zf_ZoomSlider.prototype.fadeOut=function(){this._parent.fadeOut(200,function(){$(this).hide();});};zf_ZoomSlider.prototype.fadeIn=function(){this._parent.fadeIn(200);
};zf_ZoomSlider.prototype.show=function(){this._parent.show();};zf_ZoomSlider.prototype.getWidth=function(margin){var useMargin=margin||false;return this._parent.outerWidth(useMargin);};zf_ZoomSlider.prototype.getHeight=function(margin){var useMargin=margin||false;
return this._parent.outerHeight(useMargin);};zf_ZoomSlider.prototype.getCarrot=function(){return this._parent.find('.'+this._settings.carrotcontainerclass);};function zf_BaseMeta(){this.index=0;
this.data={};}zf_BaseMeta.compare=function(a,b){return a.index-b.index;};zf_BaseMeta.weightedComparer=function(weights){return function(a,b){var wa=weights[a.id];var wb=weights[b.id];
if(wa!=null&&wb!=null)return wa-wb;else if(wa!=null&&wb==null)return-1;else if(wa==null&&wb!=null)return 1;else return a.index-b.index;};};var zf_EditorType={Generic:"Generic",
Cropping:"Cropping",Overlay:"Overlay"};function zf_EditWithSpin(id){zf_Control.prototype.constructor.call(this,id);zf_stdSetClientObject(id,this);this.minValue=0;this.maxValue=Number.MAX_VALUE;
this._delayTimer=null;this._repeatTimer=null;var up=this.$('SPAN.ews-up:first');up.mousedown(this.eventHandler(this._spin_onmousedown,+1)).mouseup(this.eventHandler(this._spin_onmouseup)).mouseout(this.eventHandler(this._spin_onmouseup));
var down=this.$('SPAN.ews-down:first');down.mousedown(this.eventHandler(this._spin_onmousedown,-1)).mouseup(this.eventHandler(this._spin_onmouseup)).mouseout(this.eventHandler(this._spin_onmouseup));
this.$('INPUT:first').change(this.eventHandler(this._edit_onchange)).keyup(this.eventHandler(this._edit_onchange)).click(function(){this.select();}).focus(this.eventHandler(this._edit_onfocus)).mousedown(function(e){e.stopPropagation();
});}zf_EditWithSpin.inherits(zf_Control);zf_EditWithSpin.createHtml=function(id,readOnly,value){if(value==null)value="";return['<div id="',id,'" class="ews',(readOnly?' ews-ro':''),'">','<span class="ews-down ews-bgcolor3"></span>',
'<span class="ews-up ews-bgcolor3"></span>','<input type="text" autocomplete="off" value="',value,'"',' class="ews-font1 ews-bgcolor1 ews-color1 ews-border1" />',
'<div class="ews-font1 ews-bgcolor2 ews-color2 ews-border2">',value,'</div>','</div>'].join("");};zf_EditWithSpin.prototype.focus=function(){if(!this.$().hasClass("ews-ro"))this.$("INPUT")[0].focus();
};zf_EditWithSpin.prototype.blur=function(){if(!this.$().hasClass("ews-ro"))this.$("INPUT")[0].blur();};zf_EditWithSpin.prototype.getValue=function(){return this.val();};zf_EditWithSpin.prototype.val=function(value){var input=this.$('INPUT');
if(value)input.val(value);else value=this._val(input,0);return value;};zf_EditWithSpin.prototype._val=function(input,increment){var value=parseInt(input.val(),10)+increment;if(isNaN(value))value=0;
return Math.min(this.maxValue,Math.max(this.minValue,value));};zf_EditWithSpin.prototype._spin_ondblclick=function(e,increment){if(this.$().hasClass("ews-ro"))return undefined;
var edit=this.$('INPUT');var value=this._val(edit,increment);if(edit.val()!=value.toString()){edit.val(value);if(this.onchange!=null)this.onchange(value);}return false;
};zf_EditWithSpin.prototype._spin_onmousedown=function(e,increment){e=null;if(this.$().hasClass("ews-ro"))return undefined;this._spin_ondblclick(null,increment);var self=this;var repeat=function(){self._spin_onmousedown(null,
increment);};if(this._delayTimer==null){this._delayTimer=setTimeout(repeat,400);}else if(this._repeatTimer==null){this._repeatTimer=setInterval(repeat,80);}return false;
};zf_EditWithSpin.prototype._spin_onmouseup=function(e){if(this._repeatTimer!=null){clearInterval(this._repeatTimer);this._repeatTimer=null;}if(this._delayTimer!=null){clearTimeout(this._delayTimer);
this._delayTimer=null;}};zf_EditWithSpin.prototype._edit_onchange=function(e){var edit=this.$('INPUT');var value=this._val(edit,0);if(edit.val()!=value.toString())edit.val(value);
if(this.onchange!=null)this.onchange(value);};zf_EditWithSpin.prototype._edit_onfocus=function(e){if(this.onfocus!=null)this.onfocus();};function zf_PricingSortWeight(type,currency,item,
weight){if(arguments.length==0){this.type=0;this.item=null;this.weight=0;this.currency=null;}else{this.type=type;this.currency=currency;this.item=item;this.weight=weight;
}}zf_PricingSortWeight.Type={Category:1,Group:2,Product:3,FeaturedProduct:4,DesignGroup:5,Design:6};zf_PricingSortWeight.getProductKey=function(categoryId,product){var prefix=(categoryId=='root'||categoryId==null)?'flat/':categoryId+'/';
if(product.$type=="Pricing.Package")return[prefix,'package_',product.packageId].join('');if(product._meta!=null&&product._meta instanceof zf_VendorMeta.Package)return[prefix,
'package_',product.id].join('');var productId=product.productId!=null?product.productId:product.id;;var vendorId=product.vendorId;return[prefix,vendorId,'_',productId].join('');
};;function zf_DesignList(){this.designs={};this.designGroups={};this.templates=[];}zf_DesignList._cache={};zf_DesignList.load=function(designs,oncomplete){var list=[],load={},count=0,locale=zf_locale;
for(var ownerId in designs){var timestamp=designs[ownerId],key=ownerId+':'+locale,item;if((item=zf_DesignList._cache[key])!=null&&item.timestamp==timestamp)list.push(item);
else{load[ownerId]=timestamp;++count;}}if(count==0){done();return;}for(ownerId in load){zf_stdServerRequestEx("GET","/zf/cdn/cart/cart.asmx","GetDesignList",[ownerId,
locale,load[ownerId]],function(result,error){var key=ownerId+':'+locale;if(error==null)list.push(zf_DesignList._cache[key]=result);if(--count==0)done();});}function done(){var result=$.extend(new zf_DesignList(),
{designs:{},designGroups:{},templates:[]});for(var i in list){var d=list[i];$.extend(result.designs,d.designs);$.extend(result.designGroups,d.designGroups);result.templates=result.templates.concat(d.templates);
}oncomplete(result);}};zf_DesignList.Orientation={Any:0,Landscape:1,Portrait:2};zf_DesignList.Orientation.normalize=function(orientation){if(orientation==null)return null;if(typeof(orientation)==='number')return orientation;
if(orientation=="landscape")return zf_DesignList.Orientation.Landscape;else if(orientation=="portrait")return zf_DesignList.Orientation.Portrait;else return zf_DesignList.Orientation.Any;
};zf_DesignList.Template=function(){};zf_DesignList.Template.prototype.getPhotoCount=function(orientation,pageMapString){orientation=zf_DesignList.Orientation.normalize(orientation);var photos=0;
var map=this.parsePageMap(pageMapString);for(var page in map){$.each(this.elements[map[page]],function(){photos+=this.type=="Photo"?1:0;});}return photos;};zf_DesignList.Template.prototype.parsePageMap=function(pageMapString){if(typeof pageMapString!=='string'){return this.getDefaultPageMap();
}var answer={};var re=/(\w+)\s*:(\w+)\s*,?/g;var entries=re.exec(pageMapString);while(entries){answer[entries[1]]=entries[2];entries=re.exec(pageMapString);}for(var p in this.pages){answer[p]=answer[p]||this.pages[p].meta.defaultAlternative||p;
}return answer;};zf_DesignList.Template.prototype.getDefaultPageMap=function(){var pages=this.pages;var alts=this.pageAlternatives;var answer={};for(var p in pages){var page=pages[p];
answer[p]=page.meta.defaultAlternative||p;}return answer;};;function zf_DesignSelector(vendorId,csvList){this.vendorId=vendorId||null;this.csvList=csvList||null;}zf_DesignSelector.prototype.match=function(templates){if(this.csvList==null){return $.grep(templates,
function(template){return!template.onlyVendors||$.inArray(vendorId,template.onlyVendors)!=-1;});}var csvList=this.csvList;if(this._fTemplateMatcher!=null){var res=this._fTemplateMatcher(templates);
if(res!=null)return res;}var rules=this._parse(csvList);var vendorId=this.vendorId;this._fTemplateMatcher=function(t){if(csvList!=this.csvList)return null;return $.grep(t,
function(template){return(!template.onlyVendors||$.inArray(vendorId,template.onlyVendors)!=-1)&&(rules.designGroupRules[template.designGroupId]||rules.designRules[template.designId]);
});};return this._fTemplateMatcher(templates);};zf_DesignSelector.prototype._parse=function(csvList){;var designRules={};var designGroupRules={};$.each(csvList.split(','),function(index,
value){if(value.charAt(0)=='#')designRules[value.substr(1)]=true;else if(value.charAt(0)=='@')designGroupRules[value.substr(1)]=true;});return{designRules:designRules,
designGroupRules:designGroupRules};};zf_DesignSelector.prototype.parse=function(){return this._parse(this.csvList);};;function zf_PriceList(){this.sortWeights=[];this.alternateCurrencies=[];
}zf_PriceList._cache={};zf_PriceList._cacheKeyCookie="zf_plck";zf_PriceList.loadPricingCurrencies=function(pricingKeys,oncomplete){;;var timestamp=zf_PriceList._getCachingKey()+(zf_clientIp?'@'+zf_clientIp:'');
zf_stdServerRequestEx("GET","/zf/cart/cart.asmx","GetPricingCurrencies",[timestamp,pricingKeys],function(result,error){if(error==null)oncomplete(result);});};zf_PriceList.load=function(pricingKeys,
currency,oncomplete,includePackageItems){;;var currencyCode=currency?currency.toString():'';if(typeof includePackageItems!=='boolean'){includePackageItems=false;
}pricingKeys.sort(zf_PriceKey.compare);var cacheKey=pricingKeys.concat(currencyCode,zf_locale,includePackageItems).join(";");var pricing=zf_PriceList._cache[cacheKey];
if(pricing!=null){oncomplete(cacheKey,pricing);return;}var timestamp=zf_PriceList._getCachingKey();zf_stdServerRequestEx("GET","/zf/cart/cart.asmx","GetPriceList",
[timestamp,pricingKeys,currencyCode,zf_locale,includePackageItems],function(pricing,error){if(error!=null)return;pricing._completeLoad(cacheKey,oncomplete);});};
zf_PriceList.loadFeatured=function(priceKey,currency,oncomplete){;;var currencyCode=currency?currency.toString():'';var cacheKey=['qpl',priceKey,currencyCode,zf_locale].join(';');
var pricing=zf_PriceList._cache[cacheKey];if(pricing!=null){oncomplete(cacheKey,pricing);return;}var timestamp=zf_PriceList._getCachingKey();zf_stdServerRequestEx('GET',
'/zf/cart/cart.asmx','GetQuickPriceList',[timestamp,priceKey,currencyCode,zf_locale],function(pricing,error){if(error!=null)return;pricing._completeLoad(cacheKey,
oncomplete);});};zf_PriceList.loadForPricing=function(pricing,currency,oncomplete){zf_stdServerRequestEx("POST","/zf/app/selling/selling.asmx","GetPriceListForPricing",[pricing,
currency.toString()],function(result,error){if(error!=null)return;result._completeLoad(null,oncomplete);});};zf_PriceList.prototype._completeLoad=function(cacheKey,callback){;
var self=this,count=2,vendors={};function done(){cacheKey&&(zf_PriceList._cache[cacheKey]=self);callback(cacheKey,self);}for(var vid in this.vendors)vendors[vid]=this.vendors[vid].timestamp;
zf_VendorMeta.load(vendors,function(){--count||done();});zf_DesignList.load(this.designs,function(dl){self.designs=dl.designs;self.designGroups=dl.designGroups;self.templates=dl.templates;
--count||done();});};zf_PriceList._getCachingKey=function(){var timestamp=zf_stdGetCookie(zf_PriceList._cacheKeyCookie);if(timestamp==null)timestamp=zf_PriceList.resetCachingKey();
timestamp=[timestamp,_zf_priceListDefaultTimestamp,zf_userId].join('.');return timestamp;};zf_PriceList.resetCachingKey=function(){var timestamp=new Date();timestamp.setHours(timestamp.getHours()+1);
timestamp=timestamp.getTime().toString(16);zf_stdSetCookie(zf_PriceList._cacheKeyCookie,timestamp,null,true);return timestamp;};zf_PriceList.prototype.getProductComparer=function(categoryId,
productWeights,categoryWeights){categoryId=categoryId||"root";var isFlat=categoryId=="root";var isFlattened=this.isFlattened;productWeights=productWeights||this.getWeights(zf_PricingSortWeight.Type.Product);
categoryWeights=categoryWeights||this.getWeights(zf_PricingSortWeight.Type.Category);var self=this;var categories={};var productKeys={};var comparer=function(a,b){var akey,
bkey;if((akey=a.__sort_id)==null)akey=a.__sort_id=a.vendorId+'_'+a.id;if((bkey=b.__sort_id)==null)bkey=b.__sort_id=b.vendorId+'_'+b.id;var wa=0,wb=0;if(!isFlattened){var cma,
cmb;if((cma=categories[akey])==null)cma=categories[akey]=self.getProductCategory(categoryId,a);if((cmb=categories[bkey])==null)cmb=categories[bkey]=self.getProductCategory(categoryId,
b);if(!comparer.multiGroup)comparer.multiGroup=cma.id!=cmb.id;wa=categoryWeights[cma.id];wb=categoryWeights[cmb.id];if(wa==null)wa=-1000;if(wb==null)wb=-1000;if(wa==wb){wa=cma.index;
wb=cmb.index;}}if(wa==wb){var apk,bpk;if((apk=productKeys[akey])==null)apk=productKeys[akey]=zf_PricingSortWeight.getProductKey(categoryId,a);if((bpk=productKeys[bkey])==null)bpk=productKeys[bkey]=zf_PricingSortWeight.getProductKey(categoryId,
b);wa=productWeights[apk];wb=productWeights[bpk];if(wa==null)wa=-1000;if(wb==null)wb=-1000;}if(wa==wb){wa=a.meta().index;wb=b.meta().index;}return wa-wb;};comparer.multiGroup=false;
return comparer;};zf_PriceList.prototype.getProductCategory=function(categoryId,product){if(categoryId==null)categoryId='root';for(var i=0;i<product.categories.length;i++){var category=this.categories[product.categories[i]];
for(var c=category;c!=null;c=c.parent){if(c.id==categoryId)return category;}}return null;};zf_PriceList.prototype.postSerialize=function(){this.categories=zf_PriceList._unfold(this.categories);
this._rebuildCategoryTree();this.vendors=zf_PriceList._unfold(this.vendors);for(var vid in this.vendors){v=this.vendors[vid];v.isEmpty=true;v.meta=zf_PriceList._getVendorMeta;
v.products=zf_PriceList._unfold(v.products);for(var pid in v.products){var p=v.products[pid];p.vendorId=v.id;p.vendor=v;p.meta=zf_PriceList._getProductMeta;if(p.categories==null)p.categories=[];
if(p.designSelector!=null)p.designSelector=new zf_DesignSelector(p.vendorId,p.designSelector);this._registerProductCategories(p);this._processProductOptions(p);v.isEmpty=false;
}v.packages=zf_PriceList._unfold(v.packages);for(pid in v.packages){p=v.packages[pid];p.vendor=v;p.vendorId=v.id;p.meta=zf_PriceList._getPackageMeta;if(p.categories==null)p.categories=[];
this._registerPackageCategories(p);for(var prid in p.products){var pr=p.products[prid];pr.vendor=this.vendors[pr.vendorId];pr.meta=zf_PriceList._getProductMeta;if(pr.designSelector!=null)pr.designSelector=new zf_DesignSelector(pr.vendorId,
pr.designSelector);this._processProductOptions(pr);}v.isEmpty=false;}}};zf_PriceList.prototype._rebuildCategoryTree=function(){for(var cid in this.categories){var c=this.categories[cid];
if(c.parent==null)this.root=c;else c.parent=this.categories[c.parent];var subcategories=[];if(c.subcategories!=null){for(var i=0;i<c.subcategories.length;i++){var subcat=this.categories[c.subcategories[i]];
if(subcat!=null){if(subcat.index==null)subcat.index=0;subcategories.push(subcat);if(subcat.data['all']!=null)c.all=subcat;}}}subcategories.sort(zf_BaseMeta.compare);
c.subcategories=subcategories;c.products=[];c.packages=[];c.isEmpty=true;}if(this.root==null)this.root={id:"root",subcategories:[],products:[],packages:[],isEmpty:true};
};zf_PriceList.prototype.getVendorIds=function(){if(this._realVendors)return this._realVendors;var vendorMap={};for(var vid in this.vendors)vendorMap[vid]=true;this._realVendors=vendorMap;
return this._realVendors;};zf_PriceList.prototype.filter=function(filter){;var pricing=$.extend(new zf_PriceList(),this);pricing.root=null;pricing.categories={};pricing.vendors={};
pricing._realVendors={};for(var cid in this.categories){var c=pricing.categories[cid]=$.extend({},this.categories[cid]);c.parent=c.parent?c.parent.id:null;c.subcategories=$.map(c.subcategories,
function(s){return s.id;});c.products=[];c.packages=[];c.isEmpty=true;}pricing._rebuildCategoryTree();for(var vid in this.vendors){var vendor=this.vendors[vid];if(!filter.includeVendor(vendor))continue;
var v=$.extend({},vendor);v.isEmpty=true;v.products={};for(var pid in vendor.products){var p=vendor.products[pid];if(filter.includeProduct(p)){v.products[pid]=p;
p.vendor=v;pricing._registerProductCategories(p);v.isEmpty=false;}}v.packages={};for(pid in vendor.packages){p=vendor.packages[pid];if(filter.includePackage(p)){v.packages[pid]=p;
p.vendor=v;pricing._registerPackageCategories(p);v.isEmpty=false;}}if(v.isCustom||!$.isEmptyObject(v.products)||!$.isEmptyObject(v.packages))pricing.vendors[vid]=v;
}for(cid in pricing.categories){c=pricing.categories[cid];if(c.isEmpty){delete pricing.categories[cid];continue;}c.subcategories=$.grep(c.subcategories,function(s){return!s.isEmpty;
});}return pricing;};zf_PriceList.prototype.findTemplates=function(templateProductId,designId){if(this.templates==null){return null;}if(typeof templateProductId!='string'&&typeof designId!='string'){return this.templates;
}if(typeof templateProductId!='string'){return $.grep(this.templates,function(t){return t.designId===designId;});}if(typeof designId!='string'){return $.grep(this.templates,
function(t){return t.templateProductId===templateProductId;});}else{return $.grep(this.templates,function(t){return t.templateProductId===templateProductId&&t.designId===designId;
});}};zf_PriceList.prototype.findProduct=function(vendorId,productId){if(arguments.length==1){var item=vendorId;vendorId=item.vendorId;productId=item.productId;}var vendor=this.vendors[vendorId];
if(vendor!=null)return vendor.products[productId];else return null;};zf_PriceList.prototype.findPackage=function(vendorId,packageId){if(arguments.length==1){packageId=vendorId;
for(vendorId in this.vendors){var pkg;var vendor=this.vendors[vendorId];if(vendor.isCustom&&(pkg=vendor.packages[packageId])!=null)return pkg;}return null;}else if((vendor=this.vendors[vendorId])!=null)return vendor.packages[packageId];
else return null;};zf_PriceList.prototype.findProductOption=function(vendorId,productId,optionId){if(arguments.length==1){var item=vendorId;vendorId=item.vendorId;productId=item.productId;
optionId=item.optionId;}var vendor=this.vendors[vendorId];if(vendor!=null){var product=vendor.products[productId];if(product!=null)return product.options[optionId];
}return null;};zf_PriceList.prototype.getWeights=function(type){var map={};for(var i=0;i<this.sortWeights.length;i++){var w=this.sortWeights[i];if(w.type==type&&w.currency.code==this.currency.code)map[w.item]=w.weight;
}return map;};zf_PriceList.prototype.mergeWeights=function(type,map){var currency=this.currency;var weights=$.grep(this.sortWeights,function(w){return w.type!=type||w.currency.code!=currency.code;
});for(var key in map)weights.push(new zf_PricingSortWeight(type,currency,key,map[key]));this.sortWeights=weights;};zf_PriceList.compareMeta=function(a,b){return a.meta().index-b.meta().index;
};zf_PriceList._unfold=function(list){var map={};if(list!=null){for(var i=0;i<list.length;i++){var o=list[i];map[o.id]=o;}}return map;};zf_PriceList.prototype._registerProductCategories=function(p){;
for(var k=0;k<p.categories.length;k++){var cat=this.categories[p.categories[k]];while(cat!=null){var cp=cat.products;if(cp.length>0&&cp[cp.length-1]==p)break;cp.push(p);
cat.isEmpty=false;cat=cat.parent;}}};zf_PriceList.prototype._processProductOptions=function(p){;var v=p.vendor;p.options=zf_PriceList._unfold(p.options);for(var oid in p.options){var o=p.options[oid];
o.vendorId=v.id;o.productId=p.id;o.meta=zf_PriceList._getOptionMeta;o.getServices=zf_PriceList._getOptionServices;o.getServiceSets=zf_PriceList._getOptionServiceSets;
o.settings=zf_PriceList._unfold(o.settings);for(var sid in o.settings){var s=o.settings[sid];s.vendorId=v.id;s.meta=zf_PriceList._getSettingMeta;}o.services=zf_PriceList._unfold(o.services);
for(sid in o.services){s=o.services[sid];s.vendorId=v.id;s.meta=zf_PriceList._getServiceMeta;}}};zf_PriceList.prototype._registerPackageCategories=function(p){;for(var k=0;k<p.categories.length;
k++){var cat=this.categories[p.categories[k]];while(cat!=null){var cp=cat.packages;if(cp.length>0&&cp[cp.length-1]==p)break;cp.push(p);cat.isEmpty=false;cat=cat.parent;
}}};zf_PriceList._getCachedMeta=function(){return this._meta;};zf_PriceList._getVendorMeta=function(){this.meta=zf_PriceList._getCachedMeta;return this._meta=zf_VendorMeta.cached(this.id);
};zf_PriceList._getProductMeta=function(){this.meta=zf_PriceList._getCachedMeta;return this._meta=zf_VendorMeta.cached(this.vendorId).products[this.id];};zf_PriceList._getPackageMeta=function(){this.meta=zf_PriceList._getCachedMeta;
return this._meta=zf_VendorMeta.cached(this.vendorId).packages[this.id];};zf_PriceList._getOptionMeta=function(){this.meta=zf_PriceList._getCachedMeta;return this._meta=zf_VendorMeta.cached(this.vendorId).options[this.id];
};zf_PriceList._getOptionServices=function(serviceSetId){;var list=[];for(var sid in this.services){var s=this.services[sid];if(s.meta().serviceSetId==serviceSetId)list.push(s);
}list.sort(zf_PriceList.compareMeta);return list;};zf_PriceList._getOptionServiceSets=function(){var map={};for(var sid in this.services)map[this.services[sid].meta().serviceSetId]=true;
var vendorMeta=zf_VendorMeta.cached(this.vendorId);var list=[];for(sid in map)list.push(vendorMeta.serviceSets[sid]);list.sort(zf_BaseMeta.compare);return list;};
zf_PriceList._getSettingMeta=function(){this.meta=zf_PriceList._getCachedMeta;return this._meta=zf_VendorMeta.cached(this.vendorId).settings[this.id];};zf_PriceList._getServiceMeta=function(){this.meta=zf_PriceList._getCachedMeta;
return this._meta=zf_VendorMeta.cached(this.vendorId).services[this.id];};var zf_SettingType={List:"List",Boolean:"Boolean",ColorList:"ColorList",TextLine:"TextLine",
Text:"Text"};zf_ShippingZone.all=[new zf_ShippingZone("US","United States",null,["USD","CAD","GBP","EUR"]),new zf_ShippingZone("CA","Canada",null,["CAD","USD","GBP","EUR"]),new zf_ShippingZone("UK",
"United Kingdom",null,["GBP","EUR","USD","CAD"]),new zf_ShippingZone("EU","European Union",null,["EUR","GBP","USD","CAD"]),new zf_ShippingZone("AU","Australia / New Zealand",
null,["AUD","USD"]),new zf_ShippingZone("WW","Other destination","Other",["EUR","GBP","USD","CAD"])];(function(){for(var i=0;i<zf_ShippingZone.all.length;i++)zf_ShippingZone.all[zf_ShippingZone.all[i].code]=zf_ShippingZone.all[i];
})();function zf_ShippingZone(code,displayName,shortDisplayName,currencies){this.code=code;this.displayName=displayName;this.shortDisplayName=shortDisplayName?shortDisplayName:displayName;
this.currencies=currencies;}zf_ShippingZone.prototype.sortByPreference=function(list){;var currencies=this.currencies;list.sort(function(x,y){var ix=$.inArray(x.code,currencies);
var iy=$.inArray(y.code,currencies);return(ix==-1?1000:ix)-(iy==-1?1000:iy);});return list;};var zf_SizeType={None:"None",Original:"Original",Full:"Full",WidthAndHeight:"WidthAndHeight",
Area:"Area",LongestDimension:"LongestDimension"};var zf_SourceType={Image:1,Video:2};var zf_VideoQuality={Video360p:"Video360p",Video480p:"Video480p",Video720p:"Video720p",
Video1080p:"Video1080p"};zf_VideoQuality.getProcessingMethod=function(videoQuality){switch(videoQuality){case zf_VideoQuality.Video360p:return zf_ProcessingMethod.Video360p;case zf_VideoQuality.Video480p:return zf_ProcessingMethod.Video480p;
case zf_VideoQuality.Video720p:return zf_ProcessingMethod.Video720p;case zf_VideoQuality.Video1080p:return zf_ProcessingMethod.Video1080p;default:;return null;}};
function zf_VendorMeta(){}zf_VendorMeta._cache={};zf_VendorMeta.load=function(list,oncomplete){var meta={};var load={};var count=0;var locale=zf_locale;for(var id in list){var item;var key=id+':'+locale;
if((item=zf_VendorMeta._cache[key])!=null&&item.timestamp==list[id]){meta[id]=item;}else{load[id]=list[id];count++;}}if(count==0){oncomplete(meta);return;}for(id in load){zf_stdServerRequestEx("GET",
"/zf/cdn/cart/cart.asmx","GetVendorMeta",[locale,load[id],id],function(result,error){if(error!=null)return;var id=result.id;var key=id+':'+locale;zf_VendorMeta._cache[key]=result;
meta[id]=result;if(--count==0)oncomplete(meta);});}};zf_VendorMeta.cached=function(id){return zf_VendorMeta._cache[id+':'+zf_locale];};zf_VendorMeta.prototype.postSerialize=function(){for(var eid in this.editors)this.editors[eid].vendor=this;
};zf_VendorMeta.Image=function(){zf_BaseMeta.prototype.constructor.call(this);this.minImageCount=1;this.maxImageCount=1;this.sizeX=0;this.sizeY=0;this.sizeArea=0;this.sizeLongest=0;
this.spillX=0;this.spillY=0;this.wrapX=0;this.wrapY=0;this.minWidth=0;this.minHeight=0;this.canRotate=false;this.sizeType=zf_SizeType.None;this.sourceType=zf_SourceType.Image;
this.videoQuality=zf_VideoQuality.Video1080p;};zf_VendorMeta.Image.inherits(zf_BaseMeta);zf_VendorMeta.Image.prototype.getMinSize=function(vertical){var aspectX=this.sizeX+2*this.wrapX;var aspectY=this.sizeY+2*this.wrapY;
var minWidth=this.minWidth;var minHeight=this.minHeight;if(aspectX==0||aspectY==0)return{cx:minWidth,cy:minHeight};if((aspectX<aspectY)!=(minWidth<minHeight)){var temp=minWidth;
minWidth=minHeight;minHeight=temp;}var cx=Math.floor(Math.max(minWidth,minHeight*aspectX/aspectY));var cy=Math.floor(Math.max(minWidth*aspectY/aspectX,minHeight));
if(!this.canRotate)return{cx:cx,cy:cy};return vertical?{cx:Math.min(cx,cy),cy:Math.max(cx,cy)}:{cx:Math.max(cx,cy),cy:Math.min(cx,cy)};};zf_VendorMeta.Image.prototype.sourceTypeIs=function(sourceTypes){return(this.sourceType&sourceTypes)==sourceTypes;
};zf_VendorMeta.Product=function(){zf_VendorMeta.Image.prototype.constructor.call(this);this.editors=[];this.isSingleImage=true;};zf_VendorMeta.Product.inherits(zf_VendorMeta.Image);zf_VendorMeta.Product.prototype.getMinSize=function(vertical){var aspectX=this.sizeX+2*this.wrapX;
var aspectY=this.sizeY+2*this.wrapY;var minWidth=this.minWidth;var minHeight=this.minHeight;if(aspectX==0||aspectY==0)return{cx:minWidth,cy:minHeight};if((aspectX<aspectY)!=(minWidth<minHeight)){var temp=minWidth;
minWidth=minHeight;minHeight=temp;}var cx=Math.floor(Math.max(minWidth,minHeight*aspectX/aspectY));var cy=Math.floor(Math.max(minWidth*aspectY/aspectX,minHeight));
if(!this.canRotate)return{cx:cx,cy:cy};return vertical?{cx:Math.min(cx,cy),cy:Math.max(cx,cy)}:{cx:Math.max(cx,cy),cy:Math.min(cx,cy)};};zf_VendorMeta.Product.prototype.postSerialize=function(){var count=0;
if(this.images!=null){for(var id in this.images){count+=this.images[id].maxImageCount;if(count>1)break;}}else count=this.maxImageCount;this.isSingleImage=count==1;
this.isTemplated=this.templateProductIds!=null;};zf_VendorMeta.Product.prototype.getTemplateProductId=function(optionId){if(!this.isTemplated)return null;if(typeof optionId!='string'){return $.first(this.templateProductIds).value;
};return this.templateProductIds[optionId];};zf_VendorMeta.Package=function(){zf_BaseMeta.prototype.constructor.call(this);this.items=[];this.parts=[];this.shippingZones=[];this.groupId="packages";
};zf_VendorMeta.Package.inherits(zf_BaseMeta);zf_VendorMeta.Package.prototype.postSerialize=function(){this.items=$.map(this.parts,function(p){return p.items;});};zf_VendorMeta.Package.Part=function(){this.items=[];
};zf_VendorMeta.Package.Item=function(){this.quantity=0;this.serviceIds=[];this.settings={};};zf_VendorMeta.License=function(){zf_BaseMeta.prototype.constructor.call(this);};zf_VendorMeta.License.inherits(zf_BaseMeta);
zf_VendorMeta.Option=function(){zf_BaseMeta.prototype.constructor.call(this);this.serviceConstraints=[];};zf_VendorMeta.Option.inherits(zf_BaseMeta);zf_VendorMeta.OptionSet=function(){zf_BaseMeta.prototype.constructor.call(this);
this.options=[];this.isDigital=false;};zf_VendorMeta.OptionSet.inherits(zf_BaseMeta);zf_VendorMeta.Setting=function(){zf_BaseMeta.prototype.constructor.call(this);this.type=zf_SettingType.List;
this.maxLength=0;this.values={};};zf_VendorMeta.Setting.inherits(zf_BaseMeta);zf_VendorMeta.Setting.prototype.postSerialize=function(){if(this.id=="calendar-year"){var s;var year=new Date().getFullYear();
s=this.values['current'];s.name=s.longName=s.altName=year.toString();s=this.values['next'];s.name=s.longName=s.altName=(year+1).toString();}};zf_VendorMeta.prototype.findTemplateProduct=function(templateProductId){var product=null;
if(typeof this.products!='undefined'){for(var p in this.products){if(this.products[p].templateProductId===templateProductId){product=this.products[p];break;}}}return product;
};zf_VendorMeta.ServiceSet=function(){zf_BaseMeta.prototype.constructor.call(this);};zf_VendorMeta.ServiceSet.inherits(zf_BaseMeta);zf_VendorMeta.Service=function(){zf_BaseMeta.prototype.constructor.call(this);
};zf_VendorMeta.Service.inherits(zf_BaseMeta);zf_VendorMeta.ServiceConstraint=function(){zf_BaseMeta.prototype.constructor.call(this);this.rules=[];};zf_VendorMeta.ServiceConstraint.inherits(zf_BaseMeta);
zf_VendorMeta.ServiceConstraint.RuleType={Included:"Included",Excluded:"Excluded"};zf_VendorMeta.Editor=function(){zf_BaseMeta.prototype.constructor.call(this);this.type=zf_EditorType.Default;
this.settings=[];};zf_VendorMeta.Editor.inherits(zf_BaseMeta);zf_VendorMeta.OverlayEditor=function(){zf_VendorMeta.Editor.prototype.constructor.call(this);};zf_VendorMeta.OverlayEditor.inherits(zf_VendorMeta.Editor);
zf_VendorMeta.OverlayEditor.prototype.getOverlayUri=function(productId,optionId,settings,services){return zf_VendorMeta.OverlayEditor._getUri(this.vendor,this.overlayUri,productId,
optionId,settings,services);};zf_VendorMeta.OverlayEditor.prototype.getOverlayBackUri=function(productId,optionId,settings,services){return zf_VendorMeta.OverlayEditor._getUri(this.vendor,
this.overlayBackUri,productId,optionId,settings,services);};zf_VendorMeta.OverlayEditor.prototype.selectViewport=function(productId,optionId,settings,services){;for(var i=0;i<this.viewports.length;
i++){var v=this.viewports[i];var continueOuter=false;if(v.productId!=null&&v.productId!=productId)continue;if(v.optionId!=null&&v.optionId!=optionId)continue;if(v.settings!=null){for(var id in v.settings){;
if(v.settings[id]!=settings[id]){continueOuter=true;break;}}if(continueOuter)continue;}if(v.services!=null){for(var k=0;k<v.services.length;k++){if(!services[v.services[k]]){continueOuter=true;
break;}}if(continueOuter)continue;}return{left:v.left,top:v.top,width:v.width,height:v.height};};return{left:0,top:0,width:100,height:100};};zf_VendorMeta.OverlayEditor._getUri=function(vendor,
uri,productId,optionId,settings,services){return uri.replace(/\{\$([-a-z]+)(?::([-a-z]+))?\}/g,function($0,$1,$2){switch($1){case "product":return productId;case "option":return optionId;
case "setting":return settings[$2];case "service-set":var val=services[$2];return val!=null?val:vendor.serviceSets[$2].none.id;default:;return "";}});};(function($,
undefined){$.extend($.ui,{button:{version:"1.1.1"}});function Button(){this.defaultOptions={className:'button',decorations:{}};this.defaultDecorations={'normal':'',
'selected':'','hover':'','disabled':''};this.key='button'+new Date().getTime();}$.fn.button=function(options){if(this.length==0)return this;options=$.extend({},$.button.defaultOptions,
options);options.decorations=$.extend({},$.button.defaultDecorations,options.decorations);var cn=options.className;var cnd=cn+'-d';var cns=cn+'-s';var dec=options.decorations;
dec['selected-hover']=dec['selected-hover']||dec.hover;dec.all=[dec.normal,dec.selected,dec.hover,dec['selected-hover'],dec.disabled].join(' ');return this.each(function(){var b=$(this);
var cni=b.hasClass(cnd)?dec.disabled:(b.hasClass(cns)?dec.selected:dec.normal);b.data($.button.key,options).addClass(cni).hover(function(){var b=$(this);if(!b.hasClass(cnd)){if(b.hasClass(cns))b.removeClass(dec.selected).addClass(cn+'-h '+dec['selected-hover']);
else b.removeClass(dec.normal).addClass(cn+'-h '+dec.hover);}},function(){var b=$(this);if(!b.hasClass(cnd)){if(b.hasClass(cns))b.removeClass(cn+'-h '+dec['selected-hover']).addClass(dec.selected);
else b.removeClass(cn+'-h '+dec.hover).addClass(dec.normal);}}).mousedown(function(e){if($(e.target).hasClass('ui-sortable-handle')){e.preventDefault();return;}var b=$(this);
if(zf_stdIsLeftButton(e)){e.preventDefault();e.stopPropagation();if(!b.hasClass(cnd))b.trigger('button-click');}});});};$.fn.enableButton=function(enable){return this.each(function(){var b=$(this);
var options=b.data($.button.key);var cn=options.className;var cnd=cn+'-d';var cns=cn+'-s';var dec=options.decorations;if(enable){b.removeClass(cnd+' '+dec.disabled).addClass(b.hasClass(cns)?dec.selected:dec.normal);
}else b.removeClass(cn+'-h '+dec.all).addClass(cnd+' '+dec.disabled);});};$.fn.selectButton=function(select){return this.each(function(){var b=$(this);var options=b.data($.button.key);
var cn=options.className;var cnd=cn+'-d';var cns=cn+'-s';var cnh=cn+'-h';var dec=options.decorations;b.toggleClass(cns,select);if(!b.hasClass(cnd)){b.removeClass(dec.all);
if(b.hasClass(cns))b.addClass(b.hasClass(cnh)?dec['selected-hover']:dec.selected);else b.addClass(b.hasClass(cnh)?dec.hover:dec.normal);}});};$.button=new Button();
})(jQuery);zfp_Configurator._buttonOptions={className:'pc-button',decorations:{normal:'button-color1 button-bgcolor1 button-border1',hover:'button-color2 button-bgcolor2 button-border2',
selected:'button-color4 button-bgcolor4 button-border4','selected-hover':'button-color5 button-bgcolor5 button-border5',disabled:'button-color3 button-bgcolor3 button-border3'}};
zfp_Configurator._toggleOptions={className:'pc-toggle',decorations:{normal:'button-color1 button-bgcolor1 button-border1',hover:'button-color2 button-bgcolor2 button-border2',selected:'button-color4 button-bgcolor4 button-border4',
'selected-hover':'button-color5 button-bgcolor5 button-border5',disabled:'button-color3 button-bgcolor3 button-border3'}};zfp_Configurator.createShippingZoneFilter=function(zone){return{includeVendor:function(v){return v.isCustom||this._canShip(v);
},includeProduct:function(p){return this._canShip(p);},includePackage:function(p){return this._canShip(p);},_canShip:function(o){var zones=o.meta().shippingZones;
if(!this._zone||!zones)return true;return $.inArray(this._zone,zones)!=-1;},_zone:(zone instanceof zf_ShippingZone)?zone.code:zone};};zfp_Configurator.isPhotoPrintable=function(product,
photo,defaultList,template){;;if(!defaultList){var key=new zf_PriceKey(photo);if(product.pricings[key.pricingKey]===undefined)return false;if(product.pricings[key.pricingKey]==true)return true;
}return zfp_Configurator.checkResolution(product,photo,template);};zfp_Configurator.checkResolution=function(product,photo,template){var id;var meta;if(typeof(product.meta)=='function'&&((meta=product.meta())instanceof zf_VendorMeta.Package)){if(meta.isSingleImage){for(id in product.products){if(!zfp_Configurator.checkResolution(product.products[id],
photo))return false;}return true;}else{for(id in product.products){if(zfp_Configurator.checkResolution(product.products[id],photo))return true;}return false;}}if(meta!=null)product=meta;
if(product.images!=null){for(id in product.images){if(zfp_Configurator.checkResolution(product.images[id],photo))return true;}return false;}if(template instanceof zf_DesignList.Template){for(var page in template.elements){if(!template.elements.hasOwnProperty(page)){continue;
}var elements=template.elements[page];if(!elements||!elements.length){continue;}var photoElements=$.grep(elements,function(element){return element.type==='Photo';
});for(var i=0;i<photoElements.length;i++){var min=photoElements[i].minimumResolution;if(photo.width>=min.width&&photo.height>=min.height){return true;}}}return false;
}switch(product.sizeType){case zf_SizeType.WidthAndHeight:case zf_SizeType.None:var size={cx:product.minWidth,cy:product.minHeight};if(product.canRotate&&(photo.width<photo.height)!=(size.cx<size.cy))size={cx:size.cy,
cy:size.cx};return photo.width>=size.cx&&photo.height>=size.cy;case zf_SizeType.Original:case zf_SizeType.Full:case zf_SizeType.LongestDimension:return true;case zf_SizeType.Area:return photo.width*photo.height>=product.sizeArea;
default:return false;}};zfp_Configurator.prototype.isPhotoPrintable=function(product,photo,template){return zfp_Configurator.isPhotoPrintable(product,photo,this._defaultList,template);
};zfp_Configurator.prototype.isResolutionCheckWaived=function(product,photo){return zfp_Configurator._isResolutionCheckWaived(product,photo,this._defaultList,this._adminView);};
zfp_Configurator.prototype.getDownloadResolution=function(product,photo){if(!this.isPhotoPrintable(product,photo))return null;var meta=product.meta();switch(meta.sizeType){case zf_SizeType.Original:case zf_SizeType.Full:if(this.isResolutionCheckWaived(product,
photo))return null;else return{cx:photo.width,cy:photo.height};case zf_SizeType.WidthAndHeight:return{cx:meta.sizeX,cy:meta.sizeY};case zf_SizeType.LongestDimension:var longest=meta.sizeLongest;
if(photo.height<=longest&&photo.width<=longest)return{cx:photo.width,cy:photo.height};if(photo.height>photo.width)return{cx:Math.floor(photo.width/photo.height*longest),
cy:longest};else return{cx:longest,cy:Math.floor(photo.height/photo.width*longest)};case zf_SizeType.Area:var width=Math.sqrt(meta.sizeArea*photo.width/photo.height);
var height=meta.sizeArea/width;return{cx:Math.floor(width),cy:Math.floor(height)};default:return null;}};zfp_Configurator.prototype.getBestFitProducts=function(category,photo){;
var list=[];if(photo==null)return list;if(category.data["best-fit"]==null&&(category.parent==null||category.parent.data["best-fit"]==null))return list;var ratio=photo.width/photo.height;
for(var i=0;i<category.products.length;i++){var product=category.products[i];if(!this.isPhotoPrintable(product,photo))continue;var meta=product.meta();var r=meta.sizeX/meta.sizeY;
if(Math.abs(1-r/ratio)<0.05||meta.canRotate&&Math.abs(1-r*ratio)<0.05)list.push(product);}return list;};zfp_Configurator.makeUiList=function(map,comparer){var list=[];for(var id in map)list.push(map[id]);
list.sort(comparer);return list;};zfp_Configurator.setImage=function(image,url){;;url=zfp_Configurator.formatIconUrl(url);if(image.attr('src')!=url)image.attr('src',url);else image.triggerHandler('load');
};zfp_Configurator.formatIconUrl=function(url){;if(location.protocol=='http:'&&url.indexOf('/zf/')==0)url='http://'+zf_cdnHost+url;return url;};zfp_Configurator.prototype.showMessage=function(message,
buttons,callback){;;if(!(buttons instanceof Array))buttons=[buttons];if(callback==null)callback=$.noop;var panel=this.$('.pc-message:first');panel.find('H6:first').html(message);
var html=[];for(var i=0;i<buttons.length;i++)html.push('<a class="pc-button pc-font2"></a>');var self=this;panel.find('.pc-message-l').html(html.join('')).find('.pc-button').button(zfp_Configurator._buttonOptions).each(function(i){$(this).text(buttons[i]).bind('button-click',
function(){callback(i);self.slideOutPanel(panel);});}).last().addClass('pc-button-z');this.showPanel(panel);};zfp_Configurator.prototype.slideInPanel=function(panel,callback){;if(!(panel instanceof jQuery))panel=this.$(panel);
callback=callback||$.noop;if(panel.hasClass('pc-slidein-fw')){return panel.addClass('pc-slidein-s').show().css('left',(-panel.width()-4)+'px').animate({left:0},200,
'swing',callback);}else if(panel.hasClass('pc-slidein-rw')){return panel.addClass('pc-slidein-s').show().css('right',(-panel.width()-4)+'px').animate({right:0},200,
'swing',callback);}else{return panel.addClass('pc-slidein-s').show().animate({right:0},300,'swing',callback);}};zfp_Configurator.prototype.slideOutPanel=function(panel,callback){;
if(!(panel instanceof jQuery))panel=this.$(panel);function done(){$(this).removeClass('pc-slidein-s').hide();callback&&callback();}if(panel.hasClass('pc-slidein-fw'))return panel.stop(true,
true).animate({left:-panel.outerWidth()-24},200,'linear',done);else if(panel.hasClass('pc-slidein-rw'))return panel.stop(true,true).animate({right:-panel.outerWidth()-24},
200,'linear',done);else return panel.stop(true,true).animate({right:-panel.outerWidth()-24},300,'linear',done);};zfp_Configurator.prototype.showPanel=function(panel){;if(!(panel instanceof jQuery))panel=this.$(panel);
if(panel.hasClass('pc-slidein-fw'))return panel.addClass('pc-slidein-s').css('left','0px').show();else return panel.addClass('pc-slidein-s').css('right','0px').show();
};zfp_Configurator.prototype.hidePanel=function(panel){;if(!(panel instanceof jQuery))panel=this.$(panel);return panel.css('right',(-panel.width()-16)+'px').removeClass('pc-slidein-s').hide();
};zfp_Configurator.prototype.showText=function(message,noClose){;this.showPanel('DIV.pc-slidein.pc-text:first').find('H6:first').text(message);this.$('A.pc-hdr.close:first').showIf(!noClose);
};zfp_Configurator.prototype.hideText=function(){this.hidePanel('DIV.pc-slidein.pc-text:first');this.$('A.pc-hdr.close:first').show();};zfp_Configurator.prototype.showLicense=function(license,standalone){;
var self=this;var panel=this.$('DIV.pc-slidein.pc-license:first');if(standalone&&license.downloadLink)panel.find('H6:first').html(license.name+" - <a href=\""+license.downloadLink+"\" target=\"_blank\">Download License &raquo;</a>");
else panel.find('H6:first').text(license.name);this._licenseView.getContentNode().innerHTML='<pre>'+license.text+'</pre>';this._licenseView.update();if(standalone){this.showPanel(panel);
this.pushHeader('License Details',null,function(){self.hidePanel(panel);self.hide();});}else{this.slideInPanel(panel);this.pushHeader('License Details','Back<span class="pc-hdr-hide"></span>',
function(){self.slideOutPanel(panel);self.popHeader();if(self._itemEditor){self._itemEditor.setTitle();}});}};zfp_Configurator.prototype.showPreview=function(meta,onhide,product,
optionId,quantity,printable){;;if(onhide==null)onhide=$.noop;var self=this;var panel=this.$('DIV.pc-slidein.pc-preview:first');var img=panel.find('.pc-preview-i:first IMG');
var setPos=function(){var width=img[0].width;var height=img[0].height;var offset=-height/2;if(product!=null)offset-=26;img.css('margin-left',(-width/2)+'px').css('margin-top',
offset+'px').css('visibility','inherit').prev().width(width).height(height).css('margin-left',(-width/2)+'px').css('margin-top',offset+'px');};img.unbind('load').bind('load',
setPos);panel.find('.pc-preview-i:first IMG, .pc-preview-i:first SPAN').unbind('click').click(function(){self.slideOutPanel(panel);self.popHeader();onhide(optionId,
quantity);});panel.unbind('resizePage').bind('resizePage',setPos);img.css('visibility','hidden');zfp_Configurator.setImage(img,meta.preview);panel.toggleClass('pc-preview-add',
product!=null);if(product!=null){if(this._optionBox==null)this._optionBox=new zf_SelectBox(panel.find('.selector-box:first').attr('id'));if(this._ews==null){this._ews=new zf_EditWithSpin(panel.find('.ews:first').attr('id'));
this._ews.minValue=1;}var vendorMeta=zf_VendorMeta.cached(product.vendorId);var productMeta=product.meta();if(productMeta instanceof zf_VendorMeta.Product){var optionSetMeta=vendorMeta.optionSets[productMeta.optionSetId];
var options=zfp_Configurator.makeUiList(product.options,zf_PriceList.compareMeta);panel.find('.pc-preview-c:first').showIf(optionSetMeta.options.length>1);panel.find('.pc-preview-c:first LABEL').text(optionSetMeta.name);
var html=[];for(var i=0;i<options.length;i++){var o=options[i];var name=o.meta().altName;html.push('<div zf:value="',o.id,'">',name!=null?zf_stdHtmlEncode(name):'',
' &ndash; ',zf_stdFormatMoney(o.price.customerPrice),'</div>');}this._optionBox._getOptions().html(html.join(''));this._optionBox.refreshOptions();}var multiplier=productMeta.isSingleImage?printable:Math.min(printable,
1);this._optionBox.$().unbind('zf-change').bind('zf-change',function(){optionId=self._optionBox.getSelected();self._ews.onchange(quantity);});this._ews.onchange=function(val){quantity=val;
var price=(productMeta instanceof zf_VendorMeta.Product)?product.options[optionId].price.customerPrice:product.price;price*=Math.max(multiplier,1)*val;panel.find('.pc-preview-sub:first').text(zf_stdFormatMoney(price,
self.cart.currency));panel.find('.pc-preview-b:first .pc-button').enableButton(val>0&&multiplier>0);};this._ews.val(quantity);this._optionBox.setSelected(optionId);
panel.find('.pc-preview-times:first').showIf(multiplier>1).find('SPAN').text(multiplier.toString());panel.find('.pc-preview-b A').unbind('fastClick').bind('fastClick',
function(){self.popHeader();self._productBrowser.$().hide();self.buy(product.vendorId,product.id,optionId,null,self._ews.val(),panel);}).text(productMeta.isSingleImage?'Add to Cart':'Continue');
}this.slideInPanel(panel);this.pushHeader('<h2 class="pc-font3 pc-ie-desc">'+meta.longName+'</h2>','Close Preview<span class="pc-hdr-hide"></span>',function(){self.slideOutPanel(panel);
self.popHeader();onhide(optionId,quantity);});};zfp_Configurator.prototype.reinit=function(currency){;var self=this;if(this.cart==null||this.cart.currency.code!=currency.code){this.cart=new zf_CartSummary();
this.cart.currency=currency;zf_cartSetId(this.cart);this._onadd.call(null,this.cart);}this.$('DIV.pc-frame:first').addClass('pc-s-loading').append('<div class="pc-loading pc-font2">Loading...</div>');
this._hidePanels();if(this.mode==zfp_Configurator.Mode.Customize){zf_PriceList.loadForPricing(this.options.pricing,currency,function(c,p){self._initUI(p);});}else{zf_PriceList.load(this._priceKeys,
currency,function(c,p){self._initUI(p);});}};zfp_Configurator.prototype.browse=function(fromPage){this._hidePanels();this._setBrowseTitle();if(!this._productBrowser.initUI(this.pricing,
this.options))this.animate(fromPage,this._productBrowser);};zfp_Configurator.prototype.selectTemplatedDesign=function(fromPage,pricing,partialPackage){var self=this;this._hidePanels();
this._setSelectTemplateDesignTitle();if(!this.options){this.options={};}zf_storage.removeItem('core.printing.configurator.cid');this.options.partialPackage=partialPackage;
this.pricing=pricing;this._closeHook=function(){self.returnToIncompletePackage(self._activePage);};if(!this._productBrowser.initUI(pricing,this.options)){this.animate(fromPage,
this._productBrowser);}};zfp_Configurator.prototype.editTemplatedDesign=function(item,fromPage){var self=this,timedOut=false,photos={},nextPage=null;var timer=setTimeout(function(){if(timer!=null){self.showText('Loading...');
timedOut=true;}},500);var onload=function(){clearTimeout(timer);timer=null;if(timedOut){self.hideText();fromPage=null;}self.animate(fromPage,nextPage);};if(this.options.partialPackage.resetDefaults===true){item.photos=[];
}$.each(this.photos,function(i){if(self.options.partialPackage.resetDefaults===true){item.photos.push({cropping:new zf_Rect(0,0,1,1),height:this.height,id:this.id,
index:i,video:this.video,width:this.width});}photos[this.id]=this;});this.pushHeader('',null,function(){self._itemEditor.cancel();});var options={photos:photos,fromPage:fromPage};
(nextPage=this._itemEditor).initUI([item],options,onload);};zfp_Configurator.prototype.buy=function(vendorId,productId,optionId,designId,quantity,fromPage){var self=this,pkg,product;
function doIt(all){self._buy(vendorId,productId,optionId,designId,quantity,fromPage,all||[]);}if(this.mode!=zfp_Configurator.Mode.AddToCart||this.allPhotos==null){doIt();
return;}if((pkg=this.pricing.findPackage(vendorId,productId))!=null){if(pkg.meta().isSingleImage){doIt();return;}}else if((product=this.pricing.findProduct(vendorId,
productId))!=null){if(product.meta().isTemplated||product.meta().isSingleImage){doIt();return;}}this.allPhotos.loadAll(function(){doIt(self.allPhotos.getAll());});
};zfp_Configurator.prototype._mergePhotoArrays=function(removeDuplicates,array1){;var returnArray=[],j=2,args=arguments,argLen=args.length,i=0,x=0,alen=0,dupe=false,len=0;returnArray=array1.concat();
for(j=2;j<argLen;j++){if(!$.isArray(args[j])){continue;}if(removeDuplicates){len=args[j].length;for(i=0;i<len;i++){alen=returnArray.length;dupe=false;for(x=0;x<alen;
x++){if(returnArray[x].id===args[j][i].id&&returnArray[x].owner.id===args[j][i].owner.id){dupe=true;break;}}if(!dupe){returnArray.push(args[j][i]);}}}else{returnArray=returnArray.concat(args[j]);
}}return returnArray;};zfp_Configurator.prototype._buy=function(vendorId,productId,optionId,designId,quantity,fromPage,allPhotos){var items=[],photos=[],self=this,proto;function fillItemPhotos(proto,
photos){var meta=zf_VendorMeta.cached(proto.vendorId).products[proto.productId];images=meta.images&&meta.images.length?meta.images:[meta];for(var i=0;i<images.length&&photos.length>0;
i++){var img=images[i];if(img.autoFill){proto.photos=$.map(photos.slice(0,img.maxImageCount),function(p,i){return{id:p.id,imageId:img!=meta?img.id:null,index:i,width:p.width,
height:p.height,video:p.video};});photos=photos.splice(0,proto.photos.length);}}return photos;}var pkg=this.pricing.findPackage(vendorId,productId);if(pkg!=null){var packageMeta=pkg.meta();
if(packageMeta.isSingleImage){var addSingleImagePackage=function(photos,priceKey){for(var j=0;j<packageMeta.parts.length;j++){var part=packageMeta.parts[j];var proto=$.extend(new zf_ProtoPackage(),
{packageId:productId,partId:part.partId,quantity:quantity,items:[],priceKey:priceKey});for(var k=0;k<part.items.length;k++){var pi=part.items[k];var item=$.extend(new zf_ProtoItem(),
{vendorId:pi.vendorId,productId:pi.productId,quantity:pi.quantity,priceKey:proto.priceKey,photos:$.map(photos,function(p){return{id:p.id,width:p.width,height:p.height,
video:p.video};}),packageId:proto.id,packagePackageId:proto.packageId,packagePartId:proto.partId,packageItemId:pi.id});proto.items.push(item);}items.push(proto);
}};if(this.mode==zfp_Configurator.Mode.AddToCart){for(var i=0;i<this.photos.length;i++){photo=this.photos[i];if(this.isPhotoPrintable(pkg,photo))addSingleImagePackage([photo],
this._getPhotoKey(photo));}}else if(this.mode==zfp_Configurator.Mode.AddToOrder){addSingleImagePackage([],zfp_Configurator.defaultAndCustomKey);}this.addPackages(items,
packageMeta,fromPage);}else{if(this.mode==zfp_Configurator.Mode.AddToCart){photos=this._mergePhotoArrays(true,this.photos,allPhotos);photos=$.grep(photos,function(p){return self.isPhotoPrintable(pkg,
p);});;}var priceKey=photos[0]?this._getPhotoKey(photos[0]):zfp_Configurator.defaultAndCustomKey;for(i=0;i<packageMeta.parts.length;i++){part=packageMeta.parts[i];
proto=$.extend(new zf_ProtoPackage(),{packageId:productId,partId:part.partId,quantity:quantity,priceKey:priceKey,items:[]});for(j=0;j<part.items.length;j++){var pi=part.items[j];
for(k=0;k<pi.quantity;k++){var item=$.extend(new zf_ProtoItem(),{vendorId:pi.vendorId,productId:pi.productId,quantity:1,priceKey:proto.priceKey,photos:[],packageId:proto.id,
packagePackageId:proto.packageId,packagePartId:proto.partId,packageItemId:pi.id});proto.items.push(item);photos=fillItemPhotos(item,photos);}}items.push(proto);}this._preconfigure(items,
packageMeta,fromPage);}}else{var product=this.pricing.findProduct(vendorId,productId);if(product.meta().isTemplated){;photos=[];if(typeof optionId!=='string'){var indx=-1,
mta=null;for(var opt in product.options){mta=product.options[opt].meta();if(indx===-1||mta.index<indx){indx=mta.index;optionId=opt;}}}var templateProductId=product.meta().getTemplateProductId(optionId);
var template=this.pricing.findTemplates(templateProductId,designId)[0];if(this.mode==zfp_Configurator.Mode.AddToCart){photos=$.grep(this.photos,function(p){return self.isPhotoPrintable(product,
p,template);});;}photos=photos.slice(0,template.getPhotoCount());proto=$.extend(new zf_ProtoItem(),{vendorId:vendorId,productId:productId,optionId:optionId,quantity:quantity,
settings:{'selected-template':template.id},priceKey:photos.length>0?this._getPhotoKey(photos[0]):zfp_Configurator.defaultAndCustomKey,photos:$.map(photos,function(p,
i){return{id:p.id,width:p.width,height:p.height,index:i,video:p.video};})});items.push(proto);this._preconfigure(items,product.meta(),fromPage);}else if(product.meta().isSingleImage){var addSingleImageProduct=function(photos,
priceKey){var proto=$.extend(new zf_ProtoItem(),{vendorId:vendorId,productId:productId,optionId:optionId,quantity:quantity,priceKey:priceKey,photos:$.map(photos,
function(p){return{id:p.id,width:p.width,height:p.height,video:p.video};})});items.push(proto);};if(this.mode==zfp_Configurator.Mode.AddToCart){for(i=0;i<this.photos.length;
i++){photo=this.photos[i];if(this.isPhotoPrintable(product,photo))addSingleImageProduct([photo],this._getPhotoKey(photo));}}else if(this.mode==zfp_Configurator.Mode.AddToOrder){addSingleImageProduct([],
zfp_Configurator.defaultAndCustomKey);}this.addItems(items,product.meta(),fromPage);}else{if(this.mode==zfp_Configurator.Mode.AddToCart){photos=this._mergePhotoArrays(true,
this.photos,allPhotos);photos=$.grep(photos,function(p){return self.isPhotoPrintable(product,p);});;}proto=$.extend(new zf_ProtoItem(),{vendorId:vendorId,productId:productId,
optionId:optionId,quantity:quantity,priceKey:photos[0]?this._getPhotoKey(photos[0]):zfp_Configurator.defaultAndCustomKey,photos:[]});items.push(proto);fillItemPhotos(proto,
photos);this._preconfigure(items,product.meta(),fromPage);}}};zfp_Configurator.prototype.updatePackageItem=function(item,fromPage){;for(var i=0;i<this.options.partialPackage.parts.length;
i++){var p=this.options.partialPackage.parts[i];if(p.partId===item.packagePartId){for(var x=0;x<p.items.length;x++){if(item.id===p.items[x].id){this.options.partialPackage.parts[i].items[x]=item;
break;}}break;}}this.returnToIncompletePackage(fromPage);};zfp_Configurator.prototype.returnToIncompletePackage=function(fromPage){var self=this,timedOut=false;this._closeHook=null;
var timer=setTimeout(function(){if(timer!=null){self.showText('Loading...');timedOut=true;}},500);var nextPage=null;var onload=function(){clearTimeout(timer);timer=null;
if(timedOut){self.hideText();fromPage=null;}self.animate(fromPage,nextPage);};(nextPage=this._packageEditor).initUI(this.options.partialPackage.parts,this.options.partialPackage.meta,
this.options.partialPackage.notAdded,onload);};zfp_Configurator.prototype.selectPackageItemDesign=function(vendorId,productId,designId,fromPage){;var product=this.pricing.findProduct(vendorId,
productId),item=this.options.partialPackage.current;var templateProductId=product.meta().getTemplateProductId(item.optionId);var template=this.pricing.findTemplates(templateProductId,
designId)[0];item.settings['selected-template']=template.id;if(typeof template.designCn!=='undefined'){item.settings['selected-template-cn']=template.designCn;}this.editTemplatedDesign(item,
fromPage);};zfp_Configurator.prototype.addItems=function(items,productMeta,fromPage,photos){;;var self=this;var timedOut=false;var editView=!!this.options.editView;var timer=setTimeout(function(){if(timer!=null){self.showText(editView?'Please wait while the items are being added to the order...':'Please wait while items are being added to the shopping cart...');
timedOut=true;}},500);items=zf_ProtoItem.clean(items);if(this._onpreadd&&this._onpreadd.call(null,items)){clearTimeout(timer);timer=null;return;}this._queue.enqueueEx('POST',
'/zf/core/printing/printing.asmx','AddCartItems',[this.cart.id,this.cart.currency.code,items,this.returnUrl],function(result,error){clearTimeout(timer);timer=null;
if(error!=null){self.showText(error.message);return;}if(editView){self.hide();return;}self.cart=result.cart;zf_cartSetId(result.cart);if(timedOut){self.hideText();
fromPage=null;}self.$('DIV.pc-hdr:first').text('Confirmation');self._confirmPage.initUI(result.items,result.cart,productMeta,photos);self.animate(fromPage,self._confirmPage);
self._onadd.call(null,result.cart);});};zfp_Configurator.prototype.addPackages=function(parts,packageMeta,fromPage,photos){;;var self=this;var cart=this.cart;var timedOut=false;
var editView=!!this.options.editView;var timer=setTimeout(function(){if(timer!=null){self.showText(editView?'Please wait while the items are being added to the order...':'Please wait while items are being added to the shopping cart...');
timedOut=true;}},500);parts=zf_ProtoPackage.clean(parts);if(this._onpreadd&&this._onpreadd.call(null,parts)){clearTimeout(timer);timer=null;return;}this._queue.enqueueEx('POST',
'/zf/core/printing/printing.asmx','AddCartPackages',[this.cart.id,cart.currency.code,parts,this.returnUrl],function(result,error){clearTimeout(timer);timer=null;
if(error!=null){self.showText(error.message);return;}if(editView){self.hide();return;}self.cart=result.cart;zf_cartSetId(result.cart);if(timedOut){self.hideText();
fromPage=null;}self.$('DIV.pc-hdr:first').text('Confirmation');self._confirmPage.initUI(result.packages,result.cart,packageMeta,photos);self.animate(fromPage,self._confirmPage);
self._onadd.call(null,result.cart);});};zfp_Configurator.prototype.addToPackage=function(item,fromPage,options){var self=this;var timedOut=false;options=options||{};var timer=setTimeout(function(){if(timer!=null){self.showText('Loading...');
timedOut=true;}},500);function completeLoad(toPage){clearTimeout(timer);timer=null;if(timedOut){self.hideText();fromPage=null;}self.animate(fromPage,toPage);}var priceKey=(item instanceof Array)?item[0].priceKey:item.priceKey;
zf_PriceList.load([priceKey],this.cart.currency,function(c,p){if(item instanceof Array)$.each(item,function(){this.extra.pricing=p;});else item.extra.pricing=p;if(!(item instanceof Array)){var vendorMeta=zf_VendorMeta.cached(item.vendorId);
var productMeta=vendorMeta.products[item.productId];if(productMeta.isTemplated){self.pushHeader('','Save and Close<span></span>',self.closure(self._saveAndClose,
self._itemEditor));var photos={};options.photos&&$.each(options.photos,function(){photos[this.id]=this;});$.each(self.photos,function(){photos[this.id]=this;});var o={photos:photos,
itemIndex:0,fromPage:fromPage};item.photos.sort(function(a,b){return a.index-b.index;});for(var photoIndex=0;photoIndex<item.photos.length;photoIndex++){if(photoIndex<item.photos[photoIndex].index)break;
}var template=$.lookup(p.templates,function(t){return t.id==item.settings['selected-template'];});if(photoIndex<template.getPhotoCount(item.settings['selected-orientation'],
item.settings['page-mapping']))o.photoIndex=photoIndex;self._itemEditor.initUI([item],o,function(){completeLoad(self._itemEditor);});return;}}self._packageEditor.initUI(item,
null,false,function(){completeLoad(self._packageEditor);});});};zfp_Configurator.prototype.configure=function(items,productMeta,fromPage,photos){;;this.pushHeader('','Save and Close<span></span>',
this.closure(this._saveAndClose,this._itemEditor));if(photos==null)photos={};$.each(this.photos,function(i,p){photos[p.id]=p;});this._itemEditor.initUI(items,{photos:photos});
this.animate(fromPage,this._itemEditor);};zfp_Configurator.prototype.addProducts=function(items){;;this._onadd.call(null,items);this.hide();};zfp_Configurator.prototype.saveWeights=function(weights){;
;this._onsave_weights.call(null,weights);this.hide();};zfp_Configurator.prototype.viewCart=function(){var self=this;var timer=setTimeout(function(){self.showText('Opening your Shopping Cart...');
},500);var href;if(location.host==zf_defaultHost||location.host==zf_secureHost){var domain=typeof zf_ownerDomain!='undefined'?zf_ownerDomain:zf_userDomain;href=zf_stdGetTransferUrl('http://'+domain+'/cart.html');
}else href='/cart.html';location.href=href;};zfp_Configurator.prototype.save=function(items,callback){;var self=this;if(!(items instanceof Array))items=[items];if(callback==null)callback=$.noop;
items=$.map(items,function(i){return $.extend(new zf_ProtoItem(),i);});if(this._onbeforeupdate&&this._onbeforeupdate.call&&this._onbeforeupdate.call(null,items)){zf_stdDeferCall(null,
callback,null);return;}items=zf_ProtoItem.clean(items);this._queue.enqueueEx('POST','/zf/core/printing/printing.asmx','UpdateCartItems',[this.cart.id,this.cart.photographerId,
items,null],function(result,error){if(error!=null){self.showText(error.message);return;}if(self._onafterupdate&&self._onafterupdate.call)self._onafterupdate.call(null,
result.changeNumber,result.updated);callback(result);});};zfp_Configurator.prototype.setTitle=function(title){;this.$('.pc-ie-title:first').html(title);};zfp_Configurator.prototype.pushHeader=function(titleHtml,
closeHtml,onclose){this._headerStack.unshift({title:this.$('.pc-ie-title:first').html(),close:this.$('A.pc-close:first').html(),onclose:this._closeHook});if(titleHtml!=null){this.$('.pc-ie-title:first').html(titleHtml);
}if(closeHtml!=null){this.$('A.pc-close:first').addClass('with-text').html(closeHtml);}this._closeHook=onclose;};zfp_Configurator.prototype.popHeader=function(){var header=this._headerStack.shift();
this.$('.pc-ie-title:first').html(header.title);this.$('A.pc-close:first').html(header.close);this._closeHook=header.onclose;};zfp_Configurator._isResolutionCheckWaived=function(product,
photo,defaultList,adminView){;;var key=new zf_PriceKey(photo);if(defaultList&&(photo.owner.id==zf_userId||adminView))key=zfp_Configurator.defaultKey;return product.pricings[key.pricingKey]==true;
};zfp_Configurator.prototype._preconfigure=function(items,productMeta,fromPage){var self=this;var timedOut=false;var timer=setTimeout(function(){if(timer!=null){self.showText('Loading...');
timedOut=true;}},500);var nextPage=null;var onload=function(){clearTimeout(timer);timer=null;if(timedOut){self.hideText();fromPage=null;}self.animate(fromPage,nextPage);
};if(productMeta instanceof zf_VendorMeta.Product){;;zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[zf_ProtoItem.clean(items),
this.cart.currency.code],function(result,error){if(error!=null){clearTimeout(timer);timer=null;self.showText(error.message);return;}if(productMeta.isTemplated){var photos={};
$.each(self.photos,function(){photos[this.id]=this;});self.pushHeader('',null,function(){self._itemEditor.close();});var options={photos:photos,fromPage:fromPage};
(nextPage=self._itemEditor).initUI(result,options,onload);}else(nextPage=self._packageEditor).initUI(result[0],productMeta,true,onload);});}else{zf_stdServerRequestEx('POST',
'/zf/core/printing/printing.asmx','CompleteCartPackage',[zf_ProtoPackage.clean(items),this.cart.currency.code],function(result,error){if(error!=null){clearTimeout(timer);
timer=null;self.showText(error.message);return;}(nextPage=self._packageEditor).initUI(result,productMeta,true,onload);});}};zfp_Configurator.prototype._addToCart=function(options){;
this.options=options;var self=this;this.photos=(options.photos instanceof Array)?options.photos:[options.photos];this.allPhotos=options.allPhotos;this._defaultList=!!options.defaultList;
this._adminView=!!options.adminView;if(this.photos.length==0){this.$('DIV.pc-loading').text('There are no products available for the selected photos.');return;}if(options.fromSelection===false){this._showSelectionWarning(function(){options.fromSelection=true;
self._addToCart(options);});return;}if(options.sourceTypes){;var newPhotos=[];for(var i=0;i<this.photos.length;i++){var item=this.photos[i];if(options.sourceTypes==zf_SourceType.Image&&!item.video)newPhotos.push(item);
if(options.sourceTypes==zf_SourceType.Video&&item.video)newPhotos.push(item);}this.photos=newPhotos;}var imageCount=0;var videoCount=0;for(var j=0;j<this.photos.length;
j++){if(this.photos[j].video)videoCount++;else imageCount++;}if(imageCount>0&&videoCount>0){this._showSourceTypeChoice(imageCount,videoCount,function(sourceType){options=$.extend(options,
{sourceTypes:sourceType});self._addToCart(options);});return;}else if(imageCount>0){;this.options.sourceTypes=zf_SourceType.Image;}else{;this.options.sourceTypes=zf_SourceType.Video;
}this.cart=options.cart||new zf_CartSummary();this.categoryId=null;this._priceKeys=this._getPriceKeys(this.photos);if(options.defaultList==null&&this.photos[0].owner.id==zf_userId){var complex=$.grep(this._priceKeys,
function(k){return!k.isSimple();});if(complex.length>0){var pref=zf_stdGetCookie('zf_pcpref');if(pref==null){this._showPricingChoice(function(){self._addToCart(options);
});return;}else this._defaultList=(pref!='0');}this._priceKeys=this._getPriceKeys(this.photos);}this._onadd=options.add||$.noop;this._onbeforeupdate=options.beforeupdate||$.noop;
this._onafterupdate=options.afterupdate||$.noop;this._onhide=options.hide||$.noop;var currency=(this.cart.size>0)?this.cart.currency:null;var pricing=null;var summary=null;
var onload=function(p,s){if(p!=null)pricing=p;if(s!=null)summary=s;if(pricing&&summary&&self._codeReceived){if(summary.size>0)self.cart=summary;self._initUI(pricing);
}};if(!this._codeRequested){this._loadCode(onload);this._codeRequested=true;}if(currency==null){zf_PriceList.loadPricingCurrencies(this._priceKeys,function(currencies){var code=zf_stdGetCookie('zf_cur');
if(currencies.length>0){currencies=zfp_Configurator.getShippingZone().sortByPreference(currencies);currency=$.lookup(currencies,function(c){return c.code==code;})||currencies[0];
}else currency=zf_CurrencyInfo.all[code!=null?code:'USD'];self.cart.currency=currency;zf_PriceList.load(self._priceKeys,currency,function(c,p){onload(p,null);});
});}else{zf_PriceList.load(this._priceKeys,currency,function(c,p){onload(p,null);});}var multiImage=this.cart.incompleteProducts.length+this.cart.multiImageProducts.length;
if(this.cart.hasMultiImage&&multiImage==0){zf_stdServerRequestEx('GET','/zf/core/printing/printing.asmx','GetCartSummary',[this.cart.id,this.cart.photographerId,
this.cart.changeNumber,true],function(result,error){if(error!=null){self.showText(error.message);return;}onload(null,result);});}else{onload(null,this.cart);}};zfp_Configurator.prototype._selectProducts=function(options){this.options=options;
this.photos=[];this.cart=new zf_CartSummary();this.cart.currency=options.currency;this._priceKeys=[];this._defaultList=true;this._onadd=options.select||$.noop;this._onhide=options.hide||$.noop;
var self=this;var pricing=null;if(!this._codeRequested){this._loadCode(function(){pricing&&self._initUI(pricing);});this._codeRequested=true;}zf_PriceList.load(this._priceKeys,
options.currency,function(c,p){pricing=p;self._codeReceived&&self._initUI(p);});};zfp_Configurator.prototype._addToOrder=function(options){this.options=options;this.photos=options.photos;
this.cart=new zf_CartSummary();this.cart.currency=options.currency;this._priceKeys=[];this._defaultList=true;this._onpreadd=options.preadd||$.noop;this._onhide=options.hide||$.noop;
var self=this;var pricing=null;if(!this._codeRequested){this._loadCode(function(){pricing&&self._initUI(pricing);});this._codeRequested=true;}zf_PriceList.load(this._priceKeys,
options.currency,function(c,p){pricing=p;self._codeReceived&&self._initUI(p);});};zfp_Configurator.prototype._customizePricing=function(options){this.options=options;this.photos=[];
this.cart=new zf_CartSummary();this.cart.currency=options.currency;this._priceKeys=[];this._defaultList=true;this._onsave_weights=options.select||$.noop;this._onadd=$.noop;
this._onhide=options.hide||$.noop;var self=this;var pricing=null;if(!this._codeRequested){this._loadCode(function(){pricing&&self._initUI(pricing);});this._codeRequested=true;
}zf_PriceList.loadForPricing(options.pricing,options.currency,function(c,p){pricing=p;self._codeReceived&&self._initUI(p);});};zfp_Configurator.prototype._configureItems=function(options){this.options=options;
this.photos=[];this.cart=options.cart;this._priceKeys=[];this._defaultList=false;this._onbeforeupdate=options.beforeupdate||$.noop;this._onafterupdate=options.afterupdate||$.noop;
this._onhide=options.hide||$.noop;items=this.items=[].concat(options.items);$.each(items,function(i){i.extra={};});var self=this;options=$.extend({},options,{fromCart:true});
var initUI=function(){self.recalcLayout();self.$('.pc-page').hide();self._activePage=null;if(!options.readOnly){self.pushHeader('','Save and Close<span></span>',
self.closure(self._saveAndClose,self._itemEditor));}self._itemEditor.initUI(items,options,function(){self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');
self._show(self._itemEditor);self.recalcLayout();});};if(!this._codeRequested){this._loadCode(initUI);this._codeRequested=true;}else initUI();};zfp_Configurator.prototype._confirmProduct=function(options){var self=this;
this.options=options;this._onafterupdate=options.afterupdate!=null?options.afterupdate:$.noop;this.photos=options.photos;this.cart=options.cart;this._priceKeys=[options.item.priceKey];
this._defaultList=options.item.priceKey.defaultList;zf_PriceList.load(this._priceKeys,this.cart.currency,function(c,p){self.pricing=p;var items=[self.options.item];
var vendorMeta=zf_VendorMeta.cached(self.options.item.vendorId);var productMeta=vendorMeta.products[self.options.item.productId];var photos=self.options.photos;self.$('DIV.pc-hdr:first').text('Confirmation');
var prepConfirmation=function(){self.recalcLayout();self.$('.pc-page').hide();self._activePage=null;self._confirmPage.initUI([self.options.item],self.options.cart,
productMeta,photos);self.animate(null,self._confirmPage);self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');};if(!self._codeRequested){self._loadCode(prepConfirmation);
self._codeRequested=true;}else{prepConfirmation();}});};zfp_Configurator.prototype._editProduct=function(options){this.options=options;this.photos=options.photos;this.allPhotos=options.allPhotos;
this.cart=options.cart;this._priceKeys=[];var priceKey=options.item?options.item.priceKey:options.pkg[0].priceKey;this._defaultList=priceKey.defaultList;this._onbeforeupdate=options.beforeupdate||$.noop;
this._onafterupdate=options.afterupdate||$.noop;this._onhide=options.hide||$.noop;var self=this;function completeLoad(toPage){self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');
self._show(toPage);self.recalcLayout();}function initUI(){self.recalcLayout();self.$('.pc-page').hide();self._activePage=null;zf_PriceList.load([priceKey],self.cart.currency,
function(c,p){var item=options.item;if(item!=null&&item.packageId==null){item.extra.pricing=p;var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=vendorMeta.products[item.productId];
if(productMeta.isTemplated){self.pushHeader('','Save and Close<span></span>',self.closure(self._saveAndClose,self._itemEditor));var photos={};options.itemPhotos&&$.each(options.itemPhotos,
function(){photos[this.id]=this;});$.each(self.photos,function(){photos[this.id]=this;});var o={photos:photos,itemIndex:0,orderEdit:options.orderEdit};item.photos.sort(function(a,
b){return a.index-b.index;});for(var photoIndex=0;photoIndex<item.photos.length;photoIndex++){if(photoIndex<item.photos[photoIndex].index)break;}var template=$.lookup(p.templates,
function(t){return t.id==item.settings['selected-template'];});if(photoIndex<template.getPhotoCount(item.settings['selected-orientation'],item.settings['page-mapping']))o.photoIndex=photoIndex;
self._itemEditor.initUI([item],o,function(){completeLoad(self._itemEditor);});return;}}self._packageEditor.initUI(options.item||options.pkg,null,false,function(){completeLoad(self._packageEditor);
});},true);}if(!this._codeRequested){this._loadCode(initUI);this._codeRequested=true;}else initUI();};zfp_Configurator.prototype._displayLicense=function(license){var self=this;
var initUI=function(){self.recalcLayout();self.$('.pc-page').hide();self._activePage=null;self.showLicense(license,true);self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');
};if(!this._codeRequested){this._loadCode(initUI);this._codeRequested=true;}else initUI();};zfp_Configurator.prototype._loadCode=function(callback){var self=this;zf_stdServerRequestEx('GET',
'/zf/core/printing/printing.asmx','GetConfiguratorMarkup',[this.mode,this._cacheToken],function(result,error){if(error!=null){self.$('DIV.pc-loading:first').text(error.message);
return;}self.$('DIV.pc-body:first').html(result.html);self._loadCallback=callback;result.script+=self.clientObject+'._completeCode();';var head=document.getElementsByTagName('HEAD')[0];
var sTag=document.createElement('SCRIPT');sTag.type='text/javascript';sTag.text=result.script;head.appendChild(sTag);});};zfp_Configurator.prototype._completeCode=function(){var callback=this._loadCallback;
this._loadCallback=null;this._licenseView=zf_Control.find(this.$('DIV.pc-license:first .sv-inner')[0].id);this._productBrowser=this._initPage('pc-pb');this._itemEditor=this._initPage('pc-ie');
this._packageEditor=this._initPage('pc-pe');this._confirmPage=this._initPage('pc-ac');if(this._productBrowser==null)this._productBrowser=this._initPage('pc-pb2');
this._allSlideIns=this.$('DIV.pc-slidein');this._allPages=this.$('DIV.pc-page');this._attachEvents();this._codeReceived=true;callback();};zfp_Configurator.prototype._attachEvents=function(){this.$('A').click(zf_stdFalse).mousedown(function(e){if(zf_stdIsLeftButton(e)){e.preventDefault();
e.stopPropagation();this.focus();$(this).trigger('fastClick');}});this.$('A.pc-button').button(zfp_Configurator._buttonOptions);this.$('A.pc-toggle').button(zfp_Configurator._toggleOptions);
};zfp_Configurator.prototype._initUI=function(pricing){;this.pricing=pricing;this.recalcLayout();this._allPages.hide();this._activePage=null;this.$('DIV.pc-loading').remove();this.$('DIV.pc-frame:first').removeClass('pc-s-loading');
if(!this._productBrowser.initUI(pricing,this.options))this._show(this._productBrowser);this.recalcLayout();};zfp_Configurator.prototype._initPage=function(className){;var pages=[];
var nodes=this.$('.'+className);for(var i=0;i<nodes.length;i++){var page=zf_Control.find(nodes[i].id);if(page!=null){if(page.init!=null)page.init(this);pages.push(page);
}}if(pages.length==0)return null;else if(pages.length==1)return pages[0];else return pages;};zfp_Configurator.prototype._isCroppingReadOnly=function(product){;for(var optionId in product.options){var option=product.options[optionId];
var setting=option.settings["cropping"];if(setting!=null&&setting.readOnly)return true;}return false;};zfp_Configurator.prototype._getPriceKeys=function(photos){;;var map={},self=this,
keys=[];$.each(photos,function(){var key=self._getPhotoKey(this);map[key.toString()]=key;});for(key in map)keys.push(map[key]);return keys;};zfp_Configurator.prototype._getPhotoKey=function(photo){;
var key=new zf_PriceKey(photo);if(this._defaultList&&(photo.owner.id==zf_userId||this._adminView))key=new zf_PriceKey(zfp_Configurator.defaultKey.pricingKey,photo.owner.id,
true);return key;};zfp_Configurator.prototype._setBrowseTitle=function(){var title=zf_stdFormatString(this.photos.length>1?'Select Product <small>for {0} photos</small>':'Select Product',
this.photos.length);this.$('DIV.pc-hdr:first').html(title).find('SMALL').addClass('pc-color3 pc-font5');};zfp_Configurator.prototype._setSelectTemplateDesignTitle=function(){var title=zf_stdFormatString('Select Design');
this.$('DIV.pc-hdr:first').html(title).find('SMALL').addClass('pc-color3 pc-font5');};zfp_Configurator.prototype.getActivePage=function(){return this._activePage;};zfp_Configurator.prototype.animate=function(fromPage,
toPage,callback){;var activePage=this._activePage;if(fromPage!=null&&fromPage==activePage){this._activePage=toPage;if(!(toPage instanceof jQuery))toPage=toPage.$();
if(!(fromPage instanceof jQuery))fromPage=fromPage.$();var size=this._resize();fromPage.addClass('pc-s-moving').fadeOut(300,function(){$(this).removeClass('pc-s-moving').hide();
fromPage.triggerHandler('hidePage');});toPage.addClass('pc-s-moving').fadeIn(300,function(){$(this).removeClass('pc-s-moving');callback&&callback();});setTimeout(function(){toPage.trigger('resizePage',
[size.cx,size.cy]);},10);}else{this._show(toPage);this.recalcLayout();}this._hidePanels();};zfp_Configurator.prototype._show=function(page){;var activePage=this._activePage;this._activePage=page;
if(!(page instanceof jQuery))page=page.$();this._allPages.hide();page.show();if(activePage!=null)activePage.$().triggerHandler('hidePage');};zfp_Configurator.prototype._saveAndClose=function(editor){this.showText('Saving...');
editor.save(this.closure(this.hide));this.trackPageView();};zfp_Configurator.prototype._hidePanels=function(){if(this._allSlideIns!=null){var self=this;this._allSlideIns.filter('.pc-slidein-s').each(function(){self.hidePanel($(this));
});}};zfp_Configurator.prototype._showPricingChoice=function(callback){var self=this;this.setTitle('Select Prices to Use');this._resize();var onchoice=function(defaultList){var panel=self.$('DIV.pc-slidein.pc-pricing:first');
zf_stdSetCookie('zf_pcpref',defaultList?'1':'0',null,true,true);self.$('DIV.pc-frame:first').addClass('pc-s-loading').append('<div class="pc-loading pc-font2">Loading...</div>');
self.hidePanel(panel);callback();};var onload=function(){var panel=self.$('DIV.pc-slidein.pc-pricing:first');panel.find('.pc-pricing-v').unbind('fastClick').bind('fastClick',
function(){onchoice(false);});panel.find('.pc-pricing-d').unbind('fastClick').bind('fastClick',function(){onchoice(true);});self._resize();self._allPages.hide();
self._activePage=null;self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');self.showPanel(panel);};if(!this._codeRequested){this._loadCode(onload);
this._codeRequested=true;}else if(!this._codeReceived){var timer=setInterval(function(){if(self._codeReceived){clearInterval(timer);onload();}},50);}else onload();
};zfp_Configurator.prototype._showSourceTypeChoice=function(photoCount,videoCount,callback){var self=this;this.setTitle('Select Item Type to Use');this._resize();var onchoice=function(sourceType){var panel=self.$('DIV.pc-slidein.pc-itemtype:first');
self.$('DIV.pc-frame:first').addClass('pc-s-loading').append('<div class="pc-loading pc-font2">Loading...</div>');self.hidePanel(panel);callback(sourceType);};var onload=function(){var panel=self.$('DIV.pc-slidein.pc-itemtype:first');
panel.find('.pc-itemtype-prompt').text(zf_stdFormatString('There are {0} photo(s) and {1} video(s) selected.',photoCount,videoCount));panel.find('.pc-itemtype-p').text(zf_stdFormatString('Select product for {0} photo(s)',
photoCount));panel.find('.pc-itemtype-v').text(zf_stdFormatString('Select product for {0} video(s)',videoCount));panel.find('.pc-itemtype-p').unbind('fastClick').bind('fastClick',
function(){onchoice(zf_SourceType.Image);});panel.find('.pc-itemtype-v').unbind('fastClick').bind('fastClick',function(){onchoice(zf_SourceType.Video);});self._resize();
self._allPages.hide();self._activePage=null;self.$('DIV.pc-loading').remove();self.$('DIV.pc-frame:first').removeClass('pc-s-loading');self.showPanel(panel);};if(!this._codeRequested){this._loadCode(onload);
this._codeRequested=true;}else if(!this._codeReceived){var timer=setInterval(function(){if(self._codeReceived){clearInterval(timer);onload();}},50);}else onload();
};zfp_Configurator.prototype._showSelectionWarning=function(callback){var self=this;this.setTitle('No Photos Selected');this._resize();var oncontinue=function(){var panel=self.$('DIV.pc-slidein.pc-selection:first');
self.$('DIV.pc-frame:first').addClass('pc-s-loading').append('<div class="pc-loading pc-font2">Loading...</div>');self.hidePanel(panel);callback();};var onload=function(){var panel=self.$('DIV.pc-slidein.pc-selection:first');
panel.find('.pc-selection-y').unbind('fastClick').bind('fastClick',function(){oncontinue();});panel.find('.pc-selection-n').unbind('fastClick').bind('fastClick',
function(){if(self.options.startSelection)self.options.startSelection();self.hide();});self._resize();self._allPages.hide();self._activePage=null;self.$('DIV.pc-loading').remove();
self.$('DIV.pc-frame:first').removeClass('pc-s-loading');self.showPanel(panel);};if(!this._codeRequested){this._loadCode(onload);this._codeRequested=true;}else if(!this._codeReceived){var timer=setInterval(function(){if(self._codeReceived){clearInterval(timer);
onload();}},50);}else onload();};zfp_Configurator.prototype._resizeImpl=function(cx,cy){if(this._allSlideIns!=null){this._allSlideIns.width(cx).height(cy).not('.pc-slidein-s').css('right',
(-cx-4)+'px');}if(this._licenseView!=null){this.$('DIV.pc-license:first .sv:first').height(cy-53);this._licenseView.update();}if(this._allPages!=null)this._allPages.trigger('resizePage',
[cx,cy]);if(this._allSlideIns!=null)this._allSlideIns.trigger('resizePage',[cx,cy]);};zfp_Configurator.prototype.hideCloseX=function(){this.$('A.pc-close').hide();;};zfp_Configurator.prototype.showCloseX=function(){this.$('A.pc-close').show();
;};function zfp_ProductBrowser2(id,iconList,catalog,classicList,subiconList,designGroupList,designList,incompleteList){;zf_Control.prototype.constructor.call(this,id);this._iconList=iconList;
this._catalog=catalog;this.classicList=classicList;this.subiconList=subiconList;this.designGroupList=designGroupList;this.designList=designList;this.incompleteList=incompleteList;
}zfp_ProductBrowser2.inherits(zf_Control);zfp_ProductBrowser2.prototype.init=function(frame){;this._frame=frame;var self=this;this.$().bind('resizePage',this.closure(this._page_onresize)).toggleClass('pc-pb2-atc',
frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder).toggleClass('pc-pb2-pricelist',frame.mode==zfp_Configurator.Mode.PriceList);
this.$('.pc-pb2-filter:first A:first').bind('fastClick',this.closure(this.changeFilter));this.$('.pc-pb2-vendor:first A:first').bind('fastClick',this.closure(this.changeVendor));
this.$('.pc-pb2-by-icons:first').bind('button-click',function(){$(this).selectButton(true);self.$('.pc-pb2-by-catalog:first').selectButton(false);self._catalog.$().closest('.pc-pb2-main').fadeOut(200);
self._iconList.$().closest('.pc-pb2-main').fadeIn(200,function(){self._iconList.update();});self._frame.trackPageView('/productbrowser?view=byicons');});this.$('.pc-pb2-by-catalog:first').bind('button-click',
function(){$(this).selectButton(true);self.$('.pc-pb2-by-icons:first').selectButton(false);self._iconList.$().closest('.pc-pb2-main').fadeOut(200);self._catalog.$().closest('.pc-pb2-main').fadeIn(200,
function(){self._catalog.update();});self._frame.trackPageView('/productbrowser?view=bycatalog');});this._iconList.$().closest('.pc-pb2-main').show();this._catalog.$().closest('.pc-pb2-main').hide();
this.classicList.init(frame,this);this.subiconList.init(frame,this);this.designGroupList.init(frame,this);this.designList.init(frame,this);this.incompleteList.init(frame,
this);var footer=this.$('.pc-pb2-footer:first');footer.find('A:last').bind('button-click',function(){frame.hide();});if(frame.mode==zfp_Configurator.Mode.PriceList){footer.find('A.pc-pb2-add').bind('button-click',
this.closure(this.addProducts));}if(frame.mode==zfp_Configurator.Mode.Customize){footer.find('A.pc-pb2-save').bind('fastClick',function(){frame.saveWeights(self._activePricing.sortWeights);
});footer.find('A.pc-pb2-reset').bind('fastClick',function(){self.resetCustomizations();});}};zfp_ProductBrowser2.prototype.initUI=function(pricing,options){;this._options=options=(options||{});
this._customFilter=options.filter?options.filter:zf_stdTrue;this._items=options.items||{};this._showVendors=false;this._editView=!!options.editView;this._optionId=null;
this._quantity=1;var mode=this._frame.mode;if(mode==zfp_Configurator.Mode.AddToCart){var isVideo=options.sourceTypes==zf_SourceType.Video;var count=0;for(var i=0;
i<options.photos.length;i++){var op=options.photos[i];count+=(!!op.video==isVideo)?1:0;}var formatHExtra=isVideo?'{0} Videos':'{0} Photos';this.$('.pc-page-hdr-extra:first').showIf(count>1).find('SPAN:first').text(zf_stdFormatString(formatHExtra,
count));var ts=zf_stdGetCookie('zf_atcts');if(ts==null||parseInt(ts)<new Date().getTime()-1800000){zf_storage.removeItem('core.printing.configurator.vid');zf_storage.removeItem('core.printing.configurator.cid');
zf_storage.removeItem('core.printing.configurator.scid');zf_storage.removeItem('core.printing.configurator.dgid');}zf_stdSetCookie('zf_atcts',new Date().getTime(),
null,true);}if(mode==zfp_Configurator.Mode.PriceList){var selected=0;for(var key in this._items)selected+=(this._items[key].quantity>0?1:0);this.$('.pc-pb2-add').enableButton(selected>0);
}var cart=this._frame.cart;function filterBySourceType(ary,sourceTypes){var res=[];for(var j=0;j<ary.length;j++){if((ary[j].sourceType&sourceTypes)!=0)res.push(ary[j]);
}return res;}var incompleteProducts=filterBySourceType(cart.incompleteProducts,this._options.sourceTypes);var multiImageProducts=filterBySourceType(cart.multiImageProducts,
this._options.sourceTypes);this._inProgress=[].concat(incompleteProducts).concat(multiImageProducts);var formatIncomplete=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that require additional videos. <a{0}>Add these videos</a> to those products now, or select a new product below.':'You have products in your cart that require additional photos. <a{0}>Add these photos</a> to those products now, or select a new product below.';
var formatMultiImage=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that could use additional videos. If you’d like, you can <a{0}>add these videos</a> to those products now, or select a new product below.':'You have products in your cart that could use additional photos. If you’d like, you can <a{0}>add these photos</a> to those products now, or select a new product below.';
this.$('.pc-pb2-incomplete:first').toggle(this._inProgress.length>0).html(zf_stdFormatString(incompleteProducts.length>0?formatIncomplete:formatMultiImage,' href="#"')).find('A:first').click(this.closure(this._incomplete_onclick));
this._vendorId=options.vendorFilter;if(!this._vendorId&&this._options.partialPackage){if(this._options.partialPackage.current&&this._options.partialPackage.current.extra&&this._options.partialPackage.current.extra.product){this._vendorId=this._options.partialPackage.current.extra.product.vendorId;
}}if(!this._vendorId){for(var vid in pricing.vendors){var v=pricing.vendors[vid];if(v.isEmpty)continue;if(v.masqueradeAs==null&&!v.isCustom){this._showVendors=true;
break;}}if(mode==zfp_Configurator.Mode.AddToCart&&this._frame._defaultList||mode==zfp_Configurator.Mode.PriceList){this._vendorId=zf_storage.getItem('core.printing.configurator.vid');
if(this._vendorId!=null){if(!this._showVendors||((v=pricing.vendors[this._vendorId])==null)||v.isEmpty)this._vendorId=null;}}}var filter=this._options.partialPackage?this._initTemplateDesignFilter(pricing,
this._options.partialPackage):this._initFilter(pricing,options.vendorFilter==null);if(this._activePricing!=null&&mode==zfp_Configurator.Mode.Customize){var sortWeights=this._activePricing.sortWeights;
this._activePricing=pricing.filter(filter);this._activePricing.sortWeights=sortWeights;}else{this._activePricing=pricing.filter(filter);}var root=this._activePricing.root;
if(root.isEmpty){var baseEmpty=pricing.root.isEmpty;var canSwitch=this._activePricing.alternateCurrencies.length>0;var allVendors=this._vendorId==null;if(baseEmpty&&!canSwitch){var self=this;
this._frame.showMessage('There are no products available for the selected photos.',['OK'],function(){self._frame.hide();});}else if(allVendors){this._frame.showMessage('There are no products available in this currency for the selected destination.',
['Change Settings'],this.closure(this.changeFilter));}else{this._frame.showMessage('There are no products available from this vendor for the selected currency and destination.',
['Change Settings'],$.noop);}return true;}var vendorId=options.vendorId;var productId=options.productId;var categoryId=options.categoryId;var product=null;if(vendorId!=null&&productId!=null){product=this._activePricing.findProduct(vendorId,
productId);if(product==null)product=this._activePricing.findPackage(vendorId,productId);}var cats=$.grep(root.subcategories,function(c){return!c.alternative;});;
if(mode==zfp_Configurator.Mode.AddToCart&&categoryId==null){if(product!=null&&!options.newProduct){var ap=this._activePricing;if(product.meta().isTemplated){var o={fromPage:null,
designs:this.getProductDesigns(ap,product),product:product,optionId:null};if(this.designGroupList.initUI(ap,ap.root,o)){this._frame.animate(null,this.designGroupList);
this._frame.trackPageView('/productbrowser/designgrouplist?category='+categoryId);}return true;}var category=$.lookup(cats,function(c){return ap.getProductCategory(c.id,
product)!=null;});if(category!=null)categoryId=category.id;}else categoryId=zf_storage.getItem('core.printing.configurator.cid');}if(categoryId=='root'||this._activePricing.categories[categoryId]==null)categoryId=null;
if(options.addToExisting&&this._inProgress.length>0){this._incomplete_onclick();return true;}var weights=this._activePricing.getWeights(zf_PricingSortWeight.Type.Category);
cats.sort(zf_BaseMeta.weightedComparer(weights));var c;if((c=this._activePricing.categories['alt-calibration'])!=null){for(var k=0;k<c.products.length;k++){var p=c.products[k];
var itemFilter=function(item){return item.item!=null&&item.item.vendorId==p.vendorId&&item.item.productId==p.id;};if($.lookup(this._inProgress,itemFilter)==null){var calibration={id:'-calibration',
name:p.vendor.meta().altName,icon:'/zf/img/printing/icon-prints-200.png',products:[p],packages:[],parent:this._activePricing.root,data:{},subcategories:[]};cats=[calibration].concat(cats);
}}}if(pricing.isFlattened){this._selectCategory(root,true,true,product);return true;}if(cats.length==1){this._selectCategory(cats[0],true,true,product);return true;
}this._iconList.init(cats,{onselect:this.closure(this._selectCategory),onsort:this.closure(this._sortCategories,weights),customizeMode:mode==zfp_Configurator.Mode.Customize});
this._catalog.init(cats,this.closure(this._selectCategory));var activePage;if(categoryId!=null){var cat=$.lookup(cats,function(c){return c.id==categoryId;});if(cat!=null){this._selectCategory(cat,
true,false,product);return true;}}else if((activePage=this._frame.getActivePage())!=this){this._frame.animate(activePage,this,null);var viewby='byicons';if(this._catalog.$().is(':visible')){viewby='bycatalog';
}this._frame.trackPageView('/productbrowser?view='+viewby);}this._frame._resize();return false;};zfp_ProductBrowser2.prototype.onBack=function(){var viewby='byicons';if(this._catalog.$().is(':visible')){viewby='bycatalog';
}this._frame.trackPageView('/productbrowser?view='+viewby);zf_storage.removeItem('core.printing.configurator.cid');};zfp_ProductBrowser2.prototype.saveItems=function(items){this._items=items;
var selected=0;for(var key in items)selected+=(items[key].quantity>0?1:0);this.$('.pc-pb2-add').enableButton(selected>0);};zfp_ProductBrowser2.prototype.getProductDesigns=function(pricing,
product){var productMeta=product.meta(),designs={},templates=pricing.findTemplates(productMeta.getTemplateProductId());if(product.designSelector!=null)templates=product.designSelector.match(templates);
$.each(templates,function(){var design=pricing.designs[this.designId];if(design!=null){design=$.extend({},design,{extra:{products:[product]}});designs[design.id]=design;
}});return designs;};zfp_ProductBrowser2.prototype._selectCategory=function(category,force,only,product){var pricing=this._activePricing,designs={},frame=this._frame,mode=frame.mode;
if(!force&&mode==zfp_Configurator.Mode.AddToCart)zf_storage.setItem('core.printing.configurator.cid',category.id);if(mode!=zfp_Configurator.Mode.PriceList&&!pricing.isFlattened&&(category.data['icon-view']!='force'&&category.subcategories.length>0||category.subcategories.length==1)){var self=this;
$.each(category.products,function(){var product=this;function isPrintable(pt){return self._frame.isPhotoPrintable(product,pt.photo,pt.template);}var productMeta=this.meta();
if(productMeta.isTemplated){var templates=pricing.findTemplates(productMeta.getTemplateProductId());if(product.designSelector!=null)templates=product.designSelector.match(templates);
$.each(templates,function(){var template=this;var design=pricing.designs[this.designId];if(design!=null){design=designs[design.id]||$.extend({extra:{products:[]}},
design);designs[design.id]=design;var pts=$.map(self._frame.photos,function(p){return{photo:p,template:template};});if(mode!=zfp_Configurator.Mode.AddToCart||$.lookup(pts,
isPrintable)){design.extra.products.push(product);}}});}return true;});}var options={showVendors:this._showVendors,vendorId:this._vendorId,customFilter:this._customFilter,
fromPage:only?null:this,product:product,items:this._items,sourceTypes:this._options.sourceTypes,partialPackage:this._options.partialPackage};if($.isEmptyObject(designs)){if(category.data['icon-view']!=null&&category.subcategories.length>1){if(this.subiconList.initUI(this._activePricing,
category,options)){frame.animate(force?null:this,this.subiconList);this._frame.trackPageView('/productbrowser/subiconlist');}}else{options.noSiblings=category.id=='-calibration';
this.classicList.initUI(this._activePricing,category,options);frame.animate(force?null:this,this.classicList);this._frame.trackPageView('/productbrowser/classiclist');
}}else{if(category.subcategories.length==1)category=category.subcategories[0];options.designs=designs;if(this.designGroupList.initUI(this._activePricing,category,
options)){frame.animate(force?null:this,this.designGroupList);this._frame.trackPageView('/productbrowser/designgrouplist?category='+category.id);}}};zfp_ProductBrowser2.prototype._sortCategories=function(categories,
weights){$.each(categories,function(i){weights[this.id]=i;});this._activePricing.mergeWeights(zf_PricingSortWeight.Type.Category,weights);};zfp_ProductBrowser2.prototype._initTemplateDesignFilter=function(pricing,
partialPackage){return{includeVendor:function(v){if(partialPackage.current.vendorId===v.id){return true;}else{return false;}},includeProduct:function(p){if(partialPackage.current.productId===p.id){return true;
}else{return false;}},includePackage:function(p){return false;}};};zfp_ProductBrowser2.prototype._initFilter=function(pricing,showVendors){var zone=zfp_Configurator.getShippingZone(pricing);
var showSelector=this._frame.mode==zfp_Configurator.Mode.AddToCart||(this._frame.mode==zfp_Configurator.Mode.Customize&&pricing.alternateCurrencies.length>0);if(showSelector){this.$('.pc-pb2-filter:first').show().find('SPAN:first').find('IMG:first').attr('class',
'pc-flag pc-flag-'+zone.code).end().find('A:first').text(zone.shortDisplayName+' ('+pricing.currency.code+')');}else{this.$('.pc-pb2-filter:first').hide();zone=null;
}this.$('.pc-pb2-currency:first').toggle(this._frame.mode==zfp_Configurator.Mode.PriceList).find('SPAN').text(pricing.currency.pluralName);var vendorId=this._vendorId,
mode=this._frame.mode;showVendors=showVendors&&(mode==zfp_Configurator.Mode.AddToCart&&this._frame._defaultList||mode==zfp_Configurator.Mode.PriceList);if(showVendors){var vendorName=vendorId?zf_VendorMeta.cached(vendorId).name:'All Vendors';
this.$('.pc-pb2-vendor:first').show().find('A:first').text(vendorName);}else this.$('.pc-pb2-vendor:first').hide();if(!this._options.sourceTypes){;this._options.sourceTypes=zf_SourceType.Image|zf_SourceType.Video;
}return{includeVendor:function(v){if(this._vendorId!=null){if(this._vendorId!=v.id&&v.id.indexOf('-c')==-1)return false;if(v.id.indexOf('-c')!=-1){baseId=v.id.slice(0,
v.id.length-3);if(this._vendorId.indexOf(baseId)==-1)return false;}}return this._filter.includeVendor(v);},includeProduct:function(p){var meta=p.meta();if((this._sourceTypes&meta.sourceType)==0)return false;
if(mode==zfp_Configurator.Mode.PriceList||mode==zfp_Configurator.Mode.AddToCart&&this._defaultList){if(meta.data['legacy']!=null)return false;if(p.vendor.meta().groups[meta.groupId].data['legacy']!=null)return false;
}return this._filter.includeProduct(p)&&this._customFilter(p);},includePackage:function(p){return this._filter.includePackage(p)&&this._customFilter(p);},_filter:zfp_Configurator.createShippingZoneFilter(zone),
_vendorId:vendorId,_customFilter:this._customFilter,_sourceTypes:this._options.sourceTypes,_defaultList:this._frame._defaultList};};zfp_ProductBrowser2.prototype._showError=function(message,
buttons){if(buttons==null)buttons=[];var panel=this._frame.$('DIV.pc-pb-empty:first');panel.find('H6').text(message);panel.find('A.pc-button').hide();$.each(buttons,
function(i,b){panel.find('A.pc-pb-btn-'+b).show();});panel.find('.pc-pb-block')[0].className='pc-pb-block pc-pb-block-'+buttons.length;this._frame.showPanel(panel);
this._frame.trackPageView('/productbrowser/panel/error');};zfp_ProductBrowser2.prototype._page_onresize=function(e,cx,cy){this.$().width(cx).height(cy);var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true)-this.$('.pc-pb2-controls:first:visible').outerHeight(true)-this.$('.pc-pb2-footer:first:visible').outerHeight(true);
this.$('.pc-pb2-main').width(cx);this._iconList.setHeight(cyMain);this._catalog.setHeight(cyMain);this._iconList.recalcLayout(cx,cyMain);this._catalog.recalcLayout(cx,
cyMain);var cw=this.$('.pc-pb2-controls:first').width();if(cw>0){var v=this.$('.pc-pb2-vendor:first');var f=this.$('.pc-pb2-filter:first');if(v.is(':visible')){var va=v.find('A:first').css('width',
'auto');var remainingSpace=cw-(v.position().left+v.width());var neededSpace=f.width();if(remainingSpace<neededSpace)va.width(va.width()-(neededSpace-remainingSpace));
}}};zfp_ProductBrowser2.prototype._incomplete_onclick=function(){if(this._inProgress.length==1){this.incompleteList.addToItem(this._inProgress[0],this);}else{var self=this;this.incompleteList.initUI(this._activePricing,
this._inProgress,{fromPage:this},function(){self._frame.animate(self,self.incompleteList);});this._frame.trackPageView('/productbrowser/incompletelist');}return false;
};zfp_ProductBrowser2.prototype.addProducts=function(){var protos=[];for(var key in this._items){var item=this._items[key];if(item.quantity>0){protos.push({vendorId:item.vendorId,productId:item.packageId==null?item.productId:null,
packageId:item.packageId,quantity:1});}}this._frame.addProducts(protos);};zfp_ProductBrowser2.prototype.resetCustomizations=function(){var self=this;var mbox=new zf_MessageBox("confirm",
"Reset to Defaults","Are you sure you want to reset the Add to Cart window to the default settings?",["Yes","No"]);mbox.onbutton=function(i){if(i!=0)return;self._activePricing.mergeWeights(zf_PricingSortWeight.Type.Category,
{});self._activePricing.mergeWeights(zf_PricingSortWeight.Type.Product,{});self._activePricing.mergeWeights(zf_PricingSortWeight.Type.Group,{});self._activePricing.mergeWeights(zf_PricingSortWeight.Type.Design,
{});self._activePricing.mergeWeights(zf_PricingSortWeight.Type.DesignGroup,{});self.initUI(self._activePricing,self._frame.options);};mbox.show();};zfp_ProductBrowser2.prototype.changeFilter=function(){var panel=this.$dom('location');
var frame=this._frame;var pricing=frame.pricing;var currency=pricing.currency;if(pricing.root.products.length==0&&pricing.root.packages.length==0)currency=(frame.cart.size>0)?frame.cart.currency:null;
var shipZone=zfp_Configurator.getShippingZone(),locale=pricing.root.culture=='en-US'?'en-US':'en-EU',reassign=false;panel.find('A.pc-shipzone').selectButton(false).each(function(){var b=$(this),
show=true,zone=zf_ShippingZone.all[b.attr('data-shipzone')];if(pricing.alternateCurrencies.length==0){var f=zfp_Configurator.createShippingZoneFilter(zone);show=!pricing.filter(f).root.isEmpty;
}b.toggle(show);if(zone.code==shipZone.code&&!show)reassign=true;}).unbind('button-click').bind('button-click',function(){var b=$(this);panel.find('A.pc-shipzone').selectButton(false);
b.selectButton(true);shipZone=zf_ShippingZone.all[b.attr('data-shipzone')];});if(reassign)shipZone=zfp_Configurator.getShippingZone(pricing);panel.find('A.pc-shipzone[data-shipzone='+shipZone.code+']').selectButton(true);
panel.find('A.pc-currency').hide().unbind('button-click').bind('button-click',function(){var b=$(this);panel.find('A.pc-currency').selectButton(false);b.selectButton(true);
currency=zf_CurrencyInfo.all[b.attr('data-currency')];});var currencyCount=pricing.alternateCurrencies.length;for(var i=0;i<currencyCount;i++){panel.find('A[data-currency='+pricing.alternateCurrencies[i]+']:first').show().selectButton(false);
}if(currency!=null)panel.find('A[data-currency='+currency.code+']:first').show().selectButton(true);panel.find('A.pc-unit').selectButton(false).unbind('button-click').bind('button-click',
function(){var b=$(this);panel.find('A.pc-unit').selectButton(false);b.selectButton(true);locale=b.attr('data-locale');}).filter('[data-locale='+locale+']').selectButton(true);
var self=this;panel.find('A.pc-pb2-save:first').unbind('button-click').bind('button-click',function(){var reload=false;zfp_Configurator.setShippingZone(shipZone);
if(locale!=pricing.root.culture){zfp_Configurator.setLocale(locale);reload=true;}if(currency.code!=pricing.currency.code){if(frame.cart.size>0){clearCart();return;
}var expires=new Date();expires.setFullYear(expires.getFullYear()+1);zf_stdSetCookie('zf_cur',currency.code,expires,true);reload=true;}frame.recalcLayout();if(reload){frame.reinit(currency);
frame.slideOutPanel(panel);}else{var options=$.extend({},frame.options);options.categoryId=null;options.items=self._items;self.initUI(pricing,options);frame.slideOutPanel(panel);
}});function clearCart(){frame.showMessage('Your shopping cart contains products in another currency.<br/>If you continue, your shopping cart will be emptied.',['Cancel',
'Remove previously added products and continue'],function(button){if(button==0)return;zf_stdServerRequestEx("POST","/zf/core/printing/printing.asmx","ClearCart",
[frame.cart.id,frame.cart.photographerId],function(result,error){if(error==null){var expires=new Date();expires.setFullYear(expires.getFullYear()+1);zf_stdSetCookie('zf_cur',
currency.code,expires,true);frame.reinit(currency);frame.slideOutPanel(panel);}});});}panel.css('visibility','hidden').show();var cy=panel.find('.pc-pb2-centered:first').css('height',
'auto').height();panel.find('.pc-pb2-centered:first').height(cy+12);panel.hide().css('visibility','inherit');frame.slideInPanel(panel);this._frame.trackPageView('/productbrowser/panel/changefilter');
};zfp_ProductBrowser2.prototype.changeVendor=function(){var frame=this._frame,panel=frame.$('DIV.pc-pb2-vendors:first'),pricing=frame.pricing,options=frame.options,self=this;var map={};
for(var vid in pricing.vendors){var v=pricing.vendors[vid];map[v.masqueradeAs!=null?v.masqueradeAs:vid]=true;}var vendors=[];for(vid in map){if(vid=='mpixpro-c'||vid=='ovi-c')continue;
var vendor=pricing.vendors[vid];if((vendor.products==null||$.isEmptyObject(vendor.products))&&(vendor.packages==null||$.isEmptyObject(vendor.packages))){continue;
}vendors.push(vendor.meta());}vendors.sort(zf_BaseMeta.compare);var html=['<a href="#" class="pc-button pc-font2">All Vendors</a>'];for(var i=0;i<vendors.length;
i++){html.push('<a href="#" class="pc-button pc-font2" data="',vendors[i].id,'">',zf_stdHtmlEncode(vendors[i].name),'</a>');}panel.find('.pc-pb2-centered:first').html(html.join(""));
panel.find('A.pc-button').button(zfp_Configurator._buttonOptions);if(this._vendorId==null)panel.find('A.pc-button:first').selectButton();else panel.find('A.pc-button[data="'+this._vendorId+'"]').selectButton();
panel.find('A.pc-button').bind('button-click',function(){var vendorId=$(this).attr('data');if(vendorId!=null)zf_storage.setItem('core.printing.configurator.vid',
vendorId);else zf_storage.removeItem('core.printing.configurator.vid');frame.hidePanel('.pc-pb-empty:first');options=$.extend({},options);options.categoryId=null;
options.items=self._items;self.initUI(pricing,options);frame.slideOutPanel(panel);frame.recalcLayout();});frame.slideInPanel(panel);this._frame.trackPageView('/productbrowser/panel/changevendor');
};zfp_ProductBrowser2.prototype._mergeWeights=function(currency){var sortWeights=[];currency=currency||this._activePricing.currency;jQuery.each(this._activePricing.sortWeights,function(i,
weight){if(weight.currency.code!=currency.code||weight.type==zf_PricingSortWeight.Type.FeaturedProduct){sortWeights.push(weight);}});for(var key in this._categoryWeights){sortWeights.push(new zf_PricingSortWeight(zf_PricingSortWeight.Type.Category,
currency,key,this._categoryWeights[key]));}for(key in this._groupWeights){sortWeights.push(new zf_PricingSortWeight(zf_PricingSortWeight.Type.Group,currency,key,
this._groupWeights[key]));}for(key in this._productWeights){sortWeights.push(new zf_PricingSortWeight(zf_PricingSortWeight.Type.Product,currency,key,this._productWeights[key]));
}this._activePricing.sortWeights=sortWeights;};zfp_ProductBrowser2.Incomplete=function(id,iconList){this._iconList=iconList;;zf_Control.prototype.constructor.call(this,id);};zfp_ProductBrowser2.Incomplete.inherits(zf_Control);
zfp_ProductBrowser2.Incomplete.prototype.init=function(frame,browser){this._frame=frame;this._browser=browser;var self=this;this.$().bind('resizePage',this.closure(this._page_onresize)).toggleClass('pc-pb2-atc',
frame.mode==zfp_Configurator.Mode.AddToCart).toggleClass('pc-pb2-pricelist',frame.mode==zfp_Configurator.Mode.PriceList);this.$('A.pc-pb2-back:first').bind('fastClick',
function(){frame.animate(self,self._fromPage);self._fromPage.onBack&&self._fromPage.onBack();});};zfp_ProductBrowser2.Incomplete.prototype.initUI=function(pricing,incomplete,options,
callback){;this._fromPage=options.fromPage;this.$('A.pc-pb2-back:first').toggle(options.fromPage!=null);var self=this;var frame=this._frame;var map={};$.each(incomplete,
function(){var item=this.item||this.pkg[0];map[item.priceKey.toString()]=item.priceKey;});var priceKeys=[];for(var key in map)priceKeys.push(map[key]);zf_PriceList.load(priceKeys,
this._frame.cart.currency,function(c,p){self._pricing=p;self._initList(incomplete,function(p){self.addToItem(p,self);});self._frame.recalcLayout();callback&&callback();
});};zfp_ProductBrowser2.Incomplete.prototype.addToItem=function(item,fromPage){this._frame.addToPackage(item.pkg||item.item,fromPage,{photos:item.photos});};zfp_ProductBrowser2.Incomplete.prototype._initList=function(items,
callback){var html=[];for(var i=0;i<items.length;i++){var name=items[i].name,icon=items[i].icon,item,photos;if((item=items[i].item)!=null)photos=item.photos.length;
else{var pkg=items[i].pkg;photos=0;$.each(pkg,function(){$.each(this.items,function(){photos+=this.photos.length;});});}var needed=items[i].minPhotos-photos;items[i].extra={image:new Image()};
items[i].extra.image.src=zfp_Configurator.formatIconUrl(icon||'/zf/img/null.gif');html.push('<div class="pc-pb2-incitem pc-font2" style="display:none;">','<div class="pc-pb2-icon pc-bgcolor12 pc-border3">',
'<a href="#">','<img src="" />','</a>','</div>','<div class="pc-pb2-incitem-i pc-font5">','<span>',zf_stdHtmlEncode(name),'</span>');if(needed==1)html.push('<span class="pc-font1 pc-color2">(needs one photo)</span>');
else if(needed>1)html.push('<span class="pc-font1 pc-color2">(',zf_stdFormatString('needs {0} photos',needed),')</span>');html.push('</div>','</div>');}this._iconList.$().html(html.join(''));
var icons=this._iconList.$('DIV.pc-pb2-incitem').hover(function(){$(this).addClass('pc-border4').removeClass('pc-border3');},function(){$(this).addClass('pc-border3').removeClass('pc-border4');
}).each(function(i){$(this).click(function(){callback(items[i]);return false;});});var index=0;function show(){var img=items[index].extra.image;if(!img.complete){$(img).load(show);
return;}var $i=$(icons[index]);var width=img.width;var height=img.height;var boxWidth=$i.find('.pc-pb2-icon:first').width();var boxHeight=$i.find('.pc-pb2-icon:first').height();
if(height!=boxHeight&&width!=boxWidth){var scale=Math.min(boxWidth/width,boxHeight/height);width=Math.min(Math.round(width*scale),boxWidth);height=Math.min(Math.round(height*scale),
boxHeight);}$i.find('IMG').css('left',((boxWidth-width)/2)+'px').css('top',((boxHeight-height)/2)+'px').width(width).height(height).attr('src',img.src);$i.fadeIn(100);
if(++index<icons.length)setTimeout(show,20);}setTimeout(show,50);};zfp_ProductBrowser2.Incomplete.prototype._recalcLayout=function(cx,cy){cx-=80;var icons=this._iconList.$('DIV.pc-pb2-incitem');
var count=icons.length;var cols,rows,cxItem=254,cyItem=304,margin=40;var maxCols=Math.min(Math.floor((cx+margin)/(cxItem+margin)),4);var maxRows=Math.floor((cy+margin)/(cyItem+margin));
if(count==1){cols=rows=1;}else if(count==2){cols=2;rows=1;margin=100;}else if(count==3){cols=3;rows=1;}else if(count==4){cols=rows=2;if(Math.floor((cy+100)/(cyItem+100))>=2)margin=100;
else if(maxRows==1&&maxCols>=4){cols=4;rows=1;}}else{cols=((count%3)==0&&maxCols>=3)?3:maxCols;rows=Math.ceil(count/cols);}var xMargin=cols>1?Math.floor((cx-cxItem*cols)/(cols-1)):Number.MAX_VALUE;
var yMargin=rows>1?(rows<=maxRows?Math.floor((cy-cyItem*rows)/(rows-1)):40):Number.MAX_VALUE;margin=Math.min(xMargin,yMargin,100);var xOffset=40+(cx-cols*(cxItem+margin)+margin)/2;
var yOffset=Math.max(0,2*(cy-rows*(cyItem+margin)+margin)/5);for(var i=0;i<count;i++){var c=i%cols;var r=Math.floor(i/cols);$(icons[i]).css('left',(xOffset+c*(cxItem+margin))+'px').css('top',
(yOffset+r*(cyItem+margin))+'px');}this._iconList.$().height(yOffset==0?rows*(cyItem+margin)-margin:cy);this._iconList.update();};zfp_ProductBrowser2.Incomplete.prototype._page_onresize=function(e,
cx,cy){var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true);-this.$('.pc-pb2-controls:first:visible').outerHeight(true);
this.$().width(cx).height(cy).find('.pc-pb2-main:first').width(cx).height(cyMain);this._iconList.setHeight(cyMain);this._recalcLayout(cx,cyMain);};;zfp_ProductBrowser2.IconList=function(id){;
zf_ScrollView.prototype.constructor.call(this,id);};zfp_ProductBrowser2.IconList.inherits(zf_ScrollView);zfp_ProductBrowser2.IconList.prototype.init=function(metas,options){;var html=[],onselect=options.onselect||$.noop,
customizeMode=!!options.customizeMode,onsort=options.onsort||$.noop,map={},i=0,newFeature;this._showPrices=options.showPrices;for(i=0;i<metas.length;i++){var m=metas[i];
map[m.id]=m;m.extra={image:new Image()};m.extra.image.src=zfp_Configurator.formatIconUrl(m.icon||'/zf/img/null.gif');newFeature=(m.id=='photobooks')?'<span class="new"></span>':'';
html.push('<div class="pc-pb2-icon pc-font2 pc-bgcolor12 pc-border3" style="display:none;"',' data-id="',m.id,'">','<a href="#">','<img src="" />','<span><span>',
zf_stdHtmlEncode(m.name),newFeature,'</span></span>','</a>');if(options.showPrices){var fromPrice=options.getPrice(m);if(fromPrice==='Insufficient photo resolution for this product.'){html.push('<div class="pc-pb2-icon-i">',
'<span class="pc-pb2-error pc-font1 pc-color8">',fromPrice,'</span>','</div>');}else{html.push('<div class="pc-pb2-icon-i">','<a class="pc-pb2-icon-b pc-color11 pc-bgcolor11" href="#">',
options.getPrice(m),'</a>','</div>');}}if(customizeMode)html.push('<div class="pc-pb2-sort-grip"></div>');html.push('</div>');}this.$().html(html.join(''));var icons=this.$('DIV.pc-pb2-icon').hover(function(){$(this).addClass('pc-border4').removeClass('pc-border3');
},function(){$(this).addClass('pc-border3').removeClass('pc-border4');}).each(function(i){$(this).click(function(){onselect(metas[i]);return false;});});var index=0,
self=this;function show(){var img=metas[index].extra.image;if(!img.complete){$(img).load(show);return;}var $i=$(icons[index]).toggleClass('pc-pb2-calibration',metas[index].id=='-calibration');
var width=img.width;var height=img.height;var boxWidth=$i.width();var boxHeight=$i.height();if(height!=boxHeight&&width!=boxWidth){var scale=Math.min(boxWidth/width,
boxHeight/height);width=Math.min(Math.round(width*scale),boxWidth);height=Math.min(Math.round(height*scale),boxHeight);}$i.find('IMG').css('left',((boxWidth-width)/2)+'px').css('top',
((boxHeight-height)/2)+'px').width(width).height(height).attr('src',img.src);$i.fadeIn(100);if(++index<icons.length)setTimeout(show,20);else if(customizeMode)self._customize(map,
onsort);}setTimeout(show,50);};zfp_ProductBrowser2.IconList.prototype.recalcLayout=function(cx,cy){cx-=80;var icons=this.$('DIV.pc-pb2-icon').not('.ui-sortable-helper').not('.pc-pb2-icon-original');
var count=icons.length;var cols,rows,cxItem=210,cyItem=this._showPrices?250:210,margin=40;var maxCols=Math.min(Math.floor((cx+margin)/(cxItem+margin)),4);var maxRows=Math.floor((cy+margin)/(cyItem+margin));
if(count==1){cols=rows=1;}else if(count==2){cols=2;rows=1;margin=100;}else if(count==3){cols=3;rows=1;}else if(count==4){cols=rows=2;if(Math.floor((cy+100)/(cyItem+100))>=2)margin=100;
else if(maxRows==1&&maxCols>=4){cols=4;rows=1;}}else{cols=((count%3)==0&&maxCols>=3)?3:maxCols;rows=Math.ceil(count/cols);}var xMargin=cols>1?Math.floor((cx-cxItem*cols)/(cols-1)):Number.MAX_VALUE;
var yMargin=rows>1?(rows<=maxRows?Math.floor((cy-cyItem*rows)/(rows-1)):40):Number.MAX_VALUE;margin=Math.min(xMargin,yMargin,100);var xOffset=40+(cx-cols*(cxItem+margin)+margin)/2;
var yOffset=Math.max(0,2*(cy-rows*(cyItem+margin)+margin)/5);for(var i=0;i<count;i++){var c=i%cols;var r=Math.floor(i/cols);$(icons[i]).css('left',(xOffset+c*(cxItem+margin))+'px').css('top',
(yOffset+r*(cyItem+margin))+'px');}this.$().height(yOffset==0?rows*(cyItem+margin)-margin:cy).css('position','relative').css('overflow','hidden');this.update();};
zfp_ProductBrowser2.IconList.prototype.onBack=function(){this._frame.trackPageView('/productbrowser/iconlist');};zfp_ProductBrowser2.IconList.prototype._customize=function(map,onsort){var self=this;var options={items:'DIV.pc-pb2-icon',
handle:'DIV.pc-pb2-sort-grip:first',distance:5,tolerance:'pointer',cursor:'move',helper:'clone',axis:'x,y',revert:200,start:function(event,ui){$(ui.placeholder).removeClass('pc-border4').addClass('pc-border3').css('left',
ui.originalPosition.left+'px').css('top',ui.originalPosition.top+'px').css('visibility','visible').append('<div class="pc-pb2-sort-placeholder"></div>');$(ui.item).addClass('pc-pb2-icon-original');
},stop:function(event,ui){$(ui.item).removeClass('pc-pb2-icon-original');self.recalcLayout(self.$().width(),self.$().height());$(ui.item).append('<span class="pc-pb2-drop-border"></span>').find('.pc-pb2-drop-border').css({borderBottomColor:'#FFBB44',
borderTopColor:'#FFBB44',borderLeftColor:'#FFBB44',borderRightColor:'#FFBB44'}).animate({borderBottomColor:'#F0F0F0',borderTopColor:'#F0F0F0',borderLeftColor:'#F0F0F0',
borderRightColor:'#F0F0F0'},2000,function(){$(this).remove();});},sort:function(event,ui){var yHelper=$(ui.helper).offset().top,cyHelper=$(ui.helper).height(),yView=self.$().offset().top,
cyView=self.$().height();self.ensureVisible(yHelper-yView-12,Math.min(cyHelper+12,yView+cyView-yHelper)+12,null,function(){self.$().sortable('refreshPositions');
});},change:function(event,ui){self.recalcLayout(self.$().width(),self.$().height());},update:function(event,ui){var metas=[];self.$('.pc-pb2-icon').each(function(){metas.push(map[$(this).attr('data-id')]);
});onsort(metas);}};this.$().disableSelection().sortable(options).find('DIV.pc-pb2-sort-grip').hover(function(){$(this).closest('DIV.pc-pb2-icon').append('<div class="pc-pb2-sort-border"><span></span></div>');
},function(){$(this).closest('DIV.pc-pb2-icon').find('DIV.pc-pb2-sort-border').remove();});};;zfp_ProductBrowser2.Catalog=function(id){;zf_ScrollView.prototype.constructor.call(this,
id);};zfp_ProductBrowser2.Catalog.inherits(zf_ScrollView);zfp_ProductBrowser2.Catalog.prototype.init=function(categories,callback){;var html=[];var list=[];categories=[].concat(categories);categories.sort(zf_BaseMeta.compare);
for(var i=0;i<categories.length;i++){var cat=categories[i],subcategories;html.push('<div class="pc-pb2-catblock" style="visibility:hidden;">','<a class="pc-pb2-cat pc-font2 pc-color2" data-catid="',
list.length,'">',zf_stdHtmlEncode(cat.name),'</a>');list.push(cat);subcategories=$.grep(cat.subcategories,function(c){return c.data['all']==null;});subcategories.sort(zf_BaseMeta.compare);
if(subcategories.length>1){for(var j=0;j<subcategories.length;j++){var subcat=subcategories[j];html.push('<br/>','<a class="pc-pb2-subcat pc-font1 pc-color1" data-catid="',
list.length,'">',zf_stdHtmlEncode(subcat.name),'</a>');list.push(subcat);}}html.push('</div>');}this.$().html(html.join(''));this.$('A').click(function(){var idx=parseInt($(this).attr('data-catid'),
10);callback(list[idx]);return false;});var index=0;var blocks=this.$('.pc-pb2-catblock');function show(){$(blocks[index]).hide().css('visibility','inherit').fadeIn(100);
if(++index<blocks.length)setTimeout(show,20);}setTimeout(show,50);};zfp_ProductBrowser2.Catalog.prototype.recalcLayout=function(cx,cy){cx-=80;var blocks=this.$('.pc-pb2-catblock');
var count=blocks.length;var heights=[];var top=this.$().closest('.pc-pb2-main');if(top.css('display')=='none'&&$(blocks[0]).data('--zf-height')==null){top.css('visibility',
'hidden').show();if(top.is(':visible')){blocks.each(function(i){var b=$(this),h;if((h=b.height())>0)b.data('--zf-height',heights[i]=h);});}top.hide().css('visibility',
'inherit');}if(heights.length==0){blocks.each(function(i){var b=$(this),h;if((h=b.data('--zf-height'))!=null)heights[i]=h;else if((h=b.height())>0)b.data('--zf-height',
heights[i]=h);});}if(heights.length==0)return;var cxMargin=40;var cyMargin=24;var cxItem=190;var cols=4;if(blocks.length<=4)cols=blocks.length;cxMargin=cols>1?Math.min(100,
Math.floor((cx-cxItem*cols)/(cols-1))):Number.MAX_VALUE;var offset=40+(cx-cols*(cxItem+cxMargin)+cxMargin)/2;var height=0;if(blocks.length==cols){blocks.each(function(i){$(this).css('left',
offset+i*(cxItem+cxMargin)+'px').css('top','0px');if(height<heights[i])height=heights[i];});}else{var total=(blocks.length-1)*cyMargin;for(var i=0;i<blocks.length;
i++)total+=heights[i];var idealHeight=Math.floor(total/cols);var columns=[];var ib=0;for(var col=0;col<cols&&ib<blocks.length;col++){if(columns[col]==null)columns[col]=-cyMargin;
while(ib<blocks.length){if(columns[col]+cyMargin+heights[ib]>idealHeight*1.2)break;$(blocks[ib]).css('left',offset+col*(cxItem+cxMargin)+'px').css('top',columns[col]+cyMargin+'px');
columns[col]+=cyMargin+heights[ib];++ib;if(columns[col]>=idealHeight)break;}}col=0;while(ib<blocks.length){$(blocks[ib]).css('left',offset+col*(cxItem+cxMargin)+'px').css('top',
columns[col]+cyMargin+'px');columns[col]+=cyMargin+heights[ib];++ib;col=(col+1)%cols;}for(col=0;col<cols;col++){if(height<columns[col])height=columns[col];}}if(height<cy){offset=Math.floor(2*(cy-height)/5);
$(blocks).each(function(){var b=$(this);b.css('top',parseInt(b.css('top'),10)+offset+'px');});height+=offset;}this.$().height(height);this.update();};;zfp_ProductBrowser2.Classic=function(id,
productList,productInfo){this._productList=productList;this._productInfo=productInfo;;zf_Control.prototype.constructor.call(this,id);};zfp_ProductBrowser2.Classic.inherits(zf_Control);
zfp_ProductBrowser2.Classic.prototype.init=function(frame,browser){this._frame=frame;this._browser=browser;this._fromPage=browser;this._designGroupList=browser.designGroupList;this._incompleteList=browser.incompleteList;
var self=this;this.$().bind('resizePage',this.closure(this._page_onresize)).toggleClass('pc-pb2-atc',frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder).toggleClass('pc-pb2-pricelist',
frame.mode==zfp_Configurator.Mode.PriceList);this.$('A.pc-pb2-back:first').bind('fastClick',function(){if(frame.mode==zfp_Configurator.Mode.PriceList)browser.saveItems(self._items);
frame.animate(self,self._fromPage);self._fromPage.onBack&&self._fromPage.onBack();});var footer=this.$('.pc-pb2-footer:first');footer.find('A:last').bind('button-click',
function(){frame.hide();});if(frame.mode==zfp_Configurator.Mode.PriceList){footer.find('A.pc-pb2-add').bind('button-click',browser.closure(browser.addProducts));
this.$('.pc-pb2-batch:first A:first').bind('fastClick',this.closure(this._all_onclick));this.$('.pc-pb2-batch:first A:last').bind('fastClick',this.closure(this._none_onclick));
}if(frame.mode==zfp_Configurator.Mode.Customize){footer.find('A.pc-pb2-save').bind('fastClick',function(){frame.saveWeights(self._pricing.sortWeights);});footer.find('A.pc-pb2-reset').bind('fastClick',
function(){browser.resetCustomizations();});}this.$('.pc-pb2-filter:first A:first').bind('fastClick',browser.closure(browser.changeFilter));this.$('.pc-pb2-vendor:first A:first').bind('fastClick',
browser.closure(browser.changeVendor));this._productInfo.init(frame);};zfp_ProductBrowser2.Classic.prototype.initUI=function(pricing,category,options){;;this._pricing=pricing;this._showVendors=options.showVendors;
this._vendorId=options.vendorId;this._customFilter=options.customFilter;this._items=options.items||{};this._quantity=1;this._ews=null;this._options=options;this._fromPage=options.fromPage||this._browser;
this._selected=0;for(var key in this._items)this._selected+=(this._items[key].quantity>0?1:0);this._root=(category==pricing.root||category.parent==pricing.root||options.noSiblings)?category:category.parent;
this._showBestFit=false;this._bestFit=[];var photos=this._frame.mode==zfp_Configurator.Mode.AddToCart?this._frame.photos:[];this._initFilter(pricing);var isVideo=options.sourceTypes==zf_SourceType.Video;
var count=0;for(var i=0;i<photos.length;i++){var p=photos[i];count+=(!!p.video==isVideo)?1:0;}var formatHExtra=isVideo?'{0} Videos':'{0} Photos';this.$('.pc-page-hdr-extra:first').toggle(count>1).find('SPAN:first').text(zf_stdFormatString(formatHExtra,
count));this.$().toggleClass('pc-pb2-noback',options.fromPage==null);this.$('A.pc-pb2-back:first').toggle(options.fromPage!=null);if(!pricing.isFlattened&&pricing.showBestFit&&photos.length==1&&!options.noSiblings){var bf=this._frame.getBestFitProducts(this._root,
photos[0]).length;this._showBestFit=bf>0&&bf<this._root.products.length;}var cart=this._frame.cart;var filterBySourceType=function(ary,sourceTypes){var res=[];for(var j=0;
j<ary.length;j++){if((ary[j].sourceType&sourceTypes)!=0)res.push(ary[j]);}return res;};var incompleteProducts=filterBySourceType(cart.incompleteProducts,this._options.sourceTypes);
var multiImageProducts=filterBySourceType(cart.multiImageProducts,this._options.sourceTypes);this._inProgress=[].concat(incompleteProducts).concat(multiImageProducts);
var formatIncomplete=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that require additional videos. <a{0}>Add these videos</a> to those products now, or select a new product below.':'You have products in your cart that require additional photos. <a{0}>Add these photos</a> to those products now, or select a new product below.';
var formatMultiImage=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that could use additional videos. If you’d like, you can <a{0}>add these videos</a> to those products now, or select a new product below.':'You have products in your cart that could use additional photos. If you’d like, you can <a{0}>add these photos</a> to those products now, or select a new product below.';
this.$('.pc-pb2-incomplete:first').toggle(this._inProgress.length>0).html(zf_stdFormatString(incompleteProducts.length>0?formatIncomplete:formatMultiImage,' href="#"')).find('A:first').click(this.closure(this._incomplete_onclick));
if(category!=this._root)this._category=category;else if(category.all!=null)this._category=category.all;else if(category.subcategories.length>0)this._category=category.subcategories[0];
else this._category=category;var product=options.product;if(product!=null){var pc=$.lookup(this._root.subcategories,function(c){return $.inArray(c.id,product.categories)!=-1;
});if(pc!=null)this._category=pc;}var subcats=$.grep(this._root.subcategories,function(c){return c.data['all']==null;});if(!pricing.isFlattened&&(subcats.length>1||this._showBestFit)){this._initCategoryList();
this.$().removeClass('pc-pb2-noscl');}else{this._initProductList(this._root,false,false);this.$().addClass('pc-pb2-noscl');}if(product!=null){productNode=$('.pc-pb2-product[data="'+product.vendorId+'_'+product.id+'"]',
this._productList.getContentNode());if(productNode!=null)zf_stdDeferCall(null,function(){productNode.mousedown();},null);}this.$('.pc-pb2-add').enableButton(this._selected>0);
;};zfp_ProductBrowser2.Classic.prototype._initFilter=function(pricing){var zone=zfp_Configurator.getShippingZone(pricing);var showSelector=this._frame.mode==zfp_Configurator.Mode.AddToCart||(this._frame.mode==zfp_Configurator.Mode.Customize&&pricing.alternateCurrencies.length>0);
if(showSelector){this.$('.pc-pb2-filter:first').show().find('SPAN:first').find('IMG:first').attr('class','pc-flag pc-flag-'+zone.code).end().find('A:first').text(zone.shortDisplayName+' ('+pricing.currency.code+')');
}else{this.$('.pc-pb2-filter:first').hide();zone=null;}this.$('.pc-pb2-currency:first').toggle(this._frame.mode==zfp_Configurator.Mode.PriceList).find('SPAN').text(pricing.currency.pluralName);
var vendorId=this._vendorId;var showVendors=this._showVendors&&(this._frame.mode==zfp_Configurator.Mode.AddToCart&&this._frame._defaultList||this._frame.mode==zfp_Configurator.Mode.PriceList);
if(showVendors){var vendorName=vendorId?zf_VendorMeta.cached(vendorId).name:'All Vendors';this.$('.pc-pb2-vendor:first').show().find('A:first').text(vendorName);
}else this.$('.pc-pb2-vendor:first').hide();};zfp_ProductBrowser2.Classic.prototype._initCategoryList=function(){var weights=this._pricing.getWeights(zf_PricingSortWeight.Type.Category);
var subcategories=[].concat(this._root.subcategories);if(this._showBestFit){subcategories.push($.extend(new zf_BaseMeta(),{id:this._root.data['best-fit'],name:'Best Fit',
index:-100}));}subcategories.sort(function(a,b){var ai=a.data['all']!=null?-2:a.index,bi=b.data['all']!=null?-2:b.index,wa,wb;if(ai>=0&&bi>=0){wa=weights[a.id];wb=weights[b.id];
if(wa==null)wa=Number.MAX_VALUE;if(wb==null)wb=Number.MAX_VALUE;if(wa!=wb)return wa-wb;}return ai-bi;});var html=[],photos=this._frame.photos,customizeMode=this._frame.mode==zfp_Configurator.Mode.Customize;
for(var i=0;i<subcategories.length;i++){var subcat=subcategories[i];html.push('<a class="pc-pb2-subcat" data-catid="',subcat.id,'">',zf_stdHtmlEncode(subcat.name));
if(customizeMode)html.push('<span class="pc-pb2-sort-grip ui-sortable-handle"></span>');html.push('</a>');}var scl=this.$('.pc-pb2-scl:first');scl.html(html.join(''));
var self=this;scl.find('A').button({className:'pc-pb2-subcat',decorations:{normal:'pc-color1 pc-bgcolor1',hover:'pc-color2 pc-bgcolor7',selected:'pc-color1 pc-bgcolor9',
'selected-hover':'pc-color2 pc-bgcolor9'}}).bind('button-click',function(){scl.find('A').selectButton(false);var catId=$(this).selectButton(true).attr('data-catid');
var category=$.lookup(self._root.subcategories,function(s){return s.id==catId;});if(catId==self._root.data['best-fit'])self._initProductList(self._root,true,false);
else if(category==self._root.all)self._initProductList(self._root,false,false);else self._initProductList(category,false,false);});scl.find('A[data-catid="'+this._category.id+'"]').triggerHandler('button-click');
if(customizeMode)this._customizeCategoryList(weights);};zfp_ProductBrowser2.Classic.prototype._customizeCategoryList=function(weights){var scl=this.$('.pc-pb2-scl:first'),self=this;
var options={items:'A.pc-pb2-subcat',handle:'SPAN.pc-pb2-sort-grip:first',distance:5,tolerance:'pointer',cursor:'move',helper:'clone',axis:'y',revert:200,start:function(event,
ui){$(ui.item).find('SPAN.pc-pb2-drop-border').stop(true,true);$(ui.placeholder).removeClass('pc-bgcolor9 pc-bgcolor7').addClass('pc-bgcolor1').css('visibility',
'visible').append('<div class="pc-pb2-sort-placeholder"></div>').height(2*$(ui.item).height()+10);$(ui.helper).removeClass('pc-color1 pc-bgcolor9 pc-bgcolor7').addClass('pc-color2 pc-bgcolor1');
},stop:function(event,ui){$(ui.item).append('<span class="pc-pb2-drop-border"></span>').find('.pc-pb2-drop-border').css({borderBottomColor:'#FFBB44',borderTopColor:'#FFBB44',
borderLeftColor:'#FFBB44',borderRightColor:'#FFBB44'}).animate({borderBottomColor:'#F0F0F0',borderTopColor:'#F0F0F0',borderLeftColor:'#F0F0F0',borderRightColor:'#F0F0F0'},
2000,function(){$(this).remove();});},update:function(event,ui){scl.find('.pc-pb2-subcat').each(function(i){weights[$(this).attr('data-catid')]=i;});self._pricing.mergeWeights(zf_PricingSortWeight.Type.Category,
weights);scl.find('A.pc-pb2-subcat-s').triggerHandler('button-click');}};scl.disableSelection().sortable(options).find('SPAN.pc-pb2-sort-grip').hover(function(){$(this).closest('A').append('<span class="pc-pb2-sort-border"><span></span></span>');
},function(){$(this).closest('A').find('SPAN.pc-pb2-sort-border').remove();});};zfp_ProductBrowser2.Classic.prototype._initProductList=function(category,bestFitOnly,includeInProgress){;
var photos=this._frame.photos;;var products=bestFitOnly?this._frame.getBestFitProducts(category,photos[0]):[].concat(category.products).concat(category.packages);
var fitProducts=[];var pricing=this._pricing;var showBestFit=false;if(this._showBestFit&&!bestFitOnly){fitProducts=this._frame.getBestFitProducts(category,photos[0]);
;if(fitProducts.length>0&&fitProducts.length<products.length){for(var i=0;i<fitProducts.lenght;i++)fitProducts[i].__pb_bestFit=true;for(i=products.length-1;i>=0;
i--){if(products[i].__pb_bestFit){delete products[i].__pb_bestFit;products.splice(i,1);}};showBestFit=true;}else fitProducts=[];}var html=['<div>'];if(this._showVendors){var vendors={};
for(var vid in pricing.vendors){var vendor=pricing.vendors[vid];vendors[vendor.masqueradeAs!=null?vendor.masqueradeAs:vid]=true;}for(vid in vendors){var filter=function(p){var v=pricing.vendors[p.vendorId];
return v.id==vid||v.masqueradeAs==vid;};var pp=$.grep(products,filter);var fp=$.grep(fitProducts,filter);if(pp.length>0||fp.length>0)this._addVendorSection(html,
category.id,vid,pp,fp,showBestFit);}}else{this._addVendorSection(html,category.id,null,products,fitProducts,showBestFit);}html.push('</div>');this._productList.getContentNode().innerHTML=html.join("");
$('H5:first',this._productList.getContentNode()).addClass('pc-pb2-first');$('H6:first',this._productList.getContentNode()).addClass('pc-pb2-first');this._productList.update();
this._setEmptyInfo();if(this._frame.mode==zfp_Configurator.Mode.Customize){this._customizeProductList(category);}else{products=$('.pc-pb2-product',this._productList.getContentNode());
products.hover(this.closure(this._product_onmouseover),this.closure(this._product_onmouseout));if(this._frame.mode==zfp_Configurator.Mode.PriceList)products.mousedown(this.closure(this._pricingProduct_onclick));
else products.mousedown(this.closure(this._product_onclick)).click(false);var onclick=null;if(this._frame.mode==zfp_Configurator.Mode.PriceList)onclick=this.closure(this._select_onclick);
products.each(function(i){if(this.previousSibling==null)$(this).addClass('pc-pb2-first');if(onclick!=null)$('.pc-pb2-select INPUT',this).click(onclick);});}};zfp_ProductBrowser2.Classic.prototype._customizeProductList=function(category){var list=this.$('.pc-pb2-products'),
sview=this._productList,self=this,pricing=this._pricing;var options={items:'DIV.pc-pb2-product',distance:5,tolerance:'pointer',cursor:'move',helper:'clone',axis:'y',
opacity:0.6,revert:200,start:function(event,ui){$(ui.item).find('SPAN.pc-pb2-drop-border').remove();$(ui.helper).find('SPAN.pc-pb2-drop-border').remove();$(ui.placeholder).css('visibility',
'visible').append('<div class="pc-pb2-sort-placeholder"></div>').height(2*$(ui.item).height()+10);},stop:function(event,ui){$('BODY').css('cursor','');var item=$(ui.item);
var yItem=item.offset().top,cyItem=item.height(),yView=sview.$().offset().top;sview.ensureVisible(yItem-yView-12,cyItem+24,'slow',function(){item.append('<span class="pc-pb2-drop-border"></span>').find('.pc-pb2-drop-border').css({borderBottomColor:'#FFBB44',
borderTopColor:'#FFBB44',borderLeftColor:'#FFBB44',borderRightColor:'#FFBB44'}).animate({borderBottomColor:'#F0F0F0',borderTopColor:'#F0F0F0',borderLeftColor:'#F0F0F0',
borderRightColor:'#F0F0F0'},2000,function(){$(this).remove();});});},over:function(event,ui){$('BODY').css('cursor','move');$(ui.helper).find('SPAN.pc-pb2-sort-border').css('cursor',
'move');list.sortable({cursor:'move'});},out:function(event,ui){$('BODY').css('cursor','not-allowed');$(ui.helper).find('SPAN.pc-pb2-sort-border').css('cursor','not-allowed');
list.sortable({cursor:'not-allowed'});},sort:function(event,ui){var yHelper=$(ui.helper).offset().top,cyHelper=$(ui.helper).height(),yView=sview.$().offset().top,
cyView=sview.$().height();sview.ensureVisible(yHelper-yView-12,Math.min(cyHelper+12,yView+cyView-yHelper)+12,null,function(){list.sortable('refreshPositions');});
},update:function(event,ui){var weights=pricing.getWeights(zf_PricingSortWeight.Type.Product);$(ui.item).closest('.pc-pb2-products').find('.pc-pb2-product').each(function(i){var item=self._getPurchaseItem($(this).attr('data')),
product;if(item.packageId!=null)product=pricing.findPackage(item.vendorId,item.packageId);else product=pricing.findProduct(item.vendorId,item.productId);weights[zf_PricingSortWeight.getProductKey(category.id,
product)]=i;});pricing.mergeWeights(zf_PricingSortWeight.Type.Product,weights);}};list.disableSelection().sortable(options).find('.pc-pb2-product').hover(function(){$(this).css('cursor',
'move').find('SPAN.pc-pb2-sort-border').show();},function(){$(this).css('cursor','default').find('SPAN.pc-pb2-sort-border').hide();}).append('<span class="pc-pb2-sort-border"><span></span></span>').find('SPAN.pc-pb2-sort-border').hide();
};zfp_ProductBrowser2.Classic.prototype._createProductBlock=function(productNode){var item=this._getPurchaseItem(productNode.attr('data')),self=this,frame=this._frame,mode=frame.mode,
product;if(item.packageId!=null)product=this._pricing.findPackage(item.vendorId,item.packageId);else product=this._pricing.findProduct(item.vendorId,item.productId);
var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=product.meta();var multiplier=productMeta.isSingleImage?item.printable:Math.min(item.printable,
1);var html=['<div class="pc-pb2-product-i pc-font1 pc-color1">'];var errorNode=productNode.find('.pc-pb-error:first');if(errorNode.length>0)html.push('<div class="pc-pb2-pi-error pc-color8">',
errorNode.html(),'</div>');if(item.packageId){this._createPackageInfo(html,item.vendorId,item.packageId);}if(!item.packageId){var optionSetMeta=vendorMeta.optionSets[productMeta.optionSetId],
omap={};for(var id in product.options){var o=product.options[id],m=o.meta(),n=m.data['paper-label']||m.altName,om=omap[n];om&&om.price.customerPrice!=o.price.customerPrice&&(om.__multi=true);
(!om||om.price.customerPrice>o.price.customerPrice)&&(omap[n]=o);}var options=zfp_Configurator.makeUiList(omap,zf_PriceList.compareMeta);if(optionSetMeta.options.length>1){for(var i=0;
i<options.length;i++){o=options[i];id=this.id+'-o-'+o.id;m=o.meta();html.push('<div class="pc-pb2-pi-line">');if(i==0){html.push('<span class="pc-pb2-lbl">',zf_stdHtmlEncode(optionSetMeta.name),
':</span>');}html.push('<input type="radio" name="',this.id,'-opt" value="',o.id,'"',' class="pc-pb2-radio" id="',id,'"/>','<label for="',id,'">',m.data['paper-label']||m.altName,
' &ndash; ',zf_stdFormatString(o.__multi?'from {0}':'{0}',zf_stdFormatMoney(o.price.customerPrice)),'</label>','</div>');}}}if(item.packageId||!optionSetMeta.isDigital){html.push('<div class="pc-pb2-pi-line pc-pb-pi-qty">',
'<span class="pc-pb2-lbl">Quantity:</span>',zf_EditWithSpin.createHtml(this.id+'-ews',false,this._quantity));if(multiplier>1)html.push(' x <strong class="pc-font2">',
multiplier,'</strong>');html.push('</div>');}else{html.push('<div class="pc-pb2-pi-line pc-pb2-pi-noqty" style="display:none;"></div>');this._quantity=1;}html.push('<div class="pc-pb2-pi-line pc-pb2-pi-add">',
'<a class="pc-button button-font1" href="#">',productMeta.isSingleImage&&!productMeta.isTemplated?(mode==zfp_Configurator.Mode.AddToOrder?'Add to Order':'Add to Cart'):'Continue',
'</a>','</div>');html.push('<div class="pc-pb2-pi-subtotal pc-font7"></div>');html.push('</div>');productNode.find('.pc-pb2-product-o').append(html.join(''));productNode.find('.pc-pb2-pi-add:first A').button(zfp_Configurator._buttonOptions).bind('button-click',
function(){if(self._ews)self._quantity=self._ews.val();if(productMeta.isTemplated){var options={fromPage:self,designs:item.designs,product:product,optionId:self._optionId};
if(self._designGroupList.initUI(self._pricing,self._root,options)){frame.animate(self,self._designGroupList);var cat='unknown';if(options.categoryId){cat=options.categoryId;
}else if(options.product.categories&&options.product.categories.length===1){cat=options.product.categories[0];}frame.trackPageView('/productbrowser/designgrouplist?category='+cat);
}}else{frame.buy(item.vendorId,item.productId,self._optionId,null,self._quantity,self);}});if(item.packageId||!optionSetMeta.isDigital){var ews=this._ews=new zf_EditWithSpin(this.id+'-ews');
ews.minValue=1;ews.onchange=function(val){self._quantity=val;var price=item.packageId?item.price:product.options[self._optionId].price.customerPrice;price*=Math.max(multiplier,
1)*val;productNode.find('.pc-pb2-pi-subtotal').text(zf_stdFormatMoney(price,frame.cart.currency));productNode.find('.pc-pb2-pi-add:first A').enableButton(val>0&&multiplier>0);
};}else{this._ews=null;price=options[0].price.customerPrice*Math.max(multiplier,1);productNode.find('.pc-pb2-pi-subtotal').text(zf_stdFormatMoney(price,frame.cart.currency));
productNode.find('.pc-pb2-pi-add:first A').enableButton(multiplier>0);}if(item.packageId==null){(!this._optionId||this._optionId&&!product.options[this._optionId])&&(this._optionId=options[0].id);
if(optionSetMeta.options.length>1){var pnInput=productNode.find('INPUT[value="'+this._optionId+'"]');if(pnInput&&pnInput.length>0){pnInput[0].checked=true;}productNode.find('INPUT.pc-pb2-radio').showIf(options.length>1).click(function(e){self._optionId=this.value;
self._ews.onchange(self._quantity);e.stopPropagation();});}productNode.find('.pc-pb2-pi-qty').showIf(!optionSetMeta.isDigital);productNode.find('.pc-pb2-pi-noqty').showIf(optionSetMeta.isDigital);
}else this._optionId=null;if(this._ews){this._ews.val(this._quantity);this._ews.onchange(this._quantity);}};zfp_ProductBrowser2.Classic.prototype._createInProgressBlock=function(productNode){var item=this._inProgress[parseInt(productNode.attr('data'),
10)];var html=['<div class="pc-pb2-product-i pc-font1 pc-color1">'];var have=0;if(item.pkg){$.each(item.pkg,function(){$.each(this.items,function(){have+=this.photos.length;
});});}else have=item.item.photos.length;var needed=item.minPhotos-have;if(needed>0){html.push('<div class="pc-pb2-pi-line pc-pb2-pi-more pc-font5">',zf_stdFormatString(needed==1?'One more photo needed':'{0} more photos needed',
needed),'</div>');}html.push('<div class="pc-pb2-pi-line pc-pb2-pi-add">','<span class="pc-font1">Click Continue to add more photos to this product in your Cart</span>',
'<a class="pc-button button-font1" href="#">','Continue','</a>','</div>','</div>');productNode.find('.pc-pb2-product-o').append(html.join(''));var self=this;var frame=this._frame;
productNode.find('.pc-pb-pi-add:first A').button(zfp_Configurator._buttonOptions).bind('button-click',function(){frame.addToPackage(item.pkg||item.item,self);});
};zfp_ProductBrowser2.Classic.prototype._createPackageInfo=function(html,vendorId,packageId){;;;var pkgMeta=this._pricing.findPackage(vendorId,packageId).meta();html.push('<div class="pc-pb2-pi-pkginfo pc-border7">');
if(pkgMeta.isSingleImage){html.push('<div>Each selected photo is included as:</div>');}else{var maxPhotos=0;$.each(pkgMeta.items,function(ix,item){var vendorMeta=zf_VendorMeta.cached(item.vendorId);
var productMeta=vendorMeta.products[item.productId];if(!vendorMeta.optionSets[productMeta.optionSetId].retouching){var productPhotos=0;if(productMeta.images)$.each(productMeta.images,
function(id,i){productPhotos+=i.maxImageCount;});else productPhotos=productMeta.maxImageCount;maxPhotos+=productPhotos*item.quantity;}});html.push('<div>',zf_stdFormatString('Select up to {0} different photos for:',
maxPhotos),'</div>');}$.each(pkgMeta.items,function(ix,item){var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=vendorMeta.products[item.productId];
if(!vendorMeta.optionSets[productMeta.optionSetId].retouching){html.push('<div>','<span>',item.quantity,' &ndash;</span>',productMeta.longName,'</div>');}});html.push('</div>');
};zfp_ProductBrowser2.Classic.prototype._updateProductBlock=function(optionId,quantity){this._optionId=optionId;this._quantity=quantity;$('.pc-pb2-product-e INPUT[value="'+optionId+'"]:eq(0)',
this._productList.getContentNode()).each(function(){this.checked=true;});if(this._ews){this._ews.val(quantity);this._ews.onchange(quantity);}};zfp_ProductBrowser2.Classic.prototype._showProductInfo=function(vendorId,
productId,existingProduct){;;var self=this,frame=this._frame,product;if(!existingProduct&&(frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder)){var printable=0;
if(!!(product=this._pricing.findProduct(vendorId,productId)))printable=this._getPurchaseItem(vendorId+'_'+productId).printable;this._productInfo.onpreview=function(info){frame.showPreview(info,
self.closure(self._updateProductBlock),product,self._optionId,self._quantity,printable);};}else{this._productInfo.onpreview=function(info){frame.showPreview(info);
};}this._productInfo.showProductInfo(vendorId,productId,null,null,product,frame.photos);};zfp_ProductBrowser2.Classic.prototype._showPackageInfo=function(vendorId,packageId,existingProduct){;
;var self=this,frame=this._frame;if(!existingProduct&&(frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder)){var printable=0,
product;if(!!(product=this._pricing.findPackage(vendorId,packageId)))printable=this._getPurchaseItem(vendorId+'_'+packageId).printable;this._productInfo.onpreview=function(info){frame.showPreview(info,
self.closure(self._updateProductBlock),product,self._optionId,self._quantity,printable);};}else{this._productInfo.onpreview=function(info){frame.showPreview(info);
};}this._productInfo.showPackageInfo(vendorId,packageId);};zfp_ProductBrowser2.Classic.prototype._setEmptyInfo=function(){var message;var photos;switch(this._frame.mode){case zfp_Configurator.Mode.PriceList:message='Select products<br/> from the list to add<br/> to the Price List';
break;case zfp_Configurator.Mode.Customize:message='Price List Preview: <br/> Reorder items <br/> by dragging';break;case zfp_Configurator.Mode.AddToOrder:message='Begin by selecting a product from the list';
break;default:message='Begin by selecting a product from the list';if((photos=this._frame.photos.length)>1){var format=this._options.sourceTypes==zf_SourceType.Image?'{0} photos selected':'{0} videos selected';
message='<div class="pc-color1">'+zf_stdFormatString(format,photos)+'</div>'+message;}break;}this._productInfo.setEmpty(message);};zfp_ProductBrowser2.Classic.prototype._addVendorSection=function(html,
categoryId,vendorId,products,fitProducts,forceGroup){var pricing=this._pricing;html.push('<div>');if(vendorId){var vendor=pricing.vendors[vendorId];html.push('<h5 class="pc-font2 pc-color4">',
zf_stdHtmlEncode(vendor.meta().name),'<span class="pc-font1 pc-color1">',vendor.meta().longName,'</span>','</h5>');}var comparer=pricing.getProductComparer(categoryId);
if(fitProducts.length){fitProducts.sort(comparer);html.push('<h6 class="pc-color6 pc-bgcolor6 pc-border6 pc-font1">','Best Fit','</h6>');html.push('<div class="pc-pb2-products">');
for(var i=0;i<fitProducts.length;i++)this._addProductRow(html,fitProducts[i]);html.push('</div>');}products.sort(comparer);var subcat=(fitProducts.length>0||forceGroup||comparer.multiGroup)?null:pricing.getProductCategory(categoryId,
products[0]);html.push('<div class="pc-pb2-products">');for(i=0;i<products.length;i++){var product=products[i];var s=pricing.getProductCategory(categoryId,product);
if(!pricing.isFlattened&&s!=subcat){subcat=s;html.push('</div><div class="pc-pb2-products">');html.push('<h6 class="pc-color6 pc-bgcolor6 pc-border6 pc-font1">',
subcat.longName,'</h6>');}this._addProductRow(html,product);}html.push('</div></div>');};zfp_ProductBrowser2.Classic.prototype._addProductRow=function(html,product){;;;var vendorMeta=zf_VendorMeta.cached(product.vendorId),
productMeta=product.meta(),isPackage=(productMeta instanceof zf_VendorMeta.Package),isDigital=!isPackage&&vendorMeta.optionSets[product.optionSetId].isDigital,isPriceList=this._frame.mode==zfp_Configurator.Mode.PriceList,
isAddToOrder=this._frame.mode==zfp_Configurator.Mode.AddToOrder,isTemplated=productMeta.isTemplated,item=this._getPurchaseItem(product),count=isAddToOrder?0:this._frame.photos.length,
description=[productMeta.longName];if(isDigital){description.push('<br />');description.push(zf_stdHtmlEncode(vendorMeta.licenses[productMeta.licenseId].name));if(count==1){if(productMeta.sourceTypeIs(zf_SourceType.Image)&&item.printable>0){var size=this._frame.getDownloadResolution(product,
this._frame.photos[0]);if(size!=null){description.push(', <span class="pc-pb2-resolution">',zf_stdFormatString('{0} x {1} px',size.cx,size.cy),'</span>');}}if(productMeta.sourceTypeIs(zf_SourceType.Video)&&item.printable>0){var quality=zf_VideoQuality.getProcessingMethod(productMeta.videoQuality);
if(quality!=null){description.push(', <span class="pc-pb2-quality">',quality.format,'</span>');}}}}if(isTemplated&&isPriceList){var templateCount=this._pricing.findTemplates(productMeta.getTemplateProductId()).length;
if(templateCount==1)description.push(' <strong>(1 template design available)</strong>');else{description.push(' <strong>(',zf_stdFormatString('{0} template designs available',
templateCount),')</strong>');}}var priceFormat,warning=null;if(isDigital)priceFormat="<strong>{0}</strong>";else if(this._frame.mode==zfp_Configurator.Mode.PriceList)priceFormat="starting at {0}";
else priceFormat="<strong>{0} each</strong>";var isVideo;if(!isPackage)isVideo=productMeta.sourceType==zf_SourceType.Video;else{var sourceTypes=0;$.each(productMeta.items,
function(ix,item){var vm=zf_VendorMeta.cached(item.vendorId);var pm=vm.products[item.productId];sourceTypes|=pm.sourceType;});isVideo=sourceTypes==zf_SourceType.Video;
}if(item.error!=null)warning=item.error;else if(count==1&&item.printable==0)warning=isVideo?"Insufficient video quality for this product.":"Insufficient photo resolution for this product.";
else if(count>1&&item.printable<count){var errorAll;var errorSome;if(isVideo){errorAll="The selected videos have insufficient quality for this product.";errorSome="This product is only available for {0} video(s) out of {1} selected.";
}else{errorAll="The selected photos have insufficient resolution for this product.";errorSome="This product is only available for {0} photo(s) out of {1} selected.";
}warning=item.printable==0?errorAll:zf_stdFormatString(errorSome,item.printable,count);}html.push('<div class="pc-pb2-product',(isPackage?' pc-pb2-package':''),' pc-bgcolor1 pc-color1 pc-border7 pc-font1"',
' data="',item.key,'" >','<div class="pc-pb2-product-w">','<div class="pc-pb2-name pc-border7">');if(isPriceList){html.push('<div class="pc-pb2-select">','<input type="checkbox" name="',
item.key,'"',item.quantity?' checked="checked"':'',(item.quantity<0||item.error)?' disabled="disabled"':'',' />','</div>');}html.push(description.join(""),'<div class="pc-pb2-price">',
zf_stdFormatString(priceFormat,zf_stdFormatMoney(item.price)),'</div>');if(!isPriceList){html.push('<div class="pc-pb2-buy">','<a href="#">Select</a>','</div>');
}html.push('</div>');if(warning)html.push('<div class="pc-pb2-error pc-color8">',zf_stdHtmlEncode(warning),'</div>');else if(isPriceList&&item.quantity<0)html.push('<div class="pc-pb2-error pc-pb2-added button-color5">added</div>');
if(this._frame.mode==zfp_Configurator.Mode.AddToCart||this._frame.mode==zfp_Configurator.Mode.AddToOrder)html.push('<div class="pc-pb2-product-o"></div>');if(this._frame.mode==zfp_Configurator.Mode.Customize){html.push('<div class="pc-pb2-product-dh"><div></div></div>');
html.push('<div class="pc-pb2-product-h"><div></div></div>');}html.push('</div></div>');};zfp_ProductBrowser2.Classic.prototype._getPurchaseItem=function(product){var key=typeof(product)!="string"?product.vendorId+"_"+product.id:product,
item=this._items[key];if(!item){;for(var i=0,printable=0,photos=this._frame.photos;i<photos.length;i++)printable+=this._frame.isPhotoPrintable(product,photos[i]);
item={key:key,vendorId:product.vendorId,productId:product.id,quantity:0,price:product.price!=null?product.price:product.minPrice,printable:printable};var productMeta=product.meta();
if(productMeta instanceof zf_VendorMeta.Package)item.packageId=product.id;else if(productMeta.isTemplated)item.designs=this._browser.getProductDesigns(this._pricing,
product);if(this._frame.mode==zfp_Configurator.Mode.PriceList){var r=this._customFilter(product);if(r==-1)item.quantity=-1;else if(typeof(r)=='string')item.error=r;
}else if(this._frame.mode==zfp_Configurator.Mode.AddToOrder){r=this._customFilter(product);if(typeof(r)=='string')item.error=r;else if(r!=-1)item.printable=1;}this._items[key]=item;
}return item;};zfp_ProductBrowser2.Classic.prototype._page_onresize=function(e,cx,cy){var cxMain=cx-(this.$().hasClass('pc-pb2-noscl')?382:530);var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true)-this.$('.pc-pb2-controls:first:visible').outerHeight(true)-this.$('.pc-pb2-footer:first:visible').outerHeight(true);
this.$().width(cx).height(cy).find('.pc-pb2-main:first').width(cxMain).height(cyMain);this._productList.setHeight(cyMain-this.$('.pc-pb2-batch:first').outerHeight());
this._productList.update();};zfp_ProductBrowser2.Classic.prototype._incomplete_onclick=function(){if(this._inProgress.length==1){this._incompleteList.addToItem(this._inProgress[0],
this);}else{var self=this;this._incompleteList.initUI(this._pricing,this._inProgress,{fromPage:this},function(){self._frame.animate(self,self._incompleteList);});
}return false;};zfp_ProductBrowser2.Classic.prototype._product_onmouseover=function(e){var elem=$(e.currentTarget);if(!elem.hasClass('pc-pb2-product-s')&&!elem.hasClass('pc-pb2-product-e'))elem.removeClass('pc-color1 pc-bgcolor1').addClass('pc-color7 pc-bgcolor7');
};zfp_ProductBrowser2.Classic.prototype._product_onmouseout=function(e){var elem=$(e.currentTarget);if(!elem.hasClass('pc-pb2-product-s')&&!elem.hasClass('pc-pb2-product-e'))elem.removeClass('pc-color7 pc-bgcolor7').addClass('pc-color1 pc-bgcolor1');
};zfp_ProductBrowser2.Classic.prototype._pricingProduct_onclick=function(e){if(!zf_stdIsLeftButton(e))return;e.preventDefault();e.stopPropagation();var p=$(e.currentTarget);if(p.hasClass('pc-pb2-product-s'))return;
$('.pc-pb2-product-s',this._productList.getContentNode()).removeClass('pc-color5 pc-bgcolor5 pc-pb2-product-s').addClass('pc-color1 pc-bgcolor1');p.removeClass('pc-color1 pc-color7 pc-bgcolor1 pc-bgcolor7').addClass('pc-color5 pc-bgcolor5 pc-pb2-product-s');
var ids=p.attr('data').split('_');this[p.hasClass('pc-pb2-package')?'_showPackageInfo':'_showProductInfo'](ids[0],ids[1]);};zfp_ProductBrowser2.Classic.prototype._product_onclick=function(e){if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();var newProduct=$(e.currentTarget);if(newProduct.hasClass('pc-pb2-product-e'))return;var oldProduct=$('.pc-pb2-product-e',this._productList.getContentNode());
oldProduct.addClass('pc-pb2-product-a').find('.pc-pb2-product-w').addClass('pc-font1').removeClass('pc-font2').end().find('.pc-pb2-product-c:first').remove().end().find('.pc-pb2-product-i:first').remove();
var oldHeight=oldProduct.find('.pc-pb2-product-o:first').height();if(newProduct.hasClass('pc-pb2-inprogress'))this._createInProgressBlock(newProduct);else this._createProductBlock(newProduct);
newProduct.addClass('pc-pb2-product-e pc-color1 pc-bgcolor1').removeClass('pc-color7 pc-bgcolor7').find('.pc-pb2-name:first').append('<a class="pc-pb2-product-c"></a>').end().find('.pc-pb2-product-w').removeClass('pc-font1').addClass('pc-border12 pc-bgcolor12 pc-font2');
var inner=newProduct.find('.pc-pb2-product-i');var newHeight=inner.css('visibility','hidden').show().height();inner.hide().css('visibility','inherit');var scrollView=this._productList;
var self=this;function onstep(now,options){if(options!=null){var height=Math.max(Math.round(oldHeight*(1-now/options.end)),0);oldProduct.find('.pc-pb2-product-o:first').height(height);
}scrollView.ensureVisible(newProduct.position().top,newProduct.height()+32);scrollView.update(true);}function oncomplete(){onstep.apply(this);oldProduct.removeClass('pc-pb2-product-e pc-pb2-product-a').find('.pc-pb2-product-w').removeClass('pc-border12 pc-bgcolor12');
$('.pc-pb2-product-i',this).fadeIn(100);self._productInfo.$().fadeIn(200,function(){self._productInfo.update();});}newProduct.addClass('pc-pb2-product-e pc-bgcolor1').removeClass('pc-color7 pc-bgcolor7').find('.pc-pb2-product-w').addClass('pc-border12 pc-bgcolor12').end().find('.pc-pb2-product-o:first').animate({height:newHeight},
{duration:200,easing:'swing',queue:false,step:onstep,complete:oncomplete});this._productInfo.$().fadeOut(150,function(){if(newProduct.hasClass('pc-pb2-inprogress')){var item=self._inProgress[parseInt(newProduct.attr('data'),
10)];if(item.pkg!=null)self._showPackageInfo(item.pkg[0].priceKey.getVendorId(),item.pkg[0].packageId,true);else self._showProductInfo(item.item.vendorId,item.item.productId,
true);}else{var ids=newProduct.attr('data').split('_');self[newProduct.hasClass('pc-pb2-package')?'_showPackageInfo':'_showProductInfo'](ids[0],ids[1],false);}});
newProduct.find('A.pc-pb2-product-c:first').mousedown(function(e){if(!zf_stdIsLeftButton(e))return false;newProduct.addClass('pc-pb2-product-a').find('.pc-pb2-product-w:first').addClass('pc-font1').removeClass('pc-font2').end().find('.pc-pb2-product-c:first').remove().end().find('.pc-pb2-product-i:first').remove();
newProduct.find('.pc-pb2-product-o:first').animate({height:0},function(){newProduct.removeClass('pc-pb2-product-e pc-pb2-product-a').find('.pc-pb2-product-w').removeClass('pc-border12 pc-bgcolor12');
self._productInfo.$().fadeIn(200,function(){self._productInfo.update();});scrollView.update(true);});self._productInfo.$().fadeOut(150,function(){self._setEmptyInfo();
});return false;});};zfp_ProductBrowser2.Classic.prototype._select_onclick=function(e){var key=$(e.currentTarget).closest('.pc-pb2-product').attr('data');var item=this._getPurchaseItem(key);
if(item.quantity>0&&!e.currentTarget.checked){this._selected--;item.quantity=0;}else if(item.quantity==0&&e.currentTarget.checked){this._selected++;item.quantity=1;
}this.$('.pc-pb2-add').enableButton(this._selected>0);};zfp_ProductBrowser2.Classic.prototype._all_onclick=function(){this._productList.$('.pc-pb2-select INPUT').not(':disabled').not(':checked').each(function(){this.checked=true;
$(this).triggerHandler('click');});};zfp_ProductBrowser2.Classic.prototype._none_onclick=function(){this._productList.$('.pc-pb2-select INPUT:checked').not(':disabled').each(function(){this.checked=false;
$(this).triggerHandler('click');});};zfp_ProductBrowser2.Classic.prototype.onBack=function(){this._frame.trackPageView('/productbrowser/classiclist');};;zfp_ProductBrowser2.Subicons=function(id,iconList){this._iconList=iconList;
;zf_Control.prototype.constructor.call(this,id);};zfp_ProductBrowser2.Subicons.inherits(zf_Control);zfp_ProductBrowser2.Subicons.prototype.init=function(frame,browser){this._frame=frame;this._browser=browser;
this._classicList=browser.classicList;this._designGroupList=browser.designGroupList;this._incompleteList=browser.incompleteList;var self=this;this.$().bind('resizePage',
this.closure(this._page_onresize)).toggleClass('pc-pb2-atc',frame.mode==zfp_Configurator.Mode.AddToCart).toggleClass('pc-pb2-pricelist',frame.mode==zfp_Configurator.Mode.PriceList);
this.$('A.pc-pb2-back:first').bind('fastClick',function(){frame.animate(self,browser);browser.onBack&&browser.onBack();});this.$('.pc-pb2-filter:first A:first').bind('fastClick',
browser.closure(browser.changeFilter));var footer=this.$('.pc-pb2-footer:first');footer.find('A:last').bind('button-click',function(){frame.hide();});if(frame.mode==zfp_Configurator.Mode.Customize){footer.find('A.pc-pb2-save').bind('fastClick',
function(){frame.saveWeights(self._pricing.sortWeights);});footer.find('A.pc-pb2-reset').bind('fastClick',function(){browser.resetCustomizations();});}};zfp_ProductBrowser2.Subicons.prototype.initUI=function(pricing,
category,options){;;this._pricing=pricing;this._category=category;this._options=options;this.$('A.pc-pb2-back:first').toggle(options.fromPage!=null);var cart=this._frame.cart;
var filterBySourceType=function(ary,sourceTypes){var res=[];for(var j=0;j<ary.length;j++){if((ary[j].sourceType&sourceTypes)!=0)res.push(ary[j]);}return res;};var incompleteProducts=filterBySourceType(cart.incompleteProducts,
this._options.sourceTypes);var multiImageProducts=filterBySourceType(cart.multiImageProducts,this._options.sourceTypes);this._inProgress=[].concat(incompleteProducts).concat(multiImageProducts);
var formatIncomplete=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that require additional videos. <a{0}>Add these videos</a> to those products now, or select a new product below.':'You have products in your cart that require additional photos. <a{0}>Add these photos</a> to those products now, or select a new product below.';
var formatMultiImage=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that could use additional videos. If you’d like, you can <a{0}>add these videos</a> to those products now, or select a new product below.':'You have products in your cart that could use additional photos. If you’d like, you can <a{0}>add these photos</a> to those products now, or select a new product below.';
this.$('.pc-pb2-incomplete:first').toggle(this._inProgress.length>0).html(zf_stdFormatString(incompleteProducts.length>0?formatIncomplete:formatMultiImage,' href="#"')).find('A:first').click(this.closure(this._incomplete_onclick));
this._initFilter(pricing);this.$('.pc-page-hdr-extra:first SPAN:first').text(category.name);var weights=pricing.getWeights(zf_PricingSortWeight.Type.Category);var subcats=[].concat(category.subcategories).sort(zf_BaseMeta.weightedComparer(weights));
var self=this,frame=this._frame,mode=frame.mode;function select(subcat,force,fromPage){if(!force)zf_storage.setItem('core.printing.configurator.scid',subcat.id);
if(!force&&fromPage==null)fromPage=self;var o=$.extend({},options);o.fromPage=fromPage;o.noSiblings=true;var designs={};if(mode!=zfp_Configurator.Mode.PriceList){$.each(subcat.products,
function(){var product=this;function isPrintable(pt){return self._frame.isPhotoPrintable(product,pt.photo,pt.template);}var productMeta=this.meta();if(productMeta.isTemplated){var templates=pricing.findTemplates(productMeta.getTemplateProductId());
if(product.designSelector!=null)templates=product.designSelector.match(templates);$.each(templates,function(){var template=this;var design=pricing.designs[this.designId];
if(design!=null){design=designs[design.id]||$.extend({extra:{products:[]}},design);designs[design.id]=design;var pts=$.map(self._frame.photos,function(p){return{photo:p,
template:template};});if(mode!=zfp_Configurator.Mode.AddToCart||$.lookup(pts,isPrintable)){design.extra.products.push(product);}}});}return true;});}if($.isEmptyObject(designs)){self._classicList.initUI(pricing,
subcat,o);frame.animate(force?self._browser:self,self._classicList);}else{o.designs=designs;if(self._designGroupList.initUI(pricing,subcat,o))frame.animate(force?self._browser:self,
self._designGroupList);}}function sort(subcats){$.each(subcats,function(i){weights[this.id]=i;});pricing.mergeWeights(zf_PricingSortWeight.Type.Category,weights);
}this._iconList.init(subcats,{onselect:select,onsort:sort,customizeMode:mode==zfp_Configurator.Mode.Customize});if(category.subcategories.length==1){select(category.subcategories[0],
true,options.fromPage);return false;}if(mode==zfp_Configurator.Mode.AddToCart){var subcat=null;if(options.product!=null){subcat=pricing.getProductCategory(category.id,
options.product);if(subcat!=null)subcat=$.lookup(subcats,function(s){return s.id==subcat.id;});}if(subcat==null){var subcatId=zf_storage.getItem('core.printing.configurator.scid');
if(subcatId!=null)subcat=$.lookup(subcats,function(s){return s.id==subcatId;});}if(subcat!=null){select(subcat,true,this);return false;}}return true;};zfp_ProductBrowser2.Subicons.prototype.onBack=function(){zf_storage.removeItem('core.printing.configurator.scid');
if(this._frame.mode==zfp_Configurator.Mode.Customize)this.initUI(this._pricing,this._category,this._options);};zfp_ProductBrowser2.Subicons.prototype._initFilter=function(pricing){var zone=zfp_Configurator.getShippingZone(pricing);
var showSelector=this._frame.mode==zfp_Configurator.Mode.AddToCart||(this._frame.mode==zfp_Configurator.Mode.Customize&&pricing.alternateCurrencies.length>0);if(showSelector){this.$('.pc-pb2-filter:first').show().find('SPAN:first').find('IMG:first').attr('class',
'pc-flag pc-flag-'+zone.code).end().find('A:first').text(zone.shortDisplayName+' ('+pricing.currency.code+')');}else{this.$('.pc-pb2-filter:first').hide();zone=null;
}this.$('.pc-pb2-currency:first').toggle(this._frame.mode==zfp_Configurator.Mode.PriceList).find('SPAN').text(pricing.currency.pluralName);};zfp_ProductBrowser2.Subicons.prototype._page_onresize=function(e,
cx,cy){var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true)-this.$('.pc-pb2-controls:first:visible').outerHeight(true)-this.$('.pc-pb2-footer:first:visible').outerHeight(true);
this.$().width(cx).height(cy).find('.pc-pb2-main:first').width(cx).height(cyMain);this._iconList.setHeight(cyMain);this._iconList.recalcLayout(cx,cyMain);this._iconList.update();
};zfp_ProductBrowser2.Subicons.prototype._incomplete_onclick=function(){if(this._inProgress.length==1){this._incompleteList.addToItem(this._inProgress[0],this);}else{var self=this;
this._incompleteList.initUI(this._pricing,this._inProgress,{fromPage:this},function(){self._frame.animate(self,self._incompleteList);});}return false;};;zfp_ProductBrowser2.DesignGroups=function(id,
iconList){this._iconList=iconList;;zf_Control.prototype.constructor.call(this,id);};zfp_ProductBrowser2.DesignGroups.inherits(zf_Control);zfp_ProductBrowser2.DesignGroups.prototype.init=function(frame,
browser){this._frame=frame;this._browser=browser;this._designList=browser.designList;this._classicList=browser.classicList;this._incompleteList=browser.incompleteList;
var self=this;this.$().bind('resizePage',this.closure(this._page_onresize)).toggleClass('pc-pb2-atc',frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder).toggleClass('pc-pb2-pricelist',
frame.mode==zfp_Configurator.Mode.PriceList);this.$('A.pc-pb2-back:first').bind('fastClick',function(){frame.animate(self,self._fromPage);self._fromPage.onBack&&self._fromPage.onBack();
});this.$('.pc-pb2-filter:first A:first').bind('fastClick',browser.closure(browser.changeFilter));var footer=this.$('.pc-pb2-footer:first');footer.find('A:last').bind('button-click',
function(){frame.hide();});if(frame.mode==zfp_Configurator.Mode.Customize){footer.find('A.pc-pb2-save').bind('fastClick',function(){frame.saveWeights(self._pricing.sortWeights);
});footer.find('A.pc-pb2-reset').bind('fastClick',function(){browser.resetCustomizations();});}};zfp_ProductBrowser2.DesignGroups.prototype.initUI=function(pricing,category,options){;
;this._pricing=pricing;this._category=category;this._options=options;this._designs=options.designs;this._fromPage=options.fromPage;this.$('A.pc-pb2-back:first').toggle(options.fromPage!=null);
var cart=this._frame.cart;function filterBySourceType(ary,sourceTypes){var res=[];for(var j=0;j<ary.length;j++){if((ary[j].sourceType&sourceTypes)!=0)res.push(ary[j]);
}return res;}var incompleteProducts=filterBySourceType(cart.incompleteProducts,this._options.sourceTypes);var multiImageProducts=filterBySourceType(cart.multiImageProducts,
this._options.sourceTypes);this._inProgress=[].concat(incompleteProducts).concat(multiImageProducts);var formatIncomplete=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that require additional videos. <a{0}>Add these videos</a> to those products now, or select a new product below.':'You have products in your cart that require additional photos. <a{0}>Add these photos</a> to those products now, or select a new product below.';
var formatMultiImage=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that could use additional videos. If you’d like, you can <a{0}>add these videos</a> to those products now, or select a new product below.':'You have products in your cart that could use additional photos. If you’d like, you can <a{0}>add these photos</a> to those products now, or select a new product below.';
this.$('.pc-pb2-incomplete:first').toggle(this._inProgress.length>0).html(zf_stdFormatString(incompleteProducts.length>0?formatIncomplete:formatMultiImage,' href="#"')).find('A:first').click(this.closure(this._incomplete_onclick));
this._initFilter(pricing);var groups={};var self=this,frame=this._frame,mode=frame.mode,designs=this._designs;if(this._frame.options.partialPackage&&this._frame.options.partialPackage.current.extra.product.designSelector&&this._frame.options.partialPackage.current.extra.product.designSelector.csvList){var rules=this._frame.options.partialPackage.current.extra.product.designSelector.parse(),
designCount=0,lastDesignId='';designs=$.extend({},designs);for(var d in designs){if(rules.designRules[d]!==true){delete designs[d];}else{lastDesignId=d;designCount++;
}}if(designCount===1){var product=designs[lastDesignId].extra.products[0];if(product!=null&&this._frame.options.partialPackage){this._frame.selectPackageItemDesign(product.vendorId,
product.id,lastDesignId,self);return false;}}}for(var did in designs){var gid=designs[did].groupId;if(!groups[gid]){var g=pricing.designGroups[gid];groups[g.id]=g;
}}var types={};for(gid in groups)types[groups[gid].type]=true;var typeList=[];for(var t in types)typeList.push(t);var title;if(typeList.length==1)title=zf_stdFormatString('Select {0}',
typeList[0]);else title='Select Subcategory';this.$('.pc-page-hdr:first H1:first').text(title);this.$('.pc-page-hdr-extra:first SPAN:first').text(category.name);
if(options.product==null){var other=$.extend({},category);other.products=$.grep(other.products,function(p){return!p.meta().isTemplated;});other.subcategories=$.map(other.subcategories,
function(s){s=$.extend({},s);s.products=$.grep(s.products,function(p){return!p.meta().isTemplated;});return(s.products.length||s.packages.length)?s:null;});if(other.packages.length&&!other.products.length){groups['-other']={id:'-other',
name:'Packages',icon:'/zf/img/printing/icon-packages-200.png',index:10000};}else if(other.products.length||other.packages.length){groups['-other']={id:'-other',name:'Other',
icon:'/zf/img/printing/icon-other-200.png',index:10000};}}var weights=pricing.getWeights(zf_PricingSortWeight.Type.DesignGroup);groups=zfp_Configurator.makeUiList(groups,
zf_BaseMeta.weightedComparer(weights));function select(group,force,fromPage){if(!force&&mode==zfp_Configurator.Mode.AddToCart&&options.product==null)zf_storage.setItem('core.printing.configurator.dgid',
group.id);if(!force&&fromPage==null)fromPage=self;var o={fromPage:fromPage};if(group.id=='-other'){o.noSiblings=true;self._classicList.initUI(pricing,other,$.extend({},
options,o));self._frame.animate(force?self._fromPage:self,self._classicList);}else{o=$.extend(o,{groups:groups,designs:designs,product:options.product,optionId:options.optionId});
self._designList.initUI(pricing,category,group,o);self._frame.animate(force?self._fromPage:self,self._designList);}}function sort(groups){$.each(groups,function(i){weights[this.id]=i;
});pricing.mergeWeights(zf_PricingSortWeight.Type.DesignGroup,weights);}function getPrice(group){var minPrice=Number.MAX_VALUE,returnString='from {0}';$.each(designs,
function(){this.groupId==group.id&&$.each(this.extra.products,function(){if(this.minPrice<minPrice)minPrice=this.minPrice;});});if(minPrice===Number.MAX_VALUE){returnString='Insufficient photo resolution for this product.';
}return zf_stdFormatString(returnString,zf_stdFormatMoney(minPrice,pricing.currency));}this._iconList.init(groups,{onselect:select,onsort:sort,customizeMode:mode==zfp_Configurator.Mode.Customize,
showPrices:category.data['price-dgroups']!=null,getPrice:getPrice});if(groups.length==1){select(groups[0],true,options.fromPage);return false;}if(mode==zfp_Configurator.Mode.AddToCart&&options.product==null){var groupId=zf_storage.getItem('core.printing.configurator.dgid');
if(groupId!=null){var group=$.lookup(groups,function(g){return g.id==groupId;});if(group!=null){select(group,true,this);return false;}}}return true;};zfp_ProductBrowser2.DesignGroups.prototype.onBack=function(){zf_storage.removeItem('core.printing.configurator.dgid');
this._frame.trackPageView('/productbrowser/designgrouplist?category='+this._category.id);};zfp_ProductBrowser2.DesignGroups.prototype._initFilter=function(pricing){var zone=zfp_Configurator.getShippingZone(pricing);
var showSelector=this._frame.mode==zfp_Configurator.Mode.AddToCart||(this._frame.mode==zfp_Configurator.Mode.Customize&&pricing.alternateCurrencies.length>0);if(showSelector){this.$('.pc-pb2-filter:first').show().find('SPAN:first').find('IMG:first').attr('class',
'pc-flag pc-flag-'+zone.code).end().find('A:first').text(zone.shortDisplayName+' ('+pricing.currency.code+')');}else{this.$('.pc-pb2-filter:first').hide();zone=null;
}this.$('.pc-pb2-currency:first').toggle(this._frame.mode==zfp_Configurator.Mode.PriceList).find('SPAN').text(pricing.currency.pluralName);};zfp_ProductBrowser2.DesignGroups.prototype._page_onresize=function(e,
cx,cy){var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true)-this.$('.pc-pb2-controls:first:visible').outerHeight(true)-this.$('.pc-pb2-footer:first:visible').outerHeight(true);
this.$().width(cx).height(cy).find('.pc-pb2-main:first').width(cx).height(cyMain);this._iconList.setHeight(cyMain);this._iconList.recalcLayout(cx,cyMain);this._iconList.update();
};zfp_ProductBrowser2.DesignGroups.prototype._incomplete_onclick=function(){if(this._inProgress.length==1){this._incompleteList.addToItem(this._inProgress[0],this);}else{var self=this;
this._incompleteList.initUI(this._pricing,this._inProgress,{fromPage:this},function(){self._frame.animate(self,self._incompleteList);});}return false;};;zfp_ProductBrowser2.Designs=function(id,
iconList){this._iconList=iconList;;zf_Control.prototype.constructor.call(this,id);this._selectBox=new zf_SelectBox(id+'-change');this._selectBox.constrainWidth=false;
};zfp_ProductBrowser2.Designs.inherits(zf_Control);zfp_ProductBrowser2.Designs.prototype.init=function(frame,browser){this._frame=frame;this._incompleteList=browser.incompleteList;var self=this;this.$().bind('resizePage',
this.closure(this._page_onresize)).toggleClass('pc-pb-atc',frame.mode==zfp_Configurator.Mode.AddToCart||frame.mode==zfp_Configurator.Mode.AddToOrder).toggleClass('pc-pb-pricelist',
frame.mode==zfp_Configurator.Mode.PriceList);this._selectBox.$().bind('zf-change',function(){self._showGroup(self._selectBox.getSelected());});this.$('.pc-pb2-filter:first A:first').bind('fastClick',
browser.closure(browser.changeFilter));var footer=this.$('.pc-pb2-footer:first');footer.find('A:last').bind('button-click',function(){frame.hide();});if(frame.mode==zfp_Configurator.Mode.Customize){footer.find('A.pc-pb2-save').bind('fastClick',
function(){frame.saveWeights(self._pricing.sortWeights);});footer.find('A.pc-pb2-reset').bind('fastClick',function(){browser.resetCustomizations();});}};zfp_ProductBrowser2.Designs.prototype.initUI=function(pricing,
category,designGroup,options){;;this._pricing=pricing;this._category=category;this._options=options;this._designs=options.designs;this._designGroups=options.groups;
var self=this;this.$('A.pc-pb2-back:first').toggle(options.fromPage!=null);this.$('A.pc-pb2-back:first').unbind('fastClick').bind('fastClick',function(){self._frame.animate(self,
options.fromPage);options.fromPage.onBack&&options.fromPage.onBack();});var cart=this._frame.cart;var filterBySourceType=function(ary,sourceTypes){var res=[];for(var j=0;
j<ary.length;j++){if((ary[j].sourceType&sourceTypes)!=0)res.push(ary[j]);}return res;};var incompleteProducts=filterBySourceType(cart.incompleteProducts,this._options.sourceTypes);
var multiImageProducts=filterBySourceType(cart.multiImageProducts,this._options.sourceTypes);this._inProgress=[].concat(incompleteProducts).concat(multiImageProducts);
var formatIncomplete=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that require additional videos. <a{0}>Add these videos</a> to those products now, or select a new product below.':'You have products in your cart that require additional photos. <a{0}>Add these photos</a> to those products now, or select a new product below.';
var formatMultiImage=((this._options.sourceTypes&zf_SourceType.Video)!=0)?'You have products in your cart that could use additional videos. If you’d like, you can <a{0}>add these videos</a> to those products now, or select a new product below.':'You have products in your cart that could use additional photos. If you’d like, you can <a{0}>add these photos</a> to those products now, or select a new product below.';
this.$('.pc-pb2-incomplete:first').toggle(this._inProgress.length>0).html(zf_stdFormatString(incompleteProducts.length>0?formatIncomplete:formatMultiImage,' href="#"')).find('A:first').click(this.closure(this._incomplete_onclick));
this._initFilter(pricing);this.$('.pc-pb2-change:first').toggle(this._designGroups.length>1).text(designGroup.type+':');var html=[];for(var i=0;i<this._designGroups.length;
i++){var g=this._designGroups[i];html.push('<div zf:value="',g.id,'">',g.name,'</div>');}this._selectBox._getOptions().html(html.join(''));this._selectBox.refreshOptions();
this._selectBox.setSelected(designGroup.id);this._selectBox.$('.zf-outer-current-selection').addClass('pc-bgcolor1 pc-color2');this._selectBox.$('.zf-current-selection').addClass('pc-bgcolor1 pc-color2');
this._selectBox.$().toggle(this._designGroups.length>1);this._initDone=true;};zfp_ProductBrowser2.Designs.prototype._showGroup=function(groupId){this.designGroupId=groupId;var designGroup=$.lookup(this._designGroups,
function(dg){return dg.id==groupId;});if(this._initDone)zf_storage.setItem('core.printing.configurator.dgid',groupId);var subtitle=designGroup.name;if(this._category!=this._pricing.root)subtitle=this._category.name+' : '+subtitle;
this.$('.pc-page-hdr-extra:first SPAN:first').text(subtitle);var designs=[];for(var did in this._designs){var d=this._designs[did];if(d.groupId==groupId)designs.push(d);
}var weights=this._pricing.getWeights(zf_PricingSortWeight.Type.Design);designs.sort(zf_BaseMeta.weightedComparer(weights));var self=this,frame=this._frame,mode=frame.mode,
optionId=this._options.optionId;function select(d){var product=d.extra.products[0];if(product!=null){frame.buy(product.vendorId,product.id,optionId,d.id,1,self);
}}function sort(designs){$.each(designs,function(i){weights[this.id]=i;});self._pricing.mergeWeights(zf_PricingSortWeight.Type.Design,weights);}function packagePartItemSelect(d){var product=d.extra.products[0];
if(product!=null&&frame.options.partialPackage){frame.selectPackageItemDesign(product.vendorId,product.id,d.id,self);}}var onselect=$.noop;if(frame.options.partialPackage){onselect=packagePartItemSelect;
}else if(mode==zfp_Configurator.Mode.AddToCart||mode==zfp_Configurator.Mode.AddToOrder){onselect=select;}this._initList(designs,{onselect:onselect,onsort:sort,customizeMode:mode==zfp_Configurator.Mode.Customize});
this._frame.recalcLayout();};zfp_ProductBrowser2.Designs.prototype._initList=function(designs,options){var html=[],onselect=options.onselect||$.noop,customizeMode=!!options.customizeMode,
onsort=options.onsort||$.noop,map={},i=0;for(i=0;i<designs.length;i++){var d=designs[i],products=d.extra.products,fromPrice=null;map[d.id]=d;d.extra.image=new Image();
d.extra.image.src=zfp_Configurator.formatIconUrl(d.icon||'/zf/img/null.gif');if(products.length>0){var product=products.sort(function(a,b){return a.minPrice-b.minPrice;
})[0];fromPrice=zf_stdFormatMoney(product.minPrice,this._pricing.currency);if(products.length>1)fromPrice=zf_stdFormatString('from {0}',fromPrice);}html.push('<div class="pc-pb2-design pc-font2" style="display:none;"',
' data-id="',d.id,'">','<div class="pc-pb2-icon pc-bgcolor12 pc-border3">','<a href="#">','<img src="" />','</a>');if(customizeMode)html.push('<div class="pc-pb2-sort-grip"></div>');
html.push('</div>','<div class="pc-pb2-design-i pc-font5">','<span>',zf_stdHtmlEncode(d.name),'</span>');if(fromPrice!=null&&!this._frame.options.partialPackage){html.push('<a class="pc-pb2-design-b">',
fromPrice,'</a>');}else if(!this._frame.options.partialPackage){html.push('<span class="pc-pb2-error pc-font1 pc-color8">Insufficient photo resolution for this product.</span>');
}html.push('</div>','</div>');}this._iconList.$().html(html.join(''));this._iconList.$('A.pc-pb2-design-b').button({className:'pc-pb2-design-b',decorations:{normal:'pc-color11 pc-bgcolor11',
hover:'pc-color2 pc-bgcolor11',selected:'pc-color11 pc-bgcolor9','selected-hover':'pc-color2 pc-bgcolor11'}});var icons=this._iconList.$('DIV.pc-pb2-design').hover(function(){$(this).addClass('pc-border4').removeClass('pc-border3');
},function(){$(this).addClass('pc-border3').removeClass('pc-border4');}).each(function(i){$(this).click(function(){onselect(designs[i]);return false;}).find('A.pc-pb2-design-b:first').bind('button-click',
function(){onselect(designs[i]);});});var index=0,self=this;function show(){var img=designs[index].extra.image;if(!img.complete){$(img).load(show);return;}var $i=$(icons[index]);
var width=img.width;var height=img.height;var boxWidth=$i.find('.pc-pb2-icon:first').width();var boxHeight=$i.find('.pc-pb2-icon:first').height();if(height!=boxHeight&&width!=boxWidth){var scale=Math.min(boxWidth/width,
boxHeight/height);width=Math.min(Math.round(width*scale),boxWidth);height=Math.min(Math.round(height*scale),boxHeight);}$i.find('IMG').css('left',((boxWidth-width)/2)+'px').css('top',
((boxHeight-height)/2)+'px').width(width).height(height).attr('src',img.src);$i.fadeIn(100);if(++index<icons.length)setTimeout(show,20);else if(customizeMode)self._customize(map,
onsort);}this._frame.trackPageView('/productbrowser/designlist?designgroupid='+(this.designGroupId||'unknown'));setTimeout(show,50);};zfp_ProductBrowser2.Designs.prototype._recalcLayout=function(cx,
cy){cx-=80;var icons=this._iconList.$('DIV.pc-pb2-design').not('.ui-sortable-helper').not('.pc-pb2-design-original');var count=icons.length;var cols,rows,cxItem=254,
cyItem=304,margin=36;var maxCols=Math.min(Math.floor((cx+margin)/(cxItem+margin)),4);var maxRows=Math.floor((cy+margin)/(cyItem+margin));if(count==1){cols=rows=1;
}else if(count==2){cols=2;rows=1;margin=100;}else if(count==3){cols=3;rows=1;}else if(count==4){cols=rows=2;if(Math.floor((cy+100)/(cyItem+100))>=2)margin=100;else if(maxRows==1&&maxCols>=4){cols=4;
rows=1;}}else{cols=((count%3)==0&&maxCols>=3)?3:maxCols;rows=Math.ceil(count/cols);}var xMargin=cols>1?Math.floor((cx-cxItem*cols)/(cols-1)):Number.MAX_VALUE;var yMargin=rows>1?(rows<=maxRows?Math.floor((cy-cyItem*rows)/(rows-1)):40):Number.MAX_VALUE;
margin=Math.min(xMargin,yMargin,100);var xOffset=40+(cx-cols*(cxItem+margin)+margin)/2;var yOffset=Math.max(0,2*(cy-rows*(cyItem+margin)+margin)/5);for(var i=0;i<count;
i++){var c=i%cols;var r=Math.floor(i/cols);$(icons[i]).css('left',(xOffset+c*(cxItem+margin))+'px').css('top',(yOffset+r*(cyItem+margin))+'px');}this._iconList.$().height(yOffset==0?rows*(cyItem+margin)-margin:cy).css('position',
'relative').css('overflow','hidden');this._iconList.update();};zfp_ProductBrowser2.Designs.prototype._customize=function(map,onsort){var self=this,list=this._iconList;var options={items:'DIV.pc-pb2-design',
handle:'DIV.pc-pb2-sort-grip:first',distance:5,tolerance:'pointer',cursor:'move',helper:'clone',axis:'x,y',revert:200,start:function(event,ui){$(ui.placeholder).css('left',
ui.originalPosition.left+'px').css('top',ui.originalPosition.top+'px').css('visibility','visible').append('<div class="pc-pb2-sort-placeholder"></div>');$(ui.item).addClass('pc-pb2-design-original');
$(ui.helper).addClass('pc-bgcolor1');},stop:function(event,ui){$(ui.item).removeClass('pc-pb2-design-original');self._recalcLayout(list.$().width(),list.$().height());
$(ui.item).append('<span class="pc-pb2-drop-border"></span>').find('.pc-pb2-drop-border').css({borderBottomColor:'#FFBB44',borderTopColor:'#FFBB44',borderLeftColor:'#FFBB44',
borderRightColor:'#FFBB44'}).animate({borderBottomColor:'#F0F0F0',borderTopColor:'#F0F0F0',borderLeftColor:'#F0F0F0',borderRightColor:'#F0F0F0'},2000,function(){$(this).remove();
});},sort:function(event,ui){var yHelper=$(ui.helper).offset().top,cyHelper=$(ui.helper).height(),yView=self.$().offset().top,cyView=self.$().height();list.ensureVisible(yHelper-yView-12,
Math.min(cyHelper+12,yView+cyView-yHelper)+12,null,function(){list.$().sortable('refreshPositions');});},change:function(event,ui){self._recalcLayout(list.$().width(),
list.$().height());},update:function(event,ui){var metas=[];self.$('.pc-pb2-design').each(function(){metas.push(map[$(this).attr('data-id')]);});onsort(metas);}};
list.$().disableSelection().sortable(options).find('DIV.pc-pb2-sort-grip').hover(function(){$(this).closest('DIV.pc-pb2-design').append('<span class="pc-pb2-sort-border"><span></span></span>');
},function(){$(this).closest('DIV.pc-pb2-design').find('SPAN.pc-pb2-sort-border').remove();});};zfp_ProductBrowser2.Designs.prototype._initFilter=function(pricing){var zone=zfp_Configurator.getShippingZone(pricing);
var showSelector=this._frame.mode==zfp_Configurator.Mode.AddToCart||(this._frame.mode==zfp_Configurator.Mode.Customize&&pricing.alternateCurrencies.length>0);if(showSelector){this.$('.pc-pb2-filter:first').show().find('SPAN:first').find('IMG:first').attr('class',
'pc-flag pc-flag-'+zone.code).end().find('A:first').text(zone.shortDisplayName+' ('+pricing.currency.code+')');}else{this.$('.pc-pb2-filter:first').hide();zone=null;
}this.$('.pc-pb2-currency:first').toggle(this._frame.mode==zfp_Configurator.Mode.PriceList).find('SPAN').text(pricing.currency.pluralName);};zfp_ProductBrowser2.Designs.prototype._page_onresize=function(e,
cx,cy){var cyMain=cy-this.$('.pc-page-hdr:first').outerHeight(true)-this.$('.pc-pb2-incomplete:first:visible').outerHeight(true)-this.$('.pc-pb2-controls:first:visible').outerHeight(true)-this.$('.pc-pb2-footer:first:visible').outerHeight(true);
this.$().width(cx).height(cy).find('.pc-pb2-main:first').width(cx).height(cyMain);this._iconList.setHeight(cyMain);this._recalcLayout(cx,cyMain);};zfp_ProductBrowser2.Designs.prototype._incomplete_onclick=function(){if(this._inProgress.length==1){this._incompleteList.addToItem(this._inProgress[0],
this);}else{var self=this;this._incompleteList.initUI(this._pricing,this._inProgress,{fromPage:this},function(){self._frame.animate(self,self._incompleteList);});
}return false;};;function zfp_ItemEditor(id,croppers,productInfo,productInfoLeft,productsView,servicesView,altCropper,largeCropper,batchView,settingsView,altLayoutView,templateGrids,
templateViews){;zf_Control.prototype.constructor.call(this,id);this._productInfo=productInfo;this._productInfoLeft=productInfoLeft;this._productsView=productsView;
this._servicesView=servicesView;this._settingsView=settingsView;this._altLayoutView=altLayoutView;this._batchView=batchView;this._croppers=croppers;this._altCropper=altCropper;
this._largeCropper=largeCropper;this._templateViews=templateViews;this._templateGrids=templateGrids;this._templateFavorites=[];this._templateAltLayoutImages=[];this._loader={};
for(var i=0;i<this._templateViews.length;i++){if(typeof this._templateViews[i]==='undefined'){this._templateViews.splice(i,1);}}for(var x=0;x<this._templateGrids.length;
x++){if(typeof this._templateGrids[x]==='undefined'){this._templateGrids.splice(x,1);}}this._nextId=0;}zfp_ItemEditor.inherits(zf_Control);zfp_ItemEditor.Cropper={Simple:0,Template:2,Frame:4,
MultiImage:6,TemplateProduct:8};zfp_ItemEditor._charsets={mpix1:[{from:0x0020,to:0x007E},{from:0x00A0,to:0x00FF},{from:0x2013,to:0x2014},{from:0x2018,to:0x201A},{from:0x201C,to:0x201E},
{from:0x2020,to:0x2022}]};zfp_ItemEditor.prototype.init=function(frame){;this._frame=frame;var self=this;this.$().bind('resizePage',this.closure(this._page_onresize));this._longTitle='';
this._shortTitle='';this._longTitleWidth=9999;if(this._frame.canUseScrapbooks===true){$('.pc-tabbox .pc-tabheader li:eq(2)',this.dom('template-photo')).removeClass('hide-tab');
}this._servicesView.onscrolling=function(){self._service_info_hide();};this._servicesView.onscroll=function(){self._service_info_hide();};this._plugins=[new zfl_ZoomPlugin(),
new zfl_MarkUsedPlugin(),new zfl_VignettePlugin(),new zfl_DecorationPlugin(this._frame.decorationInfo,zfl_PhotoViewStyle.GalleryPhoto,{hideShadow:true})];$.each(this._templateGrids,
function(ix,g){g.init(self._plugins);g.$().addClass('pg-method-0 defdec pvp square pvp-method-9 square-method-1');g.onselchange=function(){self._grid_onselchange(g);
};g.onqueryitem=zf_stdFalse;});this._modalDialog=new zf_ModalDialog(this.id+'_modaldialog');$('A.pc-slideout',this.dom('info')).bind('fastClick',function(){self._activePanels['info'].close();
delete self._activePanels['info'];});$('A.pc-slideout',this.dom('infoleft')).bind('fastClick',function(){self._activePanels['infoleft'].close();delete self._activePanels['infoleft'];
});$('A.pc-slideout',this.dom('services')).bind('fastClick',function(){self._activePanels['services'].close();delete self._activePanels['services'];});$('A.pc-slideout, .pc-ie-buttons:first A:first',
this.dom('template-photo')).bind('fastClick',function(){self._activePanels['template-photo'].close();delete self._activePanels['template-photo'];});$('A.pc-slideout, .pc-ie-buttons:first A:first',
this.dom('altlayout')).bind('fastClick',function(){self._activePanels['altlayout'].close();delete self._activePanels['altlayout'];});$('.pc-ie-buttons:first A:first',
this.dom('info')).bind('fastClick',function(){self._activePanels['info'].close();delete self._activePanels['info'];});$('.pc-ie-buttons:first A:first',this.dom('infoleft')).bind('fastClick',
function(){self._activePanels['infoleft'].close();delete self._activePanels['infoleft'];});$('.pc-ie-info').delegate('A.pc-info-license','mousedown',function(){self._activePanels['infoleft'].close();
delete self._activePanels['infoleft'];self._setTitle(self._item);});$('.pc-ie-buttons:first A:first',this.dom('products')).bind('fastClick',this.closure(this._cancelChange,
'products'));$('.pc-ie-buttons:first A:first',this.dom('services')).bind('fastClick',this.closure(this._cancelChange,'services'));$('.pc-tabbox .pc-tabheader li',
this.dom('template-photo')).bind('fastClick',this.closure(this._tab_onclick));$('.pc-tabfavtop .ddlFavorites',this.dom('template-photo')).change(this.closure(this._favorites_onchange));
this.$('.pc-ie-nav:first A.pc-ie-back').bind('fastClick',this.closure(this._back_onclick));this.$('.pc-ie-nav:first A.pc-ie-next').bind('fastClick',this.closure(this._next_onclick));
this.$('.pc-ie-nav:first A.pc-ie-close').bind('fastClick',this.closure(this._close_onclick));this.$('.pc-ie-nav:first A.pc-ie-continue').bind('fastClick',this.closure(this._close_onclick));
this.$('.pc-ie-nav:first A.pc-ie-checkout').bind('fastClick',this.closure(this._checkout_onclick));this.$('.pc-ie-nav:first A.pc-ie-add').bind('fastClick',this.closure(this._add_onclick));
this.$('.pc-ie-nav:first A.pc-ie-cancel').bind('fastClick',this.closure(this._cancel_onclick));this.$('.pc-ie-nav:first A.pc-ie-save').bind('fastClick',this.closure(this._save_onclick));
this.$().bind('hidePage',function(){$(document).unbind('.pc-ie');});var onchange=this.closure(this._crop_onchange);var onclose=this.closure(this._close_onclick);
var onswitchclick=this.closure(this._switchCroppers,zfp_ItemEditor.Cropper.Simple);var onenlarge=this.closure(this._crop_onenlarge);var onpagechange=this.closure(this._template_onpagechange);
var onelementselect=this.closure(this._template_selectElement);var onelementdeselect=this.closure(this._template_ondeselect);var onelementchange=this.closure(this._template_changeActiveElementValue);
var onphotoelementdrop=this.closure(this._template_reloadthumbnails);var onchangephoto=this.closure(this._template_changePhoto);var onchangelayout=this.closure(this._template_changeLayout);
var onlayoutchanged=this.closure(this._template_addElementSettings);var onaddphoto=this.closure(this._template_addPhoto);var onupdatemarkedphoto=this.closure(this._toggleMarkGridPhoto);
var unmarkallphotos=this.closure(this._unmarkAllGridPhotos);$.each(this._croppers,function(i,c){c.init(frame);c.onchange=onchange;c.onclose=onclose;if(c instanceof zfp_SimpleCropper||c instanceof zfp_FrameCropper){c.onswitchclick=onswitchclick;
}else if(c instanceof zfp_MultiImageCropper){c.onenlarge=onenlarge;}else if(c instanceof zfp_TemplateProductCropper){c.onpagechange=onpagechange;c.onelementselect=onelementselect;
c.onelementdeselect=onelementdeselect;c.onelementchange=onelementchange;c.onchangephoto=onchangephoto;c.onphotoelementdrop=onphotoelementdrop;c.onaddphoto=onaddphoto;
c.onswitchclick=onswitchclick;c.onchangelayout=onchangelayout;c.onupdatemarkedphoto=onupdatemarkedphoto;c.unmarkallphotos=unmarkallphotos;c.onlayoutchanged=onlayoutchanged;
}});this._altCropper.init(frame);this._altCropper.onchange=onchange;this._altCropper.onswitchclick=this.closure(this._switchCroppers);this._largeCropper.init(frame);
this._largeCropper.isLarge=true;this._ews=new zf_EditWithSpin(this.id+"-ews");this._ews.minValue=1;this._ews.onchange=this.closure(this._qty_onchange);this._productInfo.init(frame);
this._productInfo.onpreview=function(info){frame.showPreview(info,function(){self._setTitle(self._item);frame.hidePanel(self.$dom('info'));});};this._productInfoLeft.init(frame,
{hidePreview:true});this._productInfoLeft.onpreview=function(info){frame.showPreview(info,function(){self._setTitle(self._item);frame.hidePanel(self.$dom('infoleft'));
});};this.$('.pc-ie-configall').bind('fastClick',function(){self._batchOptions();});$('.pc-ie-buttons A.pc-ie-cancel',this.dom('batch')).bind('fastClick',this.closure(this._closeBatchOptions));
$('.pc-ie-buttons A.pc-ie-apply',this.dom('batch')).bind('fastClick',this.closure(this._applyBatchOptions));};zfp_ItemEditor.prototype.initUI=function(items,options,callback){;
var self=this;this._items=items;this._photos=options.photos;this._fromCart=!!options.fromCart;this._readOnly=!!options.readOnly;this._settingsOnly=!!options.settingsOnly;
this._adminView=!!options.adminView;this._orderEdit=!!options.orderEdit||this._adminView;this._fromPage=options.fromPage;this._selectedPhoto={};this._initServiceId=options.serviceSetId||null;
this._templateAltLayoutImages=[];if(typeof options.itemIndex==='number'&&typeof options.photoIndex==='number'){this._selectedPhoto[options.itemIndex]=options.photoIndex;
}this._customerItems={};if(options.originalItems!=null)$.each(options.originalItems,function(ix,i){self._customerItems[i.id]=i;});this._itemIndex=-1;this._cropper=null;
this._haveWatermarks=false;this._continueInit=null;this._nextKey={};this._asyncKey={};this._expandedInit={};this._expanded={};if(options.settingId!=null)this._expandedInit['set-'+options.settingId]=true;
if(options.serviceSetId!=null)this._expandedInit['svc-'+options.serviceSetId]=true;this._activePanels={};this._cache={};this._templateFavorites=[];this._modalDialog.init(this.$('.pc-ie-modaldialog'),
[]);$.each(this._croppers,function(i,c){c.$().hide();});if((this._batchMode=!!options.batchMode)){this._batchOptions(callback);}else{this._loadWatermarkState(options.photos);
this.$().toggleClass('pc-ie-single',items.length==1);var itemIndex=options.itemIndex!=null?options.itemIndex:0;this._switchTo(itemIndex,callback);}$(document).bind('keydown.pc-ie',
function(e){if(e.altKey||e.ctrlKey||e.metaKey)return true;switch(e.which){case 37:self._back_onclick();break;case 39:self._next_onclick();break;default:return true;
}e.preventDefault();e.stopPropagation();return true;});this._frame.recalcLayout();};zfp_ItemEditor.prototype.save=function(callback){var self=this;if(this._cropper&&typeof this._cropper.deselectElement==='function'){var val=this._cropper.getActiveElementVal();
if(val){this._cropper.saveElement(val,function(){self._cropper.deselectElement();});}else{this._cropper.deselectElement();}}if(this._altCropper.$().is(':visible')&&this._altCropper.onswitchclick){this._altCropper.onswitchclick();
}if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();}if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();
}if(typeof this._cropper.getPhotos==='function'){this._item.photos=this._cropper.getPhotos();}this._hideAllPanels();if(this._item.extra.product!=null){this._frame.save(this._item,
callback);}else if(typeof callback==='function'){callback();}};zfp_ItemEditor.prototype.close=function(){if(this._altCropper.$().is(':visible')&&this._altCropper.onswitchclick){this._altCropper.onswitchclick();
}if(this._cropper&&typeof this._cropper.deselectElement==='function'){this._cropper.deselectElement();}if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();
}if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();}this._modalDialog.hide();this._hideAllPanels();this._frame.hide();
};zfp_ItemEditor.prototype._loadWatermarkState=function(photos){var self=this;this._getPhotoWatermarks(photos,function(){self._haveWatermarks=true;if(self._continueInit!=null){self._continueInit();
self._continueInit=null;}});};zfp_ItemEditor.prototype._getPhotoWatermarks=function(photos,oncomplete){var pairs=[];if(photos instanceof Array){for(var i=0;i<photos.length;i++){pairs.push({photoId:parseInt(photos[i].id,
10),ownerId:parseInt(photos[i].owner.id,10)});}}else{for(id in photos){pairs.push({photoId:parseInt(id,10),ownerId:parseInt(photos[id].owner.id,10)});}}zf_stdServerRequestEx('POST',
'/zf/core/printing/printing.asmx','GetPhotoWatermark',[pairs],function(result,error){if(error!=null){return;}for(var id in result){if(photos instanceof Array){for(var x=0;
x<photos.length;x++){if(photos[x].id===parseInt(id)){photos[x].watermarkId=result[id];break;}}}else{photos[id].watermarkId=result[id];}}if(typeof oncomplete==='function'){oncomplete();
}});};zfp_ItemEditor.prototype._switchTo=function(itemIndex,callback){;var item=this._items[itemIndex];var vid=item.vendorId;var self=this;var fadedOut=false;var pricing=null;
var vendorMeta=zf_VendorMeta.cached(vid);var init=function(){if(self._haveWatermarks&&fadedOut&&pricing!=null&&vendorMeta!=null){self._initUI(item,itemIndex,callback);
rbar.fadeIn(300);}};var rbar=this.$('.pc-ie-rbar:first').fadeOut(300,function(){fadedOut=true;init();});if((pricing=item.extra.pricing)==null){zf_PriceList.load([item.priceKey],
this._frame.cart.currency,function(c,p){pricing=item.extra.pricing=p;vendorMeta=zf_VendorMeta.cached(vid);if(vendorMeta!=null){init();}else{var map={};map[vid]='c:'+new Date().getTime().toString();
zf_VendorMeta.load(map,function(meta){vendorMeta=meta[vid];init();});}});}if(this._haveWatermarks){init();}else{this._continueInit=init;}};zfp_ItemEditor.prototype._initUI=function(item,
itemIndex,callback){;var self=this,customerItem=this._customerItems[item.id];var pricing=item.extra.pricing,cropper;;if(item.packagePackageId==null||this._orderEdit){item.extra.product=pricing.findProduct(item.vendorId,
item.productId);}else{var pkg=pricing.findPackage(item.packagePackageId);item.extra.product=pkg.products[item.packagePartId+'.'+item.packageItemId];}var vendorMeta=zf_VendorMeta.cached(item.vendorId);
var productMeta;if(item.extra.product!=null){productMeta=item.extra.product.meta();}else if(vendorMeta!=null){productMeta=vendorMeta.products[item.productId];}item.extra.productMeta=productMeta;
this._templatesApi=null;var cc=item.extra.product?item.extra.product.options[item.optionId].settings['color-conversion']:null;var ccSettings;if(cc&&cc.readOnly!=true){ccSettings=vendorMeta.settings['color-conversion'];
}this._cropperEventCallbacks={centered:function(){self._hideAllPanels();},fit:function(){self._hideAllPanels();},reset:function(){self._hideAllPanels();}};if(typeof vendorMeta.settings['color-conversion']!='undefined'&&typeof vendorMeta.settings['color-conversion'].values==='object'){for(clr in vendorMeta.settings['color-conversion'].values){var id=vendorMeta.settings['color-conversion'].values[clr].id;
this._cropperEventCallbacks[clr]=this.closure(this._updateSetting,'color-conversion',id);}}this._altCropper.$().hide();this._altCropper.hide();if(typeof itemIndex!='number'){;
;;cropper=this._croppers[this._getCropperType(item)+1];if(typeof cropper.destroyDrop==='function'){cropper.destroyDrop();}if(typeof cropper.clearTemplateImage==='function'){cropper.clearTemplateImage();
}cropper.show();cropper.initUI(productMeta,item.photos,customerItem!=null?customerItem.photos:null,this._getCropperData(item),this._photos,ccSettings,null,this._cropperEventCallbacks);
if(cropper!=this._cropper){this._cropper.$().hide();if(typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();}this._cropper=cropper;this._cropper.hide();
this._cropper.$().show();}if(typeof callback==='function'){callback();}}else{cropper=this._croppers[this._getCropperType(item)];var cp=this._croppers;this._croppers=[cp[1],
cp[0],cp[3],cp[2],cp[5],cp[4],cp[7],cp[6],cp[9],cp[8]];var done=false;if(this._cropper!=null&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();
}if(typeof cropper.destroyDrop==='function'){cropper.destroyDrop();}var isForward=itemIndex>this._itemIndex;this._itemIndex=itemIndex;this._pricing=pricing;this._item=item;
var slideCroppers=function(){if(done){return;}if(self._cropper!=null){if(typeof self._cropper.hidealert==='function'){self._cropper.hidealert(true);}var width=self.$().width();
if(isForward){cropper.$().stop(true,true).hide().css('left',width+'px').show().find('.pc-tpc-spill').hide().end().animate({left:0},200,function(){$(this).find('.pc-tpc-spill').show();
});self._cropper.$().stop(true,true).show().find('.pc-tpc-spill').hide().end().animate({left:(width*-1)},200,function(){$(this).find('.pc-tpc-spill').show().end().hide();
self._switching=false;});}else{cropper.$().stop(true,true).hide().css('left',(width*-1)+'px').show().find('.pc-tpc-spill').hide().end().animate({left:0},200,function(){$(this).find('.pc-tpc-spill').show();
});self._cropper.$().stop(true,true).show().find('.pc-tpc-spill').hide().end().animate({left:width},200,function(){$(this).find('.pc-tpc-spill').show().end().hide();
self._switching=false;});}}else{cropper.$().css('left','0px').show();self._switching=false;}self._cropper=cropper;if(typeof callback==='function'){callback();}done=true;
};if(typeof cropper.clearTemplateImage==='function'){cropper.clearTemplateImage();}cropper.initUI(productMeta,item.photos,customerItem!=null?customerItem.photos:null,
this._getCropperData(item),this._photos,ccSettings,slideCroppers,this._cropperEventCallbacks);setTimeout(slideCroppers,800);this.$('.pc-ie-nav:first').showIf(this._items.length>1||!this._fromCart);
var isFirst=itemIndex==0;var isLast=itemIndex==this._items.length-1;this.$('.pc-ie-nav:first A.pc-ie-back').showIf(!isFirst);this.$('.pc-ie-nav:first A.pc-ie-next').showIf(!isLast);
this.$('.pc-ie-nav:first A.pc-ie-close').showIf(isLast&&this._fromCart);this.$('.pc-ie-nav:first A.pc-ie-continue').showIf(isLast&&!this._fromCart&&!productMeta.isTemplated);
this.$('.pc-ie-nav:first A.pc-ie-checkout').showIf(isLast&&!this._fromCart&&!productMeta.isTemplated);this.$('.pc-ie-nav:first A.pc-ie-cancel').showIf((isLast&&!this._fromCart&&productMeta.isTemplated&&!item.id)||this._frame.options.partialPackage);
this.$('.pc-ie-nav:first A.pc-ie-add').showIf(isLast&&!this._fromCart&&productMeta.isTemplated&&!item.id);this.$('.pc-ie-nav:first A.pc-ie-save').showIf(this._frame.options.partialPackage);
if(isLast&&!this._fromCart){this.$('.pc-ie-nav').width(926);this.$('.pc-ie-nav-overlay').width(926);}this.$('.pc-ie-rbar .pc-ie-count').text(zf_stdFormatString('Product {0} of {1}',
itemIndex+1,this._items.length)).showIf(this._items.length>1);this.$('.pc-ie-configall').showIf(this._items.length>1);var optionMeta=vendorMeta.options[item.optionId];
var optionSetMeta=vendorMeta.optionSets[productMeta.optionSetId];this.$('.pc-ie-subtotal').showIf(item.extra.product!=null).toggleClass('pc-ie-digital',this._readOnly||this._settingsOnly||optionSetMeta.isDigital||optionSetMeta.retouching||item.packagePackageId!=null);
this._expanded=$.extend({},this._expandedInit);}$.each(this._templateGrids,function(ix,g){g.clear();});if(!this._readOnly&&item.extra.productMeta.isTemplated){this._addPhotos();
this._setPhotoGridGradients();}this.$('.pc-ie-slidein').removeClass('pc-slidein-s');if(item.settings['cropping']==='cropping-unconfirmed'){item.settings['cropping']='cropping-auto';
}if(item.settings['configuration']==='incomplete'){item.settings['configuration']='confirmed';}if(productMeta!=null&&$.isEmptyObject(this._expanded)){var defaultSetting=productMeta.data['default-setting'];
if(defaultSetting!=null){this._expanded['set-'+defaultSetting]=true;}}this._ews.val(item.quantity);this._updateSubtotal();this._setTitle(item);this._initProductPane(item);
var groupid=productMeta.groupId||'unknown',itemid=productMeta.id||'unknown',vendorid=item.vendorId||'unknown';this._frame.trackPageView('/itemeditor/'+this._getCropperTypeString(cropper.type)+'?group='+groupid+'&id='+itemid+'&vendorid='+vendorid);
};zfp_ItemEditor.prototype._setTitle=function(item){var html=[];var productMeta=item.extra.productMeta;if(productMeta.isTemplated){var i=0,template=null,templates=this._pricing.findTemplates(productMeta.getTemplateProductId(item.optionId));
for(i=0;i<templates.length;i++){if(templates[i].id===item.settings['selected-template']){template=templates[i];break;}};var design=this._pricing.designs[template.designId];
this._longTitle=design.longName;this._shortTitle=design.name;html.push('<h2 class="pc-font3 pc-ie-desc">',this._longTitle,'</h2>');}else if(item.packagePackageId&&!this._orderEdit){var packageMeta=this._pricing.findPackage(item.packagePackageId).meta();
this._longTitle=[zf_stdHtmlEncode(packageMeta.name),' | ',zf_stdHtmlEncode(productMeta.name)].join('');this._shortTitle=zf_stdHtmlEncode(productMeta.name);html.push('<h2 class="pc-font3 pc-ie-desc">',
this._longTitle,'</h2>');}else{this._longTitle='Edit Product';if(typeof item.extra.description==='string'){this._longTitle=item.extra.description;}if(typeof item.extra.productMeta.altName==='string'){this._shortTitle=this._item.extra.productMeta.altName;
}html.push('<h2 class="pc-font3 pc-ie-desc">',this._longTitle,'</h2>');}html.push('<div class="pc-font2">');if(this._items.length>1){html.push('<span class="pc-ie-count">',
zf_stdFormatString('Product {0} of {1}',this._itemIndex+1,this._items.length),'</span>');if(productMeta.isSingleImage||productMeta.isTemplated||(typeof this._altProducts!='undefined'&&this._altProducts.products.length>1)){html.push(':');
}}if(this._fromPage&&!this._frame.options.partialPackage){html.push('<a class="pc-ie-backlink" href="#">< Back</a>');}if(productMeta.isSingleImage||productMeta.isTemplated){if(this._fromPage&&!this._frame.options.partialPackage){html.push(' | ');
}var infotext='Info';if(productMeta.isTemplated){infotext=zf_stdHtmlEncode(productMeta.name);}html.push('<a class="pc-ie-infolink" href="#">',infotext,'</a>');}if(typeof this._altProducts!='undefined'&&!productMeta.isTemplated&&this._altProducts.products.length>1){if(productMeta.isSingleImage){html.push(' | ');
}html.push('<a class="pc-ie-change" href="#">Change</a>');}html.push('</div>');this._frame.setTitle(html.join(''));var self=this;this.$('.pc-ie-title .pc-ie-change').unbind('click').click(function(){if(typeof self._activePanels['products']==='undefined'){self._hideAllPanels();
self._changeProduct();}else{self._activePanels['products'].close();delete self._activePanels['products'];}});this._frame.$('.pc-ie-title .pc-ie-infolink').unbind('click').click(function(){if(typeof self._activePanels['infoleft']==='undefined'){self._hideAllPanels();
self._showProductInfo(productMeta);}else{self._activePanels['infoleft'].close();delete self._activePanels['infoleft'];}});this._frame.$('.pc-ie-title .pc-ie-backlink').unbind('click').click(function(){self._cropper.clearTemplateImage();
self._cropper.deselectElement();self._cropper.$().hide();self._altCropper.$().hide();if(typeof self._cropper.destroyDrop==='function'){self._cropper.destroyDrop();
}self._hideAllPanels();self._frame.animate(self,self._fromPage);self._frame.trackPageView('/productbrowser/designlist?designgroupid='+(self._fromPage.designGroupId||'unknown'));
});};zfp_ItemEditor.prototype.setTitle=function(){this._setTitle(this._item);};zfp_ItemEditor.prototype._hideAllPanels=function(exclude){for(var panel in this._activePanels){if(panel!==exclude){this._activePanels[panel].close();
delete this._activePanels[panel];}}};zfp_ItemEditor.prototype._addActivePanel=function(name,closeCallback){this._activePanels[name]={close:closeCallback};};zfp_ItemEditor.prototype._getCropperType=function(item){;
var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=vendorMeta.products[item.productId];if(item.extra.product==null){return zfp_ItemEditor.Cropper.Simple;
}if(productMeta.isTemplated){return zfp_ItemEditor.Cropper.TemplateProduct;}if(!productMeta.isSingleImage){return zfp_ItemEditor.Cropper.MultiImage;}if(item.photos.length==0||this._photos[item.photos[0].id]==null){return zfp_ItemEditor.Cropper.Simple;
}for(var i=0;i<productMeta.editors.length;i++){var editor=vendorMeta.editors[productMeta.editors[i]];if(editor instanceof zf_VendorMeta.OverlayEditor){return zfp_ItemEditor.Cropper.Template;
}}for(var sid in item.services){if(vendorMeta.services[item.services[sid]].data["editor"]!=null){return zfp_ItemEditor.Cropper.Frame;}}return zfp_ItemEditor.Cropper.Simple;
};zfp_ItemEditor.prototype._getCropperTypeString=function(croppertype){var typeStrings={0:'simple',2:'template',4:'frame',6:'multiimage',8:'templateproduct'};return typeStrings[croppertype];
};zfp_ItemEditor.prototype._getCropperData=function(item,fromaltcropper){var product=item.extra.product,vendorMeta=zf_VendorMeta.cached(item.vendorId),productMeta=item.extra.productMeta,
resetDefaults=item.extra.productMeta.isTemplated&&this._isProductChange;if(this._frame.options.partialPackage){resetDefaults=!resetDefaults&&this._frame.options.partialPackage.resetDefaults;
}var templates=(function(ids){if(!ids){return null;}var answer=[];for(var key in ids){answer=answer.concat(item.extra.pricing.findTemplates(ids[key]));}answer.sort(function(a,
b){return a.id<b.id?-1:a.id===b.id?0:1;});return $.grep(answer,function(element,index){return index===(answer.length-1)||element.id!=answer[index+1].id;});})(productMeta.templateProductIds);
var data={vendorId:item.vendorId,productId:item.productId,optionId:item.optionId,settings:item.settings,services:item.services,templates:templates,cropping:item.settings['cropping']||'cropping-auto',
mode:vendorMeta.options[item.optionId].data['image-mode'],adminView:this._adminView,enforceResolution:false,readOnly:true,error:null,productName:productMeta.name,
id:item.id,resetDefaults:resetDefaults,oldPages:item.oldPages||null,oldElements:item.oldElements||null,selectedElement:item.extra.element||null};this._isProductChange=false;
if(fromaltcropper){data.fromAltCropper=fromaltcropper;}if(typeof this._selectedPhoto[this._itemIndex]==='number'){data.photoIndex=this._selectedPhoto[this._itemIndex];
this._selectedPhoto[this._itemIndex]=null;}if(data.mode==null){for(var sid in item.settings){if(sid=='cropping'||sid=='configuration')continue;var s=vendorMeta.settings[sid];
if(s.type=='List'){if((data.mode=s.values[item.settings[sid]].data['image-mode'])!=null)break;}}}if(item.extra.productMeta.isTemplated){data.pricing=item.extra.pricing;
}if(product!=null){var priceKey=item.priceKey;data.enforceResolution=!item.extra.product.pricings[priceKey.pricingKey];data.readOnly=this._readOnly;if(!data.readOnly){var setting=item.extra.product.options[item.optionId].settings['cropping'],
colorsetting=item.extra.product.options[item.optionId].settings['color-conversion'],attrname='readOnly';if(item.extra.productMeta.isTemplated||(setting&&setting.readOnly&&(!colorsetting||!colorsetting.readOnly))){attrname='croppingReadOnly';
}data[attrname]=setting==null||setting.readOnly;}if(item.packagePackageId!=null&&!this._orderEdit){var pkg=item.extra.pricing.findPackage(item.packagePackageId);
data.productName=pkg.meta().name;}}else if(item.packagePackageId!=null)data.error='This package is no longer available for ordering';else data.error='This product is no longer available for ordering';
return data;};zfp_ItemEditor.prototype._initProductPane=function(item,photo){;var pane=this.$('.pc-ie-edit:first').html('');this._booleanOptions=[];if(item.extra.product!=null){this._addServiceSections(item);
this._addOptionSection(item);this._addSettingSections(item);if(!this._settingsOnly){this._addServiceSetSections(item);}if(typeof this._booleanOptions==='object'&&this._booleanOptions.length>0){this._addBooleanOptionSection(pane,
this._booleanOptions);}if(item.extra.productMeta.isTemplated===true){var template=this._cropper.getTemplate();if(typeof item.packageItemId!=='number'){this._template_addChangeProduct(item,
template);}this._template_addElementSettings(template,this._cropper.getTemplatePage(),this._cropper,item);}if(!this._readOnly){this._addProductLinks(item);}if(!this._readOnly){this._updateOption(item.optionId);
}if(this._orderEdit){this._disableOrderLevelSettings(item);}}if(pane.find('DIV.pc-ie-section, DIV.pc-ie-service, DIV.pc-ie-option').length==0)pane.prepend('<div class="pc-ie-empty">There are no options for this product</div>');
if($.isEmptyObject(this._expanded)){if(typeof this._selectedPhoto[this._itemIndex]!='number'){pane.find('.pc-ie-section:first .pc-ie-sechdr').mousedown();}}else{for(var secId in this._expanded){pane.find('.pc-ie-section[data-secid="'+secId+'"]').removeClass('pc-ie-section-c').addClass('pc-ie-section-o').find('.pc-ie-secbody:first').show();
}}this._setLinkHandlers('.pc-ie-edit:first A');pane.find('A.pc-ie-q').hover(function(){$(this).addClass('pc-color10 pc-border10 pc-bgcolor10');},function(){$(this).removeClass('pc-color10 pc-border10 pc-bgcolor10');
});};zfp_ItemEditor.prototype._initFraming=function(serviceSetId){var vendorMeta=zf_VendorMeta.cached(this._item.vendorId);var serviceSetMeta=vendorMeta.serviceSets[serviceSetId];
if(serviceSetMeta.data['show-as']=='DropList'){this._changeService(serviceSetId,true);}};zfp_ItemEditor.prototype._setLinkHandlers=function(selector){if(!(selector instanceof jQuery))selector=this.$(selector);
selector.click(zf_stdFalse).mousedown(function(e){if(zf_stdIsLeftButton(e)){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('pc-button-d'))$(this).trigger('fastClick');
}});};zfp_ItemEditor.prototype._addProductLinks=function(item){this._altProducts=this._getAlternativeProducts();var html=[];var showBatch=this._items.length>1&&(!this._fromCart||this._orderEdit);
if(showBatch){html.push('<div class="pc-ie-product-links pc-font1">');if(showBatch){html.push('<div><a href="#" class="pc-ie-batch">',zf_stdFormatString('Set Batch Options for {0} items »',
this._items.length),'</a></div>');}html.push('</div>');this.$('.pc-ie-edit').append(html.join(''));var self=this;this.$('.pc-ie-edit:first .pc-ie-product-links A.pc-ie-batch').bind('fastClick',
function(){self._batchOptions();});}};zfp_ItemEditor.prototype._addOptionSection=function(item){var self=this,product=item.extra.product,vendor=product.vendor,vendorMeta=vendor.meta(),
optionSetMeta=vendorMeta.optionSets[product.optionSetId],html=[''];var options=zfp_Configurator.makeUiList(product.options,zf_PriceList.compareMeta);var pane=this.$('.pc-ie-edit'),
showPrice=item.packagePackageId==null;if(optionSetMeta.options.length>1){if(!this._settingsOnly&&options.length>1){if(optionSetMeta.data['option-selection']==='paper-pagecount'){this._addPaperPageRadioSection(pane,
'opt','Page Options',options,function(o,id){return{id:o.id,current:o.id==item.optionId,templateId:id,data:o.meta().data,index:o.meta().index,name:showPrice?zf_stdFormatString('{0} ({1})',
o.meta().altName,zf_stdFormatMoney(o.price.customerPrice)):o.meta().altName,onclick:self.closure(self._updateOption,o.id),oninfo:self.closure(self._showOptionInfo,
vendor.id,o.id)};});}else{this._addRadioSection(pane,'opt',optionSetMeta.longName,options,function(o){return{id:o.id,current:o.id==item.optionId,name:showPrice?zf_stdFormatString('{0} ({1})',
o.meta().altName,zf_stdFormatMoney(o.price.customerPrice)):o.meta().altName,onclick:self.closure(self._updateOption,o.id),oninfo:self.closure(self._showOptionInfo,
vendor.id,o.id)};});}}else{var optionMeta=vendorMeta.options[item.optionId];html=['<div class="pc-ie-option pc-font5 pc-border2">',optionSetMeta.longName,': ','<span class="pc-color4">',
zf_stdHtmlEncode(optionMeta.altName),'</span>','<a class="pc-ie-q" href="#">?</a>','</div>'];pane.append(html.join("")).find('.pc-ie-option:first A:first').bind('fastClick',
function(){self._showOptionInfo(vendor.id,item.optionId);});}}};zfp_ItemEditor.prototype._addSettingSections=function(item){var self=this;var product=item.extra.product;var option=product.options[item.optionId];
var vendor=product.vendor;var vendorMeta=vendor.meta();var pane=this.$('.pc-ie-edit');var settings;if(!this._readOnly||option!=null){settings=zfp_Configurator.makeUiList(option.settings,
zf_PriceList.compareMeta);}else{settings=[];for(var sid in item.settings){settings.push({id:sid,readOnly:false,_meta:vendorMeta.settings[sid]});}settings.sort(function(a,
b){return a._meta.index-b._meta.index;});}for(var i=0;i<settings.length;i++){var s=settings[i];if(s.id=="cropping"||s.id=="configuration"||s.id=="color-conversion"||s.readOnly){continue;
}var settingMeta=vendorMeta.settings[s.id];var values=zfp_Configurator.makeUiList(settingMeta.values,zf_BaseMeta.compare);if(!settingMeta.userVisible){continue;}switch(settingMeta.type){case 'TextLine':var groupMeta=vendorMeta.settingGroups[settingMeta.groupId];
var grouped=[];while(i<settings.length){s=settings[i];settingMeta=vendorMeta.settings[s.id];if(this._expanded['set-'+s.id])this._expanded['grp-'+groupMeta.id]=true;
if(settingMeta.type!="TextLine"||settingMeta.groupId!=groupMeta.id){i--;break;}grouped.push(settingMeta);i++;}this._addLineSection(pane,'grp-'+groupMeta.id,groupMeta.longName,
groupMeta.data["help-text"],grouped,function(s){return{id:s.id,name:s.name,value:item.settings[s.id],maxLength:s.maxLength,onchange:function(v){return self._updateSetting(s.id,
v);}};});break;case 'Text':this._addTextSection(pane,'set-'+s.id,settingMeta.longName,settingMeta.altName,settingMeta.data["help-text"],item.settings[s.id],settingMeta.maxLength,
function(v){return self._updateSetting(s.id,v);});break;case 'ColorList':this._addColorSection(pane,'set-'+s.id,settingMeta.longName,values,function(v){return{id:v.id,
current:v.id==item.settings[s.id],name:v.name,value:v.altName,onclick:self.closure(self._updateSetting,s.id,v.id),oninfo:self.closure(self._showSettingValueInfo,
s.id,v.id)};});break;case 'List':default:this._addRadioSection(pane,'set-'+s.id,settingMeta.name,values,function(v){return{id:v.id,current:v.id===item.settings[s.id],
name:v.name,onclick:self.closure(self._updateSetting,s.id,v.id),oninfo:self.closure(self._showSettingValueInfo,vendor.id,s.id,v.id)};});break;}}};zfp_ItemEditor.prototype._addServiceSetSections=function(item){var self=this;
var pane=this.$('.pc-ie-edit');var product=item.extra.product;var option=product.options[item.optionId];var showPrice=item.packagePackageId==null;var serviceSets={};
if(!this._readOnly||option!=null){$.each(product.options,function(id,o){$.each(o.getServiceSets(),function(ix,ss){serviceSets[ss.id]=ss;});});}else{var vendorMeta=product.vendor.meta();
for(var ssid in item.services)serviceSets[ssid]=vendorMeta.serviceSets[ssid];}serviceSets=zfp_Configurator.makeUiList(serviceSets,zf_BaseMeta.compare);for(var i=0;
i<serviceSets.length;i++){var serviceSet=serviceSets[i];if(serviceSet.data['depends-on']!=null)continue;var current=this._item.services[serviceSet.id];var service=current!=null&&option!=null?option.services[current]:null;
if(serviceSet.data['show-as']=="DropList"||service!=null&&service.mandatory)continue;var ss={};if(option!=null){$.each(product.options,function(id,o){$.each(o.getServices(serviceSet.id),
function(ix,s){ss[s.id]=s;});});}else if(typeof current!='undefined'){ss[current]={id:current,vendorId:item.vendorId,mandatory:false,alwaysOffered:false,serviceSetId:serviceSet.id,
price:new zf_PriceInfo(0),meta:zf_PriceList._getServiceMeta};}var scount=0;for(var y in ss){scount++;}if(scount>1){ss=(serviceSet.data['required']!=null?[]:[null]).concat(zfp_Configurator.makeUiList(ss,
zf_PriceList.compareMeta));this._addRadioSection(pane,'svc-'+serviceSet.id,serviceSet.name,ss,function(s){var id=s!=null?s.id:null;return{id:id!=null?id:"-none",
current:id==current,name:s!=null?(showPrice?zf_stdFormatString("{0} ({1})",s.meta().name,zf_stdFormatMoney(s.price.customerPrice)):s.meta().name):serviceSet.none.name,
onclick:self.closure(self._updateService,true,serviceSet.id,id),oninfo:id!=null?self.closure(self._showServiceInfo,serviceSet.id,id):null};});}else{ss=zfp_Configurator.makeUiList(ss,
zf_PriceList.compareMeta);if(typeof this._booleanOptions==='undefined'){this._booleanOptions=[];}$.each(ss,function(id,svc){var svccurrent=current;var svcset=serviceSet;
self._booleanOptions.push({id:svcset.id,option:svcset,value:svc,callback:function(s){var id=s!=null?s.id:"-none";return{id:id,current:(id===svccurrent),name:s!=null?(showPrice?zf_stdFormatString("{0} ({1})",
s.meta().name,zf_stdFormatMoney(s.price.customerPrice)):s.meta().name):serviceSet.none.name,onclick:self.closure(self._updateService,svcset.id,id),oninfo:id!=null?self.closure(self._showServiceInfo,
svcset.id,id):null};}});});}}};zfp_ItemEditor.prototype._addServiceSections=function(item){var self=this;var product=item.extra.product;var option=product.options[item.optionId];
this.$('.pc-ie-edit .pc-ie-section[class*="opt-svc"]').remove();var serviceSets;if(!this._readOnly&&typeof option==='object'){serviceSets=option.getServiceSets();
}else{var vendorMeta=product.vendor.meta();serviceSets=[];for(var ssid in item.services)serviceSets.push(vendorMeta.serviceSets[ssid]);serviceSets.sort(zf_BaseMeta.compare);
}for(var i=serviceSets.length-1;i>-1;i--){var serviceSet=serviceSets[i];if(serviceSet.data['depends-on']!=null)continue;var current=this._item.services[serviceSet.id];
var service=(current!=null&&option!=null)?option.services[current]:null;if(!this._settingsOnly&&serviceSet.data['show-as']!="DropList"&&(service==null||!service.mandatory)){continue;
}var html=[],dependents=0,sectionDOMId='opt-svc-'+serviceSet.id,attachEvents=false;if(current==null){if(!this._readOnly&&!this._settingsOnly){this._beginSection(html,
sectionDOMId,zf_stdHtmlEncode(serviceSet.altName));if(serviceSet.data['upsell-icon']&&serviceSet.data['upsell-text']&&serviceSet.data['upsell-link-text']){html.push('<table cellspacing="0" data="svc-',
serviceSet.id,'">','<tr class="pc-ie-item pc-ie-item-s pc-font1">','<td class="pc-ie-icon pc-color1 pc-bgcolor1 pc-border7">','<img src="',zfp_Configurator.formatIconUrl(serviceSet.data['upsell-icon']),
'">','</td>','<td class="pc-ie-name pc-color1 pc-bgcolor1 pc-border7">',zf_stdHtmlEncode(serviceSet.data['upsell-text']),'<br /><a class="pc-ie-add" href="#">',zf_stdHtmlEncode(serviceSet.data['upsell-link-text']),
'</a>','</td>','<td class="pc-ie-price pc-color1 pc-bgcolor1 pc-border7">','</td>','</tr>','</table>');}else if(serviceSet.data['required']==null){html.push('<table cellspacing="0" data="svc-',
serviceSet.id,'">','<tr class="pc-ie-item pc-ie-item-s pc-font1">','<td class="pc-ie-icon pc-color1 pc-bgcolor1 pc-border7">','<img src="',zfp_Configurator.formatIconUrl(serviceSet.none.data["dl-icon"]),
'">','</td>','<td class="pc-ie-name pc-color1 pc-bgcolor1 pc-border7">',zf_stdHtmlEncode(serviceSet.none.name),'</td>','<td class="pc-ie-price pc-color1 pc-bgcolor1 pc-border7">',
'</td>','</tr>','<tr>','<td colspan="3">','<a class="pc-ie-add" href="#">',zf_stdFormatString('Add {0}',zf_stdHtmlEncode(serviceSet.altName)),'</a>','</td>','</tr>',
'</table>');}this._endSection(html);attachEvents=true;}}else{var data=this._getServiceDescription(item,serviceSet),extra='',hasIcon=(typeof serviceSet.none.data['dl-icon']==='string'||typeof data.icon==='string');
if(serviceSet.data['secondary']!=null){extra=' pc-ie-service-sec';}this._beginSection(html,sectionDOMId,zf_stdHtmlEncode(serviceSet.altName),data.value,data.price);
html.push('<table cellspacing="0" data="svc-',serviceSet.id,'">','<tr class="pc-ie-item pc-ie-item-s pc-font1">','<td class="pc-ie-icon pc-color1 pc-bgcolor1 pc-border7">');
if(hasIcon){html.push('<img src="',data.icon!=null?zfp_Configurator.formatIconUrl(data.icon):zfp_Configurator.formatIconUrl(serviceSet.none.data['dl-icon']),'">');
}html.push('</td><td class="pc-ie-name pc-color1 pc-bgcolor1 pc-border7">',data.value);if(!this._readOnly&&!this._settingsOnly&&!service.mandatory){html.push('<br /><a class="pc-ie-add" href="#">Change...</a>');
attachEvents=true;}html.push('</td><td class="pc-ie-price pc-color1 pc-bgcolor1 pc-border7">',data.price,'</td></tr>');var optionSets=option.getServiceSets();for(var x=0;
x<optionSets.length;x++){var ss=optionSets[x];if(ss.data['depends-on']===serviceSet.id){dependents++;html.push('<tr class="pc-ie-dlitem">','<td><label for="',ss.id,
'">',zf_stdHtmlEncode(ss.name),':</label></td>','<td colspan="2">','<select class="pc-font1 ews-border1" name="',ss.id,'" id="',ss.id,'"></select>','</td>','</tr>');
}}html.push('</table>');this._endSection(html);}this.$('.pc-ie-edit').prepend(html.join(""));if(dependents>0){this._updateServiceAvailability(this._item);}this.$('.pc-ie-edit .data-secid-'+sectionDOMId+'[data-secid="'+sectionDOMId+'"] .pc-ie-sechdr').mousedown(function(e){self._section_onclick(e,
this);});if(attachEvents){var noAnimation=false;this.$('.pc-ie-edit .data-secid-'+sectionDOMId+'[data-secid="'+sectionDOMId+'"] tr.pc-ie-item').addClass('pointer').mouseover(function(){$(this).find('td').removeClass('pc-color1').addClass('pc-color7').removeClass('pc-bgcolor1').addClass('pc-bgcolor7');
}).mouseout(function(){$(this).find('td').removeClass('pc-color7').addClass('pc-color1').removeClass('pc-bgcolor7').addClass('pc-bgcolor1');});this.$('.pc-ie-edit .data-secid-'+sectionDOMId+'[data-secid="'+sectionDOMId+'"] A.pc-ie-add').bind('fastClick',
function(){var sid=$(this).closest('table').attr('data').substr(4);self._changeService(sid,noAnimation);});this.$('.pc-ie-edit .data-secid-'+sectionDOMId+'[data-secid="'+sectionDOMId+'"] tr.pc-ie-item').click(function(){var sid=$(this).closest('table').attr('data').substr(4);
self._changeService(sid,noAnimation);});this.$('.pc-ie-edit .data-secid-'+sectionDOMId+'[data-secid="'+sectionDOMId+'"] .pc-ie-dlitem SELECT').bind('change',function(e){self._dependent_onchange(e,
$(this).attr('name'));});}}};zfp_ItemEditor.prototype._addBooleanOptionSection=function(pane,options){var html=[];this._beginSection(html,'opt-bool','Options');var infos=[];for(var x=0;
x<options.length;x++){var info=options[x].callback(options[x].value),optname=options[x].value.meta().longName,optid=options[x].value.meta().id,id=this.id+'-r'+(this._nextId++);
if(typeof options[x].value.price==='object'&&options[x].value.price.customerPrice>0){optname=zf_stdFormatString('{0} ({1})',options[x].value.meta().longName,zf_stdFormatMoney(options[x].value.price.customerPrice));
}infos.push(info);html.push('<div class="pc-ie-checkbox">','<input class="pc-ie-checkbox" type="checkbox"',' value="',info.id,'" id="',id,'"/>','<label for="',id,
'">',zf_stdHtmlEncode(optname),'</label>','<a class="pc-ie-q" href="#"',info.oninfo==null?' style="display:none;"':'','>?</a>','</div>');}this._endSection(html);
var section=this._insertSection(pane,html);var readOnly=this._readOnly;section.find('.pc-ie-checkbox INPUT').each(function(i){if((this.checked=infos[i].current)){$(this).attr('checked',
'checked');zfp_ItemEditor._updateSection(section,infos[i].onclick(true));}this.disabled=readOnly;if(!readOnly){$(this).click(function(){zfp_ItemEditor._updateSection(section,
infos[i].onclick($(this).is(':checked')));});}});section.find('.pc-ie-checkbox A').each(function(i){$(this).bind('fastClick',function(){infos[i].oninfo();});});};
zfp_ItemEditor.prototype._template_addChangeProduct=function(item,template){var templates=this._pricing.findTemplates(null,template.designId),vendorMeta=this._pricing.vendors[item.vendorId],
productData={},html=[],i=0,availCount=0,self=this,productId=item.productId,productCache={},cacheComplete=false,optSetId=vendorMeta.products[productId].optionSetId,
optSet=this._pricing.vendors[item.vendorId].meta().optionSets[optSetId];if(templates.length>0&&optSet.data['option-selection']!=='paper-pagecount'){for(i=0;i<templates.length;
i++){var t=templates[i];if(typeof vendorMeta.products!='undefined'){if(cacheComplete){if(productCache[t.templateProductId]){var cached=productCache[t.templateProductId];
productData[t.id+cached.id]={template:$.extend({},t),product:$.extend({},cached)};availCount++;}}else{for(var p in vendorMeta.products){var tm=vendorMeta.products[p].meta();
for(var name in tm.templateProductIds){if(!tm.templateProductIds.hasOwnProperty(name)){continue;}var tpId=tm.getTemplateProductId(name);if(tpId)productCache[tpId]=tm;
if(tpId===t.templateProductId){productData[t.id+tm.id]={template:$.extend({},t),product:$.extend({},tm)};availCount++;}}}cacheComplete=true;}}}productCache=null;
if(availCount>1){this._beginSection(html,'tpc-product','Product');for(p in productData){html.push('<div class="pc-ie-radio">','<input class="pc-ie-radio" type="radio"',
' name="tpc-product"',' value="',productData[p].product.id,'" id="tpc-product-',productData[p].product.id,'" data="',item.vendorId,':',productData[p].product.id,
'" />','<label for="tpc-product-',productData[p].product.id,'">',zf_stdHtmlEncode(productData[p].product.name),'</label>','</div>');}this._endSection(html);}this.$('.pc-ie-edit .data-secid-tpc-product[data-secid="tpc-product"]').remove();
this.$('.pc-ie-edit').prepend(html.join(""));this.$('.pc-ie-edit .data-secid-tpc-product[data-secid=tpc-product] input:radio[value="'+productId+'"]').attr('checked',
'checked');var readOnly=this._readOnly;this.$('.pc-ie-edit .data-secid-tpc-product[data-secid=tpc-product] .pc-ie-sechdr').mousedown(function(e){self._section_onclick(e,
this);});this.$('.pc-ie-edit .data-secid-tpc-product[data-secid=tpc-product] input:radio').each(function(i){var e=$(this),section=e.closest('.pc-ie-section');if(this.checked){var data={value:productData[template.id+productId].product.name,
price:''};zfp_ItemEditor._updateSection(section,data);}this.disabled=readOnly;if(!readOnly){e.click(function(){if(productId!=e.val()){self._modalDialog.headerHTML('Change product?');
if(self._orderEdit){self._modalDialog.bodyHTML('<p>Changing products may reset some of the changes made when the order was placed. We recommend duplicating this order first.</p>');
}else{self._modalDialog.bodyHTML('<p>Changing products may reset changes you have made to photos and text.</p>');}var modalbutton_mover=function(){$(this).removeClass('button-color1 button-bgcolor1 button-border1').addClass('pc-button-h button-color2 button-bgcolor2 button-border2');
};var modalbutton_mout=function(){$(this).removeClass('pc-button-h button-color2 button-bgcolor2 button-border2').addClass('button-color1 button-bgcolor1 button-border1');
};self._modalDialog.setButtons([new zfp_ModalButton(self.id+'_modaldialogbutton0',{text:'Yes, change product',alt:'Yes, change product',events:{mouseover:modalbutton_mover,
mouseout:modalbutton_mout,click:function(){var key=e.attr('data');self._changeItems[key].photos=self._item.photos;for(p in self._item.settings){if(p.match(/text[0-9]+/i)){self._changeItems[key].settings[p]=self._item.settings[p];
}}self._changeItems[key].settings['page-mapping']=self._item.settings['page-mapping'];self._changeItems[key].oldPages=$.extend(true,{},template.pages);self._changeItems[key].oldElements=$.extend(true,
{},template.elements);self._completeChange(self._changeItems[key]);self._pendingChange=null;self._modalDialog.hide();}}}),new zfp_ModalButton(self.id+'_modaldialogbutton1',
{text:'No, cancel change',alt:'No, cancel change',events:{mouseover:modalbutton_mover,mouseout:modalbutton_mout,click:function(){e.closest('.pc-ie-secbody').find(':radio[value="'+productId+'"]').attr('checked',
'checked');self._modalDialog.hide();}}})],true);self._modalDialog.draw();self._modalDialog.show();}});}});if(availCount>0){var items=[];for(var prod in productData){items.push($.extend(this._item.clean(),
{vendorId:item.vendorId,productId:productData[prod].product.id,optionId:null,extra:{description:productData[prod].template.longName},settings:{'selected-template':productData[prod].template.id}}));
}zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[items,this._frame.cart.currency.code],function(result,error){if(error!=null)return;
self._changeItems={};for(var i=0;i<result.length;i++){var r=result[i];r.extra={photo:self._photo,pricing:self._pricing,description:r.extra.description};self._changeItems[r.vendorId+':'+r.productId]=r;
}if(self._pendingChange!=null){self._completeChange(self._changeItems[self._pendingChange]);self._pendingChange=null;}});}}};zfp_ItemEditor.prototype._template_onpagechange=function(template,
page,cropper,data){var i=0,len=template.elements[page].length;if(this._cropper&&typeof this._activePanels['altlayout']==='undefined'&&typeof this._activePanels['template-photo']==='undefined'){for(i=0;
i<len;i++){if(template.elements[page][i].type==='Photo'&&!cropper.getPhoto(template.elements[page][i].imageIndex)){this._template_changePhoto(true);break;}}}this._template_loadAltLayouts(template,
page,cropper,data);this._template_addElementSettings(template,page,cropper,data);};zfp_ItemEditor.prototype._getSavedPageAlternatives=function(settings){var vals=[],pgalt=[],kvp={},
len=0,i=0;if(settings['page-mapping']){vals=settings['page-mapping'].split(',');len=vals.length;for(i=0;i<len;i++){if(vals[i].indexOf(':')>=0){pgalt=vals[i].split(':');
kvp[pgalt[0]]=pgalt[1];}}}return kvp;};zfp_ItemEditor.prototype._getSavedPageAlternative=function(pageid,page,settings){var returnVal=null;if(page.meta.hasAlternatives&&settings['page-mapping']){returnVal=this._getSavedPageAlternatives(settings)[pageid]||page.meta.defaultAlternative;
}else if(page.meta.hasAlternatives&&page.meta.defaultAlternative){returnVal=page.meta.defaultAlternative;}return returnVal;};zfp_ItemEditor.prototype._template_loadAltLayouts=function(template,
page,cropper,data){var html=[''],altid='',p={},i='',cssClass='',self=this,standardClasses='pc-color1 pc-bgcolor1',selectedClasses='pc-color5 pc-bgcolor5',hoverClasses='pc-color7 pc-bgcolor7',
selected='selected',imagerequestid='',ownerid=typeof zf_ownerId!=="undefined"?zf_ownerId:this._getOwnerId(this._photos),ti=null,size={cx:250,cy:130},offset={cx:250,
cy:130};this._templatesApi=new zft_TemplatesApi(ownerid,template.id,zf_stdGetCookie('zf_keyring'),zf_stdGetCookie('zf_5y_visitor'));if(template.pages[page].meta.hasAlternatives){altid=this._getSavedPageAlternative(page,
template.pages[page],data.settings);ti=new zf_TemplateImage(altid,template.pageAlternatives[template.pages[page].meta.pageFamily][altid].width,template.pageAlternatives[template.pages[page].meta.pageFamily][altid].height,
new Date());size=ti.getScaledSize({cx:250,cy:130});offset.cx=(offset.cx-size.cx)/2;offset.cy=(offset.cy-size.cy)/2;for(p in template.pageAlternatives[template.pages[page].meta.pageFamily]){this._templateAltLayoutImages[p]=this._templatesApi.createRequest(p,
new zf_Size(size.cx,size.cy),null,{},{});if(p===altid){cssClass=selectedClasses+' '+selected;}else{cssClass=standardClasses;}html.push('<div class="pc-ie-altlayout-item">',
'<a href="#" id="altlayout-',p,'" class="',cssClass,'">','<img src="/zf/img/null.gif" alt="" width="',size.cx,'" height="',size.cy,'" class="fadeOut" />','</a></div>');
}for(i in this._templateAltLayoutImages){(function(iconimg){self._templatesApi.registerRequest(self._templateAltLayoutImages[iconimg],function(url){$('#altlayout-'+iconimg+' img').css('background-image',
'url('+url+')').removeClass('fadeOut');});})(i);}}this._altLayoutView.getContentNode().innerHTML=html.join('');var panel=this.$dom('altlayout');panel.find('.pc-ie-altlayout-item a').mouseover(function(){if(!$(this).hasClass(selected)){$(this).removeClass(standardClasses).addClass(hoverClasses);
}}).mouseout(function(){if(!$(this).hasClass(selected)){$(this).removeClass(hoverClasses).addClass(standardClasses);}}).click(function(){$(this).parent().parent().find('a.'+selected).removeClass(selectedClasses).removeClass(selected).addClass(standardClasses);
$(this).removeClass(hoverClasses).addClass(selectedClasses).addClass(selected);var id=$(this).attr('id').replace('altlayout-','');if(altid!==id){self._cropper.changePageLayout(page,
id);}return false;});};zfp_ItemEditor.prototype._template_addElementSettings=function(template,page,cropper,data){var textElements=[],photoElements=[],html=[],i=0,len=template.elements[page].length,
len2=0,self=this;if(typeof cropper.getPhotos==='function'){this._item.photos=cropper.getPhotos();}for(i=0;i<len;i++){if(template.elements[page][i].type==='Text'){textElements.push(template.elements[page][i]);
}else if(template.elements[page][i].type==='Photo'){photoElements.push(template.elements[page][i]);}}if(textElements.length>0){this._beginSection(html,'tpc-text',
(template.pages[page].meta.name||'Page')+' Text');len=textElements.length;for(i=0;i<len;i++){html.push('<div class="pc-ie-line full pc-font1 pc-color1 pc-bgcolor1 pointer" ',
'title="Click to edit ',textElements[i].label,'">','<div class="tpc-textlabel pc-color7"><span class="pc-color7">',zf_stdHtmlEncode(textElements[i].label),':</span>',
'<a href="#" class="tpc-textedit"></a>','</div><div id="tpc-text-',textElements[i].name,'" class="tpc-text">');var val='';if(typeof data.settings[textElements[i].name]==='string'){val=data.settings[textElements[i].name];
}else{val=textElements[i].placeholder;}if(val.length>30){val=val.substr(0,30)+'...';}html.push(zf_stdHtmlEncode(val));html.push('</div></div>');}this._endSection(html);
}if(photoElements.length>0){this._beginSection(html,'tpc-photo',(template.pages[page].meta.name||'Page')+' Photos');len=photoElements.length;for(i=0;i<len;i++){html.push('<div class="pc-ie-photobox pc-border12" id="tpc-photo-',
photoElements[i].name,'">','<img src="/zf/img/null.gif" alt="',photoElements[i].label,'" title="Click to edit ',photoElements[i].label,'" />','</div>');}this._endSection(html);
if(typeof this._item!='undefined'){var method=zf_ProcessingMethod.StandardMediumThumbnail;len=photoElements.length;for(i=0;i<len;i++){var photo=null;len2=this._item.photos.length;
for(var x=0;x<len2;x++){if(this._item.photos[x].index===photoElements[i].imageIndex){photo=this._item.photos[x];break;}}if(photo!=null){var name=photoElements[i].name;
var id='#tpc-photo-'+name+' img';if(typeof this._nextKey[name]==='undefined'){this._nextKey[name]=0;}var key=this._asyncKey[name]=++this._nextKey[name];this._loader[name]=new zf_PhotoLoader(this._photos[photo.id],
method);this._loader[name].onload=this.closure(this._thumbnail_onload,id,key,name);this._loader[name].start();}}}}this.$('.pc-ie-edit .data-secid-tpc-text[data-secid="tpc-text"], .pc-ie-edit .data-secid-tpc-photo[data-secid="tpc-photo"]').remove();
var section=self._insertSection(self.$('.pc-ie-edit'),html);section.find('.pc-ie-line').unbind().click(function(){var te=$(this).find('.tpc-text'),id=te.attr('id').replace('tpc-text-',
'');if(self._altCropper.$().is(':visible')){self._switchCroppers();}else{if(!self._selectedElement){cropper.selectElement(id);self._selectedElement=te;}else if(self._selectedElement.attr('id')!=te.attr('id')){cropper.saveElement(cropper.getActiveElementVal(),
function(){cropper.deselectElement(function(){cropper.selectElement(id);self._selectedElement=te;});});}else{cropper.deselectElement();}}}).mouseover(function(){$(this).find('.tpc-textlabel, .tpc-text').removeClass('pc-color1').removeClass('pc-bgcolor1').addClass('pc-color7').addClass('pc-bgcolor7');
}).mouseout(function(){$(this).find('.tpc-textlabel, .tpc-text').removeClass('pc-color7').removeClass('pc-bgcolor7').addClass('pc-color1').addClass('pc-bgcolor1');
}).end().find('.tpc-textedit').unbind().bind('fastClick',function(){$(this).closest('.pc-ie-line').click();});section.find('.pc-ie-photobox').unbind().click(function(){var pb=$(this),
id=pb.attr('id').replace('tpc-photo-','');if(self._altCropper.$().is(':visible')){self._switchCroppers();}else{if(!self._selectedElement){cropper.selectElement(id);
self._selectedElement=pb;}else if(self._selectedElement.attr('id')!=pb.attr('id')){cropper.saveElement(cropper.getActiveElementVal(),function(){cropper.deselectElement(function(){cropper.selectElement(id);
self._selectedElement=pb;});});}else{cropper.saveElement(null,function(){cropper.deselectElement();});}}}).mouseover(function(){if(!$(this).hasClass('selected')){$(this).removeClass('pc-border12').addClass('pc-border10');
}}).mouseout(function(){if(!$(this).hasClass('selected')){$(this).removeClass('pc-border10').addClass('pc-border12');}});};zfp_ItemEditor.prototype._thumbnail_onload=function(state,
url,element,key,keyindex,callback){if(key!=this._asyncKey[keyindex]){if(typeof callback==='function'){callback();}return;}else{this._asyncKey[keyindex]=null;this.$(element).css('background-image',
'url('+url+')');if(typeof callback==='function'){callback();}}};zfp_ItemEditor.prototype._template_selectElement=function(id){var element=this.$('.pc-ie-edit #tpc-photo-'+id+', .pc-ie-edit #tpc-text-'+id);
this._selectedElement=element;element.addClass('selected').addClass('pc-border6').removeClass('pc-border12').closest('.pc-ie-section-c').find('.pc-ie-sechdr').mousedown();
this._settingsView.scrollTo(element.position().top+80);};zfp_ItemEditor.prototype._template_deselectAllElements=function(){this.$('.pc-ie-edit .data-secid-tpc-photo .pc-ie-photobox, .pc-ie-edit .tpc-text').removeClass('selected').removeClass('pc-border6').addClass('pc-border12');
this._selectedElement=null;};zfp_ItemEditor.prototype._template_ondeselect=function(){this._template_deselectAllElements();this._hideAllPanels('template-photo');};zfp_ItemEditor.prototype._template_reloadthumbnails=function(template,
page){var method=zf_ProcessingMethod.StandardMediumThumbnail;for(i=0;i<template.elements[page].length;i++){if(template.elements[page][i].type==='Photo'){var element=template.elements[page][i];
var photo=null;for(var x=0;x<this._item.photos.length;x++){if(this._item.photos[x].index===element.imageIndex){photo=this._item.photos[x];break;}}if(photo!=null){var name=element.name;
var id='#tpc-photo-'+name+' img';if(typeof this._nextKey[name]==='undefined'){this._nextKey[name]=0;}var key=this._asyncKey[name]=++this._nextKey[name];this._loader[name]=new zf_PhotoLoader(this._photos[photo.id],
method);this._loader[name].onload=this.closure(this._thumbnail_onload,id,key,name);this._loader[name].start();}}}};zfp_ItemEditor.prototype._disableOrderLevelSettings=function(item){var option=item.extra.product.options[item.optionId];
for(var id in item.settings){var setting=option.settings[id];if(setting.meta().isOrderLevel){var section=this.$('.pc-ie-edit:first .pc-ie-section[data-secid="set-'+id+'"]');
this._disableRadioSection(section,item.settings[id],'Use Batch Options to change this setting as it needs to apply to all products in the order.');}}};zfp_ItemEditor.prototype._template_changeActiveElementValue=function(value){if(this._selectedElement&&this._selectedElement.hasClass('tpc-text')){var val=value||'';
if(val.length>30){val=val.substr(0,30)+'...';}this._selectedElement.html(zf_stdHtmlEncode(val));this._settingsView.update();}};zfp_ItemEditor.prototype._template_changePhoto=function(noHide){var panelName='template-photo';
if(typeof this._activePanels[panelName]==='undefined'){var panel=this.$dom(panelName),self=this;this._resizeTemplatePhoto();this._hideAllPanels();this.$('.pc-ie-nav').hide();
this.$('.pc-ie-rbar').hide();this._addActivePanel(panelName,function(){self.$('.pc-ie-rbar').show();self.$('.pc-ie-nav').show();self._settingsView.update();self._frame.slideOutPanel(panel);
$('.pc-tabheader li',self.$dom('template-photo')).removeClass('selected');$('.pc-tabbody',self.$dom('template-photo')).removeClass('active');if(typeof self._cropper.getToolbar==='function'){self._cropper.getToolbar().unselectButton('action-change-photo');
}});$('.pc-tabbox .pc-tabheader li:first',this.dom('template-photo')).trigger('fastClick');this._frame.slideInPanel(panel,function(){self._resizeTemplatePhoto();
});}else if(noHide!==true){this._activePanels[panelName].close();delete this._activePanels[panelName];}};zfp_ItemEditor.prototype._template_changeLayout=function(){var panelName='altlayout';
if(typeof this._activePanels[panelName]==='undefined'){var panel=this.$dom(panelName),self=this;this._hideAllPanels();this.$('.pc-ie-nav').hide();this.$('.pc-ie-rbar').hide();
this._addActivePanel(panelName,function(){self.$('.pc-ie-rbar').show();self.$('.pc-ie-nav').show();self._settingsView.update();self._frame.slideOutPanel(panel);if(typeof self._cropper.getToolbar==='function'){self._cropper.getToolbar().unselectButton('action-change-layout');
}});this._frame.slideInPanel(panel);this._resizeAltLayout();}else{this._activePanels[panelName].close();delete this._activePanels[panelName];}};zfp_ItemEditor.prototype._template_addPhoto=function(photo){if(typeof this._photos[photo.id]==='undefined'){this._photos[photo.id]=photo;
}};zfp_ItemEditor.prototype._getServiceDescription=function(item,serviceSet){;;var sid;if((sid=item.services[serviceSet.id])==null)return serviceSet.none.name;var option=item.extra.product.options[item.optionId];
var vendorMeta=item.extra.product.vendor.meta();var serviceMeta;if(option!=null)serviceMeta=option.services[sid].meta();else serviceMeta=vendorMeta.services[sid];
var desc=['<span class="pc-ie-main">',serviceMeta.longName,'</span>'];var price=option!=null?option.services[sid].price.customerPrice:0;var icon=serviceMeta.data!=null?serviceMeta.data['dl-icon']:null;
var serviceSets;var applicable;if(option!=null){serviceSets=option.getServiceSets();applicable=this._getApplicableServiceSets(item);}else{serviceSets=[];applicable={};
for(var ssid in item.services){serviceSets.push(vendorMeta.serviceSets[ssid]);applicable[ssid]=true;}serviceSets.sort(zf_BaseMeta.compare);}for(var i=0;i<serviceSets.length;
i++){var ss=serviceSets[i];if(applicable[ss.id]&&ss.data["depends-on"]==serviceSet.id){if(item.services[ss.id]!=null&&option!=null){price+=option.services[item.services[ss.id]].price.customerPrice;
}}}price=item.packagePackageId==null?zf_stdFormatMoney(price):'';return{value:desc.join(''),price:price,icon:icon};};zfp_ItemEditor.prototype._updateSubtotal=function(){if(this._item.extra.product==null)return;
else if(this._item.packagePackageId==null){var product=this._item.extra.product;var option=product.options[this._item.optionId];var subtotal=option.price.customerPrice;
for(var sid in this._item.services){var s=option.services[this._item.services[sid]];if(s!=null)subtotal+=s.price.customerPrice;}this.$('.pc-ie-subtotal:first LABEL.pc-ie-money').text('Subtotal:');
this.$('.pc-ie-subtotal:first SPAN.pc-ie-money').text(zf_stdFormatMoney(subtotal*this._item.quantity,this._frame.cart.currency));}else if(!this._orderEdit){var pkg=this._pricing.findPackage(this._item.packagePackageId);
this.$('.pc-ie-subtotal:first LABEL.pc-ie-money').text('Package price:');this.$('.pc-ie-subtotal:first SPAN.pc-ie-money').text(zf_stdFormatMoney(pkg.price,this._frame.cart.currency));
}else this.$('.pc-ie-subtotal:first LABEL.pc-ie-money').text('');};zfp_ItemEditor.prototype._updateOption=function(optionId){;var product=this._item.extra.product;var option=product.options[optionId];
var vendorMeta=zf_VendorMeta.cached(product.vendorId);var optionSetMeta=vendorMeta.optionSets[product.meta().optionSetId];var self=this;var serviceSets={};$.each(option.getServiceSets(),
function(ix,ss){serviceSets[ss.id]=ss;});this.$('.pc-ie-section').each(function(){var section=$(this);var secId=section.attr('data-secid');if(secId.indexOf('svc-')==0){var setId=secId.substr(4);
if(serviceSets[setId]!=null)self._enableRadioSection(section);else{var serviceSetMeta=vendorMeta.serviceSets[setId];var message=zf_stdFormatString('{0} is not available for the selected {1}',
serviceSetMeta.longName,optionSetMeta.longName);self._disableRadioSection(section,'-none',message);}}});if(optionId!=this._item.optionId){this._item.optionId=optionId;
var updated=false,croppa=this._cropper;if(this._altCropper&&this._altCropper.$().is(':visible')){croppa=this._altCropper;}var services=$.extend(this._item.services);
for(var setId in services){var sid=services[setId];if(option.services[sid]==null){delete this._item.services[setId];updated=true;}}for(setId in serviceSets){var serviceSetMeta=serviceSets[setId];
if((sid=serviceSetMeta.data["required"])!=null&&this._item.services[setId]==null){this._item.services[setId]=sid;updated=true;}}croppa.update(this._getCropperData(this._item));
if(updated){this._addServiceSections(this._item);this._setLinkHandlers('.pc-ie-edit:first .pc-ie-section[data-secid="opt-svc"] A');if(this._item.extra.productMeta.isTemplated===true){var template=croppa.getTemplate();
if(typeof this._item.packageItemId!=='number'){this._template_addChangeProduct(this._item,template);}this._template_addElementSettings(template,croppa.getTemplatePage(),
croppa,this._item);}}this._updateSubtotal();}var price=this._item.packagePackageId==null?zf_stdFormatMoney(option.price.customerPrice):"";var value=option.meta().altName;
if(optionSetMeta.data['option-selection']==='paper-pagecount'){value=option.meta().data['paper-label']+', '+option.meta().data['page-count']+' pages';}return{value:value,
price:price};};zfp_ItemEditor.prototype._enableRadioSection=function(section){section.find('.pc-ie-error').remove();section.find('INPUT.pc-ie-radio').each(function(){this.disabled=false;
});};zfp_ItemEditor.prototype._disableRadioSection=function(section,value,message){section.find('INPUT.pc-ie-radio').val([value]).each(function(){this.disabled=true;if(this.value==value)$(this).triggerHandler('click');
});if(section.find('.pc-ie-secbody:first .pc-ie-error').length<1){section.find('.pc-ie-secbody:first').prepend('<div class="pc-ie-error pc-color8">'+zf_stdHtmlEncode(message)+'</div>');
}else{section.find('.pc-ie-secbody:first .pc-ie-error').html(zf_stdHtmlEncode(message));}};zfp_ItemEditor.prototype._updateSetting=function(settingId,value){;;var vendorMeta=zf_VendorMeta.cached(this._item.vendorId);
var settingMeta=vendorMeta.settings[settingId];var display=value;switch(settingMeta.type){case 'List':display=settingMeta.values[value].altName;break;case 'ColorList':display=settingMeta.values[value].name;
break;case 'Text':this._validateText(settingMeta,value);value=value.substr(0,settingMeta.maxLength);if(display!=null&&display.length>7){display=display.substr(0,
7)+'...';}break;case 'TextLine':this._validateText(settingMeta,value);value=value.substr(0,settingMeta.maxLength);var map={};for(var id in this._item.settings){var s=vendorMeta.settings[id];
if(s.groupId==settingMeta.groupId){map[id]=s;}}var list=zfp_Configurator.makeUiList(map,zf_BaseMeta.compare);for(var i=0;i<list.length;i++){s=list[i];display=this._item.settings[s.id];
if(display!=null&&display.length>0){break;}}if(display!=null&&display.length>7){display=display.substr(0,7)+'...';}break;default:display='';break;}if(value!=this._item.settings[settingId]){var oldValue=this._item.settings[settingId];
this._item.settings[settingId]=value;if(this.$('.pc-ie-section[data-secid="set-'+settingId+'"] input:radio[value='+value+']').is(':not(:checked)')){var section=this.$('.pc-ie-section[data-secid="set-'+settingId+'"]');
section.find('input:radio[value='+value+']').attr('checked','checked');section.find('.pc-ie-sechdr').attr('title',settingMeta.values[value].name);section.find('.pc-ie-sechdr .pc-ie-name .pc-ie-val span').html(settingMeta.values[value].name);
}if(this._cropper!=null){var data=this._getCropperData(this._item),croppa=this._cropper;if(this._altCropper&&this._altCropper.$().is(':visible')){croppa=this._altCropper;
}if(settingId==="wrap-treatment"&&(value==="original"||oldValue==="original")){croppa.updateWrap(data);}croppa.update(data);}}return{value:display!=null?display:'',
price:''};};zfp_ItemEditor.prototype._updateService=function(ischecked,serviceSetId,serviceId){;if(serviceId!=null&&ischecked===true){this._item.services[serviceSetId]=serviceId;
}else{delete this._item.services[serviceSetId];}this._updateSubtotal();var vendorMeta=zf_VendorMeta.cached(this._item.vendorId);var meta;var selectedBoolOptions=0,
priceBoolOptions=0,isBoolService=false,selectedLabel='';for(var i=0;i<this._booleanOptions.length;i++){if(this._item.services[this._booleanOptions[i].id]===this._booleanOptions[i].value.id){selectedBoolOptions++;
priceBoolOptions+=this._booleanOptions[i].value.price.customerPrice;if(selectedBoolOptions>1){selectedLabel=zf_stdFormatString('({0} Selected)',selectedBoolOptions);
}else{selectedLabel=this._booleanOptions[i].value.meta().longName;}}if(this._booleanOptions[i].id===serviceSetId&&this._booleanOptions[i].value.id===serviceId){isBoolService=true;
}}if(isBoolService){return{value:selectedLabel,price:priceBoolOptions>0?zf_stdFormatMoney(priceBoolOptions):''};}else{if(serviceId===null||ischecked===false){meta=vendorMeta.serviceSets[serviceSetId].none;
return{value:meta.name,price:''};}else{meta=vendorMeta.services[serviceId];var product=this._item.extra.product;var option=product.options[this._item.optionId];var price='';
if(this._item.packagePackageId==null&&option!=null){price=zf_stdFormatMoney(option.services[serviceId].price.customerPrice);}return{value:meta.altName,price:price};
}}};zfp_ItemEditor.prototype._addRadioSection=function(pane,sectionId,sectionName,items,callback){var html=[];this._beginSection(html,sectionId,sectionName);var infos=[];for(var i=0;
i<items.length;i++){var info=callback(items[i]);infos.push(info);var id=this.id+'-r'+(this._nextId++);html.push('<div class="pc-ie-radio">','<input class="pc-ie-radio" type="radio"',
' name="pc-ie-',this._index,sectionId,'"',' value="',info.id,'" id="',id,'"/>','<label for="',id,'">',zf_stdHtmlEncode(info.name),'</label>','<a class="pc-ie-q" href="#"',
info.oninfo==null?' style="display:none;"':'','>?</a>','</div>');}this._endSection(html);var section=this._insertSection(pane,html);var readOnly=this._readOnly;section.find('.pc-ie-radio INPUT').each(function(i){if((this.checked=infos[i].current))zfp_ItemEditor._updateSection(section,
infos[i].onclick());this.disabled=readOnly;if(!readOnly){$(this).click(function(){zfp_ItemEditor._updateSection(section,infos[i].onclick());});}});section.find('.pc-ie-radio A').each(function(i){$(this).bind('fastClick',
function(){infos[i].oninfo();});});};zfp_ItemEditor.prototype._addColorSection=function(pane,sectionId,sectionName,items,callback){var html=[];this._beginSection(html,sectionId,
sectionName);var infos=[];for(var i=0;i<items.length;i++){var info=callback(items[i]);infos.push(info);html.push('<div class="pc-ie-color pc-border10">','<a href="#" style="background-color:#',
info.value,';"',' title="',zf_stdHtmlEncode(info.name),'"></a>','</div>');}this._endSection(html);var section=this._insertSection(pane,html);var readOnly=this._readOnly;
section.find('.pc-ie-color').each(function(i){var info=infos[i];var current=info.current;var onclick=function(e){e.preventDefault();e.stopPropagation();var data=info.onclick();
$(this).closest('.pc-ie-secbody').find('.pc-ie-color').removeClass('pc-ie-color-c').find('A:first').removeClass('pc-border1').addClass('ews-border1');$(this).removeClass('ews-border1').addClass('pc-border1').closest('.pc-ie-color').addClass('pc-ie-color-c');
zfp_ItemEditor._updateSection(section,data);};if(current)zfp_ItemEditor._updateSection(section,info.onclick());$(this).toggleClass('pc-ie-color-c',current).find('A:first').toggleClass('pc-border1',
current).toggleClass('ews-border1',!current).iff(!readOnly).click(onclick);});};zfp_ItemEditor.prototype._addLineSection=function(pane,sectionId,sectionName,helpText,items,callback){var html=[];
this._beginSection(html,sectionId,sectionName);if(helpText!=null)html.push('<div class="pc-ie-help">',zf_stdHtmlEncode(helpText),'</div>');var infos=[];for(var i=0;
i<items.length;i++){var info=callback(items[i]);infos.push(info);if(info.value==null)info.value="";html.push('<div class="pc-ie-line">','<label for="',this.id,'-',
info.id,'">',zf_stdHtmlEncode(info.name),'</label>','<input type="text" id="',this.id,'-',info.id,'"',' class="pc-font1 ews-border1 ews-color1 ews-bgcolor1"',' value="',
zf_stdHtmlEncode(info.value),'"',' maxLength="',info.maxLength,'"/>','</div>');}this._endSection(html);var section=this._insertSection(pane,html);var readOnly=this._readOnly;
section.find('.pc-ie-line INPUT').each(function(i){var onchange=infos[i].onchange;var handler=function(){zfp_ItemEditor._updateSection(section,onchange($(this).val()));
};handler.apply(this);$(this).bind('change',handler).bind('keyup',handler)[0].disabled=readOnly;});};zfp_ItemEditor.prototype._addTextSection=function(pane,sectionId,sectionName,
placeholder,helpText,value,maxLength,onchange){var html=[];this._beginSection(html,sectionId,sectionName);if(helpText!=null)html.push('<div class="pc-ie-help">',
zf_stdHtmlEncode(helpText),'</div>');if(value==null)value="";html.push('<div class="pc-ie-text">','<textarea class="pc-font1 ews-border1 ews-color1 ews-bgcolor1"',
' placeholder="',placeholder,'"',' maxLength="',maxLength,'">',zf_stdHtmlEncode(value),'</textarea>','</div>');this._endSection(html);var section=this._insertSection(pane,
html);var self=this;var handler=function(){var text=$(this);var val=text.hasClass('pc-ie-placeholder')?'':text.val();zfp_ItemEditor._updateSection(section,onchange(val));
};section.find('.pc-ie-text TEXTAREA').bind('change keyup',handler).each(function(){self._enablePlaceholder(this);this.disabled=self._readOnly;handler.apply(this);
});};zfp_ItemEditor.prototype._addPaperPageRadioSection=function(pane,sectionId,sectionName,items,callback){var self=this,html=[],paperinfos=[],pageinfos=[],st=[],protoitems=[],
i=0,len=0,itm='',id='',itemmeta={},info={},papercategories={},paperitems=[],pageitems=[],currentPaperType='';this._beginSection(html,sectionId,sectionName);$.each(items,
function(index){st=self._item.extra.pricing.findTemplates(self._item.extra.productMeta.templateProductIds[items[index].id],self._cropper.getTemplate().designId);
if(st.length>0){protoitems.push($.extend(self._item.clean(),{optionId:items[index].id,settings:{'selected-template':st[0].id}}));}itemmeta=items[index].meta();if(!papercategories[itemmeta.data['paper-label']]){paperitems.push(items[index]);
papercategories[itemmeta.data['paper-label']]=true;}if(items[index].id===self._item.optionId){currentPaperType=itemmeta.data['paper-label'];}});this._changeItems=null;
this._pendingChange=null;zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[protoitems,this._frame.cart.currency.code],function(result,
error){if(error!=null){return;}self._changeItems={};for(var i=0;i<result.length;i++){var r=result[i];r.extra={photo:self._photo,pricing:self._pricing,description:r.extra.description};
self._changeItems[r.settings['selected-template']+':'+r.optionId]=r;}if(self._pendingChange!=null){self._changePageCount(null,self._pendingChange);}});html.push('<div class="pc-ie-optionsubgroup categories">',
'<div class="pc-ie-optionsublabel">Paper type:</div>');len=paperitems.length;for(i=0;i<len;i++){info=callback(paperitems[i]);paperinfos.push(info);itemmeta=paperitems[i].meta();
id=this.id+'-r'+(this._nextId++);html.push('<div class="pc-ie-radio categories">','<input class="pc-ie-radio" type="radio"',' name="pc-ie-',this._index,sectionId,
'-papertypes"',' value="',itemmeta.data['paper-label'],'" id="',id,'"/>','<label for="',id,'">',zf_stdHtmlEncode(itemmeta.data['paper-label']),'</label>','<a class="pc-ie-q" href="#"',
info.oninfo==null?' style="display:none;"':'','>?</a>','</div>');}html.push('</div><div class="pc-ie-optionsubgroup vals">','<div class="pc-ie-optionsublabel">Number of pages:</div></div>');
this._endSection(html);var section=this._insertSection(pane,html);var readOnly=this._readOnly;section.find('.pc-ie-radio.categories INPUT').each(function(i){if(paperinfos[i].data['paper-label']===currentPaperType){this.checked=true;
self._buildPageRadioSubSection(section,paperinfos[i],items,callback);}this.disabled=readOnly;if(!readOnly){$(this).click(function(){self._buildPageRadioSubSection(section,
paperinfos[i],items,callback);});}});section.find('.pc-ie-radio A').each(function(i){$(this).bind('fastClick',function(){paperinfos[i].oninfo();});});};zfp_ItemEditor.prototype._changePageCount=function(e,
key){if(this._changeItems&&this._changeItems[key]){var template=this._cropper.getTemplate();this._changeItems[key].photos=this._item.photos;for(p in this._item.settings){if(p.match(/text[0-9]+/i)){this._changeItems[key].settings[p]=this._item.settings[p];
}}this._changeItems[key].settings['page-mapping']=this._item.settings['page-mapping'];this._changeItems[key].oldPages=$.extend(true,{},template.pages);this._changeItems[key].oldElements=$.extend(true,
{},template.elements);this._completeChange(this._changeItems[key]);this._pendingChange=null;}else{this._pendingChange=key;}};zfp_ItemEditor.prototype._buildPageRadioSubSection=function(section,
paperinfo,items,callback){var self=this,len=items.length,sectionId=$(section).attr('data-secid'),st=[],i=0,id='',info={},meta={},infos=[],html=[''],currentFound=false,
currentItem={};for(i=0;i<len;i++){st=this._item.extra.pricing.findTemplates(this._item.extra.productMeta.templateProductIds[items[i].id],this._cropper.getTemplate().designId);
if(st.length===0){continue;}info=callback(items[i],st[0].id);if(items[i].meta().data['paper-label']===paperinfo.data['paper-label']){infos.push(info);meta=items[i].meta();
if(info.current){currentFound=true;}id=self.id+'-r'+(this._nextId++);html.push('<div class="pc-ie-radio vals">','<input class="pc-ie-radio" type="radio"',' name="pc-ie-',
this._index,sectionId,'"',' value="',(info.templateId+':'+info.id),'" id="',id,'"/>','<label for="',id,'">',zf_stdHtmlEncode(meta.data['page-count']),' (',zf_stdFormatMoney(items[i].price.customerPrice),
')','</label>','</div>');}if(info.current){currentItem=info;}}$(section).find('.pc-ie-radio.vals').remove();$(section).find('.pc-ie-optionsubgroup.vals .pc-ie-optionsublabel').after(html.join(''));
if(!currentFound){var newkey=null;len=infos.length;for(i=0;i<len;i++){if(i===0){newkey=infos[i].templateId+':'+infos[i].id;infos[i].current=true;}if(infos[i].data['page-count']===currentItem.data['page-count']){infos[0].current=false;
newkey=infos[i].templateId+':'+infos[i].id;infos[i].current=true;break;}}if(newkey!==null){if(!this._changeItems||!this._changeItems[newkey]){this._pendingChange=newkey;
}else{this._changePageCount(null,newkey);}}}section.find('.pc-ie-radio.vals INPUT').each(function(i){var optioninfos=infos;if((this.checked=infos[i].current)){zfp_ItemEditor._updateSection(section,
infos[i].onclick());}this.disabled=self._readOnly;if(!self._readOnly){$(this).click(function(){var rdio=$(this);if(currentItem.templateId!=rdio.val()){var rdioval=rdio.val(),
ids=rdioval.split(':'),info={};if(ids.length<2){ids=['',''];}info=$.first(infos,function(nfo){return(nfo.templateId===ids[0]&&nfo.id===ids[1]);}).value;if(info.index<currentItem.index){self._modalDialog.headerHTML('Change Page Count?');
self._modalDialog.bodyHTML('<p>Changing the page count of this product may result in losing some cropped photos and text.</p>');var modalbutton_mover=function(){$(this).removeClass('button-color1 button-bgcolor1 button-border1').addClass('pc-button-h button-color2 button-bgcolor2 button-border2');
};var modalbutton_mout=function(){$(this).removeClass('pc-button-h button-color2 button-bgcolor2 button-border2').addClass('button-color1 button-bgcolor1 button-border1');
};self._modalDialog.setButtons([new zfp_ModalButton(self.id+'_modaldialogbutton0',{text:'Yes, change pages',alt:'Yes, change pages',events:{mouseover:modalbutton_mover,
mouseout:modalbutton_mout,click:function(e){if(!self._changeItems||!self._changeItems[rdioval]){self._pendingChange=rdioval;}else{self._changePageCount(e,rdioval);
}self._modalDialog.hide();}}}),new zfp_ModalButton(self.id+'_modaldialogbutton1',{text:'No, cancel change',alt:'No, cancel change',events:{mouseover:modalbutton_mover,
mouseout:modalbutton_mout,click:function(){var id=currentItem.templateId+':'+currentItem.id;rdio.closest('.pc-ie-secbody').find(':radio[value="'+id+'"]').attr('checked',
'checked');self._modalDialog.hide();}}})],true);self._modalDialog.draw();self._modalDialog.show();}else{if(!self._changeItems||!self._changeItems[rdioval]){self._pendingChange=rdioval;
}else{self._changePageCount(null,rdioval);}}}});}});};zfp_ItemEditor.prototype._enablePlaceholder=function(input){if('placeholder' in input)return;input=$(input);input.bind('focus',
function(){var input=$(this);if(input.hasClass('pc-ie-placeholder'))input.removeClass('pc-ie-placeholder').val('');});input.bind('blur',function(){var input=$(this);
if(!input.val())input.addClass('pc-ie-placeholder').val(input.attr('placeholder'));});input.triggerHandler('blur');};zfp_ItemEditor.prototype._beginSection=function(html,sectionId,
sectionName,value,price){var formattedValue='<span class="pc-ie-val"></span>';if(typeof value!='undefined'){formattedValue='<span class="pc-ie-val">: <span class="pc-color1">'+value+'</span></span>';
}var formattedPrice='';if(typeof price!='undefined'&&price>0){formattedPrice=price;}var inlinestyle='';if(this.$().css('font-family').indexOf('Courier')>=0){inlinestyle='font-size: 1em;';
}html.push('<div class="pc-ie-section pc-ie-section-c pc-font1 data-secid-',sectionId,'" data-secid="',sectionId,'">','<div class="pc-ie-sechdr" style="',inlinestyle,
'" title="',(typeof value!='undefined'?$(value).text():''),'">','<div class="pc-ie-name pc-color9 pc-bgcolor9">','<span class="pc-color1 pc-ie-sechdr-c">\u25BA</span>',
'<span class="pc-color1 pc-ie-sechdr-o">\u25BC</span>',sectionName,formattedValue,'</div>','<div class="pc-ie-money pc-color9 pc-bgcolor9">','<span class="pc-ie-val">',
formattedPrice,'</span>','</div>','</div>','<div class="pc-ie-secbody" style="',inlinestyle,'display:none;">');};zfp_ItemEditor.prototype._endSection=function(html){html.push('</div></div>');
};zfp_ItemEditor._updateSection=function(section,data){var value=data.value!=null&&data.value.length>0?': <span class="pc-color1">'+zf_stdHtmlEncode(data.value)+'</span>':'';section.find('.pc-ie-sechdr:first .pc-ie-name .pc-ie-val').html(value).end().find('.pc-ie-sechdr:first .pc-ie-money .pc-ie-val').text(data.price).end().find('.pc-ie-sechdr:first').attr('title',
$(value).text());};zfp_ItemEditor.prototype._insertSection=function(pane,html){var self=this;var section=$(html.join('')).appendTo(pane);section.find('.pc-ie-sechdr:first').mousedown(function(e){self._section_onclick(e,
this);});return section;};zfp_ItemEditor.prototype._batchOptions=function(callback){var panel=this.$dom('batch');var self=this;var frame=this._frame;var map={};for(var i=0;i<this._items.length;
i++){var key=this._items[i].priceKey;map[key.toString()]=key;}var keys=[];for(var s in map)keys.push(map[s]);if(!this._batchMode&&keys.length==1){this._initBatchSettings(this._pricing);
}else{frame.showText('Loading...');zf_PriceList.load(keys,this._frame.cart.currency,function(c,p){if(self._initBatchSettings(p)){frame.hideText('Loading...');}if(callback!=null)callback();
});}var title=zf_stdFormatString('<h2 class="pc-font3 pc-ie-desc">Batch Options for {0} Items</h2>',this._items.length);this._shortTitle=title;this._longTitle=title;
if(this._batchMode){this._addActivePanel('batch',function(){frame.hidePanel(panel);});frame.showPanel(panel);frame.pushHeader(title,'Close<span></span>',this.closure(this._closeBatchOptions));
}else{this._hideAllPanels();this._addActivePanel('batch',function(){frame.slideOutPanel(panel);});frame.slideInPanel(panel);frame.pushHeader(title,'Back<span></span>',
this.closure(this._closeBatchOptions));}};zfp_ItemEditor.prototype._closeBatchOptions=function(){if(this._activePanels['batch']){this._activePanels['batch'].close();delete this._activePanels['batch'];
}this._frame.popHeader();this._frame.hideText();if(this._batchMode){this.close();}else{this._setTitle(this._item);}this._batchPricing=null;this._batchView.getContentNode().innerHTML='';
this._batchMap=null;this._batchQty=null;};zfp_ItemEditor.prototype._applyBatchOptions=function(){var protoItems=[];var items=[];for(var i=0;i<this._items.length;i++){var item=this._items[i];
var product=item.extra.product;if(product==null){if(item.packagePackageId==null||this._orderEdit)product=this._batchPricing.findProduct(item.vendorId,item.productId);
else{var pkg=this._batchPricing.findPackage(item.packagePackageId);product=pkg.products[item.packagePartId+'.'+item.packageItemId];}}if(product==null)continue;var protoItem=item.clean();
protoItem.settings=$.extend({},item.settings);protoItem.services=$.extend({},item.services);var optionSetId=product.meta().optionSetId;var optionId=this._batchMap['optionSet.'+optionSetId];
if(optionId!=null&&optionId.current!=null){protoItem.optionId=optionId.current;}for(var sid in item.settings){var entry=this._batchMap['setting.'+sid];if(entry!=null&&entry.current!=null){if(item.settings['selected-template']&&sid==='cropping'){continue;
}else{protoItem.settings[sid]=entry.current;}}}if(item.packagePackageId==null){var quantity=this._batchMap['quantity'].current;if(quantity!=null)protoItem.quantity=quantity;
}items.push(item);protoItems.push(protoItem);if(this._orderEdit){delete protoItem.packagePackageId;delete protoItem.packageId;delete protoItem.packagePartId;delete protoItem.packageItemId;
}}this._frame.showText('Saving...',true);var self=this;var frame=this._frame;zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[protoItems,
this._batchPricing.currency.code],function(result,error){if(error!=null){frame.showText(error.message);return;}for(var i=0;i<result.length;i++){var requested=protoItems[i];
var allowed=result[i];var actual=items[i];var value;if((value=requested.optionId)==allowed.optionId)actual.optionId=value;for(var sid in requested.settings){if((value=requested.settings[sid])==allowed.settings[sid])actual.settings[sid]=value;
}if((value=requested.quantity)==allowed.quantity)actual.quantity=value;}frame.save(items,function(){if(!self._batchMode){self._initUI(self._item);}self._closeBatchOptions();
});});};zfp_ItemEditor.prototype._initBatchSettings=function(pricing){this._batchPricing=pricing;this._batchMap={};var history={};var summary={};var count=0;for(var i=0;i<this._items.length;
i++){var item=this._items[i];var product=item.extra.product;var key;if(product==null){if(item.packagePackageId==null||this._orderEdit){product=pricing.findProduct(item.vendorId,
item.productId);key=item.vendorId+'_'+item.productId;}else{var pkg=pricing.findPackage(item.packagePackageId);product=pkg.products[item.packagePartId+'.'+item.packageItemId];
key=item.packagePackageId+'_'+item.packagePartId+'_'+item.packageItemId;}}if(product==null)continue;count++;var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=product.meta();
var optionSetId=productMeta.optionSetId;var sitem;if((sitem=summary[productMeta.id])==null){sitem=summary[productMeta.id]={meta:productMeta,vendor:vendorMeta,count:0};
}sitem.count+=1;if(vendorMeta.index<sitem.vendor.index)sitem.vendor=vendorMeta;if(history[key])continue;history[key]=true;var oentry=this._batchMap['optionSet.'+optionSetId];
if(oentry==null){oentry={id:optionSetId,type:'optionSet',vendor:vendorMeta,meta:vendorMeta.optionSets[optionSetId],values:{},count:0,current:null};this._batchMap['optionSet.'+optionSetId]=oentry;
}if(vendorMeta.index<oentry.vendor.index)oentry.vendor=vendorMeta;for(var oid in product.options){var option=product.options[oid];if(oentry.values[oid]==null){oentry.values[oid]={id:oid,
vendor:vendorMeta,meta:vendorMeta.options[oid],priced:true};oentry.count++;}for(var sid in option.settings){if(sid=='configuration')continue;if(option.settings[sid].readOnly)continue;
var meta=vendorMeta.settings[sid];if(meta.type!=zf_SettingType.List||!meta.userVisible)continue;var sentry=this._batchMap['setting.'+sid];if(sentry==null){sentry={id:sid,
type:'setting',vendor:vendorMeta,meta:vendorMeta.settings[sid],values:{},count:0,current:null};this._batchMap['setting.'+sid]=sentry;}if(vendorMeta.index<oentry.vendor.index)oentry.vendor=vendorMeta;
for(var valueId in meta.values){if(sid=='cropping'&&(valueId=='cropping-unconfirmed'||valueId=='cropping-manual'))continue;if(sentry.values[valueId]==null){sentry.values[valueId]={id:valueId,
vendor:vendorMeta,meta:meta.values[valueId],priced:false};sentry.count++;}}}}if(item.packagePackageId==null){var qentry=this._batchMap['quantity'];if(qentry==null){qentry={id:'quantity',
type:'quantity',vendor:null,meta:null,values:{quantity:{id:'quantity',vendor:null,meta:null,priced:false}},count:1,current:null};this._batchMap['quantity']=qentry;
}}}if(count==0){this._frame.showText('These items are no longer available for ordering');return false;}var typeOrder={optionSet:0,setting:1,serviceSet:2,quantity:3};
var entries=$.objectToArray(this._batchMap);entries.sort(function(x,y){var res;if(x==y)return 0;if((res=typeOrder[x.type]-typeOrder[y.type])!=0)return res;if((res=x.vendor.index-y.vendor.index)!=0)return res;
return x.meta.index-y.meta.index;});if(this._settingsOnly)entries=$.grep(entries,function(e){return e.type=='setting'&&e.count>1;});else entries=$.grep(entries,function(e){return e.count>1||e.id=='quantity';
});var self=this;var pane=$(this._batchView.getContentNode()).html('');for(i=0;i<entries.length;i++){var entry=entries[i];if(entry.type==='optionSet'&&entry.meta.data['option-selection']==='paper-pagecount'){continue;
}var values=$.objectToArray(entry.values);values.sort(function(x,y){var res;if(x==y)return 0;if((res=x.vendor.index-y.vendor.index)!=0)return res;return x.meta.index-y.meta.index;
});values.push({id:'-nochange'});var name=entry.type=='quantity'?'Quantity':entry.meta.name;this._addRadioSection(pane,entry.type+'.'+entry.id,name,values,function(v){var res={id:v.id,
current:v.id=='-nochange',onclick:self.closure(self._updateBatchEntry,entry,v.id)};if(v.id=='-nochange')res.name='No changes';else if(entry.type=='quantity')res.name='Set quantity to';
else res.name=v.meta.name;if(v.id=='-nochange')res.oninfo=null;else if(entry.type=='optionSet')res.oninfo=self.closure(self._showOptionInfo,entry.vendor.id,v.id);
else if(entry.type=='setting'){res.oninfo=self.closure(self._showSettingValueInfo,entry.vendor.id,entry.id,v.id);}return res;});}if(!this._settingsOnly&&this._batchMap['quantity']!=null){pane.find('DIV.pc-ie-section:last DIV.pc-ie-radio:first LABEL:first').append(zf_EditWithSpin.createHtml(this.id+'-bews',
false,1));this._batchQty=new zf_EditWithSpin(this.id+'-bews');this._batchQty.minValue=1;this._batchQty.onchange=function(val){self._batchMap['quantity'].current=val;
};}this._setLinkHandlers(pane.find('A'));pane.find('.pc-ie-section:first .pc-ie-sechdr:first').mousedown();this._setBatchSummary(summary);pane.find('A.pc-ie-q').hover(function(){$(this).addClass('pc-color10 pc-border10 pc-bgcolor10');
},function(){$(this).removeClass('pc-color10 pc-border10 pc-bgcolor10');});return true;};zfp_ItemEditor.prototype._setBatchSummary=function(summary){summary=$.objectToArray(summary);
summary.sort(function(x,y){var res;if(x==y)return 0;if((res=x.vendor.index-y.vendor.index)!=0)return res;return x.meta.index-y.meta.index;});var html=['<div>',zf_stdFormatString('These options will apply to {0} items in your cart:',
this._items.length),'</div>','<table class="pc-font5">'];for(var i=0;i<summary.length;i++){var sitem=summary[i];html.push('<tr><td class="pc-ie-slabel">',sitem.meta.longName,
'</td>','<td class="pc-ie-svalue">&ndash; ',zf_stdFormatString(sitem.count>1?'{0} items':'1 item',sitem.count),'</td></tr>');}html.push('</table>');this.$dom('batch').find('.pc-ie-summary:first').html(html.join(''));
};zfp_ItemEditor.prototype._updateBatchEntry=function(entry,valueId){;;if(valueId=='-nochange'){entry.current=valueId=null;return{value:'No changes',price:''};}else if(entry.type=='quantity'){entry.current=this._batchQty.val();
return{value:entry.current.toString(),price:''};}else{entry.current=valueId;return{value:entry.values[valueId].meta.altName,price:''};}};zfp_ItemEditor.prototype._getAlternativeProducts=function(){var product=this._item.extra.product;
var productMeta=product.meta();var pricing=this._pricing;var priceKey=this._item.priceKey;if(this._settingsOnly||this._item.packagePackageId!=null||!productMeta.isSingleImage){return{products:[]};
}var categories=$.map(product.categories,function(c){return pricing.categories[c];});var category=null;var sortBy=null;var products=[];var alternative=$.grep(categories,
function(c){return c.alternative;});if(alternative.length>0){category=alternative[0];if((sortBy=category.data['alt-scope'])!=null)category=pricing.categories[sortBy];
products=category.products;sortBy=category.data['sort-by'];}else if(categories.length>0){products=(category=categories[0]).products;sortBy=category.id;}else products=[product];
var photo=this._photos[this._item.photos[0].id];products=$.grep(products,function(p){return p.vendorId==product.vendorId&&p.meta().isSingleImage&&zfp_Configurator.isPhotoPrintable(p,
photo,priceKey.defaultList);});if(sortBy!=null)products.sort(pricing.getProductComparer(sortBy));return{products:products,sortBy:sortBy};};zfp_ItemEditor.prototype._changeProduct=function(){var panel=this.$dom('products');
var pricing=this._pricing;var product=this._item.extra.product;var products=this._altProducts.products;var sortBy=this._altProducts.sortBy;var vendorMap={};var categoryMap={};
var vendors=[];for(var i=0;i<products.length;i++){var p=products[i];var v=p.vendor;vendorMap[v.masqueradeAs!=null?v.masqueradeAs:v.id]=true;categoryMap[pricing.getProductCategory(sortBy,
p).id]=true;}for(var vid in vendorMap)vendors.push(pricing.vendors[vid]);if(pricing.isFlattened)sortBy=null;if(sortBy!=null){var c=0;for(var cid in categoryMap)c++;
if(c<2)sortBy=null;}var catId=null;var standardClasses='pc-color1 pc-bgcolor1';var selectedClasses='pc-color5 pc-bgcolor5';var hoverClasses='pc-color7 pc-bgcolor7';
var html=['<table cellspacing="2">'];var items=[];for(i=0;i<products.length;i++){p=products[i];if(p.meta().isTemplated){continue;}items.push($.extend(this._item.clean(),
{vendorId:p.vendorId,productId:p.id,extra:{description:p.meta().longName}}));if(sortBy!=null&&(c=pricing.getProductCategory(sortBy,p)).id!=catId){if(catId!=null)html.push('<tr class="pc-ie-spacer"><td colspan="2"></td></tr>');
catId=c.id;html.push('<tr class="pc-ie-group pc-font1">','<td class="pc-ie-name pc-color6 pc-border6 pc-bgcolor6">',c.longName,'</td>','<td class="pc-ie-price pc-color6 pc-border6 pc-bgcolor6">',
'Price','</td>','</tr>');}var cssClass=standardClasses;if(p==product)cssClass=selectedClasses;html.push('<tr class="pc-ie-item ',p==product?'pc-ie-item-s ':'','pc-font1"',
' data="',p.vendorId,':',p.id,'">','<td class="pc-ie-name ',cssClass,' pc-border7">',zf_stdHtmlEncode(p.meta().name),'</td>','<td class="pc-ie-price ',cssClass,' pc-border7">',
zf_stdFormatMoney(p.minPrice),'</td>','</tr>');}html.push('</table>');this._productsView.getContentNode().innerHTML=html.join("");var self=this;this._addActivePanel('products',
function(){self._frame.slideOutPanel(panel);});this._frame.slideInPanel(panel);$('TR.pc-ie-item',this._productsView.getContentNode()).hover(function(){if(!$(this).hasClass('pc-ie-item-s'))$('TD',
this).removeClass(standardClasses).addClass(hoverClasses);},function(){if(!$(this).hasClass('pc-ie-item-s'))$('TD',this).removeClass(hoverClasses).addClass(standardClasses);
}).click(function(e){if(zf_stdIsLeftButton(e))self._product_onclick(this);});this._resizeProducts();this._originalItem=$.extend({},this._item);this._changeItems=null;
this._pendingChange=null;zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[items,this._frame.cart.currency.code],function(result,
error){if(error!=null)return;self._changeItems={};for(var i=0;i<result.length;i++){var r=result[i];r.extra={photo:self._photo,pricing:self._pricing,description:r.extra.description};
self._changeItems[r.vendorId+':'+r.productId]=r;}if(self._pendingChange!=null){self._completeChange(self._changeItems[self._pendingChange]);self._pendingChange=null;
}});};zfp_ItemEditor.prototype._changeService=function(serviceSetId,noAnimation){;var panel=this.$dom('services');var product=this._item.extra.product;var option=product.options[this._item.optionId];
var vendorMeta=zf_VendorMeta.cached(option.vendorId);var serviceSetMeta=vendorMeta.serviceSets[serviceSetId];var current=this._item.services[serviceSetId];var services=option.getServices(serviceSetId);
panel.find('H6:first').text(zf_stdFormatString('Select {0}',serviceSetMeta.name));var html=['<table cellspacing="0">'],standardClasses='pc-color1 pc-bgcolor1',selectedClasses='pc-color5 pc-bgcolor5',
hoverClasses='pc-color7 pc-bgcolor7';html.push('<tr class="pc-ie-leader">','<td class="pc-ie-moreinfo"></td>','<td class="pc-ie-icon"></td>','<td class="pc-ie-name"></td>',
'<td class="pc-ie-price"></td>','</td>');html.push('<tr class="pc-ie-group pc-font1">','<td class="pc-ie-name pc-color6 pc-border6 pc-bgcolor6" colspan="3">',zf_stdHtmlEncode(serviceSetMeta.name),
'</td>','<td class="pc-ie-price pc-color6 pc-border6 pc-bgcolor6">','From','</td>','</tr>');var cssClass=standardClasses;if(current==null)cssClass=selectedClasses;
var iconUrl=zfp_Configurator.formatIconUrl(serviceSetMeta.none.data["dl-icon"]);if(serviceSetMeta.data["required"]==null){html.push('<tr class="pc-ie-item ',current==null?'pc-ie-item-s ':'',
'pc-font1">','<td class="pc-ie-moreinfo no-icon ',cssClass,' pc-border7"></td>','<td class="pc-ie-icon ',cssClass,' pc-border7">','<img src="',iconUrl,'">','</td>',
'<td class="pc-ie-name ',cssClass,' pc-border7">',zf_stdHtmlEncode(serviceSetMeta.none.name),'</td>','<td class="pc-ie-price ',cssClass,' pc-border7">','</td>','</tr>');
}for(i=0;i<services.length;i++){s=services[i];cssClass=standardClasses;if(current==s.id)cssClass=selectedClasses;iconUrl=zfp_Configurator.formatIconUrl(s.meta().data["dl-icon"]);
html.push('<tr class="pc-ie-item ',current==s.id?'pc-ie-item-s ':'','pc-font1"',' data="',s.id,'">','<td class="pc-ie-moreinfo icon pc-border7"></td>','<td class="pc-ie-icon ',
cssClass,' pc-border7">','<img src="',iconUrl,'">','</td>','<td class="pc-ie-name ',cssClass,' pc-border7">',s.meta().longName,'</td>','<td class="pc-ie-price ',
cssClass,' pc-border7">',zf_stdFormatMoney(s.price.customerPrice),'</td>','</tr>');}html.push('</table>');this._servicesView.getContentNode().innerHTML=html.join("");
var self=this;this._hideAllPanels();this.$('.pc-ie-nav').hide();if(noAnimation){this._addActivePanel('services',function(){self.$('.pc-ie-nav').show();self._service_info_hide();
self._frame.hidePanel(self.$dom('services'));});this._frame.showPanel(panel);}else{this._addActivePanel('services',function(){self.$('.pc-ie-nav').show();self._service_info_hide();
self._frame.slideOutPanel(self.$dom('services'));});this._frame.slideInPanel(panel);}$('TR.pc-ie-item TD:not(.pc-ie-moreinfo.icon)',this._servicesView.getContentNode()).hover(function(){var parent=$(this).parent('TR');
if(!parent.hasClass('pc-ie-item-s')){$('TD:not(.pc-ie-moreinfo.icon)',parent).removeClass(standardClasses).addClass(hoverClasses);}},function(){var parent=$(this).parent('TR');
if(!parent.hasClass('pc-ie-item-s')){$('TD:not(.pc-ie-moreinfo.icon)',parent).removeClass(hoverClasses).addClass(standardClasses);}}).mousedown(function(e){if(zf_stdIsLeftButton(e)){self._service_onclick($(this).parent('TR'),
serviceSetId);}});$('TR.pc-ie-item TD.pc-ie-moreinfo.icon',this._servicesView.getContentNode()).hover(function(){var cell=$(this);if(!cell.hasClass('selected')){cell.removeClass(standardClasses).addClass(hoverClasses);
}},function(){var cell=$(this);if(!cell.hasClass('selected')){cell.removeClass(hoverClasses).addClass(standardClasses);}}).mousedown(function(e){var cell=$(this);
if(!cell.hasClass('selected')){cell.closest('table').find('TR.pc-ie-item TD.pc-ie-moreinfo.icon.selected').removeClass(hoverClasses).removeClass('selected');cell.removeClass(standardClasses).addClass(hoverClasses).addClass('selected');
self._service_info_slidein(cell,serviceSetId);}else{cell.removeClass(hoverClasses).removeClass('selected').addClass(standardClasses);self._service_info_slideout();
}});this._resizeServices();this._originalItem=$.extend({},this._item);if(current==null&&noAnimation){for(var i=0;i<services.length;i++){s=services[i].meta();if(s.data['frame-width']!=null||s.data['frame-height']!=null){panel.find('TR.pc-ie-item[data="'+s.id+'"]').mousedown();
break;}}this.$('.pc-ie-nav').hide();this._addActivePanel('services',function(){self.$('.pc-ie-nav').show();self._service_info_hide();self._frame.hidePanel(self.$dom('services'));
});this._frame.showPanel(panel);}};zfp_ItemEditor.prototype._completeChange=function(item){this._hideAllPanels('template-photo');var self=this;if(typeof this._cropper.deselectElement==='function'){this._cropper.deselectElement(false);
}this._isProductChange=this._item.productId!==item.productId;this._cropper.fadeOut(function(){self._initUI($.extend(self._item,item,{extra:$.extend({},self._item.extra,
item.extra)}));self._cropper.fadeIn();self._cropper.$().show();});};zfp_ItemEditor.prototype._cancelChange=function(e,panel){e.stopImmediatePropagation();var mismatch=true;if(this._item.vendorId==this._originalItem.vendorId&&this._item.productId==this._originalItem.productId&&this._item.optionId==this._originalItem.optionId){var s=$.extend({},
this._originalItem.services);for(var id in this._item.services){var v=this._item.services[id];if(v==s[id])delete s[id];else s[id]=v;}mismatch=!$.isEmptyObject(s);
}var self=this;if(mismatch){this._cropper.fadeOut(function(){self._activePanels[panel].close();delete self._activePanels[panel];self._initUI($.extend(self._item,
self._originalItem));self._cropper.fadeIn();});}else{self._activePanels[panel].close();delete self._activePanels[panel];}};zfp_ItemEditor.prototype._updateServiceAvailability=function(item){var product=item.extra.product;
var option=product.options[item.optionId];var vendorMeta=zf_VendorMeta.cached(item.vendorId);var optionSetId=vendorMeta.options[option.id].optionSetId;var optionSetMeta=vendorMeta.optionSets[optionSetId];
var constraints=[].concat(option.meta().serviceConstraints);var serviceSets=option.getServiceSets();for(i=0;i<serviceSets.length;i++){var serviceSetMeta=serviceSets[i];
var noneId=serviceSetMeta.none.id;var serviceList=option.getServices(serviceSetMeta.id);var services={};for(var j=0;j<constraints.length;j++){var c=constraints[j];
s={};s[noneId]=true;for(var ii=0;ii<serviceList.length;ii++)s[serviceList[ii].id]=true;for(var k=0;k<c.rules.length;k++){var rule=c.rules[k];var included=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Included;
var excluded=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Excluded;if(rule.serviceSetId==serviceSetMeta.id){if(included){delete s[noneId];}else if(excluded){s={};
s[noneId]=true;}}else if(rule.serviceId!=null){var serviceSetId=vendorMeta.services[rule.serviceId].serviceSetId;if(serviceSetId==serviceSetMeta.id){if(included){s[rule.serviceId]=true;
}else if(excluded){delete s[rule.serviceId];}}}}for(var id in s)services[id]=true;}if(constraints.length==0){services={};services[noneId]=true;for(ii=0;ii<serviceList.length;
ii++)services[serviceList[ii].id]=true;}var current=item.services[serviceSetMeta.id];if(current==null)current=noneId;if(serviceSetMeta.data["depends-on"]!=null){var node;
var any=false;if(!services[current])current=null;if(current==null&&services[noneId])current=noneId;var select=this.$('.pc-ie-edit [data-secid="opt-svc-'+serviceSetId+'"]').find(zf_stdFormatString('.pc-ie-dlitem SELECT[name="{0}"]',
serviceSetMeta.id))[0];if(typeof select!='undefined'){for(ii=select.options.length-1;ii>=0;ii--)select.removeChild(select.options[ii]);if(services[noneId]){select.options.add(document.createElement("OPTION"));
select.options[0].value="-none";select.options[0].text=serviceSetMeta.none.name;}for(ii=0;ii<serviceList.length;ii++){s=serviceList[ii];if(services[s.id]){any=true;
if(current==null)current=s.id;select.options.add(document.createElement("OPTION"));select.options[select.options.length-1].value=s.id;select.options[select.options.length-1].text=zf_stdFormatString('{0} ({1})',
s.meta().altName,zf_stdFormatMoney(s.price.customerPrice));}}select.disabled=!any||this._settingsOnly;$(select).closest('tr').toggle(any);if(current==noneId){select.value="-none";
delete item.services[serviceSetMeta.id];}else{select.value=current;item.services[serviceSetMeta.id]=current;}}}for(j=constraints.length-1;j>=0;j--){c=constraints[j];
for(k=0;k<c.rules.length;k++){rule=c.rules[k];included=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Included;excluded=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Excluded;
if((included&&current==noneId&&rule.serviceSetId==serviceSetMeta.id)||(excluded&&current!=noneId&&(rule.serviceSetId==serviceSetMeta.id||rule.serviceId==current))){constraints.splice(j,
1);break;}}}}};zfp_ItemEditor.prototype._getApplicableServiceSets=function(item){var product=item.extra.product;var option=product.options[item.optionId];var vendorMeta=zf_VendorMeta.cached(item.vendorId);
var optionSetId=vendorMeta.options[option.id].optionSetId;var optionSetMeta=vendorMeta.optionSets[optionSetId];var constraints=[].concat(option.meta().serviceConstraints);
var result={};var serviceSets=option.getServiceSets();for(i=0;i<serviceSets.length;i++){var serviceSetMeta=serviceSets[i];var noneId=serviceSetMeta.none.id;var serviceList=option.getServices(serviceSetMeta.id);
var services={};for(var j=0;j<constraints.length;j++){var c=constraints[j];s={};s[noneId]=true;for(var ii=0;ii<serviceList.length;ii++)s[serviceList[ii].id]=true;
for(var k=0;k<c.rules.length;k++){var rule=c.rules[k];var included=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Included;var excluded=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Excluded;
if(rule.serviceSetId==serviceSetMeta.id){if(included){delete s[noneId];}else if(excluded){s={};s[noneId]=true;}}else if(rule.serviceId!=null){var serviceSetId=vendorMeta.services[rule.serviceId].serviceSetId;
if(serviceSetId==serviceSetMeta.id){if(included){s[rule.serviceId]=true;}else if(excluded){delete s[rule.serviceId];}}}}for(var id in s)services[id]=true;}var current=item.services[serviceSetMeta.id];
if(constraints.length==0){result[serviceSetMeta.id]=true;}else{result[serviceSetMeta.id]=$.grep(serviceList,function(s){return services[s.id];}).length>0;if(current==null)current=noneId;
if(!services[current])current=null;if(current==null&&services[noneId])current=noneId;}for(j=constraints.length-1;j>=0;j--){c=constraints[j];for(k=0;k<c.rules.length;
k++){rule=c.rules[k];included=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Included;excluded=rule.type==zf_VendorMeta.ServiceConstraint.RuleType.Excluded;
if((included&&current==noneId&&rule.serviceSetId==serviceSetMeta.id)||(excluded&&current!=noneId&&(rule.serviceSetId==serviceSetMeta.id||rule.serviceId==current))){constraints.splice(j,
1);break;}}}}return result;};zfp_ItemEditor.prototype._removeService=function(serviceSetId){delete this._item.services[serviceSetId];var option=this._item.extra.product.options[this._item.optionId];
var serviceSets=option.getServiceSets();for(var i=0;i<serviceSets.length;i++){var ss=serviceSets[i];if(ss.data['depends-on']==serviceSetId)delete this._item.services[ss.id];
}this._completeChange(this._item);};zfp_ItemEditor.prototype._showProductInfo=function(){var self=this;var photos=null;if(!this._item.extra.productMeta.isTemplated){photos=$.map(this._item.photos,
function(p){return self._photos[p.id];});}this._hideAllPanels();this._productInfoLeft.showProductInfo(this._item.vendorId,this._item.productId,null,this._showInfo('left'),
this._item.extra.product,photos);};zfp_ItemEditor.prototype._showOptionInfo=function(vendorId,optionId,hideAll){if(typeof hideAll!='undefined'&&hideAll!=false){this._hideAllPanels();
}this._productInfo.showOptionInfo(vendorId,optionId,this._showInfo());};zfp_ItemEditor.prototype._showSettingValueInfo=function(vendorId,settingId,valueId,hideAll){if(typeof hideAll!='undefined'&&hideAll!=false){this._hideAllPanels();
}this._productInfo.showSettingValueInfo(vendorId,settingId,valueId,this._showInfo());};zfp_ItemEditor.prototype._showServiceInfo=function(serviceSetId,serviceId){;this._hideAllPanels();
this._productInfo.showServiceInfo(this._item.vendorId,serviceSetId,serviceId,this._showInfo());};zfp_ItemEditor.prototype._showInfo=function(direction){var panelname='info';if(direction==='left'){panelname='infoleft';
}else{this.$('.pc-ie-nav').hide();}var self=this;var panel=this.$dom(panelname);self._addActivePanel(panelname,function(){if(direction!='left'){self.$('.pc-ie-nav').show();
}self._frame.slideOutPanel(panel);});this._frame.slideInPanel(panel,this.closure(this._resizeInfo,direction));return function(meta){panel.find('H6:first').html(meta.longName);
self._resizeInfo(direction);};};zfp_ItemEditor.prototype._resizeInfo=function(direction){var panelname='info';if(direction==='left'){panelname='infoleft';}var panel=this.$dom(panelname);
var getHeight=function(j){return j.css('display')!='none'?j.outerHeight():0;};var usedHeight=getHeight(panel.find('H6:first'))+getHeight(panel.find('.pc-ie-buttons:first'));
var infopanel=this._productInfo;if(direction==='left'){infopanel=this._productInfoLeft;}infopanel.setHeight(panel.height()-usedHeight-20);infopanel.update();};zfp_ItemEditor.prototype._resizeProducts=function(){var panel=this.$dom('products');
var getHeight=function(j){return j.css('display')!='none'?j.outerHeight():0;};var usedHeight=getHeight(panel.find('H6:first'))+getHeight(panel.find('.pc-ie-buttons:first'));
this._productsView.setHeight(panel.height()-usedHeight-20);this._productsView.update();};zfp_ItemEditor.prototype._resizeServices=function(){var panel=this.$dom('services');var getHeight=function(j){return j.css('display')!='none'?j.outerHeight():0;
};var usedHeight=getHeight(panel.find('H6:first'))+getHeight(panel.find('.pc-ie-buttons:first'));this._servicesView.setHeight(panel.height()-usedHeight-20);this._servicesView.update();
};zfp_ItemEditor.prototype._resizeAltLayout=function(){var panel=this.$dom('altlayout');var getHeight=function(j){return j.css('display')!='none'?j.outerHeight():0;};var usedHeight=getHeight(panel.find('h6'))+getHeight(panel.find('.pc-ie-buttons:first'));
this._altLayoutView.setHeight(panel.height()-usedHeight-20);this._altLayoutView.update();};zfp_ItemEditor.prototype._resizeTemplatePhoto=function(){var panel=this.$dom('template-photo'),
tabheader=panel.find('.pc-tabheader'),tabbodies=panel.find('.pc-tabbody');tabbodies.height(panel.innerHeight()-31-(tabheader.outerHeight()||42));panel.find('.sv').height(tabbodies.height()-80);
if(typeof this._activePanels['template-photo']==='object'){this._recalcLayout(panel.find('.pc-tabbody.active').innerWidth());}};zfp_ItemEditor.prototype._tab_onclick=function(e){var tab=$(e.currentTarget),
panel=this.$dom('template-photo'),tabs=panel.find('.pc-tabheader li:not(.hide-tab)'),tabBodies=panel.find('.pc-tabbody');if(!tab.hasClass('selected')){var i=0;tabs.each(function(index){var t=$(this);
if(t[0]===tab[0]){i=index;tabs.removeClass('pc-bgcolor9').removeClass('selected').addClass('pc-bgcolor6');t.removeClass('pc-bgcolor6').addClass('pc-bgcolor9').addClass('selected');
return false;}});tabBodies.filter('.active').removeClass('active');tabBodies.eq(i).addClass('active');this._recalcLayout(tabBodies.eq(i).innerWidth());if(this._cropper){this._cropper.activegrid(this._templateGrids[i]);
}}};zfp_ItemEditor.prototype._recalcLayout=function(cx,grid){function recalc(g){var info=g.getLayoutInfo();if(info.width>0&&g.getSize()<info.itemsPerRow){info.itemsPerRow=g.getSize();
}else if(info.width==0&&cx!=null){info.width=cx;info.itemsPerRow=Math.floor(cx/g.getCellSize().cx);}g.recalcLayout(info);}if(grid!=null){recalc(grid);}else{$.each(this._templateGrids,
function(){recalc(this);});}$.each(this._templateViews,function(is,s){s.update();});};zfp_ItemEditor.prototype._addPhotos=function(){;var self=this,panel=this.$dom('template-photo'),
gridsloaded=0,gridcount=panel.find('.pc-tabheader li:not(.hide-tab)').length,markphotos=function(){gridsloaded++;if(gridsloaded>=gridcount&&self._cropper.updateMarkedPhotos){self._cropper.updateMarkedPhotos();
}};var photos=this._selectedPhotos=this._frame.photos;if(photos.length===0){var map={};this._selectedPhotos=photos=[];$.each(this._items,function(id,item){$.each(item.photos,
function(ix,p){map[p.id]=self._photos[p.id];});});$.each(map,function(id,p){if(p!=null)photos.push(p);});}var allIndex=0,allPhotos=this._frame.allPhotos;if(!allPhotos){allPhotos=new zfp_PackageEditor.GalleryLoader(photos[0].owner.id,
photos[0].gallery.id,zf_SourceType.Image);}allPhotos.loadAll(function(){var all=$.grep(allPhotos.getAll(),function(p){return!p.video;});self._getPhotoWatermarks(all);
for(var y=0;y<all.length;y++){if(self._addGridPhoto(self._templateGrids[0],allIndex,all[y])){allIndex++;}}self._recalcLayout(panel.find('.pc-tabbody.tab-a').innerWidth(),
self._templateGrids[0]);self._initDrag(self._templateGrids[0]);markphotos();});this._getPhotoWatermarks(photos);var selectedIndex=0;for(var i=0;i<photos.length;i++){if(this._addGridPhoto(this._templateGrids[1],
selectedIndex,photos[i])){selectedIndex++;}}markphotos();this._recalcLayout(panel.find('.pc-tabbody.tab-b').innerWidth(),this._templateGrids[1]);this._initDrag(this._templateGrids[1]);
if(gridcount>2){this._loadFavoritesList(photos[0].owner.id,markphotos);}};zfp_ItemEditor.prototype._loadFavoritesList=function(photogid,callback){var ddl=$('.pc-tabfavtop .ddlFavorites',
this.dom('template-photo')),self=this;ddl.html('<option value="">Loading...</option>');$('.tab-c .pc-tabmsg.fav-msg',this.dom('template-photo')).html('').hide();
zfb_Api.loadScrapbooks(photogid,function(scrapbooks,error){if(error!=null){ddl.html('<option value=""></option>');$('.tab-c .pc-tabmsg.fav-msg',this.dom('template-photo')).html('An unknown error has occurred.').show();
return;}if(!$.isArray(scrapbooks)){scrapbooks=[scrapbooks];}self._scrapbooks={};if(scrapbooks.length>0){var html=[];$.each(scrapbooks,function(is,s){self._scrapbooks[s.id]=s;
html.push('<option value="',s.id,'">',s.getDisplayName(),'</option>');});ddl.html(html.join(''));ddl.attr("selected","selected").trigger('change');}else{$('.tab-c .pc-tabfavtop',
self.dom('template-photo')).hide();$('.tab-c .pc-tabmsg',self.dom('template-photo')).not('.fav-msg').html('You currently have no favorites');}if(callback){callback();
}});};zfp_ItemEditor.prototype._favorites_onchange=function(e){;var id=$(e.currentTarget).val(),self=this,favmsg=$('.tab-c .pc-tabmsg.fav-msg',this.dom('template-photo'));var loadFavs=function(photos){var favoritesIndex=0;
self._getPhotoWatermarks(photos);for(var x=0;x<photos.length;x++){if(self._addGridPhoto(self._templateGrids[2],favoritesIndex,photos[x])){favoritesIndex++;}}self._recalcLayout(null,
self._templateGrids[2]);if(photos.length===0){favmsg.html('The selected Favorites list is empty').show();}else if(self._templateGrids[2].getSize()===0){favmsg.html('None of your current favorites are applicable for this product').show();
}self._initDrag(self._templateGrids[2]);};this._templateGrids[2].clear();favmsg.html('').hide();if(typeof this._templateFavorites[id]!='undefined'){loadFavs(this._templateFavorites[id].photos);
}else{this._loadFavoritePhotos(id,loadFavs);}};zfp_ItemEditor.prototype._loadFavoritePhotos=function(id,onload){if(typeof this._scrapbooks[id]!='undefined'){var self=this;zfb_Api.loadScrapbook(this._scrapbooks[id],
function(sb){var len=sb.photos.length;while(len--){if(typeof sb.photos[len].volume==='undefined'){sb.photos.splice(len,1);}}self._templateFavorites[id]={photos:sb.photos};
onload(self._templateFavorites[id].photos);});}else{$('.tab-c .pc-tabmsg.fav-msg',this.dom('template-photo')).html('You currently have no favorites').show();}};zfp_ItemEditor.prototype._addGridPhoto=function(grid,
index,photo){;;var item=this._items[this._itemIndex];if(!item||!item.extra){return false;}var product=item.extra.pricing.vendors[item.vendorId].products[item.productId];
this._photos[photo.id]=photo;var method=zf_ProcessingMethod.StandardMediumThumbnail;var burnable=(photo.flags&zf_PhotoFlags.HasImage0)!=0;var className='pc-p'+photo.id;
grid.setItem(index,'p'+photo.id,null,photo,method,burnable,[className],{data:photo,method:method,image:photo});return true;};zfp_ItemEditor.prototype._toggleMarkGridPhoto=function(id,
ismarked){if(ismarked){$('.pc-ie-template-photo .pc-p'+id).addClass('marked');}else{$('.pc-ie-template-photo .pc-p'+id).removeClass('marked');}};zfp_ItemEditor.prototype._unmarkAllGridPhotos=function(id,
ismarked){$('.pc-ie-template-photo .pv').removeClass('marked');};zfp_ItemEditor.prototype._grid_onselchange=function(grid){this._cropper.activegrid(grid);if(grid.getSelectedIndices().length>0){for(var i=0;
i<this._templateGrids.length;i++){if(grid!=this._templateGrids[i]){this._templateGrids[i].deselectAll();}}}};zfp_ItemEditor.prototype._initDrag=function(grid){var self=this;grid.$('.pv').draggable({distance:2,
opacity:0.8,appendTo:this._frame.dom(),containment:this._frame.$('.pc-body')[0],helper:function(e){return self._createDragHelper(this,e,grid);},start:function(e,
ui){self._draggable_onstart(this,e,ui,grid);},drag:function(e,ui){self._draggable_ondrag(this,e,ui,grid);},stop:function(e,ui){self._draggable_onstop(this,e,ui,grid);
}}).unbind('touchstart touchmove touchend touchcancel').bind('touchstart touchmove touchend touchcancel',function(e){grid.itemTouchHandler(e,zf_PhotoGrid.Drag.Left);
});};zfp_ItemEditor.prototype._createDragHelper=function(node,e,grid){var ids=$.grep(node.className.split(' '),function(c){return c.indexOf('pc-p')==0;});var photoId=parseInt(ids[0].substr(4),
10);var indices=grid.getSelectedIndices();var photo=this._photos[photoId];var method=zf_ProcessingMethod.StandardMediumThumbnail;var helper=document.createElement('DIV');
helper.className='pc-helper '+grid.$().attr('className');helper.innerHTML=zf_PhotoView.createHtml(this.id+'-draggable',null,['pg-selected','pc-p'+photoId,'pc-border1'],
this._plugins,{data:photo,method:method,image:photo},photo,method,true);$(helper).removeClass('pvp-t-method-0').addClass('pvp-method-9');if(indices.length>=2){$('.pv-outer',
helper).prepend('<div class="pc-dragpad pc-bgcolor9 pc-border10"></div>');$('.pv-inner',helper).append('<span class="pc-stack pc-color1 pc-bgcolor1">'+zf_stdFormatString('{0} photos',
indices.length)+'</span>');$(helper).addClass('pc-helper-s');}if(indices.length>=3){$('.pv-outer',helper).prepend('<div class="pc-dragpad2 pc-bgcolor9 pc-border10"></div>');
}return helper;};zfp_ItemEditor.prototype._draggable_onstart=function(node,e,ui,grid){this._cropper.activegrid(grid);};zfp_ItemEditor.prototype._draggable_ondrag=function(node,e,ui,grid){var draggable=$(node).data('draggable');
};zfp_ItemEditor.prototype._draggable_onstop=function(node,e,ui,grid){grid.$('.pv').removeClass('pv-ihover pv-ohover');};zfp_ItemEditor.prototype._validateText=function(settingMeta,value){var message=null;
if(value!=null){if(value.length>settingMeta.maxLength){message=zf_stdFormatString('The text is too long. The maximum length is {0} characters.',settingMeta.maxLength);
}else{var charSet=zfp_ItemEditor._charsets[settingMeta.charSet];if(charSet!=null){var invalid={};for(var i=0;i<value.length;i++){var c=value.charCodeAt(i);for(var j=0;
j<charSet.length;j++){if(charSet[j].from<=c&&c<=charSet[j].to)break;}if(j==charSet.length){var s=String.fromCharCode(c);if(invalid[s]==null)invalid[s]=i;}}if(!$.isEmptyObject(invalid)){var list=[];
for(s in invalid)list.push(s);list.sort(function(a,b){return invalid[a]-invalid[b];});message=zf_stdFormatString('The text field contains invalid characters: {0}.',
list.join(', '));}}}}if(settingMeta.type=='TextLine'){var input=this.$dom(settingMeta.id);var line=input.closest('.pc-ie-line');if(message!=null){if(!input.hasClass('pc-border8')){line.append('<div class="pc-ie-error pc-color8"></div>');
input.removeClass('ews-border1').addClass('pc-border8');line.find('LABEL').addClass('pc-color8');}line.find('.pc-ie-error').text(message);}else if(message==null&&input.hasClass('pc-border8')){input.removeClass('pc-border8').addClass('ews-border1');
line.find('LABEL').removeClass('pc-color8');line.find('.pc-ie-error').remove();}}else if(settingMeta.type=='Text'){input=this.$('.pc-ie-section[data-secid="set-'+settingMeta.id+'"]:first TEXTAREA');
line=input.closest('.pc-ie-text');if(message!=null){if(!input.hasClass('pc-border8')){line.append('<div class="pc-ie-error pc-color8"></div>');input.removeClass('ews-border1').addClass('pc-border8');
}line.find('.pc-ie-error').text(message);}else if(message==null&&input.hasClass('pc-border8')){input.removeClass('pc-border8').addClass('ews-border1');line.find('.pc-ie-error').remove();
}}};zfp_ItemEditor.prototype._validateTemplateText=function(onok){var elements=[],i=0,ignore=['merry christmas','happy (thanksgiving|easter|new year|holidays|anniversary|hanukkah|chanukah|chanukkah)',
'thank you','congratulations','[0-9]+'],ignoreRegexp=new RegExp('^('+ignore.join('|')+')$','i');if(this._cropper.type===zfp_ItemEditor.Cropper.TemplateProduct&&typeof this._cropper.getTemplate==='function'){var template=this._cropper.getTemplate();
templatepages:for(var p in template.pages){for(i=0;i<template.elements[p].length;i++){var element=template.elements[p][i];if(element.type==='Text'&&this._item.settings[element.name]===element.placeholder&&!ignoreRegexp.test(this._item.settings[element.name])){elements.push(element.label);
if(this._templatePage===null){this._templatePage=p;}}}}}if(elements.length>0){var html=['<ul>'];for(i=0;i<elements.length;i++){html.push('<li>',elements[i],'</li>');
}html.push('</ul>');this._modalDialog.bodyHTML(zf_stdFormatString("<p>The following text placeholders still contain sample text:</p> {0} <p>Are you sure you want to buy this product as is?</p>",
html.join('')));}else{this._modalDialog.bodyHTML('');}if(elements.length===0){onok();}else{this._modalDialog.headerHTML('Sample text detected');var modalbutton_mover=function(){$(this).removeClass('button-color1 button-bgcolor1 button-border1').addClass('pc-button-h button-color2 button-bgcolor2 button-border2');
};var modalbutton_mout=function(){$(this).removeClass('pc-button-h button-color2 button-bgcolor2 button-border2').addClass('button-color1 button-bgcolor1 button-border1');
};var self=this;this._modalDialog.setButtons([new zfp_ModalButton(this.id+'_modaldialogbutton0',{text:'Yes, continue',alt:'Yes, continue',events:{mouseover:modalbutton_mover,
mouseout:modalbutton_mout,click:function(){onok();self._modalDialog.hide();}}}),new zfp_ModalButton(this.id+'_modaldialogbutton1',{text:'No, change text',alt:'No, change text',
events:{mouseover:modalbutton_mover,mouseout:modalbutton_mout,click:function(){self._modalDialog.hide();}}})],true);this._modalDialog.draw();this._modalDialog.show();
}};zfp_ItemEditor.prototype._page_onresize=function(e,cx,cy){var root=this.$();var cxMain=cx-298;var cyMain=cy;root.width(cxMain).height(cyMain);this.$('DIV.pc-ie-rbar:first').height(cyMain-69);
this.$('.pc-ie-rbox-overlay').height(cyMain-119);this._settingsView.setHeight(cyMain-211);this._settingsView.update();$.each(this._croppers,function(i,c){c.resize(cxMain,
cyMain-69);});this._altCropper.resize(cxMain,cyMain-69);this._largeCropper.resize(cx,cyMain-69);if(root.css('display')!='none'){this._resizeInfo();this._resizeInfo('left');
this._resizeProducts();this._resizeServices();this._resizeTemplatePhoto();}var batch=this.$dom('batch');batch.find('.pc-ie-rbox:first').height(cy-125);batch.find('.pc-ie-summary:first').height(cy-69);
this._batchView.setHeight(cy-125);this._batchView.update();this._modalDialog.resize();var title=$('.pc-ie-title h2.pc-ie-desc');if(title.length>0){var titleTextMetrics=title.textMetrics(),
titleParentWidth=title.closest('.pc-ie-title').width();if(titleTextMetrics.width>=titleParentWidth&&title.html()!=this._shortTitle){this._longTitleWidth=titleTextMetrics.width;
title.html(this._shortTitle);}else if(title.html()!=this._longTitle&&this._longTitleWidth<titleParentWidth){title.html(this._longTitle);}}var titleHeight=0;if(this.$('.pc-ie-title:first').is(':visible')){titleHeight=this.$('.pc-ie-title:first').outerHeight();
}this._frame.$('.pc-ie-slidein').css('top',(titleHeight-13)+'px').height(cy-titleHeight+12).not('.pc-slidein-fw,.pc-slidein-rw').width(cx).not('.pc-slidein-s').css('right',
(-cx-28)+'px');this._frame.$('.pc-ie-slidein').trigger('resizePage',[cx,cy-titleHeight+12]);if(root.css('display')!='none'&&this._initServiceId!=null){this._initFraming(this._initServiceId);
this._initServiceId=null;}};zfp_ItemEditor.prototype._back_onclick=function(){var self=this,indx=this._itemIndex,onswitch=function(){if(typeof self._cropper.getPhotos==='function'){self._item.photos=self._cropper.getPhotos();
}if(self._item.extra.product!=null){self._frame.save(self._item);}self._hideAllPanels();if(self._altCropper.$().is(':visible')&&self._altCropper.onswitchclick){self._altCropper.onswitchclick();
}self._switchTo(indx-1);};if(!this._switching&&indx>0){this._switching=true;if(this._cropper.type===zfp_ItemEditor.Cropper.TemplateProduct&&this._selectedElement){var val=this._cropper.getActiveElementVal();
this._cropper.saveElement(val,function(){self._cropper.deselectElement(false,onswitch);});}else{onswitch();}}};zfp_ItemEditor.prototype._next_onclick=function(){var self=this,
indx=this._itemIndex,onswitch=function(){if(typeof self._cropper.getPhotos==='function'){self._item.photos=self._cropper.getPhotos();}if(self._item.extra.product!=null){self._frame.save(self._item);
}self._hideAllPanels();if(self._altCropper.$().is(':visible')&&self._altCropper.onswitchclick){self._altCropper.onswitchclick();}self._switchTo(indx+1);};if(!this._switching&&(indx+1)<this._items.length){this._switching=true;
if(this._cropper.type===zfp_ItemEditor.Cropper.TemplateProduct&&this._selectedElement){var val=this._cropper.getActiveElementVal();this._cropper.saveElement(val,
function(){self._cropper.deselectElement(false,onswitch);});}else{onswitch();}}};zfp_ItemEditor.prototype._close_onclick=function(){var self=this;if(this._cropper&&typeof this._cropper.deselectElement==='function'){var val=this._cropper.getActiveElementVal();
if(val){this._cropper.saveElement(val,function(){self._cropper.deselectElement();});}else{this._cropper.deselectElement();}}this._hideAllPanels();if(this._altCropper.$().is(':visible')&&this._altCropper.onswitchclick){this._altCropper.onswitchclick();
}if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();}if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();
}var frame=this._frame;frame.save(this._item,function(){frame.hide();});};zfp_ItemEditor.prototype._cancel_onclick=function(){this._hideAllPanels();if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();
}if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();}if(this._frame.options.partialPackage){this._frame.options.partialPackage.current.photos=this._frame.options.partialPackage.previous.photos;
this._frame.options.partialPackage.current.settings=this._frame.options.partialPackage.previous.settings;this._frame.updatePackageItem(this._frame.options.partialPackage.current,
this);}else{this.close();}};zfp_ItemEditor.prototype.cancel=function(){this._cancel_onclick();};zfp_ItemEditor.prototype._save_onclick=function(){this._hideAllPanels();var self=this;var oncontinue=function(){if(self._cropper&&typeof self._cropper.destroyDrop==='function'){self._cropper.destroyDrop();
}if(self._cropper&&typeof self._cropper.clearTemplateImage==='function'){self._cropper.clearTemplateImage();}var i=0,x=0,iplen=self._item.photos.length,fplen=0,found=false;
for(i=0;i<iplen;i++){fplen=self._frame.photos.length;for(x=0;x<fplen;x++){if(self._item.photos[i].id===self._frame.photos[x].id){found=true;break;}}if(!found){self._frame.photos.push(self._photos[self._item.photos[i].id]);
}found=false;}self._frame.updatePackageItem(self._item,self);};if(this._cropper.type===zfp_ItemEditor.Cropper.TemplateProduct&&this._selectedElement){var val=this._cropper.getActiveElementVal();
this._cropper.saveElement(val,function(){self._cropper.deselectElement();if(this._frame.options.partialPackage&&this._frame.options.partialPackage.resetDefaults){self._validateTemplateText(oncontinue);
}else{oncontinue();}});}else{if(this._frame.options.partialPackage&&this._frame.options.partialPackage.resetDefaults){self._validateTemplateText(oncontinue);}else{oncontinue();
}}};zfp_ItemEditor.prototype._add_onclick=function(){this._hideAllPanels();this._validateTemplateText(this.closure(this._addtocart));};zfp_ItemEditor.prototype._addtocart=function(){if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();
}if(this._cropper.type===zfp_ItemEditor.Cropper.TemplateProduct&&this._selectedElement){var val=this._cropper.getActiveElementVal();var self=this;this._cropper.saveElement(val,
function(){self._cropper.deselectElement();if(self._cropper&&typeof self._cropper.clearTemplateImage==='function'){self._cropper.clearTemplateImage();}self._frame.addItems(self._items,
self._item.extra.productMeta,self,self._photos);});}else{if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();
}this._frame.addItems(this._items,this._item.extra.productMeta,this,this._photos);}};zfp_ItemEditor.prototype._checkout_onclick=function(){this._hideAllPanels();if(this._cropper&&typeof this._cropper.destroyDrop==='function'){this._cropper.destroyDrop();
}if(this._cropper&&typeof this._cropper.clearTemplateImage==='function'){this._cropper.clearTemplateImage();}var frame=this._frame;frame.save(this._item,function(){frame.viewCart();
});};zfp_ItemEditor.prototype._section_onclick=function(e,node){if(!zf_stdIsLeftButton(e)){return;}e.preventDefault();e.stopPropagation();node=$(node).closest('.pc-ie-section');
var pane=node.parent();var batchMode=!pane.hasClass('pc-ie-edit');var self=this;var secId=node.attr('data-secid');if(node.hasClass('pc-ie-section-o')){delete this._expanded[secId];
var oncomplete=function(){$(this).hide();node.removeClass('pc-ie-section-o').addClass('pc-ie-section-c');if(batchMode){self._batchView.update();}self._settingsView.update();
};node.find('.pc-ie-secbody:first').slideUp(100,oncomplete);}else{var onslideupcomplete=function(){$(this).hide();$(this).closest('.pc-ie-section').removeClass('pc-ie-section-o').addClass('pc-ie-section-c');
if(batchMode){self._batchView.update();}self._settingsView.update();};pane.find('.pc-ie-section-o .pc-ie-secbody:first').slideUp(100,onslideupcomplete);if(!batchMode){this._expanded={};
this._expanded[secId]=true;}var onslidedowncomplete=function(){$(this).show();if(batchMode){self._batchView.update();}self._settingsView.update();};node.removeClass('pc-ie-section-c').addClass('pc-ie-section-o').find('.pc-ie-secbody:first').slideDown(100,
onslidedowncomplete);}};zfp_ItemEditor.prototype._product_onclick=function(elem){elem=$(elem);if(elem.hasClass('pc-ie-item-s')){return;}$('TR.pc-ie-item-s',this._productsView.getContentNode()).removeClass('pc-ie-item-s').find('TD').removeClass('pc-color5 pc-bgcolor5').addClass('pc-color1 pc-bgcolor1');
elem.addClass('pc-ie-item-s').find('TD').removeClass('pc-color1 pc-bgcolor1 pc-color7 pc-bgcolor7').addClass('pc-color5 pc-bgcolor5');var key=elem.attr('data');if(this._changeItems!=null){this._completeChange(this._changeItems[key]);
}else{this._pendingChange=key;}};zfp_ItemEditor.prototype._service_onclick=function(elem,serviceSetId){elem=$(elem);if(elem.hasClass('pc-ie-item-s')){return;}$('TR.pc-ie-item-s',
this._servicesView.getContentNode()).removeClass('pc-ie-item-s').find('TD').removeClass('pc-color5 pc-bgcolor5').addClass('pc-color1 pc-bgcolor1');elem.addClass('pc-ie-item-s').find('TD').removeClass('pc-color1 pc-bgcolor1 pc-color7 pc-bgcolor7').addClass('pc-color5 pc-bgcolor5');
var serviceId=elem.attr('data');var item=$.extend({},this._item);item.services=$.extend({},item.services);if(serviceId!=null){item.services[serviceSetId]=serviceId;
}else{delete item.services[serviceSetId];var optionSets=item.extra.product.options[item.optionId].getServiceSets();for(var x=0;x<optionSets.length;x++){var ss=optionSets[x];
if(ss.data['depends-on']===serviceSetId){delete item.services[ss.id];}}}this._completeChange(item);};zfp_ItemEditor.prototype._service_info_slidein=function(elem,serviceSetId){var self=this;
elem=$(elem);if(elem.hasClass('selected')){var showServiceInfo=function(data){var infobox=$('.pc-ie-subinfo'),bridge=$('.pc-ie-subinfo-bridge');infobox.html(data.description);
var width=Math.max(Math.min($(document).width(),$(window).width()),954),frame=self._frame.$('.pc-frame'),frameheight=frame.innerHeight(),infoboxheight=infobox.outerHeight(),
infoboxtop=elem.offset().top-frame.offset().top-3,bridgetop=infoboxtop,infoboxright=width-elem.offset().left-((width-frame.innerWidth())/2),infoboxrightstart=infoboxright-infobox.outerWidth();
if(infoboxtop+infoboxheight>frameheight){infoboxtop=frameheight-infoboxheight;}bridge.css('top',bridgetop+'px').css('right',infoboxright+'px').show();infobox.css('top',
infoboxtop+'px').css('right',infoboxrightstart+'px').show().animate({right:infoboxright+1},200);};var serviceId=elem.closest('TR').attr('data');var vendorId=this._item.extra.product.options[this._item.optionId].vendorId;
var cacheKey=["v:",vendorId,";sv:",serviceId].join('');if(typeof this._cache[cacheKey]!='undefined'){showServiceInfo(this._cache[cacheKey]);}else{zf_stdServerRequestEx("GET",
"/zf/cart/cart.asmx","GetServiceMeta",[zf_locale,zf_VendorMeta.cached(vendorId).timestamp,vendorId,serviceId],function(result,error){if(error!=null)return;self._cache[cacheKey]=result;
showServiceInfo(result);});}}};zfp_ItemEditor.prototype._service_info_slideout=function(){var infobox=$('.pc-ie-subinfo'),bridge=$('.pc-ie-subinfo-bridge');infobox.animate({right:'-='+infobox.outerWidth()},
200,function(){infobox.hide();bridge.hide();});};zfp_ItemEditor.prototype._service_info_hide=function(){$('.pc-ie-moreinfo').removeClass('selected pc-color7 pc-bgcolor7').addClass('pc-color1 pc-bgcolor1');
$('.pc-ie-subinfo').hide();$('.pc-ie-subinfo-bridge').hide();};zfp_ItemEditor.prototype._dependent_onchange=function(e,serviceSetId){var serviceId=e.currentTarget.value;if(serviceId=='-none')serviceId=null;
var item=$.extend({},this._item);item.services=$.extend({},item.services);if(serviceId!=null)item.services[serviceSetId]=serviceId;else delete item.services[serviceSetId];
this._updateServiceAvailability(item);this._completeChange(item);};zfp_ItemEditor.prototype._crop_onchange=function(cropping){if(this._itemIndex<0){return;}var item=this._item;
var productMeta=item.extra.product.meta();item.settings["cropping"]=productMeta.isSingleImage?cropping:"cropping-manual";this._hideAllPanels();};zfp_ItemEditor.prototype._switchCroppers=function(cropper,
imageIndex,element){if(typeof cropper!=='number'){cropper=this._cropper.type;}this._hideAllPanels();var oldCropper=this._altCropper,newCropper=this._cropper;if(this._cropper.type!==cropper){oldCropper=this._cropper;
newCropper=this._altCropper;};var vendorMeta=zf_VendorMeta.cached(this._item.vendorId);var productMeta;if(this._item.extra.product!=null){productMeta=this._item.extra.product.meta();
}else if(vendorMeta!=null){productMeta=vendorMeta.products[this._item.productId];}if(element){this._item.extra.element=element;}else{this._item.extra.element=null;
}var cc=this._item.extra.product.options[this._item.optionId].settings['color-conversion'];var ccSettings;if(cc&&cc.readOnly!=true&&!this._item.extra.productMeta.isTemplated){ccSettings=vendorMeta.settings['color-conversion'];
}if(newCropper.type===zfp_ItemEditor.Cropper.Simple&&this._item.extra.productMeta.isTemplated){productMeta.canRotate=false;this.$('.pc-ie-rbox-overlay').show();this.$('.pc-ie-nav-overlay').show();
this.$('.pc-ie-title-overlay').show();this._frame.hideCloseX();}else{this.$('.pc-ie-rbox-overlay').hide();this.$('.pc-ie-nav-overlay').hide();this.$('.pc-ie-title-overlay').hide();
this._frame.showCloseX();}if(typeof newCropper.clearTemplateImage==='function'){newCropper.clearTemplateImage();}if(typeof this._itemIndex==='number'&&typeof imageIndex==='number'){this._selectedPhoto[this._itemIndex]=imageIndex;
}newCropper.initUI(productMeta,this._item.photos,this._customerItems[this._item.id]!=null?this._customerItems[this._item.id].photos:null,this._getCropperData(this._item,
true),this._photos,ccSettings,null,this._cropperEventCallbacks);oldCropper.fadeOut();oldCropper.$().fadeOut();newCropper.$().fadeIn();newCropper.fadeIn();var groupid=productMeta.groupId||'unknown',
itemid=productMeta.id||'unknown',vendorid=this._item.vendorId||'unknown';this._frame.trackPageView('/itemeditor/'+this._getCropperTypeString(cropper.type)+'?group='+groupid+'&id='+itemid+'&vendorid='+vendorid);
};zfp_ItemEditor.prototype._crop_onenlarge=function(imageMeta,protoPhoto,readOnly,onclose){var self=this;var frame=this._frame;var panel=this.$dom('cropper');var item=this._item;
var vendorMeta=zf_VendorMeta.cached(item.vendorId);var productMeta=item.extra.product.meta();for(var i=0;i<productMeta.editors.length;i++){var editor=vendorMeta.editors[productMeta.editors[i]];
if(editor instanceof zf_VendorMeta.OverlayEditor){var viewport=editor.selectViewport(item.productId,item.optionId,item.settings,{});imageMeta=$.extend(productMeta,
{canRotate:false,sizeX:viewport.width,sizeY:viewport.height,wrapX:0,wrapY:0});if((imageMeta.sizeX<imageMeta.sizeY)!=(imageMeta.minWidth<imageMeta.minHeight)){var t=imageMeta.minWidth;
imageMeta.minWidth=imageMeta.minHeight;imageMeta.minHeight=t;}break;}}var data=this._getCropperData(item);if(readOnly){data.readOnly=true;}var cc=item.extra.product.options[item.optionId].settings['color-conversion'];
var ccSettings;if(cc&&cc.readOnly!=true){ccSettings=vendorMeta.settings['color-conversion'];}this._largeCropper.initUI(imageMeta,[protoPhoto],null,data,this._photos,
ccSettings,null,this._cropperEventCallbacks);frame.slideInPanel(panel);frame.pushHeader(readOnly?'<h2 class="pc-font3 pc-ie-desc">Customer Cropping</h2>':['<h2 class="pc-font3 pc-ie-desc">Crop ',
imageMeta.altName,'</h2>'].join(''),'Back<span class="pc-hdr-hide"></span>',function(){onclose('cropping-manual');frame.slideOutPanel(panel);frame.popHeader();self._setTitle(self._item);
});};zfp_ItemEditor.prototype._qty_onchange=function(quantity){this._item.quantity=quantity;this._updateSubtotal();};zfp_ItemEditor.prototype._getOwnerId=function(photomap){var ownerid=0;for(var p in photomap){if(typeof photomap[p].owner==='object'){if(typeof photomap[p].owner.id==='number'){ownerid=photomap[p].owner.id;
break;}}}return ownerid;};zfp_ItemEditor.prototype._setPhotoGridGradients=function(){var panel=$(this.dom('template-photo')),bottomFades=panel.find('.pc-ie-scrollfade'),bg=panel.find('.pc-tabbody:first').css('background-color'),
gradient='';gradient='-webkit-linear-gradient(top, '+zf_Color.toRgbaCss(bg,0)+' 0%, '+zf_Color.toRgbaCss(bg,1)+' 100%)';if(gradient!==''){bottomFades.css('background',
gradient);}};function zf_MouseTracker(node){if(!(node instanceof jQuery))node=$(node);var self=this;var tracking=false;this._mousedown=function(e){e.stopPropagation();e.preventDefault();
if(!zf_stdIsLeftButton(e))return;if(self.onbegintrack!=null&&!self.onbegintrack(e))return;if(document.addEventListener){document.addEventListener('mousemove',self._mousemove,
true);document.addEventListener('mouseup',self._mouseup,true);}else if(node[0].setCapture){node.mousemove(self._mousemove).mouseup(self._mouseup);node[0].setCapture();
}self.anchorX=e.pageX;self.anchorY=e.pageY;tracking=true;};this._mousemove=function(e){e=jQuery.event.fix(e);e.stopPropagation();if(tracking&&self.ontrack!=null)self.ontrack(e);
};this._mouseup=function(e){e=jQuery.event.fix(e);e.stopPropagation();if(!tracking)return;if(self.ontrack!=null)self.ontrack(e);if(document.removeEventListener){document.removeEventListener('mousemove',
self._mousemove,true);document.removeEventListener('mouseup',self._mouseup,true);}else if(node[0].releaseCapture){node[0].releaseCapture();node.unbind('mousemove mouseup');
}if(self.onendtrack!=null)self.onendtrack(e);tracking=false;};node.mousedown(this._mousedown);};function zfp_PackageEditor(id,leftScrolls,rightView,grids,productInfo){;zf_Control.prototype.constructor.call(this,
id);this._leftScrolls=leftScrolls;this._rightView=rightView;this._productInfo=productInfo;this._grids=grids;for(var i=0;i<this._leftScrolls.length;i++){if(typeof this._leftScrolls[i]==='undefined'){this._leftScrolls.splice(i,
1);}}for(var x=0;x<this._grids.length;x++){if(typeof this._grids[x]==='undefined'){this._grids.splice(x,1);}}}zfp_PackageEditor.inherits(zf_Control);zfp_PackageEditor.prototype.init=function(frame){;
var self=this;this._frame=frame;if(this._frame.canUseScrapbooks===true){this.$('.pc-pe-left .pc-pe-tabbox .pc-pe-tabheader li:eq(1)').removeClass('hide-tab');}this.$().bind('resizePage',
this.closure(this._page_onresize));this.$().bind('hidePage',this.closure(this._page_onhide));this.$('.pc-pe-tabbox .pc-pe-tabheader li').bind('fastClick',this.closure(this._tab_onclick));
if(typeof frame.pricing!='undefined'){this.$('.pc-pe-header:first A.pc-pe-change').show().bind('fastClick',function(){frame.browse(self);});}else{this.$('.pc-pe-header:first A.pc-pe-change').hide();
}this.$('.pc-pe-footer:first A.pc-pe-add').bind('fastClick',function(){if(!$(this).hasClass('pc-button-d')){self._add_onclick();}});this.$('.pc-pe-footer:first A.pc-pe-close').bind('fastClick',
function(){frame.hide();});this.$('.pc-pe-footer:first A.pc-pe-save').bind('fastClick',function(){self.save(function(){frame.hide();});});this.$('.pc-pe-tabfavtop .ddlFavorites').change(this.closure(this._favorites_onchange));
this._plugins=[new zfl_ZoomPlugin(),new zfl_DecorationPlugin(this._frame.decorationInfo,zfl_PhotoViewStyle.GalleryPhoto,{hideShadow:true}),new zf_VideoInfoPlugin(function(c){return c.data;
},true,true)];$.each(this._grids,function(ix,g){g.init(self._plugins);g.$().addClass('pg-method-0 defdec pvp square pvp-method-9 square-method-1');g.onselchange=function(){self._grid_onselchange(g);
};g.onqueryitem=zf_stdFalse;});this._productInfo.init(frame);this._productInfo.onpreview=function(info){frame.showPreview(info);};};zfp_PackageEditor.prototype.initUI=function(item,
productMeta,notAdded,onload){;this._pricing=null;this._item=null;this._parts=null;this._productMeta=productMeta;this._items={};this._photos={};this._scrapbooks={};
this._favorites=[];this._all=[];this._notAdded=notAdded;this._templateImages=[];this._templateApis=[];this._alerts={drag:false,incomplete:false};this._frame.options.partialPackage=null;
var self=this;var items=[];$.each(this._frame.photos,function(i,p){self._photos[p.id]=p;});if(item instanceof Array){this._parts=$.map(item,function(p){p=$.extend(new zf_ProtoPackage(),
p);p.items=$.map(p.items,function(i){i=$.extend(new zf_ProtoItem(),i);i.photos=[].concat(i.photos);return i;});items=items.concat(p.items);return p;});this.$().removeClass('pc-pe-withinfo');
}else{item=$.extend(new zf_ProtoItem(),item);item.photos=[].concat(item.photos);items=[this._item=item];this.$().addClass('pc-pe-withinfo');}this.$().toggleClass('pc-pe-new',
notAdded);$.each(this._grids,function(ix,g){g.clear();});var photoIds=[];$.each(items,function(ix,i){self._items[i.id=i.id!=null?i.id:(ix+1)]=i;$.each(i.photos,function(ix,
p){if(self._photos[p.id]==null)photoIds.push(p.id);});});if(this._productMeta&&this._productMeta.name){this.$('.pc-pe-header H2').html(this._productMeta.name);}else if(!(item instanceof Array)){this.$('.pc-pe-header H2').html('Edit Product');
}this._setButtons();var pricing=null;var photos=null;var priceKey=(item instanceof Array)?item[0].priceKey:item.priceKey;var oncomplete=function(pr,ph){if(pr!=null)pricing=pr;
if(ph!=null)photos=ph;if(pricing!=null&&photos!=null){$.each(photos,function(i,p){self._photos[p.id]=p;});if(item instanceof Array)self._initPackageUI(pricing,self._parts);
else self._initProductUI(pricing,self._item);if(onload!=null)onload();self._recalcLayout();$.each(self._leftScrolls,function(is,s){s.update(true);});self._recalcLayout();
}};zf_PriceList.load([priceKey],this._frame.cart.currency,function(cacheKey,pricing){oncomplete(pricing,null);},true);if(photoIds.length>0){var ownerId=typeof zf_ownerId!=="undefined"?zf_ownerId:this._getOwnerId(this._photos);
zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','GetPhotos',[photoIds,ownerId],function(result,error){if(error!=null){self._frame.showText(error.message);
return;}oncomplete(null,result);});}else{oncomplete(null,[]);}this._frame.trackPageView('/packageeditor');};zfp_PackageEditor.prototype.save=function(oncomplete){var items=[];for(var id in this._items)items.push(this._items[id]);
this._fixPhotoIndexing(items);this._frame.save(items,oncomplete);};zfp_PackageEditor.prototype._initProductUI=function(pricing,item){;;this._productInfo.showProductInfo(item.vendorId,
item.productId,null);this._pricing=pricing;this._product=pricing.findProduct(item.vendorId,item.productId);if(this._product==null){this._frame.showText('This product is no longer available for ordering');
return;}item.extra.product=this._product;var productMeta=item.extra.product.meta();var price=item.extra.product.options[item.optionId].price.customerPrice;this._frame.setTitle(productMeta.longName);
this._addPhotos();this._rightView.getContentNode().innerHTML='';if(productMeta.images==null||productMeta.images.length==0)this._addImage(item,productMeta,false);
else{var images=zfp_Configurator.makeUiList(productMeta.images,zf_BaseMeta.compare);for(var i=0;i<images.length;i++)this._addImage(item,images[i],true);}this._initDrop();
this._rightView.update();};zfp_PackageEditor.prototype._initPackageUI=function(pricing,parts){;;this._pricing=pricing;this._product=pricing.findPackage(parts[0].packageId);if(this._product==null){this._frame.showText('This package is no longer available for ordering');
return;}var pkg=this._product;var pkgMeta=this._product.meta();var self=this;this._frame.setTitle(pkgMeta.longName);this._addPhotos();this._rightView.getContentNode().innerHTML='';
for(var i=0;i<parts.length;i++){var part=parts[i];;$.each(part.items,function(ix,i){i.extra.product=pkg.products[i.packagePartId+'.'+i.packageItemId];});part.extra.pkg=pkg;
part.extra.part=$.lookup(pkgMeta.parts,function(p){return p.partId==part.partId;});;;var items=part.extra.part.items;for(var j=0;j<items.length;j++){var pkgItem=items[j];
var productMeta=zf_VendorMeta.cached(pkgItem.vendorId).products[pkgItem.productId];var protoItems=$.grep(part.items,function(pi){return pi.packageItemId==pkgItem.id;
});;if(productMeta.isSingleImage){this._addPackageItem(part.partId,pkgItem,productMeta,protoItems);}else{for(var k=0;k<protoItems.length;k++){var item=protoItems[k];
if(productMeta.isTemplated){(function(ti,pm){self._addTemplatedItem(ti,pm);})(item,productMeta);}else{if(productMeta.images==null||productMeta.images.length==0)this._addImage(item,
productMeta,true);else{var images=zfp_Configurator.makeUiList(productMeta.images,zf_BaseMeta.compare);for(var ii=0;ii<images.length;ii++)this._addImage(item,images[ii],
true);}}}}}}this._initDrop();this._rightView.update();};zfp_PackageEditor.prototype._tab_onclick=function(e){var tab=$(e.currentTarget),tabs=this.$('.pc-pe-tabbox .pc-pe-tabheader li:not(.hide-tab)'),
tabBodies=this.$('.pc-pe-tabbox .pc-pe-tabbody');if(!tab.hasClass('selected')){var i=0;tabs.each(function(index){var t=$(this);if(t[0]===tab[0]){i=index;tabs.removeClass('pc-bgcolor9').removeClass('selected').addClass('pc-bgcolor6');
t.removeClass('pc-bgcolor6').addClass('pc-bgcolor9').addClass('selected');return false;}});tabBodies.filter('.active').removeClass('active');tabBodies.eq(i).addClass('active');
this._recalcLayout(tabBodies.eq(i).innerWidth());}};zfp_PackageEditor.prototype._addPhotos=function(){var photos=this._selectedPhotos=this._frame.photos;var self=this;if(photos.length===0){var map={};
this._selectedPhotos=photos=[];$.each(this._items,function(id,item){$.each(item.photos,function(ix,p){map[p.id]=self._photos[p.id];});});$.each(map,function(id,p){if(p!=null)photos.push(p);
});}var gridIndex=0;var selectedIndex=0;for(var i=0;i<photos.length;i++){if(this._addGridPhoto(this._grids[gridIndex],selectedIndex,photos[i])){selectedIndex++;}}if(selectedIndex>2){this.$('.pc-pe-left .pc-pe-tabbody.tab-a .pc-pe-tabmsg').show();
}else{this.$('.pc-pe-left .pc-pe-tabbody.tab-a .pc-pe-tabmsg').hide();}this._recalcLayout(null,this._grids[gridIndex]);this._initDrag(this._grids[gridIndex]);if(this.$('.pc-pe-tabbox .pc-pe-tabheader li:not(.hide-tab)').length>2){gridIndex++;
this._loadFavoritesList(photos[0].owner.id);}var sourceTypes=0;if(this._product.meta().items){$.each(this._product.meta().items,function(ix,item){var vm=zf_VendorMeta.cached(item.vendorId);
var pm=vm.products[item.productId];sourceTypes|=pm.sourceType;});}else sourceTypes=this._product.meta().sourceType;gridIndex++;var allIndex=0,allPhotos=this._frame.allPhotos;
if(!allPhotos){allPhotos=new zfp_PackageEditor.GalleryLoader(photos[0].owner.id,photos[0].gallery.id,sourceTypes);}allPhotos.loadAll(function(){var all=$.grep(allPhotos.getAll(),
function(p){return(sourceTypes&zf_SourceType.Image)!=0&&!p.video||(sourceTypes&zf_SourceType.Video)!=0&&p.video;});for(var y=0;y<all.length;y++){if(self._addGridPhoto(self._grids[gridIndex],
allIndex,all[y])){allIndex++;}}if(allIndex>2){this.$('.pc-pe-left .pc-pe-tabbody.tab-c .pc-pe-tabmsg').show();}else{this.$('.pc-pe-left .pc-pe-tabbody.tab-c .pc-pe-tabmsg').hide();
}self._recalcLayout(null,self._grids[gridIndex]);self._initDrag(self._grids[gridIndex]);});};zfp_PackageEditor.prototype._addGridPhoto=function(grid,index,photo){if(this._frame.isPhotoPrintable(this._product,
photo)){this._photos[photo.id]=photo;var method=zf_ProcessingMethod.StandardMediumThumbnail;var burnable=(photo.flags&zf_PhotoFlags.HasImage0)!=0;var className='pc-pe-p'+photo.id;
grid.setItem(index,'p'+photo.id,null,photo,method,burnable,[className],{data:photo,method:method,image:photo});return true;}return false;};zfp_PackageEditor.prototype._loadFavoritesList=function(photogid){var ddl=this.$('.pc-pe-tabfavtop .ddlFavorites'),
self=this;ddl.html('<option value="">Loading...</option>');$('.pc-pe-favmsg').html('').hide();zfb_Api.loadScrapbooks(photogid,function(scrapbooks,error){if(error!=null){ddl.html('<option value=""></option>');
$('.pc-pe-favmsg').html('An unknown error has occurred.').show();return;}if(!$.isArray(scrapbooks)){scrapbooks=[scrapbooks];}self._scrapbooks={};if(scrapbooks.length>0){var html=[];
$.each(scrapbooks,function(is,s){self._scrapbooks[s.id]=s;html.push('<option value="',s.id,'">',s.getDisplayName(),'</option>');});ddl.html(html.join(''));ddl.attr("selected",
"selected").trigger('change');}else{this.$('.pc-pe-tabfavtop').hide();this.$('.tab-b .pc-pe-tabmsg').html('You currently have no favorites');}});};zfp_PackageEditor.prototype._favorites_onchange=function(e){var id=$(e.currentTarget).val(),
self=this;var loadFavs=function(photos){var favoritesIndex=0;for(var x=0;x<photos.length;x++){if(self._addGridPhoto(self._grids[1],favoritesIndex,photos[x])){favoritesIndex++;
}}self._recalcLayout(null,self._grids[1]);if(photos.length===0){$('.pc-pe-favmsg').html('The selected Favorites list is empty').show();}else if(self._grids[1].getSize()===0){$('.pc-pe-favmsg').html('None of your current favorites are applicable for this product').show();
}self._initDrag(self._grids[1]);};this._grids[1].clear();$('.pc-pe-favmsg').html('').hide();if(typeof this._favorites[id]!='undefined'){loadFavs(this._favorites[id].photos);
}else{this._loadFavoritePhotos(id,loadFavs);}};zfp_PackageEditor.prototype._loadFavoritePhotos=function(id,onload){if(typeof this._scrapbooks[id]!='undefined'){var self=this;zfb_Api.loadScrapbook(this._scrapbooks[id],
function(sb){var len=sb.photos.length;while(len--){if(typeof sb.photos[len].volume==='undefined'){sb.photos.splice(len,1);}}self._favorites[id]={photos:sb.photos};
onload(self._favorites[id].photos);});}else{$('.pc-pe-favmsg').html('You currently have no favorites').show();}};zfp_PackageEditor.prototype._recalcLayout=function(cx,grid){function recalc(g){var info=g.getLayoutInfo();
if(info.width>0&&g.getSize()<info.itemsPerRow){info.itemsPerRow=g.getSize();}else if(info.width==0&&cx!=null){info.width=cx;info.itemsPerRow=Math.floor(cx/g.getCellSize().cx);
}g.recalcLayout(info);}if(grid!=null){recalc(grid);}else{$.each(this._grids,function(){recalc(this);});}$.each(this._leftScrolls,function(is,s){s.update();});};zfp_PackageEditor.prototype._addImage=function(item,
imageMeta,showProduct){;var productMeta=item.extra.product.meta();var imageId=(imageMeta instanceof zf_VendorMeta.Product)?null:imageMeta.id;var photos=$.grep(item.photos,
function(p){return p.imageId==imageId;});var slots=Math.min(Math.max(photos.length+1,imageMeta.minImageCount),imageMeta.maxImageCount);var html=[];var namedImage=imageId!=null&&imageMeta.name!=null;
html.push('<div class="pc-pe-group pc-bgcolor9 pc-font2">','<a href="#" class="pc-pe-removeall pc-font1">Clear All</a>');if(this._parts!=null&&namedImage)html.push(productMeta.longName,
': ',zf_stdHtmlEncode(imageMeta.name));else if(namedImage)html.push(zf_stdHtmlEncode(imageMeta.name));else if(showProduct)html.push(productMeta.longName);else{var dragFormat=imageMeta.sourceTypeIs(zf_SourceType.Video)?'Drag up to {0} videos':'Drag up to {0} photos';
html.push(zf_stdFormatString(dragFormat,imageMeta.maxImageCount));}html.push('</div>');for(var i=0;i<slots;i++){var photo=$.lookup(photos,function(p){return p.index==i;
});this._createSlotHtml(html,item,imageMeta,i);}html.push('<div class="pc-pe-clear"></div>');$(this._rightView.getContentNode()).append(html.join(''));var self=this;
$('.pc-pe-removeall:last',this._rightView.getContentNode()).mousedown(function(e){self._removeall_onclick(this,e,[item],imageMeta);}).click(zf_stdFalse);};zfp_PackageEditor.prototype._addTemplatedItem=function(item,
productMeta){var html=[],self=this;html.push('<div class="pc-pe-group pc-bgcolor9 pc-border6 pc-font2">',productMeta.longName,'</div>');if(item.settings['selected-template']){var i=0,
templates=this._pricing.findTemplates(item.extra.product.meta().getTemplateProductId(item.optionId)),template=null,tid=0;for(i=0;i<templates.length;i++){if(templates[i].id===item.settings['selected-template']){template=templates[i];
break;}};var design=this._pricing.designs[template.designId];tid=this._templateImages.push(new zf_TemplateImage(template.id,template.pages[0].width,template.pages[0].height,
new Date()))-1;this._templateApis.push(new zft_TemplatesApi(typeof zf_ownerId!=="undefined"?zf_ownerId:this._getOwnerId(this._photos),template.id,zf_stdGetCookie('zf_keyring'),
zf_stdGetCookie('zf_5y_visitor')));var size=this._templateImages[tid].getScaledSize({cx:100,cy:100}),top=(100-size.cy)/2,left=(100-size.cx)/2;var maps=this._createElementMaps(template,
0,item.settings,item.photos,this._photos);html.push('<div class="pc-pe-templateditem">','<a href="#" class="pc-pe-editdesignimg">','<img src="/zf/img/null.gif" class="pc-pe-templatedproductpreview tid',
tid,'" id="imgedititem',item.id,'" style="background-position:',left,'px ',top,'px;" />','</a>','<div class="pc-pe-templateinfo">','<div class="pc-pe-templatename pc-font2">',
design.longName,'</div>','<div class="pc-pe-templateedit">','<a href="#" id="edititem',item.id,'" class="pc-pe-editdesign pc-font1">Edit design</a>','<a href="#" id="changeitemdesign',
item.id,'" class="pc-pe-changedesign pc-font1">Change design</a>','</div>','</div>','</div>');(function(id,t,s,m){self._templateApis[id].registerRequest(self._templateApis[id].createRequest($.first(t.pages).key,
new zf_Size(s.cx,s.cy),null,m.photomap,m.textmap),function(url){self._templateImages[id].load(url,function(url){$('.tid'+id,self._rightView.getContentNode()).css('background-image',
'url('+url+')');},function(){;},function(){;});});}(tid,template,size,maps));}else{html.push('<div class="pc-pe-templateditem">','<a class="pc-button button-font1" id="pkgitem',
item.id,'" href="#">Select and Configure Design</a>','</div>');}html.push('<div class="pc-pe-clear"></div>');$(this._rightView.getContentNode()).append(html.join(''));
var findItem=function(itemid){var itm=null,x=0,z=0;root:for(x=0;x<self._parts.length;x++){var part=self._parts[x];for(z=0;z<part.items.length;z++){if(itemid===part.items[z].id){itm=part.items[z];
break root;}}}return itm;};var getPartialPackage=function(itm,parts,meta,resetDefaults){return{current:$.extend(new zf_ProtoItem(),itm),parts:self._parts,meta:self._productMeta,
previous:{settings:$.extend(true,{},itm.settings),photos:$.extend(true,[],itm.photos)},resetDefaults:resetDefaults,notAdded:self._notAdded};};var editItem=function(itemid){var itm=findItem(itemid);
self._frame.options.partialPackage=getPartialPackage(itm,self._parts,self._productMeta,false);self._frame.editTemplatedDesign(itm,self);};var changeDesign=function(itemid){var itm=findItem(itemid);
var templatePricingLoaded=function(pricing){self._frame.selectTemplatedDesign(self,pricing,getPartialPackage(itm,self._parts,self._productMeta,true));};zf_PriceList.load([itm.priceKey],
self._frame.cart.currency,function(cacheKey,pricing){templatePricingLoaded(pricing);},true);};$('.pc-pe-templateditem:last .pc-button',this._rightView.getContentNode()).button(zfp_Configurator._buttonOptions).bind('button-click',
function(){changeDesign(parseInt(this.id.replace('pkgitem','')));});$('.pc-pe-templateditem:last .pc-pe-editdesignimg',this._rightView.getContentNode()).mouseover(function(){$(this).addClass('hover');
}).mouseout(function(){$(this).removeClass('hover');}).click(function(){editItem(parseInt($(this).find('.pc-pe-templatedproductpreview')[0].id.replace('imgedititem',
'')));});$('.pc-pe-templateditem:last .pc-pe-editdesign',this._rightView.getContentNode()).click(function(){editItem(parseInt(this.id.replace('edititem','')));});
$('.pc-pe-templateditem:last .pc-pe-changedesign',this._rightView.getContentNode()).click(function(){changeDesign(parseInt(this.id.replace('changeitemdesign','')));
});};zfp_PackageEditor.prototype._getOwnerId=function(photomap){var ownerid=0;for(var p in photomap){if(typeof photomap[p].owner==='object'){if(typeof photomap[p].owner.id==='number'){ownerid=photomap[p].owner.id;
break;}}}return ownerid;};zfp_PackageEditor.prototype._createElementMaps=function(template,page,settings,photos,photomap){var maps={photomap:{},textmap:{}};var getPhoto=function(photolist,
imageIndex){var photo=null;for(var i=0;i<photolist.length;i++){if(photolist[i].index===imageIndex){photo=photolist[i];break;}}return photo;};if(template&&typeof page==='number'){for(var e in template.elements[page]){var element=template.elements[page][e];
if(element.type==='Text'){var val=settings[element.name];if(typeof val!='string'){val=element.placeholder;}maps.textmap[element.name]=new zft_TextParam(val);}else if(element.type==='Photo'){var protophoto=getPhoto(photos,
element.imageIndex);if(protophoto===null){continue;}var photo=photomap[protophoto.id];maps.photomap[element.name]=new zft_PhotoParam(photo.id,photo.token,protophoto.cropping,
zft_RotateFlipFlags.None);}}}return maps;};zfp_PackageEditor.prototype._addPackageItem=function(partId,pkgItem,productMeta,items){;var html=[];html.push('<div class="pc-pe-group pc-bgcolor9 pc-border6 pc-font2">',
'<a href="#" class="pc-pe-removeall pc-font1">Clear All</a>',productMeta.longName,'</div>');for(var i=0;i<items.length;i++)this._createSlotHtml(html,items[i],productMeta,
0);html.push('<div class="pc-pe-clear"></div>');$(this._rightView.getContentNode()).append(html.join(''));var self=this;$('.pc-pe-removeall:last',this._rightView.getContentNode()).mousedown(function(e){self._removeall_onclick(this,
e,items);}).click(zf_stdFalse);};zfp_PackageEditor.prototype._createSlotHtml=function(html,item,imageMeta,imageIndex){var imageId=(imageMeta instanceof zf_VendorMeta.Product)?null:imageMeta.id;
var photo=item.getPhoto(imageId,imageIndex);html.push('<div class="pc-pe-slot pc-bgcolor5',photo==null?' pc-pe-slot-e':'','"',' data-item="',item.id,'"',' data-image="',
imageId!=null?imageId:'','"',' data-index="',imageIndex,'">');html.push('<img class="pc-pe-wait" src="',zfp_Configurator.formatIconUrl('/zf/img/image-wait.gif'),
'" />');if(photo!=null)this._addCroppedPhoto(html,photo);else this._addEmptyPhoto(html);this._addPlaceholder(html,imageMeta);html.push('<div class="pc-pe-remove"></div>');
html.push('</div>');return html;};zfp_PackageEditor.prototype._addCroppedPhoto=function(html,protoPhoto){var photo=this._photos[protoPhoto.id];if(photo==null)return html;var method=zf_ProcessingMethod.StandardLargeThumbnail;
var size=photo.getScaledSize(method);var url=photo.getInternalUrl(method,{block:true});var crop={left:Math.round(protoPhoto.cropping.left*size.cx),top:Math.round(protoPhoto.cropping.top*size.cy),
width:Math.round(protoPhoto.cropping.width*size.cx),height:Math.round(protoPhoto.cropping.height*size.cy)};html.push('<div class="pv-inner" style="','left:',Math.floor(3+(method.cx-size.cx)/2),
'px;','top:',Math.floor(3+(method.cy-size.cy)/2),'px;','width:',size.cx,'px;','height:',size.cy,'px;">');html.push('<img class="pv-img" width="',size.cx,'" height="',
size.cy,'"',' style="background-image:url(',url,');"',' src="',zfp_Configurator.formatIconUrl('/zf/img/null.gif'),'" />','<div class="pv-crop-mask"></div>','<div class="pv-crop-rect" style="',
'background-image:url(',url,');','background-position:',-crop.left,'px ',-crop.top,'px;','left:',crop.left,'px;','top:',crop.top,'px;','width:',crop.width,'px;',
'height:',crop.height,'px;">','<div class="pv-crop-rect-t"></div>','<div class="pv-crop-rect-b"></div>','<div class="pv-crop-rect-l"></div>','<div class="pv-crop-rect-r"></div>',
'<div class="pv-crop-rect-tl"></div>','<div class="pv-crop-rect-tr"></div>','<div class="pv-crop-rect-bl"></div>','<div class="pv-crop-rect-br"></div>','</div>');
if(photo.video)html.push('<div class="pv-v">','<div class="pv-v-b"></div>','<div class="pv-v-i"></div>','<div class="pv-v-d">',zf_stdFormatDuration(photo.duration,
true),'</div>','</div>');html.push('</div>');return html;};zfp_PackageEditor.prototype._addEmptyPhoto=function(html){html.push('<div class="pv-inner"></div>');};zfp_PackageEditor.prototype._addPlaceholder=function(html,
imageMeta){var method=zf_ProcessingMethod.StandardLargeThumbnail;var product={cx:imageMeta.sizeX+2*imageMeta.wrapX,cy:imageMeta.sizeY+2*imageMeta.wrapY};if(imageMeta.canRotate&&product.cx<product.cy)product={cx:product.cy,
cy:product.cx};if(product.cx==0||product.cy==0)product={cx:6,cy:4};var scale=Math.min(method.cx/product.cx,method.cy/product.cy);var cx=Math.floor(product.cx*scale);
var cy=Math.floor(product.cy*scale);var x=3+(method.cx-cx)/2;var y=3+(method.cy-cy)/2;var dragPrompt=imageMeta.sourceTypeIs(zf_SourceType.Video)?'Drag Video Here':'Drag Photo Here';
html.push('<div class="pc-pe-target pc-border10 pc-bgcolor11 pc-color4"',' style="left:',x,'px;top:',y,'px;width:',cx-2,'px;height:',cy-2,'px;line-height:',cy-2,
'px">','<span><em>',dragPrompt,'</em></span>','</div>');return html;};zfp_PackageEditor.prototype._setButtons=function(){var anyPhotos=false,photoCount=0,templatedProducts=0,nonTemplatedProducts=0,
validTemplateProducts=0;$.each(this._items,function(id,i){if(zf_VendorMeta.cached(i.vendorId).products[i.productId].isTemplated){templatedProducts++;if(i.settings['selected-template']){validTemplateProducts++;
}}else{nonTemplatedProducts++;}photoCount+=i.photos.length;});anyPhotos=photoCount>0&&templatedProducts===validTemplateProducts;this.$('.pc-pe-footer:first A.pc-pe-add').enableButton(anyPhotos);
this.$('.pc-pe-footer:first A.pc-pe-save').enableButton(anyPhotos);var isVideoProduct;if(this._productMeta)isVideoProduct=(this._productMeta.sourceType&zf_SourceType.Video)==zf_SourceType.Video;
else{var sourceTypes=0;$.each(this._items,function(id,i){var productMeta=zf_VendorMeta.cached(i.vendorId).products[i.productId];sourceTypes|=productMeta.sourceType;
});isVideoProduct=(sourceTypes&zf_SourceType.Video)==zf_SourceType.Video;}var txt='';if(!this._alerts['drag']&&!anyPhotos&&nonTemplatedProducts>0){txt=isVideoProduct?'Please drag a video onto a placeholder':'Please drag a photo onto a placeholder';
this._alerts['drag']=true;}else if(!this._alerts['incomplete']&&anyPhotos){txt=isVideoProduct?'You can add an incomplete product to the cart and add videos to it later':'You can add an incomplete product to the cart and add photos to it later';
this._alerts['incomplete']=true;}if(txt.length>0){this.$('.pc-pe-infobox span').text(txt).stop(true,true).fadeIn(1000,function(){setTimeout(function(){this.$('.pc-pe-infobox span').stop(true,
true).fadeOut(1000);},10000);});}};zfp_PackageEditor.prototype._initDrag=function(grid){var self=this;grid.$('.pv').draggable({distance:2,opacity:0.8,appendTo:this._frame.dom(),containment:this._frame.$('.pc-body')[0],
helper:function(e){return self._createDragHelper(this,e,grid);},drag:function(e,ui){self._draggable_ondrag(this,e,ui,grid);},stop:function(e,ui){self._draggable_onstop(this,
e,ui,grid);}}).unbind('touchstart touchmove touchend touchcancel').bind('touchstart touchmove touchend touchcancel',function(e){grid.itemTouchHandler(e,zf_PhotoGrid.Drag.Right);
});};zfp_PackageEditor.prototype._initDrop=function(){var self=this;$('.pc-pe-slot',this._rightView.getContentNode()).not('.ui-droppable').droppable({activate:function(e,ui){self._droppable_onactivate(this,
e,ui);},deactivate:function(e,ui){self._droppable_ondeactivate(this,e,ui);},over:function(e,ui){self._droppable_onover(this,e,ui);},out:function(e,ui){self._droppable_onout(this,
e,ui);},drop:function(e,ui){self._droppable_ondrop(this,e,ui);}}).find('.pc-pe-remove').mousedown(function(e){self._remove_onclick(this,e);});};zfp_PackageEditor.prototype._createDragHelper=function(node,
e,grid){var ids=$.grep(node.className.split(' '),function(c){return c.indexOf('pc-pe-p')==0;});var photoId=parseInt(ids[0].substr(7),10);var indices=grid.getSelectedIndices();
var photo=this._photos[photoId];var method=zf_ProcessingMethod.StandardMediumThumbnail;var helper=document.createElement('DIV');helper.className='pc-pe-helper '+grid.$().attr('className');
helper.innerHTML=zf_PhotoView.createHtml(this.id+'-draggable',null,['pg-selected','pc-pe-p'+photoId,'pc-border1'],this._plugins,{data:photo,method:method,image:photo},
photo,method,true);$(helper).removeClass('pvp-t-method-0').addClass('pvp-method-9');if(indices.length>=2){$('.pv-outer',helper).prepend('<div class="pc-pe-dragpad pc-bgcolor9 pc-border10"></div>');
$('.pv-inner',helper).append('<span class="pc-pe-stack pc-color1 pc-bgcolor1">'+zf_stdFormatString('{0} photos',indices.length)+'</span>');$(helper).addClass('pc-pe-helper-s');
}if(indices.length>=3){$('.pv-outer',helper).prepend('<div class="pc-pe-dragpad2 pc-bgcolor9 pc-border10"></div>');}return helper;};zfp_PackageEditor.prototype._fixPhotoIndexing=function(items){$.each(items,
function(ix,item){var productMeta=item.extra.product.meta();if(!productMeta.isSingleImage&&!productMeta.isTemplated){if(productMeta.images==null)$.each(item.photos,
function(i,p){p.index=i;});else{for(id in item.images){var photos=$.grep(item.photos,function(p){return p.imageId==id;});$.each(photos,function(i,p){p.index=i;});
}}}});};zfp_PackageEditor.prototype._page_onresize=function(e,cx,cy){this._size={cx:cx,cy:cy};var header=this.$('.pc-pe-header'),footer=this.$('.pc-pe-footer'),left=this.$('.pc-pe-left'),
right=this.$('.pc-pe-right'),tabbody=left.find('.pc-pe-tabbody:visible');var cyHeader=header.outerHeight()||75,cyFooter=footer.outerHeight()||61;var cxLeft=395,cxRight=cx-(left.outerWidth()||cxLeft),
cyLeft=cy-cyHeader,cyRight=cy-cyHeader-cyFooter;var withInfo=this.$().width(cx).height(cy-cyHeader-cyFooter).hasClass('pc-pe-withinfo');if(withInfo){cxRight-=298;
}left.height(cyLeft);right.width(cxRight).height(cyRight);var svHeight=cyLeft-(left.find('.pc-pe-tabheader').outerHeight()||42)-((tabbody.innerHeight()||0)-(tabbody.height()||0));
svHeight-=30;left.find('.sv').height(svHeight);right.find('.sv').width(cxRight).height(cyRight);if(tabbody.length>0){this._recalcLayout(tabbody.innerWidth()||(cxLeft-20));
}this._rightView.update();if(withInfo){this._productInfo.setHeight(cyRight-10);this._productInfo.update();}};zfp_PackageEditor.prototype._page_onhide=function(e){$.each(this._grids,
function(ix,g){g.$('.pv').draggable('destroy');});$('.pc-pe-slot',this._rightView.getContentNode()).droppable('destroy');};zfp_PackageEditor.prototype._grid_onselchange=function(grid){this._activeGrid=grid;
if(grid.getSelectedIndices().length>0){for(var i=0;i<this._grids.length;i++){if(grid!=this._grids[i])this._grids[i].deselectAll();}}};zfp_PackageEditor.prototype._section_onclick=function(e){if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();var header=$(e.currentTarget);var section=header.closest('.pc-pe-photos');var self=this;var grid;function update(){if(grid!=null)self._recalcLayout(null,
grid);$.each(self._leftScrolls,function(is,s){s.update(true);s.ensureVisible(header.position().top,header.height());s.update();});}if(section.hasClass('pc-pe-photos-e')){section.find('.pc-pe-photos-b:first').slideUp(300,
function(){section.removeClass('pc-pe-photos-e').addClass('pc-pe-photos-c');update();});}else{grid=zf_Control.find(section.find('.pg:first')[0].id);section.find('.pc-pe-photos-b:first').slideDown(300,
update).end().removeClass('pc-pe-photos-c').addClass('pc-pe-photos-e');}};zfp_PackageEditor.prototype._add_onclick=function(){var frame=this._frame;var items=[];for(var id in this._items)items.push(this._items[id]);
this._fixPhotoIndexing(items);if(this._productMeta instanceof zf_VendorMeta.Product)frame.addItems([this._item],this._productMeta,this,this._photos);else frame.addPackages(this._parts,
this._productMeta,this,this._photos);};zfp_PackageEditor.prototype._draggable_ondrag=function(node,e,ui,grid){var scrollView=this.$('.pc-pe-right:first .sv:first');var viewOffset=scrollView.offset();
var view=new zf_Rect(viewOffset.left,viewOffset.top,scrollView.width(),scrollView.height());var scrollUp=false;var scrollDown=false;var x=e.pageX;var y=e.pageY;if(x>view.left&&x<=view.left+view.width){if(y<view.top+10)scrollUp=true;
else if(y>view.top+view.height-10)scrollDown=true;}if(!scrollUp&&!scrollDown){if(this._scrollTimeout!=null)clearTimeout(this._scrollTimeout);if(this._scrollInterval!=null)clearInterval(this._scrollInterval);
this._scrollTimeout=null;this._scrollInterval=null;return;}var self=this;var draggable=$(node).data('draggable');var scrollIt=function(){if(scrollUp)self._rightView.lineUp();
else if(scrollDown)self._rightView.lineDown();$.ui.ddmanager.prepareOffsets(draggable,e);};if(this._scrollTimeout==null){this._scrollTimeout=setTimeout(function(){scrollIt();
self._scrollInterval=setInterval(scrollIt,300);},450);}};zfp_PackageEditor.prototype._draggable_onstop=function(node,e,ui,grid){if(this._scrollTimeout!=null)clearTimeout(this._scrollTimeout);
if(this._scrollInterval!=null)clearInterval(this._scrollInterval);this._scrollTimeout=null;this._scrollInterval=null;grid.$('.pv').removeClass('pv-ihover pv-ohover');
};zfp_PackageEditor.prototype._droppable_onactivate=function(node,e,ui){node=$(node);var grid=this._activeGrid;grid.lockSelection(true);var item=this._items[node.attr('data-item')];
var imageId=node.attr('data-image');var imageIndex=parseInt(node.attr('data-index'),10);if(imageId=='')imageId=null;var productMeta=item.extra.product.meta();var imageMeta=productMeta;
if(imageId!=null)imageMeta=productMeta.images[imageId];var product=this._product;var priceKey=(this._parts!=null)?this._parts[0].priceKey:this._item.priceKey;var imagesSelected=0;
var videosSelected=0;var hasGoodPhotos=false;var slotST=imageMeta.sourceType;var indices=grid.getSelectedIndices();for(var k=0;k<indices.length;k++){var photo=grid.getItem(indices[k]).photo;
imagesSelected+=photo.video?0:1;videosSelected+=photo.video?1:0;if(photo.video!=(imageMeta.sourceType==zf_SourceType.Video))continue;if(!priceKey.defaultList||photo.owner.id!=zf_userId){var key=new zf_PriceKey(photo);
if(product.pricings[key.pricingKey]==true)hasGoodPhotos=true;}if(zfp_Configurator.checkResolution(imageMeta,photo))hasGoodPhotos=true;}var photosST=videosSelected>0?zf_SourceType.Video:zf_SourceType.Image;
var message;if(imagesSelected>0&&videosSelected>0){message=slotST==zf_SourceType.Video?'Please select only videos':'Please select only photos';}else if((photosST&slotST)!=photosST){message=slotST==zf_SourceType.Video?'Please select only videos':'Please select only photos';
}if(!message&&hasGoodPhotos)return;if(message==null){if(videosSelected>0){var quality=zf_VideoQuality.getProcessingMethod(imageMeta.videoQuality);message=zf_stdFormatString('Minimum video quality required: {0}',
quality.format);}else{if(imageMeta.sizeType==zf_SizeType.Area){var area=imageMeta.sizeArea/1000000;message=zf_stdFormatString('Minimum resolution required: {0} Megapixels',
Math.round(area*100)/100);}else{message=zf_stdFormatString('Minimum resolution required: {0} x {1}',imageMeta.minWidth,imageMeta.minHeight);}}}$(node).addClass('pc-pe-nodrop').find('.pc-pe-target').addClass('pc-bgcolor1 pc-color8').removeClass('pc-bgcolor11 pc-color4').find('EM').text(message);
};zfp_PackageEditor.prototype._droppable_ondeactivate=function(node,e,ui){node=$(node);var item=this._items[node.attr('data-item')];var imageId=node.attr('data-image');if(imageId=='')imageId=null;
var productMeta=item.extra.product.meta();var imageMeta=productMeta;if(imageId!=null)imageMeta=productMeta.images[imageId];var dragPrompt=imageMeta.sourceTypeIs(zf_SourceType.Video)?'Drag Video Here':'Drag Photo Here';
node.removeClass('pc-pe-nodrop').find('.pc-pe-target').addClass('pc-bgcolor11 pc-color4').removeClass('pc-bgcolor1 pc-color8').find('EM').text(dragPrompt);this._activeGrid.lockSelection(false);
};zfp_PackageEditor.prototype._droppable_onover=function(node,e,ui){node=$(node);if(node.hasClass('pc-pe-nodrop'))return;node.addClass('pc-pe-dragover');};zfp_PackageEditor.prototype._droppable_onout=function(node,
e,ui){node=$(node);if(node.hasClass('pc-pe-nodrop'))return;node.removeClass('pc-pe-dragover');};zfp_PackageEditor.prototype._droppable_ondrop=function(node,e,ui){var firstNode=node=$(node);
if(node.hasClass('pc-pe-nodrop'))return;node.removeClass('pc-pe-dragover');var product=this._product;var priceKey=(this._parts!=null)?this._parts[0].priceKey:this._item.priceKey;
var indices=this._activeGrid.getSelectedIndices();for(var k=0;k<indices.length;k++){var photo=this._activeGrid.getItem(indices[k]).photo;var item=this._items[node.attr('data-item')];
var imageId=node.attr('data-image');var imageIndex=parseInt(node.attr('data-index'),10);if(imageId=='')imageId=null;var productMeta=item.extra.product.meta();var imageMeta=productMeta;
if(imageId!=null)imageMeta=productMeta.images[imageId];if(!priceKey.defaultList||photo.owner.id!=zf_userId){var key=new zf_PriceKey(photo);if(product.pricings[key.pricingKey]==false){if(!zfp_Configurator.checkResolution(imageMeta,
photo))continue;}}else{if(!zfp_Configurator.checkResolution(imageMeta,photo))continue;}var photoIndex=null;for(var i=0;i<item.photos.length;i++){var p=item.photos[i];
if(p.imageId==imageId&&p.index==imageIndex){photoIndex=i;break;}}var protoPhoto={id:photo.id,imageId:imageId,index:imageIndex,width:photo.width,height:photo.height,
video:photo.video};if(photoIndex!=null)item.photos[photoIndex]=protoPhoto;else item.photos.push(protoPhoto);node.addClass('pc-pe-dragwait');if(!(node=node.next()).hasClass('pc-pe-slot')){if(++imageIndex==imageMeta.maxImageCount)break;
var html=this._createSlotHtml([],item,imageMeta,imageIndex).join('');node=node.before(html).prev();}}this._initDrop();var self=this;var oncomplete=function(items,
index,node){var item=self._items[node.attr('data-item')];var imageId=node.attr('data-image');var imageIndex=parseInt(node.attr('data-index'),10);if(imageId=='')imageId=null;
var localPhoto=item.getPhoto(imageId,imageIndex);var remotePhoto=null;var remoteItem=$.lookup(items,function(i){return i.id==item.id;});if(remoteItem!=null)remotePhoto=remoteItem.getPhoto(imageId,
imageIndex);if(remotePhoto!=null)localPhoto.cropping=remotePhoto.cropping;else localPhoto.cropping=new zf_Rect(0,0,1,1);node.removeClass('pc-pe-dragwait pc-pe-slot-e').find('.pv-inner').replaceWith(self._addCroppedPhoto([],
localPhoto).join(''));if(++index==indices.length)return;if((node=node.next('.pc-pe-slot')).length==0)return;setTimeout(function(){oncomplete(items,index,node);},
20);};if(this._item!=null){zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx','CompleteCartItems',[[item.clean()],this._frame.cart.currency.code],function(result,
error){if(error!=null){oncomplete([],0,firstNode);return;}oncomplete(result,0,firstNode);});}else{zf_stdServerRequestEx('POST','/zf/core/printing/printing.asmx',
'CompleteCartPackage',[zf_ProtoPackage.clean(this._parts),this._frame.cart.currency.code],function(result,error){if(error!=null){oncomplete([],0,firstNode);return;
}var part=$.lookup(result,function(p){return p.partId==item.packagePartId;});if(part!=null)oncomplete(part.items,0,firstNode);else oncomplete([],0,firstNode);});
}this._setButtons();this._rightView.update();};zfp_PackageEditor.prototype._remove_onclick=function(node,e){if(!zf_stdIsLeftButton(e))return;node=$(node).closest('.pc-pe-slot');var item=this._items[node.attr('data-item')];
var imageId=node.attr('data-image');var imageIndex=parseInt(node.attr('data-index'),10);if(imageId=='')imageId=null;var productMeta=item.extra.product.meta();var imageMeta=productMeta;
if(imageId!=null)imageMeta=productMeta.images[imageId];for(var i=0;i<item.photos.length;i++){var p=item.photos[i];if(p.imageId==imageId&&p.index==imageIndex){item.photos.splice(i,
1);break;}}var photos=$.grep(item.photos,function(p){return p.imageId==imageId;});$.each(photos,function(i,p){p.index=i;});var count=photos.length+1;for(var end=node.next();
end.hasClass('pc-pe-slot');end=end.next()){if(end.attr('data-item')==item.id)end.attr('data-index',imageIndex++);}if(count<=imageMeta.minImageCount||count==imageMeta.maxImageCount){var html=this._createSlotHtml([],
item,imageMeta,imageIndex).join('');end.before(html);this._initDrop();}node.remove();this._setButtons();this._rightView.update();};zfp_PackageEditor.prototype._removeall_onclick=function(node,
e,items,imageMeta){if(!zf_stdIsLeftButton(e))return;var group=$(node).closest('.pc-pe-group');if(imageMeta!=null){var item=items[0];var imageId=(imageMeta instanceof zf_VendorMeta.Product)?null:imageMeta.id;
for(var i=item.photos.length-1;i>=0;i--){var p=item.photos[i];if(p.imageId==imageId)item.photos.splice(i,1);}var index=0;for(var slot=group.next();slot.hasClass('pc-pe-slot');
){var s=slot;slot=slot.next();if(index<imageMeta.minImageCount)s.addClass('pc-pe-slot-e');else s.remove();++index;}}else{$.each(items,function(i,item){item.photos=[];
});for(slot=group.next();slot.hasClass('pc-pe-slot');slot=slot.next())slot.addClass('pc-pe-slot-e');}this._setButtons();this._rightView.update();};zfp_PackageEditor.GalleryLoader=function(userId,
galleryId,sourceTypes){this._userId=userId;this._galleryId=galleryId;this._sourceTypes=sourceTypes;this._photos=[];this.length=0;};zfp_PackageEditor.GalleryLoader.prototype.loadAll=function(onload){var self=this;
zf_stdServerRequestEx('GET','/zf/core/printing/printing.asmx','GetGallery',[this._userId,this._galleryId,this._sourceTypes],function(result,error){if(error!=null){self._photos=[];
}else{self._photos=result;self.length=result.length;}onload();});};zfp_PackageEditor.GalleryLoader.prototype.get=function(index){return this._photos[index];};zfp_PackageEditor.GalleryLoader.prototype.getAll=function(){return this._photos;
};function zfp_AddConfirmation(id){;zf_Control.prototype.constructor.call(this,id);}zfp_AddConfirmation.inherits(zf_Control);zfp_AddConfirmation.prototype.init=function(frame){;this._frame=frame;var self=this;
this.$().bind('resizePage',this.closure(this._page_onresize));this.$('.pc-ac-return A').bind('fastClick',function(){frame.hide();});this.$('A.pc-ac-cart').bind('click',
function(){frame.viewCart();});this.$('.pc-ac-continue A').bind('fastClick',function(){frame.options.newProduct=true;frame.browse(self);});this.$('.pc-ac-checkout A').bind('fastClick',
function(){frame.viewCart();});};zfp_AddConfirmation.prototype.initUI=function(items,cart,productMeta,photos){;;;var itemCount=items.length;if(productMeta instanceof zf_VendorMeta.Package){var map={};
$.each(items,function(ix,part){map[part.id-part.partId]=true;});itemCount=0;for(var id in map)itemCount++;}var message;if(!productMeta.isSingleImage){message='{0} has been added to the cart';
}else if(itemCount>1){message='{1} selected items have been added to the cart<br/> as {0}';}else{message='The selected item has been added to the cart<br/> as {0}';
}message=zf_stdFormatString(message,productMeta.longName,itemCount);this.$('.pc-ac-main:first H5:first').html('<span class="pc-ac-confirm"></span>'+message);var configLink=this.$('.pc-ac-configure A');
configLink.html(zf_stdFormatString('Preview and Configure {0}',productMeta.name));this.$('H6:first SPAN:first').text(cart.currency.pluralName);var html=[];for(var i=0;
i<cart.categories.length;i++){var c=cart.categories[i];html.push('<div class="pc-ac-line">','<div class="pc-ac-name">',zf_stdHtmlEncode(c.name),'</div>','<div class="pc-ac-qty">',
c.count,'</div>','<div class="pc-ac-price">',zf_stdFormatMoney(c.price),'</div>','</div>');}this.$('.pc-ac-summary:first').html(html.join(""));this.$('.pc-ac-total:first SPAN').text(zf_stdFormatMoney(cart.productPrice,
cart.currency));var isVideoProduct;if(productMeta instanceof zf_VendorMeta.Package){var parts=items;items=[];$.each(parts,function(i,p){items=items.concat(p.items);
});var sourceTypes=0;$.each(parts,function(ix,item){sourceTypes|=item.sourceType;});isVideoProduct=sourceTypes==zf_SourceType.Video;}else{isVideoProduct=productMeta.sourceTypeIs(zf_SourceType.Video);
}var incomplete=!productMeta.isSingleImage&&this._checkIncompleteItems(items);this.$('.pc-ac-incomplete:first').text((productMeta instanceof zf_VendorMeta.Package)?(isVideoProduct?'The package is incomplete – you need to add more videos to the package to purchase it':'The package is incomplete – you need to add more photos to the package to purchase it'):(isVideoProduct?'The product is incomplete – you need to add more videos to the product to purchase it':'The product is incomplete – you need to add more photos to the product to purchase it')).showIf(incomplete);
this.$('.pc-ac-return').showIf(incomplete);this.$('.pc-ac-continue, .pc-ac-checkout').showIf(!incomplete);items=$.grep(items,function(item){return item.photos.length>0;
});var self=this;this.$('.pc-ac-configure:first').showIf(items.length>0).find('A').unbind('fastClick').bind('fastClick',function(){var p=$.extend({},photos);self._frame.configure(items,
productMeta,self,p);});var groupid=productMeta.groupId||'unknown',itemid=productMeta.id||'unknown',vendorid='unknown';if(items[0]&&items[0].vendorId){vendorid=items[0].vendorId;
}this._frame.trackPageView('/addconfirmation?group='+groupid+'&id='+itemid+'&vendorid='+vendorid);};zfp_AddConfirmation.prototype._checkIncompleteItems=function(items){var filtered=$.grep(items,
function(i){return i.photos.length>0;});if(filtered.length<items.length)return true;for(var i=0;i<filtered.length;i++){var item=filtered[i];var product=zf_VendorMeta.cached(item.vendorId).products[item.productId];
if(product.isTemplated){var template=$.lookup(this._frame.pricing.templates,function(t){return t.id==item.settings['selected-template'];});if(item.photos.length<template.getPhotoCount(item.settings['selected-orientation'],
item.settings['page-mapping']))return true;}else if(product.images==null){if(item.photos.length<product.minImageCount)return true;}else{for(var imageId in product.images){var count=0;
$.each(item.photos,function(i,p){count+=(p.imageId==imageId?1:0);});if(count<product.images[imageId].minImageCount)return true;}}}return false;};zfp_AddConfirmation.prototype._page_onresize=function(e,
cx,cy){this.$().width(cx).height(cy);this.$('.pc-ac-main:first').height(cy-88);};function zfp_SimpleCropper(id){;zf_Control.prototype.constructor.call(this,id);this._nextKey=0;
this.type=0;}zfp_SimpleCropper.inherits(zf_Control);zfp_SimpleCropper.prototype.init=function(frame){;this._frame=frame;var self=this;this._toolbar=new zf_Toolbar(this.id+'_toolbar');this._toolbar.init(this.$('.pc-cr-toolbar'),
[new zf_ToolbarButton('action-centered',{groupclass:'cropper',text:'Center',corners:'left',events:{fastClick:{type:'fastClick',handler:this.closure(this._auto_onclick)}}}),
new zf_ToolbarButton('action-fit',{groupclass:'cropper',text:'Fit',events:{fastClick:{type:'fastClick',handler:this.closure(this._fit_onclick)}}}),new zf_ToolbarButton('action-color',
{groupclass:'color-conversion',text:'Color',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-black-white',
{groupclass:'color-conversion',text:'Black & White',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-sepia',
{groupclass:'color-conversion',text:'Sepia',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-frame-cropper',
{groupclass:'switch',text:'View Frame',type:'image-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._switchcroppers_onclick)}}}),new zf_ToolbarButton('action-reset',
{groupclass:'reset',text:'Reset',corners:'right',events:{fastClick:{type:'fastClick',handler:this.closure(this._reset_onclick)}}}),new zf_ToolbarButton('action-done-cropping',
{groupclass:'done',text:'Done Cropping',corners:'right',type:'image-text-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._switchcroppers_onclick)}}})]);
var crop=this.$dom('crop');crop.hover(function(){$(this).addClass('pc-cr-hover');},function(){$(this).removeClass('pc-cr-hover');}).mousedown(this.closure(this._handle_onmousedown,
'xx')).bind('touchstart',this.closure(this._handle_onmousedown,'xx'));crop.find('.pc-cr-handle-nw:first').mousedown(this.closure(this._handle_onmousedown,'nw')).bind('touchstart',
this.closure(this._handle_onmousedown,'nw'));crop.find('.pc-cr-handle-ne:first').mousedown(this.closure(this._handle_onmousedown,'ne')).bind('touchstart',this.closure(this._handle_onmousedown,
'ne'));crop.find('.pc-cr-handle-sw:first').mousedown(this.closure(this._handle_onmousedown,'sw')).bind('touchstart',this.closure(this._handle_onmousedown,'sw'));
crop.find('.pc-cr-handle-se:first').mousedown(this.closure(this._handle_onmousedown,'se')).bind('touchstart',this.closure(this._handle_onmousedown,'se'));crop.find('.pc-cr-rotate:first').mousedown(this.closure(this._rotate_onclick));
var holder=this.$dom('holder');holder.find('.pc-cr-balloon-c:first').mousedown(this.closure(this._balloon_close_onmousedown));holder.find('.pc-cr-balloon-x:first SPAN:first').mousedown(this.closure(this._balloon_nomore_onmousedown));
var infotext=this.$('.pc-cr-info-a');this.$('*').mousedown(function(){if(infotext.is(':visible')){infotext.fadeOut(1000);}});this._mousemove=this.eventHandler(this._handle_onmousemove);
this._mouseup=this.eventHandler(this._handle_onmouseup);};zfp_SimpleCropper.prototype.initUI=function(imageMeta,photos,customerPhotos,data,photoMap,colorConversion,initcallback,eventcallbacks){;
;;var self=this,photo=photos[0];if(typeof data.photoIndex==='number'){photo=$.first(photos,function(p){return p.index===data.photoIndex;}).value;}this._photo=photo!=null?photoMap[photo.id]:null;
if(this._photo==null){photo=null;}this._protoPhoto=photo;this._customerPhoto=customerPhotos!=null?customerPhotos[0]:null;this._cropping=photo!=null?photo.cropping:null;
this._imageMeta=imageMeta;this._loader=null;this._originalCropping=this._cropping;this._originalSetting=data.cropping;this._cropVerified=false;this._originalColorConversion=data.settings['color-conversion'];
this._isReset=false;this._eventCallbacks=eventcallbacks;if(photo!=null){this.show();this.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();var info=this.$('.pc-cr-info-a:first');
if(this.isLarge){info=this.$('.pc-cr-info-b:first');}info.stop(true,true);setTimeout(function(){self.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();info.not(':animated').fadeIn(1000,
function(){if(info.hasClass('pc-cr-info-a')){setTimeout(function(){if(info.is(':visible')){info.fadeOut(1000);}},10000);}});},500);this.$('.pc-cr-wmark:first').showIf(this._photo.watermarkId!=0);
this._secondaryInfo=false;this._minReached=false;var showVideoInfo=this._photo!=null&&this._photo.video;this.$('.pv-v').toggle(showVideoInfo);if(showVideoInfo)this.$('.pv-v-d').text(zf_stdFormatDuration(this._photo.duration,
true));var vendorMeta=zf_VendorMeta.cached(data.vendorId);if(typeof colorConversion==='object'&&typeof this._originalColorConversion!='undefined'){var buttons=this._toolbar.getButtons();
for(var button in buttons){if(buttons[button].getSetting('groupclass')==='color-conversion'){var action=buttons[button].id.replace(/^action-/,'');if(typeof colorConversion.values[action]==='object'){this._toolbar.showButton(buttons[button].id);
}else{this._toolbar.hideButton(buttons[button].id);}}}}else{this._toolbar.hideButtonGroup('color-conversion');}if(data.croppingReadOnly){this._toolbar.hideButtonGroup('cropper');
}else{this._toolbar.showButtonGroup('cropper');}var frameSvc='';if(typeof data.services!='undefined'&&typeof data.services['framing-and-mounting']!='undefined'){frameSvc=data.services['framing-and-mounting'];
}else if(typeof data.services!='undefined'&&typeof data.services['frame-materials']!='undefined'){frameSvc=data.services['frame-materials'];}if(typeof data.services!='undefined'&&typeof vendorMeta.services!='undefined'&&typeof vendorMeta.services[frameSvc]!='undefined'&&typeof vendorMeta.services[frameSvc].data["editor"]!='undefined'&&!imageMeta.isTemplated){this._toolbar.showButton('action-frame-cropper');
}else if(imageMeta.isTemplated){this._toolbar.hideButton('action-frame-cropper');this._toolbar.showButton('action-done-cropping');}else{this._toolbar.hideButton('action-frame-cropper');
this._toolbar.hideButton('action-done-cropping');}if(data.readOnly){this._toolbar.hide();}else{this._toolbar.format();this._toolbar.show();}}else{this.hide();this._toolbar.hide();
var noItemText=imageMeta.sourceTypeIs(zf_SourceType.Video)?'No video selected':'No photo selected';var noItemDetailText=imageMeta.sourceTypeIs(zf_SourceType.Video)?'To select a video, click <a href=\x22#\x22>Save and Close</a>, return to the gallery, and add more videos to {0}':'To select a photo, click <a href=\x22#\x22>Save and Close</a>, return to the gallery, and add more photos to {0}';
this.$('.pc-cr-empty:first').html(['<div>',noItemText,'</div>','<p class="pc-font5">',zf_stdFormatString(noItemDetailText,zf_stdHtmlEncode(data.productName)),'</p>'].join(''));
this.$('.pc-cr-empty:first A').click(function(){self.onclose();return false;});}if(data.error!=null){this.hide();this._toolbar.hide();this.$('.pc-cr-empty:first').text(data.error);
}this.$().toggleClass('pc-cropper-ro',(photo==null||data.readOnly===true||data.croppingReadOnly===true)).toggleClass('pc-cropper-e',photo==null||data.error!=null).toggleClass('pc-cropper-p',
this._customerPhoto!=null);if(photo!=null){this.update(data,initcallback);}else if(typeof initcallback==='function'){initcallback();}};zfp_SimpleCropper.prototype.update=function(data,
callback){this._data=data;if(this._photo==null){return;}var photo={cx:this._photo.width,cy:this._photo.height};var meta=this._imageMeta;this._product={cx:meta.sizeX,
cy:meta.sizeY};this._wrap={cx:meta.wrapX,cy:meta.wrapY};this._spill={cx:meta.spillX,cy:meta.spillY};this._minSize={cx:meta.minWidth,cy:meta.minHeight};if(this._imageMeta.isTemplated&&this._data.selectedElement){this._wrap={cx:0,
cy:0};this._spill={cx:0,cy:0};this._product={cx:this._data.selectedElement.width,cy:this._data.selectedElement.height};this._minSize={cx:this._data.selectedElement.minimumResolution.x,
cy:this._data.selectedElement.minimumResolution.y};}else if(meta.canRotate&&(this._product.cx<this._product.cy)!=(photo.cx<photo.cy)){this._product={cx:this._product.cy,
cy:this._product.cx};this._wrap={cx:this._wrap.cy,cy:this._wrap.cx};this._spill={cx:this._spill.cy,cy:this._spill.cx};this._minSize={cx:this._minSize.cy,cy:this._minSize.cx};
}if(!this._cropVerified){if(data.cropping&&data.cropping!='cropping-manual'){var rect=this._calc_cropping_rect(data.cropping);if(data.settings['wrap-treatment']!='original'&&!this._imageMeta.isTemplated){rect=this._addWrap(rect);
}if(this._cropping!=rect){this._cropping=rect;}}this._cropVerified=true;}var vendorMeta=zf_VendorMeta.cached(this._data.vendorId);if(!this._imageMeta.isTemplated){for(var setId in this._data.services){var sid=this._data.services[setId];
;var serviceMeta=vendorMeta.services[sid];;var ov=serviceMeta.data["frame-overlap"];if(ov!=null){ov=parseFloat(ov);this._spill.cx+=ov;this._spill.cy+=ov;}}ov=vendorMeta.products[this._data.productId].data["frame-overlap"];
if(ov!=null){ov=parseFloat(ov);this._spill.cx+=ov;this._spill.cy+=ov;}var cropped={cx:photo.cx*this._cropping.width,cy:photo.cy*this._cropping.height};this._flip=(cropped.cx<cropped.cy)!=(this._product.cx<this._product.cy);
}if((this._wrap.cx>0||this._wrap.cy>0)&&data.settings['wrap-treatment']=='original'){this.$('.pc-cr-info-b').html('Everything inside the red line will be printed.<br/>The area outside of the orange line will be wrapped.').removeClass('pc-cr-info-bb');
this.$dom('crop').find('.pc-cr-grid').appendTo(this.$('.pc-cr-spill:first'));}else if(this._spill.cx>0||this._spill.cy>0){this.$('.pc-cr-info-b').html('<span class=\x22icon\x22></span> Important parts of the image must be inside the inner <span class=\x22red\x22>Red</span> line').addClass('pc-cr-info-bb');
this.$dom('crop').find('.pc-cr-grid').appendTo(this.$dom('crop'));}else{this.$('.pc-cr-info-b').html('Everything inside the orange line will be printed.').removeClass('pc-cr-info-bb');
this.$dom('crop').find('.pc-cr-grid').appendTo(this.$('.pc-cr-spill:first'));}if(typeof this._size==='object'){this.resize(this._size.cx,this._size.cy,callback);
}var cropping=data.cropping;if(this._isReset){cropping=this._originalSetting;}if(typeof cropping!='string'){cropping='cropping-manual';}cropping=cropping.replace('cropping-',
'action-').replace(/-(auto|unconfirmed)/i,'-centered');this._toolbar.selectButton(cropping,'cropper');if(typeof data.settings['color-conversion']==='string'){this._toolbar.selectButton('action-'+data.settings['color-conversion'],
'color-conversion');}this._isReset=false;};zfp_SimpleCropper.prototype.updateWrap=function(data){this._data=data;if(data.cropping==='cropping-fit'){this._fit_onclick();return;}else if(data.cropping==='cropping-auto'||data.cropping==='cropping-unconfirmed'){this._auto_onclick();
return;}var r=this._product.cx>this._product.cy?this._product.cy/(this._product.cy+2*this._wrap.cy):this._product.cx/(this._product.cx+2*this._wrap.cx);var width=this._cropping.width;
var height=this._cropping.height;var treatment=data.settings['wrap-treatment'];if(treatment==="original"){width*=r;height*=r;var minSize={cx:this._minSize.cx*(1+2*this._wrap.cx/this._product.cx),
cy:this._minSize.cy*(1+2*this._wrap.cy/this._product.cy)};if(this._photo.width*width<minSize.cx||this._photo.height*height<minSize.cy){width=minSize.cx/this._photo.width;
height=minSize.cy/this._photo.height;}}else{width/=r;height/=r;}this._cropping.left+=(this._cropping.width-width)/2;this._cropping.top+=(this._cropping.height-height)/2;
this._cropping.width=width;this._cropping.height=height;this._protoPhoto.cropping=this._cropping;};zfp_SimpleCropper.prototype.resize=function(cx,cy,callback){this._size={cx:cx,cy:cy};
this.$().width(cx).height(cy);if(this._photo==null){return;}this._arena={cx:cx-(this.isLarge?0:72),cy:cy-40-(this._data.readOnly?0:(this.isLarge?52:110))};this.$('.pc-cr-arena:first').width(this._arena.cx).height(this._arena.cy);
var avail={cx:this._arena.cx-32,cy:this._arena.cy-56};var product=avail;if(this._product.cx>0&&this._product.cy>0){product={cx:this._product.cx+2*this._wrap.cx,cy:this._product.cy+2*this._wrap.cy};
var scale=((avail.cx/avail.cy)<(product.cx/product.cy))?avail.cx/product.cx:avail.cy/product.cy;var croppingwidth=(this._cropping.width*product.cx)+Math.abs(this._cropping.left*product.cx),
croppingheight=(this._cropping.height*product.cy)+Math.abs(this._cropping.top*product.cy);if(croppingwidth>this._product.cx||croppingheight>this._product.cy){scale=((avail.cx/avail.cy)<(croppingwidth/croppingheight))?avail.cx/croppingwidth:avail.cy/croppingheight;
}product={cx:Math.floor(this._product.cx*scale),cy:Math.floor(this._product.cy*scale)};}var options=[{method:zf_ProcessingMethod.StandardSmallSize,mask:0},{method:zf_ProcessingMethod.StandardMediumSize,
mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},{method:zf_ProcessingMethod.StandardExtraLargeSize,
mask:zf_AccessMask.ProtectExtraLarge}];var method;var size;for(var i=0;i<options.length;i++){if(this._photo.owner.id!=zf_userId&&(options[i].mask&this._photo.access.mask)!=0)continue;
method=options[i].method;size=this._photo.getScaledSize(method);if(size.cx>product.cx||size.cy>product.cy)break;};;if(size.cx>product.cx||size.cy>product.cy){scale=Math.max(size.cx/product.cx,
size.cy/product.cy);this._image={cx:Math.floor(size.cx/scale),cy:Math.floor(size.cy/scale)};}else this._image=size;var modifier=this._data.mode;if(this._loader==null||this._loader.getMethod()!=method||this._loader.getModifier()!=modifier){var key=this._asyncKey=++this._nextKey;
this.$().addClass('pc-cr-wait');this._loader=new zf_PhotoLoader(this._photo,method,modifier);this._loader.onload=this.closure(this._photo_onload,key,callback);this._loader.start();
}var rect=this._relativeToArena(0,0,1,1);this._move('.pc-cr-arena:first IMG.pc-cr-photo-b:first',rect);this._move('.pc-cr-arena:first DIV.pc-cr-cover:first',rect);
this._cropRect=this._setCrop(this._removeWrap(this._cropping));this._assertWhiteSpace();};zfp_SimpleCropper.prototype.fadeOut=function(callback){this.$('.pc-cr-arena:first').fadeOut(200,
callback);};zfp_SimpleCropper.prototype.fadeIn=function(callback){this.$('.pc-cr-arena:first').fadeIn(200,callback);};zfp_SimpleCropper.prototype.show=function(callback){this.$('.pc-cr-arena:first').show();
};zfp_SimpleCropper.prototype.hide=function(callback){this.$('.pc-cr-arena:first').hide();};zfp_SimpleCropper.prototype._setCrop=function(crop,animate){;crop=this._relativeToArena(crop);var holder=this.$dom('holder');
var cropper=this.$dom('crop');var wrapTreatment=this._data.settings["wrap-treatment"];var wrap={cx:this._wrap.cx,cy:this._wrap.cy};if(wrapTreatment!=null&&wrapTreatment!="original")wrap={cx:0,
cy:0};else if(wrap.cx>0||wrap.cy>0){wrap={cx:wrap.cx/this._product.cx,cy:wrap.cy/this._product.cy};if(this._flip)wrap={cx:wrap.cy,cy:wrap.cx};wrap={cx:Math.floor(wrap.cx*crop.width),
cy:Math.floor(wrap.cy*crop.height)};}var image=this._relativeToArena(new zf_Rect(0,0,1,1));image.left-=crop.left-wrap.cx;image.top-=crop.top-wrap.cy;var spill={cx:this._spill.cx,
cy:this._spill.cy};if(spill.cx>0||spill.cy>0){spill={cx:spill.cx/this._product.cx,cy:spill.cy/this._product.cy};if(this._flip)spill={cx:spill.cy,cy:spill.cx};spill={cx:Math.floor(spill.cx*crop.width),
cy:Math.floor(spill.cy*crop.height)};}var left=wrap.cx+spill.cx-1;var top=wrap.cy+spill.cy-1;var right=crop.width+wrap.cx-spill.cx+1;var bottom=crop.height+wrap.cy-spill.cy+1;
var width=crop.width+2*wrap.cx;var height=crop.height+2*wrap.cy;var shadow=holder.find('DIV.pc-cr-shadow').showIf(spill.cx>0||spill.cy>0||wrap.cx>0||wrap.cy>0);var self=this;
function finalize(){self._move(shadow.eq(0),0,0,width,top);self._move(shadow.eq(1),0,bottom,width,height-bottom);self._move(shadow.eq(2),0,top,left,bottom-top);self._move(shadow.eq(3),
right,top,width-right,bottom-top);holder.toggleClass('pc-cr-wrap',wrap.cx>0||wrap.cy>0);if(wrap.cy>0){holder.find('.pc-cr-wlabel').height(wrap.cy).css('line-height',
wrap.cy+'px');}self.$dom('crop').find('.pc-cr-rotate').showIf(self._imageMeta.canRotate).toggleClass('pc-cr-rotate-ccw',crop.width<crop.height);}if(typeof animate==='boolean'&&animate===true){holder.fadeOut(100,
function(){var animationTime=200,easing='swing';cropper.animate({left:crop.left,top:crop.top,width:crop.width,height:crop.height},{duration:animationTime,queue:false,
easing:easing,complete:function(){finalize();self._move(holder.find('IMG.pc-cr-photo-f:first'),image);self._move(holder,crop.left-wrap.cx-(wrap.cx>0?1:0),crop.top-wrap.cy-(wrap.cy>0?1:0),
crop.width+2*wrap.cx,crop.height+2*wrap.cy).fadeIn(100,function(){});}}).css('overflow','visible');cropper.find('.pc-cr-border-n:first, .pc-cr-border-s:first').animate({width:crop.width-22},
{duration:animationTime,queue:false,easing:easing});cropper.find('.pc-cr-border-w:first, .pc-cr-border-e:first').animate({height:crop.height-22},{duration:animationTime,
queue:false,easing:easing});if(spill.cx>0||spill.cy>0){cropper.find('DIV.pc-cr-spill:first').animate({left:spill.cx-1,top:spill.cy-1,width:crop.width-2*spill.cx,
height:crop.height-2*spill.cy},{duration:animationTime,queue:false,easing:easing});}else{cropper.find('DIV.pc-cr-spill:first').hide();}});}else{this._move(holder,
crop.left-wrap.cx-(wrap.cx>0?1:0),crop.top-wrap.cy-(wrap.cy>0?1:0),crop.width+2*wrap.cx,crop.height+2*wrap.cy);cropper.find('.pc-cr-border-n:first, .pc-cr-border-s:first').width(crop.width-22);
cropper.find('.pc-cr-border-w:first, .pc-cr-border-e:first').height(crop.height-22);this._move(holder.find('IMG.pc-cr-photo-f:first'),image);this._move(cropper,crop);
if(spill.cx>0||spill.cy>0){this._move(cropper.find('DIV.pc-cr-spill:first'),spill.cx-1,spill.cy-1,crop.width-2*spill.cx,crop.height-2*spill.cy).show();}else{cropper.find('DIV.pc-cr-spill:first').hide();
}finalize();}return crop;};zfp_SimpleCropper.prototype._move=function(elem,left,top,width,height){;if(!(elem instanceof jQuery))elem=this.$(elem);if(arguments.length==2){var rect=left;
left=rect.left;top=rect.top;width=rect.width;height=rect.height;}return elem.css('left',left+'px').css('top',top+'px').width(width).height(height);};zfp_SimpleCropper.prototype._relativeToArena=function(left,
top,width,height){if(arguments.length==1){var rect=left;left=rect.left;top=rect.top;width=rect.width;height=rect.height;}left*=this._image.cx;top*=this._image.cy;
width*=this._image.cx;height*=this._image.cy;return new zf_Rect(Math.floor((this._arena.cx-this._image.cx)/2+left),Math.floor((this._arena.cy-this._image.cy)/2+top),
Math.floor(width),Math.floor(height));};zfp_SimpleCropper.prototype._arenaToRelative=function(left,top,width,height){if(arguments.length==1){var rect=left;left=rect.left;top=rect.top;
width=rect.width;height=rect.height;}left-=Math.floor((this._arena.cx-this._image.cx)/2);top-=Math.floor((this._arena.cy-this._image.cy)/2);return new zf_Rect(left/this._image.cx,
top/this._image.cy,width/this._image.cx,height/this._image.cy);};zfp_SimpleCropper.prototype._removeWrap=function(rect){var wrap={cx:this._wrap.cx,cy:this._wrap.cy};if(wrap.cx>0||wrap.cy>0)wrap={cx:wrap.cx/this._product.cx,
cy:wrap.cy/this._product.cy};if(this._flip)wrap={cx:wrap.cy,cy:wrap.cx};var width=rect.width/(1+2*wrap.cx);var height=rect.height/(1+2*wrap.cy);return new zf_Rect(rect.left+(rect.width-width)/2,
rect.top+(rect.height-height)/2,width,height);};zfp_SimpleCropper.prototype._addWrap=function(rect){var wrap={cx:this._wrap.cx,cy:this._wrap.cy};if(wrap.cx>0||wrap.cy>0)wrap={cx:wrap.cx/this._product.cx,
cy:wrap.cy/this._product.cy};if(this._flip)wrap={cx:wrap.cy,cy:wrap.cx};var width=rect.width*(1+2*wrap.cx);var height=rect.height*(1+2*wrap.cy);return new zf_Rect(rect.left+(rect.width-width)/2,
rect.top+(rect.height-height)/2,width,height);};zfp_SimpleCropper.prototype._getTrackingRect=function(e){;var left=this._cropRect.left;var top=this._cropRect.top;var width=this._cropRect.width;
var height=this._cropRect.height;var right=left+width;var bottom=top+height;;;;;;;var dx=e.pageX-this._anchorX;var dy=e.pageY-this._anchorY;switch(this._track.charAt(0)){case 'n':if(top+dy<8)dy=8-top;
top+=dy;height-=dy;break;case 's':if(bottom+dy>this._arena.cy-8)dy=this._arena.cy-8-bottom;bottom+=dy;height+=dy;break;default:if(top+dy<8)dy=8-top;if(bottom+dy>this._arena.cy-8)dy=this._arena.cy-8-bottom;
top+=dy;bottom+=dy;break;}switch(this._track.charAt(1)){case 'w':if(left+dx<8)dx=8-left;left+=dx;width-=dx;break;case 'e':if(right+dx>this._arena.cx-8)dx=this._arena.cx-8-right;
right+=dx;width+=dx;break;default:if(left+dx<8)dx=8-left;if(right+dx>this._arena.cx-8)dx=this._arena.cx-8-right;left+=dx;right+=dx;break;}var r;var ratio=this._product.cx/this._product.cy;
if(this._flip)ratio=1/ratio;if(this._track!='xx'&&!isNaN(ratio)){r=width/height;if(this._imageMeta.canRotate&&Math.abs(1-r/ratio)>Math.abs(1-r*ratio)){this._flip=!this._flip;
ratio=1/ratio;}if((adjustWidth=r>ratio))width=Math.floor(height*ratio);else height=Math.floor(width/ratio);if(this._track.charAt(0)=='n')top=bottom-height;else bottom=top+height;
if(this._track.charAt(1)=='w')left=right-width;else right=left+width;}var image=this._relativeToArena(0,0,1,1);var snapDelta=(e.ctrlKey||e.metaKey)?0:7;switch(this._track.charAt(0)){case 'n':if(Math.abs(image.top-top)<snapDelta)height=bottom-image.top;
break;case 's':if(Math.abs(image.top+image.height-bottom)<snapDelta)height=image.top+image.height-top;break;default:if(Math.abs(image.top-top)<snapDelta)top=image.top;
else if(Math.abs(image.top+image.height-bottom)<snapDelta)top=image.top+image.height-height;break;}if(!isNaN(ratio)&&r!=null)width=Math.floor(height*ratio);switch(this._track.charAt(1)){case 'w':if(Math.abs(image.left-left)<snapDelta)width=right-image.left;
break;case 'e':if(Math.abs(image.left+image.width-right)<snapDelta)width=image.left+image.width-left;break;default:if(Math.abs(image.left-left)<snapDelta)left=image.left;
else if(Math.abs(image.left+image.width-right)<snapDelta)left=image.left+image.width-width;break;}if(!isNaN(ratio)&&r!=null)height=Math.floor(width/ratio);var minReached=false;
if(this._track!='xx'){var minSize={cx:24,cy:24};if(this._data.enforceResolution){var scale=this._image.cx/this._photo.width;minSize={cx:Math.max(24,Math.ceil(this._minSize.cx*scale)),
cy:Math.max(24,Math.ceil(this._minSize.cy*scale))};if(this._flip)minSize={cx:minSize.cy,cy:minSize.cx};}if(width<minSize.cx){width=minSize.cx;if(!isNaN(ratio))height=Math.ceil(width/ratio);
minReached=true;}if(height<minSize.cy){height=minSize.cy;if(!isNaN(ratio))width=Math.ceil(height*ratio);minReached=true;}}this._showMinReached(minReached);if(this._track.charAt(0)=='n')top=bottom-height;
else bottom=top+height;if(this._track.charAt(1)=='w')left=right-width;else right=left+width;;;;;;;return new zf_Rect(left,top,width,height);};zfp_SimpleCropper.prototype._showMinReached=function(minReached){var self=this;
if(!minReached&&this._minReached){if(this._minReachedTimer!=null){clearTimeout(this._minReachedTimer);this._minReachedTimer=null;}this.$('.pc-cr-info-e').fadeOut(200,
function(){self.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();self.$('.pc-cr-info-b').fadeIn(200);});this._minReached=false;}else if(minReached&&!this._minReached){if(this._minReachedTimer!=null){clearTimeout(this._minReachedTimer);
this._minReachedTimer=null;}this.$('.pc-cr-info-b').fadeOut(200,function(){self.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();self.$('.pc-cr-info-e').fadeIn(200);
});this._minReached=true;this._minReachedTimer=setTimeout(function(){self._minReachedTimer=null;self.$('.pc-cr-info-e').fadeOut(200,function(){self.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();
self.$('.pc-cr-info-b').fadeIn(200);});},3000);}};zfp_SimpleCropper.prototype._assertWhiteSpace=function(){var showBalloon=zf_storage.getItem('core.printing.configurator.whitespace-warning');
if(showBalloon==null||showBalloon!='0'){var rect=this._cropping;var treatment=this._data.settings['wrap-treatment'];if(treatment!="original")rect=this._removeWrap(rect);
var left=rect.left;var right=left+rect.width;var top=rect.top;var bottom=top+rect.height;var balloon=this.$dom('holder').find('.pc-cr-balloon:first');balloon[0].style.cssText='';
if(left<-0.0001){left=Math.round(-left/2*this._image.cx)-2;balloon.removeClass('pc-cr-balloon-n pc-cr-balloon-s pc-cr-balloon-e').addClass('pc-cr-balloon-w').css('left',
left+'px').stop(true,true).fadeIn(100);}else if(right>1.0001){right=Math.round((right-1)/2*this._image.cx)-4;balloon.removeClass('pc-cr-balloon-n pc-cr-balloon-s pc-cr-balloon-w').addClass('pc-cr-balloon-e').css('right',
right+'px').stop(true,true).fadeIn(100);}else if(top<-0.0001){top=Math.round(-top/2*this._image.cy)-4;balloon.removeClass('pc-cr-balloon-s pc-cr-balloon-w pc-cr-balloon-e').addClass('pc-cr-balloon-n').css('top',
top+'px').stop(true,true).fadeIn(100);}else if(bottom>1.0001){bottom=Math.round((bottom-1)/2*this._image.cy)-4;balloon.removeClass('pc-cr-balloon-n pc-cr-balloon-w pc-cr-balloon-e').addClass('pc-cr-balloon-s').css('bottom',
bottom+'px').stop(true,true).fadeIn(100);}}};zfp_SimpleCropper.prototype._photo_onload=function(state,url,key,callback){if(callback)callback();if(key!=this._asyncKey)return;this._asyncKey=null;
this.$('.pc-cr-arena:first IMG.pc-cr-photo-b:first')[0].src=url;this.$('.pc-cr-arena:first IMG.pc-cr-photo-f:first')[0].src=url;this.$().removeClass('pc-cr-wait');
};zfp_SimpleCropper.prototype._auto_onclick=function(node){this._toolbar.selectButton('action-centered','cropper');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks['centered']==='function'){this._eventCallbacks['centered']();
}var rect=this._calc_cropping_rect('centered');this._flip=false;if(this._data.settings['wrap-treatment']!='original'&&!this._imageMeta.isTemplated){this._cropping=this._addWrap(rect);
this._protoPhoto.cropping=this._cropping;this._cropRect=this._setCrop(rect);}else{this._cropping=rect;this._protoPhoto.cropping=this._cropping;this._cropRect=this._setCrop(this._removeWrap(rect));
}this._assertWhiteSpace();if(this.onchange!=null){this.onchange("cropping-auto",rect);}};zfp_SimpleCropper.prototype._fit_onclick=function(){this._toolbar.selectButton('action-fit',
'cropper');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks['fit']==='function'){this._eventCallbacks['fit']();}var rect=this._calc_cropping_rect('fit');
this._flip=false;this._cropping=this._addWrap(rect);this._protoPhoto.cropping=this._cropping;this._cropRect=this._setCrop(rect);this._assertWhiteSpace();if(this.onchange!=null){this.onchange("cropping-fit",
this._cropping);}};zfp_SimpleCropper.prototype._button_onclick=function(element){var action=$(element).attr('class').replace(/^.* action-/,'').replace(/ .*$/,'');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[action]==='function'){this._eventCallbacks[action]();
}};zfp_SimpleCropper.prototype._switchcroppers_onclick=function(){if(typeof this.onswitchclick==='function'){this.onswitchclick(null,this._data.photoIndex);}};zfp_SimpleCropper.prototype._reset_onclick=function(){this._flip=false;
this._data.cropping=this._originalSetting;this._cropping=this._originalCropping;this._protoPhoto.cropping=this._originalCropping;this._isReset=true;if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks['reset']==='function'){this._eventCallbacks['reset']();
}if(this._data.settings['wrap-treatment']!=null&&!this._imageMeta.isTemplated){this.updateWrap(this._data);}this._cropRect=this._setCrop(this._removeWrap(this._cropping));
this._toolbar.selectButton(this._originalSetting.replace('cropping','action').replace('auto','centered'),'cropper');if(typeof this._originalColorConversion==='string'){this._toolbar.selectButton('action-'+this._originalColorConversion,
'color-conversion');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[this._originalColorConversion]==='function'){this._eventCallbacks[this._originalColorConversion]();
}}this._assertWhiteSpace();};zfp_SimpleCropper.prototype._rotate_onclick=function(e){e.stopPropagation();e.preventDefault();var x=this._cropRect.left+this._cropRect.width/2;var y=this._cropRect.top+this._cropRect.height/2;
var width=this._cropRect.height;var height=this._cropRect.width;var ratio=width/height;width=Math.min(width,this._arena.cx-20);height=Math.min(height,this._arena.cy-20);
if(width/ratio>height){width=ratio*height;}else{height=width/ratio;}this._flip=!this._flip;var rect=this._arenaToRelative(Math.round(x-width/2),Math.round(y-height/2),
Math.round(width),Math.round(height));this._cropping=this._addWrap(rect);this._protoPhoto.cropping=this._cropping;this._cropRect=this._setCrop(rect,true);this._toolbar.unselectButton('action-centered');
this._toolbar.unselectButton('action-fit');this._assertWhiteSpace();};zfp_SimpleCropper.prototype._handle_onmousedown=function(e,handle){e.stopPropagation();e.preventDefault();if(!zf_stdIsLeftButton(e))return;
if(this._data.readOnly||this._data.croppingReadOnly){if(this._data.adminView&&(e.ctrlKey||e.metaKey)&&e.shiftKey){this._data.readOnly=false;this._data.croppingReadOnly=false;
this.$().removeClass('pc-cropper-ro');this.resize(this._size.cx,this._size.cy);}else return;}var node=e.currentTarget;if(document.addEventListener){document.addEventListener('mousemove',
this._mousemove,true);document.addEventListener('mouseup',this._mouseup,true);}else if(node.setCapture){$(node).mousemove(this._mousemove).mouseup(this._mouseup);
node.setCapture();}node=null;this.$('.pc-cr-arena:first').mousemove(this.closure(this._handle_onmousemove)).mouseup(this.closure(this._handle_onmouseup)).bind('touchmove',
this.closure(this._handle_onmousemove)).bind('touchend',this.closure(this._handle_onmouseup));this._anchorX=e.pageX;this._anchorY=e.pageY;this._track=handle;this.$('.pc-cr-arena:first').addClass('pc-cr-track pc-cr-track-'+handle);
};zfp_SimpleCropper.prototype._handle_onmouseup=function(e){if(this._track==null)return;e=jQuery.event.fix(e);e.stopPropagation();var node=e.currentTarget;if(document.removeEventListener){document.removeEventListener('mousemove',
this._mousemove,true);document.removeEventListener('mouseup',this._mouseup,true);}else if(node.releaseCapture){node.releaseCapture();$(node).unbind('mousemove mouseup');
}node=null;var rect=this._arenaToRelative(this._getTrackingRect(e));this._cropping=this._addWrap(rect);this._protoPhoto.cropping=this._cropping;this._cropRect=this._setCrop(rect);
if(this.onchange!=null){this.onchange("cropping-manual");}this.$('.pc-cr-arena:first').removeClass('pc-cr-track pc-cr-track-'+this._track);this._assertWhiteSpace();
this._track=null;this._minReached=false;};zfp_SimpleCropper.prototype._handle_onmousemove=function(e){e=jQuery.event.fix(e);e.stopPropagation();if(this._track!=null){this.$dom('holder').find('.pc-cr-balloon:first')[0].style.cssText='';
if(!this._secondaryInfo){var self=this;this.$('.pc-cr-info-a:first').fadeOut(200,function(){self.$('.pc-cr-info span[class^="pc-cr-info-"]').hide();self.$('.pc-cr-info-b:first').fadeIn(200);
});this._secondaryInfo=true;}this._setCrop(this._arenaToRelative(this._getTrackingRect(e)));if(this.onchange!=null){this.onchange('cropping-manual',this._cropping);
}this._toolbar.unselectButton('action-centered');this._toolbar.unselectButton('action-fit');}};zfp_SimpleCropper.prototype._balloon_close_onmousedown=function(e){if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();var balloon=this.$dom('holder').find('.pc-cr-balloon:first');var nomore=balloon.find('.pc-cr-balloon-x:first EM:first').hasClass('pc-cr-balloon-chk');
zf_storage.setItem('core.printing.configurator.whitespace-warning',nomore?'0':'1');balloon.fadeOut(200);};zfp_SimpleCropper.prototype._balloon_nomore_onmousedown=function(e){if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();this.$dom('holder').find('.pc-cr-balloon-x:first EM:first').toggleClass('pc-cr-balloon-chk');var balloon=this.$dom('holder').find('.pc-cr-balloon:first');
zf_storage.setItem('core.printing.configurator.whitespace-warning','0');balloon.fadeOut(200);};zfp_SimpleCropper.prototype._calc_cropping_rect=function(cropping,product,wrap,minsize){if(!product){product=this._product;
}if(!wrap){wrap=this._wrap;}if(!minsize){minsize=this._minSize;}var rect=null,ratio=null;cropping=cropping.replace('cropping-','').replace('action-','');if(cropping==='fit'){if(product.cx>0&&product.cy>0){ratio=(product.cx*this._photo.height)/(product.cy*this._photo.width);
if(ratio>1)rect=new zf_Rect(-(ratio-1)/2,0,ratio,1);else rect=new zf_Rect(0,-(1/ratio-1)/2,1,1/ratio);}else{rect=new zf_Rect(0,0,1,1);}}else if(cropping==='centered'||cropping==='auto'||cropping==='unconfirmed'){var treatment=this._data.settings['wrap-treatment'];
if(product.cx>0&&product.cy>0){product=treatment==='original'?{cx:product.cx+2*wrap.cx,cy:product.cy+2*wrap.cy}:{cx:product.cx,cy:product.cy};ratio=(product.cx*this._photo.height)/(product.cy*this._photo.width);
if(ratio<1){rect=new zf_Rect((1-ratio)/2,0,ratio,1);}else{rect=new zf_Rect(0,(1-1/ratio)/2,1,1/ratio);}if(treatment=='original'&&this._data.enforceResolution){var ms={cx:minsize.cx*(1+2*wrap.cx/product.cx),
cy:minsize.cy*(1+2*wrap.cy/product.cy)};if(this._photo.width*rect.width<ms.cx||this._photo.height*rect.height<ms.cy){rect.width=ms.cx/this._photo.width;rect.height=ms.cy/this._photo.height;
rect.left=(1-rect.width)/2;rect.top=(1-rect.height)/2;}}}else{rect=new zf_Rect(0,0,1,1);}}return rect;};function zfp_TemplateCropper(id,slider){;zf_Control.prototype.constructor.call(this,
id);this._slider=slider;this._nextKey=0;}zfp_TemplateCropper.inherits(zf_Control);zfp_TemplateCropper._templateCache={};zfp_TemplateCropper.prototype.init=function(frame){;this._frame=frame;this._toolbar=new zf_Toolbar(this.id+'_toolbar');
this._toolbar.init(this.$('.pc-tc-toolbar'),[new zf_ToolbarButton('action-centered',{groupclass:'cropper',text:'Center',corners:'left',events:{fastClick:{type:'fastClick',
handler:this.closure(this._auto_onclick)}}}),new zf_ToolbarButton('action-fit',{groupclass:'cropper',text:'Fit',events:{fastClick:{type:'fastClick',handler:this.closure(this._fit_onclick)}}}),
new zf_ToolbarButton('action-color',{groupclass:'color-conversion',text:'Color',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);
}}}}),new zf_ToolbarButton('action-black-white',{groupclass:'color-conversion',text:'Black & White',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);
}}}}),new zf_ToolbarButton('action-sepia',{groupclass:'color-conversion',text:'Sepia',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);
}}}}),new zf_ToolbarButton('action-reset',{groupclass:'reset',text:'Reset',corners:'right',events:{fastClick:{type:'fastClick',handler:this.closure(this._reset_onclick)}}})]);
this._slider.onchange=this.closure(this._slider_onchange);var mouseup=this.closure(this._move_onmouseup);this._mousemove=this.closure(this._photo_onmousemove);this._mouseup=this.closure(this._photo_onmouseup);
this.$('.pc-tc-shield').mousedown(this.closure(this._photo_onmousedown)).bind('touchstart',this.closure(this._photo_onmousedown));this.$('.pc-tc-arena DIV').bind('contextmenu',
zf_stdFalse);var infotext=this.$('.pc-tc-infotext');this.$('*').mousedown(function(){if(infotext.is(':visible')){infotext.fadeOut(1000);}});};zfp_TemplateCropper.prototype.initUI=function(imageMeta,
photos,customerPhotos,data,photoMap,colorConversion,initcallback,eventcallbacks){;;;;var photo=photos[0];this._protoPhoto=photo;this._customerPhoto=customerPhotos!=null?customerPhotos[0]:null;
this._photo=photoMap[photo.id];this._imageMeta=imageMeta;this._loader=null;this._cropRect=photo.cropping;this._originalCropping=this._cropping;this._originalSetting=data.cropping;
this._isReset=false;this._eventCallbacks=eventcallbacks;this._photoSrc=null;this._photoSize=null;this._templateSrc=null;this._templateSize=null;this._viewport=null;
this._viewportX=null;this._viewportY=null;this._photoX=null;this._photoY=null;this._photoZoom=null;this.$('.pc-tc-wmark').showIf(this._photo.watermarkId!=0);this.$().toggleClass('pc-cropper-ro',
data.readOnly).toggleClass('pc-cropper-p',this._customerPhoto!=null);if(!data.readOnly){var infotext=this.$('.pc-tc-infotext');infotext.hide().stop(true,true);setTimeout(function(){infotext.fadeIn(1000,
function(){setTimeout(function(){infotext.fadeOut(2000);},10000);});},1000);}if(typeof colorConversion==='object'&&typeof this._originalColorConversion!='undefined'){var buttons=this._toolbar.getButtons();
for(var button in buttons){if(buttons[button].getSetting('groupclass')==='color-conversion'){var action=buttons[button].id.replace(/^action-/,'');if(typeof colorConversion.values[action]==='object'){this._toolbar.showButton(buttons[button].id);
}else{this._toolbar.hideButton(buttons[button].id);}}}}else{this._toolbar.hideButtonGroup('color-conversion');}this.update(data,initcallback);};zfp_TemplateCropper.prototype.update=function(data,
callback){this._data=data;var vendorMeta=zf_VendorMeta.cached(data.vendorId),editorMeta=null;this._product={cx:this._imageMeta.sizeX,cy:this._imageMeta.sizeY};for(var i=0;
i<this._imageMeta.editors.length;i++){editorMeta=vendorMeta.editors[this._imageMeta.editors[i]];if(editorMeta instanceof zf_VendorMeta.OverlayEditor){this._editorMeta=editorMeta;
break;}}var photo=this._photo,method=photo.pickMethod(10000,10000),size=photo.getScaledSize(method);if(size.cx>size.cy){size.cy=size.cx*photo.height/photo.width;
}else{size.cx=size.cy*photo.width/photo.height;}var extra=this._data.mode;var loader=new zf_PhotoLoader(photo,method,extra);loader.onload=this.closure(this._photo_onload,
size,callback);loader.start();this._loadTemplate(this.closure(this._template_onload));if(this._size!=null){this.resize(this._size.cx,this._size.cy);}var cropping=data.cropping;
if(this._isReset){cropping=this._originalSetting;}if(typeof cropping==='undefined'){cropping='cropping-manual';}cropping=cropping.replace('cropping-','action-').replace(/-(auto|unconfirmed)/i,
'-centered');this._toolbar.selectButton(cropping,'cropper');if(typeof data.settings['color-conversion']==='string'){this._toolbar.selectButton('action-'+data.settings['color-conversion'],
'color-conversion');}this._isReset=false;};zfp_TemplateCropper.prototype.resize=function(cx,cy){this._size={cx:cx,cy:cy};this.$().width(cx).height(cy);if(this._photo==null)return;if(this._data.readOnly){this._arena={cx:cx-24,
cy:cy-24};if(this._photo.watermarkId!=0)this._arena.cy-=18;this._move('.pc-tc-arena',(cx-this._arena.cx)/2,(cy-this._arena.cy)/2,this._arena.cx,this._arena.cy);}else{this._arena={cx:cx-124,
cy:cy-80};if(this._photo.watermarkId!=0)this._arena.cy-=18;this._move('.pc-tc-arena',84+(cx-100-this._arena.cx)/2,60+(cy-80-this._arena.cy)/2,this._arena.cx,this._arena.cy);
}if(this._templateSize!=null){var template=$.extend({},this._templateSize);var viewport=$.extend({},this._originalViewport);if(template.cx>this._arena.cx||template.cy>this._arena.cy){var templateScale=Math.min(this._arena.cx/template.cx,
this._arena.cy/template.cy);template.cx*=templateScale;template.cy*=templateScale;viewport.left*=templateScale;viewport.top*=templateScale;viewport.width*=templateScale;
viewport.height*=templateScale;};;this._template={left:(this._arena.cx-template.cx)/2,top:(this._arena.cy-template.cy)/2,width:template.cx,height:template.cy};this._viewport=viewport;
this._viewportX=viewport.left+viewport.width/2;this._viewportY=viewport.top+viewport.height/2;}if(this._templateSrc!=null&&this._photoSrc!=null){this._photoZoom=null;
this._initArena();}};zfp_TemplateCropper.prototype.fadeOut=function(callback){this.$('.pc-tc-arena:first').fadeOut(200,callback);};zfp_TemplateCropper.prototype.fadeIn=function(callback){this.$('.pc-tc-arena:first').fadeIn(200,
callback);};zfp_TemplateCropper.prototype.show=function(callback){this.$('.pc-tc-arena:first').show();};zfp_TemplateCropper.prototype.hide=function(callback){this.$('.pc-tc-arena:first').hide();};zfp_TemplateCropper.prototype._loadTemplate=function(onload){var productId=this._data.productId;
var optionId=this._data.optionId;var settings=this._data.settings;var src=this._editorMeta.getOverlayUri(productId,optionId,settings,{});if(location.protocol!='https:')src='http://'+zf_cdnHost+src;
var viewport=this._editorMeta.selectViewport(productId,optionId,settings,{});var image=zfp_TemplateCropper._templateCache[src];if(image!=null){onload(src,{cx:image.width,
cy:image.height},viewport);return;}image=new Image();image.onload=function(){image.onload=null;onload(src,{cx:image.width,cy:image.height},viewport);zfp_TemplateCropper._templateCache[src]=image;
image=null;};image.src=src;};zfp_TemplateCropper.prototype._initArena=function(){var scaleFactor=this._photoSize.cx/this._photo.width;var imageMeta=this._imageMeta;var minSize={cx:imageMeta.minWidth,
cy:imageMeta.minHeight};var minWidth;var minHeight;if((this._viewport.width<this._viewport.height)!=(minSize.cx<minSize.cy))minSize={cx:minSize.cy,cy:minSize.cx};
if(!this._data.enforceResolution){minSize={cx:Math.max(Math.min(minSize.cx,Math.floor(this._photo.width/10)),1),cy:Math.max(Math.min(minSize.cy,Math.floor(this._photo.height/10)),
1)};}this._maxZoom=Math.min(this._viewport.width/(minSize.cx*scaleFactor),this._viewport.height/(minSize.cy*scaleFactor));this._minZoom=Math.min(this._maxZoom-this._maxZoom/10,
this._viewport.width/this._photoSize.cx/3,this._viewport.height/this._photoSize.cy/3);var zoom;if(this._photoZoom==null){var zoomX=this._viewport.width/(this._photoSize.cx*this._cropRect.width);
var zoomY=this._viewport.height/(this._photoSize.cy*this._cropRect.height);zoom=Math.min(Math.max(zoomX,zoomY,this._minZoom),this._maxZoom);var width=zoom*this._photoSize.cx;
var height=zoom*this._photoSize.cy;var x=width*this._cropRect.left+width*this._cropRect.width/2;var y=height*this._cropRect.top+height*this._cropRect.height/2;this._photoX=width/2-x;
this._photoY=height/2-y;}else zoom=Math.min(Math.max(this._photoZoom,this._minZoom),this._maxZoom);this._photoZoom=zoom;this.$('.pc-tc-photo:first').attr('src',this._photoSrc);
var template={left:Math.floor(this._template.left),top:Math.floor(this._template.top),width:Math.floor(this._template.width),height:Math.floor(this._template.height)};
var viewport={left:Math.floor(this._viewport.left),top:Math.floor(this._viewport.top),width:Math.ceil(this._viewport.width),height:Math.ceil(this._viewport.height)};
this.$('.pc-tc-template:first').attr('src',this._templateSrc).width(template.width).height(template.height);this._move('.pc-tc-shield:first',viewport);this._move('.pc-tc-holder:first',
template);this._move('.pc-tc-bg-n:first',0,0,template.width,viewport.top);this._move('.pc-tc-bg-s:first',0,viewport.top+viewport.height,template.width,template.height-viewport.top-viewport.height);
this._move('.pc-tc-bg-w:first',0,0,viewport.left,template.height);this._move('.pc-tc-bg-e:first',viewport.left+viewport.width,0,template.width-viewport.left-viewport.width,
template.height);this._setPhotoPos();var pos=Math.log((zoom-this._minZoom)/(this._maxZoom-this._minZoom)+1)/Math.LN2;this._slider.setPos(pos*100);this.$().removeClass('pc-tc-wait');
};zfp_TemplateCropper.prototype._setPhotoPos=function(x,y,options){var update=x!=null&&y!=null;if(x==null)x=this._photoX;if(y==null)y=this._photoY;var zoom=this._photoZoom;var width=this._photoSize.cx*zoom;
var height=this._photoSize.cy*zoom;var left=this._viewportX+x-width/2;var top=this._viewportY+y-height/2;if(left+width<this._viewport.left+50)left=this._viewport.left+50-width;
if(top+height<this._viewport.top+50)top=this._viewport.top+50-height;if(left+50>=this._viewport.left+this._viewport.width)left=this._viewport.left+this._viewport.width-50;
if(top+50>=this._viewport.top+this._viewport.height)top=this._viewport.top+this._viewport.height-50;var snapHorz=false;var snapVert=false;var snapZoom=false;var lockZoom=false;
if(options!=null){snapHorz=!!options.snapHorz;snapVert=!!options.snapVert;snapZoom=!!options.snapZoom;}var snapDelta;if(snapZoom){snapDelta=4;if(Math.abs(left-this._viewport.left)<=snapDelta)zoom=(this._viewport.width+2*x)/this._photoSize.cx;
if(Math.abs(left+width-this._viewport.left-this._viewport.width)<=snapDelta)zoom=(this._viewport.width-2*x)/this._photoSize.cx;if(Math.abs(top-this._viewport.top)<=snapDelta)zoom=(this._viewport.height+2*y)/this._photoSize.cy;
if(Math.abs(top+height-this._viewport.top-this._viewport.height)<=snapDelta)zoom=(this._viewport.height-2*y)/this._photoSize.cy;zoom=Math.min(Math.max(zoom,this._minZoom),
this._maxZoom);if(zoom!=this._photoZoom){x=x/this._photoZoom*zoom;y=y/this._photoZoom*zoom;width=this._photoSize.cx*zoom;height=this._photoSize.cy*zoom;left=this._viewportX+x-width/2;
top=this._viewportY+y-height/2;this._photoZoom=zoom;lockZoom=true;}}if(snapHorz){snapDelta=7;if(Math.abs(left-this._viewport.left)<=snapDelta)left=this._viewport.left;
if(Math.abs(left+width-this._viewport.left-this._viewport.width)<=snapDelta)left=this._viewport.left+this._viewport.width-width;}if(snapVert){snapDelta=7;if(Math.abs(top-this._viewport.top)<=snapDelta)top=this._viewport.top;
if(Math.abs(top+height-this._viewport.top-this._viewport.height)<=snapDelta)top=this._viewport.top+this._viewport.height-height;}this._photoX=left+width/2-this._viewportX;
this._photoY=top+height/2-this._viewportY;var cropRect={left:(this._viewport.left-left)/width,top:(this._viewport.top-top)/height,width:this._viewport.width/width,
height:this._viewport.height/height};this._cropRect=cropRect;this._protoPhoto.cropping=cropRect;if(this.onchange!=null){var cropping="cropping-manual";if(options!=null&&options.cropping!=null)cropping=options.cropping;
this.onchange(cropping);}left=Math.floor(left);top=Math.floor(top);width=Math.ceil(width);height=Math.ceil(height);var photo=this.$('.pc-tc-photo:first');if(lockZoom&&Math.abs(width-photo.width())<2&&Math.abs(height-photo.height())<2)return;
this._move(photo,left,top,width,height);};zfp_TemplateCropper.prototype._move=function(elem,left,top,width,height){if(!(elem instanceof jQuery))elem=this.$(elem);if(arguments.length==2){var rect=left;
left=rect.left;top=rect.top;width=rect.width;height=rect.height;}return elem.css('left',left+'px').css('top',top+'px').width(width).height(height);};zfp_TemplateCropper.prototype._photo_onload=function(state,
src,size,callback){if(callback)callback();if(state!=zf_PhotoLoader.Complete)return;this._photoSrc=src;this._photoSize=size;if(this._size!=null)this.resize(this._size.cx,
this._size.cy);};zfp_TemplateCropper.prototype._template_onload=function(src,size,viewport){this._templateSrc=src;this._templateSize=size;this._originalViewport=viewport;if(this._size!=null){this.resize(this._size.cx,
this._size.cy);}};zfp_TemplateCropper.prototype._auto_onclick=function(node){var rect;var treatment=this._data.settings['wrap-treatment'];if(this._product.cx>0&&this._product.cy>0){var product=treatment==='original'?{cx:this._product.cx+2*this._wrap.cx,
cy:this._product.cy+2*this._wrap.cy}:{cx:this._product.cx,cy:this._product.cy};var ratio=(product.cx*this._photo.height)/(product.cy*this._photo.width);if(ratio<1){rect=new zf_Rect((1-ratio)/2,
0,ratio,1);}else{rect=new zf_Rect(0,(1-1/ratio)/2,1,1/ratio);}if(treatment==='original'&&this._data.enforceResolution){var minSize={cx:this._imageMeta.minWidth*(1+2*this._imageMeta.wrapX/this._product.cx),
cy:this._imageMeta.minHeight*(1+2*this._imageMeta.wrapY/this._product.cy)};if(this._photo.width*rect.width<minSize.cx||this._photo.height*rect.height<minSize.cy){rect.width=minSize.cx/this._photo.width;
rect.height=minSize.cy/this._photo.height;rect.left=(1-rect.width)/2;rect.top=(1-rect.height)/2;}}}else{rect=new zf_Rect(0,0,1,1);}this._cropping=rect;this._protoPhoto.cropping=this._cropping;
this._cropRect=rect;this._data.cropping='cropping-auto';if(this.onchange!=null){this.onchange('cropping-auto',rect);}this.update(this._data);};zfp_TemplateCropper.prototype._fit_onclick=function(){var rect;
if(this._product.cx>0&&this._product.cy>0){var ratio=(this._product.cx*this._photo.height)/(this._product.cy*this._photo.width);if(ratio>1){rect=new zf_Rect(-(ratio-1)/2,
0,ratio,1);}else{rect=new zf_Rect(0,-(1/ratio-1)/2,1,1/ratio);}}else{rect=new zf_Rect(0,0,1,1);}this._cropping=rect;this._protoPhoto.cropping=this._cropping;this._cropRect=rect;
this._data.cropping='cropping-fit';if(this.onchange!=null){this.onchange('cropping-fit',this._cropping);}this.update(this._data);};zfp_TemplateCropper.prototype._slider_onchange=function(pos){pos/=100;
var zoom=this._minZoom+(Math.exp(pos*Math.LN2)-1)*(this._maxZoom-this._minZoom);var x=this._photoX/this._photoZoom;var y=this._photoY/this._photoZoom;this._photoZoom=zoom;
this._setPhotoPos(x*zoom,y*zoom,{snapZoom:true});};zfp_TemplateCropper.prototype._move_ondblclick=function(e,dx,dy){e.preventDefault();e.stopPropagation();};zfp_TemplateCropper.prototype._move_onmousedown=function(e,
dx,dy){if(e!=null){e.preventDefault();e.stopPropagation();}this._setPhotoPos(this._photoX+8*dx,this._photoY+8*dy,{snapHorz:dx!=0,snapVert:dy!=0});var self=this;var repeat=function(){self._move_onmousedown(null,
dx,dy);};if(this._moveDelayTimer==null){this._moveDelayTimer=setTimeout(repeat,400);}else if(this._moveRepeatTimer==null){this._moveRepeatTimer=setInterval(repeat,
80);}};zfp_TemplateCropper.prototype._move_onmouseup=function(){if(this._moveRepeatTimer!=null){clearInterval(this._moveRepeatTimer);this._moveRepeatTimer=null;}if(this._moveDelayTimer!=null){clearTimeout(this._moveDelayTimer);
this._moveDelayTimer=null;}};zfp_TemplateCropper.prototype._reset_onclick=function(){this._data.cropping=this._originalSetting;this._cropping=this._originalCropping;this._protoPhoto.cropping=this._originalCropping;
this._isReset=true;this._toolbar.selectButton(this._originalSetting.replace('cropping','action').replace(/(auto|unconfirmed)/i,'centered'),'cropper');if(typeof this._originalColorConversion==='string'){this._toolbar.selectButton('action-'+this._originalColorConversion,
'color-conversion');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[this._originalColorConversion]==='function'){this._eventCallbacks[this._originalColorConversion]();
}}var zoomX=this._viewport.width/this._photoSize.cx;var zoomY=this._viewport.height/this._photoSize.cy;var zoom=this._photoZoom=Math.min(Math.max(zoomX,zoomY,this._minZoom),
this._maxZoom);this._setPhotoPos(0,0,{cropping:"cropping-auto"});var pos=Math.log((zoom-this._minZoom)/(this._maxZoom-this._minZoom)+1)/Math.LN2;this._slider.setPos(pos*100);
};zfp_TemplateCropper.prototype._button_onclick=function(element){var action=$(element).attr('class').replace(/^.* action-/,'').replace(/ .*$/,'');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[action]==='function'){this._eventCallbacks[action]();
}};zfp_TemplateCropper.prototype._photo_onmousedown=function(e){e.preventDefault();e.stopPropagation();if(!zf_stdIsLeftButton(e))return;if(this._data.readOnly)return;var node=e.currentTarget;
if(e.ctrlKey&&e.shiftKey){node.style.background='#CCC url(/zf/img/eb.png) no-repeat center';node.onmouseup=function(){this.style.background='transparent';};node=null;
return;}if(document.addEventListener){document.addEventListener('mousemove',this._mousemove,true);document.addEventListener('mouseup',this._mouseup,true);document.addEventListener('selectstart',
zf_stdFalse,true);}else if(node.setCapture){$(node).mousemove(this._mousemove).mouseup(this._mouseup).bind('selectstart',zf_stdFalse);node.setCapture();}node=null;
this._anchorX=e.pageX;this._anchorY=e.pageY;this._anchorPhotoX=this._photoX;this._anchorPhotoY=this._photoY;};zfp_TemplateCropper.prototype._photo_onmouseup=function(e){e.preventDefault();
e.stopPropagation();this._photo_onmousemove(e);var node=this.$('.pc-tc-shield')[0];if(document.removeEventListener){document.removeEventListener('mousemove',this._mousemove,
true);document.removeEventListener('mouseup',this._mouseup,true);document.removeEventListener('selectstart',zf_stdFalse,true);}else if(node.releaseCapture){node.releaseCapture();
$(node).unbind('mousemove mouseup selectstart');}node=null;};zfp_TemplateCropper.prototype._photo_onmousemove=function(e){e=jQuery.event.fix(e);var canSnap=!(e.ctrlKey||e.metaKey);
var pageX=e.pageX;var pageY=e.pageY;this._setPhotoPos(this._anchorPhotoX+pageX-this._anchorX,this._anchorPhotoY+pageY-this._anchorY,{snapHorz:canSnap,snapVert:canSnap});
this._toolbar.unselectButton('action-centered');this._toolbar.unselectButton('action-fit');if(this.onchange!=null){this.onchange('cropping-manual',this._cropping);
}};function zfp_FrameCropper(id,slider){;zf_Control.prototype.constructor.call(this,id);this._slider=slider;this._nextKey=0;this.type=4;}zfp_FrameCropper.inherits(zf_Control);zfp_FrameCropper._templateCache={};
zfp_FrameCropper.prototype.init=function(frame){;this._frame=frame;var self=this;this._toolbar=new zf_Toolbar(this.id+'_toolbar');this._toolbar.init(this.$('.pc-fc-toolbar'),[new zf_ToolbarButton('action-centered',
{groupclass:'cropper',text:'Center',corners:'left',events:{fastClick:{type:'fastClick',handler:this.closure(this._auto_onclick)}}}),new zf_ToolbarButton('action-fit',
{groupclass:'cropper',text:'Fit',events:{fastClick:{type:'fastClick',handler:this.closure(this._fit_onclick)}}}),new zf_ToolbarButton('action-color',{groupclass:'color-conversion',
text:'Color',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-black-white',
{groupclass:'color-conversion',text:'Black & White',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-sepia',
{groupclass:'color-conversion',text:'Sepia',type:'image-button',events:{fastClick:{type:'fastClick',handler:function(){self._button_onclick(this);}}}}),new zf_ToolbarButton('action-simple-cropper',
{groupclass:'switch',text:'Crop Photo',type:'image-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._simplecropper_onclick)}}}),new zf_ToolbarButton('action-reset',
{groupclass:'reset',text:'Reset',corners:'right',events:{fastClick:{type:'fastClick',handler:this.closure(this._reset_onclick)}}})]);this._slider.onchange=this.closure(this._slider_onchange);
this._mousemove=this.closure(this._photo_onmousemove);this._mouseup=this.closure(this._photo_onmouseup);this.$('.pc-fc-shield').mousedown(this.closure(this._photo_onmousedown));
this.$('.pc-fc-arena DIV').bind('contextmenu',zf_stdFalse);var infotext=this.$('.pc-fc-infotext');this.$('*').mousedown(function(){if(infotext.is(':visible')){infotext.fadeOut(1000);
}});};zfp_FrameCropper.prototype.initUI=function(imageMeta,photos,customerPhotos,data,photoMap,colorConversion,initcallback,eventcallbacks){;;;;var photo=photos[0];this._protoPhoto=photo;
this._customerPhoto=customerPhotos!=null?customerPhotos[0]:null;this._photo=photoMap[photo.id];this._imageMeta=imageMeta;this._loader=null;this._cropRect=photo.cropping;
this._original={cropping:this._cropRect,setting:data.cropping,colorConversion:data.settings['color-conversion']};this._isReset=false;this._eventCallbacks=eventcallbacks;
this._photoSrc=null;this._photoSize=null;this._templateSrc=null;this._templateSize=null;this._viewport=null;this._viewportX=null;this._viewportY=null;this._photoX=null;
this._photoY=null;this._photoZoom=null;this.$('.pc-fc-wmark').showIf(this._photo.watermarkId!=0);this.$().toggleClass('pc-cropper-ro',(data.readOnly===true||data.croppingReadOnly===true)).toggleClass('pc-cropper-p',
this._customerPhoto!=null);if(!data.readOnly&&!data.croppingReadOnly){var infotext=this.$('.pc-fc-infotext');infotext.hide().stop(true,true);setTimeout(function(){infotext.fadeIn(1000,
function(){setTimeout(function(){infotext.fadeOut(2000);},10000);});},1000);}if(typeof colorConversion==='object'&&typeof this._original.colorConversion!='undefined'){var buttons=this._toolbar.getButtons();
for(var button in buttons){if(buttons[button].getSetting('groupclass')==='color-conversion'){var action=buttons[button].id.replace(/^action-/,'');if(typeof colorConversion.values[action]==='object'){this._toolbar.showButton(buttons[button].id);
}else{this._toolbar.hideButton(buttons[button].id);}}}}else{this._toolbar.hideButtonGroup('color-conversion');}if(data.croppingReadOnly){this._toolbar.hideButtonGroup('cropper');
}else{this._toolbar.showButtonGroup('cropper');}if(data.readOnly){this._toolbar.hide();}else{this._toolbar.format();this._toolbar.show();}if(typeof photo==='object'){this.update(data,
initcallback);}else if(typeof initcallback==='function'){initcallback();}};zfp_FrameCropper.prototype.update=function(data,callback){this._data=data;var vendorMeta=zf_VendorMeta.cached(data.vendorId);
var editorMeta=null;this._product={cx:this._imageMeta.sizeX,cy:this._imageMeta.sizeY};if(this._imageMeta.canRotate&&(this._product.cx<this._product.cy)!=(this._photo.width<this._photo.height)){this._product={cx:this._product.cy,
cy:this._product.cx};}for(var sid in data.services){var serviceMeta=vendorMeta.services[data.services[sid]];if(serviceMeta.data["editor"]!=null){editorMeta=vendorMeta.editors[serviceMeta.data["editor"]];
if(editorMeta instanceof zf_VendorMeta.OverlayEditor){this._editorMeta=editorMeta;break;}}}if(typeof this._size==='object'){this.resize(this._size.cx,this._size.cy,
callback);}var cropping=data.cropping;if(this._isReset){cropping=this._original.setting;}if(typeof cropping==='undefined'){cropping='cropping-manual';}cropping=cropping.replace('cropping-',
'action-').replace(/-(auto|unconfirmed)/i,'-centered');this._toolbar.selectButton(cropping,'cropper');if(typeof data.settings['color-conversion']==='string'){this._toolbar.selectButton('action-'+data.settings['color-conversion'],
'color-conversion');}this._isReset=false;};zfp_FrameCropper.prototype.resize=function(cx,cy,callback){this._size={cx:cx,cy:cy};this.$().width(cx).height(cy);if(this._photo==null)return;
if(this._data.readOnly){this._arena={cx:cx-24,cy:cy-24};if(this._photo.watermarkId!=0)this._arena.cy-=18;this._arena={cx:this._arena.cx-this._arena.cx%16,cy:this._arena.cy-this._arena.cy%16};
this.$('.pc-fc-arena').css('left',((cx-this._arena.cx)/2)+'px').css('top',((cy-this._arena.cy)/2)+'px').width(this._arena.cx).height(this._arena.cy);}else{this._arena={cx:cx-124,
cy:cy-80};if(this._photo.watermarkId!=0)this._arena.cy-=18;this._arena={cx:this._arena.cx-this._arena.cx%16,cy:this._arena.cy-this._arena.cy%16};this.$('.pc-fc-arena').css('left',
(84+(cx-100-this._arena.cx)/2)+'px').css('top',(60+(cy-80-this._arena.cy)/2)+'px').width(this._arena.cx).height(this._arena.cy);}var photo=this._photo;var method=photo.pickMethod(this._arena.cx,
this._arena.cy,true);var size=photo.getScaledSize(method);if(size.cx>size.cy)size.cy=size.cx*photo.height/photo.width;else size.cx=size.cy*photo.width/photo.height;
this._photoSize=size;var modifier=this._data.mode;if(this._loader==null||this._loader.getMethod()!=method||this._loader.getModifier()!=modifier){var key=this._asyncKey=++this._nextKey;
this._loader=new zf_PhotoLoader(this._photo,method,modifier);this._loader.onload=this.closure(this._photo_onload,key,callback);this._loader.start();}this._loadTemplate(this.closure(this._template_onload));
};zfp_FrameCropper.prototype.fadeOut=function(callback){this.$('.pc-fc-arena:first').fadeOut(200,callback);};zfp_FrameCropper.prototype.fadeIn=function(callback){if(this.$().hasClass('pc-fc-wait'))this._pendingFadeIn=true;
else this.$('.pc-fc-arena:first').fadeIn(200,callback);};zfp_FrameCropper.prototype.show=function(callback){this.$('.pc-fc-arena:first').show();};zfp_FrameCropper.prototype.hide=function(callback){this.$('.pc-fc-arena:first').hide();
};zfp_FrameCropper.prototype._loadTemplate=function(onload){var photo={cx:this._photoSize.cx*this._cropRect.width,cy:this._photoSize.cy*this._cropRect.height};var product={cx:this._imageMeta.sizeX,
cy:this._imageMeta.sizeY};var spill={cx:this._imageMeta.spillX,cy:this._imageMeta.spillY};if((product.cx<product.cy)!=(photo.cx<photo.cy)&&this._imageMeta.canRotate){product={cx:product.cy,
cy:product.cx};spill={cx:spill.cy,cy:spill.cx};}var vendorMeta=zf_VendorMeta.cached(this._data.vendorId);var frame={left:0,top:0,right:0,bottom:0,add:function(fw){var l,
t,r,b;fw=fw.split(',');l=t=r=b=parseFloat(fw[0]);if(fw.length>1)t=b=parseFloat(fw[1]);if(fw.length>2)r=parseFloat(fw[2]);if(fw.length>3)b=parseFloat(fw[3]);this.left+=l;
this.top+=t;this.right+=r;this.bottom+=b;}};var overlap=0;var productMeta=vendorMeta.products[this._data.productId];var fw=productMeta.data["frame-width"];if(fw!=null)frame.add(fw);
var ov=productMeta.data["frame-overlap"];if(ov!=null)overlap+=parseFloat(ov);for(var setId in this._data.services){var sid=this._data.services[setId];;var serviceMeta=vendorMeta.services[sid];
;fw=serviceMeta.data["frame-width"];if(fw!=null)frame.add(fw);ov=serviceMeta.data["frame-overlap"];if(ov!=null)overlap+=parseFloat(ov);}var aspect=(product.cx+frame.left+frame.right-2*overlap)/(product.cy+frame.left+frame.right-2*overlap);
var arena=this._arena;if(this._photo.watermarkId!=0)this._arena.cy-=24;var template=(aspect>(arena.cx/arena.cy))?{cx:arena.cx,cy:arena.cx/aspect}:{cx:arena.cy*aspect,
cy:arena.cy};this._shadowUri=zf_stdFormatString("/zf/border/services-editor.{0}.{1}.{2}.png",9,Math.round(template.cx),Math.round(template.cy));this._shadowUri=zfp_Configurator.formatIconUrl(this._shadowUri);
var image=new Image();image.src=this._shadowUri;var src="";var border=[0,0,0,0];var cover=0;if(frame.left+frame.top+frame.right+frame.bottom>0){var ppi=template.cx/(product.cx+frame.left+frame.right-2*overlap);
cover=Math.round(ppi*overlap);border=[Math.round(ppi*frame.left),Math.round(ppi*frame.top),Math.round(ppi*frame.right),Math.round(ppi*frame.bottom)];src=this._editorMeta.getOverlayUri(this._data.productId,
this._data.optionId,this._data.settings,this._data.services);}var hole={cx:Math.round(template.cx)-border[0]-border[2],cy:Math.round(template.cy)-border[1]-border[3]};
this._viewport={left:border[0]-cover,top:border[1]-cover,width:hole.cx+2*cover,height:hole.cy+2*cover};if(src==""){onload(src,{cx:this._viewport.width,cy:this._viewport.height});
return src;}src=zf_stdFormatString(src,border.join(';'),hole.cx,hole.cy);src=zfp_Configurator.formatIconUrl(src);image=zfp_FrameCropper._templateCache[src];if(image!=null){onload(src,
{cx:image.width,cy:image.height});return src;}this.$().addClass('pc-fc-wait');image=new Image();image.onload=function(){image.onload=null;onload(src,{cx:image.width,
cy:image.height});zfp_FrameCropper._templateCache[src]=image;image=null;};image.src=src;return src;};zfp_FrameCropper.prototype._initArena=function(){this.$().removeClass('pc-fc-wait');
if(this._pendingFadeIn)this.fadeIn();var scaleFactor=this._photoSize.cx/this._photo.width;var imageMeta=this._imageMeta;var minSize={cx:imageMeta.minWidth,cy:imageMeta.minHeight};
if((this._viewport.width<this._viewport.height)!=(minSize.cx<minSize.cy))minSize={cx:minSize.cy,cy:minSize.cx};if(!this._data.enforceResolution){minSize={cx:Math.max(Math.min(minSize.cx,
Math.floor(this._photo.width/10)),1),cy:Math.max(Math.min(minSize.cy,Math.floor(this._photo.height/10)),1)};}this._maxZoom=Math.min(this._viewport.width/(minSize.cx*scaleFactor),
this._viewport.height/(minSize.cy*scaleFactor));this._minZoom=Math.min(this._maxZoom-this._maxZoom/10,this._viewport.width/this._photoSize.cx/3,this._viewport.height/this._photoSize.cy/3);
var zoom;if(this._photoZoom==null){var zoomX=this._viewport.width/(this._photoSize.cx*this._cropRect.width);var zoomY=this._viewport.height/(this._photoSize.cy*this._cropRect.height);
zoom=Math.min(Math.max(zoomX,zoomY,this._minZoom),this._maxZoom);var width=zoom*this._photoSize.cx;var height=zoom*this._photoSize.cy;var x=width*this._cropRect.left+width*this._cropRect.width/2;
var y=height*this._cropRect.top+height*this._cropRect.height/2;this._photoX=width/2-x;this._photoY=height/2-y;this._original.photoX=this._photoX;this._original.photoY=this._photoY;
}else zoom=Math.min(Math.max(this._photoZoom,this._minZoom),this._maxZoom);this._photoZoom=zoom;this._original.zoom=zoom;this.$('.pc-fc-photo:first').attr('src',
this._photoSrc);var template={left:Math.round((this._arena.cx-this._templateSize.cx)/2),top:Math.round((this._arena.cy-this._templateSize.cy)/2),width:this._templateSize.cx,
height:this._templateSize.cy};var viewport={left:Math.floor(this._viewport.left),top:Math.floor(this._viewport.top),width:Math.ceil(this._viewport.width),height:Math.ceil(this._viewport.height)};
this.$('.pc-fc-template:first').attr('src',this._templateSrc).width(template.width).height(template.height);this._move('.pc-fc-shield:first',viewport);this._move('.pc-fc-holder:first',
template);this._move('.pc-fc-bg-n:first',0,0,template.width,viewport.top);this._move('.pc-fc-bg-s:first',0,viewport.top+viewport.height,template.width,template.height-viewport.top-viewport.height);
this._move('.pc-fc-bg-w:first',0,0,viewport.left,template.height);this._move('.pc-fc-bg-e:first',viewport.left+viewport.width,0,template.width-viewport.left-viewport.width,
template.height);this._setPhotoPos();var pos=Math.log((zoom-this._minZoom)/(this._maxZoom-this._minZoom)+1)/Math.LN2;this._slider.setPos(pos*100);this.$('.pc-fc-shadow:first').css('background-image',
'url('+this._shadowUri+')').css('left',(this._arena.cx-this._templateSize.cx-18)/2+'px').css('top',(this._arena.cy-this._templateSize.cy-18)/2+'px').width(this._templateSize.cx+18).height(this._templateSize.cy+18);
this.$().removeClass('pc-fc-wait');};zfp_FrameCropper.prototype._setPhotoPos=function(x,y,options){var update=x!=null&&y!=null;if(x==null)x=this._photoX;if(y==null)y=this._photoY;
var zoom=this._photoZoom;var width=this._photoSize.cx*zoom;var height=this._photoSize.cy*zoom;var left=this._viewportX+x-width/2;var top=this._viewportY+y-height/2;
if(left+width<this._viewport.left+50)left=this._viewport.left+50-width;if(top+height<this._viewport.top+50)top=this._viewport.top+50-height;if(left+50>=this._viewport.left+this._viewport.width)left=this._viewport.left+this._viewport.width-50;
if(top+50>=this._viewport.top+this._viewport.height)top=this._viewport.top+this._viewport.height-50;var snapHorz=false;var snapVert=false;var snapZoom=false;var lockZoom=false;
if(options!=null){snapHorz=!!options.snapHorz;snapVert=!!options.snapVert;snapZoom=!!options.snapZoom;}var snapDelta;if(snapZoom){snapDelta=4;if(Math.abs(left-this._viewport.left)<=snapDelta)zoom=(this._viewport.width+2*x)/this._photoSize.cx;
if(Math.abs(left+width-this._viewport.left-this._viewport.width)<=snapDelta)zoom=(this._viewport.width-2*x)/this._photoSize.cx;if(Math.abs(top-this._viewport.top)<=snapDelta)zoom=(this._viewport.height+2*y)/this._photoSize.cy;
if(Math.abs(top+height-this._viewport.top-this._viewport.height)<=snapDelta)zoom=(this._viewport.height-2*y)/this._photoSize.cy;zoom=Math.min(Math.max(zoom,this._minZoom),
this._maxZoom);if(zoom!=this._photoZoom){x=x/this._photoZoom*zoom;y=y/this._photoZoom*zoom;width=this._photoSize.cx*zoom;height=this._photoSize.cy*zoom;left=this._viewportX+x-width/2;
top=this._viewportY+y-height/2;this._photoZoom=zoom;lockZoom=true;}}if(snapHorz){snapDelta=7;if(Math.abs(left-this._viewport.left)<=snapDelta)left=this._viewport.left;
if(Math.abs(left+width-this._viewport.left-this._viewport.width)<=snapDelta)left=this._viewport.left+this._viewport.width-width;}if(snapVert){snapDelta=7;if(Math.abs(top-this._viewport.top)<=snapDelta)top=this._viewport.top;
if(Math.abs(top+height-this._viewport.top-this._viewport.height)<=snapDelta)top=this._viewport.top+this._viewport.height-height;}this._photoX=left+width/2-this._viewportX;
this._photoY=top+height/2-this._viewportY;if(update){var crop={left:(this._viewport.left-left)/width,top:(this._viewport.top-top)/height,width:this._viewport.width/width,
height:this._viewport.height/height};this._cropRect=crop;this._protoPhoto.cropping=crop;if(this.onchange!=null)this.onchange(options.cropping!=null?options.cropping:"cropping-manual");
}left=Math.floor(left);top=Math.floor(top);width=Math.ceil(width);height=Math.ceil(height);var photo=this.$('.pc-fc-photo:first');if(lockZoom&&Math.abs(width-photo.width())<2&&Math.abs(height-photo.height())<2)return;
this._move(photo,left,top,width,height);};zfp_FrameCropper.prototype._move=function(elem,left,top,width,height){if(!(elem instanceof jQuery))elem=this.$(elem);if(arguments.length==2){var rect=left;
left=rect.left;top=rect.top;width=rect.width;height=rect.height;}width=Math.max(0,width);height=Math.max(0,height);return elem.css('left',left+'px').css('top',top+'px').width(width).height(height);
};zfp_FrameCropper.prototype._photo_onload=function(state,src,asyncKey,callback){if(typeof callback==='function'){callback();}if(asyncKey!=this._asyncKey){return;}if(state!=zf_PhotoLoader.Complete){return;
}this._photoSrc=src;if(this._templateSrc!=null){this._initArena();}};zfp_FrameCropper.prototype._template_onload=function(src,size){this._templateSrc=src;this._templateSize=size;
this._viewportX=this._viewport.left+this._viewport.width/2;this._viewportY=this._viewport.top+this._viewport.height/2;this._photoZoom=null;if(this._photoSrc!=null)this._initArena();
};zfp_FrameCropper.prototype._button_onclick=function(element){var action=$(element).attr('class').replace(/^.* action-/,'').replace(/ .*$/,'');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[action]==='function'){this._eventCallbacks[action]();
}};zfp_FrameCropper.prototype._simplecropper_onclick=function(){if(typeof this.onswitchclick==='function'){this.onswitchclick();}};zfp_FrameCropper.prototype._auto_onclick=function(node){var rect;
var treatment=this._data.settings['wrap-treatment'];if(this._product.cx>0&&this._product.cy>0){var product=treatment==='original'?{cx:this._product.cx+2*this._wrap.cx,
cy:this._product.cy+2*this._wrap.cy}:{cx:this._product.cx,cy:this._product.cy};var ratio=(product.cx*this._photo.height)/(product.cy*this._photo.width);if(ratio<1){rect=new zf_Rect((1-ratio)/2,
0,ratio,1);}else{rect=new zf_Rect(0,(1-1/ratio)/2,1,1/ratio);}if(treatment==='original'&&this._data.enforceResolution){var minSize={cx:this._imageMeta.minWidth*(1+2*this._imageMeta.wrapX/this._product.cx),
cy:this._imageMeta.minHeight*(1+2*this._imageMeta.wrapY/this._product.cy)};if(this._photo.width*rect.width<minSize.cx||this._photo.height*rect.height<minSize.cy){rect.width=minSize.cx/this._photo.width;
rect.height=minSize.cy/this._photo.height;rect.left=(1-rect.width)/2;rect.top=(1-rect.height)/2;}}}else{rect=new zf_Rect(0,0,1,1);}this._cropRect=rect;this._protoPhoto.cropping=this._cropRect;
this._cropRect=rect;this._data.cropping='cropping-auto';if(this.onchange!=null){this.onchange('cropping-auto',rect);}this.update(this._data);};zfp_FrameCropper.prototype._fit_onclick=function(){var rect;
if(this._product.cx>0&&this._product.cy>0){var ratio=(this._product.cx*this._photo.height)/(this._product.cy*this._photo.width);if(ratio>1){rect=new zf_Rect(-(ratio-1)/2,
0,ratio,1);}else{rect=new zf_Rect(0,-(1/ratio-1)/2,1,1/ratio);}}else{rect=new zf_Rect(0,0,1,1);}this._cropRect=rect;this._protoPhoto.cropping=this._cropRect;this._cropRect=rect;
this._data.cropping='cropping-fit';if(this.onchange!=null){this.onchange('cropping-fit',this._cropRect);}this.update(this._data);};zfp_FrameCropper.prototype._slider_onchange=function(pos){pos/=100;
var zoom=this._minZoom+(Math.exp(pos*Math.LN2)-1)*(this._maxZoom-this._minZoom);var x=this._photoX/this._photoZoom;var y=this._photoY/this._photoZoom;this._photoZoom=zoom;
this._setPhotoPos(x*zoom,y*zoom,{snapZoom:true});this._toolbar.unselectButton('action-centered');this._toolbar.unselectButton('action-fit');if(this.onchange!=null){this.onchange('cropping-manual',
this._cropRect);}};zfp_FrameCropper.prototype._reset_onclick=function(){this._data.cropping=this._original.setting;this._data.settings['cropping']=this._original.setting;this._cropRect=this._original.cropping;
this._protoPhoto.cropping=this._original.cropping;if(this._data.settings['color-conversion']===this._original.colorConversion){this.update(this._data);}else{var action=this._original.colorConversion.replace(/^.* action-/,
'').replace(/ .*$/,'');if(typeof this._eventCallbacks==='object'&&typeof this._eventCallbacks[action]==='function'){this._eventCallbacks[action]();}}};zfp_FrameCropper.prototype._photo_onmousedown=function(e){if(!zf_stdIsLeftButton(e))return;
if(this._data.readOnly||this._data.croppingReadOnly)return;e.preventDefault();e.stopPropagation();var node=e.currentTarget;if(e.ctrlKey&&e.shiftKey){node.style.background='#CCC url(/zf/img/eb.png) no-repeat center';
node.onmouseup=function(){this.style.background='transparent';};node=null;return;}if(document.addEventListener){document.addEventListener('mousemove',this._mousemove,
true);document.addEventListener('mouseup',this._mouseup,true);document.addEventListener('selectstart',zf_stdFalse,true);}else if(node.setCapture){$(node).mousemove(this._mousemove).mouseup(this._mouseup).bind('selectstart',
zf_stdFalse);node.setCapture();}node=null;this._anchorX=e.pageX;this._anchorY=e.pageY;this._anchorPhotoX=this._photoX;this._anchorPhotoY=this._photoY;};zfp_FrameCropper.prototype._photo_onmouseup=function(e){e.preventDefault();
e.stopPropagation();this._photo_onmousemove(e);var node=this.$('.pc-fc-shield')[0];if(document.removeEventListener){document.removeEventListener('mousemove',this._mousemove,
true);document.removeEventListener('mouseup',this._mouseup,true);document.removeEventListener('selectstart',zf_stdFalse,true);}else if(node.releaseCapture){node.releaseCapture();
$(node).unbind('mousemove mouseup selectstart');}};zfp_FrameCropper.prototype._photo_onmousemove=function(e){var canSnap=!(e.ctrlKey||e.metaKey);this._setPhotoPos(this._anchorPhotoX+e.pageX-this._anchorX,
this._anchorPhotoY+e.pageY-this._anchorY,{snapHorz:canSnap,snapVert:canSnap});this._toolbar.unselectButton('action-centered');this._toolbar.unselectButton('action-fit');
if(this.onchange!=null){this.onchange('cropping-manual',this._cropRect);}};function zfp_MultiImageCropper(id,mainView,productInfo){;zf_Control.prototype.constructor.call(this,
id);this._mainView=mainView;this._productInfo=productInfo;}zfp_MultiImageCropper.inherits(zf_Control);zfp_MultiImageCropper.prototype.init=function(frame){;this._frame=frame;this._productInfo.init(frame);
this._productInfo.onpreview=function(info){frame.showPreview(info);};};zfp_MultiImageCropper.prototype.initUI=function(productMeta,photos,customerPhotos,data,photoMap,colorConversion,
initcallback,eventcallbacks){;;;this._productMeta=productMeta;this._photos=photos;this._customerPhotos=customerPhotos!=null?customerPhotos:[];this._photoMap=photoMap;
this._incomplete=false;this._productInfo.showProductInfo(data.vendorId,data.productId,null);this.$().toggleClass('pc-cropper-ro',data.readOnly);this._mainView.getContentNode().innerHTML='';
if(productMeta.images!=null){var images=zfp_Configurator.makeUiList(productMeta.images,zf_BaseMeta.compare);for(var i=0;i<images.length;i++)this._addImage(images[i],
true);}else this._addImage(productMeta,false);this.update(data,initcallback);};zfp_MultiImageCropper.prototype.update=function(data,callback){this._data=data;var self=this;$('DIV.pc-mc-slot',
this._mainView.getContentNode()).each(function(){var slot=$(this);var imageId=slot.attr('data-image');if(imageId=='')imageId=null;var imageIndex=parseInt(slot.attr('data-index'),
10);self._updateSlot(slot,imageId,imageIndex);});this.$('DIV.pc-mc-incomplete').showIf(this._incomplete);if(callback!=null)callback();this.resize(this.$().height(),
this.$().width());};zfp_MultiImageCropper.prototype.resize=function(cx,cy){this._size={cx:cx,cy:cy};this.$().width(cx).height(cy-1);this._productInfo.setHeight(cy-18);this._productInfo.update();
if(this._photos==null)return;this.$('.pc-mc-main:first').height(cy-1);if(this._incomplete)cy-=this.$('.pc-mc-incomplete').outerHeight();this._mainView.setHeight(cy-58);
this._mainView.update();};zfp_MultiImageCropper.prototype.fadeOut=function(callback){};zfp_MultiImageCropper.prototype.fadeIn=function(callback){};zfp_MultiImageCropper.prototype.show=function(callback){};zfp_MultiImageCropper.prototype.hide=function(callback){};
zfp_MultiImageCropper.prototype._addImage=function(imageMeta,showHeader){var html=[];var imageId=(imageMeta instanceof zf_VendorMeta.Product)?null:imageMeta.id;var photos=$.grep(this._photos,
function(p){return p.imageId==imageId;});if(showHeader&&imageMeta.name!=null){html.push('<div class="pc-mc-group pc-bgcolor9 pc-font2">',zf_stdHtmlEncode(imageMeta.name),
'</div>');}var slots=Math.min(Math.max(photos.length,imageMeta.minImageCount),imageMeta.maxImageCount);for(var i=0;i<slots;i++){html.push('<div class="pc-mc-slot pc-bgcolor5"',
' data-image="',imageId!=null?imageId:'','"',' data-index="',i,'">','</div>');}html.push('<div class="pc-mc-clear"></div>');$(this._mainView.getContentNode()).append(html.join(''));
};zfp_MultiImageCropper.prototype._updateSlot=function(slot,imageId,imageIndex){var protoPhoto=$.lookup(this._photos,function(p){return p.imageId==imageId&&p.index==imageIndex;});var customerPhoto=$.lookup(this._customerPhotos,
function(p){return p.imageId==imageId&&p.index==imageIndex;});var html=[];var self=this;var method=zf_ProcessingMethod.StandardLargeThumbnail;var imageMeta=imageId!=null?this._productMeta.images[imageId]:this._productMeta;
var photo;if(protoPhoto!=null&&(photo=this._photoMap[protoPhoto.id])!=null){var size=photo.getScaledSize(method);var url=photo.getInternalUrl(method,{block:true});
var crop={left:Math.round(protoPhoto.cropping.left*size.cx),top:Math.round(protoPhoto.cropping.top*size.cy),width:Math.round(protoPhoto.cropping.width*size.cx),height:Math.round(protoPhoto.cropping.height*size.cy)};
html.push('<div class="pv-inner" style="','left:',Math.floor(3+(method.cx-size.cx)/2),'px;','top:',Math.floor(3+(method.cy-size.cy)/2),'px;','width:',size.cx,'px;',
'height:',size.cy,'px;">','<img class="pv-img" width="',size.cx,'" height="',size.cy,'"',' style="background-image:url(',url,');"',' src="',zfp_Configurator.formatIconUrl('/zf/img/null.gif'),
'" />','<div class="pv-crop-mask"></div>','<div class="pv-crop-rect" style="','background-image:url(',url,');','background-position:',-crop.left,'px ',-crop.top,
'px;','left:',crop.left,'px;','top:',crop.top,'px;','width:',crop.width,'px;','height:',crop.height,'px;">','<div class="pv-crop-rect-t"></div>','<div class="pv-crop-rect-b"></div>',
'<div class="pv-crop-rect-l"></div>','<div class="pv-crop-rect-r"></div>','<div class="pv-crop-rect-tl"></div>','<div class="pv-crop-rect-tr"></div>','<div class="pv-crop-rect-bl"></div>',
'<div class="pv-crop-rect-br"></div>','</div>');if(photo.video)html.push('<div class="pv-v">','<div class="pv-v-b"></div>','<div class="pv-v-i"></div>','<div class="pv-v-d">',
zf_stdFormatDuration(photo.duration,true),'</div>','</div>');html.push('</div>');slot.html(html.join(''));slot.find('.pv-inner').mousedown(function(e){self._slot_onclick(e,
imageMeta,protoPhoto,customerPhoto);});}else{var product={cx:imageMeta.sizeX+2*imageMeta.wrapX,cy:imageMeta.sizeY+2*imageMeta.wrapY};if(imageMeta.canRotate&&product.cx<product.cy)product={cx:product.cy,
cy:product.cx};if(product.cx==0||product.cy==0)product={cx:6,cy:4};var scale=Math.min(method.cx/product.cx,method.cy/product.cy);var cx=Math.floor(product.cx*scale);
var cy=Math.floor(product.cy*scale);var x=3+(method.cx-cx)/2;var y=3+(method.cy-cy)/2;var noItemText=imageMeta.sourceTypeIs(zf_SourceType.Video)?'No video selected':'No photo selected';
html.push('<div class="pc-mc-target pc-border10 pc-bgcolor11 pc-color4"',' style="left:',x,'px;top:',y,'px;width:',cx-2,'px;height:',cy-2,'px;line-height:',cy-2,
'px">','<span>',noItemText,'</span>','</div>');slot.html(html.join(''));this._incomplete=true;}slot=null;};zfp_MultiImageCropper.prototype._slot_onclick=function(e,imageMeta,photo,customerPhoto){if(!zf_stdIsLeftButton(e)){return;
}e.preventDefault();e.stopPropagation();var self=this;var slot=$(e.currentTarget).closest('.pc-mc-slot');var imageId=(imageMeta instanceof zf_VendorMeta.Product)?null:imageMeta.id;
var onclose=function(cropping){self._data.settings['cropping']=cropping;self._updateSlot(slot,imageId,photo.index);};if(this.onenlarge!=null){this.onenlarge(imageMeta,
photo,false,onclose);}};var _zf_stdBase32Digits="123456789ABCDEFGHJKMNPQRSTUVWXYZ";function zf_stdBase32Encode(number){var res="";while(number>0){res=_zf_stdBase32Digits.charAt(number&0x1F)+res;
number>>>=5;}return res;}function zf_stdBase32Decode(encoded){encoded=encoded.toUpperCase();var res=0;for(var i=0;i<encoded.length;i++){res<<=5;res|=_zf_stdBase32Digits.indexOf(encoded.charAt(i));
}return res;};function zf_VolumeMapper(code){;var iter={code:code,pos:0,length:code.length};this._default=zf_VolumeMapper._decodeInt(iter);this._mapping={};while(iter.pos<iter.length){var method=zf_VolumeMapper._decodeInt(iter);
var volume=zf_VolumeMapper._decodeInt(iter);this._mapping["_"+method]=volume;}}zf_VolumeMapper.prototype.map=function(method){;var volume=this._mapping["_"+method.code];return volume!=null?volume:this._default;
};zf_VolumeMapper.prototype.defaultMapping=function(){return this._default;};zf_VolumeMapper._decodeInt=function(iter){;;var val=0;var scale=1;while(iter.pos<iter.length){var c=iter.code.charCodeAt(iter.pos++);
val+=scale*((c&~0x20)-0x41);scale*=26;if((c&0x20)==0)return val;};return null;};;function zf_BasicImage(id,width,height,timestamp,volume,token,fileType){if(arguments.length>0){;
if(id<=0){width=0;height=0;timestamp="";volume=null;token=null;};;;;;this.id=id;this.width=width;this.height=height;this.timestamp=timestamp;this.volume=volume;this.token=token;
this.fileType=fileType==null?null:fileType;this._mapper=null;this.postSerialize();}else{this.timestamp="";this.fileType=".jpg";this._mapper=null;}}zf_BasicImage.Photo="p";zf_BasicImage.UserFile="f";
zf_BasicImage.prototype.postSerialize=function(){if(this.volume!=null)this._mapper=new zf_VolumeMapper(this.volume);};zf_BasicImage.prototype.getScaledSize=function(method){var cx=this.width;
var cy=this.height;var size=null;if(method.code==undefined){size=method;method=null;}if(cx!=0&&cy!=0){if(method!=null){if(method==zf_ProcessingMethod.WatermarkThumbnail||method==zf_ProcessingMethod.WatermarkSmallThumbnail||method==zf_ProcessingMethod.LogoSmallThumbnail||method==zf_ProcessingMethod.LogoCompactThumbnail||method==zf_ProcessingMethod.LogoLargeThumbnail){return{cx:method.cx,
cy:method.cy};}if(zf_ProcessingMethod.isClipped(method)){var base=this.getScaledSize(zf_ProcessingMethod.fromCode(method.code));if(method.stretch)base={cx:base.cx*10,
cy:base.cy*10};return{cx:Math.min(base.cx,method.cx),cy:Math.min(base.cy,method.cy)};}if(method===zf_ProcessingMethod.StandardSmallThumbnail||method===zf_ProcessingMethod.StandardMediumThumbnail){cx=cy=Math.min(this.width,
this.height);}}var width=(method||size).cx;var height=(method||size).cy;if(width<cx||height<cy){var ratio=width/cx;if(cy*ratio>height)ratio=height/cy;var bankersRound=function(x){var r=Math.round(x);
if(r%2==0||r==x)return r;var f=Math.floor(x);return x-f==0.5?f:r;};cx=Math.max(1,bankersRound(cx*ratio));cy=Math.max(1,bankersRound(cy*ratio));}}return{cx:cx,cy:cy};
};zf_BasicImage.getPhotoScaledSize=function(photoWidth,photoHeight,method){var cx=photoWidth;var cy=photoHeight;var size=null;if(method.code==undefined){size=method;method=null;
}if(cx!=0&&cy!=0){if(method!=null){if(method==zf_ProcessingMethod.WatermarkThumbnail||method==zf_ProcessingMethod.WatermarkSmallThumbnail||method==zf_ProcessingMethod.LogoSmallThumbnail||method==zf_ProcessingMethod.LogoLargeThumbnail){return{cx:method.cx,
cy:method.cy};}if(zf_ProcessingMethod.isClipped(method)){var base=zf_BasicImage.getPhotoScaledSize(width,height,zf_ProcessingMethod.fromCode(method.code));return{cx:Math.min(base.cx,
method.cx),cy:Math.min(base.cy,method.cy)};}if(method==zf_ProcessingMethod.StandardSmallThumbnail)cx=cy=Math.min(this.width,this.height);}var width=(method||size).cx;
var height=(method||size).cy;if(width<cx||height<cy){var ratio=width/cx;if(cy*ratio>height)ratio=height/cy;var bankersRound=function(x){var r=Math.round(x);if(r%2==0||r==x)return r;
var f=Math.floor(x);return x-f==0.5?f:r;};cx=Math.max(1,bankersRound(cx*ratio));cy=Math.max(1,bankersRound(cy*ratio));}}return{cx:cx,cy:cy};};;function zf_TemplateImage(id,
width,height,timestamp,volume,token){if(zf_stdNoArgs(arguments)){return;}zf_BasicImage.prototype.constructor.apply(this,arguments);this.page=null;this.cx=0;this.cy=0;
this.prevcx=0;this.prevcy=0;this._src="";this._img=new Image();}zf_TemplateImage.inherits(zf_BasicImage);zf_TemplateImage.prototype.load=function(src,onload,onerror,onreload){var oldsrc=this._img.src.replace('http://',
'').replace('https://','').replace(zf_currentHost,'');if(oldsrc!=src){this._img.onload=function(){onload(this.src);};this._img.onError=onerror;this._img.src=src;
}else if(typeof onreload==='function'){onreload();}};zf_TemplateImage.prototype.getScaledSize=function(size){var returnSize={cx:0,cy:0};if(size.cx>size.cy){returnSize.cy=size.cy;
returnSize.cx=this.width*(size.cy/this.height);}else{returnSize.cx=size.cx;returnSize.cy=this.height*(size.cx/this.width);}if(returnSize.cx>size.cx){returnSize.cy*=(size.cx/returnSize.cx);
returnSize.cx=size.cx;}else if(returnSize.cy>size.cy){returnSize.cx*=(size.cy/returnSize.cy);returnSize.cy=size.cy;}return returnSize;};;function zfp_TemplateProductCropper(id,
zoomslider,pageselector){;var self=this;zf_Control.prototype.constructor.call(this,id);this._zoomslider=zoomslider;this._pageselector=pageselector;this._nextKey=0;
this.type=8;this._footnotemask={watermark:1,foldline:2,margin:4};}zfp_TemplateProductCropper.inherits(zf_Control);zfp_TemplateProductCropper.MatchType={None:0,Exact:1,AspectRatio:2,Similar:3};zfp_TemplateProductCropper.prototype.init=function(frame){;
this._frame=frame;var self=this;this._nullImg=new Image();this._nullImg.src='/zf/img/null.gif';this._toolbar=new zf_Toolbar(this.id+'_toolbar');this._toolbar.init(this.$('.pc-tpc-toolbar'),
[new zf_ToolbarButton('action-change-photo',{text:'Change Photo',type:'image-text-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._changephoto_onclick)}}}),
new zf_ToolbarButton('action-change-layout',{text:'Change Layout',type:'image-text-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._changelayout_onclick)}}}),
new zf_ToolbarButton('action-margin',{text:'Margin',title:'Important parts of the image must be inside the red line',selected:true,events:{fastClick:{type:'fastClick',
handler:this.closure(this._margin_onclick)}}})]);this._zoomslider.init([new zf_ToolbarButton('action-centered',{groupclass:'cropper',text:'Center',title:'Centers the photo and fills the placeholder',
events:{fastClick:{type:'fastClick',handler:this.closure(this._auto_onclick)}}}),new zf_ToolbarButton('action-precisecrop',{groupclass:'precise',text:'Precise Crop',
title:'Switch to a view that allows for more precise cropping',type:'image-button',events:{fastClick:{type:'fastClick',handler:this.closure(this._simplecropper_onclick)}}}),
new zf_ToolbarButton('action-change-photo',{groupclass:'change-photo',text:'Change Photo',title:'Select a new photo for this placeholder',type:'image-text-button',
events:{fastClick:{type:'fastClick',handler:this.closure(this._changephoto_onclick)}}}),new zf_ToolbarButton('action-done',{groupclass:'done',text:'Done',type:'image-button',
corners:'right',events:{fastClick:{type:'fastClick',handler:this.closure(this._done_onclick)}}})],null,function(){self._zoomslider.getSlider().setPos(100);});this._pageselector.init();
this.$('.pc-tpc-arena, .pc-tpc-activeelement').click(function(){if(typeof self._templateActiveElement==='string'&&self._getElement(self._templateActiveElement).type==='Photo'){self.saveElement(null,
function(){self.deselectElement();});}});this.$('.pc-tpc-texteditor').click(function(e){e.stopPropagation();}).find('textarea').keypress(function(e){e.stopPropagation();
}).keydown(function(e){e.stopPropagation();}).keyup(function(e){e.stopPropagation();if(e.keyCode===27){self._revertActiveElement();self.$('.pc-tpc-texteditor textarea').val('');
self.deselectElement();}}).end().find('.pc-tpc-tecancel').click(function(){self._revertActiveElement();self.$('.pc-tpc-texteditor textarea').val('');self.deselectElement();
}).end().find('.pc-tpc-tesave').click(function(){var te=self.$('.pc-tpc-texteditor textarea');self.saveElement(te.val(),function(){te.val('');self.deselectElement();
});});this.$().mousedown(function(){self._alertmsg_hide();});this._zoomslider.getSlider().onchange=this.closure(this._slider_onchange);this._pageselector.onchange=this.closure(this._page_onclick);
this._mousemove=this.closure(this._photo_onmousemove);this._mouseup=this.closure(this._photo_onmouseup);this.$('.pc-tpc-activeinner').mousedown(this.closure(this._photo_onmousedown)).bind('touchstart touchmove touchend',
function(e){var touches=e.originalEvent.changedTouches,first=touches[0],type='';switch(e.type){case 'touchstart':type='mousedown';break;case 'touchmove':type='mousemove';
break;case 'touchend':type='mouseup';break;default:break;}e.preventDefault();e.stopPropagation();var simulatedEvent=document.createEvent('MouseEvent');simulatedEvent.initMouseEvent(type,
true,true,window,1,first.screenX,first.screenY,first.clientX,first.clientY,false,false,false,false,0,null);first.target.dispatchEvent(simulatedEvent);});};zfp_TemplateProductCropper.prototype.initUI=function(productMeta,
photos,customerPhotos,data,photoMap,colorConversion,initcallback,eventcallbacks){;;;;;this.clearTemplateImage();this._photos=photos;this._photoMap=photoMap;this._customerPhotos=customerPhotos;
this._productMeta=productMeta;this._data=data;this._preselectedPhotoElement=null;this._defaultCropping='centered';this._template=this._getTemplate(data.settings['selected-template'],
productMeta.getTemplateProductId(data.optionId));this._templatePage=this._getPageName(0);this._templatePhotoMap={};this._templateTextMap={};this._templateImage=null;
this._templateActiveElement=null;this._templateElementViewports={};this._templatePhotos={};this._templatePagePhotoElementCount=0;this._templateMarginOverlapEvaluated=false;
this._templateMarginOverlap=false;if(this._data.oldPages){this._oldPages=$.extend(true,{},this._data.oldPages);delete this._data.oldPages;}if(this._data.oldElements){this._oldElements=$.extend(true,
{},this._data.oldElements);delete this._data.oldElements;}var self=this,ownerid=typeof zf_ownerId!=="undefined"?zf_ownerId:this._getOwnerId(photoMap),page=this._getPage(this._templatePage);
this._footnote=0;this._templatesApi=new zft_TemplatesApi(ownerid,this._template.id,zf_stdGetCookie('zf_keyring'),zf_stdGetCookie('zf_5y_visitor'));this._frameService=new zfp_TemplateProductCropper.Frame(this.$('.pc-tpc-frame'));
this._loader=null;if(this._data.croppingReadOnly===true&&this._data.settings.cropping){this._defaultCropping=this._data.settings.cropping.replace('cropping-','');
}this._prompts={};if(this._rebuildPages()){this._reindexElements($.extend(true,[],this._photos),$.extend({},this._data.settings));}if(typeof data.photoIndex==='number'){var photoIndexData=this._getElementByIndex(data.photoIndex);
if(photoIndexData&&photoIndexData.page&&photoIndexData.element){this._templatePage=photoIndexData.page;this._preselectedPhotoElement=photoIndexData.element;}}this._initTemplatePhotos();
var btext='Change Photo';if(this._templatePagePhotoElementCount>1){btext='Change Photos';}this._toolbar.getButton('action-change-photo').setSetting('text',btext);
if((page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0)||(page.meta.gutterWidth&&page.meta.gutterWidth>0)){this._toolbar.selectButton('action-margin');
this._margin_toggle(true);}else{this.$('.pc-tpc-spill, .pc-tpc-gutter').removeClass('visible');}if(page.meta.pageGradient){this.$('.pc-tpc-gradient').attr('class',
'pc-tpc-gradient visible '+page.meta.pageGradient);}else{this.$('.pc-tpc-gradient').attr('class','pc-tpc-gradient');}this.$('.pc-tpc-boxes').show();if(!this._data.fromAltCropper&&(typeof this._data.id==='undefined'||this._data.resetDefaults)){this._validateSelectedPhotoResolutions();
this._setElementValues(this._oldPages,this._oldElements,$.extend(true,[],this._photos),$.extend({},this._data.settings));}this._oldPages=null;this._oldElements=null;
this._asyncKey={};this._nextKey={};if(this._data.settings['cropping']){this._data.settings['cropping']='cropping-manual';}this._originalColorConversion=data.settings['color-conversion'];
this._isReset=false;this._isResize=false;this._eventCallbacks=eventcallbacks;this.$().toggleClass('pc-cropper-ro',this._data.readOnly);if(data.error!=null){this.$('.pc-tpc-empty:first').text(data.error);
}if(this._template.pagecount>1){this._pageselector.initUI(this._template,ownerid,this._templatePhotoMap,this._templateTextMap,this._data.settings,function(){self._pageselector.selectPage(self._templatePage);
});}else{this._pageselector.hide();this.update(this._data,this.closure(this._render_elementboxes));}if(typeof initcallback==='function'){initcallback();}};zfp_TemplateProductCropper.prototype.update=function(data,
callback){var self=this,page=null,pageid=this._templatePage,p='';this._data=data;this._frameService.load(this._data.vendorId,this._data.productId,this._data.services);
if(typeof this._templatePage!='string'){this._templatePage=pageid=this._getPageName(0);}page=this._getPage(this._templatePage);if(this._templateImage===null||this._template.id!=this._templateImage.id||pageid!=this._templateImage.page||this._templateImage.width!==page.width||this._templateImage.height!==page.height){this._templateImage=new zf_TemplateImage(this._template.id,
page.width,page.height,new Date());this._templateImage.page=pageid;}for(var e in this._template.elements[pageid]){if(this._template.elements[pageid][e].type==='Image'){var zindex=1;
if(typeof this._template.elements[pageid][e].zindex==='number'){zindex+=this._template.elements[pageid][e].zindex;}this.$('.pc-tpc-photo-t').css('z-index',zindex);
break;}}for(p in this._template.pages){this._updateElementMaps(p,true);this._pageselector.updatePageIcon(p);}this._updateToolbar();this._checkPageFoldLines();if(page.meta.pageGradient){this.$('.pc-tpc-gradient').attr('class',
'pc-tpc-gradient visible '+page.meta.pageGradient);}else{this.$('.pc-tpc-gradient').attr('class','pc-tpc-gradient');}this._updateFootnote();if(typeof this._size==='object'){this.resize(this._size.cx,
this._size.cy,callback,true);}else if(typeof callback==='function'){callback();}this._isReset=false;};zfp_TemplateProductCropper.prototype.resize=function(cx,cy,callback,immediate){this._size={cx:cx,
cy:cy};this.$().width(cx).height(cy);if(typeof this._template!='object'||this._templateImage===null){return;}var self=this,page=this._getPage(this._templatePage);
this._arena={cx:cx-2,cy:cy-116};if(this._template.pagecount>1){this._arena.cy-=105;}this.$('.pc-tpc-arena:first').width(this._arena.cx).height(this._arena.cy);if(this._templateImage.prevcx===this._templateImage.cx||this._templateImage.prevcy===this._templateImage.cy||this._templateImage.prevcx===0||this._templateImage.prevcy===0){immediate=true;
}if(this._templateImage.cx>0||this._templateImage.cy>0){this._templateImage.prevcx=this._templateImage.cx;this._templateImage.prevcy=this._templateImage.cy;}var templateSize=this._templateImage.getScaledSize(this._arena);
templateSize.cx=Math.round(templateSize.cx);templateSize.cy=Math.round(templateSize.cy);if(this._frameService.visible){var product={cx:this._productMeta.sizeX,cy:this._productMeta.sizeY};
if((product.cx<product.cy)!=(templateSize.cx<templateSize.cy)){product={cx:product.cy,cy:product.cx};}var aspect=(product.cx+this._frameService.left+this._frameService.right-2*this._frameService.overlap)/(product.cy+this._frameService.top+this._frameService.bottom-2*this._frameService.overlap);
var frameSize=(aspect>(this._arena.cx/this._arena.cy))?{cx:this._arena.cx,cy:this._arena.cx/aspect}:{cx:this._arena.cy*aspect,cy:this._arena.cy};var ppi=frameSize.cx/(product.cx+this._frameService.left+this._frameService.right-2*this._frameService.overlap);
this._frameService.size={left:Math.round(ppi*this._frameService.left),top:Math.round(ppi*this._frameService.top),right:Math.round(ppi*this._frameService.right),bottom:Math.round(ppi*this._frameService.bottom),
overlap:Math.round(ppi*this._frameService.overlap),cx:frameSize.cx,cy:frameSize.cy};var src=this._frameService.editorMeta.getOverlayUri(this._data.productId,this._data.optionId,
this._data.settings,this._data.services);var hole={cx:Math.round(this._frameService.size.cx)-this._frameService.size.left-this._frameService.size.right,cy:Math.round(this._frameService.size.cy)-this._frameService.size.top-this._frameService.size.bottom};
src=zf_stdFormatString(src,this._frameService.size.left+';'+this._frameService.size.top+';'+this._frameService.size.right+';'+this._frameService.size.bottom,hole.cx,
hole.cy);src=zfp_Configurator.formatIconUrl(src);if(templateSize.cx>templateSize.cy){templateSize.cx=this._frameService.size.cx-(this._frameService.size.left+this._frameService.size.right);
templateSize.cx+=this._frameService.size.overlap*2;templateSize.cy=this._templateImage.height*(templateSize.cx/this._templateImage.width);}else{templateSize.cy=this._frameService.size.cy-(this._frameService.size.top+this._frameService.size.bottom);
templateSize.cy+=this._frameService.size.overlap*2;templateSize.cx=this._templateImage.width*(templateSize.cy/this._templateImage.height);}this.$('.pc-tpc-frame').width(this._frameService.size.cx).height(this._frameService.size.cy);
var frameRect=new zf_Rect((this._arena.cx-this._frameService.size.cx)/2,(this._arena.cy-this._frameService.size.cy)/2,this._frameService.size.cx,this._frameService.size.cy);
this._move('.pc-tpc-frame',frameRect);var resizeframedelay=150;if(immediate===true){resizeframedelay=0;}if(this._resizeFrameTimeout){clearTimeout(this._resizeFrameTimeout);
}this._resizeFrameTimeout=setTimeout(function(){self._frameService.addImg(src);},resizeframedelay);}else{this._frameService.reset();}this._templateImage.cx=templateSize.cx;
this._templateImage.cy=templateSize.cy;var fnwidth=templateSize.cx;if(this._frameService.visible){fnwidth=this._frameService.size.cx;}this.$('.pc-tpc-footnote').css('padding-right',
((this._arena.cx-fnwidth+8)/2)+'px');this._recalcElementViewports();this._recalcPhotoElements();if(!this._templateMarginOverlapEvaluated){this._templateMarginOverlap=this._isElementMarginOverlap();
this._templateMarginOverlapEvaluated=true;}this._updateToolbar();this.$('img.pc-tpc-photo-t, .pc-tpc-boxes, .pc-tpc-activeelement, .pc-tpc-background, .pc-tpc-photobox, .pc-tpc-gradient').width(this._templateImage.cx).height(this._templateImage.cy);
if(this._templateMarginOverlap&&page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0){var wrapX=this._templateImage.cx*(page.meta.wrapX||0),
wrapY=this._templateImage.cy*(page.meta.wrapY||0),spillX=(this._templateImage.cx*page.meta.spillX)+wrapX,spillY=(this._templateImage.cy*page.meta.spillY)+wrapY,spillWidth=Math.round(this._templateImage.cx-(2*spillX)),
spillHeight=Math.round(this._templateImage.cy-(2*spillY));this.$('.pc-tpc-spill').width(spillWidth).height(spillHeight).css('left',((this._arena.cx-spillWidth-2)/2)+'px').css('top',
((this._arena.cy-spillHeight-2)/2)+'px');}if(this._templateMarginOverlap&&page.meta.gutterWidth&&page.meta.gutterWidth>0){var gutterWidth=this._templateImage.cx*page.meta.gutterWidth,
gutterHeight=this._templateImage.cy;this.$('.pc-tpc-gutter').width(gutterWidth).height(gutterHeight).css('left',((this._arena.cx-gutterWidth-2)/2)+'px').css('top',
((this._arena.cy-this._templateImage.cy)/2)+'px');}var rect=this._relativeToArena(0,0,1,1);this._move('img.pc-tpc-photo-t, .pc-tpc-boxes, .pc-tpc-mask, .pc-tpc-activeelement, .pc-tpc-background, .pc-tpc-photobox, .pc-tpc-gradient',
rect);var te=this.$('.pc-tpc-texteditor');var teHeight=te.hasClass('large')?254:154;te.css('left',((this._arena.cx-404)/2)+'px').css('top',((this._arena.cy-teHeight)/2)+'px');
this.$('.pc-tpc-loading:not(.top-left)').width(this._templateImage.cx).height(rect.height/2);this.$('.pc-tpc-loading.top-left').width('auto').height('auto');this.$('.pc-tpc-loading').css('left',
rect.left+'px').css('top',rect.top+'px');this._positionElementBoxes();if(typeof this._templateActiveElement==='string'){this._positionActiveElement(this._templateActiveElement);
if(this._getElement(this._templateActiveElement).type==='Photo'&&this._templatePhotoMap[this._templatePage][this._templateActiveElement]){this._setPhotoPos();}}this._pageselector.resize(this._arena.cx);
var resizedelay=150;if(immediate===true){resizedelay=0;}if(this._resizeTimeout){clearTimeout(this._resizeTimeout);}this._resizeTimeout=setTimeout(this.closure(this._makeTemplateImageRequest,
true),resizedelay);if(typeof callback==='function'){callback();}};zfp_TemplateProductCropper.prototype._getOwnerId=function(photomap){var ownerid=0;for(var p in photomap){if(typeof photomap[p].owner==='object'){if(typeof photomap[p].owner.id==='number'){ownerid=photomap[p].owner.id;
break;}}}return ownerid;};zfp_TemplateProductCropper.prototype._initTemplatePhotos=function(){var p='',i=0,len=0;this._templatePhotos={};for(p in this._template.pages){this._templatePhotos[p]={};
len=this._template.elements[p].length;for(i=0;i<len;i++){if(this._template.elements[p][i].type==='Photo'){this._templatePhotos[p][this._template.elements[p][i].name]={zoom:null,
minzoom:null,maxzoom:null,size:null,x:0,y:0,origx:0,origy:0};}}}};zfp_TemplateProductCropper.prototype._makeTemplateImageRequest=function(spinner){var self=this,page=this._getPage(this._templatePage),
pageid=this._templatePage;if(spinner===true){this.$('.pc-tpc-loading').removeClass('hide');}if(this._templateImage){if(page.meta.hasAlternatives){pageid=this._getSavedPageAlternative(this._templatePage);
}this._templatesApi.registerRequest(this._templatesApi.createRequest(pageid,new zf_Size(this._templateImage.cx,this._templateImage.cy),this._templateActiveElement,
this._templatePhotoMap[this._templatePage],this._templateTextMap[this._templatePage]),function(url){self._templateImage.load(url,self.closure(self._templateOnLoad),
self._templateOnError,function(){self.$('.pc-tpc-loading').addClass('hide').addClass('top-left').width('auto').height('auto');if(this._templateActiveElement===null){self.$('.pc-tpc-photoviewport img.pc-tpc-photo').attr('src',
self._nullImg.src).removeClass('has-photo');}else{self.$('.pc-tpc-photoviewport img.pc-tpc-photo').addClass('has-photo');}self.$('.pc-tpc-photocopy').remove();});
});}};zfp_TemplateProductCropper.prototype._templateOnLoad=function(url){var photobox=this.$('.pc-tpc-photobox'),self=this,page=this._getPage(this._templatePage);if(this._templateActiveElement===null){photobox.hide();
photobox.find('.pc-tpc-photoviewport img.pc-tpc-photo').attr('src',this._nullImg.src);}else{this._toolbar.hide();photobox.show();}photobox.find('.pc-tpc-photocopy').remove();
this.$('.pc-tpc-boxes .pc-tpc-element').removeClass('loading');this._photo_onload('img.pc-tpc-photo-t',url,null,null,function(){self.$('.pc-tpc-loading').addClass('hide').addClass('top-left').width('auto').height('auto');
self.$('.pc-tpc-background').fadeIn(200);if(!self._data.readOnly&&typeof self._data.photoIndex!=='number'&&!self._data.fromAltCropper){if(self._prompts['clicktoedit']!=true){self._prompts['clicktoedit']=true;
self._alertmsg_fadein('Click a photo or text item below to edit');}}});if(((page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0)||(page.meta.gutterWidth&&page.meta.gutterWidth>0))&&this._templateMarginOverlap){this._margin_toggle(this._toolbar.getButton('action-margin').getSetting('selected'));
}else{this.$('.pc-tpc-spill, .pc-tpc-gutter').removeClass('visible');}if(this._preselectedPhotoElement!=null){if(this._getElement(this._preselectedPhotoElement)!=null){this.selectElement(this._preselectedPhotoElement);
}this._preselectedPhotoElement=null;}};zfp_TemplateProductCropper.prototype._templateOnError=function(){this._alertmsg_show('An error has occurred loading the template image');};zfp_TemplateProductCropper.prototype.getTemplate=function(){return this._template;
};zfp_TemplateProductCropper.prototype.clearTemplateImage=function(){this.$('.pc-tpc-photo-t').attr('src',this._nullImg.src);this._templateImage=null;this.$('.pc-tpc-background').removeClass('photo-here');
this.$('.pc-tpc-loading').removeClass('top-left');};zfp_TemplateProductCropper.prototype.getTemplatePage=function(){return this._templatePage;};zfp_TemplateProductCropper.prototype.getToolbar=function(){return this._toolbar;
};zfp_TemplateProductCropper.prototype._getTemplate=function(templateid,templateproductid){var i=0,templates=this._data.pricing.findTemplates(templateproductid),template=null;return $.first(templates,
function(template){return template.id===templateid;}).value;};zfp_TemplateProductCropper.prototype._getElement=function(name,page){var element=null,pageName=page;if(typeof pageName!='string'&&typeof this._templatePage==='string'){pageName=this._templatePage;
}if(this._template!=null&&typeof pageName==='string'){var i=0;for(i=0;i<this._template.elements[pageName].length;i++){if(this._template.elements[pageName][i].name===name){element=this._template.elements[pageName][i];
break;}}}return element;};zfp_TemplateProductCropper.prototype._getElementByIndex=function(index){var returnData={page:null,element:null};pageloop:for(var p in this._template.pages){for(var e in this._template.elements[p]){var element=this._template.elements[p][e];
if(element.type==='Photo'){if(element.imageIndex===index){returnData.page=p;returnData.element=element.name;break pageloop;}}}}return returnData;};zfp_TemplateProductCropper.prototype.getPhoto=function(imageIndex,
photos,splice){var photo=null,photoarray=photos||this._photos,len=photoarray.length;for(var i=0;i<photoarray.length;i++){if(photoarray[i].index===imageIndex){if(splice){photo=photoarray.splice(i,
1);}else{photo=photoarray[i];}break;}}return photo;};zfp_TemplateProductCropper.prototype.deletePhoto=function(imageIndex,photos,splice){var photo=null,photoarray=photos||this._photos,len=photoarray.length;
for(var i=0;i<photoarray.length;i++){if(photoarray[i].index===imageIndex){photoarray.splice(i,1);break;}}return photo;};zfp_TemplateProductCropper.prototype._setPhoto=function(protophoto){var found=false;
for(var i=0;i<this._photos.length;i++){if(this._photos[i].index===protophoto.index){this._photos[i]=protophoto;found=true;break;}}if(!found){this._photos.push(protophoto);
}};zfp_TemplateProductCropper.prototype.fadeOut=function(callback){this.$('.pc-tpc-arena').fadeOut(200,callback);};zfp_TemplateProductCropper.prototype.fadeIn=function(callback){this.$('.pc-tpc-arena').fadeIn(200,
callback);};zfp_TemplateProductCropper.prototype.show=function(callback){this.$('.pc-tpc-arena').show(0,callback);};zfp_TemplateProductCropper.prototype.hide=function(callback){this.$('.pc-tpc-arena').hide(0,callback);
};zfp_TemplateProductCropper.prototype._relativeToArena=function(left,top,width,height){if(arguments.length===1){var rect=left;left=rect.left;top=rect.top;width=rect.width;height=rect.height;
}left*=this._templateImage.cx;top*=this._templateImage.cy;width*=this._templateImage.cx;height*=this._templateImage.cy;return new zf_Rect((this._arena.cx-this._templateImage.cx)/2+left,
(this._arena.cy-this._templateImage.cy)/2+top,width,height);};zfp_TemplateProductCropper.prototype._arenaToRelative=function(left,top,width,height){if(arguments.length===1){var rect=left;
left=rect.left;top=rect.top;width=rect.width;height=rect.height;}left-=(this._arena.cx-this._image.cx)/2;top-=(this._arena.cy-this._image.cy)/2;return new zf_Rect(left/this._image.cx,
top/this._image.cy,width/this._image.cx,height/this._image.cy);};zfp_TemplateProductCropper.prototype._setPhotoPos=function(x,y,options){var update=typeof x==='number'&&typeof y==='number';
var element=this._getElement(this._templateActiveElement);var viewport=$.extend({},this._templateElementViewports[this._templateActiveElement]);viewport.left=0;viewport.top=0;
if(typeof x==='undefined'){x=this._templatePhotos[this._templatePage][element.name].x||0;}if(typeof y==='undefined'){y=this._templatePhotos[this._templatePage][element.name].y||0;
}var zoom=this._templatePhotos[this._templatePage][element.name].zoom;var protophoto=this.getPhoto(element.imageIndex);var width=(this._templatePhotos[this._templatePage][element.name].size.cx||0)*zoom;
var height=(this._templatePhotos[this._templatePage][element.name].size.cy||0)*zoom;var left=viewport.x+x-(width/2);var top=viewport.y+y-(height/2);var imgMargin=10;
if(left+width<viewport.left+imgMargin){left=viewport.left+imgMargin-width;}if(top+height<viewport.top+imgMargin){top=viewport.top+imgMargin-height;}if(left+imgMargin>=viewport.left+viewport.width){left=viewport.left+viewport.width-imgMargin;
}if(top+imgMargin>=viewport.top+viewport.height){top=viewport.top+viewport.height-imgMargin;}var snapHorz=false;var snapVert=false;var snapZoom=false;var lockZoom=false;
if(options!=null){snapHorz=!!options.snapHorz;snapVert=!!options.snapVert;snapZoom=!!options.snapZoom;}var snapDelta;if(snapZoom){snapDelta=10;if(Math.abs(left-viewport.left)<=snapDelta){zoom=(viewport.width+2*x)/this._templatePhotos[this._templatePage][element.name].size.cx;
}if(Math.abs(left+width-viewport.left-viewport.width)<=snapDelta){zoom=(viewport.width-2*x)/this._templatePhotos[this._templatePage][element.name].size.cx;}if(Math.abs(top-viewport.top)<=snapDelta){zoom=(viewport.height+2*y)/this._templatePhotos[this._templatePage][element.name].size.cy;
}if(Math.abs(top+height-viewport.top-viewport.height)<=snapDelta){zoom=(viewport.height-2*y)/this._templatePhotos[this._templatePage][element.name].size.cy;}zoom=Math.min(Math.max(zoom,
this._templatePhotos[this._templatePage][element.name].minzoom),this._templatePhotos[this._templatePage][element.name].maxzoom);if(zoom!=this._templatePhotos[this._templatePage][element.name].zoom){x=x/this._templatePhotos[this._templatePage][element.name].zoom*zoom;
y=y/this._templatePhotos[element.name].zoom*zoom;width=this._templatePhotos[this._templatePage][element.name].size.cx*zoom;height=this._templatePhotos[this._templatePage][element.name].size.cy*zoom;
left=viewport.x+x-width/2;top=viewport.y+y-height/2;this._templatePhotos[this._templatePage][element.name].zoom=zoom;lockZoom=true;}}if(snapHorz){snapDelta=7;if(Math.abs(left-viewport.left)<=snapDelta){left=viewport.left;
}if(Math.abs(left+width-viewport.left-viewport.width)<=snapDelta){left=viewport.left+viewport.width-width;}}if(snapVert){snapDelta=7;if(Math.abs(top-viewport.top)<=snapDelta){top=viewport.top;
}if(Math.abs(top+height-viewport.top-viewport.height)<=snapDelta){top=viewport.top+viewport.height-height;}}this._templatePhotos[this._templatePage][element.name].x=left+(width/2)-viewport.x;
this._templatePhotos[this._templatePage][element.name].y=top+(height/2)-viewport.y;if(update){var r_top=Math.round(top*-1)/Math.round(height);var r_left=Math.round(left*-1)/Math.round(width);
var r_width=Math.round(viewport.width)/Math.round(width);var r_height=Math.round(viewport.height)/Math.round(height);var crop=new zf_Rect(r_left,r_top,r_width,r_height);
protophoto.cropping=crop;}var photo=this.$('.pc-tpc-photobox .pc-tpc-photoviewport img.pc-tpc-photo');if(lockZoom&&Math.abs(width-photo.width())<2&&Math.abs(height-photo.height())<2){return;
}this._move(photo,left,top,width,height);};zfp_TemplateProductCropper.prototype._slider_onchange=function(pos){pos/=100;var element=this._getElement(this._templateActiveElement);var zoom=this._templatePhotos[this._templatePage][element.name].minzoom+(Math.exp(pos*Math.LN2)-1)*(this._templatePhotos[this._templatePage][element.name].maxzoom-this._templatePhotos[this._templatePage][element.name].minzoom);
var x=this._templatePhotos[this._templatePage][element.name].x/this._templatePhotos[this._templatePage][element.name].zoom;var y=this._templatePhotos[this._templatePage][element.name].y/this._templatePhotos[this._templatePage][element.name].zoom;
this._templatePhotos[this._templatePage][element.name].zoom=zoom;this._setPhotoPos(x*zoom,y*zoom);if(this._zoomTimeout){clearTimeout(this._zoomTimeout);}this._zoomTimeout=setTimeout(this.closure(this._loadElementPhoto,
this._templateActiveElement),150);};zfp_TemplateProductCropper.prototype._move=function(elem,left,top,width,height,units){;if(!(elem instanceof jQuery)){elem=this.$(elem);}var unit='px';if(typeof units==='string'){unit=units;
}if(arguments.length==2){var rect=left;left=rect.left;top=rect.top;width=rect.width;height=rect.height;}return elem.css('left',(left)+unit).css('top',(top)+unit).width((width)+unit).height((height)+unit);
};zfp_TemplateProductCropper.prototype._render_elementboxes=function(){if(this._template!=null&&this._templatePage!=null){var html=[],i=0,ratio=this._templateImage.cx/this._templateImage.width,
pageid=this._templatePage;for(i=0;i<this._template.elements[pageid].length;i++){if(this._template.elements[pageid][i].type==='Text'||this._template.elements[pageid][i].type==='Photo'){var eTop=(this._template.elements[pageid][i].y*ratio);
var eLeft=(this._template.elements[pageid][i].x*ratio);var eWidth=(this._template.elements[pageid][i].width*ratio)-6;var eHeight=(this._template.elements[pageid][i].height*ratio)-6;
var eZindex=201+this._template.elements[pageid][i].zindex;html.push('<div class="pc-tpc-element" id="element-',this._template.elements[pageid][i].name,'"','style="width:',
eWidth,'px;height:',eHeight,'px;','left:',eLeft,'px;top:',eTop,'px;z-index:',eZindex,';">&nbsp;</div>');}}var boxParent=this.$('.pc-tpc-boxes'),self=this;boxParent.html(html.join(''));
if(!this._data.readOnly){this._initDrop();}boxParent.find('.pc-tpc-element').mouseover(function(){$(this).addClass('hover');}).mouseout(function(){$(this).removeClass('hover');
}).click(function(e){e.stopPropagation();var id=$(this).removeClass('hover').attr('id').replace('element-','');self.selectElement(id,function(){self.$('.pc-tpc-activeelement .pc-tpc-activeinner textarea').focus();
});});}};zfp_TemplateProductCropper.prototype._recalcElementViewports=function(){if(this._template!=null&&this._templatePage!=null){var ratio=this._templateImage.cx/this._templateImage.width,
pageid=this._templatePage;for(var i=0;i<this._template.elements[pageid].length;i++){var element=this._template.elements[pageid][i];if(element.type==='Text'||element.type==='Photo'){var eTop=Math.floor(element.y*ratio);
var eLeft=Math.floor(element.x*ratio);var eWidth=Math.ceil(element.width*ratio);var eHeight=Math.ceil(element.height*ratio);this._templateElementViewports[element.name]={top:eTop,
left:eLeft,width:eWidth,height:eHeight,x:eWidth/2,y:eHeight/2};}}}};zfp_TemplateProductCropper.prototype._recalcPhotoElements=function(){var scale=1,pageid=this._templatePage;if(this._templateImage.prevcx>0){scale=this._templateImage.cx/this._templateImage.prevcx;
}for(var i=0;i<this._template.elements[pageid].length;i++){var element=this._template.elements[pageid][i];if(element.type==='Photo'){var protophoto=this.getPhoto(element.imageIndex);
if(protophoto===null||!this._templatePhotos[pageid][element.name].size){continue;}this._templatePhotos[pageid][element.name].size.cx*=scale;this._templatePhotos[pageid][element.name].size.cy*=scale;
this._templatePhotos[pageid][element.name].x*=scale;this._templatePhotos[pageid][element.name].y*=scale;}}};zfp_TemplateProductCropper.prototype._positionElementBoxes=function(){var pageid=this._templatePage;
for(var i=0;i<this._template.elements[pageid].length;i++){var element=this._template.elements[pageid][i];if(element.type==='Text'||element.type==='Photo'){var vp=this._templateElementViewports[element.name];
this.$('#element-'+element.name).width(vp.width-6).height(vp.height-6).css('top',(vp.top)+'px').css('left',(vp.left)+'px');}}};zfp_TemplateProductCropper.prototype._positionActiveElement=function(name){if(typeof name==='string'){var activeBox=this.$('.pc-tpc-activeelement .pc-tpc-activeinner'),
viewport=$.extend({},this._templateElementViewports[name]),border={},vp={},element=this._getElement(name);if(element.type==='Text'){viewport.width=0;viewport.height=0;
viewport.top=this._templateImage.cy/2;viewport.left=this._templateImage.cx/2;}border.top=viewport.top;border.bottom=this._templateImage.cy-viewport.height-viewport.top;
border.left=viewport.left;border.right=this._templateImage.cx-viewport.width-viewport.left;viewport.left=viewport.left;viewport.top=viewport.top;viewport.right=viewport.right;
viewport.bottom=viewport.bottom;if(element.type==='Photo'&&!this._data.readOnly){var zswidth=this._zoomslider.getWidth(false),top=Math.ceil((this._arena.cy-this._templateImage.cy)/2)+viewport.top-this._zoomslider.getHeight(true)-11,
left=Math.ceil((this._arena.cx-this._templateImage.cx)/2)+viewport.left-Math.ceil(zswidth/2)+Math.ceil(viewport.width/2),offset=this.$('.pc-tpc-arena').offset();
offset.top-=$('body').scrollTop()||0;offset.left-=$('body').scrollLeft()||0;if(left<0){this._zoomslider.getCarrot().css('background-position',((zswidth/2)+left)+'px top');
left=0;}else if((left+zswidth)>=this._arena.cx){this._zoomslider.getCarrot().css('background-position',((zswidth/2)-(this._arena.cx-(left+zswidth)))+'px top');left=this._arena.cx-zswidth;
}else{this._zoomslider.getCarrot().css('background-position','center top');}top+=offset.top;left+=offset.left;this._zoomslider.setPos(top,left);this._zoomslider.fadeIn();
}this.$('.pc-tpc-mask').width(viewport.width).height(viewport.height).css('border-top-width',border.top+1+'px').css('border-right-width',border.right+1+'px').css('border-bottom-width',
border.bottom+1+'px').css('border-left-width',border.left+1+'px');activeBox.width(viewport.width+1).height(viewport.height+1).css('top',viewport.top+'px').css('left',
viewport.left+'px');this.$('.pc-tpc-photoviewport').width((viewport.width)).height((viewport.height)).css('top',(viewport.top)+'px').css('left',(viewport.left)+'px');
}};zfp_TemplateProductCropper.prototype.selectElement=function(id,callback){this._templateActiveElement=id;var activeBox=this.$('.pc-tpc-activeelement .pc-tpc-activeinner'),editor=this.$('.pc-tpc-texteditor'),
element=this._getElement(id),html=[];this.$('.pc-tpc-photoviewport img.pc-tpc-photo').attr('src',this._nullImg.src);if(element.type==='Text'&&!this._data.readOnly){var val=typeof this._data.settings[element.name]==='string'?zf_stdHtmlDecode(this._data.settings[element.name]):zf_stdHtmlDecode(element.placeholder),
css=[];editor.find('.pc-tpc-teheader').text('Type your: '+element.label);if(this._templateElementViewports[id].height/this._templateImage.cy>0.15){editor.addClass('large');
}else{editor.removeClass('large');}var teHeight=editor.hasClass('large')?254:154;editor.css('left',((this._arena.cx-404)/2)+'px').css('top',((this._arena.cy-teHeight)/2)+'px');
editor.find('textarea').val(val);}else if(element.type==='Photo'){this._loadElementPhoto(id,true);var protophoto=this.getPhoto(element.imageIndex);if(protophoto){this._resetPhotoData=$.extend({},
protophoto);this._resetPhotoTemplateData=$.extend({},this._templatePhotos[this._templatePage][element.name]);}else{this._resetPhotoData=null;this._resetPhotoTemplateData=null;
}this._makeTemplateImageRequest();var zindex=element.zindex+1;this.$('.pc-tpc-photobox').css('z-index',zindex).show();if(!this._data.readOnly&&protophoto===null){this._changephoto_onclick(true);
}}activeBox.html(html.join(''));this._toolbar.hide();this._positionActiveElement(id);this.$('.pc-tpc-boxes').hide();if(element.type==='Text'&&!this._data.readOnly){this.$('.pc-tpc-mask, .pc-tpc-texteditor').fadeIn(100,
function(){$(this).show();editor.find('textarea').focus();});}else if(element.type==='Photo'){activeBox.click(function(e){e.stopPropagation();});this.$('.pc-tpc-mask, .pc-tpc-activeelement').fadeIn(100,
function(){$(this).show();});}if(typeof this.onelementselect==='function'){this.onelementselect(id);}if(typeof callback==='function'){callback();}};zfp_TemplateProductCropper.prototype.saveElement=function(value,
callback){if(typeof this._templateActiveElement==='string'){this._saveActiveElement(value,callback);}else if(typeof callback==='function'){callback();}};zfp_TemplateProductCropper.prototype.deselectElement=function(ondeselect,
callback){var callDeselect=true,page=this._getPage(this._templatePage);if(typeof ondeselect==='boolean'){callDeselect=ondeselect;}else if(typeof ondeselect==='function'){callback=ondeselect;
}this._templateActiveElement=null;this.$('.pc-tpc-boxes').show();this.$('.pc-tpc-mask').css('border-width',0);this.$('.pc-tpc-mask, .pc-tpc-activeelement, .pc-tpc-texteditor').hide();
this._zoomslider.hide();this.$('.pc-tpc-info').removeClass('top');this._updateToolbar();this.setActiveElementVal('');this.$('.pc-tpc-background').removeClass('photo-here');
this.$('.pc-tpc-photoviewport.has-photo').clone().removeClass('pc-tpc-photoviewport').removeClass('has-photo').addClass('pc-tpc-photocopy').appendTo('.pc-tpc-photobox');
if(callDeselect&&typeof this.onelementdeselect==='function'){this.onelementdeselect();}if(typeof callback==='function'){callback();}};zfp_TemplateProductCropper.prototype._saveActiveElement=function(value,
callback){if(typeof this._templateActiveElement==='string'){var element=this._getElement(this._templateActiveElement);if(typeof value==='string'){if(typeof this.onelementchange==='function'){this.onelementchange(value);
}this._data.settings[element.name]=value;}this._templateActiveElement=null;this.update(this._data,callback);}else if(typeof callback==='function'){callback();}};
zfp_TemplateProductCropper.prototype.setActiveElementVal=function(value){if(this._templateActiveElement){this.$('.pc-tpc-texteditor textarea').val(value);}};zfp_TemplateProductCropper.prototype.getActiveElementVal=function(value){var retVal=null;
if(this._templateActiveElement&&this._getElement(this._templateActiveElement).type==='Text'){retVal=this.$('.pc-tpc-texteditor textarea').val();}return retVal;};
zfp_TemplateProductCropper.prototype._setElementValues=function(oldPages,oldElements,oldPhotos,oldSettings,pageid){var p='',page='',element=null,len=0,i=0,match=null,photo={};if(this._template&&this._template.elements){if(oldPages&&oldElements&&oldPhotos&&oldSettings){this._photos=[];
for(p in this._data.settings){if(p.match(/text[0-9]+/i)){this._data.settings[p]=null;}}for(page in oldPages){if(!this._template.pages[page]){continue;}len=oldElements[page].length;
for(i=0;i<len;i++){if(oldElements[page][i].type==='Photo'){photo=this.getPhoto(oldElements[page][i].imageIndex,oldPhotos);if(photo){match=this._findReplacementElement(oldElements[page][i],
this._template.elements[page],photo);if(match.type>zfp_TemplateProductCropper.MatchType.None&&typeof match.index==='number'&&match.index>=0){var pcrop=$.extend({},
photo.cropping);if(match.type>zfp_TemplateProductCropper.MatchType.AspectRatio){pcrop=this._calcCenteredCropping(photo,this._template.elements[page][match.index]);
}var newProtoPhoto={cropping:pcrop,height:photo.height,id:photo.id,index:this._template.elements[page][match.index].imageIndex,width:photo.width,video:photo.video};
this._setPhoto(newProtoPhoto);}}}else if(oldElements[page][i].type==='Text'){if(oldSettings[oldElements[page][i].name]){match=this._findReplacementElement(oldElements[page][i],
this._template.elements[page]);if(match.type>zfp_TemplateProductCropper.MatchType.None&&typeof match.index==='number'&&match.index>=0){this._data.settings[this._template.elements[page][match.index].name]=oldSettings[oldElements[page][i].name];
}}}}}}else{for(page in this._template.pages){len=this._template.elements[page].length;for(i=0;i<len;i++){element=this._template.elements[page][i];if(element.type==='Photo'){photo=this.getPhoto(element.imageIndex);
if(photo!=null){photo.cropping=this._calcDefaultCropping(photo,element);this._setPhoto(photo);}}else if(element.type==='Text'&&this._data.settings[element.name]===null){this._data.settings[element.name]=element.placeholder;
}}}}}};zfp_TemplateProductCropper.prototype._revertActiveElement=function(){if(typeof this._templateActiveElement==='string'){var val=this._data.settings[this._templateActiveElement];if(typeof val!='string'){val=this._getElement(this._templateActiveElement).placeholder;
}if(typeof this.onelementchange==='function'){this.onelementchange(val);}}};zfp_TemplateProductCropper.prototype._validateSelectedPhotoResolutions=function(){if(!this._data.enforceResolution){return;
}var smallPhotos=[],filledElements={},i=0,x=0,element=null;for(i=0;i<this._photos.length;i++){var photo=this._photos[i];var elementData=this._getElementByIndex(photo.index);
if(elementData.page!=null&&elementData.element!=null){element=this._getElement(elementData.element,elementData.page);if(photo.width<element.minimumResolution.width||photo.height<element.minimumResolution.height){smallPhotos.push(photo);
}else{filledElements[elementData.element]=true;}}}for(i=0;i<smallPhotos.length;i++){var replaced=false;pageloop:for(var p in this._template.pages){for(var e in this._template.elements[p]){element=this._template.elements[p][e];
if(element.type==='Photo'&&!filledElements[element.name]&&smallPhotos[i].width>=element.minimumResolution.width&&smallPhotos[i].height>=element.minimumResolution.height){smallPhotos[i].index=element.imageIndex;
filledElements[element.name]=true;replaced=true;break pageloop;}}}if(!replaced){for(x=0;x<this._photos.length;x++){if(this._photos[x].id===smallPhotos[i].id){this._photos.splice(x,
1);break;}}}}};zfp_TemplateProductCropper.prototype._updateElementMaps=function(pageid,updateui){if(typeof pageid!=='string'){pageid=this._templatePage;}if(pageid===this._templatePage){this._templatePagePhotoElementCount=0;
}var hasWatermarks=false,page=this._getPage(pageid),i=0,len=0;if(this._template&&pageid){this._templatePhotoMap[pageid]={};this._templateTextMap[pageid]={};len=this._template.elements[pageid].length;
for(i=0;i<len;i++){var element=this._template.elements[pageid][i];if(element.type==='Text'){var val=this._data.settings[element.name];if(typeof val!='string'){val=element.placeholder;
}this._templateTextMap[pageid][element.originalname||element.name]=new zft_TextParam(val);}else if(element.type==='Photo'){var protophoto=this.getPhoto(element.imageIndex);
if(pageid===this._templatePage){this._templatePagePhotoElementCount++;}if(protophoto===null){continue;}var photo=this._photoMap[protophoto.id];if(!photo){this.deletePhoto(element.imageIndex);
continue;}if(photo.watermarkId>0){hasWatermarks=true;}this._templatePhotoMap[pageid][element.name]=new zft_PhotoParam(photo.id,photo.token,protophoto.cropping,zft_RotateFlipFlags.None);
}}}if(updateui&&pageid===this._templatePage){if(this._templatePagePhotoElementCount>0){var btext='Change Photo';if(this._templatePagePhotoElementCount>1){btext='Change Photos';
}this._toolbar.getButton('action-change-photo').setSetting('text',btext);}this._updateToolbar();if(hasWatermarks){this._footnote|=this._footnotemask.watermark;}else{this._footnote&=~this._footnotemask.watermark;
}}};zfp_TemplateProductCropper.prototype.updateMarkedPhotos=function(){var p='',e='',i=0,len=this._photos.length,found=false;if(this.unmarkallphotos){this.unmarkallphotos();}for(i=0;i<len;
i++){found=false;templatePages:for(p in this._template.pages){for(e in this._template.elements[p]){if(this._template.elements[p][e].type==='Photo'&&this._template.elements[p][e].imageIndex===this._photos[i].index){found=true;
break templatePages;}}}if(found&&this.onupdatemarkedphoto){this.onupdatemarkedphoto(this._photos[i].id,true);}else if(!found&&this.onupdatemarkedphoto){this.onupdatemarkedphoto(this._photos[i].id,
false);}}};zfp_TemplateProductCropper.prototype._checkPageFoldLines=function(){if(this._getPage(this._templatePage).meta.hasPageSeparator){this._footnote|=this._footnotemask.foldline;}else{this._footnote&=~this._footnotemask.foldline;
}};zfp_TemplateProductCropper.prototype._updateFootnote=function(){var msg='',jointxt='',msgItems=[];if(this._footnote&this._footnotemask.watermark){msgItems.push('watermarks');}if(this._footnote&this._footnotemask.foldline){msgItems.push('fold lines');
}if(this._footnote&this._footnotemask.margin){msgItems.push('margin lines');}if(msgItems.length>=1){msgItems[0]=msgItems[0].substring(0,1).toUpperCase()+msgItems[0].substring(1);
}if(msgItems.length===2){jointxt=' and ';}else if(msgItems.length>2){jointxt=', ';msgItems[msgItems.length-1]='and '+msgItems[msgItems.length-1];}this.$('.pc-tpc-footnote').find('span').html(zf_stdFormatString('* {0} will not be printed',
msgItems.join(jointxt))).end().toggleClass('show',(this._footnote!==0));};zfp_TemplateProductCropper.prototype._page_onclick=function(pageid){this.deselectElement();this.$('.pc-tpc-loading').removeClass('top-left').removeClass('hide');
this.clearTemplateImage();this._templatePage=pageid;this._templateMarginOverlapEvaluated=false;this._margin_toggle(false);this.update(this._data,this.closure(this._render_elementboxes));
if(typeof this.onpagechange==='function'){this.onpagechange(this._template,this._templatePage,this,this._data);}};zfp_TemplateProductCropper.prototype._photo_onload=function(element,url,key,
keyindex,callback){if(key&&keyindex&&key!=this._asyncKey[keyindex]){return;}else{if(keyindex){this._asyncKey[keyindex]=null;}var img=this.$(element);if(img.attr('src')!=url){img.attr('src',
url);}}if(typeof callback==='function'){callback();}};zfp_TemplateProductCropper.prototype._auto_onclick=function(node){var element=this._getElement(this._templateActiveElement);var protophoto=this.getPhoto(element.imageIndex);
if(protophoto){var photo=this._photoMap[protophoto.id];var rect=this._calcCenteredCropping(photo,element);var newProtoPhoto={cropping:rect,height:photo.height,id:photo.id,
index:element.imageIndex,width:photo.width,video:photo.video};this._setPhoto(newProtoPhoto);this._templatePhotos[this._templatePage][element.name].x=0;this._templatePhotos[this._templatePage][element.name].y=0;
this._templatePhotos[this._templatePage][element.name].zoom=null;this._initPhoto(this.closure(this._loadElementPhoto,this._templateActiveElement));}};zfp_TemplateProductCropper.prototype._fit_onclick=function(){var element=this._getElement(this._templateActiveElement);
var protophoto=this.getPhoto(element.imageIndex);if(protophoto){var photo=this._photoMap[protophoto.id];var rect=this._calcFitCropping(photo,element);var newProtoPhoto={cropping:rect,
height:photo.height,id:photo.id,index:element.imageIndex,width:photo.width,video:photo.video};this._setPhoto(newProtoPhoto);this._templatePhotos[this._templatePage][element.name].x=0;
this._templatePhotos[this._templatePage][element.name].y=0;this._templatePhotos[this._templatePage][element.name].zoom=null;this._initPhoto(this.closure(this._loadElementPhoto,
this._templateActiveElement));}};zfp_TemplateProductCropper.prototype._reset_onclick=function(){var element=this._getElement(this._templateActiveElement);if(element.type==='Photo'){if(this._resetPhotoData&&this._resetPhotoTemplateData){this._setPhoto($.extend({},
this._resetPhotoData));this._templatePhotos[this._templatePage][element.name]=$.extend({},this._resetPhotoTemplateData);this._initPhoto();}}};zfp_TemplateProductCropper.prototype._done_onclick=function(){if(typeof this._templateActiveElement==='string'){var self=this;
this._saveActiveElement(self.getActiveElementVal(),function(){self.deselectElement();});}};zfp_TemplateProductCropper.prototype._changephoto_onclick=function(noHide){this._toolbar.toggleButton('action-change-photo');
if(typeof this.onchangephoto==='function'){this.onchangephoto(noHide);}};zfp_TemplateProductCropper.prototype._changelayout_onclick=function(){this._toolbar.toggleButton('action-change-layout');
if(typeof this.onchangelayout==='function'){this.onchangelayout();}};zfp_TemplateProductCropper.prototype._margin_onclick=function(){this._toolbar.toggleButton('action-margin');this._margin_toggle(this._toolbar.getButton('action-margin').getSetting('selected'));
};zfp_TemplateProductCropper.prototype._margin_toggle=function(show){if(show){var page=this._getPage(this._templatePage);if(page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0){this.$('.pc-tpc-spill').addClass('visible');
}if(page.meta.gutterWidth&&page.meta.gutterWidth>0){this.$('.pc-tpc-gutter').addClass('visible');}this._footnote|=this._footnotemask.margin;}else{this.$('.pc-tpc-spill, .pc-tpc-gutter').removeClass('visible');
this._footnote&=~this._footnotemask.margin;}this._updateFootnote();};zfp_TemplateProductCropper.prototype._photo_onmousedown=function(e){if(!zf_stdIsLeftButton(e)){return;}var element=this._getElement(this._templateActiveElement);
if(this._data.readOnly||element.type==='Text'){return;}e.preventDefault();e.stopPropagation();var node=e.currentTarget;if(document.addEventListener){document.addEventListener('mousemove',
this._mousemove,true);document.addEventListener('mouseup',this._mouseup,true);document.addEventListener('selectstart',zf_stdFalse,true);}else if(node.setCapture){$(node).mousemove(this._mousemove).mouseup(this._mouseup).bind('selectstart',
zf_stdFalse);node.setCapture();}node=null;this._anchorX=e.pageX;this._anchorY=e.pageY;this._anchorPhotoX=this._templatePhotos[this._templatePage][element.name].x;
this._anchorPhotoY=this._templatePhotos[this._templatePage][element.name].y;};zfp_TemplateProductCropper.prototype._photo_onmouseup=function(e){e.preventDefault();e.stopPropagation();this._photo_onmousemove(e);
var node=this.$('.pc-tpc-activeinner')[0];if(document.removeEventListener){document.removeEventListener('mousemove',this._mousemove,true);document.removeEventListener('mouseup',
this._mouseup,true);document.removeEventListener('selectstart',zf_stdFalse,true);}else if(node.releaseCapture){node.releaseCapture();$(node).unbind('mousemove mouseup selectstart');
}};zfp_TemplateProductCropper.prototype._photo_onmousemove=function(e){var canSnap=!(e.ctrlKey||e.metaKey);var element=this._getElement(this._templateActiveElement);if(this.getPhoto(element.imageIndex)!=null){this._setPhotoPos(this._anchorPhotoX+e.pageX-this._anchorX,
this._anchorPhotoY+e.pageY-this._anchorY,{snapHorz:canSnap,snapVert:canSnap});}};zfp_TemplateProductCropper.prototype._initDrop=function(){var self=this;this.$('.pc-tpc-element[id^="element-photo"]:not(.ui-droppable), .pc-tpc-activeinner').droppable({activate:function(e,
ui){self._droppable_onactivate(this,e,ui);},deactivate:function(e,ui){self._droppable_ondeactivate(this,e,ui);},over:function(e,ui){self._droppable_onover(this,e,
ui);},out:function(e,ui){self._droppable_onout(this,e,ui);},drop:function(e,ui){self._droppable_ondrop(this,e,ui);}});};zfp_TemplateProductCropper.prototype.destroyDrop=function(){this.$('.pc-tpc-element[id^="element-photo"], .pc-tpc-activeinner').droppable('destroy');
};zfp_TemplateProductCropper.prototype.activegrid=function(grid){this._activeGrid=grid;};zfp_TemplateProductCropper.prototype._droppable_onactivate=function(node,e,ui){if(this._activeGrid){this._activeGrid.lockSelection(true);
this.$('.pc-tpc-element[id^="element-photo"]').addClass('pc-tpc-draghighlight');}};zfp_TemplateProductCropper.prototype._droppable_ondeactivate=function(node,e,ui){this._alertmsg_hide();$(node).removeClass('pc-tpc-nodrop').removeClass('pc-tpc-dropok').removeClass('pc-tpc-draghighlight');
if(this._activeGrid){this._activeGrid.lockSelection(false);}};zfp_TemplateProductCropper.prototype._droppable_onover=function(node,e,ui){node=$(node);if(this._activeGrid&&this._data.enforceResolution===true){var element=this._templateActiveElement?this._getElement(this._templateActiveElement):this._getElement(node.attr('id').replace('element-',
''));var indices=this._activeGrid.getSelectedIndices(),w=0,h=0;for(var k=0;k<indices.length;k++){var photo=this._activeGrid.getItem(indices[k]).photo;w=photo.width;
h=photo.height;if(w>=element.minimumResolution.width&&h>=element.minimumResolution.height){node.removeClass('pc-tpc-draghighlight').addClass('pc-tpc-dropok');this._alertmsg_hide();
return;}}this._alertmsg_show(zf_stdFormatString('Minimum resolution required: {0} x {1}<br />Your image: {2} x {3}',element.minimumResolution.width,element.minimumResolution.height,
w,h));node.removeClass('pc-tpc-draghighlight').addClass('pc-tpc-nodrop');}else{node.removeClass('pc-tpc-draghighlight').addClass('pc-tpc-dropok');this._alertmsg_hide();
}};zfp_TemplateProductCropper.prototype._droppable_onout=function(node,e,ui){$(node).removeClass('pc-tpc-dropok').removeClass('pc-tpc-nodrop').addClass('pc-tpc-draghighlight');};zfp_TemplateProductCropper.prototype._droppable_ondrop=function(node,
e,ui){node=$(node);if(node.hasClass('pc-tpc-nodrop')){return;}node.removeClass('pc-tpc-dragover');var element=this._templateActiveElement?this._getElement(this._templateActiveElement):this._getElement(node.attr('id').replace('element-',
''));var indices=this._activeGrid.getSelectedIndices();;var photo=this._activeGrid.getItem(indices[0]).photo;if(this._data.enforceResolution===true){if(photo.width<element.minimumResolution.width||photo.height<element.minimumResolution.height){return;
}}if(typeof this._photoMap[photo.id]==='undefined'){this._photoMap[photo.id]=photo;}this.onaddphoto(photo);var protophoto=this.getPhoto(element.imageIndex);if(protophoto!=null&&protophoto.id===photo.id){return;
}var rect=this._calcDefaultCropping(photo,element);var newProtoPhoto={cropping:rect,height:photo.height,id:photo.id,index:element.imageIndex,width:photo.width,video:photo.video};
this._setPhoto(newProtoPhoto);this._templatePhotos[this._templatePage][element.name].maxzoom=null;this._templatePhotos[this._templatePage][element.name].minzoom=null;
this._templatePhotos[this._templatePage][element.name].size={cx:0,cy:0};this._templatePhotos[this._templatePage][element.name].x=0;this._templatePhotos[this._templatePage][element.name].y=0;
this._templatePhotos[this._templatePage][element.name].zoom=null;this._templatePhotos[this._templatePage][element.name].origvpwidth=0;this._templatePhotos[this._templatePage][element.name].origvpheight=0;
if(node.hasClass('pc-tpc-element')){node.addClass('loading');}if(this._templateActiveElement){this._loadElementPhoto(element.name,true);}else{this.update(this._data);
}if(typeof this.onphotoelementdrop==='function'){this.onphotoelementdrop(this._template,this._templatePage);}this.updateMarkedPhotos();};zfp_TemplateProductCropper.prototype._calcDefaultCropping=function(protophoto,
element){if(this._defaultCropping==='fit'){return this._calcFitCropping(protophoto,element);}else{return this._calcCenteredCropping(protophoto,element);}};zfp_TemplateProductCropper.prototype._calcCenteredCropping=function(protophoto,
element){var e_sizeratio;if(protophoto.width==element.minimumResolution.width||protophoto.height==element.minimumResolution.height){e_sizeratio=element.minimumResolution.width/element.minimumResolution.height;
}else{e_sizeratio=element.width/element.height;}var p_sizeratio=protophoto.width/protophoto.height;var width=1,height=1,top=0,left=0;if(element.width>element.height){if(p_sizeratio<e_sizeratio){height=p_sizeratio/e_sizeratio;
}else{width=e_sizeratio/p_sizeratio;}}else{if(p_sizeratio>e_sizeratio){width=e_sizeratio/p_sizeratio;}else{height=p_sizeratio/e_sizeratio;}}left=(1-width)/2;top=(1-height)/2;
return new zf_Rect(left,top,width,height);};zfp_TemplateProductCropper.prototype._calcFitCropping=function(protophoto,element){if(protophoto.width==element.minimumResolution.width&&protophoto.height==element.minimumResolution.height){return new zf_Rect(0,
0,1,1);}var e_sizeratio=element.width/element.height;var p_sizeratio=protophoto.width/protophoto.height;var width=1,height=1,top=0,left=0;if(element.width>element.height){if(p_sizeratio>e_sizeratio){height=p_sizeratio/e_sizeratio;
}else{width=e_sizeratio/p_sizeratio;}}else{if(p_sizeratio>e_sizeratio){height=p_sizeratio/e_sizeratio;}else{width=e_sizeratio/p_sizeratio;}}left=(1-width)/2;top=(1-height)/2;
return new zf_Rect(left,top,width,height);};zfp_TemplateProductCropper.prototype._loadElementPhoto=function(name,spinner){if(typeof name!='string'){return;}var element=this._getElement(name);
;var protophoto=this.getPhoto(element.imageIndex);if(protophoto===null){this.$('.pc-tpc-background').addClass('photo-here');this.$('.pc-tpc-photobox .pc-tpc-photoviewport').removeClass('has-photo');
return;}else{this.$('.pc-tpc-background').removeClass('photo-here');this.$('.pc-tpc-photobox .pc-tpc-photoviewport').addClass('has-photo');}if(spinner===true){this.$('.pc-tpc-activeinner').addClass('loading');
}if(this._templatePhotos[this._templatePage][element.name].minzoom===null||this._templatePhotos[this._templatePage][element.name].maxzoom===null){this._templatePhotos[this._templatePage][element.name]=$.extend(this._templatePhotos[element.name],
this._calcMinMaxZooms(element.name,protophoto));}var data=this._calcPhotoSize(name,protophoto);this._templatePhotos[this._templatePage][element.name].size=data.size;
if(typeof this._nextKey[name]==='undefined'){this._nextKey[name]=0;}var key=this._asyncKey[name]=++this._nextKey[name],self=this,photo=this._photoMap[protophoto.id];
this._loader=new zf_PhotoLoader(photo,data.method);this._loader.onload=function(state,src){self._photo_onload('.pc-tpc-photobox .pc-tpc-photoviewport img.pc-tpc-photo',
src,key,name,self.closure(self._initPhoto));self.$('.pc-tpc-activeinner').removeClass('loading');self.$('.pc-tpc-background').removeClass('photo-here');};this._loader.start();
};zfp_TemplateProductCropper.prototype._calcPhotoSize=function(name,protophoto){var data={};var photo=this._photoMap[protophoto.id];var viewport=this._templateElementViewports[name];var adjSize={width:viewport.width,
height:viewport.height};if(viewport.height>=viewport.width){adjSize.width=(adjSize.height)*(photo.width/photo.height);}else{adjSize.height=(adjSize.width)*(photo.height/photo.width);
}data.method=photo.pickMethod(adjSize.width*(this._templatePhotos[this._templatePage][name].zoom||1),adjSize.height*(this._templatePhotos[this._templatePage][name].zoom||1),
true,true);data.size={cx:adjSize.width,cy:adjSize.height};return data;};zfp_TemplateProductCropper.prototype._initPhoto=function(callback){var scaleFactor=this._templateImage.cx/this._templateImage.width;
var element=this._getElement(this._templateActiveElement);var protophoto=this.getPhoto(element.imageIndex);;var viewport=this._templateElementViewports[this._templateActiveElement];
this._templatePhotos[this._templatePage][element.name]=$.extend(this._templatePhotos[this._templatePage][element.name],this._calcMinMaxZooms(element.name,protophoto));
var zoom;if(this._templatePhotos[this._templatePage][element.name].zoom===null||isNaN(this._templatePhotos[this._templatePage][element.name].zoom)){var zoomX=(viewport.width/protophoto.cropping.width)/this._templatePhotos[this._templatePage][element.name].size.cx;
var zoomY=(viewport.height/protophoto.cropping.height)/this._templatePhotos[this._templatePage][element.name].size.cy;zoom=Math.min(Math.max(zoomX,zoomY,this._templatePhotos[this._templatePage][element.name].minzoom),
this._templatePhotos[this._templatePage][element.name].maxzoom);var width=zoom*this._templatePhotos[this._templatePage][element.name].size.cx;var height=zoom*this._templatePhotos[this._templatePage][element.name].size.cy;
var x=width*protophoto.cropping.left+width*protophoto.cropping.width/2;var y=height*protophoto.cropping.top+height*protophoto.cropping.height/2;this._templatePhotos[this._templatePage][element.name].x=width/2-x;
this._templatePhotos[this._templatePage][element.name].y=height/2-y;this._templatePhotos[this._templatePage][element.name].origx=this._templatePhotos[this._templatePage][element.name].x;
this._templatePhotos[this._templatePage][element.name].origy=this._templatePhotos[this._templatePage][element.name].y;this._templatePhotos[this._templatePage][element.name].origvpwidth=viewport.width;
this._templatePhotos[this._templatePage][element.name].origvpheight=viewport.height;}else{zoom=Math.min(Math.max(this._templatePhotos[this._templatePage][element.name].zoom,
this._templatePhotos[this._templatePage][element.name].minzoom),this._templatePhotos[this._templatePage][element.name].maxzoom);}this._templatePhotos[this._templatePage][element.name].zoom=zoom;
this._setPhotoPos();var minzoom=this._templatePhotos[this._templatePage][element.name].minzoom;var maxzoom=this._templatePhotos[this._templatePage][element.name].maxzoom;
if(minzoom!==maxzoom){var pos=Math.log((zoom-minzoom)/(maxzoom-minzoom)+1)/Math.LN2;this._zoomslider.getSlider().setPos(pos*100);}if(typeof callback==='function'){callback();
}};zfp_TemplateProductCropper.prototype._calcMinMaxZooms=function(name,protophoto){var zooms={minzoom:0,maxzoom:0};;;var scaleFactor=this._templateImage.cx/this._templateImage.width;var element=this._getElement(name);
var viewport=this._templateElementViewports[name];var minSize={cx:element.minimumResolution.width,cy:element.minimumResolution.height};if(!this._data.enforceResolution){minSize.cx=protophoto.width/5;
minSize.cy=protophoto.height/5;}var width=minSize.cx*scaleFactor;var height=minSize.cy*scaleFactor;zooms.maxzoom=Math.min(protophoto.width/minSize.cx,protophoto.height/minSize.cy);
if(minSize.cx>=minSize.cy){if(protophoto.width<=protophoto.height){zooms.minzoom=minSize.cy/protophoto.height;}else{zooms.minzoom=minSize.cx/protophoto.width;}}else{if(protophoto.width>protophoto.height){zooms.minzoom=minSize.cx/protophoto.width;
}else{zooms.minzoom=minSize.cy/protophoto.height;}}return zooms;};zfp_TemplateProductCropper.prototype._alertmsg_show=function(message){var infotext=this.$('.pc-tpc-infotext');var infobar=infotext.parent();
infotext.hide().stop(true,true);infobar.hide();infotext.html(message);infobar.show();infotext.fadeIn(200,function(){setTimeout(function(){infotext.fadeOut(2000,function(){infobar.hide();
}).attr('class','pc-tpc-infotext');},10000);});};zfp_TemplateProductCropper.prototype._alertmsg_fadein=function(message,classname){var infotext=this.$('.pc-tpc-infotext');var infobar=infotext.parent();
infotext.hide().stop(true,true);infobar.hide();infotext.html(message).addClass(classname);setTimeout(function(){infobar.show();infotext.fadeIn(1000,function(){setTimeout(function(){infotext.stop(true,
true).fadeOut(2000,function(){infobar.hide();}).attr('class','pc-tpc-infotext');},10000);});},1000);};zfp_TemplateProductCropper.prototype._alertmsg_hide=function(immediate){var transitionTime=200;
if(immediate){transitionTime=0;}this.$('.pc-tpc-infotext').stop(true,true).fadeOut(transitionTime,function(){$(this).parent().hide();}).attr('class','pc-tpc-infotext');
};zfp_TemplateProductCropper.prototype.hidealert=function(immediate){this._alertmsg_hide(immediate);};zfp_TemplateProductCropper.prototype._loadFrameData=function(callback){var vendorMeta=zf_VendorMeta.cached(this._data.vendorId);
var productMeta=vendorMeta.products[this._data.productId];var frame=new zfp_TemplateProductCropper.Frame();var fw=productMeta.data["frame-width"];var ov=productMeta.data["frame-overlap"];
for(var setId in this._data.services){var sid=this._data.services[setId];;var serviceMeta=vendorMeta.services[sid];;fw=serviceMeta.data["frame-width"];if(fw!=null){frame.add(fw);
}ov=serviceMeta.data["frame-overlap"];if(ov!=null){frame.overlap+=parseFloat(ov);}}return frame;};zfp_TemplateProductCropper.Frame=function(selector){this.left=0;this.top=0;this.right=0;this.bottom=0;
this.overlap=0;this.visible=false;this.editorMeta=null;this.size={left:0,top:0,right:0,bottom:0,overlap:0,cx:0,cy:0};this.image=new Image();this.imageCache={};this._selector=selector;
};zfp_TemplateProductCropper.Frame.prototype.load=function(vendorId,productId,services){this._clearvals();var vendorMeta=zf_VendorMeta.cached(vendorId);var productMeta=vendorMeta.products[productId];
var fw=productMeta.data["frame-width"];var ov=productMeta.data["frame-overlap"];for(var setId in services){var sid=services[setId];;var serviceMeta=vendorMeta.services[sid];
;fw=serviceMeta.data["frame-width"];if(fw!=null){this._add(fw);}ov=serviceMeta.data["frame-overlap"];if(ov!=null){this.overlap+=parseFloat(ov);}}var editorMeta=null;
for(setId in services){serviceMeta=vendorMeta.services[services[setId]];if(serviceMeta.data["editor"]!=null){editorMeta=vendorMeta.editors[serviceMeta.data["editor"]];
if(editorMeta instanceof zf_VendorMeta.OverlayEditor){this.editorMeta=editorMeta;break;}}}};zfp_TemplateProductCropper.Frame.prototype.addImg=function(src){if(this.imageCache[src]){this.image=this.imageCache[src];
this._imgonload(src);}else{var self=this;this.image=new Image();this.image.onload=function(){self._imgonload(src);};this.image.src=src;this.imageCache[src]=this.image;
}};zfp_TemplateProductCropper.Frame.prototype.reset=function(){this._clearvals();this.visible=false;this.editorMeta=null;this.image=new Image();this._selector.width(0).height(0).css('top',
0).css('left',0).attr('src','/zf/img/null.gif');};zfp_TemplateProductCropper.Frame.prototype._clearvals=function(){this.left=0;this.top=0;this.right=0;this.bottom=0;this.overlap=0;this.size={left:0,
top:0,right:0,bottom:0,overlap:0,cx:0,cy:0};};zfp_TemplateProductCropper.Frame.prototype._add=function(fw){var l,t,r,b;fw=fw.split(',');l=t=r=b=parseFloat(fw[0]);if(fw.length>1){t=b=parseFloat(fw[1]);
}if(fw.length>2){r=parseFloat(fw[2]);}if(fw.length>3){b=parseFloat(fw[3]);}this.left+=l;this.top+=t;this.right+=r;this.bottom+=b;if(this.left+this.top+this.right+this.bottom>0){this.visible=true;
}else{this.visible=false;}};zfp_TemplateProductCropper.Frame.prototype._imgonload=function(src){if(this.image.src===src){this._selector.attr('src',src);}};zfp_TemplateProductCropper.prototype._simplecropper_onclick=function(){var self=this;
if(typeof this._templateActiveElement==='string'){var element=this._getElement(this._templateActiveElement);if(element.type==='Photo'&&this.getPhoto(element.imageIndex)){this.saveElement(null,
function(){self.deselectElement();if(typeof self.onswitchclick==='function'){self.onswitchclick(zfp_ItemEditor.Cropper.Simple,element.imageIndex,element);}});}}};
zfp_TemplateProductCropper.prototype._getPageAlternative=function(pageFamily,id){var pa=null;if(this._template.pageAlternatives&&this._template.pageAlternatives[pageFamily]&&this._template.pageAlternatives[pageFamily][id]){pa=this._template.pageAlternatives[pageFamily][id];
}return pa;};zfp_TemplateProductCropper.prototype._getPageName=function(index){;;var p='',pg={},returnPage='';for(p in this._template.pages){pg=this._template.pages[p];if(pg.number===index){returnPage=p;
break;}}return returnPage;};zfp_TemplateProductCropper.prototype._getPageNumber=function(name){;;var n=-1;if(this._template.pages[name]&&typeof this._template.pages[name].number==='number'){n=this._template.pages[name].number;
}return n;};zfp_TemplateProductCropper.prototype._getPage=function(name){;;var returnPage=this._template.pages[name];if(returnPage.meta.hasAlternatives){var altid=this._getSavedPageAlternative(name);
returnPage=$.extend({},returnPage,this._getPageAlternative(returnPage.meta.pageFamily,altid));returnPage.meta.hasAlternatives=this._template.pages[name].meta.hasAlternatives;
returnPage.meta.defaultAlternative=this._template.pages[name].meta.defaultAlternative;returnPage.meta.name=this._template.pages[name].meta.name;returnPage.meta.pageGradient=this._template.pages[name].meta.pageGradient;
returnPage.meta.gutterWidth=this._template.pages[name].meta.gutterWidth;}return returnPage;};zfp_TemplateProductCropper.prototype._getSavedPageAlternative=function(name,pagemapping){var returnVal=null,
page=this._template.pages[name];if(!pagemapping){pagemapping=this._data.settings['page-mapping'];}if(page.meta.hasAlternatives&&pagemapping){returnVal=this._getSavedDictionary('page-mapping',
pagemapping)[name]||page.meta.defaultAlternative;}else if(page.meta.hasAlternatives&&page.meta.defaultAlternative){returnVal=page.meta.defaultAlternative;}return returnVal;
};zfp_TemplateProductCropper.prototype._setSavedPageAlternative=function(name,altid){var kvp=this._getSavedDictionary('page-mapping'),savedstr=[''],p='',i=0;kvp[name]=altid;for(p in kvp){if(i>0){savedstr.push(',');
}savedstr.push(p,':',kvp[p]);i++;}this._data.settings['page-mapping']=savedstr.join('');};zfp_TemplateProductCropper.prototype._getSavedDictionary=function(name,pagemapping){var vals=[],d=[],
kvp={},len=0,i=0;if(!pagemapping){pagemapping=this._data.settings[name];}if(pagemapping){vals=pagemapping.split(',');len=vals.length;for(i=0;i<len;i++){if(vals[i].indexOf(':')>=0){d=vals[i].split(':');
kvp[d[0]]=d[1];}}}return kvp;};zfp_TemplateProductCropper.prototype._updateToolbar=function(){var page=this._getPage(this._templatePage),count=0;this._toolbar.hideAllButtons();if(this._templatePagePhotoElementCount>0){this._toolbar.showButton('action-change-photo');
count++;}if(page.meta.hasAlternatives){this._toolbar.showButton('action-change-layout');count++;}if(this._templateMarginOverlap&&((page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0)||(page.meta.gutterWidth&&page.meta.gutterWidth>0))){this._toolbar.showButton('action-margin');
count++;}this._toolbar.format();if(count>0){this._toolbar.show();}else{this._toolbar.hide();}};zfp_TemplateProductCropper.prototype.changePageLayout=function(pageid,newlayoutid){var oldPages=$.extend({},
this._template.pages),oldElements=$.extend(true,[],this._template.elements),oldSettings=$.extend({},this._data.settings),oldPhotos=$.extend(true,[],this._photos);
this._template.elements[pageid]=$.extend(true,[],this._template.elements[newlayoutid]);this._reindexElements(oldPhotos,oldSettings,pageid);this._setElementValues(oldPages,
oldElements,oldPhotos,oldSettings,pageid);this._setSavedPageAlternative(pageid,newlayoutid);this.updateMarkedPhotos();this._pageselector.updatePageIcon(pageid,newlayoutid);
this._templateMarginOverlapEvaluated=false;this.update(this._data,this.closure(this._render_elementboxes));if(typeof this.onpagechange==='function'){this.onpagechange(this._template,
this._templatePage,this,this._data);}};zfp_TemplateProductCropper.prototype._reindexElements=function(oldphotos,oldsettings,pageid){var pagenum=0,p='',i=0,len=0,textindex=1,photoindex=0,element={},
photo={},name='',reindexvalues=(oldphotos&&oldsettings)?true:false;var pageNameByNumber=[];for(var pn in this._template.pages){if(this._template.pages.hasOwnProperty(pn))pageNameByNumber[this._template.pages[pn].number]=pn;
}for(pagenum=0;pagenum<this._template.pagecount;pagenum++){p=pageNameByNumber[pagenum];;;var templatePhotos=this._templatePhotos[p];if(p===pageid&&reindexvalues){this._templatePhotos[p]={};
}len=this._template.elements[p].length;for(i=0;i<len;i++){element=this._template.elements[p][i];if(element.type==='Text'){name='text'+textindex;if(typeof pageid!=='undefined'&&p!==pageid&&reindexvalues){this._data.settings[name]=oldsettings[element.name]||null;
}element.originalname=element.name;element.name=name;textindex++;}else if(element.type==='Photo'){element.imageIndex=photoindex;if(p!==pageid&&reindexvalues){photo=this.getPhoto(element.imageIndex,
oldphotos);if(photo){photo.index=photoindex;this._setPhoto(photo);}}else if(reindexvalues){this._templatePhotos[p][element.name]={maxzoom:null,minzoom:null,size:{cx:0,
cy:0},x:0,y:0,zoom:null,origvpwidth:0,origvpheight:0};}photoindex++;}}}};zfp_TemplateProductCropper.prototype._findReplacementElement=function(oldElement,newElementsArray,photo){var self=this,
e=0,elen=newElementsArray.length,searching=true,currentSearch=zfp_TemplateProductCropper.MatchType.Exact,oldElementAspectRatio=oldElement.width/oldElement.height,
bestElement=null,match={index:-1,type:zfp_TemplateProductCropper.MatchType.None},validateRes=function(p,size){var isok=false;if(self._data.enforceResolution&&p){if((p.width>=size.width&&p.height>=size.height)){isok=true;
}}else{isok=true;}return isok;};while(searching){elemLoop:for(e=0;e<elen;e++){if(newElementsArray[e].type===oldElement.type){if(oldElement.type==='Photo'&&this.getPhoto(newElementsArray[e].imageIndex)===null){switch(currentSearch){case zfp_TemplateProductCropper.MatchType.Exact:if(newElementsArray[e].width===oldElement.width&&newElementsArray[e].height===oldElement.height&&validateRes(photo,
newElementsArray[e].minimumResolution)){searching=false;}break;case zfp_TemplateProductCropper.MatchType.AspectRatio:if((newElementsArray[e].width/newElementsArray[e].height)===oldElementAspectRatio&&validateRes(photo,
newElementsArray[e].minimumResolution)){searching=false;}break;default:var validres=validateRes(photo,newElementsArray[e].minimumResolution);if(bestElement===null&&validres){bestElement=e;
}else if(validres){var bestdiff=Math.abs((newElementsArray[bestElement].width/newElementsArray[bestElement].height)-oldElementAspectRatio);var diff=Math.abs((newElementsArray[e].width/newElementsArray[e].height)-oldElementAspectRatio);
if(diff<bestdiff&&validateRes(photo,newElementsArray[e].minimumResolution)){bestElement=e;}}break;}}else if(oldElement.type==='Text'){switch(currentSearch){case zfp_TemplateProductCropper.MatchType.Exact:if(newElementsArray[e].label===oldElement.label&&newElementsArray[e].placeholder===oldElement.placeholder){searching=false;
}break;case zfp_TemplateProductCropper.MatchType.AspectRatio:break elemLoop;break;default:if(newElementsArray[e].label===oldElement.label){searching=false;}break;
}}if(!searching){match.index=e;match.type=currentSearch;break elemLoop;}}if(oldElement.type==='Photo'&&currentSearch===zfp_TemplateProductCropper.MatchType.Similar&&e>=(elen-1)){match.index=bestElement;
match.type=currentSearch;searching=false;}}currentSearch++;if(currentSearch>zfp_TemplateProductCropper.MatchType.Similar){searching=false;}}return match;};zfp_TemplateProductCropper.prototype.getPhotos=function(){return this._photos;
};zfp_TemplateProductCropper.prototype._rebuildPages=function(){var p='',oldpage=null,newpage=null,layoutid='',hasalts=false,pagemapping='';if(this._oldPages){for(p in this._oldPages){oldpage=this._oldPages[p];
newpage=$.first(this._template.pages,function(pg){return pg.number===oldpage.number;});if(newpage&&newpage.value){newpage=newpage.value;}if(newpage&&newpage.meta.hasAlternatives&&this._data.settings){layoutid=this._getSavedPageAlternative(p);
if(oldpage.meta.pageFamily!==newpage.meta.pageFamily||!this._template.pageAlternatives[newpage.meta.pageFamily][layoutid]){layoutid=newpage.meta.defaultAlternative;
this._setSavedPageAlternative(p,layoutid);}}}}pagemapping=this._data.settings['page-mapping'];this._data.settings['page-mapping']=null;for(p in this._template.pages){newpage=this._template.pages[p];
if(newpage.meta.hasAlternatives&&this._data.settings){layoutid=this._getSavedPageAlternative(p,pagemapping);if(!this._template.pageAlternatives[newpage.meta.pageFamily][layoutid]){layoutid=newpage.meta.defaultAlternative;
}this._template.elements[p]=$.extend(true,[],this._template.elements[layoutid]);this._setSavedPageAlternative(p,layoutid);this._pageselector.updatePageIcon(p,layoutid);
hasalts=true;}}return hasalts;};zfp_TemplateProductCropper.prototype._isElementMarginOverlap=function(){var isOverlap=false,self=this,page=this._getPage(this._templatePage);if((page.meta.spillX&&page.meta.spillX>0&&page.meta.spillY&&page.meta.spillY>0)||(page.meta.gutterWidth&&page.meta.gutterWidth>0)){var wrapX=this._templateImage.cx*(page.meta.wrapX||0),
wrapY=this._templateImage.cy*(page.meta.wrapY||0),spillX=(this._templateImage.cx*(page.meta.spillX||1))+wrapX,spillY=(this._templateImage.cy*(page.meta.spillY||1))+wrapY,
spillWidth=Math.round(this._templateImage.cx-(2*spillX)),spillHeight=Math.round(this._templateImage.cy-(2*spillY)),spillbox={left:spillX,right:spillX+spillWidth,
top:spillY,bottom:spillY+spillHeight},gutterWidth=this._templateImage.cx*(page.meta.gutterWidth||0),gutterbox={left:(this._templateImage.cx-gutterWidth-2)/2,right:((this._templateImage.cx-gutterWidth-2)/2)+gutterWidth},
len=0,i=0,element={},vp={};len=this._template.elements[this._templatePage].length;for(i=0;i<len;i++){element=this._template.elements[this._templatePage][i];vp=this._templateElementViewports[element.name];
if(element.type==='Photo'||element.type==='Text'){if(vp.top<spillbox.top){isOverlap=true;break;}else if(vp.top+vp.height>spillbox.top+spillbox.height){isOverlap=true;
break;}else if(vp.left<spillbox.left){isOverlap=true;break;}else if(vp.left+vp.width>spillbox.left+spillbox.width){isOverlap=true;break;}if(page.meta.gutterWidth&&page.meta.gutterWidth>0){if(vp.left<gutterbox.right&&vp.left+vp.width>gutterbox.right){isOverlap=true;
break;}else if(vp.left+vp.width>gutterbox.left&&vp.left<gutterbox.left){isOverlap=true;break;}}}}}return isOverlap;};function zfp_ProductInfo(id,scrollView){;zf_Control.prototype.constructor.call(this,
id);this._scrollView=scrollView;}zfp_ProductInfo.inherits(zf_Control);zfp_ProductInfo.prototype.init=function(frame,options){;this._frame=frame;this._options={};if(typeof options==='object'){this._options=options;
}var self=this;this.$('.pc-info-image:first IMG').bind('load',function(){self._scrollView.update(true);self.update();});};zfp_ProductInfo.prototype.setHeight=function(height){this.$().height(height);
this._scrollView.setHeight(height);this._scrollView.update(true);};zfp_ProductInfo.prototype.setEmpty=function(message){this.$().addClass('pc-info-wait').find('.pc-info-msg:first').html(message);
this._infoKey=null;};zfp_ProductInfo.prototype.update=function(){if(this.$().css('display')=='none')return;this._scrollView.update();var div=this.$('.pc-info-image:first');var img=div.find('IMG:first');
div.width(img[0].width+2).find('SPAN:first').showIf(img.hasClass('pc-info-lv'));};zfp_ProductInfo.prototype.showPackageInfo=function(vendorId,packageId,onload){;;if(onload==null)onload=$.noop;
this._loadVendor(vendorId,function(vendorMeta){var packageMeta=vendorMeta.packages[packageId];this._showInfo('GetPackageMeta',[zf_locale,vendorMeta.timestamp,vendorId,
packageId],packageMeta.longName);onload(packageMeta);});};zfp_ProductInfo.prototype.showProductInfo=function(vendorId,productId,changeNumber,onload,product,photos){;;var self=this;
var frame=this._frame;if(onload==null)onload=$.noop;this._loadVendor(vendorId,function(vendorMeta){var productMeta=vendorMeta.products[productId];var optionSetMeta=vendorMeta.optionSets[productMeta.optionSetId];
var size;var quality;if(product!=null&&photos!=null&&photos.length==1&&optionSetMeta.isDigital){if(!photos[0].video)size=frame.getDownloadResolution(product,photos[0]);
else quality=zf_VideoQuality.getProcessingMethod(productMeta.videoQuality);}var attachEvents=function(license){self.$('A.pc-info-license').click(zf_stdFalse).mousedown(function(e){if(zf_stdIsLeftButton(e))frame.showLicense(license);
});};this._showInfo('GetProductMeta',[zf_locale,vendorMeta.timestamp,vendorId,productId,changeNumber],productMeta.longName,function(info){if(optionSetMeta.isDigital){var desc=[];
if(size!=null){desc.push('<p>Dimensions: ',zf_stdFormatString('{0} x {1} px',size.cx,size.cy),'</p>');}if(quality!=null){desc.push('<p>Quality: ',quality.format,
'</p>');}desc.push('<p><strong>',zf_stdHtmlEncode(info.license.name),':</strong><br/>',info.license.description,'</p>','<p><a href="#" class="pc-info-license">Show full license text »</a>',
'</p>');info.description=desc.join("");zf_stdDeferCall(null,attachEvents,null,info.license);}else if(product!=null&&optionSetMeta.options.length>1&&optionSetMeta.data['cart-nodetails']==null){var map={};
for(var oid in product.options)map[oid]=info.options[oid];var list=zfp_Configurator.makeUiList(map,zf_BaseMeta.compare);desc=[info.description,info.optionSet.description];
for(var i=0;i<list.length;i++){desc.push('<h6>',zf_stdHtmlEncode(list[i].name),'</h6>',list[i].description);}info.description=desc.join("");}});onload(productMeta);
});};zfp_ProductInfo.prototype.showOptionInfo=function(vendorId,optionId,onload){;;if(onload==null)onload=$.noop;this._loadVendor(vendorId,function(vendorMeta){var optionMeta=vendorMeta.options[optionId];
if(vendorMeta.optionSets[optionMeta.optionSetId].data['option-selection']==='paper-pagecount'&&optionMeta.longName.indexOf('(')>0){optionMeta.longName=optionMeta.longName.substr(0,
optionMeta.longName.indexOf('('));}this._showInfo('GetOptionMeta',[zf_locale,vendorMeta.timestamp,vendorId,optionId],optionMeta.longName);onload(optionMeta);});};
zfp_ProductInfo.prototype.showSettingValueInfo=function(vendorId,settingId,valueId,onload){;;;if(onload==null)onload=$.noop;this._loadVendor(vendorId,function(vendorMeta){var settingMeta=vendorMeta.settings[settingId];
var valueMeta=settingMeta.values[valueId];this._showInfo('GetSettingValueMeta',[zf_locale,vendorMeta.timestamp,vendorId,settingId,valueId],valueMeta.longName);onload(valueMeta);
});};zfp_ProductInfo.prototype.showServiceInfo=function(vendorId,serviceSetId,serviceId,onload){;;if(onload==null)onload=$.noop;this._loadVendor(vendorId,function(vendorMeta){if(serviceId!=null){var serviceMeta=vendorMeta.services[serviceId];
this._showInfo('GetServiceMeta',[zf_locale,vendorMeta.timestamp,vendorId,serviceId],serviceMeta.longName);onload(serviceMeta);}else{var serviceSetMeta=vendorMeta.serviceSets[serviceSetId];
this._showInfo('GetNoServiceMeta',[zf_locale,vendorMeta.timestamp,vendorId,serviceSetId],serviceSetMeta.none.longName);onload(serviceSetMeta.none);}});};zfp_ProductInfo.prototype._loadVendor=function(vendorId,
onload){;;var vendorMeta=zf_VendorMeta.cached(vendorId);if(vendorMeta==null){var self=this;this.$().addClass('pc-info-wait').find('.pc-info-msg:first').text('Loading...');
var map={};map[vendorId]="c:"+new Date().getTime().toString();zf_VendorMeta.load(map,function(map){onload.call(self,map[vendorId]);});}else{onload.call(this,vendorMeta);
}};zfp_ProductInfo.prototype._showInfo=function(method,args,title,callback){;;var infoKey=method+'@'+args.join('.');if(this._infoKey==infoKey)return;var self=this;this._infoKey=infoKey;
var timeout=setTimeout(function(){if(infoKey==self._infoKey&&timeout!=null){self.$().addClass('pc-info-wait').find('.pc-info-msg:first').text('Loading...');}},750);
zf_stdServerRequestEx('GET','/zf/cdn/core/printing/printing.asmx',method,args,function(result,error){if(infoKey!=self._infoKey)return;clearTimeout(timeout);timeout=null;
if(error!=null){self.setEmpty(error.message);return;}if(callback!=null)callback(result);self.$().removeClass('pc-info-wait');self.$('.pc-info-image:first IMG').toggleClass('pc-info-lv',
(result.preview!=null&&self._options['hidePreview']!=true)).showIf(result.icon!=null);self.$('.pc-info-image:first IMG, .pc-info-image:first SPAN').unbind('click').iff(result.preview!=null&&self.onpreview!=null&&self._options['hidePreview']!=true).click(function(){self.onpreview(result);
});self.$('.pc-info-image:first SPAN').hide();if(result.icon!=null)zfp_Configurator.setImage(self.$('.pc-info-image:first IMG'),result.icon);self.$('.pc-info-text:first').html(result.description!=null?result.description:'');
self._scrollView.scrollTo(0);self._scrollView.update();});};function zft_PreviewMode(){}zft_PreviewMode.Active=0;zft_PreviewMode.Full=1;function zft_PhotoParam(photoId,photoToken,cropping,rotation){this.photoId=photoId;
this.photoToken=photoToken;this.cropping=cropping;this.rotation=rotation;}function zft_RotateFlipFlags(){}zft_RotateFlipFlags.None=0;zft_RotateFlipFlags.Rotate90=1;zft_RotateFlipFlags.Rotate180=2;zft_RotateFlipFlags.Rotate270=4;zft_RotateFlipFlags.FlipX=128;zft_RotateFlipFlags.FlipY=256;
zft_RotateFlipFlags.FlipXY=512;function zft_TextParam(content){this.content=content;}function zft_TemplateRequest(ownerId,templateId,pageId,activeElement,photoParams,textParams,userToken,visitorKey,
keyRing,previewMode,requestedResolution){this.ownerId=ownerId;this.templateId=templateId;this.page=pageId;this.activeElement=activeElement||null;this.photoParams=photoParams||null;
this.textParams=textParams||null;this.userToken=userToken||null;this.visitorKey=visitorKey||null;this.keyRing=keyRing||null;this.previewMode=previewMode;this.resolution=requestedResolution;
}zft_TemplateRequest.prototype.addPhotoParam=function(photoElement,photoParam){if(!this.photoParams)this.photoParams={};photoParams[photoElement]=photoParam;};zft_TemplateRequest.prototype.addTextParam=function(textElement,
textParam){if(!this.textParams)this.textParams={};textParams[textElement]=textParam;};function zf_Size(width,height){if(arguments.length==0){this.width=0;this.height=0;}else{this.width=width;
this.height=height;}}zf_Size.prototype.toString=function(precision){return['{',this.width.toString(precision),this.height.toString(precision),'}'].join('');};zf_Size.parse=function(size){if(!size)return null;
var re=/\{\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*,\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*}/;var res=re.exec(size);if(res==null)return null;return new zf_Size(parseFloat(res[1]),
parseFloat(res[2]));};function zft_TemplatesApi(ownerId,templateId,keyRing,visitorKey){this._ownerId=ownerId;this._templateId=templateId;this._keyRing=keyRing||"";this._visitorKey=visitorKey||"";
}zft_TemplatesApi.prototype.updateKeyRing=function(keyRing){this._keyRing=keyRing;};zft_TemplatesApi.prototype.updateVisitorKey=function(visitorKey){this._visitorKey=visitorKey;};zft_TemplatesApi.prototype.createRequest=function(pageId,
resolution,activeElement,photoMap,textMap){;;photoMap=photoMap||null;textMap=textMap||null;var previewType=activeElement?zft_PreviewMode.Active:zft_PreviewMode.Full;
var request=new zft_TemplateRequest(this._ownerId,this._templateId,pageId,activeElement,photoMap,textMap,this._userToken,this._visitorKey,this._keyRing,previewType,
resolution);return request;};zft_TemplatesApi.prototype.registerRequest=function(templateRequest,oncomplete){;;var path='/zf/core/templates.asmx';var method='RegisterTemplateRequest';
var params=[templateRequest];var self=this;var innerOncomplete=function(result,error){if(result&&!error){result=['/zf/templateImage?bk=',encodeURIComponent(result)].join('');
}zf_stdDeferCall(null,oncomplete,self,result||null,error||null);};zf_stdServerRequestEx('POST',path,method,params,innerOncomplete);};zft_TemplatesApi.GetValidationUrl=function(templateId,
page){return['/zf/templateImage?validation=',encodeURIComponent(templateId),'&page=',encodeURIComponent(page)].join('');};function zf_cartGetId(){var cookie=zf_stdGetCookie("zf_7d_cart");
if(cookie==null)return 0;var index=cookie.indexOf('_');var id;if(index<0)id=cookie;else id=cookie.substring(index+1);id=id!=null?parseInt(id,10):0;return isNaN(id)?0:id;
}function zf_cartSetId(cart){;var expires=new Date();expires.setDate(expires.getDate()+7);zf_stdSetCookie("zf_7d_cart",cart.photographerId.toString()+'_'+cart.id.toString(),
expires,true);}function zf_CartUtils(){}zf_CartUtils.popupLicense=function(vendorId,licenseId,changeNumber){;;var url='/zf/cart/licenseViewPopup.aspx?vId='+vendorId+'&lId='+licenseId;
if(changeNumber!=null)url+='&lcn='+changeNumber;window.open(url,'zf_license','height=600,width=630',true);return false;};zf_stdNotifyScriptLoad('configurator.js');