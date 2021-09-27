(self.webpackChunk=self.webpackChunk||[]).push([[479,944],{3005:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".input[data-v-2644566a]{border:1px solid grey;border-radius:4px;font-size:15px;height:55px;width:100%}.arial[data-v-2644566a]{font-family:Arial,Helvetica,sans-serif}",""]);const o=a},4944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(8475);const a={data:function(){return{menuDialog:!0,items:[{color:"primary",src:"../..".concat("","/images/newplan.webp"),title:"New Plan"},{color:"primary",src:"../..".concat("","/images/existingplan.webp"),title:"Revision Plan"},{color:"primary",src:"../..".concat("","/images/logout.webp"),title:"Log Out"}]}},mounted:function(){this.isDrawerHidden(!1)},methods:{isDrawerHidden:function(e){r.$.$emit("hideDrawer",e)},getDialog:function(e){switch(e){case 0:this.$router.push("newplan");break;case 1:this.$store.dispatch("isPrevious",!0),this.$router.push("existing");break;case 2:this.$UserInfo.logOutUser(),this.$router.push("Login")}}}};const o=(0,n(1900).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.menuDialog,callback:function(t){e.menuDialog=t},expression:"menuDialog"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-container",[n("v-row",{attrs:{dense:""}},e._l(e.items,(function(t,r){return n("v-col",{key:r,attrs:{cols:"12"}},[n("v-card",{attrs:{color:t.color,dark:""},on:{click:function(t){return e.getDialog(r)}}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline",domProps:{textContent:e._s(t.title)}})],1),e._v(" "),n("v-avatar",{staticClass:"ma-2",attrs:{width:"30%",height:"30%",tile:""}},[n("v-img",{attrs:{src:t.src}})],1)],1)])],1)})),1)],1)],1)],1)}),[],!1,null,null,null).exports},5479:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(7757),a=n.n(r),o=n(4944),s=n(629),i=n(8475);function c(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){c(o,r,a,s,i,"next",e)}function i(e){c(o,r,a,s,i,"throw",e)}s(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m={components:{MenuDialog:o.default},name:"Main",data:function(){return{empInfo:{},mainDrawer:!1,dialog:!0,constructionCode:"",planNumber:"",requestNumber:"",planNumbers:"",requestNos:[],houseType:"",showName:!1,isCompleteDetails:!1}},mounted:function(){this.$store.commit("resetPlanInfo"),this.$store.commit("SetDefaultHiddenItemsToPlanInfo")},computed:d(d({},(0,s.rn)(["UserInterface","PlanInfo"])),(0,s.nv)(["savePlanInfo","isPrevious"])),methods:{showDialog:function(){var e=this;return u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialog=!1,e.loadingDialog=!0;case 2:case"end":return t.stop()}}),t)})))()},displayShio:function(){var e=this;return u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$PlanData.getRequestNumber(e.constructionCode,e.planNumber);case 3:e.requestNumber=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},isDrawerHidden:function(e){i.$.$emit("hideDrawer",e)},savePlanDetails:function(){var e=this;return u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$PlanData.savePlan(e.constructionCode,e.planNumber,e.requestNumber,e.houseType);case 3:return e.$router.push({name:"GaibuList"}).catch((function(){})),i.$.$emit("changeIt","外部 シート-"),t.next=7,e.$store.dispatch("isPrevious",!1);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},enableButtons:function(){""!==this.constructionCode&&""!==this.planNumber&&""!==this.houseType&&(this.isCompleteDetails=!0)},getPlanInfoDataFromPrevious:function(){var e=this;return u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("savePlanInfo",{ConstructionCode:e.constructionCode,RevisionNumber:e.planNumber,RequestNumber:e.requestNumber,HouseType:e.houseType});case 3:return t.next=5,e.$store.dispatch("isPrevious",!1);case 5:return t.next=7,e.$router.push("Existing");case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}};var v=n(3379),f=n.n(v),h=n(3005),b={insert:"head",singleton:!1};f()(h.Z,b);h.Z.locals;const g=(0,n(1900).Z)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticClass:"elevation-6"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",{staticClass:"arial"},[e._v("入力情報(NEW PLAN)")])],1),e._v(" "),n("v-card-text",{staticClass:"pt-4"},[n("div",{staticClass:"pb-7"},[n("the-mask",{staticClass:"input pl-2",attrs:{name:"constructionCode",placeholder:"お客様コード",mask:"XXXXXXX-####",tabindex:"1",type:"text",masked:""},model:{value:e.constructionCode,callback:function(t){e.constructionCode=t},expression:"constructionCode"}})],1),e._v(" "),n("div",[n("v-text-field",{attrs:{maxlength:"6",tabindex:"2",name:"planNumber",placeholder:"図面番号",outlined:""},on:{blur:function(t){return e.displayShio()}},model:{value:e.planNumber,callback:function(t){e.planNumber=t},expression:"planNumber"}}),e._v(" "),n("v-text-field",{attrs:{maxlength:"2",name:"requestNumber",placeholder:"仕様書番号",outlined:"",readonly:""},model:{value:e.requestNumber,callback:function(t){e.requestNumber=t},expression:"requestNumber"}}),e._v(" "),n("v-select",{attrs:{tabindex:"3",name:e.houseType,label:"家タイプ",items:e.UserInterface.HouseTypes,"item-text":"HouseType","item-value":"HouseType",outlined:""},on:{change:function(t){return e.enableButtons()}},model:{value:e.houseType,callback:function(t){e.houseType=t},expression:"houseType"}})],1)]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",tabindex:"4",text:"",disabled:!e.isCompleteDetails},on:{click:function(t){e.savePlanDetails(),e.isDrawerHidden(!1)}}},[e._v("新規登録")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",tabindex:"5",text:"",disabled:!e.isCompleteDetails},on:{click:function(t){e.getPlanInfoDataFromPrevious(),e.isDrawerHidden(!1)}}},[e._v("呼び出し")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",tabindex:"6",text:""},on:{click:function(t){e.dialog=!1,e.$router.push("menu").catch({})}}},[e._v("Close")])],1)],1)],1)],1)}),[],!1,null,"2644566a",null).exports}}]);