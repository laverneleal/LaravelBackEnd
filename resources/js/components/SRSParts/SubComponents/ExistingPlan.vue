<template>
  <v-app>
    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="elevation-6">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="arial">{{ dialogTitle }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-4" >
          <div class="pb-7">
            <the-mask id="maskEdit" 
              class="input pl-2" 
              name="constructionCode" 
              v-model="constructionCode" 
              placeholder="お客様コード" 
              mask="XXXXXXX-####" 
              type="text" 
              masked />
          </div>
            <v-select 
              v-model="planNumber" 
              name="planNumber" 
              :items="planNumbers" 
              :item-text="'plan_no'" 
              :item-value="'plan_no'" 
              label="図面番号" 
              @click="sameConstructionCodes(constructionCode)" 
              outlined 
            />
            <v-select 
              v-model="requestNumber" 
              name="requestNumber" 
              :items="requestNumbers" 
              :item-text="'shio_no'" 
              :item-value="'shio_no'" 
              label="仕様書番号" 
              @click="getRequestNumber()"
              outlined 
            />
            <v-text-field 
              v-model="houseType" 
              name="houseType" 
              placeholder="家タイプ"
              readonly
              outlined />
        </v-card-text>
        <v-card-actions>
          <v-btn 
            color="blue darken-1" 
            text 
            @click="getPlanInfoDataFromPrevious()" 
            :disabled="!isCompleteDetails" >新規登録 
          </v-btn>
          <v-btn 
            color="blue darken-1" 
            text 
            @click="dialog=false; $router.push('menu').catch(()=>{})">Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <loading :loadingDialog="loadingDialog" items="Loading Previous Plan Info"/> 
  </v-app>
</template>
<style scoped>
  .input{
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 15px;
    height: 55px;
    width: 100%;
  }
  .arial{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<script>
import MenuDialog from './Menu'
import loading from './Loading';
import { mapState, mapActions, mapMutations } from 'vuex';
import { bus } from '../../../app'

  export default {   
    name: 'Existing',
    components:{
      loading
    },
    data: () => ({
      loadingDialog : false,
      dialog: true,
      constructionCode: '',
      planNumber:'',
      requestNumber:'',
      planNumbers: [], 
      requestNumbers: [], 
      houseType: '',
      isCompleteDetails: false,
      dialogTitle: 'Revision Plan'  
    }),
    computed:{
      ...mapActions(['savePlanInfo', 'isPrevious']),
      ...mapState(['PlanInfo']),
    },
    watch:{
      loadingDialog (val) {
        if (!val) return
        setTimeout(() => (bus.$emit('changeIt', '外部 シート-')
       ), 9000)
      }
    },
    mounted(){
      //this.$store.commit('resetPlanInfo');
      
    },

    methods:{
      async showDialog(){
        this.dialog = false
        this.loadingDialog = true
      },
      async sameConstructionCodes(constructionCode){
        this.planNumbers = []

        try{
          this.planNumbers = await this.$PlanData.getSameConstructionCodes(constructionCode)
        }catch{
          console.log('Please Input Plan Number')
        }
      },

      getRequestNumber(){
        this.requestNumbers = []

        this.planNumbers.forEach(item =>{
          if(item.plan_no == this.planNumber){
            this.requestNumbers.push(item.shio_no)
            this.houseType = item.house_type
          }
        })

          this.enableButtons();
      },

      enableButtons(){
        if(this.constructionCode != '' && this.planNumber != ''){
          this.isCompleteDetails = true;   
        }
      },

      async getPlanInfoDataFromPrevious(){
        if(this.PlanInfo.isPrevious){
          try{
            await this.$store.dispatch('savePlanInfo', {
                                                          ConstructionCode: this.constructionCode,
                                                          RevisionNumber  : this.planNumber,
                                                          RequestNumber   : this.requestNumber,
                                                          HouseType       : this.houseType
                                                        })     
          }catch(error){
            console.log(error)
          } 
        }

        try{
          let uniqueId = this.constructionCode + this.planNumber +this.requestNumber + this.houseType
          const data   = await axios.get(`${process.env.MIX_API_BASEURL}/api/getPlansInfo/${uniqueId}`)

          await this.showDialog();
          await this.$store.dispatch('selectedItemsPrevious', data.data.SelectedItems.filter(item => item != null ))
          await this.$store.dispatch('hiddenItemsPrevious', data.data.HiddenItemIndex)

        }catch(error){
          console.log(error)
        }
      }
    }
  }
</script>
