import { SITENAMEALIAS } from './init'
import Swal from 'sweetalert2'
const axios = require('axios');

/*** function defination for storing current route ***/
export const storeCurrentRoute = (route) =>{
    localStorage.setItem(SITENAMEALIAS + '_current_page',route);
}

/*** function defination for confirm message  ***/
export const showConfirm = (callback) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
            callback();
        }
      })
}

/*** function defination for calling API ***/
export const callApi = (url,obj,callback) =>{
  
  var payload = JSON.stringify(obj);
  var headers = {headers: {'Content-Type': 'application/json',}};

  axios.post(url, payload,headers)
  .then(callback())
  .catch(function (error) {
    console.log(error);
  });

}