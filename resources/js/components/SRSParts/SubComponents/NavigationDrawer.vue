<template>
    <v-container>

    <v-navigation-drawer :value="value" app :clipped="$vuetify.breakpoint.lgAndUp" dense>
      <v-list dense>
        <template v-for="(item, i) in items" >
          <v-list-item :key="i" :to="item.to" @click="hideDrawer(i)">
            <v-list-item-action @click="hideDrawer(i)">
              <v-icon>{{item.icon}}</v-icon> 
            </v-list-item-action >        
            <v-list-item-content > {{item.text}} </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

    </v-navigation-drawer>
    </v-container>  

</template>

<script>
import { bus } from '../../../app'
export default {
  // props: {
  //   value: Boolean,
  // },

    data: () => {
      return {
        value: false,
        items:[
          {icon: "mdi-menu-open", text: "Plan Menu", to: "/menu"},  
          {icon: "mdi-wrench", text: "Maintenance Tool", to : "/maintenancetool"}, 

          //{icon: "mdi-file-plus", text: "New Plan", to: "/newplan"},
          //{icon: "mdi-file-document", text: "Existing Plan", to: "/existing"},
          // {icon: "mdi-texture", text: "Add Texture", to : "/AddTexture"},
          // {icon: "mdi-apps", text: "Settings", to : "/settings"},
         // {icon: "mdi-apps", text: "3D_test", to : "/model"},
          //{icon: "mdi-logout", text: "LogOut", to : "/Login"},
          //{icon: "mdi-user", text: "Update Information", to : "/Login"},
          //{icon: "mdi-maintenance", text: "Maintenance Tool", to : "/maintenancetool"},
        ], 
      }
    },

  
    methods:{
      hideDrawer(i){


        switch(i){
          case 2:
            this.logout();
            break;
          case 1:
            this.$store.dispatch('isPrevious', true)  
            break;
        }
       },
      logout(){
        try{
          this.$UserInfo.logOutUser();    
          this.$router.push('Login')
        }catch{
          //
        }
      },

    },
    mounted(){
      bus.$on('hideDrawer', (data) => {
        this.value = data
      })


      //console.log(this.mainDrawer)
      // bus.$on('hideDrawer', (data) => {
      //   this.$props.mainDrawer = false
      // })

    }





}

</script>
