// TODO: "Другие WMID" выводить, если > 1 wmid найдено.
// TODO: Для descktop добавить max-width = 960px.
// TODO: Почистить лишние стили, если есть.
// TODO: ссылку у логотипа тянуть из linkStorage
// TODO: ссылки и локализацию для сервисов из linkStorage
// TODO: шрифты по-умолчанию без засечек

import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import contextParser from "./extensions/contextParser";
import htmlGenerator from "./extensions/htmlGenerator";
import loginBlock from "./extensions/loginBlock";
import menu from "./extensions/menu";
import searchBlock from "./extensions/searchBlock";

require("./webMoneyHeader.scss");

export default function WebMoneyHeader() {

  this.init = function (options) {

    try {

      var context = contextParser.tryGetContext(options);

      var generatedElement = htmlGenerator.generate(context);
      context.rootElement.innerHTML = "";
      context.rootElement.appendChild(generatedElement);

      menu.init(context);
      searchBlock.init(context);
      loginBlock.init(context);
    } catch (error) {
      
      console.error(error);
    }
  }
}