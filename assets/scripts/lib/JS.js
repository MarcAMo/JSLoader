define(navigator.userAgent.indexOf("MSIE 8.0")>-1?["lib/IE8_Polyfill"]:[],function(){"use strict";var e={getType:function(e){return Object.prototype.toString.call(e)},Eventer:{windowLoad:function(e){return"function"!=typeof e?null:"complete"===document.readyState?e():void window.addEventListener("load",e)}},Creater:{createInstance:function(e,t){return t=Array.prototype.slice.call(t),t.splice(0,0,void 0),new(e.bind.apply(e,t))}},Loader:function(){return new function(){function t(e){for(var t in e)n(t,e[t])}function n(t,o){var i=e.getType(o);if("[object Array]"===i)for(var u=0;u<o.length;u++)n(t,o[u]);else if("[object Object]"===i){var a={callback:void 0,errback:void 0};for(var c in a)o[c]="function"==typeof o[c]?o[c]:a[c];o.hasOwnProperty("extensions")&&"[object Array]"===e.getType(o.extensions)||(o.extensions=null),o.styles=r(o.styles),f(t,o)}else console.error("Invalid Configuration given for "+t+"!",o)}function r(t){var n=[];switch(e.getType(t)){case"[object String]":n=[{href:t}];break;case"[object Array]":for(var r=[],f=0;f<t.length;f++){var u=o(t[f]);u=i(u),void 0!==u&&r.push(u)}n=r}return n}function o(e){if("string"==typeof e||void 0!==e.href){if("string"==typeof e)return o({href:e});if("string"!=typeof e.href);else{var t=e.href.indexOf(".css");if(t===e.href.length-4)return e;if(t==-1)return e.href+=".css",e}}}function i(e){if("object"==typeof e&&void 0!==e.href){var t={rel:"stylesheet",media:"all",type:"text/css"};for(var n in t)e[n]=e[n]?e[n]:t[n];return e}}function f(e,t){y.hasOwnProperty(e)||(y[e]=[]),y[e].push(t)}function u(e){void 0===e&&(e=requireBase);for(var t in y)a(e,t,y[t])}function a(e,t,n){for(var r=!1,o=0;o<n.length&&(r=s(e,t,n[o],r));o++);}function c(){if(w){w=!1;for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e].ownerNode.attributes;g.push(t.getNamedItem("href").value)}}}function s(e,t,n,r){return!(!r&&!v(t)||(l(n.styles),null!==n.extensions&&e(n.extensions,n.callback,n.errback),0))}function l(e){e.length>0&&void 0===b&&(b=document.querySelector("head"));for(var t=0;t<e.length;t++){var n=e[t];if(g.indexOf(n.href)===-1){var r=document.createElement("link");for(var o in n){var i=n[o];r.setAttribute(o,i)}b.appendChild(r),g.push(n.href)}}}function v(e){return d(e)}function d(e){for(var t,n=e.split("||"),r=0;r<n.length&&!(t=p(n[r]));r++);return t}function p(e){for(var t,n=e.split("&&"),r=0;r<n.length&&(t=h(n[r]));r++);return t}function h(e){var t=e.indexOf("!")>-1;t&&(e=e.split("!").pop());var n=document.querySelector(e);return t?!n:!!n}var y={},g=[],b=void 0,w=!0,m=function(){};return m.prototype={getConfig:function(){return y},addConfig:function(e){return t(e),this},load:function(t){e.Eventer.windowLoad(function(){c(),u(t)})}},new m}}};return{getLoader:function(){return e.Loader()},getEventer:function(){return e.Eventer},getCreater:function(){return e.Creater}}});