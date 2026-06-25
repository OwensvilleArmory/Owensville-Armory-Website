function updateInput() {
  UPC = document.getElementsByClassName("Input")[0].value;

  Orion = document.getElementById("Orion").checked;
  CWS = document.getElementById("CWS").checked;
  Countrywide = document.getElementById("Countrywide").checked;
  MGE = document.getElementById("MGE").checked;
  Zanders = document.getElementById("Zanders").checked;
  Chattanooga = document.getElementById("Chattanooga").checked;
  Iron_Valley = document.getElementById("Iron_Valley").checked;
  Sports_South = document.getElementById("Sports_South").checked;
  RSR = document.getElementById("RSR").checked;
  Lipsey = document.getElementById("Lipsey").checked;

  Firearm = document.getElementById("Firearm").checked;
  Ammo = document.getElementById("Ammo").checked;
  Other = document.getElementById("Other").checked;
  search();
};

function search() {
  console.log(UPC);
  if (Orion == true) {console.log(Orion,"Orion");};
  if (CWS == true) {console.log(CWS,"CWS")};
  if (Countrywide == true) {console.log(Countrywide,"Countrywide")};
  if (MGE == true) {window.open("https://www.mgewholesale.com/")};
  if (Zanders == true) {console.log(Zanders,"Zanders")};
  if (Chattanooga == true) {console.log(Chattanooga,"Chattanooga")};
  if (Iron_Valley == true) {console.log(Iron_Valley,"Valley")};
  if (Sports_South == true) {console.log(Sports_South,"SS")};
  if (RSR == true) {console.log(RSR,"RSR")};
  if (Lipsey == true) {console.log(Lipsey,"Lipsey")};
  
  if (Firearm == true) {console.log(Firearm,"toggleFirearm")};    //del
  if (Ammo == true) {console.log(Ammo,"Ammo")};
  if (Other == true) {console.log(Other,"Other")};

  window.close();
};

//Toggle buttons
function toggleLipsey() {
  console.log(Lipsey.checked);  //del
  if (Lipsey.checked == true) {Lipsey.checked = false} else {Lipsey.checked = true};
};

function toggleRSR() {
  console.log(RSR.checked);
  if (RSR.checked == true) {RSR.checked = false} else {RSR.checked = true};
};

function toggleSS() {
  let SS = Sports_South;
  console.log(SS.checked);
  if (SS.checked == true) {SS.checked = false} else {SS.checked = true};
};

function toggleValley() {
  let Valley = Iron_Valley;
  console.log(Valley.checked);
  if (Valley.checked == true) {Valley.checked = false} else {Valley.checked = true};
};

function toggleChattanooga() {
  console.log(Chattanooga.checked);
  if (Chattanooga.checked == true) {Chattanooga.checked = false} else {Chattanooga.checked = true};
};

function toggleZanders() {
  console.log(Zanders.checked);
  if (Zanders.checked == true) {Zanders.checked = false} else {Zanders.checked = true};
};

function toggleZanders() {
  console.log(Zanders.checked);
  if (Zanders.checked == true) {Zanders.checked = false} else {Zanders.checked = true};
};

function toggleMGE() {
  console.log(MGE.checked);
  if (MGE.checked == true) {MGE.checked = false} else {MGE.checked = true};
};

function toggleCountrywide() {
  console.log(Countrywide.checked);
  if (Countrywide.checked == true) {Countrywide.checked = false} else {Countrywide.checked = true};
};

function toggleCWS() {
  console.log(CWS.checked);
  if (CWS.checked == true) {CWS.checked = false} else {CWS.checked = true};
};

function toggleOrion() {
  console.log(Orion.checked);
  if (Orion.checked == true) {Orion.checked = false} else {Orion.checked = true};
};

function toggleFirearm() {
  console.log(Firearm.checked);
  if (Firearm.checked == true) {Firearm.checked = false} else {Firearm.checked = true};
  Lipsey.checked=true;
  RSR.checked = true;
  Sports_South.checked = true;
  Iron_Valley.checked = true;
  Chattanooga.checked = true;
  Zanders.checked = true;
  MGE.checked = false;
  Countrywide.checked = false;
  CWS.checked = true;
  Orion.checked = true;
  Ammo.checked = false;
  Other.checked = false;
};

function toggleAmmo() {
  console.log(Ammo.checked);
  if (Ammo.checked == true) {Ammo.checked = false} else {Ammo.checked = true};
  Lipsey.checked=false;
  RSR.checked = true;
  Sports_South.checked = true;
  Iron_Valley.checked = true;
  Chattanooga.checked = true;
  Zanders.checked = true;
  MGE.checked = false;
  Countrywide.checked = true;
  CWS.checked = false;
  Orion.checked = false;
  Firearm.checked = false;
  Other.checked = false;
};

function toggleOther() {
  console.log(Other.checked);
  if (Other.checked == true) {Other.checked = false} else {Other.checked = true};
  Lipsey.checked=false;
  RSR.checked = true;
  Sports_South.checked = true;
  Iron_Valley.checked = true;
  Chattanooga.checked = true;
  Zanders.checked = true;
  MGE.checked = false;
  Countrywide.checked = false;
  CWS.checked = false;
  Orion.checked = false;
  Firearm.checked = false;
  Ammo.checked = false;
};
