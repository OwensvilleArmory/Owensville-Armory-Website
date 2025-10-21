dropzone = document.getElementById("dropzone");
dropzone.addEventListener("drop", dropHandler);
document.addEventListener("dragover", dragOverHandler);
displayimage = document.getElementById("imagePreview");

HTMLDate = document.getElementById("Date");

function dropHandler(e) {
  e.preventDefault();

  [...e.dataTransfer.items].forEach(item => {
    fileArray = e.dataTransfer.files;
    file0 = fileArray[0];
  });

  file0.src = URL.createObjectURL(file0);
  //console.log(file0.src);

  displayImage = document.createElement("img");
  displayImage.src = file0.src;
  displayImage.style.width = "100%";
  //displayImage.style.width = "250%";
  //height: 70px;
  //width: 350px;
  //padding: 10px;
    
  dropzone.appendChild(displayImage); 
  dropzone.style.border = "none";
}

function dragOverHandler(e) {
  e.preventDefault();
}
getDate();
function getDate() {
  days = 30;

  currentDate = new Date();
  newDate = addDays(currentDate, days);

  function addDays(date, days) {
      newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
      if (newDate.getDay() == 1) {  //add an extra day if final day lands on a monday
        console.log("Monday");
        newDate = new Date(date.getTime() + (days+1) * 24 * 60 * 60 * 1000);
      }
      return newDate;
  }

  console.log("New Date:", newDate.toDateString());

  console.log(HTMLDate.innerText);
  HTMLDate.innerText = newDate.toDateString();
  
}

function printForm() {
print();
};
