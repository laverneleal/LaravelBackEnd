(self.webpackChunk=self.webpackChunk||[]).push([[270],{1270:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const r={data:function(){return{houseType:[{name:"i-Smile",value:"0"},{name:"i-Smart",value:"1"},{name:"i-Cube",value:"2"}],dialog:!1,id:"",japName:"",hType:"",selected:[]}},mounted:function(){},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},(0,a(629).rn)(["UserInterface"])),methods:{editRow:function(e){var t=this.$PlanData.itemIndex(e);this.japName=this.UserInterface.GaibuListItems[t].JapaneseName,this.hType=this.UserInterface.GaibuListItems[t].HouseType,this.dialog=!0},get:function(e){alert(this.HouseType)}}};const n=(0,a(1900).Z)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{staticClass:"grey lighten-4 pa-2",attrs:{fluid:""}},[a("v-simple-table",{staticClass:"tg",attrs:{width:"100%"}},[a("thead",[a("tr",[a("th",[e._v("Id")]),e._v(" "),a("th",[e._v("Japanese")]),e._v(" "),a("th",[e._v("English")]),e._v(" "),a("th",[e._v("SortNo")]),e._v(" "),a("th",[e._v("HouseType")]),e._v(" "),a("th",[e._v("DeletedDate")]),e._v(" "),a("th",[e._v("ICAD")]),e._v(" "),a("th",[e._v("Web")]),e._v(" "),a("th",[e._v("isShown")]),e._v(" "),a("th",[e._v("preSelectedItem")]),e._v(" "),a("th",[e._v("Path")]),e._v(" "),a("th",[e._v("excludedItems")]),e._v(" "),a("th",[e._v("Group")]),e._v(" "),a("th")])]),e._v(" "),a("tbody",e._l(e.UserInterface.GaibuListItems,(function(t){return a("tr",{key:t.list},[a("td",[e._v(e._s(t.Id))]),e._v(" "),a("td",[e._v(e._s(t.JapaneseName))]),e._v(" "),a("td",[e._v(e._s(t.EnglishName))]),e._v(" "),a("td",[e._v(e._s(t.SortNo))]),e._v(" "),a("td",[e._v(e._s(t.HouseType))]),e._v(" "),a("td",[e._v(e._s(t.DeletedDate))]),e._v(" "),a("td",[e._v(e._s(t.isAvailableInICAD))]),e._v(" "),a("td",[e._v(e._s(t.isAvailableInWeb))]),e._v(" "),a("td",[e._v(e._s(t.isShown))]),e._v(" "),a("td",[e._v(e._s(t.preSelectedItem))]),e._v(" "),a("td",[e._v(e._s(t.Path))]),e._v(" "),a("td",[e._v(e._s(t.excludedItems))]),e._v(" "),a("td",[e._v(e._s(t.Group))]),e._v(" "),a("td",[a("v-btn",{attrs:{tile:"",color:"success"},on:{click:function(a){return e.editRow(t.Id)}}},[a("v-icon",{attrs:{left:""}},[e._v("mdi-pencil")])],1)],1)])})),0)])],1),e._v(" "),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2"},[e._v("\n            "+e._s(e.japName)+"\n        ")]),e._v(" "),a("v-card-text",[a("p",[e._v(e._s(e.selected))]),e._v(" "),a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td")])])]},proxy:!0}])}),e._v(" "),a("v-simple-table",[a("tr",[a("td",[a("v-label",[e._v("House Type")]),e._v(" "),a("v-checkbox",{attrs:{"hide-details":"",label:"i-Smile",value:"0"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("v-checkbox",{attrs:{"hide-details":"",label:"i-Smart",value:"1"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("v-checkbox",{attrs:{"hide-details":"",label:"i-Cube",value:"2"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),a("td")])])],1),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);