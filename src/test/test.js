import "core-js/modules/es.array.includes";
import "core-js/modules/es.string.includes";

var params = window.location.search.replace("?", "").split("&").reduce(function (p, e) { var a = e.split("="); p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p; }, {});
var lang = params["lang"] != null ? params["lang"] : "ru";
var wmid = params["wmid"] != null ? params["wmid"] : "123681594869";
var isAppleDevice = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
var view = isAppleDevice ? "mobile" : "desktop";
view = "adaptive";
var loginUrl = "?wmid=123681594869&lang=" + lang;
var logoutUrl = "?wmid=&lang=" + lang;

if (typeof WebMoneyHeader != "undefined") {

  var webMoneyHeader = new WebMoneyHeader();

  webMoneyHeader.init({
    rootElement: document.getElementById("webMoneyHeader"),
    testMode: true,
    view: view,
    lang: lang,
    wmid: wmid,
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

  var webMoneyNavbar = new WebMoneyNavbar();

  webMoneyNavbar.init({
    rootElement: document.getElementById("webMoneyNavbar"),
    view: view,
    primaryColor: "#e59733",
    design: "default",
    desktopIconUrl: "https://passport.web.money/img/services/logo-passport.png",
    mobileIconUrl: "https://passport.web.money/img/key_w.png",
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

  webMoneyNavbar.init({
    rootElement: document.getElementById("webMoneyNavbar2"),
    view: view,
    primaryColor: "#e59733",
    design: "default",
    desktopIconUrl: "https://passport.web.money/img/services/logo-passport.png",
    mobileIconUrl: "https://passport.web.money/img/key_w.png",
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

  webMoneyNavbar.init({
    rootElement: document.getElementById("webMoneyNavbar3"),
    view: view,
    design: "wm-main",
    desktopIconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
    mobileIconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
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

  webMoneyNavbar.init({
    rootElement: document.getElementById("webMoneyNavbar4"),
    view: view,
    design: "wm-main",
    desktopIconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
    mobileIconUrl: "https://www.webmoney.ru/img/new/services/logo-info.png",
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

  var webMoneyFooter = new WebMoneyFooter();

  webMoneyFooter.init({
    rootElement: document.getElementById("webMoneyFooter"),
    testMode: true,
    view: view,
    lang: lang,
    supportedLangs: ["ru", "en", "es", "pt", "tr", "vn"],
    illiciumPlaceId: "59",
    illiciumView: "top",
    fastMenu: "visible",
    domainType: "1",
    onChangeLang: function (lang) {

      location.href = "?lang=" + lang;
    }
  });
}