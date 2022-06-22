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

    // var viewPrefix = ".n8g";
    // if (view == consts.VIEW_MOBILE) {
    //   viewPrefix = ".n30g30.n30g30-mobile";
    // }
    var dynamicPrefix = ".n8g[data-dynamic-class='n8g-" + options.dynamicUniqueKey + "']";

    var styleContent = "";

    // styleContent += dynamicPrefix + " .n8g-mcn {background-color: " + primaryColor + "}";

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";

    styleContent += dynamicPrefix + " .n8g-mnl.is-activated {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";
    
    // if (view == consts.VIEW_MOBILE) {

    //   styleContent += dynamicPrefix + " .n30g30-first-level-button {background-color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated {color: " + primaryColor + "; border-color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated:hover {color: " + primaryColor + "; border-color: " + primaryColor + "}";
    // } else {

    //   styleContent += dynamicPrefix + " .n30g30-first-level-item:hover {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-first-level-item:not(.is-first-element).is-activated {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item:not(.is-activated):hover {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated {background-color: " + primaryColor + "}";
     
    //   if (options.design == consts.DESIGN_WM_MAIN) {
    //     styleContent += dynamicPrefix + " .n30g30-first-level-item-image-wrapper {background-color: " + primaryColor + "}";
    //   }
    // }

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}
