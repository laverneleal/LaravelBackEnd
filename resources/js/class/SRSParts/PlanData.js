import axios from 'axios'
import store from '../../store'
import router from '../../router'
import { bus } from '../../app.js'

export class PlanData{
  //Private Fields
  #ConstructionCode;
  #RevisionNumber;
  #RequestNumber;
  #HouseType;
  #HouseTypeNumber;
  #textureList;
  
  constructor(){
    this.#ConstructionCode = store.state.PlanInfo.ConstructionCode;
    this.#RevisionNumber   = store.state.PlanInfo.RevisionNumber;
    this.#RequestNumber    = store.state.PlanInfo.RequestNumber;
    this.#HouseType        = store.state.PlanInfo.HouseType;
    this.#textureList      = '';
    this.#HouseTypeNumber  = '';
  }

  //Private
  async #isPlanExist(constructionCode, planNumber){
    try{
      const response = await axios.get(`${process.env.MIX_API_BASEURL}/api/checkPlanIfExist/${constructionCode},${planNumber}_`);

      if(response.data.length > 0){
        return (parseInt(response.data[0].shio_no) + 1) + ''
      }else{
        return '1'
      }
    }catch{
      console.log('Error in DB')
    }
  }

  #setPlanData(){
    this.#ConstructionCode = store.state.PlanInfo.ConstructionCode;
    this.#RevisionNumber   = store.state.PlanInfo.RevisionNumber;
    this.#RequestNumber    = store.state.PlanInfo.RequestNumber;
    this.#HouseType        = store.state.PlanInfo.HouseType;
  }


  #excludeItem(itemIndex){
    const tmpObject = store.state.UserInterface.GaibuListItems[itemIndex].excludedItems;
    let tmpArray    = [];

    if(tmpObject != 0){
      tmpArray.push(...tmpObject);
    }
    return tmpArray
  }

 //Emit to components //for balcony
  clearMaterial = (rowIndex) =>{
    bus.$emit('clear', rowIndex) 
  }

  addItem = (item, rowIndex) =>{
    switch(item){
      case 'Balcony2':
        store.dispatch('showItemGroup', 'Balcony2')  
        bus.$emit('balcony', {isHidden: true, rowIndex: rowIndex});
        break; 
      case 'Balcony3':
        store.dispatch('showItemGroup', 'Balcony3')      
        bus.$emit('balcony', {isHidden: true, rowIndex: rowIndex});
        break; 
      case 'Balcony3F':
        store.dispatch('showItemGroup', 'Balcony3F')      
        bus.$emit('balcony', {isHidden: true, rowIndex: rowIndex});
        break; 
      case 'Porch2':
        store.dispatch('showItemGroup', 'Porch2') 
        bus.$emit('porch', {isHidden: true, rowIndex: rowIndex});
        break;  
      case 'GenkanDoma2':
        store.dispatch('showItemGroup', 'GenkanDoma2')      
        bus.$emit('genkandoma', {isHidden: true, rowIndex: rowIndex});
        break;  
      case 'Slope2':
        store.dispatch('showItemGroup', 'Slope2')      
        bus.$emit('slope', {isHidden: true, rowIndex: rowIndex});
        break; 
      case 'Terrace2':
        store.dispatch('showItemGroup', 'Terrace2')      
        bus.$emit('terrace', {isHidden: true, rowIndex: rowIndex});
        break;   
      case 'WoodDeck2':
        store.dispatch('showItemGroup', 'WoodDeck2')      
        bus.$emit('wooddeck', {isHidden: true, rowIndex: rowIndex});
        break;  
      case 'EntranceDoor2':
        store.dispatch('showItemGroup', 'EntranceDoor2')      
        bus.$emit('entrancedoor', {isHidden: true, rowIndex: rowIndex});
        break; 
    }
    bus.$emit('showIcon', {icon:"", color: "", rowIndex: rowIndex}) 
  }

  removeItem = (item, rowIndex) =>{
    switch(item){
      case 'Balcony2':
        store.dispatch('hideItemGroup', 'Balcony2')  
        bus.$emit('balcony', {isHidden: false, rowIndex: rowIndex});
        break; 
      case 'Balcony3':
        store.dispatch('hideItemGroup', 'Balcony3')  
        bus.$emit('balcony', {isHidden: false, rowIndex: rowIndex});
        break;
      case 'Balcony3F':
        store.dispatch('hideItemGroup', 'Balcony3F')  
        bus.$emit('balcony', {isHidden: false, rowIndex: rowIndex});
        break;
      case 'Porch2':
        store.dispatch('hideItemGroup', 'Porch2')      
        bus.$emit('porch', {isHidden: false, rowIndex: rowIndex});
        break;   
      case 'GenkanDoma2':
        store.dispatch('hideItemGroup', 'GenkanDoma2')      
        bus.$emit('genkandoma', {isHidden: false, rowIndex: rowIndex});
        break; 
      case 'Slope2':
        store.dispatch('hideItemGroup', 'Slope2')      
        bus.$emit('slope', {isHidden: false, rowIndex: rowIndex});
        break; 
      case 'Terrace2':
        store.dispatch('hideItemGroup', 'Terrace2')      
        bus.$emit('terrace', {isHidden: false, rowIndex: rowIndex});
        break; 
      case 'WoodDeck2':
        store.dispatch('hideItemGroup', 'WoodDeck2')      
        bus.$emit('wooddeck', {isHidden: false, rowIndex: rowIndex});
        break; 
      case 'EntranceDoor2':
        store.dispatch('hideItemGroup', 'EntranceDoor2')      
        bus.$emit('entrancedoor', {isHidden: false, rowIndex: rowIndex});
        break; 

    }
    bus.$emit('showIcon', {icon:"mdi-plus-circle", color: "blue lighten-2", rowIndex: rowIndex}) 
  }

  //for initializing components
  init = (vm) =>{
    try{
      switch(vm.groupIndex){
        case '4': //porch
          if( (this.itemIndexInSelected('73') == -1) && (vm.rowIndex == '18') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
          if( (this.itemIndexInSelected('74') == -1) && (vm.rowIndex == '40') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '6': //fascia
          if( (this.itemIndexInSelected('75') == -1) ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '7': //genkandoma
          if( (this.itemIndexInSelected('76') == -1) && (vm.rowIndex == '19') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
          if( (this.itemIndexInSelected('77') == -1) && (vm.rowIndex == '46') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '8': //slope
          if( (this.itemIndexInSelected('78') == -1) && (vm.rowIndex == '29') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
          if( (this.itemIndexInSelected('79') == -1) && (vm.rowIndex == '51') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '9': //terrace
          if( (this.itemIndexInSelected('80') == -1) && (vm.rowIndex == '28') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
          if( (this.itemIndexInSelected('81') == -1) && (vm.rowIndex == '42') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '9': //wooddeck
          if( (this.itemIndexInSelected('39') == -1) && (vm.rowIndex == '39') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;
        case '8': //downspout
          if( (this.itemIndexInSelected('8') == -1) && (vm.rowIndex == '8') ) {
            this.preSelectedItem(vm.rowIndex) 
          }
        break;


        default:
          this.preSelectedItem(vm.rowIndex)
      }

      const itemIndexInSelected     = this.itemIndexInSelected(vm.rowIndex)
      vm.texturesInAPI              = this.texturesInAPI(this.itemIndex(vm.rowIndex));
      vm.defaultSelectedTextureInfo = store.state.PlanInfo.SelectedItems[itemIndexInSelected]
      vm.textureColor               = vm.defaultSelectedTextureInfo.JapaneseName;

      if(vm.defaultSelectedTextureInfo.Material != null){
        vm.textureMaterial = vm.defaultSelectedTextureInfo.Material
      }else{
        vm.textureMaterial = null
      }
    }catch{
     // error here..
    }  
  }

  //save data to store as json
  saveTextureInfoASJSON = ( vm, textureInfo, material, hasTexture ) =>{
    textureInfo['RowIndex'] = vm.rowIndex;
    textureInfo['Kind']     = vm.kind;
    textureInfo['Material'] = material;

    this.addSelectedItems( textureInfo, hasTexture )
    if(((vm.textureColor == null || vm.textureColor == '-') && vm.textureMaterial == null)  ) {
      vm.textureMaterial = '';
      vm.textureColor    = '';
      this.removeItemInSelected( this.itemIndexInSelected(vm.rowIndex) );
    }else{
      vm.textureMaterial = textureInfo.Material;
      vm.textureColor    = textureInfo.JapaneseName;     
    }
  }

  //listen to events
  listenMultipleItemsIcon = (vm) =>{
    bus.$on('showIcon', (data) => {
      switch(vm.groupIndex){
        case '1':
          if(data.rowIndex == '31' || data.rowIndex == vm.rowIndex){
            vm.visibleIcon = data; 
          }
          break;
        case '2':
          if(data.rowIndex == '50' || data.rowIndex == vm.rowIndex){
            vm.visibleIcon = data;   
          }
          break;
        case '3':
          if(data.rowIndex == '50' || data.rowIndex == vm.rowIndex){
            vm.visibleIcon = data;   
          }
          break;
        case '4':
          if(data.rowIndex == '18' || data.rowIndex == '40'){
            vm.visibleIcon = data;   
          }
          break;
        case '5':
          if(data.rowIndex == '60' || data.rowIndex == '56'){
            vm.visibleIcon = data;   
          }
          break;
        case '7': //doma
          if(data.rowIndex == '46' || data.rowIndex == '19'){
            vm.visibleIcon = data;   
          }
          break;
        case '8': //slope
          if(data.rowIndex == '29' || data.rowIndex == '51'){
            vm.visibleIcon = data;   
          }
          break;
        case '9': //terrace
          if(data.rowIndex == '28' || data.rowIndex == '42'){
            vm.visibleIcon = data;   
          }
          break;
        case '10': //wooddeck
          if(data.rowIndex == '38' || data.rowIndex == '39'){
            vm.visibleIcon = data;   
          }
          break;
        case '11': //genkandoor
          if(data.rowIndex == '24' || data.rowIndex == '44'){
            vm.visibleIcon = data;   
          }
          break;


      }
    })
  }

  listenMaterialSelect = (vm) =>{
    bus.$on('clear', (data) => {
      if(data == vm.rowIndex){
        vm.textureColor    = '';
        vm.textureMaterial = '';
        if(this.itemIndexInSelected(data) != -1 ){
          this.removeItemInSelected(this.itemIndexInSelected(data));
        }
      }
    })
  }

  addSelectedItems( textureInfo, hasTexture ){ 
    try{
        let selectedItem = store.state.PlanInfo.SelectedItems;
        let columnName   = store.state.UserInterface.GaibuListItems[this.itemIndex(textureInfo.RowIndex)].ColumnName  

        if( hasTexture == true ){  
          selectedItem = [
            ...selectedItem,
            {
              'RowIndex'    : textureInfo.RowIndex+'',
              'JapaneseName': textureInfo.JapaneseName,
              'EnglishName' : textureInfo.EnglishName,
              'TextureId'   : textureInfo.TextureId,
              'Kind'        : textureInfo.Kind,
              'Material'    : textureInfo.Material,
              'ColumnName'  : columnName
            } 
          ]
        }else{
          selectedItem = [
            ...selectedItem,
            {
              'RowIndex'    : textureInfo.RowIndex+'',
              'JapaneseName': '-',
              'EnglishName' : '-',
              'TextureId'   : '-',
              'Kind'        : textureInfo.Kind,
              'Material'    : textureInfo.Material,
              'ColumnName'  : columnName
            } 
          ]
        }
        const uniqueValue = [...new Map(selectedItem.map(item => [item.RowIndex, item])).values()]   //
        selectedItem = uniqueValue 
        store.commit('SelectedItems', selectedItem); 
    }catch{
      console.log('no texture index')
    }
  }

  //Public
  textureCount(fieldToCount, Id){
    let tmpArray = [];
    tmpArray.push(...this.#textureList.filter(item => item[fieldToCount] === Id));
    return tmpArray.length
  }

  itemIndexTexture(texturesArray, textureSortNo){
    return texturesArray.map(e => e.SortNo).indexOf(textureSortNo);
  }
  
  isRowShown(index){
    let storeArray = store.state.PlanInfo.HiddenItemIndex.filter(item => item == index)

    if(storeArray.length == 0){
      return true
    }else{
      
      return false
    }
  }

  //Added Line 2021.04.19
  async getSameConstructionCodes(constructionCode){
    try{
      const response = await axios.get(`${process.env.MIX_API_BASEURL}/api/checkPlanIfExist/${constructionCode}`);

      if(response.data.length > 0){
        return response.data
      }else{
        return []
      }
    }catch{
      console.log('Error in DB')
    }
  }

  savePlan(constructionCode, planNumber, requestNumber, houseType){
    if( constructionCode !== '' && planNumber !== '' && houseType !== '' ){
      store.commit('savePlanInfo', {
        'ConstructionCode': constructionCode,
        'RevisionNumber'  : planNumber,
        'RequestNumber'   : requestNumber,
        'HouseType'       : houseType
      })  

      this.#setPlanData();
      // router.push({ name: "GaibuList" }).catch(()=>{})
      return true
    }else{
      alert('Please filled-up all informations.')
      return false
    }
  }

  itemIndex(rowIndex){ //Parameter is rowIndex
    return store.state.UserInterface.GaibuListItems.map(e => e.Id).indexOf(rowIndex);
  }

  itemIndexInSelected(rowIndex){
    return store.state.PlanInfo.SelectedItems.map(e => e.RowIndex).indexOf(rowIndex);
  }

  removeItemInSelected(rowIndex){
    store.commit('deleteItem', rowIndex)
  }

  texturesInAPI = (itemIndex) =>{ //item index is index of rows, filtered
    let excludedItems = {}
    let tmpArray = [];
    let textureToRemove = [];

    excludedItems = this.#excludeItem(itemIndex)
    tmpArray.push(...store.state.UserInterface.GaibuListItems[itemIndex].textureList);

    if(excludedItems != '0'){
      excludedItems.forEach(item =>{
        if(item.HouseType == this.HouseTypeNumber){
          textureToRemove.push(...item.Items)
        }
      })

      textureToRemove.forEach(item =>{
        let tmpItemIndex = tmpArray.map(e => e.JapaneseName).indexOf(item) 
        tmpArray.splice(tmpItemIndex, 1); 
      })
    }

    this.#textureList = tmpArray
    return this.#textureList
  }

  preSelectedItem = (itemIndex) =>{
    const tmpObject = store.state.UserInterface.GaibuListItems[this.itemIndex(itemIndex)].preSelectedItem;

    if(tmpObject != '0'){
      if(tmpObject.filter(item => item.HouseType == this.HouseTypeNumber).length > 0){

        let tmpArray       = [];
        let tmpTextureArr  = [];
        let tmpTextureInfo = {};

        tmpArray.push(...tmpObject.filter( item => item.HouseType == this.HouseTypeNumber)); 

        tmpTextureArr = store.state.UserInterface.GaibuListItems[this.itemIndex(itemIndex)].textureList.filter(item => item.JapaneseName == tmpArray[0].Item )

        if(tmpTextureArr.length > 0){
          tmpTextureInfo['RowIndex']     = tmpTextureArr[0].RowIndex+'';
          tmpTextureInfo['JapaneseName'] = tmpTextureArr[0].JapaneseName;
          tmpTextureInfo['EnglishName']  = tmpTextureArr[0].EnglishName;
          tmpTextureInfo['TextureId']    = tmpTextureArr[0].textureId;
          tmpTextureInfo['Kind']         = store.state.UserInterface.GaibuListItems[this.itemIndex(itemIndex)].JapaneseName;
          tmpTextureInfo['Material']     = tmpArray[0].Material;
        }else{
          tmpTextureInfo['RowIndex']     = store.state.UserInterface.GaibuListItems[this.itemIndex(itemIndex)].textureList[0].RowIndex+'';
          tmpTextureInfo['JapaneseName'] = '-';
          tmpTextureInfo['EnglishName']  = '-';
          tmpTextureInfo['TextureId']    = '-';
          tmpTextureInfo['Kind']         = store.state.UserInterface.GaibuListItems[this.itemIndex(itemIndex)].JapaneseName;
          tmpTextureInfo['Material']     = tmpObject[0].Material; 
        }

        //set preselected
        if(typeof store.state.PlanInfo.SelectedItems[this.itemIndexInSelected(itemIndex)] == 'undefined' ){
          this.addSelectedItems(tmpTextureInfo, true)
        }
      }
    }
  }  






















  get ConstructionCode(){
    return this.#ConstructionCode;
  }

  get RevisionNumber(){
    return this.#RevisionNumber;
  }

  async getRequestNumber(constructionCode, requestNumber){
    let tmpRequestNumber =  await this.#isPlanExist(constructionCode, requestNumber); 
    return tmpRequestNumber;
  }

  get HouseType(){
    return this.#HouseType;
  }

  get HouseTypeNumber(){
    let tmpHouseType = '';

    store.state.UserInterface.HouseTypes.forEach(item =>{
      if(item.HouseType === this.#HouseType){
        tmpHouseType = item.Id
      }
    })
    return tmpHouseType
  }

  get texturelist(){
    return this.#textureList;
  }


























  // //index of rowindex in an array //need localstorage array //Parameter is rowIndex
  // itemIndex(rowIndex){
  //   return store.state.srsGaibuListItems.map(e => e.Id).indexOf(rowIndex);
  // }

  // //get index of textures in array
  // itemIndexTexture(texturesArray, textureSortNo){
  //   return texturesArray.map(e => e.SortNo).indexOf(textureSortNo);
  // }


  // //item index = index of rows //need localstorage array //filtered
  // texturesInAPI(itemIndex){
  //   let excludedItems = {}
  //   let tmpArray = [];
  //   let textureToRemove = [];


  //   excludedItems = this.#excludeItem(itemIndex)


  //   tmpArray.push(...store.state.srsGaibuListItems[itemIndex].textureList);


  //  if(excludedItems != 0){

  //   excludedItems.forEach(item =>{
  //     if(item.HouseType == this.houseType){
  //       textureToRemove.push(...item.Items)
  //     }
  //   })

  //   textureToRemove.forEach(item =>{
  //     let tmpItemIndex = tmpArray.map(e => e.JapaneseName).indexOf(item) 

  //     tmpArray.splice(tmpItemIndex, 1); 
  //   })

  // }


  //   this.textureList = tmpArray

  //   return this.textureList;
  // }


  // //Count of texturelist
  // textureCount(roofId){
  //   let tmpArray = [];
  //   tmpArray.push(...this.textureList.filter(item => item.RoofId == roofId));
  //   return tmpArray.length
  // }


  // //
  // #excludeItem(itemIndex){
  //   const tmpObject = JSON.parse(store.state.srsGaibuListItems[itemIndex].excludedItems);
  //   let tmpArray    = [];

  //   if(tmpObject != 0){
  //     tmpArray.push(...tmpObject);
  //   }
  //   return tmpObject
  // }






 










  



  









}//end class






