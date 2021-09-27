<template>
 <v-dialog v-model="menuDialog" persistent max-width="400">
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark @click="getDialog(i)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>
              </div>
              <v-avatar class="ma-2" width="30%" height="30%" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-dialog>
</template>
<script>
import { bus } from '../../../app'

  export default {
    //props: ['menuDialog'],
    data: () => ({
      menuDialog: true,
      items: [
        {
          color: 'primary',
          src: `../..${process.env.MIX_API_BASEURL}/images/newplan.webp`,
          title: 'New Plan',
        },
        {
          color: 'primary',
          src: `../..${process.env.MIX_API_BASEURL}/images/existingplan.webp`,
          title: 'Revision Plan',
        },
        {
          color: 'primary',
          src: `../..${process.env.MIX_API_BASEURL}/images/close.webp`,
          title: 'Close',
        },
      ],
    }),
    mounted(){
      this.isDrawerHidden(false); 
    },
    methods:{
      isDrawerHidden(bool){
        bus.$emit('hideDrawer', bool);
      },
      getDialog(i){  
        switch(i){
          case 0:
            this.$router.push('newplan')
            break;
          case 1:
            this.$store.dispatch('isPrevious', true)
            this.$router.push('existing')
            break;
          case 2:
            this.menuDialog = false
            bus.$emit('hideDrawer', false);
            //this.$UserInfo.logOutUser();
            this.$router.push('/')     
        } 
      }
    },
  }
</script>
