(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebMoneyFooter"] = factory();
	else
		root["WebMoneyFooter"] = factory();
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

/***/ "./node_modules/element-closest-polyfill/index.js":
/*!********************************************************!*\
  !*** ./node_modules/element-closest-polyfill/index.js ***!
  \********************************************************/
/***/ (function() {

if (typeof Element !== "undefined") {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }
}

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

/***/ "./src/webMoneyFooter/extensions/ajax.js":
/*!***********************************************!*\
  !*** ./src/webMoneyFooter/extensions/ajax.js ***!
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

/***/ "./src/webMoneyFooter/extensions/consts.js":
/*!*************************************************!*\
  !*** ./src/webMoneyFooter/extensions/consts.js ***!
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
  ILLICIUM_VIEW_TOP: "top",
  ILLICIUM_VIEW_BOTTOM: "bottom",
  FASTMENU_VISIBLE: "visible",
  FASTMENU_HIDDEN: "hidden",
  VKONTAKTE_URL: {
    "ru": "https://vk.com/webmoney.transfer",
    "en": "https://vk.com/webmoney.transfer",
    "es": "https://vk.com/webmoney.transfer",
    "pt": "https://vk.com/webmoney.transfer",
    "tr": "https://vk.com/webmoney.transfer",
    "vn": "https://vk.com/webmoney.transfer"
  },
  FACEBOOK_URL: {
    "ru": "https://www.facebook.com/webmoney",
    "en": "https://www.facebook.com/webmoneyofficial",
    "es": "https://www.facebook.com/webmoneyofficial",
    "pt": "https://www.facebook.com/webmoneyofficial",
    "tr": "https://www.facebook.com/webmoneyofficial",
    "vn": "https://www.facebook.com/webmoneyofficial"
  },
  TWITTER_URL: {
    "ru": "https://twitter.com/webmoney_ru",
    "en": "https://twitter.com/WebMoneySystem",
    "es": "https://twitter.com/WebMoneySystem",
    "pt": "https://twitter.com/WebMoneySystem",
    "tr": "https://twitter.com/WebMoneySystem",
    "vn": "https://twitter.com/WebMoneySystem"
  },
  ODNOKLASSNIKI_URL: {
    "ru": "https://ok.ru/group/53706567844072",
    "en": "https://ok.ru/group/53706567844072",
    "es": "https://ok.ru/group/53706567844072",
    "pt": "https://ok.ru/group/53706567844072",
    "tr": "https://ok.ru/group/53706567844072",
    "vn": "https://ok.ru/group/53706567844072"
  },
  YOUTUBE_URL: {
    "ru": "https://www.youtube.com/c/webmoney",
    "en": "https://www.youtube.com/c/webmoney",
    "es": "https://www.youtube.com/c/webmoney",
    "pt": "https://www.youtube.com/c/webmoney",
    "tr": "https://www.youtube.com/c/webmoney",
    "vn": "https://www.youtube.com/c/webmoney"
  },
  INSTAGRAM_URL: {
    "ru": "https://www.instagram.com/webmoney",
    "en": "https://www.instagram.com/webmoney",
    "es": "https://www.instagram.com/webmoney",
    "pt": "https://www.instagram.com/webmoney",
    "tr": "https://www.instagram.com/webmoney",
    "vn": "https://www.instagram.com/webmoney"
  },
  TELEGRAM_URL: {
    "ru": "https://www.telegram.me/webmoney",
    "en": "https://www.telegram.me/webmoney",
    "es": "https://www.telegram.me/webmoney",
    "pt": "https://www.telegram.me/webmoney",
    "tr": "https://www.telegram.me/webmoney",
    "vn": "https://www.telegram.me/webmoney"
  },
  RSS_URL: {
    "ru": "https://assets.webmoney.ru/rss.xml",
    "en": "https://assets.webmoney.ru/rss_eng.xml",
    "es": "https://assets.webmoney.ru/rss_esp.xml",
    "pt": "https://assets.webmoney.ru/rss_br.xml",
    "tr": "https://assets.webmoney.ru/rss_tr.xml",
    "vn": "https://assets.webmoney.ru/rss_eng.xml"
  },
  MENU_URL_MOBILE: {
    "ru": "https://assets.webmoney.ru/json/wm-ext-menumobile.json",
    "en": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json",
    "es": "https://assets.webmoney.ru/json/wm-ext-menumobile-es.json",
    "pt": "https://assets.webmoney.ru/json/wm-ext-menumobile-br.json",
    "tr": "https://assets.webmoney.ru/json/wm-ext-menumobile-tr.json",
    "vn": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json"
  },
  WINDOWS_DEVICE_URL: "https://www.windowsphone.com/ru-ru/store/app/my-webmoney/1d32a045-9379-4abc-85fc-5950f1c6fbd7",
  ANDROID_DEVICE_URL: "https://play.google.com/store/apps/details?id=com.webmoney.my",
  APPLE_DEVICE_URL: "https://itunes.apple.com/ru/app/my-webmoney/id524382727?mt=8"
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/device.js":
/*!*************************************************!*\
  !*** ./src/webMoneyFooter/extensions/device.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  isAndroidDevice: function isAndroidDevice() {
    return navigator.userAgent.match(/Android/i);
  },
  isAppleDevice: function isAppleDevice() {
    return navigator.userAgent.match(/iPhone|iPod/i);
  },
  isOperaDevice: function isOperaDevice() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  isWindowsDevice: function isWindowsDevice() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  isAnyDevice: function isAnyDevice() {
    return this.isAndroidDevice() || this.isAppleDevice() || this.isOperaDevice() || this.isWindowsDevice();
  }
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/htmlGenerator.js":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/extensions/htmlGenerator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ "./src/webMoneyFooter/extensions/device.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./src/webMoneyFooter/extensions/local.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ml */ "./src/webMoneyFooter/extensions/ml.js");




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
    }, [this.generateMiddlePartAboutSystem(options), this.generateMiddlePartWmOperations(options), this.generateMiddlePartForWork(options), this.generateMiddlePartHelp(options)]), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      class: "n9g-rw"
    }, [this.generateMiddlePartSecurity(options), this.generateMiddlePartWmTerritory(options), this.generateMiddlePartApps(options)])]));
  },
  generateMiddlePartAboutSystem: function generateMiddlePartAboutSystem(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "О системе"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Краткое описание"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Управление кошельками"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Тарифы системы"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Статистика"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Юридическая информация"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Субъекты системы"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Регистраторы")]);
  },
  generateMiddlePartWmOperations: function generateMiddlePartWmOperations(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Операции с WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Exchanger: обменный пункт"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "WM.Check: оплата без регистрации"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Переводы с протекцией (платежи в два шага)")]);
  },
  generateMiddlePartForWork: function generateMiddlePartForWork(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Для работы"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Видеозвонки и онлайн-трансляции"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Управление закладками"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Верстка и публикация заметок"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Сервис аналитики"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Лента новостей: рассылка")]);
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
  generateMiddlePartSecurity: function generateMiddlePartSecurity(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-cln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("div", {
      "class": "n9g-mtl"
    }, "Безопасность"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Безопасность и конфиденциальность"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Escrow: защищенные сделки"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "E-Num: безопасная авторизация"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Оповещения об операциях"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Ограничение доступа к кошельку"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Настройка расходных лимитов"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Восстановление доступа"), (0,_ml__WEBPACK_IMPORTED_MODULE_3__["default"])("a", {
      "class": "n9g-mlk",
      "href": "#"
    }, "Advisor: отзывы о сайтах")]);
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

/***/ }),

/***/ "./src/webMoneyFooter/extensions/illiciumAsync.js":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/extensions/illiciumAsync.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    if (options.illiciumPlaceId == null || options.view != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_ADAPTIVE) {
      return;
    }

    var url = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? url = "https://illicium.wmtransfer.com" : url = "https://illicium.web.money";
    url += "/scripts/public/illicium_0_3.js";
    this.loadJs(url, function () {});
  },
  loadJs: function loadJs(src, onload) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;

    if (onload != null) {
      script.onload = onload;
    }

    document.body.appendChild(script);
  }
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/langSelector.js":
/*!*******************************************************!*\
  !*** ./src/webMoneyFooter/extensions/langSelector.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var view = options.view;
    var supportedLangs = options.supportedLangs;

    if (view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_DESKTOP && supportedLangs.length > 1) {
      var n21g21LanguageSelect = rootElement.getElementsByClassName("n9g-lgsl")[0];

      n21g21LanguageSelect.onclick = function () {
        this.classList.toggle("is-activated");
      };

      document.onclick = function (e) {
        if (e.target.className.indexOf("n9g-lgsl") == -1) {
          if (!e.target.closest(".n9g-lgsl")) {
            if (n21g21LanguageSelect.className.indexOf("is-activated") > -1) {
              n21g21LanguageSelect.classList.remove("is-activated");
            }
          }
        }
      };

      var selectLangs = rootElement.getElementsByClassName("n9g-lgi");

      for (var i = 0; i < selectLangs.length; i++) {
        selectLangs[i].addEventListener("click", function (e) {
          var lang = e.target.attributes["data-lang"].value;

          if (options.lang != lang) {
            options.onChangeLang(lang);
          }
        });
      }
    } else if (view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE && supportedLangs.length > 1) {
      var selectLangs = rootElement.getElementsByClassName("n9g-lgi");

      for (var i = 0; i < selectLangs.length; i++) {
        selectLangs[i].addEventListener("click", function (e) {
          var lang = e.target.attributes["data-lang"].value;

          if (options.lang != lang) {
            options.onChangeLang(lang);
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/local.js":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/extensions/local.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var localization = {
  menuFooterBusinessNetwork: {
    "ru": "Деловая сеть",
    "en": "Business network",
    "es": "Red de negocios",
    "pt": "Rede de Negócios",
    "tr": "İş şebekesi",
    "vn": "Mạng xã hội"
  },
  menuFooterNews: {
    "ru": "Новости",
    "en": "News",
    "es": "Noticias",
    "pt": "Notícias",
    "tr": "Haberler",
    "vn": "Tin tức"
  },
  menuFooterDevelopers: {
    "ru": "Разработчикам",
    "en": "Developers",
    "es": "Desarolladores",
    "pt": "Para programadores",
    "tr": "Geliştiriciler ve webmasterlar için",
    "vn": "Nhà phát triển"
  },
  menuFooterCopyrightText: {
    "ru": "Воспроизводимые на данном сайте торговые марки WEBMONEY и WEBMONEY TRANSFER используются держателями сайта с разрешения правообладателя.",
    "en": "Usage of trademarks WEBMONEY and WEBMONEY TRANSFER by site owners is authorized by the trademark owners.",
    "es": "Las marcas comerciales WEBMONEY y WEBMONEY TRANSFER reproducidas en este sitio web se utilizan con el permiso del titular de derecho de autor.",
    "pt": "Marcas WebMoney e WebMoney Transfer neste site são usadas com permissão do titular dos direitos.",
    "tr": "Site sahiplerince WEBMONEY ve WEBMONEY TRANSFER'in logolarının kullanım hakkı marka sahipleri tarafından yetkilendirilmiştir.",
    "vn": "Việc sử dụng tên thương hiệu WEBMONEY và WEBMONEY TRANSFER trên trang web này đã được sự chấp thuận từ chủ sở hữu."
  },
  menuFooterCooperation: {
    "ru": "Сотрудничество",
    "en": "Cooperation",
    "es": "Colaboración",
    "pt": "Colaboração",
    "tr": "Kullanım koşulları",
    "vn": "Hợp tác"
  },
  menuFooterPressCentre: {
    "ru": "Пресс-центр",
    "en": "Press-centre",
    "es": "Centro de prensa",
    "pt": "Centro de imprensa",
    "tr": "Basın merkezi",
    "vn": "Trung tâm tin tức"
  },
  menuFooterContacts: {
    "ru": "Контакты",
    "en": "Contacts",
    "es": "Contáctenos",
    "pt": "Contatos",
    "tr": "Kontaklar",
    "vn": "Liên hệ"
  },
  menuFooterSupport: {
    "ru": "Поддержка",
    "en": "Support",
    "es": "Soporte",
    "pt": "Suporte",
    "tr": "Destek",
    "vn": "Hỗ trợ"
  },
  menuFooterOurApps: {
    "ru": "Наши приложения",
    "en": "Our apps",
    "es": "Nuestras aplicaciones",
    "pt": "Nosso aplicativos",
    "tr": "bizim uygulamamız",
    "vn": "Ứng dụng của chúng tôi"
  },
  textFooterEventsLink: {
    "ru": "events.webmoney.ru",
    "en": "events.wmtransfer.com",
    "es": "events.wmtransfer.com",
    "pt": "events.wmtransfer.com",
    "tr": "events.wmtransfer.com",
    "vn": "events.wmtransfer.com"
  },
  allNewsLinkText: {
    "ru": "Все новости",
    "en": "All news",
    "es": "Todas las noticias",
    "pt": "Todas as notícias",
    "tr": "Bütün haberler",
    "vn": "Tất cả tin tức"
  },
  langTitle_ru: {
    "ru": "Русский",
    "en": "Русский",
    "es": "Русский",
    "pt": "Русский",
    "tr": "Русский",
    "vn": "Русский"
  },
  langTitle_en: {
    "ru": "English",
    "en": "English",
    "es": "English",
    "pt": "English",
    "tr": "English",
    "vn": "English"
  },
  langTitle_es: {
    "ru": "Español",
    "en": "Español",
    "es": "Español",
    "pt": "Español",
    "tr": "Español",
    "vn": "Español"
  },
  langTitle_pt: {
    "ru": "Português",
    "en": "Português",
    "es": "Português",
    "pt": "Português",
    "tr": "Português",
    "vn": "Português"
  },
  langTitle_tr: {
    "ru": "Türk",
    "en": "Türk",
    "es": "Türk",
    "pt": "Türk",
    "tr": "Türk",
    "vn": "Türk"
  },
  langTitle_vn: {
    "ru": "tiếng Việt",
    "en": "tiếng Việt",
    "es": "tiếng Việt",
    "pt": "tiếng Việt",
    "tr": "tiếng Việt",
    "vn": "tiếng Việt"
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options, key) {
  return localization[key][options.lang];
}

/***/ }),

/***/ "./src/webMoneyFooter/extensions/ml.js":
/*!*********************************************!*\
  !*** ./src/webMoneyFooter/extensions/ml.js ***!
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

/***/ "./src/webMoneyFooter/extensions/mobileBlockMenu.js":
/*!**********************************************************!*\
  !*** ./src/webMoneyFooter/extensions/mobileBlockMenu.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/webMoneyFooter/extensions/ajax.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");
/* harmony import */ var _nextUntil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextUntil */ "./src/webMoneyFooter/extensions/nextUntil.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var view = options.view;

    if (view != _consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
      return;
    }

    var rootElement = options.rootElement;
    var url = _consts__WEBPACK_IMPORTED_MODULE_1__["default"].MENU_URL_MOBILE[options.lang];
    (0,_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])("GET", url, function (response) {
      var menuBlock = rootElement.getElementsByClassName("n21g21-footer-menu")[0];
      var data = JSON.parse(response).data.replace(/sidebar-submenu/g, "n26g26-sidebar-submenu");
      menuBlock.innerHTML = data;
      var menuTitles = menuBlock.querySelectorAll("span");

      for (var i = 0; i < menuTitles.length; i++) {
        menuTitles[i].addEventListener("click", function () {
          this.classList.toggle("is-opened");
          var siblings = (0,_nextUntil__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "span", ".n26g26-sidebar-submenu");

          for (var k = 0; k < siblings.length; k++) {
            siblings[k].classList.toggle("is-shown");
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/mobileBlockNewsLinks.js":
/*!***************************************************************!*\
  !*** ./src/webMoneyFooter/extensions/mobileBlockNewsLinks.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/webMoneyFooter/extensions/ajax.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/webMoneyFooter/extensions/consts.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ml */ "./src/webMoneyFooter/extensions/ml.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var view = options.view;

    if (view != _consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
      return;
    }

    var rootElement = options.rootElement;
    var url = _consts__WEBPACK_IMPORTED_MODULE_1__["default"].RSS_URL[options.lang];
    (0,_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])("GET", url, function (response) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(response, "text/xml");
      var newsItems = xmlDoc.querySelectorAll("item");
      var newsList = rootElement.getElementsByClassName("n21g21-news-list")[0];

      for (var i = 0; i < 2; i++) {
        var newsItemTitle = newsItems[i].querySelector("title");
        var newsItemLink = newsItems[i].querySelector("link");
        var newsItem = (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
          "class": "n21g21-news-list-item",
          "href": newsItemLink.textContent
        }, newsItemTitle.textContent);
        newsList.append(newsItem);
      }
    });
  }
});

/***/ }),

/***/ "./src/webMoneyFooter/extensions/nextUntil.js":
/*!****************************************************!*\
  !*** ./src/webMoneyFooter/extensions/nextUntil.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elem, selector, filter) {
  var siblings = [];
  elem = elem.nextElementSibling;

  while (elem) {
    if (elem.matches(selector)) break;

    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling;
      continue;
    }

    siblings.push(elem);
    elem = elem.nextElementSibling;
  }

  return siblings;
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyFooter/webMoneyFooter.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyFooter/webMoneyFooter.scss ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff2 */ "./src/webMoneyFooter/fonts/Manrope-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff */ "./src/webMoneyFooter/fonts/Manrope-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff2 */ "./src/webMoneyFooter/fonts/Manrope-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff */ "./src/webMoneyFooter/fonts/Manrope-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff2 */ "./src/webMoneyFooter/fonts/Manrope-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff */ "./src/webMoneyFooter/fonts/Manrope-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! images/arrow-down.svg */ "./src/webMoneyFooter/images/arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! images/flags/ru.svg */ "./src/webMoneyFooter/images/flags/ru.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! images/flags/en.svg */ "./src/webMoneyFooter/images/flags/en.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! images/flags/es.svg */ "./src/webMoneyFooter/images/flags/es.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! images/flags/pt.svg */ "./src/webMoneyFooter/images/flags/pt.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! images/flags/tr.svg */ "./src/webMoneyFooter/images/flags/tr.svg"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap; }\n\n.n9g {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .n9g * {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n    background-color: transparent;\n    text-decoration: none; }\n    .n9g *:hover, .n9g *:active {\n      outline: none; }\n  .n9g a {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .n9g img {\n    border-style: none; }\n  .n9g-ctr {\n    width: 100%;\n    min-width: 320px;\n    max-width: 960px;\n    padding: 0 16px;\n    margin: 0 auto; }\n    @media (min-width: 992px) {\n      .n9g-ctr {\n        padding: 0; } }\n  .n9g-bnr {\n    margin-bottom: 24px; }\n    .n9g-bnr img {\n      display: block;\n      max-width: 100%;\n      border-radius: 8px; }\n  .n9g-ln {\n    box-shadow: 0px 0px 0px 1px #eee;\n    padding: 16px 0 8px; }\n    @media (min-width: 768px) {\n      .n9g-ln {\n        padding: 0; } }\n    .n9g-lnf {\n      flex-wrap: wrap;\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n  .n9g-ll {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n    @media (min-width: 360px) {\n      .n9g-ll {\n        justify-content: space-between;\n        width: 100%; } }\n    @media (min-width: 576px) {\n      .n9g-ll {\n        width: auto;\n        justify-content: flex-start; } }\n    .n9g-lll {\n      color: #101828;\n      font-family: \"Manrope\", sans-serif;\n      font-weight: 600;\n      font-size: 14px;\n      line-height: 32px;\n      cursor: pointer;\n      transition: all 0.2s;\n      display: block;\n      margin-right: 8px; }\n      @media (min-width: 360px) {\n        .n9g-lll {\n          margin-right: 0; } }\n      @media (min-width: 576px) {\n        .n9g-lll {\n          margin-right: 16px; } }\n      @media (min-width: 768px) {\n        .n9g-lll {\n          padding: 16px 0;\n          margin-right: 32px; } }\n      .n9g-lll:hover {\n        color: #006cb4; }\n  .n9g-lr {\n    display: flex;\n    padding: 16px 0;\n    flex: 1;\n    justify-content: center; }\n    @media (min-width: 576px) {\n      .n9g-lr {\n        flex: auto;\n        justify-content: flex-end; } }\n    .n9g-lrl {\n      display: block;\n      width: 32px;\n      height: 32px;\n      background-color: #9fb1bd;\n      border-radius: 4px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      transition: all 0.2s;\n      margin-right: 16px; }\n      @media (min-width: 576px) {\n        .n9g-lrl {\n          width: 20px;\n          height: 20px; } }\n      .n9g-lrl:last-child {\n        margin-right: 0; }\n      .n9g-lrl--tw:hover {\n        background-color: #2DAAE1; }\n      .n9g-lrl--vk:hover {\n        background-color: #0077FF; }\n      .n9g-lrl--od:hover {\n        background-color: #F7931E; }\n      .n9g-lrl--yt:hover {\n        background-color: #FF0000; }\n      .n9g-lrl--tg:hover {\n        background-color: #2AABEE; }\n      .n9g-lrl--fb:hover {\n        background-color: #1877F2; }\n      .n9g-lrl--im:hover {\n        background-color: #e9378a; }\n  .n9g-lri {\n    width: 32px;\n    height: 32px; }\n    @media (min-width: 576px) {\n      .n9g-lri {\n        width: 20px;\n        height: 20px; } }\n  .n9g-mdl {\n    padding: 24px 0 0; }\n  .n9g-rw {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 -16px; }\n  .n9g-cln {\n    width: 100%;\n    margin-bottom: 16px;\n    padding: 0 16px; }\n    @media (min-width: 576px) {\n      .n9g-cln {\n        width: 50%;\n        margin-bottom: 24px; } }\n    @media (min-width: 768px) {\n      .n9g-cln {\n        width: 25%;\n        margin-bottom: 40px; } }\n    .n9g-cln--x2 {\n      width: 100%; }\n      @media (min-width: 768px) {\n        .n9g-cln--x2 {\n          width: 50%; } }\n  .n9g-mtl {\n    color: #101828;\n    font-family: \"Manrope\", sans-serif;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 4px 0;\n    font-weight: 600;\n    cursor: default;\n    margin-bottom: 4px; }\n    @media (min-width: 768px) {\n      .n9g-mtl {\n        margin-bottom: 12px; } }\n  .n9g-mlk {\n    color: #838a8e;\n    font-family: \"Manrope\", sans-serif;\n    font-size: 12px;\n    line-height: 16px;\n    padding: 4px 8px 4px 0;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.2s;\n    display: inline-flex; }\n    @media (min-width: 768px) {\n      .n9g-mlk {\n        display: block;\n        padding: 4px 0; } }\n    .n9g-mlk:hover {\n      color: #006cb4; }\n  .n9g-aps {\n    display: flex;\n    flex-wrap: wrap; }\n    @media (min-width: 768px) {\n      .n9g-aps {\n        margin-bottom: 16px; } }\n  .n9g-ait {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    flex-wrap: wrap; }\n    @media (min-width: 496px) {\n      .n9g-ait {\n        width: 33.333333%;\n        flex-wrap: nowrap; } }\n  .n9g-aim {\n    border: 1px solid #eeeeee;\n    border-radius: 24px;\n    width: 48px;\n    height: 48px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    margin-right: 12px; }\n  .n9g-aig {\n    display: block;\n    max-width: 100%; }\n  .n9g-atx {\n    font-family: \"Manrope\", sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n    color: #101828;\n    margin-right: 8px;\n    width: calc(100% - 68px); }\n  .n9g-brw {\n    border-top: 1px solid #d9d9d9;\n    padding: 24px 0 48px; }\n  .n9g-btp {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 32px; }\n    @media (min-width: 768px) {\n      .n9g-btp {\n        margin-bottom: 24px; } }\n  .n9g-bbp {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse; }\n    @media (min-width: 768px) {\n      .n9g-bbp {\n        flex-direction: row; } }\n  .n9g-cprt {\n    font-family: \"Manrope\", sans-serif;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 16px;\n    color: #babcbf;\n    max-width: 124px; }\n  .n9g-lngs {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center; }\n  .n9g-ctx {\n    font-family: \"Manrope\", sans-serif;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 16px;\n    color: #babcbf;\n    max-width: 476px;\n    margin-bottom: 32px; }\n    @media (min-width: 768px) {\n      .n9g-ctx {\n        text-align: right;\n        margin-bottom: 0; } }\n  .n9g-lgc {\n    font-family: \"Manrope\", sans-serif;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 16px;\n    color: #babcbf;\n    padding: 8px 16px 8px 32px;\n    cursor: pointer;\n    position: relative;\n    text-indent: -9999px; }\n    @media (min-width: 576px) {\n      .n9g-lgc {\n        text-indent: 0;\n        padding: 8px 24px 8px 32px; } }\n    .n9g-lgc:after {\n      content: \"\";\n      display: block;\n      width: 16px;\n      height: 16px;\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center center no-repeat;\n      position: absolute;\n      right: 0;\n      top: 50%;\n      margin-top: -8px;\n      opacity: 0.3;\n      background-size: 16px; }\n  .n9g-lgl {\n    display: none; }\n  .n9g-lgsl {\n    position: relative; }\n    .n9g-lgsl.is-activated .n9g-lgc:after {\n      transform: rotate(-180deg); }\n    .n9g-lgsl.is-activated .n9g-lgl {\n      position: absolute;\n      display: block;\n      bottom: 100%;\n      background-color: #fff;\n      border: 1px solid #d9d9d9;\n      border-radius: 4px;\n      right: 0;\n      box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);\n      width: 104px;\n      padding: 8px 0;\n      margin-bottom: 6px; }\n      .n9g-lgsl.is-activated .n9g-lgl:after, .n9g-lgsl.is-activated .n9g-lgl:before {\n        top: 100%;\n        left: 66px;\n        border: solid transparent;\n        content: \"\";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none; }\n        @media (min-width: 576px) {\n          .n9g-lgsl.is-activated .n9g-lgl:after, .n9g-lgsl.is-activated .n9g-lgl:before {\n            left: 16px; } }\n      .n9g-lgsl.is-activated .n9g-lgl:after {\n        border-color: rgba(255, 255, 255, 0);\n        border-top-color: #fff;\n        border-width: 6px;\n        margin-left: -6px; }\n      .n9g-lgsl.is-activated .n9g-lgl:before {\n        border-color: rgba(217, 217, 217, 0);\n        border-top-color: #d9d9d9;\n        border-width: 7px;\n        margin-left: -7px; }\n  .n9g-fru {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-fen {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-fes {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-fpt {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-ftr {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-fvn {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") left center no-repeat;\n    background-size: 24px; }\n  .n9g-lgi {\n    padding: 0 8px 0 40px;\n    font-family: \"Manrope\", sans-serif;\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 24px;\n    color: #838a8e;\n    cursor: pointer;\n    background-position-x: 8px;\n    display: block; }\n    .n9g-lgi:hover {\n      color: #006cb4; }\n", "",{"version":3,"sources":["webpack://./src/webMoneyFooter/webMoneyFooter.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,oHACmD;EACnD,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHACkD;EAClD,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHACiD;EACjD,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAiCpB;EApBE,SAAS;EACT,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,sBAAsB,EAAA;EAgBxB;IApBE,SAAS;IACT,UAAU;IACV,SAAS;IACT,wBAAwB;IACxB,sBAAsB;IAItB,6BAA6B;IAC7B,qBAAqB,EAAA;IACrB;MAEE,aAAa,EAAA;EAQjB;IA7BE,2BAA2B;IAC3B,yBAAyB;IACzB,wBAAwB;IACxB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB,EAAA;EAwBnB;IAHE,kBAAkB,EAAA;EAelB;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,cAAc,EAAA;IACd;MANF;QAOI,UAAU,EAAA,EAEb;EACD;IACE,mBAAmB,EAAA;IADpB;MAGG,cAAc;MACd,eAAe;MACf,kBAAkB,EAAA;EAGtB;IACE,gCAAgC;IAChC,mBAAmB,EAAA;IACnB;MAHF;QAII,UAAU,EAAA,EAQb;IANC;MACE,eAAe;MACf,aAAa;MACb,mBAAmB;MACnB,8BAA8B,EAAA;EAGlC;IACE,aAAa;IACb,eAAe;IACf,uBAAuB,EAAA;IACvB;MAJF;QAKI,8BAA8B;QAC9B,WAAW,EAAA,EA8Bd;IA5BC;MARF;QASI,WAAW;QACX,2BAA2B,EAAA,EA0B9B;IAxBC;MACE,cAAc;MACd,kCAAkC;MAClC,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,eAAe;MACf,oBAAoB;MACpB,cAAc;MACd,iBAAiB,EAAA;MACjB;QAVF;UAWI,eAAe,EAAA,EAYlB;MAVC;QAbF;UAcI,kBAAkB,EAAA,EASrB;MAPC;QAhBF;UAiBI,eAAe;UACf,kBAAkB,EAAA,EAKrB;MAvBA;QAqBG,cAAc,EAAA;EAIpB;IACE,aAAa;IACb,eAAe;IACf,OAAO;IACP,uBAAuB,EAAA;IACvB;MALF;QAMI,UAAU;QACV,yBAAyB,EAAA,EAyD5B;IAvDC;MACE,cAAc;MACd,WAAW;MACX,YAAY;MACZ,yBAAyB;MACzB,kBAAkB;MAClB,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,eAAe;MACf,oBAAoB;MACpB,kBAAkB,EAAA;MAClB;QAZF;UAaI,WAAW;UACX,YAAY,EAAA,EAwCf;MAtDA;QAiBG,eAAe,EAAA;MAEhB;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;MAG5B;QAEG,yBAAyB,EAAA;EAKjC;IACE,WAAW;IACX,YAAY,EAAA;IACZ;MAHF;QAII,WAAW;QACX,YAAY,EAAA,EAEf;EACD;IACE,iBAAiB,EAAA;EAEnB;IACE,aAAa;IACb,eAAe;IACf,eAAe,EAAA;EAEjB;IACE,WAAW;IACX,mBAAmB;IACnB,eAAe,EAAA;IACf;MAJF;QAKI,UAAU;QACV,mBAAmB,EAAA,EAYtB;IAVC;MARF;QASI,UAAU;QACV,mBAAmB,EAAA,EAQtB;IANC;MACE,WAAW,EAAA;MACX;QAFF;UAGI,UAAU,EAAA,EAEb;EAEH;IACE,cAAc;IACd,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,kBAAkB,EAAA;IAClB;MATF;QAUI,mBAAmB,EAAA,EAEtB;EACD;IACE,cAAc;IACd,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,oBAAoB,EAAA;IACpB;MAVF;QAWI,cAAc;QACd,cAAc,EAAA,EAKjB;IAjBA;MAeG,cAAc,EAAA;EAGlB;IACE,aAAa;IACb,eAAe,EAAA;IACf;MAHF;QAII,mBAAmB,EAAA,EAEtB;EACD;IACE,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe,EAAA;IACf;MANF;QAOI,iBAAiB;QACjB,iBAAiB,EAAA,EAEpB;EACD;IACE,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,kBAAkB,EAAA;EAEpB;IACE,cAAc;IACd,eAAe,EAAA;EAEjB;IACE,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,wBAAwB,EAAA;EAE1B;IACE,6BAA6B;IAC7B,oBAAoB,EAAA;EAEtB;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB,EAAA;IACnB;MAJF;QAKI,mBAAmB,EAAA,EAEtB;EACD;IACE,aAAa;IACb,8BAA8B;IAC9B,8BAA8B,EAAA;IAC9B;MAJF;QAKI,mBAAmB,EAAA,EAEtB;EACD;IACE,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,gBAAgB,EAAA;EAElB;IACE,aAAa;IACb,yBAAyB;IACzB,mBAAmB,EAAA;EAErB;IACE,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,mBAAmB,EAAA;IACnB;MARF;QASI,iBAAiB;QACjB,gBAAgB,EAAA,EAEnB;EACD;IACE,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,oBAAoB,EAAA;IACpB;MAVF;QAWI,cAAc;QACd,0BAA0B,EAAA,EAgB7B;IA5BA;MAeG,WAAW;MACX,cAAc;MACd,WAAW;MACX,YAAY;MACZ,uFACW;MACX,kBAAkB;MAClB,QAAQ;MACR,QAAQ;MACR,gBAAgB;MAChB,YAAY;MACZ,qBAAqB,EAAA;EAGzB;IACE,aAAa,EAAA;EAEf;IACE,kBAAkB,EAAA;IADnB;MAKO,0BAA0B,EAAA;IALjC;MASK,kBAAkB;MAClB,cAAc;MACd,YAAY;MACZ,sBAAsB;MACtB,yBAAyB;MACzB,kBAAkB;MAClB,QAAQ;MACR,wCAAwC;MACxC,YAAY;MACZ,cAAc;MACd,kBAAkB,EAAA;MAnBvB;QAsBO,SAAS;QACT,UAAU;QACV,yBAAyB;QACzB,WAAW;QACX,SAAS;QACT,QAAQ;QACR,kBAAkB;QAClB,oBAAoB,EAAA;QACpB;UA9BP;YA+BS,UAAU,EAAA,EAEb;MAjCN;QAoCO,oCAAoC;QACpC,sBAAsB;QACtB,iBAAiB;QACjB,iBAAiB,EAAA;MAvCxB;QA0CO,oCAAoC;QACpC,yBAAyB;QACzB,iBAAiB;QACjB,iBAAiB,EAAA;EAKzB;IACE,qFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,qFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,qFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,sFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,sFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,qFAAwE;IACxE,qBAAqB,EAAA;EAEvB;IACE,qBAAqB;IACrB,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,0BAA0B;IAC1B,cAAc,EAAA;IATf;MAWG,cAAc,EAAA","sourcesContent":["@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-SemiBold.woff2\") format(\"woff2\"),\r\n    url(\"fonts/Manrope-SemiBold.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Regular.woff2\") format(\"woff2\"),\r\n    url(\"fonts/Manrope-Regular.woff\") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Medium.woff2\") format(\"woff2\"),\r\n    url(\"fonts/Manrope-Medium.woff\") format(\"woff\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@mixin noSelection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@mixin resetDiv {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  vertical-align: baseline;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin resetA {\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n  &:hover,\r\n  &:active {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n@mixin resetImg {\r\n  border-style: none;\r\n}\r\n\r\n.n9g {\r\n  @include resetDiv;\r\n  * {\r\n    @include resetDiv;\r\n    @include resetA;\r\n  }\r\n  a {\r\n    @include noSelection;\r\n  }\r\n  img {\r\n    @include resetImg;\r\n  }\r\n  &-ctr {\r\n    width: 100%;\r\n    min-width: 320px;\r\n    max-width: 960px;\r\n    padding: 0 16px;\r\n    margin: 0 auto;\r\n    @media (min-width: 992px) {\r\n      padding: 0;\r\n    }\r\n  }\r\n  &-bnr {\r\n    margin-bottom: 24px;\r\n    img {\r\n      display: block;\r\n      max-width: 100%;\r\n      border-radius: 8px;\r\n    }\r\n  }\r\n  &-ln {\r\n    box-shadow: 0px 0px 0px 1px #eee;\r\n    padding: 16px 0 8px;\r\n    @media (min-width: 768px) {\r\n      padding: 0;\r\n    }\r\n    &f {\r\n      flex-wrap: wrap;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n  &-ll {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    @media (min-width: 360px) {\r\n      justify-content: space-between;\r\n      width: 100%;\r\n    }\r\n    @media (min-width: 576px) {\r\n      width: auto;\r\n      justify-content: flex-start;\r\n    }\r\n    &l {\r\n      color: #101828;\r\n      font-family: \"Manrope\", sans-serif;\r\n      font-weight: 600;\r\n      font-size: 14px;\r\n      line-height: 32px;\r\n      cursor: pointer;\r\n      transition: all 0.2s;\r\n      display: block;\r\n      margin-right: 8px;\r\n      @media (min-width: 360px) {\r\n        margin-right: 0;\r\n      }\r\n      @media (min-width: 576px) {\r\n        margin-right: 16px;\r\n      }\r\n      @media (min-width: 768px) {\r\n        padding: 16px 0;\r\n        margin-right: 32px;\r\n      }\r\n      &:hover {\r\n        color: #006cb4;\r\n      }\r\n    }\r\n  }\r\n  &-lr {\r\n    display: flex;\r\n    padding: 16px 0;\r\n    flex: 1;\r\n    justify-content: center;\r\n    @media (min-width: 576px) {\r\n      flex: auto;\r\n      justify-content: flex-end;\r\n    }\r\n    &l {\r\n      display: block;\r\n      width: 32px;\r\n      height: 32px;\r\n      background-color: #9fb1bd;\r\n      border-radius: 4px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      cursor: pointer;\r\n      transition: all 0.2s;\r\n      margin-right: 16px;\r\n      @media (min-width: 576px) {\r\n        width: 20px;\r\n        height: 20px;\r\n      }\r\n      &:last-child {\r\n        margin-right: 0;\r\n      }\r\n      &--tw {\r\n        &:hover {\r\n          background-color: #2DAAE1;\r\n        }\r\n      }\r\n      &--vk {\r\n        &:hover {\r\n          background-color: #0077FF;\r\n        }\r\n      }\r\n      &--od {\r\n        &:hover {\r\n          background-color: #F7931E;\r\n        }\r\n      }\r\n      &--yt {\r\n        &:hover {\r\n          background-color: #FF0000;\r\n        }\r\n      }\r\n      &--tg {\r\n        &:hover {\r\n          background-color: #2AABEE;\r\n        }\r\n      }\r\n      &--fb {\r\n        &:hover {\r\n          background-color: #1877F2;\r\n        }\r\n      }\r\n      &--im {\r\n        &:hover {\r\n          background-color: #e9378a; \r\n        }\r\n      }\r\n    }\r\n  }\r\n  &-lri {\r\n    width: 32px;\r\n    height: 32px;\r\n    @media (min-width: 576px) {\r\n      width: 20px;\r\n      height: 20px;\r\n    }\r\n  }\r\n  &-mdl {\r\n    padding: 24px 0 0;\r\n  }\r\n  &-rw {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 -16px;\r\n  }\r\n  &-cln {\r\n    width: 100%;\r\n    margin-bottom: 16px;\r\n    padding: 0 16px;\r\n    @media (min-width: 576px) {\r\n      width: 50%;\r\n      margin-bottom: 24px;\r\n    }\r\n    @media (min-width: 768px) {\r\n      width: 25%;\r\n      margin-bottom: 40px;\r\n    }\r\n    &--x2 {\r\n      width: 100%;\r\n      @media (min-width: 768px) {\r\n        width: 50%;\r\n      }\r\n    }\r\n  }\r\n  &-mtl {\r\n    color: #101828;\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 4px 0;\r\n    font-weight: 600;\r\n    cursor: default;\r\n    margin-bottom: 4px;\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 12px;\r\n    }\r\n  }\r\n  &-mlk {\r\n    color: #838a8e;\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    padding: 4px 8px 4px 0;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n    display: inline-flex;\r\n    @media (min-width: 768px) {\r\n      display: block;\r\n      padding: 4px 0;\r\n    }\r\n    &:hover {\r\n      color: #006cb4;\r\n    }\r\n  }\r\n  &-aps {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 16px;\r\n    }\r\n  }\r\n  &-ait {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 16px;\r\n    flex-wrap: wrap;\r\n    @media (min-width: 496px) {\r\n      width: 33.333333%;\r\n      flex-wrap: nowrap;\r\n    }\r\n  }\r\n  &-aim {\r\n    border: 1px solid #eeeeee;\r\n    border-radius: 24px;\r\n    width: 48px;\r\n    height: 48px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    margin-right: 12px;\r\n  }\r\n  &-aig {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  &-atx {\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    color: #101828;\r\n    margin-right: 8px;\r\n    width: calc(100% - 68px);\r\n  }\r\n  &-brw {\r\n    border-top: 1px solid #d9d9d9;\r\n    padding: 24px 0 48px;\r\n  }\r\n  &-btp {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 32px;\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 24px;\r\n    }\r\n  }\r\n  &-bbp {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column-reverse;\r\n    @media (min-width: 768px) {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n  &-cprt {\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    color: #babcbf;\r\n    max-width: 124px;\r\n  }\r\n  &-lngs {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n  }\r\n  &-ctx {\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    color: #babcbf;\r\n    max-width: 476px;\r\n    margin-bottom: 32px;\r\n    @media (min-width: 768px) {\r\n      text-align: right;\r\n      margin-bottom: 0;\r\n    }\r\n  }\r\n  &-lgc {\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    color: #babcbf;\r\n    padding: 8px 16px 8px 32px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    text-indent: -9999px;\r\n    @media (min-width: 576px) {\r\n      text-indent: 0;\r\n      padding: 8px 24px 8px 32px;\r\n    }\r\n    &:after {\r\n      content: \"\";\r\n      display: block;\r\n      width: 16px;\r\n      height: 16px;\r\n      background: transparent url(\"images/arrow-down.svg\") center center\r\n        no-repeat;\r\n      position: absolute;\r\n      right: 0;\r\n      top: 50%;\r\n      margin-top: -8px;\r\n      opacity: 0.3;\r\n      background-size: 16px;\r\n    }\r\n  }\r\n  &-lgl {\r\n    display: none;\r\n  }\r\n  &-lgsl {\r\n    position: relative;\r\n    &.is-activated{\r\n      .n9g-lgc{\r\n        &:after {\r\n          transform: rotate(-180deg);\r\n        }\r\n      }\r\n      .n9g-lgl {\r\n        position: absolute;\r\n        display: block;\r\n        bottom: 100%;\r\n        background-color: #fff;\r\n        border: 1px solid #d9d9d9;\r\n        border-radius: 4px;\r\n        right: 0;\r\n        box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);\r\n        width: 104px;\r\n        padding: 8px 0;\r\n        margin-bottom: 6px;\r\n        &:after,\r\n        &:before {\r\n          top: 100%;\r\n          left: 66px;\r\n          border: solid transparent;\r\n          content: \"\";\r\n          height: 0;\r\n          width: 0;\r\n          position: absolute;\r\n          pointer-events: none;\r\n          @media (min-width: 576px) {\r\n            left: 16px;\r\n          }\r\n        }\r\n  \r\n        &:after {\r\n          border-color: rgba(255, 255, 255, 0);\r\n          border-top-color: #fff;\r\n          border-width: 6px;\r\n          margin-left: -6px;\r\n        }\r\n        &:before {\r\n          border-color: rgba(217, 217, 217, 0);\r\n          border-top-color: #d9d9d9;\r\n          border-width: 7px;\r\n          margin-left: -7px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &-fru {\r\n    background: transparent url(\"images/flags/ru.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-fen {\r\n    background: transparent url(\"images/flags/en.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-fes {\r\n    background: transparent url(\"images/flags/es.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-fpt {\r\n    background: transparent url(\"images/flags/pt.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-ftr {\r\n    background: transparent url(\"images/flags/tr.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-fvn {\r\n    background: transparent url(\"images/flags/ru.svg\") left center no-repeat;\r\n    background-size: 24px;\r\n  }\r\n  &-lgi {\r\n    padding: 0 8px 0 40px;\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    color: #838a8e;\r\n    cursor: pointer;\r\n    background-position-x: 8px;\r\n    display: block;\r\n    &:hover {\r\n      color: #006cb4;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webMoneyFooter/webMoneyFooter.scss":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/webMoneyFooter.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyFooter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./webMoneyFooter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyFooter/webMoneyFooter.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/webMoneyFooter/fonts/Manrope-Medium.woff":
/*!******************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-Medium.woff ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "455e3f5bb2cbb93667d5.woff";

/***/ }),

/***/ "./src/webMoneyFooter/fonts/Manrope-Medium.woff2":
/*!*******************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-Medium.woff2 ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "230210f79765501c1ab7.woff2";

/***/ }),

/***/ "./src/webMoneyFooter/fonts/Manrope-Regular.woff":
/*!*******************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-Regular.woff ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d1384c3221d6bf5c6f29.woff";

/***/ }),

/***/ "./src/webMoneyFooter/fonts/Manrope-Regular.woff2":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-Regular.woff2 ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "15e344c414d52dd672ef.woff2";

/***/ }),

/***/ "./src/webMoneyFooter/fonts/Manrope-SemiBold.woff":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-SemiBold.woff ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a716e35a52599b8145e4.woff";

/***/ }),

/***/ "./src/webMoneyFooter/fonts/Manrope-SemiBold.woff2":
/*!*********************************************************!*\
  !*** ./src/webMoneyFooter/fonts/Manrope-SemiBold.woff2 ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "45721b3429a1fa90f750.woff2";

/***/ }),

/***/ "./src/webMoneyFooter/images/apps/app-store.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyFooter/images/apps/app-store.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e00d9fabc49dc32edce8.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/apps/google-play.svg":
/*!********************************************************!*\
  !*** ./src/webMoneyFooter/images/apps/google-play.svg ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "81afd1f6c7bf04561db0.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/apps/os-x.svg":
/*!*************************************************!*\
  !*** ./src/webMoneyFooter/images/apps/os-x.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8fcb237aacf3732cf9b2.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/apps/windows-store.svg":
/*!**********************************************************!*\
  !*** ./src/webMoneyFooter/images/apps/windows-store.svg ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7615cdb91ac9662e2cdd.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/apps/windows.svg":
/*!****************************************************!*\
  !*** ./src/webMoneyFooter/images/apps/windows.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a7742a8e414550662f63.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/arrow-down.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/arrow-down.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a9de67558370894eebf0.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/flags/en.svg":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/images/flags/en.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a23705c94819c084d370.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/flags/es.svg":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/images/flags/es.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f4d29e84560edff60378.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/flags/pt.svg":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/images/flags/pt.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "58f6ae1664f94be6b21c.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/flags/ru.svg":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/images/flags/ru.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "01e419f5282a54592a6c.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/flags/tr.svg":
/*!************************************************!*\
  !*** ./src/webMoneyFooter/images/flags/tr.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "232db61bab2893a71793.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/logo.svg":
/*!********************************************!*\
  !*** ./src/webMoneyFooter/images/logo.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "dc873ed6601bcb256b44.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/fb.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/fb.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "450203015dfc336b3a7d.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/im.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/im.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "43daa14110bb9b92103d.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/od.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/od.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b1438de59e003caa039c.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/tg.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/tg.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ce95aab2966f7e9b6325.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/tw.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/tw.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "30df8923c0d29f15b0e8.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/vk.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/vk.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "11ecf5435c4366d5693f.svg";

/***/ }),

/***/ "./src/webMoneyFooter/images/socials/yt.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyFooter/images/socials/yt.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "be782360e9be361b6cc2.svg";

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
/******/ 			"webmoney-footer": 0
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
  !*** ./src/webMoneyFooter/webMoneyFooter.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebMoneyFooter; }
/* harmony export */ });
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-closest-polyfill */ "./node_modules/element-closest-polyfill/index.js");
/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_closest_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extensions_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/consts */ "./src/webMoneyFooter/extensions/consts.js");
/* harmony import */ var _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/htmlGenerator */ "./src/webMoneyFooter/extensions/htmlGenerator.js");
/* harmony import */ var _extensions_illiciumAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/illiciumAsync */ "./src/webMoneyFooter/extensions/illiciumAsync.js");
/* harmony import */ var _extensions_langSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/langSelector */ "./src/webMoneyFooter/extensions/langSelector.js");
/* harmony import */ var _extensions_mobileBlockMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extensions/mobileBlockMenu */ "./src/webMoneyFooter/extensions/mobileBlockMenu.js");
/* harmony import */ var _extensions_mobileBlockNewsLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensions/mobileBlockNewsLinks */ "./src/webMoneyFooter/extensions/mobileBlockNewsLinks.js");
 // IE 11 не поддерживает конструктор URL, который использует webpack 5.

 // IE 11 не поддерживает closest.








__webpack_require__(/*! ./webMoneyFooter.scss */ "./src/webMoneyFooter/webMoneyFooter.scss");

function WebMoneyFooter() {
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
    var supportedLangs = this.tryParseSupportedLangs(options, lang);
    var illiciumPlaceId = options.illiciumPlaceId == "" || options.illiciumPlaceId == null ? null : options.illiciumPlaceId;
    var illiciumView = this.tryParseIlliciumView(options);
    var fastMenu = this.tryParseFastMenu(options);
    var onChangeLang = this.tryParseOnChangeLang(options);
    options = {
      rootElement: rootElement,
      testMode: testMode,
      domainType: domainType,
      view: view,
      lang: lang,
      supportedLangs: supportedLangs,
      illiciumPlaceId: illiciumPlaceId,
      illiciumView: illiciumView,
      fastMenu: fastMenu,
      onChangeLang: onChangeLang
    };

    if (options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_ADAPTIVE) {
      this.initAdaptive(options);
    } else {
      this.initNotAdaptive(options);
    }
  };

  this.initNotAdaptive = function (options) {
    var generatedElement = _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_3__["default"].generate(options);
    options.rootElement.innerHTML = "";
    options.rootElement.appendChild(generatedElement);
    _extensions_langSelector__WEBPACK_IMPORTED_MODULE_5__["default"].init(options);
    _extensions_mobileBlockNewsLinks__WEBPACK_IMPORTED_MODULE_7__["default"].init(options);
    _extensions_mobileBlockMenu__WEBPACK_IMPORTED_MODULE_6__["default"].init(options);
    _extensions_illiciumAsync__WEBPACK_IMPORTED_MODULE_4__["default"].init(options);
  };

  this.initAdaptive = function (options) {
    var desktopMinClientWidth = 960;

    if (document.documentElement.clientWidth < desktopMinClientWidth) {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_MOBILE;
      this.initNotAdaptive(options);
    } else {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_DESKTOP;
      this.initNotAdaptive(options);
    }

    var context = this;
    window.addEventListener("resize", function () {
      var clientWidth = document.documentElement.clientWidth;

      if (clientWidth < desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_DESKTOP) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_MOBILE;
        context.initNotAdaptive(options);
      } else if (clientWidth >= desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_MOBILE) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_DESKTOP;
        context.initNotAdaptive(options);
      }
    });
  };

  this.tryParseDomainType = function (options) {
    var domainType = options.domainType;

    if (domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_WMTRANSFER && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_MONEY && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_RU) {
      try {
        var hostname = window.location.hostname;

        if (hostname.indexOf("wmtransfer") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_WMTRANSFER;
        } else if (hostname.indexOf("ru") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_RU;
        } else {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_MONEY;
        }
      } catch (_unused) {
        domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].DOMAIN_TYPE_MONEY;
      }
    }

    return domainType;
  };

  this.tryParseView = function (options) {
    var view = options.view;

    if (view != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_DESKTOP && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_MOBILE && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_ADAPTIVE) {
      view = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_ADAPTIVE;
    }

    return view;
  };

  this.tryParseLang = function (options) {
    var lang = options.lang;

    if (lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_RU && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_EN && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_ES && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_PT && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_TR && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_VN) {
      lang = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_EN;
    }

    return lang;
  };

  this.tryParseSupportedLangs = function (options, lang) {
    var supportedLangs = [];

    if (options.supportedLangs != null) {
      supportedLangs = options.supportedLangs.filter(function (supportedLangItem) {
        if (supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_RU && supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_EN && supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_ES && supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_PT && supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_TR && supportedLangItem != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].LANG_VN) {
          return false;
        }

        return true;
      });
    }

    supportedLangs.push(lang);
    supportedLangs = supportedLangs.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });
    return supportedLangs;
  };

  this.tryParseIlliciumView = function (options) {
    var illiciumView = options.illiciumView;

    if (illiciumView != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].ILLICIUM_VIEW_TOP && illiciumView != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].ILLICIUM_VIEW_BOTTOM) {
      illiciumView = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].ILLICIUM_VIEW_BOTTOM;
    }

    return illiciumView;
  };

  this.tryParseFastMenu = function (options) {
    var fastMenu = options.fastMenu;

    if (fastMenu != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].FASTMENU_VISIBLE && fastMenu != _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].FASTMENU_HIDDEN) {
      fastMenu = _extensions_consts__WEBPACK_IMPORTED_MODULE_2__["default"].FASTMENU_VISIBLE;
    }

    return fastMenu;
  };

  this.tryParseOnChangeLang = function (options) {
    var onChangeLang = options.onChangeLang;

    if (typeof onChangeLang != "function") {
      onChangeLang = function onChangeLang(lang) {};
    }

    var onChangeLangWrapper = function onChangeLangWrapper(lang) {
      try {
        onChangeLang(lang);
      } catch (error) {
        console.log(error);
      }
    };

    return onChangeLangWrapper;
  };
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=webmoney-footer.js.map