(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebMoneyHeader"] = factory();
	else
		root["WebMoneyHeader"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */
  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === void 0,
          value: value
        };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };
  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */


  var serializeParam = function serializeParam(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function deserializeParam(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function polyfillURLSearchParams() {
    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', {
        writable: true,
        value: {}
      });

      var typeofSearchString = _typeof(searchString);

      if (typeofSearchString === 'undefined') {// do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;

        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      } else if (searchString !== null && typeofSearchString === 'object') {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];

            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;

      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];

          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };

    global.URLSearchParams = URLSearchParams;
  };

  var checkIfURLSearchParamsSupported = function checkIfURLSearchParamsSupported() {
    try {
      var URLSearchParams = global.URLSearchParams;
      return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function' && typeof URLSearchParams.prototype.entries === 'function';
    } catch (e) {
      return false;
    }
  };

  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function () {
      var _this = this;

      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);

        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });

      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }

      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function value(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function (value, name) {
            keys.push(name);
          });

          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;

        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });
  } // HTMLAnchorElement

})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */
  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;

    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url);
      if (base && typeof base !== 'string') base = String(base); // Only create another document if the base is different from current location.

      var doc = document,
          baseElement;

      if (base && (global.location === void 0 || base !== global.location.href)) {
        base = base.toLowerCase();
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);

        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;

      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      var inputElement = doc.createElement('input');
      inputElement.type = 'url';
      inputElement.value = url;

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      }); // create a linked searchParams which reflect its changes on URL

      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;

      var _this = this;

      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];

        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);

          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });
      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });
      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
          if (this.search !== search) {
            search = this.search;

            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;

              this.searchParams._fromString(this.search);

              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });
    Object.defineProperty(proto, 'search', {
      get: function get() {
        return this._anchorElement['search'];
      },
      set: function set(value) {
        this._anchorElement['search'] = value;

        this._updateSearchParams();
      },
      enumerable: true
    });
    Object.defineProperties(proto, {
      'toString': {
        get: function get() {
          var _this = this;

          return function () {
            return _this.href;
          };
        }
      },
      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;

          this._updateSearchParams();
        },
        enumerable: true
      },
      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },
      'origin': {
        get: function get() {
          // get expected port from protocol
          var expectedPort = {
            'http:': 80,
            'https:': 443,
            'ftp:': 21
          }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''

          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },
      'password': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },
      'username': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

/***/ }),

/***/ "./src/webMoneyHeader/extensions/ajax.js":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/extensions/ajax.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(method, url, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = xhr.responseText;
      successCallback(response);
    } else if (xhr.readyState === XMLHttpRequest.DONE) {
      errorCallback();
    }
  };

  xhr.open(method, url);
  xhr.send();
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/antiCache.js":
/*!****************************************************!*\
  !*** ./src/webMoneyHeader/extensions/antiCache.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getValue: function getValue() {
    var value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return value;
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/consts.js":
/*!*************************************************!*\
  !*** ./src/webMoneyHeader/extensions/consts.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  DOMAIN_TYPE_WMTRANSFER: "0",
  DOMAIN_TYPE_MONEY: "1",
  DOMAIN_TYPE_RU: "2",
  VIEW_DESKTOP: "desktop",
  VIEW_MOBILE: "mobile",
  VIEW_ADAPTIVE: "adaptive",
  LANG_RU: "ru",
  LANG_EN: "en",
  LANG_ES: "es",
  LANG_PT: "pt",
  LANG_TR: "tr",
  LANG_VN: "vn",
  SEARCH_WHERE_INFO: "info",
  SEARCH_WHERE_GOODS: "goods",
  SEARCH_WHERE_INOUT: "inout",
  SEARCH_WHERE_WIKI: "wiki",
  SEARCH_WHERE_ANT: "ant",
  MENU_URL: {
    "ru": "https://assets.webmoney.ru/json/wm-ext-menu.json",
    "en": "https://assets.webmoney.ru/json/wm-ext-menu-eng.json",
    "es": "https://assets.webmoney.ru/json/wm-ext-menu-es.json",
    "pt": "https://assets.webmoney.ru/json/wm-ext-menu-br.json",
    "tr": "https://assets.webmoney.ru/json/wm-ext-menu-tr.json",
    "vn": "https://assets.webmoney.ru/json/wm-ext-menu-eng.json"
  },
  MENU_URL_MOBILE: {
    "ru": "https://assets.webmoney.ru/json/wm-ext-menumobile.json",
    "en": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json",
    "es": "https://assets.webmoney.ru/json/wm-ext-menumobile-es.json",
    "pt": "https://assets.webmoney.ru/json/wm-ext-menumobile-br.json",
    "tr": "https://assets.webmoney.ru/json/wm-ext-menumobile-tr.json",
    "vn": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json"
  },
  SEARCH_COOKIE_NAME: "searchOption",
  SEARCH_COOKIE_EX_DAYS: 365,
  MEGASTOCK_URL: "https://megastock.ru/searchres.aspx"
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/cookie.js":
/*!*************************************************!*\
  !*** ./src/webMoneyHeader/extensions/cookie.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  set: function set(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  get: function get(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/htmlGenerator.js":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/extensions/htmlGenerator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./src/webMoneyHeader/extensions/local.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ml */ "./src/webMoneyHeader/extensions/ml.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  generate: function generate(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-flv"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row n7g-spb"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
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
    }, this.generateLoginBlock(options))]))), this.generateServicesDropDown(options), this.generateIndividualsDropDown(options), this.generateBusinessDropDown(options)]); // return ml("div", { "class": options.view == consts.VIEW_MOBILE ? "n20g20 n20g20-mobile" : "n20g20" },
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
    }, [])));
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

/***/ }),

/***/ "./src/webMoneyHeader/extensions/local.js":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/extensions/local.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var localization = {
  menuAboutWebMoney: {
    "ru": "О системе",
    "en": "About WebMoney",
    "es": "Acerca del sistema",
    "pt": "Sobre o sistema",
    "tr": "Sistem hakkında",
    "vn": "About WebMoney"
  },
  menuPersonal: {
    "ru": "Частным лицам",
    "en": "Personal",
    "es": "Individuos",
    "pt": "Indivíduos",
    "tr": "Bireysel",
    "vn": "Personal"
  },
  menuBusiness: {
    "ru": "Для бизнеса",
    "en": "Business",
    "es": "Empresas",
    "pt": "Para empresas",
    "tr": "Kurumsal",
    "vn": "Business"
  },
  menuHelp: {
    "ru": "Помощь",
    "en": "Help",
    "es": "Ayuda",
    "pt": "Ajuda",
    "tr": "Yardım",
    "vn": "Help"
  },
  menuFindTitle_info: {
    "ru": "Найти информацию",
    "en": "Find information",
    "es": "Encontrar Información",
    "pt": "Encontrar a informação",
    "tr": "Bilgi ara",
    "vn": "Tìm kiếm thông tin"
  },
  menuFindTitle_goods: {
    "ru": "Найти товары",
    "en": "Find goods",
    "es": "Encontrar Producto",
    "pt": "Encontrar produtos",
    "tr": "Ürün ara",
    "vn": "Tìm kiếm hàng hoá"
  },
  menuFindTitle_inout: {
    "ru": "Найти как ввести/вывести",
    "en": "Find how to top-up/withdraw",
    "es": "Encontrar la manera de recargar/retirar",
    "pt": "Veja como recarregar/retirar",
    "tr": "Nasıl yükleme ve çekme yapılır ara",
    "vn": "Tìm kiếm cách nạp tiền/rút tiền"
  },
  menuFindTitle_wiki: {
    "ru": "Искать в Wiki",
    "en": "Find in Wiki",
    "es": "Buscar información en Wiki",
    "pt": "Pesquisar em Wiki",
    "tr": "Wiki'de bilgi ara",
    "vn": "Tìm kiếm thông tin trên Wiki"
  },
  menuFindTitle_ant: {
    "ru": "Спросить консультанта",
    "en": "Ask virtual agent",
    "es": "Preguntar agente virtual",
    "pt": "Pergunte ao agente virtual",
    "tr": "Sanal aracıya sor",
    "vn": "Hỏi đại lý ảo"
  },
  buttonSignUp: {
    "ru": "Регистрация",
    "en": "Sign Up",
    "es": "Regístrese",
    "pt": "Cadastre-se",
    "tr": "Kayıt",
    "vn": "Đăng ký"
  },
  buttonLogIn: {
    "ru": "Вход",
    "en": "Log In",
    "es": "Ingresar",
    "pt": "Entrar",
    "tr": "Giriş",
    "vn": "Đăng nhập"
  },
  buttonMyPurse: {
    "ru": "Мой Кошелек",
    "en": "My Purse",
    "es": "Mi billetera",
    "pt": "Minha carteira",
    "tr": "Cüzdanim",
    "vn": "Túi của tôi"
  },
  buttonLogOut: {
    "ru": "Выход",
    "en": "Log out",
    "es": "Cerrar sesión",
    "pt": "Desligar",
    "tr": "Çıkış",
    "vn": "Đăng xuất"
  },
  buttonLogInAnotherWmid: {
    "ru": "Войти другим WMID",
    "en": "Log in another WMID",
    "es": "Entrar en otro WMID",
    "pt": "Log em outro WMID",
    "tr": "Başka bir WMID ile giriş yapın",
    "vn": "Đăng nhập với WMID khác"
  },
  buttonLogInSettings: {
    "ru": "Настройки входа",
    "en": "Login settings",
    "es": "Configuraciones de Sesión",
    "pt": "Configurações de sessão",
    "tr": "Giriş ayarları",
    "vn": "Thiết lập đăng nhập"
  },
  buttonBack: {
    "ru": "Назад",
    "en": "Back",
    "es": "Atrás",
    "pt": "Voltar",
    "tr": "Geri",
    "vn": "Trở lại"
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options, key) {
  return localization[key][options.lang];
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/loginBlock.js":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/extensions/loginBlock.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antiCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antiCache */ "./src/webMoneyHeader/extensions/antiCache.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlGenerator */ "./src/webMoneyHeader/extensions/htmlGenerator.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var loginBlockLine = rootElement.getElementsByClassName("n23g23-login-block-wrapper")[0];
    var loginBlockOverlay = rootElement.getElementsByClassName("n23g23-login-block-overlay")[0];
    loginBlockLine.addEventListener("click", function (event) {
      this.classList.toggle("is-opened");
    });
    loginBlockOverlay.addEventListener("click", function (event) {
      this.classList.remove("is-opened");
    });
    window.addEventListener("click", function (e) {
      if (!document.querySelector(".n23g23-login-block-wrapper").contains(e.target)) {
        if (loginBlockLine.classList.contains("is-opened")) {
          loginBlockLine.classList.remove("is-opened");
        }
      }
    });

    if (options.view == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
      var loginBlockClose = rootElement.getElementsByClassName("n23g23-login-block-window-close")[0];
      loginBlockClose.addEventListener("click", function (event) {
        this.classList.remove("is-opened");
      });
    }

    var context = this;
    this.singleSignOn(options, function (singleSignOnResponse) {
      context.renderLoginBlock(options, singleSignOnResponse);
    }, function () {
      context.renderLoginBlock(options, null);
    });
  },
  singleSignOn: function singleSignOn(options, resolve, reject) {
    try {
      var url = this.getLoginServiceUrl(options) + "/GateKeeper/SingleSignOn.js?type=cors";
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          try {
            var singleSignOnResponse = JSON.parse(xhr.responseText);
            resolve(singleSignOnResponse);
          } catch (_unused) {
            reject();
          }
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
          reject();
        }
      };

      xhr.open("GET", url);
      xhr.withCredentials = true;
      xhr.send();
    } catch (error) {
      reject();
    }
  },
  renderLoginBlock: function renderLoginBlock(options, singleSignOnResponse) {
    var loginBlockData = this.getLoginBlockData(options, singleSignOnResponse);

    if (!loginBlockData.loggedOn) {
      var rootElement = options.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n23g23-login-block")[0];
      var loginBlockButtonsElement = rootElement.getElementsByClassName("n23g23-login-block-buttons")[0];
      var loginBlockButtonRegistrationElement = loginBlockButtonsElement.getElementsByClassName("n23g23-login-block-button--registration")[0];
      var loginBlockButtonLoginElement = loginBlockButtonsElement.getElementsByClassName("n23g23-login-block-button--login")[0];
      loginBlockButtonRegistrationElement.href = loginBlockData.registrationUrl;
      loginBlockButtonLoginElement.href = loginBlockData.loginUrl;
      loginBlockElement.classList.remove("is-logged-in");
      loginBlockElement.classList.add("is-not-logged-in");
    } else {
      var rootElement = options.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n23g23-login-block")[0];
      var loginBlockWrapperElement = rootElement.getElementsByClassName("n23g23-login-block-wrapper")[0];
      var loginBlockUserLineImageElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-user-line-image")[0];
      var loginBlockUserLineNameElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-user-line-name")[0];
      var loginBlockWindowUserImageLinkElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-image-link")[0];
      var loginBlockWindowUserImageElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-image")[0];
      var loginBlockWindowUserInfoNameElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-info-name")[0];
      var loginBlockWindowUserInfoNameTextElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-info-name-text")[0];
      var loginBlockWindowUserInfoPurseElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-info-purse")[0];
      var loginBlockWindowUserInfoLogoutElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-user-info-logout")[0];
      var loginBlockWindowAdditionalWmidsList = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-additional-wmids-list")[0];
      var loginBlockWindowLoginButtonElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-login-button")[0];
      var loginBlockWindowSettingsElement = loginBlockWrapperElement.getElementsByClassName("n23g23-login-block-window-settings")[0];
      loginBlockUserLineImageElement.src = loginBlockData.tinyAvatarUrl;
      loginBlockUserLineNameElement.innerText = loginBlockData.preview;
      loginBlockWindowUserImageLinkElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserImageElement.src = loginBlockData.smallAvatarUrl;
      loginBlockWindowUserInfoNameElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserInfoNameTextElement.innerText = loginBlockData.displayName;
      loginBlockWindowUserInfoPurseElement.href = loginBlockData.keeperUrl;
      loginBlockWindowUserInfoLogoutElement.href = loginBlockData.logoutUrl;

      for (var i = 0; i < loginBlockData.additionalUsers.length; i++) {
        var additionalUser = loginBlockData.additionalUsers[i];
        var getneratedLoginBlockWmidItemElement = _htmlGenerator__WEBPACK_IMPORTED_MODULE_2__["default"].getnerateLoginBlockWmidItem(options, additionalUser.wmid, additionalUser.displayName, additionalUser.avatarUrl, additionalUser.loginUrl);
        loginBlockWindowAdditionalWmidsList.appendChild(getneratedLoginBlockWmidItemElement);
      }

      loginBlockWindowLoginButtonElement.href = loginBlockData.reloginUrl;
      loginBlockWindowSettingsElement.href = loginBlockData.settingsUrl;
      loginBlockElement.classList.remove("is-not-logged-in");
      loginBlockElement.classList.add("is-logged-in");
    }

    options.onLoginBlockRendered({
      wmid: loginBlockData.wmid,
      tid: loginBlockData.tid,
      dataFillProgress: loginBlockData.dataFillProgress
    });
  },
  getLoginBlockData: function getLoginBlockData(options, singleSignOnResponse) {
    var wmid = options.wmid;

    if (wmid == null && options.recognize && singleSignOnResponse != null) {
      if (singleSignOnResponse.wmId != null) {
        wmid = singleSignOnResponse.wmId;
      } else if (singleSignOnResponse.users != null && singleSignOnResponse.users.length > 0) {
        wmid = singleSignOnResponse.users[0].wmId;
      }
    }

    var currentUser = null;
    var additionalUsers = [];

    if (singleSignOnResponse != null && singleSignOnResponse.users != null && singleSignOnResponse.users.length > 0) {
      for (var i = 0; i < singleSignOnResponse.users.length; i++) {
        var user = singleSignOnResponse.users[i];
        var dataFillProgress = 0;

        if (user.datafill != null) {
          dataFillProgress = user.datafill.progress;
        }

        if (user.wmId == wmid) {
          currentUser = {
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(options, user.wmId)
          };
        } else {
          additionalUsers.push({
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(options, user.wmId)
          });
        }
      }
    }

    if (wmid != null && currentUser == null) {
      currentUser = {
        wmid: wmid,
        displayName: "WMID: " + wmid,
        avatarUrl: this.getAvatarUrl(options, "tiny", wmid),
        keeperType: 0,
        tid: 0,
        dataFillProgress: 0,
        loginUrl: this.getLoginUrl(options, wmid)
      };
    }

    var loginBlockData = null;

    if (currentUser == null) {
      loginBlockData = {
        loggedOn: false,
        wmid: null,
        tid: null,
        dataFillProgress: null,
        registrationUrl: this.getRegistrationUrl(options),
        loginUrl: options.loginUrl != null ? options.loginUrl : this.getLoginUrl(options, null)
      };
    } else {
      loginBlockData = {
        loggedOn: true,
        wmid: currentUser.wmid,
        tid: currentUser.tid,
        dataFillProgress: currentUser.dataFillProgress,
        preview: "WMID: " + currentUser.wmid,
        displayName: currentUser.displayName,
        tinyAvatarUrl: this.getAvatarUrl(options, "tiny", currentUser.wmid),
        smallAvatarUrl: this.getAvatarUrl(options, "small", currentUser.wmid),
        eventsUrl: this.getEventsUrl(options, currentUser.wmid),
        keeperUrl: this.getKeeperUrl(options, currentUser.wmid, currentUser.keeperType),
        logoutUrl: options.logoutUrl != null ? options.logoutUrl : this.getLogoutUrl(options),
        reloginUrl: this.getReloginUrl(options),
        settingsUrl: this.getSettingsUrl(options),
        additionalUsers: additionalUsers
      };
    }

    return loginBlockData;
  },
  getRegistrationUrl: function getRegistrationUrl(options) {
    var registrationUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? registrationUrl = "https://start.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? registrationUrl = "https://start.webmoney.ru" : registrationUrl = "https://start.web.money";
    return registrationUrl;
  },
  getLoginServiceUrl: function getLoginServiceUrl(options) {
    var loginServiceUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY ? loginServiceUrl = "https://login.web.money" : loginServiceUrl = "https://login.wmtransfer.com";
    options.testMode ? loginServiceUrl += "/better" : loginServiceUrl += "";
    return loginServiceUrl;
  },
  getSettingsUrl: function getSettingsUrl(options) {
    var settingsUrl = this.getLoginServiceUrl(options) + "/GateKeeper/Options.aspx";
    return settingsUrl;
  },
  getLoginUrl: function getLoginUrl(options, wmid) {
    var loginUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + options.rid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());

    if (wmid != null) {
      loginUrl += "&WmId=" + wmid;
    }

    return loginUrl;
  },
  getReloginUrl: function getReloginUrl(options) {
    var reloginUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + options.rid + "&WmId=" + "&Quiet=0" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    return reloginUrl;
  },
  getLogoutUrl: function getLogoutUrl(options, wmid) {
    var logoutUrl = this.getLoginServiceUrl(options) + "/GateKeeper/LogOff.aspx" + "?RID=" + options.rid + "&WmId=" + wmid + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    return logoutUrl;
  },
  getEventsUrl: function getEventsUrl(options, wmid) {
    var rid = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? rid = "6F26FAFD-ABAF-4E22-B5A6-A6A400E2D62B" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? rid = "E1D2A3F8-88E6-45DE-9A4C-A68F00BBBA1C" : rid = "B94F739D-DBC8-4CA5-9964-A8EA00CF636A";
    var eventsUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + rid + "&WmId=" + wmid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue();
    return eventsUrl;
  },
  getKeeperUrl: function getKeeperUrl(options, wmid, keeperType) {
    var rid = null;

    if (keeperType == "1") {
      if (options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY) {
        rid = "D65F715A-DDF7-4BB2-8E4F-A8EA011BB678";
      } else if (options.lang == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU) {
        rid = "535E0FD1-2DB2-4906-B421-A3930133E774";
      } else {
        rid = "FDC51D96-C961-4967-A4CE-A3930133F11F";
      }
    } else {
      if (options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY) {
        rid = "7544EC73-6BA5-41AC-A397-A8EE007C635C";
      } else if (options.lang == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU) {
        rid = "448CCF32-1611-45B5-B3A9-A69B00DDDC31";
      } else {
        rid = "010B268D-88D1-4A18-AEDF-A89600EF7B9F";
      }
    }

    var keeperUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + rid + "&WmId=" + wmid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue();
    return keeperUrl;
  },
  getAvatarUrl: function getAvatarUrl(options, size, wmid) {
    var avatarUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? avatarUrl = "https://events.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? avatarUrl = "https://events.webmoney.ru" : avatarUrl = "https://events.web.money";
    avatarUrl += "/open/avatar.aspx?t=Url";
    avatarUrl += "&s=" + size;
    avatarUrl += "&w=" + wmid;
    return avatarUrl;
  },
  getReturnUrl: function getReturnUrl() {
    var retutnUrl = (location.pathname || "") + (location.search || "") + (location.hash || "");
    return retutnUrl;
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/menu.js":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/extensions/menu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./src/webMoneyHeader/extensions/ajax.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var url = options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MENU_URL_MOBILE[options.lang] : _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MENU_URL[options.lang];
    var servicesMenu = rootElement.getElementsByClassName("n7g-svs")[0];
    var servicesMenuDd = rootElement.getElementsByClassName("n7g-svs-dd")[0];
    var individiualsMenu = rootElement.getElementsByClassName("n7g-ind")[0];
    var individiualsMenuDd = rootElement.getElementsByClassName("n7g-ind-dd")[0];
    var businessMenu = rootElement.getElementsByClassName("n7g-biz")[0];
    var businessMenuDd = rootElement.getElementsByClassName("n7g-biz-dd")[0];
    servicesMenu.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      servicesMenuDd.classList.toggle("is-a");
    });
    individiualsMenu.addEventListener("click", function (e) {
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      individiualsMenuDd.classList.toggle("is-a");
    });
    businessMenu.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      businessMenuDd.classList.toggle("is-a");
    });
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/ml.js":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/extensions/ml.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tagName, props, nest) {
  var el = document.createElement(tagName);

  if (props) {
    for (var name in props) {
      if (name.indexOf("on") === 0) {
        el.addEventListener(name.substr(2).toLowerCase(), props[name], false);
      } else {
        el.setAttribute(name, props[name]);
      }
    }
  }

  if (!nest) {
    return el;
  }

  if (typeof nest === "string") {
    var t = document.createTextNode(nest);
    el.appendChild(t);
  } else if (nest instanceof Array) {
    for (var i = 0; i < nest.length; i++) {
      if (typeof nest[i] === "string") {
        var t = document.createTextNode(nest[i]);
        el.appendChild(t);
      } else if (nest[i] instanceof Node) {
        el.appendChild(nest[i]);
      }
    }
  } else if (nest instanceof Node) {
    el.appendChild(nest);
  }

  return el;
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/searchBlock.js":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/extensions/searchBlock.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ "./src/webMoneyHeader/extensions/cookie.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./src/webMoneyHeader/extensions/local.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var where = _cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_NAME);

    if (where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT) {
      where = _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO;
    }

    var placeholder = (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFindTitle_" + where);
    var searchBoxInput = rootElement.getElementsByClassName("n22g22-search-box-input")[0];
    var toggleSearch = rootElement.getElementsByClassName("n22g22-toggle-search")[0];
    var iconButton = rootElement.getElementsByClassName("n22g22-icon-search")[0];
    var searchMore = rootElement.getElementsByClassName("n22g22-search-more")[0];
    var searchMoreList = searchMore.getElementsByTagName("a");
    var toggleSearchButton = rootElement.getElementsByClassName("n22g22-toggle-search-button")[0];
    var closeSearchButton = rootElement.getElementsByClassName("n20g20-close-search-button")[0];
    searchBoxInput.value = placeholder;
    searchBoxInput.classList.add("n22g22-watermark");
    this.refreshSearchMore(options, searchMoreList, where);
    searchBoxInput.addEventListener("keypress", function (event) {
      if (event.which == 13) {
        event.preventDefault();
        searchBoxInput.blur();
        iconButton.click();
        return false;
      }
    });
    searchBoxInput.addEventListener("focus", function (event) {
      if (this.value == placeholder) {
        this.classList.remove("n22g22-watermark");
        this.value = "";
      }
    });
    searchBoxInput.addEventListener("blur", function (event) {
      this.value = this.value.trim();

      if (this.value == "") {
        this.classList.add("n22g22-watermark");
        this.value = placeholder;
      }

      searchMore.style.display = "none";
    });
    iconButton.addEventListener("click", function (event) {
      var value = searchBoxInput.value;

      if (value.length > 0) {
        if (value != placeholder) {
          context.search(options, where, value);
        } else {
          searchBoxInput.focus();
        }
      }
    });
    searchMore.addEventListener("mouseleave", function (event) {
      searchMore.style.display = "none";
    });
    searchMore.addEventListener("click", function (event) {
      searchMore.style.display = "none";
      searchBoxInput.focus();
    });
    toggleSearch.addEventListener("click", function (event) {
      var visible = searchMore.style.display == "block";
      searchMore.style.display = !visible ? "block" : "none";
    });
    var context = this;

    for (var i = 0; i < searchMoreList.length; i++) {
      searchMoreList[i].addEventListener("click", function (event) {
        where = this.attributes["where"].value;
        placeholder = (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFindTitle_" + where);
        searchBoxInput.value = placeholder;
        searchBoxInput.focus();
        searchMore.style.display = "none";
        context.refreshSearchMore(options, searchMoreList, where);
        _cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(_consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_NAME, where, _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_EX_DAYS);
        return false;
      });
    }

    window.addEventListener("click", function (e) {
      if (!document.querySelector(".n22g22-header-user-search").contains(e.target)) {
        searchMore.style.display = "none";
      }
    });

    if (options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE) {
      toggleSearchButton.addEventListener("click", function (e) {
        e.stopPropagation();
        !this.classList.contains("is-activated") ? this.classList.add("is-activated") : this.classList.remove("is-activated");
      });
      closeSearchButton.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleSearchButton.classList.remove("is-activated");
      });
    }
  },
  refreshSearchMore: function refreshSearchMore(options, searchMoreList, where) {
    for (var i = 0; i < searchMoreList.length; i++) {
      if (searchMoreList[i].attributes["where"] != null) {
        if (searchMoreList[i].attributes["where"].value == where) {
          searchMoreList[i].classList.add("n22g22-search-current");
        } else {
          searchMoreList[i].classList.remove("n22g22-search-current");
        }
      }
    }
  },
  search: function search(options, where, value) {
    value = window.encodeURIComponent(value);
    var url = null;
    var searchInfoUrl = null;
    var searchUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? searchInfoUrl = "https://passport.wmtransfer.com/asp/CertView.asp" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? searchInfoUrl = "https://passport.webmoney.ru/asp/CertView.asp" : searchInfoUrl = "https://passport.web.money/asp/CertView.asp";
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? searchUrl = "https://search.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? searchUrl = "https://search.webmoney.ru" : searchUrl = "https://search.web.money";

    switch (where) {
      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO:
        if (/^[RZEUXBYCGD]\d{12}$/i.test(value)) {
          url = searchInfoUrl + "?purse=" + value;
        } else if (/^\d{12}$/.test(value)) {
          url = searchInfoUrl + "?wmid=" + value;
        } else {
          url = searchUrl + "?q=" + value + "&locale=" + options.lang;
        }

        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS:
        url = _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MEGASTOCK_URL + "?search=" + value + "&lang=" + options.lang;
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT:
        var geoUrl = null;
        options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? geoUrl = "https://geo.wmtransfer.com/find/geosearchpage.aspx" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? geoUrl = "https://geo.webmoney.ru/find/geosearchpage.aspx" : geoUrl = "https://geo.web.money/find/geosearchpage.aspx";
        url = geoUrl + "?name=" + value + "&userID=" + "0045DF2D-7BD9-44FB-B5A8-9F1E5C08DC4A" + "&lang=" + options.lang;
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI:
        var url = searchUrl + "?q=" + value + "&w=" + "webmoney_wiki";
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT:
        var supportUrl = null;
        options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? supportUrl = "https://support.wmtransfer.com/asp/index.asp" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? supportUrl = "https://support.webmoney.ru/asp/index.asp" : supportUrl = "https://support.web.money/asp/index.asp";
        var url = supportUrl + "?ant_question=" + value + "&lang=" + (options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? "rus" : "eng");
        break;
    }

    if (url != null) {
      window.open(url, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss ***!
  \*****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff2 */ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff */ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff2 */ "./src/webMoneyHeader/fonts/Manrope-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff */ "./src/webMoneyHeader/fonts/Manrope-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff2 */ "./src/webMoneyHeader/fonts/Manrope-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff */ "./src/webMoneyHeader/fonts/Manrope-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/svs.svg */ "./src/webMoneyHeader/images/svs.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/svs-a.svg */ "./src/webMoneyHeader/images/svs-a.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-down.svg */ "./src/webMoneyHeader/images/arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search.svg */ "./src/webMoneyHeader/images/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap; }\n\n.n7g {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 1px #eeeeee; }\n  .n7g * {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n    background-color: transparent;\n    text-decoration: none; }\n    .n7g *:hover, .n7g *:active {\n      outline: none; }\n  .n7g a {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .n7g img {\n    border-style: none; }\n  .n7g-ctr {\n    width: 100%;\n    min-width: 320px;\n    max-width: 960px;\n    padding: 0 16px;\n    margin: 0 auto; }\n    @media (min-width: 992px) {\n      .n7g-ctr {\n        padding: 0; } }\n  .n7g-flv {\n    padding: 0;\n    display: flex;\n    align-items: center; }\n  .n7g-row {\n    display: flex; }\n  .n7g-spb {\n    justify-content: space-between; }\n  .n7g-lft {\n    display: flex; }\n  .n7g-llg {\n    display: flex;\n    align-items: center; }\n  .n7g-lgo {\n    padding: 16px 0;\n    margin-right: 32px;\n    display: block; }\n  .n7g-lgi {\n    display: block;\n    height: 32px; }\n  .n7g-mdl {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding-right: 64px; }\n  .n7g-dtr {\n    width: 2px;\n    background-color: #eeeeee;\n    height: calc(100% - 32px);\n    margin-right: 32px; }\n  .n7g-svs {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center center no-repeat;\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n    margin-right: 32px; }\n    .n7g-svs.is-a {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") center center no-repeat; }\n  .n7g-lks {\n    display: flex; }\n  .n7g-lki {\n    display: block;\n    padding: 6px 40px 6px 8px;\n    margin-right: 16px;\n    font-size: 14px;\n    line-height: 20px;\n    color: #101828;\n    font-weight: 600;\n    cursor: pointer;\n    border-radius: 4px;\n    position: relative;\n    text-decoration: none;\n    font-family: \"Manrope\";\n    transition: all 0.2s; }\n    .n7g-lki:after {\n      content: \"\";\n      display: block;\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center center no-repeat;\n      width: 32px;\n      height: 32px;\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      margin-top: -16px; }\n    .n7g-lki.is-a:after {\n      transform: rotate(-180deg);\n      margin-top: -15px; }\n  .n7g-srh {\n    position: absolute;\n    right: 32px;\n    width: 32px;\n    background-color: #fff;\n    border-radius: 4px; }\n    .n7g-srh.is-a {\n      left: 32px;\n      z-index: 1;\n      width: 100%; }\n  .n7g-sbtn {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") center center no-repeat;\n    width: 32px;\n    height: 32px;\n    cursor: pointer; }\n  .n7g-rgt {\n    display: flex;\n    align-items: center; }\n  .n7g-lbs {\n    display: flex; }\n  .n7g-lbi {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 7px 16px;\n    display: block;\n    margin-left: 16px;\n    border: 1px solid;\n    border-radius: 8px; }\n    .n7g-lbi--log {\n      background-color: #006cb4;\n      border-color: #006cb4;\n      color: #fff; }\n    .n7g-lbi--reg {\n      border-color: #006cb4;\n      color: #006cb4; }\n  .n7g-slv {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    max-height: 0;\n    top: 64px;\n    left: 0;\n    right: 0;\n    padding: 24px 0;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s;\n    z-index: 2;\n    background-color: #fff;\n    border-top: 1px solid #eeeeee; }\n    .n7g-slv.is-a {\n      max-height: 1000px;\n      opacity: 1;\n      visibility: visible; }\n  .n7g-col {\n    flex: 1;\n    padding: 0 16px; }\n  .n7g-clm + .n7g-clm {\n    margin-top: 40px; }\n  .n7g-ttl {\n    font-family: \"Manrope\";\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    text-transform: uppercase;\n    border-bottom: 1px solid #e1e1e1;\n    padding-bottom: 16px;\n    margin-bottom: 16px; }\n  .n7g-lnk {\n    display: block;\n    text-decoration: none;\n    font-family: \"Manrope\";\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 16px;\n    color: #707070;\n    cursor: pointer;\n    transition: all 0.3s linear; }\n    .n7g-lnk:hover {\n      color: #006cb4; }\n", "",{"version":3,"sources":["webpack://./src/webMoneyHeader/webMoneyHeader.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,oHAA2G;EAC3G,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHAAyG;EACzG,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHAAuG;EACvG,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAiCpB;EApBE,SAAS;EACT,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,sBAAsB;EAkBtB,WAAW;EACX,gBAAgB;EAChB,yBAAyB,EAAA;EAJ3B;IApBE,SAAS;IACT,UAAU;IACV,SAAS;IACT,wBAAwB;IACxB,sBAAsB;IAItB,6BAA6B;IAC7B,qBAAqB,EAAA;IACrB;MAEE,aAAa,EAAA;EAQjB;IA7BE,2BAA2B;IAC3B,yBAAyB;IACzB,wBAAwB;IACxB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB,EAAA;EAwBnB;IAHE,kBAAkB,EAAA;EAkBlB;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,cAAc,EAAA;IACd;MANF;QAOI,UAAU,EAAA,EAEb;EACD;IACE,UAAU;IACV,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA;EAEf;IACE,8BAA8B,EAAA;EAEhC;IACE,aAAa,EAAA;EAEf;IACE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,eAAe;IACf,kBAAkB;IAClB,cAAc,EAAA;EAEhB;IACE,cAAc;IACd,YAAY,EAAA;EAEd;IACE,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB,EAAA;EAErB;IACE,UAAU;IACV,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB,EAAA;EAEpB;IACE,uFAAuE;IACvE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB,EAAA;IALnB;MAOG,uFAAyE,EAAA;EAG7E;IACE,aAAa,EAAA;EAEf;IACE,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB,EAAA;IAbrB;MAeG,WAAW;MACX,cAAc;MACd,uFAA8E;MAC9E,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,UAAU;MACV,QAAQ;MACR,iBAAiB,EAAA;IAvBpB;MA2BK,0BAA0B;MAC1B,iBAAiB,EAAA;EAIvB;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,kBAAkB,EAAA;IALnB;MAOG,UAAU;MACV,UAAU;MACV,WAAW,EAAA;EAGf;IACE,uFAA0E;IAC1E,WAAW;IACX,YAAY;IACZ,eAAe,EAAA;EAEjB;IACE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA;EAEf;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB,EAAA;IAClB;MACE,yBAAyB;MACzB,qBAAqB;MACrB,WAAW,EAAA;IAEb;MACE,qBAAqB;MACrB,cAAc,EAAA;EAGlB;IACE,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,OAAO;IACP,QAAQ;IACR,eAAe;IACf,0CAA0C;IAC1C,oBAAoB;IACpB,UAAU;IACV,sBAAsB;IACtB,6BAA6B,EAAA;IAb9B;MAeG,kBAAkB;MAClB,UAAU;MACV,mBAAmB,EAAA;EAGvB;IACE,OAAO;IACP,eAAe,EAAA;EAEhB;IAEG,gBAAgB,EAAA;EAGpB;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,gCAAgC;IAChC,oBAAoB;IACpB,mBAAmB,EAAA;EAErB;IACE,cAAc;IACd,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,2BAA2B,EAAA;IAT5B;MAWG,cAAc,EAAA","sourcesContent":["@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-SemiBold.woff2\") format(\"woff2\"), url(\"fonts/Manrope-SemiBold.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Regular.woff2\") format(\"woff2\"), url(\"fonts/Manrope-Regular.woff\") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Medium.woff2\") format(\"woff2\"), url(\"fonts/Manrope-Medium.woff\") format(\"woff\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@mixin noSelection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@mixin resetDiv {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  vertical-align: baseline;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin resetA {\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n  &:hover,\r\n  &:active {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n@mixin resetImg {\r\n  border-style: none;\r\n}\r\n\r\n.n7g {\r\n  @include resetDiv;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  box-shadow: 0 1px #eeeeee;\r\n  * {\r\n    @include resetDiv;\r\n    @include resetA;\r\n  }\r\n  a {\r\n    @include noSelection;\r\n  }\r\n  img {\r\n    @include resetImg;\r\n  }\r\n  &-ctr {\r\n    width: 100%;\r\n    min-width: 320px;\r\n    max-width: 960px;\r\n    padding: 0 16px;\r\n    margin: 0 auto;\r\n    @media (min-width: 992px) {\r\n      padding: 0;\r\n    }\r\n  }\r\n  &-flv{\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-row{\r\n    display: flex;\r\n  }\r\n  &-spb{\r\n    justify-content: space-between;\r\n  }\r\n  &-lft{\r\n    display: flex;\r\n  }\r\n  &-llg{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-lgo{\r\n    padding: 16px 0;\r\n    margin-right: 32px;\r\n    display: block;\r\n  }\r\n  &-lgi{ \r\n    display: block;\r\n    height: 32px;\r\n  }\r\n  &-mdl{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    padding-right: 64px;\r\n  }\r\n  &-dtr{\r\n    width: 2px;\r\n    background-color: #eeeeee;\r\n    height: calc(100% - 32px);\r\n    margin-right: 32px;\r\n  }\r\n  &-svs{\r\n    background: transparent url(\"./images/svs.svg\") center center no-repeat;\r\n    width: 32px;\r\n    height: 32px;\r\n    cursor: pointer;\r\n    margin-right: 32px;\r\n    &.is-a{\r\n      background: transparent url(\"./images/svs-a.svg\") center center no-repeat;\r\n    }\r\n  }\r\n  &-lks{\r\n    display: flex;\r\n  }\r\n  &-lki{\r\n    display: block;\r\n    padding: 6px 40px 6px 8px;\r\n    margin-right: 16px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: #101828;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: \"Manrope\";\r\n    transition: all 0.2s;\r\n    &:after{\r\n      content: \"\";\r\n      display: block;\r\n      background: transparent url(\"./images/arrow-down.svg\") center center no-repeat;\r\n      width: 32px;\r\n      height: 32px;\r\n      position: absolute;\r\n      right: 8px;\r\n      top: 50%;\r\n      margin-top: -16px;\r\n    }\r\n    &.is-a {\r\n      &:after {\r\n        transform: rotate(-180deg);\r\n        margin-top: -15px;\r\n      }\r\n    }\r\n  }\r\n  &-srh{\r\n    position: absolute;\r\n    right: 32px;\r\n    width: 32px;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    &.is-a{\r\n      left: 32px;\r\n      z-index: 1;\r\n      width: 100%;\r\n    }\r\n  }\r\n  &-sbtn{\r\n    background: transparent url(\"./images/search.svg\") center center no-repeat;\r\n    width: 32px;\r\n    height: 32px;\r\n    cursor: pointer;\r\n  }\r\n  &-rgt{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-lbs{\r\n    display: flex;\r\n  }\r\n  &-lbi{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 7px 16px;\r\n    display: block;\r\n    margin-left: 16px;\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n    &--log{\r\n      background-color: #006cb4;\r\n      border-color: #006cb4;\r\n      color: #fff;\r\n    }\r\n    &--reg{\r\n      border-color: #006cb4;\r\n      color: #006cb4;\r\n    }\r\n  }\r\n  &-slv{\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    position: absolute;\r\n    max-height: 0;\r\n    top: 64px;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 24px 0;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s;\r\n    z-index: 2;\r\n    background-color: #fff;\r\n    border-top: 1px solid #eeeeee;\r\n    &.is-a{\r\n      max-height: 1000px;\r\n      opacity: 1;\r\n      visibility: visible;\r\n    }\r\n  }\r\n  &-col{\r\n    flex: 1;\r\n    padding: 0 16px;\r\n  }\r\n  &-clm{\r\n    & + .n7g-clm {\r\n      margin-top: 40px;\r\n    }\r\n  }\r\n  &-ttl{\r\n    font-family: \"Manrope\";\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    border-bottom: 1px solid #e1e1e1;\r\n    padding-bottom: 16px;\r\n    margin-bottom: 16px;\r\n  }\r\n  &-lnk{\r\n    display: block;\r\n    text-decoration: none;\r\n    font-family: \"Manrope\";\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    margin-bottom: 16px;\r\n    color: #707070;\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    &:hover{\r\n      color: #006cb4;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webMoneyHeader/webMoneyHeader.scss":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./webMoneyHeader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Medium.woff":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Medium.woff ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "455e3f5bb2cbb93667d5.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Medium.woff2":
/*!*******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Medium.woff2 ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "230210f79765501c1ab7.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Regular.woff":
/*!*******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Regular.woff ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d1384c3221d6bf5c6f29.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Regular.woff2":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Regular.woff2 ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "15e344c414d52dd672ef.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-SemiBold.woff ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a716e35a52599b8145e4.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2":
/*!*********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2 ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "45721b3429a1fa90f750.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/images/arrow-down.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/arrow-down.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a9de67558370894eebf0.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/icon-search-toggle-down.svg":
/*!***************************************************************!*\
  !*** ./src/webMoneyHeader/images/icon-search-toggle-down.svg ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0ee4ed65779ce31e0b9e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/search.svg":
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/images/search.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2265db788626cfd6a06c.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/svs-a.svg":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/images/svs-a.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2130d8979d3de745afc8.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/svs.svg":
/*!*******************************************!*\
  !*** ./src/webMoneyHeader/images/svs.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "23f48315246a2e5f7f73.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/wm-logo.svg":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/images/wm-logo.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f00ea7780171df717238.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"webmoney-header": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebMoneyHeader; }
/* harmony export */ });
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extensions_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions/consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/htmlGenerator */ "./src/webMoneyHeader/extensions/htmlGenerator.js");
/* harmony import */ var _extensions_loginBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/loginBlock */ "./src/webMoneyHeader/extensions/loginBlock.js");
/* harmony import */ var _extensions_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/menu */ "./src/webMoneyHeader/extensions/menu.js");
/* harmony import */ var _extensions_searchBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/searchBlock */ "./src/webMoneyHeader/extensions/searchBlock.js");
 // IE 11 не поддерживает конструктор URL, который использует webpack 5.







__webpack_require__(/*! ./webMoneyHeader.scss */ "./src/webMoneyHeader/webMoneyHeader.scss");

function WebMoneyHeader() {
  this.init = function (options) {
    if (options == null) {
      console.error("options empty");
      return;
    }

    var rootElement = options.rootElement;

    if (rootElement == null) {
      console.error("rootElement empty");
      return;
    }

    var testMode = options.testMode === true ? true : false;
    var domainType = this.tryParseDomainType(options);
    var view = this.tryParseView(options);
    var lang = this.tryParseLang(options);
    var recognize = options.recognize === false ? false : true;
    var wmid = options.wmid == "" || options.wmid == null ? null : options.wmid;
    var loginUrl = options.loginUrl == "" || options.loginUrl == null ? null : options.loginUrl;
    var logoutUrl = options.logoutUrl == "" || options.logoutUrl == null ? null : options.logoutUrl;
    var rid = options.rid == "" || options.rid == null ? null : options.rid;
    var onLoginBlockRendered = this.tryParseOnLoginBlockRendered(options);

    if (rid == null) {
      console.error("rid empty");
      return;
    }

    options = {
      rootElement: rootElement,
      testMode: testMode,
      domainType: domainType,
      view: view,
      lang: lang,
      recognize: recognize,
      wmid: wmid,
      loginUrl: loginUrl,
      logoutUrl: logoutUrl,
      rid: rid,
      onLoginBlockRendered: onLoginBlockRendered
    };

    if (options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE) {
      this.initAdaptive(options);
    } else {
      this.initNotAdaptive(options);
    }
  };

  this.initNotAdaptive = function (options) {
    var generatedElement = _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__["default"].generate(options);
    options.rootElement.innerHTML = "";
    options.rootElement.appendChild(generatedElement);
    _extensions_menu__WEBPACK_IMPORTED_MODULE_4__["default"].init(options); // searchBlock.init(options);
    // loginBlock.init(options);
  };

  this.initAdaptive = function (options) {
    var desktopMinClientWidth = 960;

    if (document.documentElement.clientWidth < desktopMinClientWidth) {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE;
      this.initNotAdaptive(options);
    } else {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP;
      this.initNotAdaptive(options);
    }

    var context = this;
    window.addEventListener("resize", function () {
      var clientWidth = document.documentElement.clientWidth;

      if (clientWidth < desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE;
        context.initNotAdaptive(options);
      } else if (clientWidth >= desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP;
        context.initNotAdaptive(options);
      }
    });
  };

  this.tryParseDomainType = function (options) {
    var domainType = options.domainType;

    if (domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU) {
      try {
        var hostname = window.location.hostname;

        if (hostname.indexOf("wmtransfer") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER;
        } else if (hostname.indexOf("ru") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU;
        } else {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY;
        }
      } catch (_unused) {
        domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY;
      }
    }

    return domainType;
  };

  this.tryParseView = function (options) {
    var view = options.view;

    if (view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE) {
      view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE;
    }

    return view;
  };

  this.tryParseLang = function (options) {
    var lang = options.lang;

    if (lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_EN && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_ES && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_PT && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_TR && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_VN) {
      lang = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_EN;
    }

    return lang;
  };

  this.tryParseOnLoginBlockRendered = function (options) {
    var onLoginBlockRendered = options.onLoginBlockRendered;

    if (typeof onLoginBlockRendered != "function") {
      onLoginBlockRendered = function onLoginBlockRendered(renderedData) {};
    }

    var onLoginBlockRenderedWrapper = function onLoginBlockRenderedWrapper(renderedData) {
      try {
        onLoginBlockRendered(renderedData);
      } catch (error) {
        console.log(error);
      }
    };

    return onLoginBlockRenderedWrapper;
  };
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=webmoney-header.js.map