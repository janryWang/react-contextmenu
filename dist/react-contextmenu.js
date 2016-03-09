!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactContextMenu=t(require("react"),require("react-dom")):e.ReactContextMenu=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);Object.defineProperty(t,"ContextMenu",{enumerable:!0,get:function(){return o(r)["default"]}});var i=n(22);Object.defineProperty(t,"ContextMenuLayer",{enumerable:!0,get:function(){return o(i)["default"]}});var u=n(23);Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return o(u)["default"]}});var a=n(3);Object.defineProperty(t,"monitor",{enumerable:!0,get:function(){return o(a)["default"]}});var s=n(25);Object.defineProperty(t,"SubMenu",{enumerable:!0,get:function(){return o(s)["default"]}})},function(t,n){t.exports=e},function(e,t){"use strict";e.exports=!("undefined"==typeof window||!window.document||!window.document.createElement)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=o(r);t["default"]={getItem:function(){return i["default"].getState().currentItem},getPosition:function(){var e=i["default"].getState(),t=e.x,n=e.y;return{x:t,y:n}},hideMenu:function(){i["default"].dispatch({type:"SET_PARAMS",data:{isVisible:!1,currentItem:{}}})}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(55),i=n(24),u=o(i);t["default"]=(0,r.createStore)(u["default"])},function(e,t){"use strict";function n(e){return e&&e.ownerDocument||document}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,n){e.exports=t},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var u in o)i.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},function(e,t){"use strict";e.exports=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}},function(e,t,n){var o,r,i;!function(n,u){r=[t],o=u,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(this,function(e){var t=e;t.interopRequireDefault=function(e){return e&&e.__esModule?e:{"default":e}},t._extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}})},function(e,t,n){"use strict";var o=n(38),r=/^-ms-/;e.exports=function(e){return o(e.replace(r,"ms-"))}},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=Object.assign||function(e,t){for(var i,u,a=n(e),s=1;s<arguments.length;s++){i=Object(arguments[s]);for(var c in i)o.call(i,c)&&(a[c]=i[c]);if(Object.getOwnPropertySymbols){u=Object.getOwnPropertySymbols(i);for(var l=0;l<u.length;l++)r.call(i,u[l])&&(a[u[l]]=i[u[l]])}}return a}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return e="function"==typeof e?e():e,u["default"].findDOMNode(e)||t}t.__esModule=!0,t["default"]=r;var i=n(6),u=o(i);e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(6),i=o(r),u=n(5),a=o(u);t["default"]=function(e){return a["default"](i["default"].findDOMNode(e))},e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n,o){return"Invalid prop '"+t+"' of value '"+e[t]+"'"+(" supplied to '"+n+"'"+o)}function o(e){function t(t,n,o,r){return r=r||"<<anonymous>>",null!=n[o]?e(n,o,r):t?new Error("Required prop '"+o+"' was not specified in '"+r+"'."):void 0}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}t.__esModule=!0,t.errMsg=n,t.createChainableTypeChecker=o},function(e,t,n){"use strict";function o(e,t,n){return"object"!=typeof e[t]||"function"!=typeof e[t].render&&1!==e[t].nodeType?new Error(r.errMsg(e,t,n,", expected a DOM element or an object that has a `render` method")):void 0}t.__esModule=!0;var r=n(14);t["default"]=r.createChainableTypeChecker(o),e.exports=t["default"]},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],n=t.slice(0,-1);return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){function o(){h===p&&(h=p.slice())}function i(){return f}function s(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return o(),h.push(e),function(){if(t){t=!1,o();var n=h.indexOf(e);h.splice(n,1)}}}function c(e){if(!(0,u["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(v)throw new Error("Reducers may not dispatch actions.");try{v=!0,f=d(f,e)}finally{v=!1}for(var t=p=h,n=0;n<t.length;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");d=e,c({type:a.INIT})}if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var d=e,f=t,p=[],h=p,v=!1;return c({type:a.INIT}),{dispatch:c,subscribe:s,getState:i,replaceReducer:l}}t.__esModule=!0,t.ActionTypes=void 0,t["default"]=r;var i=n(19),u=o(i),a=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},function(e,t,n){function o(e){if(!i(e)||l.call(e)!=u||r(e))return!1;var t=d(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==c}var r=n(56),i=n(57),u="[object Object]",a=Object.prototype,s=Function.prototype.toString,c=s.call(Object),l=a.toString,d=Object.getPrototypeOf;e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),u=o(i),a=n(4),s=o(a),c=n(21),l=o(c),d=u["default"].PropTypes,f=u["default"].createClass({displayName:"ContextMenu",propTypes:{identifier:d.string.isRequired},getInitialState:function(){return s["default"].getState()},componentDidMount:function(){this.unsubscribe=s["default"].subscribe(this.handleUpdate)},componentWillUnmount:function(){this.unsubscribe&&this.unsubscribe()},handleUpdate:function(){this.setState(this.getInitialState())},render:function(){return u["default"].createElement(l["default"],r({},this.props,this.state))}});t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),u=o(i),a=n(3),s=o(a),c=n(44),l=o(c),d={position:"fixed",zIndex:1040,top:0,bottom:0,left:0,right:0},f=r({},d,{zIndex:"auto",backgroundColor:"transparent"}),p={position:"fixed",zIndex:"auto"},h=u["default"].createClass({displayName:"ContextMenuWrapper",getInitialState:function(){return{left:0,top:0}},componentWillReceiveProps:function(e){var t=this;if(e.isVisible===e.identifier){var n=window.requestAnimationFrame||setTimeout;n(function(){return t.setState(t.getMenuPosition(e.x,e.y))})}},shouldComponentUpdate:function(e){return this.props.isVisible!==e.visible},getMenuPosition:function(e,t){var n=document.documentElement.scrollTop,o=document.documentElement.scrollLeft,r=window,i=r.innerWidth,u=r.innerHeight,a=this.menu.getBoundingClientRect(),s={top:t+o,left:e+n};return t+a.height>u&&(s.top-=a.height),e+a.width>i&&(s.left-=a.width),s},render:function(){var e=this,t=this.props,n=t.isVisible,o=t.identifier,i=t.children,a=r({},p,this.state);return u["default"].createElement(l["default"],{style:d,backdropStyle:f,show:n===o,onHide:function(){return s["default"].hideMenu()}},u["default"].createElement("nav",{ref:function(t){return e.menu=t},style:a,className:"react-context-menu"},i))}});t["default"]=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=function(e,t){return function(n){var o=n.displayName||n.name||"Component";return(0,s["default"])(e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":r(e))||"function"==typeof e),"Expected identifier to be string, symbol or function. See %s",o),t&&(0,s["default"])("function"==typeof t,"Expected configure to be a function. See %s",o),u["default"].createClass({displayName:o+"ContextMenuLayer",handleContextClick:function(n){var r="function"==typeof t?t(this.props):{};(0,s["default"])((0,l["default"])(r),"Expected configure to return an object. See %s",o),n.preventDefault(),f["default"].dispatch({type:"SET_PARAMS",data:{x:n.clientX,y:n.clientY,currentItem:r,isVisible:"function"==typeof e?e(this.props):e}})},render:function(){return u["default"].createElement("div",{className:"react-context-menu-wrapper",onContextMenu:this.handleContextClick},u["default"].createElement(n,this.props))}})}};var i=n(1),u=o(i),a=n(42),s=o(a),c=n(43),l=o(c),d=n(4),f=o(d);u["default"].Component},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),u=n(7),a=o(u),s=n(11),c=o(s),l=n(3),d=o(l),f=i["default"].PropTypes,p=i["default"].createClass({displayName:"MenuItem",propTypes:{onClick:f.func.isRequired,data:f.object,disabled:f.bool,preventClose:f.bool},getDefaultProps:function(){return{disabled:!1,data:{}}},handleClick:function(e){var t=this.props,n=t.disabled,o=t.onClick,r=t.data,i=t.preventClose;e.preventDefault(),n||((0,c["default"])(r,d["default"].getItem()),"function"==typeof o&&o(e,r),i||d["default"].hideMenu())},render:function(){var e=this.props,t=e.disabled,n=e.children,o=(0,a["default"])({"react-context-menu-link":!0,disabled:t});return i["default"].createElement("div",{className:"react-context-menu-item"},i["default"].createElement("a",{href:"#",className:o,onClick:this.handleClick},n))}});t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];return"SET_PARAMS"===t.type?(0,i["default"])({},e,t.data):e};var r=n(11),i=o(r),u={x:0,y:0,isVisible:!1,currentItem:{}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r),u=n(7),a=o(u),s=n(26),c=o(s),l={position:"relative",zIndex:"auto"},d=i["default"].createClass({displayName:"SubMenu",propTypes:{title:i["default"].PropTypes.string.isRequired,disabled:i["default"].PropTypes.bool,hoverDelay:i["default"].PropTypes.number},getDefaultProps:function(){return{hoverDelay:500}},getInitialState:function(){return{visible:!1}},shouldComponentUpdate:function(e,t){return this.state.isVisible!==t.visible},handleClick:function(e){e.preventDefault()},handleMouseEnter:function(){var e=this;this.closetimer&&clearTimeout(this.closetimer),this.props.disabled||this.state.visible||(this.opentimer=setTimeout(function(){return e.setState({visible:!0})},this.props.hoverDelay))},handleMouseLeave:function(){var e=this;this.opentimer&&clearTimeout(this.opentimer),this.state.visible&&(this.closetimer=setTimeout(function(){return e.setState({visible:!1})},this.props.hoverDelay))},render:function(){var e=this,t=this.props,n=t.disabled,o=t.children,r=t.title,u=this.state.visible,s=(0,a["default"])({"react-context-menu-link":!0,disabled:n,active:u}),d="react-context-menu-item submenu";return i["default"].createElement("div",{ref:function(t){return e.item=t},className:d,style:l,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},i["default"].createElement("a",{href:"#",className:s,onClick:this.handleClick},r),i["default"].createElement(c["default"],{visible:u},o))}});t["default"]=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),u=o(i),a=u["default"].createClass({displayName:"SubMenuWrapper",getInitialState:function(){return{position:{top:!0,right:!0}}},componentWillReceiveProps:function(e){var t=this;if(e.visible){var n=window.requestAnimationFrame||setTimeout;n(function(){t.setState(t.getMenuPosition()),t.forceUpdate()})}else this.setState(this.getInitialState())},shouldComponentUpdate:function(e){return this.props.visible!==e.visible},getMenuPosition:function(){var e=window,t=e.innerWidth,n=e.innerHeight,o=this.menu.getBoundingClientRect(),r={};return o.bottom>n?r.bottom=!0:r.top=!0,o.right>t?r.left=!0:r.right=!0,{position:r}},getPositionStyles:function(){var e={},t=this.state.position;return t.top&&(e.top=0),t.bottom&&(e.bottom=0),t.right&&(e.left="100%"),t.left&&(e.right="100%"),e},render:function(){var e=this,t=this.props,n=t.children,o=t.visible,i=r({display:o?"block":"none",position:"absolute"},this.getPositionStyles());return u["default"].createElement("nav",{ref:function(t){return e.menu=t},style:i,className:"react-context-menu"},n)}});t["default"]=a},function(e,t,n){"use strict";function o(){var e=void 0===arguments[0]?document:arguments[0];try{return e.activeElement}catch(t){}}var r=n(9);t.__esModule=!0,t["default"]=o;var i=n(5);r.interopRequireDefault(i);e.exports=t["default"]},function(e,t,n){"use strict";var o=n(8);e.exports=function(e,t){e.classList?e.classList.add(t):o(e)||(e.className=e.className+" "+t)}},function(e,t,n){"use strict";e.exports={addClass:n(28),removeClass:n(30),hasClass:n(8)}},function(e,t){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},function(e,t,n){"use strict";var o=n(2),r=function(){};o&&(r=function(){return document.addEventListener?function(e,t,n,o){return e.removeEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0}()),e.exports=r},function(e,t,n){"use strict";var o=n(2),r=function(){};o&&(r=function(){return document.addEventListener?function(e,t,n,o){return e.addEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,n)}:void 0}()),e.exports=r},function(e,t,n){"use strict";var o=n(2),r=function(){var e=o&&document.documentElement;return e&&e.contains?function(e,t){return e.contains(t)}:e&&e.compareDocumentPosition?function(e,t){return e===t||!!(16&e.compareDocumentPosition(t))}:function(e,t){if(t)do if(t===e)return!0;while(t=t.parentNode);return!1}}();e.exports=r},function(e,t){"use strict";e.exports=function(e){return e===e.window?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}},function(e,t,n){"use strict";var o=n(9),r=n(10),i=o.interopRequireDefault(r),u=/^(top|right|bottom|left)$/,a=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;t=(0,i["default"])(t),"float"==t&&(t="styleFloat");var o=e.currentStyle[t]||null;if(null==o&&n&&n[t]&&(o=n[t]),a.test(o)&&!u.test(t)){var r=n.left,s=e.runtimeStyle,c=s&&s.left;c&&(s.left=e.currentStyle.left),n.left="fontSize"===t?"1em":o,o=n.pixelLeft+"px",n.left=r,c&&(s.left=c)}return o}}}},function(e,t,n){"use strict";var o=n(10),r=n(40),i=n(35),u=n(37),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var s="",c=t;if("string"==typeof t){if(void 0===n)return e.style[o(t)]||i(e).getPropertyValue(r(t));(c={})[t]=n}for(var l in c)a.call(c,l)&&(c[l]||0===c[l]?s+=r(l)+":"+c[l]+";":u(e,r(l)));e.style.cssText+=";"+s}},function(e,t){"use strict";e.exports=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)}},function(e,t){"use strict";var n=/-(.)/g;e.exports=function(e){return e.replace(n,function(e,t){return t.toUpperCase()})}},function(e,t){"use strict";var n=/([A-Z])/g;e.exports=function(e){return e.replace(n,"-$1").toLowerCase()}},function(e,t,n){"use strict";var o=n(39),r=/^ms-/;e.exports=function(e){return o(e).replace(r,"-ms-")}},function(e,t,n){"use strict";var o,r=n(2);e.exports=function(e){if((!o||e)&&r){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),o=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return o}},function(e,t,n){"use strict";var o=function(e,t,n,o,r,i,u,a){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,u,a],l=0;s=new Error(t.replace(/%s/g,function(){return c[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};e.exports=o},function(e,t){function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(1),a=o(u),s=n(58),c=o(s),l=n(15),d=o(l),f=n(51),p=o(f),h=n(46),v=o(h),y=n(45),m=o(y),b=n(13),g=o(b),_=n(47),x=o(_),w=n(48),M=o(w),E=n(2),O=o(E),T=n(27),C=o(T),P=n(33),S=o(P),N=n(12),j=o(N),k=new m["default"],I=a["default"].createClass({displayName:"Modal",propTypes:i({},v["default"].propTypes,{container:a["default"].PropTypes.oneOfType([d["default"],a["default"].PropTypes.func]),onShow:a["default"].PropTypes.func,onHide:a["default"].PropTypes.func,backdrop:a["default"].PropTypes.oneOfType([a["default"].PropTypes.bool,a["default"].PropTypes.oneOf(["static"])]),onEscapeKeyUp:a["default"].PropTypes.func,onBackdropClick:a["default"].PropTypes.func,backdropStyle:a["default"].PropTypes.object,backdropClassName:a["default"].PropTypes.string,containerClassName:a["default"].PropTypes.string,keyboard:a["default"].PropTypes.bool,transition:p["default"],dialogTransitionTimeout:a["default"].PropTypes.number,backdropTransitionTimeout:a["default"].PropTypes.number,autoFocus:a["default"].PropTypes.bool,enforceFocus:a["default"].PropTypes.bool}),getDefaultProps:function(){var e=function(){};return{show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,onHide:e}},getInitialState:function(){return{exited:!this.props.show}},render:function(){var e=this.props,t=(e.children,e.transition),n=e.backdrop,o=e.dialogTransitionTimeout,i=r(e,["children","transition","backdrop","dialogTransitionTimeout"]),s=i.onExit,c=i.onExiting,l=i.onEnter,d=i.onEntering,f=i.onEntered,p=!!i.show,h=a["default"].Children.only(this.props.children),y=p||t&&!this.state.exited;if(!y)return null;var m=h.props,b=m.role,g=m.tabIndex;return void 0!==b&&void 0!==g||(h=u.cloneElement(h,{role:void 0===b?"document":b,tabIndex:null==g?"-1":g})),t&&(h=a["default"].createElement(t,{transitionAppear:!0,unmountOnExit:!0,"in":p,timeout:o,onExit:s,onExiting:c,onExited:this.handleHidden,onEnter:l,onEntering:d,onEntered:f},h)),a["default"].createElement(v["default"],{ref:this.setMountNode,container:i.container},a["default"].createElement("div",{ref:"modal",role:i.role||"dialog",style:i.style,className:i.className},n&&this.renderBackdrop(),h))},renderBackdrop:function(){var e=this.props,t=e.transition,n=e.backdropTransitionTimeout,o=a["default"].createElement("div",{ref:"backdrop",style:this.props.backdropStyle,className:this.props.backdropClassName,onClick:this.handleBackdropClick});return t&&(o=a["default"].createElement(t,{transitionAppear:!0,"in":this.props.show,timeout:n},o)),o},componentWillReceiveProps:function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},componentWillUpdate:function(e){e.show&&this.checkForFocus()},componentDidMount:function(){this.props.show&&this.onShow()},componentDidUpdate:function(e){var t=this.props.transition;!e.show||this.props.show||t?!e.show&&this.props.show&&this.onShow():this.onHide()},componentWillUnmount:function(){var e=this.props,t=e.show,n=e.transition;(t||n&&!this.state.exited)&&this.onHide()},onShow:function(){var e=g["default"](this),t=j["default"](this.props.container,e.body);k.add(this,t,this.props.containerClassName),this._onDocumentKeyupListener=x["default"](e,"keyup",this.handleDocumentKeyUp),this._onFocusinListener=M["default"](this.enforceFocus),this.focus(),this.props.onShow&&this.props.onShow()},onHide:function(){k.remove(this),this._onDocumentKeyupListener.remove(),this._onFocusinListener.remove(),this.restoreLastFocus()},setMountNode:function(e){this.mountNode=e?e.getMountNode():e},handleHidden:function(){if(this.setState({exited:!0}),this.onHide(),this.props.onExited){var e;(e=this.props).onExited.apply(e,arguments)}},handleBackdropClick:function(e){e.target===e.currentTarget&&(this.props.onBackdropClick&&this.props.onBackdropClick(e),this.props.backdrop===!0&&this.props.onHide())},handleDocumentKeyUp:function(e){this.props.keyboard&&27===e.keyCode&&this.isTopModal()&&(this.props.onEscapeKeyUp&&this.props.onEscapeKeyUp(e),this.props.onHide())},checkForFocus:function(){O["default"]&&(this.lastFocus=C["default"]())},focus:function(){var e=this.props.autoFocus,t=this.getDialogElement(),n=C["default"](g["default"](this)),o=n&&S["default"](t,n);t&&e&&!o&&(this.lastFocus=n,t.hasAttribute("tabIndex")||(t.setAttribute("tabIndex",-1),c["default"](!1,'The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".')),t.focus())},restoreLastFocus:function(){this.lastFocus&&this.lastFocus.focus&&(this.lastFocus.focus(),this.lastFocus=null)},enforceFocus:function D(){var D=this.props.enforceFocus;if(D&&this.isMounted()&&this.isTopModal()){var e=C["default"](g["default"](this)),t=this.getDialogElement();t&&t!==e&&!S["default"](t,e)&&t.focus()}},getDialogElement:function(){var e=this.refs.modal;return e&&e.lastChild},isTopModal:function(){return k.isTopModal(this)}});I.manager=k,t["default"]=I,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=-1;return e.some(function(e,o){return t(e,o)?(n=o,!0):void 0}),n}function u(e,t){return i(e,function(e){return-1!==e.modals.indexOf(t)})}t.__esModule=!0;var a=n(36),s=o(a),c=n(29),l=o(c),d=n(41),f=o(d),p=n(49),h=o(p),v=n(50),y=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];r(this,e),this.hideSiblingNodes=t,this.modals=[],this.containers=[],this.data=[]}return e.prototype.add=function(e,t,n){var o=this.modals.indexOf(e),r=this.containers.indexOf(t);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&v.hideSiblings(t,e.mountNode),-1!==r)return this.data[r].modals.push(e),o;var i={modals:[e],classes:n?n.split(/\s+/):[],style:{overflow:t.style.overflow,paddingRight:t.style.paddingRight}},u={overflow:"hidden"};return i.overflowing=h["default"](t),i.overflowing&&(u.paddingRight=parseInt(s["default"](t,"paddingRight")||0,10)+f["default"]()+"px"),s["default"](t,u),i.classes.forEach(l["default"].addClass.bind(null,t)),this.containers.push(t),this.data.push(i),o},e.prototype.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=u(this.data,e),o=this.data[n],r=this.containers[n];o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length?(Object.keys(o.style).forEach(function(e){return r.style[e]=o.style[e]}),o.classes.forEach(l["default"].removeClass.bind(null,r)),this.hideSiblingNodes&&v.showSiblings(r,e.mountNode),this.containers.splice(n,1),this.data.splice(n,1)):this.hideSiblingNodes&&v.ariaHidden(!1,o.modals[o.modals.length-1].mountNode)}},e.prototype.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}();t["default"]=y,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(1),i=o(r),u=n(6),a=o(u),s=n(15),c=o(s),l=n(13),d=o(l),f=n(12),p=o(f),h=i["default"].createClass({displayName:"Portal",propTypes:{container:i["default"].PropTypes.oneOfType([c["default"],i["default"].PropTypes.func])},componentDidMount:function(){this._renderOverlay()},componentDidUpdate:function(){this._renderOverlay()},componentWillUnmount:function(){this._unrenderOverlay(),this._unmountOverlayTarget()},_mountOverlayTarget:function(){this._overlayTarget||(this._overlayTarget=document.createElement("div"),this.getContainerDOMNode().appendChild(this._overlayTarget))},_unmountOverlayTarget:function(){this._overlayTarget&&(this.getContainerDOMNode().removeChild(this._overlayTarget),this._overlayTarget=null)},_renderOverlay:function(){var e=this.props.children?i["default"].Children.only(this.props.children):null;null!==e?(this._mountOverlayTarget(),this._overlayInstance=a["default"].unstable_renderSubtreeIntoContainer(this,e,this._overlayTarget)):(this._unrenderOverlay(),this._unmountOverlayTarget())},_unrenderOverlay:function(){this._overlayTarget&&(a["default"].unmountComponentAtNode(this._overlayTarget),this._overlayInstance=null)},render:function(){return null},getMountNode:function(){return this._overlayTarget},getOverlayDOMNode:function(){if(!this.isMounted())throw new Error("getOverlayDOMNode(): A component must be mounted to have a DOM node.");return this._overlayInstance?this._overlayInstance.getWrappedDOMNode?this._overlayInstance.getWrappedDOMNode():a["default"].findDOMNode(this._overlayInstance):null},getContainerDOMNode:function(){return p["default"](this.props.container,d["default"](this).body)}});t["default"]=h,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(32),i=o(r),u=n(31),a=o(u);t["default"]=function(e,t,n){return i["default"](e,t,n),{remove:function(){a["default"](e,t,n)}}},e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=!document.addEventListener,n=void 0;return t?(document.attachEvent("onfocusin",e),n=function(){return document.detachEvent("onfocusin",e)}):(document.addEventListener("focus",e,!0),n=function(){return document.removeEventListener("focus",e,!0)}),{remove:n}}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return e&&"body"===e.tagName.toLowerCase()}function i(e){var t=l["default"](e),n=s["default"](t),o=n.innerWidth;if(!o){var r=t.documentElement.getBoundingClientRect();o=r.right-Math.abs(r.left)}return t.body.clientWidth<o}function u(e){var t=s["default"](e);return t||r(e)?i(e):e.scrollHeight>e.clientHeight}t.__esModule=!0,t["default"]=u;var a=n(34),s=o(a),c=n(5),l=o(c);e.exports=t["default"]},function(e,t){"use strict";function n(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}function o(e,t){a(e,t,function(e){return n(!0,e)})}function r(e,t){a(e,t,function(e){return n(!1,e)})}t.__esModule=!0,t.ariaHidden=n,t.hideSiblings=o,t.showSiblings=r;var i=["template","script","style"],u=function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===i.indexOf(n.toLowerCase())},a=function(e,t,n){t=[].concat(t),[].forEach.call(e.children,function(e){-1===t.indexOf(e)&&u(e)&&n(e)})}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var o=a.errMsg(e,t,n,". Expected an Element `type`");if("function"!=typeof e[t]){if(u["default"].isValidElement(e[t]))return new Error(o+", not an actual Element");if("string"!=typeof e[t])return new Error(o+" such as a tag name or return value of React.createClass(...)")}}t.__esModule=!0;var i=n(1),u=o(i),a=n(14);t["default"]=a.createChainableTypeChecker(r),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,o,r){var u=e(n,o,r),s=u.dispatch,c=[],l={getState:u.getState,dispatch:function(e){return s(e)}};return c=t.map(function(e){return e(l)}),s=a["default"].apply(void 0,c)(u.dispatch),i({},u,{dispatch:s})}}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.__esModule=!0,t["default"]=r;var u=n(16),a=o(u)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var o=Object.keys(e),r={},i=0;i<o.length;i++){var u=o[i],a=e[u];"function"==typeof a&&(r[u]=n(a,t))}return r}t.__esModule=!0,t["default"]=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=t&&t.type,o=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+o+". To ignore an action, you must explicitly return the previous state."}function i(e){Object.keys(e).forEach(function(t){var n=e[t],o=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof o)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:r}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++){var u=t[o];"function"==typeof e[u]&&(n[u]=e[u])}var a,s=Object.keys(n);try{i(n)}catch(c){a=c}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var o=!1,i={},u=0;u<s.length;u++){var c=s[u],l=n[c],d=e[c],f=l(d,t);if("undefined"==typeof f){var p=r(c,t);throw new Error(p)}i[c]=f,o=o||f!==d}return o?i:e}}t.__esModule=!0,t["default"]=u;var a=n(17),s=n(19),c=(o(s),n(18));o(c)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(17),i=o(r),u=n(54),a=o(u),s=n(53),c=o(s),l=n(52),d=o(l),f=n(16),p=o(f),h=n(18);o(h);t.createStore=i["default"],t.combineReducers=a["default"],t.bindActionCreators=c["default"],t.applyMiddleware=d["default"],t.compose=p["default"]},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";var o=function(){};e.exports=o}])});