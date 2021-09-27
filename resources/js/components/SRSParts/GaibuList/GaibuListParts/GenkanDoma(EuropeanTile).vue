<template>
  <v-container :class="cssClass" fluid> 
    <v-simple-table class="tg" width="100%">
      <tr> 
        <td :class="firsColumnClass" :rowspan="texturesInAPI.length + 3">
          <v-icon :color="visibleIcon.color" @click="$PlanData.addItem('GenkanDoma2', rowIndex)">
            {{visibleIcon.icon}}
          </v-icon>
            玄関内土間
        </td>
      </tr>
 
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="ヨーロピアンタイル" value="ヨーロピアンタイル" @change="saveTextureInfoASJSON({}, 'ヨーロピアンタイル', false )"/>    
        </td>          
        <td>
          <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @change="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル',true )" />
        </td>
      </tr>
       <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">    
          <td>
            <v-checkbox class="shrink mt-0" v-model="textureColor" color="orange" hide-details :label="texture.JapaneseName" :value="texture.JapaneseName" @click="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル', true )" />
          </td>
        </tr> 
    </template>

    <template v-if="(PlanInfo.HouseType == 'i-Smile')">
      <tr>
        <td colspan="2" >
          <v-checkbox class="shrink mt-0" v-model="textureMaterial" color="orange" hide-details label="なし" value="なし" @change="saveTextureInfoASJSON( {}, 'なし', false )" />   
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
    textureMaterial : '',
    kind            : '玄関内土間',
    rowIndex        : '19',
    cssClass        : '',
    groupIndex      : '7',
    firsColumnClass : '', 
    textureColor    : '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
    visibleIcon: {icon:"mdi-plus-circle", color: "blue lighten-2"},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    if(this.PlanInfo.HouseType == 'i-Smile'){
      this.cssClass = 'grey lighten-4 pa-2'
      this.firsColumnClass = 'firstColumnWidth'
    }else{
      this.cssClass = 'grey lighten-4 pb-0 pl-2 pr-2'
      this.firsColumnClass = 'firstColumnWidth borderBottom'
    }

    if(this.$PlanData.isRowShown('46') == true){
      this.visibleIcon = bus.$emit('showIcon', {icon:"", color: "", rowIndex: this.rowIndex}) 
    }

    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this) 
    this.$PlanData.listenMultipleItemsIcon(this) 
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('76');
      this.$PlanData.clearMaterial('19');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>
