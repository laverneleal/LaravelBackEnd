<template>
  <v-container :class="cssClass" fluid> 
    <v-simple-table class="tg" width="100%" v-show="isShown">
      <tr class="multipleItems"> 
        <td :class="firsColumnClass" :rowspan="texturesInAPI.length + 3">
          <v-icon :color="visibleIcon.color" @click="$PlanData.removeItem('Terrace2', rowIndex)">
            {{visibleIcon.icon}}
          </v-icon>
            テラス(2)
        </td>
      </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="saveTextureInfoASJSON({}, 'ヨーロピアンタイル', false )"/>    
        </td>          
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル',true )" />
        </td>
      </tr>
       <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @click="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル', true )" />
          </td>
        </tr> 
    </template>

    <template v-if="(PlanInfo.HouseType == 'i-Smile')">
      <tr class="multipleItems">
        <td colspan="2" >
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="なし" value="なし" @change="saveTextureInfoASJSON( {}, 'なし', false )" />   
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
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from '../../../../app'
export default {
  data: () =>({
    textureMaterial: '',
    kind           : 'テラス(2)',
    rowIndex       : '42',
    cssClass       : '',
    firsColumnClass: '',
    groupIndex     : '9',
    textureColor   : '',
    texturesInAPI  : [],
    visibleIcon    : {icon:"mdi-minus-circle", color: "red lighten-2"},
    isShown        : null,
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
    }else{
      this.cssClass = 'grey lighten-4 pb-0 pl-2 pr-2'
      this.firsColumnClass = 'firstColumnWidth borderBottom'
    }

    this.isShown = this.$PlanData.isRowShown(this.rowIndex);

    bus.$on('terrace', (data) => {
      console.log(data)
      if((data.rowIndex == '28' && data.isHidden == true) || (data.rowIndex == '42' && data.isHidden == false)){
        this.isShown = data.isHidden
        this.visibleIcon = {icon:"mdi-minus-circle", color: "red lighten-2", rowIndex: this.rowIndex}
      }
    })
    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this) 
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('81');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>
