import Axios from 'axios'
import Store from '../../store'
import Router from '../../router'
import Vue from 'vue'

Axios.defaults.headers.common['SRS-Key'] = process.env.MIX_API_KEY; //add global header

export class UserInfo{

	async logOutUser(){
		try{	
	      const loggedStatus = await Axios.post(`${process.env.MIX_API_BASEURL}/api/logout`);
	  }catch{
	  	return false
	  }	
	}
	
	//for aws
	// async logInUser(email, password){
	//   try{
	// 		const data = await Axios.post(`${process.env.MIX_API_BASEURL}/api/login`, {'email': email, 'password': password})
	// 		return data;
	// 	}catch(error){
	// 		console.log(error)	
	// 	}
	// }

	//sample
	async logInUser(email, password){
		console.log(process.env.MIX_DEPLOYMENT)

	  if(process.env.MIX_DEPLOYMENT == 'ichijo'){
	      //for aws
		  try{
		    const data = await Axios.post(`${process.env.MIX_API_BASEURL}/api/login`, {'email': email, 'password': password})
			return data;
		  }catch(error){
		    console.log(error)	
		  }
	  }else{
	      try{
			  const data = await Axios.get(`http://10.11.1.106:3001/user/${email}`)

			  if(data.data.employee_code != '' && email === password){
			  	 await Axios.post(`${process.env.MIX_API_BASEURL}/api/login`, {'email': `${process.env.MIX_TMP_EMAIL}`, 'password': `${process.env.MIX_TMP_PW}`})
			  	 return data;
			  }
			}catch(error){
				console.log(error)	
			}
	  }
	}

	async isRouteNavigationValid(){
		try{
			await Axios.get(`${process.env.MIX_API_BASEURL}/api/serverCookie`)
			return true
		}catch{
			return false
		}
	}









	


	


















}
