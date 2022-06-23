export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var servicesMenu = rootElement.getElementsByClassName("n7g-svs")[0];
    var servicesMenuDd = rootElement.getElementsByClassName("n7g-svs-dd")[0];

    var individiualsMenu = rootElement.getElementsByClassName("n7g-ind")[0];
    var individiualsMenuDd = rootElement.getElementsByClassName("n7g-ind-dd")[0];

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

      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");

      this.parentNode.classList.toggle("is-a");
      searchDd.classList.toggle("is-a");

    });

    burger.addEventListener("click", function (e) {

      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");

      this.classList.toggle("is-a");
      burgerDd.classList.toggle("is-a");

      if (this.classList.contains("is-a")) {
        servicesMenu.classList.add("is-a");
        servicesMenuDd.classList.add("is-a");
      }

    });

    Array.prototype.forEach.call(pagesMenuItems, function (element, index) {

      element.addEventListener('click', function () {
        this.classList.toggle("is-a");
      });

    });

    Array.prototype.forEach.call(servicesMenuItems, function (element, index) {

      element.addEventListener('click', function () {

        rootElement.querySelector(".n7g-mni.is-a").classList.remove("is-a");
        rootElement.querySelector(".n7g-cti.is-a").classList.remove("is-a");

        this.classList.add("is-a");
        servicesMenuItemsDd[index].classList.add("is-a");

      });

    });

    servicesMenu.addEventListener("click", function (e) {

      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");

      this.classList.toggle("is-a");
      servicesMenuDd.classList.toggle("is-a");

    });

    individiualsMenu.addEventListener("click", function (e) {

      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      
      this.classList.toggle("is-a");
      individiualsMenuDd.classList.toggle("is-a");

    });

    businessMenu.addEventListener("click", function (e) {

      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      
      this.classList.toggle("is-a");
      businessMenuDd.classList.toggle("is-a");

    });
  }
}