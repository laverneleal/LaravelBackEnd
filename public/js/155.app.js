(self.webpackChunk=self.webpackChunk||[]).push([[155],{3155:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(629);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s={data:function(){return{textureMaterial:"",kind:"3Fバルコニー.笠木",rowIndex:"57",textureColor:"",texturesInAPI:[],defaultSelectedTextureInfo:{}}},computed:l(l({},(0,a.rn)(["UserInterface","PlanInfo"])),(0,a.nv)(["selectedItemsPrevious"])),mounted:function(){try{this.$PlanData.preSelectedItem("57"),this.texturesInAPI=this.$PlanData.texturesInAPI(this.$PlanData.itemIndex("57")),this.defaultSelectedTextureInfo=this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected("57")],this.textureColor=this.defaultSelectedTextureInfo.JapaneseName,this.textureMaterial=this.defaultSelectedTextureInfo.Material}catch(e){console.log("no texture defaults")}},methods:{saveTextureInfoASJSON:function(e,t,r){e.RowIndex=this.rowIndex,e.Kind=this.kind,e.Material=t,this.$PlanData.addSelectedItems(e,r),null==this.textureColor||null==this.textureMaterial?(this.textureMaterial="",this.textureColor="",this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected("57"))):(this.textureMaterial=e.Material,this.textureColor=e.JapaneseName)}}};const i=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey lighten-4 pl-2 pr-2 pt-0",attrs:{fluid:""}},[r("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[r("tr",[r("td",{staticClass:"borderRight borderAbove",attrs:{width:"38px",rowspan:e.texturesInAPI.length+2}}),e._v(" "),r("td",{staticClass:"firstColumnWidth borderAbove borderLeft",attrs:{rowspan:e.texturesInAPI.length+2}})]),e._v(" "),e._l(e.texturesInAPI,(function(t,a){return[0==e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)?r("tr",{key:a},[r("td",{staticClass:"secondColumnWidth",attrs:{rowspan:e.texturesInAPI.length}},[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"アルミ笠木",value:"アルミ笠木"},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1),e._v(" "),r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e(),e._v(" "),e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)>0?r("tr",{key:a},[r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e()]}))],2)],1)}),[],!1,null,null,null).exports}}]);