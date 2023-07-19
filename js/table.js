import { asphalts, separately } from "./database.js";

const tableAsphalt = document.getElementById('table-asphalt');
const tableSeparately = document.getElementById('table-separately');

function createTable(params,table) {
    for (let asphalt of params) {
        console.log (asphalt)
        let tr = document.createElement('tr');
        table.append(tr);
    
        let td1 = document.createElement('td');
        td1.classList.add('td', 'td-title');
        td1.textContent = asphalt.title;
        tr.append(td1);
    
        let td2 = document.createElement('td');
        td2.classList.add('td', 'td-center', 'td-unit');
        td2.innerHTML = asphalt.unit;
        tr.append(td2);
    
        let td3 = document.createElement('td');
        td3.classList.add('td', 'td-center', 'td-price');
        td3.innerHTML = 'от ' + asphalt.price + '&nbsp;₽';
        tr.append(td3);
    }
}

createTable(asphalts, tableAsphalt);
createTable(separately, tableSeparately);

