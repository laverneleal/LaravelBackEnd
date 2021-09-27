<template>
  <v-container class="grey lighten-4 pa-2" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td class="firstColumnWidth" :rowspan="texturesInAPI.length + 3" >
        <v-label>屋外排水配管カバー</v-label>
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
            @change="saveTextureInfoASJSON(texture, '-', true )" /> 
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
            @change="saveTextureInfoASJSON(texture, '-', true )" /> 
        </td>
      </tr> 
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data: () =>({
    textureMaterial: '',
    kind: '屋外排水配管カバー',
    rowIndex : '47',
    textureMaterial: '',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {}, 
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    try{
        this.$PlanData.preSelectedItem('47') //set default
        this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('47'))
        this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('47')]
        this.textureColor = this.defaultSelectedTextureInfo.JapaneseName;
    }catch{
      console.log('no texture defaults');
    }
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind']     = this.kind;
      textureInfo['Material'] = material;

      this.$PlanData.addSelectedItems( textureInfo, hasTexture )

      if(this.textureColor == null || this.textureMaterial == null){
        this.textureMaterial = '';
        this.textureColor    = '';
        this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('47') );
      }
    }
  }
}
</script>


