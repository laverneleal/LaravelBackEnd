<template>
    <v-dialog v-model="visibleMaintenance" max-width="1000px">
        <v-card-title class="headline grey lighten-2">
          Maintenance Tool for Gaibu Items
        </v-card-title>
          <v-card-text>
          </br>
          <v-simple-table class="tg" width="100%">
            <thead>
              <tr>
                <th>Parts</th>
                <th>Material/kind</th>
                <th>NotApplicable</th>
                <th>DefaultSelected</th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length + 1" >
                  <v-label>屋根材種</v-label>
                </td>
              </tr>
              <template v-for="(texture, textureIndex) in texturesInAPI">
                <template v-for="(roof, labelIndex) in roofMaterialLabel">    
                  <template v-if="(texture.RoofId === roof.KindId)">
                    <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex + labelIndex">   
                      <td :rowspan="$PlanData.textureCount(roof.KindId)">
                        <v-checkbox 
                          class="shrink mt-0" 
         
                          color="orange" 
                          hide-details 
                          :label="roof.RoofLabel" 
                          :value="roof.RoofLabel" 
                          />
                      </td>
                      <td>
                        <v-checkbox 
                          class="shrink mt-0"
                     
                          color="orange" 
                          hide-details 
                          :label="texture.JapaneseName" 
                          :value="texture.JapaneseName" 
                           />
                      </td>
                      <td>
                        <v-checkbox 
                          class="shrink mt-0"
                     
                          color="orange" 
                          hide-details 
                          :label="texture.JapaneseName" 
                          :value="texture.JapaneseName" 
                          />
                      </td>
                    </tr>
                    <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex + labelIndex">    
                      <td>
                        <v-checkbox 
                          class="shrink mt-0" 
                    
                          color="orange" 
                          hide-details 
                          :label="texture.JapaneseName" 
                          :value="texture.JapaneseName"
                          />
                      </td>
                        <td>
                        <v-checkbox 
                          class="shrink mt-0"
                     
                          color="orange" 
                          hide-details 
                          :label="texture.JapaneseName" 
                          :value="texture.JapaneseName" 
                         />
                      </td>
                    </tr> 
                  </template>
                </template> 
              </template>
    
            </tbody>  



            </v-simple-table>
          </v-card-text>
    </v-dialog>




</v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from  '../../../../app'

export default {
  props: ['visibleMaintenance', 'svalue', 'japName', 'excludedItems', 'defaultItem'],
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
      this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('0'))   
      this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('0')] //from storage
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
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind']     = this.kind;
      textureInfo['Material'] = material;  

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

