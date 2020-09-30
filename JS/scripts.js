window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("top-nav");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    document.getElementById("top-nav").style.padding = "5px";
    navbar.classList.add("sticky");
    // document.getElementById("top-nav").style.fontSize = "25px";
  } else {
    document.getElementById("top-nav").style.padding = "15px";
    // document.getElementById("top-nav").style.fontSize = "35px";
  }
}


