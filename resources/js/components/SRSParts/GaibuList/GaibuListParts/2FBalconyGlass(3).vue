<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0 pb-0" fluid v-show="isShown"> 
    <v-simple-table class="tg" width="100%">
      <tr class="multipleItems"> 
        <td class="firstColumnWidth borderBottom borderAbove" :rowspan="texturesInAPI.length + 1">
          <v-icon :color="visibleIcon.color" @click="$PlanData.removeItem('Balcony3', rowIndex);">
            {{visibleIcon.icon}}
          </v-icon>
            2Fバルコニー(3)
        </td>
        <td class="borderBottom" width="100px" :rowspan="texturesInAPI.length + 1">
          <center>手摺</center>
        </td>
      </tr>
      <template v-for="(texture, textureIndex) in texturesInAPI">  
        <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="additionalText + ' ' + texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, null, true )" /> 
          </td>
        </tr>
        <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="additionalText + ' ' + texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
    kind           : '2Fバルコニー.ガラス(3)',
    rowIndex       : '35',
    textureMaterial: null,
    textureColor   : '',
    groupIndex     : '3',
    texturesInAPI  : [],
    isShown        : null,
    additionalText : 'ファインバルコニー　パネル部：合わせガラス仕様',
    visibleIcon    : {icon:"mdi-minus-circle", color: "red lighten-2"},
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown(this.rowIndex);

    this.$PlanData.init(this)  
    this.$PlanData.listenMultipleItemsIcon(this)
    this.$PlanData.listenMaterialSelect(this)

    bus.$on('balcony', (data) => {
      if((data.rowIndex == '31' && data.isHidden == true) || (data.rowIndex == '35' && data.isHidden == false)){
        this.isShown = data.isHidden
        this.visibleIconMinus = {icon:"mdi-minus-circle", color: "red lighten-2"}
      }
    })


  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('54');
      this.$PlanData.clearMaterial('37');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }

  }
}
</script>


