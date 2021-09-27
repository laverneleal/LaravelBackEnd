<template>
      <v-card class="flexcard" style="margin-top:25px" outlined>

        <v-card style="height:30px">
          <v-toolbar
            flat
            class="grey lighten-2">
              <v-btn fab fixed right @click="$emit('close');close();"><v-icon>mdi-close</v-icon></v-btn>
              <v-toolbar-title>Maintenance Tool for {{ItemPart}}</v-toolbar-title>
          </v-toolbar>
        </v-card> 
      
        <v-card-text class="headline">
          <br>
          <v-simple-table width="100%" class="grey lighten-5" >
            <thead class="grey lighten-3">
              <tr>
                <th>House Type</th>
                <th>Not Applicable</th>
                <th>Default Selected</th>
              </tr>
            </thead>

            <!--===================== I-SMILE ========================-->
            <tbody>
              <tr> 
                <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length" >
                  <v-checkbox 
                      class="shrink mr-0 mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Smile" 
                      :value="0"
                      @click="visibleSmile = !visibleSmile; SmileTextures()"/> 
                </td>
                <td v-if="!visibleSmile"></td>
                <td v-if="!visibleSmile"></td>
              </tr>

              <template v-if="visibleSmile">
                <template v-for="(texture, textureIndex) in texturesInAPI">  
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">             
                    <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureSmile" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultSmile" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">  
                   <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureSmile" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultSmile" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>

            <!--===================== I-SMART ========================-->
            <tbody>
                <tr> 
                    <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length" >
                    <v-checkbox 
                        class="shrink mr-0 mt-0" 
                        v-model="houseTypes" 
                        color="orange" 
                        hide-details 
                        label="i-Smart" 
                        :value="1"
                        @click="visibleSmart = !visibleSmart; SmartTextures()"/> 
                    </td>
                    <td v-if="!visibleSmart"></td>
                    <td v-if="!visibleSmart"></td>
                </tr>

              <template v-if="visibleSmart">
                <template v-for="(texture, textureIndex) in texturesInAPI">  
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">               
                    <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureSmart" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultSmart" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">  
                   <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureSmart" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultSmart" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>

            <!--===================== I-Cube ========================-->
            <tbody>
              <tr> 
                <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length" >
                  <v-checkbox 
                      class="shrink mr-0 mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Cube" 
                      :value="2"
                      @click="visibleCube = !visibleCube; CubeTextures()"
                  /> 
                </td>
                <td v-if="!visibleCube"></td>
                <td v-if="!visibleCube"></td>
              </tr>

              <template v-if="visibleCube">
                <template v-for="(texture, textureIndex) in texturesInAPI">  
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">                 
                    <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureCube" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultCube" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">  
                   <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TextureCube" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultCube" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>

            <!--===================== I-Pallete ========================-->
            <tbody>
              <tr> 
                <td class="firstColumnWidth" :rowspan="$PlanData.texturesInAPI($PlanData.itemIndex('0')).length" >
                  <v-checkbox 
                      class="shrink mr-0 mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Pallete" 
                      :value="3"
                      @click="visiblePallete = !visiblePallete; PalleteTextures()"
                  /> 
                </td>
                <td v-if="!visiblePallete"></td>
                <td v-if="!visiblePallete"></td>
              </tr>

              <template v-if="visiblePallete">
                <template v-for="(texture, textureIndex) in texturesInAPI">  
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)" :key="textureIndex">                 
                    <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TexturePallete" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultPallete" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                  <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)" :key="textureIndex">  
                   <td>
                      <v-checkbox 
                        class="shrink mt-0" 
                        v-model="TexturePallete" 
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName" 
                        :value="texture.JapaneseName" /> 
                    </td>
                    <td>
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="TextureDefaultPallete" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/> 
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>

          </v-simple-table>
          </v-card-text>
        <v-card style="height:30px: margin-top:5px">
          <v-toolbar
            flat
            class="grey lighten-2">
            <v-btn fab fixed right @click="Save()"><v-icon>mdi-content-save-all</v-icon></v-btn>
          </v-toolbar>
        </v-card> 
        </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from  '../../../../app'

export default {
  
    data: () =>({
    rowIndex : '0',
    texturesInAPI: [1],
    houseTypes:[],

    visibleSmile: false,
    TextureSmile: [],
    TextureDefaultSmile: '',
    textureMaterialSmile : '',
    SmileExcludedItems: '',

    visibleSmart: false,
    TextureSmart: [],
    TextureDefaultSmart: '',
    textureMaterialSmart : '', 
    SmartExcludedItems: '', 

    visibleCube: false,
    TextureCube: [],
    TextureDefaultCube: '',
    textureMaterialCube : '',  
    CubeExcludedItems: '',

    visiblePallete: false,
    TexturePallete: [],
    TextureDefaultPallete: '',
    textureMaterialPallete : '',  
    PalleteExcludedItems: '',         

    ItemPart : '',
    excludedItems: '',
    preSelectedItem: '',
  
  }),
  async mounted(){
      
      try {
        const data = await axios.get('api/wooddeckFence');
        this.texturesInAPI = data.data.data;
      }catch(error){
        console.log(error);
      }

      try{
        const data = await axios.get('/api/maintenanceShowAll');

        this.datas = data.data.data.filter(Id => Id.Id == 63);  //NEED TO CHANGE ACCORDING TO ID

		    this.ItemPart = this.datas[0]['JapaneseName'];  
        if( this.datas[0]['excludedItems'] == 0){
            this.excludedItems = JSON.parse('[{"Items":["None"], "HouseType": "0"}, {"Items": ["None"], "HouseType": "1"}, {"Items": ["None"], "HouseType": "2"}]');
        }else{
            this.excludedItems = JSON.parse(this.datas[0]['excludedItems']);
        }

        if( this.datas[0]['preSelectedItem'] == 0){
            this.preSelectedItem = JSON.parse('[{"HouseType":"0","Material":"None", "Item":"None"},{"HouseType":"1","Material":"None", "Item":"None"}, {"HouseType":"2","Material":"None", "Item":"None"}]');
        }else{
            this.preSelectedItem = JSON.parse(this.datas[0]['preSelectedItem']);
        }

        if( this.datas[0]['HouseType'] ){
          this.houseTypes = JSON.parse(this.datas[0]['HouseType'] ); 

          if( this.datas[0]['HouseType'].includes(0) || this.datas[0]['HouseType'].includes("0") ) {       
            this.SmileTextures();
            this.visibleSmile = true;
          } 

          if( this.datas[0]['HouseType'].includes(1) || this.datas[0]['HouseType'].includes("1") ) {
            this.SmartTextures();
            this.visibleSmart = true;
          } 

          if( this.datas[0]['HouseType'].includes(2) || this.datas[0]['HouseType'].includes("2") ) {
            this.CubeTextures();
            this.visibleCube = true;
          } 

          if( this.datas[0]['HouseType'].includes(3) || this.datas[0]['HouseType'].includes("3") ) {
            this.PalleteTextures();
            this.visiblePallete = true;
          }             
        }

      }catch(error){
        console.log(error)
      }

  },
  computed:{
    ...mapState(['UserInterface', 'PlanInfo']),
  },
  methods:{

    async SmileTextures(){

      let TextureSmiles = this.excludedItems.filter(HouseType => HouseType.HouseType == 0);
      let TextureDefaultSmiles = this.preSelectedItem.filter(HouseType => HouseType.HouseType == 0);
      if( TextureSmiles == '' ){ 
        this.TextureSmile = []; 
      }else{
        this.TextureSmile = TextureSmiles[0]['Items']; 
      }

      if( TextureDefaultSmiles == ''){
        this.TextureDefaultSmile = ''; 
        this.textureMaterialSmile = '';
      }else{
        this.TextureDefaultSmile = TextureDefaultSmiles[0]['Item']; 
        this.textureMaterialSmile = TextureDefaultSmiles[0]['Material'];
      }

    },

    async SmartTextures(){

      let TextureSmarts = this.excludedItems.filter(HouseType => HouseType.HouseType == 1);
      let TextureDefaultSmarts = this.preSelectedItem.filter(HouseType => HouseType.HouseType == 1);

      if( TextureSmarts == '' ){ 
        this.TextureSmart = []; 
      }else{
        this.TextureSmart = TextureSmarts[0]['Items']; 
      }

      if( TextureDefaultSmarts == '' ){
        this.TextureDefaultSmart = ''; 
        this.textureMaterialSmart = '';        
      }else{
        this.TextureDefaultSmart = TextureDefaultSmarts[0]['Item']; 
        this.textureMaterialSmart = TextureDefaultSmarts[0]['Material'];
      }  

    },

    async CubeTextures(){

      let TextureCubes = this.excludedItems.filter(HouseType => HouseType.HouseType == 2);
      let TextureDefaultCubes = this.preSelectedItem.filter(HouseType => HouseType.HouseType == 2);

      if( TextureCubes == '' ){ 
        this.TextureCube = []; 
      }else{
        this.TextureCube = TextureCubes[0]['Items']; 
      }
      if( TextureDefaultCubes == '' ){
        this.TextureDefaultCube = '';
        this.textureMaterialCube = ''; 
      }else{
        this.TextureDefaultCube = TextureDefaultCubes[0]['Item']; 
        this.textureMaterialCube = TextureDefaultCubes[0]['Material']; 
      }

    },

    async PalleteTextures(){

      let TexturePalletes = this.excludedItems.filter(HouseType => HouseType.HouseType == 3);
      let TextureDefaultPalletes = this.preSelectedItem.filter(HouseType => HouseType.HouseType == 3);

      if( TexturePalletes == '' ){ 
        this.TexturePallete = []; 
      }else{
        this.TexturePallete = TexturePalletes[0]['Items']; 
      }
      if( TextureDefaultPalletes == '' ){
        this.TextureDefaultPallete = '';
        this.textureMaterialPallete = ''; 
      }else{
        this.TextureDefaultPallete = TextureDefaultPalletes[0]['Item']; 
        this.textureMaterialPallete = TextureDefaultPalletes[0]['Material']; 
      }

    },    

    close(){
        this.houseTypes = [];

        this.visibleSmile = false;
        this.TextureSmile = [];
        this.TextureSmileDefault = '';
        this.TextureDefaultSmile = '';
        this.textureMaterialSmile = '';

        this.visibleSmart = false;
        this.TextureSmart = [];
        this.TextureDefaultSmart = '';
        this.TextureDefaultSmart = '';
        this.textureMaterialSmart = '';

        this.visibleCube = false;
        this.TextureCube = [];
        this.TextureDefaultCube = '';
        this.TextureDefaultCube = '';
        this.textureMaterialCube = '';

        this.visiblePallete = false;
        this.TexturePallete = [];
        this.TextureDefaultPallete = '';
        this.TextureDefaultPallete = '';
        this.textureMaterialPallete = '';          

        this.$router.push('/maintenancetool');
      },

    async Save(){

      try {
        const data = await axios.get('api/wooddeckFence');
        this.texturesInAPI = data.data.data;
      }catch(error){
        console.log(error);
      }

      let data_array = [];

      // ==========================for i-smile==============================
      if(this.TextureSmile == ''){
        this.SmileExcludedItems= '';  
      }else{
        this.SmileExcludedItems = this.TextureSmile ;
      }

      let SmileDefault = {}; 
      SmileDefault.HouseType = "0";
      SmileDefault.Item = this.TextureDefaultSmile;
      SmileDefault.Material = this.textureMaterialSmile;

     // ==========================for i-smart==============================
      if(this.TextureSmart == ''){
        this.SmartExcludedItems = '';  
      }else{
        this.SmartExcludedItems = this.TextureSmart ;
      }

      let SmartDefault = {}; 
      SmartDefault.HouseType = "1";
      SmartDefault.Item = this.TextureDefaultSmart;
      SmartDefault.Material = this.textureMaterialSmart;

      // ==========================for i-cube==============================
      if(this.TextureCube == ''){
        this.CubeExcludedItems = '';  
      }else{
        this.CubeExcludedItems = this.TextureCube ;
      }

      let CubeDefault = {}; 
      CubeDefault.HouseType = "3";
      CubeDefault.Item = this.TextureDefaultCube;
      CubeDefault.Material = this.textureMaterialCube;

      // ==========================for i-pallete==============================
      if(this.TexturePallete == ''){
        this.PalleteExcludedItems = '';  
      }else{
        this.PalleteExcludedItems = this.TexturePallete ;
      }

      let PalleteDefault = {}; 
      PalleteDefault.HouseType = "3";
      PalleteDefault.Item = this.TextureDefaultPallete;
      PalleteDefault.Material = this.textureMaterialPallete;      

      data_array.push( 63, this.SmileExcludedItems, this.SmartExcludedItems, this.CubeExcludedItems, this.PalleteExcludedItems, SmileDefault, SmartDefault, CubeDefault, PalleteDefault, this.houseTypes);
      await axios.post('api/saveMaintenanceTool3', data_array );

      await this.$router.push('/maintenancetool');
      await close();
      
    },
      

  },
}
</script>