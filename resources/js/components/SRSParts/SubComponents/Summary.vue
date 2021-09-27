<template>
  <v-app>
      <template >
          <v-simple-table style="width:100%; margin-top:30px;">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Kind</td>
                  <td>Material</td>
                  <td>Texture(JapaneseName)</td>
                  <td  @click="editTextureSelected('-1')" title="Show all Gaibulist Items"><v-icon>mdi-bookmark-multiple</v-icon></td>  
                </tr>  
              </thead>
              <tbody v-for="(texture, textureIndex) in texturesSelected" :key="textureIndex.textureIndex">	    
                  <template>
                    <tr class="highlight">
                        <td rowspan="2" width="2px">{{textureIndex + 1}}</td>
                        <td>{{texture.Kind}}</td>
                        <td>{{texture.Material}}</td>
                        <td>{{texture.JapaneseName}}</td>

                        <template v-if="ShioData.filter( Item => Item.ItemName == texture.Kind)">
                          <td>{{ShioData.filter( Item => Item.ItemName == texture.Kind)[0]["ItemName"]}}</td> <!---->
                        </template>

                        <td width="2px" @click="editTextureSelected(texture.RowIndex)" :title="`Edit ${texture.Kind}`"><v-icon>mdi-file-edit</v-icon></td>
                    </tr>
                  </template> 
              </tbody>
          </v-simple-table>
           <br><hr><br>
          <center>
            <v-btn depressed large style="width:300px;margin-left:-200px" color="primary" class="elevation-6" @click="Save(); showDialog()">SAVE</v-btn>
          </center>
          <br> 

      </template>

    <loading :loadingDialog="loadingDialog" items="Saving plan data..."/>

 </v-app>
</template>

<style scoped>
  thead{
   background-color: lightgray;
  }
  label{
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;    
  }
  td{
    border: 0.5px solid grey;
    padding: 5px;
  }
  .header{
    background-color: #d9d9d9;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90%;
  }
  .head{
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .highlight{background-color : rgb(231, 239, 255);} 
/*  .highlight2{background-color : red;}*/

</style>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'
import loading from './Loading';
import { bus } from '../../../app'


export default {
  name: 'Summary',
  components:{
    loading
  },
  data: () => ({
    loadingDialog : false,
    messageDialog : true,
    texturesSelected : [],
    dialog: false,
    tmpIndex: '',
    isShown: false,
    ShioData : [],
  }),
  
  methods:{
  showDialog(){
    this.dialog = false
    this.loadingDialog = true
  },

  async Save(){
    try{
        await this.showDialog();

        await axios.post('api/savePlans', this.PlanInfo );
        await new Promise(r => setTimeout(r, 1500));
        await this.$store.commit('resetPlanInfo');
        await this.$store.dispatch('EditKey', '-1')
        this.$router.push('menu');  
      }catch(error){
        alert(error)
      }
    },

    editTextureSelected(RowIndex){
      this.tmpIndex = RowIndex
      this.isShown = true
      //bus.$emit('changeIt', '');
      this.$store.dispatch('EditKey', RowIndex)
      bus.$emit('changeIt', '外部 シート-');
    },
    showSummary(){
      this.summaryTable = true
      this.tmpIndex = ''
      this.isShown = false
      bus.$emit('changeIt', '概要');
      this.$router.push('Summary')
    },

  },
 
  async mounted(){

    try{
   //const data = await axios.get('api/shiyoushoMaster/6190335-2020/3-1/1'); //
      const data = await axios.get('api/shiyoushoMaster/'+this.PlanInfo['ConstructionCode']+'/'+this.PlanInfo['RevisionNumber']+'/'+this.PlanInfo['RequestNumber']+'/'); //
      this.ShioData = data.data;
    }catch( error ){
      console.log( error );
    }

    this.summaryTable= true
    await this.PlanInfo.SelectedItems.forEach(item =>{
      if (!this.PlanInfo.HiddenItemIndex.includes(item.RowIndex)){
        this.texturesSelected.push(item)

        switch(item.RowIndex){
          case '25':
            item['Kind'] = '玄関戸.シリンダー'
            break;
          case '45':
            item['Kind'] = '玄関戸.シリンダー(2)'
            break; 
        }

        this.UserInterface.GaibuListItems.forEach(formItem =>{
          if(formItem.Id == item.RowIndex){
            item['SortNo'] = parseInt(formItem.SortNo)
          }

        })
      }
    })
    
   this.texturesSelected.sort((a, b) => a.SortNo - b.SortNo );
  },

  computed: {
    ...mapState(['UserInterface', 'PlanInfo']),
    ...mapActions(['editKey']),
  },
}
</script>

