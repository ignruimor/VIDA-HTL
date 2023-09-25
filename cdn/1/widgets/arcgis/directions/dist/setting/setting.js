System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector"],(function(e,t){var i={},o={},n={},r={};return{setters:[function(e){i.DataSourceTypes=e.DataSourceTypes,i.Immutable=e.Immutable,i.React=e.React,i.SupportedUtilityType=e.SupportedUtilityType,i.classNames=e.classNames,i.css=e.css,i.dataSourceUtils=e.dataSourceUtils,i.hooks=e.hooks,i.jsx=e.jsx,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,i.lodash=e.lodash,i.polished=e.polished},function(e){o.defaultMessages=e.defaultMessages},function(e){n.MapWidgetSelector=e.MapWidgetSelector,n.SearchDataSetting=e.SearchDataSetting,n.SearchDataType=e.SearchDataType,n.SearchGeneralSetting=e.SearchGeneralSetting,n.SearchSuggestionSetting=e.SearchSuggestionSetting,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){r.UtilitySelector=e.UtilitySelector}],execute:function(){e((()=>{var e={748:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" clip-rule="evenodd"></path></svg>'},48891:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=n},52785:e=>{"use strict";e.exports=r}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{__set_webpack_public_path__:()=>b,default:()=>h});var e=s(48891),t=s(30726),i=s(77756),o=s(52785),n=s(748),r=s.n(n);const l=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:r()},n)):e.React.createElement("svg",Object.assign({className:s},n))},u={selectMapWidget:"Select a Map widget",routeSettings:"Route Settings",searchSettings:"Search settings",routeUrl:"Route URL",outputStops:"Stops",outputRoute:"Route",outputDirectionPoints:"Direction points",outputDirectionLines:"Direction lines"};function c(e){return`${e}_output_stop`}function d(e){return`${e}_output_direction_point`}function p(e){return`${e}_output_direction_line`}function g(e){return`${e}_output_route`}function f(t){if(!t)return null;const i={};return t.forEach((t=>{i[t.name]=e.dataSourceUtils.convertFieldToJimuField(t,null)})),i}var m=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};const{useMemo:S}=e.React,v={maxSuggestions:6},h=n=>{var r,s,a;const{onSettingChange:h,id:b,config:j,useMapWidgetIds:w,useUtilities:O,portalUrl:D}=n,I=e.hooks.useTranslation(u,t.defaultMessages),C=null==j?void 0:j.routeConfig,_=null===(r=j.searchConfig)||void 0===r?void 0:r.dataConfig,T=null===(s=j.searchConfig)||void 0===s?void 0:s.generalConfig,U=S((()=>{var t;return(0,e.Immutable)(v).merge((null===(t=j.searchConfig)||void 0===t?void 0:t.suggestionConfig)||{})}),[null===(a=j.searchConfig)||void 0===a?void 0:a.suggestionConfig]),M=S((()=>(null==w?void 0:w.length)>0),[w]),R=`${b}-desc`;return(0,e.jsx)("div",{className:"widget-setting-directions jimu-widget-setting",css:y},(0,e.jsx)(i.SettingSection,{role:"group","aria-label":I("selectMapWidget"),title:I("selectMapWidget"),className:(0,e.classNames)({"border-0":!M})},(0,e.jsx)(i.SettingRow,null,(0,e.jsx)(i.MapWidgetSelector,{onSelect:t=>m(void 0,void 0,void 0,(function*(){const i=yield function(t,i,o){var n,r,s,a;return m(this,void 0,void 0,(function*(){if(!i||0===i.length)return Promise.resolve([]);try{const[i,l,u,m]=yield(0,e.loadArcGISJSAPIModules)(["esri/rest/support/Stop","esri/rest/support/DirectionPoint","esri/rest/support/DirectionLine","esri/rest/support/RouteInfo"]);return[{id:c(t),label:o("outputStops"),type:e.DataSourceTypes.FeatureLayer,isOutputFromWidget:!0,geometryType:"esriGeometryPoint",schema:{idField:(null===(n=i.fields.find((e=>"esriFieldTypeOID"===e.type)))||void 0===n?void 0:n.name)||"__OBJECTID",fields:Object.assign({},f(i.fields))}},{id:d(t),label:o("outputDirectionPoints"),type:e.DataSourceTypes.FeatureLayer,isOutputFromWidget:!0,geometryType:"esriGeometryPoint",schema:{idField:(null===(r=l.fields.find((e=>"esriFieldTypeOID"===e.type)))||void 0===r?void 0:r.name)||"__OBJECTID",fields:Object.assign({},f(l.fields))}},{id:p(t),label:o("outputDirectionLines"),type:e.DataSourceTypes.FeatureLayer,isOutputFromWidget:!0,geometryType:"esriGeometryPolyline",schema:{idField:(null===(s=u.fields.find((e=>"esriFieldTypeOID"===e.type)))||void 0===s?void 0:s.name)||"__OBJECTID",fields:Object.assign({},f(u.fields))}},{id:g(t),label:o("outputRoute"),type:e.DataSourceTypes.FeatureLayer,isOutputFromWidget:!0,geometryType:"esriGeometryPolyline",schema:{idField:(null===(a=m.fields.find((e=>"esriFieldTypeOID"===e.type)))||void 0===a?void 0:a.name)||"__OBJECTID",fields:Object.assign({},f(m.fields))}}]}catch(e){return console.warn("Failed to create output data source in directions widget. ",e),Promise.resolve([])}}))}(b,t,I);h({id:b,useMapWidgetIds:t},i)})),useMapWidgetIds:w}))),M?(0,e.jsx)("div",null,(0,e.jsx)(i.SettingSection,{role:"group","aria-label":I("routeSettings"),title:I("routeSettings")},(0,e.jsx)(i.SettingRow,{flow:"wrap",label:I("routeUrl")},(0,e.jsx)(o.UtilitySelector,{useUtilities:(0,e.Immutable)((null==C?void 0:C.useUtility)&&(null==O?void 0:O.some((e=>C.useUtility.utilityId===e.utilityId)))?[C.useUtility]:[]),onChange:e=>{var t,i,o,n,r;(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.utilityId)!==(null===(i=null==C?void 0:C.useUtility)||void 0===i?void 0:i.utilityId)&&h({id:b,config:j.setIn(["routeConfig","useUtility"],null==e?void 0:e[0]),useUtilities:x(null==e?void 0:e[0],null===(r=null===(n=null===(o=j.searchConfig)||void 0===o?void 0:o.dataConfig)||void 0===n?void 0:n.map((e=>e.useUtility)))||void 0===r?void 0:r.asMutable())})},showRemove:!1,closePopupOnSelect:!0,type:e.SupportedUtilityType.Routing,"aria-describedby":R})),(0,e.jsx)(i.SettingRow,{className:"mt-0"},(0,e.jsx)("i",{className:"text-break example-url",id:R},I("exampleUrl",{url:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"})))),(0,e.jsx)(i.SettingSection,{role:"group","aria-label":I("searchSettings"),title:I("searchSettings"),className:"search-settings"},(0,e.jsx)(i.SearchDataSetting,{id:b,datasourceConfig:_,createOutputDs:!1,portalUrl:D,hideIconSetting:!0,searchDataSettingType:i.SearchDataType.GeocodeService,onSettingChange:t=>{var i;e.lodash.isDeepEqual(t,_)||h({id:b,config:j.setIn(["searchConfig","dataConfig"],t),useUtilities:x(null==C?void 0:C.useUtility,null===(i=null==t?void 0:t.map((e=>e.useUtility)))||void 0===i?void 0:i.asMutable())})}}),(0,e.jsx)(i.SearchGeneralSetting,{id:b,hint:null==T?void 0:T.hint,onSettingChange:e=>{e&&e!==(null==T?void 0:T.hint)&&h({id:b,config:j.setIn(["searchConfig","generalConfig"],{hint:e})})}}),(0,e.jsx)(i.SearchSuggestionSetting,{id:b,settingConfig:U,onSettingChange:t=>{e.lodash.isDeepEqual(t,U)||h({id:b,config:j.setIn(["searchConfig","suggestionConfig"],t)})},hideRecentSearchSetting:!0}))):(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center placeholder-container"},(0,e.jsx)("div",{className:"text-center"},(0,e.jsx)(l,{size:48,className:"d-inline-block placeholder-icon mb-2"}),(0,e.jsx)("p",{className:"placeholder-hint"},I("selectMapHint")))))},y=e.css`
.route-url-input{
  min-height: ${e.polished.rem(100)}
}
.example-url{
  font-size: ${e.polished.rem(12)};
  color: var(--dark-500);
}
.warning-icon{
  color: var(--danger-500);
}
.warning-hint{
  width: calc(100% - 20px);
  margin: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--danger-500);
}
.placeholder-container{
  height: calc(100% - 100px);
  .placeholder-hint{
    font-size: ${e.polished.rem(14)};
    font-weight: 500;
    color: var(--dark-500);
    max-width: ${e.polished.rem(160)};
  }
  .placeholder-icon{
    color: var(--dark-200);
  }
}
.search-settings{
  >div>div {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
    border: 0 !important;
  }
}
`;function x(e,t){return[e].concat(t).filter((e=>!!e))}function b(e){s.p=e}})(),a})())}}}));