<template>
  <v-app>
    <v-dialog v-model="loginDialog" persistent max-width="400" class="elevation-12">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-card-title class="headline">User Login</v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="User" name="login" :prepend-icon="icon" type="text" v-model="input.email" />
            <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" v-model="input.password" @keyup.enter="login" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" dark @click="login()">Login</v-btn> <!-- emit data to parent -->
        </v-card-actions>
      </v-card>
    </v-dialog>
     
    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="290">  
      <v-card>
        <v-card-title class="headline">Login Error</v-card-title>
        <v-card-text> {{verify}} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <loading :loadingDialog="loadingDialog" items="Loading texture updates from api"/> 

  </v-app>
</template>
<script>

import axios from 'axios'
import { mapState, mapActions, mapMutations } from 'vuex';
import loading from './Loading';
import { bus } from '../../../app'

export default {
  name: 'Login',  
  components: {
    loading
  },
  data() {
    return {
      loadingDialog: false,
      loadingItem: '',
      menu: false,              
      input: {
        email:'',
        password: ''
      },
      verify     : '',
      dialog     : false,
      loginDialog: true,

      icon: '',
    }
  },
  computed: {
    ...mapState(['UserInterface', 'PlanInfo']), 
  },
  methods: {
    changeUser(user){
      this.$store.dispatch('setUserInfo', user) 

      if(this.$store.state.UserInfo.UserName != ''){
        bus.$emit('changeUser', this.$store.state.UserInfo.UserName);
      }else{
        bus.$emit('changeUser', user); 
      }
    },

    async login(){
      try{
        const response = await this.$UserInfo.logInUser(this.input.email, this.input.password);

        //update only when there is version update
        if (await this.UserInterface.UIVersion != await this.$ContentProvider.getSRSVersion()){
          localStorage.removeItem('SRS'); 
          await this.showDialog();
          await this.$ContentProvider.getSRSGaibuListItemsFromAPI()     
          await this.$ContentProvider.getSRSHouseTypesFromAPI()
        }else{
          console.log('dont update')
        }

        if(process.env.MIX_DEPLOYMENT == 'ichijo'){
          this.changeUser(`Welcome  ${response.data.logged_user.name}!`); //aws
          this.$router.push('/menu')
        }else{
          this.$UserInfo.logInUser(this.input.email, this.input.password); 
          this.changeUser(`Welcome  ${response.data.full_name.split(',')[1]}!`); //production 
          this.$router.push('/menu')
        }
  
      }catch{
        this.verify = 'Invalid login credentials, please login again'
        this.dialog = true 
        this.loadingDialog = false
        location.replace('/login') //added line 2021.04.19
      }
    },
    async showDialog(){
      this.loginDialog = false
      this.loadingDialog = true
    }
  },

  async mounted(){
    if(process.env.MIX_API_BASEURL != ''){
      this.icon = 'email' //for aws
    }else{
      this.icon = 'mdi-account' //for production
    }


   await this.$UserInfo.logOutUser();
   this.$store.commit('resetPlanInfo');
   //localStorage.removeItem('SRS'); 
  }
}
</script>
     
