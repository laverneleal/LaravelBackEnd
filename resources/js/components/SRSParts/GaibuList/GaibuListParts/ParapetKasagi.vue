<template>
  <v-container class="grey lighten-4 pa-2" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="texturesInAPI.length + 2" >
        <v-label>パラペット壁笠木</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="アルミニウム" 
            value="アルミニウム" 
            @change="saveTextureInfoASJSON(texture, 'アルミニウム', true )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'アルミニウム', true )" />
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
              @change="saveTextureInfoASJSON(texture, 'アルミニウム', true )" />
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
            label="その他" 
            value="その他" 
            @change="saveTextureInfoASJSON( {}, 'その他', false )" 
          />   
        </td>
      </tr>  
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data: () =>({
    textureMaterial: '',
    kind: 'パラペット壁笠木',
    rowIndex : '2',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.$PlanData.init(this) 
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

