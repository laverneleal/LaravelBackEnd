<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td 
        class="firstColumnWidth borderAbove" 
        :rowspan="texturesInAPI.length + 1">
      </td>
      <td class="borderAbove" width="100px" :rowspan="texturesInAPI.length + 1" ></td>
    </tr>

    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="アルミ笠木" 
            value="アルミ笠木" 
            @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )" />
        </td>
      </tr>
       <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox 
              class="shrink mt-0" 
              v-model="textureColor" 
              color="orange" 
              hide-details 
              :label="texture.JapaneseName" 
              :value="texture.JapaneseName" 
              @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )" />
          </td>
        </tr>  
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data: () =>({
    textureMaterial: '---',
    kind           : '3Fバルコニー',
    rowIndex       : '57',
    textureColor   : '',
    texturesInAPI  : [],
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this)
    
    //this.$PlanData.listenMultipleItemsIcon(this) 


  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('56');
      this.$PlanData.clearMaterial('57');
      this.$PlanData.clearMaterial('58');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }


 

  }
}
</script>

