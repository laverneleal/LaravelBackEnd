(self.webpackChunk=self.webpackChunk||[]).push([[829],{1829:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(629),o=n(8475);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={data:function(){var e;return s(e={textureMaterial:"",kind:"2Fバルコニー.ガラス(3)",rowIndex:"35"},"textureMaterial","-"),s(e,"textureColor",""),s(e,"texturesInAPI",[]),s(e,"defaultSelectedTextureInfo",{}),s(e,"additionalText","ファインバルコニー　パネル部：合わせガラス仕様"),s(e,"visibleIconMinus",{icon:"mdi-minus-circle",color:"red lighten-2"}),s(e,"isShown",null),e},computed:i(i({},(0,r.rn)(["UserInterface","PlanInfo"])),(0,r.nv)(["selectedItemsPrevious"])),mounted:function(){var e=this;this.isShown=this.$PlanData.isRowShown("35"),o.$.$on("balconyThree",(function(t){e.isShown=t,e.$store.commit("deleteHiddenItem","35")}));try{this.$PlanData.preSelectedItem("35"),this.texturesInAPI=this.$PlanData.texturesInAPI(this.$PlanData.itemIndex("35")),this.defaultSelectedTextureInfo=this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected("35")],this.textureColor=this.defaultSelectedTextureInfo.JapaneseName,this.textureMaterial="-"}catch(e){console.log("no texture defaults")}},methods:{saveTextureInfoASJSON:function(e,t,n){e.RowIndex=this.rowIndex,e.Kind=this.kind,e.Material=t,this.$PlanData.addSelectedItems(e,n),null!=this.textureColor&&null!=this.textureMaterial||(this.textureMaterial="",this.textureColor="",this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected("35")))},toggleBalcony:function(){o.$.$emit("balconyThree",!1),o.$.$emit("showIcon2"),this.$store.commit("addHiddenItemIndex","35"),this.$store.commit("addHiddenItemIndex","37"),this.$store.commit("addHiddenItemIndex","50")}}};const c=(0,n(1900).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],staticClass:"grey lighten-4 pl-2 pr-2 pt-0 pb-0",attrs:{fluid:""}},[n("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[n("tr",[n("td",{staticClass:"borderRight borderBottom borderAbove",attrs:{width:"38px",rowspan:e.texturesInAPI.length+1}},[n("center",[n("v-icon",{attrs:{color:e.visibleIconMinus.color},on:{click:function(t){return e.toggleBalcony()}}},[e._v("\n            "+e._s(this.visibleIconMinus.icon)+"\n          ")])],1)],1),e._v(" "),n("td",{staticClass:"firstColumnWidth borderAbove borderBottom borderLeft",attrs:{rowspan:e.texturesInAPI.length+1}},[n("v-label",[e._v(" 2Fバルコニー手摺(3)")])],1)]),e._v(" "),e._l(e.texturesInAPI,(function(t,r){return[0==e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)?n("tr",{key:r},[n("td",[n("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:e.additionalText+" "+t.JapaneseName,value:t.JapaneseName},on:{change:function(n){return e.saveTextureInfoASJSON(t,"",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e(),e._v(" "),e.$PlanData.itemIndexTexture(e.texturesInAPI,t.SortNo)>0?n("tr",{key:r},[n("td",[n("v-checkbox",{staticClass:"shrink mt-0",attrs:{color:"orange","hide-details":"",label:e.additionalText+" "+t.JapaneseName,value:t.JapaneseName},on:{change:function(n){return e.saveTextureInfoASJSON(t,"",!0)}},model:{value:e.textureColor,callback:function(t){e.textureColor=t},expression:"textureColor"}})],1)]):e._e()]}))],2)],1)}),[],!1,null,null,null).exports}}]);