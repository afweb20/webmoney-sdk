export default {
  
  init: function (context) {
    
    var maxWidth = context.maxWidth;
    
    var dynamicPrefix = ".n9g[data-n9g-dynamic-class='n9g-" + context.dynamicUniqueKey + "']";
    
    var styleContent = "";

    if (maxWidth != null) {
      styleContent += dynamicPrefix + " .n9g-ctr {max-width: " + maxWidth + "}";
    }
    
    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}