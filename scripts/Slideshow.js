const SlideQuery = document.querySelector('.Image');
        
const ImgArray = [
  "https://owensvillearmory.com/Featured_Products/Atrius Development Group FRS.png",
  "https://owensvillearmory.com/Featured_Products/ATI_3B.png",
  "https://owensvillearmory.com/Featured_Products/RXM_FLAG.png",
  //"https://owensvillearmory.com/Featured_Products/MPA_Defender.png",
  //"https://owensvillearmory.com/Featured_Products/Diamondback_DBX57.png",
  //"https://owensvillearmory.com/Featured_Products/Ruger_10-22_Sporter.png",
  //"https://owensvillearmory.com/Featured_Products/MAC_5.png",
  //"https://owensvillearmory.com/Featured_Products/Rossi_R92_1776.png",
  //"https://owensvillearmory.com/Featured_Products/LongGuns.png",
  "https://owensvillearmory.com/Featured_Products/Shark_Coast_Trump_Rifle.png",
  //"https://owensvillearmory.com/Featured_Products/Howa_M1500_Stakler_CF.png",
  //"https://owensvillearmory.com/Featured_Products/Desert_Eagle_L5.png",
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
