
var browser;function InitBrowser(){browser=new Browser()};function Browser(){this.Firefox='';this.dummy=0;var browsername=navigator.appName;var version=parseFloat(navigator.appVersion);var netscape='Netscape';var iexplore='Microsoft Internet Explorer';this.isIE=false;this.isNetscape=false;if(browsername==netscape){this.isNetscape=true}else if(browsername==iexplore){this.isIE=true}else{}};Browser.prototype.IsIE=function(){return this.isIE};Browser.prototype.IsNetscape=function(){return this.isNetscape};