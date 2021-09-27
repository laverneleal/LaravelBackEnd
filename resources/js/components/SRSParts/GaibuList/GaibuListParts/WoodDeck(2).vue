<template>
  <v-container class="grey lighten-4 pa-2" fluid v-show="isShown"> 
  <v-simple-table class="tg" width="100%">
    <tr class="multipleItems"> 
      <td width="38px" class="borderRight" :rowspan="texturesInAPI.length + 3"><center><v-icon @click="$PlanData.removeItem('WoodDeck2', rowIndex)" :color="visibleIcon.color">{{this.visibleIcon.icon}}</v-icon></center></td>
      <td class="firstColumnWidth borderLeft" :rowspan="texturesInAPI.length + 3" >
        <v-label>&nbsp;WPC ウッドデッキ(2)</v-label>
      </td>
    </tr>
    <template v-for="(texture, textureIndex) in texturesInAPI">  
      <tr class="multipleItems" v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">    
        <td>
          <v-checkbox 
            class="shrink mt-0" 
            v-model="textureColor" 
            color="orange" 
            hide-details 
            :label="texture.JapaneseName" 
            :value="texture.JapaneseName" 
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
            @change="saveTextureInfoASJSON(texture, null, true )" /> 
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
    textureMaterial : null,
    kind            : 'WPCウッドデッキ(2)',
    rowIndex        : '39',
    groupIndex      : '10',
    textureColor    : '',
    texturesInAPI   : [],
    defaultSelectedTextureInfo: {},
    visibleIcon: {icon:"mdi-minus-circle", color: "red lighten-2"},
    isShown: null,
  }),
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['selectedItemsPrevious']),
  },
  mounted(){
    this.isShown = this.$PlanData.isRowShown(this.rowIndex);

    bus.$on('wooddeck', (data) => {
      if((data.rowIndex == '38' && data.isHidden == true) || (data.rowIndex == '39' && data.isHidden == false)){
        this.isShown = data.isHidden
        this.visibleIcon = {icon:"mdi-minus-circle", color: "red lighten-2", rowIndex: this.rowIndex}
      }
    })

    this.$PlanData.init(this) 



    // this.isShown = this.$PlanData.isRowShown('39');

    // bus.$on('WoodDeck2', (data) => {
    //   this.isShown = data;
    //   this.$store.commit('deleteHiddenItem', '39')
    // })

    // try{
    //     this.$PlanData.preSelectedItem('39') //set default
    //     this.texturesInAPI              = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('39'))
    //     this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('39')]
    //     this.textureColor = this.defaultSelectedTextureInfo.JapaneseName;
    // }catch{
    //   console.log('no texture defaults');
    // }




  },
  methods:{
    saveTextureInfoASJSON( textureInfo, material, hasTexture ){
      this.$PlanData.saveTextureInfoASJSON(this, textureInfo, material, hasTexture )
    }




    // toggleWoodDeck(){
    //   bus.$emit('WoodDeck2', false);
    //   bus.$emit('showIconWoodDeck', {icon:"mdi-plus-circle", color: "blue lighten-2"});

    //   this.$store.commit('addHiddenItemIndex', '39')
    // },
    // saveTextureInfoASJSON( textureInfo, material, hasTexture ){
    //   textureInfo['RowIndex'] = this.rowIndex;
    //   textureInfo['Kind']     = this.kind;
    //   textureInfo['Material'] = material;

    //   this.$PlanData.addSelectedItems( textureInfo, hasTexture )

    //   if(this.textureColor == null || this.textureMaterial == null){
    //     this.textureMaterial = '';
    //     this.textureColor    = '';
    //     this.$PlanData.removeItemInSelected( this.$PlanData.itemIndexInSelected('39') );
    //   }
    // }
  }
}
</script>


