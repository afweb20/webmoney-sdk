// TODO : Сжимать и убирать блок рекламы.
// TODO : Нет иконки вьетнамского языка.
// TODO : Класс is-activated с превиксом.
// TODO : Приложения фильтровать в зависимости от устройства.
// TODO : Ссылки на соцсети брать из linkStorage (старые удалить из const).

import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import "element-closest-polyfill"; // IE 11 не поддерживает closest.
import contextParser from "./extensions/contextParser";
import htmlGenerator from "./extensions/htmlGenerator";
import illiciumAsync from "./extensions/illiciumAsync";
import langSelector from "./extensions/langSelector";

require("./webMoneyFooter.scss");

export default function WebMoneyFooter() {

  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);

      langSelector.init(context);
      illiciumAsync.init(context);
    } catch (error) {
      
      console.error(error);
    }
  }
}