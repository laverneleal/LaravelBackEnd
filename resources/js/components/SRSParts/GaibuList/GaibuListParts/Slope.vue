<template>
  <v-container class="grey lighten-5 pa-2" fluid> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td width="38px" :rowspan="texturesInAPI.length + 3" class="borderRight"><center><v-icon @click="addSlope()" :color="visibleIcon.color">{{this.visibleIcon.icon}}</v-icon></center></td>
      <td class="firstColumnWidth borderLeft" :rowspan="texturesInAPI.length + 3" >
        <v-label>スロープ</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td class="secondColumnWidth" :rowspan="texturesInAPI.length">
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="ヨーロピアンタイル" 
            value="ヨーロピアンタイル" 
            @change="saveTextureInfoASJSON({}, 'ヨーロピアンタイル', false )"/>    
        </td>          
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName"       
            @change="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル', true )" />
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
              @change="saveTextureInfoASJSON(texture, 'ヨーロピアンタイル', true )" />
          </td>
        </tr>   
    </template>
      <tr>
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="なし" 
            value="なし" 
            @change="saveTextureInfoASJSON( {}, 'なし', false )" 
          />   
        </td>
      </tr>  
      <tr>
        <td colspan="2" >
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureMaterial" 
            color="orange" 
            hide-details 
            label="その他" 
            value="その他" 
            @change="saveTextureInfoASJSON( {}, 'その他', false )" 
          />   
        </td>
      </tr>  
  </v-simple-table>
</v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from '../../../../app'
export default {
  data: () =>({
    textureMaterial: '',
    kind: 'スロープ',
    rowIndex : '29',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
    visibleIcon: {icon:"mdi-plus-circle", color: "blue lighten-2"},
    isShown: null,
  }),
   computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    if(this.$PlanData.isRowShown('51') == true){
      this.visibleIcon = '' 
    }

   bus.$on('showIconSlope', (data) => {
      this.visibleIcon = data;
    })

    try{
        this.$PlanData.preSelectedItem('29')
        this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('29'))
        this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('29')] 
        this.textureColor               = this.defaultSelectedTextureInfo.JapaneseName;
        this.textureMaterial            = this.defaultSelectedTextureInfo.Material; 
    }catch(err){
      console.log('no texture defaults' + err);
    }
  },
  methods:{
    addSlope(){
      this.visibleIcon = ''
      bus.$emit('Slope2', true);
    },
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind']     = this.kind;
      textureInfo['Material'] = material;
      this.$PlanData.addSelectedItems( textureInfo, hasTexture )

       if(this.textureColor == null || this.textureMaterial == null){
         this.textureMaterial = '';
         this.textureColor    = '';
         this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('29') );
      }else{
        this.textureMaterial = textureInfo.Material;
        this.textureColor    = textureInfo.JapaneseName;        
      }
    }
  }
}
</script>
