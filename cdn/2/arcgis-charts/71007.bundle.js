"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[71007],{71007:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>f,executeRelationshipQueryForCount:()=>y});var n=o(84238),r=o(66341),a=o(27707);function c(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t,o){const n=await d(e,t,o),r=n.data,a=r.geometryType,c=r.spatialReference,u={};for(const e of r.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:c,hasZ:!!r.hasZ,hasM:!!r.hasM,features:e.relatedRecords};if(null!=e.objectId)u[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(u[e[o]]=t)}return{...n,data:u}}async function s(e,t,o){const n=await d(e,t,o,{returnCountOnly:!0}),r=n.data,a={};for(const e of r.relatedRecordGroups)null!=e.objectId&&(a[e.objectId]=e.count);return{...n,data:a}}async function d(e,t,o={},n){const u=(0,a.A)({...e.query,f:"json",...n,...c(t,n)});return(0,r.default)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...u}})}var i=o(51211),l=o(8284);async function f(e,t,o){return t=l.default.from(t),u((0,n.en)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=i.Z.fromJSON(t[e]))),o}))}async function y(e,t,o){return t=l.default.from(t),s((0,n.en)(e),t,{...o}).then((e=>e.data))}}}]);