export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var loginBlockToggleMenuElement = rootElement.querySelector("[data-n7g-login-block-toggle-menu]");

    var servicesToggleMenuElement = rootElement.querySelector("[data-n7g-services-toggle-menu]");
    var servicesDropDownMenuElement = rootElement.querySelector("[data-n7g-services-drop-down-menu]");

    var individiualsToggleMenuElement = rootElement.querySelector("[data-n7g-individiuals-toggle-menu]");
    var individiualsDropDownMenuElement = rootElement.querySelector("[data-n7g-individiuals-drop-down-menu]");

    var businessMenu = rootElement.getElementsByClassName("n7g-biz")[0];
    var businessMenuDd = rootElement.getElementsByClassName("n7g-biz-dd")[0];

    var burger = rootElement.getElementsByClassName("n7g-bgr")[0];
    var burgerDd = rootElement.getElementsByClassName("n7g-bgr-dd")[0];

    var servicesMenuItems = rootElement.getElementsByClassName("n7g-mni");
    var servicesMenuItemsDd = rootElement.getElementsByClassName("n7g-cti");

    var searchButton = rootElement.getElementsByClassName("n7g-sbtn")[0];
    var searchDd = rootElement.getElementsByClassName("n7g-srch-dd")[0];

    var pagesMenuItems = rootElement.getElementsByClassName("n7g-clm");

    searchButton.addEventListener("click", function (e) {

      servicesToggleMenuElement.classList.remove("is-a");
      servicesDropDownMenuElement.classList.remove("is-a");

      individiualsToggleMenuElement.classList.remove("is-a");
      individiualsDropDownMenuElement.classList.remove("is-a");
      
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
     

      this.parentNode.classList.toggle("is-a");
      searchDd.classList.toggle("is-a");

    });

    burger.addEventListener("click", function (e) {

      individiualsToggleMenuElement.classList.remove("is-a");
      individiualsDropDownMenuElement.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      servicesToggleMenuElement.classList.remove("is-a");
      servicesDropDownMenuElement.classList.remove("is-a");

      this.classList.toggle("is-a");
      burgerDd.classList.toggle("is-a");

      if (this.classList.contains("is-a")) {
        servicesToggleMenuElement.classList.add("is-a");
        servicesDropDownMenuElement.classList.add("is-a");
      }

    });

    for (var i = 0; i < pagesMenuItems.length; i++) {

      pagesMenuItems[i].addEventListener('click', function () {
        this.classList.toggle("is-a");
      });
    }

    Array.prototype.forEach.call(servicesMenuItems, function (element, index) {

      element.addEventListener('click', function () {

        rootElement.querySelector(".n7g-mni.is-a").classList.remove("is-a");
        rootElement.querySelector(".n7g-cti.is-a").classList.remove("is-a");

        this.classList.add("is-a");
        servicesMenuItemsDd[index].classList.add("is-a");

      });

    });

    servicesToggleMenuElement.addEventListener("click", function (e) {

      individiualsToggleMenuElement.classList.remove("is-a");
      individiualsDropDownMenuElement.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");

      this.classList.toggle("is-a");
      servicesDropDownMenuElement.classList.toggle("is-a");

    });

    individiualsToggleMenuElement.addEventListener("click", function (e) {

      servicesToggleMenuElement.classList.remove("is-a");
      servicesDropDownMenuElement.classList.remove("is-a");
      
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      
      this.classList.toggle("is-a");
      individiualsDropDownMenuElement.classList.toggle("is-a");

    });

    businessMenu.addEventListener("click", function (e) {

      individiualsToggleMenuElement.classList.remove("is-a");
      individiualsDropDownMenuElement.classList.remove("is-a");
      
      servicesToggleMenuElement.classList.remove("is-a");
      servicesDropDownMenuElement.classList.remove("is-a");
      
      this.classList.toggle("is-a");
      businessMenuDd.classList.toggle("is-a");

    });

    loginBlockToggleMenuElement.addEventListener("click", function (event) {
      this.classList.toggle("is-opened");
    });

    window.addEventListener("click", function(event) { 

      if (!loginBlockToggleMenuElement.contains(event.target)) {
        loginBlockToggleMenuElement.classList.remove("is-opened");
      } 
    });
  },

  refresh: function (context) {

  }
}