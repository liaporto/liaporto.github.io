"use strict";!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(s){s.ui=s.ui||{},s.ui.version="1.12.1",s.ui.focusable=function(e,i){var t,n,a,u,r=e.nodeName.toLowerCase();return"area"===r?(n=(t=e.parentNode).name,!(!e.href||!n||"map"!==t.nodeName.toLowerCase())&&0<(n=s("img[usemap='#"+n+"']")).length&&n.is(":visible")):(/^(input|select|textarea|button|object)$/.test(r)?(a=!e.disabled)&&(u=s(e).closest("fieldset")[0])&&(a=!u.disabled):a="a"===r&&e.href||i,a&&s(e).is(":visible")&&function(e){for(var i=e.css("visibility");"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(s(e)))},s.extend(s.expr[":"],{focusable:function(e){return s.ui.focusable(e,null!=s.attr(e,"tabindex"))}}),s.ui.focusable,s.extend(s.expr[":"],{tabbable:function(e){var i=s.attr(e,"tabindex"),t=null!=i;return(!t||0<=i)&&s.ui.focusable(e,t)}})});
"use strict";function toggleLanguage(){switch(window.location.pathname){case"/pt-br/":return window.location="/en-us";case"/en/":default:return window.location="/pt-br"}}!function(e){var o=40;e(document).click(function(a){!e(".navbar-collapse").hasClass("show")||e(a.target).hasClass("navbar-collapse")||e(a.target).parents().hasClass("navbar-collapse")||e("#navbarSupportedContent").collapse("hide")}),e("#navbarSupportedContent").on("show.bs.collapse",function(){e(".hamburger").addClass("is-active")}),e("#navbarSupportedContent").on("hide.bs.collapse",function(){e(".hamburger").removeClass("is-active")}),e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=(t=e(this.hash)).length?t:e("[name="+this.hash.slice(1)+"]");if((e(a.target).hasClass("back-to-top")||e(a.target).parents().hasClass("back-to-top"))&&(o=70),t.length)return e("html, body").animate({scrollTop:t.offset().top-o},800,function(){e(t).focus()}),!1}}),e(".js-scroll-trigger").click(function(){e("#navbarSupportedContent").collapse("hide")}),e("body").scrollspy({target:"#topNav",offset:o+5})}(jQuery);