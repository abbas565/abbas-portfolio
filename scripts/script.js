// Responsive Menu - Dropdown

const body = document.body;
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  body.classList.toggle("show");
}

// Showing images in box13 of schedule page start
function mouseEnter() {
  document.getElementById("scheduleimg").src = "./images/schedule/Day03.jpg";
  let myid = this;
  console.log(myid.id);

  document.getElementById("scheduleimg").src =
    "./images/schedule/Day" + `${myid.id}` + ".jpg";
}
// Showing images in box13 of schedule page finish

// changing images in header of index start
function mouseEnterHeader() {
  var ti = 150;
  setTimeout(function() {
    document.getElementById("headerimg").src =
      "../images/portfolio-index-filter-0.jpg";
    setTimeout(function() {
      document.getElementById("headerimg").src =
        "../images/portfolio-index-filter-0.jpg";
      setTimeout(function() {
        document.getElementById("headerimg").src =
          "../images/portfolio-index-filter-0.jpg";
        setTimeout(function() {
          document.getElementById("headerimg").src =
            "../images/portfolio-index-filter-0.jpg";
        }, ti);
      }, ti);
    }, ti);
  }, ti);
  // let myid= this;
  // console.log(myid.id);
  // document.getElementById("scheduleimg").src = "./images/schedule/Day"+ `${myid.id}` +".jpg";
}
function mouseoutHeader() {
  // document.getElementById("headerimg").src = "../images/../images/portfolio-index-filter-20.jpg";
  var to = 150;
  setTimeout(function() {
    document.getElementById("headerimg").src =
      "../images/portfolio-index-filter-0.jpg";
    setTimeout(function() {
      document.getElementById("headerimg").src =
        "../images/portfolio-index-filter-0.jpg";
      setTimeout(function() {
        document.getElementById("headerimg").src =
          "../images/portfolio-index-filter-0.jpg";
        setTimeout(function() {
          document.getElementById("headerimg").src =
            "../images/portfolio-index-filter-0.jpg";
        }, to);
      }, to);
    }, to);
  }, to);
}
// changing images in header of index finish

console.log("hello");

//On Scroll Header start
window.onscroll = function() {
  myFunction();
};

var topnav = document.getElementById("navtop");
var sticky = topnav.offsetTop;
console.log(sticky);
console.log("sticky is equal to:", sticky);
console.log("window.pageYOffset:", window.pageYOffset);
console.log("hello");

function myFunction() {
  if (window.pageYOffset > sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}

//On Scroll Header finish

// Make sure sw are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_site.js")
      .then(reg => console.log("Service Worker: Registered (Pages)"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
