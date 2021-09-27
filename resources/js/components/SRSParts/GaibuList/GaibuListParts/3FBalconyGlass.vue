<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0 pb-0" fluid> 
    <v-simple-table class="tg" width="100%">
      <tr> 
        <td class="firstColumnWidth borderBottom borderAbove" :rowspan="texturesInAPI.length + 1">
          <v-icon :color="visibleIcon.color" @click="$PlanData.addItem('Balcony3F', rowIndex);">
            {{visibleIcon.icon}}
          </v-icon>
            3Fバルコニー
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
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from '../../../../app'

export default {
  data: () =>({
    textureMaterial : null,
    kind            : '3Fバルコニー',
    rowIndex        : '56',
    groupIndex      : '5',
    textureColor    : '',
    texturesInAPI   : [],
    additionalText  : 'ファインバルコニー　パネル部：合わせガラス仕様',
    visibleIcon     : {icon:"mdi-plus-circle", color: "blue lighten-2"},
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){

    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this)
    

    if(this.$PlanData.isRowShown('59') == true){
      this.visibleIcon = bus.$emit('showIcon', {icon:"", color: "", rowIndex: this.rowIndex}) 
    }




    this.$PlanData.listenMultipleItemsIcon(this) 



  //   if(this.$PlanData.isRowShown('59') == true){
  //     this.visibleIcon = '' 
  //   }

  //   bus.$on('showIconBal', (data) => {
  //     this.visibleIcon = data;
  //   })




  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('56');
      this.$PlanData.clearMaterial('57');
      this.$PlanData.clearMaterial('58');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
    // addBalcony(){
    //   this.visibleIcon = ''
    //   bus.$emit('balcony3F', true);
    // },

    // saveTextureInfoASJSON( textureInfo, material, hasTexture ){
    //   textureInfo['RowIndex'] = this.rowIndex;
    //   textureInfo['Kind']     = this.kind;
    //   textureInfo['Material'] = material;

    //   this.$PlanData.addSelectedItems( textureInfo, hasTexture )

    //   if(this.textureColor == null || this.textureMaterial == null){
    //     this.textureMaterial = '';
    //     this.textureColor    = '';
    //     this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('56') );
    //   }
    // }
  }
}
</script>


