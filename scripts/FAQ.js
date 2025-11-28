var exp = document.getElementsByClassName("expand_menu");
var i;

for (i = 0; i < exp.length; i++) {
  exp[i].addEventListener("click", function() {
    //this.classList.toggle("active");  //no change
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.borderRadius = "6px 6px 6px 6px";
      this.style.marginBottom = "20px";
    } else {
      content.style.display = "block";
      this.style.borderRadius = "6px 6px 0 0";
      this.style.marginBottom = "5px";
    }
  });
}