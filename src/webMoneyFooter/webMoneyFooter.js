// TODO : Сжимать и убирать блок рекламы.

import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import "element-closest-polyfill"; // IE 11 не поддерживает closest.
import contextParser from "./extensions/contextParser";
import htmlGenerator from "./extensions/htmlGenerator";
import illiciumAsync from "./extensions/illiciumAsync";
import langSelector from "./extensions/langSelector";
import mobileBlockMenu from "./extensions/mobileBlockMenu";
import mobileBlockNewsLinks from "./extensions/mobileBlockNewsLinks";

require("./webMoneyFooter.scss");

export default function WebMoneyFooter() {

  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);

      langSelector.init(context);
      mobileBlockNewsLinks.init(context);
      mobileBlockMenu.init(context);
      illiciumAsync.init(context);
    } catch (error) {
      
      console.log(error);
    }
  }
}