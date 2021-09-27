<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0 pb-0" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
    <tr class="multipleItems"> 
      <td 
        class="firstColumnWidth borderBottom borderAbove" 
        :rowspan="texturesInAPI.length + 1">
      </td>

      <td class="borderBottom borderAbove" width="100px" :rowspan="texturesInAPI.length + 1" ></td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="JY手摺" 
            value="JY手摺" 
            @change="saveTextureInfoASJSON(texture, 'JY手摺', true )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'JY手摺', true )" />
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
              @change="saveTextureInfoASJSON(texture, 'JY手摺', true )" />
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
    kind            : '2Fバルコニー(3)',
    rowIndex        : '54',
    textureColor    : '',
    groupIndex      : '3',
    texturesInAPI   : [],
    isShown         : false,
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){

    //listen to events
    bus.$on('balcony', (data) => {
      if((data.rowIndex == '31' && data.isHidden == true) || (data.rowIndex == '35' && data.isHidden == false)){
        this.isShown = data.isHidden
      }
    })

    this.isShown = this.$PlanData.isRowShown('50');

    this.$PlanData.init(this)  
    this.$PlanData.listenMultipleItemsIcon(this)
    this.$PlanData.listenMaterialSelect(this)
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('35');
      this.$PlanData.clearMaterial('37');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }
  }
}
</script>

