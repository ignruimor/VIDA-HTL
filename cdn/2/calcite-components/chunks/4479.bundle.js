"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4479],{4479:(t,e,n)=>{n.d(e,{a:()=>P,b:()=>k,c:()=>q,d:()=>G,e:()=>x,f:()=>F,g:()=>U,h:()=>D,i:()=>J,j:()=>j,k:()=>C,l:()=>w,m:()=>v,n:()=>E,o:()=>N,p:()=>R,q:()=>$,r:()=>V,s:()=>Y,t:()=>X,u:()=>K,v:()=>I,w:()=>T,x:()=>z,y:()=>H});var r=n(2894),o=n(8020),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],a=i.join(","),u="undefined"==typeof Element,l=u?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!u&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},s=function(t,e,n){var r=Array.prototype.slice.apply(t.querySelectorAll(a));return e&&l.call(t,a)&&r.unshift(t),r.filter(n)},f=function t(e,n,r){for(var o=[],i=Array.from(e);i.length;){var u=i.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),s=t(c.length?c:u.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:u,candidates:s})}else{l.call(u,a)&&r.filter(u)&&(n||!e.includes(u))&&o.push(u);var f=u.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(u),d=!r.shadowRootFilter||r.shadowRootFilter(u);if(f&&d){var h=t(!0===f?u.children:f.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:u,candidates:h})}else i.unshift.apply(i,u.children)}}return o},d=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},h=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},p=function(t){return"INPUT"===t.tagName},m=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},g=function(t,e){return!(e.disabled||function(t){return p(t)&&"hidden"===t.type}(e)||function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=l.call(t,"details>summary:first-of-type")?t.parentElement:t;if(l.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(t)}else{if("function"==typeof r){for(var i=t;t;){var a=t.parentElement,u=c(t);if(a&&!a.shadowRoot&&!0===r(a))return m(t);t=t.assignedSlot?t.assignedSlot:a||u===t.ownerDocument?a:u.host}t=i}if(function(t){for(var e,n=c(t).host,r=!!(null!==(e=n)&&void 0!==e&&e.ownerDocument.contains(n)||t.ownerDocument.contains(t));!r&&n;){var o;r=!(null===(o=n=c(n).host)||void 0===o||!o.ownerDocument.contains(n))}return r}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!l.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},y=function(t,e){return!(function(t){return function(t){return p(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||c(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!o||o===t}(t)}(e)||d(e)<0||!g(t,e))},S=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},b=function t(e){var n=[],r=[];return e.forEach((function(e,o){var i=!!e.scopeParent,a=i?e.scopeParent:e,u=d(a,i),l=i?t(e.candidates):a;0===u?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:u,item:e,isScope:i,content:l})})),r.sort(h).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},w=function(t,e){var n;return n=(e=e||{}).getShadowRoot?f([t],e.includeContainer,{filter:y.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:S}):s(t,e.includeContainer,y.bind(null,e)),b(n)},v=function(t,e){return(e=e||{}).getShadowRoot?f([t],e.includeContainer,{filter:g.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):s(t,e.includeContainer,g.bind(null,e))},E=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==l.call(t,a)&&y(e,t)},A=i.concat("iframe").join(","),N=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==l.call(t,A)&&g(e,t)};const R={getShadowRoot:!0};function C(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function I(t){return Array.isArray(t)?t:Array.from(t)}function x(t){return q(t,`.${o.C.darkMode}, .${o.C.lightMode}`)?.classList.contains("calcite-mode-dark")?"dark":"light"}function k(t){const e=q(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function D(t,e,n){const r=`[${e}]`,o=t.closest(r);return o?o.getAttribute(e):n}function T(t){return t.getRootNode()}function L(t){return t.host||null}function $(t,{selector:e,id:n}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=T(r),i=n?"getElementById"in o?o.getElementById(n):null:e?o.querySelector(e):null,a=L(o);return i||(a?t(a):null)}(t)}function q(t,e){return function t(n){return n?n.closest(e)||t(L(T(n))):null}(t)}function O(t,e){return M(t,e)}function M(t,e){if(!t)return;const n=e(t);if(void 0!==n)return n;const{parentNode:r}=t;return M(r instanceof ShadowRoot?r.host:r,e)}function P(t,e){return!!O(e,(e=>e===t||void 0))}async function F(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function j(t){(w(t,R)[0]||t).focus()}const B=":not([slot])";function U(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const r=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:B;return n?.all?function(t,e,n){let r=e===B?_(t,B):Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((e=>e.parentElement===t)),r=n?.matches?r.filter((t=>t?.matches(n.matches))):r;const o=n?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):r}(t,r,n):function(t,e,n){let r=e===B?_(t,B)[0]||null:t.querySelector(e);r=n&&!1===n.direct||r?.parentElement===t?r:null,r=n?.matches?r?.matches(n.matches)?r:null:r;const o=n?.selector;return o?r?.querySelector(o):r}(t,r,n)}function _(t,e){return t?Array.from(t.children||[]).filter((t=>t?.matches(e))):[]}function z(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function G(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function V(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function X(t){return Boolean(t).toString()}function Y(t){return!!H(t).length}function H(t){return t.target.assignedElements({flatten:!0})}function J(t){return!(!t.isPrimary||0!==t.button)}const K=(t,e,n)=>{const r=t.indexOf(e),o=0===r,i=r===t.length-1;let a;switch(n="previous"===n&&o?"last":"next"===n&&i?"first":n){case"first":a=t[0];break;case"last":a=t[t.length-1];break;case"next":a=t[r+1]||t[0];break;case"previous":a=t[r-1]||t[t.length-1]}return F(a),a}},2894:(t,e,n)=>{n.d(e,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}]);