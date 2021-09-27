<template>
  <v-app>
    <v-row>
      <v-container fluid>
        <template v-for="(gaibuListItem) in tmpGaibuList" >
          <template v-if="gaibuListItem.HouseType.indexOf($PlanData.HouseTypeNumber) > -1">
            <template v-if="prevRoute.name == 'Summary' && PlanInfo.EditKey != -1">
              <template v-if="gaibuListItem.Id == tmpkey" > 
                <template v-if="gaibuListItem.ItemGroup == null">
                  <DynamicComponentsProvider :LoadType="'1'" :componentName="`${gaibuListItem.EnglishName}`" :key="gaibuListItem.Id" />  
                </template>
                <item-groups :tmpkey="gaibuListItem.ItemGroup" :rowIndex="gaibuListItem.Id" />
              </template>
            </template>
            <template v-else>  
              <DynamicComponentsProvider :LoadType="'1'" :componentName="`${gaibuListItem.EnglishName}`" :key="gaibuListItem.Id" /> 
            </template>         
          </template>
        </template> 
      </v-container>
    </v-row>
  </v-app>
</template>
<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import DynamicComponentsProvider from '../SubComponents/DynamicComponentsProvider';
import ItemGroups from './ItemGroups'

import { bus } from '../../../app'

  export default {
    props: ['RowIndex'],

    components:{
      DynamicComponentsProvider,
      ItemGroups
    },
    data: () => ({
      tmpGaibuList: [],
      tmpRowIndex: '',
      tmpkey: [],
      tmpItemGroup: '',
      prevRoute: {
        name: ''
      },
      showContextMenu: false
    }),

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.prevRoute = from
      })
    },

   async mounted(){
    const uniqHidden = [ ...new Set(this.PlanInfo.HiddenItemIndex)];

    this.PlanInfo.HiddenItemIndex = [];
    this.$store.commit('SetHiddenItemIndex', uniqHidden);

    this.tmpGaibuList = this.UserInterface.GaibuListItems
    this.tmpkey       = await this.PlanInfo.EditKey
   },

  methods: {
    selectedButton (){
      bus.$emit('changeIt', '外部 シート-');
    },
  },
  computed: {
    ...mapState(['UserInterface', 'PlanInfo']),
  },


}
 </script>

