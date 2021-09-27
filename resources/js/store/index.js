import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: 'SRS',
            storage: localStorage       
        })],
    state: {
        UserInfo: {
          UserName : '',
        },
        PlanInfo : {
            ConstructionCode: '',
            RevisionNumber  : '',
            RequestNumber   : '',
            HouseType       : '',
            SelectedItems   : [],
            HiddenItemIndex : [],
            isPrevious      : false,
            EditKey         : ''
        },        
        UserInterface :{
          GaibuListItems   : [],
          HouseTypes       : [],
          HiddenItemIndex  : [],
          SelectedInterface: '',
          UIVersion: '' 
        },
    },
    actions:{
      async showItemGroup(context, payload){
        await context.commit('showItemGroup', payload)
      },
      async hideItemGroup(context, payload){
        await context.commit('hideItemGroup', payload)
      },
      async setUIVersion(context, payload){
        await context.commit('setUIVersion', payload)
      },
      async setUserInfo(context, payload) {
        await context.commit('setUserInfo', payload)
      },
      async selectedItemsPrevious(context, payload) {
        await context.commit('selectedItemsPrevious', payload)
      },
      async uniqueId(context, payload){
        await context.commit('uniqueId', payload)
      },
      async setPlanInfo(context, payload){
        await context.commit('setPlanInfo', payload)
      },
      async savePlanInfo(context, payload){
        await context.commit('savePlanInfo', payload)
      },
      async isPrevious(context, payload){
        await context.commit('isPrevious', payload)
      },
      async hiddenItemsPrevious(context, payload){
        await context.commit('hiddenItemsPrevious', payload)
      },
      async EditKey(context, payload){
        await context.commit('EditKey', payload)
      }
    },
    mutations: {
      hideItemGroup(state, payload){
        switch(payload){
          case 'Balcony2':   
            state.PlanInfo.HiddenItemIndex.push('31')
            state.PlanInfo.HiddenItemIndex.push('32')
            state.PlanInfo.HiddenItemIndex.push('49')
            state.PlanInfo.HiddenItemIndex.push('53') 
            break; 
          case 'Balcony3':
            state.PlanInfo.HiddenItemIndex.push('35')
            state.PlanInfo.HiddenItemIndex.push('37')
            state.PlanInfo.HiddenItemIndex.push('50')
            state.PlanInfo.HiddenItemIndex.push('54') 
            break;  
          case 'Balcony3F':
            state.PlanInfo.HiddenItemIndex.push('59')
            state.PlanInfo.HiddenItemIndex.push('60')
            state.PlanInfo.HiddenItemIndex.push('61')
            state.PlanInfo.HiddenItemIndex.push('62') 
            break; 
          case 'Porch2':
            state.PlanInfo.HiddenItemIndex.push('40')
            state.PlanInfo.HiddenItemIndex.push('74')
            break; 
          case 'GenkanDoma2':
            state.PlanInfo.HiddenItemIndex.push('46')
            state.PlanInfo.HiddenItemIndex.push('77')
            break;  
          case 'Slope2':
            state.PlanInfo.HiddenItemIndex.push('51')
            state.PlanInfo.HiddenItemIndex.push('79')
            break;  
          case 'Terrace2':
            state.PlanInfo.HiddenItemIndex.push('42')
            state.PlanInfo.HiddenItemIndex.push('81')
            break;  
          case 'WoodDeck2':
            state.PlanInfo.HiddenItemIndex.push('39')
            break;  
          case 'EntranceDoor2':
            state.PlanInfo.HiddenItemIndex.push('44')
            state.PlanInfo.HiddenItemIndex.push('45')            
            break;  


        }
      },

      showItemGroup(state, payload){
        switch(payload){
          case 'Balcony2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('31') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('31'), 1) 
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('32'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('49'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('53'), 1)
            }     
            break; 
          case 'Balcony3':
            if(state.PlanInfo.HiddenItemIndex.indexOf('35') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('35'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('37'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('50'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('54'), 1)
            }
            break; 
          case 'Balcony3F':
            if(state.PlanInfo.HiddenItemIndex.indexOf('60') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('60'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('59'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('61'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('62'), 1)
            }
            break;             
          case 'Porch2':            
            if(state.PlanInfo.HiddenItemIndex.indexOf('40') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('40'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('74'), 1)
            }
            break; 
          case 'GenkanDoma2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('46') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('46'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('77'), 1)
            }
            break; 
          case 'Slope2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('51') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('51'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('79'), 1)
            }
            break; 
          case 'Terrace2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('42') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('42'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('81'), 1)
            }
            break; 
          case 'WoodDeck2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('39') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('39'), 1)
            }
            break; 
          case 'EntranceDoor2':
            if(state.PlanInfo.HiddenItemIndex.indexOf('44') > -1){
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('44'), 1)
              state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf('45'), 1)
            }
            break; 



        }
      },


      setUserInfo(state, payload){
        state.UserInfo.UserName = payload;
      },

      setUIVersion(state, payload){
        state.UserInterface.UIVersion = payload
      },

      uniqueId(state, payload){
        state.PlanInfo.uniqueId = payload;
      },

      EditKey(state, payload){
        state.PlanInfo.EditKey = payload;
      },

      isPrevious(state, payload){
        state.PlanInfo.isPrevious = payload
      },
      setPlanInfo(state, payload){
        state.PlanInfo = []
        state.PlanInfo = payload
      },

      SetHiddenItemIndex(state, payload){
        state.PlanInfo.HiddenItemIndex.push(...payload);
      },

      DefaultHiddenItemIndex(state, payload){
        state.UserInterface.HiddenItemIndex.push(...payload);
      },

      SetDefaultHiddenItemsToPlanInfo(state){  
        state.PlanInfo.HiddenItemIndex = []     
        state.PlanInfo.HiddenItemIndex.push(...state.UserInterface.HiddenItemIndex);
      },

      // addHiddenItemIndex(state, payload){
      //   state.PlanInfo.HiddenItemIndex.push(payload);
      // },

      // deleteHiddenItem(state, payload){
      //   state.PlanInfo.HiddenItemIndex.splice(state.PlanInfo.HiddenItemIndex.indexOf(payload), 1)     
      // },

      //Added line 2021.04.19
      hiddenItemsPrevious(state, payload){
        state.PlanInfo.HiddenItemIndex = [];
        state.PlanInfo.HiddenItemIndex = payload;
      },

      selectedItemsPrevious(state,payload){
        state.PlanInfo.SelectedItems = [];
        state.PlanInfo.SelectedItems = payload;
      },

      GaibuListItems (state, payload){
        state.UserInterface.GaibuListItems.push(...payload);
      },

      SelectedItems(state, payload){
        state.PlanInfo.SelectedItems = payload
      },
      
      HouseTypes(state, payload){
        state.UserInterface.HouseTypes.push(...payload);
      },

      savePlanInfo(state, payload){
        state.PlanInfo.ConstructionCode = payload.ConstructionCode,
        state.PlanInfo.RevisionNumber   = payload.RevisionNumber,
        state.PlanInfo.RequestNumber    = payload.RequestNumber,
        state.PlanInfo.HouseType        = payload.HouseType
      },

      deleteItem(state, payload){
      	state.PlanInfo.SelectedItems.splice(payload, 1)
      },

      resetPlanInfo(state){
        state.PlanInfo.ConstructionCode = '',
        state.PlanInfo.RevisionNumber   = '',
        state.PlanInfo.RequestNumber    = '',
        state.PlanInfo.HouseType        = '',
        state.PlanInfo.SelectedItems    = [],
        state.PlanInfo.uniqueId         = '',
        state.UserInfo.HiddenItemIndex  = []
      },

      resetUserInterface(state){
        state.UserInterface.GaibuListItems = [],
        state.UserInterface.HouseTypes     = [],
        state.UserInterface.HiddenItemIndex = []
      },

      selectedInterface(state, payload){
        state.UserInterface.SelectedInterface = payload;
      }
    }





});
