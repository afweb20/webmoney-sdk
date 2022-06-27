import "core-js/modules/es.array.includes";
import "core-js/modules/es.string.includes";

var params = window.location.search.replace("?", "").split("&").reduce(function (p, e) { var a = e.split("="); p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p; }, {});
var lang = params["lang"] != null ? params["lang"] : "ru";
var wmid = params["wmid"] != null ? params["wmid"] : "123681594869";
var isAppleDevice = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
var view = isAppleDevice ? "mobile" : "desktop";
// view = "desktop";
view = "adaptive";
var loginUrl = "?wmid=123681594869&lang=" + lang;
var logoutUrl = "?wmid=&lang=" + lang;

if (typeof WebMoneyHeader != "undefined") {

  new WebMoneyHeader().init({
    rootElement: document.getElementById("webMoneyHeader"),
    testMode: true,
    view: view,
    lang: lang,
    wmid: null,
    loginUrl: loginUrl,
    logoutUrl: logoutUrl,
    domainType: "1",
    rid: "95D4C9E5-774B-44F3-97CD-AAC500F10D8E",
    onLoginBlockRendered: function (renderedData) {

      console.log("wmid: " + renderedData.wmid + " ; tid: " + renderedData.tid + " ; dataFillProgress: " + renderedData.dataFillProgress);
    }
  });
}

if (typeof WebMoneyNavbar != "undefined") {

  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar0"),
    view: view,
    iconUrl: "https://telepay.xoney.com/img/mobile/webmoney_oplata_w.svg",
    firstLevel: [
      { title: "Каталог услуг", url : "#", active: true },
      { title: "Мои платежи", url : "#" },
      { title: "Мои шаблоны", url : "#" }
    ]
  });

  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar1"),
    view: view,
    primaryColor: "#e59733",
    iconUrl: "https://passport.web.money/img/key_w.png",
    firstLevel: [
      { title: "Паспорт", url : "#", active: true },
      { title: "Получение аттестата", url : "#" },
      { title: "Помощь", url : "#" },
      { title: "Панель управления", url : "#" }
    ],
    secondLevel: [
      { title: "О сервисе", url : "#", active: true }, 
      { title: "Аттестаты", url : "#"}, 
      { title: "Контакты", url : "#" }
    ]
  });

  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar2"),
    view: view,
    primaryColor: "#e59733",
    iconUrl: "https://passport.web.money/img/key_w.png",
    firstLevel: [
      { title: "Паспорт", url : "#" },
      { title: "Получение аттестата", url : "#", active: true },
      { title: "Помощь", url : "#" },
      { title: "Панель управления", url : "#" }
    ],
    secondLevel: [
      { title: "О сервисе", url : "#" }, 
      { title: "Аттестаты", url : "#", active: true}, 
      { title: "Контакты", url : "#" }
    ]
  });
  
  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar3"),
    view: view,
    primaryColor: "#637eea",
    iconUrl: "https://wmf.wmtransfer.com/img/Ethereum.png?v=1",
    firstLevel: [
      { title: "WMF", url : "#", active: true },
      { title: "WMX (Bitcoin)", url : "#", iconUrl: "https://wmf.wmtransfer.com/img/wmx.png" },
      { title: "WMH (Bitcoin Cash)", url : "#", iconUrl: "https://wmf.wmtransfer.com/img/wmh.png" },
      { title: "WML (Litecoin)", url : "#", iconUrl: "https://wmf.wmtransfer.com/img/wml.png" }
    ],
    secondLevel: [
      { title: "Главная", url : "#", active: true }, 
      { title: "Описание", url : "#" }, 
      { title: "Ввод", url : "#" },
      { title: "Вывод", url : "#" },
      { title: "История", url : "#" },
    ]
  });

  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar4"),
    view: view,
    iconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
    firstLevel: [
      { title: "Описание", url : "#", active: true }, 
      { title: "Соглашения", url : "2" }, 
      { title: "Субъекты системы", url : "#" }, 
      { title: "Ввод и вывод", url : "#" },
      { title: "Поддержка", url : "#" },
      { title: "Разработчикам", url : "#" }, 
      { title: "Сотрудничество", url : "#" }
    ],
    secondLevel: [
      { title: "Кратко", url : "#", active: true }, 
      { title: "Типы кошельков", url : "#" }, 
      { title: "Способы управления", url : "#" }, 
      { title: "Тарифы системы", url : "#" }, 
      { title: "Статистика", url : "#" }, 
      { title: "Безопасность и конфиденциальность", url : "#" }
    ]
  });

  new WebMoneyNavbar().init({
    rootElement: document.getElementById("webMoneyNavbar5"),
    view: view,
    iconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
    firstLevel: [
      { title: "Описание", url : "#" }, 
      { title: "Соглашения", url : "2", active: true }, 
      { title: "Субъекты системы", url : "#" }, 
      { title: "Ввод и вывод", url : "#" },
      { title: "Поддержка", url : "#" },
      { title: "Разработчикам", url : "#" }, 
      { title: "Сотрудничество", url : "#" }
    ],
    secondLevel: [
      { title: "Кратко", url : "#" }, 
      { title: "Типы кошельков", url : "#", active: true }, 
      { title: "Способы управления", url : "#" }, 
      { title: "Тарифы системы", url : "#" }, 
      { title: "Статистика", url : "#" }, 
      { title: "Безопасность и конфиденциальность", url : "#" }
    ]
  });
}

if (typeof WebMoneyFooter != "undefined") {

  new WebMoneyFooter().init({
    rootElement: document.getElementById("webMoneyFooter"),
    testMode: true,
    view: view,
    lang: lang,
    supportedLangs: ["ru", "en", "es", "pt", "tr", "vn"],
    illiciumPlaceId: "59",
    illiciumView: "top",
    domainType: "1",
    onChangeLang: function (lang) {

      location.href = "?lang=" + lang;
    }
  });
}