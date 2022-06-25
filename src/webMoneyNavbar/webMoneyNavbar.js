import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import contextParser from "./extensions/contextParser";
import htmlGenerator from "./extensions/htmlGenerator";
import menu from "./extensions/menu";

require("./webMoneyNavbar.scss");

export default function WebMoneyNavbar() {
  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);
      
      menu.init(context);
    } catch (error) {
      
      console.error(error);
    }
  }
}