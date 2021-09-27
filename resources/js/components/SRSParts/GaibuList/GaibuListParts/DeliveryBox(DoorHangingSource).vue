<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth borderAbove" :rowspan="texturesInAPI.length + 5" >
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-label>&emsp;扉吊元</v-label>
      
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, '扉吊元', true )" />
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
              @change="saveTextureInfoASJSON(texture, '扉吊元', true )" />
          </td>
        </tr>  
    </template> 
      <tr>
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="なし" 
            value="なし" 
            @change="saveTextureInfoASJSON( {}, 'なし', false );" 
          />   
        </td>
      </tr>  
      <tr>
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="その他" 
            value="その他" 
            @change="saveTextureInfoASJSON( {}, 'その他', false );" 
          />   
        </td>
      </tr>
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
    rowIndex        : '84',
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
    saveTextureInfoASJSON: ( textureInfo, material, hasTexture ) =>{
      if(hasTexture == false){
        this.$PlanData.clearMaterial('83')
      }
      if(this.textureColor == null){
        this.textureMaterial = null
      }
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

