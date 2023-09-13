/*! For license information please see 4978.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4978],{9646:(e,t,n)=>{n.d(t,{a:()=>g,c:()=>m,d:()=>h,u:()=>y});var r=n(4479);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return"Tab"===e.key||9===e.keyCode},c=function(e){return s(e)&&!e.shiftKey},u=function(e){return s(e)&&e.shiftKey},l=function(e){return setTimeout(e,0)},b=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},f=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},d=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},p=[];const v=[];function m(e){const{focusTrapEl:t}=e;if(!t)return;null==t.tabIndex&&(t.tabIndex=-1);const n={clickOutsideDeactivates:!0,document:t.ownerDocument,escapeDeactivates:!1,fallbackFocus:t,setReturnFocus:e=>((0,r.f)(e),!1),tabbableOptions:r.p,trapStack:v};e.focusTrap=function(e,t){var n,a=(null==t?void 0:t.document)||document,o=(null==t?void 0:t.trapStack)||p,v=i({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:c,isKeyBackward:u},t),m={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},g=function(e,t,n){return e&&void 0!==e[t]?e[t]:v[n||t]},h=function(e){return m.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find((function(t){return t===e}))}))},y=function(e){var t=v[e];if("function"==typeof t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t=t.apply(void 0,r)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var o=t;if("string"==typeof t&&!(o=a.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return o},w=function(){var e=y("initialFocus");if(!1===e)return!1;if(void 0===e)if(h(a.activeElement)>=0)e=a.activeElement;else{var t=m.tabbableGroups[0];e=t&&t.firstTabbableNode||y("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},O=function(){if(m.containerGroups=m.containers.map((function(e){var t=(0,r.l)(e,v.tabbableOptions),n=(0,r.m)(e,v.tabbableOptions);return{container:e,tabbableNodes:t,focusableNodes:n,firstTabbableNode:t.length>0?t[0]:null,lastTabbableNode:t.length>0?t[t.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=n.findIndex((function(t){return t===e}));if(!(a<0))return t?n.slice(a+1).find((function(e){return(0,r.n)(e,v.tabbableOptions)})):n.slice(0,a).reverse().find((function(e){return(0,r.n)(e,v.tabbableOptions)}))}}})),m.tabbableGroups=m.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),m.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},E=function e(t){!1!==t&&t!==a.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!v.preventScroll}),m.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},F=function(e){var t=y("setReturnFocus",e);return t||!1!==t&&e},k=function(e){var t=d(e);h(t)>=0||(f(v.clickOutsideDeactivates,e)?n.deactivate({returnFocus:v.returnFocusOnDeactivate&&!(0,r.o)(t,v.tabbableOptions)}):f(v.allowOutsideClick,e)||e.preventDefault())},D=function(e){var t=d(e),n=h(t)>=0;n||t instanceof Document?n&&(m.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),E(m.mostRecentlyFocusedNode||w()))},I=function(e){if(("Escape"===(t=e).key||"Esc"===t.key||27===t.keyCode)&&!1!==f(v.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(v.isKeyForward(e)||v.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=d(e);O();var a=null;if(m.tabbableGroups.length>0){var i=h(n),o=i>=0?m.containerGroups[i]:void 0;if(i<0)a=t?m.tabbableGroups[m.tabbableGroups.length-1].lastTabbableNode:m.tabbableGroups[0].firstTabbableNode;else if(t){var c=b(m.tabbableGroups,(function(e){var t=e.firstTabbableNode;return n===t}));if(c<0&&(o.container===n||(0,r.o)(n,v.tabbableOptions)&&!(0,r.n)(n,v.tabbableOptions)&&!o.nextTabbableNode(n,!1))&&(c=i),c>=0){var u=0===c?m.tabbableGroups.length-1:c-1;a=m.tabbableGroups[u].lastTabbableNode}else s(e)||(a=o.nextTabbableNode(n,!1))}else{var l=b(m.tabbableGroups,(function(e){var t=e.lastTabbableNode;return n===t}));if(l<0&&(o.container===n||(0,r.o)(n,v.tabbableOptions)&&!(0,r.n)(n,v.tabbableOptions)&&!o.nextTabbableNode(n))&&(l=i),l>=0){var f=l===m.tabbableGroups.length-1?0:l+1;a=m.tabbableGroups[f].firstTabbableNode}else s(e)||(a=o.nextTabbableNode(n))}}else a=y("fallbackFocus");a&&(s(e)&&e.preventDefault(),E(a))}(e,v.isKeyBackward(e))},N=function(e){var t=d(e);h(t)>=0||f(v.clickOutsideDeactivates,e)||f(v.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(m.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)}(o,n),m.delayInitialFocusTimer=v.delayInitialFocus?l((function(){E(w())})):E(w()),a.addEventListener("focusin",D,!0),a.addEventListener("mousedown",k,{capture:!0,passive:!1}),a.addEventListener("touchstart",k,{capture:!0,passive:!1}),a.addEventListener("click",N,{capture:!0,passive:!1}),a.addEventListener("keydown",I,{capture:!0,passive:!1}),n},T=function(){if(m.active)return a.removeEventListener("focusin",D,!0),a.removeEventListener("mousedown",k,!0),a.removeEventListener("touchstart",k,!0),a.removeEventListener("click",N,!0),a.removeEventListener("keydown",I,!0),n};return(n={get active(){return m.active},get paused(){return m.paused},activate:function(e){if(m.active)return this;var t=g(e,"onActivate"),n=g(e,"onPostActivate"),r=g(e,"checkCanFocusTrap");r||O(),m.active=!0,m.paused=!1,m.nodeFocusedBeforeActivation=a.activeElement,t&&t();var i=function(){r&&O(),S(),n&&n()};return r?(r(m.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!m.active)return this;var t=i({onDeactivate:v.onDeactivate,onPostDeactivate:v.onPostDeactivate,checkCanReturnFocus:v.checkCanReturnFocus},e);clearTimeout(m.delayInitialFocusTimer),m.delayInitialFocusTimer=void 0,T(),m.active=!1,m.paused=!1,function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(o,n);var r=g(t,"onDeactivate"),a=g(t,"onPostDeactivate"),s=g(t,"checkCanReturnFocus"),c=g(t,"returnFocus","returnFocusOnDeactivate");r&&r();var u=function(){l((function(){c&&E(F(m.nodeFocusedBeforeActivation)),a&&a()}))};return c&&s?(s(F(m.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return m.paused||!m.active||(m.paused=!0,T()),this},unpause:function(){return m.paused&&m.active?(m.paused=!1,O(),S(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return m.containers=t.map((function(e){return"string"==typeof e?a.querySelector(e):e})),m.active&&O(),this}}).updateContainerElements(e),n}(t,n)}function g(e){e.focusTrapDisabled||e.focusTrap?.activate()}function h(e){e.focusTrap?.deactivate()}function y(e){e.focusTrap?.updateContainerElements(e.focusTrapEl)}},6296:(e,t,n)=>{function r(e){return"Enter"===e||" "===e}n.d(t,{i:()=>r,n:()=>a});const a=["0","1","2","3","4","5","6","7","8","9"]},3201:(e,t,n)=>{n.d(t,{a:()=>o,c:()=>s,s:()=>i});const r=new WeakMap,a=new WeakMap;function i(e){a.set(e,new Promise((t=>r.set(e,t))))}function o(e){r.get(e)()}function s(e){return a.get(e)}},8337:(e,t,n)=>{n.d(t,{a:()=>F,b:()=>k,c:()=>N,d:()=>S,g:()=>D,i:()=>u,n:()=>_,p:()=>l,s:()=>v});var r=n(4479),a=n(6296),i=n(5056);const o=new RegExp("-","g"),s=new RegExp("\\.?0+$");class c{constructor(e){if(this.add=e=>c.fromBigInt(this.value+new c(e).value),this.subtract=e=>c.fromBigInt(this.value-new c(e).value),this.multiply=e=>c._divRound(this.value*new c(e).value,c.SHIFT),this.divide=e=>c._divRound(this.value*c.SHIFT,new c(e).value),e instanceof c)return e;const[t,n]=String(e).split(".").concat("");this.value=BigInt(t+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace(o,"").padStart(c.DECIMALS+1,"0");return{integers:e.slice(0,-c.DECIMALS),decimals:e.slice(-c.DECIMALS).replace(s,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals(),r=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&r.unshift({type:"minusSign",value:e.minusSign}),n.length&&(r.push({type:"decimal",value:e.decimal}),n.split("").forEach((e=>r.push({type:"fraction",value:e})))),r}format(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}${n.length?`${e.decimal}${n.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}}function u(e){return!(!e||isNaN(Number(e)))}function l(e){return e&&(t=e,a.n.some((e=>t.includes(e))))?m(e,(e=>{let t=!1;const n=e.split("").filter(((e,n)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==n)||a.n.includes(e))).reduce(((e,t)=>e+t));return u(n)?new c(n).toString():""})):"";var t}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(e,t)=>c.fromBigInt(e/t+(c.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),c.fromBigInt=e=>Object.assign(Object.create(c.prototype),{value:e});const b=/^([-0])0+(?=\d)/,f=/(?!^\.)\.$/,d=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,v=e=>m(e,(e=>{const t=e.replace(d,"").replace(f,"").replace(b,"$1");return u(t)?p.test(t)?t:new c(t).toString():e}));function m(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((e,n)=>t(1===n?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}const g="en",h=["ar","bg","bs","ca","cs","da","de","el",g,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],y=["ar","bg","bs","ca","cs","da","de","de-CH","el",g,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],w=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],O=e=>w.includes(e),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,F="arab"!==E&&O(E)?E:"latn",k=e=>O(e)?e:F;function D(e,t="cldr"){const n="cldr"===t?y:h;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,n)=>`${t}-${n.toUpperCase()}`)),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),g)):g}const I=new Set;function N(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,r.c)(e.el,"[lang]")?.lang||document.documentElement.lang||g}(e)}(e),0===I.size&&T?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),I.add(e)}function S(e){I.delete(e),0===I.size&&T.disconnect()}const T=(0,i.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;I.forEach((e=>{if(!(0,r.a)(t,e.el))return;const n=(0,r.c)(e.el,"[lang]");if(!n)return void(e.effectiveLocale=g);const a=n.lang;e.effectiveLocale=n.hasAttribute("lang")&&""===a?g:a}))}))})),_=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?m(e,(e=>e.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?m(e,(e=>u(e.trim())?new c(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=D(e?.locale),e.numberingSystem=k(e?.numberingSystem),!this._numberFormatOptions&&e.locale===g&&e.numberingSystem===F&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const t=new Map(this._digits.map(((e,t)=>[e,t]))),n=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=n.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=n.find((e=>"decimal"===e.type)).value,this._minusSign=n.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>t.get(e)}}},5056:(e,t,n)=>{function r(e,t,n){const r=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new r(t,n)}n.d(t,{c:()=>r})},8363:(e,t,n)=>{n.d(t,{c:()=>b,d:()=>f,s:()=>c,u:()=>l});var r=n(6553),a=n(8337);const i={};function o(){throw new Error("could not fetch component message bundle")}function s(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await u(e,e.effectiveLocale),s(e)}async function u(e,t){const{el:n}=e,s=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return i[n]||(i[n]=fetch((0,r.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||o(),e.json()))).catch((()=>o()))),i[n]}((0,a.g)(t,"t9n"),s)}async function l(e,t){e.defaultMessages=await u(e,t),s(e)}function b(e){e.onMessagesChange=d}function f(e){e.onMessagesChange=void 0}function d(){s(this)}}}]);