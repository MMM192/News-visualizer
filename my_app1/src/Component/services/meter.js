//npm install axios

import axios from 'axios';

const rootURL = "http://localhost:7974/app/Meter"
const rootURL1 = "http://localhost:7974/app/Meter/delete"
let getMeter = () => {
    let pobj = axios.get(`${rootURL}/all`);
    return pobj;
}




let saveMeter = (product) => {
    let pobj = axios.post(`${rootURL}/save`, product);
    return pobj;
}

let deleteMeter = (id) => {
    let pobj = axios.delete(`${rootURL1}?id=${id}`);
    return pobj;
}
export { getMeter, saveMeter, deleteMeter };





