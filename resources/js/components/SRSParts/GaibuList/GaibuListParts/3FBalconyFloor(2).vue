<template>
  <v-container class="grey lighten-4 pb-0 pl-2 pr-2" fluid v-show="isShown"> 
  <v-simple-table width="100%" >
    <tr class="multipleItems"> 
      <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 1">
      </td>
      </td>
      <td  width="100px" :rowspan="texturesInAPI.length + 1">
        <center>床</center>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="'index'+textureIndex">            
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, '---', true)"  />
        </td>
      </tr>
       <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) !== 0)" :key="'index1'+textureIndex">    
          <td>
            <v-checkbox 
              class="shrink mt-0" 
              v-model="textureColor" 
              color="orange" 
              hide-details 
              :label="texture.JapaneseName" 
              :value="texture.JapaneseName" 
              @change="saveTextureInfoASJSON(texture, '---', true)"  />
          </td>
        </tr>  
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from '../../../../app'
export default {
  data: () =>({
    textureMaterial: '',
    kind           : '3Fバルコニー.床(2)',
    rowIndex       : '59',
    groupIndex      : '5',
    textureColor   : '',
    texturesInAPI  : [],
    defaultSelectedTextureInfo: {},
    isShown: null,
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown('59');

    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this)



    bus.$on('balcony', (data) => {
      if((data.rowIndex == '56' && data.isHidden == true) || (data.rowIndex == '60' && data.isHidden == false) ){
        this.isShown = data.isHidden
      }
    })





  },

  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('60');
      this.$PlanData.clearMaterial('61');
      this.$PlanData.clearMaterial('62');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

