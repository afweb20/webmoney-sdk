import consts from "./consts";

export default {

  init: function (context) {

    this.appendDynamicStyles(context);
    this.initToggleMenu(context);
    this.initSecondLevel(context);
  },

  appendDynamicStyles: function (context) {
    
    var primaryColor = context.primaryColor;

    var dynamicPrefix = ".n8g[data-n8g-dynamic-class='n8g-" + context.dynamicUniqueKey + "']";

    var styleContent = "";

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mnl.n8g-is-a {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  },

  initToggleMenu: function (context) {
    
    var rootElement = context.rootElement;

    var toggleMenuElement = rootElement.querySelector("[data-n8g-toggle-menu]");

    toggleMenuElement.addEventListener("click", function (e) {

      this.classList.toggle("n8g-is-a");
    });
  },

  initSecondLevel: function (context) {

    var secondLevel = context.secondLevel;

    if (secondLevel.length == 0) {
      return;
    }

    var rootElement = context.rootElement;

    var secondLevelElement = rootElement.querySelector("[data-n8g-second-level]");

    //var secondLevelItemElements = rootElement.querySelectorAll("[data-n8g-second-level-item]");
    var secondLevelItemCloneElements = rootElement.querySelectorAll("[data-n8g-second-level-item-clone]");
    
    var cachedClientWidths = [];

    for (var i = 0; i < secondLevelItemCloneElements.length; i++) {

      cachedClientWidths.push(secondLevelItemCloneElements[i].clientWidth);
    }

    function refreshArrows () {

      var clientWidth = document.documentElement.clientWidth;

      var tempWidth = 32;
      var isVisibleArrows = false;

      for (var i = 0; i < cachedClientWidths.length; i++) {

        tempWidth += cachedClientWidths[i];

        if (tempWidth > clientWidth) {
          isVisibleArrows = true;
        }
      }

      if (isVisibleArrows && !secondLevelElement.classList.contains("n8g-arrows")) {

        secondLevelElement.classList.add("n8g-arrows");
      } else if (!isVisibleArrows && secondLevelElement.classList.contains("n8g-arrows")) {

        secondLevelElement.classList.remove("n8g-arrows");
      }
    };

    window.addEventListener("resize", function () {
      refreshArrows();
    });

    refreshArrows();
  }
}
