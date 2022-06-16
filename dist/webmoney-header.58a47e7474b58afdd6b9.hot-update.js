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
/* harmony import */ var _linkStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../linkStorage */ "./linkStorage.js");





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
      "class": "n7g-rw"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mnu"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni is-a"
    }, "Криптовалюты"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Заработать"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Оплатить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Для работы")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cnt"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti is-a"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/bitcoin.svg */ "./src/webMoneyHeader/images/services/bitcoin.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMX (Bitcoin)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/bitcoin-cash.svg */ "./src/webMoneyHeader/images/services/bitcoin-cash.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMH (Bitcoin Cash)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/litecoin.svg */ "./src/webMoneyHeader/images/services/litecoin.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WML (Litecoin)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/ethereum.svg */ "./src/webMoneyHeader/images/services/ethereum.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMF (Ethereum)")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../images/services/video-с.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
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
      "src": __webpack_require__(/*! ../images/services/notes.svg */ "./src/webMoneyHeader/images/services/notes.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Верстка и публикация заметок")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/apple.svg */ "./src/webMoneyHeader/images/services/apple.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Подарочная карта Apple")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/steam.svg */ "./src/webMoneyHeader/images/services/steam.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Steam")])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
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
      "src": __webpack_require__(/*! ../images/services/notes.svg */ "./src/webMoneyHeader/images/services/notes.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Верстка и публикация заметок")])])])])));
  },
  // getLink(options, "indx").title
  // getLink(options, "indx").url
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
    }, "Пополнить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpCash").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpCash").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpBankAccount").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpBankAccount").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpEMoney").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpEMoney").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpPaymentTerminat").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpPaymentTerminat").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpMoneyTransfer").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpMoneyTransfer").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Заработать"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "consultations").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "consultations").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "softactivation").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "softactivation").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicant").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicant").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestkom").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestkom").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtmart").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtmart").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Для работы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "video").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "video").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "memo").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "memo").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "notes").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "notes").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "analytics").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "analytics").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mail").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mail").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Вывести"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawCash").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawCash").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawToBankCard").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawToBankCard").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawBankAccount").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawBankAccount").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawEmoney").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawEmoney").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawTransfer").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawTransfer").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Операции с WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wmCheck").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wmCheck").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "protectedTransactions").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "protectedTransactions").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ttl",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "security").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "security").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "operationNotification").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "operationNotification").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseAccessLimiting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseAccessLimiting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "expenseLimitsSetting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "expenseLimitsSetting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "restoringControl").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "restoringControl").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "advisor").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "advisor").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Оплатить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mobileCommunications").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mobileCommunications").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "internetAccess").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "internetAccess").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "commercialTv").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "commercialTv").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicUtilities").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicUtilities").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicServices").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicServices").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "bankAccountPayments").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "bankAccountPayments").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digisellerCatalogOfdigitalGoods").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digisellerCatalogOfdigitalGoods").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "antivirus").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "antivirus").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "rebills").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "rebills").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Одолжить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditService").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtService").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ttl",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "passport").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "passport").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "receivePassport").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "receivePassport").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "verificationPoints").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "verificationPoints").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ttl",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitComplaint").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitComplaint").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitClaim").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitClaim").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "registerContract").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "registerContract").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сбор средств"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "charity").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "charity").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "crowdfunding").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "crowdfunding").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "groupBuying").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "groupBuying").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "eventOrganization").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "eventOrganization").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Банковские карты"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "virtualCards").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "virtualCards").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "plasticCards").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "plasticCards").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "moneySend").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "moneySend").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Территория WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "events").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "events").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "blog").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "blog").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "geo").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "geo").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wiki").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wiki").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ttl",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseManagement2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseManagement2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperStandardMini2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperStandardMini2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWinProClassic2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWinProClassic2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWebProLight2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWebProLight2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperMobile2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperMobile2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperForSocialNetworks2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperForSocialNetworks2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum2").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ttl",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "downloadSoftware2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "downloadSoftware2").title)])])])));
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
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "merchant").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "merchant").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "paymentsToBankAccounts").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "paymentsToBankAccounts").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller2").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сайтам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "funding").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "funding").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestcom2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestcom2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller3").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller3").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "login").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "login").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Общие"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "masspayment").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "masspayment").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "contracts").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "contracts").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditMarket").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditMarket").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "reporting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "reporting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "financialSupport2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "financialSupport2").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Юридическим лицам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz2").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Капитал"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtMarket").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtMarket").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "capitaller").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "capitaller").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Возможности WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "secureMail").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "secureMail").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "letterPostingService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "letterPostingService").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "newsline").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "newsline").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Разработчикам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "programInterfaces").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "programInterfaces").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "stylesAndDesign").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "stylesAndDesign").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "technicalSupport2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "technicalSupport2").title)])])])));
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
/******/ 	__webpack_require__.h = function() { return "427733f99481d58c9f32"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=webmoney-header.58a47e7474b58afdd6b9.hot-update.js.map