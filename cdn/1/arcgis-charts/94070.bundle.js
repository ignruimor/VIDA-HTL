"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[94070],{86602:(e,t,i)=>{i.d(t,{JZ:()=>m,RL:()=>g,eY:()=>_});var s=i(61681),r=i(78668),a=i(1662),n=i(19710),o=i(55542),l=i(51118),h=i(7349),u=i(8396),d=i(91907),c=i(71449),p=i(80479);function m(e){return e&&"render"in e}function g(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class _ extends l.s{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,s=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>s.reject(e))),this._uploadStatus={controller:i,resolver:s},this.source=e,s.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,a.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,n=r*this.width,l=r*this.height,h=Math.PI*this.rotation/180;(0,a.h)(t,t,(0,o.f)(i,s)),(0,a.h)(t,t,(0,o.f)(n/2,l/2)),(0,a.r)(t,t,-h),(0,a.h)(t,t,(0,o.f)(-n/2,-l/2)),(0,a.l)(t,t,(0,o.f)(n,l)),(0,a.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=function(e){return m(e)?e instanceof h.Z?(0,s.yw)(e.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):g(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:s}=this._uploadStatus,r={signal:e.signal},{width:a,height:n}=this,o=this._texture,l=t.textureUploadManager;await l.enqueueTextureUpdate({data:i,texture:o,width:a,height:n},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(e){(0,r.H9)(e)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,n.c)()}}_createTexture(e){const t=this.immutable&&e.type===u.zO.WEBGL2,i=new p.X;return i.internalFormat=t?d.lP.RGBA8:d.VI.RGBA,i.wrapMode=d.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new c.x(e,i)}}},12688:(e,t,i)=>{i.d(t,{c:()=>n});var s=i(97281),r=i(38716),a=i(10994);class n extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},61394:(e,t,i)=>{i.d(t,{T:()=>_});var s=i(78668),r=i(58713),a=i(53791),n=i(70179),o=i(95550),l=i(17321),h=i(6923),u=i(64429),d=i(21402),c=i(91350),p=i(35119);function m(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class g{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=d.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return t.levels[e]??(()=>{let i=1/0,s=0;for(const r in t.levels){const t=parseFloat(r),a=Math.abs(e-t);a<i&&(i=a,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),a=t.levels[s],n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:a.sizes,values:n}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,c.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,p.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){this.outsideLabelsVisible=null!=e&&e.excludedLabelsVisible}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,u.$K)(e.minSize)&&(0,u.$K)(e.maxSize))if((0,u.hj)(e.minSize)&&(0,u.hj)(e.maxSize))i=(0,o.F2)(e.minSize),r=(0,o.F2)(e.maxSize);else{const s=t.scale;i=(0,o.F2)(m(s,e.minSize.stops)),r=(0,o.F2)(m(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,o.F2)(m(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,l.c9)(t.spatialReference)/h.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}}class _ extends n.Z{constructor(e){super(e),this._rendererInfo=new g,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=e,n=t.map((e=>r.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,i)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const i=e.map(((e,i)=>({id:t[i].id,mosaicItem:e})));s.resolve(i)}),s.reject)}}},7349:(e,t,i)=>{i.d(t,{Z:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},94070:(e,t,i)=>{i.r(t),i.d(t,{default:()=>G});var s=i(36663),r=i(80085),a=i(6865),n=i(76868),o=i(81977),l=(i(7283),i(7753),i(39994),i(40266)),h=i(94449),u=i(91203),d=i(80347),c=i(40794),p=i(14945),m=i(74396),g=i(13802),_=i(78668),y=i(31329),x=i(12688),v=i(10530),f=i(7349),b=i(23134);let w=class extends m.Z{constructor(){super(...arguments),this.attached=!1,this.container=new v.W,this.updateRequested=!1,this.type="imagery",this._bitmapView=new x.c}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,_.D_)(e)||g.Z.getLogger(this).error(e)}))}hitTest(e){return new r.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new b.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...i,extent:t.extent}})).catch((e=>{(0,_.D_)(e)||g.Z.getLogger(this).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,y.Kh)(i,t);return null!=s?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,t,i,s){(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,s);if(r.imageBitmap)return r.imageBitmap;const a=await this.layer.applyRenderer(r.pixelData,{signal:s.signal}),n=new f.Z(a.pixelBlock,a.extent?.clone(),r.pixelData.pixelBlock);return n.filter=e=>this.layer.applyFilter(e),n}};(0,s._)([(0,o.Cb)()],w.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"strategy",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],w.prototype,"updating",null),(0,s._)([(0,o.Cb)()],w.prototype,"type",void 0),w=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryView2D")],w);const R=w;var S=i(66341),P=i(53280),C=i(91772),B=i(18486),E=i(7928),M=i(79195),V=i(38716),I=i(10994);class T extends I.Z{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[M.Z],target:()=>this.children,drawPhase:V.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===V.jx.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var z=i(84557);let A=class extends m.Z{constructor(e){super(e),this._loading=null,this.update=(0,_.Ds)(((e,t)=>this._update(e,t).catch((e=>{(0,_.D_)(e)||g.Z.getLogger(this).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:s,spatialReference:r}=e.state,a=new C.Z({xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax,spatialReference:r}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const l=await this._loading;this._addToDisplay(l,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:r}=e,a=new z.F(r);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=r.width*t.symbolTileSize,a.height=r.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,s._)([(0,o.Cb)()],A.prototype,"fetchPixels",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"_loading",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"updating",null),A=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],A);const F=A;let k=class extends P.r{constructor(){super(...arguments),this.attached=!1,this.container=new T,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,s)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:l}=(0,E.BH)(e,t,i,a,r);if(null!=r&&!r.intersects(e))return{extent:n,pixelBlock:null};const h={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(null!=e&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}const{pixelData:u}=await this.layer.fetchImage(n,o,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:s});this._dataParameters=h;const d=u?.pixelBlock;return null==d?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,E.KC)(d,"vector-uv"):d}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new F({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,n.YP)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),n.tX),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new r.Z({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&s&&r}async _getProjectedFullExtent(e){try{return await(0,B.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,S.default)(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?C.Z.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,s._)([(0,o.Cb)()],k.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],k.prototype,"updating",null),k=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],k);const D=k;var q=i(70375),Z=i(67666),O=i(51599),U=i(14626),H=i(59439);const L=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new q.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=(0,H.V5)(i,t);if(!s||null==r)throw new q.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=await r.getRequiredFields(),n=new U.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:l}=this.view,h="2d"===this.view.type?new Z.Z(o,o,l):new Z.Z(.5*o,.5*o,l),{returnTopmostRaster:u,showNoDataRecords:d}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},c={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:h,showNoDataRecords:d,signal:null!=t?t.signal:null};return i.queryVisibleRasters(n,c).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,o.Cb)(O.qG)],t.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,l.j)("esri.views.layers.ImageryLayerView")],t),t};var W=i(26216),N=i(55068);let j=class extends(L((0,N.Z)((0,d.y)(W.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new h.J,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new p.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,n.YP)((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),n.tX),(0,n.YP)((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),n.tX),(0,n.YP)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),n.Z_),(0,n.YP)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),n.Z_),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,n.YP)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.Z.isCollection(e)?e.at(0):e)instanceof r.Z))return{remove:()=>{}};let i=[];return Array.isArray(e)||a.Z.isCollection(e)?i=e.map((e=>e.clone())):e instanceof r.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new R({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new D({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new u.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,s._)([(0,o.Cb)()],j.prototype,"pixelData",null),(0,s._)([(0,o.Cb)()],j.prototype,"subview",void 0),j=(0,s._)([(0,l.j)("esri.views.2d.layers.ImageryLayerView2D")],j);const G=j},26204:(e,t,i)=>{i.d(t,{Z:()=>x});var s=i(61681),r=i(61394),a=i(1662),n=i(19710),o=i(55542),l=i(79912),h=i(29927),u=i(51118),d=i(64429),c=i(78951),p=i(91907),m=i(29620);const g=Math.PI/180;class _ extends u.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.zi.ONE,p.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(p.MX.LINES,8*i.length,p.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",y().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:u,viewpoint:d}=t,c=g*u,{x:p,y:m}=d.targetGeometry,_=(0,h.or)(p,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=m;const y=n*s[0],x=n*s[1],v=r*y,f=r*x,b=(0,a.g)(this._dvsMat3);(0,a.m)(b,b,i),(0,a.h)(b,b,(0,o.f)(y/2,x/2)),(0,a.d)(b,b,(0,l.f)(s[0]/v,-x/f,1)),(0,a.r)(b,b,-c)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,l=0;for(const e of t)e&&(a[2*o]=e[0]-i,a[2*o+1]=e[1]-s,a[2*o+2]=e[0]-i,a[2*o+3]=e[3]-s,a[2*o+4]=e[2]-i,a[2*o+5]=e[3]-s,a[2*o+6]=e[2]-i,a[2*o+7]=e[1]-s,n[l]=o+0,n[l+1]=o+3,n[l+2]=o+3,n[l+3]=o+2,n[l+4]=o+2,n[l+5]=o+1,n[l+6]=o+1,n[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=c.f.createVertex(e,p.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=c.f.createIndex(e,p.l1.DYNAMIC_DRAW,n),!this._vao){const t=y();this._vao=new m.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const y=()=>(0,d.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.g.FLOAT}]});let x=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new _(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(p.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},14945:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(36663),r=(i(13802),i(7283),i(7753),i(39994),i(70375),i(40266)),a=i(38716),n=i(26204),o=i(91907);let l=class extends n.Z{doRender(e){e.drawPhase===a.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,i=t.effects.highlight;i.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,i.defines.concat(["highlightAll"])),i.draw(e),i.unbind()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const h=l},23134:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(36663),r=i(74396),a=(i(39994),i(78668)),n=i(81977),o=(i(7283),i(7753),i(40266)),l=i(24568),h=i(35925),u=i(81590);const d=Math.PI/180;function c(e){return e*d}function p(e,t){const i=c(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}var m=i(86602),g=i(64970),_=i(87241);const y=(0,l.Ue)(),x=[0,0],v=new _.Z(0,0,0,0);let f=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,h.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,n=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],o=this.imageMaxWidth??0,l=this.imageMaxHeight??0;n?(x[0]=i.worldScreenWidth,x[1]=i.size[1]):this.imageRotationSupported?(x[0]=i.size[0],x[1]=i.size[1]):p(x,i);const u=Math.floor(x[0]*r)>o||Math.floor(x[1]*r)>l,d=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),c=!this.imageNormalizationSupported&&d,m=!u&&!c,g=this.imageRotationSupported?i.rotation:0,_=this.container.children.slice();if(m){const e=n?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,x,e,i.resolution,g,r,t)}else{let e=Math.min(o,l);c&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of _)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(e){this._imagePromise=null,(0,a.r9)(e)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,n){const o=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n});(0,a.k_)(n);const l=new m.eY(null,!0);return l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t,l.rotation=s,l.pixelRatio=r,l.opacity=0,this.container.addChild(l),await l.setSourceAsync(o,n),(0,a.k_)(n),l}async _singleExport(e,t,i,s,r,a,n){!function(e,t,i,s){const[r,a]=t,[n,o]=s,l=.5*i;e[0]=r-l*n,e[1]=a-l*o,e[2]=r+l*n,e[3]=a+l*o}(y,i,s,t);const o=(0,l.HH)(y,e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s){const r=u.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new g.Z(r),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((r,n,h,u)=>{v.set(r,n,h,0),a.getTileBounds(y,v);const d=(0,l.HH)(y,e.spatialReference);o.push(this._export(d,t,t,0,i,s).then((e=>(0!==u&&(v.set(r,n,h,u),a.getTileBounds(y,v),e.x=y[0],e.y=y[3]),e))))})),Promise.all(o)}};(0,s._)([(0,n.Cb)()],f.prototype,"_imagePromise",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"bitmaps",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"container",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"fetchSource",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"hidpi",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"imageMaxWidth",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"imageMaxHeight",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"imageRotationSupported",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"requestUpdate",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"updating",null),f=(0,s._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],f);const b=f}}]);