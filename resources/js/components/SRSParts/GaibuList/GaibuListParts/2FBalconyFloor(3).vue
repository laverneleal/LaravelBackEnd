<template>
  <v-container class="grey lighten-4 pb-0 pl-2 pr-2" fluid v-show="isShown"> 
  <v-simple-table width="100%" >
    <tr class="multipleItems"> 
      <td class="firstColumnWidth borderBottom" :rowspan="texturesInAPI.length + 1">
      </td>
      </td>
      <td  width="100px" :rowspan="texturesInAPI.length + 1">
        <center>床</center>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="'index'+textureIndex">            
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, '---', true)"  />
        </td>
      </tr>
       <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) !== 0)" :key="'index1'+textureIndex">    
          <td>
            <v-checkbox 
              class="shrink mt-0" 
              v-model="textureColor" 
              color="orange" 
              hide-details 
              :label="texture.JapaneseName" 
              :value="texture.JapaneseName" 
              @change="saveTextureInfoASJSON(texture, '---', true)"  />
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
    kind           : '2Fバルコニー.床(3)',
    rowIndex       : '50',
    textureColor   : '',
    groupIndex     : '3',
    texturesInAPI  : [],
    defaultSelectedTextureInfo: {},
    isShown: null,
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

    this.isShown = this.$PlanData.isRowShown(this.rowIndex);
    this.$PlanData.init(this) 

  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }

    // initializeBalconyFloor(){
    //   try{
    //     this.$PlanData.preSelectedItem(this.rowIndex) //set default
    //     this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex(this.rowIndex))
    //     this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected(this.rowIndex)]
    //     this.textureColor               = this.defaultSelectedTextureInfo.JapaneseName; 
    //     this.textureMaterial            = '---'; 
    //   }catch{
    //     console.log('no texture defaults');
    //   }
    // },






    // saveTextureInfoASJSON( textureInfo, material, hasTexture ){
    //   textureInfo['RowIndex'] = this.rowIndex;
    //   textureInfo['Kind']     = this.kind;
    //   textureInfo['Material'] = material;
    //   this.$PlanData.addSelectedItems( textureInfo, hasTexture )

    //   if(this.textureColor == null || this.textureMaterial == null){
    //     this.textureMaterial = '';
    //     this.textureColor    = '';
    //     this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('50') );
    //   }else{
    //     this.textureMaterial = textureInfo.Material;
    //     this.textureColor    = textureInfo.JapaneseName;        
    //   }
    // }





  }
}
</script>

