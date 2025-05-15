export const loggedIn = localStorage.getItem('loggedIn');


export function localStorageItem(keys:string, value: boolean){
    return localStorage.setItem(keys, JSON.stringify(value));
}