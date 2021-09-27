<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pb-0" fluid v-show="isShown">
    <v-simple-table class="tg" width="100%">
      <tr class="multipleItems"> 
        <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 1" >
          <v-icon :color="visibleIcon.color" @click="$PlanData.removeItem('EntranceDoor2', rowIndex)">
            {{visibleIcon.icon}}
          </v-icon>
          玄関戸(2)
        </td>
        <td width="30%" :rowspan="texturesInAPI.length + 1" >
          <v-label><center>色</center></v-label>
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
              :label="texture.JapaneseName" 
              :value="texture.JapaneseName" 
              @change="saveTextureInfoASJSON(texture, '', true )" /> 
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
    kind: '玄関戸.色(2)',
    rowIndex : '44',
    groupIndex: '11',
    textureMaterial: '',
    visibleIcon: {icon:"mdi-minus-circle", color: "red lighten-2"},
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
    isShown: null,
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown(this.rowIndex);

    bus.$on('entrancedoor', (data) => {
      if((data.rowIndex == '24' && data.isHidden == true) || (data.rowIndex == '44' && data.isHidden == false)){
        this.isShown = data.isHidden
        this.visibleIcon = {icon:"mdi-minus-circle", color: "red lighten-2", rowIndex: this.rowIndex}
      }
    })

    this.$PlanData.init(this) 

  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>