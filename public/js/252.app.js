(self.webpackChunk=self.webpackChunk||[]).push([[252],{2252:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(629);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const s={data:function(){return{toiMaterialLabel:["角樋　T15","角樋　T30"],kind:"縦樋",rowIndex:"8",texturesInAPI:[],textureMaterial:"",textureColor:"",defaultSelectedTextureInfo:{}}},computed:l(l({},(0,r.rn)(["UserInterface","PlanInfo"])),(0,r.nv)(["selectedItemsPrevious"])),mounted:function(){try{this.$PlanData.preSelectedItem("8"),this.texturesInAPI=this.$PlanData.texturesInAPI(this.$PlanData.itemIndex("8")),this.defaultSelectedTextureInfo=this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected("8")],this.textureColor=this.defaultSelectedTextureInfo.JapaneseName+this.defaultSelectedTextureInfo.Material,this.textureMaterial=this.defaultSelectedTextureInfo.Material}catch(e){console.log("no texture defaults")}},methods:{saveTextureInfoASJSON:function(e,t,a){e.RowIndex=this.rowIndex,e.Kind=this.kind,e.Material=t,this.$PlanData.addSelectedItems(e,a),null==this.textureColor||null==this.textureMaterial?(this.textureMaterial="",this.textureColor="",this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected("8"))):(this.textureMaterial=e.Material,this.textureColor=e.JapaneseName+e.Material)}}};const i=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"grey lighten-4 pa-2",attrs:{fluid:""}},[a("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[a("tr",[a("td",{staticClass:"firstColumnWidth",attrs:{rowspan:e.texturesInAPI.length+e.texturesInAPI.length+3}},[a("v-label",[e._v("縦樋")])],1)]),e._v(" "),e._l(e.toiMaterialLabel,(function(t,r){return[e._l(e.texturesInAPI,(function(r,n){return[0==e.$PlanData.itemIndexTexture(e.texturesInAPI,r.SortNo)?a("tr",{key:n+"-"+t},[a("td",{staticClass:"secondColumnWidth",attrs:{rowspan:e.texturesInAPI.length}},[a("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:t,value:t},on:{change:function(a){return e.saveTextureInfoASJSON(r,t,!0)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1),e._v(" "),a("td",[a("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:r.JapaneseName,value:r.JapaneseName+t},on:{change:function(a){return e.saveTextureInfoASJSON(r,t,!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e(),e._v(" "),e.$PlanData.itemIndexTexture(e.texturesInAPI,r.SortNo)>0?a("tr",{key:n+"-"+t},[a("td",[a("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:r.JapaneseName,value:r.JapaneseName+t},on:{change:function(a){return e.saveTextureInfoASJSON(r,t,!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e()]}))]})),e._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[a("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:"なし",value:"なし"},on:{change:function(t){return e.saveTextureInfoASJSON({},"なし",!1)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1)]),e._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[a("v-checkbox",{staticClass:"shrink mt-0",attrs:{colspan:"2",color:"orange","hide-details":"",label:"その他",value:"その他"},on:{change:function(t){return e.saveTextureInfoASJSON({},"その他",!1)}},model:{value:e.textureMaterial,callback:function(t){e.textureMaterial=t},expression:"textureMaterial"}})],1)])],2)],1)}),[],!1,null,null,null).exports}}]);