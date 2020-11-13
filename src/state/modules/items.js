import axios from 'axios'

// // Import getInstance from the auth wrapper
import { Auth0Plugin, getInstance } from '../../auth';

export const state = {
items: []
}

export const getters = {
    allItems: state => state.items
}

export const actions = {


async addItem ({commit}, item){

    // Calling Auth0      
    const instance = getInstance();
    const accessToken = await instance.getTokenSilently();
          
    console.log(item.form_data)
          // Use Axios to make a call to the API
      const response = await axios({
      method: 'post',
      url:"/api/item",
      headers: {
                Authorization: `Bearer ${accessToken}`,
               // 'Content-Type': 'multipart/form-data'
              },
      data: item, 
   

       // Check this, whether or not to use res.data
     
    });
    

console.log('cghreck' + response.data.item)
commit('newItem', response.data.item)
 },


 // posting form data to the server (no commit here)
 async postItem ({commit}, form_data){

    // Calling Auth0      
    const instance = getInstance();
    const accessToken = await instance.getTokenSilently();
          
    console.log(form_data)
          // Use Axios to make a call to the API
      const response = await axios({
      method: 'post',
      url:"/api/item",
      headers: {
                Authorization: `Bearer ${accessToken}`,
               //'Content-Type': 'multipart/form-data'
              },
      data: form_data, 
   

       // Check this, whether or not to use res.data
     
    }).catch(err => {
        // what now?
        console.log('this' + err);
    })
 }
}

   
export const mutations = {
    newItem: (state, item) => state.items.unshift(item),  
}




// check this out for future use

// // Import getInstance from the auth wrapper
// import { Auth0Plugin, getInstance } from './auth';

// // ...

// const instance = getInstance();

// instance.$watch("loading", async loading => {
//   if (!loading && instance.isAuthenticated) {
//     const token = await instance.getTokenSilently();
//     console.log(token);
//   }
// });
