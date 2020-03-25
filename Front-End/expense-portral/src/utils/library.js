import { SITENAMEALIAS } from './init'
import Swal from 'sweetalert2'

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

