import copyToClipboard from "common/extensions/copyToClipboard";
import consts from "./consts";

export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var activeClassName = "n7g-is-a";

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

    var wmidElement = rootElement.querySelector("[data-n7g-wmid]");
    var wmidCopyElement = rootElement.querySelector("[data-n7g-copy-wmid]");

    burgerToggleMenuElement.addEventListener("click", function (event) {

      burgerToggleMenuElement.classList.toggle(activeClassName);
      burgerDropDownMenuElement.classList.toggle(activeClassName);
    });

    servicesToggleMenuElement.addEventListener("click", function (event) {
      
      servicesToggleMenuElement.classList.toggle(activeClassName);
      servicesDropDownMenuElement.classList.toggle(activeClassName);
    });

    individiualsToggleMenuElement.addEventListener("click", function (event) {
      
      individiualsToggleMenuElement.classList.toggle(activeClassName);
      individiualsDropDownMenuElement.classList.toggle(activeClassName);
    });

    businessToggleMenuElement.addEventListener("click", function (event) {
      
      businessToggleMenuElement.classList.toggle(activeClassName);
      businessDropDownMenuElement.classList.toggle(activeClassName);
    });

    searchToggleMenuElement.addEventListener("click", function (event) {
      
      searchToggleMenuElement.classList.toggle(activeClassName);
      searchDropDownMenuElement.classList.toggle(activeClassName);
    });

    loginBlockToggleMenuElement.addEventListener("click", function (event) {

      if (!wmidCopyElement.contains(event.target)) {

        loginBlockToggleMenuElement.classList.toggle(activeClassName);
      }
    });

    wmidCopyElement.addEventListener("click", function (event) {

      var wmid = wmidElement.attributes["data-n7g-wmid"].value;

      copyToClipboard(wmid);

      wmidCopyElement.classList.add(activeClassName);

      setTimeout( function() {
        
        wmidCopyElement.classList.remove(activeClassName);
      }, 2000);

    });

    window.addEventListener("click", function(event) {

      if (!servicesToggleMenuElement.contains(event.target)
      && !servicesDropDownMenuElement.contains(event.target)) {
          
        servicesToggleMenuElement.classList.remove(activeClassName);
        servicesDropDownMenuElement.classList.remove(activeClassName);
      }

      if (!individiualsToggleMenuElement.contains(event.target)
      && !individiualsDropDownMenuElement.contains(event.target)) {

        individiualsToggleMenuElement.classList.remove(activeClassName);
        individiualsDropDownMenuElement.classList.remove(activeClassName);
      }

      if (!businessToggleMenuElement.contains(event.target)
      && !businessDropDownMenuElement.contains(event.target)) {

        businessToggleMenuElement.classList.remove(activeClassName);
        businessDropDownMenuElement.classList.remove(activeClassName);
      }

      if (!searchToggleMenuElement.contains(event.target)
      && !searchDropDownMenuElement.contains(event.target)) {

        searchToggleMenuElement.classList.remove(activeClassName);
        searchDropDownMenuElement.classList.remove(activeClassName);
      }

      if (!loginBlockToggleMenuElement.contains(event.target)) {

        loginBlockToggleMenuElement.classList.remove(activeClassName);
      }

      var isBurgerVisible = burgerToggleMenuElement.offsetWidth > 0 || burgerToggleMenuElement.offsetHeight > 0;

      if (isBurgerVisible
      && burgerToggleMenuElement.classList.contains(activeClassName)
      && !servicesToggleMenuElement.classList.contains(activeClassName)
      && !individiualsToggleMenuElement.classList.contains(activeClassName)
      && !businessToggleMenuElement.classList.contains(activeClassName)
      && !searchToggleMenuElement.classList.contains(activeClassName)) {

        servicesToggleMenuElement.classList.add(activeClassName);
        servicesDropDownMenuElement.classList.add(activeClassName);
      }

      if (!burgerToggleMenuElement.classList.contains(activeClassName)) {

        if (servicesToggleMenuElement.classList.contains(activeClassName)
        || individiualsToggleMenuElement.classList.contains(activeClassName)
        || businessToggleMenuElement.classList.contains(activeClassName)
        || searchToggleMenuElement.classList.contains(activeClassName)) {
        
          burgerToggleMenuElement.classList.add(activeClassName);
          burgerDropDownMenuElement.classList.add(activeClassName);
        }
      } else if (burgerToggleMenuElement.classList.contains(activeClassName)) {

        if (!servicesToggleMenuElement.classList.contains(activeClassName)
        && !individiualsToggleMenuElement.classList.contains(activeClassName)
        && !businessToggleMenuElement.classList.contains(activeClassName)
        && !searchToggleMenuElement.classList.contains(activeClassName)) {
        
          burgerToggleMenuElement.classList.remove(activeClassName);
          burgerDropDownMenuElement.classList.remove(activeClassName);
        }
      }
    });

    var toggleItemElements = rootElement.querySelectorAll("[data-n7g-toggle-item]");

    for (var i = 0; i < toggleItemElements.length; i++) {

      toggleItemElements[i].addEventListener("click", function () {
        this.classList.toggle(activeClassName);
      });
    }

    var servicesCategoryForElements = rootElement.querySelectorAll("[data-n7g-services-category-for]");
    var servicesCategoryNameElements = rootElement.querySelectorAll("[data-n7g-services-category-name]");

    function refreshServicesCategories(name) {

      for (var i = 0; i < servicesCategoryNameElements.length; i++) {

        if (servicesCategoryNameElements[i].attributes["data-n7g-services-category-name"].value == name) {

          servicesCategoryNameElements[i].classList.add(activeClassName);
        } else {

          servicesCategoryNameElements[i].classList.remove(activeClassName);
        }
      }

      for (var i = 0; i < servicesCategoryForElements.length; i++) {

        if (servicesCategoryForElements[i].attributes["data-n7g-services-category-for"].value == name) {

          servicesCategoryForElements[i].classList.add(activeClassName);
        } else {

          servicesCategoryForElements[i].classList.remove(activeClassName);
        }
      }
    }

    for (var i = 0; i < servicesCategoryForElements.length; i++) {

      servicesCategoryForElements[i].addEventListener("click", function () {

        var name = this.attributes["data-n7g-services-category-for"].value;

        refreshServicesCategories(name);
      });
    }

    refreshServicesCategories(consts.SERVICE_CATEGORY_PAYMENTS);
  }
}