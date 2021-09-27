<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pb-0" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 1" >
        <v-label>&nbsp;破風鼻隠し仕上げ</v-label>
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
            @change="saveTextureInfoASJSON(texture, 'アルミニウム', true )" />       
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
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data: () =>({
    textureMaterial : '',
    kind            : '破風鼻隠し仕上げ',
    rowIndex        : '75',
    groupIndex      : '6',
    textureMaterial : '',
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
      this.$PlanData.clearMaterial('75');
      this.$PlanData.clearMaterial('6');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

