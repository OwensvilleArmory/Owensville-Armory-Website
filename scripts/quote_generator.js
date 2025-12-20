//vars
dropzone = document.getElementById("dropzone");
displayimage = document.getElementById("imagePreview");
HTMLDate = document.getElementById("Date");
manufacturer = document.getElementsByClassName("Brand");//[0]//.value
model = document.getElementsByClassName("Model");
caliber = document.getElementsByClassName("Caliber");
upc = document.getElementsByClassName("upc");
price = document.getElementsByClassName("Price");
download = document.getElementsByClassName("Download");
days = 30;

//create event listeners
dropzone.addEventListener("drop", dropHandler);
document.addEventListener("dragover", dragOverHandler);

//Handles loading the image
function dropHandler(e) {
  e.preventDefault();

  [...e.dataTransfer.items].forEach(item => {
    fileArray = e.dataTransfer.files;
    file0 = fileArray[0];
  });

  file0.src = URL.createObjectURL(file0);

  displayImage = document.createElement("img");
  displayImage.src = file0.src;
  displayImage.style.width = "100%";
    
  dropzone.appendChild(displayImage); 
  dropzone.style.border = "none";
}

function dragOverHandler(e) {
  e.preventDefault();
}

//Gets the valid until date
currentDate = new Date();
newDate = addDays(currentDate, days);

function addDays(date, days) {
  newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  if (newDate.getDay() == 1) {  //add an extra day if final day lands on a monday
    newDate = new Date(date.getTime() + (days+1) * 24 * 60 * 60 * 1000);
  }
  HTMLDate.innerText = newDate.toDateString();
  return newDate;
}

//print on finish
function printForm() {
  randomize(8);
  document.getElementById("upc").style.display="none";
  price[0].value = "$"+price[0].value;
  print();
  getInformation();
  createForm();
};

//creates a randomized string security code
function randomize(l) {
  const charset = "abcdefghijklmnopqrstuvwxyz01234567890123456789";
  let result = "";
  for (let i = 0; i < l; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementsByClassName("Code")[0].innerText=result;
  idString = result;
}

//formats the file
function getInformation() { 
  fileInformation = [
  manufacturer[0].value,
  model[0].value,
  caliber[0].value,
  upc[0].value,
  price[0].value,
  "Valid Until: "+newDate.toDateString()
]
}

//creates the file
function createForm() {
  let newFile = new File([fileInformation], idString+".txt");
  
  reader = new FileReader();

  reader.onload = function(ev){
    download[0].innerText = "Download: "+newFile.name;
    download[0].href = URL.createObjectURL(newFile);
    download[0].download = newFile.name;
    download[0].click();
  }
reader.readAsText(newFile);
}
