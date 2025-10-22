//let UPC = "798681681228";

function updateInput() {
  UPC = document.getElementsByClassName("Input")[0].value;
  search();
  closeWindow();
};

function search() {
  window.open("https://cwsguns.com/search-results-page?q="+UPC);
  window.open("https://orionfflsales.com/product-search-results?search_text="+UPC+"&from_form=true");
  window.open("https://www.theshootingwarehouse.com/?product_department_id=&product_category_group_id=&_product_tag_id=&product_manufacturer_ids=&search_text="+UPC+"&sort_order=relevance&in_stock_only=false&product_tag_id=&current_page_number=1");
  window.open("https://shop2.gzanders.com/catalogsearch/result/?q="+UPC);
  window.open("https://chattanoogashooting.com/catalog/search/search-term_"+UPC);
  window.open("https://www.rsrgroup.com/search?Category=all&Keywords="+UPC+"&action=Search");
  window.open("https://lipseys.com/itemfinder?sort=default&q="+UPC);
};


function closeWindow() {
  window.close();
}
