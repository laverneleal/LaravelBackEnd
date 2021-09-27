<template>
  <v-container class="grey lighten-4 pt-0 pr-2 pl-2 pb-2" fluid v-show="isShown">  
    <v-simple-table class="tg" width="100%">
      <tr class="multipleItems"> 
        <td class="firstColumnWidth borderAbove" :rowspan="texturesInAPI.length + 2" >
        </td>
        <td :rowspan="texturesInAPI.length + 2" >
          <v-label><center>シリンダー</center></v-label>
        </td>
      </tr>
      <template v-for="(texture, textureIndex) in textureMaterialApi()">  
        <tr class="multipleItems">  
          <td>  
            <v-checkbox 
              class="shrink mt-0" 
              v-model="textureMaterial" 
              color="orange" 
              hide-details 
              :label="texture.Material" 
              :value="texture.Material" 
              @change="saveTextureInfoASJSON(texture, true )" />
          </td>   
          <td>
            <tr class="multipleItems" v-for="(textureColor_, textureColorIndex) in texturesInAPI">
              <template v-if="textureColor_.TypeId == texture.TypeId">
                <v-checkbox 
                  class="shrink mt-0" 
                  v-model="textureColor" 
                  color="orange" 
                  hide-details 
                  :label="textureColor_.JapaneseName" 
                  :value="textureColor_.JapaneseName" 
                  @change="saveTextureInfoASJSON(textureColor_, true )" />      
              </template>
              </tr>
            </td>
          </tr>
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
    kind: '玄関戸.シリンダー(2)',
    rowIndex : '45',
    groupIndex: '11',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
    tmpTextureMaterial: [],
    visibleIcon: {icon:"mdi-minus-circle", color: "red lighten-2"},
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
    saveTextureInfoASJSON( textureInfo, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, textureInfo.Material, hasTexture )
    },
    textureMaterialApi(){
      const uniqueValue = [...new Map(this.texturesInAPI.map(item => [item.TypeId, item])).values()]  // 
      return uniqueValue 
    }
  }
}
</script>

