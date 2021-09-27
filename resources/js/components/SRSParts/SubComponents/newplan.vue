<template>
  <v-app>

    <!-- This is for dialog message -->
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card class="elevation-6">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title class="arial">入力情報(NEW PLAN)</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pt-4" >
        <div class="pb-7">
          <the-mask class="input pl-2" name="constructionCode" v-model="constructionCode" placeholder="お客様コード" mask="XXXXXXX-####" tabindex="1" type="text" masked />
        </div>
          
          <div>
              <v-text-field maxlength="6" tabindex="2" v-model="planNumber" name="planNumber" placeholder="図面番号" @blur="displayShio()" outlined ></v-text-field>
              <v-text-field maxlength="2" v-model="requestNumber" name="requestNumber" placeholder="仕様書番号" outlined readonly></v-text-field>
              <v-select v-model="houseType" tabindex="3" :name="houseType" label="家タイプ" :items="UserInterface.HouseTypes" :item-text="'HouseType'" :item-value="'HouseType'" outlined @change="enableButtons()"></v-select>
          </div>
        </v-card-text>

        <v-card-actions>
             <v-btn color="blue darken-1" tabindex="4" text @click="savePlanDetails(); isDrawerHidden(false)" :disabled="!isCompleteDetails">新規登録</v-btn>
              <v-btn color="blue darken-1" tabindex="5" text @click="getPlanInfoDataFromPrevious(); isDrawerHidden(false)" :disabled="!isCompleteDetails">呼び出し</v-btn>
            <v-btn color="blue darken-1" tabindex="6" text @click="dialog=false; $router.push('menu').catch({})">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { bus } from '../../../app'

export default {
    components:{
       MenuDialog
    },
    name: 'Main',
    data: () => ({
      empInfo: {},
      mainDrawer: false,
      dialog: true,
      constructionCode: '',
      planNumber:'',
      requestNumber:'',
      planNumbers: '', 
      requestNos: [], 
      houseType: '',
      showName: false,
      isCompleteDetails: false,
    }),
    mounted(){
      this.$store.commit('resetPlanInfo');
      this.$store.commit('SetDefaultHiddenItemsToPlanInfo');
     },
    computed: {
      ...mapState(['UserInterface', 'PlanInfo']), 
      ...mapActions(['savePlanInfo', 'isPrevious']),
    },

    methods:{
      async showDialog(){
        this.dialog = false
        this.loadingDialog = true
      },
      async displayShio(){
        try{
          this.requestNumber = await this.$PlanData.getRequestNumber(this.constructionCode, this.planNumber)
        }catch(error){
          console.log(error)
        }
      },

      isDrawerHidden(bool){
        bus.$emit('hideDrawer', bool);
      },

      async savePlanDetails(){
        try{
          await this.$PlanData.savePlan(this.constructionCode, this.planNumber, this.requestNumber, this.houseType);
          this.$router.push({ name: "GaibuList" }).catch(()=>{})
          bus.$emit('changeIt', '外部 シート-');
          await this.$store.dispatch('isPrevious', false)  
        }catch(error){
          console.log(error)
        }
      },

      enableButtons(){
        if(this.constructionCode !== '' && this.planNumber !== '' && this.houseType !== ''){
          this.isCompleteDetails = true;
        }
      },

      async getPlanInfoDataFromPrevious(){
        try{
          await this.$store.dispatch('savePlanInfo', {
                                                        ConstructionCode: this.constructionCode,
                                                        RevisionNumber  : this.planNumber,
                                                        RequestNumber   : this.requestNumber,
                                                        HouseType       : this.houseType
                                                      })
          await this.$store.dispatch('isPrevious', false)
          await this.$router.push('Existing'); 
        }catch(error){
          console.log(error)
        }
      }
    }
}
</script>
