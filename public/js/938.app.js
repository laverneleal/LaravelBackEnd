(self.webpackChunk=self.webpackChunk||[]).push([[938],{7938:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(629),a=r(8475);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={data:function(){return{textureMaterial:"",kind:"2Fバルコニー.笠木(3)",rowIndex:"37",textureColor:"",texturesInAPI:[],defaultSelectedTextureInfo:{},isShown:null}},computed:s(s({},(0,n.rn)(["UserInterface","PlanInfo"])),(0,n.nv)(["selectedItemsPrevious"])),mounted:function(){var e=this;this.isShown=this.$PlanData.isRowShown("37"),a.$.$on("balconyThree",(function(t){e.isShown=t,e.$store.commit("deleteHiddenItem","37")}));try{this.$PlanData.preSelectedItem("37"),this.texturesInAPI=this.$PlanData.texturesInAPI(this.$PlanData.itemIndex("37")),this.defaultSelectedTextureInfo=this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected("37")],this.textureColor=this.defaultSelectedTextureInfo.JapaneseName,this.textureMaterial=this.defaultSelectedTextureInfo.Material}catch(e){console.log("no texture defaults")}},methods:{saveTextureInfoASJSON:function(e,t,r){e.RowIndex=this.rowIndex,e.Kind=this.kind,e.Material=t,this.$PlanData.addSelectedItems(e,r),null==this.textureColor||null==this.textureMaterial?(this.textureMaterial="",this.textureColor="",this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected("37"))):(this.textureMaterial=e.Material,this.textureColor=e.JapaneseName)}}};const u=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],staticClass:"grey lighten-4 pl-2 pr-2 pt-0",attrs:{fluid:""}},[r("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[r("tr",[r("td",{staticClass:"borderRight borderAbove",attrs:{width:"38px",rowspan:e.texturesInAPI.length+2}}),e._v(" "),r("td",{staticClass:"firstColumnWidth borderAbove borderLeft",attrs:{rowspan:e.texturesInAPI.length+2}})]),e._v(" "),e._l(e.texturesInAPI,(function(t,n){return[0==e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)?r("tr",{key:n},[r("td",{staticClass:"secondColumnWidth",attrs:{rowspan:e.texturesInAPI.length}},[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"アルミ笠木",value:"アルミ笠木"},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1),e._v(" "),r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e(),e._v(" "),e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)>0?r("tr",{key:n},[r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"アルミ笠木",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e()]}))],2)],1)}),[],!1,null,null,null).exports}}]);