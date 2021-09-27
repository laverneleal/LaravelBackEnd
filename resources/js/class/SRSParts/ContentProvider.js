import axios from 'axios'
import store from '../../store'

export class SRSContents{
  async getSRSGaibuListItemsFromAPI(){ 
    let tmpGaibuListArr = [];
    let tmpHiddenArr = [];
    try{
      const response = await axios.get(`${process.env.MIX_API_BASEURL}/api/clItems`); 
      tmpGaibuListArr.push(...response.data.data.filter(item => item.isAvailableInWeb == '1'));

      //loop each items and get their textures in API
      for(let item of tmpGaibuListArr) {
        const textureList = await axios.get(`${process.env.MIX_API_BASEURL}/api/${item.Path}`);
        item['textureList'] = textureList.data.data.sort((a, b) => a.KindSortNo - b.KindSortNo); 
  
        if(item.preSelectedItem != '0'){
          item['preSelectedItem'] = JSON.parse(item.preSelectedItem)
        }
        if(item.excludedItems != '0'){
          item['excludedItems'] = JSON.parse(item.excludedItems)
        }

        if(item.isShown == 'false'){
          tmpHiddenArr.push(item.Id)
        }
      } 

      tmpGaibuListArr.sort((a, b) => a.SortNo - b.SortNo);

      const uniqHidden = [ ...new Set(tmpHiddenArr)];
      const uniqGaibuListArr = [ ...new Set(tmpGaibuListArr)];

      store.commit('SetHiddenItemIndex', uniqHidden);
      store.commit('resetUserInterface')
      store.commit('GaibuListItems', uniqGaibuListArr);
      store.commit('DefaultHiddenItemIndex', uniqHidden);
      
    }catch(error){
      console.log(error);    
    }
  }

  async getSRSVersion(){
    try{
        const data = await axios.get(`${process.env.MIX_API_BASEURL}/api/getversioninfo`);
         store.dispatch('setUIVersion', data.data[0].version)
         return data.data[0].version
    }catch{
      console.log('cannot get version info')
    }
  }

  existingVersionInfo(payload){
    return 'test'
  }

  async getSRSHouseTypesFromAPI(){
    let tmpHouseTypeArr = [];
    try{
      const response = await axios.get(`${process.env.MIX_API_BASEURL}/api/houseTypes`);  
      tmpHouseTypeArr.push(...response.data.data);
      store.commit('HouseTypes', tmpHouseTypeArr);
    }catch(error){
      //alert(error);
    }  
  }
}//end class
