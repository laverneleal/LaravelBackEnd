<template>
  <v-container class="grey lighten-4 pa-2 pb-0" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 2" >
        <v-label>&emsp;宅配ボックス<br>&emsp;(据置タイプ）</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-label>&emsp;本体色</v-label>
      
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, '本体色', true );" />
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
              @change="saveTextureInfoASJSON(texture, '本体色', true );" />
          </td>
        </tr>   
    </template> 
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from  '../../../../app'

export default {
  data: () =>({
    textureMaterial : null,
    kind            : '宅配ボックス(据置タイプ）',
    rowIndex        : '83',
    textureColor    : '',

    texturesInAPI   : [],
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this)
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      if(this.textureColor == null){
        this.textureMaterial = null
      }
      
      this.$PlanData.clearMaterial('84') 
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

