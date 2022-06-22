import ajax from "./ajax";
import consts from "./consts";
import nextUntil from "./nextUntil";

export default {

  init: function (options) {

    var view = options.view;

    if (view != consts.VIEW_MOBILE) {
      return;
    }
    
    var rootElement = options.rootElement;
    var url = consts.MENU_URL_MOBILE[options.lang];

    // ajax("GET", url, function (response) {

    //   var menuBlock = rootElement.getElementsByClassName("n21g21-footer-menu")[0];
    //   var data = JSON.parse(response).data.replace(/sidebar-submenu/g, "n26g26-sidebar-submenu");
    //   menuBlock.innerHTML = data;

    //   var menuTitles = menuBlock.querySelectorAll("span");

    //   for (var i = 0; i < menuTitles.length; i++) {

    //     menuTitles[i].addEventListener("click", function() { 

    //       this.classList.toggle("is-opened");
    //       var siblings = nextUntil(this, "span", ".n26g26-sidebar-submenu");

    //       for (var k = 0; k < siblings.length; k++) {

    //         siblings[k].classList.toggle("is-shown");
    //       }
    //     });
    //   }
    // });

  }
}