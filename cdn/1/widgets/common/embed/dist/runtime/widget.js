System.register(["jimu-core","jimu-core/react","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t){var s={},o={},i={},r={};return{setters:[function(e){s.AppMode=e.AppMode,s.BaseVersionManager=e.BaseVersionManager,s.ExpressionPartType=e.ExpressionPartType,s.LayoutParentType=e.LayoutParentType,s.React=e.React,s.appActions=e.appActions,s.classNames=e.classNames,s.css=e.css,s.esri=e.esri,s.getAppStore=e.getAppStore,s.jsx=e.jsx,s.queryString=e.queryString,s.urlUtils=e.urlUtils,s.utils=e.utils},function(e){o.Fragment=e.Fragment},function(e){i.Alert=e.Alert,i.AlertButton=e.AlertButton,i.DynamicUrlResolver=e.DynamicUrlResolver,i.WidgetPlaceholder=e.WidgetPlaceholder},function(e){r.ViewVisibilityContext=e.ViewVisibilityContext}],execute:function(){e((()=>{var e={55087:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M11.483 8.65a.52.52 0 0 0-.345-.632.486.486 0 0 0-.598.364l-2.023 7.969a.52.52 0 0 0 .345.631c.26.074.529-.09.598-.364l2.023-7.969ZM7.36 8.139a.473.473 0 0 1 0 .67L3.651 12.5l3.71 3.69a.473.473 0 0 1 0 .671.479.479 0 0 1-.675 0L2.64 12.835a.473.473 0 0 1 0-.67l4.046-4.026a.479.479 0 0 1 .674 0ZM12.64 8.139a.473.473 0 0 0 0 .67l3.709 3.691-3.71 3.69a.473.473 0 0 0 0 .671.478.478 0 0 0 .675 0l4.046-4.026a.473.473 0 0 0 0-.67l-4.046-4.026a.479.479 0 0 0-.674 0Z"></path><path fill="#000" fill-rule="evenodd" d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2ZM2 1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path><path fill="#000" d="M1 5h18v1H1V5ZM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},48891:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=o},74758:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{__set_webpack_public_path__:()=>v,default:()=>g});var e,t=n(48891),s=n(51315),o=n(30726);function i(e,s){const{width:o,height:i}=s;return t.css`
    &.widget-embed {
      width: 100%;
      height: 100%;
      position: relative;
      ${o&&"overflow-x: auto"};
      ${i&&"overflow-y: auto"};
      .embed-iframe {
        border: 0;
      }
      .load-err-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${e.colors.white};
        .mask-content{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .truncate-two {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
      }
      .bottom-alert {
        position: absolute;
        bottom: 0;
      }
    }
  `}!function(e){e.Url="url",e.Code="code"}(e||(e={}));const r={_widgetLabel:"Embed",embedHint:"Embed by URL or code",unSupportUrl:"It's not a valid URL.",unSupportIframeUrl:"Sorry, this content could not be embedded. It may restrict the embedding of content from other sites.",maxLimitTips:"HTML code exceeds the maximum character limit.",unsupportedHtmlTips:"Oops! The embedded content cannot display due to an unsupported HTML format."};var l=n(55087),c=n.n(l);const d=e=>{try{let t=JSON.stringify(e);return t=encodeURIComponent(t),t}catch(e){console.error(e)}};class p extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"The first release.",upgrader:t=>{var s,o;const i=null===(s=null==t?void 0:t.functionConfig)||void 0===s?void 0:s.embedType,r=null===(o=null==t?void 0:t.functionConfig)||void 0===o?void 0:o.content;return i?(t=t.set("embedType",i),t=i===e.Url?t.set("staticUrl",r):t.set("embedCode",r)):t=t.set("embedType",e.Url),t.without("functionConfig")}},{version:"1.4.0",description:"Enhance the URL editor.",upgrader:(s,o)=>{var i,r;const n=null==s?void 0:s.embedType,a=null==s?void 0:s.expression,l=null==s?void 0:s.staticUrl,c=null===(r=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appConfig)||void 0===r?void 0:r.widgets[o],p=null==c?void 0:c.useDataSourcesEnabled;if((null==a?void 0:a.name)&&(s=s.set("enableLabel",!0).set("label",a.name)),n===e.Url&&l){const e=`<p>${l}</p>`;s=s.set("expression",e)}else if(n===e.Url&&a&&!1!==p){const e=(e=>{let s="";const{parts:o}=e;if(o.length>0){let e=!1;const i={name:"",parts:[]};let r=0,n=0,a="";o.forEach((o=>{const{type:l,dataSourceId:c,exp:p}=o;if(e){if(i.name+=p,i.parts.push(o),c&&(a=c),l===t.ExpressionPartType.Operator&&"("===p)r++;else if(l===t.ExpressionPartType.Operator&&")"===p&&(n++,n===r)){r=0,n=0,e=!1;const o=t.utils.getUUID(),l=document&&document.createElement("exp");l.setAttribute("data-uniqueid",o),l.setAttribute("data-dsid",a),l.setAttribute("data-expression",d(i)),l.innerHTML=i.name,s+=l.outerHTML}return!1}if(l===t.ExpressionPartType.Field){const e=t.utils.getUUID(),i=document&&document.createElement("exp");i.setAttribute("data-uniqueid",e),i.setAttribute("data-dsid",c),i.setAttribute("data-expression",d({name:p,parts:[o]})),i.innerHTML=p,s+=i.outerHTML}else l===t.ExpressionPartType.String?s+=p.replace(/(^['|"]*|['|"]*$)/g,""):l===t.ExpressionPartType.Number?s+=p:l===t.ExpressionPartType.Function&&(e=!0,i.name=p,i.parts.push(o))}))}return`<p>${s}</p>`})(a);s=s.set("expression",e)}return s}},{version:"1.7.0",description:"Update some wrong config",upgrader:(e,t)=>{const s=null==e?void 0:e.expression;return e=e.set("expression",(e=>{const t=null==e?void 0:e.match(/\<exp((?!\<exp).)+\<\/exp\>/gim);let s=e;return t&&t.forEach((e=>{var t,o;const i=null===(t=e.match(/<exp[^>]*>([\s\S]*?)<\/exp>/))||void 0===t?void 0:t[1],r=i.match(/<span[^>]*>([\s\S]*?)<\/span>/),n=r&&(null===(o=i.match(/<span[^>]*>([\s\S]*?)<\/span>/))||void 0===o?void 0:o[1]);(!i.trim()||r&&!n.trim())&&(s=s.replace(e,""))})),s})(s)),e}}]}}const u=new p;var h=n(74758);const m=e=>{let t="";const s=/<iframe [^>]*src=['"]([^'"]+)[^>](.*)/gi,o=/<blockquote [^>]*data-instgrm-permalink=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,i=/<a [^>]*href=['"]([^'"]+)[^>]*>/gi,r=/<blockquote [^>]*data-theme=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,n=/<blockquote [^>]*data-lang=['"]([^'"]+)[^>]*>(.*)<\/blockquote>/gi,a=/<a [^>]*data-theme=['"]([^'"]+)[^>]*>(.*)<\/a>/gi,l=/<a [^>]*data-lang=['"]([^'"]+)[^>]*>(.*)<\/a>/gi;return s.test(e)?e.replace(s,((e,s)=>(t=s,e))):o.test(e)?e.replace(o,((e,s)=>{const o=s.substr(0,s.indexOf("?"));return t=`${o}embed`,e})):/<blockquote class="twitter-tweet"(.*)<\/blockquote>/gi.test(e)?e.replace(i,((s,o)=>{if(o.includes("twitter.com")){const s=o.substring(o.lastIndexOf("/")+1).replace(/[?].*$/,""),i=r.exec(e),a=n.exec(e);let l,c;(null==i?void 0:i.length)>1&&(l=i[1]),(null==a?void 0:a.length)>1&&(c=a[1]),t=`https://platform.twitter.com/embed/Tweet.html?id=${s}${l?`&theme=${l}`:""}${c?`&lang=${c}`:""}`}return s})):/<a class="twitter-timeline" [^>]*href=['"]([^'"]+)[^>]*>(.*)<\/a>/gi.test(e)&&e.replace(i,((s,o)=>{if(o.includes("twitter.com")){const s=o.substring(o.lastIndexOf("/")+1).replace(/[?].*$/,""),i=a.exec(e),r=l.exec(e);let n,c;(null==i?void 0:i.length)>1&&(n=i[1]),(null==r?void 0:r.length)>1&&(c=r[1]),t=`https://syndication.twitter.com/srv/timeline-profile/screen-name/${s}${n||c?"?":""}${n?`&theme=${n}`:""}${c?`&lang=${c}`:""}`}return s})),t},f=new(0,t.esri.Sanitizer);class g extends t.React.PureComponent{constructor(s){super(s),this.checkAndLoadByType=()=>{const{config:t}=this.props,{embedType:s}=t,{content:o}=this.state;if(s===e.Url){const e=this.processUrl(o);this.checkUrl(e).then((e=>{e&&this.loadContent()}))}else this.loadContent()},this.reloadContentInView=e=>{var s,o,i,r;const{sectionNavInfos:n,layoutId:a}=this.props;if(this.needLoadContentInView&&n&&e!==n){const l=[];for(const t in n)n[t]!==(null==e?void 0:e[t])&&l.push(t);const c=(0,t.getAppStore)().getState(),d=null==c?void 0:c.appConfig,p=null===(s=null==d?void 0:d.layouts)||void 0===s?void 0:s[a];if((null===(o=null==p?void 0:p.parent)||void 0===o?void 0:o.type)!==t.LayoutParentType.View)return;const u=null===(i=null==p?void 0:p.parent)||void 0===i?void 0:i.id,h=null===(r=null==d?void 0:d.views)||void 0===r?void 0:r[u],m=null==h?void 0:h.parent;l.includes(m)&&this.checkAndLoadByType()}},this.autoRefreshHandler=t=>{const{useSrcdoc:s}=this.state,{config:o}=this.props,{embedType:i,autoRefresh:r,autoInterval:n=1}=o;if(!this.refreshTimer&&r){const t=setInterval((()=>{if(this.ifr)if(i===e.Code&&s){const e=this.ifr.srcdoc;this.ifr.srcdoc=e}else{const e=this.ifr.src;this.ifr.src="",setTimeout((()=>{this.ifr&&(this.ifr.src=e)}),100)}}),60*n*1e3);this.refreshTimer=t}else this.refreshTimer&&!r&&(clearInterval(this.refreshTimer),this.refreshTimer=null);if(t&&r){this.refreshTimer&&clearInterval(this.refreshTimer);const t=setInterval((()=>{if(this.ifr)if(i===e.Code&&s){const e=this.ifr.srcdoc;this.ifr.srcdoc=e}else{const e=this.ifr.src;this.ifr.src="",setTimeout((()=>{this.ifr&&(this.ifr.src=e)}),100)}}),60*n*1e3);this.refreshTimer=t}},this.iframeOnLoad=()=>{this.setState({isLoading:!1})},this.checkSafeDomain=e=>{var s;let o=!1;if(!e)return o;const i=(0,t.getAppStore)().getState(),r=null==i?void 0:i.portalSelf,n=(null===(s=null==r?void 0:r.portalLocalHostname)||void 0===s?void 0:s.toLowerCase())||(null==r?void 0:r.portalHostname),a=[".arcgis.com",".esri.com"];n&&a.push(n);let l="";e.includes("https://")&&(l=e.substring(8).split("/")[0]);for(const e of a)if(l.includes(e)){o=!0;break}return o},this.processUrl=e=>{var s,o,i;if(!e)return e;const r=e.toLowerCase();if(/https:\/\/vimeo\.com\/.*/.test(r)){const s=(e=t.urlUtils.removeSearchFromUrl(e)).split("/");return`https://player.vimeo.com/video/${s[s.length-1]}`}if(/https:\/\/www\.youtube\.com\/watch\?.*v=.*/.test(r)){const o=null===(s=t.queryString.parseUrl(e))||void 0===s?void 0:s.query;return`https://www.youtube.com/embed/${null==o?void 0:o.v}`}if(/https:\/\/youtu\.be\/.*/.test(r)){const s=(e=t.urlUtils.removeSearchFromUrl(e)).split("/");return`https://www.youtube.com/embed/${s[s.length-1]}`}if(/https:\/\/www\.facebook\.com\/.*\/videos\/.*/.test(r))return`https://www.facebook.com/plugins/video.php?href=${r}&show_text=0`;this.checkURLFormat(e)||(e="about:blank");const n=[".maps.arcgis.com",".mapsdevext.arcgis.com",".mapsqa.arcgis.com"];let a="";e.includes("https://")&&(a=e.substring(8).split("/")[0]);let l=!1,c="";for(const e of n)if(a.includes(e)){switch(l=!0,e){case".maps.arcgis.com":c="prod";break;case".mapsdevext.arcgis.com":c="dev";break;case".mapsqa.arcgis.com":c="qa"}break}const d=window.jimuConfig.hostEnv;if(l&&c===d){const s=(0,t.getAppStore)().getState();if(s&&s.user){const t=null===(o=null==s?void 0:s.portalSelf)||void 0===o?void 0:o.urlKey,r=null===(i=null==s?void 0:s.portalSelf)||void 0===i?void 0:i.customBaseUrl;a&&t&&r&&(e=e.replace(a,`${t}.${r}`))}}return e},this.checkURLFormat=e=>{if(!e||""===e)return this.setState({errMessage:this.errMessages.unSupportUrl}),!1;if("about:blank"===e)return!1;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return this.setState({errMessage:this.errMessages.httpsCheck}),!1;if(new RegExp("^(([h][t]{2}[p][s])?://localhost)").test(e))return!0;const t=e.indexOf(".");return!(t<0||t===e.length-1)||(this.setState({errMessage:this.errMessages.unSupportUrl}),!1)},this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.reload=()=>{const{useSrcdoc:t}=this.state,{config:s}=this.props;if(this.ifr)if(s.embedType===e.Code&&t){const e=this.ifr.srcdoc;this.ifr.srcdoc=e}else{const e=this.ifr.src;this.ifr.src=e}},this.loadContent=()=>{const{config:t,isOldApp:s}=this.props,{content:o,useSrcdoc:i}=this.state,{embedType:r}=t;if(this.ifr)if(this.ifr.removeAttribute("srcdoc"),this.ifr.removeAttribute("src"),r===e.Code)if(i){const e=s?`<script>\n              if(window !== window.parent || window !== window.top){\n                window.parent = undefined\n                window.top = undefined\n                document.cookie = undefined\n                localStorage = undefined\n                sessionStorage = undefined\n                delete window.localStorage\n                delete window.sessionStorage\n                delete window.frameElement\n              }\n            <\/script>${o}`:o;this.ifr.srcdoc=e}else setTimeout((()=>{this.ifr&&(this.ifr.src=o)}),100);else setTimeout((()=>{this.ifr&&(this.ifr.src=this.processUrl(o))}),100)},this.onHtmlResolved=(e,t)=>{this.setState({content:e,resolveErr:t})};const{config:o,isOldApp:i}=s,{embedType:n,embedCode:a,expression:l}=o;this.errMessages={httpsCheck:this.formatMessage("httpsUrlMessage"),unSupportUrl:this.formatMessage("unSupportUrl"),unSupportIframeUrl:this.formatMessage("unSupportIframeUrl")},this.checkUrl=this.checkUrl.bind(this);let c=a;const d=m(a);i||(c=d||f.sanitize(a));const p={content:n===e.Url?l:c,isLoading:!1,loadErr:!1,resolveErr:!1,errMessage:"",codeLimitExceeded:!1,useSrcdoc:!!i||!d};this.state=p,this.shouldRenderIframeInView=!1}componentDidMount(){const{config:t}=this.props,{content:s}=this.state;s&&s.trim().length>0&&this.setState({isLoading:!0},(()=>{t.embedType===e.Code&&this.loadContent()}))}componentDidUpdate(s,o){var i,r;const{content:n}=this.state,{content:a}=o,{appMode:l,config:c,id:d,isOldApp:p}=this.props,{embedCode:u,embedType:h,autoRefresh:g,autoInterval:v,expression:w}=c,{config:b,appMode:x,sectionNavInfos:y}=s,{autoRefresh:S,autoInterval:T,embedType:U}=b,M=g!==S||v!==T,k=(null===(r=null===(i=this.props)||void 0===i?void 0:i.stateProps)||void 0===r?void 0:r.codeLimitExceeded)||!1;this.setState({codeLimitExceeded:k}),(l!==x&&l===t.AppMode.Design||M)&&this.reload();let L=u;const I=m(u);p||(L=I||f.sanitize(u));const C=!!p||!I;if(h!==U){const s=h===e.Url?w:L;this.setState({loadErr:!1,errMessage:"",resolveErr:!1,codeLimitExceeded:!1,content:s,useSrcdoc:C}),this.props.dispatch(t.appActions.widgetStatePropChange(d,"codeLimitExceeded",!1))}else h===e.Code?b.embedCode!==u&&this.setState({content:L,useSrcdoc:C}):b.expression!==w&&this.setState({content:w,useSrcdoc:C});n!==a&&this.setState({isLoading:!!n,loadErr:!1},(()=>{this.checkAndLoadByType()})),this.reloadContentInView(y),this.autoRefreshHandler(M)}checkUrl(e){return this.checkURLFormat(e)?(this.setState({loadErr:!1}),Promise.resolve(!0)):(this.setState({loadErr:!0}),Promise.resolve(!1))}isOriginSameAsLocation(e){const t=[".arcgis.com",".esri.com"],s=window.location,o=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(e)||[],i={protocol:o[1]||"",host:o[2]||"",port:o[3]||""};let r="";for(const e of t)if(s.host.includes(e)){r=e;break}if(o[2].includes(r))return!0;const n=e=>e.port||{"http:":80,"https:":443}[e.protocol||s.protocol];return!!(i.protocol&&i.protocol===s.protocol&&i.host&&i.host===s.host&&i.host&&n(i)===n(s))}render(){const{isLoading:r,loadErr:n,errMessage:a,resolveErr:l,content:d,codeLimitExceeded:p}=this.state,{theme:u,id:m,config:f,isOldApp:g}=this.props,{embedCode:v,embedType:w,expression:b,enableLabel:x,label:y}=f;if(w===e.Code?!v:!b||"<p><br></p>"===b||"<p></p>"===b)return(0,t.jsx)(s.Fragment,null,(0,t.jsx)(o.WidgetPlaceholder,{widgetId:this.props.id,icon:c(),message:this.formatMessage("embedHint")}),p&&(0,t.jsx)("div",{className:"p-2 w-100",style:{position:"absolute",bottom:0}},(0,t.jsx)(o.Alert,{withIcon:!0,size:"small",type:"warning",text:this.formatMessage("maxLimitTips"),className:"w-100"})));let S=!0;w===e.Url&&(S=!this.checkSafeDomain(this.processUrl(d)));let T={width:void 0,height:void 0};g||(T=(e=>{const t=/<iframe [^>]*width=['"]([^'"]+)[^>]*>(.*)<\/iframe>/gi.exec(e),s=/<iframe [^>]*height=['"]([^'"]+)[^>]*>(.*)<\/iframe>/gi.exec(e);let o,i;return(null==t?void 0:t.length)>1&&(o=t[1]),(null==s?void 0:s.length)>1&&(i=s[1]),{width:o,height:i}})(v));const{width:U,height:M}=T;return(0,t.jsx)(h.ViewVisibilityContext.Consumer,null,(({isInView:c,isInCurrentView:h})=>{let g=!0;return this.shouldRenderIframeInView||(g=!c||h,g&&(this.shouldRenderIframeInView=!0)),this.needLoadContentInView=c&&h,(0,t.jsx)(s.Fragment,null,g&&(0,t.jsx)("div",{className:"jimu-widget widget-embed",css:i(u,T)},S?(0,t.jsx)("iframe",Object.assign({id:`ifrSandbox-${m}`,className:`iframe-${m} ${!U&&"w-100"} ${!M&&"h-100"} embed-iframe`,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-popups-to-escape-sandbox",allowFullScreen:!0,onLoad:this.iframeOnLoad,ref:e=>{this.ifr=e},allow:"geolocation","data-testid":"embedSandbox"},T)):(0,t.jsx)("iframe",Object.assign({id:`ifrSafe-${m}`,className:`iframe-${m} ${!U&&"w-100"} ${!M&&"h-100"} embed-iframe`,allowFullScreen:!0,onLoad:this.iframeOnLoad,ref:e=>{this.ifr=e},allow:"geolocation","data-testid":"embedSafe"},T)),r&&(0,t.jsx)("div",{className:"jimu-secondary-loading"}),n&&(0,t.jsx)("div",{className:"mask text-center load-err-mask"},(0,t.jsx)("div",{className:"mask-content"},(0,t.jsx)(o.AlertButton,{buttonType:"tertiary",size:"small",type:"warning"}),a)),l&&(0,t.jsx)("div",{"data-testid":"test-expressionMask",className:"mask text-center load-err-mask"},(0,t.jsx)("div",{className:(0,t.classNames)("mask-content",{"truncate-two":!(x&&y)}),style:{width:"70%"},title:x&&y||d},x&&y||d)),w===e.Url&&(0,t.jsx)(o.DynamicUrlResolver,{widgetId:m,useDataSources:this.props.useDataSources,value:f.expression,onHtmlResolved:this.onHtmlResolved}),p&&(0,t.jsx)("div",{className:"bottom-alert p-2 w-100"},(0,t.jsx)(o.Alert,{withIcon:!0,size:"small",type:"warning",text:this.formatMessage("maxLimitTips"),className:"w-100"}))))}))}}function v(e){n.p=e}g.versionManager=u,g.mapExtraStateProps=(e,t)=>{var s,o,i;return{isOldApp:(null===(s=null==e?void 0:e.appInfo)||void 0===s?void 0:s.created)<1680073199e3,appMode:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.appMode,sectionNavInfos:null===(i=null==e?void 0:e.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos}}})(),a})())}}}));