let btn = document.getElementById("btn")

btn.addEventListener("click", randergb)

function randergb() {
  document.body.style.background = "#" + Math.random().toString(16).slice(2, 8);

  
}
