import Vue         from 'vue'
import App         from './components/App.vue'
import Vuetify     from 'vuetify'
import router      from './router';
import store       from './store';
import VueTheMask  from 'vue-the-mask';
import VueCookies  from 'vue-cookies';


import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

// console.log(process.env.MIX_DEPLOYMENT)

import 'vuetify/dist/vuetify.css'
import '../css/CustomCSS.css' 

import * as Account         from '././class/SRSParts/Account'
import * as ContentProvider from '././class/SRSParts/ContentProvider'
import * as PlanData       from '././class/SRSParts/PlanData'

require('./bootstrap');

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueTheMask);
Vue.use(VueCookies);

Vue.prototype.$UserInfo        = new Account.UserInfo(); //handle all related to accounts
Vue.prototype.$ContentProvider = new ContentProvider.SRSContents(); //handle all the contents from api
Vue.prototype.$PlanData        = new PlanData.PlanData(); //handle all plan data


export const bus = new Vue(); //event bus

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    components: { App },
    template: '<App/>'

});
