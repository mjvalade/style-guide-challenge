// var $ = require('./jquery');

// Week 1: Nav bar mobile menu
function mobileMenu() {
    var x = document.getElementById("navList");
    if (x.className === "nav-list") {
        x.className += " responsive";
    }
    else {
        x.className = "nav-list";
    }
}
