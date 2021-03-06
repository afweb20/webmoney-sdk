// TODO : Приложения фильтровать в зависимости от устройства.
// TODO : Ссылки на соцсети брать из linkStorage.
// TODO: ссылки на приложения

import contextParser from "./extensions/contextParser";
import dynamicStyles from "./extensions/dynamicStyles";
import htmlGenerator from "./extensions/htmlGenerator";
import illiciumAsync from "./extensions/illiciumAsync";
import langSelector from "./extensions/langSelector";
import menu from "./extensions/menu";

require("./webMoneyFooter.scss");

export default function WebMoneyFooter() {

  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      dynamicStyles.init(context);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);

      langSelector.init(context);
      illiciumAsync.init(context);
      menu.init(context);
    } catch (error) {
      
      console.error(error);
    }
  }
}