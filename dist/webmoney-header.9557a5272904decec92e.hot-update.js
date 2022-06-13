"use strict";
self["webpackHotUpdatewebmoney_layout"]("webmoney-header",{

/***/ "./src/webMoneyHeader/extensions/htmlGenerator.js":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/extensions/htmlGenerator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./src/webMoneyHeader/extensions/local.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ml */ "./src/webMoneyHeader/extensions/ml.js");




var tinycolor = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  generate: function generate(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-flv"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row n7g-spb"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-bgr"
    }, ""), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lft"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-llg"
    }, this.generateLogo(options)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mdl"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-dtr"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-svs"
    }), this.generateFirstLevelMenu(options), this.generateSearchBlock(options)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-rgt"
    }, this.generateLoginBlock(options))]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-bgr-dd"
    })])), this.generateServicesDropDown(options), this.generateIndividualsDropDown(options), this.generateBusinessDropDown(options)]); // return ml("div", { "class": options.view == consts.VIEW_MOBILE ? "n20g20 n20g20-mobile" : "n20g20" },
    //   ml("div", { "class": "n20g20-wrapper" }, [
    //     options.view == consts.VIEW_MOBILE ? ml("div", { "class": "n20g20-toggle-button" }) : "",
    //     this.generateLogo(options),
    //     options.view == consts.VIEW_MOBILE ? "" : this.generateMenu(options),
    //     this.generateLoginBlock(options),
    //     this.generateSearchBlock(options),
    //     options.view == consts.VIEW_MOBILE ? this.generateMenu(options) : ""
    //   ])
    // );
  },
  generateLogo: function generateLogo(options) {
    var logoUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? logoUrl = "https://www.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? logoUrl = "https://www.webmoney.ru" : logoUrl = "https://www.web.money/";
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": logoUrl,
      "class": "n7g-lgo"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-lgi",
      "src": __webpack_require__(/*! ../images/wm-logo.svg */ "./src/webMoneyHeader/images/wm-logo.svg")
    }));
  },
  generateFirstLevelMenu: function generateFirstLevelMenu(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lks"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lki n7g-ind"
    }, "Частным лицам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lki n7g-biz"
    }, "Для бизнеса")]);
  },
  generateSearchBlock: function generateSearchBlock(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-srh"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-sbtn"
    }));
  },
  generateLoginBlock: function generateLoginBlock(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lgb"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lbs"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lbi n7g-lbi--reg",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonSignUp")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lbi n7g-lbi--log",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogIn"))]));
  },
  generateServicesDropDown: function generateServicesDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-svs-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/video.svg */ "./src/webMoneyHeader/images/services/video.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Видеозвонки и онлайн-трансляции")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/memo.svg */ "./src/webMoneyHeader/images/services/memo.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Управление закладками")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/files.svg */ "./src/webMoneyHeader/images/services/files.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Файловое хранилище")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../images/services/notes.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Верстка и публикация заметок")])])));
  },
  generateIndividualsDropDown: function generateIndividualsDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-ind-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Заработать"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Платные видеоконсультации"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Продажа цифровых товаров"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "INDX: фондовая биржа"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Publicant: опубликовать книгу"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Mestcom: продажа рекламы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "CashBox: оплата за действия"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Shareholder: дивиденды и торговля долями"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "DebtMart: Биржа долгов")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Вывести"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Наличными"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "На банковскую карту"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "На банковский счет"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Электронными деньгами"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Денежным переводом")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Одолжить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Кредитный сервис"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Долговой сервис")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Пополнить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Наличными"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "С банковского счета"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Электронными деньгами"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Через терминал"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Денежным переводом")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сбор средств"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Благотворительность"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Краудфандинг"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Коллективные покупки"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Организация мероприятий")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Оплатить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Мобильная связь"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Доступ в Интернет"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Коммерческое телевидение"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Коммунальные услуги"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Государственные услуги, штрафы, налоги"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Платежи по банковским реквизитам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Digiseller: цифровые товары"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Антивирус: программы по подписке"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Rebills: автоплатежи")])])])));
  },
  generateBusinessDropDown: function generateBusinessDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-biz-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Магазинам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Merchant: создать магазин"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Прием платежей на банковский счет"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Megastock: каталог магазинов"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Digiseller: цифровые товары")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сайтам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Mestcom: продажа рекламы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Cashbox: покупка действий на сайте"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Login: авторизация по WMID")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Общие"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Masspayment: массовые выплаты"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Exchanger: обменный пункт"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Контракты: регистрация текстов Соглашений"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Арбитраж: разрешение споров"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Escrow: защищенные сделки"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Кредитная биржа"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Отчетность"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Служба финансовой поддержки")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Возможности WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Mentor: контроль исполнения задач"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Защищенная почта"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Файловое хранилище"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Отправка «бумажных» писем"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Лента новостей: рассылка")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Юридическим лицам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Выплаты участникам системы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Прием платежей")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Капитал"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Shareholder: вложение средств"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "INDX: фондовая биржа"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Продажа долгов"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Capitaller: управление средствами")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Разработчикам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "API: программные интерфейсы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Дизайн и стили"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": "#"
    }, "Техническая поддержка")])])])));
  },
  generateMenu: function generateMenu(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n20g20-ext-menu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("ul", {
      "class": "n24g24-header-menu clearfix"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuAboutWebMoney"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuPersonal"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuBusiness"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuHelp")))]));
  },
  generateBgGradient: function generateBgGradient(color) {
    var primaryColor = color;
    var primaryColorLighten = tinycolor(primaryColor).saturate(20).lighten(15).toString();
    var primaryColorDarken = tinycolor(primaryColor).darken(15).toString();
    var gradientBg = "background: linear-gradient(45deg, " + primaryColorDarken + " 0%, " + primaryColor + " 50%, " + primaryColorLighten + " 100%)";
    return gradientBg;
  },
  generateSearchBlock2: function generateSearchBlock2(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-header-user-search"
    }, [options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-toggle-search-button"
    }) : "", (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-search-block"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n20g20-close-search-button"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "alt": "search options",
      "src": __webpack_require__(/*! ../images/icon-search-toggle-down.svg */ "./src/webMoneyHeader/images/icon-search-toggle-down.svg"),
      "class": "n22g22-toggle-search"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n22g22-icon-search n20-g20-search-button"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("input", {
      "class": "n22g22-search-box-input n20g20-search-box",
      "type": "search"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("ul", {
      "class": "n22g22-search-more"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT)))])])]);
  },
  generateLoginBlock2: function generateLoginBlock2(options) {
    // todo: Локализация.
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-buttons"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-buttons-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-button n23g23-login-block-button--registration",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonSignUp")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-button n23g23-login-block-button--login",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogIn"))])), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-user-line"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n23g23-login-block-user-line-image"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-user-line-name"
    }, "")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-overlay"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-image-link",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n23g23-login-block-window-user-image"
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-info"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-name",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-user-info-name-text"
    }, "")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-info-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-purse",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-user-info-purse-text"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonMyPurse"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-logout",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogOut"))])])])), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-additional-wmids-list"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-login-button",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInAnotherWmid")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-settings",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInSettings")), options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-close"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonBack")) : ""])])]);
  },
  getnerateLoginBlockWmidItem: function getnerateLoginBlockWmidItem(options, wmid, displayName, avatarUrl, loginUrl) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-additional-wmids-item",
      "href": loginUrl
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-additional-wmids-item-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n23g23-login-block-window-additional-wmids-item-image",
      "src": avatarUrl
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-additional-wmids-item-info"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-additional-wmids-item-name"
    }, displayName), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-additional-wmids-item-wmid"
    }, wmid)])]));
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b9e61d23dfe24f206f08"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=webmoney-header.9557a5272904decec92e.hot-update.js.map