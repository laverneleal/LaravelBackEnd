<template>
  <v-container class="grey lighten-4 pa-2" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
    <tr> 
      <td width="38px" class="borderRight" :rowspan="texturesInAPI.length + 3"><center><v-icon @click="togglePorch()" :color="visibleIcon.color">{{this.visibleIcon.icon}}</v-icon></center></td>
      <td class="firstColumnWidth borderLeft" :rowspan="texturesInAPI.length + 3" >
        <v-label>&nbsp;ポーチ(2)</v-label>
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
    kind: 'ポーチ(2)',
    rowIndex : '40',
    textureColor: '',
    texturesInAPI: [],
    defaultSelectedTextureInfo: {},
    visibleIcon: {icon:"mdi-minus-circle", color: "red lighten-2"},
    isShown: null,
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown('40');

    bus.$on('Porch2', (data) => {
      this.isShown = data;
      this.$store.commit('deleteHiddenItem', '40')
    })

    try{
        this.$PlanData.preSelectedItem('40')
        this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('40'))
        this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('40')] 
        this.textureColor               = this.defaultSelectedTextureInfo.JapaneseName;
        this.textureMaterial            = this.defaultSelectedTextureInfo.Material; 
    }catch(err){
      console.log('no texture defaults' + err);
    }
  },
  methods:{
    togglePorch(){
      bus.$emit('Porch2', false);
      bus.$emit('showIconPorch', {icon:"mdi-plus-circle", color: "blue lighten-2"});

      this.$store.commit('addHiddenItemIndex', '40')
    },

    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind']     = this.kind;
      textureInfo['Material'] = material;
      this.$PlanData.addSelectedItems( textureInfo, hasTexture )

       if(this.textureColor == null || this.textureMaterial == null){
         this.textureMaterial = '';
         this.textureColor    = '';
         this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('40') );
      }else{
        this.textureMaterial = textureInfo.Material;
        this.textureColor    = textureInfo.JapaneseName;        
      }
    }
  }
}
</script>
