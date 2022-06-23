import consts from "./consts";

export default {

  init: function (context) {

    this.appendDynamicStyles(context);
    this.initToggleMenu(context);
  },

  appendDynamicStyles: function (context) {
    
    var primaryColor = context.primaryColor;

    var dynamicPrefix = ".n8g[data-n8g-dynamic-class='n8g-" + context.dynamicUniqueKey + "']";

    var styleContent = "";

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mnl.is-activated {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  },

  initToggleMenu: function (context) {
    
    var rootElement = context.rootElement;

    var toggleMenu = rootElement.querySelector("[data-n8g-toggle-menu]");

    toggleMenu.addEventListener("click", function (e) {

      this.classList.toggle("is-a");
    });
  }
}
