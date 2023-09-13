System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var r={},i={},s={};return{setters:[function(e){r.React=e.React,r.css=e.css,r.getAppStore=e.getAppStore,r.jsx=e.jsx},function(e){i.Switch=e.Switch,i.TextInput=e.TextInput,i.defaultMessages=e.defaultMessages,i.hooks=e.hooks},function(e){s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={48891:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i},77756:e=>{"use strict";e.exports=s}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{default:()=>h});var e=o(48891),t=o(30726),r=o(77756);const i={wayOfAddingData:"Way of adding data",selectFromAccount:"Select from account",inputUrl:"Input URL",uploadFiles:"Upload files",emptyListMessage:"Empty list message",defaultPlaceholderText:"There is currently no added data."};class s{constructor(t){this.db=null,this.closed=!1,this.dbName=function(t){var r,i;return`exb-${(null===(r=window.jimuConfig)||void 0===r?void 0:r.isBuilder)?null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appId:(0,e.getAppStore)().getState().appId}-add-data-${t}-cache`}(t),this.storeName="added-data"}init(){return indexedDB?Promise.resolve().then((()=>{const e=indexedDB.open(this.dbName);return e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(this.storeName)||t.createObjectStore(this.storeName)},a(e)})).then((e=>{this.closed?e.close():this.db=e})):Promise.reject()}initialized(){return null!=this.db}close(){this.db&&(this.db.close(),this.db=null),this.closed=!0}put(e,t){return null==this.db?Promise.reject("indexedb:not-initialized"):a(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t,e)).then()}putAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).put(e.value,e.key)})),d(t)}get(e){return null==this.db?Promise.reject("indexedb:not-initialized"):a(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e))}getAll(){return null==this.db?Promise.reject("indexedb:not-initialized"):a(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).getAll())}delete(e){return null==this.db?Promise.reject("indexedb:not-initialized"):a(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e))}deleteAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).delete(e)})),d(t)}clear(){return null==this.db?Promise.reject("indexedb:not-initialized"):a(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).clear())}destroy(){this.db&&this.db.deleteObjectStore(this.storeName),this.close()}}function a(e){return new Promise(((t,r)=>{"done"===e.readyState?null!=e.error?r(e.error):t(e.result):(e.onsuccess=()=>t(e.result),e.onerror=()=>r(e.error))}))}function d(e){return new Promise(((t,r)=>{e.oncomplete=()=>t(),e.onerror=()=>r(e.error),e.onabort=()=>r(e.error)}))}const{useEffect:l,useRef:c}=e.React,{useTranslate:u}=t.hooks,h=o=>{const{onSettingChange:n,id:a,config:d}=o,h=u(t.defaultMessages,i),m=c(null);l((()=>(m.current=new s(a),m.current.init().catch((e=>{console.error("Failed to read cache.",e)})),()=>{m.current.close()})),[a]);const g=(...e)=>{n(...e),m.current.initialized()&&m.current.clear()},p=e=>{const t=e.target.value,r=d[t];g(!0===r?{id:a,config:Object.assign({},d.without(t))}:{id:a,config:Object.assign(Object.assign({},d),{[t]:!0})})};return(0,e.jsx)("div",{className:"widget-setting-add-data jimu-widget-setting",css:b},(0,e.jsx)(r.SettingSection,{className:"border-0",role:"group",title:h("wayOfAddingData")},(0,e.jsx)(r.SettingRow,{label:h("selectFromAccount")},(0,e.jsx)(t.Switch,{className:"mr-2",onChange:p,value:"disableAddBySearch",checked:!d.disableAddBySearch})),(0,e.jsx)(r.SettingRow,{label:h("inputUrl")},(0,e.jsx)(t.Switch,{className:"mr-2",onChange:p,value:"disableAddByUrl",checked:!d.disableAddByUrl})),(0,e.jsx)(r.SettingRow,{label:h("uploadFiles")},(0,e.jsx)(t.Switch,{className:"mr-2",onChange:p,value:"disableAddByFile",checked:!d.disableAddByFile}))),(0,e.jsx)(r.SettingSection,{className:"border-0 pt-0",role:"group",title:h("emptyListMessage")},(0,e.jsx)(t.TextInput,{size:"sm",defaultValue:d.placeholderText,placeholder:h("defaultPlaceholderText"),onAcceptValue:e=>{g({id:a,config:Object.assign(Object.assign({},d),{placeholderText:e})})}})))},b=e.css`

`})(),n})())}}}));