<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0 pb-0" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
    <tr class="multipleItems"> 
      <td 
        class="firstColumnWidth borderBottom borderAbove " 
        :rowspan="texturesInAPI.length + 1">
          <v-icon 
            :color="visibleIcon.color" 
            @click="$PlanData.addItem('Balcony3', rowIndex);">
            {{this.visibleIcon.icon}}
          </v-icon>

          <v-icon 
            :color="visibleIconMinus.color" 
            @click="$PlanData.removeItem('Balcony2', rowIndex)">
            {{this.visibleIconMinus.icon}}
          </v-icon>
            2Fバルコニー(2)
      </td>
      <td class="borderBottom" width="100px" :rowspan="texturesInAPI.length + 1">
        <center>手摺</center>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="additionalText + ' ' + texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
        </td>
      </tr>
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="additionalText + ' ' + texture.JapaneseName"
            :value="texture.JapaneseName"
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
    kind            : '2Fバルコニー(2)',
    rowIndex        : '31',
    textureMaterial : null,
    groupIndex      : '2',
    textureColor    : '',
    isShown         : null,
    texturesInAPI   : [],
    additionalText  : 'ファインバルコニー　パネル部：合わせガラス仕様',
    visibleIcon     : {icon:"mdi-plus-circle", color: "blue lighten-2"},
    visibleIconMinus: {icon:"mdi-minus-circle", color: "red lighten-2"},
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState([ 'UserInterface', 'PlanInfo' ]),  
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown(this.rowIndex);

    if(this.$PlanData.isRowShown('50')){
        this.visibleIcon = {icon:"", color: ""};
        this.visibleIconMinus = {icon:"", color: ""}
    }

    bus.$on('showIcon', (data) => {
      if(data.rowIndex == '31'){
        this.visibleIcon = {icon:"", color: ""};
        this.visibleIconMinus = {icon:"", color: ""};
      }
    })

    this.$PlanData.init(this)  
    this.$PlanData.listenMultipleItemsIcon(this)
    this.$PlanData.listenMaterialSelect(this)

    bus.$on('balcony', (data) => {
      if((data.rowIndex == '14' && data.isHidden == true) || (data.rowIndex == '31' && data.isHidden == false) ){
        this.isShown = data.isHidden
      }else if(data.rowIndex == '35'){
        this.visibleIcon      = {icon:"mdi-plus-circle", color: "blue lighten-2"}
        this.visibleIconMinus = {icon:"mdi-minus-circle", color: "red lighten-2"}  

      }
    })
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('53');
      this.$PlanData.clearMaterial('32');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>


