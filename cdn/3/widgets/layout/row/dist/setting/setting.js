System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-layouts/layout-builder","jimu-ui","jimu-ui/advanced/style-setting-components"],(function(t,e){var n={},i={},s={},o={},a={},u={},r={};return{setters:[function(t){n.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,n.Immutable=t.Immutable,n.React=t.React,n.ReactRedux=t.ReactRedux,n.jsx=t.jsx},function(t){i.getAppConfigAction=t.getAppConfigAction},function(t){s.SettingRow=t.SettingRow,s.SettingSection=t.SettingSection},function(t){o.utils=t.utils},function(t){a.DEFAULT_ROW_LAYOUT_SETTING=t.DEFAULT_ROW_LAYOUT_SETTING},function(t){u.DistanceUnits=t.DistanceUnits,u.styleUtils=t.styleUtils,u.utils=t.utils},function(t){r.InputUnit=t.InputUnit,r.Padding=t.Padding}],execute:function(){t((()=>{var t={48891:t=>{"use strict";t.exports=n},23137:t=>{"use strict";t.exports=i},77282:t=>{"use strict";t.exports=a},74758:t=>{"use strict";t.exports=o},30726:t=>{"use strict";t.exports=u},77756:t=>{"use strict";t.exports=s},55505:t=>{"use strict";t.exports=r}},e={};function l(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,l),s.exports}l.d=(t,e)=>{for(var n in e)l.o(e,n)&&!l.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{default:()=>r});var t=l(48891),e=l(23137),n=l(77756),i=l(74758),s=l(77282),o=l(30726),a=l(55505);class u extends t.React.PureComponent{constructor(){super(...arguments),this.handleSpaceChange=t=>{const{layoutSetting:n}=this.props,i=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{i.editLayoutSetting({layoutId:e},n.set("space",t.distance))})),i.exec()},this.handlePaddingChange=t=>{const{layoutSetting:n}=this.props,i=n.style.padding.unit;let s=o.styleUtils.expandStyleArray(t.number);const a=s[0]===s[1]&&s[0]===s[2]&&s[0]===s[3];if(i!==t.unit){const e=this.getSizeOfItem();null!=e&&(s=s.map(((n,i)=>{const s=i%2!=0||a?e.width:e.height;return t.unit===o.DistanceUnits.PIXEL?Math.round(n*s/100):Math.round(n/s*1e3)/10})))}const u=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{u.editLayoutSetting({layoutId:e},n.setIn(["style","padding"],{number:s,unit:t.unit}))})),u.exec()},this.formatMessage=t=>this.props.intl.formatMessage({id:t})}getLayoutIds(){const t=[],{layouts:e}=this.props;if(null!=e){const n=e[Object.keys(e)[0]];Object.keys(n).forEach((e=>{t.push(n[e])}))}return t}getSizeOfItem(){const{id:t}=this.props,e=this.querySelector(`div[data-widgetid="${t}"]`);return null!=e?e.getBoundingClientRect():null}querySelector(e){const n=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);return null!=n?(n.contentDocument||n.contentWindow.document).querySelector(e):null}render(){var e;const{layoutSetting:i}=this.props,u=i.space>=0?i.space:s.DEFAULT_ROW_LAYOUT_SETTING.space,r=(null===(e=i.style.padding)||void 0===e?void 0:e.unit)===o.DistanceUnits.PERCENTAGE?100:Number.POSITIVE_INFINITY;return(0,t.jsx)("div",{className:"row-layout-setting"},(0,t.jsx)(n.SettingSection,{title:this.formatMessage("layout")},(0,t.jsx)(n.SettingRow,{label:this.formatMessage("gap")},(0,t.jsx)(a.InputUnit,{"aria-label":this.formatMessage("gap"),value:o.utils.stringOfLinearUnit(u),min:0,onChange:this.handleSpaceChange,style:{width:110}})),(0,t.jsx)(n.SettingRow,{role:"group","aria-label":this.formatMessage("padding"),label:this.formatMessage("padding"),flow:"wrap"},(0,t.jsx)(a.Padding,{value:i.style.padding,max:r,onChange:this.handlePaddingChange}))))}}const r=t.ReactRedux.connect(((e,n)=>{var o,a;const{layouts:u}=n;let r=s.DEFAULT_ROW_LAYOUT_SETTING;if(null!=u){const t=u[Object.keys(u)[0]][i.utils.getCurrentSizeMode()];r=null!==(a=null===(o=e.appStateInBuilder.appConfig.layouts[t])||void 0===o?void 0:o.setting)&&void 0!==a?a:s.DEFAULT_ROW_LAYOUT_SETTING}return{layoutSetting:(0,t.Immutable)(r)}}))(u)})(),c})())}}}));