import consts from "./consts";
import ajax from "./ajax";

export default {

  init: function (options) {

    var rootElement = options.rootElement;
    var url = options.view == consts.VIEW_MOBILE ? consts.MENU_URL_MOBILE[options.lang] : consts.MENU_URL[options.lang];

    var servicesMenu = rootElement.getElementsByClassName("n7g-svs")[0];
    var servicesMenuDd = rootElement.getElementsByClassName("n7g-svs-dd")[0];

    var individiualsMenu = rootElement.getElementsByClassName("n7g-ind")[0];
    var individiualsMenuDd = rootElement.getElementsByClassName("n7g-ind-dd")[0];

    var businessMenu = rootElement.getElementsByClassName("n7g-biz")[0];
    var businessMenuDd = rootElement.getElementsByClassName("n7g-biz-dd")[0];

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