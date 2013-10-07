;var __zfl_start=new Date().getTime();//          
/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bO(a+"["+f+"]",b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bN(a,c,d,e,"*",g));return l}function bM(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bo(a,b,c){var e=b==="width"?bi:bj,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function _(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(p,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b>1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length>1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&&d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&&c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(i);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(h+=" "+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(i);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var j=(" "+g.className+" ").replace(h," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");g.className=d.trim(j)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(o.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(j,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&o.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&l.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&&(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!=null&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&C("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&C("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=p.exec(h),k="",j&&(k=j[0],h=h.replace(p,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:"absolute",visibility:"hidden",display:"block"},bi=["Left","Right"],bj=["Top","Bottom"],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f<=0){f=bk(a,b,b),f==="0px"&&bm&&(f=bm(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bl=function(a,c,e){var f,g,h;e=e.replace(be,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bm=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bf.test(d)&&bg.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bk=bl||bm,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&])_=[^&]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement("a"),bJ.href="",bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bz,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,"\r\n")}}):{name:b.name,value:c.replace(br,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bQ(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bs,"").replace(bx,bK[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]==="http:"?80:443))!=(bK[3]||(bK[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(by.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,"$1_="+w);e.url=x+(x===e.url?(by.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join("&").replace(bp,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bR++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bS.test(b.url)||f&&bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bS,l),b.url===j&&(f&&(k=k.replace(bS,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&&"withCredentials"in bV,bV=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&&c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cd(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(cc("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc("show",1),slideUp:cc("hide",1),slideToggle:cc("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!ca&&(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cf.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);
// 
/*jsl:ignoreall*/
/*
 * jQuery Color Animations v@VERSION
 * http://jquery.org/
 *
 * Copyright 2011 John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: @DATE
 */

(function( jQuery, undefined ){
	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),

		// plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
		// a set of RE's that can match strings and generate color tuples.
		stringParsers = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						2.55 * execResult[1],
						2.55 * execResult[2],
						2.55 * execResult[3],
						execResult[ 4 ]
					];
				}
			}, {
				re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[1],
						execResult[2] / 100,
						execResult[3] / 100,
						execResult[4]
					];
				}
			}],

		// jQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				cache: "_rgba",
				props: {
					red: {
						idx: 0,
						type: "byte",
						empty: true
					},
					green: {
						idx: 1,
						type: "byte",
						empty: true
					},
					blue: {
						idx: 2,
						type: "byte",
						empty: true
					},
					alpha: {
						idx: 3,
						type: "percent",
						def: 1
					}
				}
			},
			hsla: {
				cache: "_hsla",
				props: {
					hue: {
						idx: 0,
						type: "degrees",
						empty: true
					},
					saturation: {
						idx: 1,
						type: "percent",
						empty: true
					},
					lightness: {
						idx: 2,
						type: "percent",
						empty: true
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				min: 0,
				max: 255
			},
			"percent": {
				min: 0,
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		rgbaspace = spaces.rgba.props,
		support = color.support = {},

		// colors = jQuery.Color.names
		colors,

		// local aliases of functions called often
		each = jQuery.each;

	spaces.hsla.props.alpha = rgbaspace.alpha;

	function clamp( value, prop, alwaysAllowEmpty ) {
		var type = propTypes[ prop.type ] || {},
			allowEmpty = prop.empty || alwaysAllowEmpty;
			
		if ( allowEmpty && value == null ) {
			return null;
		}
		if ( prop.def && value == null ) {
			return prop.def;
		}
		if ( type.floor ) {
			value = ~~value;
		} else {
			value = parseFloat( value );
		}
		if ( jQuery.isNaN( value ) ) {
			return prop.def;
		}
		if ( type.mod ) {
			value = value % type.mod;
			// -10 -> 350 
			return value < 0 ? type.mod + value : value;
		}

		// for now all property types without mod have min and max
		return type.min > value ? type.min : type.max < value ? type.max : value;
	}

	color.fn = color.prototype = {
		constructor: color,
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red instanceof jQuery || red.nodeType ) {
				red = red instanceof jQuery ? red.css( green ) : jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [],
				source;

			// more than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				red = red.toLowerCase();
				each( stringParsers, function( i, parser ) {
					var match = parser.re.exec( red ),
						values = match && parser.parse( match ),
						parsed,
						spaceName = parser.space || "rgba",
						cache = spaces[ spaceName ].cache;


					if ( values ) {
						parsed = inst[ spaceName ]( values );

						// if this was an rgba parse the assignment might happen twice
						// oh well....
						inst[ cache ] = parsed[ cache ];
						rgba = inst._rgba = parsed._rgba;

						// exit each( stringParsers ) here because we matched
						return false;
					}
				});

				// Found a stringParser that handled it
				if ( rgba.length !== 0 ) {

					// if this came from a parsed string, force "transparent" when alpha is 0
					// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
					if ( Math.max.apply( Math, rgba ) === 0 ) {
						jQuery.extend( rgba, colors.transparent );
					}
					return this;
				}

				// named colors / default - filter back through parse function
				red = colors[ red ] || colors._default;
				return this.parse( red );
			}

			if ( type === "array" ) {
				each( rgbaspace, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				});
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					});
				} else {
					each( spaces, function( spaceName, space ) {
						each( space.props, function( key, prop ) {
							var cache = space.cache;

							// if the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// if the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( red[ key ] == null || key === "alpha") {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// this is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						});
					});
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				myself = this;

			each( spaces, function( _, space ) {
				var isCache = is[ space.cache ],
					localCache;
				if (isCache) {
					localCache = myself[ space.cache ] || space.to && space.to( myself._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] == localCache[ prop.idx ] );
							return same;
						}
					});
				}
				return same;
			}); 
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			});
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				start = this[ space.cache ] || space.to( this._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// if null, don't override start value
				if ( endValue === null ) {
					return;
				}
				// if null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ prop.idx ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			});
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {
			// if we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			}));
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				});

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join(",") + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				});

			if ( hsla[ 3 ] == 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join(",") + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v, i ) {

				// default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length == 1 ? "0" + v : v;
			}).join("");
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	};
	color.fn.parse.prototype = color.fn;

	// hsla conversions adapted from:
	// http://www.google.com/codesearch/p#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/inspector/front-end/Color.js&d=7&l=193

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + (q - p) * 6 * h;
		}
		if ( h * 2 < 1) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + (q - p) * ((2/3) - h) * 6;
		}
		return p;
	}

	spaces.hsla.to = function ( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		if ( l === 0 || l === 1 ) {
			s = l;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function ( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q,
			r, g, b;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};


	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice(),
				ret;

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			});

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {
			// alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === 'alpha' ? ( this._hsla ? 'hsla' : 'rgba' ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		});
	});

	// add .fx.step functions
	each( stepHooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				value = color( value );
				if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
					var backgroundColor,
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
					do {
						backgroundColor = jQuery.curCSS( curElem, "backgroundColor" );
					} while (
						( backgroundColor === "" || backgroundColor === "transparent" ) && 
						( curElem = curElem.parentNode ) && 
						curElem.style 
					);

					value = value.blend( backgroundColor && backgroundColor !== "transparent" 
						? backgroundColor
						: "_default" );
				}

				value = value.toRgbaString();

				elem.style[ hook ] = value;
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

	// detect rgba support
	jQuery(function() {
		var div = document.createElement( "div" ),
			div_style = div.style;

		div_style.cssText = "background-color:rgba(1,1,1,.5)";
		support.rgba = div_style.backgroundColor.indexOf( "rgba" ) > -1;
	});

	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/
	colors = jQuery.Color.names = {
		aqua: "#00ffff",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		black: "#000000",
		blue: "#0000ff",
		brown: "#a52a2a",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgrey: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkviolet: "#9400d3",
		fuchsia: "#ff00ff",
		gold: "#ffd700",
		green: "#008000",
		indigo: "#4b0082",
		khaki: "#f0e68c",
		lightblue: "#add8e6",
		lightcyan: "#e0ffff",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		magenta: "#ff00ff",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		orange: "#ffa500",
		pink: "#ffc0cb",
		purple: "#800080",
		violet: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [ null, null, null, 0 ],
		_default: "#ffffff"
	};
})( jQuery );
$.fn.extend({disableTextSelect:function(){return this.addClass("user-select-none");},iff:function(condition){if($.isFunction(condition))condition=condition.apply(this);
return condition?this:$();},showIf:function(condition){return condition?this.show():this.hide();},textNodes:function(){var ret=[];var contents=this.contents();var textNodeType=typeof Node!='undefined'?Node.TEXT_NODE:3;
for(var i=0;i<contents.length;i++){var c=contents[i];var textContent=c.textContent;if(c.nodeType===textNodeType&&textContent.replace(/^\s+|\s+$/g,""))ret.push(c);
var sub=$(c).textNodes();for(var j=0;j<sub.length;j++){ret.push(sub[j]);}}return $(ret,this);},textMetrics:function(){var origin=this.textNodes().parent();origin=origin.length>0?origin:this;
var tag=origin.get(0).tagName;var styles=['font-family','font-style','font-variant','font-weight','font-size','line-height','word-spacing','letter-spacing','text-decoration',
'text-transform','text-align','text-indent'];var $text=$(['<',tag,'></',tag,'>'].join(''));$text.css({'position':'absolute','left':'-1000px','top':'-1000px','visibility':'hidden'});
var relevantStyles={};for(var i in styles){relevantStyles[styles[i]]=origin.css(styles[i]);}$text.css(relevantStyles);var originalText=origin.text().replace(/^\s+|\s+$/g,
"");$text.html(originalText);$('body').append($text);var width=$text.outerWidth(),height=$text.outerHeight();var ret={width:width,height:height,lineHeight:relevantStyles['line-height'],
characterAvgWidth:width/originalText.length};$text.remove();return ret;}});jQuery.extend({objectToArray:function(object,callback){var res=[];if(callback==null)$.each(object,
function(){res.push(this);});else $.each(object,function(){res.push(callback.apply(this,arguments));});return res;},lookup:function(array,predicate){for(var i=0,
e;i<array.length;i++){if(predicate(e=array[i]))return e;}return undefined;},max:function(values,maxfn){var maxVal=null,maxObj=null,maxIndex=null;if($.isArray(values)||(values.length!==null&&values.length!==undefined)){if(typeof maxfn==='function'){maxObj=values[0];
maxVal=maxfn.call(maxObj,i,maxObj);maxIndex=0;for(var i=1;i<values.length;i++){var obj=values[i];var val=maxfn.call(obj,i,obj);if(val>maxVal){maxVal=val;maxObj=values[i];
maxIndex=i;}}}else{maxObj=values[0];maxVal=maxObj;maxIndex=0;for(var i=1;i<values.length;i++){var obj=values[i];if(obj>maxObj){maxVal=obj;maxObj=obj;maxIndex=i;}}}}else{for(var n in values){if(values.hasOwnProperty(n)){var obj=values[n];
var val=maxfn.call(obj,i,obj);if(!maxVal||val>maxVal){maxVal=val;maxObj=obj;maxIndex=n;}}else{var obj=values[n];if(!maxObj||obj>maxObj){maxVal=obj;maxObj=obj;maxIndex=n;
}}}}return{element:maxObj,index:maxIndex,value:maxVal};},min:function(values,minfn){var minVal=null,minObj=null,minIndex=null;if($.isArray(values)||(values.length!==null&&values.length!==undefined)){if(typeof minf==='function'){minObj=values[0];
minVal=maxfn.call(minObj,0,minObj);minIndex=0;for(var i=1;i<values.length;i++){var obj=values[i];var val=minfn.call(obj,i,obj);if(val<minVal){minVal=val;minObj=values[i];
minIndex=i;}}}else{minObj=values[0];minVal=minObj;minIndex=0;for(var i=1;i<values.length;i++){var obj=values[i];if(obj>minObj){minVal=obj;minObj=obj;minIndex=i;}}}}else{if(typeof minfn==='function'){for(var n in values){if(values.hasOwnProperty(n)){var obj=values[n];
var val=minfn.call(obj,i,obj);if(minVal===null||val<maxVal){minVal=val;minObj=obj;minIndex=n;}}}}else{var obj=values[n];if(!minObj||obj<minObj){minVal=obj;minObj=obj;
minIndex=n;}}}return{element:minObj,index:minIndex,value:minVal};},first:function(obj,pred){pred=typeof pred==='function'?pred:function(){return true;};if($.isArray(obj)){for(var i=0;
i<obj.length;i++){if(pred.call(obj[i],obj[i]))return{key:i,value:obj[i]};}}else if(typeof obj==='object'){for(name in obj){if(obj.hasOwnProperty(name)&&pred.call(obj[name],
obj[name])){return{key:name,value:obj[name]};}}}}});;function _zf_stdTrapError(message,url,line){try{zf_stdServerRequestEx("POST","/zf/core/core.asmx","ReportError",["jserror",
message.toString(),location.href,url,line]);}catch(e){}return true;}window.onerror=_zf_stdTrapError;function zf_Debug(){this._debugWindow=null;this._startTime=new Date().getTime();
}zf_Debug.prototype.activate=function(){if(this._debugWindow==null){var wnd=window.open("about:blank","_blank","width=500,left=400,resizable,scrollbars");if(wnd!=null){this._debugWindow=wnd;
zf_stdAttachEvent(window,"unload",function(){wnd.close();});}else{alert("Cannot open debug window (check popup blocker settings)");return;}}this._debugWindow.document.writeln('<html><head><style type="text/css">');
this._debugWindow.document.writeln("BODY { font: 9pt 'Lucida Console', 'Courier New'; margin: 4px; }");this._debugWindow.document.writeln("P { background: #F0F0F0; margin: 0px 0px 1px 0px; }");
this._debugWindow.document.writeln("</style></head><body></body></html>");this.log("logging started");};zf_Debug.prototype.log=function(format){for(var i=1;i<arguments.length;
i++){var re=new RegExp("\\{"+(i-1)+"\\}","g");format=format.replace(re,arguments[i]);}var timestamp=new Date().getTime()-this._startTime;var ms=(timestamp%1000).toString();
var s=Math.floor(timestamp/1000).toString();while(ms.length<3)ms="0"+ms;while(s.length<2)s=" "+s;if(window.console&&window.console.log)window.console.log(["[",s,
".",ms,"] ",format].join(""));if(this._debugWindow==null||this._debugWindow.closed)return;var message=["<p>[",s,".",ms,"] ",format,"</p>"].join("");this._debugWindow.document.body.innerHTML+=message;
this._debugWindow.scrollTo(0,10000000);};zf_debug=new zf_Debug();function zf_assert(expr,exprQuote,fileName,lineNumber){if(!expr){var context;var message;if(exprQuote==null){context=zf_assert.caller.toString();
if(context.length>512)context=context.substr(0,512);message="Assertion failed in "+context;}else{message="Assertion ("+exprQuote+") failed.";}if(fileName==null)fileName="<unknown>";
if(lineNumber==null)lineNumber=0;zf_stdServerRequestEx("POST","/zf/core/core.asmx","ReportError",["jserror",message,document.location.href,fileName,lineNumber]);
}}function zf_log(format){zf_Debug.prototype.log.apply(zf_debug,arguments);};var zf=$.extend(zf||{},{$namespace:function(nsName,members){var labels=nsName.split('.');var ns=window;
for(var i=0;i<labels.length;i++)ns=ns[labels[i]]=ns[labels[i]]||{};$.extend(ns,members);},$class:function(base,methods){var cls=function(){cls.prototype._ctor&&cls.prototype._ctor.apply(this,
arguments);};if(base){if(!(base instanceof Array))base=[base];Function.prototype.inherits.apply(cls,base);}cls.extend(methods);return cls;}});function zf_stdNoArgs(args){return args.length==1&&args[0]==zf_stdNoArgs;
}function zf_stdTrue(){return true;}function zf_stdFalse(){return false;}function zf_stdCopyFields(dest,src,fields){for(var i=0;i<fields.length;i++){var fieldName=fields[i];if(src[fieldName]!==undefined)dest[fieldName]=src[fieldName];
}return dest;}function zf_stdShallowCopy(dest,src){for(var field in src){dest[field]=src[field];}return dest;}Function.prototype.inherits=function(base1){this.prototype={};for(var i=0;
i<arguments.length;i++){for(var method in arguments[i].prototype){if(arguments[i].prototype[method]instanceof Function){this.prototype[method]=arguments[i].prototype[method];
}}}this.prototype.constructor=this;};Function.prototype.extend=function(methods){$.extend(this.prototype,methods);};function zf_stdSplitArray(list,getter,limit){;;;;limit=limit||0;
var groups=[];var offset=0;var accum=0;var total=0;for(var i=0;i<list.length;i++){var item=list[i];var metric=getter(item,i);accum+=metric;total+=metric;if(i==list.length-1||accum+getter(list[i+1],
i+1)>limit){var group=$.grep(list,function(e,k){return k>=offset&&k<=i;});group.total=accum;groups.push(group);offset=i+1;accum=0;}}groups.total=total;return groups;
};function zf_stdGetEvent(e){if(e instanceof jQuery.Event)return e;if(window.event)e=window.event;return e;}function zf_stdStopPropagation(e){if(window.event)window.event.cancelBubble=true;
else if(e.stopPropagation)e.stopPropagation();}function zf_stdPreventDefault(e){if(window.event)window.event.returnValue=false;else if(e.preventDefault)e.preventDefault();
}function zf_stdAttachEvent(dom,evt,handler){if(typeof(dom)=="string")dom=document.getElementById(dom);if(dom.addEventListener)dom.addEventListener(evt,handler,false);}function zf_stdDetachEvent(dom,
evt,handler){if(typeof(dom)=="string")dom=document.getElementById(dom);if(dom.removeEventListener)dom.removeEventListener(evt,handler,false);}function zf_stdGetEventSource(e){e=zf_stdGetEvent(e);
if(e.srcElement)return e.srcElement;else if(e.target)return e.target;else if(e.currentTarget)return e.currentTarget;return null;}function zf_stdIsLeftButton(e){if(!(e instanceof jQuery.Event)&&window.event)e=window.event;
e=$.event.fix(e);return e.which==1||e.which==undefined;}function zf_Event(domEvent){if(window.event)this.domEvent=window.event;else this.domEvent=domEvent;}zf_Event.prototype.getSource=function(){if(window.event)return this.domEvent.srcElement;
else return this.domEvent.target;};zf_Event.prototype.getSourceWithTag=function(tagName){var domSource=this.getSource();while(domSource!=null&&domSource.tagName!=tagName)domSource=domSource.parentNode;
return domSource;};zf_Event.prototype.getSourceWithClass=function(tagClass){var domSource=this.getSource();while(domSource!=null&&domSource.className!=tagClass)domSource=domSource.parentNode;
return domSource;};zf_Event.prototype.stopPropagation=function(){if(window.event)this.domEvent.cancelBubble=true;else if(this.domEvent.stopPropagation)this.domEvent.stopPropagation();
};zf_Event.prototype.preventDefault=function(){if(window.event)this.domEvent.returnValue=false;else if(this.domEvent.preventDefault)this.domEvent.preventDefault();};;function zf_NumberFormat(){}zf_NumberFormat.prototype.formatNumber=function(num,
decimalDigits){if(decimalDigits==null)decimalDigits=this.numberDecimalDigits;var numStr=zf_NumberFormat._formatNumber(Math.abs(num),decimalDigits,this.numberDecimalSeparator,
this.numberGroupSizes,this.numberGroupSeparator);if(num<0){var pattern=zf_NumberFormat._negNumberPatterns[this.numberNegativePattern];if(!pattern)pattern=zf_NumberFormat._negNumberPatterns[0];
return zf_stdFormatString(pattern,this.negativeSign,numStr);}return numStr;};zf_NumberFormat.prototype.formatMoney=function(amount,currency){var pattern;if(currency&&currency.code=="USD"){pattern=amount>=0?zf_NumberFormat._posCurrencyPatterns[0]:zf_NumberFormat._negCurrencyPatterns[0];
}else if(amount>=0){pattern=zf_NumberFormat._posCurrencyPatterns[this.currencyPositivePattern];if(!pattern)pattern=zf_NumberFormat._posCurrencyPatterns[0];}else{amount=-amount;
pattern=zf_NumberFormat._negCurrencyPatterns[this.currencyNegativePattern];if(!pattern)pattern=zf_NumberFormat._negCurrencyPatterns[0];}var numStr=zf_NumberFormat._formatNumber(amount,
this.currencyDecimalDigits,this.currencyDecimalSeparator,this.currencyGroupSizes,this.currencyGroupSeparator);var symbol=currency?currency.symbol:'';return zf_stdFormatString(pattern,
this.negativeSign,symbol,numStr).replace(/^\s+|\s+$/g,'');};zf_NumberFormat._formatNumber=function(num,decimalDigits,decimalSeparator,groupSizes,groupSeparator){groupSizes=groupSizes.concat();
var result=[];var numStr=num.toFixed(decimalDigits);var pos=numStr.lastIndexOf('.');if(pos<0)pos=numStr.length;else result.unshift(decimalSeparator,numStr.substring(pos+1));
var groupSize=groupSizes.length>0?groupSizes.shift():0;while(groupSize!=0&&pos>0){var from=pos-groupSize>=0?pos-groupSize:0;result.unshift(numStr.substring(from,
pos));pos=from;if(pos>0)result.unshift(groupSeparator);if(groupSizes.length>0)groupSize=groupSizes.shift();}if(pos>0)result.unshift(numStr.substring(0,pos));return result.join('');
};zf_NumberFormat._negNumberPatterns=['({1})','{0}{1}','{0} {1}','{1}{0}','{1} {0}'];zf_NumberFormat._negCurrencyPatterns=['({1}{2})','{0}{1}{2}','{1}{0}{2}','{1}{2}{0}','({2}{1})','{0}{2}{1}',
'{2}{0}{1}','{2}{1}{0}','{0}{2} {1}','{0}{1} {2}','{2} {1}{0}','{1} {2}{0}','{1} {0}{2}','{2}{0} {1}','({1} {2})','({2} {1})'];zf_NumberFormat._posCurrencyPatterns=['{1}{2}','{2}{1}',
'{1} {2}','{2} {1}'];function zf_stdFormatEditableDecimal(val,numDecimals){var format=zf_NumberFormat.current;if(numDecimals===undefined)numDecimals=6;var res=val.toFixed(numDecimals);
if(res.indexOf(".")!=-1){res=res.replace(/0+$/,"");res=res.replace(/\.$/,"");}return res.replace(/\./i,format.numberDecimalSeparator);}function zf_stdParseEditableDecimal(val){if(val&&val.length>0)val=val.replace(/^\s+|\s+$/g,
'');var format=zf_NumberFormat.current;var separator=format.numberDecimalSeparator;if(!new RegExp("^-?\\d*\\"+separator+"?\\d*$").test(val)){return NaN;}return parseFloat(val.replace(new RegExp("(\\"+separator+")"),
"."));}function zf_stdCheckEditableDecimal(val){if(isNaN(zf_stdParseEditableDecimal(val))){return zf_stdFormatString("Please use the correct decimal format (e.g. {0})",zf_stdFormatEditableDecimal(12.3));
}return undefined;}function zf_stdFormatEditableInteger(val){return parseInt(val,10).toFixed(0);}function zf_stdParseEditableInteger(val){if(!new RegExp("^-?\\d+$").test(val)){return NaN;
}return parseInt(val);}function zf_stdCheckEditableInteger(val){if(isNaN(zf_stdParseEditableInteger(val))){return zf_stdFormatString("Please use the correct integer format (e.g. {0})",
zf_stdFormatEditableInteger(42));}return undefined;};function zf_stdTrim(str){var re=/^\s*(\S?[\s\S]*?)\s*$/;re.exec(str);return RegExp.$1;}function zf_stdFormatString(format){var args=arguments;
for(var i=1;i<arguments.length;i++){var re=new RegExp("\\{"+(i-1)+"\\}","g");format=format.replace(re,function(){return args[i];});}return format;}var zf_stdCompareString=("".localeCompare)?function(a,
b){return a.localeCompare(b);}:function(a,b){return(a<b)?-1:(a>b)?1:0;};function zf_stdFormatByteSize(value){if(value==null)return null;var sign=false;if(value<0){value=-value;
sign=true;}var i=0;var sz=value;var scale=1;while(sz>=1024&&i<12){rem=value%1024;sz=Math.floor(sz/1024);scale*=1024;i+=3;}var format;switch(i){case 0:format="{0} bytes";
break;case 3:format="{0} KB";break;case 6:format="{0} MB";break;case 9:format="{0} GB";break;case 12:format="{0} TB";break;default:zf_assert(false);break;}var decimalDigits=0;
if(scale>1){value/=scale;decimalDigits=value<10?2:1;}if(sign)value=-value;return zf_stdFormatString(format,zf_NumberFormat.current.formatNumber(value,decimalDigits));
}function zf_stdInsertBreakHints(text){var res="";for(var i=0;i<text.length;i++){var ch=text[i];res+=ch;if(ch=='/'||ch=='\\'||ch==','||ch==';'||ch=='#'||ch=='&'||ch=='.'||ch=='+'||ch=='-'||ch=='_'){var spaceIndex=text.lastIndexOf(' ',
i);if(spaceIndex==-1||i-spaceIndex>=10){res+=String.fromCharCode(0x200B);}}}text=res;return text;}function zf_stdIsValidEmail(email){return(/^[-+=\w\.][-+=\w\x27\.]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/.test(email))||(/^[-+=\w\.][-+=\w\x27\.]*@\[[^\]]+\]$/.test(email));
}function zf_stdIsValidZipCode(zipCode){;return zipCode.match(/^\d{5}$/)||zipCode.match(/^\d{5}-\d{4}$/)||zipCode.match(/^\d{5}\+\d{4}$/);}function zf_stdFormatDuration(duration,
hideLeadingZero){if(!duration)duration=0;var seconds=duration%60;if(seconds<10)seconds="0"+seconds;var minutes=Math.floor(duration/60);if(!hideLeadingZero&&minutes<10)minutes="0"+minutes;
return[minutes,seconds].join(':');}function zf_stdPad(s,length,padChar){if(s==null)s="";else s=s.toString();if(s.length>=length)return s;if(padChar==undefined||padChar==null)padChar=" ";
;if(length>0)return Array(length-s.length+1).join(padChar)+s;else return s+Array(-length-s.length+1).join(padChar);}function zf_stdJoinKeywords(keywords){;var res=[];for(var i=0;
i<keywords.length;i++){var keyword=keywords[i];if(/[\x20,;\x27]/.test(keyword)&&!(/\x22/.test(keyword)))keyword='"'+keyword+'"';else if(/\x22/.test(keyword))keyword="'"+keyword+"'";
res.push(keyword);}return res.join(", ");}function zf_stdParseKeywords(keywords,disableSorting){;keywords=keywords.replace(/[\u2018\u2019\u201A\u201B]/g,"'");keywords=keywords.replace(/[\u201C\u201D\u201E\u201F]/g,
'"');var res=[];var len=keywords.length;var pos=0;var end;while(pos<len){while(keywords.charAt(pos)==' '||keywords.charAt(pos)==','||keywords.charAt(pos)==';'){++pos;
if(pos==len)break;}if(pos==len)break;if(keywords.charAt(pos)=='"'||keywords.charAt(pos)=="'"){++pos;if(pos==len)break;end=pos;while(keywords.charAt(end)!=keywords.charAt(pos-1)){++end;
if(end==len)break;}res.push(keywords.substring(pos,end));pos=end;if(pos<len)pos++;}else{end=pos;while(keywords.charAt(end)!=' '&&keywords.charAt(end)!=','&&keywords.charAt(end)!=';'){++end;
if(end==len)break;}res.push(keywords.substring(pos,end));pos=end;}}if(!disableSorting)res.sort();return res;};var _zf_stdMonthNames=["January","February","March","April",
"May","June","July","August","September","October","November","December"];function zf_stdFormatDate(date){if(date==null)return null;var yr=date.getFullYear()%100;var mo=_zf_stdMonthNames[date.getMonth()].substr(0,
3);var dt=date.getDate();if(yr<10)yr="0"+yr;return dt+"-"+mo+"-"+yr;}function zf_stdFormatDateTime(date,seconds){if(date==null)return null;var yy=date.getFullYear(),yr=yy<1930?yy:(yy%100);
var mo=_zf_stdMonthNames[date.getMonth()].substr(0,3);var dt=date.getDate();var hh=date.getHours();var mm=date.getMinutes();if(yr<10)yr="0"+yr;if(hh<10)hh="0"+hh;
if(mm<10)mm="0"+mm;var s=dt+"-"+mo+"-"+yr+" "+hh+":"+mm;if(seconds){var ss=date.getSeconds();if(ss<10)ss="0"+ss;s+=":"+ss;}return s;}function zf_stdFormatTime(date,seconds){if(date==null)return null;
var hh=date.getHours();var mm=date.getMinutes();if(hh<10)hh="0"+hh;if(mm<10)mm="0"+mm;var s=hh+":"+mm;if(seconds){var ss=date.getSeconds();if(ss<10)ss="0"+ss;s+=":"+ss;
}return s;}function zf_stdFormatDateTimeEx(date,seconds){if(date==null)return null;var t=new Date();var y=new Date(t);y.setDate(t.getDate()-1);var format=null;if(date.getFullYear()==t.getFullYear()&&date.getMonth()==t.getMonth()&&date.getDate()==t.getDate()){format="Today, {0}";
}else if(date.getFullYear()==y.getFullYear()&&date.getMonth()==y.getMonth()&&date.getDate()==y.getDate()){format="Yesterday, {0}";}if(!format)return zf_stdFormatDateTime(date,
seconds);var hh=date.getHours();var mm=date.getMinutes();if(hh<10)hh="0"+hh;if(mm<10)mm="0"+mm;var s=hh+":"+mm;if(seconds){var ss=date.getSeconds();if(ss<10)ss="0"+ss;
s+=":"+ss;}return zf_stdFormatString(format,s);}function zf_stdParseDateTimeUTC(value){var regExp=/([0-9]{4})-([0-9]{2})-([0-9]{2})\s+([0-9]{2}):([0-9]{2}):([0-9]{2})Z?/;
regExp.exec(value);var yr=parseInt(RegExp.$1,10);var mo=parseInt(RegExp.$2,10)-1;var dt=parseInt(RegExp.$3,10);var hh=parseInt(RegExp.$4,10);var mm=parseInt(RegExp.$5,
10);var ss=parseInt(RegExp.$6,10);var date=new Date();date.setUTCFullYear(yr,mo,dt);date.setUTCHours(hh,mm,ss);return date;}function zf_stdParseDateTime(value){var regExp=/([0-9]{4})-([0-9]{2})-([0-9]{2})\s+([0-9]{2}):([0-9]{2}):([0-9]{2})Z?/;
regExp.exec(value);var yr=parseInt(RegExp.$1,10);var mo=parseInt(RegExp.$2,10)-1;var dt=parseInt(RegExp.$3,10);var hh=parseInt(RegExp.$4,10);var mm=parseInt(RegExp.$5,
10);var ss=parseInt(RegExp.$6,10);var date=new Date();date.setFullYear(yr,mo,dt);date.setHours(hh,mm,ss);return date;}function zf_stdFormatTimeInterval(value){if(value==null)return null;
var nHours=Math.floor(value/3600);var nMin=Math.floor(value/60)%60;var nSec=Math.floor(value+0.5)%60;var strFormat;if(value<60)strFormat="{2} sec";else if(nHours==0&&nSec==0)strFormat="{1} min";
else if(nHours==0)strFormat="{1} min {2} sec";else if(nMin==0)strFormat="{0} hr";else strFormat="{0} hr {1} min";return zf_stdFormatString(strFormat,nHours,nMin,
nSec);};function zf_stdHtmlEncode(text){;return text.replace(/\&/g,"&amp;").replace(/\x22/g,"&quot;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\n/g,"<br/>").replace(/\r/g,
"");}function zf_stdHtmlDecode(text){return text.replace(/\<\/?br\/?\>/g,"\n").replace(/\&amp;/g,"&").replace(/\&lt;/g,"<").replace(/\&gt;/g,">");}function zf_stdScriptEncode(text){return text.replace(/([\\\x22\x27])/g,
'\\$1').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/</g,"\\x3C");}function zf_stdSetText(dom,text){if(typeof(dom)=="string")dom=document.getElementById(dom);
if(dom.innerText){if(dom.innerText!=text)dom.innerText=text;}else if(dom.textContent){if(dom.textContent!=text)dom.textContent=text;}else{while(dom.firstChild!=null)dom.removeChild(dom.firstChild);
dom.appendChild(document.createTextNode(text));}}function zf_stdGetText(dom){if(typeof(dom)=="string")dom=document.getElementById(dom);if(dom.innerText)return dom.innerText;
else if(dom.textContent)return dom.textContent;else if(dom.firstChild!=null)return dom.firstChild.nodeValue;else return "";}function zf_stdSetValue(element,value){if(typeof(element)=="string")element=document.getElementById(element);
if(element!=null)element.value=value;}function zf_stdGetValue(element){if(typeof(element)=="string")element=document.getElementById(element);return(element!=null)?element.value:"";
}function zf_stdGetClientWidth(){var width=1024;if(document.documentElement)width=document.documentElement.clientWidth;else if(window.innerWidth)width=window.innerWidth;
return width;}function zf_stdGetClientHeight(){if(document.documentElement)return document.documentElement.clientHeight;else if(window.innerHeight)return window.innerHeight;
else return 768;}function zf_stdGetOffset(elem,parent){if(parent!=null){var elemOffset=zf_stdGetOffset(elem);var parentOffset=zf_stdGetOffset(parent);return{cx:elemOffset.cx-parentOffset.cx,
cy:elemOffset.cy-parentOffset.cy};}if(typeof(elem)=="string")elem=document.getElementById(elem);var cx=0,cy=0;for(var obj=elem;obj!=null;obj=obj.offsetParent){cx+=obj.offsetLeft;
cy+=obj.offsetTop;}return{cx:cx,cy:cy};}function zf_stdGetClientScroll(){var cx=0,cy=0;if(typeof(window.pageYOffset)=='number'){cy=window.pageYOffset;cx=window.pageXOffset;
}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){cy=document.body.scrollTop;cx=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){cy=document.documentElement.scrollTop;
cx=document.documentElement.scrollLeft;}return{cx:cx,cy:cy};};function zf_stdReplaceClassName(elem,remove,add){if(remove==add)return;if(typeof(elem)=="string")elem=document.getElementById(elem);
if(elem==null)return;var classNames=elem.className.split(" ");var removeAt=-1;var foundAt=-1;for(var i=0;i<classNames.length;i++){if(classNames[i]==remove)removeAt=i;
else if(classNames[i]==add)foundAt=i;}var updated=false;if(removeAt!=-1){classNames.splice(removeAt,1);updated=true;}if(foundAt==-1&&add!=null){classNames.push(add);
updated=true;}if(updated){classNames.sort();elem.className=classNames.join(" ");}}function zf_stdHasClassName(elem,className){if(typeof(elem)=="string")elem=document.getElementById(elem);
if(elem==null)return false;if(elem.className==null||elem.className=="")return false;var classNames=elem.className.split(" ");for(var i=0;i<classNames.length;i++){if(classNames[i]==className)return true;
}return false;}function zf_stdGetCurrentStyle(obj,styleCss,styleProperty){if(styleProperty==null)styleProperty=styleCss;var style="0px";if(obj.currentStyle)style=obj.currentStyle[styleProperty];
else{style=document.defaultView.getComputedStyle(obj,null);if(style!=null)style=style.getPropertyValue(styleCss);}return style;}function zf_stdExtractPixels(value){if(value==null||value.indexOf("px")==-1)return 0;
return+value.substr(0,value.length-2);}function zf_stdExtractPercents(value){var pos=-1;if(value==null||(pos=value.indexOf("%"))==-1)return 0;return+value.substr(0,value.indexOf("%"));
}function zf_stdGetHeightAbove(obj){return zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,'padding-top','paddingTop'))+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,'border-top-width',
'borderTopWidth'))+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,'margin-top','marginTopWidth'));}function zf_stdGetHeightBelow(obj){return zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,
'padding-bottom','paddingBottom'))+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,'border-bottom-width','borderBottomWidth'))+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,
'margin-bottom','marginBottomWidth'));}function zf_stdGetHeightOverall(obj){var cyHeight=obj.offsetHeight;if(typeof(cyHeight)!="number")cyHeight=0;return cyHeight+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,
'margin-top','marginTop'))+zf_stdExtractPixels(zf_stdGetCurrentStyle(obj,'margin-bottom','marginBottom'));};function zf_stdSetCookie(name,value,expire,noescape){if(!noescape)value=escape(value);
var cookie=name+"="+value+";path=/";if(expire!=null)cookie+=";expires="+expire.toGMTString();document.cookie=cookie;}function zf_stdGetCookie(name){var cookie=document.cookie;
var start;var end;if((start=cookie.indexOf(name+"="))==-1)return null;start+=name.length+1;if((end=cookie.indexOf(";",start))==-1)end=cookie.length;return unescape(cookie.substring(start,
end));}function zf_stdRemoveCookie(name,specificHost){var expires=new Date();expires.setFullYear(expires.getFullYear()-1);zf_stdSetCookie(name,"",expires,true,specificHost);
}var _zf_urlTransforms=[];function zf_stdGetTransferUrl(target,path){var schema,host;if(target===true||target===false){schema=target?"https:":"http:";host=target?zf_secureHost:zf_defaultHost;
}else{var k=target.indexOf("://");;var n=target.indexOf("/",k+3);;schema=target.substring(0,k+1).toLowerCase();host=target.substring(k+3,n).toLowerCase();path=target.substr(n);
}if((k=host.indexOf(":"))!=-1)host=host.substring(0,k);var i=host.lastIndexOf(zf_defaultDomain);var defaultTarget=i!=-1&&i+zf_defaultDomain.length==host.length;if(location.protocol==schema&&location.host==host)return path;
var hostCode=host;if(schema=="https:")hostCode="s";else if(host==zf_defaultHost)hostCode="z";else if(host==location.host)hostCode="-";else if(defaultTarget)hostCode=host.substr(0,
host.length-zf_defaultDomain.length);if(path=="/")path="";var url=["/zf/transfer/",hostCode,path].join("");for(i=0;i<_zf_urlTransforms.length;i++)url=_zf_urlTransforms[i](url,
schema,host);return url;}function zf_stdRegisterUrlTransform(transform){;_zf_urlTransforms.push(transform);}function zf_stdGetLogoutUrl(target){var url=['/zf/core/logout.ashx?token=',
zf_stdGetCookie('zf_token')];if(target!=null)url.push('&uri=',encodeURIComponent(target));return url.join('');}function _zf_stdSetTimezoneOffset(){var expires=new Date();
expires.setFullYear(expires.getFullYear()+10);zf_stdSetCookie("zf_10y_tz",-(new Date().getTimezoneOffset()),expires);};function zf_stdCreateXMLHttpRequest(){if(window.XMLHttpRequest)return new XMLHttpRequest();
else return new ActiveXObject("Microsoft.XMLHTTP");}function zf_stdServerRequest(method,url,api,params,callback){var headers;var sticky=false;if(typeof(method)!="string"){var args=method;
method=args.method;headers=args.headers;sticky=args.sticky;url=args.url;api=args.api;params=args.params;callback=args.callback;};;;var request=zf_stdCreateXMLHttpRequest();
request.onreadystatechange=function(){if(request.readyState!=4)return;if(callback!=null){var retVal=null;if(request.status==200){retVal=request.responseText;if(window.JSON&&window.JSON.parse)retVal=_zf_stdTransformResponse(JSON.parse(retVal));
else{retVal="return _zf_stdTransformResponse("+retVal+")";retVal=new Function(retVal)();}}else if(request.status==0){return;}callback(request.status,retVal);}};var body={method:api,
params:[],id:0};if(params!=null){for(var i=0;i<params.length;i++){if(params[i]instanceof Function)body.params.push(params[i]());else body.params.push(params[i]);
}}body=_zf_stdJsonSerialize(body).join("");if(method=="GET"){url+="?request="+encodeURIComponent(body);body=null;}request.open(method,url,true);if(method=="POST")request.setRequestHeader("Content-Type",
"application/json");headers=headers||{};if(sticky)headers["X-LB-Sticky"]="zf_sticky";for(var h in headers)request.setRequestHeader(h,headers[h]);request.send(body);
}function zf_stdServerRequestEx(method,url,api,params,callback){function callbackWrapper(status,retVal){var error;var result;if(status!=200){result=null;error={message:status==403?"Access Denied.":"An unexpected error has occurred. Please try again later. If this problem persists, contact Support."};
}else{result=retVal.result;error=retVal.error;}if(callback)callback(result,error);}if(typeof(method)!="string"){var args=method;method={};for(p in args)method[p]=args[p];
callback=args.callback;method.callback=callbackWrapper;}zf_stdServerRequest(method,url,api,params,callbackWrapper);}function _zf_stdJsonSerialize(val){var json=[];var i;
var v;switch(typeof(val)){case "boolean":json.push(val?"true":"false");break;case "number":json.push(val.toString());break;case "string":json.push('"',_zf_stdJsonEncode(val),
'"');break;case "object":if(val==null){json.push("null");break;}if(val.constructor==Array){json.push("[");var last=val.length;for(i=0;i<last;i++){if(i>0)json.push(",");
if(json.length>1000)json=[json.join('')];if((v=val[i])===null)json.push("null");else switch(typeof(v)){case "boolean":json.push(v?"true":"false");break;case "number":json.push(v.toString());
break;case "string":json.push('"',_zf_stdJsonEncode(v),'"');break;case "object":json=json.concat(_zf_stdJsonSerialize(v));break;default:;json.push("null");break;
}}json.push("]");break;}if(val.constructor==Date){var month=val.getUTCMonth()+1;if(month<10)month="0"+month;var date=val.getUTCDate();if(date<10)date="0"+date;var hours=val.getUTCHours();
if(hours<10)hours="0"+hours;var minutes=val.getUTCMinutes();if(minutes<10)minutes="0"+minutes;var seconds=val.getUTCSeconds();if(seconds<10)seconds="0"+seconds;json.push('{"$type":"Date","Value":"',
val.getUTCFullYear(),'-',month,'-',date,' ',hours,':',minutes,':',seconds,'"}');break;}json.push("{");i=0;for(var prop in val){v=val[prop];if(prop!="prototype"&&typeof(v)!="function"){if(i>0)json.push(",");
json.push('"',_zf_stdJsonEncode(prop.toString()),'":');if(v===null)json.push("null");else switch(typeof(v)){case "boolean":json.push(v?"true":"false");break;case "number":json.push(v.toString());
break;case "string":json.push('"',_zf_stdJsonEncode(v),'"');break;case "object":json=json.concat(_zf_stdJsonSerialize(v));break;default:;json.push("null");break;
}i++;}}json.push("}");break;default:;json.push("null");break;}return json;}function zf_stdJsonSerialize(val){if(window.JSON&&window.JSON.stringify){return JSON.stringify(val,
function(k,v){if(!v||v.constructor!=Date)return v;var month=val.getUTCMonth()+1;if(month<10)month="0"+month;var date=val.getUTCDate();if(date<10)date="0"+date;var hours=val.getUTCHours();
if(hours<10)hours="0"+hours;var minutes=val.getUTCMinutes();if(minutes<10)minutes="0"+minutes;var seconds=val.getUTCSeconds();if(seconds<10)seconds="0"+seconds;return{"$type":'Date',
Value:[val.getUTCFullYear(),'-',month,'-',date,' ',hours,':',minutes,':',seconds].join('')};});}else return _zf_stdJsonSerialze(val).join('');}function _zf_stdJsonEncode(text){text=text.replace(/([\\\x22])/g,
"\\$1");text=text.replace(/\r/g,"\\r");text=text.replace(/\n/g,"\\n");text=text.replace(/\t/g,"\\t");return text;}function _zf_stdTransformResponse(val,objects,metas){if(typeof(val)!="object")return val;
if(val==null)return null;if(val instanceof Array){for(var i=0;i<val.length;i++){if(typeof(val[i])=="object")val[i]=_zf_stdTransformResponse(val[i],objects,metas);
}return val;}var metaDate=val["$date"];if(metaDate!=null)return zf_stdParseDateTimeUTC(metaDate);var metaRoot=val["$root"];if(metaRoot!=null){return _zf_stdTransformResponse(metaRoot,
val["$objects"],val["$meta"]);}var metaRef=val["$ref"];if(metaRef!=null){return _zf_stdTransformCachedObject(metaRef,objects,metas);}var metaObj=val["$obj"];if(metaObj!=null){return _zf_stdTransformInlineObject(metaObj,
objects,metas);}var metaType=val["$type"];if(metaType=="DateTime")return zf_stdParseDateTimeUTC(val["Value"]);var obj=val;if(metaType!=null){obj=_zf_stdCreateInstance(metaType);
}var propName;var propVal;for(propName in val){if(propName.charAt(0)!="$"){propVal=val[propName];if(typeof(propVal)=="object")propVal=_zf_stdTransformResponse(propVal,
objects,metas);obj[propName]=propVal;}}if(obj.postSerialize)obj.postSerialize();return obj;}var _$=_zf_stdTransformResponse;function _zf_stdCreateInstance(className){var type=className;
if(className.indexOf("zf")!=0)type="zf_"+type;;var obj=new Function("return typeof("+type+") == 'function' ? new "+type+"() : {}")();obj["$type"]=className;return obj;
}function _zf_stdTransformCachedObject(index,objects,metas){var cached=objects[index];if(!(cached instanceof Array))return cached;var obj=_zf_stdTransformInlineObject(cached,
objects,metas);objects[index]=obj;return obj;}function _zf_stdTransformInlineObject(fields,objects,metas){var meta=metas[fields[0]];var type=meta[0];var obj=type!=null?_zf_stdCreateInstance(type):{};
for(var i=1;i<fields.length;i++){var propName=meta[i];var propVal=fields[i];if(propVal==null&&type!=null)continue;if(propName.charAt(0)=="$")continue;if(typeof(propVal)=="object")propVal=_zf_stdTransformResponse(propVal,
objects,metas);obj[propName]=propVal;}if(obj.postSerialize)obj.postSerialize();return obj;};var _zf_stdDelayLoad={};function _zf_stdRegisterDelayLoad(filePath){;var fileName=filePath.substr(filePath.lastIndexOf('/')+1);
if(filePath.charAt(0)=='/'){var host=(location.protocol=='http:')?zf_cdnHost:zf_secureHost;filePath=location.protocol+'//'+host+filePath;}if(_zf_stdDelayLoad[fileName]===undefined)_zf_stdDelayLoad[fileName]=filePath;
}function zf_stdLoadScript(fileName,callback,fragment){;if(callback==null)callback=zf_stdFalse;var entry=_zf_stdDelayLoad[fileName];switch(typeof(entry)){case "string":_zf_stdDelayLoad[fileName]=callback;
break;case "function":_zf_stdDelayLoad[fileName]=[entry,callback];return;case "object":if(entry==null)callback();else if(entry.constructor==Array)entry.push(callback);
return;default:;return;}var url=entry;if(fragment)url+=fragment;var script=document.createElement("SCRIPT");script.type="text/javascript";script.src=url;document.body.appendChild(script);
}function zf_stdNotifyScriptLoad(fileName){switch(typeof(_zf_stdDelayLoad[fileName])){case "function":_zf_stdDelayLoad[fileName]();break;case "object":var list=_zf_stdDelayLoad[fileName];
if(list!=null&&list.constructor==Array){for(var i=0;i<list.length;i++)list[i]();}break;default:break;}_zf_stdDelayLoad[fileName]=null;;}function zf_stdPrefetchScript(fileName){;
var uid;if(zf_stdPrefetchScript.uid==null)uid=zf_stdPrefetchScript.uid=0;else uid=++zf_stdPrefetchScript.uid;var entry=_zf_stdDelayLoad[fileName];if(typeof(entry)=="string"){var frame=document.createElement("IFRAME");
frame.style.cssText="position: absolute; visibility: hidden; left:0px; top: 0px;";document.body.appendChild(frame);setTimeout(function(){var doc=frame.contentWindow.document;
var script=doc.createElement("SCRIPT");script.type="text/javascript";script.src=entry;doc.body.appendChild(script);frame=null;doc=null;},100);}};function zf_Object(){}zf_Object.prototype.closure=function(method){;
var self=this;if(arguments.length==1)return function(){return method.apply(self,arguments);};var args=[];for(var i=1;i<arguments.length;i++)args.push(arguments[i]);
return function(){var a=[];for(var i=0;i<arguments.length;i++)a.push(arguments[i]);return method.apply(self,a.concat(args));};};;function zf_stdSetClientObject(dom,client){if(typeof(dom)=="string")dom=document.getElementById(dom);
dom.zenfolioObject=client;}function zf_stdGetClientObject(dom){if(dom==null)return null;if(typeof(dom)=="string"){dom=document.getElementById(dom);if(dom==null)return null;
}var client;client=dom.zenfolioObject;return client;}function zf_Control(id,clientObject){if(zf_stdNoArgs(arguments))return;;;if(clientObject==null)clientObject=zf_Control.getClientObjectName(id);
this.id=id;this.clientObject=clientObject;}zf_Control.inherits(zf_Object);zf_Control.getClientObjectName=function(id){return(id.charAt(0)=='_'?"_zf":"_zf_")+id;};zf_Control.find=function(id){return window[zf_Control.getClientObjectName(id)];
};zf_Control.prototype.dom=function(suffix){var id=[this.id];for(var i=0;i<arguments.length;i++)id.push(arguments[i]);return document.getElementById(id.join("-"));};zf_Control.prototype.$=function(selector){return selector==null?$(this.dom()):$(selector,
this.dom());};zf_Control.prototype.$dom=function(suffix){var node=this.dom.apply(this,arguments);return $(node?node:[]);};zf_Control.prototype.eventHandler=function(method){;var self=this;
if(arguments.length==1)return function(e){return method.apply(self,[zf_stdGetEvent(e)]);};var args=[];for(var i=1;i<arguments.length;i++)args.push(arguments[i]);
return function(e){return method.apply(self,[zf_stdGetEvent(e)].concat(args));};};;var zf_stdDeferCallV=(function(){var queue=[];var yield=1;var slice=400;var batch=0;
var tagged={};var onexecute=function(){++batch;;;var start=new Date().getTime();while(queue.length>0){var task=queue[0];var tag=task.tag;if(tag){;delete tagged[tag];
task.tag=null;}var taskStart=new Date().getTime();try{task.method.apply(task.self,task.args);}catch(e){;}queue.shift();;if(new Date().getTime()-start>slice)break;
}if(queue.length>0){;setTimeout(onexecute,yield);};};return function(tag,method,self,args){;;if(queue.length==0)setTimeout(onexecute,yield);if(tag){if(tagged[tag]){var found;
for(var i=0;i<queue.length;i++){if(queue[i].tag==tag){;queue.splice(i,1);found=true;break;}};}else{tagged[tag]=true;}};queue.push({tag:tag,method:method,self:self,
args:args});};})();function zf_stdDeferCall(tag,method,self){var args=[];for(var a=3;a<arguments.length;a++)args.push(arguments[a]);zf_stdDeferCallV(tag,method,self,args);
}function zf_stdMakeDeferred(tag,method){return function(){zf_stdDeferCallV(tag,method,this,arguments);};}function zf_stdMakeMethodsDeferred(obj,id,names){var bake=function(tag,
method,obj){return function(){zf_stdDeferCallV(tag,method,obj,arguments);};};for(var i=0;i<names.length;i++){var name=names[i];var method=obj[name];;obj[name]=bake(id+"."+name,
method,obj);}};function zf_RequestQueue(interval,concurrent){this._interval=interval;this._concurrent=concurrent!=null?concurrent:1;this._queue=[];}zf_RequestQueue.prototype.enqueue=function(method,
url,api,params,callback,tag){var request={method:method,url:url,api:api,params:params,callback:callback,executing:false,tag:tag};this._queue.push(request);if(this._queue.length<=this._concurrent)this._execute(request);
};zf_RequestQueue.prototype.enqueueEx=function(method,url,api,params,callback,tag){this.enqueue(method,url,api,params,function(status,retVal){var error;var result;if(status!=200){result=null;
error={message:status==403?"Access Denied.":"An unexpected error has occurred. Please try again later. If this problem persists, contact Support."};}else{result=retVal.result;
error=retVal.error;}if(callback!=null)callback(result,error);},tag);};zf_RequestQueue.prototype.bump=function(tag){var highest=-1;for(var i=0;i<this._queue.length;i++){var request=this._queue[i];
if(request.tag==tag){if(i==0||request.executing)break;this._queue=this._queue.splice(i,1).concat(this._queue);break;}if(highest==-1&&!request.executing)highest=i;
}};zf_RequestQueue.prototype._execute=function(request){;var self=this;var callback=function(status,retVal){for(var i=0;i<self._queue.length;i++){if(self._queue[i]==request)break;
};self._queue.splice(i,1);request.callback(status,retVal);for(var j=0;j<self._concurrent;j++){if(j==self._queue.length)break;var r=self._queue[j];if(!r.executing){r.executing=true;
setTimeout(function(){self._execute(r);},self._interval);break;}}};request.executing=true;zf_stdDeferCall(null,zf_stdServerRequest,null,request.method,request.url,
request.api,request.params,callback);};;function zf_Loadable(){if(zf_stdNoArgs(arguments))return;this.loaded=this.requested=false;this._nextSinkId=0;this._uniqueId=zf_Loadable._counter++;
this._callbacks={};}zf_Loadable._counter=0;zf_Loadable.inprogress={};zf_Loadable.watcher=setInterval(function(){var now=new Date();for(var key in zf_Loadable.inprogress){var loadable=zf_Loadable.inprogress[key];
if(now.getTime()-loadable._requestTime.getTime()>1000)loadable.setDelayed();}},500);zf_Loadable.notifyLoaded=function(loadable,callback){;if(loadable.loaded){callback(loadable);
return true;}else{var sink={};loadable.advise(sink,function(){loadable.unadvise(sink);callback(loadable);});return false;}};zf_Loadable.prototype.getPart=function(partType,
extra){;;var partName=partType.name;var part;if((part=this[partName])==null){part=this[partName]=new partType(this);part.setRequested();var args=$.makeArray(arguments);
args.shift();zf_Loadable.notifyLoaded(this,function(){part.load.apply(part,args);});};;return part;};zf_Loadable.prototype.advise=function(sink,onload,ondelay){if(this.loaded)return;
var sinkId=null;if(sink.__loadables==null)sink.__loadables={};else sinkId=sink.__loadables[this._uniqueId];if(sinkId==null){sinkId=this._nextSinkId++;sink.__loadables[this._uniqueId]=sinkId;
}this._callbacks[sinkId]=[onload,ondelay];if(this.delayed&&ondelay)ondelay.call(this);};zf_Loadable.prototype.unadvise=function(sink){var sinkId=null;var loadables=sink.__loadables;
if(loadables!=null)sinkId=loadables[this._uniqueId];if(sinkId!=null){loadables[this._uniqueId]=null;delete loadables[this._uniqueId];this._callbacks[sinkId]=null;
delete this._callbacks[sinkId];}};zf_Loadable.prototype.done=function(){if(this.loaded)return;this.requested=this.loaded=true;delete zf_Loadable.inprogress[this._uniqueId];
for(var sinkId in this._callbacks)this._callbacks[sinkId][0].call(this);};zf_Loadable.prototype.postSerialize=function(){this.requested=this.loaded=true;};zf_Loadable.prototype.setRequested=function(){;
;;this.requested=true;this._requestTime=new Date();zf_Loadable.inprogress[this._uniqueId]=this;};zf_Loadable.prototype.setDelayed=function(){;;;this.delayed=true;delete zf_Loadable.inprogress[this._uniqueId];
for(var sinkId in this._callbacks){var callback=this._callbacks[sinkId][1];if(callback!=null)callback.call(this);}};;function zf_Animation(states,callback){;;this.inprogress=false;
this._timer=null;this._variable=0;this._from=this._to=0;this._end=this._start=new Date().getTime();this._states=states;this._callback=callback;var self=this;this._clear=function(){self.inprogress=false;
self._oncomplete=null;if(self._timer){clearInterval(self._timer);self._timer=null;}};}zf_Animation.prototype._run=function(){var oncomplete=this._oncomplete;this._clear();this.inprogress=true;
var self=this;var callback=function(){var now=new Date().getTime();if(now>=self._end||self._from==self._to||self._end==self._start)self._variable=self._to;if(self._variable==self._to){self._clear();
self._callback(self._to);if(oncomplete)oncomplete();return;}var total=self._end-self._start;var spent=now-self._start;var dtotal=Math.abs(self._from-self._to);var dspent=Math.ceil(spent*dtotal/total);
if(self._from<self._to){self._variable=self._from+dspent;if(self._variable>self._to)self._variable=self._to;}else{self._variable=self._from-dspent;if(self._variable<self._to)self._variable=self._to;
}if(self._variable==self._to){self._clear();if(oncomplete)oncomplete();}if(dspent==0)return;self._callback(self._variable);};this._timer=setInterval(callback,10);
this._callback(this._variable);};zf_Animation.prototype.jump=function(state){;this._clear();this._from=this._to=this._states[state];this._variable=this._to;this._callback(this._variable);
};zf_Animation.prototype.resync=function(){this._callback(this._variable);};zf_Animation.prototype.animate=function(state,speed,oncomplete){;this._from=this._variable;this._to=this._states[state];
this._start=new Date().getTime();this._end=this._start;this._oncomplete=oncomplete;if(this._to==this._variable){if(oncomplete)oncomplete();this._clear();return;}var diff=Math.abs(this._variable-this._to);
var time=Math.ceil(speed.t*diff/speed.s);this._end=this._start+time;this._run();};;function zf_DelayedInvoke(delay){this.delay=delay;}zf_DelayedInvoke.prototype.invoke=function(callback,
delay){;this.clear();this.callback=callback;var self=this;var pending=setTimeout(function(){if(pending==self.pending){self.pending=null;callback();}},delay==null?this.delay:delay);
this.pending=pending;};zf_DelayedInvoke.prototype.clear=function(){if(!this.pending)return;clearTimeout(this.pending);this.pending=null;};;var _zf_stdBase32Digits="123456789ABCDEFGHJKMNPQRSTUVWXYZ";
function zf_stdBase32Encode(number){var res="";while(number>0){res=_zf_stdBase32Digits.charAt(number&0x1F)+res;number>>>=5;}return res;}function zf_stdBase32Decode(encoded){encoded=encoded.toUpperCase();
var res=0;for(var i=0;i<encoded.length;i++){res<<=5;res|=_zf_stdBase32Digits.indexOf(encoded.charAt(i));}return res;};function zf_VolumeMapper(code){;var iter={code:code,
pos:0,length:code.length};this._default=zf_VolumeMapper._decodeInt(iter);this._mapping={};while(iter.pos<iter.length){var method=zf_VolumeMapper._decodeInt(iter);
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
var f=Math.floor(x);return x-f==0.5?f:r;};cx=Math.max(1,bankersRound(cx*ratio));cy=Math.max(1,bankersRound(cy*ratio));}}return{cx:cx,cy:cy};};;function zf_PhotoImage(id,width,
height,timestamp,volume,token){if(zf_stdNoArgs(arguments))return;zf_BasicImage.prototype.constructor.apply(this,arguments);this.prefix="p";this.video=false;}zf_PhotoImage.inherits(zf_BasicImage);
zf_PhotoImage._fields=["id","photoId","width","height","timestamp","volume","token","prefix","_mapper","video"];zf_PhotoImage.clone=function(photo){if(photo==null)return null;return zf_stdCopyFields(new zf_PhotoImage(),
photo,zf_PhotoImage._fields);};zf_PhotoImage.prototype.postSerialize=function(){zf_BasicImage.prototype.postSerialize.call(this);if(this.flags&zf_PhotoFlags.Video)this.video=true;
};zf_PhotoImage.prototype.getInternalUrl=function(method,options){;if(this.id<=0)return null;if(options==null)options={};var volume=options.volume;if(volume==null)volume=this._mapper.map(method);
var url=[];if(this.cdnPath!=null&&zf_stdGetCookie('zf_5y_visitor')!=null)url.push('/cdn',this.cdnPath);else url.push('/img');var modifier=options.modifier!=null?options.modifier:'';
var block=!!options.block;url.push('/s',zf_imageVS[volume],'/v',volume,'/p',this.id,'-',method.code,modifier,method.type,(block?'?sn=':'?ts='),this.timestamp);if(this.token!=null)url.push("&tk=",
this.token);if(this.timestamp!=null&&(zf_stdBase32Decode(this.timestamp)&1)!=0){if(zf_userId!=0)url.push("&uid=",zf_userId);var keyRing=zf_stdGetCookie("zf_keyring");
if(keyRing!=null)url.push("&keyringx=",keyRing);}return url.join('');};zf_PhotoImage.prototype.getExternalUrl=function(method,ext){if(this.id<=0)return null;var volume=this._mapper.defaultMapping();
var url=['/img/s',zf_imageVS[volume],'/v',volume,'/p',this.id];if(method!=null){if(method==zf_ProcessingMethod.Video1080p||method==zf_ProcessingMethod.Video720p||method==zf_ProcessingMethod.Video480p||method==zf_ProcessingMethod.Video360p){var timestamp=this.timestamp;
url=['/img/s',zf_imageVS[volume],'/v',volume,'/o',this.owner.id,'/c',this.metacn,'/p',this.id,'-',method.code,method.type];}else url.push('-',method.code,method.type);
}else url.push(this.fileType);return url.join('');};;function zf_FileImage(id,width,height,timestamp,volume,token,fileType,ownerId){if(zf_stdNoArgs(arguments))return;zf_BasicImage.prototype.constructor.apply(this,
arguments);this["$type"]="FileImage";this.prefix="u";}zf_FileImage.inherits(zf_BasicImage);zf_FileImage._fields=["id","width","height","timestamp","volume","token","prefix","_mapper","fileType",
"ownerId"];zf_FileImage.clone=function(file){if(file==null)return null;return zf_stdCopyFields(new zf_FileImage(),file,zf_FileImage._fields);};zf_FileImage.prototype.getExternalUrl=function(method){if(this.id<=0)return null;
var volume=this._mapper.defaultMapping();var url=this.ownerId?['/img/s',zf_imageVS[volume],'/v',volume,'/u',this.id,'-o',this.ownerId]:['/img/s',zf_imageVS[volume],
'/v',volume,'/u',this.id];if(method!=null)url.push('-',method.code,method.type,'?sn=');else url.push(this.fileType);return url.join('');};zf_FileImage.prototype.getInternalUrl=function(method,
options){;if(this.id<=0)return null;if(options==null)options={};var url=[location.protocol,'//'];if(location.protocol=='https:')url.push(location.host);else url.push(zf_cdnHost);
var volume=this._mapper.map(method);if(this.ownerId)url.push('/img/s',zf_imageVS[volume],'/v',volume,'/u',this.id,'-','o',this.ownerId,'-',method.code,method.type,
(options.block?'?sn=':'?ts='));else url.push('/img/s',zf_imageVS[volume],'/v',volume,'/u',this.id,'-',method.code,method.type,(options.block?'?sn=':'?ts='));return url.join('');
};;var zf_AccessType={Public:"Public",Private:"Private",Password:"Password",Protected:"Protected",Derived:"Derived"};var zf_AccessMask={None:0x00000000,ProtectOriginals:0x00000001,
ProtectExtraLarge:0x00000002,NoCollections:0x00000004,PasswordProtectOriginals:0x00000008,ProtectXXLarge:0x00000010,ProtectUserStats:0x00000020,ProtectVisits:0x00000040,
NoRecentList:0x00000080,NoPrivateSearch:0x00000100,Expires:0x00000200,ApproveGuestbook:0x00000400,ApproveComments:0x00000800,Protect1080p:0x00001000,NoPublicSearch:0x00002000,
ProtectDateCreated:0x00004000,ProtectDateModified:0x00008000,ProtectDateTaken:0x00010000,ProtectExif:0x00020000,ProtectLarge:0x00040000,ProtectMedium:0x00080000,
ProtectMeta:0x00004000|0x00008000|0x00020000|0x00010000,NoPublicGuestbookPosts:0x00100000,NoPrivateGuestbookPosts:0x00200000,NoAnonymousGuestbookPosts:0x00400000,
NoPublicComments:0x00800000,NoPrivateComments:0x01000000,NoAnonymousComments:0x02000000,ProtectGuestbook:0x04000000,ProtectComments:0x08000000,UnprotectCover:0x10000000,
Protect720p:0x20000000,Protect480p:0x40000000,ImageSizeLimitXXLarge:0x00000000,ImageSizeLimitExtraLarge:0x00000010,ImageSizeLimitLarge:0x00000010|0x00000002,ImageSizeLimitMedium:0x00000010|0x00000002|0x00040000,
ImageSizeLimitSmall:0x00000010|0x00000002|0x00040000|0x00080000,ImageSizeMask:0x00000010|0x00000002|0x00040000|0x00080000,VideoSizeLimit1080p:0x00000000,VideoSizeLimit720p:0x00001000,
VideoSizeLimit480p:0x00001000|0x20000000,VideoSizeLimit360p:0x00001000|0x20000000|0x40000000,VideoSizeMask:0x00001000|0x20000000|0x40000000,SearchAny:0x00000000,
SearchLocalOnly:0x00002000,SearchNone:0x00002000|0x00000100,SearchMask:0x00002000|0x00000100};function zf_AccessRealm(type,mask){this.realmId=0;this.ownerId=0;this.type=type!=null?type:zf_AccessType.Public;
this.mask=mask!=null?mask:zf_AccessMask.None;this.viewers=[];this.password=zf_AccessRealm.NotAvailable;this.passwordHint="";this.srcPassword="";this.srcPasswordHint="";
}zf_AccessRealm.NotAvailable={};zf_AccessRealm._fields=["type","mask","realmId","ownerId","viewers","password","passwordHint","srcPassword","srcPasswordHint","expiresOn"];zf_AccessRealm.clone=function(realm){if(realm==null)return null;
var clone=zf_stdCopyFields(new zf_AccessRealm(),realm,zf_AccessRealm._fields);clone.viewers=realm.viewers!=null?[].concat(realm.viewers):[];return clone;};;function zf_AccessInfo(parent,
type,mask){this.parent=parent;if(arguments.length==0){this.isDerived=true;zf_AccessRealm.prototype.constructor.call(this);}else if(parent!=null&&type==null){this.isDerived=true;
zf_AccessRealm.prototype.constructor.call(this,parent.type,parent.mask);}else{this.isDerived=false;zf_AccessRealm.prototype.constructor.call(this,type,mask);}}zf_AccessInfo._fields=["isCensored",
"isDerived","parent"].concat(zf_AccessRealm._fields);zf_AccessInfo.clone=function(info){if(info==null)return null;var clone=zf_stdCopyFields(new zf_AccessInfo(),info,zf_AccessInfo._fields);
clone.viewers=info.viewers!=null?[].concat(info.viewers):[];return clone;};zf_AccessInfo.prototype.getRealm=function(){var info=this;while(info.isDerived&&info.parent!=null)info=info.parent;
return info;};;var zf_PhotoFlags={None:0,HasTitle:1,HasCaption:2,HasCategories:4,HasKeywords:8,HasExif:16,HasComments:32,HasImage0:1024,HasImage1:2048,HasImage10:4096,
HasImage11:8192,Video:0x00008000,VideoReady:0x00010000,VideoFailed:0x00020000};;function _zf_stdCategoryCompare(a,b){if((a%1000)!=0)a=0;else if((a%100000)!=0)a=1;else a=2;
if((b%1000)!=0)b=0;else if((b%100000)!=0)b=1;else b=2;return a-b;};function zf_ScrapbookModifier(){;}zf_ScrapbookModifier.Owner=0;zf_ScrapbookModifier.Photographer=1;zf_ScrapbookModifier.Other=2;function zf_ScrapbookInfo(){this.map={};}zf_ScrapbookInfo._fields=["token",
"name","changeNumber","photoCount","sharerName","isOwned","isSharedWith","isReadOnly","isStored"];zf_ScrapbookInfo.prototype.update=function(update){;for(var key in update){var value=update[key];
if(value==null)continue;this[key]=value;}};zf_ScrapbookInfo.prototype.getExpiresOn=function(){;var expiresOn=new Date(this.modifiedOn.getTime());expiresOn.setDate(expiresOn.getDate()+90);
return expiresOn;};zf_ScrapbookInfo.prototype.getDisplayName=function(){if(this.isSharedWith&&this.sharerName)return zf_stdFormatString('{0}: {1}',this.sharerName,this.name);return this.name;
};zf_ScrapbookInfo.prototype.postSerialize=function(){if(this.photos)this.remap();};zf_ScrapbookInfo.prototype.remap=function(){;var map={};$.each(this.photos,function(i,p){map[p.id]=p;});this.map=map;
};;var zf_stdFileTypes={".jpg":{type:"JPEG",mime:"image/jpeg",ext:".jpg"},".gif":{type:"GIF",mime:"image/gif",ext:".gif"},".png":{type:"PNG",mime:"image/png",ext:".png"},
".tif":{type:"TIFF",mime:"image/tiff",ext:".tif"},".bmp":{type:"BMP",mime:"image/bmp",ext:".bmp"},".mp4":{type:"MP4",mime:"video/mp4",ext:".mp4"}};var zf_stdMimeTypes={"image/jpeg":{type:"JPEG",
mime:"image/jpeg",ext:".jpg"},"image/gif":{type:"GIF",mime:"image/gif",ext:".gif"},"image/png":{type:"PNG",mime:"image/png",ext:".png"},"image/tiff":{type:"TIFF",
mime:"image/tiff",ext:".tif"},"image/bmp":{type:"BMP",mime:"image/bmp",ext:".bmp"},"video/mp4":{type:"MP4",mime:"video/mp4",ext:".mp4"}};;var zf_ProcessingMethod={StandardSmallThumbnail:{code:1,
output:10,isThumb:true,cx:60,cy:60,type:".jpg",format:"Square Thumbnail (60 x 60)"},StandardThumbnail:{code:0,output:10,isThumb:true,cx:80,cy:80,type:".jpg",format:"Small Thumbnail ({0} x {1})"},
StandardSmallSize:{code:2,output:15,isThumb:false,cx:400,cy:400,type:".jpg",format:"Small ({0} x {1})"},StandardMediumSize:{code:3,output:15,isThumb:false,cx:580,
cy:450,type:".jpg",format:"Medium ({0} x {1})"},StandardLargeSize:{code:4,output:15,isThumb:false,cx:800,cy:630,type:".jpg",format:"Large ({0} x {1})"},StandardExtraLargeSize:{code:5,
output:15,isThumb:false,cx:1100,cy:850,type:".jpg",format:"X-Large ({0} x {1})"},StandardXXLargeSize:{code:6,output:15,isThumb:false,cx:1550,cy:960,type:".jpg",format:"XX-Large ({0} x {1})"},
StandardLargeThumbnail:{code:10,output:10,isThumb:true,cx:120,cy:120,type:".jpg",format:"Medium Thumbnail ({0} x {1})"},StandardMediumThumbnail:{code:10,output:10,
isThumb:true,cx:80,cy:80,type:".jpg",format:"Square Thumbnail (80 x 80)",clip:true},StandardVeryLargeThumbnail:{code:11,output:10,isThumb:true,cx:200,cy:200,type:".jpg",
format:"Large Thumbnail ({0} x {1})"},StandardBioPhoto:{code:50,output:20,isThumb:true,cx:120,cy:120,type:".jpg"},StandardSmallBioPhoto:{code:51,output:20,isThumb:true,
cx:80,cy:80,type:".jpg"},StandardMediumBioPhoto:{code:52,output:20,isThumb:true,cx:100,cy:100,type:".jpg"},WatermarkThumbnail:{code:60,output:30,isThumb:true,cx:80,
cy:80,type:".png"},WatermarkSmallThumbnail:{code:61,output:30,isThumb:true,cx:60,cy:60,type:".png"},WatermarkNormalizedHorz:{code:62,output:30,isThumb:false,type:".jpg"},
WatermarkNormalizedVert:{code:63,output:30,isThumb:false,type:".jpg"},LogoSmallThumbnail:{code:70,output:70,isThumb:true,cx:200,cy:40,type:".png"},LogoCompactThumbnail:{code:78,
output:70,isThumb:true,cx:200,cy:63,type:".png"},LogoLargeThumbnail:{code:74,output:70,isThumb:true,cx:200,cy:100,type:".png"},FavIcon:{code:81,output:80,isThumb:true,
cx:16,cy:16,type:".ico"},ProductIcon:{code:181,output:130,isThumb:false,cx:244,cy:214,type:".jpg"},ProductPreview:{code:182,output:131,isThumb:false,cx:900,cy:480,
type:".jpg"},ProductPreviewThumb:{code:183,output:131,isThumb:false,cx:244,cy:130,type:".jpg"},DesignIcon:{code:184,output:132,isThumb:false,cx:244,cy:244,type:".jpg"},
DesignPreview:{code:185,output:133,isThumb:false,cx:900,cy:480,type:".jpg"},DesignPreviewThumb:{code:186,output:133,isThumb:false,cx:244,cy:244,type:".jpg"},Video1080p:{code:200,
output:150,isThumb:false,cx:1920,cy:1080,type:".mp4",format:"Full HD (1080p)"},Video720p:{code:210,output:150,isThumb:false,cx:1280,cy:720,type:".mp4",format:"Hi Def (720p)"},
Video480p:{code:215,output:150,isThumb:false,cx:854,cy:480,type:".mp4",format:"Medium Def (Non-HD)"},Video360p:{code:220,output:150,isThumb:false,cx:640,cy:360,type:".mp4",
format:"Web (Non-HD)"},VideoPosterFrame:{code:250,output:150,isThumb:false,cx:1920,cy:1080,type:".jpg"},VideoPosterFrameStrip:{code:260,output:150,isThumb:false,
cx:200,cy:200,type:".jpg"},VideoXml:{code:271,output:0,isThumb:false,type:".xml"},CustomDesignCopyPng:{code:280,output:160,isThumb:false,type:".png"},PhotoMetadata:{code:1001,
output:1,isThumb:false,type:".meta"}};zf_ProcessingMethod.fromCode=function(code){;var method=zf_ProcessingMethod[code];if(method!=null)return method;for(method in zf_ProcessingMethod){if(zf_ProcessingMethod[method].code==code){method=zf_ProcessingMethod[method];
zf_ProcessingMethod[code]=method;return method;}};return null;};zf_ProcessingMethod.isScaled=function(method){var base=zf_ProcessingMethod.fromCode(method.code);return(base.cx!=method.cx||base.cy!=method.cy)&&!method.clip;
};zf_ProcessingMethod.isClipped=function(method){var base=zf_ProcessingMethod.fromCode(method.code);return(base.cx!=method.cx||base.cy!=method.cy)&&method.clip;};;function zf_PhotoLoader(photo,
method,modifier){this._uid=++zf_PhotoLoader._lastUid;this._photo=photo;this._method=method;this._retries=0;this._modifier=modifier;this.state=photo.id>0?zf_PhotoLoader.Initialized:zf_PhotoLoader.Complete;
}zf_PhotoLoader.Initialized=0;zf_PhotoLoader.Loading=1;zf_PhotoLoader.Complete=2;zf_PhotoLoader.NotFound=-1;zf_PhotoLoader.AccessDenied=-2;zf_PhotoLoader.AuthRequired=-3;zf_PhotoLoader.PasswordRequired=-4;zf_PhotoLoader.Failed=-5;zf_PhotoLoader._lastUid=0;zf_PhotoLoader._active=0;zf_PhotoLoader._queue=[];
zf_PhotoLoader._waitList={};zf_PhotoLoader._waitCount=0;zf_PhotoLoader._images=[];zf_PhotoLoader.prototype.start=function(){if(this.state==zf_PhotoLoader.Initialized){this.state=zf_PhotoLoader.Loading;
this._image=new Image();this._push();}else if(this.state!=zf_PhotoLoader.Loading){;if(this.onload!=null)this.onload(this.state,this._src);}};zf_PhotoLoader.prototype.getPhoto=function(){return this._photo;
};zf_PhotoLoader.prototype.getMethod=function(){return this._method;};zf_PhotoLoader.prototype.getModifier=function(){return this._modifier;};zf_PhotoLoader.prototype.getImageSize=function(){return this._size;
};zf_PhotoLoader.prototype.setMethodSize=function(method){;;this._method=method;};zf_PhotoLoader.prototype._push=function(){if(zf_PhotoLoader._active<60){zf_PhotoLoader._active++;this._load();
}else zf_PhotoLoader._queue.push(this);};zf_PhotoLoader.prototype._load=function(){var url=this._photo.getInternalUrl(this._method,{volume:this._volume,modifier:this._modifier});
if(this._retries!=0){if(url.indexOf('?')!=-1)url+="&r="+this._retries;else url+="?r="+this._retries;}this._src=url;var self=this;;this._image.onload=function(){self._onLoad();
};this._image.onerror=function(){self._onError();};setTimeout(function(){self._image.src=url;},1);};zf_PhotoLoader.prototype._done=function(){if(zf_PhotoLoader._queue.length>0)zf_PhotoLoader._queue.shift()._load();
else--zf_PhotoLoader._active;};zf_PhotoLoader.prototype._ready=function(response){if(response.state!=zf_PhotoLoader.Complete){this.state=response.state;if(this.onload!=null)this.onload(this.state,
this._src);}else{this._volume=response.volume;this._push();}};zf_PhotoLoader.prototype._wait=function(){var photo=this._photo;var key=[photo.prefix,photo.id,photo.timestamp,photo.volume,
this._method.code];if(photo.token!=null)key.push(photo.token);key=key.join('/');var entry=zf_PhotoLoader._waitList[key];if(entry==null)zf_PhotoLoader._waitList[key]=this;
else if(entry instanceof Array)entry.push(this);else zf_PhotoLoader._waitList[key]=[entry,this];if(zf_PhotoLoader._waitCount++==0)window.setTimeout(zf_PhotoLoader._check,
3000);};zf_PhotoLoader._check=function(){var list=[];var keys=[];for(var key in zf_PhotoLoader._waitList){keys.push(key);key=key.split('/');list.push({type:key[0],photoId:parseInt(key[1],
10),timestamp:key[2],volume:key[3],method:parseInt(key[4],10),token:key.length>5?key[5]:null,ownerId:typeof zf_ownerId!=="undefined"?zf_ownerId:zf_userId});}if(list.length==0)return;
var self=this;zf_stdServerRequestEx("POST","/zf/core/core.asmx","GetImageState",[list],function(result,error){if(error!=null)return;for(var i=0;i<result.length;i++){if(result[i].state==zf_PhotoLoader.Loading)continue;
var key=keys[i];var loader=zf_PhotoLoader._waitList[key];if(loader instanceof Array){for(var k=0;k<loader.length;k++)loader[k]._ready(result[i]);zf_PhotoLoader._waitCount-=loader.length;
}else if(loader!=null){loader._ready(result[i]);--zf_PhotoLoader._waitCount;}delete zf_PhotoLoader._waitList[key];}if(zf_PhotoLoader._waitCount>0)window.setTimeout(zf_PhotoLoader._check,
3000);});};zf_PhotoLoader.prototype._onLoad=function(){this._image.onload=null;this._image.onerror=null;this._done();this.state=zf_PhotoLoader.Complete;this._size={cx:this._image.width,
cy:this._image.height};if(!this._method.isThumb){if(zf_PhotoLoader._images.length>50)zf_PhotoLoader._images.shift();zf_PhotoLoader._images.push(this._image);}this._image=null;
if(this.onload!=null)this.onload(this.state,this._src);};zf_PhotoLoader.prototype._onError=function(){this._done();this._retries++;this._wait();};;;;function zf_PhotoView(id,plugins,context,
view){this.id=id;this.waitTimeout=3000;this.context=zf_PhotoView.EMPTY_CONTEXT;this._special=null;this._plugins=plugins!=null?[].concat(plugins):[];if(view==null)view=this.dom();
zf_stdSetClientObject(view,this);this._completeInit(context,view);}zf_PhotoView.inherits(zf_Control);zf_PhotoView.EMPTY_CONTEXT={_i_d_:"zf_PhotoView.EMPTY_CONTEXT"};zf_PhotoView.createHtml=function(id,
href,styles,plugins,context,photo,method,burnable,x,y){;styles=styles!=null?[].concat(styles):[];if(photo!=null&&photo.id<0)styles.push("pv-s-"+(-photo.id));styles=styles.concat(zf_PhotoView._getVideoStyles(photo));
var smap={};for(var i=0;i<styles.length;i++)smap[styles[i]]=true;var markup=zf_PhotoView._createInnerHtml(id,href,plugins,smap,context,photo,method,burnable);var viewStyle="";
if(x!=null&&y!=null){viewStyle=[' style="left:',x,'px;top:',y,'px;visibility:inherit;"'].join("");}styles=["pv"].concat(styles);styles.sort();styles=styles.join(" ");
return['<div class="',styles,'" id="',id,'" ',viewStyle,'>',markup,'</div>'].join("");};zf_PhotoView.prototype.reinit=function(view,href,styles,context,photo,method,burnable,
x,y){;if(this.context!==zf_PhotoView.EMPTY_CONTEXT)this.detachContext(this.context);styles=styles!=null?[].concat(styles):[];if(photo!=null&&photo.id<0)styles.push("pv-s-"+(-photo.id));
styles=styles.concat(zf_PhotoView._getVideoStyles(photo));var smap={};for(var i=0;i<styles.length;i++)smap[styles[i]]=true;var markup=zf_PhotoView._createInnerHtml(this.id,
href,this._plugins,smap,context,photo,method,burnable);var viewStyle="";if(x!=null&&y!=null){viewStyle=['left:',x,'px;top:',y,'px;visibility:inherit;'].join("");
}styles=["pv"].concat(styles);styles.sort();styles=styles.join(" ");if(view==null)view=this.dom();if(view.className!=styles)view.className=styles;if(view.style.cssText!=viewStyle)view.style.cssText=viewStyle;
if(this._loader!=null){this._loader.onload=null;this._loader=null;}view.innerHTML=markup;this._completeInit(context,view);};zf_PhotoView.prototype.resize=function(context,photo,
method){;;;this._resize(photo,method);this._method=method;var image=this.dom("img");var inner=image.parentNode;var outer=inner.parentNode;var view=outer.parentNode;
for(var i=0;i<this._plugins.length;i++){var plugin=this._plugins[i];if(plugin.onResizeDom!=null)plugin.onResizeDom(view,outer,inner,context,false);}};zf_PhotoView.prototype.load=function(photo,
method,noresize){;var self=this;if(this._loader!=null)this._loader.onload=null;var loader;if(photo instanceof zf_PhotoLoader){loader=photo;photo=loader.getPhoto();
method=loader.getMethod();}else loader=new zf_PhotoLoader(photo,method);this._loader=loader;this._photo=photo;this._method=method;loader.onload=this.closure(this._onLoad,
photo,method);this.setSpecial(null,true);this.$dom().removeClass('pv-ready');this.$dom().toggleClass("pv-video",photo.video);if(photo.video){this.dom("img").style.cssText="";
var special=zf_PhotoView._getSpecialVideoStyle(photo);if(special!=null)this.setSpecial(special,true);}if(!noresize){if(photo.id<0)this.setSpecial((-photo.id).toString());
else this._resize(photo,method);}if(photo.video&&(photo.flags&zf_PhotoFlags.VideoFailed)){this._onLoad(zf_PhotoLoader.Failed,null,photo,method);return;}loader.start();
if(loader.state==zf_PhotoLoader.Loading){if(this._waitTimer!=null)window.clearTimeout(this._waitTimer);this._waitTimer=window.setTimeout(function(){if(self._waitTimer!=null){if(!photo.video||(photo.flags&zf_PhotoFlags.VideoReady))self.setSpecial("wait",
true);if(self.onwait)self.onwait();}},this.waitTimeout);}};zf_PhotoView.prototype.clear=function(){;this.setSpecial(null);var image=this.dom("img");var inner=image.parentNode;
image.style.cssText="";inner.style.cssText="";if(this._loader!=null){this._loader.onload=null;this._loader=null;}if(this._waitTimer!=null){window.clearTimeout(this._waitTimer);
this._waitTimer=null;}this.$dom().find(".pv-p").empty();this._photo=null;this._method=null;};zf_PhotoView.prototype.attachContext=function(context){this._attachContext(context,
false);};zf_PhotoView.prototype._attachContext=function(context,isNew){;;;this.context=context;var image=this.dom("img");var inner=image.parentNode;var outer=inner.parentNode;
var view=outer.parentNode;for(var i=0;i<this._plugins.length;i++){var plugin=this._plugins[i];if(plugin.onCreateDom!=null)plugin.onCreateDom(view,outer,inner,context,
isNew);}};zf_PhotoView.prototype.detachContext=function(context,view){;;var inner=null;var outer=null;for(var i=0;i<this._plugins.length;i++){var plugin=this._plugins[i];if(plugin.onDestroyDom!=null){if(view==null)view=this.dom();
if(outer==null){var $outer=$(view).children(".pv-outer:first");var $inner=$outer.children(".pv-inner:first");;;outer=$outer.get(0);inner=$inner.get(0);}plugin.onDestroyDom(view,
outer,inner,context);}}this.context=zf_PhotoView.EMPTY_CONTEXT;};zf_PhotoView.prototype.setStyle=function(styles,view){;styles=(styles!=null?["pv"].concat(styles):["pv"]);styles.sort();
styles=styles.join(" ");if(view!=null)view=this.dom();if(view.className!=styles)view.className=styles;};zf_PhotoView.prototype.setLink=function(href){;var inner=this.dom("img").parentNode;
if(href==null){inner.removeAttribute("href");inner.onclick=zf_stdFalse;}else{inner.href=href;inner.onclick=zf_stdTrue;}};zf_PhotoView.prototype.setSpecial=function(style,noclear){;
var view=document.getElementById(this.id);var update=false;var styles=view.className.split(" ");for(var i=styles.length-1;i>=0;i--){if(styles[i].indexOf("pv-s-")==0)styles.splice(i,
1);}var photo=this._photo;var method=this._method;if(style!=null){styles.push("pv-s-"+style);photo=null;method=null;}var className=styles.join(" ");if(view.className!=className)view.className=className;
if(this._special==style)return;this._special=style;if(!noclear){var context=this.context;if(context!==zf_PhotoView.EMPTY_CONTEXT)this.detachContext(context);var inner=this.dom("img").parentNode;
var smap={};for(i=0;i<styles.length;i++)smap[styles[i]]=true;var markup=zf_PhotoView._createInnerHtml(this.id,inner.href,this._plugins,smap,context,photo,method,
false);view.innerHTML=markup;this._completeInit(context,view);}};zf_PhotoView.prototype.getInner=function(){return this.dom("img").parentNode;};zf_PhotoView.prototype.getPhoto=function(){if(this._loader!=null)return this._loader.getPhoto();
return this._photo;};zf_PhotoView.prototype.addPlugin=function(plugin){;;this._plugins.push(plugin);var image=this.dom("img");var inner=image.parentNode;var outer=inner.parentNode;
var view=outer.parentNode;var smap={};var styles=view.className.split(' ');$.each(styles,function(i,v){smap[v]=true;});var ihtml=null;var ohtml=null;if(plugin.getOuterContent)ohtml=plugin.getOuterContent(this.id,
this.context,smap);if(plugin.getInnerContent)ihtml=plugin.getInnerContent(this.id,this.context,smap);if(ohtml)$(inner).before(ohtml);if(ihtml)$(inner).append(ihtml);
if(plugin.onCreateDom)plugin.onCreateDom(view,outer,inner,this.context,true);};zf_PhotoView.prototype.removePlugin=function(plugin){;;var index=-1;for(var j=0;j<=this._plugins.length;
j++){if(this._plugins[j]===plugin){index=j;break;}};this._plugins.splice(index,1);var image=this.dom("img");var inner=image.parentNode;var outer=inner.parentNode;
var view=outer.parentNode;if(plugin.onDestroyDom)plugin.onDestroyDom(view,outer,inner,this.context);if(plugin.removeOuterContent)plugin.removeOuterContent(view,outer,
inner,this.context);if(plugin.removeInnerContent)plugin.removeInnerContent(view,outer,inner,this.context);};zf_PhotoView.prototype.getMethod=function(){return this._method;};
zf_PhotoView._createInnerHtml=function(id,href,plugins,smap,context,photo,method,burnable){;if(plugins==null)plugins=[];var inner=[];var outer=[];for(var i=0;i<plugins.length;
i++){var plugin=plugins[i];if(plugin.getOuterContent!=null)outer.push(plugin.getOuterContent(id,context,smap));if(plugin.getInnerContent!=null)inner.push(plugin.getInnerContent(id,
context,smap));}href=(href!=null&&href!="")?[' href="',href,'"'].join(""):"";var innerStyle="";var imgStyle="";if(photo!=null&&method!=null&&photo.id>0){var size=photo.getScaledSize(method);
var innerLeft=(method.cx-size.cx)/2;var innerTop=(method.cy-size.cy)/2;if(zf_ProcessingMethod.isClipped(method)&&method.cx===method.cy){innerStyle=[' style="left:0px;top:0px;width:',
method.cx,'px;height:',method.cy,'px;"'].join("");}else{innerStyle=[' style="left:',innerLeft,'px;top:',innerTop,'px;width:',size.cx,'px;height:',size.cy,'px;"'].join("");
}if(burnable){var src=photo.getInternalUrl(method,{block:true}),pos;if(zf_ProcessingMethod.isScaled(method)){imgStyle=[' width="',size.cx,'" height="',size.cy,'" style="background-image:url(',
src,'); ','background-size: ',size.cx,'px ',size.cy,'px"'].join("");}else if(zf_ProcessingMethod.isClipped(method)&&method.cx===method.cy){pos=zf_PhotoView._getClippingPosition(photo,
method);var posLeft=(method.cx-size.cx)/2;var posTop=(method.cy-size.cy)/2;imgStyle=[' width="',size.cx,'" height="',size.cy,'" style="background-image:url(',src,
'); ','background-position: ',pos.left,'px ',pos.top,'px;','left:',posLeft,'px;top:',posTop,'px"'].join("");}else if(zf_ProcessingMethod.isClipped(method)){pos=zf_PhotoView._getClippingPosition(photo,
method);var sz=zf_PhotoView._getStretchedSize(photo,method);imgStyle=[' width="',size.cx,'" height="',size.cy,'" style="background-image:url(',src,'); ','background-position: ',
pos.left,'px ',pos.top,'px; ','background-size: ',sz.cx,'px ',sz.cy,'px"'].join("");}else{imgStyle=[' width="',size.cx,'" height="',size.cy,'" style="background-image:url(',
src,');"'].join("");}}}var imgSrc='/zf/img/null.gif';if(location.protocol=='http:')imgSrc='http://'+zf_cdnHost+imgSrc;return['<div class="pv-outer">',outer.join(""),
'<a class="pv-inner"',href,innerStyle,'>','<img class="pv-img" id="',id,'-img"',imgStyle,' src="',imgSrc,'" />',inner.join(""),'</a>','</div>'].join("");};zf_PhotoView.prototype._completeInit=function(context,
view){;var viewId=view.id;view=$(view);var outer=view.find('.pv-outer:first');var inner=outer.find('.pv-inner:first');var self=this;if(inner.is('A')&&inner.attr('href')==null)inner.click(function(e){e.preventDefault();
});outer.hover(function(){$('#'+viewId).addClass('pv-ohover');},function(){$('#'+viewId).removeClass('pv-ohover');});inner.hover(function(){$('#'+viewId).addClass('pv-ihover');
},function(){$('#'+viewId).removeClass('pv-ihover');});this._attachContext(context,true);outer=null;inner=null;view=null;};zf_PhotoView.prototype._onLoad=function(state,src,
photo,method){;if(this._waitTimer!=null){window.clearTimeout(this._waitTimer);this._waitTimer=null;}if(this.onload){if(this.onload(state))return;}switch(state){case zf_PhotoLoader.Complete:if(photo.id>0){if(photo.video)photo.flags|=zf_PhotoFlags.VideoReady;
this.setSpecial(null);var image=this._setImage(src,photo,method,this._loader.getImageSize());this.$dom().addClass('pv-ready');}else this.setSpecial((-photo.id).toString());
break;case zf_PhotoLoader.NotFound:this.setSpecial("notfound");break;case zf_PhotoLoader.AccessDenied:case zf_PhotoLoader.AuthRequired:this.setSpecial("noaccess");
break;case zf_PhotoLoader.PasswordRequired:this.setSpecial("password");break;case zf_PhotoLoader.Failed:default:if(photo.video)photo.flags|=zf_PhotoFlags.VideoFailed;
this.setSpecial(photo.video?"vfailed":"failed",true);break;}};zf_PhotoView.prototype._setImage=function(src,photo,method,imageSize){;var image=this.dom("img");var size=photo.getScaledSize(method);
image.style.backgroundImage="url("+src+")";if(zf_ProcessingMethod.isScaled(method)){image.style.backgroundSize=[size.cx,'px ',size.cy,'px'].join("");}else if(zf_ProcessingMethod.isClipped(method)){var pos=zf_PhotoView._getClippingPosition(photo,
method);image.style.backgroundPosition=[pos.left,'px ',pos.top,'px'].join("");var sz=zf_PhotoView._getStretchedSize(photo,method);image.style.backgroundSize=[sz.cx,
'px ',sz.cy,'px'].join("");}else if(size.cx!=imageSize.cx||size.cy!=imageSize.cy){image.style.backgroundSize=[size.cx,'px ',size.cy,'px'].join("");}return image;
};zf_PhotoView.prototype._resize=function(photo,method){;var image=this.dom("img");var inner=image.parentNode;var size=photo.getScaledSize(method);var x=(method.cx-size.cx)/2;
var y=(method.cy-size.cy)/2;inner.style.left=x+"px";inner.style.top=y+"px";inner.style.width=size.cx+"px";inner.style.height=size.cy+"px";if(zf_ProcessingMethod.isScaled(method)){image.style.backgroundSize=[size.cx,
'px ',size.cy,'px'].join("");}else if(zf_ProcessingMethod.isClipped(method)){var pos=zf_PhotoView._getClippingPosition(photo,method);image.style.backgroundPosition=[pos.left,
'px ',pos.top,'px'].join("");var sz=zf_PhotoView._getStretchedSize(photo,method);image.style.backgroundSize=[sz.cx,'px ',sz.cy,'px'].join("");}};zf_PhotoView._getSpecialVideoStyle=function(photo){;
;;if(photo.flags&zf_PhotoFlags.VideoFailed)return "vfailed";if(!(photo.flags&zf_PhotoFlags.VideoReady))return "vwait";return null;};zf_PhotoView._getVideoStyles=function(photo){;
var styles=[];if(!photo||!photo.video)return styles;styles.push("pv-video");var special=zf_PhotoView._getSpecialVideoStyle(photo);if(special!=null)styles.push("pv-s-"+special);
return styles;};zf_PhotoView._getClippingPosition=function(photo,method){;var csize=photo.getScaledSize(method),bsize=zf_PhotoView._getStretchedSize(photo,method);if(photo.width>=photo.height){return{left:Math.floor((csize.cx-bsize.cx)/2),
top:Math.floor((csize.cy-bsize.cy)/2)};}return{left:Math.floor((csize.cx-bsize.cx)/2),top:Math.floor((csize.cy-bsize.cy)/5)};};zf_PhotoView._getStretchedSize=function(photo,
method){var size=photo.getScaledSize(zf_ProcessingMethod.fromCode(method.code));if(!method.stretch)return size;else if(size.cx/size.cy<method.cx/method.cy){var width=Math.min(method.cx,
size.cx*10);return{cx:width,cy:Math.round(width/size.cx*size.cy)};}else{var height=Math.min(method.cy,size.cy*10);return{cx:Math.round(height/size.cy*size.cx),cy:height};
}};;function zf_PhotoGrid(id,flags){zf_Control.prototype.constructor.call(this,id);this._selectionMode=flags&0x03;this._dragDropMode=flags&0x04;this._items=[];this._views=[];
this._selected={};this._pendingSelect={};this._left=0;this._height=-1;this._pageIndex=0;this._anchorIndex=-1;this._firstVisible=0;this._lastVisible=0;this._lastUid=0;
this._dragTrack={};this._dragDistance=5;}zf_PhotoGrid.inherits(zf_Control);zf_PhotoGrid.None=0x00;zf_PhotoGrid.Single=0x01;zf_PhotoGrid.SingleForced=0x02;zf_PhotoGrid.Multiple=0x03;zf_PhotoGrid.KeepVisible=0x01;zf_PhotoGrid.Drag={None:0,Left:1,Right:2,
Top:3,Bottom:4,Horizontal:5,Vertical:6,All:7};zf_PhotoGrid._nullPhoto=new zf_BasicImage(0);zf_PhotoGrid.prototype.init=function(plugins){this._plugins=plugins!=null?[].concat(plugins):[];
var self=this;var node=this.dom();if(this._selectionMode!=zf_PhotoGrid.None){node.onmousedown=function(e){self._onGridClick(e);return false;};}node.ondblclick=zf_stdFalse;
node=null;};zf_PhotoGrid.prototype.getLayoutInfo=function(flags){if(flags==null)flags=zf_PhotoGrid.None;;;var grid=this.dom();var info={};if(this._cellWidth==null)this._measureCell(grid);
info.cellWidth=this._cellWidth;info.cellHeight=this._cellHeight;info.width=$(grid).width();info.itemsPerRow=Math.floor(info.width/this._cellWidth);if(info.itemsPerRow==0)info.itemsPerRow=1;
if(this._height==-1){info.rowsPerPage=Math.ceil(this._items.length/info.itemsPerRow);if(this.minRows!=null&&info.rowsPerPage<this.minRows)info.rowsPerPage=this.minRows;
if(this.maxRows!=null&&info.rowsPerPage>this.maxRows)info.rowsPerPage=this.maxRows;info.height=this._cellHeight*info.rowsPerPage;}else{info.height=this._height;info.rowsPerPage=Math.floor(info.height/this._cellHeight);
if(this.minRows!=null&&info.rowsPerPage<this.minRows){info.rowsPerPage=this.minRows;info.height=this._cellHeight*info.rowsPerPage;}if(this.maxRows!=null&&info.rowsPerPage>this.maxRows){info.rowsPerPage=this.maxRows;
info.height=this._cellHeight*info.rowsPerPage;}}if(info.rowsPerPage==0)info.rowsPerPage=1;if(this.minHeight!=null&&info.height<this.minHeight)info.height=this.minHeight;
info.itemsPerPage=info.itemsPerRow*info.rowsPerPage;if(this._height==-1){info.currentPage=0;info.totalPages=1;}else{info.totalPages=Math.ceil(this._items.length/info.itemsPerPage);
var anchorIndex=this._anchorIndex;if(anchorIndex==-1)anchorIndex=this._firstVisible;if((flags&zf_PhotoGrid.KeepVisible)!=0)info.currentPage=Math.floor(anchorIndex/info.itemsPerPage);
else info.currentPage=this._pageIndex;if(info.currentPage>=info.totalPages)info.currentPage=Math.max(info.totalPages-1,0);}info.firstVisible=info.currentPage*info.itemsPerPage;
info.lastVisible=Math.min(this._items.length,info.firstVisible+info.itemsPerPage);grid=null;return info;};zf_PhotoGrid.prototype.recalcLayout=function(info){if(info==null)info=this.getLayoutInfo();
;this._pageIndex=info.currentPage;if(this._anchorIndex==-1)this._anchorIndex=info.firstVisible;var height=info.height;if(this._height==-1&&height==0)height="auto";
else height+="px";var grid=this.dom();if(grid.style.height!=height)grid.style.height=height;var first=info.firstVisible;var last=info.lastVisible;if(this.onlayoutchange!=null&&(this._firstVisible!=first||this._lastVisible!=last)){zf_stdDeferCall(this.id+".onlayoutchange",
this.onlayoutchange,this,info);}for(var i=first;i<last;i++){if(this._items[i]==null)this.onqueryitem(i);}for(i=this._firstVisible;i<this._lastVisible;i++){var item=this._items[i];
if(item!=null&&item.visible&&(i<first||i>=last))this._destroyDom(item);}this._firstVisible=first;this._lastVisible=last;this._cellsPerRow=info.itemsPerRow;this._left=(info.width-info.itemsPerRow*this._cellWidth)/2;
for(i=first;i<last;i++){item=this._items[i];if(item!=null){if(item._view==null)this._createDom(item);else this._showItem(i,item);}}var self=this;window.setTimeout(function(){self._trimPool();
},5000);zf_stdReplaceClassName(grid,this._items.length>0?"pg-empty":null,this._items.length>0?null:"pg-empty");grid=null;return info;};zf_PhotoGrid.prototype.clear=function(){for(var id in this._items){var item=this._items[id];
if(item._view!=null)this._destroyDom(item);}this._items=[];this._selected={};this._anchor=null;this._pageIndex=0;this._firstVisible=0;this._lastVisible=0;this._cellWidth=null;
this._cellHeight=null;var self=this;window.setTimeout(function(){self._trimPool();},5000);};zf_PhotoGrid.prototype.getCellSize=function(){if(this._cellWidth==null)this._measureCell(this.dom());
return{cx:this._cellWidth,cy:this._cellHeight};};zf_PhotoGrid.prototype.setHeight=function(cy){if(cy==null)cy=-1;this._height=cy;};zf_PhotoGrid.prototype.setSize=function(count){;var length=this._items.length;
if(count<length){this._deleteItems(count,length);}else if(count>length){this._items=this._items.concat(new Array(count-length));}};zf_PhotoGrid.prototype.getSize=function(){return this._items.length;
};zf_PhotoGrid.prototype.setPage=function(page){;if(page!=this._pageIndex){;this._pageIndex=page;this._anchorIndex=-1;}};zf_PhotoGrid.prototype.getPage=function(){return this._pageIndex;
};zf_PhotoGrid.prototype.setItem=function(index,id,href,photo,method,burnable,styles,context){;if(photo==null)photo=zf_PhotoGrid._nullPhoto;styles=styles!=null?[].concat(styles):[];
var item=this._items[index];if(item!=null){if(item._view!=null)item._view.detachContext(item.context);delete this._items[item.id];this._items[id]=item;if(item.selected){delete this._selected[item.id];
this._selected[id]=item;}item.id=id;item.href=href;item.photo=photo;item.method=method;item.burnable=burnable;item.styles=styles;item.context=context;styles=[].concat(styles);
if(item.selected)styles.push("pg-selected");if(item._view!=null){item._view.reinit(null,href,styles,context,item.photo,item.method,item.burnable,item._x,item._y);
if(!item.burnable)item._view.load(photo,method,true);}}else{item={id:id,index:index,href:href,photo:photo,method:method,burnable:burnable,styles:styles,context:context,
_grid:this,_view:null};if(this._pendingSelect[index]){this._selectItem(item);delete this._pendingSelect[index];}this._items[index]=item;this._items[id]=item;}return item;
};zf_PhotoGrid.prototype.getItem=function(index){return this._items[index];};zf_PhotoGrid.prototype.getItemRect=function(index){if(typeof(index)=="string")index=this._items[index];if(typeof(index)=="object")index=index.index;
index-=this._firstVisible;var row=Math.floor(index/this._cellsPerRow);var col=index%this._cellsPerRow;var x=this._left+col*this._cellWidth+this._cellLeft;var y=row*this._cellHeight+this._cellTop;
return{left:x,top:y,right:x+this._cellWidth,bottom:y+this._cellHeight};};zf_PhotoGrid.prototype.getPhotoView=function(item){if(typeof(item)!="object")item=this._items[item];
return item!=null?item._view:null;};zf_PhotoGrid.prototype.getItemPage=function(index){if(typeof(index)=="string"){var item=this._items[index];if(item==null)return 0;index=item.index;
}else if(typeof(index)=="object"){if(index==null)return 0;index=index.index;}return Math.floor(index/this.getLayoutInfo().itemsPerPage);};zf_PhotoGrid.prototype.getSelectedItem=function(){for(var id in this._selected)return this._selected[id];
return null;};zf_PhotoGrid.prototype.getSelectedItems=function(){var items=[];for(var id in this._selected)items.push(this._selected[id]);return items;};zf_PhotoGrid.prototype.getSelectedIndices=function(){var indices=[];
for(var id in this._selected)indices.push(this._selected[id].index);for(var idx in this._pendingSelect)indices.push(parseInt(idx,10));return indices;};zf_PhotoGrid.prototype.deleteItem=function(index){var item;
if(typeof(index)=="string"){item=this._items[index];if(item==null)return;index=item.index;}else if(typeof(index)=="object"){item=index;index=item.index;}this._deleteItems(index,
index+1);for(var i=index;i<this._items.length;i++){item=this._items[i];if(item!=null)item.index=i;}};zf_PhotoGrid.prototype.updateItem=function(item,context){;if(typeof(item)!="object")item=this.getItem(item);
if(item!=null){if(item._view!=null){item._view.detachContext(item.context);item._view.attachContext(context);}item.context=context;}};zf_PhotoGrid.prototype.toggleDragDrop=function(condition){this._dragDropMode=condition==true;
};zf_PhotoGrid.prototype.lockSelection=function(lock){this._selectionLocked=lock;};zf_PhotoGrid.prototype.addPlugin=function(plugin){;this._plugins.push(plugin);this._trimPool(0);for(var i=0;
i<this._items.length;i++){var item=this._items[i];if(item&&item._view)item._view.addPlugin(plugin);}};zf_PhotoGrid.prototype.removePlugin=function(plugin){;var index=-1;for(var j=0;
j<=this._plugins.length;j++){if(this._plugins[j]===plugin){index=j;break;}};this._plugins.splice(index,1);this._trimPool(0);for(var i=0;i<this._items.length;i++){var item=this._items[i];
if(item&&item._view)item._view.removePlugin(plugin);}};zf_PhotoGrid.prototype._createDom=function(item){var styles=[].concat(item.styles);if(item.selected)styles.push("pg-selected");
var index=item.index-this._firstVisible;var row=Math.floor(index/this._cellsPerRow);var col=index%this._cellsPerRow;var x=this._left+col*this._cellWidth+this._cellLeft;
var y=row*this._cellHeight+this._cellTop;item._x=x;item._y=y;var self=this;var view;var viewNode;var onmousedown=function(e){self._item_onmousedown(e,this,item);
};var onmouseup=function(e){self._item_onmouseup(e,this,item);};if(this._views.length>0){view=this._views.pop();viewNode=view.dom();if(this._selectionMode!=zf_PhotoGrid.None){viewNode.onmousedown=onmousedown;
viewNode.onmouseup=onmouseup;}view.reinit(viewNode,item.href,styles,item.context,item.photo,item.method,item.burnable,item._x,item._y);item._view=view;}else{var viewId=[this.id,
"_i",++this._lastUid].join("");var html=zf_PhotoView.createHtml(viewId,item.href,styles,this._plugins,item.context,item.photo,item.method,item.burnable,x,y);var grid=document.getElementById(this.id);
var node=document.createElement("DIV");node.innerHTML=html;grid.appendChild(node.removeChild(node.firstChild));viewNode=grid.lastChild;grid=null;node=null;viewNode.ondblclick=zf_stdFalse;
if(this._selectionMode!=zf_PhotoGrid.None){viewNode.onmousedown=onmousedown;viewNode.onmouseup=onmouseup;}item._view=new zf_PhotoView(viewId,this._plugins,item.context,
viewNode);}item.visible=true;viewNode=null;if(!item.burnable)item._view.load(item.photo,item.method,true);};zf_PhotoGrid.prototype._destroyDom=function(item){var view=item._view;
item._view=null;item._x=null;item._y=null;item.visible=false;var viewNode=view.dom();view.detachContext(item.context,viewNode);viewNode.style.cssText="";viewNode.onmousedown=null;
if(this._views.length<256)this._views.push(view);else viewNode.parentNode.removeChild(viewNode);};zf_PhotoGrid.prototype._trimPool=function(capacity){if(capacity==undefined)capacity=64;
if(this._views.length>capacity){var extra=this._views.splice(capacity,this._views.length-capacity);for(var i=0;i<extra.length;i++){var node=document.getElementById(extra[i].id);
node.parentNode.removeChild(node);}}};zf_PhotoGrid.prototype._showItem=function(index,item){index-=this._firstVisible;var row=Math.floor(index/this._cellsPerRow);var col=index%this._cellsPerRow;
var x=this._left+col*this._cellWidth+this._cellLeft;var y=row*this._cellHeight+this._cellTop;if(item._x==x&&item._y==y)return;item._x=x;item._y=y;item.visible=true;
var node=item._view.dom();node.style.left=x+"px";node.style.top=y+"px";node.style.visibility="inherit";};zf_PhotoGrid.prototype._hideItem=function(index,item){if(item._x!=null||item._y!=null){var node=item._view.dom();
node.style.visibility="hidden";item._x=null;item._y=null;item.visible=false;}};zf_PhotoGrid.prototype._measureCell=function(grid){;var node=document.createElement("DIV");node.className="pv";
grid.appendChild(node);var props;var i;if(node.currentStyle){props=["width","paddingLeft","paddingRight","borderLeftWidth","borderRightWidth","marginLeft","marginRight",
"height","paddingTop","paddingBottom","borderTopWidth","borderBottomWidth","marginTop","marginBottom"];for(i=0;i<props.length;i++)props[i]=node.currentStyle[props[i]];
}else{props=["width","padding-left","padding-right","border-left-width","border-right-width","margin-left","margin-right","height","padding-top","padding-bottom",
"border-top-width","border-bottom-width","margin-top","margin-bottom"];var style=document.defaultView.getComputedStyle(node,null);for(i=0;i<props.length;i++){props[i]=style.getPropertyValue(props[i]);
}}var width=0;var height=0;for(i=0;i<7;i++)width+=(props[i]=parseInt(props[i],10));for(i=7;i<14;i++)height+=(props[i]=parseInt(props[i],10));;;;;grid.removeChild(node);
this._cellWidth=width;this._cellHeight=height;this._cellLeft=0;this._cellTop=0;};zf_PhotoGrid.prototype._item_onmousedown=function(e,node,item){;;e=zf_stdGetEvent(e);zf_stdStopPropagation(e);
zf_stdPreventDefault(e);if(node.setActive)node.setActive();if(zf_stdIsLeftButton(e))this._clickSelect(e,node,item,true);if(this._dragInfo!=null){this._dragStop();
}else if(zf_stdIsLeftButton(e)&&this._dragDropMode!=zf_PhotoGrid.None){var self=this;this._dragInfo={dropIndex:-1,anchorX:e.clientX,anchorY:e.clientY,baseX:item._x,
baseY:item._y,lastScroll:new Date().getTime()};node.onmousemove=function(e){self._item_onmousemove(e,item);};if(document.addEventListener){document.addEventListener("mousemove",
node.onmousemove,true);document.addEventListener("mouseup",node.onmouseup,true);}else node.setCapture(false);}node=null;e=null;};zf_PhotoGrid.prototype.itemTouchHandler=function(e,
direction){if(!direction||direction===zf_PhotoGrid.Drag.None){return;}var touches=e.originalEvent.changedTouches,first=touches[0],type='';switch(e.type){case 'touchstart':if(direction===zf_PhotoGrid.Drag.All){this._dragTrack={type:'drag'};
type='mousemove';}else{this._dragTrack={type:'unknown',screenx:first.screenX,screeny:first.screenY,clientx:first.clientX,clienty:first.clientY};}break;case 'touchmove':if(this._dragTrack.type==='drag'){type='mousemove';
}else if(this._dragTrack.type==='unknown'){var dragdelta=0,scrolldelta=0;switch(direction){case zf_PhotoGrid.Drag.Left:dragdelta=this._dragTrack.screenx-first.screenX;
scrolldelta=Math.abs(this._dragTrack.screeny-first.screenY);break;case zf_PhotoGrid.Drag.Right:dragdelta=first.screenX-this._dragTrack.screenx;scrolldelta=Math.abs(this._dragTrack.screeny-first.screenY);
break;case zf_PhotoGrid.Drag.Horizontal:dragdelta=Math.abs(this._dragTrack.screenx-first.screenX);scrolldelta=Math.abs(this._dragTrack.screeny-first.screenY);break;
case zf_PhotoGrid.Drag.Top:dragdelta=first.screenY-this._dragTrack.screeny;scrolldelta=Math.abs(this._dragTrack.screenx-first.screenX);break;case zf_PhotoGrid.Drag.Bottom:dragdelta=this._dragTrack.screeny-first.screenY;
scrolldelta=Math.abs(this._dragTrack.screenx-first.screenX);break;default:dragdelta=Math.abs(this._dragTrack.screeny-first.screenY);scrolldelta=Math.abs(this._dragTrack.screenx-first.screenX);
break;}if(dragdelta>this._dragDistance){this._dragTrack.type='drag';type='mousedown';first.screenX=this._dragTrack.screenx;first.screenY=this._dragTrack.screeny;
first.clientX=this._dragTrack.clientx;first.clientY=this._dragTrack.clientY;}else if(scrolldelta>this._dragDistance){this._dragTrack.type='scroll';}}break;case 'touchend':if(this._dragTrack.type==='drag'){type='mouseup';
}else{this._dragTrack={};}break;default:break;}if(type.length>0){e.preventDefault();e.stopPropagation();var simulatedEvent=document.createEvent('MouseEvent');simulatedEvent.initMouseEvent(type,
true,true,window,1,first.screenX,first.screenY,first.clientX,first.clientY,false,false,false,false,0,null);first.target.dispatchEvent(simulatedEvent);if(type==='mouseup'){this._dragTrack={};
}}};zf_PhotoGrid.prototype._item_onmouseup=function(e,node,item){;;if(node==document)node=item._view.dom();e=zf_stdGetEvent(e);zf_stdPreventDefault(e);var dragDone=false;if(this._dragInfo!=null){dragDone=this._dragStop(true);
if(document.removeEventListener){document.removeEventListener("mousemove",node.onmousemove,true);document.removeEventListener("mouseup",node.onmouseup,true);}else node.releaseCapture(false);
node.onmousemove=zf_stdFalse;}var isRight=e.button==2||e.which==2;if(!dragDone&&!isRight)this._clickSelect(e,node,item,false);node=null;e=null;};zf_PhotoGrid.prototype._clickSelect=function(e,
node,item,down){;;;if(this._selectionLocked)return;var ctrl=false;var shift=false;if(this._selectionMode==zf_PhotoGrid.Multiple){ctrl=e.ctrlKey||e.metaKey;shift=e.shiftKey;
}if((ctrl||shift)&&!down)return;var change=false;var anchor=this._anchor;if(ctrl){if(item.selected)change=this._deselectItem(item,node);else if(!item.selected)change=this._selectItem(item,
node);this._anchor=item;}else if(shift&&anchor!=null&&anchor!=item){var deselect=[];var itemIndex=item.index;var anchorIndex=anchor.index;for(var id in this._selected){var sel=this._selected[id];
var index=sel.index;if(index<anchorIndex&&index<itemIndex||index>anchorIndex&&index>itemIndex){deselect.push(index);}}for(var i=0;i<deselect.length;i++)change=this._deselectItem(deselect[i])||change;
var start=Math.min(itemIndex,anchorIndex);var end=Math.max(itemIndex,anchorIndex);for(i=start;i<=end;i++)change=this._selectItem(i)||change;}else{if(item.selected&&!down||!item.selected&&down){change=this._deselectAll(item);
change=this._selectItem(item,node)||change;this._anchor=item;}}if(change&&this.onselchange!=null)this.onselchange(item);};zf_PhotoGrid.prototype._onGridClick=function(e){if(this._selectionMode!=zf_PhotoGrid.SingleForced){if(this._deselectAll()&&this.onselchange!=null)this.onselchange(null);
}};zf_PhotoGrid.prototype._selectItem=function(item,node){if(typeof(item)=="number"){var index=item;if(index<0||index>=this._items.length)return false;item=this._items[index];
if(item==null){if(!this._pendingSelect[index]){this._pendingSelect[index]=true;return true;}return false;}}else if(typeof(item)!="object")item=this._items[item];
if(item==null||item.selected)return false;if(this._selectionMode==zf_PhotoGrid.Single||this._selectionMode==zf_PhotoGrid.SingleForced){var other=this.getSelectedItem();
if(other!=null)this._deselectItem(other);}this._selected[item.id]=item;if(node==null&&item._view!=null)node=document.getElementById(item._view.id);if(node!=null){this._delayedSelect(item);
node=null;}item.selected=true;return true;};zf_PhotoGrid.prototype._delayedSelect=function(item){setTimeout(function(){if(item._view!=null)$('#'+item._view.id).toggleClass('pg-selected',
item.selected);},10);};zf_PhotoGrid.prototype._deselectItem=function(item,node){if(typeof(item)=="number"){var index=item;if(index<0||index>=this._items.length)return false;
item=this._items[index];if(item==null){if(!this._pendingSelect[index])return false;delete this._pendingSelect[index];return true;}}else if(typeof(item)!="object")item=this._items[item];
if(item==null||!item.selected)return false;delete this._selected[item.id];if(node==null&&item._view!=null)node=document.getElementById(item._view.id);if(node!=null){this._delayedSelect(item);
node=null;}item.selected=false;return true;};zf_PhotoGrid.prototype._deselectAll=function(item){var change=false;for(var id in this._selected){var sel=this._selected[id];if(sel!=item){sel.selected=false;
if(sel._view!=null){this._delayedSelect(sel);}change=true;}}this._selected={};if(item!=null&&item.selected)this._selected[item.id]=item;this._pendingSelect={};return change;
};zf_PhotoGrid.prototype.selectItem=zf_PhotoGrid.prototype._selectItem;zf_PhotoGrid.prototype.deselectItem=zf_PhotoGrid.prototype._deselectItem;zf_PhotoGrid.prototype.deselectAll=zf_PhotoGrid.prototype._deselectAll;
zf_PhotoGrid.prototype._deleteItems=function(first,last){for(var index=last-1;index>=first;index--){var item=this._items[index];if(item!=null){if(item._view!=null)this._destroyDom(item);
delete this._items[item.id];delete this._selected[item.id];}else delete this._pendingSelect[index];}this._items.splice(first,last-first);};;function zf_Pager(id,width,size,
current,flags){;;;;zf_Control.prototype.constructor.call(this,id);this._width=width;this._size=size;this._current=current;this._infinite=(flags&1)!=0;this._showAll=(flags&2)!=0;
this._selectAll=(flags&4)!=0;this._noUpdate=(flags&8)!=0;this._mode=zf_Pager.Paged;this.update=zf_stdMakeDeferred(this.id+".update",this._update);if(size>0&&!this._noUpdate)this.update(size,
current);if(this._showAll){this._linkEvent("a","onall");this._linkEvent("p","onpaged");}if(this._selectAll)this._linkEvent("s","onselectall");}zf_Pager.inherits(zf_Control);
zf_Pager.Paged=0;zf_Pager.All=1;zf_Pager.prototype.getMode=function(){return this._mode;};zf_Pager.prototype.setMode=function(mode){;if(this._mode==mode)return;var paged=(mode==zf_Pager.Paged)?"none":"block";
var all=(mode==zf_Pager.Paged)?"block":"none";var backNode=this.dom("b");var nextNode=this.dom("n");var pageNode=this.dom("p");var allNode=this.dom("a");backNode.style.display=all;
nextNode.style.display=all;allNode.style.display=all;pageNode.style.display=paged;if(mode==zf_Pager.All)this._update(0,0,false);this._mode=mode;};zf_Pager.prototype.getCurrent=function(){return this._current;
};zf_Pager.prototype._update=function(size,current,fromEvent){if(this._mode==zf_Pager.All)return;;;;var maxSlots=this._width+(this._infinite?3:4);var oldSlots=Math.min(this._size,
maxSlots);var newSlots=Math.min(size,maxSlots);var backNode=this.dom("b");var nextNode=this.dom("n");var parentNode=nextNode.parentNode;var i;for(i=oldSlots;i>newSlots;
--i)parentNode.removeChild(nextNode.previousSibling);for(i=oldSlots;i<newSlots;++i)parentNode.insertBefore(document.createElement("A"),nextNode);this._size=size;
this._current=current;if(this._size>0){++current;var node=backNode.nextSibling;var halfWidth=Math.floor(this._width/2);var remainder=this._size-this._width;var halfRemainder=this._size-halfWidth;
if(this._size<this._width+4){this._updatePageButtons(node,1,this._size);}else if(current<=halfWidth+3){node=this._updatePageButtons(node,1,this._width+2);node=this._updateEllipsis(node,
this._width+3);if(!this._infinite)this._updatePageButtons(node,this._size,this._size);}else if(!this._infinite&&current>=halfRemainder-2){node=this._updatePageButtons(node,
1,1);node=this._updateEllipsis(node,remainder-2);this._updatePageButtons(node,remainder-1,this._size);}else if(this._infinite&&current>=halfRemainder-1){node=this._updatePageButtons(node,
1,1);node=this._updateEllipsis(node,remainder-1);this._updatePageButtons(node,remainder,this._size);}else{node=this._updatePageButtons(node,1,1);node=this._updateEllipsis(node,
current-halfWidth-1);node=this._updatePageButtons(node,current-halfWidth,current+halfWidth);node=this._updateEllipsis(node,current+halfWidth+1);if(!this._infinite)this._updatePageButtons(node,
this._size,this._size);}--current;}backNode.onmousedown=this._getHandler(current-1);backNode.onclick=zf_stdFalse;nextNode.onmousedown=this._getHandler(current+1);
nextNode.onclick=zf_stdFalse;this._setStyleHandlers(backNode);this._setStyleHandlers(nextNode);backNode.style.visibility=(current>0)?"inherit":"hidden";nextNode.style.visibility=(current<size-1)?"inherit":"hidden";
backNode=null;nextNode=null;parentNode=null;if(fromEvent&&this.onchange!=null)this.onchange(this._current);};zf_Pager.prototype._updatePageButtons=function(node,from,to){for(var i=from;
i<=to;++i){node.href="#";zf_stdSetText(node,i.toString());if((i-1)!=this._current){node.onmousedown=this._getHandler(i-1);node.className="pager-color1 pager-bgcolor1 pager-border1";
}else{node.onmousedown=zf_stdFalse;node.className="pager-color3 pager-bgcolor3 pager-border3 pager-c";}this._setStyleHandlers(node);node.onclick=zf_stdFalse;if(i>=10)node.style.width="auto";
else node.style.cssText="";node=node.nextSibling;}return node;};zf_Pager.prototype._updateEllipsis=function(node,page){node.href="#";zf_stdSetText(node,"...");node.className="pager-color1 pager-bgcolor1 pager-border1";
node.onmousedown=this._getHandler(page-1);node.onclick=zf_stdFalse;this._setStyleHandlers(node);node.style.cssText="";return node.nextSibling;};zf_Pager.prototype._getHandler=function(page){var size=this._size;
var self=this;var handler=function(e){if(!zf_stdIsLeftButton(e))return true;this.blur();self._update(size,page,true);return false;};return handler;};zf_Pager.prototype._linkEvent=function(id,
handler){var self=this;var node=this.dom(id);node.onmousedown=function(e){if(!zf_stdIsLeftButton(e))return true;this.blur();if(self[handler])self[handler].apply(self);
return false;};this._setStyleHandlers(node);node.onclick=zf_stdFalse;node.style.width="auto";node=null;};zf_Pager.prototype._setStyleHandlers=function(node){var addHoverStyles=function(){var className=this.className.split(' ');
if(className[0]=="pager-color1")className[0]="pager-color2";if(className[1]=="pager-bgcolor1")className[1]="pager-bgcolor2";if(className[2]=="pager-border1")className[2]="pager-border2";
this.className=className.join(' ');};var removeHoverStyles=function(){var className=this.className.split(' ');if(className[0]=="pager-color2")className[0]="pager-color1";
if(className[1]=="pager-bgcolor2")className[1]="pager-bgcolor1";if(className[2]=="pager-border2")className[2]="pager-border1";this.className=className.join(' ');
};node.onmouseover=addHoverStyles;node.onmouseout=removeHoverStyles;};;function zf_Prefetch(id,slots){zf_Control.prototype.constructor.call(this,id);var i=0;var self=this;
var append=function(){var dom=self.dom();if(!dom)return;var item=document.createElement("DIV");item.className="prefetch-"+i;dom.appendChild(item);item=null;if(++i<slots)setTimeout(append,
200);};setTimeout(append,1000);}zf_Prefetch.inherits(zf_Control);;function zf_utf8(str){var b=[];var len=str.length;for(var i=0;i<len;i++){var ch=str.charCodeAt(i);if(ch>=0xD800&&ch<0xDC00){var ch2=str.charCodeAt(++i);
if(ch2<0xDC00||ch2>=0xE000)break;ch=(ch-0xD800)<<10|(ch2-0xDC00);}if(ch<0x80){b.push(ch);}else if(ch<0x800){b.push(0xC0|(ch>>6));b.push(0x80|(ch)&0x3F);}else if(ch<0x10000){b.push(0xE0|(ch>>12));
b.push(0x80|(ch>>6)&0x3F);b.push(0x80|(ch)&0x3F);}else{b.push(0xF0|(ch>>18));b.push(0x80|(ch>>12)&0x3F);b.push(0x80|(ch>>6)&0x3F);b.push(0x80|(ch)&0x3F);}}return b;
};var _zf_sha256Init=[0x6A09E667,-0x4498517B,0x3C6EF372,-0x5AB00AC6,0x510E527F,-0x64FA9774,0x1F83D9AB,0x5BE0CD19];var _zf_sha256Roots=[0x428A2F98,0x71374491,-0x4A3F0431,
-0x164A245B,0x3956C25B,0x59F111F1,-0x6DC07D5C,-0x54E3A12B,-0x27F85568,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,-0x7F214E02,-0x6423F959,-0x3E640E8C,-0x1B64963F,
-0x1041B87A,0x0FC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,-0x67C1AEAE,-0x57CE3993,-0x4FFCD838,-0x40A68039,-0x391FF40D,-0x2A586EB9,0x06CA6351,
0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,-0x7E3D36D2,-0x6D8DD37B,-0x5D40175F,-0x57E599B5,-0x3DB47490,-0x3893AE5D,-0x2E6D17E7,
-0x2966F9DC,-0x0BF1CA7B,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,-0x7B3787EC,-0x7338FDF8,
-0x6F410006,-0x5BAF9315,-0x41065C09,-0x398E870E];var _zf_sha256Tail=[0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00];function _zf_sha256Pad(data){var blen=data.length*8;var len=((data.length+72)&~63)-8;data=data.concat(_zf_sha256Tail.slice(0,
len-data.length));var out=[];var i=0;do{var w=data[i++]<<24;w|=data[i++]<<16;w|=data[i++]<<8;w|=data[i++];out.push(w);}while(i<len);out.push(0);out.push(blen);return out;
}function _zf_sha256Round(res,data){for(var i=16;i<64;i++){var x=data[i-15];var y=data[i-2];var x7=(x>>>7)|(x<<25);var x18=(x>>>18)|(x<<14);var y17=(y>>>17)|(y<<15);var y19=(y>>>19)|(y<<13);
var s0=x7^x18^(x>>>3);var s1=y17^y19^(y>>>10);data.push((data[i-16]+s0+data[i-7]+s1)&-1);}var a=res[0];var b=res[1];var c=res[2];var d=res[3];var e=res[4];var f=res[5];
var g=res[6];var h=res[7];for(i=0;i<64;i++){var a2=(a>>>2)|(a<<30);var a13=(a>>>13)|(a<<19);var a22=(a>>>22)|(a<<10);var e6=(e>>>6)|(e<<26);var e11=(e>>>11)|(e<<21);
var e25=(e>>>25)|(e<<7);var ss0=a2^a13^a22;var maj=(a&b)^(a&c)^(b&c);var t2=ss0+maj;var ss1=e6^e11^e25;var ch=(e&f)^(~e&g);var t1=h+ss1+ch+_zf_sha256Roots[i]+data[i];
h=g;g=f;f=e;e=(d+t1)&-1;d=c;c=b;b=a;a=(t1+t2)&-1;}res[0]=(res[0]+a)&-1;res[1]=(res[1]+b)&-1;res[2]=(res[2]+c)&-1;res[3]=(res[3]+d)&-1;res[4]=(res[4]+e)&-1;res[5]=(res[5]+f)&-1;
res[6]=(res[6]+g)&-1;res[7]=(res[7]+h)&-1;}function zf_sha256(data){data=_zf_sha256Pad(data);var res=_zf_sha256Init.slice(0);var s=data.length;var k=0;do{var k2=k+16;_zf_sha256Round(res,
data.slice(k,k2));k=k2;}while(k<s);var out=[];s=res.length;for(var i=0;i<s;i++){var w=res[i];out.push((w>>>24)&0xFF);out.push((w>>>16)&0xFF);out.push((w>>>8)&0xFF);
out.push(w&0xFF);}return out;};;function zf_Flash(){}zf_Flash.pluginPage="http://get.adobe.com/flashplayer/";zf_Flash._hideCount=0;zf_Flash.hide=function(){;if(++zf_Flash._hideCount==1){$('.flash-pause').each(function(){try{this.Pause();
}catch(e){}});if($('.layout-frame, .fsf').addClass('no-flash').length==0){$('.frame:first').addClass('no-flash');}}};zf_Flash.show=function(){;if(--zf_Flash._hideCount==0){if($('.layout-frame, .fsf').removeClass('no-flash').length==0){$('.frame:first').removeClass('no-flash');
}}};zf_Flash.installed=function(majorVersion,minorVersion,revision){var isIE=navigator.appVersion.indexOf("MSIE")!=-1;var isWin=navigator.appVersion.toLowerCase().indexOf("win");
var isOpera=navigator.userAgent.indexOf("Opera")!=-1;var version=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){var plugin=navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"];
if(plugin){var desc=plugin.description.split(" ");;var temp=desc[2].split(".");var major=temp[0];var minor=temp[1];var rev=desc[3];if(rev=="")rev=desc[4];if(rev.charAt(0)=="d"){rev=rev.substring(1);
}else if(rev.charAt(0)=="r"){rev=rev.substring(1);if(rev.indexOf("d")>0)rev=rev.substring(0,rev.indexOf("d"));}version=[major,minor,rev].join(".");}}else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){version="4.0.0.0";
;}else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){version="3.0.0.0";;}else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){version="2.0.0.0";
;}else if(isIE&&isWin&&!isOpera){version=zf_Flash._getVersionActiveX();}if(version==-1){;return false;};var parsed=version.split(".");var parsedMajor=parseInt(parsed[0]);
var parsedMinor=parseInt(parsed[1]);var parsedRevision=parseInt(parsed[2]);if(majorVersion){if(parsedMajor!=majorVersion)return(parsedMajor>majorVersion);if(minorVersion){if(parsedMinor!=minorVersion)return(parsedMinor>minorVersion);
if(revision)return(parsedRevision>revision);return true;}return true;}return true;};zf_Flash.isSafeDomain=function(){return(!'zf_currentHost' in window)||zf_currentHost==location.hostname.toLowerCase();
};zf_Flash.createHtml=function(id,classes,src,vars,transparent,width,height){var fvars=[];$.each(vars,function(k,v){fvars.push(k+"="+escape(v!=null?v:""));});var html=null;
var bgcolor="";if(vars.bgcolor)bgcolor=' bgcolor="'+vars.bgcolor+'"';html=['<embed',' id="',id,'"',' class="',classes,'"',' src="',src,'"',' quality="high"',' width="',
width?width:1,'"',' height="',height?height:1,'"',bgcolor,' align=""',' type="application/x-shockwave-flash"',' pluginspage="',zf_Flash.pluginPage,'"',' allowFullScreen="true"',
' wmode="',transparent?'transparent':'opaque','"',' allowScriptAccess="always"',' flashvars="',fvars.join("&"),'">','</embed>'];return html.join("");};zf_Flash._getVersionActiveX=function(){var version;
var axo;var e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=axo.GetVariable("$version");;}catch(e){}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
version="WIN 6,0,21,0";axo.AllowScriptAccess="always";version=axo.GetVariable("$version");;}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
version=axo.GetVariable("$version");;}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");version="WIN 2,0,0,11";;}catch(e){}}if(!version)return-1;
version=version.substr(4).split(",").join(".");return version;};;function zf_Storage(storage){this._keys=[];this._data={};this._storage=storage;try{if(this._storage!=null)this.length=storage.length;
else this.length=this._keys.length;}catch(e){;this.length=this._keys.length;}}zf_Storage.prototype.key=function(index){;;;;try{if(this._storage!=null)return this._storage.key(index);
}catch(e){;}return this._keys[index];};zf_Storage.prototype.getItem=function(key){;;var item;try{if(this._storage!=null){item=this._storage.getItem(key);return item==null?null:item.toString();
}}catch(e){;}item=this._data[key];return item==null?null:item.toString();};zf_Storage.prototype.setItem=function(key,data){;;;try{if(this._storage!=null){this._storage.setItem(key,
data);return;}}catch(e){;}data=data.toString();if(this._data[key]==null){this._keys.push(key);this.length=this._keys.length;}this._data[key]=data;};zf_Storage.prototype.removeItem=function(key){;
;try{if(this._storage!=null){this._storage.removeItem(key);return;}}catch(e){;}if(this._data[key]==null)return;for(var i=0;i<this.length;i++){if(this._keys[i]==key){this._keys.splice(i,
1);this.length=this._keys.length;break;}}delete this._data[key];};zf_Storage.prototype.clear=function(){try{if(this._storage!=null){this._storage.clear();return;}}catch(e){;
}this._keys=[];this._data={};};var zf_storage=null;if(typeof(jQuery)!="undefined"){$(function(){try{if(window.localStorage)zf_storage=new zf_Storage(window.localStorage);
else if(window.globalStorage)zf_storage=new zf_Storage(window.globalStorage[location.host]);else zf_storage=new zf_Storage();}catch(e){;zf_storage=new zf_Storage();
}});};function zf_Form(id,data,meta){zf_Control.prototype.constructor.call(this,id);data=data?data:{};this._initData=data;this._meta=meta;this._fieldValues={};this.queue=new zf_RequestQueue(1);
this.onsubmit=this.closure(this.verifyForm);this.oninit=zf_stdTrue;this.onreply=zf_stdTrue;this.onrequestsend=zf_stdTrue;this.onrequestcomplete=zf_stdTrue;var self=this;
$(function(){self.init(data);});$(this.dom()).bind('submit',function(e,handlers){var delegates={onsubmit:self.onsubmit,onreply:self.onreply,onrequestsend:self.onrequestsend,
onrequestcomplete:self.onrequestcomplete};delegates=jQuery.extend(delegates,handlers);self._submit(delegates);return false;});}zf_Form.inherits(zf_Control);zf_Form.prototype.init=function(data){var self=this;
if(this.oninit(data)!==false){this.fill(data);var supportsAutoFocus='autofocus' in document.createElement('input');if(!supportsAutoFocus)this.$(':input[autofocus]:first').focus();
}this.$('INPUT[placeholder],TEXTAREA[placeholder]').each(function(){zf_Form.placeholderify(this);});var inputs=this.$(':input:visible');if(inputs.length>1){inputs.filter(':last').filter(':not(textarea)').bind('keypress',
function(e){if(e.which==13)self.$dom().submit();});}};zf_Form.prototype.resetDirty=function(field){var fields=field?this._getFields(field):this.$(':input[name]');var self=this;
fields.each(function(){var $input=$(this);self._fieldValues[$input.attr("name")]=self._fieldVal($input);});return fields;};zf_Form.prototype.checkDirty=function(field){var fields=field?this._getFields(field):this.$(':input[name]');
var res=false;var self=this;fields.each(function(){var $input=$(this);if(self._fieldValues[$input.attr("name")]!=self._fieldVal($input))res=true;});return res;};
zf_Form.prototype.fill=function(data,context){context=context?context:this.dom();jQuery.each(data,function(name,value){var field=$(':input[name="'+name+'"]',context);if(typeof(value)=='boolean'&&field.is(':checkbox')){field.attr('checked',
value?"checked":false).trigger('fill');return;}if(field.length<=1){field.val(value!=null?value:'').trigger('fill');return;}var values=jQuery.isArray(value)?value:[value];
field.attr('checked',function(){var fieldVal=$(this).val();for(var i=0;i<values.length;i++){if(fieldVal!=null&&values[i]==fieldVal)return true;}return false;});field.trigger('fill');
});};zf_Form.prototype.clear=function(field){var fields=field?this._getFields(field):this.$(':input');fields.each(function(){var input=$(this);if(input.is(':radio')||input.is(':checkbox'))input.attr('checked',
false);else if(input.is('SELECT'))input[0].selectedIndex=0;else if(input.is(':text')||input.is('TEXTAREA')||input.is(':password'))input.val('');}).trigger('fill');
return fields;};zf_Form.prototype.reset=function(){this.dom().reset();this.fill(this._initData);};zf_Form.prototype.getData=function(context){var self=this;var data={};context=context?context:this.dom();
$(':input[name]',context).each(function(){data[this.name]=self.fieldVal(this.name);});return data;};zf_Form.prototype.field=function(name){return this._getFields(name);
};zf_Form.prototype.fieldVal=function(field){field=this._getFields(field);if(field.length==0)return null;;var self=this;if(field.length>1&&!field.is(':radio')){var res=[];
field.each(function(){var val=self._fieldVal($(this));if(val!=null)res.push(val);});return res;}return this._fieldVal(field);};zf_Form.prototype._fieldVal=function(field){;
;if(field.is(':checkbox')&&field.length==1)return field.is(':checked');if(field.is(':checkbox')||field.is(':radio'))return field.filter(':checked').val();if(field.hasClass('input-placeholder'))return '';
if(field.is(':text')||field.is('TEXTAREA'))return jQuery.trim(field.val());return field.val();};zf_Form.prototype._getFields=function(field){if(typeof(field)=='string')return this.$(':input[name="'+field+'"]');
if(jQuery.isArray(field)){var res=new jQuery();jQuery.each(field,function(i,name){res.add(':input[name="'+name+'"]');});return res;}if(field.nodeType)field=$(field);
return field;};zf_Form.prototype.submit=function(handlers){$(this.dom()).trigger('submit',[handlers]);};zf_Form.prototype._submit=function(handlers){if(this._isSubmitting)return false;
var data=this.getData();this.clearStatus();this._isSubmitting=true;if(handlers.onsubmit(data,handlers)===false){this._isSubmitting=false;return false;}var self=this;
this._isSubmitting=true;var method=$(this.dom()).attr('method');method=method?method.toUpperCase():'POST';handlers.onrequestsend();this.queue.enqueue(method,this.methodUrl,
this.methodName,[data],function(status,retVal){self._isSubmitting=false;handlers.onrequestcomplete();if(status!=200){self.showError('An unexpected error has occurred. Please try again later. If this problem persists, contact Support.');
return;}if(retVal.error&&retVal.error.$type=="RedirectException"){retVal.error.redirect();return;}if(handlers.onreply(retVal.result,retVal.error)!==false)self.handleError(retVal.result,
retVal.error);});return true;};zf_Form.prototype.handleError=function(result,error){if(!error)return false;if(error.fieldErrors){for(var field in error.fieldErrors)this.setFieldError(field,
error.fieldErrors[field]);}else{if(jQuery.isArray(error.fields)){for(var i=error.fields.length-1;i>=0;i--)this.setFieldError(error.fields[i]);}if(error.message)this.showError(error.message);
}return false;};zf_Form.prototype.verifyForm=function(data){data=data?data:this.getData();for(var name in data){var value=data[name];var field=this._getFields(name);if(field.is(':hidden')||field.is(':disabled'))continue;
if(!this.verifyField(field,name,value))return false;}return true;};zf_Form.prototype.verifyField=function(field){field=this._getFields(field);var name=field.attr('name');
var value=this._fieldVal(field);if(field.is('[required]')&&!value){var msg=this._meta?this._meta.requiredMessages[name]:null;this.setFieldError(field,msg?msg:'A required field value is missing. Please enter the field value and try again.');
return false;}if(field.is('TEXTAREA[max-length]')){if(value!=null&&parseInt(field.attr("max-length"),10)<value.length){msg=this._meta?this._meta.requiredMessages[name]:null;
this.setFieldError(field,zf_stdFormatString(msg?msg:'The field value is too long.',parseInt(field.attr("max-length"),10),value.length));return false;}}return true;
};zf_Form.prototype.setFieldError=function(field,errorMsg){field=this._getFields(field);this.setFieldStatus(field,true,errorMsg);};zf_Form.prototype.clearStatus=function(){var self=this;
this.$(':input[name]').each(function(i,input){self.clearFieldError(input);});this.showMessage(null);};zf_Form.prototype.clearFieldError=function(field){field=this._getFields(field);
this.setFieldStatus(field,false);};zf_Form.prototype.showError=function(errorMsg){this.showMessage(errorMsg,true);};zf_Form.prototype.showMessage=function(msg,isError){};zf_Form.prototype.setFieldStatus=function(field,
isError,msg){};zf_Form.placeholderify=function(input){if(typeof(input)=='string')input=document.getElementById(input);input=$(input);;if(zf_Form.__placeholder===undefined)zf_Form.__placeholder='placeholder' in document.createElement('input');
if(zf_Form.__placeholder)return;input.bind('focus.placeholderify',function(e){var $this=$(this);if($this.hasClass('input-placeholder'))$this.removeClass('input-placeholder').val('');
});input.bind('blur.placeholderify',function(){var $this=$(this);if(!$this.val())$this.addClass('input-placeholder').val($this.attr('placeholder'));});input.bind('fill.placeholderify',
function(){var $this=$(this);$this.toggleClass('input-placeholder',!$this.val());if(!$this.val())$this.val($this.attr('placeholder'));});if(!input.val())input.addClass('input-placeholder').val(input.attr('placeholder'));
input=null;};zf_Form.initDatePicker=function($scope){$(document).keydown(function(e){switch(e.keyCode){case 9:if($.datepicker._datepickerShowing){$.datepicker._hideDatepicker(null,
'');}break;case 13:if($.datepicker._datepickerShowing){$.datepicker._hideDatepicker(null,'');e.preventDefault();e.stopPropagation();}break;case 27:if($.datepicker._datepickerShowing){$.datepicker._hideDatepicker(null,
'');e.preventDefault();e.stopPropagation();}break;default:break;}});$scope.find('.datepicker').datepicker({showOn:'focus',duration:'fast',dateFormat:'d-M-y',showAnim:'fadeIn',
beforeShow:function(input,inst){$(input).unbind("keydown",$.datepicker._doKeyDown);},showOptions:{direction:'down'}});$scope.find('.datepicker').datepicker('disable');
$scope.find('.datepicker-label').click(function(e){if($.datepicker._datepickerShowing){var input=$("#"+e.target.htmlFor);if($.datepicker._curInst.input.get(0)===input.get(0)){input.datepicker('hide',
'normal');e.preventDefault();e.stopPropagation();return false;}}return true;});$scope.find('.datepicker-label').mousedown(function(e){if($.datepicker._datepickerShowing){e.preventDefault();
e.stopPropagation();return false;}return true;});};zf_Form.enableDatePicker=function($scope,enable){$scope.find('.datepicker').datepicker(enable?'enable':'disable');};;function zf_login(userName,
password,oncomplete){zf_loginScoped(0,userName,password,oncomplete);}function zf_loginScoped(scope,userName,password,oncomplete){;zf_stdServerRequestEx("POST","/zf/core/core.asmx",
"LoginGetChallenge",[userName,scope],function(result,error){if(error!=null){oncomplete(null,error.message);return;}var hash=zf_sha256(result.salt.concat(zf_utf8(password)));
var response=zf_sha256(result.challenge.concat(hash));zf_stdServerRequestEx("POST","/zf/core/core.asmx","LoginAuthenticate",[result.challenge,response],function(result,
error){if(error!=null)oncomplete(null,error.message);else oncomplete(result,null);});});};function zf_CurrencyInfo(){this.name=null;this.code=null;this.numericCode=0;}zf_CurrencyInfo.prototype.toString=function(){return this.code;
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
zf_stdFormatEditableMoney(1234.56));}return undefined;};function zf_RedirectException(){}zf_RedirectException.prototype.redirect=function(){if(this.href)window.location.href=this.href;else window.location.reload();
};;function zf_PriceKey(pricingKey,ownerId,defaultList){if(arguments.length==3){this.pricingKey=pricingKey;this.ownerId=ownerId;this.defaultList=defaultList;}else if(arguments.length==1){var photo=pricingKey;
this.pricingKey=photo.priceKey;this.ownerId=photo.owner!=null?photo.owner.id:0;this.defaultList=false;}else{this.pricingKey=null;this.ownerId=0;this.defaultList=false;
}}zf_PriceKey.prototype.toString=function(){return this.pricingKey+"."+this.ownerId+"/"+this.defaultList;};zf_PriceKey.prototype.equals=function(other){if(!other)return false;return zf_PriceKey.compare(this,
other)==0;};zf_PriceKey.prototype.isSimple=function(){return this.pricingKey.length<7||this.pricingKey.length==7&&this.pricingKey.charAt(0)<='4';};zf_PriceKey.prototype.getVendorId=function(){return 'user'+this.ownerId;
};zf_PriceKey.compare=function(a,b){if(a.pricingKey<b.pricingKey)return-1;else if(a.pricingKey>b.pricingKey)return 1;else if(a.ownerId<b.ownerId)return-1;else if(a.ownerId>b.ownerId)return 1;
else if(a.defaultList<b.defaultList)return-1;else if(a.defaultList>b.defaultList)return 1;else return 0;};;function zf_stdPost(url,data){if(zf_stdPost.counter==null)zf_stdPost.counter=0;
else++zf_stdPost.counter;var domForm=document.createElement("FORM");domForm.id=domForm.name="__zf_form"+zf_stdPost.counter;domForm.method="post";domForm.action=url;
domForm.style.display="none";for(var key in data){var domInput=document.createElement("INPUT");domInput.type="hidden";domInput.id=domInput.name=key;domInput.value=data[key];
domForm.appendChild(domInput);}var domBody=document.getElementsByTagName("BODY")[0];domBody.appendChild(domForm);domForm.submit();}function zf_stdSetOpacity(dom,opacity){if(dom.filters&&dom.filters[0])dom.filters[0].opacity=parseFloat(opacity)*100;
else if('opacity' in dom.style)dom.style.opacity=opacity;else if(opacity>0.01)dom.style.visibility='inherit';else dom.style.visibility='hidden';};function zfl_Control(id){if(zf_stdNoArgs(arguments))return;
zf_Control.prototype.constructor.call(this,id);}zfl_Control.inherits(zf_Control);zfl_Control.prototype.visibility=function(style){;if(typeof(style)=="boolean")style=style?"inherit":"hidden";
this.dom().style.visibility=style;};zfl_Control.prototype.display=function(style){;if(typeof(style)=="boolean")style=style?"block":"none";this.dom().style.display=style;};zfl_Control.prototype.notifyResize=function(deferred){if(this.onresize)this.onresize(deferred);
};;function zfl_Curtain(id){zfl_Control.prototype.constructor.call(this,id);var self=this;this._animation=new zf_Animation({"darkest":90,"dark":70,"light":50,"hide":0},function(v){zf_stdSetOpacity(self.dom(),
v/100);});}zfl_Curtain.inherits(zfl_Control);zfl_Curtain.show=function(style,speed,callback,parentNode){var current=zfl_Curtain._current;if(!current){var dom=document.createElement("DIV");
dom.id="dimmer";parentNode=parentNode?parentNode:document.body;parentNode.appendChild(dom);$("#page-frame").addClass("page-dimmed");zf_Flash.hide();zfl_Curtain._current=current=new zfl_Curtain(dom.id);
current._resizeHandler=current.eventHandler(current._window_onresize);zf_stdAttachEvent(window,"resize",current._resizeHandler);}zfl_Curtain._current._show(style,
speed,callback);zfl_Popup.hideAny();};zfl_Curtain.hide=function(){var current=zfl_Curtain._current;if(!current)return;current._hide();var dom=current.dom();zf_stdDetachEvent(window,
"resize",current._resizeHandler);dom.parentNode.removeChild(dom);zfl_Curtain._current=null;$("#page-frame").removeClass("page-dimmed");zf_Flash.show();};zfl_Curtain.prototype._show=function(style,
speed,callback){if(!style)style="light";if(speed)this._animation.animate(style,speed,callback);else{this._animation.jump(style);if(callback)callback();}};zfl_Curtain.prototype._hide=function(){this._animation.jump("hide");
};zfl_Curtain.prototype._window_onresize=function(){};;;function zf_MulticastDelegate(owner){this._owner=owner;this._list=[];}zf_MulticastDelegate.prototype.attach=function(handler){this._list.push(handler);
};zf_MulticastDelegate.prototype.detach=function(handler){for(var i=0;i<this._list.length;i++){if(this._list[i]==handler){this._list.splice(i,1);return;}}};zf_MulticastDelegate.prototype.invoke=function(){for(var i=0;
i<this._list.length;i++)this._list[i].apply(this._owner,arguments);};;function zfl_PasswordManager(){}zfl_PasswordManager.unlocked={};zfl_PasswordManager.pending={};zfl_PasswordManager.hints={};zfl_PasswordManager.notify=new zf_MulticastDelegate(zfl_PasswordManager);
zfl_PasswordManager.init=function(realms){;for(var i=0;i<realms.length;i++)this.unlocked[this.getKey(realms[i])]=true;};zfl_PasswordManager.getKey=function(realm){return[realm.owner,realm.realm].join('.');
};zfl_PasswordManager.check=function(ownerId,realmId){var key=realm=this.getKey({owner:ownerId,realm:realmId});return!!this.unlocked[key];};zfl_PasswordManager.subscribe=function(ownerId,realmId,onunlock){var key=realm=this.getKey({owner:ownerId,
realm:realmId});if(this.unlocked[key])zf_stdDeferCall(null,onunlock);else if(this.pending[key])this.pending[key].push(onunlock);else this.pending[key]=[onunlock];
};zfl_PasswordManager.retrieveHint=function(ownerId,realmId,onhint){var key=realm=this.getKey({owner:ownerId,realm:realmId});var existing=this.hints[key];if(existing!==null&&existing!==undefined){zf_stdDeferCall(null,
onhint,null,existing===false?null:existing);return;}var self=this;zf_stdServerRequest("POST","/zf/layout/layout.asmx","GetPasswordHint",[ownerId,realmId],function(status,
retVal){if(status!=200||retVal.error!=null){onhint(null);return;}var res=retVal.result;self.hints[realmId]=(res===null||res===undefined)?false:res;onhint(res);});
};zfl_PasswordManager.validate=function(ownerId,realmId,password,onpassword){var key=realm=this.getKey({owner:ownerId,realm:realmId});if(this.unlocked[key]){zf_stdDeferCall(null,onpassword,
null,true);return;}var self=this;zf_stdServerRequest("POST","/zf/app/manage.asmx","RegisterRealmPassword",[ownerId,realmId,password],function(status,retVal){if(status!=200||retVal.error!=null||!retVal.result){onpassword(false);
return;}self.unlocked[key]=true;var subscribers=self.pending[key];self.pending[key]=null;if(subscribers){for(var i=0;subscribers&&i<subscribers.length;i++)subscribers[i]();
}onpassword(true);self.notify.invoke();});};;function zfl_Form(id,data,meta){zf_Form.prototype.constructor.call(this,id,data,meta);var self=this;$(function(){self.bindSubmit();
});}zfl_Form.inherits(zf_Form);zfl_Form.prototype.setFieldStatus=function(field,isError,msg){field.closest('.form-field, .textfield, .selectfield').toggleClass('field-error',!!isError);
if(msg!=null)this.showMessage(msg,!!isError);if(isError)field.focus();};zfl_Form.prototype.showMessage=function(msg,isError){this.$('.form-message').toggleClass('form-error form-color1',
!!isError).text(msg==null?'':msg).toggle(!!msg);};zfl_Form.prototype.bindSubmit=function(nodes){var self=this;nodes=nodes?nodes:this.$('.submit');nodes.filter('.button').each(function(){zfl_Button.attachToForm($(this),
self);});nodes.not('.button').bind('click',function(){self.submit();return false;});};;function zfl_stdTransformResponse(source,name){var start=new Date();var obj=_zf_stdTransformResponse(source);
var end=new Date();if(name==null)name="anonymous";;return obj;}function zfl_event(e,self,method){zf_stdStopPropagation(e);zf_stdPreventDefault(e);var args=[];for(var i=3;
i<arguments.length;i++)args.push(arguments[i]);method.apply(self,args);}zfl_Layout.Controls=function(layout){this.all=[];;this._layout=layout;};zfl_Layout.Controls.prototype.add=function(control){if(!control)return undefined;
this.all.push(control);this._init(control);if(arguments.length>1){var args=[];for(var a=1;a<arguments.length;a++)args.push(arguments[a]);control.init.apply(control,
args);}return control;};zfl_Layout.Controls.prototype.addUpdate=function(updateMethod){;var control={update:updateMethod};this.all.push(control);this._init(control);return control;
};zfl_Layout.Controls.prototype.addDeferredUpdate=function(tag,updateMethod){;;var control=this.addUpdate(updateMethod);control.update=zf_stdMakeDeferred(self.id+"."+tag,updateMethod);
return control;};zfl_Layout.Controls.prototype._init=function(control){;var layout=this._layout;control.layout=layout;control.command=layout._handlers.oncommand;control.commandtest=layout._handlers.oncommandtest;
control.zenbar=layout.zenbar;control.scrapbook=layout.scrapbook;control.onresize=function(){layout.recalc();};};;;;function zfl_Column(id,stretcherId,waterlines,decorated){zfl_Control.prototype.constructor.call(this,
id);if(stretcherId!=null&&document.getElementById(stretcherId)!=null)this.stretcherId=stretcherId;this._waterlines=[];for(var i=0;i<waterlines.length;i++){var w=waterlines[i];
if(document.getElementById(w.id))this._waterlines.push(w);}this.hasWaterline=this._waterlines.length>0;this._decorated=decorated;}zfl_Column.inherits(zfl_Control);zfl_Column.prototype.getMinHeight=function(){var domSelf=this.dom();
var cyTotal;if(this.hasWaterline){var above=zf_stdGetHeightAbove(domSelf);var offset=this._getWaterlineOffset(domSelf);cyTotal=above+offset;;}else{cyTotal=zf_stdGetHeightOverall(domSelf);
;}if(this.stretcherId!=null){var domStretcher=document.getElementById(this.stretcherId);var cyStretcher=zf_stdGetHeightOverall(domStretcher);cyTotal-=cyStretcher;
;};return cyTotal;};zfl_Column.prototype.getFixedHeight=function(){var domSelf=this.dom();var cyTotal=zf_stdGetHeightOverall(domSelf);var cyStretcher=0;if(this.stretcherId!=null){var domStretcher=document.getElementById(this.stretcherId);
cyStretcher=zf_stdGetHeightOverall(domStretcher);};return cyTotal-cyStretcher;};zfl_Column.prototype.stretch=function(height){var stretcher=document.getElementById(this.stretcherId);
if(this.onstretch&&this.onstretch(height,stretcher)){var actual=stretcher.offsetHeight;actual+=zf_stdExtractPixels(zf_stdGetCurrentStyle(stretcher,'margin-top','marginTopWidth'));
actual+=zf_stdExtractPixels(zf_stdGetCurrentStyle(stretcher,'margin-bottom','marginBottomWidth'));this.updateDecoration();return actual;}height-=zf_stdGetHeightAbove(stretcher);
height-=zf_stdGetHeightBelow(stretcher);stretcher.style.height=height+"px";this.updateDecoration();return height;};zfl_Column.prototype.updateDependencies=function(){if(this.dependencies){for(var i=0;
i<this.dependencies.length;i++){var control=this.dependencies[i];if(control&&control.oncolumnresize instanceof Function)control.oncolumnresize(this);}}};zfl_Column.prototype.updateDecoration=function(){};
zfl_Column.prototype._getWaterlineOffset=function(dom){var offset=null;for(var i=0;i<this._waterlines.length;i++){var w=this._waterlines[i];var wo=zf_stdGetOffset(w.id,dom).cy+w.offset;
if(offset==null)offset=wo;else offset=Math.min(offset,wo);}return offset;};;function zfl_Button(id,callback){zfl_Control.prototype.constructor.call(this,id);this._callback=callback;
this.clickable=true;var self=this;this.$dom().hover(function(){self.$dom("state").addClass("s-hover");self._updateState();},function(){self.$dom("state").removeClass("s-hover");
self._updateState();});this.$dom().bind('click',this.closure(this._button_onclick));$(window).bind('unload',this.closure(this._button_onunload));}zfl_Button.inherits(zfl_Control);
zfl_Button.prototype.toggleEnabled=function(toggle){toggle=toggle==null?!this.isEnabled():toggle;this.$dom("state").toggleClass("s-disabled",!toggle);return this._updateState();
};zfl_Button.prototype.isEnabled=function(){return!this.$dom("state").hasClass("s-disabled");};zfl_Button.prototype.togglePending=function(toggle){toggle=toggle==null?!this.isPending():toggle;
this.$dom("state").toggleClass("s-pending",!!toggle);return this._updateState();};zfl_Button.prototype.isPending=function(){return this.$dom("state").hasClass("s-pending");
};zfl_Button.prototype._updateState=function(){var state=this.$dom("state");var enabled=!state.hasClass("s-disabled");var pending=state.hasClass("s-pending");var hovered=state.hasClass("s-hover");
state.toggleClass("standard button-color1 button-bgcolor1 button-border1",enabled&&!hovered&&!pending);state.toggleClass("hover button-color2 button-bgcolor2 button-border2",
enabled&&hovered&&!pending);state.toggleClass("disabled button-color3 button-bgcolor3 button-border3",!enabled||pending);return this;};zfl_Button.prototype._button_onclick=function(e){if(!this.clickable||!this.isEnabled()||this.isPending())return false;
var href=this.$().attr("href");var hasHref=!!href&&href!="#";if(this._callback)this._callback();var event=jQuery.Event("zfl_click");this.$dom().trigger(event,[this]);
if(event.isDefaultPrevented())return false;if(hasHref)this.togglePending(true);return hasHref;};zfl_Button.prototype._button_onunload=function(){this.togglePending(false);
};zfl_Button.attachToForm=function(btnNode,form){if(typeof(btnNode)=='string')btnNode=$(document.getElementById(btnNode));btnNode.bind('zfl_click',function(e,btn){form.submit({onrequestsend:function(){btn.togglePending(true);
},onreply:function(result,error){if(error!=null)btn.togglePending(false);form.onreply(result,error);}});});};zfl_Button.prototype.attachToForm=function(form){return zfl_Button.attachToForm(this.$dom(),
form);};zfl_Button.createHtml=function(id,label,classes){;classes=classes==null?[]:classes;classes=["button","button-font1"].concat(classes);var labelClass=$.inArray("button-large",
classes)>-1?"label button-font2":"label";classes=classes.join(" ");var stdclass="standard button-color1 button-bgcolor1 button-border1";var over="this.className='hover button-color2 button-bgcolor2 button-border2'";
var out="this.className='standard button-color1 button-bgcolor1 button-border1'";return['<div class="',classes,'"',(id==null?[]:[' id="',id,'"']),'>','<div id="',
id,'-state" class="',stdclass,'" onmouseover="',over,'" onmouseout="',out,'">','<div class="left"></div>','<div class="right"></div>','<div class="middle">','<div class="',
labelClass,'">',zf_stdHtmlEncode(label),'</div>','<div class="icon"></div>','</div>','</div>','</div>'].join("");};zfl_Button.onmouseover=function(btn){$(btn).removeClass("standard button-bgcolor1 button-color1 button-border1").addClass("hover button-bgcolor2 button-color2 button-border2");
};zfl_Button.onmouseout=function(btn){$(btn).removeClass("hover button-bgcolor2 button-color2 button-border2").addClass("standard button-bgcolor1 button-color1 button-border1");
};zfl_Button.enableButton=function(btn,enable){$(btn).toggleClass("button-bgcolor3 button-color3 button-border3 abutton-disabled",!enable).find(".icon").toggleClass("icon-disabled",
!enable);};;;function zfl_Bin(id){zfl_Control.prototype.constructor.call(this,id);this.expanded=this.dom("state").className.indexOf("bin-expanded")!=-1;}zfl_Bin.inherits(zfl_Control);
zfl_Bin.prototype.toggle=function(){this.expanded=!this.expanded;var cookieValue=0,cookieMask=0,cookieBit=0;var cookieIndex=parseInt(this.dom().getAttribute("zf:cookie"));
if(!isNaN(cookieIndex)){cookieValue=parseInt(zf_stdGetCookie("zf_10y_lbinv"));if(isNaN(cookieValue))cookieValue=0;cookieMask=parseInt(zf_stdGetCookie("zf_10y_lbinm"));
if(isNaN(cookieMask))cookieMask=0;cookieBit=1<<cookieIndex;}var domState=this.dom("state");if(this.expanded){zf_stdReplaceClassName(domState,"bin-collapsed","bin-expanded");
cookieValue=cookieValue|cookieBit;cookieMask=cookieMask|cookieBit;}else{zf_stdReplaceClassName(domState,"bin-expanded","bin-collapsed");cookieValue=cookieValue&~cookieBit;
cookieMask=cookieMask|cookieBit;}if(!isNaN(cookieIndex)){zf_stdSetCookie("zf_10y_lbinv",cookieValue,new Date(2020,1,1));zf_stdSetCookie("zf_10y_lbinm",cookieMask,
new Date(2020,1,1));}if(this.ontoggle!=null)this.ontoggle(this.expanded);if(this.expanded){var offset=zf_stdGetOffset(this.dom());var scroll=zf_stdGetClientScroll();
var binHeight=this.$dom().outerHeight(true)+40;var clientHeight=zf_stdGetClientHeight();if(scroll.cy+clientHeight-100<offset.cy){scroll=offset.cy+Math.min(clientHeight-10,
binHeight)-clientHeight;$('html,body').animate({scrollTop:scroll},300);}}};zfl_Bin.prototype._feeds_onclick=function(e){zf_stdStopPropagation(e);zf_stdPreventDefault(e);
if(this.onfeeds!=null)this.onfeeds(zf_stdGetEventSource(e));};zfl_Bin.prototype.setTitleSuffix=function(suffix){this.$dom("title-suffix").toggleClass('none',!suffix).html(suffix);
};;;function zfl_Pair(id,field,format){zfl_Control.prototype.constructor.call(this,id);this.field=field;this.format=format;this._formatter=zfl_Pair.formatters[field];}zfl_Pair.inherits(zfl_Control);
zfl_Pair.formatters={};zfl_Pair.formatters["PhotoPage.Uploaded"]=function(photo){if((photo.access.mask&zf_AccessMask.ProtectDateCreated)!=0){this.display(false);}else{this.set(zf_stdFormatDate(photo.uploaded));
this.display(true);}};zfl_Pair.formatters["PhotoPage.Viewed"]=function(photo){if((photo.access.mask&zf_AccessMask.ProtectVisits)!=0){this.display(false);}else{this.set(photo.views);
this.display(true);}};zfl_Pair.formatters["PhotoPage.Taken"]=function(photo){if(!photo.taken||(photo.access.mask&zf_AccessMask.ProtectDateTaken)!=0){this.display(false);
}else{this.set(zf_stdFormatDate(photo.taken));this.display(true);}};zfl_Pair.prototype.set=function(text,index,loading){if(!loading)this.visibility(true);var bees=this.dom().getElementsByTagName("B");
var className=index==null?"pair-0":("pair-"+index);for(var i=0;i<bees.length;i++){if(zf_stdHasClassName(bees[i],className)){if(loading){bees[i].innerHTML=['<span class="pair-loading pair-font1">',
text,'</span>'].join("");}else{bees[i].innerHTML="";zf_stdSetText(bees[i],text);}break;}}};zfl_Pair.prototype.showLoading=function(){this.set("loading...",0,true);};zfl_Pair.prototype.update=function(obj){;
;if(this._formatter==null||this.current==obj)return;if(this.current!=null)this.current.unadvise(this);if(obj.loaded){this._formatter(obj);}else{var self=this;obj.advise(this,
function(){self._formatter(obj);},function(){self.showLoading();});}this.current=obj;};;;function zfl_PhotoSelection(scope){this._scope=scope;this._selection={};}zfl_PhotoSelection._storage_prefix="layout.selection.";
zfl_PhotoSelection.prototype.none=function(){return $.isEmptyObject(this._selection);};zfl_PhotoSelection.prototype.selected=function(photoId){return this._selection["_"+photoId]==photoId;};zfl_PhotoSelection.prototype.select=function(photoIds){if(!$.isArray(photoIds))return this.select([photoIds]);
var changed=false;var selection=this._selection;var key;$.each(photoIds,function(k,v){key="_"+v;changed=changed||!selection[key];selection[key]=v;});if(changed&&this.onchange)this.onchange();
return changed;};zfl_PhotoSelection.prototype.unselect=function(photoIds){if(arguments.length==0){if(this.none())return false;this._selection={};if(this.onchange)this.onchange();return true;
}if(!$.isArray(photoIds))return this.unselect([photoIds]);var changed=false;var selection=this._selection;var key;$.each(photoIds,function(k,v){key="_"+v;changed=changed||selection[key];
delete selection[key];});if(changed&&this.onchange)this.onchange();return changed;};zfl_PhotoSelection.load=function(key,scope){var self=new zfl_PhotoSelection(scope);var data=zf_storage.getItem(zfl_PhotoSelection._storage_prefix+key);
if(!data)return self;var prefix=["v1",scope?scope:"",","].join("");if(data.indexOf(prefix)!=0||(data.length-prefix.length)%8!=0)return self;var selection={};for(var offset=prefix.length;
offset<data.length;offset+=8){var decoded=parseInt(data.substr(offset,8),16);;if(isNaN(decoded))return self;selection["_"+decoded]=decoded;};self._selection=selection;
return self;};zfl_PhotoSelection._paddings=["","0","00","000","0000","00000","000000","0000000"];zfl_PhotoSelection.prototype.save=function(key){;if(this.none()){zf_storage.removeItem(zfl_PhotoSelection._storage_prefix+key);
return;}var data=["v1",this._scope?this._scope:"",","];var count=0;$.each(this._selection,function(k,v){;var encoded=v.toString(16);;if(encoded.length<8)data.push(zfl_PhotoSelection._paddings[8-encoded.length]);
data.push(encoded);++count;});zf_storage.setItem(zfl_PhotoSelection._storage_prefix+key,data.join(""));;};zfl_PhotoSelection.prototype.get=function(){var ids=[];$.each(this._selection,
function(k,v){ids.push(v);});return ids;};zfl_PhotoSelection.prototype.getPhotos=function(list){var ids=[];$.each(this._selection,function(k,v){ids.push(v);});return $.map(ids,function(id){var index=list.find(id);
;if(index==-1)return null;var photo=list.get(index);;return photo;});};;;function zfl_AbstractMenu(id,vertical,subMenuHDir,subMenuVDir){this._subMenuVDir=subMenuVDir;this._subMenuHDir=subMenuHDir;
this.vertical=vertical;this._suspendHover=null;this._showed=undefined;this._extraHorzPadding=0;zfl_Control.prototype.constructor.call(this,id);this.root=function(){return $("BODY > .menu-submenu")[0];
};}zfl_AbstractMenu.inherits(zfl_Control);zfl_AbstractMenu.prototype.hoverItem=function($item,hoverOn){};zfl_AbstractMenu.prototype.hoverSubItem=function($item,hoverOn){if(hoverOn){$item.removeClass("homemenu-color4 homemenu-bgcolor6 homemenu-bgimage5").addClass("homemenu-color5 homemenu-bgcolor7 homemenu-bgimage6");
}else{$item.removeClass("homemenu-color5 homemenu-bgcolor7 homemenu-bgimage6").addClass("hhomemenu-color4 homemenu-bgcolor6 homemenu-bgimage5");}};zfl_AbstractMenu.prototype.getCurrentMenu=function(){return zfl_Layout.currentMenu;
};zfl_AbstractMenu.prototype.setCurrentMenu=function(menu){zfl_Layout.currentMenu=menu;};zfl_AbstractMenu.prototype.bind=function($items){if(this._subMenuVDir==null){var selfTopPos=$(this.dom()).offset().top;
var documentHeight=$(document).height();if(selfTopPos<documentHeight/2)this._subMenuVDir="d";else this._subMenuVDir="u";}var self=this;var showMenu=function(){var $this=$(this);
if($this.attr("data-zf-index")==null)$this=$this.find(".menu-top-item > [data-zf-index]:first");;self.hoverItem($(this),true);if(self._suspendHover!=null&&(new Date()).getTime()<self._suspendHover){;
return;}if(self.getCurrentMenu()!=self){;$(self.dom()).stop(true,true).delay(200).queue(function(){;self.showSubMenu($this);$(self.dom()).dequeue();});}else{;self.showSubMenu($this);
}};var hideMenu=function(){;var $this=$(this);if($this.attr("data-zf-index")==null)$this=$this.find(".menu-top-item > [data-zf-index]:first");self.hoverItem($(this),
false);if(self._suspendHover!=null&&(new Date()).getTime()<self._suspendHover){;return;}self.hideByIndex($this.attr("data-zf-index"));};var showMenuImmediate=function(event){;
var $this=$(this);if($this.attr("data-zf-index")==null)$this=$this.find(".menu-top-item > [data-zf-index]:first");self.showSubMenu($this);event.preventDefault();
};$items.hover(showMenu,hideMenu).click(showMenuImmediate);};zfl_AbstractMenu.prototype._calculateSubMenu=function($item,$added,width,height){var vOrientation=this._subMenuVDir;
var hOrientation=this._subMenuHDir;var fontSize=parseInt($item.css("font-size"));var extraVertPadding=0;if(!this.vertical){if(fontSize<14)extraVertPadding=0;else if(fontSize<18)extraVertPadding=1;
else if(fontSize<22)extraVertPadding=2;else extraVertPadding=4;}var viewPortWidth=parseInt($(window).width());var viewPortHeight=parseInt($(window).height());var viewPortLeft=$(window).scrollLeft();
var viewPortTop=$(window).scrollTop();var itemInnerHeight=$item.innerHeight();var menuItemHeight=((itemInnerHeight-25)%2==0)?25:24;var paddingTop=parseInt($item.css("padding-top"))||0;
var paddingBottom=parseInt($item.css("padding-bottom"))||0;var itemHeight=$item.outerHeight(false)-paddingTop-paddingBottom;var topItemHeight=Math.max(itemHeight,
menuItemHeight)+2*extraVertPadding;var topItemHeightOffset=($item.innerHeight()-topItemHeight)/2;var paddingLeft=parseInt($item.css("padding-left"))||0;var paddingRight=parseInt($item.css("padding-right"))||0;
var borderWidth=parseInt($added.find(".menu-submenu-middle").css("border-left-width"));var tiWidth=$item.innerWidth()-paddingLeft-paddingRight;var originalWidth=width;
width=Math.max(width,$item.innerWidth()-2*this._extraHorzPadding);;;;;var vShift=0;if(vOrientation=="d"){if($item.offset().top-viewPortTop+menuItemHeight+height>viewPortHeight){if($item.offset().top>height)vOrientation="u";
else vShift=height-((viewPortHeight+viewPortTop)-$item.offset().top);}}else if(vOrientation=="u"){if($item.offset().top+menuItemHeight-viewPortTop<height){if(viewPortHeight-($item.offset().top-viewPortTop)>height)vOrientation="d";
else vShift=height-($item.offset().top+menuItemHeight-viewPortTop);}};if(hOrientation=="r"){if($item.offset().left-viewPortLeft+$item.outerWidth(false)+width+10>viewPortWidth)hOrientation="l";
}else if(hOrientation=="l"){if($item.offset().left-viewPortLeft+width+10>viewPortWidth)hOrientation="r";}var $topItem=$added.find(".menu-submenu-top-item");this._setSubmenuRadius($added,
vOrientation,hOrientation);;var res={submenuStyles:{},topItemStyles:{borderWidth:borderWidth},topItemAStyles:{}};if(this.vertical){switch(hOrientation){case "r":$.extend(res.submenuStyles,
{left:$item.offset().left+$item.outerWidth(false)-2*borderWidth});$.extend(res.topItemStyles,{left:-$item.outerWidth(false)+borderWidth,borderRightStyle:"none",paddingRight:borderWidth});
break;case "l":$.extend(res.submenuStyles,{right:$("BODY").innerWidth()-$item.offset().left});$.extend(res.topItemStyles,{right:-($item.outerWidth(false)-borderWidth),
borderLeftStyle:"none",paddingLeft:borderWidth});break;default:break;}switch(vOrientation){case "d":$.extend(res.submenuStyles,{top:$item.offset().top-1-borderWidth-vShift-2*extraVertPadding});
$.extend(res.topItemStyles,{paddingTop:extraVertPadding,paddingBottom:extraVertPadding,top:0+vShift});break;case "u":$.extend(res.submenuStyles,{bottom:$("BODY").innerHeight()-$item.offset().top-$item.outerHeight()-1-borderWidth-vShift-2*extraVertPadding});
$.extend(res.topItemStyles,{paddingTop:extraVertPadding,paddingBottom:extraVertPadding,bottom:0+vShift});break;default:break;}}else{switch(hOrientation){case "r":$.extend(res.submenuStyles,
{left:Math.round($item.offset().left+this._extraHorzPadding-borderWidth)});$.extend(res.topItemStyles,{left:0,borderWidth:borderWidth});break;case "l":$.extend(res.submenuStyles,
{right:$("BODY").innerWidth()+this._extraHorzPadding-$item.offset().left-$item.outerWidth()+borderWidth});$.extend(res.topItemStyles,{right:-0,borderWidth:borderWidth});
break;default:break;}switch(vOrientation){case "d":$.extend(res.submenuStyles,{top:$item.offset().top+topItemHeight+topItemHeightOffset+extraVertPadding});$.extend(res.topItemStyles,
{top:-topItemHeight-borderWidth-2*extraVertPadding,borderBottomStyle:"none",paddingTop:extraVertPadding,paddingBottom:borderWidth+extraVertPadding});break;case "u":$.extend(res.submenuStyles,
{bottom:Math.round($("BODY").innerHeight()-topItemHeightOffset-$item.offset().top+extraVertPadding)});$.extend(res.topItemStyles,{bottom:-(topItemHeight+borderWidth)-2*extraVertPadding,
borderTopStyle:"none",paddingBottom:extraVertPadding,paddingTop:borderWidth+extraVertPadding});break;default:break;}};if(originalWidth!=width){$.extend(res.submenuStyles,
{width:width});}$.extend(res.topItemStyles,{width:tiWidth-2*this._extraHorzPadding+paddingLeft+paddingRight-2*borderWidth});$.extend(res.topItemAStyles,{height:topItemHeight,
width:tiWidth-2*borderWidth,paddingLeft:paddingLeft-this._extraHorzPadding,paddingRight:paddingRight-this._extraHorzPadding,lineHeight:(topItemHeight)+"px"});return res;
};zfl_AbstractMenu.prototype.showSubMenu=function($item){var index;if(typeof($item)=="string"||typeof($item)=="number"){index=parseInt($item);$item=$(this.dom()).find('"A[data-zf-index="'+index+'"]');
}else{index=parseInt($item.attr("data-zf-index"));};$(this.dom()).stop(true,true);;if(this._showed==index)return;if(this.getCurrentMenu())this.getCurrentMenu().remove();
this._showed=index;this.setCurrentMenu(this);var $added=$item.closest("LI").find(".menu-submenu").clone().appendTo("BODY");var $submenu=$added.find(".menu-submenu-inner");
$added.css("visibility","hidden").show();$submenu.css("visibility","hidden").show();var smWidth=$submenu.outerWidth();var smHeight=$submenu.outerHeight();$submenu.hide().css("visibility",
"visible");$added.hide().css("visibility","visible");;var sm=this._calculateSubMenu($item,$added,smWidth,smHeight);var self=this;$added.hover(function(){self.showSubMenu(index);
},function(){self.hideByIndex(index);});$added.find(".menu-submenu-inner A").hover(function(){self.hoverSubItem($(this),true);},function(){self.hoverSubItem($(this),
false);});$added.find(".menu-submenu-top-item A").click(function(event){self.remove();self._suspendHover=(new Date()).getTime()+100;event.preventDefault();event.stopPropagation();
});var $topItem=$added.find(".menu-submenu-top-item");$added.css(sm.submenuStyles);$added.show();$topItem.removeAttr("href");$topItem.css(sm.topItemStyles).find("A").css($.extend({textAlign:$item.css("text-align"),
fontFamily:$item.css("font-family"),fontSize:$item.css("font-size"),textTransform:$item.css("text-transform"),letterSpacing:$item.css("letter-spacing"),fontWeight:$item.css("font-weight"),
fontStyle:$item.css("font-style")},sm.topItemAStyles));;$topItem.css("visibility","hidden").show();$topItem.css("visibility","visible");$added.find(".menu-submenu-inner").slideDown(200);
};zfl_AbstractMenu.prototype.hideByIndex=function(index){;;var self=this;var reset=function(){var $menu=$("BODY > .menu-submenu");if($menu.find(".menu-submenu-top-item [data-zf-index]").attr("data-zf-index")!=index)return;
$menu.remove();self._showed=null;if(self.getCurrentMenu()==self)self.setCurrentMenu(null);};var slideUp=function(){;$(self.dom()).dequeue();if(self._showed==null){;
return;}var $menu=$("BODY > .menu-submenu");if($menu.find(".menu-submenu-top-item [data-zf-index]").attr("data-zf-index")!=index){return;}$menu.stop(true,true).find(".menu-submenu-inner").slideUp(100,
reset);};$(this.dom()).stop(true,true).delay(400).queue(slideUp);};zfl_AbstractMenu.prototype.remove=function(){var $menu=$("BODY > .menu-submenu");;this._showed=null;$(this.dom()).stop(true,
true);$menu.stop(true,true).hide().remove();if(this.getCurrentMenu()==self)this.setCurrentMenu(null);};zfl_AbstractMenu.prototype._getMenuName=function(){return '';};zfl_AbstractMenu.prototype._setSubmenuRadius=function(elAt,
vOrientation,hOrientation){var $topItem=elAt.find(".menu-submenu-top-item");var $subMenuFrame=elAt.find(".menu-submenu-middle");var menumame=this._getMenuName();
$topItem.removeClass(menumame+'-tl');$topItem.removeClass(menumame+'-tr');$topItem.removeClass(menumame+'-bl');$topItem.removeClass(menumame+'-br');$subMenuFrame.removeClass(menumame+'-tl');
$subMenuFrame.removeClass(menumame+'-tr');$subMenuFrame.removeClass(menumame+'-bl');$subMenuFrame.removeClass(menumame+'-br');if(this.vertical){if(vOrientation=='d'){if(hOrientation=='l'){$topItem.addClass(menumame+'-tr');
$topItem.addClass(menumame+'-br');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-br');}if(hOrientation=='r'){$topItem.addClass(menumame+'-tl');
$topItem.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-br');}}else if(vOrientation=='u'){if(hOrientation=='l'){$topItem.addClass(menumame+'-tr');
$topItem.addClass(menumame+'-br');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-bl');}if(hOrientation=='r'){$topItem.addClass(menumame+'-tl');
$topItem.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-br');}}}else{if(vOrientation=='d'){if(hOrientation=='l'){$topItem.addClass(menumame+'-tl');
$topItem.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-br');}if(hOrientation=='r'){$topItem.addClass(menumame+'-tl');
$topItem.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-bl');$subMenuFrame.addClass(menumame+'-br');}}else if(vOrientation=='u'){if(hOrientation=='l'){$topItem.addClass(menumame+'-bl');
$topItem.addClass(menumame+'-br');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-bl');}if(hOrientation=='r'){$topItem.addClass(menumame+'-bl');
$topItem.addClass(menumame+'-br');$subMenuFrame.addClass(menumame+'-tr');$subMenuFrame.addClass(menumame+'-tl');$subMenuFrame.addClass(menumame+'-br');}}}};;;;function zfl_SearchInput(id,
customize,path,query){zfl_Control.prototype.constructor.call(this,id);this._customize=customize;this._path=path;this._query=query;this.$dom("menu").hover(function(){$(this).show();
},function(){$(this).hide();});}zfl_SearchInput.inherits(zfl_Control);zfl_SearchInput.prototype.search=function(verb){var uri=null;if(verb==="browse"){uri=["http://",zf_defaultHost,"/zf/search/"].join("");
uri=zf_stdGetTransferUrl(uri);}else{var search=this.dom("input");if(!search.edited){;return;}var query=encodeURIComponent(search.value);if(verb==="global"){uri=["http://",
zf_defaultHost,"/zf/search/#q=",query].join("");uri=zf_stdGetTransferUrl(uri);}else if(verb==="local"){zf_stdSetCookie("zfl_search","",null,true,true);if(location.hostname===zf_secureHost){uri=['http://',
zf_ownerDomain,'/?q=',query].join('');}else{uri=[this._path,'?',this._query,'=',query].join('');}if(this._customize){uri+="&customize="+this._customize;}}}if(uri){location.href=uri;
}};zfl_SearchInput.prototype._menuitem_onmouseover=function(item){zf_stdReplaceClassName(item,null,"hover");zf_stdReplaceClassName(item,null,"header-bgcolor4");var a=item.getElementsByTagName("A");
if(a.length>0)a[0].className="header-color2";};zfl_SearchInput.prototype._menuitem_onmouseout=function(item){zf_stdReplaceClassName(item,"hover",null);zf_stdReplaceClassName(item,
"header-bgcolor4",null);var a=item.getElementsByTagName("A");if(a.length>0)a[0].className="header-color1";};zfl_SearchInput.prototype._input_onfocus=function(item){if(item.value=="SEARCH")item.value="";
item.edited=true;};zfl_SearchInput.prototype._input_onblur=function(item){if(zf_stdTrim(item.value)==""){item.value="SEARCH";item.edited=false;}};zfl_SearchInput.prototype._input_onkeydown=function(e){e=zf_stdGetEvent(e);
if(e.keyCode==13){zf_stdPreventDefault(e);zf_stdStopPropagation(e);this.dom("input").blur();this.search("local");}};zfl_SearchInput.prototype._showMenu=function(show){var $menu=this.$dom("menu");
var offset=this.$('.searchi-icon').offset();$menu.detach().appendTo('body').css({right:zf_stdGetClientWidth()-offset.left-32,top:offset.top+16});if(show)$menu.show();
else $menu.hide();};zfl_SearchInput.prototype._onmouseout=function(e){e=zf_stdGetEvent(e);var to=(e.relatedTarget||e.toElement);var inside=false;var dom=this.dom();try{for(var p=to;
p!=null;p=p.parentNode){if(p==dom){inside=true;break;}}}catch(e){}if(!inside)this._showMenu(false);};;function zfl_Header(id,collapsibleSearch){zfl_AbstractMenu.prototype.constructor.call(this,
id,false,"r","d");this._search_slider_delay=new zf_DelayedInvoke(800);var self=this;if(collapsibleSearch){this.$dom("search-slider").mouseenter(this.closure(this._slider_search_onmouseenter)).mouseleave(this.closure(this._slider_search_onmouseleave));
}this._extraHorzPadding=-2;this.bind($(this.dom()).find("A[data-zf-subitems]"));}zfl_Header.inherits(zfl_AbstractMenu);zfl_Header.prototype.customize=function(){var search=location.search.replace(/(\?|&)customize=\d/g,
"");if(search.charAt(0)=="&")search="?"+search.substring(1);if(search.length>0)search+="&customize=1";else search="?customize=1";location.href=location.pathname+search+location.hash;
};zfl_Header.login=function(comeback,verb){var href=comeback?comeback:location.href;href=encodeURIComponent(href);var url=["https://",zf_secureHost,"/",zf_ownerName,"/login.html",
"?return=",href];location.href=zf_stdGetTransferUrl(url.join(""));};zfl_Header.prototype.login=function(verb){var href=null;if(this.current&&this.current.loaded)href=this.current.getHref("full");
zfl_Header.login(href,verb);};zfl_Header.prototype.logout=function(){var href;if(this.current&&this.current.loaded)href=this.current.getHref("full");else href=location.href;
location.href=zf_stdGetLogoutUrl(href);};zfl_Header.prototype.update=function(photo){};zfl_Header.prototype._slider_search_onmouseenter=function(e){var self=this;if(e.relatedTarget){for(var parent=e.relatedTarget;
parent!=null;parent=parent.parentNode){if(zf_stdHasClassName(parent,"lb"))return;}}this._search_slider_delay.clear();this.$dom("search-slider").removeClass("collapsed").animate({width:"204px"},
{duration:"fast",easing:"swing",queue:false,complete:function(){$(this).addClass("expanded");}});};zfl_Header.prototype._slider_search_onmouseleave=function(){var self=this;
this._search_slider_delay.invoke(function(){$(self.dom("search-slider")).removeClass("expanded").animate({width:"22px"},{duration:"slow",easing:"swing",queue:false,
complete:function(){$(this).addClass("collapsed");}});});};zfl_Header.prototype.hoverSubItem=function($item,hoverOn){if(hoverOn){$item.removeClass("header-color8 header-bgcolor5").addClass("header-color9 header-bgcolor6");
}else{$item.removeClass("header-color9 header-bgcolor6").addClass("header-color8 header-bgcolor5");}};zfl_Header.prototype._getMenuName=function(){return 'headersubmenu';};
;function zf_ProtoItem(){this.photos=[];this.settings={};this.services={};this.extra={};}zf_ProtoItem.prototype.clean=function(){var res=jQuery.extend(new zf_ProtoItem(),this);delete res.extra;
if(res.hasOwnProperty('oldPages')){delete res.oldPages;}if(res.hasOwnProperty('oldElements')){delete res.oldElements;}return res;};zf_ProtoItem.prototype.getPhoto=function(imageId,
index){return $.lookup(this.photos,function(p){return p.imageId==imageId&&p.index==index;});};zf_ProtoItem.clean=function(items){items=[].concat(items);for(var i=0;i<items.length;
i++)items[i]=items[i].clean();return items;};;function zf_ProtoPackage(){this.extra={};}zf_ProtoPackage.prototype.clean=function(){var res=$.extend(new zf_ProtoPackage(),this);if(res.items!=null)res.items=zf_ProtoItem.clean(res.items);
delete res.extra;return res;};zf_ProtoPackage.clean=function(items){;return $.map(items,function(item){return item.clean();});};;function zfl_DecorationInfo(){this.imagePad=false;this.borderSize=0;
this.shadowSize=0;this.extraSize=0;}zfl_DecorationInfo.getShadowHtml=function(className,name,type,size,left,top,width,height,forcePieceWise){var i;var sb=[];var sgprefix,sgsuffix;
var elements;if(!type||type=="system"){if(!forcePieceWise&&width<=300&&height<=300){zfl_DecorationInfo._getSystemShadowHtml(sb,className,name,size,left,top,width,
height);}else{zfl_DecorationInfo._getSystemShadowHtml(sb,className,name,size,left,top,width,height,"left");zfl_DecorationInfo._getSystemShadowHtml(sb,className,name,
size,left,top,width,height,"right");zfl_DecorationInfo._getSystemShadowHtml(sb,className,name,size,left,top,width,height,"top");zfl_DecorationInfo._getSystemShadowHtml(sb,
className,name,size,left,top,width,height,"bottom");}}else if(type=="preset"){size=25;elements=[{part:"top-left",left:left,top:top,width:size,height:size},{part:"top",
left:left+size,top:top,width:width-size*2,height:size},{part:"top-right",left:left+width-size,top:top,width:size,height:size},{part:"left",left:left,top:top+size,
width:size,height:height-size*2},{part:"right",left:left+width-size,top:top+size,width:size,height:height-size*2},{part:"bottom-left",left:left,top:top+height-size,
width:size,height:size},{part:"bottom",left:left+size,top:top+height-size,width:width-size*2,height:size},{part:"bottom-right",left:left+width-size,top:top+height-size,
width:size,height:size}];sgprefix='background-image:url(/zf/img/layout/presets/';sgsuffix='.png)';for(i=0;i<elements.length;i++){zfl_DecorationInfo._getCustomShadowHtml(sb,
className,name,elements[i],sgprefix,sgsuffix);}}else if(type=="custom"){size=25;elements=[{part:"120",left:left,top:top,width:size,height:size},{part:"121",left:left+size,
top:top,width:width-size*2,height:size},{part:"122",left:left+width-size,top:top,width:size,height:size},{part:"127",left:left,top:top+size,width:size,height:height-size*2},
{part:"123",left:left+width-size,top:top+size,width:size,height:height-size*2},{part:"126",left:left,top:top+height-size,width:size,height:size},{part:"125",left:left+size,
top:top+height-size,width:width-size*2,height:size},{part:"124",left:left+width-size,top:top+height-size,width:size,height:size}];sgprefix='background-image:url(/img/';
sgsuffix='.png)';for(i=0;i<elements.length;i++){zfl_DecorationInfo._getCustomShadowHtml(sb,className,name,elements[i],sgprefix,sgsuffix);}}return sb.join("");};zfl_DecorationInfo._getSystemShadowHtml=function(sb,
className,name,size,left,top,width,height,side){var inner=16;var sgprefix,sgsuffix;var hostname="";if(zf_imageHosts.length>0){var key=Math.abs((width*(9839851291^height))%12500419+(side?side.length:0));
hostname=[location.protocol,"//",zf_imageHosts[key%zf_imageHosts.length]].join("");}sgprefix='background-image:url('+hostname+'/zf/border/';sgsuffix='.png)';if(side==null){sb.push('<div class="',
className,'" style="left:',left,'px;top:',top,'px;width:',width,'px;height:',height,'px;',sgprefix,name,'.',size,'.',width-size*2,'.',height-size*2,sgsuffix,'"></div>');
}else if(side=="left"){sb.push('<div class="',className,'" style="left:',left,'px;top:',top,'px;width:',size+inner,'px;height:',height,'px;',sgprefix,name,'.',size,
'.',inner,'.',height-size*2,'.left',sgsuffix,'"></div>');}else if(side=="right"){sb.push('<div class="',className,'" style="right:',left,'px;top:',top,'px;width:',
size+inner,'px;height:',height,'px;',sgprefix,name,'.',size,'.',inner,'.',height-size*2,'.right',sgsuffix,'"></div>');}else if(side=="top"){sb.push('<div class="',
className,'" style="left:',left+size+inner,'px;top:',top,'px;width:',width-(inner+size)*2,'px;height:',size+inner,'px;',sgprefix,name,'.',size,'.',width-size*2,'.',
inner,'.top',sgsuffix,'"></div>');}else if(side=="bottom"){var bottomTop=height+2*top-(top+inner+size);sb.push('<div class="',className,'" style="left:',left+size+inner,
'px;top:',bottomTop,'px;width:',width-(inner+size)*2,'px;height:',size+inner,'px;',sgprefix,name,'.',size,'.',width-size*2,'.',inner,'.bottom',sgsuffix,'"></div>');
}};zfl_DecorationInfo._getCustomShadowHtml=function(sb,className,name,info,sgprefix,sgsuffix){sb.push('<div class="',className,'" style="left:',info.left,'px;top:',info.top,'px;width:',
info.width,'px;height:',info.height,'px;',sgprefix,name,'-',info.part,sgsuffix,'"></div>');};;function zfb_Api(){;}zfb_Api._queue=new zf_RequestQueue(1,1);zfb_Api.loadScrapbook=function(scrapbookInfo,
oncomplete){;;var changerNumber=function(){return scrapbookInfo.changeNumber;};zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','LoadScrapbook',[scrapbookInfo.token,
changerNumber],function(result,error){;if(error!=null)return;oncomplete(result);});};zfb_Api.addToScrapbook=function(scrapbook,photogId,photoIds,purchase,oncomplete){;;
var token=scrapbook?scrapbook.token:null;zfb_Api._queue.enqueueEx("POST","/zf/core/scrapbook.asmx","AddToScrapbook",[token,photogId,photoIds,purchase],oncomplete);
};zfb_Api.removeFromScrapbook=function(scrapbook,photoIds,oncomplete){;;var changerNumber=function(){return scrapbook.changeNumber;};zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx',
'RemoveFromScrapbook',[scrapbook.token,photoIds,changerNumber],oncomplete);};zfb_Api.removeFromScrapbook2=function(scrapbook,photoIds,oncomplete){;;zfb_Api._queue.enqueueEx('POST',
'/zf/core/scrapbook.asmx','RemoveFromScrapbook2',[scrapbook.token,photoIds],oncomplete);};zfb_Api.reindexScrapbook=function(scrapbook,indices,oncomplete){;;;var changerNumber=function(){return scrapbook.changeNumber;
};zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','ReindexScrapbook',[scrapbook.token,indices,changerNumber],oncomplete);};zfb_Api.loadScrapbooks=function(photogId,
oncomplete){zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','LoadScrapbooks',[photogId],oncomplete);};zfb_Api.createScrapbook=function(name,photogId,oncomplete){;
;zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','CreateScrapbook',[name,photogId],oncomplete);};zfb_Api.deleteScrapbook=function(scrapbook,oncomplete){;;var changerNumber=function(){return scrapbook.changeNumber;
};zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','DeleteScrapbook',[scrapbook.token,changerNumber],oncomplete);};zfb_Api.renameScrapbook=function(scrapbook,name,
oncomplete){;;;var changerNumber=function(){return scrapbook.changeNumber;};zfb_Api._queue.enqueueEx('POST','/zf/core/scrapbook.asmx','RenameScrapbook',[scrapbook.token,
name,changerNumber],oncomplete);};zfb_Api.copyScrapbook=function(scrapbook,name,oncomplete){;;;var changerNumber=function(){return scrapbook.changeNumber;};zfb_Api._queue.enqueueEx('POST',
'/zf/core/scrapbook.asmx','CopyScrapbook',[scrapbook.token,name,changerNumber],oncomplete);};zfb_Api.shareScrapbook=function(scrapbook,name,sharerName,sharerEmail,sharerMessage,
oncomplete){;;;var changerNumber=function(){return scrapbook.changeNumber;};zfb_Api._queue.enqueueEx("POST","/zf/core/scrapbook.asmx","ShareScrapbook",[scrapbook.token,
name,sharerName,sharerEmail,sharerMessage,changerNumber],oncomplete);};zfb_Api.getScrapbookToken=function(scrapbook,shared,readOnly,oncomplete){;;zf_stdServerRequestEx("GET",
"/zf/core/scrapbook.asmx","GetScrapbookToken",[scrapbook.token,shared,readOnly],oncomplete);};zfb_Api.storeScrapbook=function(scrapbook,oncomplete){;;zfb_Api._queue.enqueueEx("POST",
"/zf/core/scrapbook.asmx","StoreScrapbook",[scrapbook.token],oncomplete);};;var zf_SourceType={Image:1,Video:2};;function zfp_Configurator(id,mode,cacheToken,decorationInfo,canUseScrapbooks,
enableAnalytics){;zf_Control.prototype.constructor.call(this,id);this.mode=mode;this.canUseScrapbooks=canUseScrapbooks;this.cart=null;this.returnUrl=null;this.photos=null;
this.filter=null;this._enableAnalytics=enableAnalytics||false;this._cacheToken=cacheToken;this._ticking=false;if(decorationInfo!=null)this.decorationInfo=decorationInfo;
this._queue=new zf_RequestQueue(1);this._headerStack=[];this._analytics=null;}zfp_Configurator.inherits(zf_Control);zfp_Configurator.Mode={AddToCart:0,PriceList:1,Customize:2,AddToOrder:3};zfp_Configurator.getShippingZone=function(pricing){var szCode=zf_stdGetCookie('zf_shipzone');
if(!szCode)szCode='US';if(szCode.length>2&&szCode.charAt(0)=='!'){szCode=szCode.substring(1);}else if(pricing!=null){var vendors=pricing.vendors;var hasUS=vendors['mpix']!=null||vendors['mpixpro']!=null||vendors['millers-wp']!=null||vendors['millers-sse']!=null;
var hasEU=vendors['photobox']!=null||vendors['ovi']!=null;if(hasUS&&!hasEU)szCode=szCode=='CA'?szCode:'US';else if(!hasUS&&hasEU)szCode=(szCode=='CA'||szCode=='US')?'WW':szCode;
}if(pricing!=null&&!pricing.root.isEmpty){var filtered=pricing.filter(zfp_Configurator.createShippingZoneFilter(szCode));var digitalOnly=false;if(filtered.root.packages.length==0){digitalOnly=true;
$.each(filtered.root.products,function(){var vendorMeta=zf_VendorMeta.cached(this.vendorId);return(digitalOnly=vendorMeta.optionSets[this.optionSetId].isDigital);
});}if(digitalOnly){var found=false;for(var vid in pricing.vendors){var v=pricing.vendors[vid];if(!v.isCustom){szCode=v.meta().shippingZones[0];found=true;break;
}}if(!found&&pricing.root.products.length>0){for(var i=0;i<pricing.root.products.length;i++){var p=pricing.root.products[i];var vendorMeta=zf_VendorMeta.cached(p.vendorId);
if(!vendorMeta.optionSets[p.optionSetId].isDigital){szCode=p.meta().shippingZones[0];found=true;break;}}}if(!found&&pricing.root.packages.length>0)szCode=pricing.root.packages[0].meta().shippingZones[0];
}}var zone=zf_ShippingZone.all[szCode];;return zone;};zfp_Configurator.setShippingZone=function(zone){;var code=zone instanceof zf_ShippingZone?zone.code:zone;var expires=new Date();
expires.setFullYear(expires.getFullYear()+1);zf_stdSetCookie('zf_shipzone','!'+code,expires,true);};zfp_Configurator.setLocale=function(locale){;var expires=new Date();expires.setFullYear(expires.getFullYear()+10);
zf_stdSetCookie('zf_lang',locale,expires,true);zf_locale=locale;};zfp_Configurator.prototype.setDecorationInfo=function(decorationInfo){this.decorationInfo=decorationInfo;};zfp_Configurator.prototype.setReturnUrl=function(url){this.returnUrl=url;
};zfp_Configurator.prototype.show=function(title){var self=this;$(window).bind('resize.pc',this.closure(this.recalcLayout));$(document).bind('keydown.pc',function(e){if(e.keyCode==27){if(typeof self._itemEditor==='object'&&typeof self._itemEditor.close==='function'){self._itemEditor.close();
}self.hide();}});$('BODY').append($(this.dom()));this._cssBody=$('BODY')[0].style.cssText;$('BODY').css('overflow-x','hidden');$('BODY').css('overflow-y','hidden');
this._resize();this.$('DIV.pc-hdr:first').text(title!=null?title:'Select Product');this.$('DIV.pc-frame:first').addClass('pc-s-loading').append('<div class="pc-loading pc-font2">Loading...</div>');
this._headerStack=[];this._closeHook=null;this._activePage=null;this._onhide=null;this.$().show();if(!this._scriptLoaded){var count=2;var onload=function(){if(--count==0){self._scriptLoaded=true;
if(self._deferredInit!=null)self._deferredInit();self._deferredInit=null;}};zf_stdLoadScript('configurator.js',onload);zf_stdLoadScript('jqueryui.js',onload);}};
zfp_Configurator.prototype.hide=function(){$('BODY')[0].style.cssText=this._cssBody;this.$('DIV.pc-loading').remove();$(window).unbind('.pc');$(document).unbind('.pc');if(this._activePage!=null){this._activePage.$().triggerHandler('hidePage');
this._activePage=null;}if(this._onhide!=null)this._onhide.apply(null);zf_stdDeferCall(null,function(){this.$().hide();if(this._hidePanels!==undefined)this._hidePanels();
},this);};zfp_Configurator.prototype.addToCart=function(options){if(this._addToCart!==undefined){this._addToCart(options);}else{var self=this;this._deferredInit=function(){self._addToCart(options);
};}};zfp_Configurator.prototype.selectProducts=function(options){if(this._selectProducts!==undefined){this._selectProducts(options);}else{var self=this;this._deferredInit=function(){self._selectProducts(options);
};}};zfp_Configurator.prototype.addToOrder=function(options){if(this._addToOrder!==undefined){this._addToOrder(options);}else{var self=this;this._deferredInit=function(){self._addToOrder(options);
};}};zfp_Configurator.prototype.customizePricing=function(options){if(this._customizePricing!==undefined){this._customizePricing(options);}else{var self=this;this._deferredInit=function(){self._customizePricing(options);
};}};zfp_Configurator.prototype.configureItems=function(options){if(this._configureItems!==undefined){this._configureItems(options);}else{var self=this;this._deferredInit=function(){self._configureItems(options);
};}};zfp_Configurator.prototype.confirmProduct=function(options){if(this._confirmProduct!==undefined){this._confirmProduct(options);}else{var self=this;this._deferredInit=function(){self._confirmProduct(options);
};}};zfp_Configurator.prototype.editProduct=function(options){if(this._editProduct!==undefined){this._editProduct(options);}else{var self=this;this._deferredInit=function(){self._editProduct(options);
};}};zfp_Configurator.prototype.displayLicense=function(license){if(this._displayLicense!==undefined){this._displayLicense(license);}else{var self=this;this._deferredInit=function(){self._displayLicense(license);
};}};zfp_Configurator.prototype.recalcLayout=function(){if(!this._ticking){var self=this;this._ticking=true;requestAnimationFrame(function(){zf_stdDeferCall(self.id+'.recalcLayout',
self._resize,self);self._ticking=false;});}};zfp_Configurator.prototype._resize=function(){var win=$(window);var width=win.width();var height=win.height();this.$('.pc-bg:first').height(document.body.scrollHeight);
var cx=Math.max(width-44,950);var cy=Math.max(height-44,590);var x=(width-cx)/2-2;var y=(height-cy)/2-2;this.$().css('overflow-x',x<0?'scroll':'hidden');this.$().css('overflow-y',
y<0?'scroll':'hidden');if(x<0)x=0;if(y<0)y=0;cx-=24;cy-=24;this.$('DIV.pc-frame:first').css('left',x+'px').css('top',y+'px').width(cx).height(cy);this.$('DIV.pc-body:first').width(cx).height(cy);
if(this._resizeImpl!==undefined)this._resizeImpl(cx,cy);return{cx:cx,cy:cy};};zfp_Configurator.prototype._close_onclick=function(e){e=$.event.fix(e);if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();if(this._closeHook!=null){this._closeHook();}else{this.hide();}this.trackPageView();};zfp_Configurator.prototype.trackPageView=function(path){if(this._enableAnalytics){if(!this._analytics){if(typeof zfs_Analytics==='object'){this._analytics=new zfs_Analytics('UA-362486-4',
false,'t4');}else if(typeof zfl_Analytics==='object'){this._analytics=new zfl_Analytics(false,'UA-362486-4',null,null,null,location.pathname+location.search,'t4');
}else{this._analytics=new zf_Analytics('UA-362486-4',false,'t4');}}this._analytics.trackPageView(path);}};;function zf_CartSummary(){this.id=0;this.size=0;this.photographerId=0;
this.total=0;this.incomplete=false;this.hasMultiImage=false;this.categories=[];this.incompleteProducts=[];this.multiImageProducts=[];}zf_CartSummary.CategoryInfo=function(){};
zf_CartSummary.ProductInfo=function(){};;function zfl_ZenBar(id,cart,addToCart,decorAddToCart,hidden){zfl_Control.prototype.constructor.call(this,id);this.cart=cart;this._addToCart=addToCart;
this._hidden=hidden;this._cartQueue=new zf_RequestQueue(500);this.visible=false;if(addToCart)addToCart.setDecorationInfo(decorAddToCart);this.$(".zenbar-account-link,.zenbar-account-menu").hover(this.closure(this._menu_onmouseover),
this.closure(this._menu_onmouseout));this._addtocart_onadd();var carti=true;if(carti)this.$(".zenbar-cart-link,.zenbar-carti").hover(this.closure(this._cart_onmouseover),
this.closure(this._cart_onmouseout));else this.$(".zenbar-cart-link .icon2").hide();this.$(".zenbar-sb-link,.zenbar-sb-menu").hover(this.closure(this._scrapbook_onmouseover),
this.closure(this._scrapbook_onmouseout));this.$(".zenbar-menu,.zenbar-carti").detach().appendTo("body");var self=this;this.$(".zenbar-sb-balloon").detach().appendTo("body").find(".close").click(function(){self.$(".zenbar-sb-back").fadeOut(1000);
self.$(".zenbar-sb-link").animate({color:"white"},{duration:1000,queue:false});$(this).parent().fadeOut(200);return false;});this.removerMenu={remove:function(){self.$dom("accmenu").stop(true,
true).hide();},dom:function(){return self.dom("accmenu");}};this.removerCart={remove:function(){self.$dom("carti").stop(true,true).hide();},dom:function(){return self.dom("carti");
}};this.removerSbMenu={remove:function(){self.$dom("sbmenu").stop(true,true).hide();},dom:function(){return self.dom("sbmenu");}};this.$(".zenbar-sb-link").click(function(){self.showScrapbook();
$("#zenbar-sb-balloon .close").trigger('click');return false;});}zfl_ZenBar.inherits(zfl_Control);zfl_ZenBar.prototype.init=function(){if(this._autoScrapbook())zf_stdDeferCall(null,
this.showScrapbook,this);};zfl_ZenBar.customize=function(){var search=location.search.replace(/(\?|&)customize=\d/g,"");if(search.charAt(0)=="&")search="?"+search.substring(1);
if(search.length>0)search+="&customize=1";else search="?customize=1";location.href=location.pathname+search+location.hash;};zfl_ZenBar.prototype.customize=function(){zfl_ZenBar.customize();
};zfl_ZenBar.prototype.logout=function(){var href;if(this.current&&this.current.loaded)href=this.current.getHref("full");else href=location.href;location.href=zf_stdGetLogoutUrl(href);
};zfl_ZenBar.prototype._menu_onmouseover=function(item){var left=this.$(".zenbar-account-link").position().left-8;if(zfl_Layout.currentMenu&&zfl_Layout.currentMenu!=this.removerMenu)zfl_Layout.currentMenu.remove();
zfl_Layout.currentMenu=this.removerMenu;this.$dom("accmenu").css("left",left).stop(true,true).slideDown(100);};zfl_ZenBar.prototype._menu_onmouseout=function(item){var self=this;
var reset=function(){if(zfl_Layout.currentMenu==self.removerMenu)zfl_Layout.currentMenu=null;};this.$dom("accmenu").delay(600).queue(function(){$(this).stop(true,
true).slideUp(200,reset).dequeue();});};zfl_ZenBar.prototype._addtocart_onadd=function(cart){if(cart)this.cart=cart;else cart=this.cart;this.$dom().trigger("zfl_cartchange");
if(!cart)return;if(!this._updateVisibility())return;if(!cart.size){this.$().removeClass("zenbar-s-checkout");return;}var text=zf_stdFormatString("Cart ({0})",cart.size);
this.$().addClass("zenbar-s-checkout").find(".zenbar-cart-link .text").text(text);};zfl_ZenBar.prototype.setScrapbookInfo=function(scrapbook,scrapbookEdit){var first=!this.scrapbook&&!!scrapbook&&!scrapbookEdit;
var animate=!!this.scrapbook&&!!scrapbook&&this.scrapbook.id!=scrapbook.id||!!scrapbook&&scrapbook.addedCount!=undefined&&scrapbook.addedCount!=0&&!scrapbookEdit;
this.scrapbook=scrapbook;this._updateVisibility();this._scrapbookList=null;if(!this._updateVisibility())return;this.$().toggleClass("zenbar-s-scrapbook",!!scrapbook);
if(!scrapbook)return;this.$(".zenbar-sb").toggleClass("zenbar-s-scrapbook-edit",!!scrapbookEdit);if(scrapbookEdit){this.$(".zenbar-sb-close").get(0).onclick=function(){scrapbookEdit.hide();
return false;};return;}var text=zf_stdFormatString("{0} ({1})",scrapbook.name,scrapbook.photoCount);this.$(".zenbar-sb-link .text").text(text);this.$(".zenbar-sb-sharer").toggleClass("none",
!scrapbook.isSharedWith).text(scrapbook.sharerName?(scrapbook.sharerName+": "):"");this.$(".zenbar-sb-prefix").toggleClass("none",scrapbook.isSharedWith);if(animate){var parent=this.$(".zenbar-sb");
parent.find(".zenbar-sb-back").width(parent.width()).css({display:"block"});parent.find(".zenbar-sb-link").css({color:"#D07A0F"});if(first&&scrapbook.addedCount>0){if(scrapbook.name=="Selected For Purchase")text="Selected photos have been added to the Favorites Set. Click Favorites to view the set and purchase the photos.";
else text=zf_stdFormatString("Selected photos have been added to {0}. Click Favorites to view the set.",scrapbook.name);this.$dom("sb-balloon").fadeIn("fast").find(".text").text(text);
}else{parent.clearQueue().delay(800).queue(function(next){$(".zenbar-sb-back",this).fadeOut(1000);$(".zenbar-sb-link",this).animate({color:"white"},{duration:1000,
queue:false});next();});}parent=null;}};zfl_ZenBar.prototype.update=function(photo){this.current=photo;};zfl_ZenBar.prototype._updateVisibility=function(){this.visible=!this._hidden&&(!!zf_userId||!!this.cart.size||!!this.scrapbook);
this.$().toggleClass("none",!this.visible);$("#page-frame").toggleClass("zenbar-visible",this.visible);return this.visible;};zfl_ZenBar.prototype.addToCart=function(options){var popup=this._addToCart;
var cart=this.cart;options=options?options:{};popup.setReturnUrl(location.href);popup.show(options.title);var onadd=this.closure(this._addtocart_onadd);var onafterupdate=function(changeNumber,
items){cart.changeNumber=changeNumber;};return function(photos){popup.addToCart($.extend(options,{cart:cart,photos:photos,add:onadd,afterupdate:onafterupdate}));
};};zfl_ZenBar.prototype.confirmProduct=function(){var popup=this._addToCart;var cart=this.cart;var onafterupdate=function(changeNumber,items){cart.changeNumber=changeNumber;
};popup.setReturnUrl(location.href);popup.show("Loading Product Confirmation");return function(info){popup.confirmProduct({cart:cart,item:info.item,photos:info.photos,
afterupdate:onafterupdate});};};zfl_ZenBar.prototype.editProduct=function(info,options){var popup=this._addToCart;var cart=this.cart;popup.show('');options=options?options:{};
var onafterupdate=function(changeNumber,items){cart.changeNumber=changeNumber;};if(info.item!=null){return function(photos){popup.editProduct($.extend(options,{cart:cart,
item:info.item,itemPhotos:info.photos,photos:(photos instanceof Array)?photos:[photos],afterupdate:onafterupdate}));};}else{return function(photos){popup.editProduct($.extend(options,
{cart:cart,pkg:info.pkg,itemPhotos:info.photos,photos:(photos instanceof Array)?photos:[photos],afterupdate:onafterupdate}));};}};zfl_ZenBar.prototype.showScrapbook=function(){this.removerSbMenu.remove();
this._scrapbookList=null;if(this.onscrapbook)this.onscrapbook();zf_stdRemoveCookie("zf_zb_opensb",true);};zfl_ZenBar.prototype._cart_onmouseover=function(){if(zfl_Layout.currentMenu&&zfl_Layout.currentMenu!=this.removerCart)zfl_Layout.currentMenu.remove();
zfl_Layout.currentMenu=this.removerCart;this.$dom("carti").find(".total").text(zf_stdFormatMoney(this.cart.productPrice,this.cart.currency));this.$dom("carti").stop(true,
true).slideDown(100);var self=this;this._cartQueue.enqueueEx("GET","/zf/core/printing/printing.asmx","GetCartSummary",[this.cart.id,this.cart.photographerId,this.cart.changeNumber,
true],function(result,error){if(error)return;var markup=[];for(var i=0;i<result.categories.length;i++){var category=result.categories[i];markup.push('<div class="cat">',
zf_stdHtmlEncode(category.name),'<div class="amount">',zf_stdFormatMoney(category.price,self.cart.currency),'</div>','<div class="count">',category.count,'</div>',
'</div>');}self.$dom("carti").find(".loading").hide();self.$dom("carti").find(".products").show().html(markup.join(""));});};zfl_ZenBar.prototype._cart_onmouseout=function(){var self=this;
var reset=function(){if(zfl_Layout.currentMenu==self.removerCart)zfl_Layout.currentMenu=null;};this.$dom("carti").delay(400).queue(function(){$(this).stop(true,true).slideUp(200,
reset).dequeue();});};zfl_ZenBar.prototype._save_onclick=function(){this.$dom("carti").stop(true,true).hide();var args={title:'Save Cart',text:'To store your shopping cart with your account you need to login or register.',
text2:'Once you are logged in, your shopping cart will be accessible from multiple computers.',curtain:true,buttons:['Cancel','Login or Register'],onbutton:function(btn){if(btn==1)zfl_Header.login();
}};zfl_MessageBox.show(args);return;};zfl_ZenBar.prototype._scrapbook_onmouseover=function(){if(zfl_Layout.currentMenu&&zfl_Layout.currentMenu!=this.removerSbMenu)zfl_Layout.currentMenu.remove();
zfl_Layout.currentMenu=this.removerSbMenu;var left=this.$(".zenbar-sb-link").position().left;this.$dom("sbmenu").css("left",left).stop(true,true).slideDown(100);
var self=this;if(self._scrapbookList)return;zfb_Api.loadScrapbooks(zf_ownerId,function(result,error){if(error!=null)return;self._buildScrapbookMenu(result);self._scrapbookList=result;
});};zfl_ZenBar.prototype._scrapbook_onmouseout=function(){var self=this;var reset=function(){if(zfl_Layout.currentMenu==self.removerSbMenu)zfl_Layout.currentMenu=null;};this.$dom("sbmenu").delay(400).queue(function(){$(this).stop(true,
true).slideUp(200,reset).dequeue();});};zfl_ZenBar.prototype._buildScrapbookMenu=function(list){var self=this;var markup=[];for(var i=0;i<list.length;i++){markup.push('<a class="zenbar-color2" zf:index="',
i,'">','<span class="zenbar-color1">',list[i].id==this.scrapbook.id?'Type your:':'Switch to','</span> ',zf_stdHtmlEncode(list[i].name),'</a>');}this.$dom("sbmenu").find(".list").html(markup.join(""));
this.$dom("sbmenu").find(".list a").click(function(){var index=parseInt($(this).attr("zf:index"));self.removerSbMenu.remove();if(list[index].id==self.scrapbook.id)self.showScrapbook();
else self.scrapbookEdit.switchTo(list[index]);});this.$dom("sbmenu").find(".zenbar-sb-create").unbind().bind('click',function(){self.removerSbMenu.remove();self.scrapbookEdit.addNewSet();
return false;});};zfl_ZenBar.prototype._autoScrapbook=function(){var token=zf_stdGetCookie('zf_zb_opensb');return!!token&&!this.disableAutoScrapbook;};;;function zfl_Footer(id){var self=this;
$(function(){self.init();});zfl_AbstractMenu.prototype.constructor.call(this,id,false,"r","u");}zfl_Footer.inherits(zfl_AbstractMenu);zfl_Footer.prototype.init=function(){this._extraHorzPadding=-2;
this.bind($(this.dom()).find("A[data-zf-subitems]"));};zfl_Footer.prototype.login=function(verb){var href=null;if(this.current&&this.current.loaded)href=this.current.getHref("full");
zfl_Header.login(href,verb);};zfl_Footer.prototype.logout=function(){var href;if(this.current&&this.current.loaded)href=this.current.getHref("full");else href=location.href;
location.href=zf_stdGetLogoutUrl(href);};zfl_Footer.prototype.update=function(photo){this.current=photo;};zfl_Footer.prototype.hoverSubItem=function($item,hoverOn){if(hoverOn){$item.removeClass("footer-color3 footer-bgcolor2").addClass("footer-color4 footer-bgcolor3");
}else{$item.removeClass("footer-color4 footer-bgcolor3").addClass("footer-color3 footer-bgcolor2");}};zfl_Footer.prototype._getMenuName=function(){return 'footersubmenu';};
;;;function zfl_Popup(id,embedded){if(zf_stdNoArgs(arguments))return;this.embedded=embedded;zfl_Control.prototype.constructor.call(this,id);}zfl_Popup.inherits(zfl_Control);zfl_Popup.current=null;
zfl_Popup.prototype.show=function(domOrigin,constraint){var domPopup=this.dom();if(!this.embedded){if(zfl_Popup.current!=null)zfl_Popup.current.hide();document.body.appendChild(domPopup.parentNode.removeChild(domPopup));
}this.updatePosition(domOrigin,constraint);if(!this.embedded){zfl_Popup.current=this;setTimeout(function(){zf_stdAttachEvent(document.body,"mousedown",zfl_Popup._any_onclick);
zf_stdAttachEvent(document.body,"keypress",zfl_Popup._any_onkeypress);},10);}domPopup=null;domOrigin=null;};zfl_Popup.prototype.hide=function(){this.display(false);if(this.embedded)return;
if(zfl_Popup.current!=this)return;zf_stdDetachEvent(document.body,"mousedown",zfl_Popup._any_onclick);zf_stdDetachEvent(document.body,"keypress",zfl_Popup._any_onkeypress);
zfl_Popup.current=null;};zfl_Popup._any_onclick=function(e){if(zfl_Popup.current!=null){var domSource=zf_stdGetEventSource(e);var domPopup=zfl_Popup.current.dom();for(var obj=domSource;
obj!=null;obj=obj.parentNode){if(obj==domPopup)return;}zfl_Popup.current.hide();}};zfl_Popup._any_onkeypress=function(e){if(e.keyCode==27&&zfl_Popup.current)zfl_Popup.current.hide();
};zfl_Popup.hideAny=function(){if(zfl_Popup.current)zfl_Popup.current.hide();};zfl_Popup.prototype.updatePosition=function(domOrigin,constraint){var domPopup=this.dom();var cxBody=document.body.offsetWidth;
var cyBody=zf_stdGetClientHeight();var ptOrigin=zf_stdGetOffset(domOrigin);var xOrigin=ptOrigin.cx,yOrigin=ptOrigin.cy;var cxOrigin=domOrigin.offsetWidth;var cyOrigin=domOrigin.offsetHeight;
var cxPopup,cyPopup;var displayStyle=zf_stdGetCurrentStyle(domPopup,"display");if(!displayStyle||displayStyle=="none"){domPopup.style.top="0px";domPopup.style.left="0px";
domPopup.style.visibility="hidden";domPopup.style.display="block";}cxPopup=domPopup.offsetWidth;cyPopup=domPopup.offsetHeight;var left=(xOrigin<cxBody/2||constraint&&constraint=="shift-right")?xOrigin:(xOrigin-cxPopup+cxOrigin);
var top=(yOrigin<cyBody/2)?(yOrigin+cyOrigin+2):(yOrigin-cyPopup-2);if(left+cxPopup+16>cxBody)left=cxBody-cxPopup-16;domPopup.style.left=left+"px";domPopup.style.top=top+"px";
domPopup.style.display="block";domPopup.style.visibility="inherit";domPopup=null;domOrigin=null;};;function zfl_Feeds(id){if(zf_stdNoArgs(arguments))return;zfl_Popup.prototype.constructor.call(this,
id,false);}zfl_Feeds.inherits(zfl_Popup);;;function zfl_MenuBar(id){zfl_AbstractMenu.prototype.constructor.call(this,id,false,"r","d");this.bind($(this.dom()).find("A[data-zf-subitems]"));
this.$("a:not([data-zf-subitems])").hover(function(){$(this).removeClass("menubar-color1").addClass("menubar-color2 menubar-bgcolor2");},function(){$(this).addClass("menubar-color1").removeClass("menubar-color2 menubar-bgcolor2");
});}zfl_MenuBar.inherits(zfl_AbstractMenu);zfl_MenuBar.prototype.hoverItem=function($item,hoverOn){};zfl_MenuBar.prototype.hoverSubItem=function($item,hoverOn){if(hoverOn){$item.removeClass("menubar-bgcolor3 menubar-color3").addClass("menubar-bgcolor4 menubar-color4");
}else{$item.removeClass("menubar-bgcolor4 menubar-color4").addClass("menubar-bgcolor3 menubar-color3");}};zfl_MenuBar.prototype._getMenuName=function(){return 'barsubmenu';
};;var zfl_PhotoViewStyle={FolderElement:"FolderElement",GalleryPhoto:"GalleryPhoto",PhotoNavList:"PhotoNavList",PhotoNavThumbnail:"PhotoNavThumbnail",CurrentPhoto:"CurrentPhoto",
DimLights:"DimLights",BioPhoto:"BioPhoto",ProductCategory:"ProductCategory",Slideshow:"Slideshow",CommentBrowser:"CommentBrowser",PhotoVList:"PhotoVList"};;function zf_Folder(){zf_Loadable.prototype.constructor.call(this);
this.caption="";this.photos=0;this.images=0;this.videos=0;this.subfolders=0;this.galleries=0;this.collections=0;this.elements=[];}zf_Folder.inherits(zf_Loadable);zf_Folder.prefix="f";
zf_Folder._fields=["id","title","caption","customReference","created","modified","photos","images","videos","galleries","collections","subfolders","isEmpty","sortOrder","views",
"pricing","theme","isSignInDerived","signIn","subOwner","hideTitle","isEvent","eventFeatured"];zf_Folder.clone=function(folder){if(folder==null)return null;var cloned=zf_stdCopyFields(new zf_Folder(),
folder,zf_Folder._fields);cloned.image=zf_PhotoImage.clone(folder.image);cloned.access=zf_AccessInfo.clone(folder.access);cloned.owner=zf_User.clone(folder.owner);
if(folder.pricing)cloned.pricing=zf_PricingInfo.clone(folder.pricing);return cloned;};zf_Folder.prototype.postSerialize=function(){zf_Loadable.prototype.postSerialize.call(this);
if(this.pricingKey!=null){this.pricing=new zf_PricingInfo(null,this.pricingKey);this.pricing.isDerived=!!this.isPricingDerived;}};zf_Folder.prototype.getHref=function(style){if(style=="edit"){return["http://",
zf_defaultHost,"/",this.owner.loginName,"/f",this.id,"/edit"].join("");}else{var m=location.search.match(/(customize=[1|2])/);var query=m?"?"+m[0]:"";var href=[];
if(style!=null&&style!="analytics")href.push("http://",this.owner.domainName);href.push(this.getBaseHref());if(style!="external"&&style!="analytics")href.push(query);
return href.join("");}};zf_Folder.prototype.getBaseHref=function(){if(this.customReference!=null&&this.customReference.length>0)return "/"+this.customReference;return "/f"+this.id;
};zf_Folder.prototype.mergeEvent=function(folder){if(!folder.event)return this;this.event=folder.event;return this;};;function zf_PhotoSet(id,type,title,customReference){zf_Loadable.prototype.constructor.call(this);
if(arguments.length==0){this.type=zf_PhotoSet.Gallery;}else{this.id=id;this.type=type;this.title=title;this.customReference=customReference;this.folders=[];this.done();
}this.items=[];this.photos=0;this.images=0;this.videos=0;this.printableImages=0;this.printableVideos=0;this.bytes=0;this.views=0;this.photoChangeNumber=0;this.caption="";
this.keywords=[];this.category=0;this.isRandomTitlePhoto=false;this.watermarkId=0;this.adminFlags=0;}zf_PhotoSet.inherits(zf_Loadable);zf_PhotoSet.prefix="p";zf_PhotoSet.Gallery="Gallery";zf_PhotoSet.Collection="Collection";
zf_PhotoSet._fields=["id","type","title","caption","photos","images","videos","created","modified","sortOrder","isRandomTitlePhoto","views","customReference","pricing","watermarkId",
"photoChangeNumber","isFeatured","category","bytes","theme","isSignInDerived","signIn","adminFlags","subOwner","hideTitle","printableImages","printableVideos","eventFeatured"];
zf_PhotoSet.clone=function(photoSet){if(photoSet==null)return null;var cloned=zf_stdCopyFields(new zf_PhotoSet(),photoSet,zf_PhotoSet._fields);cloned.keywords=photoSet.keywords!=null?[].concat(photoSet.keywords):null;
cloned.categories=photoSet.categories!=null?[].concat(photoSet.categories):null;cloned.image=zf_PhotoImage.clone(photoSet.image);cloned.access=zf_AccessInfo.clone(photoSet.access);
cloned.owner=zf_User.clone(photoSet.owner);if(photoSet.pricing)cloned.pricing=zf_PricingInfo.clone(photoSet.pricing);return cloned;};zf_PhotoSet.prototype.postSerialize=function(){zf_Loadable.prototype.postSerialize.call(this);
for(var i=0;i<this.items.length;i++)this.items[i].gallery=this;if(this.pricingKey!=null){this.pricing=new zf_PricingInfo(null,this.pricingKey);this.pricing.isDerived=!!this.isPricingDerived;
}if(!this.category&&this.categories&&this.categories.length>0)this.category=this.categories[0];};zf_PhotoSet.prototype.getHref=function(style,photo){var m=location.search.match(/(customize=[1|2])/);
var query=m?"?"+m[0]:"";if(style=="edit"){return["http://",zf_defaultHost,"/",this.owner.loginName,"/p",this.id,"/edit"].join("");}else if(style=="external"){if(photo)return "http://"+photo.owner.domainName+this.getBaseHref();
else return "http://"+this.owner.domainName+this.getBaseHref();}else return this.getBaseHref()+query;};zf_PhotoSet.prototype.getBaseHref=function(){if(this.customReference!=null&&this.customReference.length>0)return "/"+this.customReference;
return "/p"+this.id;};;var zf_MailboxType={BlogPostComments:3,FolderGuestbook:2,PhotoSetGuestbook:1,PhotoComments:0};function zf_Mailbox(ownerIdOrMessage,type,id){if(arguments.length==1){var message=ownerIdOrMessage;
;;this.ownerId=message.owner.id;this.type=message.mailboxType;this.id=message.mailboxId;}else if(arguments.length==3){this.ownerId=ownerIdOrMessage;this.type=type;
this.id=id;}}zf_Mailbox.prototype.equals=function(obj){if(obj==null||!(obj instanceof zf_Mailbox))return false;return this.ownerId==obj.ownerId&&this.type==obj.type&&this.id==obj.id;
};function zf_MailboxAuthorization(mailbox){this._mailbox=mailbox;this._retrieveToken();var self=this;this._timer=setInterval(function(){self._retrieveToken();},3600*1000);
}zf_MailboxAuthorization.prototype.dispose=function(){clearInterval(this._timer);this._timer=null;};zf_MailboxAuthorization.prototype.delayPost=function(callback){var self=this;var count=0;var wait=function(){if(self._token==null){if(self._timestamp!=null||count>=60)callback(null);
else setTimeout(wait,500);++count;}else{;;var offset=new Date().getTime()-self._timestamp.getTime();if(offset<5000)setTimeout(function(){callback(self._token);},
5000-offset);else callback(self._token);}};wait();};zf_MailboxAuthorization.prototype._retrieveToken=function(){var self=this;zf_Message.prePostMessage(this._mailbox,function(token,error){self._timestamp=new Date();
if(error!=null)return;self._token=token;});};var zf_AttachmentType={None:0,CroppingSuggestion:1,HighlightedArea:2};var zf_MessageFlags={None:0x00,CanEdit:0x01,CanDelete:0x02,
CanCensor:0x04,CanUndelete:0x08,CanUncensor:0x10,CanShowInfo:0x20,CanEmail:0x40,CanPurge:0x80,CanApprove:0x100,CanMakePrivate:0x200,CanMakePublic:0x400,ControlMask:0x7FF^0x20};
function zf_Message(){zf_Loadable.prototype.constructor.call(this);this.attachmentType=zf_AttachmentType.None;this.flags=zf_MessageFlags.None;}zf_Message.inherits(zf_Loadable);zf_Message._fields=["mailbox",
"index","poster","posterName","posterEmail","posterUrl","postedOn","body","attachment","attachmentType","isPrivate","madePrivate","isDeleted","isCensored","flags",
"postedFrom","isEdited","editedOn","editedFrom","editor","censoredOn","censoredFrom","censorer","deletedOn","deletedFrom","deletor","needsApproval","approver","approvedOn",
"approvedFrom"];zf_Message.prototype.postSerialize=function(){zf_Loadable.prototype.postSerialize.call(this);if(this.poster){this.posterName=this.poster.displayName;if(this.posterUrl==null)this.posterUrl="http://"+this.poster.domainName;
}};zf_Message.prePostMessage=function(mailbox,oncomplete){;;;;var params=[mailbox];zf_stdServerRequestEx("POST","/zf/layout/message.asmx","PrePostMessage",params,oncomplete);
};zf_Message.postMessage=function(auth,mailbox,updater,oncomplete){;;;;;;auth.delayPost(function(token){zf_stdServerRequestEx("POST","/zf/layout/message.asmx","PostMessage",
[token,mailbox,updater],oncomplete);auth.dispose();});};zf_Message.updateMessage=function(auth,mailbox,index,updater,oncomplete){;;;;;;auth.delayPost(function(token){zf_stdServerRequestEx("POST",
"/zf/layout/message.asmx","UpdateMessage",[token,mailbox,index,updater],oncomplete);auth.dispose();});};zf_Message.loadMessageRange=function(mailbox,mailboxToken,first,count,
oncomplete){;;;;;var params=[mailbox,mailboxToken,first,count];zf_stdServerRequestEx("GET","/zf/layout/message.asmx","LoadMessageRange",params,oncomplete);};zf_Message._bake=function(method){return function(mailbox,
index,oncomplete){;;;;var params=[mailbox,index];zf_stdServerRequestEx("POST","/zf/layout/message.asmx",method,params,oncomplete);};};zf_Message.deleteMessage=zf_Message._bake("DeleteMessage");
zf_Message.undeleteMessage=zf_Message._bake("UndeleteMessage");zf_Message.censorMessage=zf_Message._bake("CensorMessage");zf_Message.uncensorMessage=zf_Message._bake("UncensorMessage");zf_Message.purgeMessage=zf_Message._bake("PurgeMessage");
zf_Message.approveMessage=zf_Message._bake("ApproveMessage");zf_Message.makePrivate=zf_Message._bake("MakePrivate");zf_Message.makePublic=zf_Message._bake("MakePublic");;function zf_PhotoMeta(){zf_Loadable.prototype.constructor.call(this);
this.exif={};this.keywords=[];this.categories=[];this.caption="";this.comments=0;this.recentComments=[];}zf_PhotoMeta.inherits(zf_Loadable);zf_PhotoMeta._fields=["categories","category",
"keywords","caption","exif","comments","recentComments"];zf_PhotoMeta.requests=new zf_RequestQueue(200);zf_PhotoMeta.urgent=new zf_RequestQueue(1,8);zf_PhotoMeta.prototype.postSerialize=function(){zf_Loadable.prototype.postSerialize.call(this);
this.keywords.sort();if(this.categories.length>0){this.categories.sort(_zf_stdCategoryCompare);this.category=this.categories[0];}else this.category=0;};zf_PhotoMeta.prototype.load=function(photo,
urgent){;;;;if(!this.requested)this.setRequested();this.photo=photo;var self=this;var oncomplete=function(result,error){if(error!=null)return;var meta=result;;zf_stdCopyFields(self,
meta,zf_PhotoMeta._fields);self._synthesize();self.done();};var params=[this.photo.id,this.photo.flags,this.photo.metacn,this.photo.token,zf_userId];var queue=urgent?zf_PhotoMeta.urgent:zf_PhotoMeta.requests;
var url=photo.getExternalUrl(zf_ProcessingMethod.PhotoMetadata,".meta");queue.enqueueEx("GET",url,"GetPhotoMeta",params,oncomplete,photo.id);};zf_PhotoMeta.prototype.bump=function(){if(this.requested&&!this.loaded&&this.photo!=null)zf_PhotoMeta.requests.bump(this.photo.id);
};zf_PhotoMeta.prototype._synthesize=function(){;var exif;var photo=this.photo;this.exif[-1]={tag:-1,title:"Dimensions",display:photo.width+" x "+photo.height};this.exif[-2]={tag:-2,
title:"Original file size",display:zf_stdFormatByteSize(photo.fileSize)};exif=this.exif[-3]={tag:-3,title:"Image type",display:"Unknown"};switch(photo.fileType){case ".gif":exif.display="GIF";
break;case ".jpg":exif.display="JPEG";break;case ".png":exif.display="PNG";break;case ".tif":exif.display="TIFF";break;case ".bmp":exif.display="BMP";break;default:break;
}if(this.exif[0x829A]!=null){var ap;if(this.exif[0x829D]!=null)ap=this.exif[0x829D].display;else ap="f/NA";this.exif[-4]={tag:-4,title:"Exposure",display:zf_stdFormatString("{0} at {1}",
this.exif[0x829A].display,ap)};}var accessType=photo.access.type;if(accessType!=zf_AccessType.Public){exif=this.exif[-5]={tag:-5,title:"Access Control",display:""};
if(accessType==zf_AccessType.Protected)exif.display="Members Only";else if(accessType==zf_AccessType.Password)exif.display="Password";else if(accessType==zf_AccessType.Private)exif.display="Private";
}var fileName=photo.fileName;if(fileName!=null){this.exif[-6]={tag:-6,title:"File name",display:fileName};}var uploaded=photo.uploaded;if(uploaded!=null){this.exif[-7]={tag:-7,
title:"Date uploaded",display:zf_stdFormatDateTime(uploaded)};}if(photo.video){var duration=photo.duration;if(duration!=null){this.exif[-8]={tag:-8,title:"Duration",
display:zf_stdFormatDuration(duration)};}}};zf_PhotoMeta.prototype.addComment=function(message){;;if(message instanceof Array){for(var k=0;k<message.length;k++)this.addComment(message[k]);
return;};;;if(this.comments==0||this.recentComments.length==0||this.recentComments[0].index<message.index){this.photo.flags|=zf_PhotoFlags.HasComments;++this.comments;
this.recentComments.unshift(message);}else{var last=this.recentComments[0];for(var i=0;i<this.recentComments.length;i++){if(this.recentComments[i].index==message.index){this.recentComments.splice(i,
1,message);break;}if(i==this.recentComments.length-1){this.recentComments.push(message);break;}var previous=this.recentComments[i+1];if(previous.index<message.index){this.recentComments.splice(i+1,
0,message);break;}}}};zf_PhotoMeta.prototype.removeComment=function(index){;;;if(this.recentComments.length>0&&this.recentComments[0].index>=index&&this.recentComments[this.recentComments.length-1].index<=index){for(var i=0;
i<this.recentComments.length;i++){if(this.recentComments[i].index==index)this.recentComments.splice(i,1);}}--this.comments;if(this.comments==0)this.photo.flags&=~zf_PhotoFlags.HasComments;
};;var zf_PricingProducts={None:0,PhotoBooks:1};;function zf_Photo(){zf_Loadable.prototype.constructor.call(this);zf_PhotoImage.prototype.constructor.call(this);this.pricingProducts=zf_PricingProducts.None;
this.priceKey="";this.isPricingDerived=false;this.views=0;this.video=false;this.fileType=".jpg";this.fileSize=0;this.zipSize=0;this.flags=zf_PhotoFlags.None;this.metacn=0;
this.watermarkId=0;this.isWatermarkDerived=false;this.duration=0;this.originalDownloads=0;}zf_Photo.inherits(zf_PhotoImage,zf_Loadable);zf_Photo._fields=["access","gallery","owner",
"pricingProducts","priceKey","photoSet","views","cdnPath","uploaded","taken","title","altText","fileType","fileSize","flags","metacn","fileName","copyright","isPricingDerived",
"pricing","watermarkId","isWatermarkDerived","duration","subOwner","zipSize","originalDownloads"].concat(zf_PhotoImage._fields);zf_Photo.prefix="p";zf_Photo.clone=function(photo){return zf_stdCopyFields(new zf_Photo(),
photo,zf_Photo._fields);};zf_Photo.prototype.getHref=function(style){var scope,owner;if(this.photoSet!=null&&style!="gallery"){scope=this.photoSet;owner=scope.owner;}else if(this.gallery!=null){scope=this.gallery;
owner=this.owner||scope.owner;}var href=[];var m=location.search.match(/(customize=[1|2])/);var query=m?"?"+m[0]:"";if(style!=null&&style!="analytics")href.push("http://",
owner.domainName);if(scope==null){href.push("/?photo=",this.id);}else if(style=="edit"){href=["http://",zf_defaultHost,"/",this.owner.loginName,"/p",this.gallery.id,
"/edit#h",this.id.toString(16)];}else if(style=="external"||style=="analytics"){href.push(scope.getBaseHref(),"/e",this.id.toString(16));}else{href.push(scope.getBaseHref(),
"/h",this.id.toString(16),query);}return href.join("");};zf_Photo.prototype.postSerialize=function(){this.image=this;zf_Loadable.prototype.postSerialize.call(this);zf_PhotoImage.prototype.postSerialize.call(this);
if(this.title==null)this.title="";if(this.taken!=null)this.taken.setMinutes(this.taken.getMinutes()+this.taken.getTimezoneOffset());if(this.fileSize)this.zipSize=this.fileSize+30+256+46+256;
};zf_Photo.prototype.getMeta=function(urgent){;if(this._meta==null){this._meta=new zf_PhotoMeta();if(!this.loaded){this._meta.setRequested();var self=this;this.advise(this._meta,
function(){self._meta.load(self,urgent);});}else{this._meta.load(this,urgent);}}return this._meta;};zf_Photo.prototype.pickMethod=function(width,height,allowThumbs,sizeUp){var options=[{method:zf_ProcessingMethod.StandardSmallSize,
mask:0},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},
{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardXXLargeSize,mask:zf_AccessMask.ProtectXXLarge}];
if(allowThumbs){options=[{method:zf_ProcessingMethod.StandardThumbnail,mask:0},{method:zf_ProcessingMethod.StandardLargeThumbnail,mask:0},{method:zf_ProcessingMethod.StandardVeryLargeThumbnail,
mask:0}].concat(options);}var method=null;var previous=null;for(var i=0;i<options.length;i++){var option=options[i];if((option.mask&this.access.mask)!=0)continue;
var size=this.getScaledSize(option.method);if(sizeUp===true&&(size.cx>width||size.cy>height)){method=option.method;break;}else if(size.cx>width||size.cy>height){break;
}if(previous&&size.cx<=previous.cx&&size.cy<=previous.cy)break;previous=size;method=option.method;}return method;};zf_Photo.prototype.pickScaledMethod=function(width,height){var options=[{method:zf_ProcessingMethod.StandardSmallSize,
mask:0},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},
{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardXXLargeSize,mask:zf_AccessMask.ProtectXXLarge}];
var method=options[0].method,scaled=this.getScaledSize(method);for(var i=1;i<options.length;i++){var option=options[i];if((option.mask&this.access.mask)!=0)continue;
method=option.method;scaled=this.getScaledSize(method);if(scaled.cx>=width||scaled.cy>=height)break;}var copy=$.extend({},method,{cx:width,cy:height});var size=this.getScaledSize(copy);
method=$.extend({},method,{cx:Math.min(size.cx,scaled.cx),cy:Math.min(size.cy,scaled.cy)});return method;};zf_Photo.prototype.pickVideoMethod=function(width,height){;if(width==null)width=this.width;
if(height==null)height=this.height;if(height>640)height=640;var options=[{method:zf_ProcessingMethod.Video360p,mask:0},{method:zf_ProcessingMethod.Video480p,mask:zf_AccessMask.Protect480p},
{method:zf_ProcessingMethod.Video720p,mask:zf_AccessMask.Protect720p},{method:zf_ProcessingMethod.Video1080p,mask:zf_AccessMask.Protect1080p}];var method=options[0].method;
for(var i=1;i<options.length;i++){if((options[i].mask&this.access.mask)!=0)continue;if(method!=zf_ProcessingMethod.Video360p&&method.cx>=this.width&&method.cy>=this.height)break;
method=options[i].method;}var copy=$.extend({},method,{cx:width,cy:height});var size=this.getScaledSize(copy);method=$.extend({},method,{cx:Math.min(size.cx,method.cx),
cy:Math.min(size.cy,method.cy)});return method;};;function zfl_LabelPlugin(params){this.params=params;}zfl_LabelPlugin.prototype.getOuterContent=function(id,context){if(this.params.title||this.params.created||this.params.modified||this.params.visitors||this.params.count){return['<div class="pv-label">',
this._content(context),'</div>'].join("");}return "";};zfl_LabelPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){if(isNew)return;var domLabel;var child;for(child=outer.firstChild;
child!=null;child=child.nextSibling){if(child.className=="pv-label"){domLabel=child;break;}}if(domLabel)domLabel.innerHTML=this._content(context);};zfl_LabelPlugin.prototype._content=function(context){var data=context.data;
var elements=[];if(this.params.title){elements.push('<h4 class="title">',zf_stdHtmlEncode(data.title),'</h4>');}var pad1=[],pad2=[];if(data instanceof zf_Folder){if(this.params.count){if(data.galleries>0)pad1.push(["Galleries {0}",
data.galleries]);if(data.collections>0)pad1.push(["Collections {0}",data.collections]);}if((data.access.mask&zf_AccessMask.ProtectDateModified)==0)pad2.push(["Modified {0}",
zf_stdFormatDate(data.modified)]);if(this.params.count)pad2.push(this._getCountPair(data));}else if(data instanceof zf_PhotoSet){if((data.access.mask&zf_AccessMask.ProtectVisits)==0)pad1.push(["Visitors {0}",
data.views]);if(this.params.count)pad1.push(this._getCountPair(data));if((data.access.mask&zf_AccessMask.ProtectDateCreated)==0)pad2.push(["Created {0}",zf_stdFormatDate(data.created)]);
if((data.access.mask&zf_AccessMask.ProtectDateModified)==0)pad2.push(["Modified {0}",zf_stdFormatDate(data.modified)]);}if(pad1.length==0){var tmp=pad2;pad2=pad1;
pad1=tmp;}var i;if(pad1.length>0){elements.push(pad2.length==0?'<div class="pad-0">':'<div class="pad-1">');for(i=0;i<pad1.length;i++){elements.push('<div class="pair pair-color1">',
zf_stdFormatString(pad1[i][0],['<b class="pair-0">',pad1[i][1],'</b>'].join("")),'</div>');}elements.push('</div>');}if(pad2.length>0){elements.push('<div class="pad-2">');
for(i=0;i<pad2.length;i++){elements.push('<div class="pair pair-color1">',zf_stdFormatString(pad2[i][0],['<b class="pair-0">',pad2[i][1],'</b>'].join("")),'</div>');
}elements.push('</div>');}return elements.join("");};zfl_LabelPlugin.prototype._getCountPair=function(data){;if(data.images&&data.videos){if(data instanceof zf_Folder){if(data.images>data.videos)return["{0} photos",
data.images];return["{0} videos",data.videos];}return["{0} items",data.photos];}if(data.videos)return["{0} videos",data.videos];return["{0} photos",data.images];
};;;;;function zfl_VLabelPlugin(params){this.params=params;}zfl_VLabelPlugin.prototype.getOuterContent=function(id,context){if(this.params.title||this.params.uploaded||this.params.visitors||this.params.comments){return['<div class="pv-vlabel">',
this._content(context),'</div>'].join("");}return "";};zfl_VLabelPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){var photo=context.data;if(this.params.comments&&(photo.flags&zf_PhotoFlags.HasComments)!=0){var meta=photo.getMeta();
if(!meta.loaded){var self=this;meta.bump();meta.advise(this,function(){self._setMeta(meta,outer,context);},function(){});}}if(isNew)return;$(outer).find(".pv-vlabel").replaceWith(this.getOuterContent("",
context));};zfl_VLabelPlugin.prototype._content=function(context){var data=context.data;var elements=[];if(this.params.title){elements.push('<h4 class="title">',zf_stdHtmlEncode(data.title),
'</h4>');}var pad1=[],pad2=[];if((data.access.mask&zf_AccessMask.ProtectVisits)==0)pad1.push(["Visitors {0}",data.views]);var hideUploaded=this.params.title&&(data.title.length>0)&&this.params.comments&&(data.flags&zf_PhotoFlags.HasComments)!=0&&(data.access.mask&zf_AccessMask.ProtectVisits)==0;
if(this.params.uploaded&&!hideUploaded)pad1.push(["Uploaded {0}",zf_stdFormatDate(data.uploaded)]);var comments=null;if(this.params.comments&&(data.flags&zf_PhotoFlags.HasComments)!=0){var meta=data.getMeta();
if(meta.loaded){comments=meta.comments;}}if(comments!=null)pad1.push(["Comments {0}",comments]);pad2=pad1;var i;if(pad1.length>0){elements.push(pad2.length==0?'<div class="pad-0">':'<div class="pad-1">');
for(i=0;i<pad1.length;i++){elements.push('<div class="pair pair-color1">',zf_stdFormatString(pad1[i][0],['<b class="pair-0">',pad1[i][1],'</b>'].join("")),'</div>');
}elements.push('</div>');}if(pad2.length>0){elements.push('<div class="pad-2">');for(i=0;i<pad2.length;i++){elements.push('<div class="pair pair-color1">',zf_stdFormatString(pad2[i][0],
['<b class="pair-0">',pad2[i][1],'</b>'].join("")),'</div>');}elements.push('</div>');}return elements.join("");};zfl_VLabelPlugin.prototype._setMeta=function(meta,outer,context){;
var element=$(outer).find(".pv-vlabel");element.replaceWith(this.getOuterContent("",context));};zfl_VLabelPlugin.prototype.onDestroyDom=function(view,outer,inner,context){var data=context.data;
var meta=data.getMeta();if(!meta.loaded){meta.unadvise(this);}};;;;;;function zfl_InfoIconPlugin(params){this.params=params!=null?params:{};}zfl_InfoIconPlugin.prototype.getOuterContent=function(id,
context){if(context==null)return "";var data=context.data;var access=context.data.access;if(!this.params.fthumb&&data instanceof zf_Folder&&this.params.ac)return this._access(access.type);
return "";};zfl_InfoIconPlugin.prototype.getInnerContent=function(id,context){if(context==null)return "";var data=context.data;var access=context.data.access;var index=context.index;
var elements=[];if(this.params.ac&&(this.params.fthumb||!(data instanceof zf_Folder)))elements.push(this._access(access.type));if(this.params.type){if(data instanceof zf_PhotoSet&&data.type==zf_PhotoSet.Gallery)elements.push('<div class="pv-type gallery-icon"></div>');
else if(data instanceof zf_PhotoSet&&data.type==zf_PhotoSet.Collection)elements.push('<div class="pv-type collection-icon"></div>');else if(data instanceof zf_Folder&&this.params.fthumb)elements.push('<div class="pv-type folder-icon"></div>');
}if(this.params.sn&&data instanceof zf_Photo&&context.index!=null)elements.push('<div class="pv-index">',context.index+1,'</div>');return elements.join("");};zfl_InfoIconPlugin.prototype.onCreateDom=function(view,
outer,inner,context,isNew){if(isNew||!context)return;var domAccess,domTypeIcon,domPhotoIndex;var child;if(!this.params.fthumb&&context.data instanceof zf_Folder){for(child=outer.firstChild;
child!=null;child=child.nextSibling){if(child.className!=null&&child.className.substr(0,6)=="pv-ac "){domAccess=child;break;}}}else{for(child=inner.firstChild;child!=null;
child=child.nextSibling){if(child.className==null)continue;if(child.className.substr(0,6)=="pv-ac ")domAccess=child;else if(child.className.substr(0,10)=="pv-type ")domtypeIcon=child;
else if(child.className=="pv-index")domPhotoIndex=child;}}if(domAccess){switch(context.data.access){case zf_AccessType.Public:domAccess.className="pv-ac ac-pub";
domAccess.title="";break;case zf_AccessType.Private:domAccess.className="pv-ac ac-pri";domAccess.title="Private";break;case zf_AccessType.Password:domAccess.className="pv-ac ac-pwd";
domAccess.title="Password Protected";break;case zf_AccessType.Protected:domAccess.className="pv-ac ac-pro";domAccess.title="tooltipProtected";break;default:break;
}}if(domTypeIcon){if(context.data instanceof zf_PhotoSet&&context.data.type=="Gallery")domTypeIcon.className="pv-type gallery-icon";else if(context.data instanceof zf_PhotoSet&&context.data.type=="Collection")domTypeIcon.className="pv-type collection-icon";
else if(context.data instanceof zf_Folder)domTypeIcon.className="pv-type folder-icon";}if(domPhotoIndex){zf_stdSetText(domPhotoIndex,context.index+1);}};zfl_InfoIconPlugin.prototype._access=function(accessType){switch(accessType){case zf_AccessType.Public:return '';
case zf_AccessType.Private:return '<div class="pv-ac ac-pri" title="Private"></div>';case zf_AccessType.Password:return '<div class="pv-ac ac-pwd" title="Password Protected"></div>';
case zf_AccessType.Protected:return '<div class="pv-ac ac-pro" title="Members Only"></div>';default:return '';}};;;;;function zfl_DecorationPlugin(info,style,params){this.info=info;
this.style=style;this.params=params||{};}zfl_DecorationPlugin.prototype.getOuterContent=function(id,context){if(context==null)return "";var data=context.data;var content=[];if(this.info.imagePad)content.push('<div class="pv-pad"></div>');
if(data instanceof zf_Folder&&!this.params.fthumb)content.push('<a class="pv-folder" href="',data.getHref(),'"></a>');return content.join("");};zfl_DecorationPlugin.prototype.getInnerContent=function(id,
context,smap,regenerate){if(context==null)return "";var data=context.data;var image=context.image;var method=context.method;var folder=context.data instanceof zf_Folder;
var elements=[];if((!folder||this.params.fthumb)&&!this.params.hideShadow&&this.info.shadowSize>0){var extent=this.info.shadowSize+this.info.borderSize;var size=null;
if(!data||!image||smap["pv-s-1"]||smap["pv-s-2"]||smap["pv-s-3"]||smap["pv-s-password"]||smap["pv-s-noaccess"]){size=this._getPlaceholderSize(method,smap);}if(size==null&&image!=null)size=image.getScaledSize(context.method);
if(size==null)size={cx:method.cx,cy:method.cy};var left=-extent;var top=-extent;var width=size.cx+extent*2;var height=size.cy+extent*2;var shadow=this.info.shadowName;
if(shadow){elements.push(zfl_DecorationInfo.getShadowHtml("pv-shadow",shadow,this.info.shadowType,this.info.shadowSize,left,top,width,height));}}if(!regenerate){if(folder&&!this.params.fthumb||this.info.borderSize>0)elements.push('<div class="pv-border"></div>');
}return elements.join("");};zfl_DecorationPlugin.prototype._getPlaceholderSize=function(method,smap){if(method==zf_ProcessingMethod.StandardThumbnail)return{cx:80,cy:53};if(method==zf_ProcessingMethod.StandardSmallThumbnail)return{cx:60,
cy:60};if(method==zf_ProcessingMethod.StandardLargeThumbnail)return{cx:120,cy:80};if(method==zf_ProcessingMethod.StandardVeryLargeThumbnail)return{cx:200,cy:133};
if(method==zf_ProcessingMethod.StandardBioPhoto)return{cx:83,cy:111};return null;};zfl_DecorationPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){if(context==null)return;
var folder=context.data instanceof zf_Folder&&!this.params.fthumb;$(outer).toggleClass('folder',folder);};zfl_DecorationPlugin.prototype.onResizeDom=function(view,outer,inner,context){if(context==null)return;
var markup=this.getInnerContent("",context,{},true);$(inner).find('.pv-shadow:gt(0)').remove();$(inner).find('.pv-shadow').replaceWith(markup);};;function zfl_WaitAnimationPlugin(inner){this._inner=inner;
}zfl_WaitAnimationPlugin.prototype.getInnerContent=function(id,context){if(context==null)return '';if(context.burnable)return '';if(!this._inner)return '';return '<img class="pv-wait" src="/zf/img/image-wait.gif" />';
};zfl_WaitAnimationPlugin.prototype.getOuterContent=function(id,context){if(context==null)return '';if(context.burnable)return '';if(this._inner)return '';return '<img class="pv-wait" src="/zf/img/image-wait.gif" />';
};;function zfl_ZoomPlugin(){}zfl_ZoomPlugin.prototype.getOuterContent=function(id,context){return '';};zfl_ZoomPlugin.prototype.getInnerContent=function(id,context){var html='<div class="pc-pv-zoom pc-bgcolor10" style="display:none;"><div></div></div>';
return html;};zfl_ZoomPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){;var photo=context.data;var self=this;$(inner).unbind('pc').bind('mouseenter.pc',function(){$('.pc-pv-zoom',
this).stop(true,true).fadeIn('fast');}).bind('mouseleave.pc',function(){$('.pc-pv-zoom',this).stop(true,true).fadeOut('fast');}).find('.pc-pv-zoom').click(function(){return self._zoom_onclick(this,
context);}).mousedown(function(e){e.stopPropagation();});view=null;outer=null;inner=null;};zfl_ZoomPlugin.prototype._zoom_onclick=function(element,context){var photo=context.data;
var method=zf_ProcessingMethod.StandardSmallSize;var size=photo.getScaledSize(method);if(photo.video){method=$.extend({},zf_ProcessingMethod.VideoPosterFrame,{cx:method.cx,
cy:method.cy});}var href=photo.getInternalUrl(method,{block:true});var id="__SelectionPlugin_Preview";var $img=$(element).closest('.pv-inner').find('.pv-img');var tsize=photo.getScaledSize(context.method);
var offset=$img.offset();var top=offset.top-15;var left=offset.left-15;var video='';if(photo.video&&(this._duration||this._icon)){video=['<div class="pv-v">','<div class="pv-v-b"></div>'];
if(this._icon)video.push('<div class="pv-v-i"></div>');if(this._duration)video.push('<div class="pv-v-d">',zf_stdFormatDuration(photo.duration,true),'</div>');video.push('</div>');
video=video.join('');}var markup=['<div id="',id,'-curtain" class="pvsp-curtain"></div>','<div id="',id,'" class="pvsp" data-id="',context.data.id,'" ','style="width:',
tsize.cx,'px;height:',tsize.cy,'px;top:',top,'px;left:',left,'px">','<div class="pvsp-bg simple"></div>','<div class="pvsp-img" style="background-image:url(',href,
');">',video,'</div>','<div class="pvsp-close"></div>','</div>'].join('');var sidp='#'+id;var sidc=sidp+'-curtain';var sids=[sidp,sidc].join(',');$(sids).remove();
$(document.body).append(markup);top=parseInt(offset.top+tsize.cy/2-size.cy/2-15-size.cy/8);left=parseInt(offset.left+tsize.cx/2-size.cx/2-15);var $window=$(window),
scrollTop=$window.scrollTop(),scrollLeft=$window.scrollLeft(),windowWidth=$window.width(),windowHeight=$window.height();if(top<scrollTop+22){top=scrollTop+22;}else if(top+size.cy+70>windowHeight+scrollTop){top=windowHeight+scrollTop-size.cy-70;
}if(left<scrollLeft+22){left=scrollLeft+22;}else if(left+size.cx+30>windowWidth+scrollLeft){left=windowWidth+scrollLeft-size.cx-30;}$(sidp).animate({width:size.cx,
height:size.cy,top:top,left:left},100);$(sidp).find('.pvsp-close').click(function(){$(sids).remove();return false;});$(sidp).find('.pvsp-img').click(function(){$(sids).remove();
return false;});$(sidp).find('.pvsp-bg').click(function(){$(sids).remove();return false;});$(sidc).one('click',function(e){$(sids).remove();return false;});return false;
};;function zfl_MarkUsedPlugin(){}zfl_MarkUsedPlugin.prototype.getOuterContent=function(id,context){return '';};zfl_MarkUsedPlugin.prototype.getInnerContent=function(){var html='<div class="pc-pv-marked"></div>';
return html;};;function zfl_VignettePlugin(){}zfl_VignettePlugin.prototype.getOuterContent=function(id,context){return '';};zfl_VignettePlugin.prototype.getInnerContent=function(){var html='<div class="pv-vignette"></div>';
return html;};;function zf_CensoredPlugin(photoExtractor,methodExtractor){this._photoExtractor=photoExtractor;this._methodExtractor=methodExtractor;}zf_CensoredPlugin.prototype.getInnerContent=function(id,
context){if(!context)return '';var photo=this._photoExtractor(context);if(!photo||!(photo instanceof zf_BasicImage||photo instanceof zf_Photo))return '';if(!photo.access.isCensored)return '';
var method=this._methodExtractor(context);if(method==zf_ProcessingMethod.StandardSmallThumbnail)return '';return '<div class="pv-censored">CENSORED</div>';};;function zf_NoClickPlugin(){}zf_NoClickPlugin.prototype.onCreateDom=function(view,
outer,inner,context,isNew){inner.onclick=zf_stdFalse;};;function zf_ClickPlugin(onclick){this.onclick=onclick;}zf_ClickPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){var self=this;
$(outer).bind('click.ClickPlugin',function(){if(self.onclick!=null)return self.onclick(context);return false;});view=null;outer=null;inner=null;};zf_ClickPlugin.prototype.onDestroyDom=function(view,
outer,inner,context){$(outer).unbind('.ClickPlugin');};;function zf_VideoInfoPlugin(extractor,icon,duration){;this._extractor=extractor;this._icon=icon==undefined?true:icon;
this._duration=duration==undefined?true:duration;}zf_VideoInfoPlugin.prototype.getInnerContent=function(id,context){if(!this._icon&&!this._duration)return '';var data=this._extractor(context);
if(data!=null&&data.flags&zf_PhotoFlags.Video){var markup=['<div class="pv-v">','<div class="pv-v-b"></div>'];if(this._icon)markup.push('<div class="pv-v-i"></div>');
if(this._duration)markup.push('<div class="pv-v-d">',zf_stdFormatDuration(data.duration,true),'</div>');markup.push('</div>');return markup.join('');}return '';};
zf_VideoInfoPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){if(isNew)return;if(!this._icon&&!this._duration)return;var data=this._extractor(context);var $inner=$(inner);
if(data!=null&&data.flags&zf_PhotoFlags.Video){var $v=$inner.find(".pv-v");if($v.length==0)$v=$inner.append('<div class="pv-v"></div>').find(".pv-v");var markup=['<div class="pv-v-b"></div>'];
if(this._icon)markup.push('<div class="pv-v-i"></div>');if(this._duration)markup.push('<div class="pv-v-d">',zf_stdFormatDuration(data.duration,true),'</div>');$v.html(markup.join(''));
}else{$inner.find(".pv-v").remove();}};;function zf_VideoJobStateResponse(){this.state=zf_VideoJobStateResponse.VideoJobState.SCHEDULED;this.secExecuting=0;this.secScheduled=0;
this.secEstimated=0;}zf_VideoJobStateResponse.VideoJobState={SCHEDULED:0,STARTING:1,EXECUTING:2,FAILED:3,NOT_SCHEDULED:4,UNKNOWN:5};function zf_VideoWaitPlugin(extractor){;this._extractor=extractor;
}zf_VideoWaitPlugin.prototype.getInnerContent=function(id,context){;var photo=this._extractor(context);if(!zf_VideoWaitPlugin._needRender(photo))return '';return zf_VideoWaitPlugin._generateMarkup(photo);
};zf_VideoWaitPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){;var photo=this._extractor(context);var needRender=zf_VideoWaitPlugin._needRender(photo);var $inner=$(inner);
if(!isNew){$inner.removeClass("pv-vws-starting pv-vws-hours pv-vws-countdown pv-vws-finishing");$inner.find(".pv-vwait").removeData("zf-video-wait-helper");$inner.find(".pv-vwait").remove();
$inner.find(".pv-vcountdown").remove();if(!needRender)return;var markup=zf_VideoWaitPlugin._generateMarkup(photo);var $icons=$inner.children(".pve-icons-i:first");
if($icons.length>0)$icons.before(markup);else $inner.append(markup);}if(needRender){var helper=new zf_VideoWaitHelper(inner,photo);var $w=$inner.find(".pv-vwait");
;$w.data("zf-video-wait-helper",helper);helper._refreshVideoJobState();}};zf_VideoWaitPlugin.prototype.onDestroyDom=function(view,outer,inner,context){var $inner=$(inner);$inner.removeClass("pv-vws-starting pv-vws-hours pv-vws-countdown pv-vws-finishing");
$inner.find(".pv-vwait").removeData("zf-video-wait-helper");$inner.find(".pv-vwait").remove();$inner.find(".pv-vcountdown").remove();};zf_VideoWaitPlugin._needRender=function(photo){;
if(!(photo.flags&zf_PhotoFlags.Video))return false;if(!!(photo.flags&zf_PhotoFlags.VideoReady)||!!(photo.flags&zf_PhotoFlags.VideoFailed))return false;return true;
};zf_VideoWaitPlugin._generateMarkup=function(photo){;return['<div class="pv-vwait">','<div class="pv-vw-pb" style="width:0%;"></div>','<div class="pv-v-i"></div>','<div class="pv-v-d">',
zf_stdFormatDuration(photo.duration,true),'</div>','</div>','<div class="pv-vcountdown">','<div class="pv-vcd-1"></div>','<div class="pv-vcd-2"></div>','</div>'].join('');
};function zf_VideoWaitHelper(inner,photo){;;this._photo=photo;this._id=photo.id;this._$inner=$(inner);this._$pv=this._$inner.closest(".pv");this._$pb=this._$inner.find(".pv-vwait .pv-vw-pb");
this._currentState=null;this._countdownInProgress=false;this._nextServerCallTimeout=null;this._secEstimate=0;this._secEstimateReceived=0;this._secTotal=0;}zf_VideoWaitHelper.inherits(zf_Object);
zf_VideoWaitHelper.COUNTDOWN_MIN_SEC=1*60;zf_VideoWaitHelper.COUNTDOWN_HI_LO_SEC=15*60;zf_VideoWaitHelper.COUNTDOWN_MAX_SEC=2*60*60;zf_VideoWaitHelper.TIMEOUT_STARTING=1*60*1000;zf_VideoWaitHelper.TIMEOUT_HOURS=15*60*1000;
zf_VideoWaitHelper.TIMEOUT_COUNTDOWN_LO=5*60*1000;zf_VideoWaitHelper.TIMEOUT_COUNTDOWN_HI=2*60*1000;zf_VideoWaitHelper.TIMEOUT_FINISHING=2*60*1000;zf_VideoWaitHelper.prototype._refreshVideoJobState=function(){;
if(!this._needToHandle(false))return;zf_stdServerRequestEx("POST","/zf/core/core.asmx","GetVideoJobState",[this._photo.id,this._photo.token],this.closure(this._onGetVideoJobStateResponse));
};zf_VideoWaitHelper.prototype._onGetVideoJobStateResponse=function(result,error){;if(error!=null){if(this._needToHandle(false)){this._$inner.removeClass("pv-vws-starting pv-vws-hours pv-vws-countdown pv-vws-finishing");
}return;};this._updateState(result);};zf_VideoWaitHelper.prototype._updateState=function(r){;;;;if(!this._needToHandle(false)){;return;};var $inner=this._$inner;var $w=$inner.find(".pv-vwait");
var $cd=$inner.find(".pv-vcountdown");;;;$inner.removeClass("pv-vws-starting pv-vws-hours pv-vws-countdown pv-vws-finishing");var VJS=zf_VideoJobStateResponse.VideoJobState;
this._currentState=r.state;if(r.state==VJS.SCHEDULED&&r.secEstimated<=zf_VideoWaitHelper.COUNTDOWN_MIN_SEC){;this._currentState=VJS.STARTING;}var timeout=-1;switch(this._currentState){case VJS.STARTING:;
$inner.addClass("pv-vws-starting");$cd.find(".pv-vcd-1").html("Ready in…");$cd.find(".pv-vcd-2").text("");timeout=zf_VideoWaitHelper.TIMEOUT_STARTING;this._countdownInProgress=false;
break;case VJS.SCHEDULED:case VJS.EXECUTING:this._updateProgressBar(r.secScheduled,r.secScheduled+r.secEstimated);if(r.secEstimated>zf_VideoWaitHelper.COUNTDOWN_MAX_SEC){;
$inner.addClass("pv-vws-hours");$cd.find(".pv-vcd-1").html("Ready in…");$cd.find(".pv-vcd-2").text("a few hours");timeout=zf_VideoWaitHelper.TIMEOUT_HOURS;this._countdownInProgress=false;
}else if(r.secEstimated<=zf_VideoWaitHelper.COUNTDOWN_MIN_SEC){;$inner.addClass("pv-vws-finishing");$cd.find(".pv-vcd-1").text("Finishing up");$cd.find(".pv-vcd-2").text("");
timeout=zf_VideoWaitHelper.TIMEOUT_FINISHING;this._countdownInProgress=false;}else{;$inner.addClass("pv-vws-countdown");$cd.find(".pv-vcd-1").html("Ready in…");$cd.find(".pv-vcd-2").text(zf_VideoWaitHelper._formatTime(r.secEstimated));
if(r.secEstimated<zf_VideoWaitHelper.COUNTDOWN_HI_LO_SEC)timeout=zf_VideoWaitHelper.TIMEOUT_COUNTDOWN_HI;else timeout=zf_VideoWaitHelper.TIMEOUT_COUNTDOWN_LO;this._secTotal=r.secScheduled+r.secEstimated;
this._secEstimate=r.secEstimated;this._secEstimateReceived=Math.floor(new Date().getTime()/1000);var startCountdown=!this._countdownInProgress;this._countdownInProgress=true;
if(startCountdown)this._updateCountdown();};break;case VJS.FAILED:case VJS.NOT_SCHEDULED:case VJS.UNKNOWN:default:;this._countdownInProgress=false;break;}if(this._nextServerCallTimeout!=null){;
window.clearTimeout(this._nextServerCallTimeout);this._nextServerCallTimeout=null;}if(timeout>0)this._nextServerCallTimeout=window.setTimeout(this.closure(this._refreshVideoJobState),
timeout);;};zf_VideoWaitHelper.prototype._updateProgressBar=function(done,total){;;var percentage=100*(parseFloat(done)/total);this._$pb.width(percentage+"%");;};zf_VideoWaitHelper.prototype._updateCountdown=function(){if(!this._countdownInProgress){;
return;}if(!this._needToHandle(true)){;this._countdownInProgress=false;return;}var secNow=Math.floor(new Date().getTime()/1000);var secRemaining=this._secEstimate-(secNow-this._secEstimateReceived);
var secDone=this._secTotal-secRemaining;if(secRemaining<=zf_VideoWaitHelper.COUNTDOWN_MIN_SEC){;this._countdownInProgress=false;this._updateState({state:this._currentState,
secEstimated:secRemaining,secScheduled:secDone,_fromCountdown:true});;return;};this._$inner.find(".pv-vcd-2").text(zf_VideoWaitHelper._formatTime(secRemaining));
this._updateProgressBar(secDone,this._secTotal);window.setTimeout(this.closure(this._updateCountdown),1000);this._countdownInProgress=true;;};zf_VideoWaitHelper.prototype._needToHandle=function(requireCountdown){var $w=this._$inner.find(".pv-vwait");
if($w.length!=1)return false;var currentHelper=$w.data("zf-video-wait-helper");if(currentHelper==null||currentHelper!=this)return false;if(!this._$pv.hasClass("pv-s-vwait"))return false;
if(requireCountdown&&!this._$inner.hasClass("pv-vws-countdown"))return false;return true;};zf_VideoWaitHelper._formatTime=function(seconds){if(seconds==null)return "";var hh=Math.floor(seconds/60/60);
var mm=Math.floor(seconds/60)%60;var ss=Math.floor(seconds%60);if(hh<10)hh="0"+hh;if(mm<10)mm="0"+mm;if(ss<10)ss="0"+ss;return hh+":"+mm+":"+ss;};;function zf_VideoPlayerHelper(){if(zf_Flash.installed(10)&&zf_Flash.isSafeDomain()){this._mode=zf_VideoPlayerHelper.Flash;
}else{this._mode=zf_VideoPlayerHelper.Video;}}zf_VideoPlayerHelper._id=0;zf_VideoPlayerHelper.None=0;zf_VideoPlayerHelper.Flash=1;zf_VideoPlayerHelper.Video=2;zf_VideoPlayerHelper.Wmp=3;zf_VideoPlayerHelper.QuickTime=4;
zf_VideoPlayerHelper._storageKey="video.player";zf_VideoPlayerHelper_Proxy={};zf_VideoPlayerHelper.prototype.getMode=function(){return this._mode;};zf_VideoPlayerHelper.prototype.createPlayerHtml=function(photo,url,parameters){;;if(typeof(parameters)!="object")parameters={};
if(typeof(parameters.autostart)!="boolean")parameters.autostart=true;if(typeof(parameters.logoUrl)!="string")parameters.logoUrl="";if(typeof(parameters.standalone)!="boolean")parameters.standalone=false;
var posterUrl=photo.getInternalUrl(zf_ProcessingMethod.VideoPosterFrame);var id='video-player-'+zf_VideoPlayerHelper._id++;var markup='';if(this._mode==zf_VideoPlayerHelper.Video){markup=['<video class="pv-p-o"',
'id="',id,'" ','src="',url,'" ','controls="true" ','preload="auto" ',(parameters.autostart?'autoplay="autoplay" ':' '),'poster="',posterUrl,'"','>','</video>'].join('');
}else if(this._mode==zf_VideoPlayerHelper.Flash){var host=(location.protocol=='http:')?zf_cdnHost:zf_secureHost;var playerUrl=location.protocol+'//'+host+'/zf/code/video/6.5.0/player.swf';
zf_VideoPlayerHelper_Proxy.onReady=function(){setTimeout(function(){$('#'+id).removeClass('pv-p-loading');},250);};zf_VideoPlayerHelper_Proxy.onStreamChange=function(streamId){;
zf_storage.setItem(zf_VideoPlayerHelper._storageKey+".stream",streamId);};zf_VideoPlayerHelper_Proxy.onStateChange=function(state){;};url=photo.getInternalUrl(zf_ProcessingMethod.VideoXml);
;var stream=zf_storage.getItem(zf_VideoPlayerHelper._storageKey+".stream")||"auto";var options={server:zf_defaultHost,video:url,poster_frame:posterUrl,auto_start:parameters.autostart?'1':'0',
auto_controls:parameters.hideControls?'0':'1',hide_play:'0',logo:parameters.logoUrl,stream:stream,token:zf_stdGetCookie('zf_token'),keyring:zf_stdGetCookie('zf_keyring'),
visitor:zf_stdGetCookie('zf_5y_visitor'),js_proxy:'zf_VideoPlayerHelper_Proxy',manual_controls:parameters.standalone?'0':'1'};markup=zf_Flash.createHtml(id,'pv-p-o pv-p-loading flash-pause',
playerUrl,options);}else if(this._mode==zf_VideoPlayerHelper.Wmp){markup=['<object ','id="',id,'" ','class="pv-p-o" ','style="width:100%;height:100%" ','classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" ',
'standby="Loading..." ','type="application/x-oleobject">','<param name="fileName" value="',url,'" />','<param name="autoStart" value="',(parameters.autostart?'true':'false'),
'" />','<param name="stretchToFit" value="true" />','<param name="showControls" value="true" />','<param name="showStatusBar" value="false" />','<param name="showDisplay" value="false" />',
'<param name="windowlessVideo" value="true" />','<embed ','type="application/x-mplayer2" ','src="',url,'" ','class="pv-p-o" ','style="width:100%;height:100%" ','showControls="1" ',
'showStatusBar="0" ','showDisplay="0" ','autoStart="',(parameters.autostart?'1':'0'),'">','</embed>','</object>'].join('');}else if(this._mode==zf_VideoPlayerHelper.QuickTime){markup=['<embed ',
'type="image/x-macpaint" ','pluginspage="http://www.apple.com/quicktime/download" ','src="',url,'" ','class="pv-p-o" ','style="width:100%;height:100%" ','type="video/quicktime" ',
'scale="tofit" ','autoplay="',(parameters.autostart?'true':'false'),'">','</embed>'].join('');}return markup;};zf_VideoPlayerHelper.prototype.mobileBrowsersFixup=function($player,isOnClickStack,
callbacks,leaveOffscreen,needPlay){};zf_VideoPlayerHelper.prototype.requestVideoUrl=function(photo,callback){;if(this._mode==zf_VideoPlayerHelper.Flash){var xmlUrl=location.protocol+'//'+location.hostname+photo.getInternalUrl(zf_ProcessingMethod.VideoXml,
{block:true});callback(xmlUrl);}else{callback(photo.getInternalUrl(photo.pickVideoMethod(),{block:true}));}};function zf_VideoPlayerPlugin(extractor){;this._extractor=extractor;
this.autoPlay=false;this.hideControls=false;this._helper=new zf_VideoPlayerHelper();}zf_VideoPlayerPlugin.prototype.getInnerContent=function(id,context){return '<div class="pv-p"></div>';
};zf_VideoPlayerPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){var photo=this._extractor(context);if(photo==null)return;var $inner=$(inner);var $player=$inner.find('.pv-p');
if(!photo.video){if(!isNew)$player.empty();return;}var posterUrl=photo.getInternalUrl(zf_ProcessingMethod.VideoPosterFrame);var markup=['<div class="pv-p-ei"></div>',
'<div class="pv-p-et">This video could not be processed.</div>','<div class="pv-p-wi"></div>','<div class="pv-p-wt">Preparing video to show on your site...</div>',
'<div class="pv-p-nai"></div>','<div class="pv-p-nat">This video is not available.</div>','<div class="pv-p-fi">','<div class="pv-p-dub"></div>','<div class="pv-p-du">',
zf_stdFormatDuration(photo.duration),'</div>','</div>'].join('');$player.empty().append(markup);var self=this;if(photo.flags&zf_PhotoFlags.VideoReady){this._helper.requestVideoUrl(photo,
$.noop);$inner.one('click.VideoPlayerPlugin',function(){self._onclick(this,photo,true);});if(this.autoPlay){function play(){self._onclick($inner[0],photo,false);
}if(!zf_storage)$(play);else zf_stdDeferCall(null,play);}}};zf_VideoPlayerPlugin.prototype.onDestroyDom=function(view,outer,inner,context){var $inner=$(inner);$inner.unbind('.VideoPlayerPlugin');
$inner.closest(".pv-video").removeClass("pv-playing");};zf_VideoPlayerPlugin.prototype._onclick=function(inner,photo,isOnClickStack){;;;;var $inner=$(inner);;if($inner.closest(".pv-video").hasClass("pv-playing"))return;
var self=this;this._helper.requestVideoUrl(photo,function(url){var $player=$inner.find('.pv-p');$player.find('div:not(.pv-p-f)').remove();$player.append(self._helper.createPlayerHtml(photo,
url,{hideControls:self.hideControls}));$inner.closest(".pv-video").addClass("pv-playing");if(self._helper.getMode()==zf_VideoPlayerHelper.Flash)self._setupFlashPlayer($inner,
$player);var callbacks={onClick:function(el){$(el).closest(".pv-inner").append('<div class="pv-ios-vwait"><img src="/zf/img/image-wait.gif" /></div>');}};callbacks.onProgress=callbacks.onEnded=callbacks.onError=function(el){$(el).closest(".pv-inner").find(".pv-ios-vwait").remove();
};self._helper.mobileBrowsersFixup($player,isOnClickStack,callbacks);});isOnClickStack=false;};zf_VideoPlayerPlugin.prototype._setupFlashPlayer=function($inner,$player){;setTimeout(function(){$player.find('embed').removeClass('pv-p-loading');
},1500);var showControls=function(){try{$player.find('.pv-p-o')[0].showControls();}catch(e){}};var hideControls=function(){try{$player.find('.pv-p-o')[0].hideControls();
}catch(e){}};if(!this.hideControls){$inner.bind('overlay:activity.VideoPlayerPlugin',showControls).bind('overlay:leave.VideoPlayerPlugin',hideControls).bind('overlay:idle.VideoPlayerPlugin',
hideControls).bind('overlay:info:enter.VideoPlayerPlugin',hideControls).bind('overlay:menu:enter.VideoPlayerPlugin',hideControls).bind('overlay:video:enter.VideoPlayerPlugin',
showControls);}else{hideControls();}};;function zf_TouchPlugin(){this._overlayDisplayed=false;}zf_TouchPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){this._touchStart={x:0,
y:0,time:null};this._touchMove={x:0,y:0};var self=this;setTimeout(function(){self.initialize(view,outer,inner,context,isNew);},200);};zf_TouchPlugin.prototype.onResizeDom=function(view,
outer,inner,context,isNew){$(inner).find('#'+this._touchId).width($(inner).width()).height($(inner).height()).find('#'+this._imageId).width($(inner).width()).height($(inner).height());
};zf_TouchPlugin.prototype.initialize=function(view,outer,inner,context,isNew){var $img=$(inner).find('img:first');var self=this;if($(inner).find('.pv-password').length>0)return;
if($img.css('background-image')=='none'||!$img.attr('style')){setTimeout(function(){self.initialize(view,outer,inner,context,isNew);},200);return;}if($img.length<1)return;
this._dimLights=$img.attr('id').toLowerCase().indexOf('dim')!=-1;this._isVideo=$(view).hasClass('pv-video');this._imageId=$img.attr('id')+'-temp';this._touchId=$(view).attr('id')+'-touch';
var source=$img.css('backgroundImage').replace('"','');source=(/url\(([^\)]+)\)/).exec(source)[1];var html=['<div id="',this._touchId,'" class="pv-img-temp"',' style="width: ',
$(inner).width(),'px; height: ',$(inner).height(),'px;">','<img id="',this._imageId,'"',' src="',source,'" ',' class="pv-img"',' style="width: ',$(inner).width(),
'px; height: ',$(inner).height(),'px;"','"/>','</div>'];$(inner).append(html.join(''));setTimeout(function(){self._attach(view,inner,context);$img.css('opacity',
'0.10');},300);};zf_TouchPlugin.prototype._translateView=function($view,argX,argY,argZ){argX=argX?argX:0;argY=argY?argY:0;argZ=argZ?argZ:0;$view[0].style.left=argX+'px';};zf_TouchPlugin.prototype._goNext=function(view,
context){if(this._dimLights)$(view).parent().parent().parent().find('.dimlights-right:first').trigger('touchstart');else context.oncommand('next');};zf_TouchPlugin.prototype._goBack=function(view,
context){if(this._dimLights)$(view).parent().parent().parent().find('.dimlights-left:first').trigger('touchstart');else context.oncommand('back');};zf_TouchPlugin.prototype._attach=function(view,
inner,context){var self=this;var $inner=$(inner);var $touch=$inner.find('#'+this._touchId);var $tempImg=$inner.find('#'+this._imageId);var swipeForward=-100;var swipeBack=100;
if(this._isVideo){$inner.find('.pv-p-f,.pv-p-fi').css('z-index','100');}$(inner).one('click.VideoPlayerPlugin',function(e){if(!self._isVideo)return;$inner.trigger('overlay:info:leave.PhotoOverlay');
$inner.trigger('overlay:video:leave.PhotoOverlay');$inner.trigger('overlay:leave.PhotoOverlay');$touch.remove();$inner.find('img').css('opacity','1.0');});$touch.bind('touchstart',
function touchStart(e){if(e.originalEvent.touches.length>1)return;e.preventDefault();e.stopImmediatePropagation();if(self._showOverlayTimeout)clearTimeout(self._showOverlayTimeout);
self._showOverlayTimeout=null;self._showOverlayTimeout=setTimeout(function(){$inner.trigger('overlay:activity.PhotoOverlay');self._overlayShown=true;},400);self._touchStart.x=e.originalEvent.targetTouches[0].screenX;
self._touchStart.y=e.originalEvent.targetTouches[0].screenY;self._touchStart.time=new Date().getTime();});$touch.bind('touchmove',function touchMove(e){if(e.originalEvent.touches.length>1)return;
if(self._touchStart.time==null){self._touchStart.x=e.originalEvent.targetTouches[0].screenX;self._touchStart.y=e.originalEvent.targetTouches[0].screenY;self._touchStart.time=new Date().getTime();
}var moveX=e.originalEvent.targetTouches[0].screenX-self._touchStart.x;var moveY=e.originalEvent.targetTouches[0].screenY-self._touchStart.y;if(Math.abs(moveX)>5){if(self._showOverlayTimeout)clearTimeout(self._showOverlayTimeout);
self._showOverlayTimeout=null;$inner.trigger('overlay:info:leave.PhotoOverlay').trigger('overlay:leave.PhotoOverlay');self._overlayShown=false;}if(Math.abs(self._touchMove.x)<20&&Math.abs(self._touchMove.y)>5)window.scrollTo(window.pageXOffset,
window.pageYOffset-moveY);self._translateView($tempImg,moveX);self._touchMove.x=moveX;self._touchMove.y=moveY;});$touch.bind('touchend',function touchEnd(e){if(e.originalEvent.targetTouches.length!=0)return;
e.preventDefault();e.stopImmediatePropagation();var x=self._touchMove.x;if((new Date().getTime()-self._touchStart.time)<300&&Math.abs(x)<5){clearTimeout(self._showOverlayTimeout);
self._showOverlayTimeout=null;if(self._overlayShown){$inner.trigger('overlay:info:leave.PhotoOverlay').trigger('overlay:leave.PhotoOverlay');self._overlayShown=false;
}else{$inner.click();}}if(x<swipeForward&&context.oncommandtest('next')){$tempImg.animate({'left':'-'+$tempImg.width()+'px'},'400','linear',function(){self._goNext(view,
context);});}else if(x>swipeBack&&context.oncommandtest('back')){$tempImg.animate({'left':$tempImg.width()+'px'},'400','linear',function(){self._goBack(view,context);
});}else{$tempImg.animate({'left':'0px'},'400','linear',null);}self._touchStart.x=0;self._touchStart.y=0;self._touchMove.x=0;self._touchMove.y=0;self._touchStart.date=null;
});};;;function zfl_MailboxLink(id){zfl_Control.prototype.constructor.call(this,id);}zfl_MailboxLink.inherits(zfl_Control);zfl_MailboxLink.prototype.setCount=function(count){var dom=this.dom("count");if(dom)zf_stdSetText(dom,
count);};zfl_MailboxLink.prototype._view_onclick=function(){if(this.onshow)this.onshow();};zfl_MailboxLink.prototype._add_onclick=function(){if(this.onadd)this.onadd();};zfl_MailboxLink.prototype.update=function(photo,
context){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);if(this.currentMeta!=null)this.currentMeta.unadvise(this);this.current=photo;
this.currentMeta=null;if(photo.loaded){this.set(photo,context);}else{var self=this;photo.advise(this,function(){self.set(photo,context);});}};zfl_MailboxLink.prototype.set=function(photo,
context){;var mask=zf_AccessMask.NoPublicComments|zf_AccessMask.NoPrivateComments;var canAdd=(photo.access.mask&mask)!=mask;if(zf_userId==0&&(photo.access.mask&zf_AccessMask.NoAnonymousComments)!=0)canAdd=false;
this.display((photo.access.mask&zf_AccessMask.ProtectComments)==0);this._showAddLink(canAdd);if((photo.flags&zf_PhotoFlags.HasComments)==0){this.setCount(0);return;
}var meta=photo.getMeta();this.currentMeta=meta;if(meta.loaded){this.setCount(meta.comments);}else{meta.bump();var self=this;meta.advise(this,function(){self.setCount(meta.comments);
});}};zfl_MailboxLink.prototype._showAddLink=function(show){var link=this.dom("add");if(link){zf_stdReplaceClassName(link,show?"none":null,show?null:"none");}};zfl_MailboxLink.prototype.refresh=function(){if(this.current&&this.current.loaded)this.set(this.current);
};zfl_MailboxLink.prototype.scrollTo=function(target){if(!target)return;var offset=zf_stdGetOffset(target.dom());$('html,body').animate({scrollTop:offset.cy-50},300);};;var _qevents=[];
function zf_Quantcast(account,labels,async){this._account=account;this._labels=labels;this._async=async;if(async){var self=this;$(function(){self._install();});}else this._install();
}zf_Quantcast.prototype._install=function(){var elem=document.createElement('SCRIPT');elem.src=(location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js";
elem.type="text/javascript";elem.async=this._async;document.body.appendChild(elem);};zf_Quantcast.prototype.trackPageView=function(){_qevents.push({qacct:this._account,labels:this._labels});
if(this._qimg==null)(this._qimg=new Image()).src="/zf/core/quantcast.ashx";};;function zf_StatCounter(project,security,async){;;;;;window.sc_project=parseInt(project,10);
window.sc_invisible=1;window.sc_security=security;window.sc_click_stat=-100;this._async=async;if(async){var self=this;$(function(){self._install();});}else this._install();
}zf_StatCounter.prototype._install=function(){var elem=document.createElement('SCRIPT');elem.src=(location.protocol=="https:"?"https://secure":"http://www")+".statcounter.com/counter/counter.js";
elem.type="text/javascript";elem.async=this._async;document.body.appendChild(elem);};zf_StatCounter.prototype.trackPageView=function(){};;var _gaq=_gaq||[],_gaqInit=false;function zf_Analytics(propertyId,
async,prefix){this._prefix=prefix?prefix+'.':'';if(propertyId!=null&&propertyId.length>0){this._propertyId=propertyId;_gaq.push([this._prefix+'_setAccount',propertyId]);
_gaq.push([this._prefix+'_setAllowHash',false]);_gaq.push([this._prefix+'_setAllowLinker',true]);if(!_gaqInit){_gaqInit=true;if(async)zf_stdDeferCall(null,zf_Analytics._load,
null,true);else zf_Analytics._load(false);}}}zf_Analytics.load=function(){if(!_gaqInit){_gaqInit=true;zf_Analytics._load(false);}};zf_Analytics.prototype.trackPageView=function(path){if(this._propertyId!=null){;
_gaq.push(typeof path==='string'?[this._prefix+'_trackPageview',path]:[this._prefix+'_trackPageview']);}};zf_Analytics.prototype.getPropertyId=function(){return this._propertyId;
};zf_Analytics._load=function(async){;var url=(("https:"==document.location.protocol)?"https://ssl.":"http://www.")+"google-analytics.com/ga.js";var ga=document.createElement('script');
ga.type='text/javascript';ga.async=async;ga.src=url;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);};;;function zfl_Analytics(isPhotoPage,
gaWebPropertyId,scProject,scSecurity,layoutStat,path,prefix){this._isPhotoPage=isPhotoPage;this._layoutStat=layoutStat;this._path=path;zf_Analytics.prototype.constructor.call(this,
gaWebPropertyId,false,prefix);zf_stdMakeMethodsDeferred(this,"Analytics",["registerLayoutLoad","registerLightsDimmed"]);this._quantcast=new zf_Quantcast('p-2bs_Lh_GZF0zU',
'',true);if(scProject!=null&&scProject.length>0&&scSecurity!=null&&scSecurity.length>0)this._statcounter=new zf_StatCounter(scProject,scSecurity,true);}zfl_Analytics.inherits(zf_Analytics);
zfl_Analytics.prototype.trackPageView=function(path){zf_Analytics.prototype.trackPageView.call(this,path);if(this._statcounter){this._statcounter.trackPageView(path);}};zfl_Analytics.prototype.registerNonPhotoVisit=function(){if(this._isPhotoPage)return;
;if(this.getPropertyId()!=null)this.trackPageView(this._path);this._quantcast.trackPageView();};zfl_Analytics.prototype.registerDownload=function(path){;;if(this.getPropertyId()!=null)this.trackPageView(path);
this._quantcast.trackPageView();};zfl_Analytics.prototype.registerPhotoVisit=function(photo){;var path=photo.getHref("analytics");;if(this.getPropertyId()!=null)this.trackPageView(path);
this._quantcast.trackPageView();};zfl_Analytics.prototype.update=function(photo){;;if(this.current!=null)this.current.unadvise(photo);this.current=photo;if(photo.loaded){this.registerPhotoVisit(photo);
}else{var self=this;photo.advise(this,function(){self.registerPhotoVisit(photo);});}};zfl_Analytics.prototype.registerLayoutLoad=function(flipper){if(this._layoutStat&&flipper){var oldDim={cx:zf_stdGetClientWidth(),
cy:zf_stdGetClientHeight()};var invoker=new zf_DelayedInvoke(3000);zf_stdAttachEvent(window,"resize",flipper.eventHandler(zfl_Analytics._resizeHandler,this,flipper,
oldDim,invoker));this._sendLayoutStats(flipper,false);}};zfl_Analytics.prototype.registerLightsDimmed=function(flipper){if(this._layoutStat)this._sendLayoutStats(flipper,false,
"dimlights");};zfl_Analytics._resizeHandler=function(eventArgs,analytics,flipper,oldDimensions,delay){if(oldDimensions.cx==zf_stdGetClientWidth()&&oldDimensions.cy==zf_stdGetClientHeight())return;
delay.invoke(function(){analytics._sendLayoutStats(flipper,true);});};zfl_Analytics.prototype._sendLayoutStats=function(flipper,isResample,layoutName){var size=flipper?flipper.getAvailSize():{cx:0,
cy:0};var stats={screenWidth:screen.width,screenHeight:screen.height,clientWidth:zf_stdGetClientWidth(),clientHeight:zf_stdGetClientHeight(),photoViewportWidth:size.cx,
photoViewportHeight:size.cy,theme:this._layoutStat.themeName,layout:layoutName?layoutName:this._layoutStat.layoutName,photoSetId:this._layoutStat.photoSetId,ownerId:this._layoutStat.ownerId,
isResample:isResample};zf_stdServerRequest("POST","/zf/layout/layout.asmx","ReportClientStatistics",[stats]);};;;function zfl_Mat(id,offsetTop,offsetBottom,extraWidth,layoutId){zfl_Control.prototype.constructor.call(this,
id);this._offsetTop=offsetTop;this._offsetBottom=offsetBottom;this._extraWidth=extraWidth;this._layoutId=layoutId;}zfl_Mat.inherits(zfl_Control);zfl_Mat.current=null;zfl_Mat.recalc=function(){var self=zfl_Mat.current;
if(!self)return;var domHeight=self.dom("height");var layout=$(document.getElementById(self._layoutId));var matWidth=layout.innerWidth()+self._extraWidth;$(domHeight).find(".mat-width").width(matWidth);
$(domHeight).css({display:"block"});};;function zfl_PhotoDownload(){}zfl_PhotoDownload.prototype._startBatchDownload=function(pairs,title,key){var counter;if(!zfl_PhotoDownload.__downloadCount)counter=zfl_PhotoDownload.__downloadCount=1;
else counter=++zfl_PhotoDownload.__downloadCount;var frameName="_zfl_PhotoDownload_download"+counter;var frameNode;frameNode=document.createElement("IFRAME");frameNode.name=frameName;
frameNode.style.cssText="position:absolute;visibility:hidden;left:0px;top:0px;";document.body.appendChild(frameNode);var formNode=document.createElement("FORM");
formNode.action="http://"+zf_defaultHost+"/zf/batchDownload";formNode.method="POST";formNode.target=frameName;formNode.innerHTML='<input type="hidden" name="ids" />'+'<input type="hidden" name="title" />'+'<input type="hidden" name="keyring" />'+'<input type="hidden" name="token" />'+'<input type="hidden" name="visitor" />'+'<input type="hidden" name="ref" />'+'<input type="hidden" name="key" />'+'<input type="hidden" name="contact" />'+'<input type="hidden" name="owner" />';
var ids=[];for(var i=0;i<pairs.length;i++){ids.push(pairs[i].photoId);ids.push(pairs[i].ownerId);}document.body.appendChild(formNode);formNode["ids"].value=ids.join(",");
formNode["keyring"].value=zf_stdGetCookie("zf_keyring");formNode["token"].value=zf_stdGetCookie("zf_token");formNode["visitor"].value=zf_stdGetCookie("zf_5y_visitor");
formNode["ref"].value=location.hostname;formNode["title"].value=title;formNode["contact"].value=zf_stdGetCookie("zf_uci");formNode["owner"].value=zf_ownerId?zf_ownerId:null;
if(key)formNode["key"].value=key;formNode.submit();};zfl_PhotoDownload.prototype._getDownloadInput=function(pairs,info,callback){;if(info.lockedCount==0){callback(null);return;}var id=this.id+'-dlinput';
var classes=this.downloadPopupClasses?this.downloadPopupClasses:'';var removePopup=function(){$('#'+id).remove();zfl_Curtain.hide();};var renderPopup=function(retry,
onpassword){var content=[];var buttons=[];if(info.lockedCount==info.photoCount&&info.passwordCount==1){if(info.photoCount==1)content.push('<div class="text">The original file is protected by owner. Please type the password to download it.</div>');
else content.push('<div class="text">Original files are protected by owner. Please type the password to download them.</div>');buttons.push(zfl_Button.createHtml(null,
"Download",["download"]));}else if(info.lockedCount<info.photoCount&&info.passwordCount==1){content.push('<div class="text">Some of the original files are protected by owner. Please type the password to download all files, or click the Skip button to download unprotected files only.</div>');
buttons.push(zfl_Button.createHtml(null,"Download All",["download"]));buttons.push(zfl_Button.createHtml(null,"Skip protected files",["skip"]));}else if(info.lockedCount==info.photoCount&&info.passwordCount>1){content.push('<div class="text">Original files are protected by owner. If you know the passwords for downloading originals, you can download them one at a time.</div>');
}else if(info.lockedCount<info.photoCount&&info.passwordCount>1){content.push('<div class="text">Some of the original files are protected by the owner. Only unprotected files will be downloaded. You can download the protected files individually.</div>');
buttons.push(zfl_Button.createHtml(null,"Download",["skip"]));}if(info.passwordCount==1){content.push('<div class="separator separator-border1"></div>');if(info.passwordHint)content.push('<div class="item">',
'<div class="prompt">Hint:</div>','<div class="password-hint-text">',zf_stdHtmlEncode(info.passwordHint),'</div>','</div>');content.push('<div class="form">','<div class="item">',
'<div class="prompt">Password:</div>','<input name="password" type="password" />','</div>','</div>');if(retry)content.push('<div class="incorrect">Incorrect password</div>');
}buttons.push(zfl_Button.createHtml(null,"Cancel",["cancel"]));content.push('<div class="item buttons">',buttons.join(""),'</div>');var top=Math.floor((zf_stdGetClientHeight()-300)/2);
var left=Math.floor((zf_stdGetClientWidth()-450)/2);content=[].concat('<div class="download-input ',classes,'" ','id="',id,'" ','style="left:',left,'px;top:',top,
'px">','<div class="password-box popup-border1 popup-color1 popup-bgcolor1">',content,'</div>','</div>');removePopup();zfl_Curtain.show("light");var jPopup=$(content.join("")).appendTo("body");
var goHandler=function(){onpassword($('#'+id).find("input").attr("value"));};var cancelHandler=function(){removePopup();};var skipHandler=function(){removePopup();
callback(null);};jPopup.find(".download").click(goHandler);jPopup.find(".cancel").click(cancelHandler);jPopup.find(".skip").click(skipHandler);var input=jPopup.find("input")[0];
if(input){$(input).keydown(function(e){if(e.keyCode==13)goHandler();else if(e.keyCode==27)cancelHandler();});try{input.focus();}catch(e){}}};var run=function(retry){renderPopup(retry,
function(password){zf_stdServerRequestEx("POST","/zf/core/core.asmx","VerifySrcPassword",[pairs,password],function(key,error){if(error!=null){removePopup();return;
}if(key==null){run(true);return;}removePopup();callback(key);});});};run(false);};zfl_PhotoDownload.prototype._downloadOriginals=function(title,photos){;;var self=this;if(photos instanceof Array){var maxSize;
maxSize=3500*1000*1000;if(!this._fakeVideoOriginals)photos=$.map(photos,function(p){return p.video?null:p;});else photos=$.map(photos,function(p){return p.video&&p.owner.id!=zf_ownerId?null:p;
});photos=$.map(photos,function(p){return p.video||p.owner.id==zf_userId||(p.access.mask&zf_AccessMask.ProtectOriginals)==0?p:null;});var files=zf_stdSplitArray(photos,
function(p){return p.zipSize;},maxSize);if(files.length>1){var markup=[zf_stdHtmlEncode('Downloads that exceed the size of 3GB have to be split into parts. Click the links below to download as ZIP files.'),
'<br/><br/>'].concat($.map(files,function(f,i){var text=zf_stdFormatString('Download part {0} of {1} ({2})',i+1,files.length,zf_stdFormatByteSize(f.total));return['<a href="#" class="pd-download-link" data-index="',
i,'">',zf_stdHtmlEncode(text),'</a>','<br/>'].join('');})).join('');zfl_MessageBox.show({width:480,title:'Downloads Files',text:markup,encode:false,buttons:['Close'],
curtain:true});$('.pd-download-link').click(function(){var li=parseInt($(this).attr('data-index'));self._downloadOriginals([title,li+1].join('-'),files[li]);return false;
});return;}photos=files[0];var ids=$.map(photos,function(photo){return photo.id;});var photoOwnerPairs=$.map(photos,function(photo){return{photoId:photo.id,ownerId:photo.owner.id};
});if(this._canShortCircuit(photos)){this._startBatchDownload(photoOwnerPairs,title,null);return;}zf_stdServerRequestEx("POST","/zf/core/core.asmx","GetSrcPasswordInfo",
[photoOwnerPairs],function(info,error){if(error!=null){return;};var start=function(key){self._startBatchDownload(photoOwnerPairs,title,key);};self._getDownloadInput(photoOwnerPairs,
info,start);});return;}var photoList=photos;photoList.loadAll(function(){var photoArray=[];for(var i=0;i<photoList.length;i++){var photo=photoList.get(i);;photoArray.push(photo);
}self._downloadOriginals(title,photoArray);});};zfl_PhotoDownload.prototype._canShortCircuit=function(photos){for(var i=0;i<photos.length;i++){var photo=photos[i];if(typeof(photo)=='number'||!photo.loaded)return false;
if(photo.owner&&photo.owner.id==zf_userId)continue;if(photo.video)continue;if((photo.access.mask&zf_AccessMask.ProtectOriginals)!=0||(photo.access.mask&zf_AccessMask.PasswordProtectOriginals)!=0){return false;
}}return true;};zfl_PhotoDownload.prototype._downloadOriginal=function(photo){;var url=null;if(photo.video){var largest=zf_ProcessingMethod.Video360p;if(photo.height>=480&&(photo.access.mask&zf_AccessMask.Protect480p)==0)largest=zf_ProcessingMethod.Video480p;
if(photo.height>=720&&(photo.access.mask&zf_AccessMask.Protect720p)==0)largest=zf_ProcessingMethod.Video720p;if(photo.height>=1080&&(photo.access.mask&zf_AccessMask.Protect1080p)==0)largest=zf_ProcessingMethod.Video1080p;
url=photo.getExternalUrl(largest)+"?dl=1";}else if((photo.access.mask&zf_AccessMask.PasswordProtectOriginals)==0){url=photo.getExternalUrl()+"?dl=1";}if(url!=null){location.href=url;
if(this._controls&&this._controls.analytics)this._controls.analytics.registerDownload(photo.getHref("analytics")+"?download");return;};var self=this;var photoOwnerPair=[{photoId:photo.id,
ownerId:photo.owner.id}];zf_stdServerRequestEx("POST","/zf/core/core.asmx","GetSrcPasswordInfo",[photoOwnerPair],function(info,error){if(error!=null){return;}var start=function(key){var uri=[photo.getExternalUrl(),
"?dl=1"];if(key)uri.push("&key=",key);location.href=uri.join("");if(self._controls&&self._controls.analytics)self._controls.analytics.registerDownload(photo.getHref("analytics")+"?download");
};self._getDownloadInput(photoOwnerPair,info,start);});};function zfb_ScrapbookAddShared(id,buttonAdd){zfl_Control.prototype.constructor.call(this,id);var self=this;this.$(".btn-cancel").click(this.closure(this.hide));
this.$('input[name="scrapbook"]').bind('click change',function(){var same=self.$('input[name="scrapbook"]:checked').val()=="same";self.$('.newset').toggleClass('disabled',
same).find('input[name="title"]').attr('disabled',same).iff(!same).select().trigger('change').focus();if(same)buttonAdd.toggleEnabled(true);});this.$('input[name="title"]').bind('change keydown',
zf_stdMakeDeferred(null,function(){buttonAdd.toggleEnabled(zf_stdTrim($(this).val()).length>0);}));}zfb_ScrapbookAddShared.inherits(zfl_Control);zfb_ScrapbookAddShared._storageKey="layout.scrapbook.addshared";
zfb_ScrapbookAddShared.prototype.show=function(onadd){if(!this._canShowAgain(this._edit.current.id)){onadd(this._edit.current);return;}var self=this;var name=this._edit.current.name;this.$(".popup-title").text(zf_stdFormatString("The current set of favorite photos, {0}, has already been shared with the photographer.",
name));if(/ \d+$/.test(name))name=name.replace(/(\d+)$/,function(v){return parseInt(v)+1;});else name=name+' 2';this.$('input[name="title"]').val([name]);this.$(".btn-add").unbind().bind('click',
function(){var same=self.$('input[name="scrapbook"]:checked').val()=="same";var title=zf_stdTrim(self.$('input[name="title"]').val());if(self.$('.btn-add .state').is('.disabled'))return false;
if(!same){zfb_Api.createScrapbook(title,zf_ownerId,function(result,error){if(!error)onadd(result);});}else{if(!!self.$('input[name="notagain"]').attr("checked"))self._saveNotAgain(self._edit.current.id);
onadd(self._edit.current);}self.hide();return false;});var cx=zf_stdGetClientWidth();var cy=zf_stdGetClientHeight();zfl_Curtain.show("light");this.$().detach().appendTo(document.body).show().css("left",
(cx-this.$().width())/2).css("top",(cy-this.$().height())/2);this.$('input[name="scrapbook"][value="same"]').attr('checked',true).trigger('change');this.$('input[name="notagain"]').attr("checked",
false);};zfb_ScrapbookAddShared.prototype.hide=function(){zfl_Curtain.hide();this.$().hide();return false;};zfb_ScrapbookAddShared.prototype.init=function(edit){;this._edit=edit;};zfb_ScrapbookAddShared.prototype._saveNotAgain=function(scrapbookId){var list=zf_storage.getItem(zfb_ScrapbookAddShared._storageKey);
list=!!list?list.split(','):[];list.push(scrapbookId);zf_storage.setItem(zfb_ScrapbookAddShared._storageKey,list.join(','));};zfb_ScrapbookAddShared.prototype._canShowAgain=function(scrapbookId){var list=zf_storage.getItem(zfb_ScrapbookAddShared._storageKey);
list=!!list?list.split(','):[];return $.inArray(""+scrapbookId,list)==-1;};function zfb_ScrapbookCreate(id,buttonCreate){zfl_Control.prototype.constructor.call(this,id);
var self=this;this.$(".btn-cancel").click(this.closure(this.hide));this.$('input[name="title"]').bind('change keydown',zf_stdMakeDeferred(null,function(){buttonCreate.toggleEnabled(zf_stdTrim($(this).val()).length>0);
}));}zfb_ScrapbookCreate.inherits(zfl_Control);zfb_ScrapbookCreate.prototype.show=function(onadd){var self=this;var name=this._edit.current.name;if(/ \d+$/.test(name))name=name.replace(/(\d+)$/,function(v){return parseInt(v)+1;
});else name=name+' 2';this.$('input[name="title"]').val([name]);this.$(".btn-create").unbind().bind('click',function(){var title=zf_stdTrim(self.$('input[name="title"]').val());
zfb_Api.createScrapbook(title,zf_ownerId,function(result,error){if(!error)onadd(result);});self.hide();return false;});var cx=zf_stdGetClientWidth();var cy=zf_stdGetClientHeight();
zfl_Curtain.show("light");this.$().detach().appendTo(document.body).show().css("left",(cx-this.$().width())/2).css("top",(cy-this.$().height())/2).find('input[name="title"]').select().focus();
};zfb_ScrapbookCreate.prototype.hide=function(){zfl_Curtain.hide();this.$().hide();return false;};zfb_ScrapbookCreate.prototype.init=function(edit){;this._edit=edit;};function zfb_ScrapbookEdit(id,currentInfo,
openedInfo,photogId,canShareWithPhotog,canShareWithOthers,cookieName,addShared,create){zfl_Control.prototype.constructor.call(this,id);zfl_PhotoDownload.prototype.constructor.call(this);
;;this.current=openedInfo?openedInfo:currentInfo;this._owned=currentInfo;this._photogId=photogId;this._cookieName=cookieName;this._canShareWithPhotog=canShareWithPhotog;
this._canShareWithOthers=canShareWithOthers;this.downloadPopupClasses="lb lb-font1";this._addShared=addShared;this._addShared.init(this);this._create=create;this._create.init(this);
}zfb_ScrapbookEdit.inherits(zfl_Control,zfl_PhotoDownload);zfb_ScrapbookEdit.prototype.show=function(){if(this._isShown)return;this._isShown=true;var self=this;var parent=document.getElementById('mat-frame');
zf_Flash.hide();$('BODY').css('overflow-y','hidden');$(parent).append($(this.dom()).removeClass('none'));if(this._init===undefined){this.$('.sbe-btn-close').click(this.closure(this.hide));
zf_stdLoadScript('scrapbook.js',function(){self._init();});}else this._init();};zfb_ScrapbookEdit.prototype.hide=function(){$('BODY').css('overflow-y','scroll');$(this.dom()).addClass('none');
zf_Flash.show();this._isShown=false;$(window).unbind('.sbe');if(this._select)this._select.hide();var scrapbook=this.current;if(scrapbook&&scrapbook.isReadOnly&&!scrapbook.isOwned)scrapbook=this._owned;
if(scrapbook)scrapbook.addedCount=undefined;this._makeCurrent(scrapbook);};zfb_ScrapbookEdit.prototype.keyDown=function(e){if(this._isShown&&this._keyDown)this._keyDown(e);if(this._isShown)e.stopImmediatePropagation();
};zfb_ScrapbookEdit.prototype.addPhotosNoCheck=function(ids,purchase,callback){var self=this;if(this.current){for(var i=0;i<ids.length;i++){var id=ids[i];if(!this.current.map[id])this.current.map[id]=true;
}}zfb_Api.addToScrapbook(this.current,this._photogId,ids,!!purchase,function(result,error){if(error!=null){return;}self._makeCurrent(result);if(callback)callback();
});};zfb_ScrapbookEdit.prototype.addPhotos=function(ids,purchase,callback){if(!this.current||!this.current.isShared){this.addPhotosNoCheck(ids,purchase,callback);return;}var self=this;
this._addShared.show(function(scrapbook){if(scrapbook!==this.current)self._makeCurrent(scrapbook);self.addPhotosNoCheck(ids,purchase,callback);});};zfb_ScrapbookEdit.prototype.removePhotos=function(ids){var self=this;
if(this.current){for(var i=0;i<ids.length;i++){var id=ids[i];if(this.current.map[id])this.current.map[id]=null;}}zfb_Api.removeFromScrapbook2(this.current,ids,function(result,
error){if(error!=null){return;}self._makeCurrent(result);});};zfb_ScrapbookEdit.prototype.switchTo=function(scrapbook){;if(this.current&&this.current.id==scrapbook.id)return;if(scrapbook.loaded)this._makeCurrent(scrapbook);
var self=this;zfb_Api.loadScrapbook(scrapbook,function(sb){self.switchTo(sb);});};zfb_ScrapbookEdit.prototype.addNewSet=function(){var self=this;this._create.show(function(scrapbook){self.switchTo(scrapbook);
});};zfb_ScrapbookEdit.prototype._makeCurrent=function(scrapbook){this.current=scrapbook;if(this.onchange)this.onchange(scrapbook,this._isShown?this:null);if(!scrapbook){zf_stdRemoveCookie(this._cookieName,
false);zf_stdRemoveCookie("zf_osb",true);}else if(scrapbook.isOwned){var expires=new Date();expires.setMonth(expires.getMonth()+3);zf_stdSetCookie(this._cookieName,
scrapbook.token,expires,true,false);zf_stdRemoveCookie("zf_osb",true);}else{zf_stdSetCookie("zf_osb",scrapbook.token,null,true,true);}};;function zfl_CookieWarning(id){zfl_Control.prototype.constructor.call(this,
id);var markup=['<div class="coowarn-policy coowarn-color3 coowarn-font3">','<div class="coowarn-policy-inner" id="',id,'-sv">','<p>By accessing and using our websites or other services, you are agreeing to the terms of the following policy.</p>',
'<p class="coowarn-h1 coowarn-font4">Cookies</p>','<p>We use cookies on our website for a variety of reasons which you can learn about below. The cookies we use do not store personally identifiable information, nor can they harm your computer. We want our website to be informative, personal, and as user-friendly as possible, and cookies help us to achieve that goal.</p>',
'<p>Unless you have adjusted your browser settings (where possible) to refuse cookies, our systems will issue cookies as soon you visit our website. If you have switched off cookies then some of the functionality of our services may not be available to you.</p>',
'<p class="coowarn-h1 coowarn-font4">What are cookies?</p>','<p>Cookies are created when you visit a website or other supported service. They are commonly used to support website functionality, improve the user\'s browsing experience, and provide more information about the user\'s experience and interests. This information is generally used to make content and services more relevant and useful during future visits.</p>',
'<p>A cookie is a simple text file that is stored on your computer or mobile device by a website\'s server. Only that server will be able to retrieve or read the contents of that cookie. Each cookie is unique to your web browser. It contains some anonymous information such as a unique identifier, the site name, and random digits and numbers. Cookies allow a website to remember things like your preferences, or what\'s in your shopping basket.</p>',
'<p>For more details about cookies and details of how to delete and disable cookies you can visit www.aboutcookies.org. For more information, including how to turn off cookies, see below.</p>',
'<p>If you don\'t want to receive cookies, you can modify your browser so that it notifies you when cookies are sent to it or you can refuse cookies altogether. You can also delete cookies that have already been set. Please refer to the help function within your browser for specific instructions.</p>',
'<p class="coowarn-h1 coowarn-font4">How does this website use cookies?</p>','<p>The cookies set by this website fall into the following categories.</p>','<p class="coowarn-h2 coowarn-font4">Strictly Necessary</p>',
'<p>These cookies are essential to ensure that you can navigate and use all features of the site. This includes browsing pages, remembering your preferences, saving favorite images, secure registration, placing orders, and other essential features. These cookies don\'t gather any information about you that could be used for marketing or remembering where you\'ve been on the Internet.</p>',
'<p class="coowarn-h2 coowarn-font4">Performance</p>','<p>These cookies allow the website to deliver a better browsing experience. They collect information about your website usage, such as the pages you visit, or if you experience any errors. These cookies don\'t collect any information that could identify you - all the information collected is anonymous and is only used to help us improve how the website works.</p>',
'<p class="coowarn-h2 coowarn-font4">Functionality</p>','<p>Functionality cookies are used to provide services, or to remember settings to improve your visit. We use them for remembering settings you\'ve applied, showing you when you\'re logged in to the website, saving your favorite images, and so on.</p>',
'<p class="coowarn-h2 coowarn-font4">Targeting</p>','<p>Targeting cookies are linked to services provided by third parties. These include \'Like\' buttons and \'Share\' buttons used by services like Facebook, Google+, Twitter, Pinterest, and others. The third party provides these services in return for recognising that you have visited our website.</p>',
'<p>Additionally, the website may use Google Analytics or StatCounter services to analyse the use of this website. These services generate statistical and other information about website use by means of cookies, which are stored on users\' computers. The information generated relating to our website is used to create reports about the use of the website. You can view privacy policies for Google Analytics or StatCounter on their respective websites.</p>',
'</div>','</div>'].join('');var animate=zf_stdGetCookie('zf_cw')!='displayed';$(function(){if(animate)$('.coowarn:first').slideDown('slow');else $('.coowarn:first').show();
zf_stdSetCookie('zf_cw','displayed',new Date(2020,1,1));});$('.coowarn-hide:first').click(function(){zf_stdSetCookie('zf_cw','closed',new Date(2020,1,1));$('.coowarn').remove();
});$('.coowarn-text:first A').click(function(){zfl_MessageBox.show({encode:false,curtain:true,text:markup,width:600,title:'Cookie Policy',buttons:['Close']});new zf_ScrollBar(id+'-sv',
22);return false;});}zfl_CookieWarning.inherits(zfl_Control);;;zf.$namespace('zf.zentobox.framework',{Component:zf.$class(zf_Control,{_ctor:function(id){zf_Control.prototype.constructor.call(this,
id);},init:function(data){},getMinWidth:function(){return 0;},getMaxWidth:function(){return Number.MAX_VALUE;},resize:function(cx,cy,constraints){return{cx:cx,cy:cy};
}})});;zf.$namespace('zf.zentobox',{RichText:zf.$class(null,{_ctor:function(zentoboxes,width){var constraints={minWidth:0,minHeight:0,cellWidth:null,cellRound:function(x){return x;
}};$.each(zentoboxes,function(){this.resize(width,10000,constraints);});}})});;function zf_ScrollView(id,cyLine){zf_Control.prototype.constructor.call(this,id);zf_stdSetClientObject(id,
this);if(cyLine!=null)this._init(cyLine);}zf_ScrollView.inherits(zf_Control);zf_ScrollView.prototype.getContentNode=zf_Control.prototype.dom;zf_ScrollView.prototype.update=function(sync){if(sync)this._bar._update();
else this._bar.update();};zf_ScrollView.prototype.getScrollPos=function(){return this._bar.getScrollPos();};zf_ScrollView.prototype.scrollTo=function(pos){this._bar.scrollTo(pos);};zf_ScrollView.prototype.getLineHeight=function(){return this._bar.getLineHeight();
};zf_ScrollView.prototype.lineUp=function(){this._bar.lineUp();};zf_ScrollView.prototype.lineDown=function(){this._bar.lineDown();};zf_ScrollView.prototype.pageUp=function(){this._bar.pageUp();};zf_ScrollView.prototype.pageDown=function(){this._bar.pageDown();
};zf_ScrollView.prototype.setHeight=function(cy){if(cy<0)cy=0;this.dom().parentNode.parentNode.style.height=cy+"px";};zf_ScrollView.prototype.disable=function(){this._bar.close();};zf_ScrollView.prototype.getHeight=function(){return document.getElementById(this.id).parentNode.offsetHeight;
};zf_ScrollView.prototype.ensureVisible=function(top,height,speed,completed,needQueue){this._bar._ensureVisible(top,height,speed,completed,needQueue);};zf_ScrollView.prototype.isVisible=function(top,
height){return this._bar._isVisible(top,height);};zf_ScrollView.prototype._init=function(cyLine){;this._bar=new zf_ScrollBar(this.id,cyLine);this._bar.onscrollstart=this.closure(this._bar_onscrollstart);
this._bar.onscrolling=this.closure(this._bar_onscrolling);this._bar.onscroll=this.closure(this._bar_onscroll);};zf_ScrollView.prototype._bar_onscrollstart=function(){if(this.onscrollstart!=null)this.onscrollstart();
};zf_ScrollView.prototype._bar_onscrolling=function(){if(this.onscrolling!=null)this.onscrolling();};zf_ScrollView.prototype._bar_onscroll=function(){if(this.onscroll!=null)this.onscroll();
};;function zf_Tree(id,storageKey){;zf_Control.prototype.constructor.call(this,id);this._storageKey=storageKey;this._expanded={};$(this.closure(this._init));}zf_Tree.inherits(zf_Control);
zf_Tree.None=0;zf_Tree.Select=1;zf_Tree.Expand=2;zf_Tree.Edit=3;zf_Tree.ToggleCheck=4;zf_Tree.Unchecked=0;zf_Tree.Checked=1;zf_Tree.PartialChecked=2;zf_Tree.prototype.clear=function(){this.emptyItem("");};zf_Tree.prototype.setItem=function(id,
item){;if(id==null)id="";var node=this._find(id);if(item.title!=null)node.find("A").html(item.title);if(item.action!=null){var self=this;var action=typeof(item.action)=="function"?item.action:null;
var href=typeof(item.action)=="string"?item.action:"#";node.find(".tree-item").unbind("mousedown").mousedown(function(e){self._item_onmousedown(this,e,action);}).find("A").unbind("click").attr("href",
href).iff(href=="#").bind("click",zf_stdFalse);}if(item.cssClass!=null){var cssClass="tree-node";if(node.hasClass("tree-root"))cssClass+=" tree-root";if(node.hasClass("tree-selected"))cssClass+=" tree-selected";
if(node.hasClass("tree-expanded")){cssClass+=" tree-expanded";}if(node.hasClass("tree-collapsed"))cssClass+=" tree-collapsed";if(item.cssClass!="")cssClass+=" "+item.cssClass;
node.attr("className",cssClass);}if(item.checkState!=null||item.disabled!=null){if(item.checkState!=null)this._check(node,item.checkState);if(item.disabled!=null)node.toggleClass('disabled',
!!item.disabled);}if(item.extra!=null){var anchor=node.find("A");anchor.nextAll().remove();anchor.after(item.extra);}};zf_Tree.prototype.getItemRect=function(id){;var node=this._find(id);
var position=node.position();return{left:position.left,top:position.top,right:position.left+node.width(),bottom:position.top+node.height()};};zf_Tree.prototype.hasItem=function(id){;
var node=this._find(id);return node.length==1;};zf_Tree.prototype.getSelectedItem=function(){var node=this.$("DIV.tree-selected");return node.length==1?zf_Tree._getNodeId(node.attr("id")):null;
};zf_Tree.prototype.getCheckedItems=function(){var res=[];var nodes=this.$('DIV.tree-checkbox.checked').closest('.tree-node');nodes.each(function(i,node){res.push(zf_Tree._getNodeId(node.id));
});return res;};zf_Tree.prototype._getCheckedState=function(node){;var checkbox=node.find('.tree-checkbox');if(checkbox.hasClass('checked'))return zf_Tree.Checked;else if(checkbox.hasClass('semichecked'))return zf_Tree.PartialChecked;
return zf_Tree.Unchecked;};zf_Tree.prototype.getCheckedState=function(id){;var node=this._find(id);var checkbox=node.find('.tree-checkbox');if(checkbox.hasClass('checked'))return zf_Tree.Checked;
else if(checkbox.hasClass('semichecked'))return zf_Tree.PartialChecked;return zf_Tree.Unchecked;};zf_Tree.prototype.insertItem=function(item,parent,before){;var cssClass="tree-node";
if(item.cssClass!=null)cssClass+=" "+item.cssClass;if(parent==null)parent="";var id=item.id;var action=typeof(item.action)=="function"?item.action:null;var href=typeof(item.action)=="string"?item.action:"#";
var title=item.title!=null?item.title:"";var children=item.children;var elem=document.createElement("DIV");elem.id=this.id+"-i-"+id;elem.className=cssClass;elem.innerHTML=['<div class="tree-btn"></div>',
'<div class="tree-checkbox"></div>','<div class="tree-item">','<div class="tree-icon"></div>','<a href="',href,'" onclick="return false;">',title,'</a>',item.extra!=null?item.extra:'',
'</div>'].join("");var expand=parent!=""&&this._expanded[parent];parent=this._find(parent);;var branch;if(!(branch=parent.next()).hasClass("tree-branch")){parent.after('<div class="tree-branch"></div>');
branch=parent.next();}if(before!=null){before=branch.children("DIV#"+this.id+"-i-"+before);if(before.length!=1)before=null;}if(before!=null)before.before(elem);else branch.append(elem);
if(expand)parent.removeClass("tree-collapsed").addClass("tree-expanded");else if(!parent.hasClass("tree-expanded"))parent.addClass("tree-collapsed");if(item.checkState!=null||item.disabled!=null){var $item=this._find(item.id);
;if(item.checkState!=null)this._check($item,item.checkState);if(item.disabled!=null)$item.toggleClass('disabled',!!item.disabled);}var self=this;var btn=elem.firstChild;
item=$(btn).nextAll('.tree-item');$(btn).mousedown(function(e){self._btn_onmousedown(this,e);});item.mousedown(function(e){self._item_onmousedown(this,e,action);
}).dblclick(function(e){self._item_ondblclick(this,e);});if(href=="#")item.find("A").bind("click",zf_stdFalse);if(this.enableHover){item.hover(function(e){self._item_onmouseover(this,
e);},function(e){self._item_onmouseout(this,e);});}if($(this.dom()).hasClass('tree-checkboxes'))$(elem).find('.tree-checkbox').mousedown(this.closure(this._checkbox_onmousedown));
if(this.lazy&&children!=null&&children>0){if(this._expanded[id])this.oniteminit(id);else $(elem).addClass("tree-collapsed");}elem=null;btn=null;item=null;parent=null;
before=null;branch=null;};zf_Tree.prototype.emptyItem=function(id){;var node=this._find(id);node.next("DIV.tree-branch").remove();if(id!="")node.removeClass("tree-expanded").removeClass("tree-collapsed");
if(this._hoverLocked!=null&&this._hoverLocked!=""&&this.dom("i-"+this._hoverLocked)==null){this._hoverLocked=null;}};zf_Tree.prototype.deleteItem=function(id){;;var node=this.$dom("i-"+id);
if(!node.length)return false;var parent=this._parent(node);node.next("DIV.tree-branch").remove().end().remove();if((node=parent.next("DIV.tree-branch")).find("DIV.tree-node").length==0){node.stop(true,
true).remove();parent.removeClass("tree-expanded").removeClass("tree-collapsed");}if(this._hoverLocked!=null&&this._hoverLocked!=""&&this.dom("i-"+this._hoverLocked)==null){this._hoverLocked=null;
}return true;};zf_Tree.prototype.clickItem=function(id){;this._find(id,".tree-item").mousedown();};zf_Tree.prototype.selectItem=function(id,noAnimation){if(id!=null){var node=this._find(id);
if(!node.length)return;this._select(node);if(id!=""){node=this._parent(node);while(!node.hasClass("tree-root")){this._expand(node,true,null,noAnimation);node=this._parent(node);
}}}else{this.$("DIV.tree-selected").removeClass("tree-selected");}};zf_Tree.prototype.checkItem=function(id,checked,noAnimation,disableExpanding){if(id!=null){var node=this._find(id);
this._check(node,checked);if(id!=""&&!disableExpanding){node=this._parent(node);while(!node.hasClass("tree-root")){this._expand(node,true,null,noAnimation);node=this._parent(node);
}}}else{this.$('DIV.tree-checkbox').removeClass('checked semichecked');}};zf_Tree.prototype.disableAllItems=function(disabled){var node=this.$(".tree-node").toggleClass('disabled',
!!disabled);};zf_Tree.prototype.disableItem=function(id,disabled){;var node=this._find(id);node.toggleClass('disabled',!!disabled);};zf_Tree.prototype.isDisabled=function(id){;
var node=this._find(id);return node.hasClass('disabled');};zf_Tree.prototype.editItem=function(id,title,onedit){;var node=this._find(id);var self=this;if(title==null)title=node.find("DIV.tree-item A").text();
node.append("<textarea>"+title+"</textarea>");var item=node.find("DIV.tree-item");var edit=node.find("TEXTAREA");var left=item.position().left+parseInt(item.css("paddingLeft"),
10)+parseInt(item.css("borderLeftWidth"),10);var right=parseInt(item.css("paddingRight"),10);left-=3;edit.css("left",left+"px").width(item.width()+right).height(item.height());
var end=function(e){e=$.event.fix(e);if((e.type=="click"||e.type=="mousedown")&&e.target==edit.get(0))return;var title=edit.val();if(onedit!=null){if(!onedit(title)){edit.get(0).focus();
}}else{self.setItem(id,{title:title});}if(document.removeEventListener){document.removeEventListener("mousedown",end,true);document.removeEventListener("click",end,
true);}edit.remove();};edit.keydown(function(e){var j=$(this);if(e.keyCode==27){j.remove();return;}if(e.keyCode==13){end(e);return;}var fixup=0;fixup=3;zf_stdDeferCall(null,
function(){if(this.scrollHeight-fixup>j.height())j.height(this.scrollHeight-fixup);},this);});edit.blur(end);if(document.addEventListener){document.addEventListener("mousedown",
end,true);document.addEventListener("click",end,true);}edit.get(0).select();edit.get(0).focus();};zf_Tree.prototype.expandItem=function(id,noAnimation){;this._expand(id,
true,this.onexpand!=null?this.closure(this.onexpand):null,noAnimation);};zf_Tree.prototype.collapseItem=function(id,noAnimation){var self=this;var onexpand=this.onexpand!=null?this.closure(this.onexpand):null;
if(id==null){var expanded=this.$('.tree-expanded').each(function(){self._expand($(this),false,onexpand,noAnimation);});return;}this._expand(id,false,onexpand,noAnimation);
};zf_Tree.prototype._init=function(){var self=this;this.$("DIV.tree-btn").mousedown(function(e){self._btn_onmousedown(this,e);});this.$("DIV.tree-checkbox").mousedown(this.closure(this._checkbox_onmousedown));
this.$("DIV.tree-item").mousedown(function(e){self._item_onmousedown(this,e);}).dblclick(function(e){self._item_ondblclick(this,e);});if(this.enableHover){this.$("DIV.tree-item").hover(function(e){self._item_onmouseover(this,
e);},function(e){self._item_onmouseout(this,e);});}this.$("DIV.tree-expanded").each(function(){self._expanded[zf_Tree._getNodeId(this.id)]=true;});if(this._storageKey!=null){var state=zf_storage.getItem(this._storageKey);
if(state!=null){state=state.toString();state=state.split(',');for(var i=0;i<state.length;i++){var id=state[i];var j=this.$dom("i-"+id);this._expanded[id]=true;if(j.hasClass("tree-collapsed")){j.removeClass("tree-collapsed").addClass("tree-expanded");
}}}this._saveState();}if(this.onready!=null)this.onready();};zf_Tree.prototype.getItem=zf_Tree.prototype._find=function(id,expr){;var j=this.$dom(id==""?"root":"i-"+id);
if(expr!=null)j=j.find(expr);return j;};zf_Tree.prototype._parent=function(node){;;;return node.closest("DIV.tree-branch").prev();};zf_Tree.prototype._check=function(node,checkState){;
;;if(checkState==zf_Tree.PartialChecked){node.find('.tree-checkbox').removeClass('checked').addClass('semichecked');return zf_Tree.PartialChecked;}var checked=checkState==null?undefined:!!checkState;
var checkbox=node.find('.tree-checkbox').removeClass('semichecked').toggleClass('checked',checked);checked=checked!=null?checked:checkbox.hasClass('checked');return checked?zf_Tree.Checked:zf_Tree.Unchecked;
};zf_Tree.prototype._select=function(node){;;;if(!node.hasClass("tree-selected")){this.$("DIV.tree-selected").removeClass("tree-selected");node.addClass("tree-selected");
return true;}return false;};zf_Tree.prototype._expand=function(node,toggle,onexpand,noAnimation){;;;var expand=toggle===true;var collapse=toggle===false;var self=this;var id=node;
if(typeof(node)=="string")node=this._find(id);else id=zf_Tree._getNodeId(node.attr("id"));;if(expand)this._expanded[id]=true;else if(collapse)delete this._expanded[id];
if(node.length==1&&node.hasClass("tree-collapsed")&&!collapse){if(this.lazy&&node.next(".tree-branch").length==0)this.oniteminit(id);var expanded=function(){node.removeClass("tree-collapsed").addClass("tree-expanded");
onexpand&&onexpand(id,true);};if(node.next(".tree-branch").length>0){if(!noAnimation)node.next(".tree-branch").slideDown(75,expanded);else{node.show();expanded();
}}this._expanded[id]=true;}else if(node.length==1&&node.hasClass("tree-expanded")&&!expand){var collapsed=function(){node.removeClass("tree-expanded").addClass("tree-collapsed");
onexpand&&onexpand(id,false);if(node.next("DIV.tree-branch").find("DIV.tree-selected").length!=0){self._suppressExpand=true;node.find("DIV.tree-item").mousedown();
self._suppressExpand=false;var sel=node.next("DIV.tree-branch").find("DIV.tree-selected");if(sel.length!=0){sel.removeClass("tree-selected");if(self.onselchange)self.onselchange(null);
}}};var speed=!noAnimation?75:0;node.next(".tree-branch").slideUp(speed,collapsed);delete this._expanded[id];}if(this._storageKey!=null)zf_stdDeferCall(this.id+".save",
this._saveState,this);};zf_Tree.prototype._saveState=function(){;var state=[];for(var id in this._expanded)state.push(id);state=state.join(',');zf_storage.setItem(this._storageKey,
state);};zf_Tree.prototype.lockHover=function(id){if(this._hoverLocked==id)return;var node;if(this._hoverLocked!=null){node=this._find(this._hoverLocked);if(node.length>0){if(this.onitemmouseout==null||!this.onitemmouseout(this._hoverLocked))node.removeClass("tree-hover").find(".tree-action").remove();
}}if(id!=null){node=this._find(id);if(!node.hasClass("tree-hover")){node.addClass("tree-hover");if(this.onitemmouseover==null||!this.onitemmouseover(id)){var self=this;
node.find(".tree-item").append('<div class="tree-action"></div>').find(".tree-action").mousedown(function(e){e.stopPropagation();}).click(function(e){self._action_onclick(this,
e);});}}}this._hoverLocked=id;};zf_Tree._getNodeId=function(id){;var k;if((k=id.indexOf("-i-"))!=-1)return id.substr(k+3);return "";};zf_Tree.prototype._btn_onmousedown=function(node,
e){;;e.preventDefault();e.stopPropagation();this._expand($(node).closest(".tree-node"),null,this.onexpand!=null?this.closure(this.onexpand):null);};zf_Tree.prototype._checkbox_onmousedown=function(e){;
e.preventDefault();e.stopPropagation();var node=$(e.currentTarget).closest('.tree-node');var id=zf_Tree._getNodeId(node.attr('id'));if(!this.isDisabled(id)){var checkState=this._check(node);
if(this.onitemchecked)this.onitemchecked(id,checkState==zf_Tree.Checked);}};zf_Tree.prototype._item_onmousedown=function(node,e,action){;;if(!zf_stdIsLeftButton(e))return;
e.preventDefault();e.stopPropagation();node=$(node).closest(".tree-node");var href=node.find("A").attr("href");var id=zf_Tree._getNodeId(node.attr("id"));var ret=zf_Tree.Select;
if(this.onitemclick!=null)ret=this.onitemclick(id);switch(ret){case zf_Tree.Expand:if(!this._suppressExpand){this._expand(node,null,this.onexpand!=null?this.closure(this.onexpand):null);
}break;case zf_Tree.Select:if(this._select(node)){if(this.onselchange!=null&&this.onselchange(id))return;if(action!=null)action();else if(href!=null&&href.indexOf("javascript:")==0){href=href.substr(11);
if(href!=""&&href!=";")eval();}else if(href!=null)location.href=href;}break;case zf_Tree.ToggleCheck:if(!this.isDisabled(id))this._check(node);break;default:break;
}};zf_Tree.prototype._item_ondblclick=function(node,e){;;e.preventDefault();e.stopPropagation();node=$(node).closest(".tree-node");var id=zf_Tree._getNodeId(node.attr("id"));
var ret=zf_Tree.Edit;if(this.onitemdblclick!=null)ret=this.onitemdblclick(id);switch(ret){case zf_Tree.Edit:break;case zf_Tree.Expand:if(!this._suppressExpand){this._expand(node,
null,this.onexpand!=null?this.closure(this.onexpand):null);}break;default:break;}};zf_Tree.prototype._item_onmouseover=function(node,e,action){;;e.preventDefault();e.stopPropagation();
if(this._hoverLocked!=null)return;var self=this;node=$(node).closest(".tree-node").addClass("tree-hover");var id=zf_Tree._getNodeId(node.attr("id"));if(this.onitemmouseover==null||!this.onitemmouseover(id)){node.find(".tree-item").append('<div class="tree-action"></div>').find(".tree-action").mousedown(function(e){e.stopPropagation();
}).click(function(e){self._action_onclick(this,e);});}};zf_Tree.prototype._item_onmouseout=function(node,e,action){;;e.preventDefault();e.stopPropagation();node=$(node).closest(".tree-node");
var id=zf_Tree._getNodeId(node.attr("id"));if(id!=this._hoverLocked){if(node.hasClass("tree-hover")){node.removeClass("tree-hover");if(this.onitemmouseout==null||!this.onitemmouseout(id))node.find(".tree-action").remove();
}}};zf_Tree.prototype._action_onclick=function(node,e){;;e.preventDefault();e.stopPropagation();if(this.oncontextmenu!=null){node=$(node).closest("DIV.tree-node");var id=zf_Tree._getNodeId(node.attr("id"));
var popup=this.oncontextmenu(id);if(popup==null)return;this.lockHover(id);popup.onhide=this.closure(this.lockHover,null);node=node.find(".tree-item");var offset=node.offset();
var width=node.outerWidth();var height=node.outerHeight();popup.show(offset.left+width,offset.top+height-1,true,20);}};;function zf_SubAccount(){this.displayName=null;this.loginName=null;
this.email=null;}zf_SubAccount.AccountOwner=$.extend(new zf_SubAccount(),{id:0,displayName:'Account Owner'});zf_SubAccount.Everyone=$.extend(new zf_SubAccount(),{id:-1,displayName:'Everyone'});
;function zf_TreeBrowser(id,tree,sview,filter){zf_Control.prototype.constructor.call(this,id);this._sview=sview;this._tree=tree;this._tree.enableEdit=false;this._tree.enableHover=false;
this._tree.lazy=true;this._tree.oniteminit=this.closure(this._tree_oniteminit);this._tree.onexpand=this._sview.closure(this._sview.update);this._filter=filter;}zf_TreeBrowser.inherits(zf_Control);
zf_TreeBrowser.prototype.hasItem=function(itemId,callback){;if(callback){this._ensureItem(itemId,function(elem){callback(elem!=null&&this._evalFilter(elem));});return undefined;
}else{var elem=this._items[!itemId?this._rootId:itemId];return elem!=null&&this._evalFilter(elem);}};zf_TreeBrowser.prototype.getItem=function(itemId,callback){;if(callback){this._ensureItem(itemId,
function(elem){callback(elem!=null&&this._evalFilter(elem)?elem:null);});return undefined;}else{var elem=this._items[!itemId?this._rootId:itemId];return(elem!=null&&this._evalFilter(elem))?elem:null;
}};zf_TreeBrowser.prototype.getChildren=function(itemId,callback){;var self=this;this.getItem(itemId,function(elem){if(elem&&elem instanceof zf_Folder){self._getFolder(elem,function(error){callback&&callback(elem);
});}else callback&&callback(elem);});};zf_TreeBrowser.prototype.selectItem=function(itemId,callback){;if(itemId==this._rootId)itemId="";this._ensureItem(itemId,function(item){if(item!=null){this._expose(item);
this._tree.selectItem(itemId,true);this._sview.update(true);var rect=this._tree.getItemRect(itemId);this._sview.ensureVisible(rect.top,rect.bottom-rect.top+2);this._tree.onselchange&&this._tree.onselchange(itemId);
}callback&&callback();});};zf_TreeBrowser.prototype.getTree=function(){return this._tree;};zf_TreeBrowser.prototype.getRootId=function(){return this._rootId;};zf_TreeBrowser.prototype.loadTree=function(onload){this._loadTree(onload);
};zf_TreeBrowser.prototype._loadTree=function(onload){this._tree.clear();this._tree.setItem(null,{title:"Loading...",cssClass:"",action:$.noop});this._tree.$dom().addClass('tree-loading');
this._cacheId=typeof(zf_organizer)!="undefined"?zf_organizer._cacheId:null;var self=this;this._items={};if(this._cacheId!=null)load();else{zf_stdServerRequestEx("POST",
"/zf/app/edit/edit.asmx","GetHierarchyCacheId",[zf_userId],function(result,error){if(error!=null){onload&&onload();return;}self._cacheId=result;load();});}function load(){zf_stdServerRequestEx({method:"GET",
sticky:true,url:"/zf/app/edit/edit.asmx",api:"GetGroupHierarchy",params:[zf_userId,self._cacheId,true],callback:function(result,error){if(error==null){self._tree.$dom().removeClass('tree-loading');
var root=result.root;if(!!(self._partial=result.partial))root.elements=result.elements;var item={},access=root.access;item.title=zf_stdFormatString('<tt title="{0}"></tt><span>{1}</span>',
zf_AccessUtils[access.type].tooltip,zf_stdHtmlEncode(root.title));item.cssClass=root.isEvent?"org-evt":"org-fld";item.cssClass+=" org-"+zf_AccessUtils[access.type].cssClass;
if(!self._canEdit(root))item.cssClass+=" org-ro";self._oniteminit&&self._oniteminit(item,null,root);self._tree.setItem(null,item);self._rootId="fld"+root.id;self._items[self._rootId]=root;
self._load(root);self._tree_oniteminit(null);self._sview.update();self._loaded=true;}onload&&onload();}});}};zf_TreeBrowser.prototype._load=function(folder){;for(var i=0;i<folder.elements.length;
i++){var elem=folder.elements[i];elem.parent=folder;elem.access.parent=folder.access;elem.pricing.parent=folder.pricing;var id=this._getTreeId(elem);this._items[id]=elem;
if(elem instanceof zf_Folder)this._load(elem);}};zf_TreeBrowser.prototype._expose=function(elem){;if((elem=elem.parent)!=null&&elem.parent!=null){this._expose(elem);var id=this._getTreeId(elem);
this._tree.expandItem(id,true);}};zf_TreeBrowser.prototype._getTreeNodeId=function(elem){return elem.parent==null?"":this._getTreeId(elem);};zf_TreeBrowser.prototype._getTreeId=function(elem){if(elem instanceof zf_Folder)return "fld"+elem.id;
else if(elem.type==zf_PhotoSet.Gallery)return "gal"+elem.id;else if(elem.type==zf_PhotoSet.Collection)return "col"+elem.id;;return null;};zf_TreeBrowser.prototype._tree_oniteminit=function(itemId){var folder=this._items[itemId!=null?itemId:this._rootId];
var self=this,tree=this._tree;itemId&&tree.insertItem({id:itemId+'-loading',title:'Loading...'},itemId);function initTree(){itemId&&tree.deleteItem(itemId+'-loading');
for(var i=0;i<folder.elements.length;i++){var elem=folder.elements[i];var include=false;var access=elem.access;var item={cssClass:"org-"+zf_AccessUtils[access.type].cssClass};
if(elem instanceof zf_Folder){item.id="fld"+elem.id;item.cssClass+=elem.isEvent?" org-evt":" org-fld";if(elem.elements.length==0){item.children=elem.subfolders+elem.galleries+elem.collections;
}else{item.children=0;for(var j=0;j<elem.elements.length;j++){var e=elem.elements[j];if(e instanceof zf_Folder)item.children++;else if(self._evalFilter(e))item.children++;
}}include=true;}else if(elem.type==zf_PhotoSet.Gallery){item.id="gal"+elem.id;item.cssClass+=" org-gal";include=self._evalFilter(elem);}else if(elem.type==zf_PhotoSet.Collection){item.id="col"+elem.id;
item.cssClass+=" org-col";include=self._evalFilter(elem);}if(include){if((access.mask&zf_AccessMask.Expires)!=0)item.cssClass+=" org-"+(access.type==zf_AccessType.Private?"expired":"expires");
if(!self._canEdit(elem))item.cssClass+=" org-ro";item.title=zf_stdFormatString('<tt title="{0}"></tt><span>{1}</span>',zf_AccessUtils[access.type].tooltip,zf_stdHtmlEncode(elem.title));
item.action=$.noop;self._oniteminit&&self._oniteminit(item,itemId,elem);tree.insertItem(item,itemId);}}self._sview.update();}this._getFolder(folder,initTree);};zf_TreeBrowser.prototype._evalFilter=function(elem){var filter=this._filter;
if(!filter)return true;if($.isFunction(filter))return filter(elem);if(elem instanceof zf_Folder)return true;if(elem.type==zf_PhotoSet.Gallery)return filter.indexOf("gal")!=-1||filter==elem.id;
if(elem.type==zf_PhotoSet.Collection)return filter.indexOf("col")!=-1||filter==elem.id;;return false;};zf_TreeBrowser.prototype._canEdit=function(elem){;if(typeof(zf_organizer)!="undefined")return zf_organizer.canEdit(elem);
return true;};zf_TreeBrowser.prototype._ensureItem=function(itemId,callback){var item=this._items[!itemId?this._rootId:itemId];if(item!=null){callback&&callback.call(this,item);
return;}var self=this;zf_stdServerRequestEx({method:"GET",sticky:true,url:"/zf/app/edit/edit.asmx",api:"GetElementPath",params:[zf_userId,this._cacheId,itemId],callback:function(result,
error){if(error)callback&&callback.call(self,null);else load(result);}});function load(path){if(path.length==0){callback&&callback.call(self,null);return;}var folder=self._items["fld"+path.shift()];
;self._getFolder(folder,function(error){if(error)callback&&callback.call(self,null);else if(path.length>0)load(path);else callback&&callback.call(self,self._items[itemId]);
});}};zf_TreeBrowser.prototype._getFolder=function(folder,callback){;;var self=this;if(folder.elements.length)callback(null);else if(folder.subfolders||folder.galleries||folder.collections){var list=folder.__tbList;
if(list){list.push(callback);return;}list=folder.__tbList=[callback];var notify=function(error){$.each(list,function(){this.call(null,error);});delete folder.__tbList;
};zf_stdServerRequestEx({method:"GET",sticky:true,url:"/zf/app/edit/edit.asmx",api:"GetFolderElements",params:[zf_userId,this._cacheId,folder.id],callback:function(result,
error){if(error)notify(error);else if(!folder.elements.length){folder.elements=result;self._load(folder);notify(null);}}});}else callback(null);};;zf.$namespace('zf.core',
{EventSource:zf.$class(null,{_ctor:function(){this._handlers={};},on:function(events,handler){if(!handler.guid)handler.guid=$.guid++;var self=this;$.each(events.split(' '),
function(i,e){self._handlers[handler.guid+'#'+e]=handler;});},off:function(events,handler){var self=this;var r={};$.each(events.split(' '),function(i,e){for(var k in self._handlers){if(self._match(k,
e,handler))r[k]=true;}});for(var k in r)delete this._handlers[k];},trigger:function(events){var self=this;var r={};$.each(events.split(' '),function(i,e){for(var k in self._handlers){if(self._match(k,
e,null))r[k]=self._handlers[k];}});var args=[];for(var i=1;i<arguments.length;i++)args.push(arguments[i]);var ret;for(var k in r)ret=this._handlers[k].apply(null,
args);return ret;},_match:function(handlerId,eventName,handler){if(handler!=null){if(!handler.guid||handlerId.indexOf(handler.guid+'#')!=0)return false;}handlerId=handlerId.substr(handlerId.indexOf('#')+1);
if(eventName[0]=='.')return(handlerId.lastIndexOf(eventName)+eventName.length==handlerId.length);else if(eventName.indexOf('.')>0)return handlerId==eventName;else return handlerId==eventName||handlerId.indexOf(eventName+'.')==0;
}})});zf.$namespace('zf.zentobox',{Editor:zf.$class([zf_Control,zf.core.EventSource],{_ctor:function(id,profile,cacheToken,types){zf_Control.prototype.constructor.call(this,
id);zf.core.EventSource.prototype.constructor.call(this);this._cacheToken=cacheToken;this._types=types;this._profile=profile;},show:function(zentoboxData){;var data=$.extend({},
zentoboxData);delete data.type;this._isNew=$.isEmptyObject(data);var self=this;$(window).bind('resize.zbe',this.closure(this.recalcLayout));$(document).bind('keydown.zbe',
function(e){if(e.keyCode==27&&(!('zf_Dialog' in window)||zf_Dialog.top()==self))self.hide();});$('BODY').append($(this.dom()));if('zf_Dialog' in window)zf_Dialog.push(this);
else if('zfl_Curtain' in window)zfl_Curtain.show();else if('zf_Flash' in window)zf_Flash.hide();this._cssBody=$('BODY')[0].style.cssText;$('BODY').css('overflow-x',
'hidden');$('BODY').css('overflow-y','hidden');this._resize();this.$('DIV.zbe-frame:first').addClass('zbe-s-loading').append('<div class="zbe-loading">Loading...</div>');
this.$().show().removeClass('hide');if(!this._scriptLoaded){;var count=2;var onload=function(){if(--count==0){self._scriptLoaded=true;self._load(zentoboxData);}};
zf_stdLoadScript('zentobox-edit.js',onload);zf_stdLoadScript('jqueryui.js',onload);}else{this._load(zentoboxData);}},hide:function(){;var self=this;$('BODY')[0].style.cssText=this._cssBody;
this.$('DIV.zbe-loading').remove();$(window).unbind('.zbe');$(document).unbind('.zbe');this.$().addClass('hide');this.trigger('hide');this._editor=null;this.$('DIV.zbe-main:first').remove();
$('DIV.zbe-dialog').remove();setTimeout(function(){self.$().hide();if('zf_Dialog' in window)zf_Dialog.pop(self);else if('zfl_Curtain' in window)zfl_Curtain.hide();
else if('zf_Flash' in window)zf_Flash.show();;},200);zf.zentobox.Editor.current=null;},recalcLayout:function(){zf_stdDeferCall(this.id+'.recalcLayout',this._resize,
this);},_resize:function(){;var win=$(window);var width=win.width();var height=win.height();var cx=Math.max(Math.min(width-44,1425),950);var cy=Math.max(Math.min(height-44,
990),580);var x=(width-cx)/2-2;var y=(height-cy)/2-2;this.$().css('overflow-x',x<0?'scroll':'hidden');this.$().css('overflow-y',y<0?'scroll':'hidden');if(x<0)x=0;
if(y<0)y=0;this.$('DIV.zbe-frame:first').css('left',x+'px').css('top',y+'px').width(cx).height(cy);this.$('DIV.zbe-body:first').width(cx).height(cy);if(this._resizeImpl!==undefined)this._resizeImpl(cx,
cy);return{cx:cx,cy:cy};}})});$.extend(zf.zentobox.Editor,{current:null});;zf.$namespace('zf.zentobox',{Embed:zf.$class(zf.zentobox.framework.Component,{_ctor:function(id){zf.zentobox.framework.Component.prototype.constructor.call(this,
id);},resize:function(width,height,constraints){return{cx:this.$().width(),cy:this.$().height()};}})});;zf.$namespace('zf.zentobox',{PhotoVideo:zf.$class(zf.zentobox.framework.Component,
{_ctor:function(id,viewId,photo,method,width,height){zf.zentobox.framework.Component.prototype.constructor.call(this,id);this._viewId=viewId;this._photo=photo;this._method=zf_ProcessingMethod.fromCode(method);
this._size={cx:width,cy:height};},init:function(options,profile){;this._options=options;if(options.content.src!=null){this._photo=new zf.zentobox.PhotoVideo.ExternalPhoto(options.content.src,
options.content.width,options.content.height);}if(this._photo==null)return;if(options.options.clickAction==zf.zentobox.PhotoVideo.ClickAction.DimTheLights){var scope=this.$().closest('.zb-scope,BODY');
var list=scope.data('zf.zentobox.PhotoVideo.dimTheLights')||[];list.push(this._photo);scope.data('zf.zentobox.PhotoVideo.dimTheLights',list);}var photo=this._photo,
method=this._method,imageSize=options.layout.imageSize;var plugins=[new zfl_WaitAnimationPlugin(true),new zf_VideoPlayerPlugin(function(c){return c;}),new zf.zentobox.PhotoVideo.PhotoViewPlugin(options)];
if(options.options.autoPlay)plugins[1].autoPlay=true;if(profile=='fullscreen')plugins[1].hideControls=true;plugins[2].onDimLights=this.closure(this._dimLights);this._view=new zf_PhotoView(this._viewId,
plugins,photo);if(this._view.$().hasClass('pv-ready'))return;if(imageSize==-2){method=$.extend({},method,{cx:Math.min(photo.width,options.layout.customWidth),cy:Math.min(photo.height,
options.layout.customHeight)});}else if(imageSize>=0){if((photo.flags&zf_PhotoFlags.Video)!=0)method=zf.zentobox.PhotoVideo.videoSizes[imageSize-2];method=$.extend({},
method,photo.getScaledSize(method));}else{method={code:-1};}if(method.code!=-1){this._view.resize(photo,photo,method);this._view.load(photo,method,true);}this._method=method;
},resize:function(width,height,constraints){;if(this._photo==null)return{cx:width,cy:height};var imageSize=this._options.layout.imageSize,photo=this._photo,method=this._method,
size;if(constraints.fill){method=this._pickFillMethod(photo,width,height);size={cx:width,cy:height};}else if(imageSize==-1){var minWidth=Math.max(photo.getScaledSize(zf_ProcessingMethod.StandardThumbnail).cx,
constraints.minWidth);width=constraints.cellRound(Math.max(Math.min(Math.round(height*photo.width/photo.height),width),minWidth));height=Math.round(width*photo.height/photo.width);
if(this._options.layout.browserScaling){method=photo.pickScaledMethod(width,height);size={cx:method.cx,cy:method.cy};}else{method=this._photo.pickMethod(width,height,
true)||zf_ProcessingMethod.StandardSmallSize;size=photo.getScaledSize(method);method=$.extend({},method,size);}}else{size=photo.getScaledSize(method);method=$.extend({},
this._method,size);}if(method!=this._method)this._view.resize(photo,photo,method);if(this._method.code!=method.code)this._view.load(photo,method,true);this._method=method;
return size;},_dimLights:function(){var list=this.$().closest('.zb-scope,BODY').data('zf.zentobox.PhotoVideo.dimTheLights');for(var index=0;list[index]!=this._photo&&index<list.length;
)index++;zfl_DimLights.standalone(list,index);},_pickFillMethod:function(photo,width,height){var options=[{method:zf_ProcessingMethod.StandardSmallSize,mask:0},{method:zf_ProcessingMethod.StandardMediumSize,
mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},{method:zf_ProcessingMethod.StandardExtraLargeSize,
mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardXXLargeSize,mask:zf_AccessMask.ProtectXXLarge}];var method=options[0].method,scaled=photo.getScaledSize(method);
for(var i=1;i<options.length;i++){var option=options[i];if((option.mask&photo.access.mask)!=0)continue;method=option.method;scaled=photo.getScaledSize(method);if(scaled.cx>=width&&scaled.cy>=height)break;
}return $.extend({},method,{cx:width,cy:height,clip:true,stretch:true});}})});$.extend(zf.zentobox.PhotoVideo,{videoSizes:[$.extend({},zf_ProcessingMethod.VideoPosterFrame,
{cx:360,cy:270,format:'{0} x {1}'}),$.extend({},zf_ProcessingMethod.VideoPosterFrame,{cx:480,cy:360,format:'{0} x {1}'}),$.extend({},zf_ProcessingMethod.VideoPosterFrame,
{cx:560,cy:420,format:'{0} x {1}'}),$.extend({},zf_ProcessingMethod.VideoPosterFrame,{cx:720,cy:540,format:'{0} x {1}'})],ClickAction:{None:0,DimTheLights:1,OpenGallery:2,
GoToUrl:3},HoverAction:{None:0,OverlayText:1,DimUntilHovered:2}});$.extend(zf.zentobox.PhotoVideo,{PhotoViewPlugin:zf.$class(null,{_ctor:function(data){this._data=data;
var HoverAction=zf.zentobox.PhotoVideo.HoverAction,hoverAction=data.options.hoverAction,ClickAction=zf.zentobox.PhotoVideo.ClickAction,clickAction=data.options.clickAction;
this._undim=hoverAction==HoverAction.DimUntilHovered;this._overlay=hoverAction==HoverAction.OverlayText;this._dimLights=clickAction==ClickAction.DimTheLights;this._openGallery=clickAction==ClickAction.OpenGallery;
},getInnerContent:function(id,context){var photo=context,hoverAction=this._data.options.hoverAction;if(this._undim)return '<span class="pv-zb-dim"></span>';else if(this._overlay){var title=this._data.content.title||context.title;
var caption=this._data.content.caption!=null?zf_stdHtmlEncode(this._data.content.caption):context.caption;if((title&&title.length)||(caption&&caption.length)){var html=['<span class="pv-zb-text">',
'<span class="pv-zb-text-bg"></span>'];if(title&&title.length)html.push('<h5>',zf_stdHtmlEncode(title),'</h5>');if(caption&&caption.length)html.push('<p>',caption,
'</p>');html.push('</span>');return html.join('');}}return '';},onCreateDom:function(view,outer,inner,context,isNew){if(!isNew)$(inner).append(this.getInnerContent(view.id,
context));$(inner).mousedown(function(e){if(!zf_stdIsLeftButton(e)){e.preventDefault();e.stopPropagation();}}).bind('contextmenu',zf_stdFalse);if(context&&context.video&&(this._dimLights||this._openGallery)){var self=this;
$(inner).unbind('click').click(function(e){e.stopPropagation();e.stopImmediatePropagation();if(self._dimLights){self.onDimLights&&self.onDimLights();e.preventDefault();
}});}},onDestroyDom:function(view,outer,inner,context){}})});$.extend(zf.zentobox.PhotoVideo,{ExternalPhoto:zf.$class(zf_Photo,{_ctor:function(url,width,height){zf_Photo.prototype.constructor.call(this);
this.requested=this.loaded=true;this.id=Number.MAX_VALUE;this.width=width;this.height=height;this.src=url;this.gallery=null;this.photoSet=null;this.owner=null;this.access=new zf_AccessInfo(null,
zf_AccessType.Public,zf_AccessMask.None);this.cdnPath="";},getHref:function(){return this.src;},getInternalUrl:function(){return this.src;},getExternalUrl:function(){return this.src;
}})});;;zf.$namespace('zf.zentobox',{HomepageSlideshow:zf.$class(zf.zentobox.framework.Component,{_ctor:function(id,init){zf.zentobox.framework.Component.prototype.constructor.call(this,
id);this._viewId=init.viewId;this._parameters=init.parameters;this._slideshowvars=init.slideshowvars;this._clickTarget=init.clickTarget;this._photoSet=init.photoSet;
this._firstPhoto=init.photo;this._maxWidth=init.maxWidth;this._maxHeight=init.maxHeight;this._renderContext=init.renderContext;this._isPreview=init.renderContext.isPreview;
this._slideshowvars.keyring=zf_stdGetCookie("zf_keyring");this._presentationMode=this._getPresentationMode();this._needGenerateMarkup=null;var PM=zf.zentobox.HomepageSlideshow.PresentationMode;
switch(this._presentationMode){case PM.Flash:delete this._slideshowvars.photoSetToken;delete this._slideshowvars.ownerId;this._needGenerateMarkup=true;break;case PM.Html5:this._photoSet=zfl_stdTransformResponse(this._photoSet);
this._psToken=this._slideshowvars.photoSetToken;this._ownerId=parseInt(this._slideshowvars.ownerId);this._needGenerateMarkup=true;break;case PM.PhotoView:var photo=this._firstPhoto;
var plugins=[new zfl_WaitAnimationPlugin(true)];if(photo&&photo.video)plugins.push(new zf_VideoPlayerPlugin(function(c){return c;}));this._view=new zf_PhotoView(this._viewId,
plugins,photo);this._needGenerateMarkup=false;break;default:;break;};zf_stdMakeMethodsDeferred(this,this.id,["_generateFlash","_generateHtml5"]);},init:function(options){;
if(this._renderContext.isFixedWidth)this.resize(this._renderContext.width,this._maxHeight,{maxWidth:this._maxWidth,maxHeight:this._maxHeight});},resize:function(availWidth,
availHeight,constraints){;;;var size=this._calculateLayout(availWidth,availHeight,constraints);var PM=zf.zentobox.HomepageSlideshow.PresentationMode;switch(this._presentationMode){case PM.Flash:this.$().width(size.cx).height(size.cy);
if(this._needGenerateMarkup){this._needGenerateMarkup=false;this._generateFlash(size.cx,size.cy);}break;case PM.Html5:this._slideshow&&this._slideshow.resize(size.cx,
size.cy);this.$().width(size.cx).height(size.cy);if(this._needGenerateMarkup){this._needGenerateMarkup=false;this._generateHtml5(size.cx,size.cy);}break;case PM.PhotoView:var photo=this._firstPhoto;
var method;if(photo){method=photo.video?$.extend({},zf_ProcessingMethod.VideoPosterFrame,size):photo.pickScaledMethod(size.cx,size.cx);size=photo.getScaledSize(method);
}else{method=zf_ProcessingMethod.StandardSmallSize;size=method;}this.$().width(size.cx).height(size.cy);if(photo){this._view.resize(photo,photo,method);if(this._view.__zfl_method==null||this._view.__zfl_method!=method){this._view.__zfl_method=method;
this._view.load(photo,method);}}else{this.$(".pv-inner").width(size.cx).height(size.cy);}break;default:;break;}return size;},toggleEditorShadow:function(enable){if(enable&&this.$(".zbe-border").length==0)this.$().append("<div class='zbe-border'></div>");
this.$().toggleClass('zbe-shadow',enable);},_calculateLayout:function(availWidth,availHeight,constraints){var sizingMode=this._parameters.layout.sizingMode;if(sizingMode==zf.zentobox.HomepageSlideshow.SizingMode.Custom){var customWidth=this._parameters.layout.customWidth;
var customHeight=this._parameters.layout.customHeight;if(!this._isPreview)return{cx:customWidth,cy:customHeight};var customRatio=Math.max(1,customWidth*1.0/availWidth,
customHeight*1.0/availHeight);return{cx:customWidth/customRatio,cy:customHeight/customRatio};}var photo=this._firstPhoto;constraints=constraints||{};var cellWidth=constraints.cellWidth?constraints.cellWidth:1;
var cellRoundDown=function(w){return w-w%cellWidth;};var cellRoundUp=function(w){return(w/cellWidth)*cellWidth+((w%cellWidth==0)?0:cellWidth);};;var bankersRound=function(x){var r=Math.round(x);
if(r%2==0||r==x)return r;var f=Math.floor(x);return x-f==0.5?f:r;};var cMin={cx:constraints.minWidth||0,cy:constraints.minHeight||0};var cMax={cx:availWidth,cy:availHeight};
;var iMin={cx:cellRoundUp(320),cy:240};var iMax={cx:cellRoundDown(this._maxWidth),cy:this._maxHeight};;var min={};min.cx=cellRoundUp(Math.max(cMin.cx,iMin.cx));min.cy=Math.max(cMin.cy,
iMin.cy);;var max={};max.cx=cellRoundDown(Math.min(cMax.cx,iMax.cx));max.cy=Math.min(cMax.cy,iMax.cy);;max.cx=Math.max(max.cx,min.cx);max.cy=Math.max(max.cy,min.cy);
;var cx=photo?photo.width:zf_ProcessingMethod.StandardSmallSize.cx;var cy=photo?photo.height:zf_ProcessingMethod.StandardSmallSize.cy;var h2w=cy*1.0/cx;var ratio=max.cx/cx;
if(cy*ratio>max.cy)ratio=max.cy/cy;cx=Math.max(1,bankersRound(cx*ratio));cy=Math.max(1,bankersRound(cy*ratio));;cx=Math.max(iMin.cx,cellRoundDown(cx));cy=Math.max(iMin.cy,
bankersRound(cx*h2w));;return{cx:cx,cy:cy};},_getPresentationMode:function(){var PM=zf.zentobox.HomepageSlideshow.PresentationMode;if(!this._firstPhoto)return PM.PhotoView;
var isFlashAvailable=zf_Flash.installed(9);if(!isFlashAvailable){var result;result=PM.PhotoView;return result;}if(!zf_Flash.isSafeDomain())return PM.PhotoView;return PM.Flash;
},_generateFlash:function(width,height){var isTransparent=this._slideshowvars.bgcolor=="transparent";var markup=zf_Flash.createHtml(this.id+"-flash","pv-img pv-flash flash-restart",
"http://"+zf_cdnHost+"/zf/code/slideshow/5.9.1/homepage.swf",this._slideshowvars,isTransparent,width,height);$(document.getElementById(this._viewId)).replaceWith(markup);
;},_generateHtml5:function(width,height){var markup=zfl_Slideshow.createHtml(this.id+"-html5","pv-img pv-html5",this._slideshowvars.bgcolor,width,height,false);$(document.getElementById(this._viewId)).replaceWith(markup);
this._slideshow=new zfl_Slideshow(this.id+'-html5',this.minWidth,this.minHeight,width,height,this._slideshowvars,this._photoSet,this._psToken,$.extend({},new zf_User(),
{id:this._ownerId}),false,null);this._slideshow.onclick=this.closure(this.onClick);this._slideshow.init();;},onClick:function(id){;if(!this._clickTarget)return;id=this._toHex(id.toString()).slice(-8);
var url=zf_stdFormatString(this._clickTarget,id);;if(!this._isPreview)location.href=url;else window.open(url);},_toHex:function(num){var dec=[];for(var i=0;i<num.length;
i++)dec.unshift(num.charCodeAt(i)-48);var bin=[];while(dec.length>0){var x=dec[0],b=x%2;bin.push(b);dec[0]=(x-b)/2;for(i=1;i<dec.length;i++){x=dec[i];b=x%2;if(b==1)dec[i-1]+=5;
dec[i]=(x-b)/2;}if(dec[i-1]==0)dec.pop();}while((bin.length%4)!=0)bin.push(0);var hex="";var map={"0000":"0","1000":"1","0100":"2","1100":"3","0010":"4","1010":"5",
"0110":"6","1110":"7","0001":"8","1001":"9","0101":"a","1101":"b","0011":"c","1011":"d","0111":"e","1111":"f"};while(bin.length>0)hex=map[bin.splice(0,4).join("")]+hex;
return hex;}})});$.extend(zf.zentobox.HomepageSlideshow,{SizingMode:{Auto:0,Custom:1},PresentationMode:{PhotoView:0,Html5:1,Flash:2}});;;zf.$namespace('zf.zentobox',{EmbeddableSlideshow:zf.$class(zf.zentobox.framework.Component,
{_ctor:function(id,init){zf.zentobox.framework.Component.prototype.constructor.call(this,id);this._viewId=init.viewId;this._parameters=init.parameters;this._slideshowvars=init.slideshowvarsFlash;
this._slideshowvarsHtml5=init.slideshowvarsHtml5;this._photoSet=init.photoSet;this._firstPhoto=init.photo;this._maxWidth=init.maxWidth;this._maxHeight=init.maxHeight;
this._renderContext=init.renderContext;this._isPreview=init.renderContext.isPreview;this._slideshowvars.keyring=zf_stdGetCookie("zf_keyring");this._presentationMode=this._getPresentationMode();
this._needGenerateMarkup=null;var PM=zf.zentobox.EmbeddableSlideshow.PresentationMode;switch(this._presentationMode){case PM.Flash:this._needGenerateMarkup=true;
break;case PM.Html5:this._psToken=this._slideshowvarsHtml5.psToken;delete this._slideshowvarsHtml5.psToken;this._needGenerateMarkup=true;break;case PM.PhotoView:var photo=this._firstPhoto;
var plugins=[new zfl_WaitAnimationPlugin(true)];if(photo&&photo.video)plugins.push(new zf_VideoPlayerPlugin(function(c){return c;}));this._view=new zf_PhotoView(this._viewId,
plugins,photo);this._needGenerateMarkup=false;break;default:;break;};zf_stdMakeMethodsDeferred(this,this.id,["_generateFlash","_generateHtml5"]);},init:function(options){;
if(this._renderContext.isFixedWidth)this.resize(this._renderContext.width,this._maxHeight,{maxWidth:this._maxWidth,maxHeight:this._maxHeight});},resize:function(availWidth,
availHeight,constraints){;;;var size=this._calculateLayout(availWidth,availHeight,constraints);var PM=zf.zentobox.EmbeddableSlideshow.PresentationMode;switch(this._presentationMode){case PM.Flash:this.$().width(size.cx).height(size.cy);
if(this._needGenerateMarkup){this._needGenerateMarkup=false;this._generateFlash(size.cx,size.cy);}break;case PM.Html5:this._slideshow&&this._slideshow.resize(size.cx,
size.cy);this.$().width(size.cx).height(size.cy);if(this._needGenerateMarkup){this._needGenerateMarkup=false;this._generateHtml5(size.cx,size.cy);}break;case PM.PhotoView:var photo=this._firstPhoto;
var method;if(photo){method=photo.video?$.extend({},zf_ProcessingMethod.VideoPosterFrame,size):photo.pickScaledMethod(size.cx,size.cx);size=photo.getScaledSize(method);
}else{method=zf_ProcessingMethod.StandardSmallSize;size=method;}this.$().width(size.cx).height(size.cy);if(photo){this._view.resize(photo,photo,method);if(this._view.__zfl_method==null||this._view.__zfl_method!=method){this._view.__zfl_method=method;
this._view.load(photo,method);}}else{this.$(".pv-inner").width(size.cx).height(size.cy);}break;default:;break;}return size;},toggleEditorShadow:function(enable){if(enable&&this.$(".zbe-border").length==0)this.$().append("<div class='zbe-border'></div>");
this.$().toggleClass('zbe-shadow',enable);},_calculateLayout:function(availWidth,availHeight,constraints,ignorePreview){var sizingMode=this._parameters.layout.sizingMode;
if(sizingMode==zf.zentobox.EmbeddableSlideshow.SizingMode.Custom){var customWidth=this._parameters.layout.customWidth;var customHeight=this._parameters.layout.customHeight;
if(ignorePreview||!this._isPreview)return{cx:customWidth,cy:customHeight};var customRatio=Math.max(1,customWidth*1.0/availWidth,customHeight*1.0/availHeight);return{cx:customWidth/customRatio,
cy:customHeight/customRatio};}var photo=this._firstPhoto;constraints=constraints||{};var cellWidth=constraints.cellWidth?constraints.cellWidth:1;var cellRoundDown=function(w){return w-w%cellWidth;
};var cellRoundUp=function(w){return(w/cellWidth)*cellWidth+((w%cellWidth==0)?0:cellWidth);};;var bankersRound=function(x){var r=Math.round(x);if(r%2==0||r==x)return r;
var f=Math.floor(x);return x-f==0.5?f:r;};var cMin={cx:constraints.minWidth||0,cy:constraints.minHeight||0};var cMax={cx:availWidth,cy:availHeight};;var iMin={cx:cellRoundUp(320),
cy:240};var iMax={cx:cellRoundDown(this._maxWidth),cy:this._maxHeight};;var min={};min.cx=cellRoundUp(Math.max(cMin.cx,iMin.cx));min.cy=Math.max(cMin.cy,iMin.cy);
;var max={};max.cx=cellRoundDown(Math.min(cMax.cx,iMax.cx));max.cy=Math.min(cMax.cy,iMax.cy);;max.cx=Math.max(max.cx,min.cx);max.cy=Math.max(max.cy,min.cy);;var cx=photo?photo.width:zf_ProcessingMethod.StandardSmallSize.cx;
var cy=photo?photo.height:zf_ProcessingMethod.StandardSmallSize.cy;var h2w=cy*1.0/cx;var ratio=max.cx/cx;if(cy*ratio>max.cy)ratio=max.cy/cy;cx=Math.max(1,bankersRound(cx*ratio));
cy=Math.max(1,bankersRound(cy*ratio));;cx=Math.max(iMin.cx,cellRoundDown(cx));cy=Math.max(iMin.cy,bankersRound(cx*h2w));;return{cx:cx,cy:cy};},_getPresentationMode:function(){var PM=zf.zentobox.EmbeddableSlideshow.PresentationMode;
if(!this._firstPhoto)return PM.PhotoView;var isFlashAvailable=zf_Flash.installed(9);if(!isFlashAvailable){if(this._isPreview)return PM.PhotoView;var result;result=PM.PhotoView;
return result;}if(!zf_Flash.isSafeDomain())return PM.PhotoView;return PM.Flash;},_generateFlash:function(width,height){var isTransparent=this._slideshowvars.transparent=="1";
var markup=zf_Flash.createHtml(this.id+"-flash","pv-img pv-flash flash-restart","http://"+zf_cdnHost+"/zf/code/slideshow/5.9.1/embedded.swf",this._slideshowvars,
isTransparent,width,height);$(document.getElementById(this._viewId)).replaceWith(markup);;},_generateHtml5:function(width,height){var bgColor=this._parameters.options.isBackgroundTransparent?"transparent":this._parameters.options.bgColor;
var markup=zfl_Slideshow.createHtml(this.id+"-html5","pv-img pv-html5",bgColor,width,height,false);$(document.getElementById(this._viewId)).replaceWith(markup);this._slideshow=new zfl_Slideshow(this.id+'-html5',
this.minWidth,this.minHeight,width,height,this._slideshowvarsHtml5,this._photoSet,this._psToken,null,false,null);this._slideshow.init();;}})});$.extend(zf.zentobox.EmbeddableSlideshow,
{SizingMode:{Auto:0,Custom:1},PresentationMode:{PhotoView:0,Html5:1,Flash:2}});;function zf_MouseTracker(node){if(!(node instanceof jQuery))node=$(node);var self=this;var tracking=false;
this._mousedown=function(e){e.stopPropagation();e.preventDefault();if(!zf_stdIsLeftButton(e))return;if(self.onbegintrack!=null&&!self.onbegintrack(e))return;if(document.addEventListener){document.addEventListener('mousemove',
self._mousemove,true);document.addEventListener('mouseup',self._mouseup,true);}else if(node[0].setCapture){node.mousemove(self._mousemove).mouseup(self._mouseup);
node[0].setCapture();}self.anchorX=e.pageX;self.anchorY=e.pageY;tracking=true;};this._mousemove=function(e){e=jQuery.event.fix(e);e.stopPropagation();if(tracking&&self.ontrack!=null)self.ontrack(e);
};this._mouseup=function(e){e=jQuery.event.fix(e);e.stopPropagation();if(!tracking)return;if(self.ontrack!=null)self.ontrack(e);if(document.removeEventListener){document.removeEventListener('mousemove',
self._mousemove,true);document.removeEventListener('mouseup',self._mouseup,true);}else if(node[0].releaseCapture){node[0].releaseCapture();node.unbind('mousemove mouseup');
}if(self.onendtrack!=null)self.onendtrack(e);tracking=false;};node.mousedown(this._mousedown);};;zf.$namespace('zf.zentobox.slideshow',{SlideshowCore:zf.$class([zf_Control,
zf.core.EventSource],{_ctor:function(id,photoList,options){;zf_Control.prototype.constructor.call(this,id);zf.core.EventSource.prototype.constructor.call(this);this._=zf.zentobox.slideshow.SlideshowCore;
this._photoList=photoList;this._lengthKnown=options.lengthKnown;this._firstImage=options.firstImage;this._duration=(options.slideDuration||5)*1000;this._transition=options.transition!=null?options.transition:4;
this._soundtrack=options.soundtrack;this._soundtrackLooped=options.soundtrackLooped;this._soundtrackPhotoSetId=options.soundtrackPhotoSetId;this._fill=!!options.fill;
this._loop=!!options.loop;this._random=!!options.random;this._pageSize=photoList._page;this._idx=[];this._commands=[];this._loaders=[];this._haveMusic=false;this._volume=100;
this._restartTrack=false;var self=this;photoList.onshrink=function(){;self._lengthKnown=true;self._initIndexMap(this.length);};photoList.get(0);var noImage=new zf_PhotoImage(-1),
noMethod=zf_ProcessingMethod.StandardSmallSize;var plugins=[];this.$().prepend(['<div class="ssc-bg"></div>','<div class="ssc-plane ssc-hide">',zf_PhotoView.createHtml(id+'-pva',
null,null,plugins,zf_PhotoView.EMPTY_CONTEXT,noImage,noMethod,false,0,0),'</div>','<div class="ssc-plane ssc-hide">',zf_PhotoView.createHtml(id+'-pvb',null,null,
plugins,zf_PhotoView.EMPTY_CONTEXT,noImage,noMethod,false,0,0),'</div>'].join(''));this.$().addClass('ssc');if(this._soundtrack!=null&&zf_Flash.installed(9,0,115)&&zf_Flash.isSafeDomain()){var playerUrl='/zf/code/slideshow/6.5.0/music.swf';
if(location.protocol!='https')playerUrl='http://'+zf_cdnHost+playerUrl;var jsproxy=this.clientObject+'_cb';window[jsproxy]={OnEndTrack:function(){if(self._soundtrackLooped)self._playTrack(self._soundtrackPhotoSetId,
self._soundtrack);}};var element=document.createElement('DIV');element.className='ssc-flash-c';this.dom().appendChild(element);element.innerHTML=zf_Flash.createHtml(this.id+'-music',
'flash-restart',playerUrl,{serverurl:location.hostname,js_proxy:jsproxy},true,1,1);this._haveMusic=this.dom('music')!=null;}this._pva=new zf_PhotoView(id+'-pva',
plugins,zf_PhotoView.EMPTY_CONTEXT);this._pvb=new zf_PhotoView(id+'-pvb',plugins,zf_PhotoView.EMPTY_CONTEXT);this.$().mousedown(function(e){if(!zf_stdIsLeftButton(e)){e.preventDefault();
e.stopPropagation();}}).bind('contextmenu',zf_stdFalse);this._transitions={};if('animation' in document.body.style||'webkitAnimation' in document.body.style||'mozAnimation' in document.body.style){this._transitions[this._.FadeIn]=this._transitionFadeIn;
this._transitions[this._.None]=this._transitionSwap;this._transitions[this._.FadeBlack]=this._transitionFadeThroughBlack;this._transitions[this._.FadeWhite]=this._transitionFadeThroughWhite;
this._transitions[this._.CrossFade]=this._transitionCrossFade;this._transitions[this._.Slide]=this._transitionSlide;}else{this._transitions[this._.FadeIn]=this._transitionFadeInDownlevel;
this._transitions[this._.None]=this._transitionSwap;this._transitions[this._.FadeBlack]=this._transitionFadeThroughBlackDownlevel;this._transitions[this._.FadeWhite]=this._transitionFadeThroughWhiteDownlevel;
this._transitions[this._.CrossFade]=this._transitionCrossFadeDownlevel;this._transitions[this._.Slide]=this._transitionSlideDownlevel;}this._animationEndEvent=('webkitAnimation' in document.body.style)?'webkitAnimationEnd':'animationend';
this.state=this._.Initialized;},resize:function(cx,cy){;this.$().width(cx).height(cy);this._cx=cx;this._cy=cy;var self=this;this._command(function(){;var pva=self._pva,
photo=pva.getPhoto();if(!photo||photo.id<0)return;var method=self._getMethod(photo),loader=self._getLoader(photo,method),rect=self._getViewRect(pva,method);pva.$().css({left:rect.left+'px',
top:rect.top+'px'}).width(rect.width).height(rect.height);pva.load(loader);self._resting(self._slideTimeout!=null);});return{cx:cx,cy:cy};},start:function(){;;this.state=this._.Loading;
this._paused=false;this.trigger('statechange',this.state,this._paused);var photoList=this._photoList,self=this;zf_Loadable.notifyLoaded(photoList.get(0),function(){zf_stdDeferCall(null,
function(){!self._lengthKnown&&self._initIndexMap(self._pageSize);self._currentIndex=-1;self._seek(0,self._.FadeIn);self._haveMusic&&self._playTrack(self._soundtrackPhotoSetId,
self._soundtrack);},null);});},hasMusic:function(){return this._haveMusic;},next:function(autoNext){;if(this.state==this._.Resting||this.state==this._.Pending||this.state==this._.Animating){var self=this;
this._command(function(){self._slideTimeout&&clearTimeout(self._slideTimeout);self._slideTimeout=null;self._seek(self._currentIndex+1,null,autoNext);});}},prev:function(){;
if(this.state==this._.Resting||this.state==this._.Pending||this.state==this._.Animating){var self=this;this._command(function(){self._slideTimeout&&clearTimeout(self._slideTimeout);
self._slideTimeout=null;self._seek(self._currentIndex-1);});}},canNext:function(){return this._loop||!this._lengthKnown||this._currentIndex<this._idx.length-1;},
canPrev:function(){return this._loop&&this._lengthKnown||this._currentIndex>0;},pause:function(){;if(this._paused)return;this._slideTimeout&&clearTimeout(this._slideTimeout);
this._slideTimeout=null;this._paused=true;this._commands=[];this._haveMusic&&this._pauseTrack();},resume:function(){;if(!this._paused)return;this._paused=false;if(this._restartTrack){this._playTrack(this._soundtrackPhotoSetId,
this._soundtrack);this._restartTrack=false;}else if(this._haveMusic)this._resumeTrack();if(this.state==this._.Resting)this.next();},volume:function(vol){this._volume=vol;
this._setVolume(vol);},_seek:function(index,transition,autoNext){;transition=transition||this._transition;if(transition==this._.Random)transition=2+Math.floor(Math.random()*4);
var currentIndex=this._currentIndex,increment=index>currentIndex?1:-1,photoList=this._photoList,self=this;this._getPhoto(index,increment,function(index,photo){if(self.state!=self._.Loading&&self.state!=self._.Pending)return;
if(!photo){;self._resting();return;}if(autoNext&&!self._loop&&index<self._currentIndex){self.pause();self._resting();self._restartTrack=self._haveMusic;return;}self._currentIndex=index;
self._resting(true);;var method=self._getMethod(photo),loader=self._getLoader(photo,method);loader.onload=function(){if(index!=self._currentIndex)return;if(document.getElementById(self.id)==null)return;
self._animate(loader,increment,transition);self._prefetch(index,increment,self._.Lookahead);};loader.start();});},_prefetch:function(index,increment,count){;var self=this;
this._getPhoto(index+increment,increment,function(index,photo){if(photo==null)return;;var method=self._getMethod(photo),loader=self._getLoader(photo,method);if(loader.state==zf_PhotoLoader.Initialized)loader.start();
if(--count>0)self._prefetch(index,increment,count);});},_getPhoto:function(index,increment,done,start){;start=start||index;var photoList=this._photoList,length=this._idx.length,
self=this;do{if(index>=length){if(this._lengthKnown)index=index%length;else{zf_Loadable.notifyLoaded(photoList.get(length),function(){zf_stdDeferCall(null,function(){!self._lengthKnown&&self._initIndexMap(length+self._pageSize);
self._getPhoto(index,increment,done,start);},null);});return;}}else if(index<0){if(!this._lengthKnown){done(start,null);return;}index+=length;};;var mapped=this._idx[index];
if(mapped<0){index+=increment;if(index==start){done(start,null);return;}}}while(mapped<0);zf_Loadable.notifyLoaded(photoList.get(mapped),function(photo){if(self._isUsable(photo)){done(index,
photo);return;}self._idx[index]=-1;index+=increment;if(index==start){done(start,null);return;}self._getPhoto(index,increment,done,start);});},_command:function(command){;
if(this.state==this._.Resting&&this._commands.length==0){this._pending();command.call(this);return;}this._commands.push(command);},_resting:function(keepTimeout){;
var command=this._commands.shift();if(command){this._pending();command.call(this);return;}if(!keepTimeout){this._slideTimeout&&clearTimeout(this._slideTimeout);this._slideTimeout=null;
this._waitTimeout&&clearTimeout(this._waitTimeout);this._waitTimeout=null;}this.state=this._.Resting;this.trigger('statechange',this.state,this._paused);if(this._paused)return;
if(!keepTimeout)this._slideTimeout=setTimeout(this.closure(this.next,true),this._duration);},_pending:function(){;var self=this;this._waitTimeout=setTimeout(function(){self.trigger('wait',
true);},3000);this.state=this._.Pending;this.trigger('statechange',this.state,this._paused);},_animate:function(loader,increment,transition){;this.state=this._.Animating;
this.trigger('statechange',this.state,this._paused);this._waitTimeout&&clearTimeout(this._waitTimeout);this._waitTimeout=null;this.trigger('wait',false);var self=this;
;this._pvb.load(loader);setTimeout(function(){self._transitions[transition].call(self,increment,function(){var pv=self._pva;self._pva=self._pvb;self._pvb=pv;self._resting();
});},90);},_initIndexMap:function(length){;var idx=this._idx,start=idx.length;for(var i=start;i<length;i++)idx[i]=i;if(this._random){for(i=length-1;i>start;i--){var k=start+Math.floor(Math.random()*(i-start+1)),
x=idx[k];idx[k]=idx[i];idx[i]=x;}}},_getMethod:function(photo){if(this._fill)return this._pickFillMethod(photo,this._cx,this._cy);else return photo.pickScaledMethod(this._cx,
this._cy);},_getLoader:function(photo,method){var loaders=this._loaders;for(var i=0;i<loaders.length;i++){var loader=loaders[i],lp=loader.getPhoto(),lm=loader.getMethod();
if(lp.id==photo.id&&lm.code==method.code&&lm.cx==method.cx&&lm.cy==method.cy){loaders.splice(i,1);break;}loader=null;}loaders.push(loader=loader||new zf_PhotoLoader(photo,
method));if(loaders.length>this._.Lookahead*5)loaders.shift();return loader;},_isUsable:function(photo){return photo.access.type==zf_AccessType.Public&&!photo.video;
},_pickFillMethod:function(photo,width,height){var options=[{method:zf_ProcessingMethod.StandardSmallSize,mask:0},{method:zf_ProcessingMethod.StandardMediumSize,
mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},{method:zf_ProcessingMethod.StandardExtraLargeSize,
mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardXXLargeSize,mask:zf_AccessMask.ProtectXXLarge}];var method=options[0].method,scaled=photo.getScaledSize(method);
for(var i=1;i<options.length;i++){var option=options[i];if((option.mask&photo.access.mask)!=0)continue;method=option.method;scaled=photo.getScaledSize(method);if(scaled.cx>=width&&scaled.cy>=height)break;
}return $.extend({},method,{cx:width,cy:height,clip:true,stretch:true});},_getCdnUrl:function(url){if(location.protocol!="https:")url="http://"+zf_cdnHost+url;return url;
},_getViewRect:function(view,method){method=method||view.getMethod();return{left:Math.round((this._cx-method.cx)/2),top:Math.round((this._cy-method.cy)/2),width:method.cx,
height:method.cy};},_animationEnd:function(node,timeout,callback){var event=this._animationEndEvent;function done(){if(timer){clearTimeout(timer);timer=null;node.unbind(event);
callback&&callback();}}var timer=setTimeout(done,timeout);node.bind(event,done);},_transitionSwap:function(increment,done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),
plb=pvb.$().closest('.ssc-plane'),rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',
0);plb.css('z-index',1).removeClass('ssc-hide');setTimeout(function(){pla.addClass('ssc-hide');},50);done&&zf_stdDeferCall(null,done,null);},_transitionFadeIn:function(increment,
done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',
top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',0);plb.css('z-index',1).addClass('ssc-fade-in').removeClass('ssc-hide');setTimeout(function(){plb.removeClass('ssc-fade-in');
done&&done();},1000);},_transitionFadeInDownlevel:function(increment,done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),
rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',0);plb.css('z-index',1).hide().removeClass('ssc-hide');
plb.fadeIn(1000,function(){done&&done();});},_transitionCrossFade:function(increment,done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),
rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',0).addClass('scc-fade-out');
plb.css('z-index',1).addClass('ssc-fade-in').removeClass('ssc-hide');var count=2;function complete(){if(--count>0)return;pla.addClass('ssc-hide').removeClass('ssc-fade-out');
plb.removeClass('ssc-fade-in');done&&done();}this._animationEnd(pla,1500,complete);this._animationEnd(plb,1500,complete);},_transitionCrossFadeDownlevel:function(increment,
done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',
top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',0);plb.css('z-index',1).hide().removeClass('ssc-hide');var count=2;function complete(){if(--count>0)return;
pla.addClass('ssc-hide').css('display','');done&&done();}pla.fadeOut(1000,complete);plb.fadeIn(1000,complete);},_transitionFadeThroughWhite:function(increment,done){;
this._transitionFadeThroughColor('#FFF',done);},_transitionFadeThroughWhiteDownlevel:function(increment,done){;this._transitionFadeThroughColorDownlevel('#FFF',done);
},_transitionFadeThroughBlack:function(increment,done){;this._transitionFadeThroughColor('#000',done);},_transitionFadeThroughBlackDownlevel:function(increment,done){;
this._transitionFadeThroughColorDownlevel('#000',done);},_transitionFadeThroughColor:function(color,done){var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),
plb=pvb.$().closest('.ssc-plane'),rect=this._getViewRect(pvb),self=this;pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);
this.$('DIV.ssc-bg').css('background',color);pla.css('z-index',0).addClass('ssc-fade-out-fast');this._animationEnd(pla,600,function(){pla.addClass('ssc-hide').removeClass('ssc-fade-out-fast');
});setTimeout(function(){plb.css('z-index',1).addClass('ssc-fade-in-fast').removeClass('ssc-hide');self._animationEnd(plb,600,function(){plb.removeClass('ssc-fade-in-fast');
done&&done();});},500);},_transitionFadeThroughColorDownlevel:function(color,done){var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),
rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);this.$('DIV.ssc-bg').css('background',color);
pla.css('z-index',0);pla.fadeOut(750);setTimeout(function(){pla.addClass('ssc-hide').css('display','');plb.css('z-index',1).hide().removeClass('ssc-hide');plb.fadeIn(750,
function(){done&&done();});},650);},_transitionSlide:function(increment,done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),
rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);var dir=increment>0?'left':'right',cls='ssc-slide-'+dir;
pla.addClass(cls);plb.css('z-index',1).css(dir,'100%').addClass(cls);plb.removeClass('ssc-hide');var count=2;function complete(){if(--count>0)return;pla.addClass('ssc-hide').removeClass(cls).css('z-index',
0);plb.removeClass(cls).css(dir,'');done&&done();}this._animationEnd(pla,900,complete);this._animationEnd(plb,900,complete);},_transitionSimpleSlide:function(increment,
done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',
top:rect.top+'px'}).width(rect.width).height(rect.height);pla.css('z-index',0);plb.css('z-index',1).css('translateX',increment*this._cx).removeClass('ssc-hide');
pla.animate({'translateX':-increment*this._cx},800);plb.animate({'translateX':0},800,null,function(){pla.addClass('ssc-hide').css('translateX','');plb.css('translateX',
'');done&&done();});},_transitionSlideDownlevel:function(increment,done){;var pva=this._pva,pvb=this._pvb,pla=pva.$().closest('.ssc-plane'),plb=pvb.$().closest('.ssc-plane'),
rect=this._getViewRect(pvb);pvb.$().css({left:rect.left+'px',top:rect.top+'px'}).width(rect.width).height(rect.height);var dir=increment>0?'left':'right';pla.css('z-index',
0).css(dir,'0%');plb.css('z-index',1).css(dir,'100%').removeClass('ssc-hide');var aa={},ba={};aa[dir]='-100%';ba[dir]='0%';pla.animate(aa,800);plb.animate(ba,800,
null,function(){pla.addClass('ssc-hide').css(dir,'');plb.css(dir,'');done&&done();});},_playTrack:function(photoSetId,soundtrack){var self=this;function tryIt(){if(!self._invokeFlash('PlayTrack',
photoSetId,soundtrack))setTimeout(tryIt,500);self._setVolume(self._volume);}tryIt();},_pauseTrack:function(){this._invokeFlash('PauseTrack');},_resumeTrack:function(){this._invokeFlash('ResumeTrack');
},_setVolume:function(volume){this._invokeFlash('SetVolume',volume);},_invokeFlash:function(method){var args=[];for(var i=1;i<arguments.length;i++)args.push(arguments[i]);
try{var m=this.dom('music');if(!m){;return false;}m[method].apply(m,args);return true;}catch(e){;return false;}}})});$.extend(zf.zentobox.slideshow.SlideshowCore,
{Initialized:0,Loading:1,Resting:2,Touching:3,Pending:4,Animating:5,FadeIn:-1,None:0,Random:1,FadeBlack:2,FadeWhite:3,CrossFade:4,Slide:5,Lookahead:3});;zf.$namespace('zf.zentobox',
{BackgroundSlideshow:zf.$class(zf.zentobox.framework.Component,{_ctor:function(id,init){zf.zentobox.framework.Component.prototype.constructor.call(this,id);var photoSet=this._photoSet=init.photoSet;
if(photoSet!=null){this._photoList=new zfl_PhotoList(0,init.pageSize,10000,photoSet.id,init.photoSetToken,photoSet.photoChangeNumber);this._photoList.setDefaults(photoSet,
zf_User.clone({id:photoSet.access.ownerId}));}},init:function(data){if(this._photoList==null)return;var SlideshowCore=zf.zentobox.slideshow.SlideshowCore;this._slideshow=new SlideshowCore(this.id,
this._photoList,{lengthKnown:false,fill:true,soundtrack:data.content.soundtrack||null,soundtrackLooped:data.options.isSoundtrackLooped,soundtrackPhotoSetId:this._photoSet.id,
slideDuration:parseInt((data.options.duration||5).toString(),10),transition:parseInt((data.options.transition||104).toString(),10)-100,random:data.options.isRandom,
loop:data.options.needLoopImages});var paused=false,self=this,slideshow=this._slideshow,inactive=false,inactivityTimeout=null;function trackInactivity(){self.$('.zb-bsp-ctl').addClass('inactive');
self.$('.zb-bsp-slider:first').addClass('hidden');inactive=true;inactivityTimeout=null;}function resetInactivity(){inactive=false;inactivityTimeout&&clearTimeout(inactivityTimeout);
inactivityTimeout=setTimeout(trackInactivity,5000);}$(document).bind('mousemove mousedown mouseup touchstart',function(e){if(inactive){self.$('.zb-bsp-ctl').removeClass('inactive');
resetInactivity();}});this.$('.zb-bsp-prev:first').click(function(){var c=$(this).addClass('active');setTimeout(function(){c.removeClass('active');},400);resetInactivity();
slideshow.prev();return false;});this.$('.zb-bsp-next:first').click(function(){var c=$(this).addClass('active');setTimeout(function(){c.removeClass('active');},400);
resetInactivity();slideshow.next();return false;});this.$('.zb-bsp-pause:first').click(function(){var c=$(this).addClass('active'),d=self.$('.zb-bsp-play:first').addClass('active');
setTimeout(function(){c.hide();d.show();c.removeClass('active');d.removeClass('active');},400);resetInactivity();slideshow.pause();return false;});this.$('.zb-bsp-play:first').click(function(){var c=$(this).addClass('active'),
d=self.$('.zb-bsp-pause:first').addClass('active');setTimeout(function(){c.hide();d.show();c.removeClass('active');d.removeClass('active');slideshow.resume();},400);
resetInactivity();return false;});this.$('.zb-bsp-volume:first').click(function(){self.$('.zb-bsp-slider:first').removeClass('hidden');resetInactivity();return false;
});var loaded=false;slideshow.on('statechange',function(state,paused){if(!loaded&&state==SlideshowCore.Resting){loaded=true;self.$('DIV.zb-bsp-controls').removeClass('hidden');
inactivityTimeout=setTimeout(trackInactivity,5000);}if(state==SlideshowCore.Resting){self.$('.zb-bsp-prev:first').toggleClass('hidden',!slideshow.canPrev());self.$('.zb-bsp-next:first').toggleClass('hidden',
!slideshow.canNext());}if(paused&&self.$('.zb-bsp-pause:first').is(':visible'))self.$('.zb-bsp-pause:first').click();else if(!paused&&self.$('.zb-bsp-play:first').is(':visible'))self.$('.zb-bsp-play:first').click();
});function setVolume(val){zf_storage.setItem('zf.zentobox.BackgroundSlideshow.volume',val.toString());val=100-Math.min(Math.max(Math.round((val-3)/122*100),0),100);
slideshow.volume(val);self.$('.zb-bsp-volume:first').attr('data-volume',Math.ceil(val/34));}this.$('.zb-bsp-slider:first > DIV').mousedown(function(e){if(e.button!=0)return;
var val=e.pageY-$(this).offset().top;$('SPAN',this).css('top',val-6+'px');setVolume(val);});$.extend(new zf_MouseTracker(this.$('.zb-bsp-slider:first SPAN')),{onbegintrack:function(){this._btn=self.$('.zb-bsp-slider:first SPAN');
this._anchorPos=this._btn.position().top+6;inactivityTimeout&&clearTimeout(inactivityTimeout);inactivityTimeout=null;return true;},ontrack:function(e){var val=Math.min(Math.max(this._anchorPos+e.pageY-this.anchorY,
3),125);this._btn.css('top',val-6+'px');setVolume(val);},onendtrack:function(){resetInactivity();}});$(document).bind('mousedown',function(e){if($(e.target).closest('.zb-bsp-slider').length==0)self.$('.zb-bsp-slider:first').addClass('hidden');
});$(function(){var val=zf_storage.getItem('zf.zentobox.BackgroundSlideshow.volume')||'3';val=parseInt(val,10);val=isNaN(val)?3:val;self.$('.zb-bsp-slider:first SPAN').css('top',
val-6+'px');setVolume(val);});},resize:function(availWidth,availHeight,constraints){;if(this._photoList==null)return{cx:availWidth,cy:availHeight};constraints=constraints||{};
this.$('A.zb-bsp-volume:first').toggle(this._slideshow.hasMusic());var size=this._slideshow.resize(availWidth,availHeight);if(this._slideshow.state==zf.zentobox.slideshow.SlideshowCore.Initialized)this._slideshow.start();
var controls=constraints.controls;align=constraints.alignControls;controls=controls||{left:0,top:0,width:availWidth,height:availHeight};align=align||'middle';this.$('DIV.zb-bsp-controls:first').css('left',
controls.left+'px').css('top',controls.top+'px').width(controls.width).height(controls.height).removeClass('zb-bsp-top zb-bsp-middle zb-bsp-bottom').addClass('zb-bsp-'+align);
return size;}})});;;;function zfl_Layout(id,global,local){zfl_Control.prototype.constructor.call(this,id);this.zenbar=global.zenbar;this.header=global.header;this.menubar=global.menubar;
this.footer=global.footer;this.customizer=global.customizer;this.administrator=global.administrator;this.scrapbook=global.scrapbook;this._decorations=zfl_stdTransformResponse(global.decorations,
"decorations");this._columns=local.columns;this._fixedWidth=local.fixedWidth;this._fillers=local.fillers;this._player=local.player;if(this.customizer&&this._player)this.customizer.setZentoboxPlayer(this._player);
this._keyHandlers=[];this._handlers=this._createHandlers();var self=this;zf_stdAttachEvent(window,"load",this.eventHandler(this._window_onload,"window.onload"));
zf_stdAttachEvent(window,"resize",this.eventHandler(this._window_onresize));this._feeds=local.feeds;var ontoggle=function(expanded){self._bin_ontoggle(this,expanded);
};var onfeeds=function(origin){self._bin_onfeeds(this,origin);};this._bins={};for(var key in local.bins){var bin=local.bins[key];if(bin==null)continue;this._bins[key]=bin;
bin.ontoggle=ontoggle;bin.onfeeds=onfeeds;}this._grids=local.grids;this._pairs=local.pairs;if(local.analytics)local.analytics.registerNonPhotoVisit();this._controls=new zfl_Layout.Controls(this);
if(this.zenbar){this.zenbar.init();if(this.scrapbook){this.zenbar.scrapbookEdit=this.scrapbook;this.zenbar.setScrapbookInfo(this.scrapbook.current);this.zenbar.onscrapbook=this.closure(this._handlers.oncommand,
"openFavorites");this.scrapbook.onchange=this.zenbar.closure(this.zenbar.setScrapbookInfo);this.scrapbook.addtocart=this.zenbar.closure(this.zenbar.addToCart);this.scrapbook.editproduct=this.zenbar.closure(this.zenbar.editProduct);
this._keyHandlers.push(this.scrapbook.closure(this.scrapbook.keyDown));}else{this.zenbar.setScrapbookInfo(null);}}}zfl_Layout.inherits(zfl_Control);zfl_Layout.prototype.recalc=function(deferred){if(!this.__loaded){;
return;}if(deferred){zf_stdDeferCall(this.id+".recalc",this.recalc,this);return;}if(this.__recalc_running){;return;}this.__recalc_running=true;var start=new Date();
this.onrecalc();zfl_Mat.recalc();;this.__recalc_running=false;};zfl_Layout.prototype._window_onresize=function(){;this.recalc(true);};zfl_Layout.prototype._window_onload=function(e,
source){if(this.__loaded){;return;}this.__loaded=true;;var start;start=new Date().getTime();var dummy=document.body.offsetWidth;$(document).keydown(this.closure(this._document_onkeydown));
start=new Date().getTime();this.onload();;this.recalc();};zfl_Layout.prototype.onload=function(){if(this.footer)this.footer.visibility(true);var self=this;$('BODY').bind('recalc.Layout',
function(e,deferred){self.recalc(deferred);});var player=this._player,customizer=this.customizer;player&&customizer&&player.on('save',function(zentoboxId,data,callback){customizer.updateZentobox(zentoboxId,
data,callback);});};zfl_Layout.prototype.onrecalc=function(){var domSelf=this.dom();var i;var cyWindow=zf_stdGetClientHeight();cyWindow=Math.max(300,cyWindow);var cyCustomizer=this.__cyCustomizer;
if(cyCustomizer==null){cyCustomizer=this.__cyCustomizer=!this.customizer?0:(zf_stdGetHeightOverall(this.customizer.dom())+10);}var cyZenBar=this.__cyZenBar;if(cyZenBar==null){cyZenBar=this.__cyZenBar=!this.zenbar?0:zf_stdGetHeightOverall(this.zenbar.dom());
}var cyHeader=this.__cyHeader;if(cyHeader==null){cyHeader=this.__cyHeader=!this.header?0:zf_stdGetHeightOverall(this.header.dom());}var cyMenuBar=this.__cyMenuBar;
if(cyMenuBar==null){cyMenuBar=this.__cyMenuBar=!this.menubar?0:zf_stdGetHeightOverall(this.menubar.dom());}var cyFooter=this.__cyFooter;if(cyFooter==null){cyFooter=this.__cyFooter=(this.footer==null)?0:zf_stdGetHeightOverall(this.footer.dom());
}var cyPaddingTop=this.__cyPaddingTop;var cyPaddingBottom=this.__cyPaddingBottom;if(cyPaddingTop==null){cyPaddingTop=this.__cyPaddingTop=zf_stdGetHeightAbove(domSelf);
cyPaddingBottom=this.__cyPaddingBottom=zf_stdGetHeightBelow(domSelf);}var cyTaken=cyCustomizer+cyZenBar+cyHeader+cyMenuBar+cyPaddingBottom+cyFooter;var cyLeft=cyWindow-cyTaken;
var cyColumns=0;var columns=[],column;for(var key in this._columns){column=this._columns[key];column.updateDependencies();var cyFixed=column.getFixedHeight();var cyMin=column.hasWaterline!=null?column.getMinHeight():cyFixed;
var cyOffset=zf_stdGetOffset(column.dom(),domSelf).cy;cyFixed+=cyOffset;cyMin+=cyOffset;if(cyFixed>cyColumns)cyColumns=cyFixed;if(column.stretcherId){columns.push(column);
column.__minHeight=cyMin;column.__fixedHeight=cyFixed;};}if(this.cyMinFooter!=null&&cyFooter!=0){cyLeft+=cyFooter-this.cyMinFooter;cyFooter=this.cyMinFooter;}var maxColumn=cyLeft;
if(!this.keepFooter&&cyColumns>cyLeft){if(cyColumns<cyLeft+cyFooter)maxColumn=cyColumns;else maxColumn=cyLeft+cyFooter;};var overStretch=0;for(i=0;i<columns.length;
i++){column=columns[i];var actualStretch;var desiredStretch;if(column.__minHeight<maxColumn)desiredStretch=maxColumn-column.__minHeight;else desiredStretch=0;actualStretch=column.stretch(desiredStretch);
;column.__actualStretch=actualStretch;if(actualStretch+column.__fixedHeight>maxColumn){var maxColumn2=actualStretch+column.__fixedHeight;if(maxColumn2<cyLeft+cyFooter)maxColumn2=actualStretch+column.__fixedHeight;
else maxColumn2=cyLeft+cyFooter;if(maxColumn2!=maxColumn){maxColumn=maxColumn2;for(var j=0;j<i;j++){if(columns[j].__actualStretch+columns[j].__fixedHeight<maxColumn){var updatedStretch=maxColumn-columns[j].__fixedHeight;
columns[j].stretch(updatedStretch);;}}}}}var cyOldFillers=0;var nFillers=this._fillers.length;for(i=0;i<nFillers;i++){var filler=document.getElementById(this._fillers[i]);
if(!filler)continue;cyOldFillers+=filler.clientHeight;}var cyLayout=cyCustomizer+cyHeader+cyZenBar+cyMenuBar+cyFooter+zf_stdGetHeightOverall(domSelf)-cyOldFillers;
var cyNewFillers=0;if(cyLayout<cyWindow)cyNewFillers=cyWindow-cyLayout;if(cyOldFillers!=cyNewFillers&&nFillers>0){var cyFiller1=Math.floor(cyNewFillers/nFillers);
var cyFiller0=cyNewFillers-cyFiller1*(nFillers-1);for(i=0;i<nFillers;i++){var domFiller=document.getElementById(this._fillers[i]);domFiller.style.height=(i==0?cyFiller0:cyFiller1)+"px";
}};};zfl_Layout.prototype.initGrid=function(grid,style,params,objects,size,selection){if(!grid)return;if(!params)params={};var methodAuto=false;if(params.method=="auto1"||params.method==null){params.method=(screen.width<=1024)?zf_ProcessingMethod.StandardThumbnail:zf_ProcessingMethod.StandardLargeThumbnail;
methodAuto=true;}else if(params.method=="auto2"){params.method=(screen.width<1600)?zf_ProcessingMethod.StandardLargeThumbnail:zf_ProcessingMethod.StandardVeryLargeThumbnail;
methodAuto=true;}else if(params.method=="auto3"){params.method=(screen.width<=1024)?zf_ProcessingMethod.StandardThumbnail:((screen.width<1600)?zf_ProcessingMethod.StandardLargeThumbnail:zf_ProcessingMethod.StandardVeryLargeThumbnail);
methodAuto=true;}for(var name in zf_ProcessingMethod){if(zf_ProcessingMethod[name].code==params.method){params.method=zf_ProcessingMethod[name];break;}};var method=params.method;
if(params.thumbs16x9){params.method=method=$.extend({},method,{clip:true,cy:Math.floor((method.cx*9)/16)});}grid.__zfl_params=params;grid.__zfl_selection=selection;
var decor=this._getDecorationInfo(style,method);if(methodAuto){var dom=document.getElementById(grid.id);var classNames=dom.className.split(" ");if(decor!=null&&decor.className!=null)classNames=classNames.concat(decor.className.split(" "));
var suffixedNames=[];for(var c=0;c<classNames.length;c++){if(classNames[c]=="pg-empty")continue;suffixedNames.push(classNames[c]+"-method-"+method.code);}classNames=classNames.concat(suffixedNames);
dom.className=classNames.join(" ");dom=null;}if(params.lynx)return;grid.init(this._createPlugins(style,decor,params));if(objects){var self=this;if(objects instanceof Array){grid.setSize(objects.length);
grid.onqueryitem=function(index){self.setGridItem(grid,index,objects[index]);};}else if(objects instanceof Function){;grid.setSize(size);grid.onqueryitem=function(index){self.setGridItem(grid,
index,objects(index));};}}};zfl_Layout.prototype.setGridItem=function(grid,index,object){;;;if(grid.__zfl_params.lynx)return;var self=this;if(!object.loaded){object.advise(grid,
function(){self.setGridItem(grid,index,object);});return;}var image=object.image;var unprotect=(object instanceof zf_Folder||object instanceof zf_PhotoSet)&&(object.access.mask&zf_AccessMask.UnprotectCover)!=0&&!!image&&image.access.type==zf_AccessType.Public;
if(!image)image=new zf_BasicImage((object instanceof zf_Folder)?-2:-1);if(object.access.type==zf_AccessType.Private&&!unprotect){if(object instanceof zf_Folder||object instanceof zf_PhotoSet)image=new zf_BasicImage(-3);
}var id=object.id;if(object.constructor.prefix)id=object.constructor.prefix+id;var styles=[];var method=grid.__zfl_params.method;if(object instanceof zf_Folder&&!grid.__zfl_params.fthumb){if(method==zf_ProcessingMethod.StandardLargeThumbnail)method=zf_ProcessingMethod.StandardThumbnail;
else if(method==zf_ProcessingMethod.StandardVeryLargeThumbnail)method=zf_ProcessingMethod.StandardLargeThumbnail;}var href=null;if(object.getHref)href=object.getHref();
var burnable=false;var access=image.access;if(access){var nocheck=this.administrator||access.ownerId==zf_userId;var locked=!nocheck&&access.type==zf_AccessType.Password&&!zfl_PasswordManager.check(image.access.ownerId,
image.access.realmId);var noaccess=!nocheck&&(access.type==zf_AccessType.Private||access.isCensored);var accessible=nocheck||access.type==zf_AccessType.Public||access.type==zf_AccessType.Password&&!locked;
var generated=image.flags!=null&&(method.code==zf_ProcessingMethod.StandardThumbnail.code&&(image.flags&zf_PhotoFlags.HasImage0)!=0||method.code==zf_ProcessingMethod.StandardSmallThumbnail.code&&(image.flags&zf_PhotoFlags.HasImage1)!=0||method.code==zf_ProcessingMethod.StandardLargeThumbnail.code&&(image.flags&zf_PhotoFlags.HasImage10)!=0||method.code==zf_ProcessingMethod.StandardVeryLargeThumbnail.code&&(image.flags&zf_PhotoFlags.HasImage11)!=0);
burnable=generated&&(locked||noaccess||accessible);if(locked){zfl_PasswordManager.subscribe(image.access.ownerId,image.access.realmId,function(){self.setGridItem(grid,
index,object);});if(!unprotect)image=new zf_BasicImage(-4);styles.push("pv-s-password");}if(noaccess){image=new zf_BasicImage(-5);styles.push("pv-s-noaccess");}}var selection=grid.__zfl_selection;
if(selection&&selection.selected(object.id))grid.selectItem(index);;var context={data:object,method:method,index:index,image:image,burnable:burnable,grid:grid,selection:selection};
grid.setItem(index,id,href,image,method,burnable,styles,context);};zfl_Layout.prototype._getDecorationInfo=function(style,method){if(this._decorations==null)return null;var info;
if(method!=null){info=this._decorations[style+"."+method.code];if(info!=null)return info;}info=this._decorations[style];if(info!=null)return info;info=this._decorations["default"];
if(info!=null)return info;return null;};zfl_Layout.prototype._createPlugins=function(style,decor,params){var plugins=[];if(!params)params={};if(decor!=null)plugins.push(new zfl_DecorationPlugin(decor,
style,params));if(style==zfl_PhotoViewStyle.FolderElement||style==zfl_PhotoViewStyle.GalleryPhoto){plugins.push(new zfl_LabelPlugin(params));}if(style==zfl_PhotoViewStyle.PhotoVList){plugins.push(new zfl_VLabelPlugin(params));
}if(style==zfl_PhotoViewStyle.GalleryPhoto||style==zfl_PhotoViewStyle.PhotoVList||style==zfl_PhotoViewStyle.PhotoNavList)plugins.push(new zf_VideoInfoPlugin(function(c){return c.data;
},params.vicon,params.vduration));if(zf_userId==zf_ownerId&&style==zfl_PhotoViewStyle.GalleryPhoto)plugins.push(new zf_VideoWaitPlugin(function(c){return c.data;
}));plugins.push(new zfl_InfoIconPlugin(params));plugins.push(new zf_CensoredPlugin(function(c){return c.data;},function(c){return c.method;}));plugins.push(new zfl_WaitAnimationPlugin(true));
if(params.onclick)plugins.push(new zf_ClickPlugin(params.onclick));if(style==zfl_PhotoViewStyle.PhotoNavList||style==zfl_PhotoViewStyle.PhotoVList)plugins.push(new zf_NoClickPlugin());
if(style==zfl_PhotoViewStyle.CurrentPhoto||style==zfl_PhotoViewStyle.DimLights||style==zfl_PhotoViewStyle.Slideshow||style==zfl_PhotoViewStyle.CommentBrowser){plugins.push(new zf_VideoPlayerPlugin(function(c){return c.data;
}));}return plugins;};zfl_Layout.formatDecorationClasses=function(baseClass,decoration,method){var classes=[];if(baseClass)classes.push(baseClass,' ',baseClass,'-method-',
method.code);if(decoration&&decoration.className){var decorClasses=decoration.className.split(' ');for(var i=0;i<decorClasses.length;i++){if(classes.length>0)classes.push(' ');
classes.push(decorClasses[i],' ',decorClasses[i],'-method-',method.code);}}return classes.join("");};zfl_Layout.prototype._bin_ontoggle=function(bin,expanded){;this.recalc();
};zfl_Layout.prototype._bin_onfeeds=function(bin,origin){if(this._feeds!=null)this._feeds.show(origin);};zfl_Layout.prototype.setupGuestbook=function(global,local){var guestbook=local.guestbook;
if(!guestbook)return;guestbook.onresize=this.closure(this.recalc);guestbook.onlogin=zfl_Header.login;var onadd=function(){if(!bin.expanded)bin.toggle();var offset=zf_stdGetOffset(guestbook.dom());
$('body').stop(true,true).animate({scrollTop:offset.cy-50},300);guestbook.add();return false;};var bin=local.bins.guestbook;if(bin){var link=local.mailboxLink;if(link){link.onshow=function(){if(!bin.expanded)bin.toggle();
else link.scrollTo(guestbook);};link.onadd=onadd;}var countFormat=zf_stdHtmlEncode("{0} entries");guestbook.oncountchange=function(count){if(link)link.setCount(count);
var suffix=[];if(guestbook.canAdd()){suffix.push('<a class="guestbook-suffix-add" href="/">',zf_stdHtmlEncode("Add entry"),'</a>');}suffix.push(zf_stdFormatString(countFormat,
count));bin.setTitleSuffix(suffix.join(""));bin.$(".guestbook-suffix-add").click(onadd);};guestbook.oncountchange(guestbook.getCount());}};zfl_Layout.prototype.resolveEmail=function(id,
userId,token){var oncomplete=function(status,retVal){if(status!=200){return;}var email=retVal.result;var dom=document.getElementById(id);dom.onmousedown=function(e){zfl_event(e,
null,function(){document.location.href="mailto:"+email;});};zf_stdSetText(dom,email);dom=null;};zf_stdServerRequest("GET","/zf/layout/layout.asmx","ResolveEmail",
[userId,token,zfl_SessionCookie.current.sessionKey],oncomplete);};zfl_Layout.prototype._document_onkeydown=function(e){for(var i=0;i<this._keyHandlers.length;i++){this._keyHandlers[i](e);
if(e.isImmediatePropagationStopped())break;}};zfl_Layout.prototype._createHandlers=function(){var self=this;var desc=this.getCommands();return{oncommandtest:function(id){var result=false;
if(desc.common&&desc.common.test&&!desc.common.test.apply(self,arguments))result=false;else if(desc[id]&&typeof(desc[id].test)=="function")result=desc[id].test.apply(self,
arguments);else if(desc[id]&&typeof(desc[id].test)=="string")result=desc[desc[id].test].test.apply(self,arguments);;return result;},oncommand:function(){;var id=arguments[0];
;;if(desc[id]&&typeof(desc[id].exec)=="function")return desc[id].exec.apply(self,arguments);if(desc[id]&&typeof(desc[id].exec)=="string")return desc[desc[id].exec].exec.apply(self,
arguments);}};};zfl_Layout.prototype.getCommands=function(){return{admin:{test:function(){return this.administrator;}},openFavorites:{test:function(){return!!this.scrapbook;
},exec:function(){this.scrapbook.show();}}};};zfl_Layout.prototype._scrollCheck=function(e){this._scrolled=true;};zfl_Layout.prototype._hideMenu=function(e){e=$.event.fix(e);if(!zfl_Layout.currentMenu)return;
var target=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].target:e.target;var root=zfl_Layout.currentMenu.root?zfl_Layout.currentMenu.root():zfl_Layout.currentMenu.dom();
;if($(target).parents().filter(function(){return this==root;}).length!=0)return;zfl_Layout.currentMenu.remove();};zfl_Layout.suppressClick=function(){setTimeout(function(){$('.noclick img').bind('contextmenu',
false);},500);};;;;;;;function zfl_MessageView(id,message){zfl_Control.prototype.constructor.call(this,id);if(message!=null){this._message=message;this._mailbox=message.mailbox;
this._index=message.index;if(message.posterUrl){var posterLink=this.dom("poster-link");if(posterLink)posterLink.href=message.posterUrl||"";}}else{var postedOn=this.dom().getAttribute("zf:posted",
2);if(postedOn){postedOn=zf_stdParseDateTimeUTC(postedOn);zf_stdSetText(this.dom("posted"),zf_stdFormatDateTimeEx(postedOn));}}var self=this;var subscribe=function(name,
ask,askTitle,askText){var dom=self.dom(name);if(dom!=null){var handler="on"+name;dom.onclick=function(){var doAction=function(){if(self[handler])self[handler](self.getMessage());
};if(!!ask){askTitle=askTitle==null?'Confirm':askTitle;askText=askText?askText:'Do you really want to perform this action?';var args={title:askTitle,text:askText,
curtain:true,buttons:['No','Yes'],onbutton:function(btn){if(btn==1)doAction();}};zfl_MessageBox.show(args);}else doAction();};}};subscribe("approve");subscribe("edit");
subscribe("email");subscribe("delete",true,'Delete Message','Are you sure want to delete this message?');subscribe("undelete");subscribe("censor");subscribe("uncensor");
subscribe("purge",true);subscribe("public");subscribe("private");this._attachmentVisible=false;var link=this.dom("attachment-link");if(link){link.onclick=function(){if(self.onattachment)self.onattachment(self._message,
!self._attachmentVisible);};}}zfl_MessageView.inherits(zfl_Control);zfl_MessageView.prototype.getMessage=function(){if(this._message)return this._message;var message=new zf_Message();message.mailbox=this.getMailbox();
message.index=this.getIndex();message.posterName=zf_stdGetText(this.dom("poster-name"));var posterId=this.dom().getAttribute("zf:poster",2);if(posterId){message.poster=new zf_User();
message.poster.id=parseInt(posterId);message.poster.displayName=message.posterName;;}var posterEmail=this.dom().getAttribute("zf:email");if(posterEmail&&posterEmail.length>0)message.posterEmail=posterEmail;
var posterLink=this.dom("poster-link");if(posterLink&&posterLink.tagName=="A"){message.posterUrl=posterLink.href;}else{message.posterUrl="";}var postedOn=this.dom().getAttribute("zf:posted",
2);message.postedOn=zf_stdParseDateTimeUTC(postedOn);var bodyNode=this.dom("body");message.body="";if(bodyNode!=null){message.body=bodyNode.innerHTML;message.body=message.body.replace(/(^\s*)|(\s*$)/g,
"");}this._message=message;return message;};zfl_MessageView.prototype.getMailbox=function(){if(this._mailbox)return this._mailbox;var raw=this.dom().getAttribute("zf:mailbox",2);
;var parts=raw.split(':');;var mailbox=new zf_Mailbox();mailbox.ownerId=parseInt(parts[0]);;mailbox.type=parseInt(parts[1]);;mailbox.id=parseInt(parts[2]);;this._mailbox=mailbox;
return mailbox;};zfl_MessageView.prototype.getIndex=function(){if(this._index!=null)return this._index;var raw=this.dom().getAttribute("zf:index",2);;var index=parseInt(raw);;this._index=index;
return index;};zfl_MessageView.createHeaderHtml=function(id,message){var self=message.poster&&message.poster.id==zf_userId;var poster=['<span class="mv-poster-name ',self?"mv-color3":"mv-color2",
'">',zf_stdHtmlEncode(message.posterName),'</span>'];if(message.posterUrl)poster.push('<a id="',id,'-poster-link" class="mv-poster-link" target="_blank" title="Visit Web site">',
'</a>');if(message.poster==null)poster.push('<span class="mv-unregistered mv-color4">(non-registered)</span>');if(message.isPrivate)poster.push('<span class="mv-private mv-color4"><span class="mv-private-icon"></span>',
'private','</span>');poster=poster.join("");return['<div class="mv-header mv-font2">','<div class="mv-date mv-color4">',zf_stdFormatDateTimeEx(message.postedOn),
'</div>','<div class="mv-title">','<span class="mv-index">',message.index+1,'.</span>','<span class="mv-poster">',poster,'</span>','</div>','</div>'].join("");};
zfl_MessageView._createInfoHtml=function(id,message){if((message.flags&zf_MessageFlags.CanShowInfo)==0)return "";var formatValue=function(v){return '<span class="mv-color3">'+v+'</span>';
};var formatUser=function(u){return u?u.loginName:"anonymous";};var content=[];content.push('<div class="mv-info mv-font3 mv-color4">');content.push('<div>',zf_stdFormatString("Posted by {0} on {1} from {2}",
formatValue(formatUser(message.poster)),formatValue(zf_stdFormatDateTime(message.postedOn,true)),formatValue(message.postedFrom)),'</div>');if(message.isEdited){content.push('<div>',
zf_stdFormatString("Edited by {0} on {1} from {2}",formatValue(formatUser(message.editor)),formatValue(zf_stdFormatDateTime(message.editedOn,true)),formatValue(message.editedFrom)),
'</div>');}if(message.isCensored){content.push('<div>',zf_stdFormatString("Censored by {0} on {1} from {2}",formatValue(formatUser(message.censorer)),formatValue(zf_stdFormatDateTime(message.censoredOn,
true)),formatValue(message.censoredFrom)),'</div>');}if(message.isDeleted){content.push('<div>',zf_stdFormatString("Deleted by {0} on {1} from {2}",formatValue(formatUser(message.deletor)),
formatValue(zf_stdFormatDateTime(message.deletedOn,true)),formatValue(message.deletedFrom)),'</div>');}content.push('</div>');return content.join("");};zfl_MessageView.createHtml=function(id,
message){var censored="";if(message.isCensored&&!message.isDeleted)censored='<div class="mv-censored">Censored by Administrator</div>';var content=[];if(message.needsApproval){var txt=(message.flags&zf_MessageFlags.CanApprove)!=0?'This post needs your approval to be publicly visible.':'Your message is awaiting moderation.';
content.push('<div class="mv-content mv-approval mv-font2 mv-color1">',txt,'</div>');}if(message.body)content.push('<div class="mv-content mv-body mv-font1 mv-color1">',
message.body,'</div>');if(message.isDeleted)content.push('<div class="mv-content mv-deleted mv-font3 mv-color4">','Deleted.','</div>');content=content.join("");var controls="";
if(message.flags&zf_MessageFlags.ControlMask){controls=['<div class="mv-controls mv-font3">'];var first=true;var addLink=function(flag,linkId,label){if((message.flags&flag)==0)return;
if(!first)controls.push('<span class="mv-control-separator">|</span>');controls.push('<a class="mv-control" href="javascript:;" id="',id,linkId,'">',label,'</a>');
first=false;};addLink(zf_MessageFlags.CanApprove,"-approve","Approve");addLink(zf_MessageFlags.CanEdit,"-edit","Edit");addLink(zf_MessageFlags.CanEmail,"-email",
"Reply via Email");addLink(zf_MessageFlags.CanDelete,"-delete","Delete");addLink(zf_MessageFlags.CanUndelete,"-undelete","Undelete");addLink(zf_MessageFlags.CanCensor,
"-censor","Censor");addLink(zf_MessageFlags.CanUncensor,"-uncensor","Uncensor");addLink(zf_MessageFlags.CanPurge,"-purge","Purge");addLink(zf_MessageFlags.CanMakePublic,
"-public","Make Public");addLink(zf_MessageFlags.CanMakePrivate,"-private","Make Private");controls.push('</div>');controls=controls.join("");}var attachment="";
if(message.attachmentType==zf_AttachmentType.CroppingSuggestion){attachment=['<div class="mv-attachment mv-attachment-crop mv-font3">','<div class="icon"></div>',
'<a id="',id,'-attachment-link" href="javascript:;">','View Suggested Cropping','</a>','</div>'].join("");}else if(message.attachmentType==zf_AttachmentType.HighlightedArea){attachment=['<div class="mv-attachment mv-attachment-area mv-font3">',
'<div class="icon"></div>','<a id="',id,'-attachment-link" href="javascript:;">','View Highlighted Area','</a>','</div>'].join("");}var footer="";if(controls.length>0||attachment.length>0){footer=['<div class="mv-footer">',
controls,attachment,'</div>'];footer=footer.join("");}return['<div class="mv',message.isDeleted?' mv-s-deleted':'',' mv-bgcolor1" id="',id,'">',zfl_MessageView.createHeaderHtml(id,
message),censored,zfl_MessageView._createInfoHtml(id,message),content,footer,'</div>'].join("");};zfl_MessageView.prototype.setAttachmentVisible=function(visible){if(this._attachmentVisible==visible)return;
this._attachmentVisible=visible;if(this._message.attachmentType==zf_AttachmentType.CroppingSuggestion){zf_stdSetText(this.dom("attachment-link"),visible?"Hide Suggested Cropping":"View Suggested Cropping");
}else if(this._message.attachmentType==zf_AttachmentType.HighlightedArea){zf_stdSetText(this.dom("attachment-link"),visible?"Hide Highlighted Area":"View Highlighted Area");
}};;function zf_ScrollBar(id,cyLine){zf_Control.prototype.constructor.call(this,id);this._cyLine=cyLine;this.update=zf_stdMakeDeferred(id+".ScrollBar.update",this._update);
var self=this;this.update();}zf_ScrollBar.inherits(zf_Control);zf_ScrollBar.prototype.close=function(){this._isClosed=true;};zf_ScrollBar.prototype._update=function(){if(this._isClosed)return;var scrollNode=this.dom().parentNode;
this._outerHeight=scrollNode.offsetHeight;this._innerHeight=scrollNode.scrollHeight;if(this._outerHeight+scrollNode.scrollTop>this._innerHeight)scrollNode.scrollTop=Math.max(0,
this._innerHeight-this._outerHeight);var show=this._innerHeight>this._outerHeight;this._show(show);this._outerHeight=scrollNode.offsetHeight;this._innerHeight=scrollNode.scrollHeight;
if(show&&this._nodesCreated)this._scrollTo();};zf_ScrollBar.prototype.getScrollPos=function(){return this.dom().parentNode.scrollTop;};zf_ScrollBar.prototype.scrollTo=function(pos){if(this._isClosed)return;
this.dom().parentNode.scrollTop=pos;this.update();};zf_ScrollBar.prototype._show=function(show){var barStyle=this._nodesCreated?this.dom("_bar").style:null;if(show&&(barStyle==null||barStyle.visibility!="inherit")){if(barStyle==null){var node=this._createNodes();
if(node==null)return;barStyle=node.style;}zf_stdReplaceClassName(this.dom().parentNode.parentNode,"sv-noscroll","sv-scroll");barStyle.visibility="inherit";}if(!show&&barStyle!=null&&barStyle.visibility!="hidden"){zf_stdReplaceClassName(this.dom().parentNode.parentNode,
"sv-scroll","sv-noscroll");barStyle.visibility="hidden";}};zf_ScrollBar.prototype._scrollTo=function(pos){if(pos==null)pos=this.dom().parentNode.scrollTop;var barNode=this.dom("_bar");
var topNode=this.dom("_top");var thumbNode=this.dom("_thumb");var upperNode=this.dom("_upper");var lowerNode=this.dom("_lower");var cyActive;var cyThumb;var cyPos;
cyActive=barNode.offsetHeight-this._cyTop-this._cyBottom;cyActive=Math.max(cyActive,0);if(cyActive==0||this._innerHeight==this._outerHeight)return;cyThumb=Math.floor(this._outerHeight*cyActive/this._innerHeight);
cyThumb=Math.max(cyThumb,33);cyPos=Math.floor(pos*(cyActive-cyThumb)/(this._innerHeight-this._outerHeight));thumbNode.style.top=(this._cyTop+cyPos)+"px";thumbNode.style.height=(cyThumb-this._cyThumbExtra)+"px";
upperNode.style.height=cyPos+"px";lowerNode.style.height=(cyActive-cyPos)+"px";};zf_ScrollBar.prototype._createNodes=function(){var id=this.id;var barNode=document.createElement("DIV");
barNode.className="sb sb-color1 sb-bgcolor4";barNode.id=id+"-_bar";var html=['<div class="sb-upper sb-color1 sb-bgcolor1" id="',id,'-_upper">','<div class="sb-normal sb-color1 sb-bgcolor1"></div>',
'</div>','<div class="sb-lower sb-color1 sb-bgcolor1" id="',id,'-_lower">','<div class="sb-normal sb-color1 sb-bgcolor1"></div>','</div>','<div class="sb-top sb-color1 sb-bgcolor4" id="',
id,'-_top">','<div class="sb-normal sb-color1 sb-bgcolor4 sb-bgimage1"></div>','</div>','<div class="sb-bottom sb-color1 sb-bgcolor4" id="',id,'-_bottom">','<div class="sb-normal sb-color1 sb-bgcolor4 sb-bgimage2"></div>',
'</div>','<div class="sb-thumb sb-color4 sb-bgcolor4" id="',id,'-_thumb">','<div class="sb-normal sb-color4 sb-bgcolor4 sb-bgimage3"></div>','</div>'].join("");barNode.innerHTML=html;
if(barNode.innerHTML!=html){this.update();return null;}this.dom().parentNode.parentNode.appendChild(barNode);var topNode=this.dom("_top");var bottomNode=this.dom("_bottom");
var upperNode=this.dom("_upper");var lowerNode=this.dom("_lower");var thumbNode=this.dom("_thumb");this._cyTop=topNode.offsetHeight;this._cyBottom=bottomNode.offsetHeight;
var cyThumbOuter=thumbNode.offsetHeight;var cyThumbInner=zf_stdExtractPixels(zf_stdGetCurrentStyle(thumbNode,"height","height"));this._cyThumbExtra=cyThumbOuter-cyThumbInner;
upperNode.style.top=this._cyTop+"px";lowerNode.style.bottom=this._cyBottom+"px";var self=this;upperNode.onmouseover=lowerNode.onmouseover=function(){this.firstChild.className="sb-hover sb-color1 sb-bgcolor2";
};upperNode.onmouseout=lowerNode.onmouseout=function(){this.firstChild.className="sb-normal sb-color1 sb-bgcolor1";self._elem_onmouseup(this);};upperNode.onmousedown=lowerNode.onmousedown=function(e){this.firstChild.className="sb-active sb-color1 sb-bgcolor3";
self._elem_onclick(e,this);};upperNode.onmouseup=lowerNode.onmouseup=function(){this.firstChild.className="sb-hover sb-color1 sb-bgcolor1";self._elem_onmouseup(this);
};topNode.onmouseover=function(){this.firstChild.className="sb-hover sb-color2 sb-bgcolor5 sb-bgimage1";};topNode.onmouseout=function(){this.firstChild.className="sb-normal sb-color1 sb-bgcolor4 sb-bgimage1";
self._elem_onmouseup(this);};topNode.onmousedown=function(e){this.firstChild.className="sb-active sb-color3 sb-bgcolor6 sb-bgimage1";self._elem_onclick(e,this);};
topNode.onmouseup=function(){this.firstChild.className="sb-hover sb-color2 sb-bgcolor5 sb-bgimage1";self._elem_onmouseup(this);};bottomNode.onmouseover=function(){this.firstChild.className="sb-hover sb-color2 sb-bgcolor5 sb-bgimage2";
};bottomNode.onmouseout=function(){this.firstChild.className="sb-normal sb-color1 sb-bgcolor4 sb-bgimage2";self._elem_onmouseup(this);};bottomNode.onmousedown=function(e){this.firstChild.className="sb-active sb-color3 sb-bgcolor6 sb-bgimage2";
self._elem_onclick(e,this);};bottomNode.onmouseup=function(){this.firstChild.className="sb-hover sb-color2 sb-bgcolor5 sb-bgimage2";self._elem_onmouseup(this);};
upperNode.dblclick=lowerNode.ondblclick=topNode.ondblclick=bottomNode.ondblclick=zf_stdFalse;thumbNode.onmouseover=function(e){self._thumb_onmouseover(e,this);};
thumbNode.onmouseout=function(e){self._thumb_onmouseout(e,this);};thumbNode.onmousedown=function(e){self._thumb_onmousedown(e,this);};thumbNode.onmouseup=function(e){self._thumb_onmouseup(e,
this);};thumbNode.onmousemove=function(e){self._thumb_onmousemove(e,this);};thumbNode.onselectstart=zf_stdFalse;upperNode=null;lowerNode=null;topNode=null;bottomNode=null;
thumbNode=null;this.dom().addEventListener("DOMMouseScroll",this.eventHandler(this._parent_onmousewheel),false);this.dom().addEventListener("mousewheel",this.eventHandler(this._parent_onmousewheel),
false);this._nodesCreated=true;return barNode;};zf_ScrollBar.prototype._lineUp=function(){var scrollNode=this.dom().parentNode;if(scrollNode.scrollTop>0){scrollNode.scrollTop-=this._cyLine;
this._scrollTo();}};zf_ScrollBar.prototype._lineDown=function(){var scrollNode=this.dom().parentNode;if(scrollNode.scrollTop<scrollNode.scrollHeight){scrollNode.scrollTop+=this._cyLine;
this._scrollTo();}};zf_ScrollBar.prototype._pageUp=function(){var scrollNode=this.dom().parentNode;if(scrollNode.scrollTop>0){var cyPage=Math.max(this._outerHeight-this._cyLine,
this._cyLine);scrollNode.scrollTop-=cyPage;this._scrollTo();}};zf_ScrollBar.prototype._pageDown=function(){var scrollNode=this.dom().parentNode;if(scrollNode.scrollTop<scrollNode.scrollHeight){var cyPage=Math.max(this._outerHeight-this._cyLine,
this._cyLine);scrollNode.scrollTop+=cyPage;this._scrollTo();}};zf_ScrollBar.prototype._elem_onclick=function(e,node){zf_stdStopPropagation(e);this._action=null;var className=node.className.split(' ')[0];
switch(className){case "sb-top":this._action=this._lineUp;break;case "sb-bottom":this._action=this._lineDown;break;case "sb-upper":this._action=this._pageUp;break;
case "sb-lower":this._action=this._pageDown;break;default:;break;}if(this._action==null)return;this._action();if(this.onscroll!=null)this.onscroll();var self=this;
this._timeout=setTimeout(function(){if(self._action!=null){self._action();if(self.onscroll!=null)self.onscroll();self._interval=setInterval(function(){if(self._action!=null){self._action();
if(self.onscroll!=null)self.onscroll();}},80);}},400);};zf_ScrollBar.prototype._elem_onmouseup=function(){if(this._interval!=null){clearInterval(this._interval);delete this._interval;
}if(this._timeout!=null){clearTimeout(this._timeout);delete this._timeout;}};zf_ScrollBar.prototype._thumb_onmousedown=function(e,thumbNode){e=zf_stdGetEvent(e);thumbNode.firstChild.className="sb-active sb-color6 sb-bgcolor6 sb-bgimage3";
if(document.addEventListener){document.addEventListener("mouseover",zf_ScrollBar._noop,true);document.addEventListener("mouseout",zf_ScrollBar._noop,true);document.addEventListener("selectstart",
zf_ScrollBar._noop,true);document.addEventListener("mousemove",thumbNode.onmousemove,true);document.addEventListener("mouseup",thumbNode.onmouseup,true);}else if(thumbNode.setCapture)thumbNode.setCapture();
this._anchorX=e.clientX;this._anchorY=e.clientY;this._anchorTop=zf_stdExtractPixels(zf_stdGetCurrentStyle(thumbNode,"top","top"));this._thumbTrack=true;if(this.onscrollstart!=null)this.onscrollstart();
zf_stdStopPropagation(e);zf_stdPreventDefault(e);};zf_ScrollBar.prototype._thumb_onmousemove=function(e){if(!this._thumbTrack)return;e=zf_stdGetEvent(e);zf_stdStopPropagation(e);
zf_stdPreventDefault(e);var top=this._anchorTop+e.clientY-this._anchorY;var cyActive;var cyThumb;cyActive=this.dom("_bar").offsetHeight-this._cyTop-this._cyBottom;
cyActive=Math.max(cyActive,0);cyThumb=Math.floor(this._outerHeight*cyActive/this._innerHeight);cyThumb=Math.max(cyThumb,33);var scrollTop=Math.floor((top-this._cyTop)*(this._innerHeight-this._outerHeight)/(cyActive-cyThumb));
this.dom().parentNode.scrollTop=scrollTop;this._scrollTo();if(this.onscrolling!=null)this.onscrolling();};zf_ScrollBar.prototype._thumb_onmouseup=function(e){this._thumbTrack=false;
e=zf_stdGetEvent(e);zf_stdStopPropagation(e);zf_stdPreventDefault(e);var thumbNode=this.dom("_thumb");if(e.srcElement==thumbNode||e.target==thumbNode||e.srcElement==thumbNode.firstChild||e.target==thumbNode.firstChild)thumbNode.firstChild.className="sb-hover sb-color5 sb-bgcolor5 sb-bgimage3";
else thumbNode.firstChild.className="sb-normal sb-color4 sb-bgcolor4 sb-bgimage3";if(document.removeEventListener){document.removeEventListener("mouseover",zf_ScrollBar._noop,
true);document.removeEventListener("mouseout",zf_ScrollBar._noop,true);document.removeEventListener("selectstart",zf_ScrollBar._noop,true);document.removeEventListener("mousemove",
thumbNode.onmousemove,true);document.removeEventListener("mouseup",thumbNode.onmouseup,true);}else if(thumbNode.releaseCapture)thumbNode.releaseCapture();if(this.onscroll!=null)this.onscroll();
};zf_ScrollBar.prototype._thumb_onmouseover=function(e,thumbNode){if(!this._thumbTrack)thumbNode.firstChild.className="sb-hover sb-color5 sb-bgcolor5 sb-bgimage3";};zf_ScrollBar.prototype._thumb_onmouseout=function(e,
thumbNode){if(!this._thumbTrack)thumbNode.firstChild.className="sb-normal sb-color4 sb-bgcolor4 sb-bgimage3";};zf_ScrollBar.prototype._parent_onmousewheel=function(e){var delta=e.wheelDelta?e.wheelDelta:(e.detail>0?-120:120);
if(delta>0){while(delta>0){this._lineUp();delta-=120;}}else{while(delta<0){this._lineDown();delta+=120;}}if(this.onscroll)this.onscroll();zf_stdPreventDefault(e);
zf_stdStopPropagation(e);};zf_ScrollBar._noop=function(e){e=$.event.fix(e);e.stopPropagation();e.preventDefault();return false;};zf_ScrollBar.prototype._ensureVisible=function(top,height,
speed,completed,needQueue){var dom=this.dom();var node=dom.parentNode;var pos=this.getScrollPos();var size=node.offsetHeight;if(top<pos)pos=top;else if(top-pos+height>size)pos=top+height-size;
var max=node.scrollHeight;pos=Math.min(pos+size,max)-size;dom=null;if(pos!=node.scrollTop){var self=this;if(speed){$(node).animate({scrollTop:pos},{duration:speed,
easing:"swing",complete:function(){self.scrollTo(pos);completed&&completed();},step:function(){self._update();},queue:!!needQueue});return;}else{node.scrollTop=pos;
this.scrollTo(pos);}}completed&&completed();};zf_ScrollBar.prototype._isVisible=function(top,height){var node=this.dom().parentNode;var pos=this.getScrollPos();var size=node.offsetHeight;
if(top<pos)pos=top;else if(top-pos+height>size)pos=top+height-size;if(pos!=node.scrollTop)return false;return true;};zf_ScrollBar.prototype.getLineHeight=function(){return this._cyLine;
};zf_ScrollBar.prototype.lineUp=function(){if(this._isClosed)return;if(this._nodesCreated)this._lineUp();};zf_ScrollBar.prototype.lineDown=function(){if(this._isClosed)return;if(this._nodesCreated)this._lineDown();
};;;function zfl_MessageList(id,totalCount,selectable){zfl_Control.prototype.constructor.call(this,id);var self=this;var handlers={_bake:function(name){this[name]=function(){if(self[name]!=null)self[name].apply(self,
arguments);};}};handlers._bake("onapprove");handlers._bake("onedit");handlers._bake("onemail");handlers._bake("ondelete");handlers._bake("onundelete");handlers._bake("oncensor");
handlers._bake("onuncensor");handlers._bake("onpurge");handlers._bake("onpublic");handlers._bake("onprivate");handlers._bake("onattachment");this.onemail=function(message){if(message.posterEmail&&message.posterEmail.length>0){window.location="mailto:"+message.posterEmail;
}};this._handlers=handlers;this._views=[];this._first=0x7FFFFFFF;this._last=-1;this._count=0;this._totalCount=totalCount;var last=null;var items=this.dom("items").getElementsByTagName("DIV");
for(var i=0;i<items.length;i++){for(var ve=items[i].firstChild;ve!=null;ve=ve.nextSibling){if(!zf_stdHasClassName(ve,"mv"))continue;var view=new zfl_MessageView(ve.id);
var index=view.getIndex();this._addView(view);this._first=Math.min(index,this._first);this._last=Math.max(index,this._last);this._count=this._count+1;;last=view;
break;}}this._updateCount();this._height=-1;if(selectable)this._sb=new zf_ScrollBar(this.id+"-items",20);this._selectable=selectable;this._selectedItem=-1;zf_stdMakeMethodsDeferred(this,
this.id,["setEditing","setLoading","setAccess"]);}zfl_MessageList.inherits(zfl_Control);zfl_MessageList.prototype.reinit=function(totalCount,messages){var dom=this.dom("items");var item=dom.firstChild;
while(item!=null){var next=item.nextSibling;if(zf_stdHasClassName(item,"ml-item"))dom.removeChild(item);item=next;}this._views=[];this._first=0x7FFFFFFF;this._last=-1;
this._count=0;this._totalCount=totalCount;this._selectedItem=-1;if(messages&&messages.length>0){this._last=messages[0].index;this.add(messages);}this.setHeight();
this._updateCount();if(this._sb)this._sb.scrollTo(0);};zfl_MessageList.prototype.add=function(message){if(message instanceof Array){for(var i=0;i<message.length;i++)this._update(message[i]);
}else{this._update(message);}this._totalCount=Math.min(this._count+this._first,this._totalCount);this._updateCount();this.setHeight();if(this._pendingSelection!=null){this._pendingSelection();
this._pendingSelection=null;}this._updateLinks();};zfl_MessageList.prototype._update=function(message){;var index=message.index;var view=this._views[index];var id=this.id+"-"+index;
if(view!=null){;;this._remove(index);}else{if(index>this._last)++this._totalCount;this._first=Math.min(index,this._first);this._last=Math.max(index,this._last);this._count=this._count+1;
}var item=document.createElement("DIV");item.className=(index==this._last)?"ml-item":"ml-item ml-border2";if(index==this._selectedItem)item.className+=" ml-s-selected";
item.innerHTML=zfl_MessageView.createHtml(id,message);var previous=null;if(this._count>0){;;for(var i=this._first;i<=this._last;i++){if(i==index)break;if(this._views[i]!=null)previous=this._views[i];
}}if(previous!=null){previous=previous.dom().parentNode;zf_stdReplaceClassName(previous,null,"ml-border2");}else previous=this.dom("more");this.dom("items").insertBefore(item,
previous);view=new zfl_MessageView(id,message);this._addView(view);};zfl_MessageList.prototype._remove=function(index){;var view=this._views[index];var dom=this.dom(index).parentNode;
dom.parentNode.removeChild(dom);this._views[index]=null;};zfl_MessageList.prototype.getFirstView=function(){return this._first<this._views.length?this._views[this._first]:null;
};zfl_MessageList.prototype.getSelectedView=function(){return this._selectedItem!=-1?this._views[this._selectedItem]:null;};zfl_MessageList.prototype.getView=function(index){return this._views[index];
};zfl_MessageList.prototype.getCount=function(){return this._totalCount;};zfl_MessageList.prototype._updateCount=function(){;var count=this._totalCount-this._count;count=Math.min(count,20);zf_stdReplaceClassName(this.dom(),
count>0?null:"ml-s-has-more",count>0?"ml-s-has-more":null);if(count>0)this.$dom("morecount").text(count);zf_stdReplaceClassName(this.dom(),this._totalCount>0?"ml-s-empty":null,
this._totalCount>0?null:"ml-s-empty");this._moreCount=count;this._updateLinks();};zfl_MessageList.prototype._more_onclick=function(){;if(this._moreCount<=0)return;if(this.onrequest)this.onrequest(this._first-1,
this._moreCount);};zfl_MessageList.prototype._addView=function(view){var index=view.getIndex();;this._views[index]=view;for(var key in this._handlers){if(key=="_bake")continue;
view[key]=this._handlers[key];}view.dom().onclick=this.eventHandler(this._item_onclick,index);};zfl_MessageList.prototype.prepareContainer=function(index){if(index<0){zf_stdReplaceClassName(this.dom(),
null,"ml-s-adding");if(this._last>=0){var view=this._views[this._last];zf_stdReplaceClassName(view.dom().parentNode,null,"ml-border2");}return this.dom("editnew");
};var dom=this._views[index].dom();zf_stdReplaceClassName(dom,null,"none");return dom.parentNode;};zfl_MessageList.prototype.restoreContainer=function(index){if(index<0){zf_stdReplaceClassName(this.dom(),
"ml-s-adding",null);if(this._last>=0){var view=this._views[this._last];zf_stdReplaceClassName(view.dom().parentNode,"ml-border2",null);}return;};var dom=this._views[index].dom();
zf_stdReplaceClassName(dom,"none",null);};zfl_MessageList.prototype.remove=function(index){;if(index==this._selectedItem){this._selectedItem=-1;if(this.ondeselect)this.ondeselect(index);
}this._remove(index);--this._totalCount;--this._count;if(index==this._last){while(this._views[this._last]==null&&this._last>=0)this._last--;}else if(index==this._first){while(this._views[this._first]==null&&this._first<this._views.length)this._first++;
}this._updateCount();this.setHeight();};zfl_MessageList.prototype.setEditing=function(editing){zf_stdReplaceClassName(this.dom(),editing?null:"mv-s-editing",editing?"mv-s-editing":null);
this.setHeight();};zfl_MessageList.prototype.setLoading=function(loading){zf_stdReplaceClassName(this.dom(),loading?null:"ml-s-loading",loading?"ml-s-loading":null);this.setHeight();
};zfl_MessageList.prototype.setAccess=function(mask,mailboxType){var check=(mailboxType!=zf_MailboxType.PhotoComments&&mailboxType!=zf_MailboxType.BlogPostComments)?{add:zf_AccessMask.NoPublicGuestbookPosts|zf_AccessMask.NoPrivateGuestbookPosts,
registeredOnly:zf_AccessMask.NoAnonymousGuestbookPosts}:{add:zf_AccessMask.NoPublicComments|zf_AccessMask.NoPrivateComments,registeredOnly:zf_AccessMask.NoAnonymousComments};
var allowAdd=(mask&check.add)!=check.add;var registeredOnly=(mask&check.registeredOnly)!=0;var dom=this.dom();zf_stdReplaceClassName(dom,"ml-s-not-allowed",null);
zf_stdReplaceClassName(dom,"ml-s-login-required",null);if(!allowAdd)zf_stdReplaceClassName(dom,null,"ml-s-not-allowed");else if(zf_userId==0&&registeredOnly)zf_stdReplaceClassName(dom,
null,"ml-s-login-required");this.setHeight();};zfl_MessageList.prototype._add_onclick=function(){if(this.onadd)this.onadd();};zfl_MessageList.prototype._login_onclick=function(){if(this.onlogin)this.onlogin();
};zfl_MessageList.prototype.setHeight=function(height){if(height==null)height=this._height;else this._height=height;if(height>0){height-=zf_stdGetHeightOverall(this.dom("header"));
height=Math.max(height,0);this.dom("outer").style.height=height+"px";this.dom("outer").style.overflow="hidden";this.dom("inner").style.height="100%";this.dom("inner").style.overflow="hidden";
}else{this.dom("outer").style.cssText="";this.dom("inner").style.cssText="";}if(this._sb)this._sb.update();};zfl_MessageList.prototype._item_onclick=function(event,index){;if(!this._selectable)return;
this.select(index);};zfl_MessageList.prototype.select=function(index){;if(!this._selectable)return;if(this._selectedItem==index)return;if(this._selectedItem!=-1)this.deselect(this._selectedItem);
var view=this._views[index];if(view!=null){zf_stdReplaceClassName(view.dom().parentNode,null,"ml-s-selected");this._selectedItem=index;var item=view.dom().parentNode;
var itemOffset=zf_stdGetOffset(item,this.dom("items")).cy;var itemHeight=zf_stdGetHeightOverall(item);var scrollHeight=this.dom("inner").offsetHeight;var totalHeight=this.dom("items").offsetHeight;
var scrollOffset=this._sb.getScrollPos();;if(itemOffset<scrollOffset){this._sb.scrollTo(itemOffset);}else if(itemOffset+itemHeight>scrollOffset+scrollHeight){if(itemHeight>scrollHeight)this._sb.scrollTo(itemOffset);
else if(index==this._first)this._sb.scrollTo(totalHeight-scrollHeight);else this._sb.scrollTo(itemOffset+itemHeight-scrollHeight);}if(this.onselect)this.onselect(index);
}this._pendingSelection=null;};zfl_MessageList.prototype.deselect=function(index){;if(this._selectedItem==index){var view=this._views[this._selectedItem];if(view!=null){zf_stdReplaceClassName(view.dom().parentNode,
"ml-s-selected",null);this._selectedItem=-1;;if(this.ondeselect)this.ondeselect(index);}}};zfl_MessageList.prototype.selectNext=function(){if(this._selectedItem==-1)return;for(var i=this._selectedItem+1;
i<=this._last;i++){var next=this._views[i];if(next){this.select(i);return;}}};zfl_MessageList.prototype.selectPrevious=function(){if(this._selectedItem==-1)return;for(var i=this._selectedItem-1;
i>=this._first;i--){var previous=this._views[i];if(previous){this.select(i);if(i<this._first+5&&this._moreCount>0)this._more_onclick();return;}}this._pendingSelection=null;
if(this._moreCount>0){var self=this;var first=this._first;this._pendingSelection=function(){for(var j=first-1;j>=0;j--){if(self._views[j]){self.select(j);return;
}}};this._more_onclick();}};zfl_MessageList.prototype._top_onclick=function(){if(document.location.hash=="#guestbook")document.location.hash="#";window.scrollTo(0,0);};zfl_MessageList.prototype._updateLinks=function(){var comments='Leave a Comment';
if(this._totalCount==1)comments='1 Comment';else if(this._totalCount>1)comments='{0} Comments';comments=zf_stdFormatString(comments,this._totalCount);$('.ml-add-comments-link').text(comments);
};;;function zf_MessageUpdater(){};;;function zfl_MessageEdit(id,comments){zfl_Control.prototype.constructor.call(this,id);this._comments=comments;this._private=false;var self=this;var onchange=function(){var radio=self.dom("form").elements["me-access"];
self._private=radio[1].checked;zf_stdReplaceClassName(self.dom("access-info"),!self._private?"me-private-info":"me-public-info",!self._private?"me-public-info":"me-private-info");
};var radio2=this.dom("form").elements["me-access"];radio2[0].onclick=radio2[1].onclick=onchange;var radio3=this.dom("form").elements["me-attachment"];if(radio3){radio3[0].onclick=radio3[1].onclick=radio3[2].onclick=this.closure(this._attachment_onchange);
}this.dom("body").onkeydown=function(){zf_stdReplaceClassName(self.dom("body-field"),"me-missing",null);self.showMessage();};this.dom("name").onkeydown=function(){zf_stdReplaceClassName(self.dom("name-field"),
"me-missing",null);self.showMessage();};this.dom("url").onkeydown=function(){self.showMessage();};this.dom("email").onkeydown=function(){zf_stdReplaceClassName(self.dom("email-field"),
"me-missing",null);self.showMessage();};zf_stdMakeMethodsDeferred(this,this.id,["setFocus","showMessage"]);}zfl_MessageEdit.inherits(zfl_Control);zfl_MessageEdit.prototype._getUpdater=function(){var updater=new zf_MessageUpdater();
if(this._original==null){updater.posterName=zf_userId==0?this.dom("name").value:null;updater.isPrivate=this._private;}updater.posterUrl=zf_stdTrim(this.dom("url").value);
updater.posterEmail=zf_stdTrim(this.dom("email").value);updater.body=this.dom("body").value;return updater;};zfl_MessageEdit.prototype._save_onclick=function(){if(!this._validate())return;
this.setSaving(true);zfl_Button.onmouseout(this.dom("save"));zfl_Button.onmouseout(this.dom("add"));if(this.onsave)this.onsave(this._getUpdater());};zfl_MessageEdit.prototype._cancel_onclick=function(){zfl_Button.onmouseout(this.dom("cancel"));
if(this.oncancel)this.oncancel();};zfl_MessageEdit.prototype.setOriginal=function(message){this._original=message;zf_stdReplaceClassName(this.dom(),"me-s-saving",null);zf_stdReplaceClassName(this.dom(),
"me-s-continue",null);if(!message){zf_stdReplaceClassName(this.dom(),"me-s-editing",null);this.dom("body").value="";this._attachmentType=zf_AttachmentType.None;this._attachment=null;
}else{zf_stdReplaceClassName(this.dom(),null,"me-s-editing");this.dom("header").innerHTML=zfl_MessageView.createHeaderHtml(this.id+"-view",message);var body=message.body;
body=body.replace(/(\<a[^\>]+\>)|(\<\/a\>)/g,"");this.dom("body").value=zf_stdHtmlDecode(body);this.dom("url").value=message.posterUrl;if(message.posterEmail)this.dom("email").value=message.posterEmail;
zf_stdReplaceClassName(this.dom("access-info"),null,"none");this._attachmentType=message.attachmentType;this._attachment=message.attachment;}zf_stdReplaceClassName(this.dom("name-field"),
"me-missing",null);zf_stdReplaceClassName(this.dom("body-field"),"me-missing",null);var attachmentRadio=this.dom("form").elements["me-attachment"];if(attachmentRadio)attachmentRadio[this._attachmentType].checked=true;
if(this.onattachment)this.onattachment(this._attachmentType,this._attachment);this.setSaving(false);this.showMessage();};zfl_MessageEdit.prototype.getOriginal=function(){return this._original;
};zfl_MessageEdit.prototype._validate=function(){var missingName=false,missingText=false;var self=this;var check=function(name){var value=self.dom(name).value;if(zf_stdTrim(value).length==0){zf_stdReplaceClassName(self.dom(name+"-field"),
null,"me-missing");return true;}return false;};if(zf_userId==0&&this._original==null)missingName=check("name");missingText=check("body");if(missingText&&missingName)this.showMessage(this._comments?"Please enter your name and the comment":"Please enter your name and the guestbook entry",
true);else if(missingName)this.showMessage("Please enter your name",true);else if(missingText)this.showMessage(this._comments?"Please type the comment":"Please type the guestbook entry",
true);this.setFocus();if(missingText||missingName)return false;var email=zf_stdTrim(this.dom("email").value);if(email&&email.length>0&&!zf_stdIsValidEmail(email)){$(this.dom("email-field")).addClass("me-missing");
this.showMessage("This is not a valid email address.",true);return false;}return true;};zfl_MessageEdit.prototype.showMessage=function(message,error){if(error)this.setSaving(false);
if(this.onerror){this.onerror(message,error);return;}var html="";if(message)html=['<span class="',error?"me-error me-font3 me-color3":"me-info",'">',message,'</span>'].join("");
this.dom("message").innerHTML=html;};zfl_MessageEdit.prototype.setAccess=function(mask,mailboxType,video){;;var check=(mailboxType!=zf_MailboxType.PhotoComments&&mailboxType!=zf_MailboxType.BlogPostComments)?{nopublic:zf_AccessMask.NoPublicGuestbookPosts,
noprivate:zf_AccessMask.NoPrivateGuestbookPosts,noanonymous:zf_AccessMask.NoAnonymousGuestbookPosts}:{nopublic:zf_AccessMask.NoPublicComments,noprivate:zf_AccessMask.NoPrivateComments,
noanonymous:zf_AccessMask.NoAnonymousComments};var radio=this.dom("form").elements["me-access"];var domInfo=this.dom("access-info");zf_stdReplaceClassName(domInfo,
"me-private-info",null);zf_stdReplaceClassName(domInfo,"me-public-info",null);if(mask&(check.nopublic|check.noprivate)){zf_stdReplaceClassName(this.dom("access-info"),
"none",null);zf_stdReplaceClassName(this.dom("access-field"),null,"none");zf_stdReplaceClassName(domInfo,null,(mask&check.nopublic)?"me-private-info":"me-public-info");
radio[(mask&check.nopublic)?1:0].checked=true;this._private=(mask&check.noprivate)==0;}else{zf_stdReplaceClassName(this.dom("access-field"),"none",null);zf_stdReplaceClassName(this.dom("access-info"),
zf_userId==0?"none":null,zf_userId==0?null:"none");zf_stdReplaceClassName(domInfo,null,"me-public-info");radio[0].checked=true;this._private=false;}this.$('.me-attachment').toggle(!video);
};zfl_MessageEdit.prototype._login_onclick=function(){if(this.onlogin)this.onlogin();};zfl_MessageEdit.prototype._attachment_onchange=function(){var radio=this.dom("form").elements["me-attachment"];
if(radio[0].checked){this._attachmentType=zf_AttachmentType.None;this._attachment=null;}else if(radio[1].checked){this._attachmentType=zf_AttachmentType.CroppingSuggestion;
this._attachment=null;}else if(radio[2].checked){this._attachmentType=zf_AttachmentType.HighlightedArea;this._attachment=null;}if(this.onattachment)this.onattachment(this._attachmentType,
this._attachment);};zfl_MessageEdit.prototype.setFocus=function(){try{if(this.dom("name").tagName!="INPUT"||this.dom("name").value)this.dom("body").focus();else this.dom("name").focus();
}catch(e){}};zfl_MessageEdit.prototype.setSaving=function(saving){zf_stdReplaceClassName(this.dom(),saving?null:"me-s-saving",saving?"me-s-saving":null);};zfl_MessageEdit.prototype.setContinue=function(error,
message,oncontinue){if(error==null){zf_stdReplaceClassName(this.dom(),"me-s-continue",null);return;}zf_stdReplaceClassName(this.dom("continue-message"),error?null:"me-color3",
error?"me-color3":null);zf_stdSetText(this.dom("continue-message"),message);zf_stdReplaceClassName(this.dom(),"me-s-saving","me-s-continue");this.dom("continue").onclick=oncontinue;
};;;function zfl_Guestbook(id,mailbox,list,edit,mask,home,mailboxToken){zfl_Control.prototype.constructor.call(this,id);var self=this;this._list=list;this._edit=edit;this._mailbox=mailbox;
this._mailboxToken=mailboxToken;this._editable=true;this._mask=mask;if(edit){edit.onsave=this.closure(this._edit_onsave);edit.oncancel=this.closure(this._edit_oncancel);
edit.onlogin=function(){if(self.onlogin)self.onlogin();};}list.onrequest=this.closure(this._list_onrequest);list.onedit=this.closure(this._list_onedit);list.onadd=this.closure(this.add,
true);list.onlogin=function(){if(self.onlogin)self.onlogin();};list.ondelete=this.closure(this._list_onaction,"deleteMessage");list.onundelete=this.closure(this._list_onaction,
"undeleteMessage");list.oncensor=this.closure(this._list_onaction,"censorMessage");list.onuncensor=this.closure(this._list_onaction,"uncensorMessage");list.onpurge=this.closure(this._list_onaction,
"purgeMessage");list.onapprove=this.closure(this._list_onaction,"approveMessage");list.onpublic=this.closure(this._list_onaction,"makePublic");list.onprivate=this.closure(this._list_onaction,
"makePrivate");$('a.guestbook-add-link').click(function(){var offset=zf_stdGetOffset(self.dom());$('html,body').animate({scrollTop:offset.cy-50},300);self.add();
return false;});$('a.guestbook-add-link-so').click(function(){var offset=zf_stdGetOffset(self.dom());$('html,body').animate({scrollTop:offset.cy-50},300);return false;
});if(location.hash=='#addcomment'){setTimeout(function(){var offset=zf_stdGetOffset(self.dom());$('html,body').animate({scrollTop:offset.cy-50},300);self.add();
},500);}}zfl_Guestbook.inherits(zfl_Control);zfl_Guestbook.prototype.add=function(withScroll){if(!this._editable)return;var type=this._mailbox.type;var check=(type!=zf_MailboxType.PhotoComments&&type!=zf_MailboxType.BlogPostComments)?{nopublic:zf_AccessMask.NoPublicGuestbookPosts,
noprivate:zf_AccessMask.NoPrivateGuestbookPosts,noanonymous:zf_AccessMask.NoAnonymousGuestbookPosts}:{nopublic:zf_AccessMask.NoPublicComments,noprivate:zf_AccessMask.NoPrivateComments,
noanonymous:zf_AccessMask.NoAnonymousComments};if((this._mask&(check.nopublic|check.noprivate))==(check.nopublic|check.noprivate)||(this._mask&check.noanonymous)!=0&&zf_userId==0)return;
this._edit.setOriginal(null);this._edit.setAccess(this._mask,this._mailbox.type);this._enableEditing(false);var container=this._list.prepareContainer(-1);var edit=this._edit.dom();
container.appendChild(edit.parentNode.removeChild(edit));this._edit.setFocus();this.notifyResize();if(withScroll){var offset=zf_stdGetOffset(edit);var scroll=zf_stdGetClientScroll();
var editHeight=$(edit).outerHeight(true)+40;var clientHeight=zf_stdGetClientHeight();if(scroll.cy+clientHeight<offset.cy+editHeight){scroll=offset.cy+Math.min(clientHeight-10,
editHeight)-clientHeight;$('html,body').animate({scrollTop:scroll},300);}}this._auth=new zf_MailboxAuthorization(this._mailbox);};zfl_Guestbook.prototype.canAdd=function(){var canAdd=!(this._mask&zf_AccessMask.NoPublicGuestbookPosts)||!(this._mask&zf_AccessMask.NoPrivateGuestbookPosts);
if(canAdd&&zf_userId==0&&!!(this._mask&zf_AccessMask.NoAnonymousGuestbookPosts))canAdd=false;return canAdd;};zfl_Guestbook.prototype._edit_onsave=function(updater){var self=this;
var original=this._edit.getOriginal();var onpost=function(message,error){if(!error){if(message!=null){self._enableEditing(true);self._list.add(message);}else if(original!=null){self._enableEditing(true);
self._list.remove(original.index);}else{if(zf_userId==0){var msg=updater.isPrivate?(self._mailbox.type==zf_MailboxType.BlogPostComments?"Your comment has been sent directly to the owner of the blog. It will not appear in the list.":"Your entry has been sent directly to the owner of the guestbook. It will not appear in the list."):(self._mailbox.type==zf_MailboxType.BlogPostComments?"Your entry will appear in this list once it is approved by the blog owner.":"Your entry will appear in this list once it is approved by the guestbook owner.");
self._edit.setContinue(false,msg,function(){self._enableEditing(true);self._updateCount();self.notifyResize();});self.notifyResize();return;}}self._enableEditing(true);
self._updateCount();self.notifyResize();return;}self._edit.setContinue(true,error.message,function(){self._edit.setContinue();});};if(original==null)zf_Message.postMessage(this._auth,
this._mailbox,updater,onpost);else zf_Message.updateMessage(this._auth,this._mailbox,original.index,updater,onpost);};zfl_Guestbook.prototype._edit_oncancel=function(){this._enableEditing(true);
this.notifyResize();};zfl_Guestbook.prototype._enableEditing=function(enable){this._editable=enable;this._list.setEditing(!enable);if(enable){var editbox=this.dom("edit");var edit=this._edit.dom();
if(edit.parentNode!=editbox)editbox.appendChild(edit.parentNode.removeChild(edit));var original=this._edit.getOriginal();this._list.restoreContainer(original?original.index:-1);
}};zfl_Guestbook.prototype._list_onrequest=function(first,count){var self=this;var onload=function(messages,error){if(!error){self._list.add(messages);self.notifyResize();return;
}};zf_Message.loadMessageRange(this._mailbox,this._mailboxToken,first,count,onload);};zfl_Guestbook.prototype._list_onedit=function(message){this._edit.setOriginal(message);this._enableEditing(false);
var container=this._list.prepareContainer(message.index);var edit=this._edit.dom();container.appendChild(edit.parentNode.removeChild(edit));this._edit.setFocus();
this._auth=new zf_MailboxAuthorization(this._mailbox);this.notifyResize();};zfl_Guestbook.prototype._list_onaction=function(message,action){var self=this;var oncomplete=function(updated,
error){if(!error){if(updated)self._list.add(updated);else self._list.remove(message.index);}self._updateCount();self._enableEditing(true);self.notifyResize();};this._enableEditing(false);
this.notifyResize();zf_Message[action](message.mailbox,message.index,oncomplete);};zfl_Guestbook.prototype._updateCount=function(){var count=this._list.getCount();zf_stdReplaceClassName(this.dom("empty"),
count==0?"none":null,count==0?null:"none");if(this.oncountchange)this.oncountchange(count);};zfl_Guestbook.prototype._login_onclick=function(){if(this.onlogin)this.onlogin();
};zfl_Guestbook.prototype.getCount=function(){return this._list.getCount();};;;function zfl_RootLink(id){zfl_Control.prototype.constructor.call(this,id);}zfl_RootLink.inherits(zfl_Control);zfl_RootLink.prototype.more=function(more){this.$().toggleClass("rootlink-more",
more).toggleClass("rootlink-open",!more);};;function zfl_UserLayout(id,global,local){if(zf_stdNoArgs(arguments))return;zfl_Layout.prototype.constructor.call(this,id,global,
local);this._data=zfl_stdTransformResponse(local.data,"data");this.setupGuestbook(global,local);this._rootLink=local.rootLink;}zfl_UserLayout.inherits(zfl_Layout);zfl_UserLayout.prototype.onrecalc=function(){this.recalcBins();
zfl_Layout.prototype.onrecalc.call(this);};zfl_UserLayout.prototype.recalcBins=function(){if(this._bins.featured&&this._bins.featured.expanded)this._grids.featured.recalcLayout();
if(this._bins.recent&&this._bins.recent.expanded)this._grids.recent.recalcLayout();if(this._bins.root&&this._bins.root.expanded){var info=this._grids.root.recalcLayout();
if(this._rootLink)this._rootLink.more(info.itemsPerPage<this._data.root.length);}};zfl_UserLayout.prototype.onload=function(){if(this._grids.recent){this.initGrid(this._grids.recent,
zfl_PhotoViewStyle.FolderElement,this._grids.recentParams,this._data.recent);this._grids.recent.minRows=1;this._grids.recent.setHeight(0);}this.initGrid(this._grids.featured,
zfl_PhotoViewStyle.FolderElement,this._grids.featuredParams,this._data.featured);if(this._grids.root){this.initGrid(this._grids.root,zfl_PhotoViewStyle.FolderElement,
this._grids.rootParams,this._data.root);if(this._rootLink)this._grids.root.maxRows=2;}zfl_Layout.prototype.onload.call(this);};;;;function zfl_FolderLayout(id,global,local){if(zf_stdNoArgs(arguments))return;
zfl_Layout.prototype.constructor.call(this,id,global,local);this._data={folder:zfl_stdTransformResponse(local.data.folder,"folder")};this.setupGuestbook(global,local);
}zfl_FolderLayout.inherits(zfl_Layout);zfl_FolderLayout.prototype.onload=function(){this.initGrid(this._grids.folder,zfl_PhotoViewStyle.FolderElement,this._grids.folderParams,this._data.folder);
zfl_Layout.prototype.onload.call(this);};zfl_FolderLayout.prototype.onrecalc=function(){if(this._grids.folder!=null)this._grids.folder.recalcLayout();zfl_Layout.prototype.onrecalc.call(this);
};;;;function zf_Sociable(){zf_Object.prototype.constructor.call(this);}zf_Sociable.inherits(zf_Object);zf_Sociable.prototype.shareOnFacebook=function(shareable){;var fbUrl=['http://www.facebook.com/sharer.php?u=',
encodeURIComponent(shareable.url)];if(shareable.title)fbUrl.push('&t=',encodeURIComponent(shareable.title));var name=Math.floor(Math.random()*1000);window.open(fbUrl.join(''),
name.toString(),'toolbar=0,status=0,width=626,height=436');return false;};zf_Sociable.prototype.shareOnTwitter=function(shareable){;var title=shareable.title?shareable.title:'';
var url=['/zf/partners/twitter/tweet.aspx?u=',encodeURIComponent(shareable.url)];url.push('&t=',encodeURIComponent(title));window.open(url.join(''));return false;
};zf_Sociable.prototype.shareOnGPlus=function(shareable){;var url=['https://plus.google.com/share?url=',encodeURIComponent(shareable.url)];var name=Math.floor(Math.random()*1000);
window.open(url.join(''),name.toString(),'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;};zf_Sociable.prototype.shareOnPinterest=function(shareable){;
;;var title=shareable.title?shareable.title:'';var url=['http://pinterest.com/pin/create/bookmarklet/','?media=',encodeURIComponent(shareable.largestImage),'&url=',
encodeURIComponent(shareable.url),'&title=',encodeURIComponent(title),'&is_video=',shareable.video?"true":"false",'&description=',encodeURIComponent(title)];var name=Math.floor(Math.random()*1000);
window.open(url.join(''),name.toString(),'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=700');return false;};zf_Sociable.prototype.shareViaEmail=function(params){var p=params;
var subject=p.isBrandingRemoved?"Invitation to view photographs":"Invitation to view photographs on Zenfolio";var urlPhoto=p.photo!=null?this.sharePhoto(p.photo).url:null;
var urlGallery=this.shareGroupItem(p.groupItem).url;var urlSlideshow=this.shareSlideshow(p.groupItem).url;var isCollection=p.groupItem instanceof zf_PhotoSet&&p.groupItem.type==zf_PhotoSet.Collection;
var body;if(p.isSlideshowVisible){if(p.photo==null){body=zf_stdFormatString(isCollection?"Collection:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}":"Gallery:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}",
urlGallery,urlSlideshow);}else{if(p.photo.video){body=zf_stdFormatString(isCollection?"Collection:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}  \r\n\r\nVideo:\r\n{2}":"Gallery:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}  \r\n\r\nVideo:\r\n{2}",
urlGallery,urlSlideshow,urlPhoto);}else{body=zf_stdFormatString(isCollection?"Collection:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}  \r\n\r\nPhoto:\r\n{2}":"Gallery:\r\n{0}  \r\n\r\nSlideshow:\r\n{1}  \r\n\r\nPhoto:\r\n{2}",
urlGallery,urlSlideshow,urlPhoto);}}}else{if(p.photo==null){body=zf_stdFormatString(isCollection?"Collection:\r\n{0}":"Gallery:\r\n{0}",urlGallery);}else{if(p.photo.video){body=zf_stdFormatString(isCollection?"Collection:\r\n{0}  \r\n\r\nVideo:\r\n{1}":"Gallery:\r\n{0}  \r\n\r\nVideo:\r\n{1}",
urlGallery,urlSlideshow,urlPhoto);}else{body=zf_stdFormatString(isCollection?"Collection:\r\n{0}  \r\n\r\nPhoto:\r\n{1}":"Gallery:\r\n{0}  \r\n\r\nPhoto:\r\n{1}",
urlGallery,urlPhoto);}}}var footer="";if(!p.isBrandingRemoved){var footerFormat;if(p.refCode&&p.refCode!=""&&p.refAmount&&p.refAmount!=""){footerFormat="\r\n\r\n-----------------------------------------------\r\Open a Zenfolio account with my referral code {0} and save {1}";
footer=zf_stdFormatString(footerFormat,p.refCode,p.refAmount);}else{footerFormat="\r\n\r\n-----------------------------------------------\r\nGet a Free Trial account on Zenfolio in less than 60 seconds\r\n{0}";
var urlZenfolio="http://"+zf_defaultHost;footer=zf_stdFormatString(footerFormat,urlZenfolio);}}var mailto="mailto:?subject="+escape(subject)+"&body="+escape(body+footer);
document.location.href=mailto;};zf_Sociable.prototype.bind=function(node,sharefunction,shareable){var args=[];for(var i=2;i<arguments.length;i++)args.push(arguments[i]);var self=this;
$(node).unbind('click.sociable').bind('click.sociable',function(e){sharefunction.apply(self,args);});};zf_Sociable.prototype.sharePhoto=function(photo,processingMethod){if(typeof(processingMethod)=="undefined")processingMethod=zf_ProcessingMethod.StandardThumbnail;
var owner=null;if(photo.photoSet!=null)owner=photo.photoSet.owner;else if(photo.gallery!=null)owner=photo.owner||photo.gallery.owner;var hostname=(!owner||!owner.domainName||owner.domainName=="")?document.location.hostname:owner.domainName;
var url=photo.getHref('external');var icon=['http://',hostname,photo.getExternalUrl(zf_ProcessingMethod.StandardThumbnail)].join('');var processedImage=['http://',
hostname,photo.getExternalUrl(processingMethod)].join('');var largestImage=['http://',hostname,photo.getExternalUrl(photo.pickMethod(100000,100000,true))].join('');
var share={url:url,title:photo.title,photoId:photo.id,summary:'',icon:icon,video:photo.video,processedImage:processedImage,largestImage:largestImage};return share;
};zf_Sociable.prototype.sharePhotoSet=function(photoSet){var share={url:photoSet.getHref('external'),title:photoSet.title?photoSet.title:'',summary:'',icon:''};return share;
};zf_Sociable.prototype.shareSlideshow=function(photoSet){var share={url:[photoSet.getHref('external'),'/slideshow'].join(''),title:photoSet.title?photoSet.title:'',summary:'',
icon:''};return share;};zf_Sociable.prototype.sharePhotoSlideshow=function(photo,text){var url=[photo.gallery.getHref('external'),'/e',photo.id.toString(16),'/slideshow'].join('');
var share={url:url,title:photo.title?photo.title:'',summary:'',icon:''};return share;};zf_Sociable.prototype.shareFolder=function(folder){var share={url:folder.getHref('external'),
title:folder.title?folder.title:'',summary:'',icon:''};return share;};zf_Sociable.prototype.shareGroupItem=function(groupItem){var share={url:groupItem.getHref('external'),
title:groupItem.title?groupItem.title:'',summary:'',icon:''};return share;};;function zf_ShareFrame(id,init){zf_Control.prototype.constructor.call(this,id);this._tabs=init.tabs;
this._links=init.links;this._share=init.share;this._directLinks=init.directLinks;this._embedImage=init.embedImage;this._embedVideo=init.embedVideo;this._parent=null;
this._params={isSlideshowVisible:init.isSlideshowVisible,isBrandingRemoved:init.isBrandingRemoved,refCode:init.refCode,refAmount:init.refAmount,groupItem:null,photo:null};
this._tabs.setShareFrame(this);$(document).ready(this.closure(this._init));}zf_ShareFrame.inherits(zf_Control);zf_ShareFrame.SECTION_NORMAL_CLASSES="share-bgcolor5 share-color5";zf_ShareFrame.SECTION_EXPANDED_CLASSES="share-bgcolor6 share-color6";
zf_ShareFrame.SECTION_MODE={PHOTO:1,GROUP_ITEM:2,SLIDESHOW:3};zf_ShareFrame.prototype.setParentObject=function(parent){;this._parent=parent;this._share.setParentObject(parent);};zf_ShareFrame.prototype.show=function(groupItem,
photo){;this.$(".sf-section").removeClass("sf-section-e").find(".sf-body").hide();this._params.groupItem=groupItem;this._params.photo=photo;this._tabs.setData(this._params);
this._links.setData(this._params);this._share.setData(this._params);if(this._directLinks!=null)this._directLinks.setData(this._params);if(this._embedImage!=null)this._embedImage.setData(this._params);
if(this._embedVideo!=null)this._embedVideo.setData(this._params);this.setMode(photo!=null?zf_ShareFrame.SECTION_MODE.PHOTO:zf_ShareFrame.SECTION_MODE.GROUP_ITEM);
this._update();this._expandSection(this.$(".sf-section").first());};zf_ShareFrame.prototype.setMode=function(mode){;var linksH4Text="";var copyrightText="";var directLinksTitle="";
switch(mode){case zf_ShareFrame.SECTION_MODE.PHOTO:linksH4Text=this._params.photo.video?"Link to Video":"Link to Photo";copyrightText=(this._params.photo.copyright)?this._params.photo.copyright:this._params.photo.owner.copyright;
directLinksTitle=this._params.photo.video?"Direct links to videos":"Direct links to images";break;case zf_ShareFrame.SECTION_MODE.GROUP_ITEM:linksH4Text=zf_ShareFrame.chooseTextForGroupItem(this._params.groupItem,
"Link to Group","Link to Gallery","Link to Collection");copyrightText=this._params.groupItem.owner.copyright;break;case zf_ShareFrame.SECTION_MODE.SLIDESHOW:linksH4Text="Link to Slide Show";
copyrightText=this._params.groupItem.owner.copyright;break;default:;break;}this.$dom("share").toggleClass("sf-section",mode==zf_ShareFrame.SECTION_MODE.PHOTO).toggleClass("sf-section-perm",
mode!=zf_ShareFrame.SECTION_MODE.PHOTO);this.$dom("links").find(".sf-head H4").text(linksH4Text);var showDirectLinksSection=mode==zf_ShareFrame.SECTION_MODE.PHOTO;
this.$dom("direct-links").toggle(showDirectLinksSection);this.$dom("direct-links").find(".sf-head H4").text(directLinksTitle);var showEmbedSection=mode==zf_ShareFrame.SECTION_MODE.PHOTO&&(!this._params.photo.video&&this._embedImage!=null||this._params.photo.video&&this._embedVideo!=null);
this.$dom("embed").toggle(showEmbedSection);if(this.$dom("embed").hasClass("sf-section-e")&&mode!=zf_ShareFrame.SECTION_MODE.PHOTO){this._expandSection(this.$(".sf-section").first());
}this._tabs.setMode(mode);this._links.setMode(mode);this._share.setMode(mode);if(this._directLinks!=null)this._directLinks.setMode(mode);if(this._embedImage!=null)this._embedImage.setMode(mode);
if(this._embedVideo!=null)this._embedVideo.setMode(mode);this._update();if(this._parent!=null)this._parent.updateCopyright(copyrightText);};zf_ShareFrame.prototype._init=function(){var self=this;
this.$(".sf-head").click(function(){if($(this).closest(".sf-section-perm").length>0)return;self._expandSection($(this).closest(".sf-section"));});};zf_ShareFrame.prototype._expandSection=function(newSection){;
if(newSection.hasClass("sf-section-e")){this._update();return;}var oldSection=this.$(".sf-section-e");;this.$(".sf-section").removeClass("sf-section-e").find(".sf-head").removeClass(zf_ShareFrame.SECTION_EXPANDED_CLASSES).addClass(zf_ShareFrame.SECTION_NORMAL_CLASSES);
newSection.addClass("sf-section-e").find(".sf-head").removeClass(zf_ShareFrame.SECTION_NORMAL_CLASSES).addClass(zf_ShareFrame.SECTION_EXPANDED_CLASSES);this._update();
var self=this;newSection.find(".sf-body").stop(false,true).animate({"height":"show","marginTop":"show","marginBottom":"show","paddingTop":"show","paddingBottom":"show"},
{duration:"fast",step:function(){self._update();},complete:function(){$(this).show();}});oldSection.find(".sf-body").stop(false,true).animate({"height":"hide","marginTop":"hide",
"marginBottom":"hide","paddingTop":"hide","paddingBottom":"hide"},{duration:"fast",complete:function(){$(this).hide();}});};zf_ShareFrame.prototype._update=function(){if(this.$().is(":hidden"))return;
this._tabs.update();this._links.update();this._share.update();if(this._directLinks!=null)this._directLinks.update();if(this._embedImage!=null)this._embedImage.update();
if(this._embedVideo!=null)this._embedVideo.update();};zf_ShareFrame.chooseTextForGroupItem=function(groupItem,textGroup,textGallery,textCollection){if(groupItem instanceof zf_Folder)return textGroup;
else{;;if(groupItem.type==zf_PhotoSet.Gallery)return textGallery;else return textCollection;}};;function zfs_Tabs(id){zf_Control.prototype.constructor.call(this,id);this._$photo=this.$dom("photo");
this._$groupItem=this.$dom("group-item");this._$slideshow=this.$dom("slideshow");this._$tabs=this._$photo.add(this._$groupItem.add(this._$slideshow));this._photo=null;
$(document).ready(this.closure(this._init));}zfs_Tabs.inherits(zf_Control);zfs_Tabs.TAB_NORMAL_CLASSES="share-bgcolor1 share-color1 share-font1";zfs_Tabs.TAB_HOVER_CLASSES="share-bgcolor2 share-color2 share-font2";
zfs_Tabs.TAB_ACTIVE_CLASSES="share-bgcolor4 share-color4 share-font4 share-border4";zfs_Tabs.prototype.setShareFrame=function(share){this._share=share;};zfs_Tabs.prototype._init=function(){var SM=zf_ShareFrame.SECTION_MODE;
this._$photo.bind("click",this.closure(this._onTabClick,SM.PHOTO));this._$groupItem.bind("click",this.closure(this._onTabClick,SM.GROUP_ITEM));this._$slideshow.bind("click",
this.closure(this._onTabClick,SM.SLIDESHOW));this._$tabs.hover(this.closure(this._onTabMouseOver),this.closure(this._onTabMouseOut));};zfs_Tabs.prototype.setData=function(params){;
this._$photo.toggle(params.photo!=null);var isSlideshowVisible=!(params.groupItem instanceof zf_Folder)&&this._$slideshow.length>0;this._$slideshow.toggle(isSlideshowVisible);
this._$groupItem.toggleClass("sf-tab-last",!isSlideshowVisible);this._$slideshow.toggleClass("sf-tab-last",isSlideshowVisible);this._photo=params.photo;if(this._photo!=null&&this._photo.video)this._$photo.text("Share Video");
else this._$photo.text("Share Photo");var giTabName=zf_ShareFrame.chooseTextForGroupItem(params.groupItem,"Share Group","Share Gallery","Share Collection");this._$groupItem.text(giTabName);
};zfs_Tabs.prototype.setMode=function(mode){;this._resetTabs();var $tab=null;switch(mode){case zf_ShareFrame.SECTION_MODE.PHOTO:$tab=this._$photo;break;case zf_ShareFrame.SECTION_MODE.GROUP_ITEM:$tab=this._$groupItem;
break;case zf_ShareFrame.SECTION_MODE.SLIDESHOW:$tab=this._$slideshow;break;default:;break;};this._activateTab($tab);};zfs_Tabs.prototype.update=function(){if(this.$().is(":hidden"))return;
};zfs_Tabs.prototype._onTabClick=function(e,mode){e.stopPropagation();e.preventDefault();var $el=$(e.target);$el.blur();if($el.hasClass("disabled")||$el.hasClass("active"))return;
this._share.setMode(mode);};zfs_Tabs.prototype._onTabMouseOver=function(e){var $el=$(e.target);if($el.hasClass("disabled")||$el.hasClass("active"))return;$el.addClass(zfs_Tabs.TAB_HOVER_CLASSES);
};zfs_Tabs.prototype._onTabMouseOut=function(e){var $el=$(e.target);$el.removeClass(zfs_Tabs.TAB_HOVER_CLASSES);};zfs_Tabs.prototype._resetTabs=function(){this._$tabs.removeClass("disabled active").removeClass(zfs_Tabs.TAB_ACTIVE_CLASSES).addClass(zfs_Tabs.TAB_NORMAL_CLASSES);
};zfs_Tabs.prototype._activateTab=function($tab){$tab.removeClass(zfs_Tabs.TAB_HOVER_CLASSES).removeClass(zfs_Tabs.TAB_NORMAL_CLASSES).addClass("active").addClass(zfs_Tabs.TAB_ACTIVE_CLASSES);
};;function zfs_ShareSection(id,blogPostEdit){zf_Control.prototype.constructor.call(this,id);this._params=null;this._parent=null;this._blogPostEdit=blogPostEdit;$(document).ready(this.closure(this._init));
}zfs_ShareSection.inherits(zf_Control);zfs_ShareSection.prototype.setParentObject=function(parent){;this._parent=parent;};zfs_ShareSection.prototype.setData=function(params){;this._params=params;};zfs_ShareSection.prototype.setMode=function(mode){;
this.$(".sfs-pinterest").toggle(mode==zf_ShareFrame.SECTION_MODE.PHOTO);$(this.dom()).find(".sfs-blog").toggle(mode==zf_ShareFrame.SECTION_MODE.PHOTO);var sociable=new zf_Sociable();
var self=this;var bindLinks=function(shareable,params){sociable.bind(self.$(".sfs-facebook"),sociable.shareOnFacebook,shareable);sociable.bind(self.$(".sfs-twitter"),
sociable.shareOnTwitter,shareable);sociable.bind(self.$(".sfs-gplus"),sociable.shareOnGPlus,shareable);sociable.bind(self.$(".sfs-pinterest"),sociable.shareOnPinterest,
shareable);sociable.bind(self.$(".sfs-email"),sociable.shareViaEmail,params);$(self.dom()).find(".sfs-blog").unbind('click.sociable').bind('click.sociable',function(){self.shareOnBlog(shareable,
params);});};switch(mode){case zf_ShareFrame.SECTION_MODE.PHOTO:bindLinks(sociable.sharePhoto(this._params.photo),this._params);break;case zf_ShareFrame.SECTION_MODE.GROUP_ITEM:bindLinks(sociable.shareGroupItem(this._params.groupItem),
this._params);break;case zf_ShareFrame.SECTION_MODE.SLIDESHOW:bindLinks(sociable.shareSlideshow(this._params.groupItem),this._params);break;default:;break;}};zfs_ShareSection.prototype.update=function(){if(this.$().is(":hidden"))return;
var className="sfsc-"+this.$(".sfs-container A:visible").length;this.$(".sfs-container").attr("class","sfs-container "+className);};zfs_ShareSection.prototype._init=function(){this.$(".sfs-container A").hover(function(e){$(e.currentTarget).addClass("sfs-hover");
},function(e){$(e.currentTarget).removeClass("sfs-hover");});};zfs_ShareSection.prototype.shareOnBlog=function(shareable){;var self=this;if(this._parent.pressDefaultButton&&this._parent.setButtons){zf_Dialog.disableAnimation();
this._parent.hide(function(){self._blogPostEdit.show(shareable.photoId,self._parent._x,self._parent._y);zf_Dialog.enableAnimation();});}};;function zfs_LinksSection(id){zf_Control.prototype.constructor.call(this,
id);this._groupItem=null;this._photo=null;this._shorteningUrl=null;this._needShortUrlRefresh=false;$(document).ready(this.closure(this._init));}zfs_LinksSection.inherits(zf_Control);
zfs_LinksSection.SHORTENER_TRY_COUNT=2;zfs_LinksSection.prototype.setData=function(params){;this._groupItem=params.groupItem;this._photo=params.photo;this._needShortUrlRefresh=true;};zfs_LinksSection.prototype.setMode=function(mode){;
var itemName=null;var itemUrl=null;switch(mode){case zf_ShareFrame.SECTION_MODE.PHOTO:itemName=this._photo.video?"video":"photo";itemUrl=new zf_Sociable().sharePhoto(this._photo).url;
break;case zf_ShareFrame.SECTION_MODE.GROUP_ITEM:itemName=zf_ShareFrame.chooseTextForGroupItem(this._groupItem,"group","gallery","collection");itemUrl=new zf_Sociable().shareGroupItem(this._groupItem).url;
break;case zf_ShareFrame.SECTION_MODE.SLIDESHOW:itemName="slide show";itemUrl=new zf_Sociable().shareSlideshow(this._groupItem).url;break;default:;break;}this.$dom("url-item").find("LABEL").html(zf_stdFormatString("Copy and paste the link to this <span>{0}</span>:",
itemName));this.$dom("url").val(itemUrl);this.$dom("short-url").addClass("sfl-short-url-link").val("Get short link");var self=this;this.$dom("short-url").bind("click.shortener",
function(e){e.stopPropagation();e.preventDefault();self.$dom("short-url").removeClass("sfl-short-url-link").unbind("click.shortener").blur();self._shorten();});this._needShortUrlRefresh=true;
};zfs_LinksSection.prototype.update=function(){if(this.$().is(":hidden"))return;};zfs_LinksSection.prototype._shorten=function(){this.$dom("short-url").val("Loading...").closest(".sfl-box").removeClass("sfl-error").addClass("sfl-loading");
var url=this.$dom("url").val();if(this._shorteningUrl==null||this._shorteningUrl!=url){this._shorteningUrl=url;zf_stdServerRequestEx("GET","/zf/core/shortener.asmx",
"ShortenUrl",[url],this.closure(this._onShortenerResponse,url,zfs_LinksSection.SHORTENER_TRY_COUNT));}};zfs_LinksSection.prototype._init=function(){this.$(".sfl-url INPUT").add(this.$(".sfl-short-url INPUT")).focus(function(eo){$(eo.currentTarget).bind("mouseup keyup",
function(e){e.preventDefault();$(e.currentTarget).select().unbind(e.type);});});};zfs_LinksSection.prototype._onShortenerResponse=function(result,error,urlOnStart,repeatCount){var url=this.$dom("url").val();
if(url!=urlOnStart)return;;if(error!=null){if(repeatCount>1){;var self=this;setTimeout(function(){zf_stdServerRequestEx("GET","/zf/core/shortener.asmx","ShortenUrl",
[url],self.closure(self._onShortenerResponse,url,repeatCount-1));},Math.ceil(Math.random()*5000)+1000);}else{this.$dom("short-url").val("Not available at this time").closest(".sfl-box").removeClass("sfl-loading").addClass("sfl-error");
this._shorteningUrl=null;this._needShortUrlRefresh=false;}return;}this.$dom("short-url").val(result).closest(".sfl-box").removeClass("sfl-loading").removeClass("sfl-error");
this._shorteningUrl=null;this._needShortUrlRefresh=false;};;function zfs_DirectLinksSection(id){zf_Control.prototype.constructor.call(this,id);this._groupItem=null;this._photo=null;
$(document).ready(this.closure(this._init));}zfs_DirectLinksSection.inherits(zf_Control);zfs_DirectLinksSection.SHORTENER_TRY_COUNT=2;zfs_DirectLinksSection.prototype.setData=function(params){;this._groupItem=params.groupItem;this._photo=params.photo;
if(this._photo!=null)this._updateDirectLinks();};zfs_DirectLinksSection.prototype.setMode=function(mode){if(mode==zf_ShareFrame.SECTION_MODE.GROUP_ITEM||mode==zf_ShareFrame.SECTION_MODE.SLIDESHOW)return;
;this.$dom("direct").toggle(mode==zf_ShareFrame.SECTION_MODE.PHOTO);};zfs_DirectLinksSection.prototype.update=function(){if(this.$().is(":hidden"))return;if(this.$dom("direct").is(":visible"))this._updateWarningPlacement();
};zfs_DirectLinksSection.prototype.onExpand=function(){};zfs_DirectLinksSection.prototype._init=function(){var self=this;this.$(".sfld-item LABEL").click(function(){self._toggleItem($(this).closest(".sfld-item"));
});this.$(".sfld-item INPUT").focus(function(eo){$(eo.currentTarget).bind("mouseup keyup",function(e){e.preventDefault();$(e.currentTarget).select().unbind(e.type);
});});};zfs_DirectLinksSection.prototype._toggleItem=function($item){;var self=this;if($item.hasClass("sfld-item-e")){this.$dom("direct").find(".sfld-item-box").stop(false,true).animate({"height":"hide",
"marginTop":"hide","marginBottom":"hide","paddingTop":"hide","paddingBottom":"hide"},{duration:"fast",step:function(){self._updateWarningPlacement();},complete:function(){$(this).parent().removeClass("sfld-item-e");
self._updateWarningPlacement();}});}else{this.$dom("direct").find(".sfld-item-box").stop(false,true).animate({"height":"hide","marginTop":"hide","marginBottom":"hide",
"paddingTop":"hide","paddingBottom":"hide"},{duration:"fast",step:function(){self._updateWarningPlacement();},complete:function(){$(this).parent().removeClass("sfld-item-e");
self._updateWarningPlacement();}});$item.find(".sfld-item-box").stop(false,true).animate({"height":"show","marginTop":"show","marginBottom":"show","paddingTop":"show",
"paddingBottom":"show"},{duration:"fast",step:function(){self._updateWarningPlacement();},complete:function(){$(this).parent().addClass("sfld-item-e");self._updateWarningPlacement();
}});}};zfs_DirectLinksSection.prototype._updateDirectLinks=function(){if(this.$dom("direct").length<1)return;this.$(".sfl-direct .sfld-item").removeClass("sfld-item-e").removeClass("sfld-top-gap").removeClass("sfld-bottom-gap").hide().find(".sfld-item-box").hide();
this.$(".sfl-direct .sfld-item LABEL");var photo=this._photo;var width=photo.width;var height=photo.height;var realm=photo.access.getRealm();var imageList=[{method:zf_ProcessingMethod.StandardThumbnail,
mask:0,label:"Small Thumbnail"},{method:zf_ProcessingMethod.StandardSmallThumbnail,mask:0,label:"Square Thumbnail"},{method:zf_ProcessingMethod.StandardLargeThumbnail,
mask:0,label:"Medium Thumbnail"},{method:zf_ProcessingMethod.StandardVeryLargeThumbnail,mask:0,label:"Large Thumbnail"},{method:zf_ProcessingMethod.StandardSmallSize,
mask:0,label:"Small"},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium,label:"Medium"},{method:zf_ProcessingMethod.StandardLargeSize,
mask:zf_AccessMask.ProtectLarge,label:"Large"},{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge,label:"X-Large"},{method:zf_ProcessingMethod.StandardXXLargeSize,
mask:zf_AccessMask.ProtectXXLarge,label:"XX-Large"}];var videoList=[{method:zf_ProcessingMethod.StandardThumbnail,mask:0,label:"Small Thumbnail"},{method:zf_ProcessingMethod.StandardSmallThumbnail,
mask:0,label:"Square Thumbnail"},{method:zf_ProcessingMethod.StandardLargeThumbnail,mask:0,label:"Medium Thumbnail"},{method:zf_ProcessingMethod.StandardVeryLargeThumbnail,
mask:0,label:"Large Thumbnail"},{method:zf_ProcessingMethod.Video360p,mask:0,label:"Web (Non-HD)"},{method:zf_ProcessingMethod.Video480p,mask:zf_AccessMask.Protect480p,
label:"Medium Def (Non-HD)"},{method:zf_ProcessingMethod.Video720p,mask:zf_AccessMask.Protect720p,label:"Hi Def (720p)"},{method:zf_ProcessingMethod.Video1080p,mask:zf_AccessMask.Protect1080p,
label:"Full HD (1080p)"}];var list=photo.video?videoList:imageList;var labelHtmlFormat="{0} <span class=\"share-color9 share-font9\">({1} x {2})</span>";var topNode=null;
var bottomNode=null;var lastVisibleNode=null;var sizeReached=false;for(var i=0;i<list.length+1;i++){var id,$node,$item,title,url,protect;if(i<list.length){var method=list[i].method;
var mask=list[i].mask;var label=list[i].label;id=method.code;$node=this.$dom("direct-"+method.code);$item=$node.closest(".sfld-item");if(sizeReached)continue;sizeReached=method.cx>=width&&method.cy>=height&&method!=zf_ProcessingMethod.Video360p;
var size=photo.getScaledSize(method);var format=photo.video&&!method.isThumb?"{0}":labelHtmlFormat;title=zf_stdFormatString(format,label,size.cx,size.cy);url=["http://",
zf_userDomain,photo.getExternalUrl(method)].join("");protect=realm.type!=zf_AccessType.Public||(realm.mask&mask)!=0;}else if(i==list.length){id="original";$node=this.$dom("direct-original");
$item=$node.closest(".sfld-item");if(photo.video)continue;title=zf_stdFormatString(labelHtmlFormat,"Original Photo",width,height);url=["http://",zf_userDomain,photo.getExternalUrl()].join("");
protect=realm.type!=zf_AccessType.Public||(realm.mask&zf_AccessMask.ProtectOriginals)!=0||(realm.mask&zf_AccessMask.PasswordProtectOriginals)!=0;}$item.show();$node.val(url);
this.$dom("direct-title-"+id).html(title);var itemNode=$item.get(0);if(topNode==null&&protect)topNode=itemNode;else if(topNode!=null&&!protect)bottomNode=itemNode;
lastVisibleNode=itemNode;}if(topNode!=null){if(bottomNode==null)bottomNode=lastVisibleNode;$(topNode).addClass("sfld-top-gap");$(bottomNode).addClass("sfld-bottom-gap");
}this._updateWarningPlacement();};zfs_DirectLinksSection.prototype._updateWarningPlacement=function(){var $top=this.$(".sfld-top-gap");var $bottom=this.$(".sfld-bottom-gap");var $warning=this.$dom("warning");
$warning.toggle($top.length+$bottom.length==2);if($top.length==0&&$bottom.length==0)return;;var tn=$top.get(0);var bn=$bottom.get(0);var top=tn.offsetTop-10;var bottom=bn.offsetTop+bn.offsetHeight+5;
$warning.css("top",top).height(bottom-top);};;function zf_EmbedImageHelpers(){}zf_EmbedImageHelpers.CODE_TYPE={HTML:1,BBCode:2};zf_EmbedImageHelpers.CODE_TEMPLATES={};zf_EmbedImageHelpers.CODE_TEMPLATES[zf_EmbedImageHelpers.CODE_TYPE.HTML]="<a href=\"{0}\"{1}><img src=\"{2}\" width=\"{3}\" height=\"{4}\" alt=\"{5}\" /></a>";
zf_EmbedImageHelpers.CODE_TEMPLATES[zf_EmbedImageHelpers.CODE_TYPE.BBCode]="[url={0}][img]{2}[/img][/url]";zf_EmbedImageHelpers.getSizeOptions=function(photo){var ar=photo.height/photo.width;var arLimit=parseFloat(zf_EmbedImageHelpers.MAX_HEIGHT)/zf_EmbedImageHelpers.MAX_WIDTH;
var sizes=[{size:360,isWidth:false},{size:480,isWidth:false},{size:720,isWidth:false},{size:560,isWidth:true},{size:800,isWidth:true}];var options=[];for(var i=0;
i<sizes.length;i++){var s=sizes[i];var o={width:s.isWidth?s.size:Math.ceil(s.size/ar),height:s.isWidth?Math.ceil(s.size*ar):s.size};o.width=Math.max(o.width,zf_EmbedImageHelpers.MIN_WIDTH);
o.height=Math.max(o.height,zf_EmbedImageHelpers.MIN_HEIGHT);if(o.width>zf_EmbedImageHelpers.MAX_WIDTH||o.height>zf_EmbedImageHelpers.MAX_HEIGHT){if(ar>arLimit){o.height=zf_EmbedImageHelpers.MAX_HEIGHT;
o.width=Math.ceil(o.height/ar);}else{o.width=zf_EmbedImageHelpers.MAX_WIDTH;o.height=Math.ceil(o.width*ar);}}o.width=Math.max(o.width,zf_EmbedImageHelpers.MIN_WIDTH);
o.height=Math.max(o.height,zf_EmbedImageHelpers.MIN_HEIGHT);var hasDuplicate=false;for(var j=0;j<options.length;j++){var option=options[j];if(option.width==o.width&&option.height==o.height){hasDuplicate=true;
break;}}if(!hasDuplicate)options.push(o);}options.sort(function(a,b){return a.height-b.height!=0?a.height-b.height:a.width-b.width;});return options;};zf_EmbedImageHelpers.getSizeOptionsString=function(photo){var options=zf_EmbedImageHelpers.getSizeOptions(photo);
var html=[];for(var k=0;k<options.length;k++){var so=[options[k].width,"x",options[k].height].join("");html.push('<option value="',so,'">',so,'</option>');}html.push('<option value="custom">Custom</option>');
return html;};zf_EmbedImageHelpers.getEmbedCode=function(photo,ps){;;;;;var template=zf_EmbedImageHelpers.CODE_TEMPLATES[ps.codeType];var method=ps.method=="original"?null:ps.method;
var size=ps.method=="original"?{cx:photo.width,cy:photo.height}:photo.getScaledSize(ps.method);var share=new zf_Sociable().sharePhoto(photo,method);var pageUrl=share.url;
var imageUrl=share.processedImage;var title="";if(photo.title!=null&&photo.title.length!=0){title=[" title=\"",zf_EmbedImageHelpers.htmlAttributeEncode(photo.title),
"\""].join("");}var alt=[zf_EmbedImageHelpers.htmlAttributeEncode(photo.owner.displayName),": ",zf_EmbedImageHelpers.htmlAttributeEncode(ps.photoSet.title)," &emdash; ",
zf_EmbedImageHelpers.htmlAttributeEncode(photo.title)].join("");return zf_stdFormatString(template,pageUrl,title,imageUrl,size.cx,size.cy,alt);};zf_EmbedImageHelpers.htmlAttributeEncode=function(s){if(s==null||s=="")return "";
return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};;function zfs_EmbedImageSection(id){zf_Control.prototype.constructor.call(this,
id);this._groupItem=null;this._photo=null;$(document).ready(this.closure(this._init));}zfs_EmbedImageSection.inherits(zf_Control);zfs_EmbedImageSection.METHOD_LIST=[{method:zf_ProcessingMethod.StandardSmallSize,
mask:0,label:"Small"},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium,label:"Medium"},{method:zf_ProcessingMethod.StandardLargeSize,
mask:zf_AccessMask.ProtectLarge,label:"Large"},{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge,label:"X-Large"},{method:zf_ProcessingMethod.StandardXXLargeSize,
mask:zf_AccessMask.ProtectXXLarge,label:"XX-Large"}];zfs_EmbedImageSection.prototype.setData=function(params){;this._groupItem=params.groupItem;this._photo=params.photo;this.$().toggle(this._photo!=null&&!this._photo.video);
if(this._photo!=null&&!this._photo.video)this._updateEmbedImageForm();};zfs_EmbedImageSection.prototype.setMode=function(mode){if(mode==zf_ShareFrame.SECTION_MODE.GROUP_ITEM||mode==zf_ShareFrame.SECTION_MODE.SLIDESHOW)return;
;};zfs_EmbedImageSection.prototype.update=function(){if(this.$().is(":hidden"))return;};zfs_EmbedImageSection.prototype._init=function(){this.$dom("size").change(this.closure(this._updateImageCode));this.$(".sfe-code-switch INPUT").change(this.closure(this._updateImageCode));
this.$dom("code").focus(function(eo){$(eo.currentTarget).bind("mouseup keyup",function(e){e.preventDefault();$(e.currentTarget).select().unbind(e.type);});});};zfs_EmbedImageSection.prototype._updateEmbedImageForm=function(){var photo=this._photo;
;var showControls=photo.access.getRealm().type==zf_AccessType.Public;this.$(".sfe-non-public").toggle(!showControls);this.$(".sfe-public").toggle(showControls);if(!showControls)return;
var list=zfs_EmbedImageSection.METHOD_LIST;var width=photo.width;var height=photo.height;var realm=photo.access.getRealm();var labelFormat='<option value="{0}">{1} ({2} x {3})</option>';
var options=[];for(var i=0;i<list.length+1;i++){var option;if(i<list.length){var method=list[i].method;var mask=list[i].mask;var label=list[i].label;if(method.cx>width&&method.cy>height&&method!=zf_ProcessingMethod.StandardSmallSize)continue;
if(realm.type!=zf_AccessType.Public||(realm.mask&mask)!=0)continue;var size=photo.getScaledSize(method);option=zf_stdFormatString(labelFormat,method.code,label,size.cx,
size.cy);}else{;if(realm.type!=zf_AccessType.Public||(realm.mask&zf_AccessMask.ProtectOriginals)!=0||(realm.mask&zf_AccessMask.PasswordProtectOriginals)!=0)continue;
option=zf_stdFormatString(labelFormat,"original","Original Photo",width,height);}options.push(option);}this.$dom("size").html(options.join("")).find("OPTION:first").attr("selected",
"selected");this.$dom("code-html").attr("checked","checked");this._updateImageCode();};zfs_EmbedImageSection.prototype._updateImageCode=function(){var list=zfs_EmbedImageSection.METHOD_LIST;
var method=null;var option=this.$dom("size").val();if(option=="original")method="original";else{for(var i=0;i<list.length;i++){if(list[i].method.code!=option)continue;
method=list[i].method;break;}}if(method==null){this.$dom("code").val("");return;}var codeType=zf_EmbedImageHelpers.CODE_TYPE.HTML;var $bbCode=this.$dom("code-bbcode");
if($bbCode.length>0&&$bbCode.is(":checked"))codeType=zf_EmbedImageHelpers.CODE_TYPE.BBCode;var params={codeType:codeType,method:method,photoSet:this._groupItem};
this.$dom("code").val(zf_EmbedImageHelpers.getEmbedCode(this._photo,params));};;function zf_EmbedVideoHelpers(){}zf_EmbedVideoHelpers.MIN_WIDTH=160;zf_EmbedVideoHelpers.MIN_HEIGHT=160;zf_EmbedVideoHelpers.MAX_WIDTH=1920;zf_EmbedVideoHelpers.MAX_HEIGHT=1080;
zf_EmbedVideoHelpers.CODE_TEMPLATE='<iframe width="{0}" height="{1}" src="http://{2}/zf/core/embedvideo.aspx?p={3}" frameborder="0"></iframe>';zf_EmbedVideoHelpers.getSize=function(photo,width,height){var ar=photo.height/photo.width;
if(width!=null){var newHeight=Math.ceil(width*ar);if(newHeight-1==zf_EmbedVideoHelpers.MAX_HEIGHT)newHeight=zf_EmbedVideoHelpers.MAX_HEIGHT;if(newHeight+1==zf_EmbedVideoHelpers.MIN_HEIGHT)newHeight=zf_EmbedVideoHelpers.MIN_HEIGHT;
return{width:width,height:newHeight};}height=height||0;var newWidth=Math.ceil(height/ar);if(newWidth-1==zf_EmbedVideoHelpers.MAX_WIDTH)newWidth=zf_EmbedVideoHelpers.MAX_WIDTH;
if(newWidth+1==zf_EmbedVideoHelpers.MIN_WIDTH)newWidth=zf_EmbedVideoHelpers.MIN_WIDTH;return{height:height,width:newWidth};};zf_EmbedVideoHelpers.validateSize=function(photo,width,height){var verifyIntegerRange=function(valS,
MIN,MAX,MISSING_MSG,MIN_MSG,MAX_MSG){var m=null;var val=parseInt(valS,10);if(!isFinite(val))m=MISSING_MSG;else if(val<MIN)m=zf_stdFormatString(MIN_MSG,MIN);else if(val>MAX)m=zf_stdFormatString(MAX_MSG,
MAX);return m;};var m1=verifyIntegerRange(width,zf_EmbedVideoHelpers.MIN_WIDTH,zf_EmbedVideoHelpers.MAX_WIDTH,"Please specify the width","The width cannot be less than {0} pixels",
"The width cannot exceed {0} pixels");var m2=verifyIntegerRange(height,zf_EmbedVideoHelpers.MIN_HEIGHT,zf_EmbedVideoHelpers.MAX_HEIGHT,"Please specify the height",
"The height cannot be less than {0} pixels","The height cannot exceed {0} pixels");return{widthError:m1,heightError:m2};};zf_EmbedVideoHelpers.getSizeOptions=function(photo){var ar=photo.height/photo.width;
var arLimit=parseFloat(zf_EmbedVideoHelpers.MAX_HEIGHT)/zf_EmbedVideoHelpers.MAX_WIDTH;var sizes=[{size:360,isWidth:false},{size:480,isWidth:false},{size:720,isWidth:false},
{size:560,isWidth:true},{size:800,isWidth:true}];var options=[];for(var i=0;i<sizes.length;i++){var s=sizes[i];var o={width:s.isWidth?s.size:Math.ceil(s.size/ar),
height:s.isWidth?Math.ceil(s.size*ar):s.size};o.width=Math.max(o.width,zf_EmbedVideoHelpers.MIN_WIDTH);o.height=Math.max(o.height,zf_EmbedVideoHelpers.MIN_HEIGHT);
if(o.width>zf_EmbedVideoHelpers.MAX_WIDTH||o.height>zf_EmbedVideoHelpers.MAX_HEIGHT){if(ar>arLimit){o.height=zf_EmbedVideoHelpers.MAX_HEIGHT;o.width=Math.ceil(o.height/ar);
}else{o.width=zf_EmbedVideoHelpers.MAX_WIDTH;o.height=Math.ceil(o.width*ar);}}o.width=Math.max(o.width,zf_EmbedVideoHelpers.MIN_WIDTH);o.height=Math.max(o.height,
zf_EmbedVideoHelpers.MIN_HEIGHT);var hasDuplicate=false;for(var j=0;j<options.length;j++){var option=options[j];if(option.width==o.width&&option.height==o.height){hasDuplicate=true;
break;}}if(!hasDuplicate)options.push(o);}options.sort(function(a,b){return a.height-b.height!=0?a.height-b.height:a.width-b.width;});return options;};zf_EmbedVideoHelpers.getSizeOptionsString=function(photo){var options=zf_EmbedVideoHelpers.getSizeOptions(photo);
var html=[];for(var k=0;k<options.length;k++){var so=[options[k].width,"x",options[k].height].join("");html.push('<option value="',so,'">',so,'</option>');}html.push('<option value="custom">Custom</option>');
return html;};zf_EmbedVideoHelpers.getEmbedCode=function(photo,ps){;;;;;ps.w=Math.max(ps.w,zf_EmbedVideoHelpers.MIN_WIDTH);ps.h=Math.max(ps.h,zf_EmbedVideoHelpers.MIN_HEIGHT);ps.w=Math.min(ps.w,
zf_EmbedVideoHelpers.MAX_WIDTH);ps.h=Math.min(ps.h,zf_EmbedVideoHelpers.MAX_HEIGHT);var eps=[zf_EmbedVideoHelpers._normalizeNumber(photo.id.toString(16),8),".1",
ps.logo?"1":"0",!!ps.auto?"&auto=1":""].join("");return zf_stdFormatString(zf_EmbedVideoHelpers.CODE_TEMPLATE,ps.w,ps.h,zf_defaultHost,eps);};zf_EmbedVideoHelpers._normalizeNumber=function(s,
len){var slen=s.length;if(slen>len)return s.substring(slen-len);while(slen<len){s="0"+s;slen=s.length;}return s;};;function zfs_EmbedVideoSection(id){zf_Control.prototype.constructor.call(this,
id);this._groupItem=null;this._photo=null;$(document).ready(this.closure(this._init));}zfs_EmbedVideoSection.inherits(zf_Control);zfs_EmbedVideoSection.prototype.setData=function(params){;this._groupItem=params.groupItem;
this._photo=params.photo;this.$().toggle(this._photo!=null&&this._photo.video);if(this._photo!=null&&this._photo.video)this._updateEmbedVideoForm();};zfs_EmbedVideoSection.prototype.setMode=function(mode){if(mode==zf_ShareFrame.SECTION_MODE.GROUP_ITEM||mode==zf_ShareFrame.SECTION_MODE.SLIDESHOW)return;
;};zfs_EmbedVideoSection.prototype.update=function(){if(this.$().is(":hidden"))return;this.$dom("msg").hide().text("");this.$dom("size").find("OPTION:first").attr("selected","selected");
this.$dom("custom-size").toggle(this.$dom("size").find("OPTION").length==1);};zfs_EmbedVideoSection.prototype._init=function(){this.$dom("code").focus(function(eo){$(eo.currentTarget).bind("mouseup keyup",
function(e){e.preventDefault();$(e.currentTarget).select().unbind(e.type);});});$([]).add(this.$dom("h")).add(this.$dom("w")).blur(this.closure(this._integerInputVerifier)).focus(function(e){$(e.currentTarget).select();
});};zfs_EmbedVideoSection.prototype._updateEmbedVideoForm=function(){var photo=this._photo;;var showControls=photo.access.getRealm().type==zf_AccessType.Public;this.$(".sfe-non-public").toggle(!showControls);
this.$(".sfe-public").toggle(showControls);if(!showControls)return;var ar=photo.height/photo.width;this._fillSizesSelect(photo);this.$(".sfv-custom-size INPUT").unbind(".video");
this.$dom("code").unbind(".video");this.$dom("size").unbind(".video");this.$dom("logo").unbind(".video");var isPublic=photo.access.getRealm().type==zf_AccessType.Public;
var $sev=this.$dom();if(isPublic){$sev.removeClass("sfv-s-disabled");$sev.find("H4").text("").hide();$sev.find("INPUT, SELECT").removeAttr("disabled");this._updateVideoCode(photo);
}else{$sev.addClass("sfv-s-disabled");$sev.find("H4").show().text("Get the video embed code (Public videos only):");$sev.find("INPUT, SELECT").attr("disabled","disabled");
this.$dom("code").val("");}if(isPublic){var self=this;this.$dom("logo").bind("change.video",function(e){;self._updateVideoCode(photo);});this.$dom("size").bind("change.video keyup.video",
function(e){var value=$(this).val();if(value!=null&&value!="custom"){self.$dom("custom-size").hide();var parts=value.split("x");;if(parts.length>1){self.$dom("w").val(parts[0]);
self.$dom("h").val(parts[1]);}}else if(value=="custom"){self.$dom("custom-size").show();if(e.type!="keyup")self.$dom("w").focus();}self._integerInputVerifier();self._updateVideoCode(photo);
});this.$dom("h").bind("keyup.video paste.video cut.video input.video",function(e){if(e.which==9)return;var height=self._safeParseDimension(self.$dom("h").val(),
null);self.$dom("w").val(height==null?"":Math.ceil(height/ar));self._updateVideoCode(photo);});this.$dom("w").bind("keyup.video paste.video cut.video input.video",
function(e){if(e.which==9)return;var width=self._safeParseDimension(self.$dom("w").val(),null);self.$dom("h").val(width==null?"":Math.ceil(width*ar));self._updateVideoCode(photo);
});}this.$dom("size").change();if(!this.$dom("logo").closest(".item").hasClass("disabled"))this.$dom("logo").attr("checked","checked").removeAttr("disabled");else this.$dom("logo").attr("disabled",
"disabled");};zfs_EmbedVideoSection.prototype._updateVideoCode=function(photo){var params={w:this._safeParseDimension(this.$dom("w").val(),-1),h:this._safeParseDimension(this.$dom("h").val(),
-1),logo:this.$dom("logo").is(":checked")};this.$dom("code").val(zf_EmbedVideoHelpers.getEmbedCode(photo,params));};zfs_EmbedVideoSection.prototype._fillSizesSelect=function(photo){var html=zf_EmbedVideoHelpers.getSizeOptionsString(photo);
this.$dom("size").html(html.join("")).find("OPTION:first").attr("selected","selected");this.$dom("custom-size").toggle(this.$dom("size").find("OPTION").length==1);
};zfs_EmbedVideoSection.prototype._integerInputVerifier=function(e){;var self=this;var verifyIntegerRange=function($f,MIN,MAX,MISSING_MSG,MIN_MSG,MAX_MSG){var m=null;var val=parseInt($f.val(),
10);if(!isFinite(val))m=MISSING_MSG;else if(val<MIN)m=zf_stdFormatString(MIN_MSG,MIN);else if(val>MAX)m=zf_stdFormatString(MAX_MSG,MAX);if(m==null)$f.unbind("keyup.verify");
else if(!$f.hasClass("sfv-error-field"))$f.bind("keyup.verify",self.closure(self._integerInputVerifier));$f.toggleClass("sfv-error-field",m!=null);return m;};var m1=verifyIntegerRange(this.$dom("w"),
zf_EmbedVideoHelpers.MIN_WIDTH,zf_EmbedVideoHelpers.MAX_WIDTH,"Please specify the width","The width cannot be less than {0} pixels","The width cannot exceed {0} pixels");
var m2=verifyIntegerRange(this.$dom("h"),zf_EmbedVideoHelpers.MIN_HEIGHT,zf_EmbedVideoHelpers.MAX_HEIGHT,"Please specify the height","The height cannot be less than {0} pixels",
"The height cannot exceed {0} pixels");var message=m1;if(message==null)message=m2;var $msg=this.$dom("msg");if(message==null){if($msg.is(":visible")){$msg.stop(true,
true);$msg.text("").hide().css("backgroundColor","#EEE").css("borderColor","#EEE");}}else{if(!$msg.is(":visible"))$msg.slideDown("slow");if($msg.text()!=message){$msg.text(message);
$msg.css("borderColor","red").animate({backgroundColor:"pink"},500).delay(5000).animate({backgroundColor:"#EEE"},3000);}}};zfs_EmbedVideoSection.prototype._safeParseDimension=function(s,
defaultValue){var n=parseInt(zf_stdTrim(s),10);if(!isFinite(n)||n<=0)return defaultValue;return n;};;;function zfl_SharePopup(id,share){zfl_Popup.prototype.constructor.call(this,
id,false);this._share=share;this._share.setParentObject(this);}zfl_SharePopup.inherits(zfl_Popup);zfl_SharePopup.prototype.show=function(domOrigin,photoSet,photo){zfl_Popup.prototype.show.call(this,
domOrigin);this._share.show(photoSet,photo);var self=this;$(window).bind("resize.sharePopup",function(e){self.updatePosition(domOrigin,null);});};zfl_SharePopup.prototype.hide=function(){zfl_Popup.prototype.hide.call(this);
$(window).unbind("resize.sharePopup");};zfl_SharePopup.prototype.updateCopyright=function(copyrightText){this.$dom("copy").text(copyrightText);};;;function zfl_ControlBox(id,photoPage,init){this._photoPage=photoPage;
this._popups=init.popups;this._buttons=init.buttons;this._buymenu=init.buymenu;zfl_Control.prototype.constructor.call(this,id);zf_stdMakeMethodsDeferred(this,this.id,
["_showButtons"]);var self=this;if(this._buttons.slideshow){var installed=this._popups.flash.installed;if(installed){this._buttons.slideshow.clickable=false;this._popups.flash.onselect=function(index){self.command("seek",
index);};this._popups.flash.onslide=function(id,index){if(self.onslide)self.onslide(id,index);};}else{this.$().addClass("controlbox-no-flash");}}if(this._buttons.addToCart&&this._buymenu){var ids=["#",
this._buttons.addToCart.id,",#",this._buymenu.id].join("");$(ids).hover(this.closure(this._buy_onmouseover),this.closure(this._buy_onmouseout));this._buymenu.onaddtocart=this.closure(this.addToCart);
this._buymenu.oneditproduct=this.closure(this.editProduct);this._buymenu.onconfirmproduct=this.closure(this.addToCart);this._buymenu.onaddtofav=this.closure(this.addToFavorites);
this._buymenu.onselect=function(){self.command("selectPhotos",true,'buy');};}}zfl_ControlBox.inherits(zfl_Control);zfl_ControlBox.prototype.init=function(photoSet,selection,zenbar){this._photoSet=photoSet;
this._selection=selection;this._zenbar=zenbar;var $this=this.$dom();var buttons=[];if(this._buttons.selectPhotos)buttons.push(this._buttons.selectPhotos.$dom());
if(this._buttons.addToCart)buttons.push(this._buttons.addToCart.$dom());if(this._buttons.createBook)buttons.push(this._buttons.createBook.$dom());if(this._buttons.share)buttons.push(this._buttons.share.$dom());
if(this._buttons.slideshow)buttons.push(this._buttons.slideshow.$dom());if(this._buttons.download)buttons.push(this._buttons.download.$dom());if($this.hasClass('controlbox-aligned')&&buttons.length<=3){if(buttons.length>1){buttons[0].css('float',
'left');if(buttons.length==3){buttons[1].css('float','left');var left=buttons[0].outerWidth();var center=buttons[1].outerWidth();var right=buttons[2].outerWidth();
var whole=$this.width();var shift=Math.ceil((whole-(left+right+center))/2);buttons[1].css('left',shift);}}}else{$this.removeClass('controlbox-aligned').find('.button:first').css('margin-left',
0);}if(!this._photoPage)this._showButtons(true);};zfl_ControlBox.prototype._showButtons=function(show){var printable=this.commandtest("addToCart");var showBook=this.commandtest("createBook");
if(this._buttons.addToCart)this._buttons.addToCart.visibility(printable);if(this._buttons.slideshow)this._buttons.slideshow.visibility(show);if(this._buttons.share)this._buttons.share.visibility(show);
if(this._buttons.download)this._buttons.download.visibility(show);if(this._buttons.createBook)this._buttons.createBook.display(showBook);if(printable&&this.current)this.setCounts(this.current.video?0:1,
this.current.video?1:0);};zfl_ControlBox.prototype.share=function(){this._popups.share.show(this._buttons.share.dom(),this._photoSet,this.current);};zfl_ControlBox.prototype.download=function(){this.command("downloadOriginal");
};zfl_ControlBox.prototype.addToCart=function(options){this.command("addToCart",options);};zfl_ControlBox.prototype.createBook=function(options){this.command("createBook",options);};zfl_ControlBox.prototype.confirmProduct=function(info){this.command("confirmProduct",
info);};zfl_ControlBox.prototype.editProduct=function(info){this.command("editProduct",info);};zfl_ControlBox.prototype.selectPhotos=function(){this.command("selectPhotos",true);};zfl_ControlBox.prototype.selectDone=function(){this.command("selectPhotos",
false);};zfl_ControlBox.prototype.addToFavorites=function(purchase){this.command("addToFavorites",purchase);};zfl_ControlBox.prototype.update=function(photo,context){;;;if(this.current==photo)return;
if(this._popups.share)this._popups.share.hide();if(this._popups.addToCart)this._popups.addToCart.hide();if(this.current!=null)this.current.unadvise(this);this.current=photo;
this._showButtons(photo.loaded);if(!photo.loaded){var self=this;photo.advise(this,function(){self._showButtons(true);});}if(this._popups.flash)this._popups.flash.update(photo,
context);};zfl_ControlBox.prototype.canShare=function(){return this._popups.share;};zfl_ControlBox.prototype.canSlideshow=function(){return this._buttons.slideshow;};zfl_ControlBox.prototype.photoDisplayed=function(){this._showButtons(true);
};zfl_ControlBox.prototype.selectionEnabled=function(enabled){this.$dom().toggleClass('controlbox-selection');};zfl_ControlBox.prototype.slideshow=function(){var uri=location.pathname+"/slideshow"+location.hash;
var formatFeatures="left=0,top=0,width={0},height={1},resizable=yes,fullscreen=yes,"+"scrollbars=no,menubar=no,toolbar=no,location=no,"+"status=no";var width=screen.availWidth?screen.availWidth:screen.width;
var height=screen.availHeight?screen.availHeight:screen.height;var features=zf_stdFormatString(formatFeatures,width,height);var w=window.open(uri,"zf_Slideshow",
features);if(w!=null){setTimeout(function(){try{w.resizeTo(width,height);}catch(e){}try{w.focus();}catch(e){}},100);}else alert("It appears you have a pop-up blocker active for this Web page, which prevents you from seeing new windows open. Please disable the pop-up blocker for this page or, for better overall experience, disable the pop-up blocker for the entire site.");
};zfl_ControlBox.prototype._buy_onmouseover=function(){var button=this._buttons.addToCart.$dom();var height=button.outerHeight();var pos=button.offset();if(pos.left>zf_stdGetClientWidth()-300)this._buymenu.show(pos.left+button.outerWidth(),
pos.top+height+2,true);else this._buymenu.show(pos.left,pos.top+height+2);return false;};zfl_ControlBox.prototype._buy_onmouseout=function(){this._buymenu.hide();};zfl_ControlBox.prototype.setCounts=function(photos,
videos){if(this._buymenu)this._buymenu.setCounts(photos,videos);};;;function zfl_SessionCookie(cookie){;this.sessionKey=cookie;var storedCookie=zf_stdGetCookie("zf_lsc");if(storedCookie!=null){var parts=storedCookie.split(".");
this.recentPhotoSetId=parts[1].length>0?parseInt(parts[1]):0;this.recentPhotoIndex=parts[2].length>0?parseInt(parts[2]):-1;this.showAll=parts[3]=="1";}else{this.recentPhotoSetId=0;
this.recentPhotoIndex=-1;this.showAll=false;}}zfl_SessionCookie.prototype.setRecent=function(photoSetId,photoIndex){;;this.recentPhotoSetId=photoSetId;this.recentPhotoIndex=photoIndex;
this._save();};zfl_SessionCookie.prototype.setShowAll=function(showAll){this.showAll=showAll;this._save();};zfl_SessionCookie.prototype._save=function(){if(!this.sessionKey)return;zf_stdSetCookie("zf_lsc",
[this.sessionKey,this.recentPhotoSetId,this.recentPhotoIndex,this.showAll?1:0].join("."));};;;function zf_User(){zf_Loadable.prototype.constructor.call(this);this.photos=0;
this.images=0;this.videos=0;this.galleries=0;this.collections=0;this.views=0;}zf_User.inherits(zf_Loadable);zf_User._fields=["id","loginName","displayName","domainName","views",
"bio","copyright","email"];zf_User.clone=function(user){if(user==null)return null;var cloned=zf_stdCopyFields(new zf_User(),user,zf_User._fields);cloned.image=zf_FileImage.clone(user.image);
return cloned;};zf_User.prototype.postSerialize=function(){zf_Loadable.prototype.postSerialize.call(this);if(this.domainName==null)this.domainName=this.loginName+zf_defaultDomain;
};;;function zf_PhotoList(offset,page,length,ids){;this._offset=offset;this._page=page;this._photos=[];this._map={};if(typeof(ids)=="number"){this._photoSetId=ids;}else{;;
this._photoIds=ids;for(var i=0;i<ids.length;i++)this._map[ids[i]]=i;}this.length=length;this._fresh=true;}zf_PhotoList.prototype.get=function(index,touch){;if(index>=this.length)return null;
if(touch==null)touch=false;var i;if(this._photos[index]instanceof zf_Photo)return this._photos[index];if(this._photos[index]==null){var from,to;if(index<this._offset){from=0;
to=this._offset;}else{var n=Math.floor((index-this._offset)/this._page);from=this._page*n+this._offset;to=from+this._page;}if(to>this.length)to=this.length;for(i=from;
i<to;i++){if(this._photos[i]==null)this._photos[i]=false;}var first=this._fresh;this._fresh=false;var self=this;var oncomplete=function(photos){self._adopt(photos,
from);if(from+photos.length<to){self.length=from+photos.length;if(self.onshrink!=null){if(!self.onshrink())return;}}if(self.onload!=null)self.onload(first);};if(this._photoSetId!=null){this.getPhotoRange(from,
to,false,oncomplete);}else{var ids=new Array(to-from);for(i=from;i<to;i++)ids[i-from]=this._photoIds[i];this.getPhotoBatch(ids,oncomplete);}}if(touch)return null;
if(index==from&&index>0)this.get(index-1,true);else if(index==to-1&&index<this.length-1)this.get(index+1,true);;var photo=new zf_Photo();photo.setRequested();this._photos[index]=photo;
return photo;};zf_PhotoList.prototype.find=function(id){var index=this._map[id];return index!=null?index:-1;};zf_PhotoList.prototype.setDefaults=function(photoSet,owner){this._defaultPhotoSet=photoSet;
this._defaultOwner=owner;};zf_PhotoList.prototype.loadAll=function(callback){;;var from=null;var to=null;for(var i=0;i<this.length;i++){var photo=this._photos[i];if(photo&&photo.loaded)continue;
if(from===null)from=i;if(from!==null)to=i+1;}if(from===null){callback();return;}if(to===null)to=this.length;var self=this;this.getPhotoRange(from,to,true,function(photos){self._adopt(photos,
from);if(from+photos.length<to){self.length=from+photos.length;if(self.onshrink!=null)self.onshrink();}if(self.onload!=null)self.onload(false);callback();});};zf_PhotoList.prototype.getAll=function(){return this._photos;
};zf_PhotoList.prototype._adopt=function(photos,offset){;;for(i=0;i<photos.length;i++){var src=photos[i];var dest=this._photos[i+offset];;this._map[src.id]=i+offset;if(this._defaultPhotoSet)src.photoSet=this._defaultPhotoSet;
if(this._defaultOwner&&src.owner&&src.owner.id==this._defaultOwner.id)src.owner=this._defaultOwner;if(!(dest instanceof zf_Photo)){this._photos[i+offset]=src;}else{;
if(!dest.loaded){;zf_stdCopyFields(dest,src,zf_Photo._fields);dest.image=dest;dest.done();}}}};zf_PhotoList.wrap=function(photos){return $.extend(photos||[],{find:function(id){for(var i=0;
i<this.length;i++){if(this[i].id==id)return i;}return-1;},get:function(index){return this[index];},loadAll:function(callback){callback();},getAll:function(){return this;
}});};;function zfl_PhotoList(offset,page,length,ids,token,photoSetPcn,tokenId){zf_PhotoList.prototype.constructor.call(this,offset,page,length,ids);this._token=token;this._photoSetPcn=photoSetPcn;
this._tokenId=tokenId;}zfl_PhotoList.inherits(zf_PhotoList);zfl_PhotoList.requests=new zf_RequestQueue(200);zfl_PhotoList.prototype.getPhotoRange=function(from,to,urgent,oncomplete){var params=[this._defaultOwner.id,
this._photoSetId,from,to,this._token,zfl_SessionCookie.current.sessionKey,this._photoSetPcn];var callback=function(status,retVal){if(status!=200||retVal.error!=null)return;
oncomplete(retVal.result);};if(urgent){zf_stdServerRequest("GET","/zf/layout/layout.asmx","GetPhotoRange",params,callback);}else{zfl_PhotoList.requests.enqueue("GET",
"/zf/layout/layout.asmx","GetPhotoRange",params,callback);}};zfl_PhotoList.prototype.getPhotoBatch=function(ids,oncomplete){var params=[this._defaultOwner.id,this._tokenId,ids,
this._token,zfl_SessionCookie.current.sessionKey,this._photoSetPcn];zfl_PhotoList.requests.enqueue("GET","/zf/layout/layout.asmx","GetPhotoBatch",params,function(status,
retVal){if(status!=200||retVal.error!=null)return;oncomplete(retVal.result);});};;function zfl_BuyMenu(id,zenbar,mode,pricingKey){;zfl_Control.prototype.constructor.call(this,
id);this._photos=1;this._videos=0;this._cartQueue=new zf_RequestQueue(500);this._zenbar=zenbar;this._pricingKey=pricingKey;this.$dom().detach().appendTo("body");
this.$(".buymenu-buy").click(this.closure(this._buy_onclick));this.$(".buymenu-save").click(this.closure(this._save_onclick));this.$(".buymenu-select").click(this.closure(this._select_onclick));
this._hoverover=function(){$(this).removeClass("buymenu-color1 buymenu-bgcolor1").addClass("buymenu-color2 buymenu-bgcolor2");};this._hoverout=function(){$(this).addClass("buymenu-color1 buymenu-bgcolor1").removeClass("buymenu-color2 buymenu-bgcolor2");
};this.$("a").hover(this._hoverover,this._hoverout);this._mode=mode;}zfl_BuyMenu.inherits(zfl_Control);zfl_BuyMenu.prototype.show=function(x,y,right){if(this._photos==0&&this._videos==0)return;
if(this._showed)return;this._showed=true;if(zfl_Layout.currentMenu&&zfl_Layout.currentMenu!=this)zfl_Layout.currentMenu.remove();zfl_Layout.currentMenu=this;var photos=this._photos;
var videos=this._videos;var count=photos+videos;var gallery=this._mode=="gallery"&&count>1;this.$('.buymenu-gallery-y').toggle(gallery);this.$('.buymenu-gallery-n').toggle(!gallery);
if(gallery){if(photos>=0&&videos==0)this.$(".buymenu-select").text("Select photos to buy");else if(photos>0&&videos>0)this.$(".buymenu-select").text("Select items to buy");
else this.$(".buymenu-select").text("Select videos to buy");if(photos>=0&&videos==0)this.$(".buymenu-buy").text(count==1?"Buy photo":zf_stdFormatString("Buy all {0} photos",
count));else if(photos==0&&videos>=0)this.$(".buymenu-buy").text(count==1?"Buy video":zf_stdFormatString("Buy all {0} videos",count));else this.$(".buymenu-buy").text(count==1?"Buy item":zf_stdFormatString("Buy all {0} items",
count));}else{if(photos>=0&&videos==0)this.$(".buymenu-buy").text(count==1?"Select product":zf_stdFormatString("Select product for {0} photos",count));else if(photos>0&&videos>0)this.$(".buymenu-buy").text(count==1?"Select product":zf_stdFormatString("Select product for {0} items",
count));else this.$(".buymenu-buy").text(count==1?"Select product":zf_stdFormatString("Select product for {0} videos",count));if(photos>=0&&videos==0)this.$(".buymenu-save").text(count==1?"Save for purchasing later":zf_stdFormatString("Save {0} photos for purchasing later",
count));else if(photos>0&&videos>0)this.$(".buymenu-save").text(count==1?"Save for purchasing later":zf_stdFormatString("Save {0} items for purchasing later",count));
else this.$(".buymenu-save").text(count==1?"Save for purchasing later":zf_stdFormatString("Save {0} videos for purchasing later",count));}var pos;if(!right)pos={top:y+"px",
left:x+"px",right:"auto"};else pos={top:y+"px",left:"auto",right:this.$dom().parent().width()-x+"px"};this.$dom().css(pos).stop(true,true).slideDown(100);var self=this;
if(this._zenbar.cart.size<=0){this.$dom().find(".buymenu-products").hide();return;}this._cartQueue.enqueueEx("GET","/zf/core/printing/printing.asmx","GetCartSummary",
[this._zenbar.cart.id,this._zenbar.cart.photographerId,this._zenbar.cart.changeNumber,true],function(result,error){self.$dom().find(".buymenu-products").toggle(error==null);
if(error)return;self._zenbar.cart=result;var markupRecent=[],added=0;var markupIncomplete=[];if(videos==0){if(self._pricingKey){for(var j=0;j<result.recentProducts.length&&added<3;
j++){var recentProduct=result.recentProducts[j];if(recentProduct.item.priceKey.pricingKey==self._pricingKey){added++;markupRecent.push('<a href="#" class="buymenu-color1 buymenu-bgcolor1 recent">',
zf_stdHtmlEncode(recentProduct.name),'</a>');}}}var tooMany=result.incompleteProducts.length>1;if(!tooMany){var label;for(var i=0;i<result.incompleteProducts.length;
i++){var incompleteProduct=result.incompleteProducts[i];label=count==1?zf_stdFormatString("Add 1 photo to {0}",incompleteProduct.name):zf_stdFormatString("Add {0} photos to {1}",
count,incompleteProduct.name);markupIncomplete.push('<a href="#" class="buymenu-color1 buymenu-bgcolor1 product">',zf_stdHtmlEncode(label),'</a>');}}else{label=count==1?"Add 1 photo to existing product in your cart":zf_stdFormatString("Add {0} photos to existing product in your cart",
count);markupIncomplete.push('<a href="#" class="buymenu-color1 buymenu-bgcolor1 existing">',zf_stdHtmlEncode(label),'</a>');}}self.$dom().find(".buymenu-products .loading").hide();
self.$dom().find(".buymenu-products").find(".list-recent").toggle(markupRecent.length>0).html(markupRecent.join(""));self.$dom().find(".buymenu-products").find(".list-incomplete").toggle(markupIncomplete.length>0).html(markupIncomplete.join(""));
self.$dom().find(".menu-separator:first").toggle(markupRecent.length>0||markupIncomplete.length>0);self.$dom().find(".buymenu-products A.recent").each(function(index){$(this).click(function(){self._product_recent_click(result.recentProducts[index]);
return false;});});self.$dom().find(".buymenu-products A.product").each(function(index){$(this).click(function(){self._product_incomplete_click(result.incompleteProducts[index]);
return false;});});self.$dom().find(".buymenu-products:first A.existing").click(self.closure(self._existing_onclick));self.$("a.product,a.existing,a.recent").hover(self._hoverover,
self._hoverout);});};zfl_BuyMenu.prototype.hide=function(){if(!this._showed)return;this._showed=false;var self=this;var reset=function(){if(zfl_Layout.currentMenu==self)zfl_Layout.currentMenu=null;
};var slideUp=function(){$(this).stop(true,true).slideUp(200,reset).dequeue();};this.$dom().delay(400).queue(slideUp);};zfl_BuyMenu.prototype.remove=function(){this.$dom().stop(true,
true).hide();this._showed=false;};zfl_BuyMenu.prototype.setCounts=function(photos,videos){this._photos=photos;this._videos=videos;};zfl_BuyMenu.prototype._buy_onclick=function(){this.remove();
if(this.onaddtocart)this.onaddtocart({newProduct:true});return false;};zfl_BuyMenu.prototype._select_onclick=function(){this.remove();if(this.onselect)this.onselect();return false;
};zfl_BuyMenu.prototype._existing_onclick=function(){this.remove();if(this.onaddtocart)this.onaddtocart({addToExisting:true});return false;};zfl_BuyMenu.prototype._recent_onclick=function(info){this.remove();
if(this.onaddtocart)this.onaddtocart({immediate:true,product:info});return false;};zfl_BuyMenu.prototype._save_onclick=function(){this.remove();if(this.onaddtofav)this.onaddtofav(true);
return false;};zfl_BuyMenu.prototype._product_incomplete_click=function(info){this.remove();if(this.oneditproduct)this.oneditproduct(info);return false;};zfl_BuyMenu.prototype._product_recent_click=function(info){this.remove();
if(this.onconfirmproduct)this.onconfirmproduct({vendorId:info.item.vendorId,productId:info.item.productId});return false;};;function zfl_PhotoMenu(items,classes){;this.id="__photo_menu_"+zfl_PhotoMenu.counter++;
this.dom=zfl_Control.prototype.dom;this.$dom=zfl_Control.prototype.$dom;this.display=zfl_Control.prototype.display;this.visibility=zfl_Control.prototype.visibility;
this._delayedSubMenu=new zf_DelayedInvoke(500);this._delayedActive=new zf_DelayedInvoke(300);if(classes&&classes.length>0)this._classes=classes;else this._classes="pvo-menu photoMenu";
this._map={};for(var i=0;i<items.length;i++){var item=items[i];;if(!item.onselect)item.onselect=zf_stdFalse;if(!item.onclick)item.onclick=zf_stdFalse;;this._map[item.id]=item;
}this.items=items;}zfl_PhotoMenu.counter=0;zfl_PhotoMenu.prototype.create=function(parent){;;var root=document.createElement("DIV");root.className=this._classes+" none";root.id=this.id;root.innerHTML=this._build();
parent.appendChild(root);this._subscribe();parent=null;root=null;};zfl_PhotoMenu.prototype._build=function(){var content=[];var items=this.items;var self=this;var buildContent=function(face){content.push('<div>');
for(i=0;i<items.length;i++){if(items[i].separator){content.push('<tr><td><div class="sep"></div></td></tr>');continue;}content.push('<div class="item item-',items[i].id,
'"');if(face)content.push(' id="',self.id,'-',items[i].id,'"');content.push('><div class="icon"></div>');if(items[i].text)content.push('<div class="text">',items[i].text,
'</div>');content.push('</div>');}content.push('</div>');};content.push('<div class="overlay-background">');content.push('</div>');buildContent(true);return content.join("");
};zfl_PhotoMenu.prototype._subscribe=function(item){var self=this;if(!item){for(i=0;i<this.items.length;i++)this._subscribe(this.items[i]);if(this.onactive){var dom=this.dom();
dom.onmouseover=function(){self._delayedActive.invoke(function(){self.onactive();});};dom.onmouseout=function(){self._delayedActive.clear();};dom=null;}return;}if(item.separator)return;
var domItem=this.dom(item.id);;domItem.onclick=function(){self.click(item.id);};domItem.onmouseover=function(){self.select(item.id,true);};domItem.onmouseout=function(){if(self.selected==item){if(item!=self._activeSubMenu){self.select(item.id,
false);self._pendingSubMenu=null;self._delayedSubMenu.clear();}}};domItem=null;};zfl_PhotoMenu.prototype.select=function(id,selected){var item=this._map[id];;if(selected&&item==this.selected)return;
if(!selected&&item!=this.selected)return;var self=this;var switchSubMenu=function(){var oldMenu=self._activeSubMenu;var newMenu=self._pendingSubMenu;self._activeSubMenu=newMenu;
self._pendingSubMenu=null;if(oldMenu)oldMenu.onsubmenu(false);if(newMenu){var dom=self.dom(item.id);var pos=zf_stdGetOffset(dom);pos.cx+=dom.clientWidth;dom=null;
newMenu.onsubmenu(true,pos.cx+6,pos.cy-4,self);}};if(selected){if(this.selected)this.select(this.selected.id,false);zf_stdReplaceClassName(this.dom(item.id),"item-standard",
"item-hover");this.selected=item;if(item!=this._activeSubMenu){var pending=item.onsubmenu?item:null;if(pending!=this._pendingSubMenu||!this._delayedSubMenu.pending){this._pendingSubMenu=pending;
this._delayedSubMenu.invoke(switchSubMenu);}}else{this._pendingSubMenu=null;this._delayedSubMenu.clear();}}else if(!selected){zf_stdReplaceClassName(this.dom(item.id),
"item-hover","item-standard");if(item==this._pendingSubMenu){this._pendingSubMenu=null;this._delayedSubMenu.invoke(switchSubMenu);}this.selected=null;item.onselect(false);
}item.onselect(selected);};zfl_PhotoMenu.prototype.click=function(id,selected){var item=this._map[id];;if(this.selected!=item)this.select(item.id,true);if(this._delayedSubMenu.pending){this._delayedSubMenu.callback();
this._delayedSubMenu.clear();}item.onclick();};zfl_PhotoMenu.prototype.show=function(toshow,x,y,parent){this.parent=parent;if(!toshow){if(this._activeSubMenu)this._activeSubMenu.onsubmenu(false);
this._activeSubMenu=this._pendingSubMenu=null;this._delayedSubMenu.clear();if(this.selected)this.select(this.selected.id,false);}else if(x&&y){var dom=this.dom();
dom.style.left=x+"px";dom.style.top=y+"px";}this.display(toshow);};zfl_PhotoMenu.prototype.destroy=function(){this.show(false);var dom=this.dom();if(dom!=null)dom.parentNode.removeChild(dom);
};zfl_PhotoMenu.prototype.get=function(id){return this._map[id];};;function zfl_DownloadMenu(photo,saveImages){;zfl_PhotoMenu.prototype.constructor.call(this,[],"pvo-menu photoMenu downloadMenu");
this.current=photo;this._saveImages=saveImages;this.oncommand=zf_stdFalse;}zfl_DownloadMenu.inherits(zfl_PhotoMenu);zfl_DownloadMenu.prototype.create=function(parent){;;var self=this;var root=document.createElement("DIV");
root.className=this._classes+" none";root.id=this.id;if(this.current.loaded){root.innerHTML=this._build();}else{root.innerHTML=['<div class="downloadMenu-loading">',
'<div class="overlay-background"></div>','Loading...','</div>'].join("");this.current.advise(this,function(){self.dom().innerHTML=self._build();self._subscribe();
});}parent.appendChild(root);if(this.current.loaded)this._subscribe();parent=null;root=null;};zfl_DownloadMenu.buildItems=function(photo,saveImages,oncommand,oncommandtest){;;var items=[];
var i;var imageList=[{method:{original:true},mask:zf_AccessMask.ProtectOriginals},{method:{original:true,all:true},mask:zf_AccessMask.ProtectOriginals},{method:zf_ProcessingMethod.StandardXXLargeSize,
mask:zf_AccessMask.ProtectXXLarge},{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardLargeSize,
mask:zf_AccessMask.ProtectLarge},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardSmallSize,mask:-1}];
var videoList=[{method:{video:true},mask:0},{method:zf_ProcessingMethod.Video1080p,mask:zf_AccessMask.Protect1080p},{method:zf_ProcessingMethod.Video720p,mask:zf_AccessMask.Protect720p},
{method:zf_ProcessingMethod.Video480p,mask:zf_AccessMask.Protect480p},{method:zf_ProcessingMethod.Video360p,mask:-1}];var width=photo.width;var height=photo.height;
var downloadHandler=function(uri){return function(){oncommand("download-"+uri);document.location.href=uri;};};var wasOriginal=false;var list=photo.video?videoList:imageList;
for(i=0;i<list.length;i++){var method=list[i].method;if(method.original&&!oncommandtest("downloadOriginal"))continue;var mask=list[i].mask;if(!method.original&&mask>0&&(photo.access.mask&mask)==mask)continue;
if(!method.original&&method.cx>width&&method.cy>height&&(!photo.video||method.code<zf_ProcessingMethod.Video480p.code))continue;var text=null;var uri;var onclick;
if(method.original&&method.all){if(oncommandtest("downloadGallery")){text="All available originals";onclick=function(){oncommand("downloadGallery");};wasOriginal=true;
}else if(oncommandtest("downloadCollection")){text="All available originals";onclick=function(){oncommand("downloadCollection");};wasOriginal=true;}}else if(method.original){if(oncommandtest("downloadPhoto")){text=zf_stdFormatString("Original ({0} x {1})",
width,height);onclick=function(){oncommand("downloadPhoto");};wasOriginal=true;}}else if(method.video&&oncommandtest("downloadVideo")&&!saveImages&&photo.owner.id==zf_ownerId){var largest=zf_ProcessingMethod.Video360p;
if((photo.access.mask&zf_AccessMask.Protect480p)==0)largest=zf_ProcessingMethod.Video480p;if(zf_ProcessingMethod.Video720p.cx<=width&&zf_ProcessingMethod.Video720p.cy<=height&&(photo.access.mask&zf_AccessMask.Protect720p)==0)largest=zf_ProcessingMethod.Video720p;
if(zf_ProcessingMethod.Video1080p.cx<=width&&zf_ProcessingMethod.Video1080p.cy<=height&&(photo.access.mask&zf_AccessMask.Protect1080p)==0)largest=zf_ProcessingMethod.Video1080p;
var size2=photo.getScaledSize(largest);text=zf_stdFormatString(largest.format,size2.cx,size2.cy);if(photo.sizes&&photo.sizes[largest.code])text=text+", "+zf_stdFormatByteSize(photo.sizes[largest.code]);
uri=photo.getExternalUrl(largest)+"?dl=1";onclick=downloadHandler(uri);}else if(method.video&&oncommandtest("downloadVideo")&&!saveImages&&photo.owner.id!=zf_ownerId){text="Cannot download videos from another User";
onclick=function(){return false;};}else{if(saveImages&&method.format){var size=photo.getScaledSize(method);text=zf_stdFormatString(method.format,size.cx,size.cy);
if(photo.sizes&&photo.sizes[method.code])text=text+", "+zf_stdFormatByteSize(photo.sizes[method.code]);uri=photo.getExternalUrl(method)+"?dl=1";onclick=downloadHandler(uri);
}}if(!text)continue;if(wasOriginal&&!method.original){items.push({id:"separator",separator:true});wasOriginal=false;}items.push({id:"download_"+i,text:text,onclick:onclick});
}return items;};zfl_DownloadMenu.prototype._build=function(){;this.items=zfl_DownloadMenu.buildItems(this.current,this._saveImages,this.oncommand,this.oncommandtest);this._map={};
for(var i=0;i<this.items.length;i++){var item=this.items[i];this._map[item.id]=item;item.onselect=zf_stdFalse;}return zfl_PhotoMenu.prototype._build.call(this);};
;function zfl_DownloadMenu2(id,saveImages){zfl_Control.prototype.constructor.call(this,id);this._saveImages=saveImages==null||saveImages;this.$dom().detach().appendTo("body");
this._hoverover=function(){$(this).removeClass("buymenu-color1 buymenu-bgcolor1").addClass("buymenu-color2 buymenu-bgcolor2");};this._hoverout=function(){$(this).addClass("buymenu-color1 buymenu-bgcolor1").removeClass("buymenu-color2 buymenu-bgcolor2");
};}zfl_DownloadMenu2.inherits(zfl_Control);zfl_DownloadMenu2.prototype.show=function(x,y,right,photo,oncommand,oncommandtest){if(this._showed)return;this._showed=true;if(zfl_Layout.currentMenu&&zfl_Layout.currentMenu!=this)zfl_Layout.currentMenu.remove();
zfl_Layout.currentMenu=this;var items=zfl_DownloadMenu.buildItems(photo,oncommandtest("saveImages",{download:this._saveImages}),oncommand,oncommandtest);var markup=[];
var i;for(i=0;i<items.length;i++){var item=items[i];if(item.id=="separator"){markup.push('<div class="menu-separator buymenu-border1"></div>');}else{markup.push('<a id="',
this.id,'-',item.id,'" href="#" ','   class="buymenu-color1 buymenu-color1 buymenu-bgcolor1">',zf_stdHtmlEncode(item.text),'</a>');}}this.$(".dlmenu-list").html(markup.join(""));
var self=this;var createHandler=function(item){return function(){self.remove();item.onclick();return false;};};for(i=0;i<items.length;i++){if(items[i].id=="separator")continue;
this.$dom(items[i].id).click(createHandler(items[i]));}this.$("a").hover(this._hoverover,this._hoverout);var pos;if(!right)pos={top:y+"px",left:x+"px",right:"auto"};
else pos={top:y+"px",left:"auto",right:this.$dom().parent().width()-x+"px"};this.$dom().css(pos).stop(true,true).slideDown(100);};zfl_DownloadMenu2.prototype.hide=function(){if(!this._showed)return;
this._showed=false;var self=this;var reset=function(){if(zfl_Layout.currentMenu==self)zfl_Layout.currentMenu=null;};var slideUp=function(){$(this).stop(true,true).slideUp(200,
reset).dequeue();};this.$dom().delay(400).queue(slideUp);};zfl_DownloadMenu2.prototype.remove=function(){if(zfl_Layout.currentMenu==this)zfl_Layout.currentMenu=null;this.$dom().stop(true,
true).hide();this._showed=false;};function zfl_ActionLinks(id,pinned,buymenu,dmenu,buttons){zfl_Control.prototype.constructor.call(this,id);this._pinned=pinned;this._buymenu=buymenu;
this._dmenu=dmenu;this._buttons=buttons;zf_stdMakeMethodsDeferred(this,this.id,["_showPhotoLinks"]);var self=this;var ids;if(this._buymenu){ids=['#',this.id,' .action-addtocart,#',
this._buymenu.id];if(this._buttons.buy)ids.push(',#',this._buttons.buy.id);ids=ids.join('');$(ids).hover(this.closure(this._buy_onmouseover),this.closure(this._buy_onmouseout));
this._buymenu.onaddtocart=function(options){self.command("addToCart",options);};this._buymenu.oncreatebook=function(options){self.command("createBook",options);};
this._buymenu.oneditproduct=function(info){self.command("editProduct",info);};this._buymenu.onconfirmproduct=function(options){self.command("addToCart",options);
};this._buymenu.onaddtofav=function(purchase){self.command("addToFavorites",purchase);};}if(this._dmenu){var downloadExpanded=false;ids=["#",this.id," .action-download,#",
this._dmenu.id].join("");$(ids).hover(this.closure(this._download_onmouseover),this.closure(this._download_onmouseout));}this.$('.actions-all').click(function(){self.command("selectAll");
return false;});this.$('.actions-none').click(function(){self.command("selectNone");return false;});this.$('.actions-photos').click(function(){self.command("selectAllPhotos");
return false;});this.$('.actions-videos').click(function(){self.command("selectAllVideos");return false;});this.$dom('external').detach().appendTo('.actions-ehost');
}zfl_ActionLinks.inherits(zfl_Control);zfl_ActionLinks.prototype.show=function(animate,mode){if(this._pinned)return;var btns=this._buttons;var defButtons=[btns.buy,btns.download,btns.addToFavorites,
btns.createBook];var buyButtons=[btns.buySelected,btns.save,btns.createBook];var downloadButtons=[btns.downloadSelected];$.each(defButtons,function(i,v){if(v)v.$dom().toggle(mode==null);
});$.each(buyButtons,function(i,v){if(v)v.$dom().toggle(mode=='buy');});$.each(downloadButtons,function(i,v){if(v)v.$dom().toggle(mode=='download');});if(animate){var self=this;
this.$().clearQueue().queue(function(next){zf_stdDeferCall(null,self.recalc,self);next();}).slideDown(400,function(){self.$dom('external').show();});}else{this.$().clearQueue().css({display:"block",
height:"auto"});this.$dom('external').show();this.recalc();}};zfl_ActionLinks.prototype.hide=function(animate){if(this._pinned)return;this.$dom('external').hide();if(animate){this.$().clearQueue().slideUp(400);
}else{this.$().clearQueue().css({display:"none",height:"auto"});}};zfl_ActionLinks.prototype.update=function(photo,context){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);
this.current=photo;this._showPhotoLinks();if(!photo.loaded){var self=this;photo.advise(this,function(){self._showPhotoLinks();});}};zfl_ActionLinks.prototype.photoDisplayed=function(){this._showPhotoLinks();
};zfl_ActionLinks.prototype._showPhotoLinks=function(){var photo=this.current;if(!photo)return;var actions={addToFavorites:this.commandtest("addToFavorites"),removeFromFavorites:this.commandtest("removeFromFavorites"),
addToCart:this.commandtest("addToCart"),createBook:this.commandtest("createBook"),download:this.commandtest("downloadOriginal")};this.enableActions(actions);};zfl_ActionLinks.prototype.recalc=function(){var width=this.$().width();
var centered=this.$(".actions-center").length>0;var hasSelect=this.$(".actions-select").length>0;if(centered&&hasSelect)this.$(".actions-inner").toggleClass("actions-squeezed",
width<580);};zfl_ActionLinks.prototype.enableActions=function(actions){this.$dom("addtocart").toggleClass("none",!actions.addToCart);this.$dom("createbook").toggleClass("none",
!actions.createBook);this.$dom("addtofav").toggleClass("none",!actions.addToFavorites);this.$dom("removefromfav").toggleClass("none",!actions.removeFromFavorites);
this.$dom("download").toggleClass("none",!actions.download);var hasFavorites=!!actions.addToFavorites||!!actions.removeFromFavorites;this.$dom("sep-addtocart").toggle(!!actions.addToCart&&(!!actions.createBook||hasFavorites||!!actions.download));
this.$dom("sep-createbook").toggle(!!actions.createBook&&(hasFavorites||!!actions.download));this.$dom("sep-addtofav").toggle(hasFavorites&&!!actions.download);if(actions.selected===undefined)actions.selected=1;
if(actions.printable===undefined){actions.printable=1;actions.printableVideos=actions.printableImages=0;if(this.current&&this.current.video)actions.printableVideos=1;
else actions.printableImages=1;}var text=zf_stdFormatString("{0} of {1} selected",actions.selected,actions.all);this.$dom("selected").text(text);if(this._buymenu)this._buymenu.setCounts(actions.printableImages,
actions.printableVideos);var btns=this._buttons;if(btns.buy)btns.buy.toggleEnabled(actions.addToCart);if(btns.buySelected)btns.buySelected.toggleEnabled(actions.addToCart);
if(btns.save)btns.save.toggleEnabled(actions.addToCart);if(btns.download)btns.download.toggleEnabled(actions.download);if(btns.downloadSelected)btns.downloadSelected.toggleEnabled(actions.download);
if(btns.createBook)btns.createBook.toggleEnabled(actions.createBook);};zfl_ActionLinks.prototype._buy_onmouseover=function(){var $base=this.$(".action-addtocart");var align='left';
if($base.length==0&&this._buttons.buy){$base=this._buttons.buy.$dom();align='right';}var height=$base.outerHeight();var pos=$base.offset();if(pos.left>zf_stdGetClientWidth()-300)this._buymenu.show(pos.left+$base.outerWidth(),
pos.top+height+2,true);else this._buymenu.show(pos.left,pos.top+height+2);return false;};zfl_ActionLinks.prototype._buy_onmouseout=function(){this._buymenu.hide();};zfl_ActionLinks.prototype._download_onmouseover=function(){if(!this.current)return false;
;var pos=this.$(".action-download").offset();var offset=2;this._dmenu.show(pos.left-10,pos.top+this.$(".action-download").outerHeight()+offset,false,this.current,
this.command,this.commandtest);this._dmenu.isExpanded=true;return false;};zfl_ActionLinks.prototype._download_onmouseout=function(){this._dmenu.hide();this._dmenu.isExpanded=false;
};;function zfl_MessageBox(id,args){zfl_Control.prototype.constructor.call(this,id);this._onbutton=args.onbutton;var self=this;this.$(".mbox-btn").click(function(){self._button_onclick(this);
return false;});}zfl_MessageBox.inherits(zfl_Control);zfl_MessageBox._counter=0;zfl_MessageBox.show=function(args){;var id="_zfl_MessageBox_"+zfl_MessageBox._counter++;var buttons=$.map(args.buttons,function(label,
index){return zfl_Button.createHtml(null,label,["button-large","mbox-btn","mbox-btn-"+index]);});var classes="";if(args.classes)classes=args.classes;var styles="";
if(args.width)styles=[' style="width:',args.width,'px;"'].join('');var text1=args.text,text2=args.text2;if(args.encode!=false){text1=zf_stdHtmlEncode(text1);if(!!text2)text2=zf_stdHtmlEncode(text2);
}var title='';if(!!args.title)title=['<div class="title">',zf_stdHtmlEncode(args.title),'</div>'].join("");var html2='';if(!!args.text2)html2=['<div class="text">',
text2,'</div>'].join("");var markup=['<div class="mbox-outer ',classes,'"',styles,' id="',id,'">','<div class="mbox popup-border1 popup-color1 popup-bgcolor1">',
title,'<div class="text">',text1,'</div>',html2,'<div class="buttons">',buttons.join(""),'</div>','</div>','</div>'];if(args.curtain==undefined||args.curtain)zfl_Curtain.show("light");
var mbox=$(markup.join("")).appendTo("body");var top=Math.floor((zf_stdGetClientHeight()-mbox.outerHeight())/2)+$(document).scrollTop();var left=Math.floor((zf_stdGetClientWidth()-mbox.outerWidth())/2);
mbox.css({top:top+"px",left:left+"px"});return new zfl_MessageBox(id,args);};zfl_MessageBox.prototype.hide=function(){this.$().remove();zfl_Curtain.hide();};zfl_MessageBox.prototype._button_onclick=function(button){;
var matches=/mbox-btn-(\d+)/.exec(button.className);;var index=parseInt(matches[1]);if(!this._onbutton||this._onbutton(index)!=false)this.hide();};;function zfl_SelectionPlugin(icon,
duration){this._callback=function(now,fx){var pos=-(4-Math.floor(now))*40;$(this).css({backgroundPosition:pos+"px 0px"});};this._icon=icon==undefined?true:icon;this._duration=duration==undefined?true:duration;
}zfl_SelectionPlugin.prototype.getInnerContent=function(id,context){;;;return['<span class="pv-sl">','<span class="pv-sl-bg"></span>','<span class="pv-sl-cl"></span>','<span class="pv-sl-cb"></span>',
'<span class="pv-sl-zm"></span>','</span>'].join('');};zfl_SelectionPlugin.prototype.onCreateDom=function(view,outer,inner,context,isNew){;;;;if(!context.selection)return;var $inner=$(inner);
var $sel=$inner.find('.pv-sl:first');var aparams={duration:150,easing:"linear",step:this._callback,queue:false};$sel.find('.pv-sl-cb:first,.pv-sl-cl:first').hover(function(){$(this).parent().find('.pv-sl-cb:first').animate({animation:4},
aparams);},function(){$(this).parent().find('.pv-sl-cb:first').animate({animation:0},aparams);});var self=this;$sel.find('.pv-sl-cl:first,.pv-sl-cb:first').click(function(){return zfl_SelectionPlugin._onclick(context);
});$sel.find('.pv-sl-zm:first').click(function(){return self._zoom_onclick(this,context);});};zfl_SelectionPlugin.prototype.onDestroyDom=function(view,outer,inner,context){$(inner).find('.pv-sl SPAN').unbind();
};zfl_SelectionPlugin.prototype.removeInnerContent=function(view,outer,inner,context){$(inner).find('.pv-sl').remove();};zfl_SelectionPlugin._onclick=function(context){var id=context.data.id;var selection=context.selection;
var selected=!selection.selected(id);if(selected){context.grid.selectItem(context.index);selection.select(id);}else{context.grid.deselectItem(context.index);selection.unselect(id);
}$('#__SelectionPlugin_Preview[data-id="'+id+'"]').toggleClass('pvsp-selected',selected).delay(250).fadeOut(300,function(){$(this).remove();$('#__SelectionPlugin_Preview-curtain').remove();
});return false;};zfl_SelectionPlugin.prototype._zoom_onclick=function(element,context){var photo=context.data;var method=zf_ProcessingMethod.StandardSmallSize;var size=photo.getScaledSize(method);
if(photo.video)method=$.extend({},zf_ProcessingMethod.VideoPosterFrame,{cx:method.cx,cy:method.cy});var href=photo.getInternalUrl(method,{block:true});var id="__SelectionPlugin_Preview";
var $img=$(element).closest('.pv-inner').find('.pv-img');var tsize=photo.getScaledSize(context.method);var offset=$img.offset();var top=offset.top-15;var left=offset.left-15;
var selected=context.selection.selected(context.data.id);var video='';if(photo.video&&(this._duration||this._icon)){video=['<div class="pv-v">','<div class="pv-v-b"></div>'];
if(this._icon)video.push('<div class="pv-v-i"></div>');if(this._duration)video.push('<div class="pv-v-d">',zf_stdFormatDuration(photo.duration,true),'</div>');video.push('</div>');
video=video.join('');}var markup=['<div id="',id,'-curtain" class="pvsp-curtain"></div>','<div id="',id,'" class="pvsp',selected?' pvsp-selected':'','" data-id="',
context.data.id,'" ','style="width:',tsize.cx,'px;height:',tsize.cy,'px;top:',top,'px;left:',left,'px">','<div class="pvsp-bg"></div>','<div class="pvsp-img" style="background-image:url(',
href,');">',video,'</div>','<div class="pvsp-cb">','<span class="pvsp-cb-text pvsp-cb-text-s">Select</span>','<span class="pvsp-cb-text pvsp-cb-text-u">Deselect</span>',
'</div>','<div class="pvsp-close"></div>','</div>'].join('');var sidp='#'+id;var sidc=sidp+'-curtain';var sids=[sidp,sidc].join(',');$(sids).remove();$(document.body).append(markup);
top=parseInt(offset.top+tsize.cy/2-size.cy/2-15-size.cy/8);left=parseInt(offset.left+tsize.cx/2-size.cx/2-15);var $window=$(window);var scrollTop=$window.scrollTop(),
scrollLeft=$window.scrollLeft();var windowWidth=$window.width(),windowHeight=$window.height();if(top<scrollTop)top=scrollTop;else if(top+size.cy+70>windowHeight+scrollTop)top=windowHeight+scrollTop-size.cy-70;
if(left<scrollLeft)left=scrollLeft;else if(left+size.cx+30>windowWidth+scrollLeft)left=windowWidth+scrollLeft-size.cx-30;$(sidp).animate({width:size.cx,height:size.cy,
top:top,left:left},100);$(sidp).find('.pvsp-close').click(function(){$(sids).remove();return false;});$(sidp).find('.pvsp-img').click(function(){$(sids).remove();
return false;});$(sidp).find('.pvsp-bg').click(function(){$(sids).remove();return false;});$(sidp).find('.pvsp-cb').click(function(){return zfl_SelectionPlugin._onclick(context);
});$(sidc).one('click',function(e){$(sids).remove();return false;});$(sids).bind('contextmenu',false);return false;};;var zf_PricingProducts={None:0,PhotoBooks:1};;function zfl_PhotoSetLayout(id,
global,local){zfl_Layout.prototype.constructor.call(this,id,global,local);zfl_PhotoDownload.prototype.constructor.call(this);var self=this;this._photoSet=zfl_stdTransformResponse(local.photoSet,
"photoSet");this._printableImages=this._photoSet.printableImages;this._printableVideos=this._photoSet.printableVideos;this._photoList=local.photoList;this._photoList.setDefaults(this._photoSet,
this._photoSet.owner);this._photoList.onload=this.closure(this._photoList_onload);this._controlBox=this._controls.add(local.controlBox);var pager=local.pager;var grid=this._grids.photos;
this.showAll=local.pager==null;if(grid&&pager){this._pager=pager;this.showAll=false;var cookie=zfl_SessionCookie.current;if(cookie&&cookie.recentPhotoSetId==this._photoSet.id)this.showAll=cookie.showAll;
this._setPagerMode(this.showAll?zf_Pager.All:zf_Pager.Paged);grid.onlayoutchange=function(info){pager.update(info.totalPages,info.currentPage);};pager.onall=function(){self._setPagerMode(zf_Pager.All);
self.recalc();};pager.onpaged=function(){self._setPagerMode(zf_Pager.Paged);self.recalc();};pager.onchange=function(page){grid.setPage(page);grid.recalcLayout();
};}if(grid){this._photoList.onshrink=function(){grid.setSize(self._photoList.length);return true;};}if(local.controlBox){local.controlBox.onslide=function(id,index){self._registerSlideVisit(index);
};local.controlBox.oneditproduct=this.closure(this._editProduct);local.controlBox.setCounts(this._photoSet.printableImages,this._photoSet.printableVideos);}this.setupGuestbook(global,
local);this._actions=this._controls.add(local.actions);this._selectPlugin=null;if(local.quickPriceList){local.quickPriceList.init(this.zenbar);local.quickPriceList.addtocart=this.closure(this._addToCart);
local.quickPriceList.onresize=this.closure(this.recalc);}if(local.likeButton)local.likeButton.update(this._photoSet);if(local.tweetButton)local.tweetButton.update(this._photoSet);
if(local.plusoneButton)local.plusoneButton.update(this._photoSet);if(this.scrapbook)this.scrapbook.onchange=this.closure(this._scrapbook_onchange);this.cyMinFooter=15;
this._fakeVideoOriginals=local.fakeVideoOriginals;}zfl_PhotoSetLayout.inherits(zfl_Layout,zfl_PhotoDownload);zfl_PhotoSetLayout.prototype.onrecalc=function(){zfl_Layout.prototype.onrecalc.call(this);
if(this._pager&&this._grids.photos){var info=this._grids.photos.getLayoutInfo();this._pager.update(info.totalPages,info.currentPage);}if(this._actions)this._actions.recalc();
};zfl_PhotoSetLayout.prototype.loadSelection=function(){this._selection=zfl_PhotoSelection.load("photos",this._photoSet.id);this._selection.onchange=this.closure(this._selection_onchange);
};zfl_PhotoSetLayout.prototype.saveSelection=function(){zf_stdDeferCall(this.id+".selection",this._selection.save,this._selection,"photos");};zfl_PhotoSetLayout.prototype.onload=function(){this.loadSelection();
var photoList=this._photoList;this.initGrid(this._grids.photos,zfl_PhotoViewStyle.GalleryPhoto,this._grids.photosParams,function(index){return photoList.get(index);
},photoList.length,this._selection);if(this._controlBox)this._controlBox.init(this._photoSet,this._selection,this.zenbar);zfl_Layout.prototype.onload.call(this);
};zfl_PhotoSetLayout.prototype._grid_onstretch=function(height,stretcher){var grid=this._grids.photos;if(this.showAll){grid.minRows=null;grid.setHeight(-1);}else{grid.minRows=2;grid.setHeight(height);
}stretcher.style.height="auto";stretcher.style.minHeight=height+"px";var info;var scrollY=-1;if(!this.__inited){var cookie=zfl_SessionCookie.current;if(cookie&&cookie.recentPhotoSetId==this._photoSet.id&&cookie.recentPhotoIndex>=0&&cookie.recentPhotoIndex<this._photoList.length){info=grid.getLayoutInfo();
if(this.showAll){var rowHeight=info.height/info.rowsPerPage;var currentRow=cookie.recentPhotoIndex/info.itemsPerRow;var offset=rowHeight*currentRow;if(offset>zf_stdGetClientHeight()-100)scrollY=offset;
}else{info.currentPage=Math.floor(cookie.recentPhotoIndex/info.itemsPerPage);grid.setPage(info.currentPage);}info=null;}else{if(cookie)cookie.setRecent(this._photoSet.id,
0);}this.__inited=true;}else{info=grid.getLayoutInfo(zf_PhotoGrid.KeepVisible);}grid.recalcLayout(info);if(scrollY>0)window.scrollTo(0,scrollY);return true;};zfl_PhotoSetLayout.prototype._setPagerMode=function(mode){if(!this._pager)return;
this.showAll=mode==zf_Pager.All;zfl_SessionCookie.current.setShowAll(this.showAll);this._pager.setMode(mode);};zfl_PhotoSetLayout.prototype._registerSlideVisit=function(photoIndex){var photo=this._photoList.get(photoIndex);
;if(photo.loaded){if(photo.access.type==zf_AccessType.Password&&!zfl_PasswordManager.check(photo.access.ownerId,photo.access.realmId))return;var sessionKey=zfl_SessionCookie.current.sessionKey;
zf_stdServerRequest("GET","/zf/layout/layout.asmx","RegisterVisit",[photo.owner.id,photo.gallery.id,photo.id,this._photoSet.owner.id,this._photoSet.id,sessionKey],
zf_stdTrue);}else{var self=this;photo.advise({},function(){self._registerSlideVisit(photoIndex);});}};zfl_PhotoSetLayout.prototype._selection_onchange=function(){this.saveSelection();
var actions=this._updateActions();if(this._controlBox){if(!this._selection||this._selection.none())this._controlBox.setCounts(this._printableImages,this._printableVideos);
else this._controlBox.setCounts(actions.printableImages,actions.printableVideos);}};zfl_PhotoSetLayout.prototype._selectAll=function(photoType){if(!this._selection)return;var self=this;
var photoList=this._photoList;var grid=this._grids.photos;photoList.loadAll(function(){if(photoType!=undefined)self._selectNone();var ids=[];for(var i=0;i<photoList.length;
i++){var photo=photoList.get(i);if(photoType==undefined||(photoType==0&&!photo.video)||(photoType==1&&photo.video)){ids.push(photo.id);if(grid)grid.selectItem(i);
}}self._selection.select(ids);});};zfl_PhotoSetLayout.prototype._selectNone=function(){if(!this._selection)return;this._selection.unselect();if(this._grids.photos)this._grids.photos.deselectAll();
};zfl_PhotoSetLayout.prototype._addToFavorites=function(purchase,noconfirm){if(!this.scrapbook)return;var self=this;if(!noconfirm&&!purchase&&this._selection&&this._selection.none()){var text=this._photoSet.type==zf_PhotoSet.Gallery?"You are about to add all photos from the gallery to Favorites":"You are about to add all photos from the collection to Favorites";
var button=this._photoSet.type==zf_PhotoSet.Gallery?"Add the entire gallery":"Add the entire collection";zfl_MessageBox.show({text:text,buttons:["Cancel",button],
onbutton:function(i){if(i==1)self._addToFavorites(purchase,true);}});return;}if(!this._selection||this._selection.none()){var photoList=this._photoList;photoList.loadAll(function(){var ids=[];
for(var i=0;i<photoList.length;i++){var photo=photoList.get(i);ids.push(photo.id);}self.scrapbook.addPhotos(ids,purchase);});}else{this.scrapbook.addPhotos(this._selection.get(),
purchase,function(){self._leaveSelection(true);});}};zfl_PhotoSetLayout.prototype._addToCart=function(options){if(!this.zenbar)return;var self=this;options=options?options:{};if(!options.newProduct){options.allPhotos=this._photoList;
options.fromSelection=this._selection!=null&&!this._selection.none();options.startSelection=function(){self._enterSelection(true,'buy');};}var setPhotos=this.zenbar.addToCart(options);
this._setCartPhotos(setPhotos);};zfl_PhotoSetLayout.prototype._createBook=function(options){if(!this.zenbar)return;var self=this;options=options?options:{};options.categoryId="photobooks";
this._addToCart(options);};zfl_PhotoSetLayout.prototype._confirmProduct=function(info){if(!this.zenbar)return;var confirmationScreen=this.zenbar.confirmProduct();confirmationScreen(info);
};zfl_PhotoSetLayout.prototype._editProduct=function(info){if(!this.zenbar)return;var setPhotos=this.zenbar.editProduct(info,{allPhotos:this._photoList});this._setCartPhotos(setPhotos);
};zfl_PhotoSetLayout.prototype._setCartPhotos=function(setPhotos){var photoList=this._photoList;var photos=[];var dereference=function(id){var index=photoList.find(id);return index==-1?null:photoList.get(index);
};var printable=function(photo){return photo.priceKey!=""?photo:null;};if(this._selection&&!this._selection.none()){var ids=this._selection.get();photos=$.map(ids,
dereference);if(photos.length<ids.length){photoList.loadAll(function(){photos=$.map(ids,dereference);setPhotos($.map(photos,printable));});return;}setPhotos($.map(photos,
printable));return;}photoList.loadAll(function(){for(var i=0;i<photoList.length;i++){var photo=photoList.get(i);;if(photo.priceKey!="")photos.push(photo);}setPhotos(photos);
});};zfl_PhotoSetLayout.prototype._download=function(){if(!this._selection||this._selection.none()){var text=this._photoSet.type==zf_PhotoSet.Gallery?"You are about to download all photos from the gallery":"You are about to download all photos from the collection";
var button=this._photoSet.type==zf_PhotoSet.Gallery?"Download entire gallery":"Download entire collection";var self=this;zfl_MessageBox.show({text:text,buttons:["Cancel",
button],onbutton:function(i){if(i==1)self._downloadOriginals(self._photoSet.title,self._photoList);}});return;}this._downloadOriginals(this._photoSet.title,this._selection.getPhotos(this._photoList));
};zfl_PhotoSetLayout.prototype._scrapbook_onchange=function(info,edit){if(this.zenbar)this.zenbar.setScrapbookInfo(info,edit);if(!edit&&info&&info.addedCount!=undefined){var message=null;
if(info.failedCount>0)message="An error has occurred while trying to add some photos to favorites.";else if(info.notOwnedCount>0)message="Some photos could not be added to favorites because they are not owned by the photographer.";
if(message)zfl_MessageBox.show({text:message,buttons:["OK"]});}};zfl_PhotoSetLayout.prototype._photoList_onload=function(first){;this.recalc();var selection=this._selection;if(first&&selection){if(selection.none()){selection.__zfl_verified=true;
this._updateActions(true);return;}var self=this;this._photoList.loadAll(function(){selection.__zfl_verified=true;var selected=selection.get();var missing=[];for(var i=0;
i<selected.length;i++){if(self._photoList.find(selected[i])==-1)missing.push(selected[i]);}if(missing.length>0)selection.unselect(missing);else self._selection_onchange();
});}};zfl_PhotoSetLayout.prototype._updateActions=function(first){if(!this._actions||!this._selection)return{};if(!this._selection.__zfl_verified)return{};var actions;var photoList=this._photoList;
var self=this;if(this._selection.none()){actions={addToFavorites:true,addToCart:true,download:true,selected:0,all:this._photoList.length,printable:this._photoList.length,
printableImages:this._printableImages,printableVideos:this._printableVideos,createBook:true};this._actions.enableActions(actions);return actions;}actions={addToFavorites:false,
addToCart:false,download:false,selected:0,all:this._photoList.length,printable:0,printableImages:0,printableVideos:0,createBook:false};var selected=this._selection.get();
for(var i=0;i<selected.length;i++){var index=this._photoList.find(selected[i]);;if(index==-1)continue;var photo=this._photoList.get(index);;if(!photo.loaded)continue;
++actions.selected;actions.addToFavorites=actions.addToFavorites||!this._photoSet||photo.owner.id==this._photoSet.owner.id;if(photo.priceKey!=""){actions.addToCart=true;
++actions.printable;if(photo.video)++actions.printableVideos;else++actions.printableImages;}actions.createBook=actions.createBook||((photo.pricingProducts&zf_PricingProducts.PhotoBooks)==zf_PricingProducts.PhotoBooks);
actions.download=actions.download||!photo.video&&(photo.access.mask&zf_AccessMask.ProtectOriginals)==0||photo.video&&this._fakeVideoOriginals;}this._actions.enableActions(actions);
if(first)this._enterSelection(false);return actions;};zfl_PhotoSetLayout.prototype._enterSelection=function(animate,mode){if(!this._actions)return;this._actions.show(animate,mode);
if(this._controlBox){if(animate)this.$('.selection-dimmable').clearQueue().animate({opacity:0},400);else this.$('.selection-dimmable').clearQueue().css({opacity:0});
this._controlBox.selectionEnabled(true);}if(!this._selectPlugin){var gridParams=this._grids.photosParams;this._selectPlugin=new zfl_SelectionPlugin(gridParams.vicon,
gridParams.vduration);this._grids.photos.addPlugin(this._selectPlugin);}};zfl_PhotoSetLayout.prototype._leaveSelection=function(animate){if(!this._actions)return;this._actions.hide(animate);
this._selectNone();if(this._controlBox){if(animate)this.$('.selection-dimmable').clearQueue().animate({opacity:1.0},400);else this.$('.selection-dimmable').clearQueue().css({opacity:1.0});
this._controlBox.selectionEnabled(false);}if(this._selectPlugin){this._grids.photos.removePlugin(this._selectPlugin);this._selectPlugin=null;}};zfl_PhotoSetLayout.prototype._checkSelection=function(command){var self=this;
var desc={};var gallery=this._photoSet.type==zf_PhotoSet.Gallery;var mode=null;var images=this._photoSet.images>=0&&this._photoSet.videos==0;var videos=this._photoSet.images==0&&this._photoSet.videos>0;
if(command=="downloadOriginal"){if(this._selection&&!this._selection.none()){this._downloadOriginals(this._photoSet.title,this._selection.getPhotos(this._photoList));
return;}desc.title="Download";desc.text=gallery?"You are about to download everything from the gallery":"You are about to download everything from the collection";
desc.button1=gallery?"Download entire gallery":"Download entire collection";desc.button2=images?"Select photos to download":videos?"Select videos to download":"Select items to download";
desc.callback=function(){self._downloadOriginals(self._photoSet.title,self._photoList);};mode='download';}else if(command=="addToFavorites"){if(this._selection&&!this._selection.none()){this._addToFavorites(false,
true);return;}desc.title="Add to Favorites";desc.text=gallery?"You are about to add everything in the gallery to Favorites":"You are about to add everything in the collection to Favorites";
desc.button1=gallery?"Add the entire gallery":"Add the entire collection";desc.button2="Select photos to add";desc.callback=function(){self._addToFavorites(false,
true);};}else{;}var markup=['<div class="pc" id="',this.id,'-selection">','<div class="pc-bg"></div>','<div class="pc-frame pc-bgcolor1 pc-border1 pc-font1 pc-color1">',
'<div class="pc-hdr pc-bgcolor2 pc-font3 pc-color1 pc-border2">',zf_stdHtmlEncode(desc.title),'</div>','<a class="pc-hdr-close pc-font2" href="#">',zf_stdHtmlEncode('Close'),
'<span></span>','</a>','<div class="pc-body" style="height:400px">','<div class="pc-slidein pc-color1 pc-border2 pc-bgcolor1 pc-slidein-s" style="width:100%;height:100%;right:0px">',
'<div class="pc-selection-c" style="margin-top:-150px">','<h6 class="pc-font2">',zf_stdHtmlEncode(desc.text),'</h6>','<div class="pc-selection-l">','<a class="pc-button pc-font2 pc-selection-y button-color1 button-bgcolor1 button-border1" href="#">',
zf_stdHtmlEncode(desc.button1),'</a>','<a class="pc-button pc-font2 pc-selection-n button-color1 button-bgcolor1 button-border1" href="#">',zf_stdHtmlEncode(desc.button2),
'</a>','</div>','</div>','</div>','</div>','</div>'];var $popup=$(markup.join('')).appendTo(document.body);var $window=$(window);$popup.find('.pc-bg').height($window.height());
$popup.find('.pc-frame').css({width:600,height:400,left:($window.width()-600)/2,top:($window.height()-400)/2});var close=function(){$popup.remove();};$popup.find('.pc-hdr-close').click(function(){close();
return false;});$popup.find('.pc-selection-n').click(function(){close();self._enterSelection(true,mode);return false;});$popup.find('.pc-selection-y').click(function(){close();
desc.callback();return false;});$popup.find('A.pc-button').hover(function(){zfl_Button.onmouseover(this);},function(){zfl_Button.onmouseout(this);});$popup.show();
};zfl_PhotoSetLayout.prototype.getCommands=function(){var desc={addToCart:{test:zf_stdTrue,exec:function(id,options){this._addToCart(options);}},createBook:{test:"addToCart",exec:function(id,
options){this._createBook(options);}},editProduct:{test:zf_stdTrue,exec:function(id,info){this._editProduct(info);}},confirmProduct:{test:zf_stdTrue,exec:function(id,
info){this._confirmProduct(info);}},downloadOriginal:{exec:function(){this._checkSelection("downloadOriginal");}},downloadPhoto:{test:"downloadOriginal",exec:"downloadOriginal"},
downloadPhoto2:{test:"downloadOriginal",exec:"downloadOriginal"},downloadGallery:{test:function(){return this._photoSet.type==zf_PhotoSet.Gallery;},exec:"downloadOriginal"},
downloadCollection:{test:function(){return this._photoSet.type==zf_PhotoSet.Collection;},exec:"downloadGallery"},addToFavorites:{exec:function(id,purchase){if(purchase)this._addToFavorites(true);
else this._checkSelection("addToFavorites");}},selectAll:{exec:function(){this._selectAll();}},selectAllPhotos:{exec:function(){this._selectAll(0);}},selectAllVideos:{exec:function(){this._selectAll(1);
}},selectNone:{exec:function(){this._selectNone();}},selectPhotos:{exec:function(id,enable,mode){if(enable)this._enterSelection(true,mode);else this._leaveSelection(true);
}}};var parent=zfl_Layout.prototype.getCommands.call(this);$.each(parent,function(k,v){if(!desc[k])desc[k]=v;});return desc;};;function zfl_QuickPriceList(id,isPhoto,priceKey,
images,videos){zfl_Control.prototype.constructor.call(this,id);this._popup=new zfl_Popup(this.dom('popup').id);var self=this;this.$('.qpl-template').hover(function(){$(this).addClass('qpl-product-hover qpl-bgcolor2');
},function(){$(this).removeClass('qpl-product-hover qpl-bgcolor2');}).click(this.closure(this._product_onclick)).find('.qpl-product-name').hover(function(){$(this).addClass('qpl-color2').removeClass('qpl-color1');
},function(){$(this).addClass('qpl-color1').removeClass('qpl-color2');});this._priceKey=priceKey;this._isPhoto=isPhoto;this._images=images;this._videos=videos;}zfl_QuickPriceList.inherits(zfl_Control);
zfl_QuickPriceList.prototype.init=function(zenbar){this._cart=zenbar.cart;var self=this;zenbar.$dom().bind("zfl_cartchange",function(){self._cart=zenbar.cart;if(self._rawPriceList&&self._cart.currency){if(self._rawPriceList.currency.code!=self._cart.currency.code)self._loadAndRender(self._priceKey,
self._cart.currency);}});var bin=zf_Control.find(this.$('.bin:first')[0].id);bin.setTitleSuffix(['<span class="qpl-header-right">','<a id="',this.id,'-currencies"><span class="qpl-currency"></span><span class="ddown-font1">&#9660;</span></a> ',
'</span>'].join(''));this.$('.qpl-addtocart').click(function(){self.addtocart();});$(this.dom('currencies')).click(this.closure(this._currencies_onclick));if(!this._isPhoto&&this._priceKey)this._loadAndRender(this._priceKey);
};zfl_QuickPriceList.prototype.update=function(photo){if(this.current)this.current.unadvise(this);this.current=photo;var self=this;var onPhotoLoaded=function(){self._loadAndRender(new zf_PriceKey(photo),
self._cart.currency);};if(photo.loaded)onPhotoLoaded();else photo.advise(this,onPhotoLoaded);};zfl_QuickPriceList.prototype._loadAndRender=function(priceKey,currency){;var self=this;
this._priceKey=priceKey;var includeImages=false,includeVideos=false;if(!this._isPhoto){includeImages=this._images>0;includeVideos=this._videos>0;}else if(this.current&&this.current.loaded){includeImages=!this.current.video;
includeVideos=this.current.video;}if(priceKey.pricingKey==''||(!includeImages&&!includeVideos)){$(this.dom()).removeClass('qpl-loading').addClass('qpl-nopricing');
this.notifyResize(true);return;}$(this.dom()).removeClass('qpl-nopricing').addClass('qpl-loading');;if(this._cart.size==0){if(currency==null){var currencyCode=zf_stdGetCookie('zf_cur');
if(currencyCode!=null)currency=zf_CurrencyInfo.all[currencyCode];}if(currency!=null)this._cart.currency=currency;}else if(!currency)currency=this._cart.currency;
zf_PriceList.loadFeatured(priceKey,currency,function(cacheKey,pricing){if(self._priceKey&&self._priceKey.equals(priceKey)){if(!self._cart.currency||self._cart.currency.code==currency.code)self._renderPricing(pricing,
includeImages,includeVideos);}});};zfl_QuickPriceList.prototype._renderPricing=function(pricelist,includeImages,includeVideos){;this._rawPriceList=pricelist;$(this.dom()).removeClass('qpl-loading');
var shipzone=zfp_Configurator.getShippingZone(pricelist);pricelist=pricelist.filter(zfp_Configurator.createShippingZoneFilter(shipzone));this.$('.qpl-currency').text(pricelist.currency.shortName);
var products=[].concat(pricelist.root.products).concat(pricelist.root.packages);products=$.map(products,function(p){if(includeImages&&(p.sourceTypes==undefined||p.sourceTypes&zf_SourceType.Image))return p;
if(includeVideos&&(p.sourceTypes&zf_SourceType.Video))return p;return null;});var sortWeights=pricelist.getWeights(zf_PricingSortWeight.Type.FeaturedProduct);if($.isEmptyObject(sortWeights))sortWeights=pricelist.getWeights(zf_PricingSortWeight.Type.Product);
products.sort(pricelist.getProductComparer(null,sortWeights));var container=this.$('.qpl-products').empty();var cntPrintable=0;var lastWeight=0;for(var i=0;i<products.length;
i++){var product=products[i];var weight=sortWeights[zf_PricingSortWeight.getProductKey(null,product)];if(weight==null)weight=lastWeight;if(this.current&&!zfp_Configurator.isPhotoPrintable(product,
this.current))continue;cntPrintable++;if(weight-lastWeight>100)container.append('<div class="qpl-separator">&nbsp;</div>');var name=product.meta().name;var row=this.$('.qpl-template').clone(true).removeClass('qpl-template');
row.find('.qpl-product-price').text(zf_stdFormatMoney(product.minPrice==null?product.price:product.minPrice));row.find('.qpl-product-name').text(name);row.data('zf-product',
product);container.append(row);lastWeight=weight;}$(this.dom()).toggleClass('qpl-empty',cntPrintable==0);this.notifyResize(false);};zfl_QuickPriceList.prototype._product_onclick=function(e){var product=$(e.currentTarget).closest('.qpl-product').data('zf-product');
this.addtocart({vendorId:product.vendor.id,productId:product.id});};zfl_QuickPriceList.prototype._currencies_onclick=function(e){;var pricelist=this._rawPriceList;var currencies=[pricelist.currency].concat(pricelist.alternateCurrencies);
var shipzone=zfp_Configurator.getShippingZone(pricelist);shipzone.sortByPreference(currencies);var popup=$(this.dom('popup'));var container=popup.find('.qpl-popup-currencies').empty();
for(var i=0;i<currencies.length;i++){var cssClass=i==0?' selected qpl-bgcolor3':'';var html=['<a data-code="',currencies[i].code,'" class="qpl-popup-currency buymenu-color1 buymenu-bgcolor1',
cssClass,'">',currencies[i].shortName,'</a>'];container.append(html.join(''));}popup.find('.qpl-popup-section-currency').toggle(this._cart.size==0&&this._rawPriceList.alternateCurrencies.length>0);
popup.find('.qpl-popup-shipzone').removeClass('selected qpl-bgcolor3').filter('[data-shipzone='+shipzone.code+']').addClass('selected qpl-bgcolor3');var units='in';
if(pricelist.categories.root==null)popup.find('.qpl-popup-section-units').hide();else{if(pricelist.categories.root.culture=='en')units='cm';popup.find('.qpl-popup-section-units').show();
}popup.find('.qpl-popup-unit').removeClass('selected qpl-bgcolor3').filter('[data-unit='+units+']').addClass('selected qpl-bgcolor3');popup.find('.qpl-popup-shipzone, .qpl-popup-currency, .qpl-popup-unit').unbind('click').bind('click',
function(){$(this).addClass('selected qpl-bgcolor3').siblings().removeClass('selected qpl-bgcolor3');});var self=this;popup.find('.qpl-popup-btn-ok').unbind('click').bind('click',
function(){var szCode=popup.find('.qpl-popup-shipzone.selected').attr('data-shipzone');var currencyCode=popup.find('.qpl-popup-currency.selected').attr('data-code');
var newUnits=popup.find('.qpl-popup-unit.selected').attr('data-unit');var currency=zf_CurrencyInfo.all[currencyCode];if(szCode!=shipzone.code)zfp_Configurator.setShippingZone(szCode);
if(newUnits!=units){var locale=newUnits=='cm'?'en-EU':'en-US';zfp_Configurator.setLocale(locale);}if(self._cart.size==0){var expires=new Date();expires.setFullYear(expires.getFullYear()+1);
zf_stdSetCookie('zf_cur',currency.code,expires,true);}if(self._cart.size==0&&currencyCode!=pricelist.currency.code||newUnits!=units)self._loadAndRender(self._priceKey,
currency);else self._renderPricing(pricelist);popup.hide();});this._popup.show(e.currentTarget);};;;function zfl_Copyright(id,field,format){zfl_Control.prototype.constructor.call(this,
id);zf_stdMakeMethodsDeferred(this,this.id,["set"]);}zfl_Copyright.inherits(zfl_Control);zfl_Copyright.prototype.set=function(text,loading){if(!loading)this.visibility(text!="");var label=this.dom("label");
zf_stdReplaceClassName(label,loading?null:"copyright-loading",loading?"copyright-loading":null);zf_stdSetText(label,text);};zfl_Copyright.prototype.showLoading=function(){this.set("Loading...",
true);};zfl_Copyright.prototype.update=function(photo){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);if(photo.loaded){var copyright=photo.copyright==null?photo.owner.copyright:photo.copyright;
if(copyright===undefined)copyright="\u00A9 "+photo.owner.displayName;this.set(copyright);}else{var self=this;photo.advise(this,function(){var copyright=photo.copyright==null?photo.owner.copyright:photo.copyright;
if(copyright===undefined)copyright="\u00A9 "+photo.owner.displayName;self.set(copyright);self.notifyResize(true);},function(){self.showLoading();self.notifyResize(true);
});}this.current=photo;};zfl_Copyright.prototype.login=function(verb){var href=null;if(this.current&&this.current.loaded)href=this.current.getHref("full");zfl_Header.login(href,
verb);};zfl_Copyright.prototype.logout=function(){var href;if(this.current&&this.current.loaded)href=this.current.getHref("full");else href=location.href;location.href=zf_stdGetLogoutUrl(href);
};;;function zfl_Caption(id,nocaption){zfl_Control.prototype.constructor.call(this,id);this._showGallery=this.dom("gallery")!=null;this._nocaption=nocaption;zf_stdMakeMethodsDeferred(this,
this.id,["setTitle","setCaption","setGallery","setDisplay","_updateClasses"]);}zfl_Caption.inherits(zfl_Control);zfl_Caption.prototype.setTitle=function(text,loading){var label=this.dom("title");
if(!loading)label.style.display=text.length>0?"block":"none";zf_stdReplaceClassName(label,loading?null:"title-loading",loading?"title-loading":null);zf_stdSetText(label,
text);};zfl_Caption.prototype.setCaption=function(html,loading){var label=this.dom("caption");if(loading)html="Loading...";label.style.display=html.length>0?"block":"none";
if(html.length>0){zf_stdReplaceClassName(label,loading?null:"caption-loading",loading?"caption-loading":null);}label.innerHTML=html;};zfl_Caption.prototype.setGallery=function(gallery,
loading){var label=this.dom("gallery");if(label==null)return;label.style.visibility=!loading?"inherit":"hidden";if(gallery==null||loading)return;label=label.getElementsByTagName("A")[0];
label.href=zf_stdGetTransferUrl(this.current.getHref("gallery"));zf_stdSetText(label,this.current.gallery.title);};zfl_Caption.prototype.showLoading=function(){this.setTitle("Loading...",
true);this.setCaption(null,true);this.setGallery(null,true);};zfl_Caption.prototype.update=function(photo){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);
if(this.currentMeta!=null)this.currentMeta.unadvise(this);this.current=photo;this.currentMeta=null;if(photo.loaded){this.set(photo);}else{var self=this;photo.advise(this,
function(){self.set(photo);self.notifyResize(true);},function(){self.showLoading();self.notifyResize(true);});}};zfl_Caption.prototype.set=function(photo){;var hasTitle=photo.title.length>0;
var hasCaption=!this._nocaption&&(photo.flags&zf_PhotoFlags.HasCaption)!=0;if(!hasTitle&&!hasCaption&&!this._showGallery){this.setDisplay(false);this.setTitle("");
this.setCaption("");return;}this.setTitle(photo.title);if(this._showGallery)this.setGallery(photo.gallery);if(hasCaption){var meta=photo.getMeta();this.currentMeta=meta;
if(meta.loaded){this.setCaption(meta.caption);}else{this.setCaption(null,true);var self=this;meta.bump();meta.advise(this,function(){self.setCaption(meta.caption);
self.notifyResize(true);},function(){self.setCaption(null,true);self.notifyResize(true);});}}else{this.setCaption("");}this._updateClasses(hasTitle,hasCaption);this.setDisplay(true);
};zfl_Caption.prototype.setDisplay=function(show){this.display(show);};zfl_Caption.prototype._updateClasses=function(hasTitle,hasCaption){var prefixes=["captionbox-wide","captionbox-regular"];
var suffix;if(hasTitle&&hasCaption)suffix={add:"-tc",remove:["-t","-c","-g"]};else if(hasTitle)suffix={add:"-t",remove:["-tc","-c","-g"]};else if(hasCaption)suffix={add:"-c",
remove:["-tc","-t","-g"]};else suffix={add:"-g",remove:["-tc","-c","-t"]};var dom=this.dom();for(var i=0;i<prefixes.length;i++){if(!zf_stdHasClassName(dom,prefixes[i]))continue;
zf_stdReplaceClassName(dom,prefixes[i]+suffix.remove[0],prefixes[i]+suffix.add);for(var j=1;j<suffix.remove.length;j++)zf_stdReplaceClassName(dom,prefixes[i]+suffix.remove[j],
null);break;}};;;function zfl_ShortExif(id,compact){zfl_Control.prototype.constructor.call(this,id);this._compact=compact;zf_stdMakeMethodsDeferred(this,this.id,["set","showLoading"]);
}zfl_ShortExif.inherits(zfl_Control);zfl_ShortExif.prototype.set=function(meta){this.$dom("loading").addClass("none");var html=this._generateHTML(meta);if(html.length==0){this.$dom("content").addClass("none");
this.$dom("notavailable").removeClass("none");return;}this.$dom("text").html(html);this.$dom("content").removeClass("none");this.$dom("notavailable").addClass("none");
};zfl_ShortExif.prototype.showLoading=function(){this.$dom("loading").removeClass("none");this.$dom("content").addClass("none");this.$dom("notavailable").addClass("none");};zfl_ShortExif.prototype.update=function(photo){;
;var meta=photo.getMeta();if(this.current==meta)return;if(this.current!=null)this.current.unadvise(this);this.current=meta;if(meta.loaded){this.set(meta);}else{var self=this;
meta.bump();meta.advise(this,function(){self.set(meta);self.notifyResize(true);},function(){self.showLoading();self.notifyResize(true);});}};zfl_ShortExif.prototype._compose=function(exif){var sb=[];
var val;var make=exif[0x010F];var model=exif[0x0110];if(make!=null&&model!=null){if(model.data.indexOf(make.data)!=0)sb.push(zf_stdHtmlEncode(make.display)," ",zf_stdHtmlEncode(model.display));
else sb.push(zf_stdHtmlEncode(model.display));}else if(model!=null)sb.push(zf_stdHtmlEncode(model.display));else if(make!=null)sb.push(zf_stdHtmlEncode(make.display));
var fNumberAdded=false;val=exif[0x829D];if(val!=null){if(sb.length>0)sb.push(", ");sb.push('<span class="nowrap">',zf_stdHtmlEncode(val.display),'</span>');fNumberAdded=true;
}else if(exif[0x829A]!=null){if(sb.length>0)sb.push(", ");sb.push('<span class="nowrap">f/NA</span>');fNumberAdded=true;}val=exif[0x920A];if(val!=null){if(fNumberAdded)sb.push(" @ ");
else if(sb.length>0)sb.push(", ");sb.push('<span class="nowrap">',zf_stdHtmlEncode(val.display),'</span>');}val=exif[0x829A];if(val!=null){if(sb.length>0)sb.push(", ");
sb.push('<span class="nowrap">',zf_stdHtmlEncode(val.display),'</span>');}val=exif[0x8827];if(val!=null){if(sb.length>0)sb.push(", ");sb.push('<span class="nowrap">',
zf_stdHtmlEncode(val.display),'</span>');}val=exif[0x9209];if(val!=null){if(sb.length>0)sb.push(", ");val=(parseInt(val.data)&1)!=0?"Flash":"No Flash";sb.push('<span class="nowrap">',
val,'</span>');}return sb.join("");};zfl_ShortExif.prototype._generateHTML=function(meta){var content="";if((meta.photo.access.mask&zf_AccessMask.ProtectExif)==0)content=this._compose(meta.exif);
if(content.length==0)return "";var format=this._compact?"{0}":"Photo taken with {0} ";return zf_stdFormatString(format,content);};zfl_ShortExif.prototype._ellipses_onmouseover=function(event){this._ellipses_onmouseout();
var domSrc=zf_stdGetEventSource(event);var offset=zf_stdGetOffset(domSrc);var domTip=document.createElement("DIV");domTip.id="exifTip";domTip.className="shortexif-tip popup-bgcolor1 popup-border1 shortexif-color1";
domTip.innerHTML="            For more EXIF and photo information, move your mouse over the image.        ";document.body.appendChild(domTip);domTip.style.left=offset.cx-domTip.clientWidth+"px";
domTip.style.top=offset.cy-domTip.clientHeight-5+"px";};zfl_ShortExif.prototype._ellipses_onmouseout=function(event){var domTip=document.getElementById("exifTip");if(domTip!=null)domTip.parentNode.removeChild(domTip);
};;;function zf_CategoryInfo(map){;for(var code in map)map[code]={code:parseInt(code,10),title:map[code]};this._map=map;}zf_CategoryInfo.load=function(oncomplete){;if(zf_CategoryInfo._info!=null){oncomplete(zf_CategoryInfo._info);
return;}zf_stdServerRequestEx("GET","/zf/core/core.asmx","GetCategoryInfo",[],function(result,error){if(error!=null){oncomplete(new zf_CategoryInfo({}));return;}zf_CategoryInfo._info=new zf_CategoryInfo(result);
oncomplete(zf_CategoryInfo._info);});};zf_CategoryInfo.prototype.getSubject=function(cat){;cat-=cat%1000000;return(cat=this._map[cat])!=null?cat.title:"";};zf_CategoryInfo.prototype.getSubjectMatter=function(cat){;
cat-=cat%1000;return((cat%1000000)!=0&&(cat=this._map[cat])!=null)?cat.title:"";};zf_CategoryInfo.prototype.getSubjectDetail=function(cat){;return((cat%1000)!=0&&(cat=this._map[cat])!=null)?cat.title:"";
};zf_CategoryInfo.prototype.getSubjects=function(){var res={};var map=this._map;for(var code in map){var r=map[code];code=r.code;if((code%1000000)==0)res[code]=r.title;}return res;
};zf_CategoryInfo.prototype.getSubjectMatters=function(subject){;;;var res={};var map=this._map;for(var code in map){var r=map[code];code=r.code;if(code!=subject&&(code-(code%1000000))==subject&&(code%1000)==0)res[code]=r.title;
}return res;};zf_CategoryInfo.prototype.getSubjectDetails=function(matter){;;;;var res={};var map=this._map;for(var code in map){var r=map[code];code=r.code;if(code!=matter&&(code-(code%1000))==matter)res[code]=r.title;
}return res;};;function zfl_Categories(id){zfl_Control.prototype.constructor.call(this,id);zf_stdMakeMethodsDeferred(this,this.id,["setCategory","setKeywords"]);}zfl_Categories.inherits(zfl_Control);
zfl_Categories.prototype.setCategory=function(category,loading){var ct1="",ct2="",ct3="";var c1=this.dom("category").getElementsByTagName("B")[0];var c2=this.dom("subcategory").getElementsByTagName("B")[0];
var c3=this.dom("subcategoryDetail").getElementsByTagName("B")[0];zf_stdReplaceClassName(c1,loading?null:"pair-loading",loading?"pair-loading":null);if(loading){ct1="loading...";
}else if(category!=0){;ct1=this.categoryList.getSubject(category);ct2=this.categoryList.getSubjectMatter(category);ct3=this.categoryList.getSubjectDetail(category);
}zf_stdSetText(c1,ct1);zf_stdSetText(c2,ct2);zf_stdSetText(c3,ct3);};zfl_Categories.prototype.setKeywords=function(keywords,loading){var label=this.dom("keywords").getElementsByTagName("B")[0];
if(loading){zf_stdReplaceClassName(label,null,"pair-loading");zf_stdSetText(label,"loading...");return;}zf_stdReplaceClassName(label,"pair-loading",null);var text=[];
for(var i=0;i<keywords.length;i++){var keyword=keywords[i];var quoted=keyword;if(quoted.indexOf(' ')!=-1)quoted='"'+quoted+'"';quoted=encodeURI(quoted);text.push(['<a href="/?q=',
quoted,'">',zf_stdHtmlEncode(keyword),'</a>'].join(""));}label.innerHTML=text.join(", ");};zfl_Categories.prototype.showLoading=function(){this.setCategory(0,true);this.setKeywords([],
true);};zfl_Categories.prototype.update=function(photo){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);if(this.currentMeta!=null)this.currentMeta.unadvise(this);
this.current=photo;this.currentMeta=null;if(photo.loaded){this.set(photo);}else{var self=this;photo.advise(this,function(){self.set(photo);self.notifyResize(true);
},function(){self.showLoading();self.notifyResize(true);});}};zfl_Categories.prototype.set=function(photo){if(photo==null)photo=this.current;;var hasCategories=(photo.flags&zf_PhotoFlags.HasCategories)!=0;
var hasKeywords=(photo.flags&zf_PhotoFlags.HasKeywords)!=0;if(!hasCategories)this.setCategory(0,false);if(!hasKeywords)this.setKeywords([],false);if(!hasCategories&&!hasKeywords){this.notifyResize(true);
return;}var self;if(hasCategories&&!this.categoryList){self=this;zf_CategoryInfo.load(function(catInfo){self.categoryList=catInfo;self.set();self.notifyResize(true);
});self.notifyResize(true);return;}var meta=photo.getMeta();this.currentMeta=meta;if(meta.loaded){if(hasCategories)this.setCategory(meta.category,false);if(hasKeywords)this.setKeywords(meta.keywords,
false);}else{self=this;meta.bump();meta.advise(this,function(){self.setCategory(meta.category);self.setKeywords(meta.keywords);self.notifyResize(true);},function(){if(hasCategories)self.setCategory(0,
true);if(hasKeywords)self.setKeywords([],true);self.notifyResize(true);});}};;;;var zfl_ExifViewStyle={Overlay:0,Inline:1};function zfl_ExifView(id,style){this.style=style;zfl_Control.prototype.constructor.call(this,
id);zf_stdMakeMethodsDeferred(this,this.id,["set","showLoading"]);}zfl_ExifView.inherits(zfl_Control);zfl_ExifView.prototype.set=function(meta){var html=this._generateHTML(meta);this.dom().innerHTML=html;
this._populated=true;};zfl_ExifView.prototype.showLoading=function(){var html=['<div class="listheader listheader-font1 listheader-color2">','Photo Info','</div>','<div class="separator separator-border2"><hr/></div>',
'<div class="listitem">','<span class="exif-loading">Loading...</span>','</div>'];html=html.join("");this.dom().innerHTML=html;};zfl_ExifView.prototype.update=function(photo){;
;var meta=photo.getMeta();if(this.current==meta)return;if(this.current!=null)this.current.unadvise(this);this.current=meta;this._populated=false;if(meta.loaded){this.set(meta);
}else{var self=this;meta.bump();meta.advise(this,function(){self.set(meta);self.notifyResize(true);},function(){self.showLoading();self.notifyResize(true);});}};
zfl_ExifView.prototype._generateHTML=function(meta){if(meta.photo.video)return "";var content=[];var items1,items2;if((meta.photo.access.mask&zf_AccessMask.ProtectExif)!=0){items1=[-5,
-1,-2,-3];items2=[];}else{items1=[-5,-1,-2,-3,0xA001,0x9003,0x0132];items2=[0x010F,0x0110,0x920A,0xA405,0x9205,-4,0x9209,0x9204,0xA402,0x8822,0x8827,0x9207,0xA404];
}this._addExifSection(content,"Photo Info",meta,items1);this._addExifSection(content,"Shooting Conditions",meta,items2);return content.join("");};zfl_ExifView.prototype._addExifSection=function(builder,
title,meta,items){var exif=meta.exif;var empty=exif!=null;for(var i=0;i<items.length&&empty;i++)empty=(exif[items[i]]==null);if(empty)return;var tag;builder.push('<div class="listheader listheader-font1 ',
this.style==zfl_ExifViewStyle.Overlay?'listheader-color1':'listheader-color1','">',title,'</div>','<div class="separator separator-border2"><hr/></div>','<div class="listitem">');
if(this.style==zfl_ExifViewStyle.Inline){for(i=0;i<items.length;i++){tag=exif[items[i]];if(!tag)continue;builder.push('<div class="pair-box">','<span class="pair pair-color1 pair-font1">',
'<span>',zf_stdHtmlEncode(tag.title),':</span>','<b class="pair-0 pair-color2 pair-font2">',zf_stdHtmlEncode(tag.display),'</b>','</span>','</div>');}}else if(this.style==zfl_ExifViewStyle.Overlay){for(i=0;
i<items.length;i++){tag=exif[items[i]];if(!tag)continue;builder.push('<div class="exif-name pair-color1 pair-font1">',zf_stdHtmlEncode(tag.title),'</div>','<div class="exif-value pair-color2 pair-font1">',
zf_stdHtmlEncode(tag.display),'</div><div class="clear"></div>');}}builder.push('</div>');};;function zfl_ExifPopup(id,style){zfl_Popup.prototype.constructor.call(this,id,
true);this._displayed=false;this._view=new zfl_ExifView(id+"-content",style);this._view.onresize=zf_stdMakeDeferred(this.id+".updateBackground",this.closure(this._updateBackground),
this);}zfl_ExifPopup.inherits(zfl_Popup);zfl_ExifPopup.createHtml=function(id,styles){var markup=[];markup.push('<div class="popup exif-popup popup-border1 popup-color1 popup-font1 none" id="',
id,'">','<div class="exif-popup-content" id="',id,'-content"></div>','<div class="exif-popup-background popup-bgcolor1" id="',id,'-background"></div>','</div>');
return markup.join('');};zfl_ExifPopup.prototype.update=function(photo){;;if(this.current==photo)return;this.current=photo;if(this._displayed){this._view.update(photo);this._view.onresize();
}};zfl_ExifPopup.prototype.show=function(domOrigin,constraint){this._displayed=true;if(this.current){this._view.update(this.current);this._view.onresize();}zfl_Popup.prototype.show.call(this,
domOrigin,constraint);this._updateBackground();};zfl_ExifPopup.prototype.hide=function(){zfl_Popup.prototype.hide.call(this);this._displayed=false;};zfl_ExifPopup.prototype._updateBackground=function(){};
;;;function zfl_CollectionList(){this.list=[];}zfl_CollectionList.current=new zfl_CollectionList();zfl_CollectionList.prototype.load=function(callback){var self=this;if(!this.loaded){zf_stdServerRequest("POST",
"/zf/layout/layout.asmx","GetCollections",[],function(status,retVal){self.list=status==200?retVal.result:[];self.loaded=true;callback();});}else{callback();}};zfl_CollectionList.prototype.addPhoto=function(collectionId,
photoId,ownerId){var self=this;var formatSuccess="Photo added to {0} collection.";var formatError="An error occurred while adding photo to the \x27{0}\x27 collection.";
var formatDuplicated="Duplicate action. This photo was already added to collection \x27{0}\x27.";var formatNotFound="Collection \x27{0}\x27 does not exist.";for(index=0;
index<this.list.length;index++){if(this.list[index].id==collectionId)break;};if(index==this.list.length)return;var collection=this.list[index];zf_stdServerRequest("POST",
"/zf/app/manage.asmx","AddSingleToCollection",[photoId,collectionId,ownerId],function(status,retVal){if(status==200&&index>0){self.list.splice(index,1);self.list.unshift(collection);
}var url=zf_stdGetTransferUrl(["http://",zf_userDomain,collection.getBaseHref(),"/h",photoId.toString(16)].join(""));var markup=[' <a href="',url,'" onclick="location.href=\x27',
url,'\x27','">View &raquo;</a>'].join("");var format;switch(status){case 200:format=(retVal.result?formatSuccess:formatDuplicated)+markup;break;case 404:format=formatNotFound;
break;default:format=formatError;break;}var message=zf_stdFormatString(format,['<a href="',url,'" onclick="location.href=\x27',url,'\x27">',zf_stdHtmlEncode(collection.title),
'</a>'].join(""));if(self.onmessage)self.onmessage(photoId,message,status!=200);});};zfl_CollectionList.prototype.addPhotoToNew=function(title,photoId,ownerId){var self=this;zf_stdServerRequestEx("POST",
"/zf/app/edit/edit.asmx","CreatePhotoSet",[0,-1,"col",{title:title}],function(result,error){if(error==null){self.list.unshift(new zf_PhotoSet(result,"Collection",
title));self.addPhoto(result,photoId,ownerId);}else{var message=zf_stdFormatString("An error occurred while adding photo to the \x27{0}\x27 collection.",title);if(self.onmessage)self.onmessage(photoId,
message,true);}});};;function zfl_CollectionMenu(){zfl_PhotoMenu.prototype.constructor.call(this,[],"pvo-menu photoMenu collectionMenu");this.authenticated=zf_userId!=0;this.list=null;
this.oncommand=zf_stdFalse;var self=this;this._rebuild=function(){if(self.dom()!=null){self.dom().innerHTML=self._build();self._subscribe();}};}zfl_CollectionMenu.inherits(zfl_PhotoMenu);
zfl_CollectionMenu.prototype.create=function(parent){;;var self=this;var root=document.createElement("DIV");root.className=this._classes+" none";root.id=this.id;var content=[];if(!this.authenticated){root.innerHTML=['<div class="collectionMenu-box">',
'<div class="collectionMenu-header">','<div class="collectionMenu-icon"></div>','<span>About Collections</span>','</div>','<div class="collectionMenu-para">','        Collections hold links to photos uploaded by you or other        people. You can put together collections of favorite        photographs or collect photos from several people.        ',
'<div class="collectionMenu-para" id="',this.id,'-para2">','        You need to <a>login</a> in order to        save to collection. If you are not a user yet, you can open a        Visitor account that\x27s always free and only takes a minute.        ',
'</div>','<div class="collectionMenu-footer">','<div class="collectionMenu-button" id="',this.id,'-login">','Continue »','</div>','<div class="collectionMenu-button" id="',
this.id,'-hide">','Cancel','</div>','</div>','<div class="overlay-background">','<div class="collectionMenu-header">','<div class="collectionMenu-icon"></div>','<span>About Collections</span>',
'</div>','<div class="collectionMenu-para">','        Collections hold links to photos uploaded by you or other        people. You can put together collections of favorite        photographs or collect photos from several people.        ',
'<div class="collectionMenu-para">','        You need to <a>login</a> in order to        save to collection. If you are not a user yet, you can open a        Visitor account that\x27s always free and only takes a minute.        ',
'</div>','<div class="collectionMenu-footer">','<div class="collectionMenu-button">','Continue »','</div>','<div class="collectionMenu-button">','Cancel','</div>',
'</div>','</div>','</div>'].join("");}else{if(!this.list){root.innerHTML=['<div class="collectionMenu-loading">','<div class="overlay-background"></div>','Loading...',
'</div>'].join("");if(this.list==null){this.list=false;var collectionList=zfl_CollectionList.current;if(!collectionList.loaded){collectionList.load(function(){self.list=true;
self._rebuild();});}else{this.list=true;root.innerHTML=this._build();}}}else{root.innerHTML=this._build();}}parent.appendChild(root);if(!this.authenticated){var onlogin=function(){self.oncommand("collectLogin");
};this.dom("login").onclick=onlogin;var a=this.dom("para2").getElementsByTagName("A")[0];a.onclick=onlogin;a=null;this.dom("hide").onclick=function(){self.show(false);
};}else{this._subscribe();}parent=null;root=null;};zfl_CollectionMenu.prototype._build=function(){this.items=[];this._map={};var i;var self=this;if(this.list){var createHandler=function(id){return function(){self.oncommand("collectPhoto",
id);};};var collections=zfl_CollectionList.current.list;for(i=0;i<collections.length;i++){var content=[];var ps=collections[i];for(var j=1;j<ps.folders.length;j++){content.push('<span class="folder">',
zf_stdHtmlEncode(ps.folders[j].title),'</span> &raquo; ');}content.push(zf_stdHtmlEncode(ps.title));this.items.push({id:"collect"+ps.id,text:content.join(""),onclick:createHandler(ps.id)});
}if(this.items.length>0)this.items.push({id:"sep1",separator:true});this.items.push({id:"collectNew",text:"Add to a new collection",onclick:function(){self.oncommand("collectNew");
}});this.items.push({id:"sep2",separator:true});this.items.push({id:"collectEdit",text:"Open my collections in Edit View",onclick:function(){self.oncommand("collectEdit");
}});for(i=0;i<this.items.length;i++){var item=this.items[i];this._map[item.id]=item;item.onselect=zf_stdFalse;}}return zfl_PhotoMenu.prototype._build.call(this);
};;zfl_PhotoOverlay._mainMenu=[{id:"addToCart",text:"Buy"},{id:"createBook",text:"Create a Book"},{id:"addToFavorites",text:"Add To Favorites"},{id:"removeFromFavorites",text:"Remove From Favorites"},
{id:"share",text:"Share"},{id:"dimLights",text:"Dim The Lights"},{id:"download",text:"Download"},{id:"collect",text:"Add to Collection"},{id:"admin",text:"Administrator"}];
zfl_PhotoOverlay._adminMenu=[{id:"censorPhoto",text:"Censor"},{id:"uncensorPhoto",text:"Uncensor"},{id:"censorGallery",text:"Censor Gallery"},{id:"purgePhoto",text:"Purge"},{id:"purgeGallery",
text:"Purge Gallery"},{id:"makeNotSearchable",text:"Make Not Searchable"},{id:"makeSearchable",text:"Make Searchable"}];zfl_PhotoOverlay._contextMenu=[{id:"addToCart",text:"Buy"},
{id:"addToFavorites",text:"Add To Favorites"},{id:"removeFromFavorites",text:"Remove From Favorites"},{id:"dimLights",text:"Dim The Lights (single-click)"},{id:"undimLights",
text:"Close (single-click)"},{id:"download",text:"Download"},{id:"share",text:"Share This Photo"}];zfl_PhotoOverlay.prototype._prepareMenu=function(template){var self=this;var photo=this.current;
var items=[];items.map={};var makeOnClick=function(item){item.onclick=function(){self._hide("now");self.command(item.id);};};for(var i=0;i<template.length;i++){var source=template[i];
if(!this.commandtest(source.id,this.options))continue;var item={id:source.id,text:source.text,onsubmenu:$.noop};makeOnClick(item);items.push(item);items.map[item.id]=item;
}items.addSubMenu=function(name,factory){var item=this.map[name];if(!item)return;item.onclick=$.noop;item.text+=' &raquo;';item.onsubmenu=function(show,x,y,parent){if(!item.submenu&&show){item.submenu=factory();
item.submenu.onactive=function(){this.parent.select(name,true);};item.submenu.create(self.dom("oroot"));}if(item.submenu)item.submenu.show(show,x,y,parent);};};items.addSubMenu("admin",
function(){return new zfl_PhotoMenu(self._prepareMenu(zfl_PhotoOverlay._adminMenu));});items.addSubMenu("collect",function(){var cm=new zfl_CollectionMenu();cm.oncommand=function(){self._hide("now");
self.command.apply(self,arguments);};return cm;});items.addSubMenu("download",function(){var cm=new zfl_DownloadMenu(self.current,self.commandtest("saveImages",self.options));
cm.oncommand=function(){self._hide("now");self.command.apply(self,arguments);};cm.oncommandtest=function(){return self.commandtest.apply(self,arguments);};return cm;
});return items;};zfl_PhotoOverlay.prototype._createMenus=function(always){var photo=this.current;if(!photo||!photo.loaded)return;if(!this.attached)return;if(!always&&!this._menuActive)return;
if(this._menuCreated)return;this._menuCreated=true;var items;var self=this;if(this.options.mainMenu){items=this._prepareMenu(zfl_PhotoOverlay._mainMenu);if(items.length>0){this.menus.mainMenu=new zfl_PhotoMenu(items,
"pvo-menu pvo-mmenu photoMenu");this.menus.mainMenu.create(this.dom("oroot"));this.menus.mainMenu.display=function(toshow){var animated=true;if(animated){toshow?this.$dom().slideDown(100):this.$dom().slideUp(100);
}else{this.$dom().toggle(toshow);}};}}if(this.options.contextMenu){items=this._prepareMenu(zfl_PhotoOverlay._contextMenu);if(items.length>0){this.menus.contextMenu=new zfl_PhotoMenu(items,
"pvo-menu pvo-cmenu photoMenu");this.menus.contextMenu.create(this.dom("oroot"));}}};zfl_PhotoOverlay.prototype._destroyMenus=function(){for(var key in this.menus){var obj=this.menus[key];
if(obj&&obj.destroy instanceof Function)obj.destroy();}this.menus={};this._menuCreated=false;};;;function zfl_PhotoOverlay(){this.id="_overlay_"+zfl_PhotoOverlay.counter++;
this.attached=false;this.options={};this.idle={};this.dom=zf_Control.prototype.dom;this.$dom=zf_Control.prototype.$dom;this.closure=zf_Control.prototype.closure;
this.eventHandler=zf_Control.prototype.eventHandler;}zfl_PhotoOverlay.counter=0;zfl_PhotoOverlay.prototype.init=function(options,command,commandtest){options=options?options:{};;;this.options=options;
this.command=command;this.commandtest=commandtest;if(options.infoIcon==undefined)options.infoIcon=options.exifIcon;if(options.mainMenu==undefined)options.mainMenu=options.menuBar;
var self=this;if(this.options.message){zfl_CollectionList.current.onmessage=function(photoId,message,error){if(self.attached&&self.current.id==photoId)self.showMessage(message,
error);};}};zfl_PhotoOverlay.prototype.attach=function(inner){var start=new Date().getTime();;;var id=this.id;var self=this;var $inner=$(inner);var ihtml=[];ihtml.push('<div class="pvo-iroot" id="',
id,'-iroot">');if(this.options.mainMenu)ihtml.push('<div class="pvo-mm-hot" id="',id,'-mm-hot">','<div class="pvo-mm" id="',id,'-mm">','<div class="pvo-mm-c"></div>',
'</div>','</div>');if(this.options.infoIcon)ihtml.push('<div class="pvo-ii-hot" id="',id,'-ii-hot">','<div class="pvo-ii" id="',id,'-ii"></div>','</div>');ihtml.push('<div class="pvo-vv-hot" id="',
id,'-vv-hot">','</div>');if(this.options.message)ihtml.push('<div class="pvo-msg" id="',id,'-msg">','<span></span>','</div>');ihtml.push('</div>');var ohtml=[];ohtml.push('<div class="pvo-oroot" id="',
id,'-oroot">');if(this.options.exifIcon)ohtml.push(zfl_ExifPopup.createHtml(this.id+"-exif"));ohtml.push('</div>');$(ihtml.join('')).appendTo(inner);$(ohtml.join('')).appendTo(document.body);
this._prepareOverlayEvents();this.$dom('ii').bind('mouseenter.PhotoOverlay touchstart',this.closure(this._infoicon_onmouseover)).bind('mouseleave.PhotoOverlay',this.closure(this._infoicon_onmouseout));
this.$dom('mm').bind('mouseenter.PhotoOverlay touchstart',this.closure(this._mainmenu_onmouseover)).bind('mouseleave.PhotoOverlay',this.closure(this._mainmenu_onmouseout));
var defaultCommand=this.options.defaultCommand;if(defaultCommand){$inner.css({cursor:"pointer"}).bind('click.PhotoOverlay',this.closure(this._parent_onclick));}this.exifPopup=null;
$inner.bind('overlay:activity.PhotoOverlay',function(e){self.$dom('mm').fadeIn(400);self.$dom('ii').fadeIn(400);self.$dom('iroot').clearQueue('firstshow');}).bind('overlay:first:show.PhotoOverlay',
function(e){self.$dom('mm').fadeIn(400);self.$dom('ii').fadeIn(400);}).bind('overlay:leave.PhotoOverlay overlay:idle.PhotoOverlay',function(e){self._hide('fast');
}).bind('overlay:first:hide.PhotoOverlay',function(e){self._hide('fast');}).bind('overlay:info:enter.PhotoOverlay',function(e){self._hide("slow","not info");self.$dom('ii').stop(true,
true).show();}).bind('overlay:info:leave.PhotoOverlay',function(e){self._infoicon_onmouseout(e);}).bind('overlay:menu:enter.PhotoOverlay',function(e){self._hide("slow",
"not menu");self.$dom('mm').stop(true,true).show();}).bind('overlay:menu:leave.PhotoOverlay',function(e){self._mainmenu_onmouseout(e);}).bind('overlay:contextmenu.PhotoOverlay',
this.closure(this._oncontextmenu)).bind('overlay:video:enter.PhotoOverlay',function(e){self._hide("slow");});var logEvent=function(e){;};$inner.bind('overlay:idle.PhotoOverlay',
logEvent).bind('overlay:activity.PhotoOverlay',logEvent).bind('overlay:enter.PhotoOverlay',logEvent).bind('overlay:leave.PhotoOverlay',logEvent).bind('overlay:first:show.PhotoOverlay',
logEvent).bind('overlay:first:hide.PhotoOverlay',logEvent).bind('overlay:menu:enter.PhotoOverlay',logEvent).bind('overlay:menu:leave.PhotoOverlay',logEvent).bind('overlay:info:enter.PhotoOverlay',
logEvent).bind('overlay:info:leave.PhotoOverlay',logEvent).bind('overlay:video:enter.PhotoOverlay',logEvent).bind('overlay:video:leave.PhotoOverlay',logEvent).bind('overlay:contextmenu.PhotoOverlay',
logEvent);this.attached=true;;};zfl_PhotoOverlay.prototype._prepareOverlayEvents=function(){var self=this;var delayed={enter:new zf_DelayedInvoke(400),exit:new zf_DelayedInvoke(400),
exitUI:new zf_DelayedInvoke(400)};var enter=function(){return delayed.enter.invoke(function(){self._trackIdle(true);self.$dom('iroot').parent().trigger('overlay:enter');
});};var exit=function(){return delayed.exit.invoke(function(){delayed.exitUI.clear();self._trackIdle(false);self.$dom('iroot').parent().trigger('overlay:leave');
});};var exitUI=function(){return delayed.exitUI.invoke(function(){self._trackIdle(true);});};this.$dom('iroot').parent().bind('mouseover.PhotoOverlay',function(e){if(delayed.exit.pending)delayed.exit.clear();
else enter();}).bind('mouseout.PhotoOverlay',function(e){if(delayed.enter.pending)delayed.enter.clear();else exit();}).bind('contextmenu.PhotoOverlay',function(e){self.$dom('iroot').clearQueue('firstshow');
e.type='overlay:contextmenu';self.$dom('iroot').parent().trigger(e);return false;});$([this.dom('iroot'),this.dom('oroot')]).mouseover(function(e){e.stopPropagation();
if(!delayed.exitUI.pending)self._trackIdle(false);delayed.exitUI.clear();delayed.exit.clear();}).mouseout(function(e){e.stopPropagation();exitUI();exit();});this.$dom('mm-hot').bind('mouseenter.PhotoOverlay',
function(e){self.$dom('iroot').clearQueue('firstshow');self.$dom('iroot').parent().trigger('overlay:menu:enter');}).bind('mouseleave.PhotoOverlay',function(e){self.$dom('iroot').parent().trigger('overlay:menu:leave');
});this.$dom('ii-hot').bind('mouseenter.PhotoOverlay',function(e){self.$dom('iroot').clearQueue('firstshow');self.$dom('iroot').parent().trigger('overlay:info:enter');
}).bind('mouseleave.PhotoOverlay',function(e){self.$dom('iroot').parent().trigger('overlay:leave');});this.$dom('iroot').iff(!zfl_PhotoOverlay._reused).delay(1000,
'firstshow').queue('firstshow',function(next){self.$dom('iroot').parent().trigger('overlay:first:show');next();}).delay(1000,'firstshow').queue('firstshow',function(next){self.$dom('iroot').parent().trigger('overlay:first:hide');
next();}).dequeue('firstshow');var vvhot=function($elem,e){var width=$elem.width(),height=$elem.height(),pos=$elem.offset();var x=e.pageX-pos.left,y=e.pageY-pos.top;
return x>=0&&x<width&&y>=height-60&&y<height;};var vventer=function(condition){if(condition){self._trackIdle(false);self.$dom('iroot').parent().trigger('overlay:video:enter');
}};var vvleave=function(condition){if(condition){self._trackIdle(true);self.$dom('iroot').parent().trigger('overlay:video:leave');}};this.$dom('iroot').parent().bind('mouseenter.PhotoOverlay',
function(e){var $elem=$(this),hot=vvhot($elem,e);$elem.data('vvhot.PhotoOverlay',hot);vventer(hot);}).bind('mouseleave.PhotoOverlay',function(e){var $elem=$(this),
hot=$elem.data('vvhot.PhotoOverlay');$elem.data('vvhot.PhotoOverlay',false);vvleave(hot);}).bind('mousemove.PhotoOverlay',function(e){var $elem=$(this),hot0=$elem.data('vvhot.PhotoOverlay'),
hot1=vvhot($elem,e);$elem.data('vvhot.PhotoOverlay',hot1);vventer(!hot0&&hot1);vvleave(hot0&&!hot1);});zfl_PhotoOverlay._reused=true;this.$dom('iroot').bind('contextmenu',
false).click(false);this.$dom('oroot').bind('contextmenu',false);};zfl_PhotoOverlay.prototype.detach=function(inner){;if(!this.attached)return;if(this.exifPopup)this.exifPopup.hide();
this._trackIdle(false);this._destroyMenus();this._menuActive=false;this.$dom('iroot').remove();this.$dom('oroot').remove();$(inner).unbind('.PhotoOverlay').css({cursor:"auto"});
this.attached=false;};zfl_PhotoOverlay.prototype.update=function(photo){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);this.current=photo;this._destroyMenus();
if(photo.loaded){this._createMenus();var c=1;}else{var self=this;photo.advise(this,function(){self._createMenus();});}if(this.exifPopup)this.exifPopup.update(photo);
};zfl_PhotoOverlay.prototype._trackIdle=function(enable){if(!enable){if(!this.idle.timer)return;clearInterval(this.idle.timer);this.idle.timer=null;this.$dom('iroot').parent().unbind('mousemove.PhotoOverlay',
this.idle.mousemove);return;}if(this.idle.timer)return;this.idle.counter=0;this.idle.interrupt=0;this.idle.timer=null;var self=this;this.idle.timer=setInterval(function(){++self.idle.counter;
if(self.idle.counter==16&&!self.idle.suspended)self.$dom('iroot').parent().trigger('overlay:idle');++self.idle.interrupt;if(self.idle.interrupt==2){if(!self.idle.suspended)self.$dom('iroot').parent().trigger('overlay:activity');
self.idle.counter=0;}},200);this.idle.mousemove=this.idle.mousemove||function(e){if(!self.idle.timer)return;var x=e.pageX;var y=e.pageY;if(self.idle.x&&Math.abs(self.idle.x-x)>5||self.idle.y&&Math.abs(self.idle.y-y)>5){if(self.idle.counter>16){if(!self.idle.suspended)self.$dom('iroot').parent().trigger('overlay:activity');
self.idle.counter=0;}if(self.idle.interrupt<2)self.idle.interrupt=0;}self.idle.x=x;self.idle.y=y;};this.$dom('iroot').parent().bind('mousemove.PhotoOverlay',this.idle.mousemove);
};zfl_PhotoOverlay.prototype._oncontextmenu=function(e){if(!this.current||!this.current.loaded)return;this._destroyMenus();this._createMenus(true);if(!this.menus.contextMenu)return;
var x,y;x=e.pageX;y=e.pageY;this._hide("fast","not context");this.menus.contextMenu.show(true,x-5,y-5);};zfl_PhotoOverlay.prototype._parent_onclick=function(e){if(!this.current||!this.current.loaded)return;
if(this.current.video)return;var defaultCommand=this.options.defaultCommand;if(!defaultCommand||!this.commandtest(defaultCommand,this.options))return;this._hide("now");
this.command(defaultCommand);};zfl_PhotoOverlay.prototype._infoicon_onmouseover=function(e){this.$dom('ii').show();if(!this.exifPopup){var id=this.id+"-exif";this.exifPopup=new zfl_ExifPopup(id,
zfl_ExifViewStyle.Overlay);if(this.current)this.exifPopup.update(this.current);}this.exifPopup.show(this.dom('ii'),"shift-right");};zfl_PhotoOverlay.prototype._infoicon_onmouseout=function(e){if(this.exifPopup)this.exifPopup.hide();
};zfl_PhotoOverlay.prototype._mainmenu_onmouseover=function(e){if(!this.current||!this.current.loaded)return;this._createMenus(true);if(!this.menus.mainMenu)return;var pos=this.$dom('mm').offset();
this.menus.mainMenu.show(true,pos.left+3,pos.top+32);this.$dom('mm').addClass('pvo-mm-a');this._hide("slow","not menu");};zfl_PhotoOverlay.prototype._mainmenu_onmouseout=function(e){};
zfl_PhotoOverlay.prototype._hide=function(speed,except){if(except!="not menu"){if(this.menus.mainMenu)this.menus.mainMenu.show(false);}if(except!="not context"){if(this.menus.contextMenu)this.menus.contextMenu.show(false);
}if(except!="not menu")this.$dom('mm').removeClass('pvo-mm-a');if(speed=="now"){if(except!="not message")this.$dom('msg').hide();if(except!="not info")this.$dom('ii').hide();
if(except!="not menu")this.$dom('mm').hide();this._destroyMenus();}else{if(except!="not message")this.$dom('msg').fadeOut(speed);if(except!="not info")this.$dom('ii').fadeOut(speed);
if(except!="not menu")this.$dom('mm').fadeOut(speed);}};zfl_PhotoOverlay.prototype.showMessage=function(message,error){if(!this.options.message)return;var self=this;var span;this.$dom("msg").html(message+'<span></span>').toggleClass('pvo-msg-error',
error).unbind('.PhotoOverlay').bind('mouseenter.PhotoOverlay',function(e){self._hide("fast","not message");$(this).clearQueue().show();}).bind('mouseleave.PhotoOverlay',
function(e){$(this).clearQueue().delay(8000).fadeOut("slow");}).fadeIn('fast');};;;;function zfl_Photographer(id){zfl_Control.prototype.constructor.call(this,id);zf_stdMakeMethodsDeferred(this,
this.id,["setLink"]);}zfl_Photographer.inherits(zfl_Control);zfl_Photographer.prototype.init=function(owner){this._owner=owner;};zfl_Photographer.prototype.setLink=function(user,loading){;var label=this.dom("label");
if(loading){zf_stdReplaceClassName(label,null,"photographer-loading");zf_stdSetText(label,"Loading...");}else{if(user.id==this._owner.id){this.display(false);}else{this.display(true);
zf_stdReplaceClassName(label,"photographer-loading");label.innerHTML=zf_stdFormatString("Photo by: {0}",['<a href="',zf_stdGetTransferUrl("http://"+user.domainName+"/"),
'">',zf_stdHtmlEncode(user.displayName),'</a>'].join(""));}}};zfl_Photographer.prototype.showLoading=function(){this.setLink(null,true);};zfl_Photographer.prototype.update=function(photo){;;if(this.current==photo)return;
if(this.current!=null)this.current.unadvise(this);this.current=photo;if(photo.loaded){this.setLink(photo.owner);}else{var self=this;photo.advise(this,function(){self.setLink(photo.owner);
self.notifyResize(true);},function(){self.showLoading();self.notifyResize(true);});}};;;;;;function zfl_PhotoFlipper(id,style,lynx){zfl_Control.prototype.constructor.call(this,
id);this.style=style;this._static=lynx;this._views=[];this._pool={};this.set=zf_stdMakeDeferred(this.id+".set",this._set);this._prefetch=zf_stdMakeDeferred(this.id+"._prefetch",
this._prefetch);if(this._static)this.$dom().html("").removeClass("pf-static");this.relaxedHeight=false;this.browserScaling=false;this._delayPrefetching=true;}zfl_PhotoFlipper.inherits(zfl_Control);
zfl_PhotoFlipper.Front=0;zfl_PhotoFlipper.Back=1;zfl_PhotoFlipper._counter=0;zfl_PhotoFlipper.prototype.init=function(decoration,plugins,overlayFlags,oncommand,oncommandtest,fullHeight,transition){this._decoration=decoration;
this._plugins=plugins;this._oncommand=oncommand;this._oncommandtest=oncommandtest;var extent=0;if(decoration)extent=decoration.shadowSize+decoration.borderSize+decoration.extraSize;
this._extent=extent;if(overlayFlags){;this._overlay=new zfl_PhotoOverlay();this._overlay.init(overlayFlags,oncommand,oncommandtest);}this._transition=transition;
this.transitionEnabled=true;var self=this;this._animTransition=new zf_Animation({"start":0,"end":100},function(v){zf_stdSetOpacity(self._views[zfl_PhotoFlipper.Front].getInner(),
v/100);zf_stdSetOpacity(self._views[zfl_PhotoFlipper.Back].getInner(),(100-v)/100);});this._animSpeed={s:100,t:1000};this._fullHeight=fullHeight;};zfl_PhotoFlipper.prototype.clear=function(){if(this._views[zfl_PhotoFlipper.Back])this._views[zfl_PhotoFlipper.Back].clear();
if(this._views[zfl_PhotoFlipper.Front])this._views[zfl_PhotoFlipper.Front].clear();this._attachOverlay(false);if(this.current)this.current.unadvise(this);this.current=null;
this.dom().innerHTML="";this._views=[];};zfl_PhotoFlipper.prototype.update=function(photo,context){;;if(this.current==photo)return;if(this.current)this.current.unadvise(this);;var forward=context.previousIndex<=context.currentIndex;
if(photo.loaded){if(this._availWidth!=null){;this.set(photo);}if(context.photoList)this._prefetch(context.photoList,context.currentIndex,forward);}else{var self=this;
photo.advise(this,function(){;self._set(photo);self._prefetch(context.photoList,context.currentIndex,forward);});}this.current=photo;;this._forward=(context.previousIndex<context.currentIndex);
if(this._overlay)this._overlay.update(photo,context);};zfl_PhotoFlipper.prototype._centerInner=function(view,photo,method){photo=photo?photo:view.getPhoto();method=method?method:view.getMethod();
var extent2=this._extent*2;var size=photo.getScaledSize(method);var x=Math.floor((this._availWidth-(size.cx+extent2))/2);var y=this._fullHeight?Math.floor((this._availHeight-(size.cy+extent2))/2):0;
var inner=view.getInner();inner.style.top=y+'px';inner.style.left=x+'px';};zfl_PhotoFlipper.prototype._set=function(photo){;;if(this._availWidth==null){;return;};this._load(zfl_PhotoFlipper.Back,
photo);var front=this._views[zfl_PhotoFlipper.Front];;if(front&&front.getPhoto().id!=this.current.id)this._attachOverlay(false);};zfl_PhotoFlipper.prototype.getAvailSize=function(){return{cx:this._availWidth,
cy:this._availHeight};};zfl_PhotoFlipper.prototype.getPhotoSize=function(){var view=this._views[zfl_PhotoFlipper.Front];if(view&&view.getPhoto()){var extent2=this._extent*2;return{cx:view.__zfl_width-extent2,
cy:view.__zfl_height-extent2};}return{cx:0,cy:0};};zfl_PhotoFlipper.prototype.resize=function(width,height){;;var first=this._availWidth==null;if(!first&&this._availWidth==width&&this._availHeight==height){;
this._recalc(true);return true;}this._availWidth=width;this._availHeight=height;;if(first&&this.current&&this.current.loaded){;;this._set(this.current);return true;
}var view;var canresize=false;view=this._views[zfl_PhotoFlipper.Front];if(view&&view.getPhoto()){this._load(zfl_PhotoFlipper.Front,view.getPhoto(),true);canresize=true;
}view=this._views[zfl_PhotoFlipper.Back];if(view&&view.getPhoto())this._load(zfl_PhotoFlipper.Back,view.getPhoto(),true);if(this._fullHeight){this._recalc(true);
}return canresize;};zfl_PhotoFlipper.prototype.flip=function(){;this._stopTransition();var back=this._views[zfl_PhotoFlipper.Back];var front=this._views[zfl_PhotoFlipper.Front];
if(!back)return;back.onwait=null;this._attachOverlay(false);this._views[zfl_PhotoFlipper.Front]=back;this._views[zfl_PhotoFlipper.Back]=front;back=this._views[zfl_PhotoFlipper.Back];
front=this._views[zfl_PhotoFlipper.Front];if(back&&back.getPhoto()&&back.getPhoto().video)back.$('.pv-p').empty();zf_stdReplaceClassName(front.dom().parentNode,"none",
null);var now=new Date();var since=this._lastFlip?(now.getTime()-this._lastFlip.getTime()):0;this._lastFlip=now;var transition=this._transition&&this.transitionEnabled;
if(!back){this._flipDone(true,"first flip",false);return;}if(!transition){this._flipDone(true,"skipping animation",false);return;}this._recalc(true);;this._animTransition.jump("start");
zf_stdReplaceClassName(front.dom().parentNode,"none",null);zf_stdReplaceClassName(front.dom().parentNode,"invisible",null);this._animTransition.animate("end",this._animSpeed,
this.closure(this._flipDone,false,"animation end",false));};zfl_PhotoFlipper._getPoolKey=function(photo,method){return['-',photo.id,'-',method.code].join("");};zfl_PhotoFlipper.prototype._load=function(code,
photo,resize,reload){;;var extent2=this._extent*2;this._stopTransition();var width=this._availWidth-extent2;var height=this._availHeight-extent2;if(this.relaxedHeight&&(photo.height>photo.width||this.browserScaling))height+=30;
var method;if(!photo.video){method=this.browserScaling?photo.pickScaledMethod(width,height):photo.pickMethod(width,height);}else{method=photo.pickVideoMethod(width,
height);method=$.extend({},zf_ProcessingMethod.VideoPosterFrame,{cx:method.cx,cy:method.cy});}if(!method)method=zf_ProcessingMethod.StandardSmallSize;;var context={method:method,
data:photo,image:photo,oncommand:this._oncommand,oncommandtest:this._oncommandtest};var size=photo.getScaledSize(method);var view=this._views[code];if(!reload&&view&&view.getPhoto()&&view.getPhoto().id==photo.id&&view.getMethod().code==method.code){;
if(view.getMethod().cx!=method.cx||view.getMethod().cy!=method.cy){;view.resize(context,photo,method);view.dom().style.padding=this._extent+"px";view.__zfl_height=size.cy+extent2;
view.__zfl_width=size.cx+extent2;if(code==zfl_PhotoFlipper.Front)this._recalc(true);}this._centerInner(view,photo,method);if(resize)return;if(!view.__zfl_state||view.__zfl_state==zf_PhotoLoader.Loading)return;
if(code==zfl_PhotoFlipper.Back&&this.onload){;this.onload(view.__zfl_state,true);}return;}this._queue=null;var styles="pf-plane "+zfl_Layout.formatDecorationClasses("pf",
this._decoration,method);if(code==zfl_PhotoFlipper.Back)styles+=" none invisible";if(view==null){;var plane=document.createElement("DIV");plane.id=this.id+"-plane"+zfl_PhotoFlipper._counter++;
plane.className=styles;var viewId=this.id+"-view"+zfl_PhotoFlipper._counter++;plane.innerHTML=zf_PhotoView.createHtml(viewId,null,null,this._plugins,context,photo,
method);this.dom().appendChild(plane);view=this._views[code]=new zf_PhotoView(viewId,this._plugins,context,plane.firstChild);view.waitTimeout=800;plane=null;}else{if(code==zfl_PhotoFlipper.Front)this._attachOverlay(false);
;view.reinit(null,null,null,context,photo,method);view.dom().parentNode.cssText=styles;}view.dom().style.padding=this._extent+"px";view.__zfl_height=size.cy+extent2;
view.__zfl_width=size.cx+extent2;this._centerInner(view,photo,method);inner=null;var key=zfl_PhotoFlipper._getPoolKey(photo,method);var loader=this._pool[key];if(loader==null||loader.onload!=null)loader=this._pool[key]=new zf_PhotoLoader(photo,
method);loader.setMethodSize(method);var immediate=(loader.state!=zf_PhotoLoader.Loading&&loader.state!=zf_PhotoLoader.Initialized);view.onload=this.closure(this._view_onload,
view,immediate,resize);if(code==zfl_PhotoFlipper.Back&&!resize)view.onwait=this.closure(this._view_onwait);view.load(loader,null,true);if(code==zfl_PhotoFlipper.Front)this._recalc(true);
var frontView=this._views[zfl_PhotoFlipper.Front];if(code==zfl_PhotoFlipper.Back&&frontView==null&&loader.state==zf_PhotoLoader.Loading){;this._view_onload(loader.state,
view,true,false);}else if(code==zfl_PhotoFlipper.Back&&photo.video&&loader.state==zf_PhotoLoader.Loading){;this._view_onload(loader.state,view,true,false);}else if(code==zfl_PhotoFlipper.Back&&frontView&&frontView.getPhoto()&&frontView.getPhoto().video&&loader.state==zf_PhotoLoader.Loading){;
this._view_onload(loader.state,view,true,false);}};zfl_PhotoFlipper.prototype._view_onload=function(state,view,immediate,resize){;view.__zfl_state=state;var back=this._views[zfl_PhotoFlipper.Back]==view;
var password=state==zf_PhotoLoader.PasswordRequired;this._showPassword(view,password,false);if(!back&&state==zf_PhotoLoader.Complete){view.setSpecial(null);this._centerInner(view);
if(view.getPhoto().id==this.current.id)this._attachOverlay(true);if(this.ondisplay){;this.ondisplay(view.getPhoto(),false);}}else if(!back&&password&&this.onpassword){;
this.onpassword();}if(back&&this.onload&&!resize){;this.onload(state,immediate);}if(!back&&state!=zf_PhotoLoader.Loading){zf_stdReplaceClassName(this.dom(),null,
"pf-loaded");this._delayPrefetching=false;if(this._postponedPrefetch){this._postponedPrefetch();this._postponedPrefetch=null;}}return state!=zf_PhotoLoader.Complete;
};zfl_PhotoFlipper.prototype._view_onwait=function(){var view=this._views[zfl_PhotoFlipper.Front];if(view)view.setSpecial("wait",true);};zfl_PhotoFlipper.prototype._attachOverlay=function(attach){var view=this._views[zfl_PhotoFlipper.Front];
if(!view||!this._overlay)return;var $overlay=$(view.getInner());if(!$overlay.length)return;if(attach){;this._overlay.attach($overlay.get(0));}else{;this._overlay.detach($overlay.get(0));
}};zfl_PhotoFlipper.prototype._showPassword=function(view,show,retry){;;;var id=view.id+"-password";;var dom=view.dom("password");if(!show){if(dom)dom.parentNode.removeChild(dom);
dom=null;zf_stdReplaceClassName(view.dom(),"pv-s-password",null);this.passwordEditing=false;return;}dom=document.createElement("DIV");dom.id=id;dom.className="pv-password";
view.setSpecial(null);zf_stdReplaceClassName(view.dom(),null,"pv-s-password");var content=[];content.push('<div class="password-box popup-border1 popup-color1 popup-bgcolor1">',
'<div class="text">Content protected with password.</div>','<div class="separator separator-border1"></div>','<div class="item none" id="',id,'-hint">','<div class="prompt">Hint:</div>',
'<div class="password-hint-text" id="',id,'-hint-text"></div>','</div>','<div class="form" id="',id,'-form">','<div class="item">','<div class="prompt">Password:</div>',
'<input id="',id,'-input" name="password" type="password" />','<a id="',id,'-go">Go</a>','</div>','</div>');if(retry){content.push('<div class="incorrect" id="',
id,'-incorrect">','Incorrect password','</div>');}content.push('</div>');dom.innerHTML=content.join("");var inner=view.getInner();inner.appendChild(dom);inner=null;
dom=null;var self=this;var photo=view.getPhoto();var realmId=photo.access.realmId;var ownerId=photo.access.ownerId;;zfl_PasswordManager.retrieveHint(ownerId,realmId,
function(hint){if(hint!=null&&hint.length!=0){if(self.current!=null&&self.current.access!=null&&self.current.access.realmId==realmId){var divPHint=view.dom("password-hint");
var divPHText=view.dom("password-hint-text");if(divPHint!=null&&divPHText!=null){zf_stdReplaceClassName(divPHint,"none",null);zf_stdSetText(divPHText,hint);;}else{;
}}else{;}}});var key=zfl_PhotoFlipper._getPoolKey(photo,view.getMethod());var loader=this._pool[key];;if(!loader.__zfl_onunlock){loader.__zfl_onunlock=this.closure(this._password_onunlock,
loader);zfl_PasswordManager.subscribe(ownerId,realmId,loader.__zfl_onunlock);;}var handler=function(){var password=view.dom("password-input").value;;self._showPassword(view,
false);zfl_PasswordManager.validate(ownerId,realmId,password,self.closure(self._password_onpassword,photo));};if(!retry)this.passwordEditing=false;view.dom("password-go").onclick=handler;
view.dom("password-input").onkeydown=function(e){self.passwordEditing=true;if(zf_stdGetEvent(e).keyCode==13)handler();};view.dom("password-input").onfocus=function(e){self.passwordEditing=true;
};if(retry){try{view.dom("password-input").focus();}catch(e){}}};zfl_PhotoFlipper.prototype._flipDone=function(immediate,source,forced){var back=this._views[zfl_PhotoFlipper.Back];
var front=this._views[zfl_PhotoFlipper.Front];;zf_stdSetOpacity(front.getInner(),1.0);zf_stdReplaceClassName(front.dom().parentNode,"invisible",null);if(back){var domBack=back.dom().parentNode;
zf_stdReplaceClassName(domBack,null,"none");zf_stdReplaceClassName(domBack,null,"invisible");back.clear();back.__zfl_height=null;back.__zfl_state=null;;}this._recalc(immediate);
if(front.__zfl_state!=zf_PhotoLoader.Loading){zf_stdReplaceClassName(this.dom(),null,"pf-loaded");}if(front.__zfl_state==zf_PhotoLoader.Complete){front.setSpecial(null);
this._centerInner(front);if(front.getPhoto().id==this.current.id)this._attachOverlay(true);;if(this.ondisplay)this.ondisplay(front.getPhoto(),forced);}else if(front.__zfl_state==zf_PhotoLoader.PasswordRequired){;
if(this.onpassword)this.onpassword();}};zfl_PhotoFlipper.prototype._recalc=function(immediate){;var height;if(this._fullHeight){height=this._availHeight;}else{var back=this._views[zfl_PhotoFlipper.Back];
var front=this._views[zfl_PhotoFlipper.Front];var inited=false;height=0;if(back&&!zf_stdHasClassName(back.dom().parentNode,"none")&&back.__zfl_height){height=Math.max(back.__zfl_height,
height);inited=true;}if(front&&!zf_stdHasClassName(front.dom().parentNode,"none")&&front.__zfl_height){height=Math.max(front.__zfl_height,height);inited=true;}if(!inited)height=this._availHeight;
}this.dom().style.height=height+"px";;if(!immediate)this.notifyResize(false);};zfl_PhotoFlipper.prototype._stopTransition=function(){if(this._animTransition.inprogress){this._animTransition.jump("end");
this._flipDone(true,"transition interrupted",true);}};zfl_PhotoFlipper.prototype._prefetch=function(photoList,index,forward){if(this._delayPrefetching){;var self=this;this._postponedPrefetch=function(){;
self._prefetch(photoList,index,forward);};return;};;this._postponedPrefetch=null;var prefetch=8;var increment=forward?1:-1;this._queue=[];var extent2=this._extent*2;
var width=this._availWidth-extent2;var height=this._availHeight-extent2;var loader;for(var i=0;i<prefetch;i++){if(index<0||index>=photoList.length)break;var photo=photoList.get(index);
index+=increment;if(!photo.loaded)continue;if(photo.video)continue;var method=photo.pickMethod(width,height);if(!method)method=zf_ProcessingMethod.StandardSmallSize;
var key=zfl_PhotoFlipper._getPoolKey(photo,method);if(this._pool[key])continue;loader=new zf_PhotoLoader(photo,method);loader.__pool_key=key;this._queue.push(loader);
}if(this._queue.length==0)return;loader=this._queue[0];loader.onload=this.closure(this._prefetch_onload,loader);zf_stdDeferCall(this.id+loader.__pool_key,loader.start,
loader);};zfl_PhotoFlipper.prototype._prefetch_onload=function(state,src,loader){;if(!loader.onload)return;loader.onload=null;var key=loader.__pool_key;this._pool[key]=loader;if(!this._queue||loader!=this._queue[0])return;
if(this._queue.length<=1){this._queue=null;return;}this._queue.shift();loader=this._queue[0];loader.onload=this.closure(this._prefetch_onload,loader);zf_stdDeferCall(this.id+loader.__pool_key,
loader.start,loader);var self=this;setTimeout(function(){self._prefetch_onload(zf_PhotoLoader.Loading,null,loader);},1000);};zfl_PhotoFlipper.prototype._password_onunlock=function(loader){;
var front=this._views[zfl_PhotoFlipper.Front];var back=this._views[zfl_PhotoFlipper.Back];if(front&&(loader.photo==front.getPhoto()))this._showPassword(view,false);
var key=zfl_PhotoFlipper._getPoolKey(loader.getPhoto(),loader.getMethod());this._pool[key]=null;loader.__zfl_onunlock=null;if(front&&front.getPhoto()==loader.getPhoto()&&front.getMethod()==loader.getMethod())this._load(zfl_PhotoFlipper.Front,
front.getPhoto(),false,true);if(back&&back.getPhoto()==back.getPhoto()&&back.getMethod()==loader.getMethod())this._load(zfl_PhotoFlipper.Back,back.getPhoto(),false,
true);};zfl_PhotoFlipper.prototype._password_onpassword=function(unlocked,photo){;if(unlocked)return;var view=this._views[zfl_PhotoFlipper.Front];if(view&&view.getPhoto()==photo)this._showPassword(view,
true,true);};;function zfl_DimLights(id,flipper,actions){zfl_Control.prototype.constructor.call(this,id);this._flipper=flipper;this._actions=actions;this.visible=false;var self=this;
var createAnimation=function(pad){return new zf_Animation({"hidden":20,"semi":60,"pressed":80,"visible":100},function(v){zf_stdSetOpacity(self.dom(pad),v/100);});
};this._leftAnim=createAnimation("left");this._rightAnim=createAnimation("right");this._closeAnim=createAnimation("closebox");this._speed1={s:100,t:500};this._speed2={s:100,
t:250};this._speed3={s:100,t:400};this.dom().onmousemove=this.eventHandler(this._dimlights_onmousemove);this.dom().oncontextmenu=zf_stdFalse;this.$dom().disableTextSelect();
this._flipper.onload=this.closure(this._flipper_onload);this._flipper.ondisplay=this.closure(this._flipper_ondisplay);}zfl_DimLights.inherits(zfl_Control);zfl_DimLights.prototype.init=function(decoration,
plugins,overlayFlags,analytics){this._analytics=analytics;var self=this;oncommand=function(id){if(id!="addToFavorites"&&id!="removeFromFavorites")self.command("undimLights");
self.command.apply(self,arguments);};this.dom("close").onclick=function(){self.command("undimLights");};this.$dom("left").bind('mousedown touchstart',this.eventHandler(this._back));
this.$dom("right").bind('mousedown touchstart',this.eventHandler(this._next));this._flipper.init(decoration,plugins,overlayFlags,oncommand,this.commandtest,true,
null);if(this._actions){this._actions.commandtest=this.commandtest;this._actions.command=oncommand;}};zfl_DimLights.prototype.show=function(){if(this.visible)return;this.visible=true;
if(zfl_Popup.current)zfl_Popup.current.hide();zfl_Curtain.show("darkest",null,null,$("#page-frame")[0]);this.layout.setCurrentFlipper(this._flipper);if(this._analytics)this._analytics.registerLightsDimmed(this._flipper);
this._show();};zfl_DimLights.prototype._show=function(){this.$dom().detach().appendTo("#page-frame");this._resizeHandler=this.eventHandler(this._window_onresize);zf_stdAttachEvent(window,
"resize",this._resizeHandler);var cx=zf_stdGetClientWidth()-(16+120);var cy=zf_stdGetClientHeight();this.dom("center").style.top=Math.floor(cy/2)+"px";if(this.current){if(this._actions)cy-=25;
if(this.layout.zenbar.visible)cy-=20;this._flipper.resize(cx,cy);this._flipper.update(this.current,this.currentContext);this._updateNavigation();if(this._actions)this._actions.update(this.current,
this.currentContext);}this.display(true);var speed4={s:100,t:3000};this._leftAnim.jump("visible");this._leftAnim.animate("hidden",speed4);this._rightAnim.jump("visible");
this._rightAnim.animate("hidden",speed4);this._closeAnim.jump("visible");this._closeAnim.animate("hidden",speed4);};zfl_DimLights.prototype.hide=function(){if(!this.visible)return;
this.visible=false;if(this._resizeHandler){zf_stdDetachEvent(window,"resize",this._resizeHandler);this._resizeHandler=null;}this._flipper.clear();this.display(false);
zfl_Curtain.hide();};zfl_DimLights.prototype.update=function(photo,context){;;if(this.current==photo)return;this.current=photo;this.currentContext=context;if(this.visible){this._flipper.update(photo,
context);this._updateNavigation();if(this._actions)this._actions.update(photo,context);}};zfl_DimLights.prototype._window_onresize=function(){;zf_stdDeferCall(this.id+".onresize",
function(){var cx=zf_stdGetClientWidth()-(4+100);var cy=zf_stdGetClientHeight();if(this._actions)cy-=25;if(this.layout.zenbar.visible)cy-=20;this.dom("center").style.top=Math.floor(cy/2)+"px";
this._flipper.resize(cx,cy);},this);};zfl_DimLights.prototype._flipper_onload=function(state,immediate){this._flipper.flip();};zfl_DimLights.prototype._flipper_ondisplay=function(photo){;
if(this._actions)this._actions.photoDisplayed(true);};zfl_DimLights.prototype._updateNavigation=function(){this.dom("left").style.display=this.commandtest("back")?"block":"none";
this.dom("right").style.display=this.commandtest("next")?"block":"none";};zfl_DimLights.prototype._dimlights_onmousemove=function(e){var cxClient=zf_stdGetClientWidth();var cyClient=zf_stdGetClientHeight();
var hot=Math.abs(e.clientY-cyClient/2)<150;var hotLeft=hot&&e.clientX<220;var hotRight=hot&&e.clientX>cxClient-220;var warmClose=e.clientX>cxClient-250&&e.clientY<250;
var hotClose=e.clientX>cxClient-50&&e.clientY<50;hot=hot&&(!hotLeft&&!hotRight);if(!this._hotLeft&&hotLeft)this._leftAnim.animate("visible",this._speed2);else if(this._hotLeft&&!hotLeft)this._leftAnim.animate("hidden",
this._speed1);if(!this._hotRight&&hotRight)this._rightAnim.animate("visible",this._speed2);else if(this._hotRight&&!hotRight)this._rightAnim.animate("hidden",this._speed1);
if(!this._hot&&hot){this._leftAnim.animate("semi",this._speed1);this._rightAnim.animate("semi",this._speed1);}else if(this._hot&&!hot){if(!hotLeft)this._leftAnim.animate("hidden",
this._speed1);if(!hotRight)this._rightAnim.animate("hidden",this._speed1);}if(!this._hotClose&&hotClose)this._closeAnim.animate("visible",this._speed2);else if(!this._warmClose&&warmClose)this._closeAnim.animate("semi",
this._speed1);else if(this._warmClose&&!warmClose)this._closeAnim.animate("hidden",this._speed1);else if(this._hotClose&&!hotClose)this._closeAnim.animate("semi",
this._speed1);this._hot=hot;this._hotLeft=hotLeft;this._hotRight=hotRight;this._hotClose=hotClose;this._warmClose=warmClose;};zfl_DimLights.prototype._next=function(e){this.command("next");
this._rightAnim.jump("pressed");this._rightAnim.animate("visible",this._speed3);return false;};zfl_DimLights.prototype._back=function(e){this._leftAnim.jump("pressed");this._leftAnim.animate("visible",
this._speed3);this.command("back");return false;};zfl_DimLights.standalone=function(photos,startIndex,options){options=options||{};if(photos instanceof Array){photos.get=function(i){return this[i];
};}var noImage=new zf_PhotoImage(-1),method=zf_ProcessingMethod.StandardSmallSize,haveTransitions=('transition' in document.body.style||'mozTransition' in document.body.style||'webkitTransition' in document.body.style);
var decorations=options.decorations||$.extend(zfl_DecorationInfo(),{borderSize:2});var plugins=[new zfl_DecorationPlugin(decorations,zfl_PhotoViewStyle.DimLights),
new zfl_WaitAnimationPlugin(true),new zf_VideoPlayerPlugin(function(c){return c;})];function createToolbarItem(id,text,dropdown,separator){return['<span class="actions-item actions-',
id,' none">','<a class="actions-link" href="#">','<span class="text">',zf_stdHtmlEncode(text),'</span>',dropdown?'<span class="ddown ddown-font1">&nbsp;&#9660;</span>':'',
'</a>','</span>'].concat(separator?['<span class="actions-sep actions-',id,'-sep none">|</span>']:[]).join('');}function createToolbar(){if(!options.toolbar)return '';
return['<div class="actions">','<div class="actions-inner actions-font1 actions-color1 actions-left">',createToolbarItem('addtocart','Buy',false,true),createToolbarItem('createbook',
'Create a Book',false,true),createToolbarItem('addtofav','Add To Favorites',false,true),createToolbarItem('removefromfav','Remove From Favorites',false,true),createToolbarItem('download',
'Download',false,false),'</div>','</div>'].join('');}var html=['<div id="dimLights" class="dimlights dimlights-standalone dimlights-decoration user-select-none lb">',
createToolbar(),zf_PhotoView.createHtml('dimLights-pva',null,null,plugins,zf_PhotoView.EMPTY_CONTEXT,noImage,method,false,0,0),'<div class="dimlights-center" id="dimLights-center" style="top: 567px;">',
'<div class="dimlights-pad dimlights-left" id="dimLights-left">','<div title="Previous - type Left Arrow" class="dimlights-button"></div>','</div>','<div class="dimlights-pad dimlights-right" id="dimLights-right">',
'<div title="Next - type Right Arrow" class="dimlights-button"></div>','</div>','</div>','<div id="dimLights-closebox" class="dimlights-closebox">','<div title="Close" class="dimlights-close" id="dimLights-close"></div>',
'</div>','</div>'];function $dom(id){return $('#dimLights-'+id);}function close(){$(document).unbind('.dimLights');$(window).unbind('.dimLights');$('#dimLights').remove();
zfl_Curtain.hide();}function getUsableSize(){return{cx:zf_stdGetClientWidth()-(4+100),cy:zf_stdGetClientHeight()-($('#page-frame').hasClass('zenbar-visible')?40:0)-(options.toolbar?45:0)};
}function pickMethod(photo,size){size=size||getUsableSize();var method;if(photo.video){method=photo.pickVideoMethod(size.cx,size.cy);method=$.extend({},zf_ProcessingMethod.VideoPosterFrame,
{cx:method.cx,cy:method.cy});}else{method=photo.pickMethod(size.cx,size.cy);}return method||zf_ProcessingMethod.StandardSmallSize;}function resize(photo){var size=getUsableSize();
photo=photo||pva.getPhoto();$('#dimLights').height(size.cy);var offset=options.toolbar?45:0;if(photo){var method=pickMethod(photo,size);if(method.code!=pva.getMethod().code){jump(currentIndex);
return;}$dom('pva').css({left:Math.round(52+(size.cx-method.cx)/2)+'px',top:Math.round((size.cy-method.cy)/2+offset)+'px'});}$dom('center').css('top',Math.floor(size.cy/2+offset)+'px');
}var loaders=[];function getLoader(photo,method){for(var i=0;i<loaders.length;i++){var loader=loaders[i];if(loader.getPhoto().id==photo.id&&loader.getMethod().code==method.code){loaders.splice(i,
1);break;}loader=null;}loaders.push(loader=loader||new zf_PhotoLoader(photo,method));if(loaders.length>10)loaders.shift();return loader;}function fetch(index){zf_Loadable.notifyLoaded(photos.get(index),
function(photo){getLoader(photo,pickMethod(photo)).start();});}var currentIndex,currentPhoto,firstShow=true;function jump(index){currentIndex=index;$dom('left').toggle(index>0);
$dom('right').toggle(index<photos.length-1);currentPhoto&&pva.detachContext(currentPhoto);currentPhoto=null;if(haveTransitions)pva.$().css('opacity','0');else pva.$().hide();
var hideTime=$.now();pva.clear();zf_Loadable.notifyLoaded(photos.get(index),function(photo){if(index!=currentIndex)return;plugins[2].autoPlay=firstShow&&index==startIndex;
firstShow=false;var method=pickMethod(photo);var loader=getLoader(photo,method);loader.start();updateToolbar(photo);function show(){pva.attachContext(currentPhoto=photo);
pva.resize(photo,photo,method);resize(photo);pva.load(loader,null,true);if(haveTransitions)pva.$().css('opacity','1');else pva.$().show();}var now=$.now();if(haveTransitions&&now<hideTime+200)setTimeout(show,
hideTime+200-now);else show();});zf_stdDeferCall("dimLights.back",function(i){i>0&&fetch(i-1);},null,index);zf_stdDeferCall("dimLights.next",function(i){i<photos.length-1&&fetch(i+1);
},null,index);}function createAnimation(id){return new zf_Animation({hidden:20,semi:60,pressed:80,visible:100},function(v){var e=$dom(id)[0];e&&zf_stdSetOpacity(e,
v/100);});}if(zfl_Popup.current)zfl_Popup.current.hide();zfl_Curtain.show("darkest",null,null,$("#page-frame")[0]);$('#page-frame').append(html.join(''));var pva=new zf_PhotoView('dimLights-pva',
plugins,zf_PhotoView.EMPTY_CONTEXT);var leftAnim=createAnimation("left"),rightAnim=createAnimation("right"),closeAnim=createAnimation("closebox"),speed1={s:100,t:500},
speed2={s:100,t:250},speed3={s:100,t:400},speed4={s:100,t:3000};$(window).bind('resize.dimLights',function(){currentPhoto&&resize(currentPhoto);});$(document).bind('keydown.dimLights',
function(e){switch(e.keyCode){case 13:case 32:if(currentPhoto&&(currentPhoto.flags&zf_PhotoFlags.Video)!=0)$(pva.getInner()).click();break;case 27:close();break;
case 37:$dom('left').filter(':visible').mousedown();break;case 39:$dom('right').filter(':visible').mousedown();break;default:return;}e.stopPropagation();e.preventDefault();
});var status={hot:false,hotLeft:false,hotRight:false,hotClose:false,warmClose:false};$('#dimLights').mousemove(function(e){var cxClient=zf_stdGetClientWidth(),cyClient=zf_stdGetClientHeight(),
hot=Math.abs(e.clientY-cyClient/2)<150,hotLeft=hot&&e.clientX<220,hotRight=hot&&e.clientX>cxClient-220,warmClose=e.clientX>cxClient-250&&e.clientY<250,hotClose=e.clientX>cxClient-50&&e.clientY<50;
hot=hot&&(!hotLeft&&!hotRight);!status.hotLeft&&hotLeft&&leftAnim.animate('visible',speed2);status.hotLeft&&!hotLeft&&leftAnim.animate('hidden',speed1);!status.hotRight&&hotRight&&rightAnim.animate('visible',
speed2);status.hotRight&&!hotRight&&rightAnim.animate('hidden',speed1);if(!status.hot&&hot){leftAnim.animate('semi',speed1);rightAnim.animate('semi',speed1);}else if(status.hot&&!hot){!hotLeft&&leftAnim.animate('hidden',
speed1);!hotRight&&rightAnim.animate('hidden',speed1);}if(!status.hotClose&&hotClose)closeAnim.animate('visible',speed2);else if(!status.warmClose&&warmClose)closeAnim.animate('semi',
speed1);else if(status.warmClose&&!warmClose)closeAnim.animate('hidden',speed1);else if(status.hotClose&&!hotClose)closeAnim.animate('semi',speed1);status={hot:hot,
hotLeft:hotLeft,hotRight:hotRight,hotClose:hotClose,warmClose:warmClose};}).bind('contextmenu',zf_stdFalse).disableTextSelect();$dom('close').bind('mousedown touchstart',
function(e){e.preventDefault();e.stopPropagation();close();});$dom('left').bind('mousedown touchstart',function(e){e.preventDefault();e.stopPropagation();currentIndex>0&&jump(currentIndex-1);
});$dom('right').bind('mousedown touchstart',function(e){e.preventDefault();e.stopPropagation();currentIndex<photos.length-1&&jump(currentIndex+1);});$(pva.getInner()).click(function(e){if(currentPhoto&&(currentPhoto.flags&zf_PhotoFlags.Video)!=0)e.stopPropagation();
});leftAnim.jump("visible");leftAnim.animate("hidden",speed4);rightAnim.jump("visible");rightAnim.animate("hidden",speed4);closeAnim.jump("visible");closeAnim.animate("hidden",
speed4);var $actions=$('#dimLights .actions:first');$actions.find('.actions-addtocart a').iff(!!options.onaddtocart).click(function(){options.onaddtocart(currentPhoto);
return false;});$actions.find('.actions-createbook a').iff(!!options.oncreatebook).click(function(){options.oncreatebook(currentPhoto);return false;});$actions.find('.actions-addtofav a').iff(!!options.onaddtofavorites).click(function(){options.onaddtofavorites(currentPhoto);
updateToolbar(currentPhoto);return false;});$actions.find('.actions-removefromfav a').iff(!!options.onremovefromfavorites).click(function(){options.onremovefromfavorites(currentPhoto);
updateToolbar(currentPhoto);return false;});$actions.find('.actions-download a').iff(!!options.ondownload).click(function(){options.ondownload(currentPhoto);return false;
});function updateToolbar(photo){var links={addtocart:!!options.onaddtocart&&photo.priceKey!='',createbook:!!options.oncreatebook&&photo.priceKey!=''&&(photo.pricingProducts&zf_PricingProducts.PhotoBooks)==zf_PricingProducts.PhotoBooks,
addtofav:!!options.onaddtofavorites&&!!options.scrapbook&&(!options.scrapbook.current||!options.scrapbook.current.map[photo.id]),removefromfav:!!options.onremovefromfavorites&&!!options.scrapbook&&(!!options.scrapbook.current&&!!options.scrapbook.current.map[photo.id]),
download:!!options.ondownload&&!photo.video&&(photo.access.mask&zf_AccessMask.ProtectOriginals)==0};var seps={addtocart:links.createbook||links.addtofav||links.removefromfav||links.download,
createbook:links.addtofav||links.removefromfav||links.download,addtofav:links.download,removefromfav:links.download,download:false};for(var link in links)$actions.find('.actions-'+link).toggleClass('none',
!links[link]);for(var sep in seps)$actions.find('.actions-'+sep+'-sep').toggleClass('none',!(links[sep]&&seps[sep]));}jump(startIndex);};;;;function zfl_AddressBar(updateable){this._updateable=updateable;
if(!updateable){this.update=zf_stdFalse;return;}this.set=zf_stdMakeDeferred("AddressBar",this.set);this.closure=zf_Control.prototype.closure;this._replaceInvoke=new zf_DelayedInvoke(600);
this._hash=location.hash;var self=this;this._track=function(){if(!self.current.loaded||self._replaceInvoke.pending)return;if(self._hash==location.hash)return;var id=zfl_AddressBar.parseHash(self.current.id,
false);if(id!=self.current.id){;self._layout.navigate(id,true);}};}zfl_AddressBar.prototype.init=function(layout){;this._layout=layout;};zfl_AddressBar.prototype.update=function(photo,context){;
;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);if(this.current==null)setInterval(this._track,500);this.current=photo;if(photo.loaded){this.set(photo,
context);}else{var self=this;photo.advise(this,function(){self.set(photo,context);});}};zfl_AddressBar.prototype.set=function(photo,context){;;var hash='#h'+photo.id.toString(16);
if(hash!=location.hash){var uri=[location.protocol,"//",location.host,location.pathname,location.search,hash].join("");this._locationReplace(uri,hash);}};zfl_AddressBar.prototype._locationReplace=function(uri,
hash){;this._hash=hash;location.replace(uri);;};zfl_AddressBar.parseHash=function(defaultValue,legacy){var hash=location.hash;var id=null;if(!hash||hash.length<2)return defaultValue;
if(hash.indexOf("#h")==0){id=parseInt(hash.substr(2),16);}else if(legacy){id=parseInt(hash.substr(1),10);}if(!id||isNaN(id))return defaultValue;return id;};;function zf_Rect(left,
top,width,height){if(arguments.length==0){this.left=0;this.top=0;this.width=0;this.height=0;}else{this.left=left;this.top=top;this.width=width;this.height=height;
}}zf_Rect.prototype.toString=function(precision){return "{"+[this.left.toPrecision(precision),this.top.toPrecision(precision),this.width.toPrecision(precision),this.height.toPrecision(precision)].join(",")+"}";
};zf_Rect.parse=function(rect){if(rect==null)return null;var re=/\{\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*,\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*,\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*,\s*(\d+(?:\.\d*)?(?:E[+-]\d+)?)\s*}/;
var res=re.exec(rect);if(res==null)return null;return new zf_Rect(parseFloat(res[1]),parseFloat(res[2]),parseFloat(res[3]),parseFloat(res[4]));};;;function zfl_CommentAreaPlugin(){this._active=false;
this._readOnly=false;this._onclose=null;this._areaRect=null;}zfl_CommentAreaPlugin.prototype.activate=function(attachment,readOnly,onclose){;this._areaRect=(attachment!=null)?zf_Rect.parse(attachment):null;
var dom=this._dom();this._cxArena=dom.parentNode.offsetWidth;this._cyArena=dom.parentNode.offsetHeight;zf_stdReplaceClassName(dom,readOnly?"cap-active":"cap-active-ro",
readOnly?"cap-active-ro":"cap-active");this._active=true;this._readOnly=readOnly;this._onclose=onclose;if(this._areaRect!=null){this._workRect=this._toWorkRect(this._areaRect);
this._moveRect(this._workRect);}else this._dom("oframe").style.visibility="hidden";var self=this;if(!readOnly){dom.onmousedown=function(e){self._area_onmousedown(this,
e);return false;};dom.onmouseup=function(e){self._area_onmouseup(this,e);};dom.onmousemove=function(e){self._area_onmousemove(this,e);};dom.onselectstart=zf_stdFalse;
}else{this._dom("close").onclick=function(){if(onclose!=null)onclose();self.deactivate();};}dom=null;};zfl_CommentAreaPlugin.prototype.deactivate=function(){;zf_stdReplaceClassName(this._dom(),
"cap-active",null);zf_stdReplaceClassName(this._dom(),"cap-active-ro",null);this._active=false;this._readOnly=false;this._onclose=null;};zfl_CommentAreaPlugin.prototype.getAttachment=function(){return this._areaRect!=null?this._areaRect.toString(3):null;
};zfl_CommentAreaPlugin.prototype.getInnerContent=function(id,context){return['<div class="cap-arena" oncontextmenu="return false;" id="',id,'-cap">','<div class="cap-oframe" id="',id,
'-cap-oframe">','<div class="cap-iframe" id="',id,'-cap-iframe"></div>','<div class="cap-close" id="',id,'-cap-close"></div>','</div>','</div>'].join("");};zfl_CommentAreaPlugin.prototype.onCreateDom=function(view,
outer,inner,context,isNew){;this._id=view.id+"-cap";if(this._active)this.activate(this.getAttachment(),this._readOnly,this._onclose);};zfl_CommentAreaPlugin.prototype._dom=function(id){return document.getElementById(id!=null?this._id+"-"+id:this._id);
};zfl_CommentAreaPlugin.prototype._toWorkRect=function(rect){return new zf_Rect(rect.left*this._cxArena,rect.top*this._cyArena,rect.width*this._cxArena,rect.height*this._cyArena);};zfl_CommentAreaPlugin.prototype._fromWorkRect=function(rect){return new zf_Rect(rect.left/this._cxArena,
rect.top/this._cyArena,rect.width/this._cxArena,rect.height/this._cyArena);};zfl_CommentAreaPlugin.prototype._moveRect=function(rect){var workLeft=rect.left;var workTop=rect.top;var workWidth=rect.width;
var workHeight=rect.height;var workRight=this._cxArena-workLeft-workWidth;var workBottom=this._cyArena-workTop-workHeight;var style;style=this._dom("oframe").style;
style.visibility="inherit";style.left=(workLeft-1)+"px";style.top=(workTop-1)+"px";style.width=workWidth+"px";style.height=workHeight+"px";style=this._dom("iframe").style;
style.width=workWidth+"px";style.height=workHeight+"px";};zfl_CommentAreaPlugin.prototype._area_onmousedown=function(dom,e){if(this._readOnly)return;e=zf_stdGetEvent(e);if(document.addEventListener){document.addEventListener("mousemove",
dom.onmousemove,true);document.addEventListener("mouseup",dom.onmouseup,true);document.addEventListener("selectstart",dom.onselectstart,true);}else if(dom.setCapture)dom.setCapture();
this._dom("oframe").style.visibility="hidden";var pos=this._getEventPos(e);this._anchorX=pos.x;this._anchorY=pos.y;this._tracking=true;zf_stdStopPropagation(e);};
zfl_CommentAreaPlugin.prototype._area_onmouseup=function(dom,e){if(!this._tracking)return;e=zf_stdGetEvent(e);if(document.removeEventListener){document.removeEventListener("mousemove",
dom.onmousemove,true);document.removeEventListener("mouseup",dom.onmouseup,true);document.removeEventListener("selectstart",dom.onselectstart,true);}else if(dom.releaseCapture)dom.releaseCapture();
this._workRect=this._getTrackingRect(e);if(this._workRect.width<5||this._workRect.height<5){this._areaReact=null;this._dom("oframe").style.visibility="hidden";}else this._areaRect=this._fromWorkRect(this._workRect);
this._tracking=false;zf_stdStopPropagation(e);};zfl_CommentAreaPlugin.prototype._area_onmousemove=function(dom,e){if(this._tracking)this._moveRect(this._getTrackingRect(zf_stdGetEvent(e)));
zf_stdStopPropagation(e);};zfl_CommentAreaPlugin.prototype._getTrackingRect=function(e){;var pos=this._getEventPos(e);var x=Math.min(Math.max(pos.x,0),this._cxArena);var y=Math.min(Math.max(pos.y,
0),this._cyArena);if(x<this._anchorX)++x;if(y<this._anchorY)++y;return new zf_Rect(Math.min(x,this._anchorX),Math.min(y,this._anchorY),Math.abs(x-this._anchorX),
Math.abs(y-this._anchorY));};zfl_CommentAreaPlugin.prototype._getEventPos=function(e){var x=e.clientX-2;var y=e.clientY-2;y+=document.body.scrollTop;var node=this._dom().offsetParent;
while(node!=null){x-=node.offsetLeft;y-=node.offsetTop;node=node.offsetParent;}return{x:x,y:y};};;;;function zfl_CommentCropPlugin(){this._active=false;this._readOnly=false;
this._onclose=null;this._cropRect=null;}zfl_CommentCropPlugin.prototype.activate=function(attachment,readOnly,onclose){;this._cropRect=attachment!=null?zf_Rect.parse(attachment):null;
if(this._cropRect==null)this._cropRect=new zf_Rect(0.1,0.1,0.8,0.8);var dom=this._dom();this._cxArena=dom.parentNode.offsetWidth;this._cyArena=dom.parentNode.offsetHeight;
this._workRect=this._toWorkRect(this._cropRect);this._moveRect(this._workRect);zf_stdReplaceClassName(dom,readOnly?"ccp-active":"ccp-active-ro",readOnly?"ccp-active-ro":"ccp-active");
this._active=true;this._readOnly=readOnly;this._onclose=onclose;var self=this;if(!readOnly){var onmousedown=function(e){self._handle_onmousedown(this,e);return false;
};var onmouseup=function(e){self._handle_onmouseup(this,e);};var onmousemove=function(e){self._handle_onmousemove(this,e);};var ids=["ne","nw","se","sw","frame"];
for(var i=0;i<ids.length;i++){handle=this._dom(ids[i]);handle.onmousedown=onmousedown;handle.onmouseup=onmouseup;handle.onmousemove=onmousemove;handle.onselectstart=zf_stdFalse;
}handle=null;dom=null;}else{this._dom("close").onclick=function(){if(onclose!=null)onclose();self.deactivate();};}};zfl_CommentCropPlugin.prototype.deactivate=function(){;zf_stdReplaceClassName(this._dom(),
"ccp-active",null);zf_stdReplaceClassName(this._dom(),"ccp-active-ro",null);this._active=false;this._readOnly=false;this._onclose=null;};zfl_CommentCropPlugin.prototype.getAttachment=function(){return this._cropRect.toString(3);
};zfl_CommentCropPlugin.prototype.getInnerContent=function(id,context){return['<div class="ccp-arena" oncontextmenu="return false;" id="',id,'-ccp">','<div class="ccp-shadow ccp-shadow-n" id="',
id,'-ccp-shadow-n"></div>','<div class="ccp-shadow ccp-shadow-w" id="',id,'-ccp-shadow-w"></div>','<div class="ccp-shadow ccp-shadow-e" id="',id,'-ccp-shadow-e"></div>',
'<div class="ccp-shadow ccp-shadow-s" id="',id,'-ccp-shadow-s"></div>','<div class="ccp-frame" id="',id,'-ccp-frame">','<div class="ccp-handle ccp-handle-nw" id="',
id,'-ccp-nw"></div>','<div class="ccp-handle ccp-handle-ne" id="',id,'-ccp-ne"></div>','<div class="ccp-handle ccp-handle-sw" id="',id,'-ccp-sw"></div>','<div class="ccp-handle ccp-handle-se" id="',
id,'-ccp-se"></div>','<div class="ccp-close" id="',id,'-ccp-close"></div>','</div>','</div>'].join("");};zfl_CommentCropPlugin.prototype.onCreateDom=function(view,outer,inner,context,
isNew){;this._id=view.id+"-ccp";if(this._active)this.activate(this.getAttachment(),this._readOnly,this._onclose);};zfl_CommentCropPlugin.prototype._dom=function(id){return document.getElementById(id!=null?this._id+"-"+id:this._id);
};zfl_CommentCropPlugin.prototype._toWorkRect=function(rect){return new zf_Rect(Math.round(rect.left*this._cxArena),Math.round(rect.top*this._cyArena),Math.round(rect.width*this._cxArena),
Math.round(rect.height*this._cyArena));};zfl_CommentCropPlugin.prototype._fromWorkRect=function(rect){return new zf_Rect(rect.left/this._cxArena,rect.top/this._cyArena,rect.width/this._cxArena,
rect.height/this._cyArena);};zfl_CommentCropPlugin.prototype._moveRect=function(rect){var workLeft=rect.left;var workTop=rect.top;var workWidth=rect.width;var workHeight=rect.height;
var workRight=this._cxArena-workLeft-workWidth;var workBottom=this._cyArena-workTop-workHeight;var style;style=this._dom("frame").style;style.left=(workLeft-2)+"px";
style.top=(workTop-2)+"px";style.width=workWidth+"px";style.height=workHeight+"px";this._dom("shadow-n").style.height=workTop+"px";this._dom("shadow-s").style.height=workBottom+"px";
style=this._dom("shadow-w").style;style.top=workTop+"px";style.height=workHeight+"px";style.width=workLeft+"px";style=this._dom("shadow-e").style;style.top=workTop+"px";
style.height=workHeight+"px";style.width=workRight+"px";};zfl_CommentCropPlugin.prototype._handle_onmousedown=function(handle,e){if(this._readOnly)return;e=zf_stdGetEvent(e);if(document.addEventListener){document.addEventListener("mousemove",
handle.onmousemove,true);document.addEventListener("mouseup",handle.onmouseup,true);document.addEventListener("selectstart",handle.onselectstart,true);}else if(handle.setCapture)handle.setCapture();
this._anchorX=e.clientX;this._anchorY=e.clientY;this._track=handle.className.split(' ')[1];if(this._track==null)this._track="frame";zf_stdStopPropagation(e);};zfl_CommentCropPlugin.prototype._handle_onmouseup=function(handle,
e){if(this._track==null)return;e=zf_stdGetEvent(e);if(document.removeEventListener){document.removeEventListener("mousemove",handle.onmousemove,true);document.removeEventListener("mouseup",
handle.onmouseup,true);document.removeEventListener("selectstart",handle.onselectstart,true);}else if(handle.releaseCapture)handle.releaseCapture();this._workRect=this._getTrackingRect(e);
this._cropRect=this._fromWorkRect(this._workRect);this._track=null;zf_stdStopPropagation(e);};zfl_CommentCropPlugin.prototype._handle_onmousemove=function(handle,e){if(this._track!=null)this._moveRect(this._getTrackingRect(zf_stdGetEvent(e)));
zf_stdStopPropagation(e);};zfl_CommentCropPlugin.prototype._getTrackingRect=function(e){;var left=this._workRect.left;var top=this._workRect.top;var right=left+this._workRect.width;var bottom=top+this._workRect.height;
;;;;var dx=e.clientX-this._anchorX;var dy=e.clientY-this._anchorY;var snapDelta=(e.ctrlKey||e.metaKey)?0:6;switch(this._track){case "ccp-handle-nw":left=Math.min(Math.max(0,
left+dx),right-20);top=Math.min(Math.max(0,top+dy),bottom-20);if(left<snapDelta)left=0;if(top<snapDelta)top=0;break;case "ccp-handle-ne":right=Math.max(Math.min(this._cxArena,
right+dx),left+20);top=Math.min(Math.max(0,top+dy),bottom-20);if(right>this._cxArena-snapDelta)right=this._cxArena;if(top<snapDelta)top=0;break;case "ccp-handle-sw":left=Math.min(Math.max(0,
left+dx),right-20);bottom=Math.max(Math.min(this._cyArena,bottom+dy),top+20);if(left<snapDelta)left=0;if(bottom>this._cyArena-snapDelta)bottom=this._cyArena;break;
case "ccp-handle-se":right=Math.max(Math.min(this._cxArena,right+dx),left+20);bottom=Math.max(Math.min(this._cyArena,bottom+dy),top+20);if(right>this._cxArena-snapDelta)right=this._cxArena;
if(bottom>this._cyArena-snapDelta)bottom=this._cyArena;break;default:left=Math.max(0,left+dx);top=Math.max(0,top+dy);if(left<snapDelta)left=0;if(top<snapDelta)top=0;
right=Math.min(this._cxArena,left+this._workRect.width);bottom=Math.min(this._cyArena,top+this._workRect.height);if(right>this._cxArena-snapDelta)right=this._cxArena;
if(bottom>this._cyArena-snapDelta)bottom=this._cyArena;left=right-this._workRect.width;top=bottom-this._workRect.height;break;};;;;return new zf_Rect(left,top,right-left,
bottom-top);};;function zfl_CommentFinder(photoList,origin,forward,ondone){;;;this._cancelled=false;this._photoList=photoList;this._step=forward?1:-1;this._ondone=ondone;
this.found=null;this.index=null;this._checkPhoto(origin+this._step);}zfl_CommentFinder.inherits(zf_Object);zfl_CommentFinder.prototype._checkPhoto=function(index){if(this._cancelled)return;if(index<0||index>=this._photoList.length){this._done(false);
return;}var photo=this._photoList.get(index);if(!photo.loaded){photo.advise(this,this.closure(this._checkPhoto,index));return;}if((photo.flags&zf_PhotoFlags.HasComments)==0){this._checkNext(index);
return;}var meta=photo.getMeta();if(!meta.loaded){meta.advise(this,this.closure(this._checkPhoto,index));return;}if(meta.comments==0){this._checkNext(index);return;
}this._done(true,index);};zfl_CommentFinder.prototype._done=function(found,index){this.found=found;this.index=index;if(this._ondone&&!this._cancelled)this._ondone(found,index);};
zfl_CommentFinder.prototype._checkNext=function(index){index+=this._step;var self=this;if((index%20)==0)setTimeout(function(){self._checkPhoto(index);},5);else this._checkPhoto(index);
};zfl_CommentFinder.prototype.cancel=function(index){this._cancelled=true;};;function zfl_CommentBrowser(id,controls){zfl_Control.prototype.constructor.call(this,id);this._visible=false;this._editable=true;
this._aggregatedMask=0;this._controls=controls;var edit=controls.edit;this._edit=edit;this._flipper=controls.flipper;this._flipper.onload=this.closure(this._flipper_onload);
this._flipper.ondisplay=this.closure(this._flipper_ondisplay);var self=this;edit.onsave=this.closure(this._edit_onsave);edit.oncancel=this.closure(this._edit_oncancel);
edit.onlogin=function(){if(self.onlogin)self.onlogin();};edit.onattachment=this.closure(this._displayAttachment,false);edit.onerror=this.closure(this._edit_onerror);
var list=controls.list;this._list=list;list.onadd=this.closure(this.add);list.onlogin=edit.onlogin;list.onrequest=this.closure(this._list_onrequest);list.onedit=this.closure(this._list_onedit);
list.onselect=this.closure(this._list_onselect);list.ondeselect=this.closure(this._list_ondeselect);list.onattachment=this.closure(this._list_onattachment);list.ondelete=this.closure(this._list_onaction,
"deleteMessage");list.onundelete=this.closure(this._list_onaction,"undeleteMessage");list.oncensor=this.closure(this._list_onaction,"censorMessage");list.onuncensor=this.closure(this._list_onaction,
"uncensorMessage");list.onpurge=this.closure(this._list_onaction,"purgeMessage");list.onpublic=this.closure(this._list_onaction,"makePublic");list.onprivate=this.closure(this._list_onaction,
"makePrivate");list.onapprove=this.closure(this._list_onaction,"approveMessage");var photoIndex=this._controls.photoIndex;if(photoIndex){photoIndex.update=function(photo,
context){this.set(context.currentIndex+1);};}this._setupAttachment=zf_stdFalse;this._compact=screen.width<=1200;if(this._compact)zf_stdReplaceClassName(this.dom(),
null,"cb-s-compact");zf_stdMakeMethodsDeferred(this,this.id,["_setupCommentFinders"]);}zfl_CommentBrowser.inherits(zfl_Control);zfl_CommentBrowser.prototype.init=function(decoration,plugins,overlayFlags){var self=this;
this.dom("close").onclick=function(){self.command("closeComments");};var command=function(id){self.command("closeComments");self.command(id);};this._cropPlugin=new zfl_CommentCropPlugin();
this._areaPlugin=new zfl_CommentAreaPlugin();plugins=[].concat(plugins,this._cropPlugin,this._areaPlugin);this._flipper.init(decoration,plugins,overlayFlags,command,
this.commandtest,true,null);this._extent=decoration!=null?(decoration.shadowSize+decoration.borderSize+decoration.extraSize):0;};zfl_CommentBrowser.prototype.show=function(add){if(this._visible)return;
this._visible=true;this._editOnOpen=add;if(zfl_Popup.current)zfl_Popup.current.hide();zfl_Curtain.show("dark");var dom=this.dom();if(dom.parentNode!=document.body)document.body.appendChild(dom.parentNode.removeChild(dom));
this._resizeHandler=this.eventHandler(this._window_onresize);zf_stdAttachEvent(window,"resize",this._resizeHandler);this._keydownHandler=this.eventHandler(this._document_onkeydown);
zf_stdAttachEvent(document,"keydown",this._keydownHandler);this.setMode("viewing");this.display(true);this._recalcLayout();this.layout.setCurrentFlipper(this._flipper);
if(this.current)this._update();};zfl_CommentBrowser.prototype.hide=function(){if(!this._visible)return;this._visible=false;if(this._resizeHandler){zf_stdDetachEvent(window,"resize",
this._resizeHandler);this._resizeHandler=null;}if(this._keydownHandler){zf_stdDetachEvent(document,"keydown",this._keydownHandler);this._keydownHandler=null;}this._flipper.clear();
this.display(false);zfl_Curtain.hide();};zfl_CommentBrowser.prototype.update=function(photo,context){;;if(this.current==photo)return;if(this.current!=null){this.current.unadvise(this);
this.current.getMeta().unadvise(this);}this.current=photo;this.currentContext=context;this._mailbox=null;this._editOnOpen=false;if(this._visible)this._update();};
zfl_CommentBrowser.prototype._update=function(){;;;var photo=this.current;var context=this.currentContext;this.dom("back").style.visibility=this.commandtest("back")?"inherit":"hidden";
this.dom("next").style.visibility=this.commandtest("next")?"inherit":"hidden";this._displayed=false;this._prepared=false;for(var key in this._controls){var control=this._controls[key];
if(control==null||typeof(control.update)!="function")continue;control.update(photo,context);}this._list.setEditing(true);if(photo.loaded){this._setPhoto(photo);}else{var self=this;
photo.advise(this,function(){self._setPhoto(photo);});}this._setupCommentFinders();};zfl_CommentBrowser.prototype._window_onresize=function(){;zf_stdDeferCall(this.id+".onresize",
this._recalcLayout,this);};zfl_CommentBrowser.prototype._flipper_onload=function(state,immediate){this._flipper.flip();};zfl_CommentBrowser.prototype._flipper_ondisplay=function(photo){;this._displayed=true;
this._onload();};zfl_CommentBrowser.prototype.next=function(e){this.command("next");};zfl_CommentBrowser.prototype.back=function(e){this.command("back");};zfl_CommentBrowser.prototype._recalcLayout=function(){var dom=this.dom();
var getPixels=function(node,a,b){return zf_stdExtractPixels(zf_stdGetCurrentStyle(node,a,b));};var x=34;var y=34;var cx=zf_stdGetClientWidth()-x*2;var cy=zf_stdGetClientHeight()-y*2;
var cxPadding=getPixels(dom,"border-left-width","borderLeftWidth")+getPixels(dom,"padding-left","paddingLeft")+getPixels(dom,"padding-right","paddingRight")+getPixels(dom,
"border-right-width","borderRightWidth");var cyPadding=getPixels(dom,"border-top-width","borderTopWidth")+getPixels(dom,"padding-top","paddingTop")+getPixels(dom,
"padding-bottom","paddingBottom")+getPixels(dom,"border-bottom-width","borderBottomWidth");cx-=cxPadding;cy-=cyPadding;cx=Math.max(cx,900);cy=Math.max(cy,(this._compact?550:620));
var cxImage=cx-(this._compact?400:450)-2*this._extent;var cyImage=cy-(this._compact?30:150)-2*this._extent;var options=[{method:zf_ProcessingMethod.StandardSmallSize,
mask:0},{method:zf_ProcessingMethod.StandardMediumSize,mask:zf_AccessMask.ProtectMedium},{method:zf_ProcessingMethod.StandardLargeSize,mask:zf_AccessMask.ProtectLarge},
{method:zf_ProcessingMethod.StandardExtraLargeSize,mask:zf_AccessMask.ProtectExtraLarge},{method:zf_ProcessingMethod.StandardXXLargeSize,mask:zf_AccessMask.ProtectXXLarge}];
var method=zf_ProcessingMethod.StandardSmallSize;for(var i=1;i<options.length;i++){var option=options[i];if((option.mask&this._aggregatedMask)!=0)continue;if(option.method.cx>cxImage||option.method.cy>cyImage)break;
method=option.method;}cxImage=method.cx+2*this._extent+2;cyImage=method.cy+2*this._extent;y+=document.body.scrollTop;dom.style.left=x+"px";dom.style.top=y+"px";dom.style.width=cx+"px";
dom.style.height=cy+"px";cy-=32;var left=this.dom("left");var right=this.dom("right");right.style.width=cx-cxImage-10-2+"px";right.style.height=cy-2+"px";left.style.width=cxImage+"px";
left.style.height=cy+"px";right.style.marginLeft=cxImage+10+"px";this._list.setHeight(cy-2);this._flipper.resize(cxImage,cyImage);};zfl_CommentBrowser.prototype._setPhoto=function(photo){;
zf_stdSetText(this.dom("title"),photo.title);this._mailbox=new zf_Mailbox(photo.owner.id,zf_MailboxType.PhotoComments,photo.id);this._list.setAccess(photo.access.mask,
zf_MailboxType.PhotoComments);this._edit.setAccess(photo.access.mask,zf_MailboxType.PhotoComments,photo.video);this.setMode("viewing");this._displayAttachment(zf_AttachmentType.None,
null,true);if((photo.flags&zf_PhotoFlags.HasComments)==0)this._list.reinit(0);var meta=photo.getMeta();if(meta.loaded){this._setMeta(meta);}else{var self=this;meta.bump();
meta.advise(this,function(){self._setMeta(meta);},function(){self._list.setLoading(true);});}};zfl_CommentBrowser.prototype._setMeta=function(meta){;var list=this._list;list.reinit(meta.comments,
meta.recentComments);if(meta.recentComments.length>0)list.select(meta.recentComments[0].index);this._prepared=true;this._onload();};zfl_CommentBrowser.prototype.add=function(){if(!this._editable)return;
this._edit.setOriginal(null);this.setMode("editing");};zfl_CommentBrowser.prototype._edit_onsave=function(updater){;var self=this;var original=this._edit.getOriginal();this._setupAttachment(updater);
this._editOnOpen=false;var photo=this.current;;var meta=photo.getMeta();;var list=this._list;var onpost=function(message,error){if(!error){if(message!=null){if(self.current===photo){if(original!=null)list.deselect(original.index);
list.add(message);list.select(message.index);}meta.addComment(message);}else if(original!=null){if(self.current===photo)list.remove(original.index);meta.removeComment(original.index);
}else{if(zf_userId==0){var msg=updater.isPrivate?"Your comment has been sent directly to the photographer. It will not appear in the list.":"Your comment will appear in this list once it is approved by the photographer.";
self._edit.setContinue(false,msg,function(){self.setMode("viewing");});return;}}self.setMode("viewing");return;}if(self.current===photo)self._edit.setContinue(true,
error.message,function(){self._edit.setContinue();});};if(original==null)zf_Message.postMessage(this._auth,this._mailbox,updater,onpost);else zf_Message.updateMessage(this._auth,
this._mailbox,original.index,updater,onpost);};zfl_CommentBrowser.prototype._edit_oncancel=function(){this.setMode("viewing");this._editOnOpen=false;var list=this._list;var selected=list.getSelectedView();
if(selected!=null){list.deselect(selected.getIndex());list.select(selected.getIndex());}else{this._displayAttachment(zf_AttachmentType.None,null,true);}};zfl_CommentBrowser.prototype.setMode=function(mode){;
this._mode=mode;if(mode=="editing"){this._auth=new zf_MailboxAuthorization(this._mailbox);zf_stdReplaceClassName(this.dom(),"cb-s-viewing","cb-s-editing");this.command("enableKeyNavigation",
false);this._edit.setFocus();}else{zf_stdReplaceClassName(this.dom(),"cb-s-editing","cb-s-viewing");this.command("enableKeyNavigation",true);this._list.setHeight();
}};zfl_CommentBrowser.prototype._list_onrequest=function(first,count){var self=this;var photo=this.current;;var meta=photo.getMeta();;var onload=function(messages,error){if(!error){meta.addComment(messages);
if(self.current===photo){self._list.add(messages);self._list.setHeight();}return;}};zf_Message.loadMessageRange(this._mailbox,photo.token,first,count,onload);};zfl_CommentBrowser.prototype._list_onedit=function(message){this._edit.setOriginal(message);
this.setMode("editing");};zfl_CommentBrowser.prototype._list_onaction=function(message,action){var self=this;var photo=this.current;;var meta=photo.getMeta();;var list=this._list;
var oncomplete=function(updated,error){if(!error){if(updated){meta.addComment(updated);if(self.current===photo){list.deselect(message.index);list.add(updated);list.select(updated.index);
}}else{meta.removeComment(message.index);if(self.current===photo)list.remove(message.index);}}self._list.setEditing(false);self._list.setHeight();};self._list.setEditing(true);
zf_Message[action](message.mailbox,message.index,oncomplete);};zfl_CommentBrowser.prototype._displayAttachment=function(attachmentType,attachment,readOnly){if(!this._displayed)return;
this._setupAttachment=zf_stdFalse;var help="";var icon="";if(attachmentType==zf_AttachmentType.None){this._areaPlugin.deactivate();this._cropPlugin.deactivate();
if(!readOnly)help="";}else if(attachmentType==zf_AttachmentType.CroppingSuggestion){this._areaPlugin.deactivate();this._cropPlugin.activate(attachment,readOnly,this.closure(this._plugin_onclose));
if(!readOnly){this._setupAttachment=function(updater){updater.attachmentType=zf_AttachmentType.CroppingSuggestion;updater.attachment=this._cropPlugin.getAttachment();
};help="Move or resize the cropping rectangle on the photo to suggest a different cropping";icon='<div class="cb-help-icon cb-help-icon-crop"></div>';}}else if(attachmentType==zf_AttachmentType.HighlightedArea){this._cropPlugin.deactivate();
this._areaPlugin.activate(attachment,readOnly,this.closure(this._plugin_onclose));if(!readOnly){this._setupAttachment=function(updater){updater.attachmentType=zf_AttachmentType.HighlightedArea;
updater.attachment=this._areaPlugin.getAttachment();};help="Draw a rectangle on the photo to highlight an area";icon='<div class="cb-help-icon cb-help-icon-area"></div>';
}}this.dom("help").innerHTML=['<div class="cb-help-text">','<span>',icon,zf_stdHtmlEncode(help),'</span>','</div>'].join("");};zfl_CommentBrowser.prototype._list_onselect=function(index){var view=this._list.getView(index);
var message=view.getMessage();this._displayAttachment(message.attachmentType,message.attachment,true);view.setAttachmentVisible(true);};zfl_CommentBrowser.prototype._list_ondeselect=function(index){var view=this._list.getView(index);
var message=view.getMessage();this._displayAttachment(zf_AttachmentType.None,null,true);view.setAttachmentVisible(false);};zfl_CommentBrowser.prototype._list_onattachment=function(message,
show){var selected=this._list.getSelectedView();if(!selected||selected.getIndex()!=message.index){this._list.select(message.index);}else{selected.setAttachmentVisible(show);
this._displayAttachment(show?message.attachmentType:zf_AttachmentType.None,message.attachment,true);}};zfl_CommentBrowser.prototype._onload=function(){if(!this._prepared||!this._displayed)return;
var photo=this.current;var meta=photo.getMeta();var list=this._list;;;list.setEditing(false);list.setLoading(false);if(this._editOnOpen){this._editOnOpen=true;this.add();
}else{var selected=list.getSelectedView();if(selected!=null){var message=selected.getMessage();this._displayAttachment(message.attachmentType,message.attachment,
true);}else{this._displayAttachment(zf_AttachmentType.None,null,true);}}};zfl_CommentBrowser.prototype._list_onattachment=function(message,show){var selected=this._list.getSelectedView();
if(!selected||selected.getIndex()!=message.index){this._list.select(message.index);}else{selected.setAttachmentVisible(show);this._displayAttachment(show?message.attachmentType:zf_AttachmentType.None,
message.attachment,true);}};zfl_CommentBrowser.prototype._plugin_onclose=function(){var view=this._list.getSelectedView();if(view)view.setAttachmentVisible(false);};zfl_CommentBrowser.prototype._document_onkeydown=function(e){if(e.altKey||e.ctrlKey||e.metaKey)return true;
var sourceTag=zf_stdGetEventSource(e).tagName;if(sourceTag=="INPUT"||sourceTag=="TEXTAREA")return true;if(this._mode=="editing"){return false;}else{if(this._list.getSelectedView()==null)return true;
switch(e.keyCode){case 38:this._list.selectNext();break;case 40:this._list.selectPrevious();break;default:return false;}}zf_stdStopPropagation(e);zf_stdPreventDefault(e);
return true;};zfl_CommentBrowser.prototype._edit_onerror=function(message,error){if(!message){message=['<div class="cb-edit-new ml-new-prompt ml-font3">','Leave your comment below and click the Add Comment button',
'</div>'].join("");}else if(error){message=['<div class="ml-new-prompt ml-font3 me-color3">',message,'</div>'].join("");}else{message=['<div class="ml-new-prompt ml-font3">',
message,'</div>'].join("");}this.dom("error").innerHTML=message;};zfl_CommentBrowser.prototype._finder_ondone=function(found,index,forward){var button=this.dom(forward?"seekNext":"seekBack");
zfl_Button.enableButton(button,found);if(found){button.title=forward?"Next photo with comments":"Previous photo with comments";}else{button.title="No more photos with comments";
}};zfl_CommentBrowser.prototype._setupCommentFinders=function(){;if(this._finderBack)this._finderBack.cancel();if(this._finderNext)this._finderNext.cancel();var button;button=this.dom("seekBack");
zfl_Button.enableButton(button,false);button.title="Searching for photos with comments";this._finderBack=new zfl_CommentFinder(this.currentContext.photoList,this.currentContext.currentIndex,
false,this.closure(this._finder_ondone,false));button=this.dom("seekNext");zfl_Button.enableButton(button,false);button.title="Searching for photos with comments";
this._finderNext=new zfl_CommentFinder(this.currentContext.photoList,this.currentContext.currentIndex,true,this.closure(this._finder_ondone,true));};zfl_CommentBrowser.prototype.seekBack=function(){if(this._finderBack&&this._finderBack.found)this.command("seek",
this._finderBack.index);};zfl_CommentBrowser.prototype.seekNext=function(){if(this._finderNext&&this._finderNext.found)this.command("seek",this._finderNext.index);};;;;;function zfl_RecentComments(id){zfl_Control.prototype.constructor.call(this,
id);zf_stdMakeMethodsDeferred(this,this.id,["_setPhoto"]);}zfl_RecentComments.inherits(zfl_Control);zfl_RecentComments.prototype.update=function(photo,context){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);
if(this.currentMeta!=null)this.currentMeta.unadvise(this);this.current=photo;this.currentMeta=null;if(photo.loaded){this._setPhoto(photo);}else{var self=this;photo.advise(this,
function(){self._setPhoto(photo);self.notifyResize(true);},function(){self._showLoading();self.notifyResize(false);});}};zfl_RecentComments.prototype._setPhoto=function(photo){;if((photo.flags&zf_PhotoFlags.HasComments)==0){this._showComments(photo,
null);return;}var meta=photo.getMeta();if(meta.loaded){this._setMeta(meta);}else{this.currentMeta=meta;var self=this;meta.bump();meta.advise(this,function(){self._setMeta(meta);
self.notifyResize(false);},function(){self._showLoading();self.notifyResize(false);});}};zfl_RecentComments.prototype._setMeta=function(meta){;this._showComments(meta.photo,meta.recentComments);
};zfl_RecentComments.prototype._showLoading=function(){zf_stdReplaceClassName(this.dom(),"recentcomments-s-empty","recentcomments-s-loading");};zfl_RecentComments.prototype._showComments=function(photo,
comments){zf_stdReplaceClassName(this.dom(),"recentcomments-s-loading",null);var mask=zf_AccessMask.NoPublicComments|zf_AccessMask.NoPrivateComments;var canAdd=(photo.access.mask&mask)!=mask;
if(canAdd&&zf_userId==0)canAdd=(photo.access.mask&zf_AccessMask.NoAnonymousComments)==0;this.display((photo.access.mask&zf_AccessMask.ProtectComments)==0);zf_stdReplaceClassName(this.dom(),
canAdd?"recentcomments-s-no-add":null,canAdd?null:"recentcomments-s-no-add");var comment=null;if(comments){for(var i=0;i<comments.length;i++){if(!comments[i].isDeleted){comment=comments[i];
break;}}}if(!comment){zf_stdReplaceClassName(this.dom(),null,"recentcomments-s-empty");}else{var posterName;if(comment.posterUrl){posterName=['<a href="" id="',this.id,
'-poster-link" class="recentcomments-poster">',zf_stdHtmlEncode(comment.posterName),'</a>'];}else{posterName=['<span class="recentcomments-poster">',zf_stdHtmlEncode(comment.posterName),
'</span>'];}var content=['<div class="recentcomments-header">',zf_stdFormatString('Last comment by {0} on {1}:',posterName.join(""),['<span class="recentcomments-date recentcomments-font1 recentcomments-color1">',
zf_stdFormatDateTime(comment.postedOn),'</span>'].join("")),'</div>','<div class="recentcomments-text">',comment.body,'</div>'];this.dom("content").innerHTML=content.join("");
var posterLink=this.dom("poster-link");if(posterLink&&comment.posterUrl)posterLink.href=comment.posterUrl;var domCount=this.dom("count");if(domCount)zf_stdSetText(domCount,
photo.getMeta().comments);zf_stdReplaceClassName(this.dom(),"recentcomments-s-empty",null);}};zfl_RecentComments.prototype._view_onclick=function(){if(this.onshow)this.onshow();};
zfl_RecentComments.prototype._add_onclick=function(){if(this.onadd)this.onadd();};zfl_RecentComments.prototype.refresh=function(){if(this.current&&this.current.loaded&&this.current.getMeta().loaded)this._setPhoto(this.current);
};;function zf_DelayLoadScript(){}zf_DelayLoadScript.MAX_RETRIES=30;zf_DelayLoadScript.RETRY_TIMEOUT=500;zf_DelayLoadScript._scriptDescByUrl={};zf_DelayLoadScript._timerIsStarted=false;zf_DelayLoadScript._windowLoadFired=null;zf_DelayLoadScript.load=function(url,data){;if(typeof(data)=="function"){data={onLoad:data,
onInit:zf_stdTrue,isLoaded:zf_stdTrue,forceLoad:false};}else{if(typeof(data)=="undefined"||data==null)data={};if(typeof(data.onLoad)!="function")data.onLoad=zf_stdTrue;
if(typeof(data.onInit)!="function")data.onInit=zf_stdTrue;if(typeof(data.isLoaded)!="function")data.isLoaded=zf_stdTrue;if(typeof(data.forceLoad)!="function")data.forceLoad=false;
}var scriptDesc=zf_DelayLoadScript._scriptDescByUrl[url];var isRegistered=!!scriptDesc;if(!isRegistered){scriptDesc={onInit:data.onInit,isLoaded:data.isLoaded,isInitQueued:false,
isInitialized:false,tryCount:0,queue:[]};zf_DelayLoadScript._scriptDescByUrl[url]=scriptDesc;;}else{;}if(!scriptDesc.isInitialized){if(zf_DelayLoadScript._windowLoadFired===true){zf_DelayLoadScript._initScript(url);
}else{if(window.navigator.userAgent.indexOf("Chrome")!=-1){if(!scriptDesc.isInitQueued){$(window).load(function(){zf_DelayLoadScript._initScript(url);zf_DelayLoadScript._windowLoadFired=true;
if(!zf_DelayLoadScript._timerIsStarted)zf_DelayLoadScript._processLoaded();});scriptDesc.isInitQueued=true;;}}else if(data.forceLoad){zf_DelayLoadScript._initScript(url);
}else if(!scriptDesc.isInitQueued){$(window).load(function(){zf_DelayLoadScript._initScript(url);zf_DelayLoadScript._windowLoadFired=true;if(!zf_DelayLoadScript._timerIsStarted)zf_DelayLoadScript._processLoaded();
});scriptDesc.isInitQueued=true;;}}}scriptDesc.queue.push(data.onLoad);scriptDesc.tryCount=Math.max(scriptDesc.tryCount-zf_DelayLoadScript.MAX_RETRIES/2,0);if(scriptDesc.isInitialized&&!zf_DelayLoadScript._timerIsStarted)zf_DelayLoadScript._processLoaded();
};zf_DelayLoadScript._initScript=function(url){var scriptDesc=zf_DelayLoadScript._scriptDescByUrl[url];;if(scriptDesc.isInitialized){;return;};scriptDesc.onInit();var po=document.createElement('script');
po.type='text/javascript';po.async=true;po.src=url;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);scriptDesc.isInitialized=true;
;};zf_DelayLoadScript._processLoaded=function(){;var minTryCount=123456789;for(var url in zf_DelayLoadScript._scriptDescByUrl){var scriptDesc=zf_DelayLoadScript._scriptDescByUrl[url];
;if(!scriptDesc.isInitialized){;continue;}if(scriptDesc.tryCount>=zf_DelayLoadScript.MAX_RETRIES){;continue;}if(!scriptDesc.isLoaded()){;minTryCount=Math.min(scriptDesc.tryCount,
minTryCount);scriptDesc.tryCount++;continue;}if(scriptDesc.queue.length==0)continue;while(scriptDesc.queue.length>0)(scriptDesc.queue.shift())();;}zf_DelayLoadScript._timerIsStarted=minTryCount<zf_DelayLoadScript.MAX_RETRIES;
if(zf_DelayLoadScript._timerIsStarted){var timeout=zf_DelayLoadScript.RETRY_TIMEOUT;if(minTryCount>=10)timeout*=2;setTimeout(function(){zf_DelayLoadScript._processLoaded();
},timeout);};};zf_DelayLoadScript.registerWindowLoad=function(){zf_DelayLoadScript._windowLoadFired=true;};function zfl_ApiDependentButton(id,renderImmediately,scriptUrl,tracePrefix){zfl_Control.prototype.constructor.call(this,
id);;;;;this._scriptUrl=scriptUrl;this._TP=tracePrefix;this._startApiRender(renderImmediately);}zfl_ApiDependentButton.inherits(zfl_Control);zfl_ApiDependentButton.prototype._onInit=zf_stdTrue;zfl_ApiDependentButton.prototype._onGetHtml=zf_stdTrue;
zfl_ApiDependentButton.prototype._onApiRender=zf_stdTrue;zfl_ApiDependentButton.prototype._isApiReady=zf_stdTrue;zfl_ApiDependentButton.prototype.update=function(photo){if(this.current)this.current.unadvise(this);this.current=photo;
var self=this;var renderPhoto=function(){self._render(photo.getHref('external'),photo.title?photo.title:"");};if(photo.loaded)renderPhoto();else photo.advise(this,
renderPhoto);};zfl_ApiDependentButton.prototype._render=function(href,text){this.$dom().html(this._onGetHtml(href,text));;this._startApiRender(false);};zfl_ApiDependentButton.prototype._startApiRender=function(renderImmediately){var key=new Date().getTime();
this._currentKey=key;zf_DelayLoadScript.load(this._scriptUrl,{onLoad:this.closure(this._apiRender,key),onInit:this.closure(this._onInit),isLoaded:this.closure(this._isApiReady),
forceLoad:renderImmediately});};zfl_ApiDependentButton.prototype._apiRender=function(key){if(key!=this._currentKey)return;try{this._onApiRender();;}catch(e){;}};function zfl_LikeButton(id,renderImmediately){renderImmediately=!!renderImmediately;
;if($("#fb-root").length==0)$("BODY").append('<div id="fb-root"></div>');zfl_ApiDependentButton.prototype.constructor.call(this,id,renderImmediately,"//connect.facebook.net/en_US/all.js",
"FB Like: ");}zfl_LikeButton.inherits(zfl_ApiDependentButton);zfl_LikeButton.prototype._onInit=function(){var channelUrl='//'+window.location.hostname+'/zf/core/static/fb-channel.html';window.fbAsyncInit=function(){window.FB.init({channelUrl:channelUrl,
status:true,cookie:true,xfbml:false});};};zfl_LikeButton.prototype._onGetHtml=function(href){var likeWidth;var lang=window.navigator.language;if(lang==null||lang==undefined)lang=window.navigator.userLanguage;
if(lang==null||lang==undefined)likeWidth='120';else likeWidth=lang.indexOf('en')==-1?'120':'90';return['<div class="fb-like" ','data-href="',href,'" ','data-send="false" ',
'data-layout="button_count" ','data-width="',likeWidth,'" ','data-show-faces="false"></div>'].join('');};zfl_LikeButton.prototype._onApiRender=function(){window.FB.XFBML.parse(this.dom());
};zfl_LikeButton.prototype._isApiReady=function(){return typeof(window.FB)!="undefined"&&window.FB!=null&&window.FB.XFBML!=null&&typeof(window.FB.XFBML.parse)=="function";};;function zfl_TweetButton(id,
renderImmediately){renderImmediately=!!renderImmediately;;zfl_ApiDependentButton.prototype.constructor.call(this,id,renderImmediately,"https://platform.twitter.com/widgets.js",
"Twitter: ");}zfl_TweetButton.inherits(zfl_ApiDependentButton);zfl_TweetButton.prototype._onInit=function(){};zfl_TweetButton.prototype._onGetHtml=function(href,text){return['<a href="https://twitter.com/share" class="twitter-share-button"',
' data-url="',href,'" data-count="none" data-text="',zf_stdHtmlEncode(text),'">Tweet</a>'].join('');};zfl_TweetButton.prototype._onApiRender=function(){window.twttr.widgets.load();
};zfl_TweetButton.prototype._isApiReady=function(){return typeof(window.twttr)!="undefined"&&window.twttr!=null&&window.twttr.widgets!=null&&typeof(window.twttr.widgets.load)=="function";
};;function zfl_PlusOneButton(id,renderImmediately){renderImmediately=!!renderImmediately;;zfl_ApiDependentButton.prototype.constructor.call(this,id,renderImmediately,"https://apis.google.com/js/plusone.js",
"GPlus: ");}zfl_PlusOneButton.inherits(zfl_ApiDependentButton);zfl_PlusOneButton.prototype._onInit=function(){window.___gcfg={parsetags:'explicit'};};zfl_PlusOneButton.prototype._onGetHtml=function(href){return['<div class="g-plusone" ',
'data-href="',href,'" data-size = "medium" data-annotation = "none">','</div>'].join('');};zfl_PlusOneButton.prototype._onApiRender=function(){window.gapi.plusone.go(this.id);};zfl_PlusOneButton.prototype._isApiReady=function(){return typeof(window.gapi)!="undefined"&&window.gapi!=null&&window.gapi.plusone!=null&&typeof(window.gapi.plusone.go)=="function";
};;function zfl_PinItButton(id){zfl_Control.prototype.constructor.call(this,id);}zfl_PinItButton.inherits(zfl_Control);zfl_PinItButton.prototype.update=function(photo){if(this.current)this.current.unadvise(this);
this.current=photo;var self=this;if(photo.loaded)this._render(photo);else photo.advise(this,function(){self._render(photo);});};zfl_PinItButton.prototype._render=function(photo){;
var owner=null;if(photo.photoSet!=null)owner=photo.photoSet.owner;else if(photo.gallery!=null)owner=photo.owner||photo.gallery.owner;var hostname=(!owner||!owner.domainName||owner.domainName=="")?document.location.hostname:owner.domainName;
var options={url:photo.getHref('external'),media:['http://',hostname,photo.getExternalUrl(photo.pickMethod(10000,10000,true))].join(''),description:photo.title,layout:'none',
ref:location.href};var src=['http://passets.pinterest.com/pinit.html?'];var i=0;for(var option in options){if(i++>0)src.push('&');src.push([option,'=',encodeURIComponent(options[option])].join(''));
}var html=['<iframe ','src="',src.join(''),'" ','scrolling="no"','frameborder="0" ','style="border:none; ','width:43px; height:20px;" ','allowTransparency="true">',
'</iframe>'].join('');this.$dom().html(html);};;var zf_PricingProducts={None:0,PhotoBooks:1};;;function zfl_PhotoLayout(id,global,local,viewStyle){zfl_Layout.prototype.constructor.call(this,
id,global,local);zfl_PhotoDownload.prototype.constructor.call(this,local);var key;var self=this;this._photoSet=zfl_stdTransformResponse(local.photoSet,"photoSet");
this._photoList=local.photoList;this._photoList.setDefaults(this._photoSet,this._photoSet.owner);this._photoList.onload=this.closure(this._photoList_onload);this._photoList.onshrink=this.closure(this._photoList_onshrink);
this._initial=local.initial;this.current={index:-1,photo:null,previousIndex:-2};this.slideshow=local.slideshow;if(viewStyle==null)this._photoViewStyle=zfl_PhotoViewStyle.PhotoNavList;
else this._photoViewStyle=viewStyle;var controls=this._controls;controls.list=controls.all;controls.add(local.copyright);controls.add(local.caption);controls.add(local.shortExif);
controls.add(local.categories);controls.add(local.photographer,this._photoSet.owner);controls.add(local.addressBar,this);controls.add(this.header);controls.add(this.footer);
controls.add(local.analytics);controls.add(local.mailboxLink);controls.add(local.recentComments);controls.add(global.customizer);controls.add(local.likeButton);controls.add(local.tweetButton);
controls.add(local.plusoneButton);controls.add(local.pinItButton);controls.analytics=local.analytics;var controlBox=local.controlBox;if(controlBox){controls.controlBox=controls.add(local.controlBox,
this._photoSet,null,this.zenbar);controlBox.onslide=function(id,index){self._registerSlideVisit(index);};controlBox.oneditproduct=this.closure(this._editProduct);
}controls.actions=controls.add(local.actions);var decoration,plugins,overlayFlags;if(local.flipper){local.flipper.relaxedHeight=true;decoration=this._getDecorationInfo(local.flipper.style);
plugins=this._createPlugins(local.flipper.style,decoration);overlayFlags={exifIcon:local.overlayExif,menuBar:local.overlayMenu||this.administrator,message:local.overlayMenu||this.administrator,
download:local.overlayDownload,collect:local.overlayCollect,contextMenu:true,dimLights:!this.slideshow,defaultCommand:!this.slideshow?"dimLights":null};controls.flipper=controls.add(local.flipper,
decoration,plugins,overlayFlags,this._handlers.oncommand,this._handlers.oncommandtest,this.slideshow,this.slideshow?"slow-fade":null);controls.flipper.onload=this.closure(this._flipper_onload);
this.setCurrentFlipper(controls.flipper);}var cookieControl=controls.addDeferredUpdate("setRecentCookie",function(photo,context){zfl_SessionCookie.current.setRecent(self._photoSet.id,
context.currentIndex);});if(local.dimlights){decoration=this._getDecorationInfo(zfl_PhotoViewStyle.DimLights);plugins=this._createPlugins(zfl_PhotoViewStyle.DimLights,
decoration);overlayFlags={download:local.overlayDownload,contextMenu:true,undimLights:true,defaultCommand:"undimLights"};controls.dimlights=controls.add(local.dimlights,
decoration,plugins,overlayFlags,local.analytics);controls.dimlights.ondisplay=this.closure(this._registerVisit);controls.listDimLights=[local.dimlights,cookieControl,
local.addressBar,local.analytics];}if(local.comments){decoration=this._getDecorationInfo(zfl_PhotoViewStyle.CommentBrowser);plugins=this._createPlugins(zfl_PhotoViewStyle.CommentBrowser,
decoration);overlayFlags={download:local.overlayDownload,contextMenu:false};controls.comments=controls.add(local.comments,decoration,plugins,overlayFlags);controls.comments.ondisplay=this.closure(this._registerVisit);
controls.listComments=[local.comments,cookieControl,local.addressBar,local.analytics];if(local.mailboxLink){local.mailboxLink.onshow=this.closure(this._showComments,
false);local.mailboxLink.onadd=this.closure(this._showComments,true);controls.mailboxLink=local.mailboxLink;}if(local.recentComments){local.recentComments.onshow=this.closure(this._showComments,
false);local.recentComments.onadd=this.closure(this._showComments,true);controls.recentComments=local.recentComments;}controls.comments.onlogin=zfl_Header.login;
}if(local.quickPriceList){controls.add(local.quickPriceList,this.zenbar);local.quickPriceList.addtocart=this.closure(this._addToCart);}for(key in this._pairs){var pair=this._pairs[key];
if(!pair)continue;if(pair.field=="PhotoPage.PhotoIndexOf"){pair.update=function(photo,context){this.set(context.currentIndex+1);};if(this._initial.shrunk)pair.set(this._photoList.length,
1);}if(pair.field=="PhotoPage.Viewed")controls.pairViewed=pair;controls.add(pair);}this._navigation=local.navigation;var navNext=this._navigation.next;var navBack=this._navigation.back;
if(navNext&&navBack){;controls.addDeferredUpdate("updateNavigation",function(photo,context){navBack.visibility(context.currentIndex>0);navNext.visibility(context.currentIndex<context.photoList.length-1);
});}this._pager=local.pager;var pager=this._pager;var grid=this._grids.photos;if(grid){controls.addDeferredUpdate("selectGridItem",function(photo,context){grid.deselectAll();
grid.selectItem(context.currentIndex);});}if(grid&&pager){grid.onlayoutchange=function(info){pager.update(info.totalPages,info.currentPage);};pager.onchange=function(page){grid.setPage(page);
grid.recalcLayout();};}if(this.scrapbook)this.scrapbook.onchange=this.closure(this._scrapbook_onchange);zf_stdMakeMethodsDeferred(this,this.id,["_ensureThumbnailVisible",
"_registerVisit"]);this._delayedViewsUpdate=new zf_DelayedInvoke(500);this.cyMinFooter=15;this._keyNavigation=true;this._allowSaveImages=local.overlayDownload;this._fakeVideoOriginals=local.fakeVideoOriginals;
}zfl_PhotoLayout.inherits(zfl_Layout,zfl_PhotoDownload);zfl_PhotoLayout.prototype.onrecalc=function(){zfl_Layout.prototype.onrecalc.call(this);};zfl_PhotoLayout.prototype.onload=function(){zfl_Layout.prototype.onload.call(this);
if(this._grids.photos){var photoList=this._photoList;this.initGrid(this._grids.photos,this._photoViewStyle,this._grids.photosParams,function(index){return photoList.get(index);
},photoList.length);var self=this;this._grids.photos.onselchange=function(item){self.seek(item.index);};};;var legacy=location.search.indexOf("photo=")!=-1;var id=zfl_AddressBar.parseHash(this._initial.id,
legacy);if(legacy){;this.navigate(id);return;}if(this._initial.index<0){;this.navigate(id);return;}if(this._initial.index==0&&id==0&&(/\/h0(\/slideshow)?\/?$/).test(location.pathname)){var cookie=zfl_SessionCookie.current;
if(this._photoSet.id==cookie.recentPhotoSetId&&cookie.recentPhotoIndex>=0){;this._initial.index=cookie.recentPhotoIndex;}else{;}}if(id!=this._initial.id){;this._photoList.get(this._initial.index);
this._initial.index=-1;this._initial.id=id;}else if(this._photoList.length==0){location.href=this._photoSet.getHref();}else{;this.seek(this._initial.index);}if(this._controls.analytics)this._controls.analytics.registerLayoutLoad(this._controls.flipper);
};zfl_PhotoLayout.prototype._photoList_onload=function(first){;if(first){if(this._initial.shrunk){var photo=this._photoList.get(0);;if(photo.access.type==zf_AccessType.Password&&photo.access.realmId==this._photoSet.access.realmId){var self=this;
zfl_PasswordManager.subscribe(photo.access.ownerId,photo.access.realmId,function(){self.navigate(photo.id,true);});}}if(this._initial.index<0){;;this.navigate(this._initial.id);
}}this.recalc();};zfl_PhotoLayout.prototype._photoList_onshrink=function(){;if(this.current.photo!=null&&this.current.photo.loaded)this.navigate(this.current.photo.id,true);else if(this._initial.id)this.navigate(this._initial.id,
true);return false;};zfl_PhotoLayout.prototype._redirect=function(photoId){;var dest=[];dest.push(this._photoSet.getBaseHref());if(photoId!=null)dest.push("/e",photoId.toString(16));
if(this.slideshow)dest.push("/slideshow");var query=location.search.replace("photo=h","legacy=x");dest.push(query);dest=dest.join("");location.replace(dest);};zfl_PhotoLayout.prototype.navigate=function(photoId,
reload){if(!photoId){;this._redirect(photoId);return;}if(reload){;this._redirect(photoId);return;}var index=this._photoList.find(photoId);if(index<0){;this._redirect(photoId);
return;};this.seek(index);};zfl_PhotoLayout.prototype.seek=function(index){;;var start=new Date().getTime();var photo=this._photoList.get(index);if(index!=this.current.index){this.current.previousIndex=this.current.index;
this.current.displayed=false;}if(this.current.photo)this.current.photo.unadvise(this);this.current.index=index;this.current.photo=photo;var context={currentIndex:index,
previousIndex:this.current.previousIndex,photoList:this._photoList};var list=this._controls.list;for(var i=0;i<list.length;i++){if(list[i])list[i].update(photo,context);
}this._prefetchMeta(this.current.index>=this.current.previousIndex);this.recalc(true);if(!this._dimmed)this._ensureThumbnailVisible();zfl_Popup.hideAny();;};zfl_PhotoLayout.prototype.next=function(){if(this.current.index>=0&&this.current.index<this._photoList.length-1){this.seek(this.current.index+1);
}};zfl_PhotoLayout.prototype.back=function(){if(this.current.index>0){this.seek(this.current.index-1);}};zfl_PhotoLayout.prototype.nextPage=function(){;var layoutInfo=this._grids.photos.getLayoutInfo();
this.seek(layoutInfo.lastVisible);};zfl_PhotoLayout.prototype.backPage=function(){;var layoutInfo=this._grids.photos.getLayoutInfo();if(layoutInfo.firstVisible>0)this.seek(layoutInfo.firstVisible-1);
};zfl_PhotoLayout.prototype.getCommands=function(){var self=this;var photo=function(){return self.current.photo;};var desc={common:{test:function(id){return this.current.photo&&this.current.photo.loaded&&this.current.displayed||id=="next"||id=="back";
}},addToCart:{test:function(){return photo().priceKey!=""&&photo().owner.id==this._photoSet.owner.id;},exec:function(id,options){this._addToCart(options);}},createBook:{test:function(){return photo().priceKey!=""&&(photo().pricingProducts&zf_PricingProducts.PhotoBooks)==zf_PricingProducts.PhotoBooks&&photo().owner.id==this._photoSet.owner.id;
},exec:function(id,options){this._createBook(options);}},editProduct:{test:zf_stdTrue,exec:function(id,info){this._editProduct(info);}},confirmProduct:{test:zf_stdTrue,
exec:function(id,info){this._confirmProduct(info);}},share:{test:function(){return this._controls.controlBox&&this._controls.controlBox.canShare();},exec:function(){this._controls.controlBox.share();
}},dimLights:{test:function(id,params){return this._controls.dimlights&&params.dimLights;},exec:function(){this._dimmed=true;this._controls.list=this._controls.listDimLights;
this._controls.dimlights.show();}},undimLights:{test:function(){return this._controls.dimlights&&this._controls.dimlights.visible;},exec:function(){this._dimmed=false;
this._controls.list=this._controls.all;this.setCurrentFlipper(this._controls.flipper);this.seek(this.current.index);this._controls.dimlights.hide();}},censorPhoto:{test:function(){return this.administrator&&!photo().access.isCensored;
},exec:function(){if(!confirm(photo().video?"Are you sure that you want to censor this video?":"Are you sure that you want to censor this photograph?"))return;zf_stdServerRequest("POST",
"/zf/layout/layout.asmx","CensorPhoto",[photo().id,true],function(){self._redirect(photo().id);});}},uncensorPhoto:{test:function(){return this.administrator&&photo().access.isCensored;
},exec:function(){zf_stdServerRequest("POST","/zf/layout/layout.asmx","CensorPhoto",[photo().id,false],function(){self._redirect(photo().id);});}},censorGallery:{test:function(){return this.administrator&&photo().photoSet.type==zf_PhotoSet.Gallery;
},exec:function(){if(!confirm("Are you sure that you want to censor this entire gallery?"))return;zf_stdServerRequest("POST","/zf/layout/layout.asmx","CensorGallery",
[this._photoSet.id],function(){self._redirect();});}},purgeGallery:{test:"censorGallery",exec:function(){if(!confirm("Are you sure that you want to immediately and permanently detele all photographs from this gallery?"))return;
zf_stdServerRequest("POST","/zf/layout/layout.asmx","PurgeGallery",[this._photoSet.id],function(){location.href="/p"+photo().photoSet.id;});}},makeSearchable:{test:function(){return this.administrator&&(this._photoSet.adminFlags&1)==1;
},exec:function(){zf_stdServerRequest("POST","/zf/layout/layout.asmx","SetSearchable",[this._photoSet.id,this._photoSet.owner.id,true],function(){self._redirect();
});}},makeNotSearchable:{test:function(){return this.administrator&&(this._photoSet.adminFlags&1)==0;},exec:function(){if(!confirm("Are you sure that you want to make this entire set unsearchable?"))return;
zf_stdServerRequest("POST","/zf/layout/layout.asmx","SetSearchable",[this._photoSet.id,this._photoSet.owner.id,false],function(){self._redirect();});}},purgePhoto:{test:"admin",
exec:function(){if(!confirm("Are you sure that you want to immediately and permanently detele this photograph?"))return;zf_stdServerRequest("POST","/zf/layout/layout.asmx",
"PurgePhoto",[photo().id],function(){self._redirect();});}},download:{test:function(id,params){return!!this.administrator||(!photo().video&&(photo().access.mask&zf_AccessMask.ProtectOriginals)==0||photo().video&&this._fakeVideoOriginals&&photo().owner.id==zf_ownerId)||params.download&&photo().owner.id==zf_ownerId;
}},saveImages:{test:function(id,params){return!!this.administrator||params.download&&photo().owner.id==zf_ownerId;}},downloadOriginal:{test:function(){return!!this.administrator||!photo().video&&((photo().access.mask&zf_AccessMask.ProtectOriginals)==0)||photo().video&&this._fakeVideoOriginals&&photo().owner.id==zf_ownerId;
},exec:function(){this._downloadOriginal(photo());}},downloadPhoto:{test:"downloadOriginal",exec:"downloadOriginal"},downloadPhoto2:{test:"downloadOriginal",exec:"downloadOriginal"},
downloadVideo:{test:function(){return this._fakeVideoOriginals;},exec:"downloadOriginal"},downloadGallery:{test:function(){return this._photoSet.type==zf_PhotoSet.Gallery;
},exec:function(){this._downloadOriginals(this._photoSet.title,this._photoList);}},downloadCollection:{test:function(){return this._photoSet.type==zf_PhotoSet.Collection;
},exec:"downloadGallery"},collect:{test:function(id,params){return params.collect&&(photo().access.mask&zf_AccessMask.NoCollections)==0;}},collectNew:{test:"collect",
exec:function(){zfl_CollectionList.current.addPhotoToNew("Quick Collection",photo().id,photo().owner.id);}},collectEdit:{test:"collect",exec:function(){var url=["http://",
zf_defaultHost,"/",zf_userName,"/edit"];location.href=zf_stdGetTransferUrl(url.join(""));}},collectPhoto:{test:"collect",exec:function(id,collectionId){zfl_CollectionList.current.addPhoto(collectionId,
photo().id,photo().owner.id);}},collectLogin:{test:"collect",exec:function(){zfl_Header.login(photo().getHref("full"),"collect."+photo().id);}},back:{test:function(){return this.current.index>0;
},exec:function(){this.back();}},next:{test:function(){return this.current.index<this._photoList.length-1;},exec:function(){this.next();}},seek:{exec:function(id,
index){this.seek(index);}},enableKeyNavigation:{test:function(){return this._keyNavigation;},exec:function(id,enable){this._keyNavigation=enable;}},addToFavorites:{test:function(){return!!this.scrapbook&&photo().owner.id==this._photoSet.owner.id&&(!this.scrapbook.current||!this.scrapbook.current.map[photo().id]);
},exec:function(id,purchase){this._addToFavorites(purchase);}},removeFromFavorites:{test:function(){return!!this.scrapbook&&!!this.scrapbook.current&&!!this.scrapbook.current.map[photo().id];
},exec:function(){this.scrapbook.removePhotos([photo().id]);if(this._currentFlipper)this._currentFlipper.ondisplay(photo());}},openFavorites:{test:function(){return!!this.scrapbook;
},exec:function(){if(!!this._controls.dimlights&&this._controls.dimlights.visible)this._handlers.oncommand("undimLights");this.scrapbook.show();}},openComments:{exec:function(){this._showComments(false);
}},closeComments:{exec:function(){this._dimmed=false;this._controls.list=this._controls.all;this.setCurrentFlipper(this._controls.flipper);this.seek(this.current.index);
if(this._controls.mailboxLink)this._controls.mailboxLink.refresh();if(this._controls.recentComments)this._controls.recentComments.refresh();if(this._controls.comments)this._controls.comments.hide();
}}};var parent=zfl_Layout.prototype.getCommands.call(this);$.each(parent,function(k,v){if(!desc[k])desc[k]=v;});return desc;};zfl_PhotoLayout.prototype._photo_onstretch=function(height,
stretcher){var flipper=this._controls.flipper;if(flipper){var width=stretcher.offsetWidth;if(!flipper.resize(width,height)){stretcher.style.height=height+"px";}else{stretcher.style.height=flipper.dom().style.height;
}this._updateFlipperDependencies();return true;}return false;};zfl_PhotoLayout.prototype._flipper_onload=function(state,immediate){var flipper=this._controls.flipper;;flipper.flip();
this._updateFlipperDependencies();if(!immediate)this.recalc(false);};zfl_PhotoLayout.prototype._flipper_ondisplay=function(photo){;if(this.current.photo==photo)this.current.displayed=true;
var controlBox=this._controls.controlBox;if(controlBox&&controlBox.current==photo)controlBox.photoDisplayed(true);var actions=this._controls.actions;if(actions&&actions.current==photo)actions.photoDisplayed(true);
if(photo.loaded)this._registerVisit(photo);if(photo.loaded&&photo.video&&photo.sizes==undefined){photo.sizes={};zf_stdServerRequestEx("GET","/zf/layout/layout.asmx",
"GetMethodSizes",[zf_ownerId,photo.id,photo.token],function(result,error){if(error==null)photo.sizes=result;});}};zfl_PhotoLayout.prototype._ensureThumbnailVisible=function(){;
var grid=this._grids.photos;if(!grid)return;var pageIndex=grid.getItemPage(this.current.index);if(pageIndex!=grid.getPage()){grid.setPage(pageIndex);grid.recalcLayout();
}};zfl_PhotoLayout.prototype._prefetchMeta=function(forward){var increment=forward?1:-1;var prefetch=5;var index=this.current.index+(prefetch-1)*increment;for(var i=0;i<prefetch;
i++){if(index<0||index>=this._photoList.length)continue;var photo=this._photoList.get(index);var meta=photo.getMeta();meta.bump();index-=increment;}};zfl_PhotoLayout.prototype._document_onkeydown=function(e){zfl_Layout.prototype._document_onkeydown.apply(this,
arguments);if(e.isPropagationStopped())return true;if(e.altKey||e.ctrlKey||e.metaKey)return true;var sourceTag=e.target.tagName;if(sourceTag=="INPUT"||sourceTag=="TEXTAREA")return true;
switch(e.which){case 39:if(this._keyNavigation)this.next();return false;case 37:if(this._keyNavigation)this.back();return false;case 70:if(this._handlers.oncommandtest("addToFavorites"))this._handlers.oncommand("addToFavorites");
else if(this._handlers.oncommandtest("removeFromFavorites"))this._handlers.oncommand("removeFromFavorites");return false;case 27:if(this._dimmed){this._handlers.oncommand("undimLights");
this._handlers.oncommand("closeComments");return false;}break;default:break;}return true;};zfl_PhotoLayout.prototype._registerVisit=function(photo){;if(this.administrator)return;
if(photo.__visit_registered)return;photo.__visit_registered=true;if(photo.owner.id==zf_userId)return;var self=this;var pair=this._controls.pairViewed;var oncomplete=function(status,
retVal){;if(status==200&&retVal.result==true){if(!photo.views)photo.views=1;else++photo.views;if(pair){self._delayedViewsUpdate.invoke(function(){if(pair.current==photo)pair.set(photo.views);
});}}};var sessionKey=zfl_SessionCookie.current.sessionKey;zf_stdServerRequest("GET","/zf/layout/layout.asmx","RegisterVisit",[photo.owner.id,photo.gallery.id,photo.id,
this._photoSet.owner.id,this._photoSet.id,sessionKey],oncomplete);};zfl_PhotoLayout.prototype._registerSlideVisit=function(photoIndex){var photo=this._photoList.get(photoIndex);
;if(photo.loaded){if(photo.access.type==zf_AccessType.Password&&!zfl_PasswordManager.check(photo.access.ownerId,photo.access.realmId))return;this._registerVisit(photo);
}else{var self=this;photo.advise({},function(){self._registerSlideVisit(photoIndex);});}};zfl_PhotoLayout.prototype._showComments=function(add){this._dimmed=true;this._controls.list=this._controls.listComments;
this._controls.comments.show(add);};zfl_PhotoLayout.prototype.adjustWidthOnFlipperResize=function(){var flipper=this._controls.flipper;if(!flipper)return;if(flipper.__zfl_widthdeps==null)flipper.__zfl_widthdeps=[];
for(var i=1;i<arguments.length;i++){var control=arguments[i];if(control==null)continue;flipper.__zfl_widthdeps.push(control);}};zfl_PhotoLayout.prototype._updateFlipperDependencies=function(){var flipper=this._controls.flipper;
if(!flipper)return;if(flipper.__zfl_widthdeps){var width=flipper.getPhotoSize().cx;width=Math.max(Math.min(width,600),300);for(var i=0;i<flipper.__zfl_widthdeps.length;
i++){var control=flipper.__zfl_widthdeps[i];control.dom().style.width=width+"px";}}};zfl_PhotoLayout.prototype._addToCart=function(options){;;if(!this.zenbar)return;options=options?options:{};
options.allPhotos=this._photoList;this.zenbar.addToCart(options)([this.current.photo]);};zfl_PhotoLayout.prototype._createBook=function(options){;;if(!this.zenbar)return;options=options?options:{};
options.allPhotos=this._photoList;options.categoryId="photobooks";this.zenbar.addToCart(options)([this.current.photo]);};zfl_PhotoLayout.prototype._editProduct=function(info){;
;if(!this.zenbar)return;var setPhotos=this.zenbar.editProduct(info,{allPhotos:this._photoList});setPhotos(this.current.photo);};zfl_PhotoLayout.prototype._confirmProduct=function(info){if(!this.zenbar)return;
var confirmationScreen=this.zenbar.confirmProduct();confirmationScreen(info);};zfl_PhotoLayout.prototype._addToFavorites=function(purchase){if(!this.scrapbook)return;;this.scrapbook.addPhotos([this.current.photo.id],
purchase);if(this._currentFlipper)this._currentFlipper.ondisplay(this.current.photo);};zfl_PhotoLayout.prototype._download=function(){this._downloadOriginal(this.current.photo);
};zfl_PhotoLayout.prototype._scrapbook_onchange=function(info,edit){if(this.zenbar)this.zenbar.setScrapbookInfo(info,edit);if(info&&info.addedCount!=undefined){var message=null;
if(info.failedCount>0)message="An error has occurred while trying to add this photos to favorites.";if(message)zfl_MessageBox.show({text:message,buttons:["OK"]});
}if(this._currentFlipper)this._currentFlipper.ondisplay(this.current.photo);};zfl_PhotoLayout.prototype.setCurrentFlipper=function(flipper){var oldflipper=this._currentFlipper;
if(flipper===oldflipper)return;if(oldflipper){oldflipper.ondisplay=oldflipper.__chained_ondisplay;oldflipper.__chained_ondisplay=null;}if(flipper){flipper.__chained_ondisplay=flipper.ondisplay;
var self=this;flipper.ondisplay=function(photo,forced){if(flipper.__chained_ondisplay)flipper.__chained_ondisplay(photo,forced);self._flipper_ondisplay(photo,forced);
};}this._currentFlipper=flipper;};;;;function zfl_TabGroup(id,tabs){if(zf_stdNoArgs(arguments))return;zfl_Control.prototype.constructor.call(this,id);this._tabs={};for(var i=0;
i<tabs.length;i++){this._tabs[tabs[i].key]=tabs[i];var dom=document.getElementById(tabs[i].id);dom.onmouseover=zfl_TabGroup._switch_onmouseover;dom.onmouseout=zfl_TabGroup._switch_onmouseout;
}}zfl_TabGroup.inherits(zfl_Control);zfl_TabGroup._switch_onmouseover=function(event){var dom=zf_stdGetEventSource(event);if(zf_stdHasClassName(dom,"tab-label"))dom=dom.parentNode;if(zf_stdHasClassName(dom,
"tab-standard")){zf_stdReplaceClassName(dom,"tab-standard","tab-hover");zf_stdReplaceClassName(dom,"tab-bgcolor2","tab-bgcolor3");zf_stdReplaceClassName(dom,"tab-bgimage2",
"tab-bgimage3");zf_stdReplaceClassName(dom,"tab-color2","tab-color3");}};zfl_TabGroup._switch_onmouseout=function(event){var dom=zf_stdGetEventSource(event);if(zf_stdHasClassName(dom,
"tab-label"))dom=dom.parentNode;if(zf_stdHasClassName(dom,"tab-hover")){zf_stdReplaceClassName(dom,"tab-hover","tab-standard");zf_stdReplaceClassName(dom,"tab-bgcolor3",
"tab-bgcolor2");zf_stdReplaceClassName(dom,"tab-bgimage3","tab-bgimage2");zf_stdReplaceClassName(dom,"tab-color3","tab-color2");}};zfl_TabGroup._restyle=function(id,selected){var dom=document.getElementById(id);
if(selected){zf_stdReplaceClassName(dom,"tab-standard",null);zf_stdReplaceClassName(dom,"tab-hover","tab-selected");zf_stdReplaceClassName(dom,"tab-bgcolor3",null);
zf_stdReplaceClassName(dom,"tab-bgcolor2","tab-bgcolor1");zf_stdReplaceClassName(dom,"tab-bgimage3",null);zf_stdReplaceClassName(dom,"tab-bgimage2","tab-bgimage1");
zf_stdReplaceClassName(dom,"tab-color3",null);zf_stdReplaceClassName(dom,"tab-color2","tab-color1");}else{zf_stdReplaceClassName(dom,"tab-selected","tab-standard");
zf_stdReplaceClassName(dom,"tab-bgcolor1","tab-bgcolor2");zf_stdReplaceClassName(dom,"tab-bgimage1","tab-bgimage2");zf_stdReplaceClassName(dom,"tab-color1","tab-color2");
}};zfl_TabGroup.prototype.init=function(key0){if(key0){var tab0=this._tabs[key0];if(tab0&&!tab0.selected){for(var key1 in this._tabs){var tab1=this._tabs[key1];if(tab1.selected){zfl_TabGroup._restyle(tab1.id,
false);tab1.selected=false;}else if(tab1.key==key0){zfl_TabGroup._restyle(tab1.id,true);tab1.selected=true;}}}}for(var key in this._tabs){var tab=this._tabs[key];
if(tab.selected){this._select(tab,true,true);break;}}};zfl_TabGroup.prototype.get=function(key){return this._tabs[key];};zfl_TabGroup.prototype.select=function(key){var dom;var tab=this._tabs[key];
if(!tab||tab.selected)return;for(var key1 in this._tabs){var tab1=this._tabs[key1];if(tab1.selected){zfl_TabGroup._restyle(tab1.id,false);this._select(tab1,false,
false);break;}}zfl_TabGroup._restyle(tab.id,true);this._select(tab,true,false);};zfl_TabGroup.prototype._select=function(tab,select,init){tab.selected=select;if(select)this.selected=tab;
if(tab.view){var display=select?"block":"none";for(var i=0;i<tab.view.length;i++){var obj=tab.view[i];if(!obj)continue;if(obj.dom instanceof Function){obj.dom().style.display=display;
}else if(typeof(obj)=="string"&&obj.length>0){document.getElementById(obj).style.display=display;}}}if(this.onselect)this.onselect(tab,select,init);};;function zfl_SearchLayout(id,
global,local){zfl_Layout.prototype.constructor.call(this,id,global,local);this._data={galleries:zfl_stdTransformResponse(local.data.galleries,"galleries"),collections:zfl_stdTransformResponse(local.data.collections,
"collections"),photos:zfl_stdTransformResponse(local.data.photos,"photos"),videos:zfl_stdTransformResponse(local.data.videos,"videos")};var self=this;this._customize=local.customize;
if(local.tabs){this._tabs=local.tabs;this._tabs.onselect=function(tab,selected,init){self._tabs_onselect(tab,selected,init);};this._columns.Center.onstretch=function(height,
stretcher){return self._tabs_onstretch(height,stretcher);};}this._paged=!!local.pagers.galleries||!!local.pagers.collections||!!local.pagers.photos||!!local.pagers.videos;
var setupPage=function(name,minRows){var grid=local.grids[name];var pager=local.pagers[name];if(!grid||!pager)return;grid.minRows=minRows;grid.onlayoutchange=function(info){pager.update(info.totalPages,
info.currentPage);};pager.onchange=function(page){grid.setPage(page);self.recalc(true);};};setupPage("galleries",2);setupPage("collections",2);setupPage("photos",
2);setupPage("videos",2);}zfl_SearchLayout.inherits(zfl_Layout);zfl_SearchLayout.prototype.onrecalc=function(){zfl_Layout.prototype.onrecalc.call(this);};zfl_SearchLayout.prototype.onload=function(){this.initGrid(this._grids.galleries,
zfl_PhotoViewStyle.FolderElement,this._grids.galleriesParams,this._data.galleries);this.initGrid(this._grids.collections,zfl_PhotoViewStyle.FolderElement,this._grids.collectionsParams,
this._data.collections);this.initGrid(this._grids.photos,zfl_PhotoViewStyle.GalleryPhoto,this._grids.photosParams,this._data.photos);this.initGrid(this._grids.videos,
zfl_PhotoViewStyle.GalleryPhoto,this._grids.videosParams,this._data.videos);if(this._tabs)this._tabs.init(zf_stdGetCookie("zfl_search"));zfl_Layout.prototype.onload.call(this);
};zfl_SearchLayout.prototype._tabs_onselect=function(tab,selected,init){if(!selected)return;zf_stdSetCookie("zfl_search",tab.key,null,true,true);if(!init)this.recalc();};zfl_SearchLayout.prototype._tabs_onstretch=function(height,
stretcher){var tab=this._tabs.selected;var grid;if(tab)grid=this._grids[tab.key];if(!grid)return false;if(this._paged){grid.setHeight(height);}else{grid.minRows=null;
grid.setHeight(-1);}stretcher.style.height="auto";stretcher.style.minHeight=height+"px";grid.recalcLayout();return true;};zfl_SearchLayout.prototype._onsearch=function(){var search=this.dom("query")["q"];
var query=encodeURIComponent(search.value);uri="/?q="+query;if(this._customize)uri+="&customize="+this._customize;location.href=uri;};;;;;function zfl_PhotoCtrThLayout(id,global,
local){zfl_PhotoLayout.prototype.constructor.call(this,id,global,local);var grid=this._grids.photos;if(grid){grid.minRows=grid.maxRows=1;grid.setHeight(0);var self=this;
grid.onlayoutchange=function(info){var nextPage=self._navigation.nextPage;var backPage=self._navigation.backPage;if(nextPage)nextPage.visibility(info.lastVisible<self._photoList.length);
if(backPage)backPage.visibility(info.firstVisible>0);};}}zfl_PhotoCtrThLayout.inherits(zfl_PhotoLayout);zfl_PhotoCtrThLayout.prototype.onrecalc=function(){zfl_PhotoLayout.prototype.onrecalc.call(this);
var grid=this._grids.photos;if(grid){var info=null;if(grid.getSelectedItem()==null&&this.current.index>=0){info2=info=grid.getLayoutInfo();grid.setPage(Math.floor(this.current.index/info.itemsPerPage));
info=null;}else{info=grid.getLayoutInfo(zf_PhotoGrid.KeepVisible);}grid.recalcLayout(info);}};zfl_PhotoCtrThLayout.prototype.onload=function(){zfl_PhotoLayout.prototype.onload.call(this);
};;;function zfl_PhotoLtRtLayout(id,global,local){zfl_PhotoLayout.prototype.constructor.call(this,id,global,local);var self=this;var style=zfl_PhotoViewStyle.PhotoNavThumbnail;
var method=zf_ProcessingMethod.StandardSmallThumbnail;var plugins=this._createPlugins(style,this._getDecorationInfo(style,method));this._pool={};if(this._navigation.backThumbId&&this._navigation.nextThumbId){var view;
view=new zf_PhotoView(this._navigation.backThumbId,plugins);view.waitTimeout=800;this._navigation.backThumb=view;view=new zf_PhotoView(this._navigation.nextThumbId,
plugins);view.waitTimeout=800;this._navigation.nextThumb=view;this._controls.addDeferredUpdate("updateNavigation2",this.closure(this._updateNavigation));var domBack=this._navigation.back.dom();
domBack.onmouseup=function(){self.back();};var domNext=this._navigation.next.dom();domNext.onmouseup=function(){self.next();};}}zfl_PhotoLtRtLayout.inherits(zfl_PhotoLayout);zfl_PhotoLtRtLayout.prototype.onrecalc=function(){zfl_PhotoLayout.prototype.onrecalc.call(this);
};zfl_PhotoLtRtLayout.prototype.onload=function(){zfl_PhotoLayout.prototype.onload.call(this);};zfl_PhotoLtRtLayout.prototype._updateNavigation=function(){var index=this.current.index;var method=zf_ProcessingMethod.StandardSmallThumbnail;
var photoList=this._photoList;var backThumb=this._navigation.backThumb;var nextThumb=this._navigation.nextThumb;if(this._backPhoto){this._backPhoto.unadvise(backThumb);
this._backPhoto=null;}if(this._nextPhoto){this._nextPhoto.unadvise(nextThumb);this._nextPhoto=null;}var self=this;if(index>0){var backPhoto=photoList.get(index-1);
if(backPhoto.loaded){this._loadThumb(backThumb,backPhoto);}else{this._backPhoto=backPhoto;backPhoto.advise(backThumb,function(){self._loadThumb(backThumb,backPhoto);
});}}if(index<photoList.length-1){var nextPhoto=photoList.get(index+1);if(nextPhoto.loaded){this._loadThumb(nextThumb,nextPhoto);}else{this._nextPhoto=nextPhoto;
nextPhoto.advise(nextThumb,function(){self._loadThumb(nextThumb,nextPhoto);});}}var loader;if(index<photoList.length-2){var photoAhead=photoList.get(index+2);if(photoAhead.loaded&&this._pool[photoAhead.id]==null){loader=new zf_PhotoLoader(photoAhead,
method);this._pool[photoAhead.id]=loader;loader.start();}}if(index>1){var photoBack=photoList.get(index-2);if(photoBack.loaded&&this._pool[photoBack.id]==null){loader=new zf_PhotoLoader(photoBack,
method);this._pool[photoBack.id]=loader;loader.start();}}};zfl_PhotoLtRtLayout.prototype._loadThumb=function(view,photo){;var method=zf_ProcessingMethod.StandardSmallThumbnail;var loader=this._pool[photo.id];
if(loader==null){loader=new zf_PhotoLoader(photo,method);this._pool[photo.id]=loader;}var context={method:method,data:photo,image:photo};view.reinit(null,"javascript:;",
null,context,photo,method);var self=this;var onload=function(state){if(state==zf_PhotoLoader.PasswordRequired){if(!loader.__zfl_onpassword){;;loader.__zfl_onpassword=function(){self._pool[photo.id]=null;
if(view.getPhoto()==photo)self._loadThumb(view,photo);};zfl_PasswordManager.subscribe(photo.access.ownerId,photo.access.realmId,loader.__zfl_onpassword);}}return false;
};view.onload=onload;view.load(loader);};;;;;function zfl_PhotoThumbsLayout(id,global,local,viewStyle){zfl_PhotoLayout.prototype.constructor.call(this,id,global,local,viewStyle);
var self=this;if(viewStyle!=zfl_PhotoViewStyle.PhotoVList){this._tabs=local.tabs;this._tabs.onselect=function(tab,selected,init){self._tabs_onselect(tab,selected,
init);};}var exifView=local.exifView;if(exifView){this._controls.list.push(exifView);exifView.onresize=this.closure(this.recalc);}this._hasQpl=local.quickPriceList!=null&&viewStyle!=zfl_PhotoViewStyle.PhotoVList;
}zfl_PhotoThumbsLayout.inherits(zfl_PhotoLayout);zfl_PhotoThumbsLayout.prototype.onrecalc=function(){zfl_PhotoLayout.prototype.onrecalc.call(this);};zfl_PhotoThumbsLayout.prototype.onload=function(){if(this._photoViewStyle!=zfl_PhotoViewStyle.PhotoVList)this._tabs.init();
zfl_PhotoLayout.prototype.onload.call(this);};zfl_PhotoThumbsLayout.prototype._tabs_onselect=function(tab,selected,init){if(selected&&!init)this.recalc();};zfl_PhotoThumbsLayout.prototype._tabs_onstretch=function(height,
stretcher){if(this._photoViewStyle==zfl_PhotoViewStyle.PhotoVList||this._tabs.get("thumbnails").selected){var grid=this._grids.photos;var cy=grid.getCellSize().cy;
if(this._hasQpl)height=cy*4;else{height=zf_stdGetClientHeight()-320;height=height*3/4;height=Math.max(height,cy*5);height=Math.ceil(height/cy)*cy;}grid.setHeight(height);
stretcher.style.height=height+"px";var info=null;if(grid.getSelectedItem()==null&&this.current.index>=0){info=grid.getLayoutInfo();grid.setPage(Math.floor(this.current.index/info.itemsPerPage));
info=null;}else{info=grid.getLayoutInfo(zf_PhotoGrid.KeepVisible);}grid.recalcLayout(info);return true;}else if(this._tabs.get("info").selected){stretcher.style.height="0px";
return true;}return false;};;;function zfl_FolderCtrLayout(id,global,local){if(zf_stdNoArgs(arguments))return;zfl_FolderLayout.prototype.constructor.call(this,id,global,local);
}zfl_FolderCtrLayout.inherits(zfl_FolderLayout);zfl_FolderCtrLayout.prototype.onload=function(){zfl_FolderLayout.prototype.onload.call(this);};zfl_FolderCtrLayout.prototype.onrecalc=function(){if(this._grids.folder&&!this._fixedWidth){var grid=this._grids.folder;
var cxCell=grid.getCellSize().cx;var padding=parseInt(this.$dom().css('paddingLeft'));var cxWindow=zf_stdGetClientWidth()-padding*2;var row=Math.floor(cxWindow/cxCell);
var width;if(this._data.folder.length<row)width=this._data.folder.length*cxCell;else width=row*cxCell;width=Math.max(width,660);this.dom("gridbox").style.width=width+"px";
}zfl_FolderLayout.prototype.onrecalc.call(this);};;function zfl_ZentoboxPlayer(id,init){zf_Control.prototype.constructor.call(this,id);zf.core.EventSource.prototype.constructor.call(this);
this._zentoboxId=init.zentoboxId;this._isEmpty=init.isEmpty;this._isFullScreen=init.isFullScreen;this._editor=init.editor;this._minWidth=init.minWidth;this._minHeight=init.minHeight;
this._data=init.data;this._decoration=init.decoration;if(init.data&&init.data.layout&&init.data.layout.themeBorder===false)this._decoration=null;if((this._player=init.player)!=null)this._player.init(this._data,
init.profile);if(init.isEmpty)$(this.closure(this._initEmpty));else $(this.closure(this._initNormal));}zfl_ZentoboxPlayer.inherits(zf_Control,zf.core.EventSource);zfl_ZentoboxPlayer.Top='top';zfl_ZentoboxPlayer.Bottom='bottom';
zfl_ZentoboxPlayer.Middle='middle';zfl_ZentoboxPlayer.prototype.resize=function(availWidth,availHeight,constraints){var size,holderSize,shadowSize=this._decoration!=null?this._decoration.shadowSize:0,
borderSize=this._decoration!=null?this._decoration.borderSize:0,extent=shadowSize+borderSize;availWidth=Math.max(Math.max(availWidth,this._minWidth)-2*extent,0);
availHeight=Math.max(Math.max(availHeight,this._minHeight)-2*extent,0);if(this._player==null){availHeight=Math.max(availHeight,360);holderSize={cx:Math.min(availWidth,
1100),cy:Math.min(availHeight,850)};}else{constraints=$.extend({},constraints,{fill:this._isFullScreen,minWidth:Math.max(this._minWidth-2*extent,0),minHeight:Math.max(this._minHeight-2*extent,
0),cellRound:function(w){return w-w%(this.cellWidth||1);}});holderSize=this._player.resize(availWidth,availHeight,constraints);holderSize={cx:Math.max(holderSize.cx,
0),cy:Math.max(holderSize.cy,0)};}if(!this._isFullScreen){size={cx:Math.max(holderSize.cx+2*extent,this._minWidth),cy:holderSize.cy+2*extent};}else{size={cx:availWidth,
cy:availHeight};}this.$().width(size.cx).height(size.cy).css('left',(-shadowSize)+'px').css('top',(-shadowSize)+'px');this.$('.zbp-holder:first').width(holderSize.cx).height(holderSize.cy).css('left',
Math.round((size.cx-holderSize.cx)/2)+'px').css('top',Math.round((size.cy-holderSize.cy)/2)+'px').find('.pv-border:first').toggle(this._decoration!=null);size.cxShadow=shadowSize*2;
if(this._decoration!=null)this._applyDecoration(this._decoration,holderSize);if(size.cx&&size.cy)this.$().addClass('zbp-ready');return size;};zfl_ZentoboxPlayer.prototype.getMinWidth=function(){return Math.max(this._minWidth,
this._player?this._player.getMinWidth():0);};zfl_ZentoboxPlayer.prototype.getMaxWidth=function(){return this._player?Math.min(3200,this._player.getMaxWidth()):0;};zfl_ZentoboxPlayer.prototype.edit=function(){this._editor.show(this._data||{});
};zfl_ZentoboxPlayer.prototype._applyDecoration=function(decorationInfo,size){var borderSize=decorationInfo.borderSize;var shadowSize=decorationInfo.shadowSize;if(shadowSize>0){this.$('.pv-shadow').remove();
var extent=shadowSize+borderSize;var left=-extent;var top=-extent;var width=size.cx+extent*2;var height=size.cy+extent*2;var shadow=decorationInfo.shadowName;var shadowType=decorationInfo.shadowType;
if(shadow!=null){this.$('.zbp-holder:first').append(zfl_DecorationInfo.getShadowHtml("pv-shadow",shadow,shadowType,shadowSize,left,top,width,height,true));}}};zfl_ZentoboxPlayer.prototype._initNormal=function(){var self=this;
if(this._editor){this._editor.on('save',function(data,callback){self.trigger('save',self._zentoboxId,data,function(error){if(error==null)location.reload();else callback&&callback(error);
});});var overlay=this.$('DIV.zbp-overlay:first'),entered=false,timer=null;function enter(){timer=null;if(!entered){entered=true;overlay.stop(true,true).find('.zbp-topbar:first').stop(true,
true);overlay.fadeIn(100,function(){$('.zbp-topbar:first',this).animate({top:-34,height:32},250);});}}function leave(){if(entered){entered=false;overlay.find('.zbp-topbar:first').stop(true,
true);overlay.stop(true,true);overlay.find('.zbp-topbar:first').animate({top:-2,height:0},200,function(){overlay.fadeOut(100);});}}this.$().mouseenter(function(){if(timer!=null)clearTimeout(timer);
timer=setTimeout(enter,10);}).mouseleave(function(){if(timer==null)timer=setTimeout(leave,200);});this.$('A.zbp-edit:first').click(function(){self._editor.show(self._data);
return false;});this.$('A.zbp-remove:first').click(function(e){e.preventDefault();e.stopPropagation();self.trigger('save',self._zentoboxId,null,function(){location.reload();
});});}};zfl_ZentoboxPlayer.prototype._initEmpty=function(){var self=this;if(this._editor){this._editor.on('save',function(data,callback){self.trigger('save',self._zentoboxId,data,
function(error){if(error==null)location.reload();else callback&&callback(error);});});var type=zf_storage.getItem('zf.layout.zentobox.delayEdit');if(type){zf_storage.removeItem('zf.layout.zentobox.delayEdit');
zf_stdDeferCall(null,function(){self._editor.show({type:type});});}}this.$('A.zbp-button').click(function(e){e.preventDefault();e.stopPropagation();var type=$(this).attr('data-type');
if(!self._editor){zf_storage.setItem('zf.layout.zentobox.delayEdit',type);zfl_ZenBar.customize();}else{self._editor.show({type:type});}});};;;function zfl_FolderPortfolioLayout(id,
global,local){zfl_FolderLayout.prototype.constructor.call(this,id,global,local);this._customizer=global.customizer;this._player=local.player;this._column=local.column;
this._padding=parseInt(this.$().css("paddingLeft"));;this._slideshowOffset=local.slideshowOffset?local.slideshowOffset:0;;this.cyMinFooter=0;}zfl_FolderPortfolioLayout.inherits(zfl_FolderLayout);
zfl_FolderPortfolioLayout.prototype.onrecalc=function(){zfl_FolderLayout.prototype.onrecalc.call(this);};zfl_FolderPortfolioLayout.prototype.onload=function(){zfl_FolderLayout.prototype.onload.call(this);var player=this._player,
customizer=this._customizer;};zfl_FolderPortfolioLayout.prototype._onstretch=function(height,stretcher){var availWidth=this.$dom("frame").width()-(this._slideshowOffset+this._padding*2);
var availHeight=height;if(this._fixedWidth){availWidth=Math.min(availWidth,944-this._slideshowOffset);availHeight=10000;}var cellSize=1;if(this._grids.folder)cellSize=this._grids.folder.getCellSize();
var size=this._player.resize(availWidth,availHeight,{cellWidth:cellSize.cx});this.$dom().width(size.cx-size.cxShadow+this._slideshowOffset);stretcher.style.minHeight=size.cy+"px";
if(this._grids.folder!=null)this._grids.folder.recalcLayout();return true;};;;function zfl_PhotoSetCtrLayout(id,global,local){if(zf_stdNoArgs(arguments))return;zfl_PhotoSetLayout.prototype.constructor.call(this,
id,global,local);}zfl_PhotoSetCtrLayout.inherits(zfl_PhotoSetLayout);zfl_PhotoSetCtrLayout.prototype.onrecalc=function(){zfl_PhotoSetLayout.prototype.onrecalc.call(this);};zfl_PhotoSetCtrLayout.prototype.onload=function(){zfl_PhotoSetLayout.prototype.onload.call(this);
};;var Sylvester={version:'0.1.3',precision:1e-6};function Matrix(){}Matrix.prototype={e:function(i,j){if(i<1||i>this.elements.length||j<1||j>this.elements[0].length){return null;
}return this.elements[i-1][j-1];},map:function(fn){var els=[],ni=this.elements.length,ki=ni,i,nj,kj=this.elements[0].length,j;do{i=ki-ni;nj=kj;els[i]=[];do{j=kj-nj;
els[i][j]=fn(this.elements[i][j],i+1,j+1);}while(--nj);}while(--ni);return Matrix.create(els);},multiply:function(matrix){if(!matrix.elements){return this.map(function(x){return x*matrix;
});}var returnVector=matrix.modulus?true:false;var M=matrix.elements||matrix;if(typeof(M[0][0])=='undefined'){M=Matrix.create(M).elements;}if(!this.canMultiplyFromLeft(M)){return null;
}var ni=this.elements.length,ki=ni,i,nj,kj=M[0].length,j;var cols=this.elements[0].length,elements=[],sum,nc,c;do{i=ki-ni;elements[i]=[];nj=kj;do{j=kj-nj;sum=0;nc=cols;
do{c=cols-nc;sum+=this.elements[i][c]*M[c][j];}while(--nc);elements[i][j]=sum;}while(--nj);}while(--ni);M=Matrix.create(elements);return returnVector?M.col(1):M;
},x:function(matrix){return this.multiply(matrix);},canMultiplyFromLeft:function(matrix){var M=matrix.elements||matrix;if(typeof(M[0][0])=='undefined'){M=Matrix.create(M).elements;
}return(this.elements[0].length==M.length);},setElements:function(els){var i,elements=els.elements||els;if(typeof(elements[0][0])!='undefined'){var ni=elements.length,
ki=ni,nj,kj,j;this.elements=[];do{i=ki-ni;nj=elements[i].length;kj=nj;this.elements[i]=[];do{j=kj-nj;this.elements[i][j]=elements[i][j];}while(--nj);}while(--ni);
return this;}var n=elements.length,k=n;this.elements=[];do{i=k-n;this.elements.push([elements[i]]);}while(--n);return this;}};Matrix.create=function(elements){var M=new Matrix();
return M.setElements(elements);};$M=Matrix.create;(function($){if(!$.cssHooks){throw("jQuery 1.4.3+ is needed for this plugin to work");return;}var prop="transform",
vendorProp,supportedProp,supports3d,supports2d,supportsFilter,capProp=prop.charAt(0).toUpperCase()+prop.slice(1),prefixes=["Moz","Webkit","O","MS"],div=document.createElement("div");
if(prop in div.style){supportedProp=prop;supports3d=div.style.perspective!==undefined;}else{for(var i=0;i<prefixes.length;i++){vendorProp=prefixes[i]+capProp;if(vendorProp in div.style){supportedProp=vendorProp;
if((prefixes[i]+'Perspective')in div.style){supports3d=true;}else{supports2d=true;}break;}}}if(!supportedProp){supportsFilter=('filter' in div.style);supportedProp='filter';
}div=null;$.support[prop]=supportedProp;var transformProperty=supportedProp;var properties={rotateX:{defaultValue:0,matrix:function(a){if(supports3d){return $M([[1,
0,0,0],[0,Math.cos(a),Math.sin(-a),0],[0,Math.sin(a),Math.cos(a),0],[0,0,0,1]]);}else{return $M([[1,0,0],[0,1,0],[0,0,1]]);}}},rotateY:{defaultValue:0,matrix:function(b){if(supports3d){return $M([[Math.cos(b),
0,Math.sin(b),0],[0,1,0,0],[Math.sin(-b),0,Math.cos(b),0],[0,0,0,1]]);}else{return $M([[1,0,0],[0,1,0],[0,0,1]]);}}},rotateZ:{defaultValue:0,matrix:function(c){if(supports3d){return $M([[Math.cos(c),
Math.sin(-c),0,0],[Math.sin(c),Math.cos(c),0,0],[0,0,1,0],[0,0,0,1]]);}else{return $M([[Math.cos(c),Math.sin(-c),0],[Math.sin(c),Math.cos(c),0],[0,0,1]]);}}},scale:{defaultValue:1,
matrix:function(s){if(supports3d){return $M([[s,0,0,0],[0,s,0,0],[0,0,s,0],[0,0,0,1]]);}else{return $M([[s,0,0],[0,s,0],[0,0,1]]);}}},translateX:{defaultValue:0,
matrix:function(tx){if(supports3d){return $M([[1,0,0,0],[0,1,0,0],[0,0,1,0],[tx,0,0,1]]);}else{return $M([[1,0,0],[0,1,0],[tx,0,1]]);}}},translateY:{defaultValue:0,
matrix:function(ty){if(supports3d){return $M([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,ty,0,1]]);}else{return $M([[1,0,0],[0,1,0],[0,ty,1]]);}}},translateZ:{defaultValue:0,
matrix:function(tz){if(supports3d){return $M([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,tz,1]]);}else{return $M([[1,0,0],[0,1,0],[0,0,1]]);}}}};var applyMatrix=function(elem){var transforms=$(elem).data('transforms');
var tM;if(supports3d){tM=$M([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);}else{tM=$M([[1,0,0],[0,1,0],[0,0,1]]);}for(var name in properties){tM=tM.x(properties[name].matrix(transforms[name]||properties[name].defaultValue))}if(supports3d){s="matrix3d(";
s+=tM.e(1,1).toFixed(10)+","+tM.e(1,2).toFixed(10)+","+tM.e(1,3).toFixed(10)+","+tM.e(1,4).toFixed(10)+",";s+=tM.e(2,1).toFixed(10)+","+tM.e(2,2).toFixed(10)+","+tM.e(2,
3).toFixed(10)+","+tM.e(2,4).toFixed(10)+",";s+=tM.e(3,1).toFixed(10)+","+tM.e(3,2).toFixed(10)+","+tM.e(3,3).toFixed(10)+","+tM.e(3,4).toFixed(10)+",";s+=tM.e(4,
1).toFixed(10)+","+tM.e(4,2).toFixed(10)+","+tM.e(4,3).toFixed(10)+","+tM.e(4,4).toFixed(10);s+=")";}else if(supports2d){s="matrix(";s+=tM.e(1,1).toFixed(10)+","+tM.e(1,
2).toFixed(10)+",";s+=tM.e(2,1).toFixed(10)+","+tM.e(2,2).toFixed(10)+",";s+=tM.e(3,1).toFixed(10)+"px,"+tM.e(3,2).toFixed(10)+'px';s+=")";}else if(supportsFilter){s="progid:DXImageTransform.Microsoft.";
s+="Matrix(";s+="M11="+tM.e(1,1).toFixed(10)+",";s+="M12="+tM.e(1,2).toFixed(10)+",";s+="M21="+tM.e(2,1).toFixed(10)+",";s+="M22="+tM.e(2,2).toFixed(10)+",";s+="SizingMethod='auto expand'";
s+=")";elem.style.top=tM.e(3,1);elem.style.left=tM.e(3,2);}elem.style[transformProperty]=s;};var transformValue=function(elem,value,unit){if(!unit)return typeof(value)=='string'?parseFloat(value):value;
if(unit=='px')return value;if(unit=='%')return jQuery(elem).offsetParent().width()*value/100;};var hookFor=function(name){$.fx.step[name]=function(fx){$.cssHooks[name].set(fx.elem,
transformValue(fx.elem,fx.now,fx.unit));};return{get:function(elem,computed,extra){var transforms=$(elem).data('transforms');if(transforms===undefined){transforms={};
$(elem).data('transforms',transforms);}return transforms[name]||properties[name].defaultValue;},set:function(elem,value){var transforms=$(elem).data('transforms');
if(transforms===undefined)transforms={};var propInfo=properties[name];if(typeof propInfo.apply==='function'){transforms[name]=propInfo.apply(transforms[name]||propInfo.defaultValue,
value);}else{transforms[name]=value}$(elem).data('transforms',transforms);applyMatrix(elem);}}};if(transformProperty){for(var name in properties){$.cssHooks[name]=hookFor(name);
$.cssNumber[name]=true;}}})(jQuery);;;function zfl_Slideshow(id,minWidth,minHeight,maxWidth,maxHeight,slideshowvars,photoSet,psToken,defaultOwner,fullscreen,photoList,embedded,
autoResize){zfl_Control.prototype.constructor.call(this,id);this.id=id;var self=this;this.minWidth=minWidth;this.minHeight=minHeight;this.maxWidth=maxWidth;this.maxHeight=maxHeight;
this._embedded=!!embedded;this._delay=slideshowvars.delay;this._loop=slideshowvars.loop=='1';this._allowcontrols=slideshowvars.enable_controls=='1'||fullscreen;this._random=slideshowvars.random=='1';
this._makeFullScreen=fullscreen;this._skin='dark';if(slideshowvars.skin)this._skin=slideshowvars.skin.toLowerCase()=='black'?'dark':'light';this._transition=parseInt(slideshowvars.transition);
this._delay=parseInt(slideshowvars.delay)*1000;this._autostart=slideshowvars.autostart=='1';this._skipProtectedPhotos=this._embedded;this._hasShrunk=!!photoList;
defaultOwner=defaultOwner?defaultOwner:photoSet.owner;this._photoList=this._hasShrunk?photoList:new zfl_PhotoList(0,200,1000,photoSet.id,psToken,photoSet.photoChangeNumber);
this._photoList.setDefaults(photoSet,defaultOwner);this._photoList.onshrink=function(){self._hasShrunk=true;self._initRandom(true);return self._hasShrunk;};this._photoCount=function(){return this._photoList.length;
};this._loaderPool={};this._currentPhoto=null;this._currentIndex=-1;this._swipeBack=100;this._swipeForward=-this._swipeBack;this._hidden={photoLoader:null,$view:null};
this._current={photoLoader:null,$view:null};this._currentAnim={photoLoader:null,direction:0,animOverride:null,exec:function(){self._animate(this);}};this._queuedAnim={photoLoader:null,
direction:0,animOverride:null,exec:function(){self._animate(this);}};this._randomOrder=[];this._randomPos=-1;this._compatibility=true;this.currentDirection=zfl_Slideshow.Forward;
if(autoResize){var onResize=(function(ss){var sizingContainer=ss.$dom().parent();return function(){ss.maxWidth=sizingContainer.width();ss.resize(ss.maxWidth,ss.maxHeight);
};})(this);$(window).bind('orientationchange',onResize);}}zfl_Slideshow.inherits(zfl_Control);zfl_Slideshow.PageLength=80;zfl_Slideshow.Forward=1;zfl_Slideshow.Backward=-1;zfl_Slideshow.ControlsHeight=60;zfl_Slideshow.ControlsWidth=280;zfl_Slideshow.NoTransition=0;
zfl_Slideshow.Random=1;zfl_Slideshow.FadeToBlack=2;zfl_Slideshow.FadeToWhite=3;zfl_Slideshow.CrossFade=4;zfl_Slideshow.Slide=5;zfl_Slideshow.AnimationEndEvent='webkitAnimationEnd';zfl_Slideshow.AnimationStartEvent='webkitAnimationStart';zfl_Slideshow.prototype.init=function(){;
var self=this;if(this._embedded){this.maxWidth=$('body:first').width();this.maxHeight=$('body:first').height();;if(this.maxWidth==0||this.maxHeight==0){;this.maxHeight=this.maxWidth=-1;
setTimeout(this.closure(this.init),1000);return;}this.resize(this.maxWidth,this.maxHeight);}else if(this.maxWidth==-1||this.maxHeight==-1){this.maxWidth=this.$dom().width();
this.maxHeight=this.$dom().height();this._skipProtectedPhotos=true;}if(this._makeFullScreen){var height=window.innerHeight;var width=window.innerWidth;$('html').css('overflow',
'hidden');$('body:first').css({'background-color':'#000','overflow-x':'hidden','height':height,'width':width,'min-width':0});this.$dom().css('overflow','hidden');
this.maxHeight=height;this.maxWidth=width;this.resize(width,height);$('body:first').bind('resize',function(e){height=window.innerHeight;width=window.innerWidth;self.maxHeight=height;
self.maxWidth=width;$('body:first').width(width).height(height);self.resize(width,height);});}this._showLoading(true);if(this._autostart)this._playing=true;if(this._allowcontrols)this._setupControls();
this._current.$view=this.$dom('viewholder-1');this._hidden.$view=this.$dom('viewholder-2');if(this._autostart&&!this._random){;this.play();}else if(this._random){;
var photo=this._photoList.get(0);if(!photo.loaded){;photo.advise(this,function(){;photo.unadvise(self);self._initRandom();if(self._autostart)self.play();else self.next();
});}else{;if(self._autostart)self.play();else self.next();}}else{;this.seek(0);}};zfl_Slideshow.prototype.play=function(){;if(this._playing){this.next();}};zfl_Slideshow.prototype.resume=function(){if(!this._playing){this._playing=true;
if(this._playTimeout)clearTimeout(this._playTimeout);this._playTimeout=setTimeout(this.closure(this.play),this._delay);}};zfl_Slideshow.prototype.pause=function(){this._playing=false;
this._showLoading(false);this._queuedAnim.photoLoader=null;this._queuedAnim.animOverride=null;this._currentAnim.photoLoader=null;clearTimeout(this._playTimeout);
clearTimeout(this._animTimeout);clearTimeout(this._loadingTimeout);};zfl_Slideshow.prototype.next=function(animOverride){var nextIndex=this._getNextIndex();if(nextIndex==this._currentIndex)return;
var self=this;setTimeout(function(){self.seek(nextIndex,zfl_Slideshow.Forward,animOverride);},1);};zfl_Slideshow.prototype.back=function(animOverride){var prevIndex=this._getPrevIndex();
if(this._currentIndex==prevIndex)return;var self=this;setTimeout(function(){self.seek(prevIndex,zfl_Slideshow.Backward,animOverride);},1);};zfl_Slideshow.prototype.seek=function(index,
direction,animOverride){;clearTimeout(this._animTimeout);clearTimeout(this._loadingTimeout);clearTimeout(this._playTimeout);var self=this;if(this._currentPhoto)this._currentPhoto.unadvise(this);
this._isLoading=true;this._loadingTimeout=setTimeout(function(){self._showLoading(true);},500);this._queuedAnim.photoLoader=null;if(!direction){if(this._previousIndex<this._currentIndex)direction=zfl_Slideshow.Forward;
else direction=zfl_Slideshow.Backward;}var photo=this._photoList.get(index);if(!photo){var pos=this._randomPos;var reinit=function(){self._initRandom(true,function(){if(pos<self._randomOrder.length)self.seek(self._randomOrder[pos]);
else{pos=self._randomOrder.length-1;self.seek(self._randomOrder[pos]);}});};setTimeout(reinit,500);return;}this._previousIndex=this._currentIndex;this._currentIndex=index;
this._currentPhoto=photo;if(photo.loaded){this._photo_onseek(photo,direction,animOverride);}else{photo.advise(this,function(){photo.unadvise(self);self._photo_onseek(photo,
direction,animOverride);},function(){if(self._random){photo.unadvise(self);setTimeout(function(){self.seek(self._randomOrder[self._randomPos],direction,animOverride);
},1);}});}if(this._photoCount()>1)self._prefetch(index+1,zfl_Slideshow.Forward,8);};zfl_Slideshow.prototype.resize=function(width,height){;;this.$dom().width(width).height(height);
if(this._makeFullScreen){var marginT=Math.floor((window.innerHeight-height)/2);this.$dom().css('margin-top',marginT);}if(this.$dom('controls').length){this.$dom('controls').css({'left':Math.floor(width/2)-100,
'top':height-60});}if(this._current.photoLoader){this._updateView(this._current.photoLoader,this._current.$view.find('.zfl-ss-view'));}if(this._hidden.photoLoader){this._updateView(this._hidden.photoLoader,
this._hidden.$view.find('.zfl-ss-view'));}};zfl_Slideshow.createHtml=function(id,classes,bgcolor,width,height,isFullScreen){var isTransparent=bgcolor=='transparent';bgcolor=bgcolor=='0'?'#000':bgcolor;
if(isFullScreen){width=document.documentElement.clientWidth;height=document.documentElement.clientHeight;}var styles=['width:',width,'px; ','height:',height,'px; ',
'overflow: hidden;'];if(!isTransparent)styles.push('background-color:',bgcolor,';');var passwordPopup=['<div class="pv-password none" name="password-popup" style="height: 100%; width: 100%;">',
'<div class="password-box popup-border1 popup-color1 popup-bgcolor1">','<div class="text">Content protected with password.</div>','<div class="separator separator-border1"></div>',
'<div class="item none" name="hint">','<div class="prompt">Hint:</div>','<div class="password-hint-text"></div>','</div>','<div class="form" name="password-form">',
'<div class="item">','<div class="prompt">Password:</div>','<input name="password-input" type="password" />','<a name="password-go">Go</a>','</div>','</div>','<div class="incorrect none" name="password-incorrect">',
' Incorrect password','</div>','</div>','</div>'].join('');var html=['<div id="',id,'" ',' class="',classes,'"',' style="',styles.join(''),'">','<img class="nullgif" src="/zf/img/null.gif" />',
'<div id="',id,'-viewholder-1" class="zfl-ss zfl-ss-viewholder">','<div class="zfl-ss zfl-ss-view"><img/></div>',passwordPopup,'</div>','<div id="',id,'-viewholder-2" class="zfl-ss zfl-ss-viewholder none">',
'<div class="zfl-ss zfl-ss-view"><img/></div>',passwordPopup,'</div>','<div id="',id,'-loading" class="zfl-ss zfl-ss-loading">Loading...</div>','</div>'];return html.join('');
};zfl_Slideshow.prototype._updateView=function(photoLoader,$view){;;;if(photoLoader.state==zf_PhotoLoader.PasswordRequired){$view.css({'margin-top':0,'margin-left':0,'width':this.$dom().width(),
'height':this.$dom().height(),'background-image':'none'});this._showPassword($view.parent(),photoLoader,true,false);return;}this._showPassword($view.parent(),null,
false,false);var method=photoLoader.getMethod();var imgHeight,imgWidth,viewHeight,viewWidth;viewHeight=Math.min(this.maxHeight,method.cy);viewWidth=Math.min(this.maxWidth,
method.cx);if(method.cx>method.cy){imgWidth=Math.min(viewWidth,method.cx);imgHeight=Math.floor(imgWidth*(photoLoader.getPhoto().height/photoLoader.getPhoto().width));
}else{imgHeight=Math.min(viewHeight,method.cy);imgWidth=Math.floor(imgHeight*(photoLoader.getPhoto().width/photoLoader.getPhoto().height));}var marginLeft=Math.floor((this.$dom().width()-imgWidth)/2);
var marginTop=Math.floor((this.$dom().height()-imgHeight)/2);$view.css({'margin-top':marginTop,'margin-left':marginLeft,'width':viewWidth,'height':viewHeight});$view.find('img:first').attr('src',
photoLoader.src).css({'width':imgWidth,'height':imgHeight,'background-size':[imgWidth,'px ',imgHeight,'px'].join(''),'background-repeat':'no-repeat'});};zfl_Slideshow.prototype._showLoading=function(show){;
if(show)this.$dom('loading').fadeIn(500);else this.$dom('loading').fadeOut(500);};zfl_Slideshow.prototype._getNextIndex=function(loopOverride){if(this._random){return this._getNextRandom(loopOverride);
}if(this._currentIndex<this._photoCount()-1)return this._currentIndex+1;else if(this._loop||loopOverride)return 0;return this._currentIndex;};zfl_Slideshow.prototype._getNextRandom=function(loopOverride){var initRand=this._photoCount()>this._randomOrder.length;
if(this._randomPos<this._randomOrder.length){if(this._randomOrder[this._randomPos]!=this._currentIndex)return this._randomOrder[this._randomPos];if(this._randomPos+1<this._randomOrder.length)return this._randomOrder[++this._randomPos];
else if(this._loop&&!initRand){this._randomPos=0;return this._randomOrder[this._randomPos];}else if(!initRand)return this._currentIndex;}if(initRand){if(!this._hasShrunk){var photo=this._photoList.get(this._randomOrder.length+1);
if(!photo.loaded){var self=this;photo.advise(this,function(){photo.unadvise(self);self._initRandom(true);self.next();});return this._currentIndex;}else{this._initRandom(true);
}}else{this._initRandom(true);}if(this._randomPos<this._randomOrder.length){return this._randomOrder[++this._randomPos];}}if(this._loop||loopOverride){return this._randomPos=0;
}return this._randomPos=0;};zfl_Slideshow.prototype._getPrevIndex=function(loopOverride){if(this._random)return this._getPrevRandom(loopOverride);if(this._currentIndex>0)return this._currentIndex-1;
else if(this._hasShrunk&&(this._loop||loopOverride))return this._photoCount()-1;return 0;};zfl_Slideshow.prototype._getPrevRandom=function(loopOverride){var previous;if(this._randomPos>0){previous=this._randomOrder[--this._randomPos];
if(previous==this._currentIndex)return this._getPrevRandom(loopOverride);return previous;}else if(this._hasShrunk&&this._loop){this._randomPos=this._randomOrder.length-1;
previous=this._randomOrder[this._randomPos];if(previous==this._currentIndex)return this._prevRandom(loopOverride);return previous;}return this._currentIndex;};zfl_Slideshow.prototype._initRandom=function(reinit,
callback){;if(!reinit){this._randomOrder=[];this._randomPos=0;}var start=this._randomOrder.length;var end;if(this._hasShrunk){end=this._photoCount();}else{end=start;
}var temp;var rand;var tempArr=[];var i,j;if(!reinit||!this._hasShrunk||(this._hasShrunk&&end>start)){for(i=start;i<end;i++){tempArr[i]=i;}var initial=end-start;
for(i=start,j=0;i<end;i++,j++){rand=start+Math.floor(Math.random()*(initial-j));rand=Math.max(rand,start);temp=tempArr.splice(rand,1)[0];this._randomOrder[i]=temp;
}if(callback)callback();}else{var len=this._randomOrder.length;var currentIndex=this._currentIndex;tempArr=this._randomOrder;this._randomOrder=[];for(i=0;i<len;i++){temp=tempArr.splice(0,
1)[0];if(temp<end)this._randomOrder.push(temp);}if(!currentIndex)this._randomPos=0;else{this._randomPos=this._randomOrder.indexOf(currentIndex);if(this._randomOrder.length>0)this._randomPos++;
}if(callback)callback();}};zfl_Slideshow.prototype._photo_onseek=function(photo,direction,animOverride){var loader=this._getLoader(photo);this._currentAnim.photoLoader=loader;
this._currentAnim.direction=direction;this._currentAnim.animOverride=animOverride;loader.start();};zfl_Slideshow.prototype._photoloader_onload=function(loader){var self=this;
if(!this._currentAnim.photoLoader)return;if(this._currentAnim.photoLoader.getPhoto().id==loader.getPhoto().id&&this._currentAnim.photoLoader.getMethod().code==loader.getMethod().code){if(this._skipProtectedPhotos){if(loader.state!=zf_PhotoLoader.Complete){if(this._currentIndex==0&&this._photoCount()==1){this._showLoading(false);
clearTimeout(this._loadingTimeout);return;}if(this._currentAnim.direction==zfl_Slideshow.Forward&&(this._currentIndex<this._photoCount()-1||this._loop)||(!this._loop&&this._currentIndex==0)){setTimeout(function(){self.next(self._currentAnim.animOverride);
},1);}else{setTimeout(function(){self.back(self._currentAnim.animOverride);},1);}return;}}clearTimeout(this._loadingTimeout);this._showLoading(false);if(!this._animating)this._currentAnim.exec();
else{this._queuedAnim.photoLoader=this._currentAnim.photoLoader;this._queuedAnim.direction=this._currentAnim.direction;}this._currentAnim.photoLoader=null;this._currentAnim.direction=0;
}else if(this._currentAnim.photoLoader.getPhoto().id==loader.getPhoto().id){clearTimeout(this._loadingTimeout);this._showLoading(false);}};zfl_Slideshow.prototype._animate=function(animObject){if(animObject.photoLoader!=null){var loader=animObject.photoLoader;
animObject.photoLoader=null;this._show(loader,animObject.direction,animObject.animOverride);animObject.animOverride=null;}};zfl_Slideshow.prototype._ontouchstart=function(e){if(e.originalEvent.touches.length!=1)return;
if(this._ctrFadeTimeout){clearTimeout(this._ctrFadeTimeout);this._ctrFadeTimeout=null;}var self=this;this._ctrShowTimeout=setTimeout(function(){if(this._touchended)return;
var opacity;if(self._ctrShown){self._ctrShown=false;opacity='0.00';}else{self._ctrShown=true;opacity='0.70';}self.$dom('controls').animate({'opacity':opacity},400,
'swing');},1500);this._touchStart={x:e.originalEvent.targetTouches[0].screenX,y:e.originalEvent.targetTouches[0].screenY,playing:false,time:new Date().getTime()};
this._touchStart.playing=this._playing;this._touchMove={x:0,y:0,dx:0,dy:0};};zfl_Slideshow.prototype._ontouchmove=function(e){if(e.originalEvent.touches.length!=1)return;this.pause();
var moveX=e.originalEvent.targetTouches[0].screenX-this._touchStart.x;var moveY=e.originalEvent.targetTouches[0].screenY-this._touchStart.y;this._touchMove.x=moveX;
this._touchMove.y=moveY;if(Math.abs(moveX)>10&&Math.abs(moveY)<10){e.preventDefault();if(this._ctrShowTimeout)clearTimeout(this._ctrShowTimeout);this.$dom('controls').stop(true,
true).css('opacity','0.0');this._ctrShown=false;}this._current.$view.css('translateX',this._touchMove.x);};zfl_Slideshow.prototype._ontouchend=function(e){this._touchended=true;
if(e.originalEvent.touches.length!=0)return;var x=this._touchMove.x;var toIndex;var self=this;var $mView=this._current.$view;if(x>this._swipeBack)toIndex=this._getPrevIndex();
else toIndex=this._getNextIndex();var playing=this._touchStart.playing;if(this.onclick&&this._currentPhoto.id&&this._touchMove&&Math.abs(this._touchMove.x)<3&&Math.abs(this._touchMove.y)<3){var diff=new Date().getTime()-this._touchStart.time;
if(diff<500)this.onclick.call(this,this._currentPhoto.id);}this._touchMove={x:0,y:0};this._touchStart={x:0,y:0,playing:false};this._fadeControls=true;if(this._ctrShown){this._ctrFadeTimeout=setTimeout(function(){self._ctrShown=false;
self.$dom('controls').animate({'opacity':'0.00'},600);},7000);}if(x<this._swipeForward&&toIndex!=this._currentIndex){this._playing=playing;setTimeout(function(){self.seek(toIndex,
1,zfl_Slideshow.Slide);},1);if(this._compatibility){$mView.animate({'translateX':-this.$dom().width()},500);return;}$mView.bind(zfl_Slideshow.AnimationEndEvent,function(){$mView.unbind(zfl_Slideshow.AnimationEndEvent);
$mView.removeClass('zfl-ss-anim-slide-to-left-fast').addClass('none').css('translateX',0);},false);$mView.addClass('zfl-ss-anim-slide-to-left-fast');}else if(x>this._swipeBack&&toIndex!=this._currentIndex){this._playing=playing;
setTimeout(function(){self.seek(toIndex,-1,zfl_Slideshow.Slide);},1);if(this._compatibility){$mView.animate({'translateX':this.$dom().width()},500);return;}$mView.bind(zfl_Slideshow.AnimationEndEvent,
function(){$mView.unbind(zfl_Slideshow.AnimationEndEvent);$mView.removeClass('zfl-ss-anim-slide-to-right-fast').addClass('none');},false);$mView.addClass('zfl-ss-anim-slide-to-right-fast');
}else if(Math.abs(x)>5){if(this._compatibility){$mView.css({'translateX':0});}else{$mView.bind(zfl_Slideshow.AnimationEndEvent,function(){$mView.unbind(zfl_Slideshow.AnimationEndEvent);
$mView.css({'translateX':0});$mView.removeClass('zfl-ss-anim-slide-from-side-fast');},false);$mView.addClass('zfl-ss-anim-slide-from-side-fast');}}else{$mView.css({'translateX':0});
}};zfl_Slideshow.prototype._prefetch=function(index,increment,range){var self=this;if(!range)range=0;if(index<0)index=this._photoCount()-1;else if(index==this._photoCount())index=0;
var photo=this._photoList.get(index);var loader=null;if(index==this._currentIndex){setTimeout(function(){self._prefetch(index+increment,increment,range-1);},1);return;
}if(photo.loaded){loader=this._getLoader(photo,null);loader.start();if(range>0)setTimeout(function(){self._prefetch(index+increment,increment,range-1);},1);}else{photo.advise(this,
function(){photo.unadvise(self);loader=self._getLoader(photo,null);loader.start();if(range>0)setTimeout(function(){self._prefetch(index+increment,increment,range-1);
},1);});}};zfl_Slideshow.prototype._getLoader=function(photo){;var self=this;var width=Math.min(this.maxWidth,this.$dom().width());var height=Math.min(this.maxHeight,this.$dom().height());
var method=photo.pickScaledMethod(width,height);var key=zfl_Slideshow.__getPoolKey(photo,method);var loader=this._loaderPool[key];if(!!loader)return loader;loader=new zf_PhotoLoader(photo,
method);loader.onload=function(state,src){if(state==zf_PhotoLoader.Complete){loader.src=src;}self._photoloader_onload(loader);};self._loaderPool[key]=loader;return loader;
};zfl_Slideshow.__getPoolKey=function(photo,method){return['-',photo.id,'-',method.code].join('');};zfl_Slideshow.prototype._renderControls=function(){var ctrlStyles=['top: ',this.$dom().height()-zfl_Slideshow.ControlsHeight,
'px;','left:',Math.floor(this.$dom().width()/2)-Math.floor(zfl_Slideshow.ControlsWidth/2),'px;'].join('');var playStyles='';var pauseStyles='';if(this._playing){playStyles='display: none;';
}else{pauseStyles='display: none;';}var html=['<div id="',this.id,'-controls" class="zfl-ss-controls zfl-ss-controls-',this._skin,'" style="',ctrlStyles,'">','<div class="zfl-ss-play-',
this._skin,' zfl-ss-button" style="',playStyles,'"/>','<div class="zfl-ss-pause-',this._skin,' zfl-ss-button" style="',pauseStyles,'"/>','<div class="zfl-ss-next-',
this._skin,' zfl-ss-button"/>','<div class="zfl-ss-back-',this._skin,' zfl-ss-button"/>','</div>'].join('');this.$dom().append(html);};zfl_Slideshow.prototype._setupControls=function(){var self=this;
this._renderControls();this._controlsTouched=0;this._ctrShown=true;var $controls=self.$dom('controls'),$play=$controls.find('.zfl-ss-play-'+self._skin),$pause=$controls.find('.zfl-ss-pause-'+self._skin),
$forward=$controls.find('.zfl-ss-next-'+self._skin),$back=$controls.find('.zfl-ss-back-'+self._skin);$controls.bind('touchstart',function(e){$controls.stop(true,
true).css('opacity','0.70');self._controlsTouched=new Date().getTime();});var onPlay=function(e){self._playing=true;self.play();$play.css({'display':'none'});$pause.css({'display':'block'});
};var onPause=function(e){self.pause();$pause.css({'display':'none'});$play.css({'display':'block'});};$play.click(onPlay);$pause.click(onPause);$forward.click(function(){self.next();
});$back.click(function(){self.back();});this.$dom().bind('touchstart',self.closure(self._ontouchstart));this.$dom().bind('touchmove',self.closure(self._ontouchmove));
this.$dom().bind('touchend',self.closure(self._ontouchend));$controls.animate({'opacity':'0.00'},1000);this._ctrShown=false;this._controlsTouched=0;};zfl_Slideshow.prototype._setupPhoneControls=function(){var self=this;
var html=['<div id="',this.id,'-phone-controls" class="zflc-controls none">','<div class="zflc-play none zflc-play-',this._skin,'"></div>','<div class="zflc-pause none zflc-pause-',
this._skin,'"></div>','</div>'].join('');this.$dom().append(html);var $controls=this.$dom('phone-controls');var anim=function(play,callback){$controls.find('.zflc-pause').toggleClass('none',
play);$controls.find('.zflc-play').toggleClass('none',!play);$controls.removeClass('none').css('opacity','0.80');setTimeout(function(){$controls.stop(true,true).animate({'opacity':'0.00'},
200,'linear',function(){$(this).addClass('none').css({'opacity':'0.80'});setTimeout(function(){callback.call(self);},1);});},800);};var tap=function(e){e.preventDefault();
e.stopImmediatePropagation();if(self._playing){self.pause();anim(false,zf_stdTrue);}else{self._playing=true;anim(true,self.play);}$(this).one('click',tap);};this.$dom().one('click',
tap);};zfl_Slideshow.prototype._show=function(photoLoader,direction,animOverride){if(this._allowcontrols)this.$dom().unbind('touchstart').unbind('touchmove').unbind('touchend');
clearTimeout(this._animTimeout);clearTimeout(this._playTimeout);this._animating=true;var transition=animOverride?animOverride:this._transition;if(transition==zfl_Slideshow.Random){transition=2+Math.floor(4*Math.random());
transition=transition<=zfl_Slideshow.Slide?transition:zfl_Slideshow.CrossFade;}if(this._compatibility){this.__compatibilityAnimation(photoLoader,direction,transition);
}else{switch(transition){case zfl_Slideshow.FadeToBlack:this.__fadeToColorAnimation(photoLoader,direction,'black');break;case zfl_Slideshow.FadeToWhite:this.__fadeToColorAnimation(photoLoader,
direction,'white');break;case zfl_Slideshow.CrossFade:this.__crossFadeAnimation(photoLoader,direction);break;case zfl_Slideshow.Slide:this.__slideAnimation(photoLoader,
direction);break;default:this.__noAnimation(photoLoader,direction);break;}}if(this.onslide)this.onslide(photoLoader.getPhoto().id,this._currentIndex);};zfl_Slideshow.prototype.__compatibilityAnimation=function(photoLoader,
direction,transition){if(transition==zfl_Slideshow.NoTransition){this.__noAnimation(photoLoader,direction);return;}this.__compatibilitySlide(photoLoader,direction);
};zfl_Slideshow.prototype.__slideAnimation=function(photoLoader,direction){var self=this;this._hidden.photoLoader=photoLoader;var toDirection=direction==zfl_Slideshow.Forward?'left':'right';
var fromDirection=direction==zfl_Slideshow.Forward?'right':'left';var $from=this._current.$view;var $to=this._hidden.$view;var temp=this._current;this._current=this._hidden;
this._hidden=temp;this._updateView(photoLoader,$to.find('.zfl-ss-view'));$to.addClass('zfl-ss-viewholder-'+fromDirection);var cleanedUp=false;var ensureCleanup=setTimeout(function(){if(!cleanedUp){cleanedUp=true;
self._animCleanup();}},1250);$to.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.preventDefault();e.stopPropagation();if(!cleanedUp){clearTimeout(ensureCleanup);
cleanedUp=true;self._animCleanup();}$to.unbind(zfl_Slideshow.AnimationEndEvent);},false);$to.addClass('zfl-ss-anim-slide-to-'+toDirection).removeClass('none');if(!$from.is('.none')&&!$from.is('.zfl-ss-anim-slide-to-left-fast')&&!$from.is('.zfl-ss-anim-slide-to-right-fast'))$from.addClass('zfl-ss-anim-slide-to-'+toDirection);
};zfl_Slideshow.prototype.__compatibilitySlide=function(photoLoader,direction,duration){duration=duration?duration:500;var $from=this._current.$view;var $to=this._hidden.$view;
var temp=this._current;this._current=this._hidden;this._hidden=temp;this._updateView(photoLoader,$to.find('.zfl-ss-view'));var width=this.$dom().width();$to.css('translateX',
direction*width).removeClass('none');var self=this;var complete=function(){$from.addClass('none');self._animCleanup();};$to.stop(true,true).animate({'translateX':0},
duration,null,complete);$from.stop(true,true).animate({'translateX':-direction*width},duration,null,complete);};zfl_Slideshow.prototype.__fadeToColorAnimation=function(photoLoader,
direction,color){var self=this;this._hidden.photoLoader=photoLoader;var $from=this._current.$view;var $to=this._hidden.$view;var temp=this._current;this._current=this._hidden;
this._hidden=temp;var $fromSlide=$from.find('.zfl-ss-view');var $toSlide=$to.find('.zfl-ss-view');$to.addClass('zfl-ss-bg-'+color).addClass('zfl-ss-hidden').removeClass('none');
$toSlide.addClass('zfl-ss-hidden').removeClass('none');this._updateView(photoLoader,$toSlide);$from.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.preventDefault();
e.stopPropagation();$from.unbind(zfl_Slideshow.AnimationEndEvent).addClass('none');$to.removeClass('zfl-ss-hidden').removeClass('zfl-ss-bg-'+color).addClass('zfl-ss-anim-from-'+color);
$toSlide.addClass('zfl-ss-anim-fade-in');});var cleanedUp=false;var ensureCleanup=setTimeout(function(){if(!cleanedUp){cleanedUp=true;self._animCleanup();}},2000);
$fromSlide.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.stopPropagation();});$toSlide.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.stopPropagation();
});$to.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.preventDefault();e.stopPropagation();$to.unbind(zfl_Slideshow.AnimationEndEvent);if(!cleanedUp){clearTimeout(ensureCleanup);
cleanedUp=true;self._animCleanup();}});$from.addClass('zfl-ss-anim-to-'+color);$fromSlide.addClass('zfl-ss-anim-fade-out');};zfl_Slideshow.prototype.__crossFadeAnimation=function(photoLoader,
direction){var self=this;this._hidden.photoLoader=photoLoader;var $from=this._current.$view;var $to=this._hidden.$view;var temp=this._current;this._current=this._hidden;
this._hidden=temp;$to.addClass('zfl-ss-hidden').removeClass('none');this._updateView(photoLoader,$to.find('.zfl-ss-view'));var cleanedUp=false;var ensureCleanup=setTimeout(function(){if(!cleanedUp){cleanedUp=true;
self._animCleanup();}},2000);$from.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.preventDefault();e.stopPropagation();$from.addClass('none').removeClass('zfl-ss-anim-fade-out-slow');
$from.unbind(zfl_Slideshow.AnimationEndEvent);});$to.bind(zfl_Slideshow.AnimationEndEvent,function(e){e.preventDefault();e.stopPropagation();$to.unbind(zfl_Slideshow.AnimationEndEvent);
if(!cleanedUp){clearTimeout(ensureCleanup);cleanedUp=true;self._animCleanup();}});$from.addClass('zfl-ss-anim-fade-out-slow');$to.addClass('zfl-ss-anim-fade-in-slow');
};zfl_Slideshow.prototype.__noAnimation=function(photoLoader,direction){var self=this;this._hidden.photoLoader=photoLoader;var $from=this._current.$view;var $to=this._hidden.$view;
this._updateView(photoLoader,$to.find('.zfl-ss-view'));$from.addClass('none');$to.removeClass('none');var temp=self._current;self._current=self._hidden;self._hidden=temp;
this._animCleanup();};zfl_Slideshow.prototype._animCleanup=function(){this._hidden.$view.unbind(zfl_Slideshow.AnimationStartEvent).unbind(zfl_Slideshow.AnimationEndEvent).attr('class',
'zfl-ss zfl-ss-viewholder none');this._hidden.$view.find('.zfl-ss-view:first').unbind(zfl_Slideshow.AnimationStartEvent).unbind(zfl_Slideshow.AnimationEndEvent).attr('class',
'zfl-ss zfl-ss-view');this._current.$view.unbind(zfl_Slideshow.AnimationStartEvent).unbind(zfl_Slideshow.AnimationEndEvent).attr('class','zfl-ss zfl-ss-viewholder');
this._current.$view.find('.zfl-ss-view:first').unbind(zfl_Slideshow.AnimationStartEvent).unbind(zfl_Slideshow.AnimationEndEvent).attr('class','zfl-ss zfl-ss-view');
this._animating=false;this._current.$view.get(0).style.transform=this._current.$view.get(0).style.webkitTransform='';this._hidden.$view.get(0).style.transform=this._hidden.$view.get(0).style.webkitTransform='';
var self=this;var queued=false;if(this._queuedAnim.photoLoader){var loaderId=this._queuedAnim.photoLoader.getPhoto().id;var currentId=this._currentPhoto.id;queued=loaderId!=currentId;
}if(queued){if(self._playing){self._animTimeout=setTimeout(function(){self._queuedAnim.exec();},self._delay);}else{setTimeout(function(){self._queuedAnim.exec();
},1);}}else if(self._playing){self._animTimeout=setTimeout(function(){self.play();},self._delay);}if(this._allowcontrols)this.$dom().bind('touchstart',this.closure(this._ontouchstart)).bind('touchmove',
this.closure(this._ontouchmove)).bind('touchend',this.closure(this._ontouchend));};zfl_Slideshow.prototype._showPassword=function($view,loader,show,retry){;var $passwordPopup=$view.find('[name="password-popup"]:first');
$view.find('[name="hint"]:first').addClass('none').find('.password-hint-text:first').text('');if(!show){$passwordPopup.addClass('none');$view.find('img:first').removeClass('none');
return;}if(retry){$passwordPopup.find('.incorrect:first').removeClass('none');};;;$passwordPopup.removeClass('none');$view.find('img').addClass('none');var $passbox=$view.find('.password-box:first');
$passbox.css({'margin-left':Math.floor((this.$dom().width()-$passbox.width())/2),'position':'absolute'});var self=this;var photo=loader.getPhoto();var realmId=photo.access.realmId;
var ownerId=photo.access.ownerId;;zfl_PasswordManager.retrieveHint(ownerId,realmId,function(hint){if(hint!=null&&hint.length!=0){var setHint=false;if(self._current.photoLoader&&self._current.photoLoader.getPhoto()&&self._current.photoLoader.getPhoto().access&&self._current.photoLoader.getPhoto().access.realmId&&self._current.photoLoader.getPhoto().access.realmId==realmId){$view=self._current.$view;
setHint=true;}else{;}if(setHint){var $hint=$view.find('[name="hint"]:first');var $hintText=$hint.find('.password-hint-text:first');if($hint.length>0&&$hintText.length>0){$hint.removeClass('none');
$hintText.text(hint);;}else{;}}}});if(!loader.__zfl_onunlock){loader.__zfl_onunlock=this.closure(this._password_onunlock,loader);zfl_PasswordManager.subscribe(ownerId,
realmId,loader.__zfl_onunlock);;}var playing=this._playing;var $input=$passwordPopup.find('[name="password-input"]:first');var $go=$passwordPopup.find('[name="password-go"]:first');
var handler=function(){var password=$input.val();;self.$dom('controls').blur();$go.blur();$input.click();self._showPassword($view,loader,false);self._playing=playing;
zfl_PasswordManager.validate(ownerId,realmId,password,self.closure(self._password_onpassword,loader));};$passwordPopup.bind('touchstart',function(){$input.focus();
$passwordPopup.unbind('touchstart');});$go.click(handler);$input.keydown(function(e){if(zf_stdGetEvent(e).keyCode==13)handler();});$input.click(function(e){if(self._transition==zfl_Slideshow.FadeToWhite)self._transition=zfl_Slideshow.CrossFade;
self.pause();});$input.blur(function(){if(playing)self.resume();});if(retry){$input.focus();}};zfl_Slideshow.prototype._password_onpassword=function(unlocked,loader){;if(unlocked)return;
if(this._current.photoLoader&&this._current.photoLoader.getPhoto()==loader.getPhoto())this._showPassword(this._current.$view,loader,true,true);};zfl_Slideshow.prototype._password_onunlock=function(loader){;
if(this._current.photoLoader&&(loader.getPhoto()==this._current.photoLoader.getPhoto()))this._showPassword(this._current.$view,loader,false);this._showLoading(true);
var key=zfl_Slideshow.__getPoolKey(loader.getPhoto(),loader.getMethod());this._loaderPool[key]=null;loader=this._getLoader(loader.getPhoto());if(this._current.photoLoader&&this._current.photoLoader.getPhoto()==loader.getPhoto()){this._currentAnim.photoLoader=loader;
this._currentAnim.direction=1;this._currentAnim.animOverride=zfl_Slideshow.CrossFade;}loader.start();};;;function zfl_PageSlideshow(id,minWidth,minHeight,maxWidth,maxHeight,
staticWidth,staticHeight,decoration,mode,slideshowvars,photoSet,target,photoViewId,photo){;;this._html5=false;zfl_Control.prototype.constructor.call(this,id);this.minWidth=minWidth;
this.minHeight=minHeight;this.maxWidth=maxWidth;this.maxHeight=maxHeight;this.staticWidth=staticWidth;this.staticHeight=staticHeight;this._fullPage=slideshowvars.fullpage=="1"?true:false;
this._decoration=decoration;this._mode=mode;this._slideshowvars=slideshowvars;this._target=target;if(this._html5){this._photoSet=zfl_stdTransformResponse(photoSet);
this._psToken=slideshowvars.photoSetToken;this._ownerId=parseInt(slideshowvars.ownerId);}delete this._slideshowvars.photoSetToken;delete this._slideshowvars.ownerId;
this._slideshowvars.keyring=zf_stdGetCookie("zf_keyring");this._extent=this._decoration.borderSize+this._decoration.shadowSize+this._decoration.extraSize;this._flash=zf_Flash.installed(9)&&mode==zfl_PageSlideshow.Flash;
if(!zf_Flash.isSafeDomain())this._flash=false;if(this._flash&&!this._html5){this._createFlash=true;}else if(this._html5){this._createHtml5=true;}else if(mode==zfl_PageSlideshow.EmptyOwner){this._renderPlaceholder();
}else if(mode!=zfl_PageSlideshow.Empty){this._static=photo==null;if(photo){this._photoView=new zf_PhotoView(photoViewId);this._photo=photo;}}if(!this._createFlash&&!this._createHtml5)this.$(".pv").removeClass("pv-s-init");
this.$(".pv").css("padding",[decoration.borderSize+decoration.shadowSize+"px",decoration.borderSize+"px"].join(" "));zf_stdMakeMethodsDeferred(this,this.id,["_generateFlash",
"_generateHtml5"]);}zfl_PageSlideshow.inherits(zfl_Control);zfl_PageSlideshow.Empty=0;zfl_PageSlideshow.Static=1;zfl_PageSlideshow.Flash=2;zfl_PageSlideshow.EmptyOwner=3;zfl_PageSlideshow.Html5=4;
zfl_PageSlideshow.prototype.resize=function(width,height,cellWidth){;;var extent=this._decoration.borderSize+this._decoration.shadowSize;var cellRound=function(w){if(!cellWidth)return w;
return w-w%cellWidth;};;if(this._static&&this._mode!=zfl_PageSlideshow.Empty&&this._mode!=zfl_PageSlideshow.EmptyOwner){width=this.staticWidth+extent*2;height=this.staticHeight+extent*2;
if(this.minWidth)width=Math.min(width,this.minWidth);;return{cx:width,cy:height,cxShadow:this._decoration.shadowSize*2};}var minWidth=zf_ProcessingMethod.StandardSmallSize.cx;
var minHeight=this.minHeight?this.minHeight:zf_ProcessingMethod.StandardSmallSize.cy;width-=extent*2;height-=extent*2;;;width=Math.max(width,minWidth);height=Math.max(height,
minHeight);;if(!this._fullPage){width=Math.min(width,this.maxWidth);height=Math.min(height,this.maxHeight);};width=cellRound(width);if(this._fullPage){height=width*(height/width);
}else{var v=Math.floor(height*this.maxWidth/this.maxHeight);if(v<=width){width=v;if(cellWidth){width=cellRound(width);height=Math.floor(width*this.maxHeight/this.maxWidth);
}}else{height=Math.floor(width*this.maxHeight/this.maxWidth);}};if(this._photoView){;var method=this._photo.pickMethod(width,height);if(this._photoView.__zfl_method==null||this._photoView.__zfl_method!=method){this._photoView.__zfl_method=method;
this._photoView.load(this._photo,method);}var size=this._photo.getScaledSize(method);width=size.cx;height=size.cy;this._photoView.$(".pv-img").width(width);}if(this.minWidth)width=Math.max(width,
this.minWidth);height=Math.max(height,240);;this.$(".pv-inner").width(width).height(height);if(this._html5&&this._slideshow)this._slideshow.resize(width,height);
width+=extent*2;height+=extent*2;if(this._decoration.shadowName!=null){this.$(".pv-shadow").remove();var shadows=zfl_DecorationInfo.getShadowHtml("pv-shadow",this._decoration.shadowName,
this._decoration.shadowType,this._decoration.shadowSize,-extent,-extent,width,height);this.$(".pv-inner").append(shadows);}if(this._createFlash){this._createFlash=false;
this._generateFlash();}else if(this._createHtml5){this._createHtml5=false;this._generateHtml5();}return{cx:width,cy:height,cxShadow:this._decoration.shadowSize*2};
};zfl_PageSlideshow.prototype.onClick=function(id){;if(this._target)location.href=zf_stdFormatString(this._target,parseInt(id).toString(16));};zfl_PageSlideshow.prototype._generateFlash=function(){this.$(".pv").removeClass("pv-s-init");
var inner=this.$(".pv-inner");var isTransparent=this._slideshowvars["bgcolor"]=="transparent";var markup=zf_Flash.createHtml(this.id+"-flash","pv-img pv-flash flash-restart",
"http://"+zf_cdnHost+"/zf/code/slideshow/5.9.1/homepage.swf",this._slideshowvars,isTransparent,inner.width(),inner.height());this.$(".pv-img").replaceWith(markup);
;};zfl_PageSlideshow.prototype._generateHtml5=function(){this.$(".pv").removeClass("pv-s-init");var inner=this.$(".pv-inner");var markup=zfl_Slideshow.createHtml(this.id+"-html5",
"pv-img pv-html5",this._slideshowvars.bgcolor,inner.width(),inner.height(),false);this.$(".pv-img").replaceWith(markup);var owner=new zf_User();owner.id=this._ownerId;
this._slideshow=new zfl_Slideshow(this.id+'-html5',this.minWidth,this.minHeight,this.maxWidth,this.maxHeight,this._slideshowvars,this._photoSet,this._psToken,owner,
false,null);this._slideshow.onclick=this.closure(this.onClick);this._slideshow.init();;};zfl_PageSlideshow.prototype._renderPlaceholder=function(){var markup=['<div class="pv-ph">',
'<div class="pv-ph-inner">','<div class="title">','Slideshow gallery is not selected','</div>','<div class="action">','<a href=\x22#\x22>Click here</a> to configure the slideshow',
'</div>','</div>','</div>'];this.$(".pv-inner").append(markup.join(""));this.$(".pv-ph a").click(function(){zf_stdSetCookie("zf_cv_options","slideshow",null,true,
true);zf_stdSetCookie("zf_cv_open","options",null,true,true);zfl_ZenBar.customize();});};zfl_PageSlideshow.prototype.getMinWidth=function(){var width;if(this._static&&this._mode!=zfl_PageSlideshow.Empty&&this._mode!=zfl_PageSlideshow.EmptyOwner){width=this.staticWidth;
}else{width=Math.floor(this.minHeight*this.maxWidth/this.maxHeight);}if(this.minWidth)width=Math.max(width,this.minWidth);return width+this._extent*2;};zfl_PageSlideshow.prototype.getMaxWidth=function(){var width;
if(this._static&&this._mode!=zfl_PageSlideshow.Empty&&this._mode!=zfl_PageSlideshow.EmptyOwner){width=this.staticWidth;}else{width=this.maxWidth;}if(this.minWidth)width=Math.max(width,
this.minWidth);return width+this._extent*2;};;;;function zfl_HomeMenu(id,vertical,maxWidth,subMenuHDir,subMenuVDir){zfl_AbstractMenu.prototype.constructor.call(this,id,vertical,
subMenuHDir,subMenuVDir);this.bind($(this.dom()).find("A[data-zf-subitems]").closest("LI"));this.$("a:not([data-zf-subitems])").hover(function(){$(this).removeClass("homemenu-color2 homemenu-bgcolor2 homemenu-bgimage2").addClass("homemenu-color3 homemenu-bgcolor3 homemenu-bgimage3");
},function(){$(this).removeClass("homemenu-color3 homemenu-bgcolor3 homemenu-bgimage3").addClass("homemenu-color2 homemenu-bgcolor2 homemenu-bgimage2");});this._extraHorzPadding=this.vertical?0:-2;
if(maxWidth)this.setWidth(maxWidth);}zfl_HomeMenu.inherits(zfl_AbstractMenu);zfl_HomeMenu.prototype.hoverItem=function($item,hoverOn){};zfl_HomeMenu.prototype.hoverSubItem=function($item,hoverOn){if(hoverOn){$item.removeClass("homemenu-color4 homemenu-bgcolor6 homemenu-bgimage5").addClass("homemenu-color5 homemenu-bgcolor7 homemenu-bgimage6");
}else{$item.removeClass("homemenu-color5 homemenu-bgcolor7 homemenu-bgimage6").addClass("homemenu-color4 homemenu-bgcolor6 homemenu-bgimage5");}};zfl_HomeMenu.prototype.setWidth=function(maxWidth){if(maxWidth){;
var items=this.$(".sep:visible,a:visible");var width=0,inc=0;for(var i=0;i<items.length;i++){var item=items.eq(i);inc+=item.outerWidth(true);;if(item[0].tagName=="A"){if(width+inc>maxWidth){break;
}else{width+=inc;inc=0;}}};width+=2;this.$(".homemenu-inner").width(width);}else{this.$(".homemenu-inner").width("auto");}};zfl_HomeMenu.prototype._getMenuName=function(){return 'homesubmenu';
};;function zfl_ContentBlockContainer(id){zfl_Control.prototype.constructor.call(this,id);}zfl_ContentBlockContainer.inherits(zfl_Control);zfl_ContentBlockContainer.prototype.onrecalc=function(){var $this=this.$dom();var $blocks=$this.find('.content-block');
if($blocks.length===0){$this.height(10).css({'margin':0,'padding':0});return;}var isOdd=$blocks.length%3===0;var blockMargin=($blocks.first().outerWidth()-$blocks.first().innerWidth())*2;
var length=Math.min(3,$blocks.length);var blockWidth=Math.floor($this.width()/length);var totalMargin=16*(length-1);blockWidth=Math.floor(blockWidth)-(totalMargin/length);
$blocks.width(blockWidth);var blockHeight=$.max($blocks,function(){return $(this).outerHeight();}).value;$blocks.height(blockHeight);$blocks.find('.bin-content').each(function(index,
elem){var $elem=$(elem);$elem.height(blockHeight-$elem.siblings('.bin-header').outerHeight());});if($blocks.length>1){$blocks.each(function(index){var $this=$(this);
var $inner=$this.find('.content-block-inner:first');var verticalOffset=($this.height()-$inner.height())/2;if(isOdd){if(index===0||(index+1)%3!==0){$this.css('margin-right',
'16px');}}else{if(index===0||(index+1)%2!==0){$this.css('margin-right','16px');}}});}};;function zfl_UserBlocksLayout(id,global,local){zfl_UserLayout.prototype.constructor.call(this,
id,global,local);this._player=local.player;this._column=local.column;this._blockContainer=local.blockContainer;this._footer=global.footer;this._zenbar=global.zenbar;
this._menu=local.menu;this._zentoboxAlign=false;this._padding=parseInt(this.$().css('paddingLeft'));this._paddingTop=parseInt(this.$().css('paddingTop'));this._paddingBottom=parseInt(this.$().css('paddingBottom'));
this._slideshowHeight=local.slideshowHeight;this._padHeights=local.padHeights;;var menuOffset=0;if(local.menuOffset!=null){menuOffset=local.menuOffset;}if(local.menulogo){var crumbs=local.menulogo.$('.breadcrumbs');
if(crumbs.length>0){var nameWidth=crumbs.width();if(nameWidth>400){crumbs.width(400).css('white-space','normal');nameWidth=crumbs.find('span').width();crumbs.width(nameWidth);
}menuOffset+=nameWidth;}else{menuOffset+=local.menulogo.$('.homelogo-logo').width();}menuOffset+=40;};if(local.menu&&!local.menu.vertical&&local.slideshow){var minWidth;
minWidth=this._fixedWidth?944:(1069-this._padding*2);minWidth-=menuOffset;minWidth=Math.max(0,minWidth);;local.menu.setWidth(minWidth);}var $topPad=this.$('.ub-pad-top');
var $bottomPad=this.$('.ub-pad-bottom');var logoMax=$('.homelogo-logo',$topPad).outerHeight();var adjustPadSize=function(pad,height){var $logo=$('.homelogo-logo',
pad);var ls={exists:$logo.length>0,width:$logo.width(),height:$logo.height()};pad.height(height);if($('.socialSearch',pad).length){height=height-$('.socialSearch',
pad).outerHeight(true);}$('TR',pad).height(height);if(ls.exists){$logo.height(height).parent().height();$logo.width(Math.min(360,ls.width*(height/ls.height)));}$('.homelogo,.homelogo-logo,.home',
pad).css('padding-top',0);$('.breadcrumbs-text H1').css('height','');};if(typeof this._padHeights.topPad==='number'){adjustPadSize($topPad,this._padHeights.topPad);
}else{adjustPadSize($topPad,Math.min(300,$topPad.height()));}if($bottomPad.length){var ubws=$bottomPad.find('.ub-welcome-socialsearch');if(typeof this._padHeights.bottomPad==='number'){adjustPadSize($bottomPad,
this._padHeights.bottomPad);}else{adjustPadSize($bottomPad,ubws.outerHeight(true));}var ss=ubws.find('.socialSearch');if(ss.length){ubws.find('.welcomeBin').height(ubws.height()-ss.outerHeight(true));
}}this.cyMinFooter=0;this.$dom().closest('.layout-content').removeClass('fixed-width');}zfl_UserBlocksLayout.inherits(zfl_UserLayout);zfl_UserBlocksLayout.prototype.onrecalc=function(){this._blockContainer.onrecalc();
this._player.$().css('left',this.$dom('frame').offset().left-this.$().offset().left+'px');if(this._menu){this._menu.setWidth(this.$('.homemenu:first').width());}zfl_UserLayout.prototype.onrecalc.call(this);
};zfl_UserBlocksLayout.prototype.onload=function(){zfl_UserLayout.prototype.onload.call(this);};zfl_UserBlocksLayout.prototype._onstretch=function(height,stretcher){height=this._slideshowHeight||height;
var fullWidth=this.$dom().innerWidth();var availWidth=fullWidth-(this._padding*2);var slidesWidth=this.$dom('frame').width();var controls={left:0,top:this.$('.ub-pad-top:first').innerHeight(),
width:slidesWidth,height:height};controls.height-=controls.top+this.$('.ub-pad-bottom:first').innerHeight();this._player.resize(slidesWidth,height,{controls:controls});
this._player.$().css('left',this.$dom('frame').offset().left-this.$().offset().left+'px');return true;};;;function zfl_UserFullScreenLayout(id,global,local){zfl_UserLayout.prototype.constructor.call(this,
id,global,local);this._player=local.player;this._playerAlign=local.playerAlign;this._column=local.column;this._fsframe=local.fsframe;this._header=global.header;this._footer=global.footer;
this._zenbar=global.zenbar;this._padHeights=local.padHeights;this._menu=local.menu;this._padding=parseInt(this.$().css('paddingLeft'));;var menuOffset=0;if(local.menuOffset!=null){menuOffset=local.menuOffset;
}if(local.menulogo){var crumbs=local.menulogo.$('.breadcrumbs');if(crumbs.length>0){var nameWidth=crumbs.width();if(nameWidth>400){crumbs.width(400).css('white-space',
'normal');nameWidth=crumbs.find('span').width();crumbs.width(nameWidth);}menuOffset+=nameWidth;}else{menuOffset+=local.menulogo.$('.homelogo-logo').width();}menuOffset+=40;
};if(local.menu&&!local.menu.vertical&&local.slideshow){var minWidth;minWidth=this._fixedWidth?944:(1069-this._padding*2);minWidth-=menuOffset;minWidth=Math.max(0,
minWidth);;local.menu.setWidth(minWidth);}var $topPad=this.$('.ufs-pad-top');var $bottomPad=this.$('.ufs-pad-bottom');var logoMax=$('.homelogo-logo',$topPad).outerHeight();
var adjustPadSize=function(pad,height){var $logo=$('.homelogo-logo',pad);var ls={exists:$logo.length>0,width:$logo.width(),height:$logo.height()};pad.height(height);
if($('.socialSearch',pad).length){height=height-$('.socialSearch',pad).outerHeight(true);}$('TR',pad).height(height);if(ls.exists){$logo.height(height);$logo.width(Math.min(360,
ls.width*(height/ls.height)));}$('.homelogo,.homelogo-logo,.home',pad).css('padding-top',0);$('.breadcrumbs-text H1').css('height','');};if(typeof this._padHeights.topPad==='number'){adjustPadSize($topPad,
this._padHeights.topPad);}else{adjustPadSize($topPad,Math.min(400,$topPad.height()));}if(typeof this._padHeights.bottomPad==='number'){adjustPadSize($bottomPad,this._padHeights.bottomPad);
}else{adjustPadSize($bottomPad,Math.min($bottomPad.height(),400));}this.cyMinFooter=0;}zfl_UserFullScreenLayout.inherits(zfl_UserLayout);zfl_UserFullScreenLayout.prototype.onrecalc=function(){zfl_UserLayout.prototype.onrecalc.call(this);
this._onrecalc();};zfl_UserFullScreenLayout.prototype.onload=function(){zfl_UserLayout.prototype.onload.call(this);};zfl_UserFullScreenLayout.prototype._onrecalc=function(){this._fsframe.$dom().width(this.$dom('frame').width());
var fullWidth=this._fsframe.$dom().width();var availWidth=fullWidth-(this._padding*2);var availHeight=$(window).height()-this._fsframe.$dom().offset().top;if(this._fixedWidth){availWidth=Math.min(availWidth,
870);}if(this._footer){availHeight-=this._footer.$dom().outerHeight();}availHeight-=this.$dom().outerHeight()-this.$dom().innerHeight();availHeight=Math.max(720,
availHeight);this._fsframe.$dom().height(availHeight);this.$dom().width(availWidth);this.$dom().height(availHeight);this.$('.column').width(availWidth).height(availHeight);
this._repositionPads();this._updateVerticallyCentered();if(this._menu){this._menu.setWidth(this.$('.homemenu:first').width());}var controls,alignControls=this._playerAlign;
var middle=this.$('DIV.ufs-middle:first');if(middle.length){controls={left:0,top:middle.offset().top-this._fsframe.$dom().offset().top,width:fullWidth,height:middle.height()};
if(this._fixedWidth&&this.$dom('frame').innerWidth()-availWidth>=280)alignControls=zfl_ZentoboxPlayer.Middle;}var size=this._player.resize(fullWidth,availHeight,
{controls:controls,alignControls:alignControls});return true;};zfl_UserFullScreenLayout.prototype._repositionPads=function(){var vbpad=this._fsframe.$dom().find('.ufs-pad-bottom-v');var ibpad=this.$dom().find('.ufs-pad-bottom-i');
vbpad.height(ibpad.outerHeight());ibpad.css('bottom',0);var vtpad=this._fsframe.$dom().find('.ufs-pad-top-v');var itpad=this.$dom().find('.ufs-pad-top-i');var height=itpad.height();
vtpad.height(height);var getOffset=function(offset){return offset?offset.top:0;};var vtoffset=getOffset(vtpad.offset());var vboffset=getOffset(vbpad.offset());this._repositionPadDependents(vtpad.outerHeight(),
vbpad.outerHeight(),vtoffset,vboffset);};zfl_UserFullScreenLayout.prototype._repositionPadDependents=function(topHeight,bottomHeight,topPos,bottomPos){var middle=this.$('.ufs-middle');if(middle.length){middle.height(bottomPos-middle.offset().top);
}this.$dom().find('.ufs-pad-dependent').each(function(){var $this=$(this);var padData=$this.attr('data-zf-pad');var extra=$this.attr('data-zf-extrapad');extra=extra?parseInt(extra):0;
var data=(/(\w+):(\w+)/).exec(padData);var above=data[1].trim()==='above';var top=data[2].trim()==='top';if(!above&&top){$this.css('top',topHeight+extra);}else{$this.css('bottom',
bottomHeight+extra);}});};zfl_UserFullScreenLayout.prototype._updateVerticallyCentered=function(){var elements=this.$dom().find('.ufs-vcentered');var self=this;elements.each(function(index){var $this=$(this);
var centerSelector=$this.attr('data-center-in');var parentHeight=(centerSelector?self.$(centerSelector):$this.parent()).outerHeight();var height=$this.outerHeight();
var y=(parentHeight-height)/2;$this.css({'position':'absolute','top':y});});};;function zfl_UserPortfolioLayout(id,global,local){zfl_UserLayout.prototype.constructor.call(this,
id,global,local);this._customizer=global.customizer;this._player=local.player;this._column=local.column;this._menulogo=local.menulogo;this._menu=local.menu;this._slideshowOffset=local.slideshowOffset;
this._padding=parseInt(this.$().css("paddingLeft"));;this._slideshowOffset=local.slideshowOffset||0;var menuOffset=local.menuOffset||0;if(this._menulogo){var crumbs=this._menulogo.$(".breadcrumbs");
if(crumbs.length>0){var nameWidth=crumbs.width();if(nameWidth>400){crumbs.width(400).css("white-space","normal");nameWidth=crumbs.find("span").width();crumbs.width(nameWidth);
}menuOffset+=nameWidth;}else{menuOffset+=local.menulogo.$(".homelogo-logo").width();}menuOffset+=40;}this._menuOffset=menuOffset;;this.cyMinFooter=0;}zfl_UserPortfolioLayout.inherits(zfl_UserLayout);
zfl_UserPortfolioLayout.prototype.onrecalc=function(){zfl_UserLayout.prototype.onrecalc.call(this);};zfl_UserPortfolioLayout.prototype.onload=function(){zfl_UserLayout.prototype.onload.call(this);};zfl_UserPortfolioLayout.prototype._onstretch=function(height,
stretcher){var availWidth=this.$dom("frame").width()-(this._slideshowOffset+this._padding*2);var availHeight=height;if(this._fixedWidth){availWidth=Math.min(availWidth,
870-this._slideshowOffset);availHeight=10000;}var size=this._player.resize(availWidth,availHeight);this.$dom().width(size.cx-size.cxShadow+this._slideshowOffset);
stretcher.style.minHeight=size.cy+"px";this.recalcBins();this._recalcMenu(size);return true;};zfl_UserPortfolioLayout.prototype._recalcMenu=function(size){if(this._menu&&!this._menu.vertical&&this._player){var minWidth;
minWidth=this._fixedWidth?944:(1069-this._padding*2);var slidesOffset=this._slideshowOffset||0;var slidesWidth;var maxPlayerWidth=this._player.getMaxWidth();var minPlayerWidth=this._player.getMinWidth();
if(this._fixedWidth){slidesWidth=Math.min(884-slidesOffset,maxPlayerWidth);}else slidesWidth=size.cx;slidesWidth=Math.max(slidesWidth,minPlayerWidth);minWidth=Math.min(slidesWidth+slidesOffset,
minWidth);minWidth-=this._menuOffset;minWidth=Math.max(0,minWidth);;this._menu.setWidth(minWidth);}};;;function zfl_UserSidebarLayout(id,global,local){zfl_UserLayout.prototype.constructor.call(this,
id,global,local);this._player=local.player;this._playerAlign=local.playerAlign;this._column=local.column;this._fsframe=local.fsframe;this._footer=global.footer;this._zenbar=global.zenbar;
this._sidebar=local.sidebar;this._subtractMenuHeight=local.subtractMenuHeight;this._zentoboxAlign=false;this._padding=parseInt(this.$().css('paddingLeft'));this._paddingTop=parseInt(this.$().css('paddingTop'));
this._paddingBottom=parseInt(this.$().css('paddingBottom'));this._sidebarWidth=local.sidebarWidth;;;if(local.menu&&!local.menu.vertical&&local.slideshow){var minWidth;
minWidth=this._fixedWidth?944:(1069-this._padding*2);minWidth-=menuOffset;minWidth=Math.max(0,minWidth);;local.menu.setWidth(minWidth);}if(typeof this._sidebarWidth==='number'){this._sidebarWidth=Math.max(this._sidebarWidth,
200);var ratio=(this._sidebarWidth/this._sidebar.$().width()-0.1)*100;this._sidebar.$('.container').width(this._sidebarWidth);this._sidebar.$().width(this._sidebarWidth);
this._sidebar.$().closest('TD').width(this._sidebarWidth);}(function($middle){$middle.css('max-height',$middle.height());})(this._sidebar.$('.sidebar-middle-section'));
var $logo=this._sidebar.$('.homelogo-logo');if($logo.length){var w=$logo.width();$logo.width($logo.parent().width()+40);$logo.height($logo.height()*($logo.width()/w));
if($logo.height()>300){var h=$logo.height();$logo.height(300);$logo.width($logo.width()*($logo.height()/h));}}}zfl_UserSidebarLayout.inherits(zfl_UserLayout);zfl_UserSidebarLayout.MinimumHeight=640;zfl_UserSidebarLayout.prototype.onrecalc=function(){zfl_UserLayout.prototype.onrecalc.call(this);
this._onrecalc();};zfl_UserSidebarLayout.prototype.onload=function(){zfl_UserLayout.prototype.onload.call(this);};zfl_UserSidebarLayout.prototype._onrecalc=function(){var fullWidth=this.$dom().parent().innerWidth();
var availWidth=fullWidth-(this._padding*2);var columnPadding=parseInt(this._column.$().css('paddingLeft'))+parseInt(this._column.$().css('paddingRight'));availWidth-=columnPadding;
var availHeight=$(window).height()-this.$().offset().top-this._paddingTop-this._paddingBottom-1;availHeight=Math.max(zfl_UserSidebarLayout.MinimumHeight,availHeight);
var columnHeight=availHeight;if(this._subtractMenuHeight){columnHeight-=this.$('.homemenu-middle:first').outerHeight();}var slideshowWidth=this.$dom('frame').width();
if(this._zentoboxAlign||!this._fsframe){var sbWidth=this._sidebar.$dom().outerWidth();if(this._fsframe)slideshowWidth=slideshowWidth-sbWidth-columnPadding;else slideshowWidth=availWidth-sbWidth-columnPadding;
if(this._fsframe)this._fsframe.$dom().css('left',sbWidth);}if(this._fixedWidth){availWidth=Math.min(availWidth,870);}this.$dom().width(this._fixedWidth?fullWidth:availWidth);
var actualHeight=availHeight;if(this._footer){actualHeight-=this._footer.$dom().outerHeight();columnHeight-=this._footer.$dom().outerHeight();}var controls,alignControls;
if(this._zentoboxAlign||!this._fsframe){controls=null;alignControls=null;}else if(this._fixedWidth&&this.$dom('frame').innerWidth()-fullWidth>=280){controls={top:0,
left:0,width:slideshowWidth,height:columnHeight};alignControls=null;}else{var $box=this.$('.splitter-left-wide:first,.splitter-right-wide:first');controls={left:$box.offset().left-this._fsframe.$().offset().left,
top:0,width:$box.innerWidth(),height:columnHeight};alignControls=this._playerAlign;}var size=this._player.resize(slideshowWidth,columnHeight,{controls:controls,alignControls:alignControls});
var topSection=this._sidebar.$('.sidebar-top-section').outerHeight();var bottomSection=this._sidebar.$('.sidebar-bottom-section').outerHeight();var sidebarHeight=Math.max(columnHeight,
size.cy);this.$dom().height(actualHeight);this._sidebar.$dom().height(sidebarHeight);this._column.$dom().height(Math.max(actualHeight,size.cy));this._fsframe&&this._fsframe.$dom().height(this._column.$dom().height());
this._sidebar.$('.sidebar-middle-section').height(sidebarHeight-(topSection+bottomSection));(function(spacer,sizer){spacer.height(Math.max(0,(sidebarHeight-sizer.height()-bottomSection)/2));
})(this._sidebar.$('.sidebar-spacer'),this._sidebar.$('.sidebar-sizer'));var $btns=this._sidebar.$('.home-btns');if($btns.length){if(this._sidebar.$('.sidebar-search').length){var $search=this._sidebar.$('.searchBin');
$btns.css('margin-left',($search.offset().left)-this._sidebar.$().offset().left-5);}else{$btns.css('margin-left',(this._sidebar.$().width()-$btns.width())/2);}}return true;
};;;function zfl_RecentFeaturedLayout(id,global,local){zfl_Layout.prototype.constructor.call(this,id,global,local);this._photoSets=zfl_stdTransformResponse(local.photoSets,
"photoSets");this._grid=local.grid;this._gridParams=local.gridParams;}zfl_RecentFeaturedLayout.inherits(zfl_Layout);zfl_RecentFeaturedLayout.prototype.onload=function(){this.initGrid(this._grid,zfl_PhotoViewStyle.FolderElement,
this._gridParams,this._photoSets);zfl_Layout.prototype.onload.call(this);};zfl_RecentFeaturedLayout.prototype.onrecalc=function(){if(this._grid)this._grid.recalcLayout();zfl_Layout.prototype.onrecalc.call(this);
};;;function zfl_SignInData(){this.email=null;this.name=null;this.phone=null;}zfl_SignInData._storageKey="layout.signin.recent";zfl_SignInData.load=function(){var data=new zfl_SignInData();data.email=zf_storage.getItem(zfl_SignInData._storageKey+".email");
data.name=zf_storage.getItem(zfl_SignInData._storageKey+".name");data.phone=zf_storage.getItem(zfl_SignInData._storageKey+".phone");return data;};zfl_SignInData.save=function(email,
name,phone){if(email)zf_storage.setItem(zfl_SignInData._storageKey+".email",email);else zf_storage.removeItem(zfl_SignInData._storageKey+".email");if(name)zf_storage.setItem(zfl_SignInData._storageKey+".name",
name);else zf_storage.removeItem(zfl_SignInData._storageKey+".name");if(phone)zf_storage.setItem(zfl_SignInData._storageKey+".phone",phone);else zf_storage.removeItem(zfl_SignInData._storageKey+".phone");
};zfl_SignInData.prototype.encode=function(prepend){var p=[];if(this.email)p.push('email='+encodeURIComponent(this.email));if(this.name)p.push('name='+encodeURIComponent(this.name));
if(this.phone)p.push('phone='+encodeURIComponent(this.phone));if(p.length==0)return '';return(!prepend?'':prepend)+p.join('&');};;function zfl_SignInLayout(id,global,local){if(global.zenbar)global.zenbar.disableAutoScrapbook=true;
zfl_Layout.prototype.constructor.call(this,id,global,local);var callback=function(result,error){if(error){local.form.handleError(result,error);return;}if(location.search.indexOf("preview=signin")!=-1){var list=location.search.substr(1).split('&');
list=$.map(list,function(l){return l=="preview=signin"?null:l;});location.search=list.length==0?"":("?"+list.join('&'));return;}var data=local.form.getData();zfl_SignInData.save(data.email,
data.username,data.phone,result);location.reload();};local.form.onreply=callback;this.$(".signin-skip").click(function(){zf_stdServerRequestEx("POST","/zf/layout/signin.asmx",
"SkipSignIn",[local.siId,local.siCn],callback);return false;});}zfl_SignInLayout.inherits(zfl_Layout);;;;;;function zfl_EventSearchForm(id,form,button,customize){zfl_Control.prototype.constructor.call(this,
id);form.onreply=function(result,error){button.togglePending(false);if(error){form.handleError(result,error);return;}var uri=[location.path,'?eq=',encodeURIComponent(result)];
if(customize)uri.push('&customize=',customize);location.href=uri.join('');};}zfl_EventSearchForm.inherits(zfl_Control);;function zfl_EventLayout(id,global,local){zfl_FolderLayout.prototype.constructor.call(this,
id,global,local);this._fullScreen=local.fullScreen;this._banner=local.banner;this._bannerHeight=local.bannerHeight;this._customizer=global.customizer;this._player=local.player;
this._column=local.column;this._data.photos=zfl_stdTransformResponse(local.data.photos,"photos");if(true&&this._grids.photos){this._data.photos=[];for(var i=0;i<50;
i++){this._data.photos.push({id:'_'+i,requested:true,loaded:true,title:'titleSamplePhoto',access:{type:zf_AccessType.Public,mask:0}});}}this._padding=parseInt(this.$().css("paddingLeft"));
;this._slideshowOffset=local.slideshowOffset?local.slideshowOffset:0;if(this.customizer&&this._banner)this.customizer.setZentoboxPlayer(this._banner);;this.cyMinFooter=0;
}zfl_EventLayout.inherits(zfl_FolderLayout);zfl_EventLayout.prototype.onload=function(){zfl_FolderLayout.prototype.onload.call(this);this.initGrid(this._grids.folder,zfl_PhotoViewStyle.FolderElement,
this._grids.folderParams,this._data.folder);this.initGrid(this._grids.photos,zfl_PhotoViewStyle.GalleryPhoto,this._grids.photosParams,this._data.photos);var banner=this._banner,
customizer=this._customizer;banner&&customizer&&banner.on('save',function(id,data,callback){customizer.updateZentobox(id,data,callback);});};zfl_EventLayout.prototype.onrecalc=function(){zfl_FolderLayout.prototype.onrecalc.call(this);
if(this._grids.folder)this._grids.folder.recalcLayout();if(this._grids.photos)this._grids.photos.recalcLayout();this._recalcFullScreen();if(this._banner){var bannerWidth=this.$dom('frame').innerWidth();
this._banner.resize(bannerWidth,this._bannerHeight);this._banner.$().css('left','-'+(this.$dom().position().left+this._padding)+'px');}};zfl_EventLayout.prototype._recalcFullScreen=function(){if(!this._fullScreen)return;
var $frame=this.$dom('frame');var availWidth=$frame.innerWidth();var availHeight=$frame.outerHeight();if(this._player)this._player.resize(availWidth,availHeight);
};zfl_EventLayout.prototype._centered_onstretch=function(height,stretcher){var availWidth=this.$dom("frame").width()-(this._slideshowOffset+this._padding*2);var availHeight=height;
if(this._fixedWidth){availWidth=Math.min(availWidth,944-this._slideshowOffset);availHeight=10000;}var cellSize=1;if(this._grids.folder)cellSize=this._grids.folder.getCellSize();
if(this._player){var size=this._player.resize(availWidth,availHeight,{cellWidth:cellSize.cx});this.$dom().width(size.cx-size.cxShadow+this._slideshowOffset);stretcher.style.minHeight=size.cy+"px";
if(this._grids.folder!=null)this._grids.folder.recalcLayout();}return true;};zfl_EventLayout.prototype._leftright_onstretch=function(height,stretcher){var availWidth=this.$dom("frame").width()-(this._slideshowOffset+this._padding*2);
var availHeight=height;if(this._fixedWidth){availWidth=Math.min(availWidth,870-this._slideshowOffset);availHeight=10000;}var size=this._player.resize(availWidth,
availHeight);this.$dom().width(size.cx-size.cxShadow+this._slideshowOffset);stretcher.style.minHeight=size.cy+"px";if(this._grids.folder!=null)this._grids.folder.recalcLayout();
return true;};zfl_EventLayout.prototype._photos_onstretch=function(height,stretcher){var grid=this._grids.photos;if(!grid)return false;grid.minRows=null;grid.setHeight(-1);stretcher.style.height="auto";
stretcher.style.minHeight=height+"px";grid.recalcLayout();return true;};;;;;function zfl_EventSearchLayout(id,global,local){zfl_Layout.prototype.constructor.call(this,id,global,
local);zfl_PhotoDownload.prototype.constructor.call(this);this._folder=zfl_stdTransformResponse(local.folder,"folder");this._data={photos:zfl_stdTransformResponse(local.data.photos,
"photos")};var i;var self=this;this._demo=local.demo;if(local.demo){this._data.photos=[];for(i=0;i<20;i++){this._data.photos.push({id:'_'+i,requested:true,loaded:true,
title:'Sample Photo',access:{type:zf_AccessType.Public,mask:0}});}}var photos=this._data.photos;if(photos){var fnull=function(){return null;};for(i=0;i<photos.length;
i++)photos[i].getHref=fnull;if(!this._demo)this._grids.photosParams.onclick=function(context){zfl_DimLights.standalone(photos,context.index,{toolbar:true,scrapbook:self.scrapbook,
ondownload:function(photo){self._downloadOriginal(photo);},onaddtofavorites:function(photo){self.scrapbook.addPhotos([photo.id]);},onremovefromfavorites:function(photo){self.scrapbook.removePhotos([photo.id]);
},onaddtocart:function(photo){self.zenbar.addToCart({allPhotos:photos})([photo]);},oncreatebook:!local.createBook?null:function(photo){self.zenbar.addToCart({allPhotos:photos,
categoryId:'photobooks'})([photo]);}});};}this._photoList=zf_PhotoList.wrap(photos);this._printableImages=local.printableImages;this._printableVideos=local.printableVideos;
if(local.controlBox){local.controlBox.oneditproduct=this.closure(this._editProduct);local.controlBox.setCounts(this._printableImages,this._printableVideos);this._controlBox=this._controls.add(local.controlBox);
}this._actions=this._controls.add(local.actions);this._selectPlugin=null;if(local.quickPriceList){local.quickPriceList.init(this.zenbar);local.quickPriceList.addtocart=this.closure(this._addToCart);
local.quickPriceList.onresize=this.closure(this.recalc);}if(this.scrapbook)this.scrapbook.onchange=this.closure(this._scrapbook_onchange);this._fakeVideoOriginals=local.fakeVideoOriginals;
this.cyMinFooter=0;this.showAll=true;}zfl_EventSearchLayout.inherits(zfl_PhotoSetLayout);zfl_EventSearchLayout.prototype.onload=function(){zfl_PhotoSetLayout.prototype.onload.call(this);};zfl_EventSearchLayout.prototype.onrecalc=function(){zfl_PhotoSetLayout.prototype.onrecalc.call(this);
};zfl_EventSearchLayout.prototype.loadSelection=function(){this._selection=zfl_PhotoSelection.load("event",this._folder.id);var selection=this._selection;selection.onchange=this.closure(this._selection_onchange);
selection.__zfl_verified=true;if(selection.none()){this._updateActions(true);return;}var selected=selection.get();var missing=[];for(var i=0;i<selected.length;i++){if(this._photoList.find(selected[i])==-1)missing.push(selected[i]);
}if(missing.length>0)selection.unselect(missing);else this._selection_onchange();};zfl_EventSearchLayout.prototype.saveSelection=function(){zf_stdDeferCall(this.id+".selection",this._selection.save,
this._selection,"event");};zfl_EventSearchLayout.prototype._photos_onstretch=function(height,stretcher){var grid=this._grids.photos;if(!grid)return false;grid.minRows=null;grid.setHeight(-1);
stretcher.style.height="auto";stretcher.style.minHeight=height+"px";grid.recalcLayout();return true;};zfl_EventSearchLayout.prototype._addToFavorites=function(purchase,noconfirm){zfl_PhotoSetLayout.prototype._addToFavorites.call(this,
purchase,true);};zfl_EventSearchLayout.prototype._download=function(){var photoList=this._data.photos;var title=this._folder.title;var selection=this._selection;if(!selection||selection.none()){this._downloadOriginals(title,
photoList);}else{this._downloadOriginals(title,selection.getPhotos(photoList));}};zfl_EventSearchLayout.prototype._updateActions=function(first){if(this._demo){var none={};this._actions.enableActions(none);
return none;}return zfl_PhotoSetLayout.prototype._updateActions.call(this,first);};zfl_EventSearchLayout.prototype._checkSelection=function(command){if(command=="downloadOriginal"){if(this._selection&&!this._selection.none())this._downloadOriginals(this._folder.title,
this._selection.getPhotos(this._photoList));else this._downloadOriginals(this._folder.title,this._photoList);}else if(command=="addToFavorites"){this._addToFavorites(false,
true);}else{;}};;;function zfl_Checkbox(id,checked){zfl_Control.prototype.constructor.call(this,id);this.checked=checked;}zfl_Checkbox.inherits(zfl_Control);zfl_Checkbox.prototype._onclick=function(e){e=zf_stdGetEvent(e);
zf_stdPreventDefault(e);this.check(!this.checked);if(this.oncheck)this.oncheck(this.checked);return false;};zfl_Checkbox.prototype.check=function(checked){checked=checked?true:false;
if(this.checked==checked)return;this.checked=checked;zf_stdReplaceClassName(this.dom(),checked?"checkbox-off":"checkbox-on",checked?"checkbox-on":"checkbox-off");
};;function zfl_SlidesCookie(){var cookie=zf_stdGetCookie("zf_10y_slides");if(cookie==null||isNaN(this._value=parseInt(cookie))){var v=0;for(var key in zfl_SlidesCookie.packing){var packing=zfl_SlidesCookie.packing[key];
v=v|(packing.defaultValue<<packing.shift);}this._value=v;}}zfl_SlidesCookie.prototype._set=function(packing,value){var mask=((1<<packing.bits)-1)<<packing.shift;;this._value=(this._value&~mask)|(value<<packing.shift);
zf_stdSetCookie("zf_10y_slides",this._value,new Date(2020,1,1));};zfl_SlidesCookie.prototype._get=function(packing){return(this._value>>packing.shift)&((1<<packing.bits)-1);};zfl_SlidesCookie._bakeSet=function(name){var packing=this.packing[name];
;return function(value){this._set(packing,value);};};zfl_SlidesCookie._bakeGet=function(name){var packing=this.packing[name];;return function(){return this._get(packing);};};zfl_SlidesCookie.packing={speed:{shift:0,
bits:4,defaultValue:7},exif:{shift:4,bits:1,defaultValue:0},color:{shift:5,bits:4,defaultValue:0},caption:{shift:9,bits:1,defaultValue:0},transitions:{shift:10,bits:1,
defaultValue:1}};zfl_SlidesCookie.prototype.setColor=zfl_SlidesCookie._bakeSet("color");zfl_SlidesCookie.prototype.getColor=zfl_SlidesCookie._bakeGet("color");zfl_SlidesCookie.prototype.setSpeed=zfl_SlidesCookie._bakeSet("speed");
zfl_SlidesCookie.prototype.getSpeed=zfl_SlidesCookie._bakeGet("speed");zfl_SlidesCookie.prototype.setShowInfo=zfl_SlidesCookie._bakeSet("exif");zfl_SlidesCookie.prototype.getShowInfo=zfl_SlidesCookie._bakeGet("exif");
zfl_SlidesCookie.prototype.setAutoCaption=zfl_SlidesCookie._bakeSet("caption");zfl_SlidesCookie.prototype.getAutoCaption=zfl_SlidesCookie._bakeGet("caption");zfl_SlidesCookie.prototype.setTransitions=zfl_SlidesCookie._bakeSet("transitions");
zfl_SlidesCookie.prototype.getTransitions=zfl_SlidesCookie._bakeGet("transitions");;;function zfl_SlidesCaption(id,autoCheckbox){zfl_Caption.prototype.constructor.call(this,id);var self=this;
this._animIcon=new zf_Animation({"none":-100,"info":200},function(v){v=Math.min(Math.max(0,v),100);zf_stdSetOpacity(self.dom("icon-standard"),v/100);zf_stdSetOpacity(self.dom("icon-none"),
1-v/100);});this._animBox=new zf_Animation({"hidden":0,"visible":100},function(v){var dom=self.dom("box");dom.style.display=v>10?"block":"none";self.dom("background").style.height=dom.offsetHeight+"px";
zf_stdSetOpacity(dom,v/100);});this._animTip=new zf_Animation({"hidden":-100,"visible":200},function(v){v=Math.min(Math.max(0,v),100);zf_stdSetOpacity(self.dom("tip"),
v/100);});this.dom().onmouseover=this.eventHandler(this._icon_onmouseover);this.dom().onmouseout=this.eventHandler(this._icon_onmouseout);this._autoHide=new zf_DelayedInvoke(3000);
this._allowTip=zf_stdGetCookie("zf_10y_slidesct")==null;this._autoCheckbox=autoCheckbox;this._autoCheckbox.oncheck=function(checked){if(self.onautocaption)self.onautocaption(checked);
};}zfl_SlidesCaption.inherits(zfl_Caption);zfl_SlidesCaption.prototype.set=function(photo){zfl_Caption.prototype.set.call(this,photo);this._hasInfo=photo.title.length>0||(photo.flags&zf_PhotoFlags.HasCaption)!=0;
this._animIcon.animate(this._hasInfo?"info":"none",{s:100,t:200});if(!this._hasInfo)this.setCaption("No title or caption.",false);this._animBox.resync();this._autoHide.clear();
if(this._hasInfo&&this._autoShow){this._showBox();this._autoHide.invoke(this.closure(this._hideBox));}else if(!this._hasInfo&&this._autoHide.pending){this._autoHide.clear();
this._hideBox();}else if(this._hasInfo&&this._allowTip){this._showTip();}else{this._hideTip();}};zfl_SlidesCaption.prototype.setAutoShow=function(autoShow){this._autoShow=autoShow;
this._hideTip();this._autoCheckbox.check(autoShow);if(!this._autoShow){this._autoHide.clear();this._hideBox();}else if(this._hasInfo){this._showBox();this._autoHide.invoke(this.closure(this._hideBox));
}};zfl_SlidesCaption.prototype.setDisplay=function(show){};zfl_SlidesCaption.prototype._showBox=function(){this._animBox.animate("visible",{s:100,t:200});this._hideTip();};zfl_SlidesCaption.prototype._hideBox=function(){this._animBox.animate("hidden",
{s:100,t:500});};zfl_SlidesCaption.prototype._icon_onmouseover=function(e){this._showBox();this._autoHide.clear();if(this.oncapture)this.oncapture();};zfl_SlidesCaption.prototype._icon_onmouseout=function(e){this._hideBox();
if(this.onrelease)this.onrelease();};zfl_SlidesCaption.prototype.setTitle=function(text,loading){zfl_Caption.prototype.setTitle.call(this,text,loading);this._animBox.resync();};zfl_SlidesCaption.prototype.setCaption=function(html,
loading){zfl_Caption.prototype.setCaption.call(this,html,loading);this._animBox.resync();};zfl_SlidesCaption.prototype._showTip=function(){this._animTip.animate("visible",{s:100,
t:200});zf_stdSetCookie("zf_10y_slidesct","1",new Date(2020,1,1));this._allowTip=false;};zfl_SlidesCaption.prototype._hideTip=function(){this._animTip.animate("hidden",{s:100,t:200});
};;function zfl_SlidesThumbBox(id){zfl_Control.prototype.constructor.call(this,id);this._pool={};zf_stdMakeMethodsDeferred(this,this.id,["_set"]);}zfl_SlidesThumbBox.inherits(zfl_Control);
zfl_SlidesThumbBox.prototype.init=function(photoList){var self=this;var base,offset;var load=function(index){if(index<0||index>=photoList.length)return;var photo=photoList.get(index);
if(!photo.loaded)return;if(self._pool[photo.id])return;var loader=new zf_PhotoLoader(photo,zf_ProcessingMethod.StandardSmallThumbnail);self._pool[photo.id]=loader;
loader.start();};var prefetch=function(){if(self._index!=null){if(self._index!=base){offset=0;base=self._index;}else++offset;load(base+offset+1);load(base-offset);
}};setInterval(prefetch,400);};zfl_SlidesThumbBox.prototype.update=function(index,photo){if(this._index==index)return;this._index=index;zf_stdSetText(this.dom("index"),index+1);if(this._photo==photo)return;
this._photo=photo;if(this._photo)this._photo.unadvise(this);var method=zf_ProcessingMethod.StandardSmallThumbnail;if(!this._view){var node=this.dom("viewhost");if(node)node.parentNode.removeChild(node);
node=document.createElement("DIV");node.id=this.id+"-viewhost";node.className="slidesthumbbox-viewhost";var viewId=this.id+"-view";var plugins=[new zfl_WaitAnimationPlugin(true),
new zf_NoClickPlugin()];var context={};node.innerHTML=zf_PhotoView.createHtml(viewId,null,null,plugins,context,null,null);this.dom("image").appendChild(node);node=null;
this._view=new zf_PhotoView(viewId,plugins,context);this._view.waitTimeout=500;}else{this._view.clear();}if(photo.loaded){this._set(photo);}else{var self=this;photo.advise(this,
this.closure(this._set,photo));}};zfl_SlidesThumbBox.prototype.show=function(x,y){this.dom().style.left=x-35+"px";this.dom().style.top=y-83+"px";this.display(true);};zfl_SlidesThumbBox.prototype.hide=function(){this.display(false);
};zfl_SlidesThumbBox.prototype._set=function(photo){;var method=zf_ProcessingMethod.StandardSmallThumbnail;var loader=this._pool[photo.id];if(loader==null){this._pool[photo.id]=loader=new zf_PhotoLoader(photo,
method);}var self=this;var onload=function(state){if(state==zf_PhotoLoader.PasswordRequired){if(!loader.__zfl_onpassword){;;loader.__zfl_onpassword=function(){self._pool[photo.id]=null;
if(self._photo==photo){self._view.clear();self._set(photo);}};zfl_PasswordManager.subscribe(photo.access.ownerId,photo.access.realmId,loader.__zfl_onpassword);}}return false;
};this._view.onload=onload;this._view.load(loader);};;function zfl_SlidesSpeed(id){zfl_Control.prototype.constructor.call(this,id);this.index=0;}zfl_SlidesSpeed.inherits(zfl_Control);zfl_SlidesSpeed.speeds=[31000,
25000,19000,15000,11000,9000,7000,6000,5500,5000,4500,4000,3500,3000,2000];zfl_SlidesSpeed.prototype.set=function(index){if(index<0||index>=15)return false;if(index==this.index)return true;
this.index=index;for(var i=0;i<14;i++){var on=i<index;zf_stdReplaceClassName(this.dom("tick"+i),on?"slidesspeed-off":"slidesspeed-on",on?"slidesspeed-on":"slidesspeed-off");
}if(this.onchange)this.onchange(index);return true;};zfl_SlidesSpeed.prototype.increase=function(){return this.set(this.index+1);};zfl_SlidesSpeed.prototype.decrease=function(){return this.set(this.index-1);
};zfl_SlidesSpeed.prototype._slower_onmousedown=function(e){zf_stdStopPropagation(e);zf_stdPreventDefault(e);if(this._timerSlower==null){var self=this;var slower=function(){self._timerSlower=null;
if(self.decrease())self._timerSlower=setTimeout(slower,150);};slower();}return false;};zfl_SlidesSpeed.prototype._slower_onmouseup=function(e){if(this._timerSlower!=null){clearTimeout(this._timerSlower);
this._timerSlower=null;}};zfl_SlidesSpeed.prototype._faster_onmousedown=function(e){zf_stdStopPropagation(e);zf_stdPreventDefault(e);if(this._timerFaster==null){var self=this;var faster=function(){self._timerFaster=null;
if(self.increase())self._timerFaster=setTimeout(faster,150);};faster();}return false;};zfl_SlidesSpeed.prototype._faster_onmouseup=function(e){if(this._timerFaster!=null){clearTimeout(this._timerFaster);
this._timerFaster=null;}};;;function zfl_SlidesBar(id,checkboxes,speed){zfl_Control.prototype.constructor.call(this,id);this._checkboxes=checkboxes;this._speed=speed;var self=this;
this._anim=new zf_Animation({"hidden":100,"visible":0},function(v){self.dom().style.top=Math.max(0,Math.ceil(v))+"%";});this._thumbBox=new zfl_SlidesThumbBox(this.id+"-thumbbox");
this._delayedThumb=new zf_DelayedInvoke(1000);this._delayedThumbHide=function(){self._delayedThumb.invoke(function(){self._thumbBox.hide();});};this.setSpeed=speed.closure(speed.set);
this.toggleShowInfo=function(enable){self._checkboxes.showInfo.check(!self._checkboxes.showInfo.checked);self.onshowinfo(self._checkboxes.showInfo.checked);};}zfl_SlidesBar.inherits(zfl_Control);
zfl_SlidesBar.prototype.init=function(cookie,photoList){;;;;;;;this._cookie=cookie;this._photoList=photoList;this._thumbBox.init(photoList);var self=this;var cb;cb=this._checkboxes.showInfo;
cb.check(cookie.getShowInfo());cb.oncheck=this.closure(this.onshowinfo);this.onshowinfo(cb.checked);cb=this._checkboxes.transitions;cb.check(cookie.getTransitions());
cb.oncheck=this.closure(this.ontransitions);this.ontransitions(cb.checked);cb=this._checkboxes.autoCaption;cb.check(cookie.getAutoCaption());cb.oncheck=this.closure(this.onautocaption);
this.onautocaption(cb.checked);this._speed.set(cookie.getSpeed());this._speed.onchange=this.closure(this.onspeedchange);this.onspeedchange(this._speed.index);};zfl_SlidesBar.prototype.update=function(photo,
context){;;if(this.current==photo)return;if(this.current!=null)this.current.unadvise(this);var dom;if(this.currentIndex!=null){dom=this.dom("thumbsel"+this.currentIndex);
if(dom)zf_stdReplaceClassName(dom,"slidesbar-thumbsel-selected",null);dom=null;}this.current=photo;this.currentIndex=context.currentIndex;dom=this.dom("thumbsel"+this.currentIndex);
if(dom)zf_stdReplaceClassName(dom,null,"slidesbar-thumbsel-selected");dom=null;if(photo.loaded){this.set(photo,context);}else{var self=this;photo.advise(this,function(){self.set(photo,
context);});}var canBack=context.currentIndex>0;var canNext=context.currentIndex<context.photoList.length-1;zf_stdReplaceClassName(this.dom("buttons"),canBack?null:"slidesbar-can-back",
canBack?"slidesbar-can-back":null);zf_stdReplaceClassName(this.dom("buttons"),canNext?null:"slidesbar-can-next",canNext?"slidesbar-can-next":null);};zfl_SlidesBar.prototype.set=function(photo,
context){;};zfl_SlidesBar.prototype.show=function(jump){if(jump)this._anim.jump("visible");else this._anim.animate("visible",{s:100,t:150});};zfl_SlidesBar.prototype.hide=function(){this._thumbBox.hide();
this._anim.animate("hidden",{s:100,t:1000});};zfl_SlidesBar.prototype._rebuildThumbSelector=function(total){var width=Math.floor((total-60)/this._photoList.length);width=Math.max(width,
8);var length=Math.min(this._photoList.length,Math.floor((total-60)/width));var offset=Math.floor((total+2-length*width)/2);var block=this.dom("thumbselblock");block.innerHTML="";
block.style.left=offset+"px";block.style.width=width*length+"px";for(var i=0;i<length;i++){var dom=document.createElement("DIV");dom.id=this.id+"-thumbsel"+i;dom.className=i==this.currentIndex?"slidesbar-thumbsel slidesbar-thumbsel-selected":"slidesbar-thumbsel";
dom.style.left=i*width+1+"px";dom.style.width=width-2+"px";block.appendChild(dom);dom.onmouseover=this.eventHandler(this._thumbsel_onmouseover,i);dom.onmouseout=this.eventHandler(this._thumbsel_onmouseout,
i);dom.onclick=this.eventHandler(this._thumbsel_onclick,i);}};zfl_SlidesBar.prototype._thumbsel_onmouseover=function(e,index){zf_stdReplaceClassName(zf_stdGetEventSource(e),null,
"slidesbar-thumbsel-hover");this._delayedThumb.clear();this._showThumb(index);};zfl_SlidesBar.prototype._thumbsel_onmouseout=function(e,index){zf_stdReplaceClassName(zf_stdGetEventSource(e),
"slidesbar-thumbsel-hover",null);this._delayedThumbHide();};zfl_SlidesBar.prototype._thumbsel_onclick=function(e,index){this.onselect(index);};zfl_SlidesBar.prototype.recalc=function(){var width=this.dom().offsetWidth;
if(this._lastWidth==width)return;this._thumbBox.hide();this._lastWidth=width;this._rebuildThumbSelector(width);};zfl_SlidesBar.prototype._showThumb=function(index){var selector=this.dom("thumbsel"+index);
if(!selector){this._thumbBox.hide();return;}this._thumbBox.update(index,this._photoList.get(index));var pos=zf_stdGetOffset(selector,this.dom());this._thumbBox.show(pos.cx+Math.floor(selector.offsetWidth/2),
pos.cy-6);};zfl_SlidesBar.prototype._infoicon_onmouseover=function(e){this.dom("infobox").style.display="block";};zfl_SlidesBar.prototype._infoicon_onmouseout=function(e){this.dom("infobox").style.display="none";
};zfl_SlidesBar.prototype._next_onclick=function(e){this.onselect(this.currentIndex+1);};zfl_SlidesBar.prototype._back_onclick=function(e){this.onselect(this.currentIndex-1);};zfl_SlidesBar.prototype._play_onclick=function(e){this.onplay();
};zfl_SlidesBar.prototype._pause_onclick=function(e){this.onpause();};zfl_SlidesBar.prototype.setAutoCaption=function(enable){this._checkboxes.autoCaption.check(enable);};;function zfl_SlidesColorPicker(id){zfl_Control.prototype.constructor.call(this,
id);this._index=null;}zfl_SlidesColorPicker.inherits(zfl_Control);zfl_SlidesColorPicker.palette0=["#000","#1A1A1A","#333333","#404040","#666666","#808080","#999999","#B3B3B3","#CCCCCC","#E5E5E5","#FFFFFF"];
zfl_SlidesColorPicker.palette1=["#151515","#252525","#3A3A3A","#494949","#6F6F6F","#757575","#909090","#A0A0A0","#C2C2C2","#D8D8D8","#F5F5F5"];zfl_SlidesColorPicker.palette2=["#F5F5F5","#D8D8D8","#C2C2C2",
"#A0A0A0","#909090","#151515","#252525","#3A3A3A","#494949","#6F6F6F","#757575"];zfl_SlidesColorPicker.prototype.init=function(){var inner=document.createElement("DIV");inner.className="slidescp-inner";
var content=[];var palette=zfl_SlidesColorPicker.palette0;var i;for(i=palette.length-1;i>=0;i--)content.push('<div class="slidescp-box" ','id="',this.id,'-box',i,
'" ','style="background-color:',palette[i],'">','</div>');inner.innerHTML=content.join("");this.dom().appendChild(inner);for(i=0;i<palette.length;i++)this.dom("box"+i).onmouseover=this.eventHandler(this._box_onmouseover,
i);};zfl_SlidesColorPicker.prototype.set=function(index){if(this._index==index)return;this._index=index;if(this.onchange)this.onchange(this._index);};zfl_SlidesColorPicker.prototype._box_onmouseover=function(e,
index){this.set(index);};;;function zfl_FullSlideshow(id,flashbutton,flashvars){zfl_Control.prototype.constructor.call(this,id);this.html5=false;this.installed=zf_Flash.installed(9);
if(!zf_Flash.isSafeDomain())this.installed=false;this._flashbutton=flashbutton;this._flashvars=flashvars;this._currentIndex=0;this._selectIndex=null;zfl_PasswordManager.notify.attach(this.closure(this.refresh));
zf_stdMakeMethodsDeferred(this,this.id,["_update"]);this.onExitFullScreen=zf_stdMakeDeferred(id+".onExifFullScreen)",this.onExitFullScreen);this._delayedRefresh(1000);
}zfl_FullSlideshow.inherits(zfl_Control);zfl_FullSlideshow.prototype.refresh=function(){this.cleanup();if(!this.installed)return;var src=this._flashbutton?"/zf/code/slideshow/button.swf":"/zf/code/slideshow/5.9.1/fullsize.swf";
src="http://"+zf_cdnHost+src;this._flashvars.keyring=zf_stdGetCookie("zf_keyring");this._flashvars.start_index=this._currentIndex;var element=document.createElement("DIV");
element.id=this.id+"-container";element.className="slideshow-container";this.dom().appendChild(element);element.innerHTML=zf_Flash.createHtml(this.id+"-flash","pv-img pv-flash flash-restart",
src,this._flashvars,this._flashbutton);this._initialized=true;this._selectIndex=null;;};zfl_FullSlideshow.prototype._delayedRefresh=function(delay){this._initialized=false;var self=this;
setTimeout(function(){if(!self._initialized)self.refresh();},delay);;};zfl_FullSlideshow.prototype.cleanup=function(){var container=this.dom("container");if(container){container.parentNode.removeChild(container);
container.innerHTML="";container=null;};};zfl_FullSlideshow.prototype.onPhoto=function(id,index){this._selectIndex=index;if(this.onslide)this.onslide(id,index);;};zfl_FullSlideshow.prototype.onExitFullScreen=function(){;
if(this._flashbutton){this.cleanup();if(this._selectIndex!=null&&this.onselect)this.onselect(this._selectIndex);this._delayedRefresh(500);}};zfl_FullSlideshow.prototype.onPassword=function(password){;
};zfl_FullSlideshow.prototype.onMouseIn=function(){;};zfl_FullSlideshow.prototype.onMouseOut=function(){;};zfl_FullSlideshow.prototype.updateOptions=function(duration,background,showCaptions,showTransitions,volume){;
};zfl_FullSlideshow.prototype.backToGallery=function(){;var k=location.href.indexOf('/slideshow');if(k!=-1){url=location.href.substring(0,k);location.href=url;}};zfl_FullSlideshow.prototype.update=function(photo,
context){this._currentIndex=context.currentIndex;if(this.installed)this._update();};zfl_FullSlideshow.prototype._update=function(){;var flash=this.dom("flash");if(flash){try{flash.updateStartIndex(this._currentIndex);
;}catch(e){;}}flash=null;};;;function zfl_SlidesLayout(id,global,local){this._flash=local.flash;this._html5=false;if(this._flash&&this._flash.installed){zfl_Layout.prototype.constructor.call(this,
id,global,local);this.$dom().addClass("slides-flash-enabled");this._controls={};this._photoSet=zfl_stdTransformResponse(local.photoSet,"photoSet");this._flash.onslide=this.closure(this._registerSlideVisit);
return;}else if(this._html5){zfl_Layout.prototype.constructor.call(this,id,global,local);this.$dom().addClass("slides-html5-enabled");this._controls={};var html=zfl_Slideshow.createHtml(id+'-html5',
'pv-img pv-html5','#080808',0,0,true);$('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">').appendTo($('head'));
$('body').empty().html(html);var maxWidth=Math.min(zf_ProcessingMethod.StandardXXLargeSize.cx,window.innerWidth);var maxHeight=Math.min(zf_ProcessingMethod.StandardXXLargeSize.cy,
window.innerHeight);this._photoSet=zfl_stdTransformResponse(local.photoSet);this._slideshow=new zfl_Slideshow(id+'-html5',300,300,maxWidth,maxHeight,local.flash._flashvars,
this._photoSet,null,this._photoSet.owner,true,local.photoList);this._slideshow.onslide=this.closure(this._registerSlideVisit);return;}zfl_PhotoLayout.prototype.constructor.call(this,
id,global,local);this._cookie=new zfl_SlidesCookie();this._playable=function(){return this._playing&&!this._suspended&&!local.flipper.passwordEditing;};if(local.bar&&local.caption){local.bar.ontransitions=this.closure(this._bar_ontransitions);
local.bar.onshowinfo=this.closure(this._bar_onshowinfo);local.caption.onautocaption=local.bar.onautocaption=this.closure(this._bar_onautocaption);local.bar.onspeedchange=this.closure(this._bar_onspeedchange);
local.bar.onselect=this.closure(this._bar_onselect);local.bar.onplay=this.closure(this._bar_onplay);local.bar.onpause=this.closure(this._bar_onpause);local.caption.oncapture=this.closure(this._caption_oncapture);
local.caption.onrelease=this.closure(this._caption_onrelease);}this._controls.bar=local.bar;this._controls.caption=local.caption;this._controls.placeholder=local.placeholder;
this._controls.add(local.bar,this._cookie,this._photoList);this._controls.addDeferredUpdate("title",function(photo,context){document.title=[global.titlePrefix,zf_stdFormatString("photo {0} of {1}",
context.currentIndex+1,context.photoList.length),global.titleSuffix].join(" | ");});this._picker=new zfl_SlidesColorPicker(this.id+"-cp");this._picker.onchange=this.closure(this._picker_onchange);
this._picker.set(this._cookie.getColor());this._delayedBar=new zf_DelayedInvoke(3000);if(local.flipper)local.flipper.onpassword=this.closure(this._continue);if(local.autoStart){this._playing=true;
zf_stdReplaceClassName(this.dom(),"slides-paused","slides-playing");}}zfl_SlidesLayout.inherits(zfl_PhotoLayout);zfl_SlidesLayout.prototype.onrecalc=function(){if(this._flash&&this._flash.installed){zfl_Layout.prototype.onrecalc.call(this);
return;}if(this._html5)return;zfl_PhotoLayout.prototype.onrecalc.call(this);if(this._controls.bar)this._controls.bar.recalc();};zfl_SlidesLayout.prototype.onload=function(){if(this._flash&&this._flash.installed){zfl_Layout.prototype.onload.call(this);
return;}if(this._html5){this._slideshow.init();return;}zfl_PhotoLayout.prototype.onload.call(this);this._picker.init();if(this._controls.bar){var self=this;var delayedShow=function(){self._delayedBar.clear();
self._controls.bar.show();};var delayedHide=function(){self._delayedBar.invoke(function(){self._controls.bar.hide();});};this.dom("barspot").onmouseover=delayedShow;
this.dom("barspot").onmouseout=delayedHide;this._controls.bar.show(true);delayedHide();}this.dom("close").onclick=this.eventHandler(this._close_onclick);if(window.opener)zf_stdReplaceClassName(this.dom("close"),
"none",null);};zfl_SlidesLayout.prototype._flipper_onload=function(state,immediate){zfl_PhotoLayout.prototype._flipper_onload.call(this,state,immediate);};zfl_SlidesLayout.prototype._document_onkeydown=function(e){if(e.altKey||e.ctrlKey||e.metaKey)return true;
var sourceTag=zf_stdGetEventSource(e).tagName;if(sourceTag=="INPUT"||sourceTag=="TEXTAREA")return true;switch(e.keyCode){case 38:case 187:case 107:this._controls.bar.setSpeed(this._speed+1);
break;case 40:case 189:case 109:this._controls.bar.setSpeed(this._speed-1);break;case 32:this._playing=!this._playing;this._resync();break;case 69:this._controls.bar.toggleShowInfo();
break;default:return zfl_PhotoLayout.prototype._document_onkeydown.call(this,e);}zf_stdStopPropagation(e);zf_stdPreventDefault(e);return false;};zfl_SlidesLayout.prototype._picker_onchange=function(index){this.dom().style.backgroundColor=zfl_SlidesColorPicker.palette0[index];
if(this._controls.bar)this.dom("barback").style.backgroundColor=zfl_SlidesColorPicker.palette1[index];if(this._controls.placeholder)this._controls.placeholder.dom().style.color=zfl_SlidesColorPicker.palette2[index];
this._cookie.setColor(index);};zfl_SlidesLayout.prototype._bar_onselect=function(index){if(index<0||index==this.current.index||index>=this._photoList.length)return;if(this._timer!=null){clearTimeout(this._timer);
this._timer=null;}this.seek(index);};zfl_SlidesLayout.prototype._bar_ontransitions=function(enable){this._cookie.setTransitions(enable?1:0);this._controls.flipper.transitionEnabled=enable;
};zfl_SlidesLayout.prototype._bar_onshowinfo=function(enable){this._cookie.setShowInfo(enable?1:0);this.dom("exif").style.visibility=enable?"inherit":"hidden";};zfl_SlidesLayout.prototype._bar_onautocaption=function(enable){this._cookie.setAutoCaption(enable?1:0);
this._controls.caption.setAutoShow(enable);this._controls.bar.setAutoCaption(enable);};zfl_SlidesLayout.prototype._bar_onspeedchange=function(index){this._cookie.setSpeed(index);
this._speed=index;this._resync();};zfl_SlidesLayout.prototype._bar_onplay=function(){this._playing=true;this._resync(true);};zfl_SlidesLayout.prototype._bar_onpause=function(){this._playing=false;
this._resync();};zfl_SlidesLayout.prototype._resync=function(nodelay){;zf_stdReplaceClassName(this.dom(),this._playing?"slides-paused":"slides-playing",this._playing?"slides-playing":"slides-paused");
this._continue(nodelay);};zfl_SlidesLayout.prototype._continue=function(nodelay){var disableWait=false;if(this._timer!=null)clearTimeout(this._timer);if(this._playable()){var self=this;
var delay=zfl_SlidesSpeed.speeds[self._speed];if(this._controls.flipper.transitionEnabled)delay-=1500;if(delay<=0||nodelay)delay=1;var f=function(){if(!self._playable())return;
var next=(self.current.index+1)%self._photoList.length;;self.seek(next);};;disableWait=!nodelay;this._timer=setTimeout(f,delay);}zf_stdReplaceClassName(this._controls.flipper.dom(),
disableWait?null:"slides-wait-disabled",disableWait?"slides-wait-disabled":null);};zfl_SlidesLayout.prototype._flipper_ondisplay=function(photo,forced){zfl_PhotoLayout.prototype._flipper_ondisplay.call(this,
photo,forced);if(!forced)this._continue();};zfl_SlidesLayout.prototype._caption_oncapture=function(){this._suspended=true;this._resync();};zfl_SlidesLayout.prototype._caption_onrelease=function(){this._suspended=false;
this._resync();};zfl_SlidesLayout.prototype._close_onclick=function(e){if(window.opener)window.close();};zfl_SlidesLayout.prototype._registerSlideVisit=function(photoId,photoIndex){var sessionKey=zfl_SessionCookie.current.sessionKey;
zf_stdServerRequest("GET","/zf/layout/layout.asmx","RegisterVisit",[this._photoSet.owner.id,this._photoSet.id,photoId,this._photoSet.owner.id,this._photoSet.id,sessionKey],
zf_stdTrue);};;function zfl_ContactForm(id,form,error){zfl_Control.prototype.constructor.call(this,id);this._form=form;form.onsubmit=this.closure(this._form_onsubmit);form.onreply=this.closure(this._form_onreply);
}zfl_ContactForm.inherits(zfl_Control);zfl_ContactForm.prototype._form_onsubmit=function(data){if(this._form.verifyForm(data)==false)return false;var challenge=zf_utf8(data.challenge.substr(0,
8));data.response=zf_sha256(challenge.concat(zf_utf8(data.email)));return true;};zfl_ContactForm.prototype._form_onreply=function(result,error){if(!error)this._showResult("Your message has been sent.");
return true;};zfl_ContactForm.prototype._showResult=function(message,error){this.$dom("result").toggleClass("form-color1",!!error).removeClass("none").text(message);this.$("form").addClass("invisible");
};;function zfl_LoginForm(id,loginForm,resetForm,resetButton){zfl_Control.prototype.constructor.call(this,id);var self=this;this.onsuccess=zf_stdTrue;this._loginForm=loginForm;
this._resetForm=resetForm;this._resetButton=resetButton;this._loginForm.onsubmit=this.closure(this._login_onsubmit);this._loginForm.oninit=this.closure(this._login_oninit);
this.submit=this._loginForm.closure(this._loginForm.submit);this._resetForm.oninit=this.closure(this._reset_oninit);this._resetForm.onreply=this.closure(this._reset_onreply);
this._loginForm.field('password').bind('keydown',function(e){if(e.which==13)self._loginForm.submit();});this._resetForm.field('user').bind('keydown',function(e){if(e.which==13)self._resetForm.submit();
else if(e.which==27)self._reset_hide();});this.$('.cr-login-tip a').click(this.closure(this._reset_show));}zfl_LoginForm.inherits(zfl_Control);zfl_LoginForm.prototype._login_oninit=function(data){if(data.user)this._loginForm.field('password').focus();
else this._loginForm.field('user').focus();return true;};zfl_LoginForm.prototype._reset_oninit=function(data){return true;};zfl_LoginForm.prototype._login_onsubmit=function(data,handlers){if(this._loginPending)return false;
this._loginForm.clearStatus();if(!this._loginForm.verifyForm(data))return false;this._loginPending=true;handlers.onrequestsend();var self=this;zf_loginScoped(data.scopeId,
data.user,data.password,function(userName,errorMsg){handlers.onrequestcomplete();handlers.onreply(userName,errorMsg);self._loginPending=false;if(errorMsg){self._loginForm.showError(errorMsg);
self._loginForm.clear('password').focus();}else self.onsuccess(userName);});return false;};zfl_LoginForm.prototype._reset_show=function(){zfl_Curtain.show();var height=this.$dom('reset').detach().appendTo(document.body).show().outerHeight(true);
var top=(zf_stdGetClientHeight()-height)/2;var left=(zf_stdGetClientWidth()-324)/2;this.$dom('reset').css({top:top+"px",left:left+"px"});var email=this._loginForm.field('user').val();
this._resetForm.field('user').val(email).focus();this._resetForm.clearStatus();this.$dom('reset').find('.cr-reset-form').removeClass('invisible');this.$dom('reset').find('.cr-reset-confirm').addClass('none');
return false;};zfl_LoginForm.prototype._reset_hide=function(){zfl_Curtain.hide();this.$dom('reset').hide();return true;};zfl_LoginForm.prototype._reset_onreply=function(result,error){this._resetButton.togglePending(false);
if(error)return true;this.$dom('reset').find('.cr-reset-form').addClass('invisible');this.$dom('reset').find('.cr-reset-confirm').removeClass('none');return null;
};;function zfl_ClientAccessForm(id,form,error){zfl_Control.prototype.constructor.call(this,id);this._form=form;form.onsubmit=this.closure(this._form_onsubmit);form.onreply=this.closure(this._form_onreply);
if(error)form.setFieldError('code','Sorry, this code was not recognized');}zfl_ClientAccessForm.inherits(zfl_Control);zfl_ClientAccessForm.prototype._form_onsubmit=function(data){if(this._form.verifyForm(data)==false)return false;
this.$('.form-message').addClass('form-pending').text('Checking code...').show();return true;};zfl_ClientAccessForm.prototype._form_onreply=function(result,error){if(!error){setTimeout(function(){location.href=result;
},1000);}else{this.$('.form-message').removeClass('form-pending');}return true;};;function zfl_ClientPage(id,layout){zfl_Control.prototype.constructor.call(this,id);;this.layout=layout;
}zfl_ClientPage.inherits(zfl_Control);function zfl_AccountPage(id,layout){zfl_ClientPage.prototype.constructor.call(this,id,layout);this.$('.cl-account-link a[href="favorites.html"]').click(function(){layout.zenbar.showScrapbook();
return false;});}zfl_AccountPage.inherits(zfl_ClientPage);;function zfl_OrderPage(id,layout){zfl_ClientPage.prototype.constructor.call(this,id,layout);}zfl_OrderPage.inherits(zfl_ClientPage);zfl_OrderPage.prototype.print=function(){var features="menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes"+",width=980,left="+(screen.width-1000)+",top=0,height="+screen.height;
try{var w=window.open(location.href+"&print=1","_blank",features);if(w==null)return;}catch(e){;}};zfl_OrderPage.prototype.reorder=function(refId,token,cartUrl){;zf_stdServerRequest("POST",
"/zf/core/printing/printing.asmx","RepeatOrder",[zf_cartGetId(),refId,token],function(status,retVal){if(status!=200||retVal.error!=null)return;zf_cartSetId(retVal.result);
location.href=cartUrl;});};;function zfl_PaymentPage(id,layout,form,buttons){zfl_ClientPage.prototype.constructor.call(this,id,layout);this._form=form;this._buttons=buttons;
form.onrequestsend=function(){buttons.save.toggleEnabled(false).togglePending(true);buttons.clear.toggleEnabled(false);};form.onreply=function(reply,error){if(error){buttons.save.toggleEnabled(true).togglePending(false);
buttons.clear.toggleEnabled(true);}else{location.href='account.html';}};}zfl_PaymentPage.inherits(zfl_ClientPage);zfl_PaymentPage.prototype.clear=function(){var form=this._form;var buttons=this._buttons;
buttons.save.toggleEnabled(false);buttons.clear.toggleEnabled(false).togglePending(true);zf_stdServerRequestEx("POST","/zf/layout/client.asmx","ClearPaymentInfo",
[],function(reply,error){buttons.save.toggleEnabled(true);buttons.clear.toggleEnabled(true).togglePending(false);if(error){form.showMessage(error.message,true);return;
}form.clearStatus();form.clear();location.href='account.html';});};zfl_PaymentPage.prototype.save=function(){this._form.submit();};;function zfl_Expiration(id,pageId,animate){zfl_Control.prototype.constructor.call(this,
id);this._pageId=pageId;this._animate=animate;this._session=zfl_SessionCookie.current.sessionKey;zf_stdAttachEvent(window,"load",this.closure(this._window_onload));
this.$(".expires-close").click(this.closure(this._close_onclick));}zfl_Expiration._globalKey="layout.expiration.suppress";zfl_Expiration._sessionKey="layout.expiration.suppress.session";zfl_Expiration.inherits(zfl_Control);
zfl_Expiration.prototype._show=function(){if(this._animate){this.$dom().delay(500).animate({bottom:0},{duration:1500});}else{this.$dom().css({bottom:0});}};zfl_Expiration.prototype._window_onload=function(){var glist=zf_storage.getItem(zfl_Expiration._globalKey);
glist=!!glist?glist.split(','):[];var slist=zf_storage.getItem(zfl_Expiration._sessionKey);slist=!!slist?slist.split(':'):[];slist=(slist.length==2&&slist[0]==this._session)?slist[1].split(','):[];
var list=glist.concat(slist);if($.inArray(this._pageId,list)==-1)this._show();};zfl_Expiration.prototype._close_onclick=function(){var list;var again=!!this.$(".expires-check input").attr("checked");
if(!again){list=zf_storage.getItem(zfl_Expiration._globalKey);list=!!list?list.split(','):[];list.push(this._pageId);zf_storage.setItem(zfl_Expiration._globalKey,
list.join(','));}else{list=zf_storage.getItem(zfl_Expiration._sessionKey);list=!!list?list.split(':'):[];list=(list.length==2&&list[0]==this._session)?list[1].split(','):[];
list.push(this._pageId);zf_storage.setItem(zfl_Expiration._sessionKey,this._session+':'+list.join(','));}zf_stdRemoveCookie("zf_ren");this.$dom().hide();};;function zflb_Calendar(id){zfl_Control.prototype.constructor.call(this,
id);this.$('a.previous').click(function(){var year=$(this).closest('.year');year.closest('.view').animate({'left':-year.prev().position().left},'fast');return false;
});this.$('a.next').click(function(){var year=$(this).closest('.year');year.closest('.view').animate({'left':-year.next().position().left},'fast');return false;});
}zflb_Calendar.inherits(zfl_Control);;(function(window){'use strict';var lastTime=0,vendors=['moz','webkit','o','ms'],x;for(x=0;x<vendors.length&&!window.requestAnimationFrame;
x+=1){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];
}if(!window.cancelAnimationFrame){if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback){var now=new Date().getTime(),nextTime=Math.max(lastTime+16,
now);return window.setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=window.clearTimeout;}else{vendors=window.requestAnimationFrame;
lastTime={};window.requestAnimationFrame=function(callback){var id=x;x+=1;lastTime[id]=callback;vendors(function(timestamp){if(lastTime.hasOwnProperty(id)){var error;
try{lastTime[id](timestamp);}catch(e){error=e;}finally{delete lastTime[id];if(error){throw error;}}}});return id;};window.cancelAnimationFrame=function(id){delete lastTime[id];
};}}}(window));var __zfl_end_parsing=new Date().getTime();;