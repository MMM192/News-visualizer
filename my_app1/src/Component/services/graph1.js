//npm install axios

import axios from 'axios';

const rootURL = "http://localhost:8586/app/graph"
const rootURL1 = "http://localhost:8586/app/graph/qury"

let get1 = () => {
    let pobj = axios.get(`${rootURL}/all`);
    return pobj;
}


let end_year = (year) => {

    let pobj = axios.post(`${rootURL1}?year`)


    return pobj;

    /*  let pobj = axios.post(`${rootURL1}?userid=${userid}`) */


    /*let pobj = axios.post('http://localhost:1111/app/loginss/qury', {
        useri: userid,

        passwor: password
    })*/

}



export { get1, end_year };





