<template>
  <v-container class="grey lighten-4 pa-2" fluid> 
  <v-simple-table class="tg" width="100%" style="margin-top:15px;">
    <tr> 
      <td class="firstColumnWidth" :rowspan="texturesInAPI.length + texturesInAPI.length + 3" >
        <v-label>縦樋</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">
      <template v-for="(toi, labelIndex) in toiMaterialLabel">    
        <template v-if="(texture.ToiId == toi.ToiId)">
          <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex + toi.ToiId">   
            <td class="secondColumnWidth" :rowspan="getTextureLength(toi.ToiId)">
              <v-checkbox 
                class="shrink mt-0" 
                v-model="textureMaterial" 
                color="orange" 
                hide-details 
                :label="toi.ToiLabel" 
                :value="toi.ToiLabel" 
                @change="saveTextureInfoASJSON( texture, toi.ToiLabel, true )"/>
            </td>
            <td>
              <v-checkbox 
                class="shrink mt-0"
                v-model="textureColor" 
                color="orange" 
                hide-details 
                :label="texture.JapaneseName.replace('`','')" 
                :value="texture.JapaneseName" 
                @change="saveTextureInfoASJSON( texture, toi.ToiLabel, true )" />
             </td>
          </tr>
          <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex + toi.ToiId">    
            <td>
              <v-checkbox 
                class="shrink mt-0" 
                v-model="textureColor" 
                color="orange" 
                hide-details 
                :label="texture.JapaneseName.replace('`','')" 
                :value="texture.JapaneseName"
                @change="saveTextureInfoASJSON( texture, toi.ToiLabel, true )"/>
            </td>
          </tr> 
        </template>
      </template> 
    </template>
    <tr>
      <td colspan="2">
        <v-checkbox 
          class="shrink mt-0"
          v-model="textureMaterial" 
          color="orange" 
          hide-details 
          label="なし" 
          value="なし" 
          @change="saveTextureInfoASJSON({}, 'なし', false )" /> 
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <v-checkbox 
          class="shrink mt-0" 
          v-model="textureMaterial" 
          colspan="2" 
          color="orange" 
          hide-details 
          label="その他" 
          value="その他" 
          @change="saveTextureInfoASJSON({}, 'その他', false )" /> 
      </td>
    </tr>
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data: () =>({
    kind: '縦樋',
    toiMaterialLabel : [
                          {ToiLabel:'角樋　T15', ToiId: '1'},
                          {ToiLabel:'角樋　T30', ToiId: '2'}                      
                        ],
    rowIndex         : '8',
    texturesInAPI    : [],
    textureMaterial  : '-',
    textureColor     : '-',
    defaultSelectedTextureInfo: {},
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.$PlanData.init(this)
  },
  methods:{
    getTextureLength(ToiId){
      return this.texturesInAPI.filter(item =>  item.ToiId == ToiId ).length 
    },
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind']     = this.kind;
      textureInfo['Material'] = material;  

      this.$PlanData.addSelectedItems( textureInfo, hasTexture )

      if(this.textureColor == null || this.textureMaterial == null){
        this.textureMaterial = '';
        this.textureColor    = '';
        this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected(this.rowIndex) );
      }else{
        this.textureMaterial = textureInfo.Material;
        this.textureColor    = textureInfo.JapaneseName;
      }
    }
  }
}
</script>

