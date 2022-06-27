export default {
  
  init: function (context) {
    
    var maxWidth = context.maxWidth;
    
    var dynamicPrefix = ".n7g[data-n7g-dynamic-class='n7g-" + context.dynamicUniqueKey + "']";
    
    var styleContent = "";

    if (maxWidth != null) {
      styleContent += dynamicPrefix + " .n7g-ctr {max-width: " + maxWidth + "}";
    }
    
    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}