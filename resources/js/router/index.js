import Vue    from 'vue'
import Router from 'vue-router'
import Store  from '../store/index.js'


Vue.use(Router)

const gaibuListPath     = '';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../components/SRSParts/SubComponents/Login.vue' ),
    meta: {
      name: 'name',
      isPublic: true
    }
  }, 
  {
    path: '/menu',
    name: 'MenuDialog',
    component: () => import( '../components/SRSParts/SubComponents/Menu.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/newplan',
    name: 'New Plan',
    component: () => import( '../components/SRSParts/SubComponents/newplan.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/existing',
    name: 'Existing',
    component: () => import( '../components/SRSParts/SubComponents/ExistingPlan.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/gaibulist',
    name: 'GaibuList',
    component: () => import( '../components/SRSParts/GaibuList/GaibuList.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import( '../components/SRSParts/SubComponents/Summary.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/maintenancetool',
    name: 'Maintenance Tool',
    component: () => import( '../components/SRSParts/GaibuList/MaintenanceTool.vue' ),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/maintenancetoolloader',
    name: 'MaintenanceToolLoader',
    component: () => import( '../components/SRSParts/GaibuList/MaintenanceToolLoader.vue' ),
    meta: {
      isPublic: false
    }
  },



  //Maintenance
  // {
  //   path: '/MaintenanceToolProvider',
  //   name: 'Maintenance Tool',
  //   component: () => import( '../components/SRSParts/GaibuList/MaintenanceTool.vue' ),
  //   meta: {
  //     isPublic: false
  //   }
  // },



];

const router = new Router({
  mode: 'history',
  base: process.env.MIX_API_BASEURL,
  routes
})


//loop and check each route and check if already logged or not
router.beforeEach(  async ( to, from, next) => {
  let isLoginValid = await Vue.prototype.$UserInfo.isRouteNavigationValid();

  if( from.name != null || to.meta.isPublic){
     if(isLoginValid == false && to.meta.isPublic == false){
        window.location.reload('/login')
     }else{
      next()
     }

  }else{
    if(isLoginValid){
      next()
    }else{
      next('/login')
    }
  }

  });


export default router
