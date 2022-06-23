import consts from "./consts";

export default {

  init: function (options) {

    this.appendDynamicStyles(options);

    var view = options.view;
    var firstLevel = options.firstLevel;
    var rootElement = options.rootElement;

    var menuBtn = rootElement.getElementsByClassName("n8g-mbn")[0];

    menuBtn.addEventListener("click", function (e) {

      this.classList.toggle("is-a");
    });
  },

  appendDynamicStyles: function (options) {
    
    var view = options.view;
    var primaryColor = options.primaryColor;

    var dynamicPrefix = ".n8g[data-dynamic-class='n8g-" + options.dynamicUniqueKey + "']";

    var styleContent = "";

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mnl.is-activated {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}
