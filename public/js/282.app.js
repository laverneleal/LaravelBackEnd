(self.webpackChunk=self.webpackChunk||[]).push([[282],{6282:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(629),n=r(8475);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={data:function(){return{textureMaterial:"",kind:"テラス(2)",rowIndex:"42",textureColor:"",texturesInAPI:[],defaultSelectedTextureInfo:{},visibleIcon:{icon:"mdi-minus-circle",color:"red lighten-2"},isShown:null}},computed:l(l({},(0,a.rn)(["UserInterface","PlanInfo"])),(0,a.nv)(["selectedItemsPrevious"])),mounted:function(){var e=this;this.isShown=this.$PlanData.isRowShown("42"),n.$.$on("Terasu2",(function(t){e.isShown=t,e.$store.commit("deleteHiddenItem","42")}));try{this.$PlanData.preSelectedItem("42"),this.texturesInAPI=this.$PlanData.texturesInAPI(this.$PlanData.itemIndex("42")),this.defaultSelectedTextureInfo=this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected("42")],this.textureColor=this.defaultSelectedTextureInfo.JapaneseName,this.textureMaterial=this.defaultSelectedTextureInfo.Material}catch(e){console.log("no texture defaults"+e)}},methods:{toggleTerasu:function(){n.$.$emit("Terasu2",!1),n.$.$emit("showIconTerasu",{icon:"mdi-plus-circle",color:"blue lighten-2"}),this.$store.commit("addHiddenItemIndex","42")},saveTextureInfoASJSON:function(e,t,r){e.RowIndex=this.rowIndex,e.Kind=this.kind,e.Material=t,this.$PlanData.addSelectedItems(e,r),null==this.textureColor||null==this.textureMaterial?(this.textureMaterial="",this.textureColor="",this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected("42"))):(this.textureMaterial=e.Material,this.textureColor=e.JapaneseName)}}};const c=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],staticClass:"grey lighten-4 pa-2",attrs:{fluid:""}},[r("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[r("tr",[r("td",{staticClass:"borderRight",attrs:{width:"38px",rowspan:e.texturesInAPI.length+3}},[r("center",[r("v-icon",{attrs:{color:e.visibleIcon.color},on:{click:function(t){return e.toggleTerasu()}}},[e._v(e._s(this.visibleIcon.icon))])],1)],1),e._v(" "),r("td",{staticClass:"firstColumnWidth borderLeft",attrs:{rowspan:e.texturesInAPI.length+3}},[r("v-label",[e._v(" テラス(2)")])],1)]),e._v(" "),e._l(e.texturesInAPI,(function(t,a){return[0==e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)?r("tr",{key:a},[r("td",{staticClass:"secondColumnWidth",attrs:{rowspan:e.texturesInAPI.length}},[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"ヨーロピアンタイル",value:"ヨーロピアンタイル"},on:{change:function(t){return e.saveTextureInfoASJSON({},"ヨーロピアンタイル",!1)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1),e._v(" "),r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"ヨーロピアンタイル",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e(),e._v(" "),e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)>0?r("tr",{key:a},[r("td",[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t.JapaneseName,value:t.JapaneseName},on:{change:function(r){return e.saveTextureInfoASJSON(t,"ヨーロピアンタイル",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e()]})),e._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"なし",value:"なし"},on:{change:function(t){return e.saveTextureInfoASJSON({},"なし",!1)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1)]),e._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"その他",value:"その他"},on:{change:function(t){return e.saveTextureInfoASJSON({},"その他",!1)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1)])],2)],1)}),[],!1,null,null,null).exports}}]);