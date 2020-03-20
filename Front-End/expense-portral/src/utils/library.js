import { SITENAMEALIAS } from './init'
export const storeCurrentRoute = (route) =>{
    localStorage.setItem(SITENAMEALIAS + '_current_page',route);
}