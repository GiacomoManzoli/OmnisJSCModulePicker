!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(1),t)},function(e,t,r){"use strict";var o,n=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.ctrl_com_888sp_modulepicker=void 0;var i=r(2),s={filter:"$::filter",titlefontsize:"$titlefontsize",fontsize:"$::fontsize",boxwidth:"$boxwidth",boxheight:"$boxheight",boxcolor:"$boxcolor",boxtextcolor:"$boxtextcolor",backgroundcolor:"$::backgroundcolor",defaultcollapsed:"$defaultcollapsed",boxhasshadow:"$boxhasshadow",boxborderwidth:"$boxborderwidth",boxborderradius:"$boxborderradius",boxbordercolor:"$boxbordercolor",showgroups:"$showgroups",boxtitlealign:"$boxtitlealign",grouphorzscroll:"$grouphorzscroll"},l=2,a=function(e){function t(){var t=e.call(this)||this;return t.autoUpdate=!1,t.init_class_inst(),t}return n(t,e),t.prototype.init_ctrl_inst=function(t,r,o,n){e.prototype.init_ctrl_inst.call(this,t,r,o,n);var i=this.getClientElem(),l=JSON.parse(i.getAttribute("data-props"));for(var a in this.initModulePicker(i),s){var c=l[a];this.setProperty(s[a],c)}return this.update(),!1},t.prototype.updateCtrl=function(e,t,r,o){var n=this.getClientElem(),i=this.getData(),s=new omnis_list(i);if(this.mData=i,i){for(var l=[],a=1;a<=s.getRowCount();a++)l.push({id:s.getData("id",a),group:s.getData("group",a),name:s.getData("name",a)});this.picker.setModules(l),this.picker.render()}else n.innerHTML="MODULE PICKER"},t.prototype.handleEvent=function(t){if(!this.isEnabled())return!0;switch(t.type){case"click":return!0}e.prototype.handleEvent.call(this,t)},t.prototype.getCanAssign=function(t){return Object.values(s).includes(t.toString())||e.prototype.getCanAssign.call(this,t)},t.prototype.setProperty=function(t,r){if(!this.getCanAssign(t))return!1;if(t)switch(t){case s.filter:return this.picker.setFilter(r.toString()),this.picker.render(),!0;case s.defaultcollapsed:return this.picker.defaultCollapsed=r,!0;case s.backgroundcolor:return this.picker.backgroundColor=this.getTheme().getColorString(r),!0;case s.fontsize:return this.picker.fontSize=r,!0;case s.titlefontsize:return this.picker.titleFontSize=r,!0;case s.boxcolor:return this.picker.boxColor=this.getTheme().getColorString(r),!0;case s.boxheight:return this.picker.boxHeight=r,!0;case s.boxwidth:return this.picker.boxWidth=r,!0;case s.boxtextcolor:return this.picker.boxTextColor=this.getTheme().getColorString(r),!0;case s.boxhasshadow:return this.picker.boxHasShadow=r,!0;case s.boxborderwidth:return this.picker.boxBorderWidth=r,!0;case s.boxborderradius:return this.picker.boxBorderRadius=r,!0;case s.boxbordercolor:return this.picker.boxBorderColor=this.getTheme().getColorString(r),!0;case s.boxtitlealign:return this.picker.boxTitleAlign=r,!0;case s.showgroups:return this.picker.showGroups=r,!0;case s.grouphorzscroll:return this.picker.groupHorzScroll=r,!0}return e.prototype.setProperty.call(this,t,r)},t.prototype.getProperty=function(t){switch(t){case s.filter:return this.picker.filter;case s.backgroundcolor:return this.picker.backgroundColor;case s.fontsize:return this.picker.fontSize;case s.titlefontsize:return this.picker.titleFontSize;case s.boxcolor:return this.picker.boxColor;case s.boxheight:return this.picker.boxHeight;case s.boxwidth:return this.picker.boxWidth;case s.boxtextcolor:return this.picker.boxTextColor;case s.boxhasshadow:return this.picker.boxHasShadow;case s.boxborderwidth:return this.picker.boxBorderWidth;case s.boxborderradius:return this.picker.boxBorderRadius;case s.boxbordercolor:return this.picker.boxBorderColor;case s.boxtitlealign:return this.picker.boxTitleAlign;case s.grouphorzscroll:return this.picker.groupHorzScroll}return e.prototype.getProperty.call(this,t)},t.prototype.initModulePicker=function(e){var t=this;this.picker=new i.ModulePicker(e),this.picker.addEventListener("moduleclick",(function(e,r,o){t.canSendEvent(l)&&(t.eventParamsAdd("pModuleId",r),t.eventParamsAdd("pModuleName",o.name),t.eventParamsAdd("pModuleGroup",o.group),t.sendEvent("evModuleClick"))}))},t}(ctrl_base);t.ctrl_com_888sp_modulepicker=a},function(e,t,r){"use strict";var o=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,l=i.length;s<l;s++,n++)o[n]=i[s];return o};Object.defineProperty(t,"__esModule",{value:!0}),t.ModulePicker=t.TextAlign=t.Module=void 0,r(3);var n,i=function(e){this.id=0,this.id=e.id,this.group=e.group,this.name=e.name};t.Module=i,function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center"}(n=t.TextAlign||(t.TextAlign={}));var s=function(){},l=function(){function e(e){this.filter="",this.rendered=new Map,this.defaultCollapsed=!1,this.boxHasShadow=!1,this.boxBorderWidth=0,this.boxBorderRadius=0,this.boxTitleAlign=n.Center,this.groupHorzScroll=!1,this.showGroups=!0,this.container=e,this.container.innerHTML="",this.handlers=new Map,this.rendered=new Map}return e.prototype.addEventListener=function(e,t){this.handlers.set(e,t)},e.prototype.setModules=function(e){var t=this;e=o(e),this.showGroups||e.forEach((function(e){e.group=""})),e.forEach((function(e){var r=e.group;if(t.rendered.has(r)){t.rendered.get(r).modules.push({visible:!0,module:e,element:null})}else{var o=new s;o.group=e.group,o.expanded=!t.defaultCollapsed||!t.showGroups,o.visible=!0,o.element=null,o.modules=[{visible:!0,module:e,element:null}],t.rendered.set(r,o)}}))},e.prototype.setFilter=function(e){this.filter=e,"0"==this.filter&&(this.filter="")},e.prototype.applyFilter=function(){var e=this.rendered,t=this.filter.toLocaleLowerCase();return e.forEach((function(e){e.visible=!1,e.modules.forEach((function(r){r.visible=""==t||r.module.name.toLocaleLowerCase().includes(t)||r.module.group.toLocaleLowerCase().includes(t),e.visible=e.visible||r.visible}))})),e},e.prototype.createGroupElement=function(e){var t=this,r=document.createElement("div");if(r.style.display="flex",r.style.flexDirection="column",this.showGroups){var o=document.createElement("p");o.style.fontWeight="bold",o.style.cursor="pointer",o.style.fontSize=this.titleFontSize+"pt";var n=document.createElement("span");n.innerText="+",n.style.display="inline-block",n.style.width=this.titleFontSize+1+"pt",n.style.height=this.titleFontSize+1+"pt",n.style.textAlign="center",o.appendChild(n);var i=document.createElement("span");i.innerText="",o.appendChild(i),r.appendChild(o),o.onclick=function(r){e.expanded=!e.expanded,t.updateGroupElement(e);var o=e.element.querySelector("ul");if(o){o.style.display=e.expanded?"flex":"none";for(var n=o.getElementsByClassName("tab-ripple"),i=0;i<n.length;i++)n.item(i).remove()}}}else r.style.height="100%";var s=document.createElement("ul");return s.style.display=e.expanded?"flex":"none",s.style.flex="1",this.groupHorzScroll?(s.style.flexWrap="nowrap",s.style.overflowX="auto"):s.style.flexWrap="wrap",s.style.width="100%",s.style.listStyleType="none",s.style.padding="0",this.showGroups||(s.style.margin="0"),r.appendChild(s),r},e.prototype.updateGroupElement=function(e){if(e.element.style.display=e.visible?"flex":"none",this.showGroups){var t=e.element.querySelector("p"),r=Array.from(t.querySelectorAll("span")),o=r[0],n=r[1];o.innerText=e.expanded?"-":"+",n.innerText=e.group}},e.prototype.createModuleElement=function(e){var t=this,r=document.createElement("li");r.style.cursor="pointer",r.style.display=e.visible?"flex":"none",r.style.position="relative",r.style.overflow="hidden",r.style.alignItems="center",r.style.justifyContent="center",r.style.width=this.boxWidth+"px",r.style.height=this.boxHeight+"px",r.style.color=this.boxTextColor,r.style.backgroundColor=this.boxColor,r.style.fontSize=this.fontSize+"pt",r.style.minWidth=r.style.width,r.style.minHeight=r.style.height,this.showGroups?r.style.margin="16px":this.groupHorzScroll?r.style.margin="0 16px 4px 0":r.style.margin="0 16px 16px 0",this.boxHasShadow&&(r.style.boxShadow="\n        0 2px 8px 0 rgba(var(--shadow-color), 0.14), \n        0 1px 8px 0 rgba(var(--shadow-color), 0.12),\n        0 1px 2px -1px rgba(var(--shadow-color), 0.2)"),this.boxBorderWidth>0&&(r.style.borderColor=this.boxBorderColor,r.style.borderStyle="solid",r.style.borderWidth=this.boxBorderWidth+"px"),this.boxBorderRadius&&(r.style.borderRadius=this.boxBorderRadius+"px"),r.style.animation="append-animate .3s linear";var o=document.createElement("span");switch(o.innerText=e.module.name,o.style.flex="1",o.style.overflow="hidden",o.style.textOverflow="ellipsis",this.boxTitleAlign){case n.Left:o.style.textAlign="left";break;case n.Right:o.style.textAlign="right";break;case n.Center:o.style.textAlign="center"}return o.style.padding="8px",r.appendChild(o),r.onclick=function(r){t.onModuleClick(r,e.module.id,e.module)},r},e.prototype.updateModuleElement=function(e){e.element.style.display=e.visible?"flex":"none",e.element.querySelector("span").innerText=e.module.name;var t=e.element.getElementsByClassName("tab-ripple")[0];t&&t.remove()},e.prototype.render=function(){this.container.style.backgroundColor=this.backgroundColor,this.container.style.whiteSpace="initial";for(var e=this.applyFilter(),t=Array.from(e.keys()),r=t.length-1;r>=0;r--){var o=e.get(t[r]);if(!o.element)if(o.element=this.createGroupElement(o),0==r)this.container.insertBefore(o.element,this.container.firstChild);else if(r==t.length-1)this.container.appendChild(o.element);else{var n=e.get(t[r+1]).element;this.container.insertBefore(o.element,n)}this.updateGroupElement(o);for(var i=o.element.querySelector("ul"),s=o.modules.length-1;s>=0;s--){var l=o.modules[s];if(l.element)i.removeChild(l.element);else{if(l.element=this.createModuleElement(l),i)if(0==s)i.insertBefore(l.element,i.firstChild);else if(s==o.modules.length-1)i.appendChild(l.element);else{var a=o.modules[s+1].element;i.insertBefore(l.element,a)}this.updateModuleElement(l)}}}},e.prototype.onModuleClick=function(e,t,r){var o=e.currentTarget,n=document.createElement("span"),i=Math.max(o.clientWidth,o.clientHeight),s=i/2;n.style.width=n.style.height=i+"px",n.style.left=e.clientX-(o.offsetLeft+s)+"px",n.style.top=e.clientY-(o.offsetTop+s)+"px",n.classList.add("tab-ripple");var l=o.getElementsByClassName("tab-ripple")[0];l&&l.remove(),o.appendChild(n),e.preventDefault(),e.stopPropagation();var a=this.handlers.get("moduleclick");a&&a(e,t,r)},e}();t.ModulePicker=l},function(e,t,r){var o=r(4),n=r(5);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};o(n,i);e.exports=n.locals||{}},function(e,t,r){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}e[t]=r}return e[t]}}(),s=[];function l(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function a(e,t){for(var r={},o=[],n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],c=r[a]||0,u="".concat(a," ").concat(c);r[a]=c+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:m(p,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function h(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function m(e,t){var r,o,n;if(t.singleton){var i=b++;r=f||(f=c(t)),o=p.bind(null,r,i,!1),n=p.bind(null,r,i,!0)}else r=c(t),o=h.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=l(r[o]);s[n].references--}for(var i=a(e,t),c=0;c<r.length;c++){var u=l(r[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}r=i}}}},function(e,t,r){(t=r(6)(!1)).push([e.i,"@keyframes tab-ripple {\n    to {\n        transform: scale(4);\n        opacity: 0;\n    }\n}\n\nspan.tab-ripple {\n    position: absolute; /* The absolute position we mentioned earlier */\n    border-radius: 50%;\n    transform: scale(0);\n    animation: tab-ripple 600ms linear;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n@keyframes append-animate {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(s=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var s,l,a;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);o&&n[a[0]]||(r&&(a[2]?a[2]="".concat(r," and ").concat(a[2]):a[2]=r),t.push(a))}},t}}]));