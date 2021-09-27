<template>
  <v-app>
    <v-row>
      <v-container fluid>
        <template v-for="(gaibuListItem) in tmpGaibuList" >
              <template v-if="gaibuListItem.Id == itemIndex">  
                <DynamicComponentsProvider :LoadType="'2'" :componentName="`${gaibuListItem.EnglishName}`" :key="gaibuListItem.Id" /> 
             </template>
        </template> 
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import DynamicComponentsProvider from '../SubComponents/DynamicComponentsProvider.vue';

//import { bus } from '../../../app'

  export default {
    props: ['RowIndex'],

    components:{
      DynamicComponentsProvider,
    },
    data: () => ({
      top: '0px',
      left: '0px',
      tmpGaibuList: [],
      itemIndex: '',

    }),

   mounted(){
    this.tmpGaibuList = this.UserInterface.GaibuListItems

    this.itemIndex = this.$route.query.RowIndex 

      //console.log(this.itemIndex)

   },

  methods: {


    // selectedButton (){
    //   bus.$emit('changeIt', '外部 シート-');
    // },
  },
  computed: {
    ...mapState(['UserInterface', 'PlanInfo']),
  },




}
 </script>

