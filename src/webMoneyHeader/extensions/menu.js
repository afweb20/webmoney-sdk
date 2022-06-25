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

    var toggleItemElements = rootElement.querySelectorAll("[data-n7g-toggle-item]");

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
      
      loginBlockToggleMenuElement.classList.toggle(activeClassName);
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

    for (var i = 0; i < toggleItemElements.length; i++) {

      toggleItemElements[i].addEventListener("click", function () {
        this.classList.toggle(activeClassName);
      });
    }
  }
}