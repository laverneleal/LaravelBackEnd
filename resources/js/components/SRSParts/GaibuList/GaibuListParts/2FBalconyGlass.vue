<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0 pb-0" fluid> 
    <v-simple-table class="tg" width="100%">
      <tr> 
        <td class="firstColumnWidth borderBottom borderAbove" :rowspan="texturesInAPI.length + 1">
          <v-icon :color="visibleIcon.color" @click="$PlanData.addItem('Balcony2', rowIndex);">
            {{visibleIcon.icon}}
          </v-icon>
            2Fバルコニー
        </td>
        <td class="borderBottom" width="100px" :rowspan="texturesInAPI.length + 1">
          <center>手摺</center>
        </td>
      </tr>
      <template v-for="(texture, textureIndex) in texturesInAPI">  
        <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="additionalText + ' ' + texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, null, true )" /> 
          </td>
        </tr>
        <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="additionalText + ' ' + texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, null, true )" /> 
        </td>
      </tr> 
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { bus } from '../../../../app'

export default {
  data: () =>({
    textureMaterial: null,
    kind           : '2Fバルコニー',
    rowIndex       : '14',
    textureColor   : '',
    groupIndex     : '1',
    texturesInAPI  : [],
    additionalText : 'ファインバルコニー　パネル部：合わせガラス仕様',
    visibleIcon    : {icon:"mdi-plus-circle", color: "blue lighten-2"},
    defaultSelectedTextureInfo: {},
  }),

  computed:{
    ...mapState([ 'UserInterface', 'PlanInfo' ]),  
  },

  mounted(){
    if(this.$PlanData.isRowShown('31')){
      this.visibleIcon = bus.$emit('showIcon', {icon:"", color: ""})  
    }

    this.$PlanData.init(this)  
    this.$PlanData.listenMultipleItemsIcon(this)
    this.$PlanData.listenMaterialSelect(this)
  },

  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('52');
      this.$PlanData.clearMaterial('26');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>


