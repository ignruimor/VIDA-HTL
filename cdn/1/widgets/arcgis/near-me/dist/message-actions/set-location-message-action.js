System.register(["jimu-core"],(function(e,t){var r={};return{setters:[function(e){r.AbstractMessageAction=e.AbstractMessageAction,r.MessageType=e.MessageType,r.MutableStoreManager=e.MutableStoreManager}],execute:function(){e((()=>{"use strict";var e={48891:e=>{e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>t});var e=n(48891);class t extends e.AbstractMessageAction{filterMessageDescription(t){return t.messageType===e.MessageType.DataRecordsSelectionChange}filterMessageType(t){return t===e.MessageType.DataRecordsSelectionChange}filterMessage(e){return!0}onExecute(t,r){const n=t;if((null==n?void 0:n.records.length)>0){const t=(null==n?void 0:n.records[0]).feature.geometry;return e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"selectedIncidentLocation",t),!0}}getSettingComponentUri(e,t){return null}}})(),o})())}}}));