//firyyyyst of grab your button and make it a variable
const draw = document.getElementById('bnt');
// const clear = document.getElementById('bnt1');
let tab = document.getElementById("my-table");


let cell = [];
//then in your function, you write your code
function process(){
    //by grabing "rows" and "cols" from your HTML file
    //and converting the variables so they return in numbers 
    //using ParseInt method
    //in doing this they will be identified as numbers at 
    //which is what we are working with.
    let row = parseInt(document.getElementById("rows").value);
    let col = parseInt(document.getElementById("cols").value);
    

    const table = document.createElement("table");
    

    for (let i=0; i<row; i++){
        const tablerow = document.createElement("tr");

        for (let j=0; j<col; j++){
            const tabledata = document.createElement("td");
            tablerow.appendChild(tabledata);
        }
        
        table.appendChild(tablerow);

    }
    tab.innerHTML = '';
    tab.appendChild(table)
    cell = document.querySelectorAll('td');
    console.log(cell)
    paint();
};

draw.addEventListener('click', process);
console.log(process)

//function clear(){
  //  if( my-table.innerHTML == table ){
    //    my-table.innerHTML == "";
    //}
    //document.getElementById('my-table').reset();
//}

//clearAll.addEventListener('click', clear);
//console.log(clear);
function clearAll(){
   tab.innerHTML = ''; 
 
}

let coor = document.getElementById("color")
let colo = coor.value

coor.addEventListener('change',(event)=>{
    colo = coor.value;
    console.log(colo);
    paint();

})

function paint(){
    
    console.log(cell)
    for(let i=0; i<cell.length; i++){
        let count = 0;
        cell[i].addEventListener('click',(event)=>{
            if(count<1){
                 cell[i].style.backgroundColor = colo;
                 console.log(colo)
            }
            count ++;
                if (count>1){
                    cell[i].style.backgroundColor = '#fff';
                    console.log (cell[i])
                    count=0;
                }
        })
    //    cell[i].addEventListener('click',(event)=>{
    //    }) 
    //    count = 0
    }
}

