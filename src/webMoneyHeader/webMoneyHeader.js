// TODO: Для descktop добавить max-width = 960px.
// TODO: Почистить лишние стили, если есть.
// TODO: ссылки и локализацию для сервисов из linkStorage

// TODO: "Деловая сеть", "Найти" локализация
// TODO: placeholder для поля ввода "Введите текст..." серый
// TODO: кнопку поиска, аватарка без выделения текста при нажатии
// TODO: заменить иконку сервиса на текст мобильная версия
// TODO: отступ бургера с навбаром отличается по левой стороне
// TODO: колонки в сервисах одинаковой ширины

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