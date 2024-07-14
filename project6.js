let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let btn = document.getElementById("btn");

btn.addEventListener("click", createTable)

function createTable() {
  // let body = document.body;
  let table = document.createElement("table")
  
  for (let i = 0; i < rows.value; i++){
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < cols.value; j++) {
      
      let td = document.createElement("td");

      td.innerHTML ="الله اكبر"
      tr.appendChild(td);   
    }   
  }
  document.body.appendChild(table)

  
}

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours);
  console.log(minutes);

}

clock(); 