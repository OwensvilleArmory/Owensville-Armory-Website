const SlideQuery = document.querySelector('.Image');
        
const ImgArray = [
  "https://owensvillearmory.com/Featured_Products/",
  "https://owensvillearmory.com/Featured_Products/",
  "https://owensvillearmory.com/Featured_Products/",
  "https://owensvillearmory.com/Featured_Products/",
  "https://owensvillearmory.com/Featured_Products/Desert_Eagle_L5.png",
]

let iMax = ImgArray.length-1;//To prevent iMax from indexing to 1 instead of 0
let DiMax = ImgArray.length;//Default iMax, used for LeftIndex
const DelayTime = 8000;//3000
let i = 0;

//Sets the initial index to 0 to prevent default image from appearing 
let currentSlide = document.getElementsByClassName("Image");
SlideQuery.src=ImgArray[i];
setAutoIndex();

function setAutoIndex() {
    autoIndex = window.setTimeout(function autoIndexSlides() {
      if (i == iMax) {i = 0} else {i = i+1;}
      let currentSlide = document.getElementsByClassName("Image");
      SlideQuery.src=ImgArray[i];
    },DelayTime);
    reautoIndex = window.setTimeout(setAutoIndex,DelayTime);
}

function cancelAutoindex() {
    clearTimeout(autoIndex);
    clearTimeout(reautoIndex);
    setAutoIndex();
}

 function LeftIndex() {
    if (i == 0) {i = DiMax}
    i = i-1;
    clearTimeout(autoIndex);
    let currentSlide = document.getElementsByClassName("Image");
    SlideQuery.src=ImgArray[i];
 }
          
 function RightIndex() {
  if (i == iMax) {i = 0} else {i = i+1;}
  cancelAutoindex();
  let currentSlide = document.getElementsByClassName("Image");
  SlideQuery.src=ImgArray[i];
  }
