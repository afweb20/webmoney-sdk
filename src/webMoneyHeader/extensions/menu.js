import consts from "./consts";
import ajax from "./ajax";

export default {

  init: function (options) {

    var rootElement = options.rootElement;
    var url = options.view == consts.VIEW_MOBILE ? consts.MENU_URL_MOBILE[options.lang] : consts.MENU_URL[options.lang];

    ajax("GET", url, function (response) {

      var data = JSON.parse(response).data
        .replace(/header-menu/g, "n24g24-header-menu")
        .replace(/sidebar-submenu/g, "n25g25-sidebar-submenu")
        .replace(/rel="toggle-menu"/g, "");

      rootElement.getElementsByClassName("n20g20-ext-menu")[0].innerHTML = data;

      var toggleButton = rootElement.getElementsByClassName("n20g20-toggle-button")[0];
      var toggleMenu = rootElement.getElementsByClassName("n20g20-ext-menu")[0];

      if (options.view == consts.VIEW_MOBILE) {

        var subMenuList = toggleMenu.querySelectorAll("span");
      } else {
        
        var subMenuList = rootElement.getElementsByClassName("n24g24-header-menu-with-submenu");
      }

      for (var i = 0; i < subMenuList.length; i++) {

        subMenuList[i].addEventListener("click", function (e) {
          e.stopPropagation();

          !this.classList.contains("n24g24-submenu-opened") ? this.classList.add("n24g24-submenu-opened") : this.classList.remove("n24g24-submenu-opened");

          for (var j = 0; j < subMenuList.length; j++) {

            if (subMenuList[j] != this) {
              subMenuList[j].classList.remove("n24g24-submenu-opened");
            }
          }
        });
      }

      document.addEventListener("click", function (e) {

        for (var i = 0; i < subMenuList.length; i++) {
          subMenuList[i].classList.remove("n24g24-submenu-opened");
        }
      });

      if (options.view == consts.VIEW_MOBILE) {

        toggleButton.addEventListener("click", function (e) {
          e.stopPropagation();
  
          !this.classList.contains("is-activated") ? this.classList.add("is-activated") : this.classList.remove("is-activated");
          !toggleMenu.classList.contains("is-activated") ? toggleMenu.classList.add("is-activated") : toggleMenu.classList.remove("is-activated");
        });
      }
    });
  }
}