/*! For license information please see 3116.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3116],{3116:(e,t,i)=>{i.r(t),i.d(t,{calcite_rating:()=>d});var n=i(861),a=i(4421),s=i(8280),o=i(1402),l=i(3857),r=i(6591),c=i(3862),u=i(7572);i(6077),i(5603);const h=({full:e,scale:t,partial:i})=>(0,n.h)("calcite-icon",{class:i?void 0:"icon",icon:e?"star-f":"star",scale:t}),d=class{constructor(e){(0,n.r)(this,e),this.calciteRatingChange=(0,n.c)(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null,this.focusValue=null,this.hasFocus=!1},this.handleRatingFocusIn=()=>{const e=this.value>0?this.value-1:0,t=this.inputRefs[e],i=Number(t.value);t.select(),this.focusValue=i,this.hoverValue=i,this.hasFocus=!0},this.handleRatingFocusLeave=()=>{this.focusValue=null,this.hoverValue=null,this.hasFocus=!1},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleInputKeyDown=e=>{const t=e.currentTarget,i=Number(t.value),n=e.key,a=" "==n?void 0:Number(n);if(this.emit=!0,isNaN(a))switch(n){case"Enter":case" ":this.value=this.required||this.value!==i?i:0;break;case"ArrowLeft":this.value=i-1;break;case"ArrowRight":this.value=i+1;break;case"Tab":this.hasFocus&&(this.hasFocus=!1,this.focusValue=null,this.hoverValue=null)}else(!this.required&&a>=0&&a<=this.max||this.required&&a>0&&a<=this.max)&&(this.value=a)},this.handleInputChange=e=>{if(!0===this.isKeyboardInteraction){const t=Number(e.target.value);this.focusValue=t,this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{const t=e.currentTarget,i=Number(t.firstChild.value||0);this.hoverValue=i,this.focusValue=null},this.handleLabelPointerDown=e=>{const t=e.currentTarget,i=Number(t.firstChild.value||0);this.focusValue=null,this.hoverValue=null,this.emit=!0,this.value=this.required||this.value!==i?i:0},this.emit=!1,this.guid=`calcite-ratings-${(0,s.g)()}`,this.isKeyboardInteraction=!0,this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0,this.focusValue=void 0,this.hasFocus=void 0}onMessagesChange(){}handleValueUpdate(e){this.hoverValue=e,this.focusValue=e,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,u.c)(this),(0,l.c)(this),(0,a.c)(this)}async componentWillLoad(){await(0,u.s)(this),(0,r.s)(this),this.inputRefs=Array(this.max)}componentWillRender(){this.starsMap=Array.from({length:this.max},((e,t)=>{const i=t+1,n=!this.focusValue&&!this.hoverValue&&this.average&&!this.value&&i<=this.average,a=i===this.value,s=this.isKeyboardInteraction&&this.hasFocus&&this.focusValue===i,o=this.average&&this.average+1-i,l=i<=this.hoverValue;return{average:n,checked:a,focused:s,fraction:o,hovered:l,id:`${this.guid}-${i}`,idx:t,partial:!this.focusValue&&!this.hoverValue&&!this.value&&!l&&o>0&&o<1,selected:this.value>=i,value:i}}))}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){(0,c.d)(this),(0,u.d)(this),(0,l.d)(this),(0,a.d)(this)}componentDidRender(){(0,o.u)(this)}render(){return(0,n.h)(n.H,{onBlur:this.handleRatingFocusLeave,onFocus:this.handleRatingFocusIn,onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},(0,n.h)("span",{class:"wrapper"},(0,n.h)("fieldset",{class:"fieldset",disabled:this.disabled},(0,n.h)("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:e,checked:t,focused:i,fraction:a,hovered:s,id:o,idx:l,partial:r,selected:c,value:u})=>(0,n.h)("label",{class:{star:!0,focused:i,selected:c,hovered:s,average:e,partial:r},htmlFor:o,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver},(0,n.h)("input",{checked:t,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:o,name:this.guid,onChange:this.handleInputChange,onKeyDown:this.handleInputKeyDown,type:"radio",value:u,ref:e=>(this.inputRefs[l]=e,(1===u||u===this.value)&&(this.inputFocusRef=e))}),(0,n.h)(h,{full:c||e,scale:this.scale}),r&&(0,n.h)("div",{class:"fraction",style:{width:100*a+"%"}},(0,n.h)(h,{full:!0,partial:!0,scale:this.scale})),(0,n.h)("span",{class:"visually-hidden"},this.messages.stars.replace("${num}",`${u}`))))),(this.count||this.average)&&this.showChip?(0,n.h)("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&(0,n.h)("span",{class:"number--average"},this.average.toString()),!!this.count&&(0,n.h)("span",{class:"number--count"},"(",this.count?.toString(),")")):null),(0,n.h)(a.H,{component:this})))}onLabelClick(){this.setFocus()}async setFocus(){await(0,r.c)(this),this.inputFocusRef?.focus()}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},4421:(e,t,i)=>{i.d(t,{H:()=>y,a:()=>p,c:()=>h,d:()=>f,f:()=>d,r:()=>u,s:()=>c});var n=i(6077),a=i(861);!function(e){function t(e,t,i){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",i)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(function(e,i){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==i||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);const s="hidden-form-input";function o(e){return"checked"in e}const l=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function u(e){e.formEl?.reset()}function h(e){const{el:t,value:i}=e,a=d(e);if(!a||function(e,t){if((0,n.c)(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(i,(e=>{a=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=i,o(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||m).bind(e);a.addEventListener("reset",s),l.set(e.el,s),r.add(t)}function d(e){const{el:t,form:i}=e;return i?(0,n.q)(t,{id:i}):(0,n.c)(t,"form")}function m(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function f(e){const{el:t,formEl:i}=e;if(!i)return;const n=l.get(t);i.removeEventListener("reset",n),l.delete(t),e.formEl=null,r.delete(t)}function p(e,t){e.defaultValue=t}const v=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",v);function g(e,t,i){const{defaultValue:n,disabled:a,form:s,name:l,required:r}=e;t.defaultValue=n,t.disabled=a,t.name=l,t.required=r,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const y=({component:e})=>(function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:o}=t,l=t.querySelectorAll(`input[slot="${s}"]`);if(!i||!n)return void l.forEach((e=>{b(e),e.remove()}));const r=Array.isArray(a)?a:[a],c=[],u=new Set;let h;l.forEach((t=>{const i=r.find((e=>e==t.value));null!=i?(u.add(i),g(e,t,i)):c.push(t)})),r.forEach((t=>{if(u.has(t))return;let i=c.pop();i||(i=o.createElement("input"),i.slot=s),h||(h=o.createDocumentFragment()),h.append(i),i.addEventListener("change",v),g(e,i,t)})),h&&t.append(h),c.forEach((e=>{b(e),e.remove()}))}(e),(0,a.h)("slot",{name:s}))},1402:(e,t,i)=>{function n(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function a(e){e.preventDefault()}i.d(t,{u:()=>r});const s=["mousedown","mouseup","click"];function o(e){const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const l={capture:!0};function r(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),e.el.click=n,e.el.addEventListener("pointerdown",a,l),void s.forEach((t=>e.el.addEventListener(t,o,l)));e.el.click=HTMLElement.prototype.click,e.el.removeEventListener("pointerdown",a,l),s.forEach((t=>e.el.removeEventListener(t,o,l))),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}},3857:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>m,d:()=>f,g:()=>p,l:()=>s});var n=i(6077);const a="calciteInternalLabelClick",s="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",l="calcite-label",r=new WeakMap,c=new WeakMap,u=new WeakMap,h=new Set,d=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${l}[for="${t}"]`});if(i)return i;const a=(0,n.c)(e,l);return!a||function(e,t){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(n,a,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,a);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function m(e){const t=d(e.el);if(r.has(t)||!t&&h.has(e))return;const i=g.bind(e);if(t){e.labelEl=t;const n=v.bind(e);r.set(e.labelEl,n),e.labelEl.addEventListener(a,n),h.delete(e),document.removeEventListener(s,c.get(e)),u.set(e,i),document.addEventListener(o,i)}else h.has(e)||(i(),document.removeEventListener(o,u.get(e)))}function f(e){if(h.delete(e),document.removeEventListener(s,c.get(e)),document.removeEventListener(o,u.get(e)),c.delete(e),u.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);e.labelEl.removeEventListener(a,t),r.delete(e.labelEl)}function p(e){return e.label||e.labelEl?.textContent?.trim()||""}function v(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function b(){h.has(this)&&m(this)}function g(){h.add(this);const e=c.get(this)||b.bind(this);c.set(this,e),document.addEventListener(s,e)}},6591:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>l,s:()=>s});const n=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>n.set(e,t))))}function o(e){n.get(e)()}function l(e){return a.get(e)}}}]);