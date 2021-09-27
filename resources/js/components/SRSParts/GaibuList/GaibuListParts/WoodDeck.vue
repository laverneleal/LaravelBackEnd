<template>
  <v-container class="grey lighten-4 pa-2" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td width="38px" :rowspan="texturesInAPI.length + 3" class="borderRight"><center><v-icon @click="$PlanData.addItem('WoodDeck2', rowIndex)" :color="visibleIcon.color">{{this.visibleIcon.icon}}</v-icon></center></td>
      <td class="firstColumnWidth borderLeft" :rowspan="texturesInAPI.length + 3" >
        <v-label>&nbsp;WPC ウッドデッキ</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
    kind            : 'WPCウッドデッキ',
    rowIndex        : '38',
    groupIndex      : '10',
    textureColor    : '',
    texturesInAPI   : [],
    defaultSelectedTextureInfo: {}, 
    visibleIcon: {icon:"mdi-plus-circle", color: "blue lighten-2"},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    if(this.$PlanData.isRowShown('39') == true){
      this.visibleIcon = bus.$emit('showIcon', {icon:"", color: "", rowIndex: this.rowIndex}) 
    }

    this.$PlanData.init(this) 
    this.$PlanData.listenMultipleItemsIcon(this) 
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>


