<template>
  <v-app>
    <v-container class="grey lighten-4 pa-2" fluid>
      <v-simple-table class="tg" width="100%">
      <thead>
        <tr>
          <th>Id</th>
          <th>Japanese</th>
          <th>English</th>
          <th>SortNo</th>
          <th>HouseType</th>
          <th>DeletedDate</th>
          <th>ICAD</th>
          <th>Web</th>
          <th>isShown</th>
          <th>preSelectedItem</th>
          <th>Path</th>
          <th>excludedItems</th>
          <th>Group</th>
          <th></th>
        </tr>
      </thead>

      <!-- <tbody v-for="item in UserInterface.GaibuListItems" :key="item.list"> -->
        <tbody>
        <tr v-for="items in UserInterface.GaibuListItems" :key="items.list">           
          <td>{{items.Id}}</td>
          <td>{{items.JapaneseName}}</td>
          <td>{{items.EnglishName}}</td>
          <td>{{items.SortNo}}</td>
          <td>{{items.HouseType}}</td>
          <td>{{items.DeletedDate}}</td>
          <td>{{items.isAvailableInICAD}}</td>
          <td>{{items.isAvailableInWeb}}</td>
          <td>{{items.isShown}}</td>
          <td>{{items.preSelectedItem}}</td>
          <!--<td v-for="value in items.preSelectedItem" :key="value.list"><li>{{value['HouseType']}}</li></td>-->
          <td>{{items.Path}}</td>
          <td>{{items.excludedItems}}</td>
          <td>{{items.Group}}</td>
          <td><v-btn tile color="success" @click="editRow(items.Id)"><v-icon left>mdi-pencil</v-icon></v-btn></td>
        </tr>
      </tbody>
      </v-simple-table>
    </v-container>





    <!--MODAL-->
    <div class="text-center">
      <v-dialog v-model="dialog" width="600">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            {{japName}} <!-- houseType: {{houseTypes}} i-smile: {{ ismileTexture }}  ismart:{{ismartTexture}} icube: {{icubeTexture}} -->
          </v-card-title>
          <v-card-text>
            <v-simple-table class="tg" width="100%">
            <thead>
              <tr>
                <th>Parts</th>
                <th>NotApplicable</th>
                <th>DefaultSelected</th>
              </tr>
            </thead>
     
              <!--=============i-Smile=================-->
              <template v-for="(texture, textureIndex) in texturesInAPI" >
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)">    
                  <td :rowspan="texturesInAPI.length">
                    <v-checkbox 
                      class="shrink mr-0 mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Smile" 
                      value="0"
                      @click="visibleSmile = !visibleSmile"
                      />     
                  </td> 
                  <td v-if="!visibleSmile"/> 
                  <td v-if="!visibleSmile"/>          
                  <td v-if="visibleSmile">
                    <v-checkbox 
                      class="shrink mt-0" 
                      color="orange" 
                      v-model="ismileTexture"  
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"
                      />
                  </td>
                  <td v-if="visibleSmile">
                    <v-radio-group 
                      v-model="ismileTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                    <v-radio                  
                        color="orange" 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="ismileTexture.includes(texture.JapaneseName)"
                      ></v-radio></v-radio-group>
                  </td>
                </tr>
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)">   
                  <td v-if="visibleSmile">
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="ismileTexture" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"
                      />
                  </td v-if="visibleSmile">
                  
                  <td v-if="visibleSmile">
                    <v-radio-group 
                      v-model="ismileTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                    <v-radio  
                        color="orange" 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="ismileTexture.includes(texture.JapaneseName)"
                      ></v-radio></v-radio-group>
                  </td>
                </tr>   
              </template>


              <!--=============i-Smart=================-->
              <template v-for="(texture, textureIndex) in texturesInAPI">
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)">    
                  <td :rowspan="texturesInAPI.length">
                    <v-checkbox 
                      class="shrink mr-0 mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Smart" 
                      value="1"
                      @click="visibleSmart = !visibleSmart"
                      />     
                  </td> 
                  <td v-if="!visibleSmart"/> 
                  <td v-if="!visibleSmart"/>          
                  <td v-if="visibleSmart">
                    <v-checkbox  
                      class="shrink mt-0" 
                      color="orange" 
                      v-model="ismartTexture"  
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"
                      />
                  </td>
                  <td v-if="visibleSmart">
                    <v-radio-group 
                      v-model="ismartTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                    <v-radio  
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="ismartTexture.includes(texture.JapaneseName)"
                      ></v-radio></v-radio-group>
                  </td>
                </tr>
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)">   
                  <td v-if="visibleSmart">
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="ismartTexture" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"
                      />
                  </td v-if="visibleSmart">
                  <td v-if="visibleSmart">
                    <v-radio-group 
                      v-model="ismartTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                    <v-radio  
                        color="orange" 
                        hide-details 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="ismartTexture.includes(texture.JapaneseName)"
                        ></v-radio></v-radio-group>
                  </td>
                </tr>   
              </template>


              <!--=============i-Cube=================-->
              <template v-for="(texture, textureIndex) in texturesInAPI"> 
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) == 0)">    
                  <td :rowspan="texturesInAPI.length">
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="houseTypes" 
                      color="orange" 
                      hide-details 
                      label="i-Cube" 
                      value="2" 
                      @click="visibleCube = !visibleCube"/>    
                  </td>        
                  <td v-if="!visibleCube"/> 
                  <td v-if="!visibleCube"/>   
                  <td v-if="visibleCube">
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="icubeTexture" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/>
                  </td>
                  <td v-if="visibleCube">
                  <v-radio-group 
                      v-model="icubeTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                    <v-radio 
                        color="orange" 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="icubeTexture.includes(texture.JapaneseName)"
                      ></v-radio>
                      </v-radio-group>
                  </td>
                </tr>
                <tr v-if="($PlanData.itemIndexTexture(texturesInAPI, texture.SortNo) > 0)"> 
                  <td v-if="visibleCube">
                    <v-checkbox 
                      class="shrink mt-0" 
                      v-model="icubeTexture" 
                      color="orange" 
                      hide-details 
                      :label="texture.JapaneseName" 
                      :value="texture.JapaneseName"/>
                  </td>
                  <td v-if="visibleCube">
                    <v-radio-group 
                      v-model="icubeTextureDefault"
                      hide-details
                      class="shrink mt-0" > 
                      <v-radio 
                        color="orange" 
                        :label="texture.JapaneseName"
                        :value="texture.JapaneseName"
                        :disabled="icubeTexture.includes(texture.JapaneseName)"
                      ></v-radio>
                      </v-radio-group>
                  </td>
                </tr>   
              </template>
            </v-simple-table>
            
           <!-- Pattern                   : {{japName}}       <br/>
            Applicable House Type     : {{houseTypes}}    <br/>
            NotApplicable for i-Smile : {{ismileTexture}} :: {{ismileTextureDefault}}<br/>
            NotApplicable for i-Smart : {{ismartTexture}} <br/>
            NotApplicable for i-Cube  : {{icubeTexture}}  <br/>-->

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog=false">
              OKs
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>


  </v-app>
</template>



<script>
import { mapState } from 'vuex';

  export default {
    data(){
      return {
        houseType: [
          { name: "i-Smile", value: "0" },
          { name: "i-Smart", value: "1" },
          { name: "i-Cube", value: "2" }
        ],
        id: '',
        japName: '',
        hType : '',
        dialog: false,
        visibleSmile: false,
        visibleSmart: false,
        visibleCube: false,
        texturesInAPI: [],
        houseTypes:[],
        ismileTexture:[],
        ismartTexture:[],
        icubeTexture:[],
        ismileTextureDefault: [],
        ismartTextureDefault: [],
        icubeTextureDefault: [],
        isDisabled: false,
      }
    },
    mounted(){

    },
    computed:{
      ...mapState(['UserInterface','PlanInfo']),

    },


    methods:{
      editRow(id){  
        let rowIndex = this.$PlanData.itemIndex(id); 

        this.japName = this.UserInterface.GaibuListItems[rowIndex].JapaneseName  
        this.hType   = this.UserInterface.GaibuListItems[rowIndex].HouseType  
        this.Id   = this.UserInterface.GaibuListItems[rowIndex]

        this.texturesInAPI = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex(id))
        this.dialog = true;
         
      },

    },
    

  }
</script>