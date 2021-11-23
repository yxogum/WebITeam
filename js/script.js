// // alert('Hello !!! its gulp project') - // для того что бы подключить любой файл в папке js к главному script.js
// // alert('Hello !!! its gulp project')

// function to change the new webp picture format do not delete=========================================

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// function to change the new webp picture format do not delete=========================================

// main slider =========================

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slideToShow: 1,
    slideToScroll: 1,
    speed: 1000,
    easing: "ease",
    infinite: false,
    initialSlide: 0,
    draggable: true,
    swipe: true,
    waitForAnimate: true,
    centerMode: false,
    // appendDots: $(".menu-inner"),
    responsive: [
      // {
      //   breakpoint: 770,
      //   settings: {
      //     dots: false,
      //   },
      // },
      {
        breakpoint: 1240,
        settings: {
          appendDots: $(".menu-inner"),
        },
      },
    ],
  });
  $(".pagefour").slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slideToShow: 1,
  });
});

// main slider =========================

// hamburger-menu =======================

let menu = document.querySelector(".menu-burger");
let inner = document.querySelector(".menu-inner");
let span = document.querySelector("span");

menu.addEventListener("click", function () {
  inner.classList.toggle("active__menu");
});

menu.addEventListener("click", function () {
  span.classList.toggle("active");
});

// hamburger-menu =========================

// phone mask =====================

// phone mask =======================

// burger-menu ================

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find(".burger-menu_button", ".burger-menu_lines");
//   let links = menu.find(".burger-menu_link");
//   let overlay = menu.find(".burger-menu_overlay");

//   button.on("click", (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on("click", () => toggleMenu());
//   overlay.on("click", () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass("burger-menu_active");

//     if (menu.hasClass("burger-menu_active")) {
//       $("body").css("overlow", "hidden");
//     } else {
//       $("body").css("overlow", "visible");
//     }
//   }
// }

// burgerMenu(".burger-menu");
