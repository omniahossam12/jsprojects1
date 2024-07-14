let slidShow = document.getElementById("slidShow");
let imegs = [
  "imges/img1.png",
  "imges/img2.jpg",
  "imges/img3.png",
  "imges/img4.png"
];
let i=0

// src="imges/img1.png"

function sliidShow() {

  slidShow.setAttribute("src", imegs[i]);
  i++

  setTimeout(() => {
    sliidShow()
  }, 1000);

  if (i >= imegs.length) {
    
    i=0
    
  }
  
}


// sliidShow();