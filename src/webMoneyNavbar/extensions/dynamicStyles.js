export default {
  
  init: function (context) {
    
    var maxWidth = context.maxWidth;
    var primaryColor = context.primaryColor;

    var dynamicPrefix = ".n8g[data-n8g-dynamic-class='n8g-" + context.dynamicUniqueKey + "']";

    var styleContent = "";

    if (maxWidth != null) {
      styleContent += dynamicPrefix + " .n8g-ctr {max-width: " + maxWidth + "}";
    }

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mnl.n8g-is-a {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}