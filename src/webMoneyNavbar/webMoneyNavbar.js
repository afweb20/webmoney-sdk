// TODO: боковые стрелочки всегда видны.
// TODO: Нельзя кликнуть по первуму пункту при маленьких размерах.

import contextParser from "./extensions/contextParser";
import dynamicStyles from "./extensions/dynamicStyles";
import htmlGenerator from "./extensions/htmlGenerator";
import menu from "./extensions/menu";

require("./webMoneyNavbar.scss");

export default function WebMoneyNavbar() {
  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      dynamicStyles.init(context);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);
      
      menu.init(context);
    } catch (error) {
      
      console.error(error);
    }
  }
}