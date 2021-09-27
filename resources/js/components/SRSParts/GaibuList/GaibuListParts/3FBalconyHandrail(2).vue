<template>
  <v-container class="grey lighten-4 pl-2 pr-2 pt-0" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
    <tr class="multipleItems"> 
      <td 
        class="firstColumnWidth borderAbove" 
        :rowspan="texturesInAPI.length + 1">
      </td>
      <td class="borderAbove" width="100px" :rowspan="texturesInAPI.length + 1" ></td>
    </tr>

    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="アルミ笠木" 
            value="アルミ笠木" 
            @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )" />
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
              @change="saveTextureInfoASJSON(texture, 'アルミ笠木', true )" />
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
    kind     : '3Fバルコニー.笠木(2)',
    rowIndex : '61',
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
    this.isShown = this.$PlanData.isRowShown('59');
    
    this.$PlanData.init(this) 
    this.$PlanData.listenMaterialSelect(this)

    bus.$on('balcony', (data) => {
      if((data.rowIndex == '56' && data.isHidden == true) || (data.rowIndex == '60' && data.isHidden == false) ){
        this.isShown = data.isHidden
      }
    })


   //this.isShown = this.$PlanData.isRowShown('59');

    // bus.$on('balcony3F', (data) => {
    //   this.isShown = data;
    //   this.$store.commit('deleteHiddenItem', '61')
    // })

    // try{
    //     this.$PlanData.preSelectedItem('61') //set default
    //     this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('61'))
    //     this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('61')] 
    //     this.textureColor               = this.defaultSelectedTextureInfo.JapaneseName;
    //     this.textureMaterial            = this.defaultSelectedTextureInfo.Material; 
    // }catch{
    //   console.log('no texture defaults');
    // }
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.clearMaterial('60');
      this.$PlanData.clearMaterial('61');
      this.$PlanData.clearMaterial('62');
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }


    // saveTextureInfoASJSON( textureInfo, material, hasTexture ){
    //   textureInfo['RowIndex'] = this.rowIndex;
    //   textureInfo['Kind']     = this.kind;
    //   textureInfo['Material'] = material;
    //   this.$PlanData.addSelectedItems( textureInfo, hasTexture )

    //   if(this.textureColor == null || this.textureMaterial == null){
    //     this.textureMaterial = '';
    //     this.textureColor    = '';
    //     this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('61') );
    //   }else{
    //     this.textureMaterial = textureInfo.Material;
    //     this.textureColor    = textureInfo.JapaneseName;        
    //   }
    // }
  }
}
</script>

