// TODO: класс is-a с префиксом.
// TODO: боковые стрелочки всегда видны.
// TODO: все атрибуты начинаются с [data-n8g-...], чтобы не было пересечений.
// TODO: Для descktop добавить max-width = 960px.
// TODO: Ссылка на сервисы навесить.

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
      
      console.log(error);
    }
  }
}