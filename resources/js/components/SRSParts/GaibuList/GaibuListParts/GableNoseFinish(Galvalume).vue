<template>
  <v-container :class="cssClass" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 

      <td :class="firsColumnClass" :rowspan="texturesInAPI.length + 1" >
            {{displayName}}
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
            label="ガルバリウム鋼板" 
            value="ガルバリウム鋼板" 
            @change="saveTextureInfoASJSON(texture, 'ガルバリウム鋼板', true )" />       
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, 'ガルバリウム鋼板', true )" />
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
              @change="saveTextureInfoASJSON(texture, 'ガルバリウム鋼板', true )" />
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
    textureMaterial: '',
    kind        : '破風鼻隠し仕上げ',
    displayName : '',
    rowIndex    : '6',
    cssClass    : '',
    firsColumnClass: '',
    textureMaterial: '',
    groupIndex : '6',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    if(this.PlanInfo.HouseType == 'i-smile' || this.PlanInfo.HouseType == 'i-palette'){ //ismile //ipalette
      this.cssClass = 'grey lighten-4 pa-2'
      this.firsColumnClass = 'firstColumnWidth'
      this.displayName = this.kind
    }else{
      this.cssClass = 'grey lighten-4 pl-2 pr-2 pt-0'
      this.firsColumnClass = 'firstColumnWidth borderAbove'
    }

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

