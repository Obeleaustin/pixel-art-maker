const tab = document.getElementById('table');
let row = document.getElementById('rows');
let col = document.getElementById('columns');
const draw = document.getElementById('btnd');
let tbody = document.getElementById('tbody');

tab.appendChild(tbody);

let drawtable= ()=> {
    tab.innerHTML = '';
    let rowValue = row.value;
    let colValue = col.value;
    console.log(colValue);
    
    for(let i=0; i < row.Value; i++){
        console.log(rowValue);
        let trow = document.createElement('tr');
        
        for (let j=0; j<colValue; j++){
           let tdata = document.createElement('td');
           trow.appendChild(tdata);
           tbody.appendChild(tr);
        };
        
    };
   }
draw.addEventListener('click', drawtable);