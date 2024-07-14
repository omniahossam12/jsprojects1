let myInput = document.getElementById("myInput");
let btn = document.getElementById("btn");

// btn.onclick = function () {
//   if (btn.getAttribute("data-text") == "show") {
//     myInput.setAttribute("type", "text");
//     btn.setAttribute("data-text", "hide");
//     btn.innerHTML="hide"

//   } else {

//      myInput.setAttribute("type", "password");
//      btn.setAttribute("data-text", "show");
//      btn.innerHTML = "show";
    
//   }
  
// }
btn.addEventListener("click", toggelPassword);

function toggelPassword() {
  if (btn.getAttribute("data-text") == "show") {
    myInput.setAttribute("type", "text");
    this.setAttribute("data-text", "hide");
    this.innerHTML = "hide";
    
  } else {
    myInput.setAttribute("type", "password");
    this.setAttribute("data-text", "show");
    this.innerHTML = "show";
  }
  
}

