<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pb-0" fluid>
    <v-simple-table class="tg" width="100%">
      <tr> 
        <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 1" >
          <v-icon :color="visibleIcon.color" @click="$PlanData.addItem('EntranceDoor2', rowIndex)">
            {{visibleIcon.icon}}
          </v-icon>
          玄関戸
        </td>
        <td width="30%" :rowspan="texturesInAPI.length + 1" >
          <v-label><center>色</center></v-label>
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
              @change="saveTextureInfoASJSON(texture, '', true )" /> 
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
              @change="saveTextureInfoASJSON(texture, '', true )" /> 
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
    kind     : '玄関戸.色',
    groupIndex: '11',
    rowIndex : '24',
    textureMaterial: '',
    visibleIcon: {icon:"mdi-plus-circle", color: "blue lighten-2"},
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){

    if(this.$PlanData.isRowShown('44') == true){
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