<template>
  <v-app id="inspire" >
    <nav-drawer :value="mainDrawer" />
      <v-container >
        <v-app-bar flat :clipped-left="$vuetify.breakpoint.lgAndUp" app dark color="blue darken-3" dense>
          <v-btn @click="hideDrawer(!mainDrawer)" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-toolbar-title> SHIYOUSHO REQUEST SYSTEM </v-toolbar-title>
          <v-spacer></v-spacer>
              {{ fullname }} &nbsp; 
          <v-icon @click="logout()" v-if="fullname !== ''" large color="yellow darken-2">mdi-logout </v-icon>
          
        </v-app-bar>
      </v-container>

      <second-appbar
       :constructionCode = "PlanInfo.ConstructionCode"
       :planNumber       = "PlanInfo.RevisionNumber"
       :requestNumber    = "PlanInfo.RequestNumber"
       :houseType        = "PlanInfo.HouseType"
       :selectedItem     = "UserInterface.SelectedInterface"
      />

      <Keypress key-event="keyup" :multiple-keys="multiple" @success="reloadTextures" />

      <loading :loadingDialog="loadingDialog" items="Updating texture from api"/> 

    <!-- Routes will appear in this section (e.g Login, AddTexture, etc)-->
    <br>
    <router-view class="pa-3"/>
  </v-app>

</template>


<style scoped>
 .planInfo {
    font-size: .8em;
    padding-left: 30px;
    font-family: Arial, Helvetica, sans-serif;
    /* font-weight: bold; */
 }
 .secondAppBar{
    position: '-webkit-sticky';
    position: sticky;
    top: 48px;
    z-index: 1;
 }

</style>

<script>

//logout when user close the tab
//window.addEventListener("beforeunload", function (e) {
  //localStorage.removeItem('piranesiRequestPaper');
  // var confirmationMessage = "\o/";
  // (e || window.event).returnValue = confirmationMessage; 
  // return confirmationMessage;                            
//});

import { mapState } from 'vuex'
import NavDrawer from './SRSParts/SubComponents/NavigationDrawer'
import SecondAppbar from './SRSParts/SubComponents/SecondAppbar'
import loading from './SRSParts/SubComponents/Loading';
import Keypress from 'vue-keypress'
import { bus } from './../app'

export default {
  name: 'App',
  components: {
    NavDrawer,
    SecondAppbar,
    Keypress,
    loading
  },
 
  data: () => ({
    mainDrawer: false,
    fullname: '',
    loadingDialog: false,
    tablists: [],
    selectedButton: '',
    existingVersion: '',
    multiple: [
                {
                  keyCode: 65, // A
                  modifiers: ['altKey'],
                  preventDefault: true,
                }
              ]
  }),

  mounted(){
    this.fullname = this.$store.state.UserInfo.UserName

    bus.$on('changeUser', (data) => {
      this.fullname = data
    })
  },
  computed: {
    ...mapState([ 'PlanInfo', 'UserInterface', 'UserInfo' ]), 
  },
  methods:{
    async showDialog(){
      this.loadingDialog = true
    },

    async reloadTextures(response) {
      try{
          if(this.$route.name != 'Login'){
            await this.showDialog();
            localStorage.removeItem('SRS'); 
            await this.$ContentProvider.getSRSVersion()
            await this.$ContentProvider.getSRSGaibuListItemsFromAPI()    
            await this.$ContentProvider.getSRSHouseTypesFromAPI()
            const uniqHidden = [ ...new Set(this.PlanInfo.HiddenItemIndex)];
            this.PlanInfo.HiddenItemIndex = [] 
            this.$store.commit('SetHiddenItemIndex', uniqHidden);
            this.loadingDialog = false
            location.reload()
          }else{
            alert('Please login to use this function')
          }
      }catch{
        console.log('failed to update texture')
      }
    },

    hideDrawer(bool){
      this.mainDrawer = bool
      bus.$emit('hideDrawer', bool);
    },


    setMessage(showNavBar) {
      this.showNavBar = showNavBar;
    },
    async validateUserSession(){
      try{
        const data = await this.$UserInfo.isRouteNavigationValid();  
        const path = `/login`
  
        if( !data ){
          this.$UserInfo.logOutUser();   
          if (this.$route.path !== path) this.$router.push(path)
        }
      }catch{
        console.log('unauthorized')
      }
    },
    logout(){
      try{
        this.$UserInfo.logOutUser();
        this.UserInfo.UserName = ''
      }finally{
        window.location.replace(`/login`)  
      }
    }

  }//end methods
};
</script>