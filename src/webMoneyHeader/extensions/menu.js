export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var burgerToggleMenuElement = rootElement.querySelector("[data-n7g-burger-toggle-menu]");
    var burgerDropDownMenuElement = rootElement.querySelector("[data-n7g-burger-drop-down-menu]");

    var servicesToggleMenuElement = rootElement.querySelector("[data-n7g-services-toggle-menu]");
    var servicesDropDownMenuElement = rootElement.querySelector("[data-n7g-services-drop-down-menu]");

    var individiualsToggleMenuElement = rootElement.querySelector("[data-n7g-individiuals-toggle-menu]");
    var individiualsDropDownMenuElement = rootElement.querySelector("[data-n7g-individiuals-drop-down-menu]");

    var businessToggleMenuElement = rootElement.querySelector("[data-n7g-business-toggle-menu]");
    var businessDropDownMenuElement = rootElement.querySelector("[data-n7g-business-drop-down-menu]");

    var searchToggleMenuElement = rootElement.querySelector("[data-n7g-search-toggle-menu]");
    var searchDropDownMenuElement = rootElement.querySelector("[data-n7g-search-drop-down-menu]");

    var loginBlockToggleMenuElement = rootElement.querySelector("[data-n7g-login-block-toggle-menu]");

    var menuElements = [
      [burgerToggleMenuElement, burgerDropDownMenuElement],
      [servicesToggleMenuElement, servicesDropDownMenuElement],
      [individiualsToggleMenuElement, individiualsDropDownMenuElement],
      [businessToggleMenuElement, businessDropDownMenuElement],
      [searchToggleMenuElement, searchDropDownMenuElement],
      [loginBlockToggleMenuElement]
    ];

    var commonClickHandler = function (index) {

      for (var i = 0; i < menuElements.length; i++) {

        var methodName = i == index ? "toggle" : "remove";

        for (var j = 0; j < menuElements[i].length; j++) {

          menuElements[i][j].classList[methodName]("is-a");
        }
      }
    };

    burgerToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(0);

      if (burgerToggleMenuElement.classList.contains("is-a")) {

        servicesToggleMenuElement.classList.add("is-a");
        servicesDropDownMenuElement.classList.add("is-a");
      }
    });

    servicesToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(1);
    });

    individiualsToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(2);
    });

    businessToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(3);
    });

    searchToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(4);
    });

    loginBlockToggleMenuElement.addEventListener("click", function (event) {
      commonClickHandler(5);
    });

    // window.addEventListener("click", function(event) { 

    //   if (!loginBlockToggleMenuElement.contains(event.target)) {
    //     loginBlockToggleMenuElement.classList.remove("is-a");
    //   } 
    // });

    // var pagesMenuItems = rootElement.getElementsByClassName("n7g-clm");

    // for (var i = 0; i < pagesMenuItems.length; i++) {

    //   pagesMenuItems[i].addEventListener('click', function () {
    //     this.classList.toggle("is-a");
    //   });
    // }

    // var servicesMenuItems = rootElement.getElementsByClassName("n7g-mni");
    // var servicesMenuItemsDd = rootElement.getElementsByClassName("n7g-cti");

    // Array.prototype.forEach.call(servicesMenuItems, function (element, index) {

    //   element.addEventListener('click', function () {

    //     rootElement.querySelector(".n7g-mni.is-a").classList.remove("is-a");
    //     rootElement.querySelector(".n7g-cti.is-a").classList.remove("is-a");

    //     this.classList.add("is-a");
    //     servicesMenuItemsDd[index].classList.add("is-a");

    //   });

    // });
  }
}