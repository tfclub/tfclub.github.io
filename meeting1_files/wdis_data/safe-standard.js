var psgNrisid = "1f88bffSYFKu";
// safe-standard@gecko.js

var psgNriiso;
try {
	psgNriiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psgNriwid != null);
} catch(e) {
	psgNriiso = false;
}
if (psgNriiso) {
	window.psgNriwid = opener.psgNriwid + 1;
	psgNrisid = psgNrisid + "_" + window.psgNriwid;
} else {
	window.psgNriwid = 1;
}
function psgNrin() {
	return (new Date()).getTime();
}
var psgNris = psgNrin();
function psgNrist(f, t) {
	if ((psgNrin() - psgNris) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psgNriol = false;
function psgNriow() {
	if (psgNriol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psgNrin();
		var url = "http://messenger.providesupport.com/messenger/1aum3goa12lfr144oqlbj59p0z.html?ps_s=" + psgNrisid;
		if (true && !false) {
			window.open(url, pswn, pswo); 
		} else {
			var w = window.open("", pswn, pswo); 
			try {
				w.document.body.innerHTML += '<form id="pscf" action="http://messenger.providesupport.com/messenger/1aum3goa12lfr144oqlbj59p0z.html" method="post" target="' + pswn + '" style="display:none"><input type="hidden" name="ps_s" value="'+psgNrisid+'"></form>';
				w.document.getElementById("pscf").submit();
			} catch (e) {
				w.location.href = url;
			}
		}
	} else if (1 == 2) {
		document.location = "http\u003a\u002f\u002f";
	}
}
var psgNriil;
var psgNriit;
function psgNripi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != psgNriil) || (it != psgNriit)) {
		psgNriil = il;
		psgNriit = it;
		var d = document.getElementById('cigNri');
		if (d != null) {
			d.style.left  = Math.round(psgNriil) + "px";
			d.style.top  = Math.round(psgNriit) + "px";
		}
	}
	setTimeout("psgNripi()", 100);
}
var psgNrilc = 0;
function psgNrisi(t) {
	window.onscroll = psgNripi;
	window.onresize = psgNripi;
	psgNripi();
	psgNrilc = 0;
	var url = "https://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1aum3goa12lfr144oqlbj59p0z.html?ps_s=" + psgNrisid + "&ps_t=" + psgNrin() + "";
	var d = document.getElementById('cigNri');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psgNrild()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psgNrild() {
	if (psgNrilc == 1) {
		var d = document.getElementById('cigNri');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psgNrilc++;
}
if (false) {
	psgNrisi(1);
}
var psgNrid = document.getElementById('scgNri');
if (psgNrid != null) {
	if (psgNriol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = 'alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psgNriow(); return false;"><img name="psgNriimage" src="https://image.providesupport.com/image/1aum3goa12lfr144oqlbj59p0z/offline-1600683376.gif" width="140" height="60" style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/1aum3goa12lfr144oqlbj59p0z" target="_blank"><img src="https://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((140 >= 140) || (140 >= 60)) {
				psgNrid.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psgNrid.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psgNrid.innerHTML = '<a href="#" onclick="psgNriow(); return false;"><img name="psgNriimage" src="https://image.providesupport.com/image/1aum3goa12lfr144oqlbj59p0z/offline-1600683376.gif" width="140" height="60" border="0"'+tt+'></a>';
		}
	} else {
		psgNrid.innerHTML = '';
	}
}
var psgNriop = false;
function psgNrico() {
	var w1 = psgNrici.width - 1;
	psgNriol = (w1 & 1) != 0;
	psgNrisb(psgNriol ? "https://image.providesupport.com/image/1aum3goa12lfr144oqlbj59p0z/online-1172892062.gif" : "https://image.providesupport.com/image/1aum3goa12lfr144oqlbj59p0z/offline-1600683376.gif");
	psgNriscf((w1 & 2) != 0);
	var h = psgNrici.height;

	if (h == 1) {
		psgNriop = false;

	// manual invitation
	} else if ((h == 2) && (!psgNriop)) {
		psgNriop = true;
		psgNrisi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psgNriop)) {
		psgNriop = true;
		psgNrisi(2);
		//alert("Auto invitation in standard code");
	}
}
var psgNrici = new Image();
psgNrici.onload = psgNrico;
var psgNripm = false;
var psgNricp = psgNripm ? 30 : 60;
var psgNrict = null;
function psgNriscf(p) {
	if (psgNripm != p) {
		psgNripm = p;
		psgNricp = psgNripm ? 30 : 60;
		if (psgNrict != null) {
			clearTimeout(psgNrict);
			psgNrict = null;
		}
		psgNrict = psgNrist("psgNrirc()", psgNricp);
	}
}
function psgNrirc() {
	psgNrict = psgNrist("psgNrirc()", psgNricp);
	try {
		psgNrici.src = "https://image.providesupport.com/cmd/1aum3goa12lfr144oqlbj59p0z?" + "ps_t=" + psgNrin() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psgNrisid + "" + "&amp%3Bps_t=1382500996944";
	} catch(e) {
	}
}
psgNrirc();
var psgNricb = "https://image.providesupport.com/image/1aum3goa12lfr144oqlbj59p0z/offline-1600683376.gif";
function psgNrisb(b) {
	if (psgNricb != b) {
		var i = document.images['psgNriimage'];
		if (i != null) {
			i.src = b;
		}
		psgNricb = b;
	}
}

