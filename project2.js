let btnEle = document.getElementById("btn");
let colorEle = document.getElementById("color");

let colors = ["red", "green", "blue", "black"];

let i = 0;


btnEle.onclick = function () {
  colorEle.style.background = colors[i]
  i++;
  if (i == 4) {
    i=0
    
  }
}