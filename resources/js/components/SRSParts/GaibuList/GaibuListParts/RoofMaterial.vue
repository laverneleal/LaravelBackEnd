<template>
  <v-container class="grey lighten-4 pa-2 highlight" fluid > 
  <v-simple-table class="tg" width="100%" style="margin-top:15px;">
    <tr> 
      <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length + 1" >
        <v-label>屋根材種</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">
      <template v-for="(roof, labelIndex) in roofMaterialLabel">    
        <template v-if="(texture.RoofId === roof.KindId)">
          <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex + labelIndex">   
            <td class="secondColumnWidth" :rowspan="$PlanData.textureCount('RoofId', roof.KindId)">
              <v-checkbox 
                class="shrink mt-0" 
                v-model="textureMaterial" 
                color="orange" 
                hide-details 
                :label="roof.RoofLabel" 
                :value="roof.RoofLabel" 
                @change="saveTextureInfoASJSON( texture, `${roof.RoofLabel},${roof.KindId}`, true )"/>
            </td>
            <td>
              <v-checkbox 
                class="shrink mt-0"
                v-model="textureColor" 
                color="orange" 
                hide-details 
                :label="texture.JapaneseName" 
                :value="texture.JapaneseName" 
                @change="saveTextureInfoASJSON( texture, `${roof.RoofLabel},${roof.KindId}`, true )" />
             </td>
          </tr>
          <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex + labelIndex">    
            <td>
              <v-checkbox 
                class="shrink mt-0" 
                v-model="textureColor" 
                color="orange" 
                hide-details 
                :label="texture.JapaneseName" 
                :value="texture.JapaneseName"
                @change="saveTextureInfoASJSON( texture, `${roof.RoofLabel},${roof.KindId}`, true )"/>
            </td>
          </tr> 
        </template>
      </template> 
    </template>
  </v-simple-table>
</v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from  '../../../../app'

export default {
  data: () =>({
    roofMaterialLabel : [
                          {RoofLabel:'彩色スレート(コロニアルクァッド）', KindId: '6'},
                          {RoofLabel:'彩色スレート(コロニアルグラッサ）', KindId: '3'},
                          {RoofLabel:'ガルバリウム鋼板', KindId: '2'},
                          {RoofLabel:'コロナルーフ', KindId: '5'},                          
                        ],
    kind: '屋根材種',
    rowIndex : '0',
    texturesInAPI: [],
    textureMaterial: '',
    textureColor: '',
    defaultSelectedTextureInfo: {},
  }),
  mounted(){
    try{
      this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex(this.rowIndex))   
      this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected(this.rowIndex)] //from storage
      this.textureColor               = this.defaultSelectedTextureInfo.JapaneseName;
      this.textureMaterial            = this.defaultSelectedTextureInfo.Material.split(',')[0];
    }catch{
      console.log('error in loading texture');
    }
  },
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      textureInfo['RowIndex']   = this.rowIndex;
      textureInfo['Kind']       = this.kind;
      textureInfo['Material']   = material; 
     // textureInfo['ColumnName'] = this.$PlanData.itemIndex(this.rowIndex)  

      this.$PlanData.addSelectedItems( textureInfo, hasTexture )

      if(this.textureColor == null || this.textureMaterial == null){
        this.textureMaterial = '';
        this.textureColor    = '';
        this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('0') );
      }else{
        this.textureMaterial = textureInfo.Material.split(',')[0];
        this.textureColor    = textureInfo.JapaneseName	
      }
    }
  },
}
</script>

