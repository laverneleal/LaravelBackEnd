<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
     <tr class="multipleItems"> 
      <td class="firstColumnWidth borderAbove" :rowspan="texturesInAPI.length + 4">   </td>

    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="テラコッタタイル" 
            value="テラコッタタイル" 
            @change="saveTextureInfoASJSON({}, 'テラコッタタイル', false )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'テラコッタタイル', true )" />
        </td>
      </tr>
       <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox 
              class="shrink mt-0" 
              v-model="textureColor" 
              color="orange" 
              hide-details 
              :label="texture.JapaneseName" 
              :value="texture.JapaneseName" 
              @change="saveTextureInfoASJSON(texture, 'テラコッタタイル', true )" />
          </td>
        </tr>   
    </template>
      <tr class="multipleItems">
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="モルタル塗り 金ゴテ仕上" 
            value="モルタル塗り 金ゴテ仕上" 
            @change="saveTextureInfoASJSON( {}, 'モルタル塗り 金ゴテ仕上', false )" 
          />   
        </td>
      </tr> 
      <tr class="multipleItems">
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="なし" 
            value="なし" 
            @change="saveTextureInfoASJSON( {}, 'なし', false )" 
          />   
        </td>
      </tr>  
      <tr class="multipleItems">
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
import { bus } from '../../../../app'
export default {
  data: () =>({
    textureMaterial: '',
    kind           : '玄関内土間(2)',
    rowIndex       : '77',
    groupIndex     : '7',
    textureColor   : '',
    isShown        : null,
    texturesInAPI  : [],
    visibleIcon    : {icon:"mdi-plus-circle", color: "blue lighten-2"},
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown('46');


    bus.$on('genkandoma', (data) => {
      if((data.rowIndex == '19' && data.isHidden == true) || (data.rowIndex == '46' && data.isHidden == false)){
        this.isShown = data.isHidden
        this.visibleIcon = {icon:"mdi-minus-circle", color: "red lighten-2", rowIndex: this.rowIndex}
      }
    })

    this.$PlanData.init(this)  
    this.$PlanData.listenMultipleItemsIcon(this)
    this.$PlanData.listenMaterialSelect(this)


  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('46');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>
