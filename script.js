let inputEle = document.getElementById("input")
let btnEle = document.getElementById("btn");
let msgEle= document.getElementById("Msg");

btnEle.onclick = function () {

  // get value from input
  let inputValue = inputEle.value;
  if (inputValue != "") {
    // put inputvalue into p
    msgEle.innerHTML = inputValue;
    // empty input value
    input.value = "";
  }
  
}