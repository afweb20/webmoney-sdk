"use strict";
self["webpackHotUpdatewebmoney_layout"]("webmoney-footer",{

/***/ "./src/webMoneyFooter/extensions/htmlGenerator.js":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/extensions/htmlGenerator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ "./src/webMoneyFooter/extensions/device.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./src/webMoneyFooter/extensions/local.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ml */ "./src/webMoneyFooter/extensions/ml.js");
/* harmony import */ var _linkStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../linkStorage */ "./linkStorage.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  generate: function generate(options) {
    var view = options.view;
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g"
    }, [this.generateIlliciumBlock(options), this.generateTopPartFooter(options), this.generateMiddlePartFooter(options), this.generateBottomPartFooter(options)]);
  },
  generateIlliciumBlock: function generateIlliciumBlock(options) {
    if (options.illiciumPlaceId != null && options.illiciumView == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].ILLICIUM_VIEW_TOP) {
      return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
        "class": "n9g-bnr"
      }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
        "class": "n9g-ctr"
      }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
        "id": "place" + options.illiciumPlaceId,
        "data-role": "illicium",
        "data-placeid": options.illiciumPlaceId,
        "class": "illiciumItem n9g-ibr"
      })));
    }
  },
  generateTopPartFooter: function generateTopPartFooter(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-ln"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-lnf"
    }, [this.generateTopPartLinks(options), this.generateTopPartSocials(options)])));
  },
  generateTopPartLinks: function generateTopPartLinks(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-ll"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lll",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterBusinessNetwork")), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lll",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterDevelopers")), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lll",
      "href": "#"
    }, "Wiki"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lll",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterNews"))]);
  },
  generateTopPartSocials: function generateTopPartSocials(options) {
    var view = options.view;

    var vkIconUrl = __webpack_require__(/*! ../images/socials/vk.svg */ "./src/webMoneyFooter/images/socials/vk.svg");

    var facebookIconUrl = __webpack_require__(/*! ../images/socials/fb.svg */ "./src/webMoneyFooter/images/socials/fb.svg");

    var twitterIconUrl = __webpack_require__(/*! ../images/socials/tw.svg */ "./src/webMoneyFooter/images/socials/tw.svg");

    var odnoklassnikiIconUrl = __webpack_require__(/*! ../images/socials/od.svg */ "./src/webMoneyFooter/images/socials/od.svg");

    var youtubeIconUrl = __webpack_require__(/*! ../images/socials/yt.svg */ "./src/webMoneyFooter/images/socials/yt.svg");

    var instagramIconUrl = __webpack_require__(/*! ../images/socials/im.svg */ "./src/webMoneyFooter/images/socials/im.svg");

    var telegramIconUrl = __webpack_require__(/*! ../images/socials/tg.svg */ "./src/webMoneyFooter/images/socials/tg.svg");

    var showFacebookIcon = false;

    if (options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_MONEY || options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_EN) {
      showFacebookIcon = true;
    }

    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-lr"
    }, [options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--vk",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VKONTAKTE_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "class": "n9g-lri",
      "src": vkIconUrl
    })) : "", showFacebookIcon ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--fb",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].FACEBOOK_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "src": facebookIconUrl
    })) : "", (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--tw",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].TWITTER_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "class": "n9g-lri",
      "src": twitterIconUrl
    })), options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--od",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].ODNOKLASSNIKI_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "class": "n9g-lri",
      "src": odnoklassnikiIconUrl
    })) : "", options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--yt",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].YOUTUBE_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "class": "n9g-lri",
      "src": youtubeIconUrl
    })) : "", options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_MONEY ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--im",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].INSTAGRAM_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "src": instagramIconUrl
    })) : "", options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-lrl n9g-lrl--tg",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].TELEGRAM_URL[options.lang]
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      "class": "n9g-lri",
      "src": telegramIconUrl
    })) : ""]);
  },
  generateMiddlePartFooter: function generateMiddlePartFooter(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-mdl"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-ctr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-rw"
    }, [this.generateMiddlePartAboutSystem(options), this.generateMiddlePartPurseManagement(options), this.generateMiddlePartWmTerritory(options), this.generateMiddlePartContacts(options)]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-rw"
    }, [this.generateMiddlePartLegalInformation(options), this.generateMiddlePartHelp(options), this.generateMiddlePartApps(options)])]));
  },
  generateMiddlePartAboutSystem: function generateMiddlePartAboutSystem(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "О системе"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "briefDescription").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "briefDescription").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "purseTypes").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "purseTypes").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "purseManagement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "purseManagement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "systemFees").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "systemFees").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "statistics").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "statistics").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "securityAndPrivacy").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "securityAndPrivacy").title)]);
  },
  generateMiddlePartPurseManagement: function generateMiddlePartPurseManagement(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "purseManagement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperStandardMini").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperStandardMini").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperWinProClassic").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperWinProClassic").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperWebProLight").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperWebProLight").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperMobile").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperMobile").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperForSocialNetworks").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "keeperForSocialNetworks").title)]);
  },
  generateMiddlePartLegalInformation: function generateMiddlePartLegalInformation(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "legalInformation").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "webMoneyTransferCode").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "webMoneyTransferCode").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "propertyRightsTransferAgreement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "propertyRightsTransferAgreement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "amlAgreement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "amlAgreement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "creditServiceAgreement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "creditServiceAgreement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPursesAgreement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPursesAgreement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "warning").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "warning").title)]);
  },
  generateMiddlePartHelp: function generateMiddlePartHelp(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Помощь"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Регистрация"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Получение аттестата"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Создание PhotoID"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Обучающие видео"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Задать вопрос"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Финансовая поддержка"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Техническая поддержка"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Сотрудничество"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Форум")]);
  },
  generateMiddlePartContacts: function generateMiddlePartContacts(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Контактная информация"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "ownerAndAdministrator").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "ownerAndAdministrator").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPurseGuarantors").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPurseGuarantors").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "contactsForLegalRequests").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "contactsForLegalRequests").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "registrars").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "registrars").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPursesAgreement").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "wmPursesAgreement").title), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "warning").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(options, "warning").title)]);
  },
  generateMiddlePartWmTerritory: function generateMiddlePartWmTerritory(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Территория WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Деловая сеть"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Новости системы"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Интерактивная карта"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Wiki")]);
  },
  generateMiddlePartApps: function generateMiddlePartApps(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln n9g-cln--x2"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-mtl"
    }, "Приложения для смартфонов"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-aps"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      class: "n9g-ait",
      href: "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-aim"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-aig",
      src: __webpack_require__(/*! ../images/apps/app-store.svg */ "./src/webMoneyFooter/images/apps/app-store.svg")
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-atx"
    }, "App Store")]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      class: "n9g-ait",
      href: "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-aim"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-aig",
      src: __webpack_require__(/*! ../images/apps/google-play.svg */ "./src/webMoneyFooter/images/apps/google-play.svg")
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-atx"
    }, "Google Play")]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      class: "n9g-ait",
      href: "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-aim"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-aig",
      src: __webpack_require__(/*! ../images/apps/windows-store.svg */ "./src/webMoneyFooter/images/apps/windows-store.svg")
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-atx"
    }, "Microsoft Store")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-mtl"
    }, "Приложения для ПК"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-aps"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      class: "n9g-ait",
      href: "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-aim"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-aig",
      src: __webpack_require__(/*! ../images/apps/windows.svg */ "./src/webMoneyFooter/images/apps/windows.svg")
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-atx"
    }, "Windows")]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      class: "n9g-ait",
      href: "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-aim"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-aig",
      src: __webpack_require__(/*! ../images/apps/os-x.svg */ "./src/webMoneyFooter/images/apps/os-x.svg")
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      class: "n9g-atx"
    }, "Mac OS")])])]);
  },
  generateBottomPartFooter: function generateBottomPartFooter(options) {
    var supportedLangs = options.supportedLangs;
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-btm"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-brw"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-btp"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("img", {
      class: "n9g-blg",
      src: __webpack_require__(/*! ../images/logo.svg */ "./src/webMoneyFooter/images/logo.svg")
    }), supportedLangs.length > 1 ? this.generateLangSelector(options) : ""]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-bbp"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-cprt"
    }, "Copyright WebMoney © 1998 - " + new Date().getFullYear() + "."), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-ctx"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterCopyrightText"))])])));
  },
  generateLangSelector: function generateLangSelector(options) {
    var supportedLangs = options.supportedLangs;
    var htmlSelectLangs = [];

    for (var i = 0; i < supportedLangs.length; i++) {
      if (supportedLangs[i] == options.lang) {
        continue;
      }

      htmlSelectLangs.push((0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
        "class": "n9g-lgi n9g-f" + supportedLangs[i],
        "href": "#",
        "data-lang": supportedLangs[i]
      }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "langTitle_" + supportedLangs[i])));
    }

    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-lngs js-lang-selector"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-lgsl",
      "rel": "toggle-actions"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("span", {
      "class": "n9g-lgc n9g-f" + options.lang
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "langTitle_" + options.lang)), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-lgl"
    }, htmlSelectLangs)]));
  },
  generateBottomRightLinks: function generateBottomRightLinks(options) {
    var cooperationUrl = this.getCooperationUrl(options);
    var pressServiceUrl = this.getPressServiceUrl(options);
    var contactsUrl = this.getContactsUrl(options);
    var supportUrl = this.getSupportUrl(options);
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n21g21-bottom-right-links"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n21g21-bottom-right-link",
      "href": cooperationUrl
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterCooperation")), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n21g21-bottom-right-link",
      "href": pressServiceUrl
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterPressCentre")), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n21g21-bottom-right-link",
      "href": contactsUrl
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterContacts")), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n21g21-bottom-right-link",
      "href": supportUrl
    }, (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFooterSupport"))]);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "28646275bafc9afb06c2"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=webmoney-footer.5db40bf6bdbf2897429f.hot-update.js.map