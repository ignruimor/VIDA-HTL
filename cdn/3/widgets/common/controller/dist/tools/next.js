System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},o={};return{setters:[function(e){r.appActions=e.appActions,r.getAppStore=e.getAppStore,r.i18n=e.i18n},function(e){o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={11407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o}},t={};function l(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,l),n.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";l.r(n),l.d(n,{default:()=>a});var e=l(48891),t=l(30726),r=l(3273),o=l.n(r),i=l(11407),s=l.n(i);class a{constructor(){this.index=2,this.id="controller-roll-list-next",this.classes={}}visible(t){var r,o;return!(null===(o=null===(r=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId])||void 0===r?void 0:r.hideArrow)||void 0===o||o)}disabled(t){const r=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];return null==r?void 0:r.disableNext}getGroupId(){return"controller-tools"}getTitle(){const r=e.i18n.getIntl("_jimu");return r?r.formatMessage({id:"next",defaultMessage:t.defaultMessages.next}):"Next"}getIcon(){var t;return(null===(t=(0,e.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)?s():o()}onClick(t){var r;const o=t.layoutItem.widgetId,l=(0,e.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];if(null==l?void 0:l.onArrowClick){l.onArrowClick(!1,!1);let t=null!==(r=null==l?void 0:l.version)&&void 0!==r?r:0;(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(o,"version",++t))}}getSettingPanel(e){return null}}})(),n})())}}}));