<template>
  <v-app>
    <v-container class="pa-2" fluid>
      <v-simple-table class="tg" width="100%" style="margin-top:15px">
      <thead>
        <tr class="grey lighten-2">
          <th>No.</th>
          <th>Japanese</th>
          <th>English</th>
          <th>HouseType</th>
          <th>Default</th>
          <th>Not Applicable</th>
          <th></th>
        </tr>
      </thead>
        <tbody>
        <tr v-for="(items, itemIndex) in this.datas" :key="itemIndex"> 
          <td>{{itemIndex + 1}}</td>
          <td>{{items.JapaneseName}}</td>
          <td>{{items.EnglishName}}</td>
          <td> 
            <li v-for="item in JSON.parse(items.HouseType)">
              <template v-for="types in TypeOfHouse">
                <template v-if="types.HouseType === item"> 
                  <label class="house">{{ types.Text }}</label>
                </template>
              </template>
            </li>
          </td>
          <td>
            <br>
              <li v-for="item in JSON.parse(items.preSelectedItem)">
                  <template v-for="types in TypeOfHouse">
                    <template v-if="types.HouseType === item['HouseType']"> 
                      <label class="house">{{ types.Text }}</label>
                    </template>
                  </template>

                  <br> Default Material: 
                    <v-label visible="items.HouseType.includes(item['HouseType'])" v-if="item['Material'] != ''" class="values">{{item['Material']}}</v-label>
                    <v-label v-if="item['Material'] == ''" class="values">None</v-label>
                  <br> Default Texture/Color    : 
                    <v-label v-if="item['Material'] != ''" class="values">{{item['Item']}}</v-label>
                    <v-label v-if="item['Material'] == ''" class="values">None</v-label>
                  <v-divider></v-divider>
                <br>
              </li>

          </td>
          <td>
            <br>
              <li v-for="item in JSON.parse(items.excludedItems)">
                  <template v-for="types in TypeOfHouse">
                    <template v-if="types.HouseType === item['HouseType']"> 
                      <label class="house">{{ types.Text }}</label>
                    </template>
                  </template>
                <br>Not Applicable Texture: 
                    <ul v-for="color in item['Items']">
                      <li v-if="color != ''">
                        <v-label class="values">{{color}}</v-label>
                      </li>
                      <li v-if="color == []">
                        <v-label class="values">None</v-label>
                      </li>
                    </ul>
                <v-divider></v-divider>
                <br>
              </li>
          </td>          

          <td><v-btn  tile color="success" @click.stop="editRow(items.Id)"><v-icon left>mdi-pencil</v-icon></v-btn></td>
        </tr>
      </tbody>
      </v-simple-table>
      
    </v-container>
  </v-app>
</template>

<style>

  .house{
    font-weight: bold;
  }
  .values{
    font-style: italic;
  }

  .header{
    font-size:36em !important;
    font-style: italic;
    font-weight: bold;
  }

</style>

<script>
import { mapState } from 'vuex';
import RoofMaterial from './MaintenanceTool/RoofMaterial';
import ParapetKasagi from './MaintenanceTool/ParapetKasagi';
import { bus } from  '../../../app'

  export default {
    components:{
      RoofMaterial,
      ParapetKasagi,
    },  
    data(){
        return {
          TypeOfHouse : [
              {HouseType:"0", Text:"i-smile"},
              {HouseType:"1", Text:"i-smart"},
              {HouseType:"2", Text:"i-cube"},
              {HouseType:"3", Text:"i-pallete"},
              {HouseType:0, Text:"i-smile"},
              {HouseType:1, Text:"i-smart"},
              {HouseType:2, Text:"i-cube"},
              {HouseType:3, Text:"i-pallete"}],
          Sid : '',
          japaneseName : '',
          excludedItem : '',
          defaultItem : '',
          houseTypeApplicable : '',
          datas : [],
        }
    },
    computed: {
        ...mapState(['UserInterface', 'PlanInfo']),
    },
    async mounted(){
      try{
        const data = await axios.get('/api/maintenanceShowAll');
        this.datas = data.data.data;
      }catch(error){
        console.log(error)
      }

    },
    methods:{
      editRow(id){  //, japname, excluded, defaultItems, houseType

        //Add query parameter //2021.05.12

        this.$router.push({path: '/maintenancetoolloader', query : { RowIndex: id}});
  
      }






    },

  }

 </script>

