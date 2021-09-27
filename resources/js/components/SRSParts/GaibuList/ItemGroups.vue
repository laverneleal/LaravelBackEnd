<template>
  <v-app>
    <v-row>
      <v-container fluid>
        <template v-for="(gaibuListItem) in tmpGaibuList" >
          <template v-if="gaibuListItem.HouseType.indexOf($PlanData.HouseTypeNumber) > -1">
            <template v-if="(gaibuListItem.ItemGroup == tmpkey && gaibuListItem.ItemGroup != null)">
              <DynamicComponentsProvider :LoadType="'1'" :componentName="`${gaibuListItem.EnglishName}`" :key="gaibuListItem.Id" /> 
            </template>
          </Template>
        </Template>
      </v-container>
    </v-row>
  </v-app>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import DynamicComponentsProvider from '../SubComponents/DynamicComponentsProvider';
import { bus } from '../../../app'

  export default {
    props: ['tmpkey', 'rowIndex'],

    components:{
      DynamicComponentsProvider
      
    },
    data: () => ({
      tmpGaibuList: [],
      componentsGroupToLoad: '',
    }),

    async mounted(){
    this.tmpGaibuList = this.UserInterface.GaibuListItems
   },

  methods: {

  },
  computed: {
    ...mapState(['UserInterface', 'PlanInfo']),
  },

}
 </script>

