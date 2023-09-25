"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[31968],{31968:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var r,i=a(36663),n=(a(91957),a(66341)),o=a(70375),l=a(25709),s=a(15842),u=a(81977),p=(a(7283),a(7753),a(39994),a(40266)),d=a(14685),g=a(91772),c=a(24568),y=a(38481),h=a(27668),b=a(12478),w=a(95874),v=a(4452),m=a(81590);const Z=new(a(23758).f)("0/0/0",0,0,0,void 0);let f=r=class extends((0,h.h)((0,w.M)((0,b.Q)(y.Z)))){constructor(){super(...arguments),this.tileInfo=m.Z.create({spatialReference:d.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new g.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.Z.WebMercator),this.spatialReference=d.Z.WebMercator}getTileBounds(e,t,a,r){const i=r||(0,c.Ue)();return Z.level=e,Z.row=t,Z.col=a,Z.extent=i,this.tileInfo.updateTileInfo(Z),Z.extent=void 0,i}fetchTile(e,t,a,r={}){const{signal:i}=r,o=this.getTileUrl(e,t,a),l={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,n.default)(o??"",l).then((e=>e.data))}async fetchImageBitmapTile(e,t,a,i={}){const{signal:o}=i;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,a,i);return(0,v.V)(r,e,t,a,o)}const l=this.getTileUrl(e,t,a)??"",s={responseType:"blob",signal:o,query:{...this.refreshParameters}},{data:u}=await(0,n.default)(l,s);return(0,v.V)(u,e,t,a,o)}getTileUrl(){throw new o.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,i._)([(0,u.Cb)({type:m.Z})],f.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],f.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,value:"base-tile"})],f.prototype,"type",void 0),(0,i._)([(0,u.Cb)({nonNullable:!0})],f.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)()],f.prototype,"spatialReference",void 0),f=r=(0,i._)([(0,p.j)("esri.layers.BaseTileLayer")],f);const M=f;var _=a(43330),T=a(13054),C=a(67666);const S=new l.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let k=class extends((0,h.h)((0,_.q)((0,s.R)(M)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m.Z({size:[256,256],dpi:96,origin:new C.Z({x:-20037508.342787,y:20037508.342787,spatialReference:d.Z.WebMercator}),spatialReference:d.Z.WebMercator,lods:[new T.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new T.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new T.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new T.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new T.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new T.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new T.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new T.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new T.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new T.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new T.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new T.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new T.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new T.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new T.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new T.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new T.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new T.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new T.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new T.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return S.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new o.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||null==this.bingMetadata)return null;const r=this.bingMetadata.resourceSets[0].resources[0],i=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],n=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",i).replace("{quadkey}",n)}async fetchAttributionData(){return this.load().then((()=>null==this.bingMetadata?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,n.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new o.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new o.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new o.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new o.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,n.default)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new o.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new o.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let i=e;i>0;i--){let e=0;const n=1<<i-1;0!=(a&n)&&(e+=1),0!=(t&n)&&(e+=2),r+=e.toString()}return r}};(0,i._)([(0,u.Cb)({json:{read:!1,write:!1},value:null})],k.prototype,"bingMetadata",null),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],k.prototype,"type",void 0),(0,i._)([(0,u.Cb)({type:m.Z})],k.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"copyright",null),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"key",void 0),(0,i._)([(0,u.Cb)({type:S.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:S.read}}})],k.prototype,"style",void 0),(0,i._)([(0,u.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],k.prototype,"operationalLayerType",null),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"culture",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"region",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0,read:!0}})],k.prototype,"portalUrl",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:!1,read:!1}})],k.prototype,"hasAttributionData",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0})],k.prototype,"bingLogo",null),k=(0,i._)([(0,p.j)("esri.layers.BingMapsLayer")],k);const U=k},4452:(e,t,a)=>{a.d(t,{V:()=>o,g:()=>n});var r=a(70375),i=a(78668);async function n(e,t,a){let n;try{n=await createImageBitmap(e)}catch(e){throw new r.Z("request:server",`Unable to load ${t}`,{url:t,error:e})}return(0,i.k_)(a),n}async function o(e,t,a,n,o){let l;try{l=await createImageBitmap(e)}catch(e){throw new r.Z("request:server",`Unable to load tile ${t}/${a}/${n}`,{error:e,level:t,row:a,col:n})}return(0,i.k_)(o),l}}}]);