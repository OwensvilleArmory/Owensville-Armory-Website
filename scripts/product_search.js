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
  if (Orion == true) {window.open("https://orionfflsales.com/product-search-results?search_text="+UPC+"&from_form=true")};
  if (CWS == true) {window.open("https://cwsguns.com/search-results-page?q="+UPC)};
  if (Countrywide == true) {"https://www.countrywidesports.com/search.php?search_query="+UPC};
  if (MGE == true) {window.open("https://www.mgewholesale.com/")};
  if (Zanders == true) {  window.open("https://shop2.gzanders.com/catalogsearch/result/?q="+UPC)};
  if (Chattanooga == true) {window.open("https://chattanoogashooting.com/catalog/search/search-term_"+UPC)};
  if (Iron_Valley == true) {window.open("https://www.ironvalleysupply.com/Search?query="+UPC)};
  if (Sports_South == true) {window.open("https://www.theshootingwarehouse.com/?product_department_id=&product_category_group_id=&_product_tag_id=&product_manufacturer_ids=&search_text="+UPC+"&sort_order=relevance&in_stock_only=false&product_tag_id=&current_page_number=1");};
  if (RSR == true) {  window.open("https://www.rsrgroup.com/search?Category=all&Keywords="+UPC+"&action=Search");};
  if (Lipsey == true) { window.open("https://lipseys.com/itemfinder?sort=default&q="+UPC)};

  window.close();
};

//Toggle buttons
function toggleLipsey() {
  if (Lipsey.checked == true) {Lipsey.checked = false} else {Lipsey.checked = true};
};

function toggleRSR() {
  if (RSR.checked == true) {RSR.checked = false} else {RSR.checked = true};
};

function toggleSS() {
  let SS = Sports_South;
  if (SS.checked == true) {SS.checked = false} else {SS.checked = true};
};

function toggleValley() {
  let Valley = Iron_Valley;
  if (Valley.checked == true) {Valley.checked = false} else {Valley.checked = true};
};

function toggleChattanooga() {
  if (Chattanooga.checked == true) {Chattanooga.checked = false} else {Chattanooga.checked = true};
};

function toggleZanders() {
  if (Zanders.checked == true) {Zanders.checked = false} else {Zanders.checked = true};
};

function toggleZanders() {
  if (Zanders.checked == true) {Zanders.checked = false} else {Zanders.checked = true};
};

function toggleMGE() {
  if (MGE.checked == true) {MGE.checked = false} else {MGE.checked = true};
};

function toggleCountrywide() {
  if (Countrywide.checked == true) {Countrywide.checked = false} else {Countrywide.checked = true};
};

function toggleCWS() {
  if (CWS.checked == true) {CWS.checked = false} else {CWS.checked = true};
};

function toggleOrion() {;
  if (Orion.checked == true) {Orion.checked = false} else {Orion.checked = true};
};

function toggleFirearm() {
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
