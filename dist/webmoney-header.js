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

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

module.exports = ansiHTML; // Reference to https://github.com/sindresorhus/ansi-regex

var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var _defColors = {
  reset: ['fff', '000'],
  // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
};
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
};
var _openTags = {
  '1': 'font-weight:bold',
  // bold
  '2': 'opacity:0.5',
  // dim
  '3': '<i>',
  // italic
  '4': '<u>',
  // underscore
  '8': 'display:none',
  // hidden
  '9': '<del>' // delete

};
var _closeTags = {
  '23': '</i>',
  // reset italic
  '24': '</u>',
  // reset underscore
  '29': '</del>' // reset delete

};
[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */

function ansiHTML(text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text;
  } // Cache opened sequence.


  var ansiCodes = []; // Replace with markup.

  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq];

    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) {
        // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop();
        return '</span>';
      } // Open tag.


      ansiCodes.push(seq);
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
    }

    var ct = _closeTags[seq];

    if (ct) {
      // Pop sequence
      ansiCodes.pop();
      return ct;
    }

    return '';
  }); // Make sure tags are closed.

  var l = ansiCodes.length;
  l > 0 && (ret += Array(l + 1).join('</span>'));
  return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */


ansiHTML.setColors = function (colors) {
  if (_typeof(colors) !== 'object') {
    throw new Error('`colors` parameter must be an Object.');
  }

  var _finalColors = {};

  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null;

    if (!hex) {
      _finalColors[key] = _defColors[key];
      continue;
    }

    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex];
      }

      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string';
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
      }

      var defHexColor = _defColors[key];

      if (!hex[0]) {
        hex[0] = defHexColor[0];
      }

      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]];
        hex.push(defHexColor[1]);
      }

      hex = hex.slice(0, 2);
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
    }

    _finalColors[key] = hex;
  }

  _setTags(_finalColors);
};
/**
 * Reset colors.
 */


ansiHTML.reset = function () {
  _setTags(_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */


ansiHTML.tags = {};

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function get() {
      return _openTags;
    }
  });
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function get() {
      return _closeTags;
    }
  });
} else {
  ansiHTML.tags.open = _openTags;
  ansiHTML.tags.close = _closeTags;
}

function _setTags(colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]; // inverse

  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]; // dark grey

  _openTags['90'] = 'color:#' + colors.darkgrey;

  for (var code in _styles) {
    var color = _styles[code];
    var oriColor = colors[color] || '000';
    _openTags[code] = 'color:#' + oriColor;
    code = parseInt(code);
    _openTags[(code + 10).toString()] = 'background:#' + oriColor;
  }
}

ansiHTML.reset();

/***/ }),

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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      ReflectApply(listeners[i], this, args);
    }
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
  }
}

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");

var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");

var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");

var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
  all: named_references_1.namedReferences.html5
});

var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */

function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
      _c = _b.mode,
      mode = _c === void 0 ? 'specialChars' : _c,
      _d = _b.numeric,
      numeric = _d === void 0 ? 'decimal' : _d,
      _e = _b.level,
      level = _e === void 0 ? 'all' : _e;

  if (!text) {
    return '';
  }

  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  encodeRegExp.lastIndex = 0;

  var _b = encodeRegExp.exec(text);

  var _c;

  if (_b) {
    _c = '';
    var _d = 0;

    do {
      if (_d !== _b.index) {
        _c += text.substring(_d, _b.index);
      }

      var _e = _b[0];
      var result_1 = references[_e];

      if (!result_1) {
        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
      }

      _c += result_1;
      _d = _b.index + _e.length;
    } while (_b = encodeRegExp.exec(text));

    if (_d !== text.length) {
      _c += text.substring(_d);
    }
  } else {
    _c = text;
  }

  return _c;
}

exports.encode = encode;
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html5
  }
};

var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});

var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
/** Decodes a single entity */

function decodeEntity(entity, _a) {
  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
      level = _b === void 0 ? 'all' : _b;

  if (!entity) {
    return '';
  }

  var _b = entity;
  var decodeEntityLastChar_1 = entity[entity.length - 1];

  if (false) {} else if (false) {} else {
    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];

    if (decodeResultByReference_1) {
      _b = decodeResultByReference_1;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar_1 = entity[2];
      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
    }
  }

  return _b;
}

exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */

function decode(text, _a) {
  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
      decodeCode_1 = decodeSecondChar_1.level,
      level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,
      _b = decodeSecondChar_1.scope,
      scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;

  if (!text) {
    return '';
  }

  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  decodeRegExp.lastIndex = 0;
  var replaceMatch_1 = decodeRegExp.exec(text);
  var replaceResult_1;

  if (replaceMatch_1) {
    replaceResult_1 = '';
    var replaceLastIndex_1 = 0;

    do {
      if (replaceLastIndex_1 !== replaceMatch_1.index) {
        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
      }

      var replaceInput_1 = replaceMatch_1[0];
      var decodeResult_1 = replaceInput_1;
      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];

      if (isAttribute && decodeEntityLastChar_2 === '=') {
        decodeResult_1 = replaceInput_1;
      } else if (isStrict && decodeEntityLastChar_2 !== ';') {
        decodeResult_1 = replaceInput_1;
      } else {
        var decodeResultByReference_2 = references[replaceInput_1];

        if (decodeResultByReference_2) {
          decodeResult_1 = decodeResultByReference_2;
        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
          var decodeSecondChar_2 = replaceInput_1[2];
          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
        }
      }

      replaceResult_1 += decodeResult_1;
      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
    } while (replaceMatch_1 = decodeRegExp.exec(text));

    if (replaceLastIndex_1 !== text.length) {
      replaceResult_1 += text.substring(replaceLastIndex_1);
    }
  } else {
    replaceResult_1 = text;
  }

  return replaceResult_1;
}

exports.decode = decode;

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
exports.namedReferences = {
  xml: {
    entities: {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&"
    },
    characters: {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;"
    }
  },
  html4: {
    entities: {
      "&apos;": "'",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&cent": "¢",
      "&cent;": "¢",
      "&pound": "£",
      "&pound;": "£",
      "&curren": "¤",
      "&curren;": "¤",
      "&yen": "¥",
      "&yen;": "¥",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&sect": "§",
      "&sect;": "§",
      "&uml": "¨",
      "&uml;": "¨",
      "&copy": "©",
      "&copy;": "©",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&laquo": "«",
      "&laquo;": "«",
      "&not": "¬",
      "&not;": "¬",
      "&shy": "­",
      "&shy;": "­",
      "&reg": "®",
      "&reg;": "®",
      "&macr": "¯",
      "&macr;": "¯",
      "&deg": "°",
      "&deg;": "°",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&acute": "´",
      "&acute;": "´",
      "&micro": "µ",
      "&micro;": "µ",
      "&para": "¶",
      "&para;": "¶",
      "&middot": "·",
      "&middot;": "·",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&ordm": "º",
      "&ordm;": "º",
      "&raquo": "»",
      "&raquo;": "»",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&times": "×",
      "&times;": "×",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&agrave": "à",
      "&agrave;": "à",
      "&aacute": "á",
      "&aacute;": "á",
      "&acirc": "â",
      "&acirc;": "â",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&aring": "å",
      "&aring;": "å",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&egrave": "è",
      "&egrave;": "è",
      "&eacute": "é",
      "&eacute;": "é",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&euml": "ë",
      "&euml;": "ë",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&iacute": "í",
      "&iacute;": "í",
      "&icirc": "î",
      "&icirc;": "î",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&eth": "ð",
      "&eth;": "ð",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&divide": "÷",
      "&divide;": "÷",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&quot": '"',
      "&quot;": '"',
      "&amp": "&",
      "&amp;": "&",
      "&lt": "<",
      "&lt;": "<",
      "&gt": ">",
      "&gt;": ">",
      "&OElig;": "Œ",
      "&oelig;": "œ",
      "&Scaron;": "Š",
      "&scaron;": "š",
      "&Yuml;": "Ÿ",
      "&circ;": "ˆ",
      "&tilde;": "˜",
      "&ensp;": " ",
      "&emsp;": " ",
      "&thinsp;": " ",
      "&zwnj;": "‌",
      "&zwj;": "‍",
      "&lrm;": "‎",
      "&rlm;": "‏",
      "&ndash;": "–",
      "&mdash;": "—",
      "&lsquo;": "‘",
      "&rsquo;": "’",
      "&sbquo;": "‚",
      "&ldquo;": "“",
      "&rdquo;": "”",
      "&bdquo;": "„",
      "&dagger;": "†",
      "&Dagger;": "‡",
      "&permil;": "‰",
      "&lsaquo;": "‹",
      "&rsaquo;": "›",
      "&euro;": "€",
      "&fnof;": "ƒ",
      "&Alpha;": "Α",
      "&Beta;": "Β",
      "&Gamma;": "Γ",
      "&Delta;": "Δ",
      "&Epsilon;": "Ε",
      "&Zeta;": "Ζ",
      "&Eta;": "Η",
      "&Theta;": "Θ",
      "&Iota;": "Ι",
      "&Kappa;": "Κ",
      "&Lambda;": "Λ",
      "&Mu;": "Μ",
      "&Nu;": "Ν",
      "&Xi;": "Ξ",
      "&Omicron;": "Ο",
      "&Pi;": "Π",
      "&Rho;": "Ρ",
      "&Sigma;": "Σ",
      "&Tau;": "Τ",
      "&Upsilon;": "Υ",
      "&Phi;": "Φ",
      "&Chi;": "Χ",
      "&Psi;": "Ψ",
      "&Omega;": "Ω",
      "&alpha;": "α",
      "&beta;": "β",
      "&gamma;": "γ",
      "&delta;": "δ",
      "&epsilon;": "ε",
      "&zeta;": "ζ",
      "&eta;": "η",
      "&theta;": "θ",
      "&iota;": "ι",
      "&kappa;": "κ",
      "&lambda;": "λ",
      "&mu;": "μ",
      "&nu;": "ν",
      "&xi;": "ξ",
      "&omicron;": "ο",
      "&pi;": "π",
      "&rho;": "ρ",
      "&sigmaf;": "ς",
      "&sigma;": "σ",
      "&tau;": "τ",
      "&upsilon;": "υ",
      "&phi;": "φ",
      "&chi;": "χ",
      "&psi;": "ψ",
      "&omega;": "ω",
      "&thetasym;": "ϑ",
      "&upsih;": "ϒ",
      "&piv;": "ϖ",
      "&bull;": "•",
      "&hellip;": "…",
      "&prime;": "′",
      "&Prime;": "″",
      "&oline;": "‾",
      "&frasl;": "⁄",
      "&weierp;": "℘",
      "&image;": "ℑ",
      "&real;": "ℜ",
      "&trade;": "™",
      "&alefsym;": "ℵ",
      "&larr;": "←",
      "&uarr;": "↑",
      "&rarr;": "→",
      "&darr;": "↓",
      "&harr;": "↔",
      "&crarr;": "↵",
      "&lArr;": "⇐",
      "&uArr;": "⇑",
      "&rArr;": "⇒",
      "&dArr;": "⇓",
      "&hArr;": "⇔",
      "&forall;": "∀",
      "&part;": "∂",
      "&exist;": "∃",
      "&empty;": "∅",
      "&nabla;": "∇",
      "&isin;": "∈",
      "&notin;": "∉",
      "&ni;": "∋",
      "&prod;": "∏",
      "&sum;": "∑",
      "&minus;": "−",
      "&lowast;": "∗",
      "&radic;": "√",
      "&prop;": "∝",
      "&infin;": "∞",
      "&ang;": "∠",
      "&and;": "∧",
      "&or;": "∨",
      "&cap;": "∩",
      "&cup;": "∪",
      "&int;": "∫",
      "&there4;": "∴",
      "&sim;": "∼",
      "&cong;": "≅",
      "&asymp;": "≈",
      "&ne;": "≠",
      "&equiv;": "≡",
      "&le;": "≤",
      "&ge;": "≥",
      "&sub;": "⊂",
      "&sup;": "⊃",
      "&nsub;": "⊄",
      "&sube;": "⊆",
      "&supe;": "⊇",
      "&oplus;": "⊕",
      "&otimes;": "⊗",
      "&perp;": "⊥",
      "&sdot;": "⋅",
      "&lceil;": "⌈",
      "&rceil;": "⌉",
      "&lfloor;": "⌊",
      "&rfloor;": "⌋",
      "&lang;": "〈",
      "&rang;": "〉",
      "&loz;": "◊",
      "&spades;": "♠",
      "&clubs;": "♣",
      "&hearts;": "♥",
      "&diams;": "♦"
    },
    characters: {
      "'": "&apos;",
      " ": "&nbsp;",
      "¡": "&iexcl;",
      "¢": "&cent;",
      "£": "&pound;",
      "¤": "&curren;",
      "¥": "&yen;",
      "¦": "&brvbar;",
      "§": "&sect;",
      "¨": "&uml;",
      "©": "&copy;",
      "ª": "&ordf;",
      "«": "&laquo;",
      "¬": "&not;",
      "­": "&shy;",
      "®": "&reg;",
      "¯": "&macr;",
      "°": "&deg;",
      "±": "&plusmn;",
      "²": "&sup2;",
      "³": "&sup3;",
      "´": "&acute;",
      "µ": "&micro;",
      "¶": "&para;",
      "·": "&middot;",
      "¸": "&cedil;",
      "¹": "&sup1;",
      "º": "&ordm;",
      "»": "&raquo;",
      "¼": "&frac14;",
      "½": "&frac12;",
      "¾": "&frac34;",
      "¿": "&iquest;",
      "À": "&Agrave;",
      "Á": "&Aacute;",
      "Â": "&Acirc;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "Å": "&Aring;",
      "Æ": "&AElig;",
      "Ç": "&Ccedil;",
      "È": "&Egrave;",
      "É": "&Eacute;",
      "Ê": "&Ecirc;",
      "Ë": "&Euml;",
      "Ì": "&Igrave;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "Ï": "&Iuml;",
      "Ð": "&ETH;",
      "Ñ": "&Ntilde;",
      "Ò": "&Ograve;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "Õ": "&Otilde;",
      "Ö": "&Ouml;",
      "×": "&times;",
      "Ø": "&Oslash;",
      "Ù": "&Ugrave;",
      "Ú": "&Uacute;",
      "Û": "&Ucirc;",
      "Ü": "&Uuml;",
      "Ý": "&Yacute;",
      "Þ": "&THORN;",
      "ß": "&szlig;",
      "à": "&agrave;",
      "á": "&aacute;",
      "â": "&acirc;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "å": "&aring;",
      "æ": "&aelig;",
      "ç": "&ccedil;",
      "è": "&egrave;",
      "é": "&eacute;",
      "ê": "&ecirc;",
      "ë": "&euml;",
      "ì": "&igrave;",
      "í": "&iacute;",
      "î": "&icirc;",
      "ï": "&iuml;",
      "ð": "&eth;",
      "ñ": "&ntilde;",
      "ò": "&ograve;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "õ": "&otilde;",
      "ö": "&ouml;",
      "÷": "&divide;",
      "ø": "&oslash;",
      "ù": "&ugrave;",
      "ú": "&uacute;",
      "û": "&ucirc;",
      "ü": "&uuml;",
      "ý": "&yacute;",
      "þ": "&thorn;",
      "ÿ": "&yuml;",
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "Œ": "&OElig;",
      "œ": "&oelig;",
      "Š": "&Scaron;",
      "š": "&scaron;",
      "Ÿ": "&Yuml;",
      "ˆ": "&circ;",
      "˜": "&tilde;",
      " ": "&ensp;",
      " ": "&emsp;",
      " ": "&thinsp;",
      "‌": "&zwnj;",
      "‍": "&zwj;",
      "‎": "&lrm;",
      "‏": "&rlm;",
      "–": "&ndash;",
      "—": "&mdash;",
      "‘": "&lsquo;",
      "’": "&rsquo;",
      "‚": "&sbquo;",
      "“": "&ldquo;",
      "”": "&rdquo;",
      "„": "&bdquo;",
      "†": "&dagger;",
      "‡": "&Dagger;",
      "‰": "&permil;",
      "‹": "&lsaquo;",
      "›": "&rsaquo;",
      "€": "&euro;",
      "ƒ": "&fnof;",
      "Α": "&Alpha;",
      "Β": "&Beta;",
      "Γ": "&Gamma;",
      "Δ": "&Delta;",
      "Ε": "&Epsilon;",
      "Ζ": "&Zeta;",
      "Η": "&Eta;",
      "Θ": "&Theta;",
      "Ι": "&Iota;",
      "Κ": "&Kappa;",
      "Λ": "&Lambda;",
      "Μ": "&Mu;",
      "Ν": "&Nu;",
      "Ξ": "&Xi;",
      "Ο": "&Omicron;",
      "Π": "&Pi;",
      "Ρ": "&Rho;",
      "Σ": "&Sigma;",
      "Τ": "&Tau;",
      "Υ": "&Upsilon;",
      "Φ": "&Phi;",
      "Χ": "&Chi;",
      "Ψ": "&Psi;",
      "Ω": "&Omega;",
      "α": "&alpha;",
      "β": "&beta;",
      "γ": "&gamma;",
      "δ": "&delta;",
      "ε": "&epsilon;",
      "ζ": "&zeta;",
      "η": "&eta;",
      "θ": "&theta;",
      "ι": "&iota;",
      "κ": "&kappa;",
      "λ": "&lambda;",
      "μ": "&mu;",
      "ν": "&nu;",
      "ξ": "&xi;",
      "ο": "&omicron;",
      "π": "&pi;",
      "ρ": "&rho;",
      "ς": "&sigmaf;",
      "σ": "&sigma;",
      "τ": "&tau;",
      "υ": "&upsilon;",
      "φ": "&phi;",
      "χ": "&chi;",
      "ψ": "&psi;",
      "ω": "&omega;",
      "ϑ": "&thetasym;",
      "ϒ": "&upsih;",
      "ϖ": "&piv;",
      "•": "&bull;",
      "…": "&hellip;",
      "′": "&prime;",
      "″": "&Prime;",
      "‾": "&oline;",
      "⁄": "&frasl;",
      "℘": "&weierp;",
      "ℑ": "&image;",
      "ℜ": "&real;",
      "™": "&trade;",
      "ℵ": "&alefsym;",
      "←": "&larr;",
      "↑": "&uarr;",
      "→": "&rarr;",
      "↓": "&darr;",
      "↔": "&harr;",
      "↵": "&crarr;",
      "⇐": "&lArr;",
      "⇑": "&uArr;",
      "⇒": "&rArr;",
      "⇓": "&dArr;",
      "⇔": "&hArr;",
      "∀": "&forall;",
      "∂": "&part;",
      "∃": "&exist;",
      "∅": "&empty;",
      "∇": "&nabla;",
      "∈": "&isin;",
      "∉": "&notin;",
      "∋": "&ni;",
      "∏": "&prod;",
      "∑": "&sum;",
      "−": "&minus;",
      "∗": "&lowast;",
      "√": "&radic;",
      "∝": "&prop;",
      "∞": "&infin;",
      "∠": "&ang;",
      "∧": "&and;",
      "∨": "&or;",
      "∩": "&cap;",
      "∪": "&cup;",
      "∫": "&int;",
      "∴": "&there4;",
      "∼": "&sim;",
      "≅": "&cong;",
      "≈": "&asymp;",
      "≠": "&ne;",
      "≡": "&equiv;",
      "≤": "&le;",
      "≥": "&ge;",
      "⊂": "&sub;",
      "⊃": "&sup;",
      "⊄": "&nsub;",
      "⊆": "&sube;",
      "⊇": "&supe;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "⊥": "&perp;",
      "⋅": "&sdot;",
      "⌈": "&lceil;",
      "⌉": "&rceil;",
      "⌊": "&lfloor;",
      "⌋": "&rfloor;",
      "〈": "&lang;",
      "〉": "&rang;",
      "◊": "&loz;",
      "♠": "&spades;",
      "♣": "&clubs;",
      "♥": "&hearts;",
      "♦": "&diams;"
    }
  },
  html5: {
    entities: {
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&AMP": "&",
      "&AMP;": "&",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Abreve;": "Ă",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Acy;": "А",
      "&Afr;": "𝔄",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Alpha;": "Α",
      "&Amacr;": "Ā",
      "&And;": "⩓",
      "&Aogon;": "Ą",
      "&Aopf;": "𝔸",
      "&ApplyFunction;": "⁡",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&Ascr;": "𝒜",
      "&Assign;": "≔",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Backslash;": "∖",
      "&Barv;": "⫧",
      "&Barwed;": "⌆",
      "&Bcy;": "Б",
      "&Because;": "∵",
      "&Bernoullis;": "ℬ",
      "&Beta;": "Β",
      "&Bfr;": "𝔅",
      "&Bopf;": "𝔹",
      "&Breve;": "˘",
      "&Bscr;": "ℬ",
      "&Bumpeq;": "≎",
      "&CHcy;": "Ч",
      "&COPY": "©",
      "&COPY;": "©",
      "&Cacute;": "Ć",
      "&Cap;": "⋒",
      "&CapitalDifferentialD;": "ⅅ",
      "&Cayleys;": "ℭ",
      "&Ccaron;": "Č",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Ccirc;": "Ĉ",
      "&Cconint;": "∰",
      "&Cdot;": "Ċ",
      "&Cedilla;": "¸",
      "&CenterDot;": "·",
      "&Cfr;": "ℭ",
      "&Chi;": "Χ",
      "&CircleDot;": "⊙",
      "&CircleMinus;": "⊖",
      "&CirclePlus;": "⊕",
      "&CircleTimes;": "⊗",
      "&ClockwiseContourIntegral;": "∲",
      "&CloseCurlyDoubleQuote;": "”",
      "&CloseCurlyQuote;": "’",
      "&Colon;": "∷",
      "&Colone;": "⩴",
      "&Congruent;": "≡",
      "&Conint;": "∯",
      "&ContourIntegral;": "∮",
      "&Copf;": "ℂ",
      "&Coproduct;": "∐",
      "&CounterClockwiseContourIntegral;": "∳",
      "&Cross;": "⨯",
      "&Cscr;": "𝒞",
      "&Cup;": "⋓",
      "&CupCap;": "≍",
      "&DD;": "ⅅ",
      "&DDotrahd;": "⤑",
      "&DJcy;": "Ђ",
      "&DScy;": "Ѕ",
      "&DZcy;": "Џ",
      "&Dagger;": "‡",
      "&Darr;": "↡",
      "&Dashv;": "⫤",
      "&Dcaron;": "Ď",
      "&Dcy;": "Д",
      "&Del;": "∇",
      "&Delta;": "Δ",
      "&Dfr;": "𝔇",
      "&DiacriticalAcute;": "´",
      "&DiacriticalDot;": "˙",
      "&DiacriticalDoubleAcute;": "˝",
      "&DiacriticalGrave;": "`",
      "&DiacriticalTilde;": "˜",
      "&Diamond;": "⋄",
      "&DifferentialD;": "ⅆ",
      "&Dopf;": "𝔻",
      "&Dot;": "¨",
      "&DotDot;": "⃜",
      "&DotEqual;": "≐",
      "&DoubleContourIntegral;": "∯",
      "&DoubleDot;": "¨",
      "&DoubleDownArrow;": "⇓",
      "&DoubleLeftArrow;": "⇐",
      "&DoubleLeftRightArrow;": "⇔",
      "&DoubleLeftTee;": "⫤",
      "&DoubleLongLeftArrow;": "⟸",
      "&DoubleLongLeftRightArrow;": "⟺",
      "&DoubleLongRightArrow;": "⟹",
      "&DoubleRightArrow;": "⇒",
      "&DoubleRightTee;": "⊨",
      "&DoubleUpArrow;": "⇑",
      "&DoubleUpDownArrow;": "⇕",
      "&DoubleVerticalBar;": "∥",
      "&DownArrow;": "↓",
      "&DownArrowBar;": "⤓",
      "&DownArrowUpArrow;": "⇵",
      "&DownBreve;": "̑",
      "&DownLeftRightVector;": "⥐",
      "&DownLeftTeeVector;": "⥞",
      "&DownLeftVector;": "↽",
      "&DownLeftVectorBar;": "⥖",
      "&DownRightTeeVector;": "⥟",
      "&DownRightVector;": "⇁",
      "&DownRightVectorBar;": "⥗",
      "&DownTee;": "⊤",
      "&DownTeeArrow;": "↧",
      "&Downarrow;": "⇓",
      "&Dscr;": "𝒟",
      "&Dstrok;": "Đ",
      "&ENG;": "Ŋ",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecaron;": "Ě",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Ecy;": "Э",
      "&Edot;": "Ė",
      "&Efr;": "𝔈",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Element;": "∈",
      "&Emacr;": "Ē",
      "&EmptySmallSquare;": "◻",
      "&EmptyVerySmallSquare;": "▫",
      "&Eogon;": "Ę",
      "&Eopf;": "𝔼",
      "&Epsilon;": "Ε",
      "&Equal;": "⩵",
      "&EqualTilde;": "≂",
      "&Equilibrium;": "⇌",
      "&Escr;": "ℰ",
      "&Esim;": "⩳",
      "&Eta;": "Η",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Exists;": "∃",
      "&ExponentialE;": "ⅇ",
      "&Fcy;": "Ф",
      "&Ffr;": "𝔉",
      "&FilledSmallSquare;": "◼",
      "&FilledVerySmallSquare;": "▪",
      "&Fopf;": "𝔽",
      "&ForAll;": "∀",
      "&Fouriertrf;": "ℱ",
      "&Fscr;": "ℱ",
      "&GJcy;": "Ѓ",
      "&GT": ">",
      "&GT;": ">",
      "&Gamma;": "Γ",
      "&Gammad;": "Ϝ",
      "&Gbreve;": "Ğ",
      "&Gcedil;": "Ģ",
      "&Gcirc;": "Ĝ",
      "&Gcy;": "Г",
      "&Gdot;": "Ġ",
      "&Gfr;": "𝔊",
      "&Gg;": "⋙",
      "&Gopf;": "𝔾",
      "&GreaterEqual;": "≥",
      "&GreaterEqualLess;": "⋛",
      "&GreaterFullEqual;": "≧",
      "&GreaterGreater;": "⪢",
      "&GreaterLess;": "≷",
      "&GreaterSlantEqual;": "⩾",
      "&GreaterTilde;": "≳",
      "&Gscr;": "𝒢",
      "&Gt;": "≫",
      "&HARDcy;": "Ъ",
      "&Hacek;": "ˇ",
      "&Hat;": "^",
      "&Hcirc;": "Ĥ",
      "&Hfr;": "ℌ",
      "&HilbertSpace;": "ℋ",
      "&Hopf;": "ℍ",
      "&HorizontalLine;": "─",
      "&Hscr;": "ℋ",
      "&Hstrok;": "Ħ",
      "&HumpDownHump;": "≎",
      "&HumpEqual;": "≏",
      "&IEcy;": "Е",
      "&IJlig;": "Ĳ",
      "&IOcy;": "Ё",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Icy;": "И",
      "&Idot;": "İ",
      "&Ifr;": "ℑ",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Im;": "ℑ",
      "&Imacr;": "Ī",
      "&ImaginaryI;": "ⅈ",
      "&Implies;": "⇒",
      "&Int;": "∬",
      "&Integral;": "∫",
      "&Intersection;": "⋂",
      "&InvisibleComma;": "⁣",
      "&InvisibleTimes;": "⁢",
      "&Iogon;": "Į",
      "&Iopf;": "𝕀",
      "&Iota;": "Ι",
      "&Iscr;": "ℐ",
      "&Itilde;": "Ĩ",
      "&Iukcy;": "І",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&Jcirc;": "Ĵ",
      "&Jcy;": "Й",
      "&Jfr;": "𝔍",
      "&Jopf;": "𝕁",
      "&Jscr;": "𝒥",
      "&Jsercy;": "Ј",
      "&Jukcy;": "Є",
      "&KHcy;": "Х",
      "&KJcy;": "Ќ",
      "&Kappa;": "Κ",
      "&Kcedil;": "Ķ",
      "&Kcy;": "К",
      "&Kfr;": "𝔎",
      "&Kopf;": "𝕂",
      "&Kscr;": "𝒦",
      "&LJcy;": "Љ",
      "&LT": "<",
      "&LT;": "<",
      "&Lacute;": "Ĺ",
      "&Lambda;": "Λ",
      "&Lang;": "⟪",
      "&Laplacetrf;": "ℒ",
      "&Larr;": "↞",
      "&Lcaron;": "Ľ",
      "&Lcedil;": "Ļ",
      "&Lcy;": "Л",
      "&LeftAngleBracket;": "⟨",
      "&LeftArrow;": "←",
      "&LeftArrowBar;": "⇤",
      "&LeftArrowRightArrow;": "⇆",
      "&LeftCeiling;": "⌈",
      "&LeftDoubleBracket;": "⟦",
      "&LeftDownTeeVector;": "⥡",
      "&LeftDownVector;": "⇃",
      "&LeftDownVectorBar;": "⥙",
      "&LeftFloor;": "⌊",
      "&LeftRightArrow;": "↔",
      "&LeftRightVector;": "⥎",
      "&LeftTee;": "⊣",
      "&LeftTeeArrow;": "↤",
      "&LeftTeeVector;": "⥚",
      "&LeftTriangle;": "⊲",
      "&LeftTriangleBar;": "⧏",
      "&LeftTriangleEqual;": "⊴",
      "&LeftUpDownVector;": "⥑",
      "&LeftUpTeeVector;": "⥠",
      "&LeftUpVector;": "↿",
      "&LeftUpVectorBar;": "⥘",
      "&LeftVector;": "↼",
      "&LeftVectorBar;": "⥒",
      "&Leftarrow;": "⇐",
      "&Leftrightarrow;": "⇔",
      "&LessEqualGreater;": "⋚",
      "&LessFullEqual;": "≦",
      "&LessGreater;": "≶",
      "&LessLess;": "⪡",
      "&LessSlantEqual;": "⩽",
      "&LessTilde;": "≲",
      "&Lfr;": "𝔏",
      "&Ll;": "⋘",
      "&Lleftarrow;": "⇚",
      "&Lmidot;": "Ŀ",
      "&LongLeftArrow;": "⟵",
      "&LongLeftRightArrow;": "⟷",
      "&LongRightArrow;": "⟶",
      "&Longleftarrow;": "⟸",
      "&Longleftrightarrow;": "⟺",
      "&Longrightarrow;": "⟹",
      "&Lopf;": "𝕃",
      "&LowerLeftArrow;": "↙",
      "&LowerRightArrow;": "↘",
      "&Lscr;": "ℒ",
      "&Lsh;": "↰",
      "&Lstrok;": "Ł",
      "&Lt;": "≪",
      "&Map;": "⤅",
      "&Mcy;": "М",
      "&MediumSpace;": " ",
      "&Mellintrf;": "ℳ",
      "&Mfr;": "𝔐",
      "&MinusPlus;": "∓",
      "&Mopf;": "𝕄",
      "&Mscr;": "ℳ",
      "&Mu;": "Μ",
      "&NJcy;": "Њ",
      "&Nacute;": "Ń",
      "&Ncaron;": "Ň",
      "&Ncedil;": "Ņ",
      "&Ncy;": "Н",
      "&NegativeMediumSpace;": "​",
      "&NegativeThickSpace;": "​",
      "&NegativeThinSpace;": "​",
      "&NegativeVeryThinSpace;": "​",
      "&NestedGreaterGreater;": "≫",
      "&NestedLessLess;": "≪",
      "&NewLine;": "\n",
      "&Nfr;": "𝔑",
      "&NoBreak;": "⁠",
      "&NonBreakingSpace;": " ",
      "&Nopf;": "ℕ",
      "&Not;": "⫬",
      "&NotCongruent;": "≢",
      "&NotCupCap;": "≭",
      "&NotDoubleVerticalBar;": "∦",
      "&NotElement;": "∉",
      "&NotEqual;": "≠",
      "&NotEqualTilde;": "≂̸",
      "&NotExists;": "∄",
      "&NotGreater;": "≯",
      "&NotGreaterEqual;": "≱",
      "&NotGreaterFullEqual;": "≧̸",
      "&NotGreaterGreater;": "≫̸",
      "&NotGreaterLess;": "≹",
      "&NotGreaterSlantEqual;": "⩾̸",
      "&NotGreaterTilde;": "≵",
      "&NotHumpDownHump;": "≎̸",
      "&NotHumpEqual;": "≏̸",
      "&NotLeftTriangle;": "⋪",
      "&NotLeftTriangleBar;": "⧏̸",
      "&NotLeftTriangleEqual;": "⋬",
      "&NotLess;": "≮",
      "&NotLessEqual;": "≰",
      "&NotLessGreater;": "≸",
      "&NotLessLess;": "≪̸",
      "&NotLessSlantEqual;": "⩽̸",
      "&NotLessTilde;": "≴",
      "&NotNestedGreaterGreater;": "⪢̸",
      "&NotNestedLessLess;": "⪡̸",
      "&NotPrecedes;": "⊀",
      "&NotPrecedesEqual;": "⪯̸",
      "&NotPrecedesSlantEqual;": "⋠",
      "&NotReverseElement;": "∌",
      "&NotRightTriangle;": "⋫",
      "&NotRightTriangleBar;": "⧐̸",
      "&NotRightTriangleEqual;": "⋭",
      "&NotSquareSubset;": "⊏̸",
      "&NotSquareSubsetEqual;": "⋢",
      "&NotSquareSuperset;": "⊐̸",
      "&NotSquareSupersetEqual;": "⋣",
      "&NotSubset;": "⊂⃒",
      "&NotSubsetEqual;": "⊈",
      "&NotSucceeds;": "⊁",
      "&NotSucceedsEqual;": "⪰̸",
      "&NotSucceedsSlantEqual;": "⋡",
      "&NotSucceedsTilde;": "≿̸",
      "&NotSuperset;": "⊃⃒",
      "&NotSupersetEqual;": "⊉",
      "&NotTilde;": "≁",
      "&NotTildeEqual;": "≄",
      "&NotTildeFullEqual;": "≇",
      "&NotTildeTilde;": "≉",
      "&NotVerticalBar;": "∤",
      "&Nscr;": "𝒩",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Nu;": "Ν",
      "&OElig;": "Œ",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Ocy;": "О",
      "&Odblac;": "Ő",
      "&Ofr;": "𝔒",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Omacr;": "Ō",
      "&Omega;": "Ω",
      "&Omicron;": "Ο",
      "&Oopf;": "𝕆",
      "&OpenCurlyDoubleQuote;": "“",
      "&OpenCurlyQuote;": "‘",
      "&Or;": "⩔",
      "&Oscr;": "𝒪",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Otimes;": "⨷",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&OverBar;": "‾",
      "&OverBrace;": "⏞",
      "&OverBracket;": "⎴",
      "&OverParenthesis;": "⏜",
      "&PartialD;": "∂",
      "&Pcy;": "П",
      "&Pfr;": "𝔓",
      "&Phi;": "Φ",
      "&Pi;": "Π",
      "&PlusMinus;": "±",
      "&Poincareplane;": "ℌ",
      "&Popf;": "ℙ",
      "&Pr;": "⪻",
      "&Precedes;": "≺",
      "&PrecedesEqual;": "⪯",
      "&PrecedesSlantEqual;": "≼",
      "&PrecedesTilde;": "≾",
      "&Prime;": "″",
      "&Product;": "∏",
      "&Proportion;": "∷",
      "&Proportional;": "∝",
      "&Pscr;": "𝒫",
      "&Psi;": "Ψ",
      "&QUOT": '"',
      "&QUOT;": '"',
      "&Qfr;": "𝔔",
      "&Qopf;": "ℚ",
      "&Qscr;": "𝒬",
      "&RBarr;": "⤐",
      "&REG": "®",
      "&REG;": "®",
      "&Racute;": "Ŕ",
      "&Rang;": "⟫",
      "&Rarr;": "↠",
      "&Rarrtl;": "⤖",
      "&Rcaron;": "Ř",
      "&Rcedil;": "Ŗ",
      "&Rcy;": "Р",
      "&Re;": "ℜ",
      "&ReverseElement;": "∋",
      "&ReverseEquilibrium;": "⇋",
      "&ReverseUpEquilibrium;": "⥯",
      "&Rfr;": "ℜ",
      "&Rho;": "Ρ",
      "&RightAngleBracket;": "⟩",
      "&RightArrow;": "→",
      "&RightArrowBar;": "⇥",
      "&RightArrowLeftArrow;": "⇄",
      "&RightCeiling;": "⌉",
      "&RightDoubleBracket;": "⟧",
      "&RightDownTeeVector;": "⥝",
      "&RightDownVector;": "⇂",
      "&RightDownVectorBar;": "⥕",
      "&RightFloor;": "⌋",
      "&RightTee;": "⊢",
      "&RightTeeArrow;": "↦",
      "&RightTeeVector;": "⥛",
      "&RightTriangle;": "⊳",
      "&RightTriangleBar;": "⧐",
      "&RightTriangleEqual;": "⊵",
      "&RightUpDownVector;": "⥏",
      "&RightUpTeeVector;": "⥜",
      "&RightUpVector;": "↾",
      "&RightUpVectorBar;": "⥔",
      "&RightVector;": "⇀",
      "&RightVectorBar;": "⥓",
      "&Rightarrow;": "⇒",
      "&Ropf;": "ℝ",
      "&RoundImplies;": "⥰",
      "&Rrightarrow;": "⇛",
      "&Rscr;": "ℛ",
      "&Rsh;": "↱",
      "&RuleDelayed;": "⧴",
      "&SHCHcy;": "Щ",
      "&SHcy;": "Ш",
      "&SOFTcy;": "Ь",
      "&Sacute;": "Ś",
      "&Sc;": "⪼",
      "&Scaron;": "Š",
      "&Scedil;": "Ş",
      "&Scirc;": "Ŝ",
      "&Scy;": "С",
      "&Sfr;": "𝔖",
      "&ShortDownArrow;": "↓",
      "&ShortLeftArrow;": "←",
      "&ShortRightArrow;": "→",
      "&ShortUpArrow;": "↑",
      "&Sigma;": "Σ",
      "&SmallCircle;": "∘",
      "&Sopf;": "𝕊",
      "&Sqrt;": "√",
      "&Square;": "□",
      "&SquareIntersection;": "⊓",
      "&SquareSubset;": "⊏",
      "&SquareSubsetEqual;": "⊑",
      "&SquareSuperset;": "⊐",
      "&SquareSupersetEqual;": "⊒",
      "&SquareUnion;": "⊔",
      "&Sscr;": "𝒮",
      "&Star;": "⋆",
      "&Sub;": "⋐",
      "&Subset;": "⋐",
      "&SubsetEqual;": "⊆",
      "&Succeeds;": "≻",
      "&SucceedsEqual;": "⪰",
      "&SucceedsSlantEqual;": "≽",
      "&SucceedsTilde;": "≿",
      "&SuchThat;": "∋",
      "&Sum;": "∑",
      "&Sup;": "⋑",
      "&Superset;": "⊃",
      "&SupersetEqual;": "⊇",
      "&Supset;": "⋑",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&TRADE;": "™",
      "&TSHcy;": "Ћ",
      "&TScy;": "Ц",
      "&Tab;": "\t",
      "&Tau;": "Τ",
      "&Tcaron;": "Ť",
      "&Tcedil;": "Ţ",
      "&Tcy;": "Т",
      "&Tfr;": "𝔗",
      "&Therefore;": "∴",
      "&Theta;": "Θ",
      "&ThickSpace;": "  ",
      "&ThinSpace;": " ",
      "&Tilde;": "∼",
      "&TildeEqual;": "≃",
      "&TildeFullEqual;": "≅",
      "&TildeTilde;": "≈",
      "&Topf;": "𝕋",
      "&TripleDot;": "⃛",
      "&Tscr;": "𝒯",
      "&Tstrok;": "Ŧ",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Uarr;": "↟",
      "&Uarrocir;": "⥉",
      "&Ubrcy;": "Ў",
      "&Ubreve;": "Ŭ",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Ucy;": "У",
      "&Udblac;": "Ű",
      "&Ufr;": "𝔘",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Umacr;": "Ū",
      "&UnderBar;": "_",
      "&UnderBrace;": "⏟",
      "&UnderBracket;": "⎵",
      "&UnderParenthesis;": "⏝",
      "&Union;": "⋃",
      "&UnionPlus;": "⊎",
      "&Uogon;": "Ų",
      "&Uopf;": "𝕌",
      "&UpArrow;": "↑",
      "&UpArrowBar;": "⤒",
      "&UpArrowDownArrow;": "⇅",
      "&UpDownArrow;": "↕",
      "&UpEquilibrium;": "⥮",
      "&UpTee;": "⊥",
      "&UpTeeArrow;": "↥",
      "&Uparrow;": "⇑",
      "&Updownarrow;": "⇕",
      "&UpperLeftArrow;": "↖",
      "&UpperRightArrow;": "↗",
      "&Upsi;": "ϒ",
      "&Upsilon;": "Υ",
      "&Uring;": "Ů",
      "&Uscr;": "𝒰",
      "&Utilde;": "Ũ",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&VDash;": "⊫",
      "&Vbar;": "⫫",
      "&Vcy;": "В",
      "&Vdash;": "⊩",
      "&Vdashl;": "⫦",
      "&Vee;": "⋁",
      "&Verbar;": "‖",
      "&Vert;": "‖",
      "&VerticalBar;": "∣",
      "&VerticalLine;": "|",
      "&VerticalSeparator;": "❘",
      "&VerticalTilde;": "≀",
      "&VeryThinSpace;": " ",
      "&Vfr;": "𝔙",
      "&Vopf;": "𝕍",
      "&Vscr;": "𝒱",
      "&Vvdash;": "⊪",
      "&Wcirc;": "Ŵ",
      "&Wedge;": "⋀",
      "&Wfr;": "𝔚",
      "&Wopf;": "𝕎",
      "&Wscr;": "𝒲",
      "&Xfr;": "𝔛",
      "&Xi;": "Ξ",
      "&Xopf;": "𝕏",
      "&Xscr;": "𝒳",
      "&YAcy;": "Я",
      "&YIcy;": "Ї",
      "&YUcy;": "Ю",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&Ycirc;": "Ŷ",
      "&Ycy;": "Ы",
      "&Yfr;": "𝔜",
      "&Yopf;": "𝕐",
      "&Yscr;": "𝒴",
      "&Yuml;": "Ÿ",
      "&ZHcy;": "Ж",
      "&Zacute;": "Ź",
      "&Zcaron;": "Ž",
      "&Zcy;": "З",
      "&Zdot;": "Ż",
      "&ZeroWidthSpace;": "​",
      "&Zeta;": "Ζ",
      "&Zfr;": "ℨ",
      "&Zopf;": "ℤ",
      "&Zscr;": "𝒵",
      "&aacute": "á",
      "&aacute;": "á",
      "&abreve;": "ă",
      "&ac;": "∾",
      "&acE;": "∾̳",
      "&acd;": "∿",
      "&acirc": "â",
      "&acirc;": "â",
      "&acute": "´",
      "&acute;": "´",
      "&acy;": "а",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&af;": "⁡",
      "&afr;": "𝔞",
      "&agrave": "à",
      "&agrave;": "à",
      "&alefsym;": "ℵ",
      "&aleph;": "ℵ",
      "&alpha;": "α",
      "&amacr;": "ā",
      "&amalg;": "⨿",
      "&amp": "&",
      "&amp;": "&",
      "&and;": "∧",
      "&andand;": "⩕",
      "&andd;": "⩜",
      "&andslope;": "⩘",
      "&andv;": "⩚",
      "&ang;": "∠",
      "&ange;": "⦤",
      "&angle;": "∠",
      "&angmsd;": "∡",
      "&angmsdaa;": "⦨",
      "&angmsdab;": "⦩",
      "&angmsdac;": "⦪",
      "&angmsdad;": "⦫",
      "&angmsdae;": "⦬",
      "&angmsdaf;": "⦭",
      "&angmsdag;": "⦮",
      "&angmsdah;": "⦯",
      "&angrt;": "∟",
      "&angrtvb;": "⊾",
      "&angrtvbd;": "⦝",
      "&angsph;": "∢",
      "&angst;": "Å",
      "&angzarr;": "⍼",
      "&aogon;": "ą",
      "&aopf;": "𝕒",
      "&ap;": "≈",
      "&apE;": "⩰",
      "&apacir;": "⩯",
      "&ape;": "≊",
      "&apid;": "≋",
      "&apos;": "'",
      "&approx;": "≈",
      "&approxeq;": "≊",
      "&aring": "å",
      "&aring;": "å",
      "&ascr;": "𝒶",
      "&ast;": "*",
      "&asymp;": "≈",
      "&asympeq;": "≍",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&awconint;": "∳",
      "&awint;": "⨑",
      "&bNot;": "⫭",
      "&backcong;": "≌",
      "&backepsilon;": "϶",
      "&backprime;": "‵",
      "&backsim;": "∽",
      "&backsimeq;": "⋍",
      "&barvee;": "⊽",
      "&barwed;": "⌅",
      "&barwedge;": "⌅",
      "&bbrk;": "⎵",
      "&bbrktbrk;": "⎶",
      "&bcong;": "≌",
      "&bcy;": "б",
      "&bdquo;": "„",
      "&becaus;": "∵",
      "&because;": "∵",
      "&bemptyv;": "⦰",
      "&bepsi;": "϶",
      "&bernou;": "ℬ",
      "&beta;": "β",
      "&beth;": "ℶ",
      "&between;": "≬",
      "&bfr;": "𝔟",
      "&bigcap;": "⋂",
      "&bigcirc;": "◯",
      "&bigcup;": "⋃",
      "&bigodot;": "⨀",
      "&bigoplus;": "⨁",
      "&bigotimes;": "⨂",
      "&bigsqcup;": "⨆",
      "&bigstar;": "★",
      "&bigtriangledown;": "▽",
      "&bigtriangleup;": "△",
      "&biguplus;": "⨄",
      "&bigvee;": "⋁",
      "&bigwedge;": "⋀",
      "&bkarow;": "⤍",
      "&blacklozenge;": "⧫",
      "&blacksquare;": "▪",
      "&blacktriangle;": "▴",
      "&blacktriangledown;": "▾",
      "&blacktriangleleft;": "◂",
      "&blacktriangleright;": "▸",
      "&blank;": "␣",
      "&blk12;": "▒",
      "&blk14;": "░",
      "&blk34;": "▓",
      "&block;": "█",
      "&bne;": "=⃥",
      "&bnequiv;": "≡⃥",
      "&bnot;": "⌐",
      "&bopf;": "𝕓",
      "&bot;": "⊥",
      "&bottom;": "⊥",
      "&bowtie;": "⋈",
      "&boxDL;": "╗",
      "&boxDR;": "╔",
      "&boxDl;": "╖",
      "&boxDr;": "╓",
      "&boxH;": "═",
      "&boxHD;": "╦",
      "&boxHU;": "╩",
      "&boxHd;": "╤",
      "&boxHu;": "╧",
      "&boxUL;": "╝",
      "&boxUR;": "╚",
      "&boxUl;": "╜",
      "&boxUr;": "╙",
      "&boxV;": "║",
      "&boxVH;": "╬",
      "&boxVL;": "╣",
      "&boxVR;": "╠",
      "&boxVh;": "╫",
      "&boxVl;": "╢",
      "&boxVr;": "╟",
      "&boxbox;": "⧉",
      "&boxdL;": "╕",
      "&boxdR;": "╒",
      "&boxdl;": "┐",
      "&boxdr;": "┌",
      "&boxh;": "─",
      "&boxhD;": "╥",
      "&boxhU;": "╨",
      "&boxhd;": "┬",
      "&boxhu;": "┴",
      "&boxminus;": "⊟",
      "&boxplus;": "⊞",
      "&boxtimes;": "⊠",
      "&boxuL;": "╛",
      "&boxuR;": "╘",
      "&boxul;": "┘",
      "&boxur;": "└",
      "&boxv;": "│",
      "&boxvH;": "╪",
      "&boxvL;": "╡",
      "&boxvR;": "╞",
      "&boxvh;": "┼",
      "&boxvl;": "┤",
      "&boxvr;": "├",
      "&bprime;": "‵",
      "&breve;": "˘",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&bscr;": "𝒷",
      "&bsemi;": "⁏",
      "&bsim;": "∽",
      "&bsime;": "⋍",
      "&bsol;": "\\",
      "&bsolb;": "⧅",
      "&bsolhsub;": "⟈",
      "&bull;": "•",
      "&bullet;": "•",
      "&bump;": "≎",
      "&bumpE;": "⪮",
      "&bumpe;": "≏",
      "&bumpeq;": "≏",
      "&cacute;": "ć",
      "&cap;": "∩",
      "&capand;": "⩄",
      "&capbrcup;": "⩉",
      "&capcap;": "⩋",
      "&capcup;": "⩇",
      "&capdot;": "⩀",
      "&caps;": "∩︀",
      "&caret;": "⁁",
      "&caron;": "ˇ",
      "&ccaps;": "⩍",
      "&ccaron;": "č",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&ccirc;": "ĉ",
      "&ccups;": "⩌",
      "&ccupssm;": "⩐",
      "&cdot;": "ċ",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&cemptyv;": "⦲",
      "&cent": "¢",
      "&cent;": "¢",
      "&centerdot;": "·",
      "&cfr;": "𝔠",
      "&chcy;": "ч",
      "&check;": "✓",
      "&checkmark;": "✓",
      "&chi;": "χ",
      "&cir;": "○",
      "&cirE;": "⧃",
      "&circ;": "ˆ",
      "&circeq;": "≗",
      "&circlearrowleft;": "↺",
      "&circlearrowright;": "↻",
      "&circledR;": "®",
      "&circledS;": "Ⓢ",
      "&circledast;": "⊛",
      "&circledcirc;": "⊚",
      "&circleddash;": "⊝",
      "&cire;": "≗",
      "&cirfnint;": "⨐",
      "&cirmid;": "⫯",
      "&cirscir;": "⧂",
      "&clubs;": "♣",
      "&clubsuit;": "♣",
      "&colon;": ":",
      "&colone;": "≔",
      "&coloneq;": "≔",
      "&comma;": ",",
      "&commat;": "@",
      "&comp;": "∁",
      "&compfn;": "∘",
      "&complement;": "∁",
      "&complexes;": "ℂ",
      "&cong;": "≅",
      "&congdot;": "⩭",
      "&conint;": "∮",
      "&copf;": "𝕔",
      "&coprod;": "∐",
      "&copy": "©",
      "&copy;": "©",
      "&copysr;": "℗",
      "&crarr;": "↵",
      "&cross;": "✗",
      "&cscr;": "𝒸",
      "&csub;": "⫏",
      "&csube;": "⫑",
      "&csup;": "⫐",
      "&csupe;": "⫒",
      "&ctdot;": "⋯",
      "&cudarrl;": "⤸",
      "&cudarrr;": "⤵",
      "&cuepr;": "⋞",
      "&cuesc;": "⋟",
      "&cularr;": "↶",
      "&cularrp;": "⤽",
      "&cup;": "∪",
      "&cupbrcap;": "⩈",
      "&cupcap;": "⩆",
      "&cupcup;": "⩊",
      "&cupdot;": "⊍",
      "&cupor;": "⩅",
      "&cups;": "∪︀",
      "&curarr;": "↷",
      "&curarrm;": "⤼",
      "&curlyeqprec;": "⋞",
      "&curlyeqsucc;": "⋟",
      "&curlyvee;": "⋎",
      "&curlywedge;": "⋏",
      "&curren": "¤",
      "&curren;": "¤",
      "&curvearrowleft;": "↶",
      "&curvearrowright;": "↷",
      "&cuvee;": "⋎",
      "&cuwed;": "⋏",
      "&cwconint;": "∲",
      "&cwint;": "∱",
      "&cylcty;": "⌭",
      "&dArr;": "⇓",
      "&dHar;": "⥥",
      "&dagger;": "†",
      "&daleth;": "ℸ",
      "&darr;": "↓",
      "&dash;": "‐",
      "&dashv;": "⊣",
      "&dbkarow;": "⤏",
      "&dblac;": "˝",
      "&dcaron;": "ď",
      "&dcy;": "д",
      "&dd;": "ⅆ",
      "&ddagger;": "‡",
      "&ddarr;": "⇊",
      "&ddotseq;": "⩷",
      "&deg": "°",
      "&deg;": "°",
      "&delta;": "δ",
      "&demptyv;": "⦱",
      "&dfisht;": "⥿",
      "&dfr;": "𝔡",
      "&dharl;": "⇃",
      "&dharr;": "⇂",
      "&diam;": "⋄",
      "&diamond;": "⋄",
      "&diamondsuit;": "♦",
      "&diams;": "♦",
      "&die;": "¨",
      "&digamma;": "ϝ",
      "&disin;": "⋲",
      "&div;": "÷",
      "&divide": "÷",
      "&divide;": "÷",
      "&divideontimes;": "⋇",
      "&divonx;": "⋇",
      "&djcy;": "ђ",
      "&dlcorn;": "⌞",
      "&dlcrop;": "⌍",
      "&dollar;": "$",
      "&dopf;": "𝕕",
      "&dot;": "˙",
      "&doteq;": "≐",
      "&doteqdot;": "≑",
      "&dotminus;": "∸",
      "&dotplus;": "∔",
      "&dotsquare;": "⊡",
      "&doublebarwedge;": "⌆",
      "&downarrow;": "↓",
      "&downdownarrows;": "⇊",
      "&downharpoonleft;": "⇃",
      "&downharpoonright;": "⇂",
      "&drbkarow;": "⤐",
      "&drcorn;": "⌟",
      "&drcrop;": "⌌",
      "&dscr;": "𝒹",
      "&dscy;": "ѕ",
      "&dsol;": "⧶",
      "&dstrok;": "đ",
      "&dtdot;": "⋱",
      "&dtri;": "▿",
      "&dtrif;": "▾",
      "&duarr;": "⇵",
      "&duhar;": "⥯",
      "&dwangle;": "⦦",
      "&dzcy;": "џ",
      "&dzigrarr;": "⟿",
      "&eDDot;": "⩷",
      "&eDot;": "≑",
      "&eacute": "é",
      "&eacute;": "é",
      "&easter;": "⩮",
      "&ecaron;": "ě",
      "&ecir;": "≖",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&ecolon;": "≕",
      "&ecy;": "э",
      "&edot;": "ė",
      "&ee;": "ⅇ",
      "&efDot;": "≒",
      "&efr;": "𝔢",
      "&eg;": "⪚",
      "&egrave": "è",
      "&egrave;": "è",
      "&egs;": "⪖",
      "&egsdot;": "⪘",
      "&el;": "⪙",
      "&elinters;": "⏧",
      "&ell;": "ℓ",
      "&els;": "⪕",
      "&elsdot;": "⪗",
      "&emacr;": "ē",
      "&empty;": "∅",
      "&emptyset;": "∅",
      "&emptyv;": "∅",
      "&emsp13;": " ",
      "&emsp14;": " ",
      "&emsp;": " ",
      "&eng;": "ŋ",
      "&ensp;": " ",
      "&eogon;": "ę",
      "&eopf;": "𝕖",
      "&epar;": "⋕",
      "&eparsl;": "⧣",
      "&eplus;": "⩱",
      "&epsi;": "ε",
      "&epsilon;": "ε",
      "&epsiv;": "ϵ",
      "&eqcirc;": "≖",
      "&eqcolon;": "≕",
      "&eqsim;": "≂",
      "&eqslantgtr;": "⪖",
      "&eqslantless;": "⪕",
      "&equals;": "=",
      "&equest;": "≟",
      "&equiv;": "≡",
      "&equivDD;": "⩸",
      "&eqvparsl;": "⧥",
      "&erDot;": "≓",
      "&erarr;": "⥱",
      "&escr;": "ℯ",
      "&esdot;": "≐",
      "&esim;": "≂",
      "&eta;": "η",
      "&eth": "ð",
      "&eth;": "ð",
      "&euml": "ë",
      "&euml;": "ë",
      "&euro;": "€",
      "&excl;": "!",
      "&exist;": "∃",
      "&expectation;": "ℰ",
      "&exponentiale;": "ⅇ",
      "&fallingdotseq;": "≒",
      "&fcy;": "ф",
      "&female;": "♀",
      "&ffilig;": "ﬃ",
      "&fflig;": "ﬀ",
      "&ffllig;": "ﬄ",
      "&ffr;": "𝔣",
      "&filig;": "ﬁ",
      "&fjlig;": "fj",
      "&flat;": "♭",
      "&fllig;": "ﬂ",
      "&fltns;": "▱",
      "&fnof;": "ƒ",
      "&fopf;": "𝕗",
      "&forall;": "∀",
      "&fork;": "⋔",
      "&forkv;": "⫙",
      "&fpartint;": "⨍",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac13;": "⅓",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac15;": "⅕",
      "&frac16;": "⅙",
      "&frac18;": "⅛",
      "&frac23;": "⅔",
      "&frac25;": "⅖",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&frac35;": "⅗",
      "&frac38;": "⅜",
      "&frac45;": "⅘",
      "&frac56;": "⅚",
      "&frac58;": "⅝",
      "&frac78;": "⅞",
      "&frasl;": "⁄",
      "&frown;": "⌢",
      "&fscr;": "𝒻",
      "&gE;": "≧",
      "&gEl;": "⪌",
      "&gacute;": "ǵ",
      "&gamma;": "γ",
      "&gammad;": "ϝ",
      "&gap;": "⪆",
      "&gbreve;": "ğ",
      "&gcirc;": "ĝ",
      "&gcy;": "г",
      "&gdot;": "ġ",
      "&ge;": "≥",
      "&gel;": "⋛",
      "&geq;": "≥",
      "&geqq;": "≧",
      "&geqslant;": "⩾",
      "&ges;": "⩾",
      "&gescc;": "⪩",
      "&gesdot;": "⪀",
      "&gesdoto;": "⪂",
      "&gesdotol;": "⪄",
      "&gesl;": "⋛︀",
      "&gesles;": "⪔",
      "&gfr;": "𝔤",
      "&gg;": "≫",
      "&ggg;": "⋙",
      "&gimel;": "ℷ",
      "&gjcy;": "ѓ",
      "&gl;": "≷",
      "&glE;": "⪒",
      "&gla;": "⪥",
      "&glj;": "⪤",
      "&gnE;": "≩",
      "&gnap;": "⪊",
      "&gnapprox;": "⪊",
      "&gne;": "⪈",
      "&gneq;": "⪈",
      "&gneqq;": "≩",
      "&gnsim;": "⋧",
      "&gopf;": "𝕘",
      "&grave;": "`",
      "&gscr;": "ℊ",
      "&gsim;": "≳",
      "&gsime;": "⪎",
      "&gsiml;": "⪐",
      "&gt": ">",
      "&gt;": ">",
      "&gtcc;": "⪧",
      "&gtcir;": "⩺",
      "&gtdot;": "⋗",
      "&gtlPar;": "⦕",
      "&gtquest;": "⩼",
      "&gtrapprox;": "⪆",
      "&gtrarr;": "⥸",
      "&gtrdot;": "⋗",
      "&gtreqless;": "⋛",
      "&gtreqqless;": "⪌",
      "&gtrless;": "≷",
      "&gtrsim;": "≳",
      "&gvertneqq;": "≩︀",
      "&gvnE;": "≩︀",
      "&hArr;": "⇔",
      "&hairsp;": " ",
      "&half;": "½",
      "&hamilt;": "ℋ",
      "&hardcy;": "ъ",
      "&harr;": "↔",
      "&harrcir;": "⥈",
      "&harrw;": "↭",
      "&hbar;": "ℏ",
      "&hcirc;": "ĥ",
      "&hearts;": "♥",
      "&heartsuit;": "♥",
      "&hellip;": "…",
      "&hercon;": "⊹",
      "&hfr;": "𝔥",
      "&hksearow;": "⤥",
      "&hkswarow;": "⤦",
      "&hoarr;": "⇿",
      "&homtht;": "∻",
      "&hookleftarrow;": "↩",
      "&hookrightarrow;": "↪",
      "&hopf;": "𝕙",
      "&horbar;": "―",
      "&hscr;": "𝒽",
      "&hslash;": "ℏ",
      "&hstrok;": "ħ",
      "&hybull;": "⁃",
      "&hyphen;": "‐",
      "&iacute": "í",
      "&iacute;": "í",
      "&ic;": "⁣",
      "&icirc": "î",
      "&icirc;": "î",
      "&icy;": "и",
      "&iecy;": "е",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&iff;": "⇔",
      "&ifr;": "𝔦",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&ii;": "ⅈ",
      "&iiiint;": "⨌",
      "&iiint;": "∭",
      "&iinfin;": "⧜",
      "&iiota;": "℩",
      "&ijlig;": "ĳ",
      "&imacr;": "ī",
      "&image;": "ℑ",
      "&imagline;": "ℐ",
      "&imagpart;": "ℑ",
      "&imath;": "ı",
      "&imof;": "⊷",
      "&imped;": "Ƶ",
      "&in;": "∈",
      "&incare;": "℅",
      "&infin;": "∞",
      "&infintie;": "⧝",
      "&inodot;": "ı",
      "&int;": "∫",
      "&intcal;": "⊺",
      "&integers;": "ℤ",
      "&intercal;": "⊺",
      "&intlarhk;": "⨗",
      "&intprod;": "⨼",
      "&iocy;": "ё",
      "&iogon;": "į",
      "&iopf;": "𝕚",
      "&iota;": "ι",
      "&iprod;": "⨼",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&iscr;": "𝒾",
      "&isin;": "∈",
      "&isinE;": "⋹",
      "&isindot;": "⋵",
      "&isins;": "⋴",
      "&isinsv;": "⋳",
      "&isinv;": "∈",
      "&it;": "⁢",
      "&itilde;": "ĩ",
      "&iukcy;": "і",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&jcirc;": "ĵ",
      "&jcy;": "й",
      "&jfr;": "𝔧",
      "&jmath;": "ȷ",
      "&jopf;": "𝕛",
      "&jscr;": "𝒿",
      "&jsercy;": "ј",
      "&jukcy;": "є",
      "&kappa;": "κ",
      "&kappav;": "ϰ",
      "&kcedil;": "ķ",
      "&kcy;": "к",
      "&kfr;": "𝔨",
      "&kgreen;": "ĸ",
      "&khcy;": "х",
      "&kjcy;": "ќ",
      "&kopf;": "𝕜",
      "&kscr;": "𝓀",
      "&lAarr;": "⇚",
      "&lArr;": "⇐",
      "&lAtail;": "⤛",
      "&lBarr;": "⤎",
      "&lE;": "≦",
      "&lEg;": "⪋",
      "&lHar;": "⥢",
      "&lacute;": "ĺ",
      "&laemptyv;": "⦴",
      "&lagran;": "ℒ",
      "&lambda;": "λ",
      "&lang;": "⟨",
      "&langd;": "⦑",
      "&langle;": "⟨",
      "&lap;": "⪅",
      "&laquo": "«",
      "&laquo;": "«",
      "&larr;": "←",
      "&larrb;": "⇤",
      "&larrbfs;": "⤟",
      "&larrfs;": "⤝",
      "&larrhk;": "↩",
      "&larrlp;": "↫",
      "&larrpl;": "⤹",
      "&larrsim;": "⥳",
      "&larrtl;": "↢",
      "&lat;": "⪫",
      "&latail;": "⤙",
      "&late;": "⪭",
      "&lates;": "⪭︀",
      "&lbarr;": "⤌",
      "&lbbrk;": "❲",
      "&lbrace;": "{",
      "&lbrack;": "[",
      "&lbrke;": "⦋",
      "&lbrksld;": "⦏",
      "&lbrkslu;": "⦍",
      "&lcaron;": "ľ",
      "&lcedil;": "ļ",
      "&lceil;": "⌈",
      "&lcub;": "{",
      "&lcy;": "л",
      "&ldca;": "⤶",
      "&ldquo;": "“",
      "&ldquor;": "„",
      "&ldrdhar;": "⥧",
      "&ldrushar;": "⥋",
      "&ldsh;": "↲",
      "&le;": "≤",
      "&leftarrow;": "←",
      "&leftarrowtail;": "↢",
      "&leftharpoondown;": "↽",
      "&leftharpoonup;": "↼",
      "&leftleftarrows;": "⇇",
      "&leftrightarrow;": "↔",
      "&leftrightarrows;": "⇆",
      "&leftrightharpoons;": "⇋",
      "&leftrightsquigarrow;": "↭",
      "&leftthreetimes;": "⋋",
      "&leg;": "⋚",
      "&leq;": "≤",
      "&leqq;": "≦",
      "&leqslant;": "⩽",
      "&les;": "⩽",
      "&lescc;": "⪨",
      "&lesdot;": "⩿",
      "&lesdoto;": "⪁",
      "&lesdotor;": "⪃",
      "&lesg;": "⋚︀",
      "&lesges;": "⪓",
      "&lessapprox;": "⪅",
      "&lessdot;": "⋖",
      "&lesseqgtr;": "⋚",
      "&lesseqqgtr;": "⪋",
      "&lessgtr;": "≶",
      "&lesssim;": "≲",
      "&lfisht;": "⥼",
      "&lfloor;": "⌊",
      "&lfr;": "𝔩",
      "&lg;": "≶",
      "&lgE;": "⪑",
      "&lhard;": "↽",
      "&lharu;": "↼",
      "&lharul;": "⥪",
      "&lhblk;": "▄",
      "&ljcy;": "љ",
      "&ll;": "≪",
      "&llarr;": "⇇",
      "&llcorner;": "⌞",
      "&llhard;": "⥫",
      "&lltri;": "◺",
      "&lmidot;": "ŀ",
      "&lmoust;": "⎰",
      "&lmoustache;": "⎰",
      "&lnE;": "≨",
      "&lnap;": "⪉",
      "&lnapprox;": "⪉",
      "&lne;": "⪇",
      "&lneq;": "⪇",
      "&lneqq;": "≨",
      "&lnsim;": "⋦",
      "&loang;": "⟬",
      "&loarr;": "⇽",
      "&lobrk;": "⟦",
      "&longleftarrow;": "⟵",
      "&longleftrightarrow;": "⟷",
      "&longmapsto;": "⟼",
      "&longrightarrow;": "⟶",
      "&looparrowleft;": "↫",
      "&looparrowright;": "↬",
      "&lopar;": "⦅",
      "&lopf;": "𝕝",
      "&loplus;": "⨭",
      "&lotimes;": "⨴",
      "&lowast;": "∗",
      "&lowbar;": "_",
      "&loz;": "◊",
      "&lozenge;": "◊",
      "&lozf;": "⧫",
      "&lpar;": "(",
      "&lparlt;": "⦓",
      "&lrarr;": "⇆",
      "&lrcorner;": "⌟",
      "&lrhar;": "⇋",
      "&lrhard;": "⥭",
      "&lrm;": "‎",
      "&lrtri;": "⊿",
      "&lsaquo;": "‹",
      "&lscr;": "𝓁",
      "&lsh;": "↰",
      "&lsim;": "≲",
      "&lsime;": "⪍",
      "&lsimg;": "⪏",
      "&lsqb;": "[",
      "&lsquo;": "‘",
      "&lsquor;": "‚",
      "&lstrok;": "ł",
      "&lt": "<",
      "&lt;": "<",
      "&ltcc;": "⪦",
      "&ltcir;": "⩹",
      "&ltdot;": "⋖",
      "&lthree;": "⋋",
      "&ltimes;": "⋉",
      "&ltlarr;": "⥶",
      "&ltquest;": "⩻",
      "&ltrPar;": "⦖",
      "&ltri;": "◃",
      "&ltrie;": "⊴",
      "&ltrif;": "◂",
      "&lurdshar;": "⥊",
      "&luruhar;": "⥦",
      "&lvertneqq;": "≨︀",
      "&lvnE;": "≨︀",
      "&mDDot;": "∺",
      "&macr": "¯",
      "&macr;": "¯",
      "&male;": "♂",
      "&malt;": "✠",
      "&maltese;": "✠",
      "&map;": "↦",
      "&mapsto;": "↦",
      "&mapstodown;": "↧",
      "&mapstoleft;": "↤",
      "&mapstoup;": "↥",
      "&marker;": "▮",
      "&mcomma;": "⨩",
      "&mcy;": "м",
      "&mdash;": "—",
      "&measuredangle;": "∡",
      "&mfr;": "𝔪",
      "&mho;": "℧",
      "&micro": "µ",
      "&micro;": "µ",
      "&mid;": "∣",
      "&midast;": "*",
      "&midcir;": "⫰",
      "&middot": "·",
      "&middot;": "·",
      "&minus;": "−",
      "&minusb;": "⊟",
      "&minusd;": "∸",
      "&minusdu;": "⨪",
      "&mlcp;": "⫛",
      "&mldr;": "…",
      "&mnplus;": "∓",
      "&models;": "⊧",
      "&mopf;": "𝕞",
      "&mp;": "∓",
      "&mscr;": "𝓂",
      "&mstpos;": "∾",
      "&mu;": "μ",
      "&multimap;": "⊸",
      "&mumap;": "⊸",
      "&nGg;": "⋙̸",
      "&nGt;": "≫⃒",
      "&nGtv;": "≫̸",
      "&nLeftarrow;": "⇍",
      "&nLeftrightarrow;": "⇎",
      "&nLl;": "⋘̸",
      "&nLt;": "≪⃒",
      "&nLtv;": "≪̸",
      "&nRightarrow;": "⇏",
      "&nVDash;": "⊯",
      "&nVdash;": "⊮",
      "&nabla;": "∇",
      "&nacute;": "ń",
      "&nang;": "∠⃒",
      "&nap;": "≉",
      "&napE;": "⩰̸",
      "&napid;": "≋̸",
      "&napos;": "ŉ",
      "&napprox;": "≉",
      "&natur;": "♮",
      "&natural;": "♮",
      "&naturals;": "ℕ",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&nbump;": "≎̸",
      "&nbumpe;": "≏̸",
      "&ncap;": "⩃",
      "&ncaron;": "ň",
      "&ncedil;": "ņ",
      "&ncong;": "≇",
      "&ncongdot;": "⩭̸",
      "&ncup;": "⩂",
      "&ncy;": "н",
      "&ndash;": "–",
      "&ne;": "≠",
      "&neArr;": "⇗",
      "&nearhk;": "⤤",
      "&nearr;": "↗",
      "&nearrow;": "↗",
      "&nedot;": "≐̸",
      "&nequiv;": "≢",
      "&nesear;": "⤨",
      "&nesim;": "≂̸",
      "&nexist;": "∄",
      "&nexists;": "∄",
      "&nfr;": "𝔫",
      "&ngE;": "≧̸",
      "&nge;": "≱",
      "&ngeq;": "≱",
      "&ngeqq;": "≧̸",
      "&ngeqslant;": "⩾̸",
      "&nges;": "⩾̸",
      "&ngsim;": "≵",
      "&ngt;": "≯",
      "&ngtr;": "≯",
      "&nhArr;": "⇎",
      "&nharr;": "↮",
      "&nhpar;": "⫲",
      "&ni;": "∋",
      "&nis;": "⋼",
      "&nisd;": "⋺",
      "&niv;": "∋",
      "&njcy;": "њ",
      "&nlArr;": "⇍",
      "&nlE;": "≦̸",
      "&nlarr;": "↚",
      "&nldr;": "‥",
      "&nle;": "≰",
      "&nleftarrow;": "↚",
      "&nleftrightarrow;": "↮",
      "&nleq;": "≰",
      "&nleqq;": "≦̸",
      "&nleqslant;": "⩽̸",
      "&nles;": "⩽̸",
      "&nless;": "≮",
      "&nlsim;": "≴",
      "&nlt;": "≮",
      "&nltri;": "⋪",
      "&nltrie;": "⋬",
      "&nmid;": "∤",
      "&nopf;": "𝕟",
      "&not": "¬",
      "&not;": "¬",
      "&notin;": "∉",
      "&notinE;": "⋹̸",
      "&notindot;": "⋵̸",
      "&notinva;": "∉",
      "&notinvb;": "⋷",
      "&notinvc;": "⋶",
      "&notni;": "∌",
      "&notniva;": "∌",
      "&notnivb;": "⋾",
      "&notnivc;": "⋽",
      "&npar;": "∦",
      "&nparallel;": "∦",
      "&nparsl;": "⫽⃥",
      "&npart;": "∂̸",
      "&npolint;": "⨔",
      "&npr;": "⊀",
      "&nprcue;": "⋠",
      "&npre;": "⪯̸",
      "&nprec;": "⊀",
      "&npreceq;": "⪯̸",
      "&nrArr;": "⇏",
      "&nrarr;": "↛",
      "&nrarrc;": "⤳̸",
      "&nrarrw;": "↝̸",
      "&nrightarrow;": "↛",
      "&nrtri;": "⋫",
      "&nrtrie;": "⋭",
      "&nsc;": "⊁",
      "&nsccue;": "⋡",
      "&nsce;": "⪰̸",
      "&nscr;": "𝓃",
      "&nshortmid;": "∤",
      "&nshortparallel;": "∦",
      "&nsim;": "≁",
      "&nsime;": "≄",
      "&nsimeq;": "≄",
      "&nsmid;": "∤",
      "&nspar;": "∦",
      "&nsqsube;": "⋢",
      "&nsqsupe;": "⋣",
      "&nsub;": "⊄",
      "&nsubE;": "⫅̸",
      "&nsube;": "⊈",
      "&nsubset;": "⊂⃒",
      "&nsubseteq;": "⊈",
      "&nsubseteqq;": "⫅̸",
      "&nsucc;": "⊁",
      "&nsucceq;": "⪰̸",
      "&nsup;": "⊅",
      "&nsupE;": "⫆̸",
      "&nsupe;": "⊉",
      "&nsupset;": "⊃⃒",
      "&nsupseteq;": "⊉",
      "&nsupseteqq;": "⫆̸",
      "&ntgl;": "≹",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ntlg;": "≸",
      "&ntriangleleft;": "⋪",
      "&ntrianglelefteq;": "⋬",
      "&ntriangleright;": "⋫",
      "&ntrianglerighteq;": "⋭",
      "&nu;": "ν",
      "&num;": "#",
      "&numero;": "№",
      "&numsp;": " ",
      "&nvDash;": "⊭",
      "&nvHarr;": "⤄",
      "&nvap;": "≍⃒",
      "&nvdash;": "⊬",
      "&nvge;": "≥⃒",
      "&nvgt;": ">⃒",
      "&nvinfin;": "⧞",
      "&nvlArr;": "⤂",
      "&nvle;": "≤⃒",
      "&nvlt;": "<⃒",
      "&nvltrie;": "⊴⃒",
      "&nvrArr;": "⤃",
      "&nvrtrie;": "⊵⃒",
      "&nvsim;": "∼⃒",
      "&nwArr;": "⇖",
      "&nwarhk;": "⤣",
      "&nwarr;": "↖",
      "&nwarrow;": "↖",
      "&nwnear;": "⤧",
      "&oS;": "Ⓢ",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&oast;": "⊛",
      "&ocir;": "⊚",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&ocy;": "о",
      "&odash;": "⊝",
      "&odblac;": "ő",
      "&odiv;": "⨸",
      "&odot;": "⊙",
      "&odsold;": "⦼",
      "&oelig;": "œ",
      "&ofcir;": "⦿",
      "&ofr;": "𝔬",
      "&ogon;": "˛",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&ogt;": "⧁",
      "&ohbar;": "⦵",
      "&ohm;": "Ω",
      "&oint;": "∮",
      "&olarr;": "↺",
      "&olcir;": "⦾",
      "&olcross;": "⦻",
      "&oline;": "‾",
      "&olt;": "⧀",
      "&omacr;": "ō",
      "&omega;": "ω",
      "&omicron;": "ο",
      "&omid;": "⦶",
      "&ominus;": "⊖",
      "&oopf;": "𝕠",
      "&opar;": "⦷",
      "&operp;": "⦹",
      "&oplus;": "⊕",
      "&or;": "∨",
      "&orarr;": "↻",
      "&ord;": "⩝",
      "&order;": "ℴ",
      "&orderof;": "ℴ",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&ordm": "º",
      "&ordm;": "º",
      "&origof;": "⊶",
      "&oror;": "⩖",
      "&orslope;": "⩗",
      "&orv;": "⩛",
      "&oscr;": "ℴ",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&osol;": "⊘",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&otimes;": "⊗",
      "&otimesas;": "⨶",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&ovbar;": "⌽",
      "&par;": "∥",
      "&para": "¶",
      "&para;": "¶",
      "&parallel;": "∥",
      "&parsim;": "⫳",
      "&parsl;": "⫽",
      "&part;": "∂",
      "&pcy;": "п",
      "&percnt;": "%",
      "&period;": ".",
      "&permil;": "‰",
      "&perp;": "⊥",
      "&pertenk;": "‱",
      "&pfr;": "𝔭",
      "&phi;": "φ",
      "&phiv;": "ϕ",
      "&phmmat;": "ℳ",
      "&phone;": "☎",
      "&pi;": "π",
      "&pitchfork;": "⋔",
      "&piv;": "ϖ",
      "&planck;": "ℏ",
      "&planckh;": "ℎ",
      "&plankv;": "ℏ",
      "&plus;": "+",
      "&plusacir;": "⨣",
      "&plusb;": "⊞",
      "&pluscir;": "⨢",
      "&plusdo;": "∔",
      "&plusdu;": "⨥",
      "&pluse;": "⩲",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&plussim;": "⨦",
      "&plustwo;": "⨧",
      "&pm;": "±",
      "&pointint;": "⨕",
      "&popf;": "𝕡",
      "&pound": "£",
      "&pound;": "£",
      "&pr;": "≺",
      "&prE;": "⪳",
      "&prap;": "⪷",
      "&prcue;": "≼",
      "&pre;": "⪯",
      "&prec;": "≺",
      "&precapprox;": "⪷",
      "&preccurlyeq;": "≼",
      "&preceq;": "⪯",
      "&precnapprox;": "⪹",
      "&precneqq;": "⪵",
      "&precnsim;": "⋨",
      "&precsim;": "≾",
      "&prime;": "′",
      "&primes;": "ℙ",
      "&prnE;": "⪵",
      "&prnap;": "⪹",
      "&prnsim;": "⋨",
      "&prod;": "∏",
      "&profalar;": "⌮",
      "&profline;": "⌒",
      "&profsurf;": "⌓",
      "&prop;": "∝",
      "&propto;": "∝",
      "&prsim;": "≾",
      "&prurel;": "⊰",
      "&pscr;": "𝓅",
      "&psi;": "ψ",
      "&puncsp;": " ",
      "&qfr;": "𝔮",
      "&qint;": "⨌",
      "&qopf;": "𝕢",
      "&qprime;": "⁗",
      "&qscr;": "𝓆",
      "&quaternions;": "ℍ",
      "&quatint;": "⨖",
      "&quest;": "?",
      "&questeq;": "≟",
      "&quot": '"',
      "&quot;": '"',
      "&rAarr;": "⇛",
      "&rArr;": "⇒",
      "&rAtail;": "⤜",
      "&rBarr;": "⤏",
      "&rHar;": "⥤",
      "&race;": "∽̱",
      "&racute;": "ŕ",
      "&radic;": "√",
      "&raemptyv;": "⦳",
      "&rang;": "⟩",
      "&rangd;": "⦒",
      "&range;": "⦥",
      "&rangle;": "⟩",
      "&raquo": "»",
      "&raquo;": "»",
      "&rarr;": "→",
      "&rarrap;": "⥵",
      "&rarrb;": "⇥",
      "&rarrbfs;": "⤠",
      "&rarrc;": "⤳",
      "&rarrfs;": "⤞",
      "&rarrhk;": "↪",
      "&rarrlp;": "↬",
      "&rarrpl;": "⥅",
      "&rarrsim;": "⥴",
      "&rarrtl;": "↣",
      "&rarrw;": "↝",
      "&ratail;": "⤚",
      "&ratio;": "∶",
      "&rationals;": "ℚ",
      "&rbarr;": "⤍",
      "&rbbrk;": "❳",
      "&rbrace;": "}",
      "&rbrack;": "]",
      "&rbrke;": "⦌",
      "&rbrksld;": "⦎",
      "&rbrkslu;": "⦐",
      "&rcaron;": "ř",
      "&rcedil;": "ŗ",
      "&rceil;": "⌉",
      "&rcub;": "}",
      "&rcy;": "р",
      "&rdca;": "⤷",
      "&rdldhar;": "⥩",
      "&rdquo;": "”",
      "&rdquor;": "”",
      "&rdsh;": "↳",
      "&real;": "ℜ",
      "&realine;": "ℛ",
      "&realpart;": "ℜ",
      "&reals;": "ℝ",
      "&rect;": "▭",
      "&reg": "®",
      "&reg;": "®",
      "&rfisht;": "⥽",
      "&rfloor;": "⌋",
      "&rfr;": "𝔯",
      "&rhard;": "⇁",
      "&rharu;": "⇀",
      "&rharul;": "⥬",
      "&rho;": "ρ",
      "&rhov;": "ϱ",
      "&rightarrow;": "→",
      "&rightarrowtail;": "↣",
      "&rightharpoondown;": "⇁",
      "&rightharpoonup;": "⇀",
      "&rightleftarrows;": "⇄",
      "&rightleftharpoons;": "⇌",
      "&rightrightarrows;": "⇉",
      "&rightsquigarrow;": "↝",
      "&rightthreetimes;": "⋌",
      "&ring;": "˚",
      "&risingdotseq;": "≓",
      "&rlarr;": "⇄",
      "&rlhar;": "⇌",
      "&rlm;": "‏",
      "&rmoust;": "⎱",
      "&rmoustache;": "⎱",
      "&rnmid;": "⫮",
      "&roang;": "⟭",
      "&roarr;": "⇾",
      "&robrk;": "⟧",
      "&ropar;": "⦆",
      "&ropf;": "𝕣",
      "&roplus;": "⨮",
      "&rotimes;": "⨵",
      "&rpar;": ")",
      "&rpargt;": "⦔",
      "&rppolint;": "⨒",
      "&rrarr;": "⇉",
      "&rsaquo;": "›",
      "&rscr;": "𝓇",
      "&rsh;": "↱",
      "&rsqb;": "]",
      "&rsquo;": "’",
      "&rsquor;": "’",
      "&rthree;": "⋌",
      "&rtimes;": "⋊",
      "&rtri;": "▹",
      "&rtrie;": "⊵",
      "&rtrif;": "▸",
      "&rtriltri;": "⧎",
      "&ruluhar;": "⥨",
      "&rx;": "℞",
      "&sacute;": "ś",
      "&sbquo;": "‚",
      "&sc;": "≻",
      "&scE;": "⪴",
      "&scap;": "⪸",
      "&scaron;": "š",
      "&sccue;": "≽",
      "&sce;": "⪰",
      "&scedil;": "ş",
      "&scirc;": "ŝ",
      "&scnE;": "⪶",
      "&scnap;": "⪺",
      "&scnsim;": "⋩",
      "&scpolint;": "⨓",
      "&scsim;": "≿",
      "&scy;": "с",
      "&sdot;": "⋅",
      "&sdotb;": "⊡",
      "&sdote;": "⩦",
      "&seArr;": "⇘",
      "&searhk;": "⤥",
      "&searr;": "↘",
      "&searrow;": "↘",
      "&sect": "§",
      "&sect;": "§",
      "&semi;": ";",
      "&seswar;": "⤩",
      "&setminus;": "∖",
      "&setmn;": "∖",
      "&sext;": "✶",
      "&sfr;": "𝔰",
      "&sfrown;": "⌢",
      "&sharp;": "♯",
      "&shchcy;": "щ",
      "&shcy;": "ш",
      "&shortmid;": "∣",
      "&shortparallel;": "∥",
      "&shy": "­",
      "&shy;": "­",
      "&sigma;": "σ",
      "&sigmaf;": "ς",
      "&sigmav;": "ς",
      "&sim;": "∼",
      "&simdot;": "⩪",
      "&sime;": "≃",
      "&simeq;": "≃",
      "&simg;": "⪞",
      "&simgE;": "⪠",
      "&siml;": "⪝",
      "&simlE;": "⪟",
      "&simne;": "≆",
      "&simplus;": "⨤",
      "&simrarr;": "⥲",
      "&slarr;": "←",
      "&smallsetminus;": "∖",
      "&smashp;": "⨳",
      "&smeparsl;": "⧤",
      "&smid;": "∣",
      "&smile;": "⌣",
      "&smt;": "⪪",
      "&smte;": "⪬",
      "&smtes;": "⪬︀",
      "&softcy;": "ь",
      "&sol;": "/",
      "&solb;": "⧄",
      "&solbar;": "⌿",
      "&sopf;": "𝕤",
      "&spades;": "♠",
      "&spadesuit;": "♠",
      "&spar;": "∥",
      "&sqcap;": "⊓",
      "&sqcaps;": "⊓︀",
      "&sqcup;": "⊔",
      "&sqcups;": "⊔︀",
      "&sqsub;": "⊏",
      "&sqsube;": "⊑",
      "&sqsubset;": "⊏",
      "&sqsubseteq;": "⊑",
      "&sqsup;": "⊐",
      "&sqsupe;": "⊒",
      "&sqsupset;": "⊐",
      "&sqsupseteq;": "⊒",
      "&squ;": "□",
      "&square;": "□",
      "&squarf;": "▪",
      "&squf;": "▪",
      "&srarr;": "→",
      "&sscr;": "𝓈",
      "&ssetmn;": "∖",
      "&ssmile;": "⌣",
      "&sstarf;": "⋆",
      "&star;": "☆",
      "&starf;": "★",
      "&straightepsilon;": "ϵ",
      "&straightphi;": "ϕ",
      "&strns;": "¯",
      "&sub;": "⊂",
      "&subE;": "⫅",
      "&subdot;": "⪽",
      "&sube;": "⊆",
      "&subedot;": "⫃",
      "&submult;": "⫁",
      "&subnE;": "⫋",
      "&subne;": "⊊",
      "&subplus;": "⪿",
      "&subrarr;": "⥹",
      "&subset;": "⊂",
      "&subseteq;": "⊆",
      "&subseteqq;": "⫅",
      "&subsetneq;": "⊊",
      "&subsetneqq;": "⫋",
      "&subsim;": "⫇",
      "&subsub;": "⫕",
      "&subsup;": "⫓",
      "&succ;": "≻",
      "&succapprox;": "⪸",
      "&succcurlyeq;": "≽",
      "&succeq;": "⪰",
      "&succnapprox;": "⪺",
      "&succneqq;": "⪶",
      "&succnsim;": "⋩",
      "&succsim;": "≿",
      "&sum;": "∑",
      "&sung;": "♪",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&sup;": "⊃",
      "&supE;": "⫆",
      "&supdot;": "⪾",
      "&supdsub;": "⫘",
      "&supe;": "⊇",
      "&supedot;": "⫄",
      "&suphsol;": "⟉",
      "&suphsub;": "⫗",
      "&suplarr;": "⥻",
      "&supmult;": "⫂",
      "&supnE;": "⫌",
      "&supne;": "⊋",
      "&supplus;": "⫀",
      "&supset;": "⊃",
      "&supseteq;": "⊇",
      "&supseteqq;": "⫆",
      "&supsetneq;": "⊋",
      "&supsetneqq;": "⫌",
      "&supsim;": "⫈",
      "&supsub;": "⫔",
      "&supsup;": "⫖",
      "&swArr;": "⇙",
      "&swarhk;": "⤦",
      "&swarr;": "↙",
      "&swarrow;": "↙",
      "&swnwar;": "⤪",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&target;": "⌖",
      "&tau;": "τ",
      "&tbrk;": "⎴",
      "&tcaron;": "ť",
      "&tcedil;": "ţ",
      "&tcy;": "т",
      "&tdot;": "⃛",
      "&telrec;": "⌕",
      "&tfr;": "𝔱",
      "&there4;": "∴",
      "&therefore;": "∴",
      "&theta;": "θ",
      "&thetasym;": "ϑ",
      "&thetav;": "ϑ",
      "&thickapprox;": "≈",
      "&thicksim;": "∼",
      "&thinsp;": " ",
      "&thkap;": "≈",
      "&thksim;": "∼",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&tilde;": "˜",
      "&times": "×",
      "&times;": "×",
      "&timesb;": "⊠",
      "&timesbar;": "⨱",
      "&timesd;": "⨰",
      "&tint;": "∭",
      "&toea;": "⤨",
      "&top;": "⊤",
      "&topbot;": "⌶",
      "&topcir;": "⫱",
      "&topf;": "𝕥",
      "&topfork;": "⫚",
      "&tosa;": "⤩",
      "&tprime;": "‴",
      "&trade;": "™",
      "&triangle;": "▵",
      "&triangledown;": "▿",
      "&triangleleft;": "◃",
      "&trianglelefteq;": "⊴",
      "&triangleq;": "≜",
      "&triangleright;": "▹",
      "&trianglerighteq;": "⊵",
      "&tridot;": "◬",
      "&trie;": "≜",
      "&triminus;": "⨺",
      "&triplus;": "⨹",
      "&trisb;": "⧍",
      "&tritime;": "⨻",
      "&trpezium;": "⏢",
      "&tscr;": "𝓉",
      "&tscy;": "ц",
      "&tshcy;": "ћ",
      "&tstrok;": "ŧ",
      "&twixt;": "≬",
      "&twoheadleftarrow;": "↞",
      "&twoheadrightarrow;": "↠",
      "&uArr;": "⇑",
      "&uHar;": "⥣",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&uarr;": "↑",
      "&ubrcy;": "ў",
      "&ubreve;": "ŭ",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&ucy;": "у",
      "&udarr;": "⇅",
      "&udblac;": "ű",
      "&udhar;": "⥮",
      "&ufisht;": "⥾",
      "&ufr;": "𝔲",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uharl;": "↿",
      "&uharr;": "↾",
      "&uhblk;": "▀",
      "&ulcorn;": "⌜",
      "&ulcorner;": "⌜",
      "&ulcrop;": "⌏",
      "&ultri;": "◸",
      "&umacr;": "ū",
      "&uml": "¨",
      "&uml;": "¨",
      "&uogon;": "ų",
      "&uopf;": "𝕦",
      "&uparrow;": "↑",
      "&updownarrow;": "↕",
      "&upharpoonleft;": "↿",
      "&upharpoonright;": "↾",
      "&uplus;": "⊎",
      "&upsi;": "υ",
      "&upsih;": "ϒ",
      "&upsilon;": "υ",
      "&upuparrows;": "⇈",
      "&urcorn;": "⌝",
      "&urcorner;": "⌝",
      "&urcrop;": "⌎",
      "&uring;": "ů",
      "&urtri;": "◹",
      "&uscr;": "𝓊",
      "&utdot;": "⋰",
      "&utilde;": "ũ",
      "&utri;": "▵",
      "&utrif;": "▴",
      "&uuarr;": "⇈",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&uwangle;": "⦧",
      "&vArr;": "⇕",
      "&vBar;": "⫨",
      "&vBarv;": "⫩",
      "&vDash;": "⊨",
      "&vangrt;": "⦜",
      "&varepsilon;": "ϵ",
      "&varkappa;": "ϰ",
      "&varnothing;": "∅",
      "&varphi;": "ϕ",
      "&varpi;": "ϖ",
      "&varpropto;": "∝",
      "&varr;": "↕",
      "&varrho;": "ϱ",
      "&varsigma;": "ς",
      "&varsubsetneq;": "⊊︀",
      "&varsubsetneqq;": "⫋︀",
      "&varsupsetneq;": "⊋︀",
      "&varsupsetneqq;": "⫌︀",
      "&vartheta;": "ϑ",
      "&vartriangleleft;": "⊲",
      "&vartriangleright;": "⊳",
      "&vcy;": "в",
      "&vdash;": "⊢",
      "&vee;": "∨",
      "&veebar;": "⊻",
      "&veeeq;": "≚",
      "&vellip;": "⋮",
      "&verbar;": "|",
      "&vert;": "|",
      "&vfr;": "𝔳",
      "&vltri;": "⊲",
      "&vnsub;": "⊂⃒",
      "&vnsup;": "⊃⃒",
      "&vopf;": "𝕧",
      "&vprop;": "∝",
      "&vrtri;": "⊳",
      "&vscr;": "𝓋",
      "&vsubnE;": "⫋︀",
      "&vsubne;": "⊊︀",
      "&vsupnE;": "⫌︀",
      "&vsupne;": "⊋︀",
      "&vzigzag;": "⦚",
      "&wcirc;": "ŵ",
      "&wedbar;": "⩟",
      "&wedge;": "∧",
      "&wedgeq;": "≙",
      "&weierp;": "℘",
      "&wfr;": "𝔴",
      "&wopf;": "𝕨",
      "&wp;": "℘",
      "&wr;": "≀",
      "&wreath;": "≀",
      "&wscr;": "𝓌",
      "&xcap;": "⋂",
      "&xcirc;": "◯",
      "&xcup;": "⋃",
      "&xdtri;": "▽",
      "&xfr;": "𝔵",
      "&xhArr;": "⟺",
      "&xharr;": "⟷",
      "&xi;": "ξ",
      "&xlArr;": "⟸",
      "&xlarr;": "⟵",
      "&xmap;": "⟼",
      "&xnis;": "⋻",
      "&xodot;": "⨀",
      "&xopf;": "𝕩",
      "&xoplus;": "⨁",
      "&xotime;": "⨂",
      "&xrArr;": "⟹",
      "&xrarr;": "⟶",
      "&xscr;": "𝓍",
      "&xsqcup;": "⨆",
      "&xuplus;": "⨄",
      "&xutri;": "△",
      "&xvee;": "⋁",
      "&xwedge;": "⋀",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&yacy;": "я",
      "&ycirc;": "ŷ",
      "&ycy;": "ы",
      "&yen": "¥",
      "&yen;": "¥",
      "&yfr;": "𝔶",
      "&yicy;": "ї",
      "&yopf;": "𝕪",
      "&yscr;": "𝓎",
      "&yucy;": "ю",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&zacute;": "ź",
      "&zcaron;": "ž",
      "&zcy;": "з",
      "&zdot;": "ż",
      "&zeetrf;": "ℨ",
      "&zeta;": "ζ",
      "&zfr;": "𝔷",
      "&zhcy;": "ж",
      "&zigrarr;": "⇝",
      "&zopf;": "𝕫",
      "&zscr;": "𝓏",
      "&zwj;": "‍",
      "&zwnj;": "‌"
    },
    characters: {
      "Æ": "&AElig;",
      "&": "&amp;",
      "Á": "&Aacute;",
      "Ă": "&Abreve;",
      "Â": "&Acirc;",
      "А": "&Acy;",
      "𝔄": "&Afr;",
      "À": "&Agrave;",
      "Α": "&Alpha;",
      "Ā": "&Amacr;",
      "⩓": "&And;",
      "Ą": "&Aogon;",
      "𝔸": "&Aopf;",
      "⁡": "&af;",
      "Å": "&angst;",
      "𝒜": "&Ascr;",
      "≔": "&coloneq;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "∖": "&ssetmn;",
      "⫧": "&Barv;",
      "⌆": "&doublebarwedge;",
      "Б": "&Bcy;",
      "∵": "&because;",
      "ℬ": "&bernou;",
      "Β": "&Beta;",
      "𝔅": "&Bfr;",
      "𝔹": "&Bopf;",
      "˘": "&breve;",
      "≎": "&bump;",
      "Ч": "&CHcy;",
      "©": "&copy;",
      "Ć": "&Cacute;",
      "⋒": "&Cap;",
      "ⅅ": "&DD;",
      "ℭ": "&Cfr;",
      "Č": "&Ccaron;",
      "Ç": "&Ccedil;",
      "Ĉ": "&Ccirc;",
      "∰": "&Cconint;",
      "Ċ": "&Cdot;",
      "¸": "&cedil;",
      "·": "&middot;",
      "Χ": "&Chi;",
      "⊙": "&odot;",
      "⊖": "&ominus;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "∲": "&cwconint;",
      "”": "&rdquor;",
      "’": "&rsquor;",
      "∷": "&Proportion;",
      "⩴": "&Colone;",
      "≡": "&equiv;",
      "∯": "&DoubleContourIntegral;",
      "∮": "&oint;",
      "ℂ": "&complexes;",
      "∐": "&coprod;",
      "∳": "&awconint;",
      "⨯": "&Cross;",
      "𝒞": "&Cscr;",
      "⋓": "&Cup;",
      "≍": "&asympeq;",
      "⤑": "&DDotrahd;",
      "Ђ": "&DJcy;",
      "Ѕ": "&DScy;",
      "Џ": "&DZcy;",
      "‡": "&ddagger;",
      "↡": "&Darr;",
      "⫤": "&DoubleLeftTee;",
      "Ď": "&Dcaron;",
      "Д": "&Dcy;",
      "∇": "&nabla;",
      "Δ": "&Delta;",
      "𝔇": "&Dfr;",
      "´": "&acute;",
      "˙": "&dot;",
      "˝": "&dblac;",
      "`": "&grave;",
      "˜": "&tilde;",
      "⋄": "&diamond;",
      "ⅆ": "&dd;",
      "𝔻": "&Dopf;",
      "¨": "&uml;",
      "⃜": "&DotDot;",
      "≐": "&esdot;",
      "⇓": "&dArr;",
      "⇐": "&lArr;",
      "⇔": "&iff;",
      "⟸": "&xlArr;",
      "⟺": "&xhArr;",
      "⟹": "&xrArr;",
      "⇒": "&rArr;",
      "⊨": "&vDash;",
      "⇑": "&uArr;",
      "⇕": "&vArr;",
      "∥": "&spar;",
      "↓": "&downarrow;",
      "⤓": "&DownArrowBar;",
      "⇵": "&duarr;",
      "̑": "&DownBreve;",
      "⥐": "&DownLeftRightVector;",
      "⥞": "&DownLeftTeeVector;",
      "↽": "&lhard;",
      "⥖": "&DownLeftVectorBar;",
      "⥟": "&DownRightTeeVector;",
      "⇁": "&rightharpoondown;",
      "⥗": "&DownRightVectorBar;",
      "⊤": "&top;",
      "↧": "&mapstodown;",
      "𝒟": "&Dscr;",
      "Đ": "&Dstrok;",
      "Ŋ": "&ENG;",
      "Ð": "&ETH;",
      "É": "&Eacute;",
      "Ě": "&Ecaron;",
      "Ê": "&Ecirc;",
      "Э": "&Ecy;",
      "Ė": "&Edot;",
      "𝔈": "&Efr;",
      "È": "&Egrave;",
      "∈": "&isinv;",
      "Ē": "&Emacr;",
      "◻": "&EmptySmallSquare;",
      "▫": "&EmptyVerySmallSquare;",
      "Ę": "&Eogon;",
      "𝔼": "&Eopf;",
      "Ε": "&Epsilon;",
      "⩵": "&Equal;",
      "≂": "&esim;",
      "⇌": "&rlhar;",
      "ℰ": "&expectation;",
      "⩳": "&Esim;",
      "Η": "&Eta;",
      "Ë": "&Euml;",
      "∃": "&exist;",
      "ⅇ": "&exponentiale;",
      "Ф": "&Fcy;",
      "𝔉": "&Ffr;",
      "◼": "&FilledSmallSquare;",
      "▪": "&squf;",
      "𝔽": "&Fopf;",
      "∀": "&forall;",
      "ℱ": "&Fscr;",
      "Ѓ": "&GJcy;",
      ">": "&gt;",
      "Γ": "&Gamma;",
      "Ϝ": "&Gammad;",
      "Ğ": "&Gbreve;",
      "Ģ": "&Gcedil;",
      "Ĝ": "&Gcirc;",
      "Г": "&Gcy;",
      "Ġ": "&Gdot;",
      "𝔊": "&Gfr;",
      "⋙": "&ggg;",
      "𝔾": "&Gopf;",
      "≥": "&geq;",
      "⋛": "&gtreqless;",
      "≧": "&geqq;",
      "⪢": "&GreaterGreater;",
      "≷": "&gtrless;",
      "⩾": "&ges;",
      "≳": "&gtrsim;",
      "𝒢": "&Gscr;",
      "≫": "&gg;",
      "Ъ": "&HARDcy;",
      "ˇ": "&caron;",
      "^": "&Hat;",
      "Ĥ": "&Hcirc;",
      "ℌ": "&Poincareplane;",
      "ℋ": "&hamilt;",
      "ℍ": "&quaternions;",
      "─": "&boxh;",
      "Ħ": "&Hstrok;",
      "≏": "&bumpeq;",
      "Е": "&IEcy;",
      "Ĳ": "&IJlig;",
      "Ё": "&IOcy;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "И": "&Icy;",
      "İ": "&Idot;",
      "ℑ": "&imagpart;",
      "Ì": "&Igrave;",
      "Ī": "&Imacr;",
      "ⅈ": "&ii;",
      "∬": "&Int;",
      "∫": "&int;",
      "⋂": "&xcap;",
      "⁣": "&ic;",
      "⁢": "&it;",
      "Į": "&Iogon;",
      "𝕀": "&Iopf;",
      "Ι": "&Iota;",
      "ℐ": "&imagline;",
      "Ĩ": "&Itilde;",
      "І": "&Iukcy;",
      "Ï": "&Iuml;",
      "Ĵ": "&Jcirc;",
      "Й": "&Jcy;",
      "𝔍": "&Jfr;",
      "𝕁": "&Jopf;",
      "𝒥": "&Jscr;",
      "Ј": "&Jsercy;",
      "Є": "&Jukcy;",
      "Х": "&KHcy;",
      "Ќ": "&KJcy;",
      "Κ": "&Kappa;",
      "Ķ": "&Kcedil;",
      "К": "&Kcy;",
      "𝔎": "&Kfr;",
      "𝕂": "&Kopf;",
      "𝒦": "&Kscr;",
      "Љ": "&LJcy;",
      "<": "&lt;",
      "Ĺ": "&Lacute;",
      "Λ": "&Lambda;",
      "⟪": "&Lang;",
      "ℒ": "&lagran;",
      "↞": "&twoheadleftarrow;",
      "Ľ": "&Lcaron;",
      "Ļ": "&Lcedil;",
      "Л": "&Lcy;",
      "⟨": "&langle;",
      "←": "&slarr;",
      "⇤": "&larrb;",
      "⇆": "&lrarr;",
      "⌈": "&lceil;",
      "⟦": "&lobrk;",
      "⥡": "&LeftDownTeeVector;",
      "⇃": "&downharpoonleft;",
      "⥙": "&LeftDownVectorBar;",
      "⌊": "&lfloor;",
      "↔": "&leftrightarrow;",
      "⥎": "&LeftRightVector;",
      "⊣": "&dashv;",
      "↤": "&mapstoleft;",
      "⥚": "&LeftTeeVector;",
      "⊲": "&vltri;",
      "⧏": "&LeftTriangleBar;",
      "⊴": "&trianglelefteq;",
      "⥑": "&LeftUpDownVector;",
      "⥠": "&LeftUpTeeVector;",
      "↿": "&upharpoonleft;",
      "⥘": "&LeftUpVectorBar;",
      "↼": "&lharu;",
      "⥒": "&LeftVectorBar;",
      "⋚": "&lesseqgtr;",
      "≦": "&leqq;",
      "≶": "&lg;",
      "⪡": "&LessLess;",
      "⩽": "&les;",
      "≲": "&lsim;",
      "𝔏": "&Lfr;",
      "⋘": "&Ll;",
      "⇚": "&lAarr;",
      "Ŀ": "&Lmidot;",
      "⟵": "&xlarr;",
      "⟷": "&xharr;",
      "⟶": "&xrarr;",
      "𝕃": "&Lopf;",
      "↙": "&swarrow;",
      "↘": "&searrow;",
      "↰": "&lsh;",
      "Ł": "&Lstrok;",
      "≪": "&ll;",
      "⤅": "&Map;",
      "М": "&Mcy;",
      " ": "&MediumSpace;",
      "ℳ": "&phmmat;",
      "𝔐": "&Mfr;",
      "∓": "&mp;",
      "𝕄": "&Mopf;",
      "Μ": "&Mu;",
      "Њ": "&NJcy;",
      "Ń": "&Nacute;",
      "Ň": "&Ncaron;",
      "Ņ": "&Ncedil;",
      "Н": "&Ncy;",
      "​": "&ZeroWidthSpace;",
      "\n": "&NewLine;",
      "𝔑": "&Nfr;",
      "⁠": "&NoBreak;",
      " ": "&nbsp;",
      "ℕ": "&naturals;",
      "⫬": "&Not;",
      "≢": "&nequiv;",
      "≭": "&NotCupCap;",
      "∦": "&nspar;",
      "∉": "&notinva;",
      "≠": "&ne;",
      "≂̸": "&nesim;",
      "∄": "&nexists;",
      "≯": "&ngtr;",
      "≱": "&ngeq;",
      "≧̸": "&ngeqq;",
      "≫̸": "&nGtv;",
      "≹": "&ntgl;",
      "⩾̸": "&nges;",
      "≵": "&ngsim;",
      "≎̸": "&nbump;",
      "≏̸": "&nbumpe;",
      "⋪": "&ntriangleleft;",
      "⧏̸": "&NotLeftTriangleBar;",
      "⋬": "&ntrianglelefteq;",
      "≮": "&nlt;",
      "≰": "&nleq;",
      "≸": "&ntlg;",
      "≪̸": "&nLtv;",
      "⩽̸": "&nles;",
      "≴": "&nlsim;",
      "⪢̸": "&NotNestedGreaterGreater;",
      "⪡̸": "&NotNestedLessLess;",
      "⊀": "&nprec;",
      "⪯̸": "&npreceq;",
      "⋠": "&nprcue;",
      "∌": "&notniva;",
      "⋫": "&ntriangleright;",
      "⧐̸": "&NotRightTriangleBar;",
      "⋭": "&ntrianglerighteq;",
      "⊏̸": "&NotSquareSubset;",
      "⋢": "&nsqsube;",
      "⊐̸": "&NotSquareSuperset;",
      "⋣": "&nsqsupe;",
      "⊂⃒": "&vnsub;",
      "⊈": "&nsubseteq;",
      "⊁": "&nsucc;",
      "⪰̸": "&nsucceq;",
      "⋡": "&nsccue;",
      "≿̸": "&NotSucceedsTilde;",
      "⊃⃒": "&vnsup;",
      "⊉": "&nsupseteq;",
      "≁": "&nsim;",
      "≄": "&nsimeq;",
      "≇": "&ncong;",
      "≉": "&napprox;",
      "∤": "&nsmid;",
      "𝒩": "&Nscr;",
      "Ñ": "&Ntilde;",
      "Ν": "&Nu;",
      "Œ": "&OElig;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "О": "&Ocy;",
      "Ő": "&Odblac;",
      "𝔒": "&Ofr;",
      "Ò": "&Ograve;",
      "Ō": "&Omacr;",
      "Ω": "&ohm;",
      "Ο": "&Omicron;",
      "𝕆": "&Oopf;",
      "“": "&ldquo;",
      "‘": "&lsquo;",
      "⩔": "&Or;",
      "𝒪": "&Oscr;",
      "Ø": "&Oslash;",
      "Õ": "&Otilde;",
      "⨷": "&Otimes;",
      "Ö": "&Ouml;",
      "‾": "&oline;",
      "⏞": "&OverBrace;",
      "⎴": "&tbrk;",
      "⏜": "&OverParenthesis;",
      "∂": "&part;",
      "П": "&Pcy;",
      "𝔓": "&Pfr;",
      "Φ": "&Phi;",
      "Π": "&Pi;",
      "±": "&pm;",
      "ℙ": "&primes;",
      "⪻": "&Pr;",
      "≺": "&prec;",
      "⪯": "&preceq;",
      "≼": "&preccurlyeq;",
      "≾": "&prsim;",
      "″": "&Prime;",
      "∏": "&prod;",
      "∝": "&vprop;",
      "𝒫": "&Pscr;",
      "Ψ": "&Psi;",
      '"': "&quot;",
      "𝔔": "&Qfr;",
      "ℚ": "&rationals;",
      "𝒬": "&Qscr;",
      "⤐": "&drbkarow;",
      "®": "&reg;",
      "Ŕ": "&Racute;",
      "⟫": "&Rang;",
      "↠": "&twoheadrightarrow;",
      "⤖": "&Rarrtl;",
      "Ř": "&Rcaron;",
      "Ŗ": "&Rcedil;",
      "Р": "&Rcy;",
      "ℜ": "&realpart;",
      "∋": "&niv;",
      "⇋": "&lrhar;",
      "⥯": "&duhar;",
      "Ρ": "&Rho;",
      "⟩": "&rangle;",
      "→": "&srarr;",
      "⇥": "&rarrb;",
      "⇄": "&rlarr;",
      "⌉": "&rceil;",
      "⟧": "&robrk;",
      "⥝": "&RightDownTeeVector;",
      "⇂": "&downharpoonright;",
      "⥕": "&RightDownVectorBar;",
      "⌋": "&rfloor;",
      "⊢": "&vdash;",
      "↦": "&mapsto;",
      "⥛": "&RightTeeVector;",
      "⊳": "&vrtri;",
      "⧐": "&RightTriangleBar;",
      "⊵": "&trianglerighteq;",
      "⥏": "&RightUpDownVector;",
      "⥜": "&RightUpTeeVector;",
      "↾": "&upharpoonright;",
      "⥔": "&RightUpVectorBar;",
      "⇀": "&rightharpoonup;",
      "⥓": "&RightVectorBar;",
      "ℝ": "&reals;",
      "⥰": "&RoundImplies;",
      "⇛": "&rAarr;",
      "ℛ": "&realine;",
      "↱": "&rsh;",
      "⧴": "&RuleDelayed;",
      "Щ": "&SHCHcy;",
      "Ш": "&SHcy;",
      "Ь": "&SOFTcy;",
      "Ś": "&Sacute;",
      "⪼": "&Sc;",
      "Š": "&Scaron;",
      "Ş": "&Scedil;",
      "Ŝ": "&Scirc;",
      "С": "&Scy;",
      "𝔖": "&Sfr;",
      "↑": "&uparrow;",
      "Σ": "&Sigma;",
      "∘": "&compfn;",
      "𝕊": "&Sopf;",
      "√": "&radic;",
      "□": "&square;",
      "⊓": "&sqcap;",
      "⊏": "&sqsubset;",
      "⊑": "&sqsubseteq;",
      "⊐": "&sqsupset;",
      "⊒": "&sqsupseteq;",
      "⊔": "&sqcup;",
      "𝒮": "&Sscr;",
      "⋆": "&sstarf;",
      "⋐": "&Subset;",
      "⊆": "&subseteq;",
      "≻": "&succ;",
      "⪰": "&succeq;",
      "≽": "&succcurlyeq;",
      "≿": "&succsim;",
      "∑": "&sum;",
      "⋑": "&Supset;",
      "⊃": "&supset;",
      "⊇": "&supseteq;",
      "Þ": "&THORN;",
      "™": "&trade;",
      "Ћ": "&TSHcy;",
      "Ц": "&TScy;",
      "\t": "&Tab;",
      "Τ": "&Tau;",
      "Ť": "&Tcaron;",
      "Ţ": "&Tcedil;",
      "Т": "&Tcy;",
      "𝔗": "&Tfr;",
      "∴": "&therefore;",
      "Θ": "&Theta;",
      "  ": "&ThickSpace;",
      " ": "&thinsp;",
      "∼": "&thksim;",
      "≃": "&simeq;",
      "≅": "&cong;",
      "≈": "&thkap;",
      "𝕋": "&Topf;",
      "⃛": "&tdot;",
      "𝒯": "&Tscr;",
      "Ŧ": "&Tstrok;",
      "Ú": "&Uacute;",
      "↟": "&Uarr;",
      "⥉": "&Uarrocir;",
      "Ў": "&Ubrcy;",
      "Ŭ": "&Ubreve;",
      "Û": "&Ucirc;",
      "У": "&Ucy;",
      "Ű": "&Udblac;",
      "𝔘": "&Ufr;",
      "Ù": "&Ugrave;",
      "Ū": "&Umacr;",
      _: "&lowbar;",
      "⏟": "&UnderBrace;",
      "⎵": "&bbrk;",
      "⏝": "&UnderParenthesis;",
      "⋃": "&xcup;",
      "⊎": "&uplus;",
      "Ų": "&Uogon;",
      "𝕌": "&Uopf;",
      "⤒": "&UpArrowBar;",
      "⇅": "&udarr;",
      "↕": "&varr;",
      "⥮": "&udhar;",
      "⊥": "&perp;",
      "↥": "&mapstoup;",
      "↖": "&nwarrow;",
      "↗": "&nearrow;",
      "ϒ": "&upsih;",
      "Υ": "&Upsilon;",
      "Ů": "&Uring;",
      "𝒰": "&Uscr;",
      "Ũ": "&Utilde;",
      "Ü": "&Uuml;",
      "⊫": "&VDash;",
      "⫫": "&Vbar;",
      "В": "&Vcy;",
      "⊩": "&Vdash;",
      "⫦": "&Vdashl;",
      "⋁": "&xvee;",
      "‖": "&Vert;",
      "∣": "&smid;",
      "|": "&vert;",
      "❘": "&VerticalSeparator;",
      "≀": "&wreath;",
      " ": "&hairsp;",
      "𝔙": "&Vfr;",
      "𝕍": "&Vopf;",
      "𝒱": "&Vscr;",
      "⊪": "&Vvdash;",
      "Ŵ": "&Wcirc;",
      "⋀": "&xwedge;",
      "𝔚": "&Wfr;",
      "𝕎": "&Wopf;",
      "𝒲": "&Wscr;",
      "𝔛": "&Xfr;",
      "Ξ": "&Xi;",
      "𝕏": "&Xopf;",
      "𝒳": "&Xscr;",
      "Я": "&YAcy;",
      "Ї": "&YIcy;",
      "Ю": "&YUcy;",
      "Ý": "&Yacute;",
      "Ŷ": "&Ycirc;",
      "Ы": "&Ycy;",
      "𝔜": "&Yfr;",
      "𝕐": "&Yopf;",
      "𝒴": "&Yscr;",
      "Ÿ": "&Yuml;",
      "Ж": "&ZHcy;",
      "Ź": "&Zacute;",
      "Ž": "&Zcaron;",
      "З": "&Zcy;",
      "Ż": "&Zdot;",
      "Ζ": "&Zeta;",
      "ℨ": "&zeetrf;",
      "ℤ": "&integers;",
      "𝒵": "&Zscr;",
      "á": "&aacute;",
      "ă": "&abreve;",
      "∾": "&mstpos;",
      "∾̳": "&acE;",
      "∿": "&acd;",
      "â": "&acirc;",
      "а": "&acy;",
      "æ": "&aelig;",
      "𝔞": "&afr;",
      "à": "&agrave;",
      "ℵ": "&aleph;",
      "α": "&alpha;",
      "ā": "&amacr;",
      "⨿": "&amalg;",
      "∧": "&wedge;",
      "⩕": "&andand;",
      "⩜": "&andd;",
      "⩘": "&andslope;",
      "⩚": "&andv;",
      "∠": "&angle;",
      "⦤": "&ange;",
      "∡": "&measuredangle;",
      "⦨": "&angmsdaa;",
      "⦩": "&angmsdab;",
      "⦪": "&angmsdac;",
      "⦫": "&angmsdad;",
      "⦬": "&angmsdae;",
      "⦭": "&angmsdaf;",
      "⦮": "&angmsdag;",
      "⦯": "&angmsdah;",
      "∟": "&angrt;",
      "⊾": "&angrtvb;",
      "⦝": "&angrtvbd;",
      "∢": "&angsph;",
      "⍼": "&angzarr;",
      "ą": "&aogon;",
      "𝕒": "&aopf;",
      "⩰": "&apE;",
      "⩯": "&apacir;",
      "≊": "&approxeq;",
      "≋": "&apid;",
      "'": "&apos;",
      "å": "&aring;",
      "𝒶": "&ascr;",
      "*": "&midast;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "⨑": "&awint;",
      "⫭": "&bNot;",
      "≌": "&bcong;",
      "϶": "&bepsi;",
      "‵": "&bprime;",
      "∽": "&bsim;",
      "⋍": "&bsime;",
      "⊽": "&barvee;",
      "⌅": "&barwedge;",
      "⎶": "&bbrktbrk;",
      "б": "&bcy;",
      "„": "&ldquor;",
      "⦰": "&bemptyv;",
      "β": "&beta;",
      "ℶ": "&beth;",
      "≬": "&twixt;",
      "𝔟": "&bfr;",
      "◯": "&xcirc;",
      "⨀": "&xodot;",
      "⨁": "&xoplus;",
      "⨂": "&xotime;",
      "⨆": "&xsqcup;",
      "★": "&starf;",
      "▽": "&xdtri;",
      "△": "&xutri;",
      "⨄": "&xuplus;",
      "⤍": "&rbarr;",
      "⧫": "&lozf;",
      "▴": "&utrif;",
      "▾": "&dtrif;",
      "◂": "&ltrif;",
      "▸": "&rtrif;",
      "␣": "&blank;",
      "▒": "&blk12;",
      "░": "&blk14;",
      "▓": "&blk34;",
      "█": "&block;",
      "=⃥": "&bne;",
      "≡⃥": "&bnequiv;",
      "⌐": "&bnot;",
      "𝕓": "&bopf;",
      "⋈": "&bowtie;",
      "╗": "&boxDL;",
      "╔": "&boxDR;",
      "╖": "&boxDl;",
      "╓": "&boxDr;",
      "═": "&boxH;",
      "╦": "&boxHD;",
      "╩": "&boxHU;",
      "╤": "&boxHd;",
      "╧": "&boxHu;",
      "╝": "&boxUL;",
      "╚": "&boxUR;",
      "╜": "&boxUl;",
      "╙": "&boxUr;",
      "║": "&boxV;",
      "╬": "&boxVH;",
      "╣": "&boxVL;",
      "╠": "&boxVR;",
      "╫": "&boxVh;",
      "╢": "&boxVl;",
      "╟": "&boxVr;",
      "⧉": "&boxbox;",
      "╕": "&boxdL;",
      "╒": "&boxdR;",
      "┐": "&boxdl;",
      "┌": "&boxdr;",
      "╥": "&boxhD;",
      "╨": "&boxhU;",
      "┬": "&boxhd;",
      "┴": "&boxhu;",
      "⊟": "&minusb;",
      "⊞": "&plusb;",
      "⊠": "&timesb;",
      "╛": "&boxuL;",
      "╘": "&boxuR;",
      "┘": "&boxul;",
      "└": "&boxur;",
      "│": "&boxv;",
      "╪": "&boxvH;",
      "╡": "&boxvL;",
      "╞": "&boxvR;",
      "┼": "&boxvh;",
      "┤": "&boxvl;",
      "├": "&boxvr;",
      "¦": "&brvbar;",
      "𝒷": "&bscr;",
      "⁏": "&bsemi;",
      "\\": "&bsol;",
      "⧅": "&bsolb;",
      "⟈": "&bsolhsub;",
      "•": "&bullet;",
      "⪮": "&bumpE;",
      "ć": "&cacute;",
      "∩": "&cap;",
      "⩄": "&capand;",
      "⩉": "&capbrcup;",
      "⩋": "&capcap;",
      "⩇": "&capcup;",
      "⩀": "&capdot;",
      "∩︀": "&caps;",
      "⁁": "&caret;",
      "⩍": "&ccaps;",
      "č": "&ccaron;",
      "ç": "&ccedil;",
      "ĉ": "&ccirc;",
      "⩌": "&ccups;",
      "⩐": "&ccupssm;",
      "ċ": "&cdot;",
      "⦲": "&cemptyv;",
      "¢": "&cent;",
      "𝔠": "&cfr;",
      "ч": "&chcy;",
      "✓": "&checkmark;",
      "χ": "&chi;",
      "○": "&cir;",
      "⧃": "&cirE;",
      "ˆ": "&circ;",
      "≗": "&cire;",
      "↺": "&olarr;",
      "↻": "&orarr;",
      "Ⓢ": "&oS;",
      "⊛": "&oast;",
      "⊚": "&ocir;",
      "⊝": "&odash;",
      "⨐": "&cirfnint;",
      "⫯": "&cirmid;",
      "⧂": "&cirscir;",
      "♣": "&clubsuit;",
      ":": "&colon;",
      ",": "&comma;",
      "@": "&commat;",
      "∁": "&complement;",
      "⩭": "&congdot;",
      "𝕔": "&copf;",
      "℗": "&copysr;",
      "↵": "&crarr;",
      "✗": "&cross;",
      "𝒸": "&cscr;",
      "⫏": "&csub;",
      "⫑": "&csube;",
      "⫐": "&csup;",
      "⫒": "&csupe;",
      "⋯": "&ctdot;",
      "⤸": "&cudarrl;",
      "⤵": "&cudarrr;",
      "⋞": "&curlyeqprec;",
      "⋟": "&curlyeqsucc;",
      "↶": "&curvearrowleft;",
      "⤽": "&cularrp;",
      "∪": "&cup;",
      "⩈": "&cupbrcap;",
      "⩆": "&cupcap;",
      "⩊": "&cupcup;",
      "⊍": "&cupdot;",
      "⩅": "&cupor;",
      "∪︀": "&cups;",
      "↷": "&curvearrowright;",
      "⤼": "&curarrm;",
      "⋎": "&cuvee;",
      "⋏": "&cuwed;",
      "¤": "&curren;",
      "∱": "&cwint;",
      "⌭": "&cylcty;",
      "⥥": "&dHar;",
      "†": "&dagger;",
      "ℸ": "&daleth;",
      "‐": "&hyphen;",
      "⤏": "&rBarr;",
      "ď": "&dcaron;",
      "д": "&dcy;",
      "⇊": "&downdownarrows;",
      "⩷": "&eDDot;",
      "°": "&deg;",
      "δ": "&delta;",
      "⦱": "&demptyv;",
      "⥿": "&dfisht;",
      "𝔡": "&dfr;",
      "♦": "&diams;",
      "ϝ": "&gammad;",
      "⋲": "&disin;",
      "÷": "&divide;",
      "⋇": "&divonx;",
      "ђ": "&djcy;",
      "⌞": "&llcorner;",
      "⌍": "&dlcrop;",
      $: "&dollar;",
      "𝕕": "&dopf;",
      "≑": "&eDot;",
      "∸": "&minusd;",
      "∔": "&plusdo;",
      "⊡": "&sdotb;",
      "⌟": "&lrcorner;",
      "⌌": "&drcrop;",
      "𝒹": "&dscr;",
      "ѕ": "&dscy;",
      "⧶": "&dsol;",
      "đ": "&dstrok;",
      "⋱": "&dtdot;",
      "▿": "&triangledown;",
      "⦦": "&dwangle;",
      "џ": "&dzcy;",
      "⟿": "&dzigrarr;",
      "é": "&eacute;",
      "⩮": "&easter;",
      "ě": "&ecaron;",
      "≖": "&eqcirc;",
      "ê": "&ecirc;",
      "≕": "&eqcolon;",
      "э": "&ecy;",
      "ė": "&edot;",
      "≒": "&fallingdotseq;",
      "𝔢": "&efr;",
      "⪚": "&eg;",
      "è": "&egrave;",
      "⪖": "&eqslantgtr;",
      "⪘": "&egsdot;",
      "⪙": "&el;",
      "⏧": "&elinters;",
      "ℓ": "&ell;",
      "⪕": "&eqslantless;",
      "⪗": "&elsdot;",
      "ē": "&emacr;",
      "∅": "&varnothing;",
      " ": "&emsp13;",
      " ": "&emsp14;",
      " ": "&emsp;",
      "ŋ": "&eng;",
      " ": "&ensp;",
      "ę": "&eogon;",
      "𝕖": "&eopf;",
      "⋕": "&epar;",
      "⧣": "&eparsl;",
      "⩱": "&eplus;",
      "ε": "&epsilon;",
      "ϵ": "&varepsilon;",
      "=": "&equals;",
      "≟": "&questeq;",
      "⩸": "&equivDD;",
      "⧥": "&eqvparsl;",
      "≓": "&risingdotseq;",
      "⥱": "&erarr;",
      "ℯ": "&escr;",
      "η": "&eta;",
      "ð": "&eth;",
      "ë": "&euml;",
      "€": "&euro;",
      "!": "&excl;",
      "ф": "&fcy;",
      "♀": "&female;",
      "ﬃ": "&ffilig;",
      "ﬀ": "&fflig;",
      "ﬄ": "&ffllig;",
      "𝔣": "&ffr;",
      "ﬁ": "&filig;",
      fj: "&fjlig;",
      "♭": "&flat;",
      "ﬂ": "&fllig;",
      "▱": "&fltns;",
      "ƒ": "&fnof;",
      "𝕗": "&fopf;",
      "⋔": "&pitchfork;",
      "⫙": "&forkv;",
      "⨍": "&fpartint;",
      "½": "&half;",
      "⅓": "&frac13;",
      "¼": "&frac14;",
      "⅕": "&frac15;",
      "⅙": "&frac16;",
      "⅛": "&frac18;",
      "⅔": "&frac23;",
      "⅖": "&frac25;",
      "¾": "&frac34;",
      "⅗": "&frac35;",
      "⅜": "&frac38;",
      "⅘": "&frac45;",
      "⅚": "&frac56;",
      "⅝": "&frac58;",
      "⅞": "&frac78;",
      "⁄": "&frasl;",
      "⌢": "&sfrown;",
      "𝒻": "&fscr;",
      "⪌": "&gtreqqless;",
      "ǵ": "&gacute;",
      "γ": "&gamma;",
      "⪆": "&gtrapprox;",
      "ğ": "&gbreve;",
      "ĝ": "&gcirc;",
      "г": "&gcy;",
      "ġ": "&gdot;",
      "⪩": "&gescc;",
      "⪀": "&gesdot;",
      "⪂": "&gesdoto;",
      "⪄": "&gesdotol;",
      "⋛︀": "&gesl;",
      "⪔": "&gesles;",
      "𝔤": "&gfr;",
      "ℷ": "&gimel;",
      "ѓ": "&gjcy;",
      "⪒": "&glE;",
      "⪥": "&gla;",
      "⪤": "&glj;",
      "≩": "&gneqq;",
      "⪊": "&gnapprox;",
      "⪈": "&gneq;",
      "⋧": "&gnsim;",
      "𝕘": "&gopf;",
      "ℊ": "&gscr;",
      "⪎": "&gsime;",
      "⪐": "&gsiml;",
      "⪧": "&gtcc;",
      "⩺": "&gtcir;",
      "⋗": "&gtrdot;",
      "⦕": "&gtlPar;",
      "⩼": "&gtquest;",
      "⥸": "&gtrarr;",
      "≩︀": "&gvnE;",
      "ъ": "&hardcy;",
      "⥈": "&harrcir;",
      "↭": "&leftrightsquigarrow;",
      "ℏ": "&plankv;",
      "ĥ": "&hcirc;",
      "♥": "&heartsuit;",
      "…": "&mldr;",
      "⊹": "&hercon;",
      "𝔥": "&hfr;",
      "⤥": "&searhk;",
      "⤦": "&swarhk;",
      "⇿": "&hoarr;",
      "∻": "&homtht;",
      "↩": "&larrhk;",
      "↪": "&rarrhk;",
      "𝕙": "&hopf;",
      "―": "&horbar;",
      "𝒽": "&hscr;",
      "ħ": "&hstrok;",
      "⁃": "&hybull;",
      "í": "&iacute;",
      "î": "&icirc;",
      "и": "&icy;",
      "е": "&iecy;",
      "¡": "&iexcl;",
      "𝔦": "&ifr;",
      "ì": "&igrave;",
      "⨌": "&qint;",
      "∭": "&tint;",
      "⧜": "&iinfin;",
      "℩": "&iiota;",
      "ĳ": "&ijlig;",
      "ī": "&imacr;",
      "ı": "&inodot;",
      "⊷": "&imof;",
      "Ƶ": "&imped;",
      "℅": "&incare;",
      "∞": "&infin;",
      "⧝": "&infintie;",
      "⊺": "&intercal;",
      "⨗": "&intlarhk;",
      "⨼": "&iprod;",
      "ё": "&iocy;",
      "į": "&iogon;",
      "𝕚": "&iopf;",
      "ι": "&iota;",
      "¿": "&iquest;",
      "𝒾": "&iscr;",
      "⋹": "&isinE;",
      "⋵": "&isindot;",
      "⋴": "&isins;",
      "⋳": "&isinsv;",
      "ĩ": "&itilde;",
      "і": "&iukcy;",
      "ï": "&iuml;",
      "ĵ": "&jcirc;",
      "й": "&jcy;",
      "𝔧": "&jfr;",
      "ȷ": "&jmath;",
      "𝕛": "&jopf;",
      "𝒿": "&jscr;",
      "ј": "&jsercy;",
      "є": "&jukcy;",
      "κ": "&kappa;",
      "ϰ": "&varkappa;",
      "ķ": "&kcedil;",
      "к": "&kcy;",
      "𝔨": "&kfr;",
      "ĸ": "&kgreen;",
      "х": "&khcy;",
      "ќ": "&kjcy;",
      "𝕜": "&kopf;",
      "𝓀": "&kscr;",
      "⤛": "&lAtail;",
      "⤎": "&lBarr;",
      "⪋": "&lesseqqgtr;",
      "⥢": "&lHar;",
      "ĺ": "&lacute;",
      "⦴": "&laemptyv;",
      "λ": "&lambda;",
      "⦑": "&langd;",
      "⪅": "&lessapprox;",
      "«": "&laquo;",
      "⤟": "&larrbfs;",
      "⤝": "&larrfs;",
      "↫": "&looparrowleft;",
      "⤹": "&larrpl;",
      "⥳": "&larrsim;",
      "↢": "&leftarrowtail;",
      "⪫": "&lat;",
      "⤙": "&latail;",
      "⪭": "&late;",
      "⪭︀": "&lates;",
      "⤌": "&lbarr;",
      "❲": "&lbbrk;",
      "{": "&lcub;",
      "[": "&lsqb;",
      "⦋": "&lbrke;",
      "⦏": "&lbrksld;",
      "⦍": "&lbrkslu;",
      "ľ": "&lcaron;",
      "ļ": "&lcedil;",
      "л": "&lcy;",
      "⤶": "&ldca;",
      "⥧": "&ldrdhar;",
      "⥋": "&ldrushar;",
      "↲": "&ldsh;",
      "≤": "&leq;",
      "⇇": "&llarr;",
      "⋋": "&lthree;",
      "⪨": "&lescc;",
      "⩿": "&lesdot;",
      "⪁": "&lesdoto;",
      "⪃": "&lesdotor;",
      "⋚︀": "&lesg;",
      "⪓": "&lesges;",
      "⋖": "&ltdot;",
      "⥼": "&lfisht;",
      "𝔩": "&lfr;",
      "⪑": "&lgE;",
      "⥪": "&lharul;",
      "▄": "&lhblk;",
      "љ": "&ljcy;",
      "⥫": "&llhard;",
      "◺": "&lltri;",
      "ŀ": "&lmidot;",
      "⎰": "&lmoustache;",
      "≨": "&lneqq;",
      "⪉": "&lnapprox;",
      "⪇": "&lneq;",
      "⋦": "&lnsim;",
      "⟬": "&loang;",
      "⇽": "&loarr;",
      "⟼": "&xmap;",
      "↬": "&rarrlp;",
      "⦅": "&lopar;",
      "𝕝": "&lopf;",
      "⨭": "&loplus;",
      "⨴": "&lotimes;",
      "∗": "&lowast;",
      "◊": "&lozenge;",
      "(": "&lpar;",
      "⦓": "&lparlt;",
      "⥭": "&lrhard;",
      "‎": "&lrm;",
      "⊿": "&lrtri;",
      "‹": "&lsaquo;",
      "𝓁": "&lscr;",
      "⪍": "&lsime;",
      "⪏": "&lsimg;",
      "‚": "&sbquo;",
      "ł": "&lstrok;",
      "⪦": "&ltcc;",
      "⩹": "&ltcir;",
      "⋉": "&ltimes;",
      "⥶": "&ltlarr;",
      "⩻": "&ltquest;",
      "⦖": "&ltrPar;",
      "◃": "&triangleleft;",
      "⥊": "&lurdshar;",
      "⥦": "&luruhar;",
      "≨︀": "&lvnE;",
      "∺": "&mDDot;",
      "¯": "&strns;",
      "♂": "&male;",
      "✠": "&maltese;",
      "▮": "&marker;",
      "⨩": "&mcomma;",
      "м": "&mcy;",
      "—": "&mdash;",
      "𝔪": "&mfr;",
      "℧": "&mho;",
      "µ": "&micro;",
      "⫰": "&midcir;",
      "−": "&minus;",
      "⨪": "&minusdu;",
      "⫛": "&mlcp;",
      "⊧": "&models;",
      "𝕞": "&mopf;",
      "𝓂": "&mscr;",
      "μ": "&mu;",
      "⊸": "&mumap;",
      "⋙̸": "&nGg;",
      "≫⃒": "&nGt;",
      "⇍": "&nlArr;",
      "⇎": "&nhArr;",
      "⋘̸": "&nLl;",
      "≪⃒": "&nLt;",
      "⇏": "&nrArr;",
      "⊯": "&nVDash;",
      "⊮": "&nVdash;",
      "ń": "&nacute;",
      "∠⃒": "&nang;",
      "⩰̸": "&napE;",
      "≋̸": "&napid;",
      "ŉ": "&napos;",
      "♮": "&natural;",
      "⩃": "&ncap;",
      "ň": "&ncaron;",
      "ņ": "&ncedil;",
      "⩭̸": "&ncongdot;",
      "⩂": "&ncup;",
      "н": "&ncy;",
      "–": "&ndash;",
      "⇗": "&neArr;",
      "⤤": "&nearhk;",
      "≐̸": "&nedot;",
      "⤨": "&toea;",
      "𝔫": "&nfr;",
      "↮": "&nleftrightarrow;",
      "⫲": "&nhpar;",
      "⋼": "&nis;",
      "⋺": "&nisd;",
      "њ": "&njcy;",
      "≦̸": "&nleqq;",
      "↚": "&nleftarrow;",
      "‥": "&nldr;",
      "𝕟": "&nopf;",
      "¬": "&not;",
      "⋹̸": "&notinE;",
      "⋵̸": "&notindot;",
      "⋷": "&notinvb;",
      "⋶": "&notinvc;",
      "⋾": "&notnivb;",
      "⋽": "&notnivc;",
      "⫽⃥": "&nparsl;",
      "∂̸": "&npart;",
      "⨔": "&npolint;",
      "↛": "&nrightarrow;",
      "⤳̸": "&nrarrc;",
      "↝̸": "&nrarrw;",
      "𝓃": "&nscr;",
      "⊄": "&nsub;",
      "⫅̸": "&nsubseteqq;",
      "⊅": "&nsup;",
      "⫆̸": "&nsupseteqq;",
      "ñ": "&ntilde;",
      "ν": "&nu;",
      "#": "&num;",
      "№": "&numero;",
      " ": "&numsp;",
      "⊭": "&nvDash;",
      "⤄": "&nvHarr;",
      "≍⃒": "&nvap;",
      "⊬": "&nvdash;",
      "≥⃒": "&nvge;",
      ">⃒": "&nvgt;",
      "⧞": "&nvinfin;",
      "⤂": "&nvlArr;",
      "≤⃒": "&nvle;",
      "<⃒": "&nvlt;",
      "⊴⃒": "&nvltrie;",
      "⤃": "&nvrArr;",
      "⊵⃒": "&nvrtrie;",
      "∼⃒": "&nvsim;",
      "⇖": "&nwArr;",
      "⤣": "&nwarhk;",
      "⤧": "&nwnear;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "о": "&ocy;",
      "ő": "&odblac;",
      "⨸": "&odiv;",
      "⦼": "&odsold;",
      "œ": "&oelig;",
      "⦿": "&ofcir;",
      "𝔬": "&ofr;",
      "˛": "&ogon;",
      "ò": "&ograve;",
      "⧁": "&ogt;",
      "⦵": "&ohbar;",
      "⦾": "&olcir;",
      "⦻": "&olcross;",
      "⧀": "&olt;",
      "ō": "&omacr;",
      "ω": "&omega;",
      "ο": "&omicron;",
      "⦶": "&omid;",
      "𝕠": "&oopf;",
      "⦷": "&opar;",
      "⦹": "&operp;",
      "∨": "&vee;",
      "⩝": "&ord;",
      "ℴ": "&oscr;",
      "ª": "&ordf;",
      "º": "&ordm;",
      "⊶": "&origof;",
      "⩖": "&oror;",
      "⩗": "&orslope;",
      "⩛": "&orv;",
      "ø": "&oslash;",
      "⊘": "&osol;",
      "õ": "&otilde;",
      "⨶": "&otimesas;",
      "ö": "&ouml;",
      "⌽": "&ovbar;",
      "¶": "&para;",
      "⫳": "&parsim;",
      "⫽": "&parsl;",
      "п": "&pcy;",
      "%": "&percnt;",
      ".": "&period;",
      "‰": "&permil;",
      "‱": "&pertenk;",
      "𝔭": "&pfr;",
      "φ": "&phi;",
      "ϕ": "&varphi;",
      "☎": "&phone;",
      "π": "&pi;",
      "ϖ": "&varpi;",
      "ℎ": "&planckh;",
      "+": "&plus;",
      "⨣": "&plusacir;",
      "⨢": "&pluscir;",
      "⨥": "&plusdu;",
      "⩲": "&pluse;",
      "⨦": "&plussim;",
      "⨧": "&plustwo;",
      "⨕": "&pointint;",
      "𝕡": "&popf;",
      "£": "&pound;",
      "⪳": "&prE;",
      "⪷": "&precapprox;",
      "⪹": "&prnap;",
      "⪵": "&prnE;",
      "⋨": "&prnsim;",
      "′": "&prime;",
      "⌮": "&profalar;",
      "⌒": "&profline;",
      "⌓": "&profsurf;",
      "⊰": "&prurel;",
      "𝓅": "&pscr;",
      "ψ": "&psi;",
      " ": "&puncsp;",
      "𝔮": "&qfr;",
      "𝕢": "&qopf;",
      "⁗": "&qprime;",
      "𝓆": "&qscr;",
      "⨖": "&quatint;",
      "?": "&quest;",
      "⤜": "&rAtail;",
      "⥤": "&rHar;",
      "∽̱": "&race;",
      "ŕ": "&racute;",
      "⦳": "&raemptyv;",
      "⦒": "&rangd;",
      "⦥": "&range;",
      "»": "&raquo;",
      "⥵": "&rarrap;",
      "⤠": "&rarrbfs;",
      "⤳": "&rarrc;",
      "⤞": "&rarrfs;",
      "⥅": "&rarrpl;",
      "⥴": "&rarrsim;",
      "↣": "&rightarrowtail;",
      "↝": "&rightsquigarrow;",
      "⤚": "&ratail;",
      "∶": "&ratio;",
      "❳": "&rbbrk;",
      "}": "&rcub;",
      "]": "&rsqb;",
      "⦌": "&rbrke;",
      "⦎": "&rbrksld;",
      "⦐": "&rbrkslu;",
      "ř": "&rcaron;",
      "ŗ": "&rcedil;",
      "р": "&rcy;",
      "⤷": "&rdca;",
      "⥩": "&rdldhar;",
      "↳": "&rdsh;",
      "▭": "&rect;",
      "⥽": "&rfisht;",
      "𝔯": "&rfr;",
      "⥬": "&rharul;",
      "ρ": "&rho;",
      "ϱ": "&varrho;",
      "⇉": "&rrarr;",
      "⋌": "&rthree;",
      "˚": "&ring;",
      "‏": "&rlm;",
      "⎱": "&rmoustache;",
      "⫮": "&rnmid;",
      "⟭": "&roang;",
      "⇾": "&roarr;",
      "⦆": "&ropar;",
      "𝕣": "&ropf;",
      "⨮": "&roplus;",
      "⨵": "&rotimes;",
      ")": "&rpar;",
      "⦔": "&rpargt;",
      "⨒": "&rppolint;",
      "›": "&rsaquo;",
      "𝓇": "&rscr;",
      "⋊": "&rtimes;",
      "▹": "&triangleright;",
      "⧎": "&rtriltri;",
      "⥨": "&ruluhar;",
      "℞": "&rx;",
      "ś": "&sacute;",
      "⪴": "&scE;",
      "⪸": "&succapprox;",
      "š": "&scaron;",
      "ş": "&scedil;",
      "ŝ": "&scirc;",
      "⪶": "&succneqq;",
      "⪺": "&succnapprox;",
      "⋩": "&succnsim;",
      "⨓": "&scpolint;",
      "с": "&scy;",
      "⋅": "&sdot;",
      "⩦": "&sdote;",
      "⇘": "&seArr;",
      "§": "&sect;",
      ";": "&semi;",
      "⤩": "&tosa;",
      "✶": "&sext;",
      "𝔰": "&sfr;",
      "♯": "&sharp;",
      "щ": "&shchcy;",
      "ш": "&shcy;",
      "­": "&shy;",
      "σ": "&sigma;",
      "ς": "&varsigma;",
      "⩪": "&simdot;",
      "⪞": "&simg;",
      "⪠": "&simgE;",
      "⪝": "&siml;",
      "⪟": "&simlE;",
      "≆": "&simne;",
      "⨤": "&simplus;",
      "⥲": "&simrarr;",
      "⨳": "&smashp;",
      "⧤": "&smeparsl;",
      "⌣": "&ssmile;",
      "⪪": "&smt;",
      "⪬": "&smte;",
      "⪬︀": "&smtes;",
      "ь": "&softcy;",
      "/": "&sol;",
      "⧄": "&solb;",
      "⌿": "&solbar;",
      "𝕤": "&sopf;",
      "♠": "&spadesuit;",
      "⊓︀": "&sqcaps;",
      "⊔︀": "&sqcups;",
      "𝓈": "&sscr;",
      "☆": "&star;",
      "⊂": "&subset;",
      "⫅": "&subseteqq;",
      "⪽": "&subdot;",
      "⫃": "&subedot;",
      "⫁": "&submult;",
      "⫋": "&subsetneqq;",
      "⊊": "&subsetneq;",
      "⪿": "&subplus;",
      "⥹": "&subrarr;",
      "⫇": "&subsim;",
      "⫕": "&subsub;",
      "⫓": "&subsup;",
      "♪": "&sung;",
      "¹": "&sup1;",
      "²": "&sup2;",
      "³": "&sup3;",
      "⫆": "&supseteqq;",
      "⪾": "&supdot;",
      "⫘": "&supdsub;",
      "⫄": "&supedot;",
      "⟉": "&suphsol;",
      "⫗": "&suphsub;",
      "⥻": "&suplarr;",
      "⫂": "&supmult;",
      "⫌": "&supsetneqq;",
      "⊋": "&supsetneq;",
      "⫀": "&supplus;",
      "⫈": "&supsim;",
      "⫔": "&supsub;",
      "⫖": "&supsup;",
      "⇙": "&swArr;",
      "⤪": "&swnwar;",
      "ß": "&szlig;",
      "⌖": "&target;",
      "τ": "&tau;",
      "ť": "&tcaron;",
      "ţ": "&tcedil;",
      "т": "&tcy;",
      "⌕": "&telrec;",
      "𝔱": "&tfr;",
      "θ": "&theta;",
      "ϑ": "&vartheta;",
      "þ": "&thorn;",
      "×": "&times;",
      "⨱": "&timesbar;",
      "⨰": "&timesd;",
      "⌶": "&topbot;",
      "⫱": "&topcir;",
      "𝕥": "&topf;",
      "⫚": "&topfork;",
      "‴": "&tprime;",
      "▵": "&utri;",
      "≜": "&trie;",
      "◬": "&tridot;",
      "⨺": "&triminus;",
      "⨹": "&triplus;",
      "⧍": "&trisb;",
      "⨻": "&tritime;",
      "⏢": "&trpezium;",
      "𝓉": "&tscr;",
      "ц": "&tscy;",
      "ћ": "&tshcy;",
      "ŧ": "&tstrok;",
      "⥣": "&uHar;",
      "ú": "&uacute;",
      "ў": "&ubrcy;",
      "ŭ": "&ubreve;",
      "û": "&ucirc;",
      "у": "&ucy;",
      "ű": "&udblac;",
      "⥾": "&ufisht;",
      "𝔲": "&ufr;",
      "ù": "&ugrave;",
      "▀": "&uhblk;",
      "⌜": "&ulcorner;",
      "⌏": "&ulcrop;",
      "◸": "&ultri;",
      "ū": "&umacr;",
      "ų": "&uogon;",
      "𝕦": "&uopf;",
      "υ": "&upsilon;",
      "⇈": "&uuarr;",
      "⌝": "&urcorner;",
      "⌎": "&urcrop;",
      "ů": "&uring;",
      "◹": "&urtri;",
      "𝓊": "&uscr;",
      "⋰": "&utdot;",
      "ũ": "&utilde;",
      "ü": "&uuml;",
      "⦧": "&uwangle;",
      "⫨": "&vBar;",
      "⫩": "&vBarv;",
      "⦜": "&vangrt;",
      "⊊︀": "&vsubne;",
      "⫋︀": "&vsubnE;",
      "⊋︀": "&vsupne;",
      "⫌︀": "&vsupnE;",
      "в": "&vcy;",
      "⊻": "&veebar;",
      "≚": "&veeeq;",
      "⋮": "&vellip;",
      "𝔳": "&vfr;",
      "𝕧": "&vopf;",
      "𝓋": "&vscr;",
      "⦚": "&vzigzag;",
      "ŵ": "&wcirc;",
      "⩟": "&wedbar;",
      "≙": "&wedgeq;",
      "℘": "&wp;",
      "𝔴": "&wfr;",
      "𝕨": "&wopf;",
      "𝓌": "&wscr;",
      "𝔵": "&xfr;",
      "ξ": "&xi;",
      "⋻": "&xnis;",
      "𝕩": "&xopf;",
      "𝓍": "&xscr;",
      "ý": "&yacute;",
      "я": "&yacy;",
      "ŷ": "&ycirc;",
      "ы": "&ycy;",
      "¥": "&yen;",
      "𝔶": "&yfr;",
      "ї": "&yicy;",
      "𝕪": "&yopf;",
      "𝓎": "&yscr;",
      "ю": "&yucy;",
      "ÿ": "&yuml;",
      "ź": "&zacute;",
      "ž": "&zcaron;",
      "з": "&zcy;",
      "ż": "&zdot;",
      "ζ": "&zeta;",
      "𝔷": "&zfr;",
      "ж": "&zhcy;",
      "⇝": "&zigrarr;",
      "𝕫": "&zopf;",
      "𝓏": "&zscr;",
      "‍": "&zwj;",
      "‌": "&zwnj;"
    }
  }
};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};

exports.getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
};
exports.highSurrogateFrom = 55296;
exports.highSurrogateTo = 56319;

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

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebSocketClient; }
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);

    this.client = new WebSocket(url);

    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }
  /**
   * @param {(...args: any[]) => void} f
   */


  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }
    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    } // call f with the message string as the first argument

    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return WebSocketClient;
}();



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3001&pathname=%2Fws&logging=info&reconnect=10":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3001&pathname=%2Fws&logging=info&reconnect=10 ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=3001&pathname=%2Fws&logging=info&reconnect=10";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/strip-ansi/index.js */ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js");
/* harmony import */ var _modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />









/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */

var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};
/** @type {Options} */

var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);

if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
}

if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
}

if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}

if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */


function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}

if (options.logging) {
  setAllLogLevel(options.logging);
}

self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }

    options.hot = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }

    options.liveReload = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },

  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,

  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }

    options.overlay = value;
  },

  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }

    options.reconnect = value;
  },

  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },

  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'

  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");

    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
          header = _formatProblem.header,
          body = _formatProblem.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);

    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }

    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;

    if (needShowOverlayForWarnings) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings);
    }

    if (params && params.preventReloading) {
      return;
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },

  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");

    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
          header = _formatProblem2.header,
          body = _formatProblem2.body;

      return "".concat(header, "\n").concat(_modules_strip_ansi_index_js__WEBPACK_IMPORTED_MODULE_1___default()(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);

    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }

    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;

    if (needShowOverlayForErrors) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors);
    }
  },

  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./client-src/modules/logger/SyncBailHookFake.js":
    /*!*******************************************************!*\
      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
      \*******************************************************/

    /***/
    function clientSrcModulesLoggerSyncBailHookFakeJs(module) {
      /**
       * Client stub for tapable SyncBailHook
       */
      module.exports = function clientTapableSyncBailHook() {
        return {
          call: function call() {}
        };
      };
      /***/

    },

    /***/
    "./node_modules/webpack/lib/logging/Logger.js":
    /*!****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/Logger.js ***!
      \****************************************************/

    /***/
    function node_modulesWebpackLibLoggingLoggerJs(__unused_webpack_module, exports) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      var LogType = Object.freeze({
        error:
        /** @type {"error"} */
        "error",
        // message, c style arguments
        warn:
        /** @type {"warn"} */
        "warn",
        // message, c style arguments
        info:
        /** @type {"info"} */
        "info",
        // message, c style arguments
        log:
        /** @type {"log"} */
        "log",
        // message, c style arguments
        debug:
        /** @type {"debug"} */
        "debug",
        // message, c style arguments
        trace:
        /** @type {"trace"} */
        "trace",
        // no arguments
        group:
        /** @type {"group"} */
        "group",
        // [label]
        groupCollapsed:
        /** @type {"groupCollapsed"} */
        "groupCollapsed",
        // [label]
        groupEnd:
        /** @type {"groupEnd"} */
        "groupEnd",
        // [label]
        profile:
        /** @type {"profile"} */
        "profile",
        // [profileName]
        profileEnd:
        /** @type {"profileEnd"} */
        "profileEnd",
        // [profileName]
        time:
        /** @type {"time"} */
        "time",
        // name, time as [seconds, nanoseconds]
        clear:
        /** @type {"clear"} */
        "clear",
        // no arguments
        status:
        /** @type {"status"} */
        "status" // message, arguments

      });
      exports.LogType = LogType;
      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

      var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger raw log method");
      var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger times");
      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger aggregated times");

      var WebpackLogger = /*#__PURE__*/function () {
        /**
         * @param {function(LogTypeEnum, any[]=): void} log log function
         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
         */
        function WebpackLogger(log, getChildLogger) {
          _classCallCheck(this, WebpackLogger);

          this[LOG_SYMBOL] = log;
          this.getChildLogger = getChildLogger;
        }

        _createClass(WebpackLogger, [{
          key: "error",
          value: function error() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            this[LOG_SYMBOL](LogType.error, args);
          }
        }, {
          key: "warn",
          value: function warn() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            this[LOG_SYMBOL](LogType.warn, args);
          }
        }, {
          key: "info",
          value: function info() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            this[LOG_SYMBOL](LogType.info, args);
          }
        }, {
          key: "log",
          value: function log() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            this[LOG_SYMBOL](LogType.log, args);
          }
        }, {
          key: "debug",
          value: function debug() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            this[LOG_SYMBOL](LogType.debug, args);
          }
        }, {
          key: "assert",
          value: function assert(assertion) {
            if (!assertion) {
              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                args[_key6 - 1] = arguments[_key6];
              }

              this[LOG_SYMBOL](LogType.error, args);
            }
          }
        }, {
          key: "trace",
          value: function trace() {
            this[LOG_SYMBOL](LogType.trace, ["Trace"]);
          }
        }, {
          key: "clear",
          value: function clear() {
            this[LOG_SYMBOL](LogType.clear);
          }
        }, {
          key: "status",
          value: function status() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            this[LOG_SYMBOL](LogType.status, args);
          }
        }, {
          key: "group",
          value: function group() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            this[LOG_SYMBOL](LogType.group, args);
          }
        }, {
          key: "groupCollapsed",
          value: function groupCollapsed() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            this[LOG_SYMBOL](LogType.groupCollapsed, args);
          }
        }, {
          key: "groupEnd",
          value: function groupEnd() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            this[LOG_SYMBOL](LogType.groupEnd, args);
          }
        }, {
          key: "profile",
          value: function profile(label) {
            this[LOG_SYMBOL](LogType.profile, [label]);
          }
        }, {
          key: "profileEnd",
          value: function profileEnd(label) {
            this[LOG_SYMBOL](LogType.profileEnd, [label]);
          }
        }, {
          key: "time",
          value: function time(label) {
            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
            this[TIMERS_SYMBOL].set(label, process.hrtime());
          }
        }, {
          key: "timeLog",
          value: function timeLog(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
            }

            var time = process.hrtime(prev);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeEnd",
          value: function timeEnd(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
            }

            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeAggregate",
          value: function timeAggregate(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
            }

            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

            if (current !== undefined) {
              if (time[1] + current[1] > 1e9) {
                time[0] += current[0] + 1;
                time[1] = time[1] - 1e9 + current[1];
              } else {
                time[0] += current[0];
                time[1] += current[1];
              }
            }

            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
          }
        }, {
          key: "timeAggregateEnd",
          value: function timeAggregateEnd(label) {
            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (time === undefined) return;
            this[TIMERS_AGGREGATES_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }]);

        return WebpackLogger;
      }();

      exports.Logger = WebpackLogger;
      /***/
    },

    /***/
    "./node_modules/webpack/lib/logging/createConsoleLogger.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
      \*****************************************************************/

    /***/
    function node_modulesWebpackLibLoggingCreateConsoleLoggerJs(module, __unused_webpack_exports, __nested_webpack_require_13217__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      var _require = __nested_webpack_require_13217__(
      /*! ./Logger */
      "./node_modules/webpack/lib/logging/Logger.js"),
          LogType = _require.LogType;
      /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

      /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

      /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

      /** @typedef {function(string): boolean} FilterFunction */

      /**
       * @typedef {Object} LoggerConsole
       * @property {function(): void} clear
       * @property {function(): void} trace
       * @property {(...args: any[]) => void} info
       * @property {(...args: any[]) => void} log
       * @property {(...args: any[]) => void} warn
       * @property {(...args: any[]) => void} error
       * @property {(...args: any[]) => void=} debug
       * @property {(...args: any[]) => void=} group
       * @property {(...args: any[]) => void=} groupCollapsed
       * @property {(...args: any[]) => void=} groupEnd
       * @property {(...args: any[]) => void=} status
       * @property {(...args: any[]) => void=} profile
       * @property {(...args: any[]) => void=} profileEnd
       * @property {(...args: any[]) => void=} logTime
       */

      /**
       * @typedef {Object} LoggerOptions
       * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
       * @property {FilterTypes|boolean} debug filter for debug logging
       * @property {LoggerConsole} console the console to log to
       */

      /**
       * @param {FilterItemTypes} item an input item
       * @returns {FilterFunction} filter function
       */


      var filterToFunction = function filterToFunction(item) {
        if (typeof item === "string") {
          var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
          /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
          return function (ident) {
            return regExp.test(ident);
          };
        }

        if (item && _typeof(item) === "object" && typeof item.test === "function") {
          return function (ident) {
            return item.test(ident);
          };
        }

        if (typeof item === "function") {
          return item;
        }

        if (typeof item === "boolean") {
          return function () {
            return item;
          };
        }
      };
      /**
       * @enum {number}
       */


      var LogLevel = {
        none: 6,
        false: 6,
        error: 5,
        warn: 4,
        info: 3,
        log: 2,
        true: 2,
        verbose: 1
      };
      /**
       * @param {LoggerOptions} options options object
       * @returns {function(string, LogTypeEnum, any[]): void} logging function
       */

      module.exports = function (_ref) {
        var _ref$level = _ref.level,
            level = _ref$level === void 0 ? "info" : _ref$level,
            _ref$debug = _ref.debug,
            debug = _ref$debug === void 0 ? false : _ref$debug,
            console = _ref.console;
        var debugFilters = typeof debug === "boolean" ? [function () {
          return debug;
        }] :
        /** @type {FilterItemTypes[]} */
        [].concat(debug).map(filterToFunction);
        /** @type {number} */

        var loglevel = LogLevel["".concat(level)] || 0;
        /**
         * @param {string} name name of the logger
         * @param {LogTypeEnum} type type of the log entry
         * @param {any[]} args arguments of the log entry
         * @returns {void}
         */

        var logger = function logger(name, type, args) {
          var labeledArgs = function labeledArgs() {
            if (Array.isArray(args)) {
              if (args.length > 0 && typeof args[0] === "string") {
                return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
              } else {
                return ["[".concat(name, "]")].concat(_toConsumableArray(args));
              }
            } else {
              return [];
            }
          };

          var debug = debugFilters.some(function (f) {
            return f(name);
          });

          switch (type) {
            case LogType.debug:
              if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.debug === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.debug.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.log:
              if (!debug && loglevel > LogLevel.log) return;
              console.log.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.info:
              if (!debug && loglevel > LogLevel.info) return;
              console.info.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.warn:
              if (!debug && loglevel > LogLevel.warn) return;
              console.warn.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.error:
              if (!debug && loglevel > LogLevel.error) return;
              console.error.apply(console, _toConsumableArray(labeledArgs()));
              break;

            case LogType.trace:
              if (!debug) return;
              console.trace();
              break;

            case LogType.groupCollapsed:
              if (!debug && loglevel > LogLevel.log) return;

              if (!debug && loglevel > LogLevel.verbose) {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                if (typeof console.groupCollapsed === "function") {
                  // eslint-disable-next-line node/no-unsupported-features/node-builtins
                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
                } else {
                  console.log.apply(console, _toConsumableArray(labeledArgs()));
                }

                break;
              }

            // falls through

            case LogType.group:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.group === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.group.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.groupEnd:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.groupEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.groupEnd();
              }

              break;

            case LogType.time:
              {
                if (!debug && loglevel > LogLevel.log) return;
                var ms = args[1] * 1000 + args[2] / 1000000;
                var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");

                if (typeof console.logTime === "function") {
                  console.logTime(msg);
                } else {
                  console.log(msg);
                }

                break;
              }

            case LogType.profile:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profile === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profile.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.profileEnd:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profileEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
              }

              break;

            case LogType.clear:
              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

              if (typeof console.clear === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.clear();
              }

              break;

            case LogType.status:
              if (!debug && loglevel > LogLevel.info) return;

              if (typeof console.status === "function") {
                if (args.length === 0) {
                  console.status();
                } else {
                  console.status.apply(console, _toConsumableArray(labeledArgs()));
                }
              } else {
                if (args.length !== 0) {
                  console.info.apply(console, _toConsumableArray(labeledArgs()));
                }
              }

              break;

            default:
              throw new Error("Unexpected LogType ".concat(type));
          }
        };

        return logger;
      };
      /***/

    },

    /***/
    "./node_modules/webpack/lib/logging/runtime.js":
    /*!*****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/runtime.js ***!
      \*****************************************************/

    /***/
    function node_modulesWebpackLibLoggingRuntimeJs(__unused_webpack_module, exports, __nested_webpack_require_24922__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      var SyncBailHook = __nested_webpack_require_24922__(
      /*! tapable/lib/SyncBailHook */
      "./client-src/modules/logger/SyncBailHookFake.js");

      var _require = __nested_webpack_require_24922__(
      /*! ./Logger */
      "./node_modules/webpack/lib/logging/Logger.js"),
          Logger = _require.Logger;

      var createConsoleLogger = __nested_webpack_require_24922__(
      /*! ./createConsoleLogger */
      "./node_modules/webpack/lib/logging/createConsoleLogger.js");
      /** @type {createConsoleLogger.LoggerOptions} */


      var currentDefaultLoggerOptions = {
        level: "info",
        debug: false,
        console: console
      };
      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      /**
       * @param {string} name name of the logger
       * @returns {Logger} a logger
       */

      exports.getLogger = function (name) {
        return new Logger(function (type, args) {
          if (exports.hooks.log.call(name, type, args) === undefined) {
            currentDefaultLogger(name, type, args);
          }
        }, function (childName) {
          return exports.getLogger("".concat(name, "/").concat(childName));
        });
      };
      /**
       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
       * @returns {void}
       */


      exports.configureDefaultLogger = function (options) {
        _extends(currentDefaultLoggerOptions, options);

        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      };

      exports.hooks = {
        log: new SyncBailHook(["origin", "type", "args"])
      };
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_27424__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27424__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_27424__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_27424__.o(definition, key) && !__nested_webpack_require_27424__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __nested_webpack_require_27424__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_27424__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

  !function () {
    /*!********************************************!*\
      !*** ./client-src/modules/logger/index.js ***!
      \********************************************/
    __nested_webpack_require_27424__.r(__webpack_exports__);
    /* harmony export */


    __nested_webpack_require_27424__.d(__webpack_exports__, {
      /* harmony export */
      "default": function _default() {
        return (
          /* reexport default export from named module */
          webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27424__(
    /*! webpack/lib/logging/runtime.js */
    "./node_modules/webpack/lib/logging/runtime.js");
  }();
  var __webpack_export_target__ = exports;

  for (var i in __webpack_exports__) {
    __webpack_export_target__[i] = __webpack_exports__[i];
  }

  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/strip-ansi/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./node_modules/strip-ansi/index.js":
    /*!******************************************!*\
      !*** ./node_modules/strip-ansi/index.js ***!
      \******************************************/

    /***/
    function node_modulesStripAnsiIndexJs(__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_772__) {
      __nested_webpack_require_772__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_772__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            stripAnsi
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_772__(
      /*! ansi-regex */
      "./node_modules/strip-ansi/node_modules/ansi-regex/index.js");

      function stripAnsi(string) {
        if (typeof string !== 'string') {
          throw new TypeError("Expected a `string`, got `".concat(_typeof(string), "`"));
        }

        return string.replace((0, ansi_regex__WEBPACK_IMPORTED_MODULE_0__["default"])(), '');
      }
      /***/

    },

    /***/
    "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
      \******************************************************************/

    /***/
    function node_modulesStripAnsiNode_modulesAnsiRegexIndexJs(__unused_webpack___webpack_module__, __webpack_exports__, __nested_webpack_require_2057__) {
      __nested_webpack_require_2057__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_2057__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            ansiRegex
          );
        }
        /* harmony export */

      });

      function ansiRegex() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$onlyFirst = _ref.onlyFirst,
            onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

        var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
        return new RegExp(pattern, onlyFirst ? undefined : 'g');
      }
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_3211__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_3211__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_3211__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_3211__.o(definition, key) && !__nested_webpack_require_3211__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __nested_webpack_require_3211__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_3211__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

  !function () {
    /*!************************************************!*\
      !*** ./client-src/modules/strip-ansi/index.js ***!
      \************************************************/
    __nested_webpack_require_3211__.r(__webpack_exports__);
    /* harmony import */


    var strip_ansi__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3211__(
    /*! strip-ansi */
    "./node_modules/strip-ansi/index.js");
    /* harmony default export */


    __webpack_exports__["default"] = strip_ansi__WEBPACK_IMPORTED_MODULE_0__["default"];
  }();
  var __webpack_export_target__ = exports;

  for (var i in __webpack_exports__) {
    __webpack_export_target__[i] = __webpack_exports__[i];
  }

  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatProblem": function() { return /* binding */ formatProblem; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "hide": function() { return /* binding */ hide; }
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).


var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
/** @type {HTMLIFrameElement | null | undefined} */

var iframeContainerElement;
/** @type {HTMLDivElement | null | undefined} */

var containerElement;
/** @type {Array<(element: HTMLDivElement) => void>} */

var onLoadQueue = [];
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

function createContainer() {
  iframeContainerElement = document.createElement("iframe");
  iframeContainerElement.id = "webpack-dev-server-client-overlay";
  iframeContainerElement.src = "about:blank";
  iframeContainerElement.style.position = "fixed";
  iframeContainerElement.style.left = 0;
  iframeContainerElement.style.top = 0;
  iframeContainerElement.style.right = 0;
  iframeContainerElement.style.bottom = 0;
  iframeContainerElement.style.width = "100vw";
  iframeContainerElement.style.height = "100vh";
  iframeContainerElement.style.border = "none";
  iframeContainerElement.style.zIndex = 9999999999;

  iframeContainerElement.onload = function () {
    containerElement =
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.createElement("div");
    containerElement.id = "webpack-dev-server-client-overlay-div";
    containerElement.style.position = "fixed";
    containerElement.style.boxSizing = "border-box";
    containerElement.style.left = 0;
    containerElement.style.top = 0;
    containerElement.style.right = 0;
    containerElement.style.bottom = 0;
    containerElement.style.width = "100vw";
    containerElement.style.height = "100vh";
    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    containerElement.style.color = "#E8E8E8";
    containerElement.style.fontFamily = "Menlo, Consolas, monospace";
    containerElement.style.fontSize = "large";
    containerElement.style.padding = "2rem";
    containerElement.style.lineHeight = "1.2";
    containerElement.style.whiteSpace = "pre-wrap";
    containerElement.style.overflow = "auto";
    var headerElement = document.createElement("span");
    headerElement.innerText = "Compiled with problems:";
    var closeButtonElement = document.createElement("button");
    closeButtonElement.innerText = "X";
    closeButtonElement.style.background = "transparent";
    closeButtonElement.style.border = "none";
    closeButtonElement.style.fontSize = "20px";
    closeButtonElement.style.fontWeight = "bold";
    closeButtonElement.style.color = "white";
    closeButtonElement.style.cursor = "pointer";
    closeButtonElement.style.cssFloat = "right"; // @ts-ignore

    closeButtonElement.style.styleFloat = "right";
    closeButtonElement.addEventListener("click", function () {
      hide();
    });
    containerElement.appendChild(headerElement);
    containerElement.appendChild(closeButtonElement);
    containerElement.appendChild(document.createElement("br"));
    containerElement.appendChild(document.createElement("br"));
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */

    iframeContainerElement.contentDocument.body.appendChild(containerElement);
    onLoadQueue.forEach(function (onLoad) {
      onLoad(
      /** @type {HTMLDivElement} */
      containerElement);
    });
    onLoadQueue = [];
    /** @type {HTMLIFrameElement} */

    iframeContainerElement.onload = null;
  };

  document.body.appendChild(iframeContainerElement);
}
/**
 * @param {(element: HTMLDivElement) => void} callback
 */


function ensureOverlayExists(callback) {
  if (containerElement) {
    // Everything is ready, call the callback right away.
    callback(containerElement);
    return;
  }

  onLoadQueue.push(callback);

  if (iframeContainerElement) {
    return;
  }

  createContainer();
} // Successful compilation.


function hide() {
  if (!iframeContainerElement) {
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(iframeContainerElement);
  iframeContainerElement = null;
  containerElement = null;
}
/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
 * @returns {{ header: string, body: string }}
 */


function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";

  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }

  return {
    header: header,
    body: body
  };
} // Compilation with errors (e.g. syntax error or missing modules).

/**
 * @param {string} type
 * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
 */


function show(type, messages) {
  ensureOverlayExists(function () {
    messages.forEach(function (message) {
      var entryElement = document.createElement("div");
      var typeElement = document.createElement("span");

      var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;

      typeElement.innerText = header;
      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
      var messageTextNode = document.createElement("div");
      messageTextNode.innerHTML = text;
      entryElement.appendChild(typeElement);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(messageTextNode);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      /** @type {HTMLDivElement} */

      containerElement.appendChild(entryElement);
    });
  });
}



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */

 // this WebsocketClient is here as a default fallback, in case the client is not injected

/* eslint-disable camelcase */

var Client = // eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;
var client = null;
/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */

var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;

    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);

    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";

  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }

  var auth = objURL.auth || "";

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }

  var host = "";

  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));

    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }

  var pathname = objURL.pathname || "";

  if (objURL.slashes) {
    host = "//".concat(host || "");

    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }

  var search = objURL.search || "";

  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }

  var hash = objURL.hash || "";

  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }

  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */


function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname; // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'

  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }

  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }

  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them

  if (parsedURL.username) {
    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.

    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  } // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided


  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;

  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  } // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.


  var socketURLPathname = "/ws";

  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }

  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  } // Fallback to getting all scripts running in the document.


  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });

  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  } // Fail as there was no script to use.


  throw new Error("[webpack-dev-server] Failed to get current script source.");
}

/* harmony default export */ __webpack_exports__["default"] = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": function() { return /* binding */ log; },
/* harmony export */   "setLogLevel": function() { return /* binding */ setLogLevel; }
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
// to be set by the CLI or API

var defaultLevel = "info"; // options new options, merge with old options

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */

function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}

setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */

function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};

  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.substr(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;

    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {// URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }

    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }

  return options;
}

/* harmony default export */ __webpack_exports__["default"] = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");


/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */

function reloadApp(_ref, status) {
  var hot = _ref.hot,
      liveReload = _ref.liveReload;

  if (status.isUnloading) {
    return;
  }

  var currentHash = status.currentHash,
      previousHash = status.previousHash;
  var isInitial = currentHash.indexOf(
  /** @type {string} */
  previousHash) >= 0;

  if (isInitial) {
    return;
  }
  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */


  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }

  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;

  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);

    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;

        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global __resourceQuery WorkerGlobalScope */
// Send messages to the outside, so plugins can consume it.

/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/* globals __webpack_hash__ */
if (true) {
  var lastHash;

  var upToDate = function upToDate() {
    return lastHash.indexOf(__webpack_require__.h()) >= 0;
  };

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  var check = function check() {
    module.hot.check(true).then(function (updatedModules) {
      if (!updatedModules) {
        log("warning", "[HMR] Cannot find update. Need to do a full reload!");
        log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
        window.location.reload();
        return;
      }

      if (!upToDate()) {
        check();
      }

      __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

      if (upToDate()) {
        log("info", "[HMR] App is up to date.");
      }
    }).catch(function (err) {
      var status = module.hot.status();

      if (["abort", "fail"].indexOf(status) >= 0) {
        log("warning", "[HMR] Cannot apply update. Need to do a full reload!");
        log("warning", "[HMR] " + log.formatError(err));
        window.location.reload();
      } else {
        log("warning", "[HMR] Update failed: " + log.formatError(err));
      }
    });
  };

  var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");

  hotEmitter.on("webpackHotUpdate", function (currentHash) {
    lastHash = currentHash;

    if (!upToDate() && module.hot.status() === "idle") {
      log("info", "[HMR] Checking for updates on the server...");
      check();
    }
  });
  log("info", "[HMR] Waiting for update signal from WDS...");
} else {}

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

module.exports = new EventEmitter();

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ (function(module) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};
/* eslint-disable node/no-unsupported-features/node-builtins */


var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
  logLevel = level;
};

module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;

  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

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
      "class": options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? "n20g20 n20g20-mobile" : "n20g20"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n20g20-wrapper"
    }, [options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n20g20-toggle-button"
    }) : "", this.generateLogo(options), options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? "" : this.generateMenu(options), this.generateLoginBlock(options), this.generateSearchBlock(options), options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? this.generateMenu(options) : ""]));
  },
  generateLogo: function generateLogo(options) {
    var logoUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? logoUrl = "https://www.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? logoUrl = "https://www.webmoney.ru" : logoUrl = "https://www.web.money/";
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": logoUrl,
      "class": "n20g20-logo-webmoney"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("object", {
      "type": "image/svg+xml",
      "data": __webpack_require__(/*! ../images/wm-logo.svg */ "./src/webMoneyHeader/images/wm-logo.svg")
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "src": __webpack_require__(/*! ../images/wm-logo-small.png */ "./src/webMoneyHeader/images/wm-logo-small.png")
    })));
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
  generateSearchBlock: function generateSearchBlock(options) {
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
  generateLoginBlock: function generateLoginBlock(options) {
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
    (0,_ajax__WEBPACK_IMPORTED_MODULE_1__["default"])("GET", url, function (response) {
      var data = JSON.parse(response).data.replace(/header-menu/g, "n24g24-header-menu").replace(/sidebar-submenu/g, "n25g25-sidebar-submenu").replace(/rel="toggle-menu"/g, "");
      rootElement.getElementsByClassName("n20g20-ext-menu")[0].innerHTML = data;
      var toggleButton = rootElement.getElementsByClassName("n20g20-toggle-button")[0];
      var toggleMenu = rootElement.getElementsByClassName("n20g20-ext-menu")[0];

      if (options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE) {
        var subMenuList = toggleMenu.querySelectorAll("span");
      } else {
        var subMenuList = rootElement.getElementsByClassName("n24g24-header-menu-with-submenu");
      }

      for (var i = 0; i < subMenuList.length; i++) {
        subMenuList[i].addEventListener("click", function (e) {
          e.stopPropagation();
          !this.classList.contains("n24g24-submenu-opened") ? this.classList.add("n24g24-submenu-opened") : this.classList.remove("n24g24-submenu-opened");

          for (var j = 0; j < subMenuList.length; j++) {
            if (subMenuList[j] != this) {
              subMenuList[j].classList.remove("n24g24-submenu-opened");
            }
          }
        });
      }

      document.addEventListener("click", function (e) {
        for (var i = 0; i < subMenuList.length; i++) {
          subMenuList[i].classList.remove("n24g24-submenu-opened");
        }
      });

      if (options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE) {
        toggleButton.addEventListener("click", function (e) {
          e.stopPropagation();
          !this.classList.contains("is-activated") ? this.classList.add("is-activated") : this.classList.remove("is-activated");
          !toggleMenu.classList.contains("is-activated") ? toggleMenu.classList.add("is-activated") : toggleMenu.classList.remove("is-activated");
        });
      }
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

/***/ "./src/webMoneyHeader/webMoneyHeader.js":
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    _extensions_menu__WEBPACK_IMPORTED_MODULE_4__["default"].init(options);
    _extensions_searchBlock__WEBPACK_IMPORTED_MODULE_5__["default"].init(options);
    _extensions_loginBlock__WEBPACK_IMPORTED_MODULE_3__["default"].init(options);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-header-menu-arrow-down-2.svg */ "./src/webMoneyHeader/images/icon-header-menu-arrow-down-2.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/n22g22-icon-search-toggle-up.svg */ "./src/webMoneyHeader/images/n22g22-icon-search-toggle-up.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bullet-header-menu-more.svg */ "./src/webMoneyHeader/images/bullet-header-menu-more.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/n22g22-icon-search.svg */ "./src/webMoneyHeader/images/n22g22-icon-search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu_btn.png */ "./src/webMoneyHeader/images/menu_btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu_btn_ac.png */ "./src/webMoneyHeader/images/menu_btn_ac.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/m_ab.png */ "./src/webMoneyHeader/images/m_ab.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/m_at.png */ "./src/webMoneyHeader/images/m_at.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search.png */ "./src/webMoneyHeader/images/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search_ac.png */ "./src/webMoneyHeader/images/search_ac.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/back.png */ "./src/webMoneyHeader/images/back.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close_s.png */ "./src/webMoneyHeader/images/close_s.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-search-toggle-down.svg */ "./src/webMoneyHeader/images/icon-search-toggle-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/add_wmid.png */ "./src/webMoneyHeader/images/add_wmid.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/purse.png */ "./src/webMoneyHeader/images/purse.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/user_logout.png */ "./src/webMoneyHeader/images/user_logout.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/settings.png */ "./src/webMoneyHeader/images/settings.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/settings_h.png */ "./src/webMoneyHeader/images/settings_h.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/user_close.png */ "./src/webMoneyHeader/images/user_close.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-search-toggle-up.svg */ "./src/webMoneyHeader/images/icon-search-toggle-up.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login-gray.png */ "./src/webMoneyHeader/images/login-gray.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".test {\n  background-color: blue; }\n\n.n20g20 {\n  width: 100%;\n  margin-bottom: 16px;\n  box-sizing: border-box; }\n  .n20g20 * {\n    box-sizing: border-box; }\n\n.n20g20-wrapper {\n  position: relative;\n  width: 960px;\n  margin: auto; }\n\n.n20g20-wrapper:after {\n  display: table;\n  clear: both;\n  content: ''; }\n\n.n20g20-logo-webmoney {\n  position: relative;\n  z-index: 1;\n  display: block;\n  float: left;\n  width: 140px; }\n\n.n20g20-logo-webmoney object {\n  position: relative;\n  z-index: -1;\n  display: block;\n  width: 139px;\n  height: 34px;\n  margin-top: 7px;\n  cursor: pointer;\n  pointer-events: none; }\n\n.n20g20-ext-menu {\n  float: left;\n  width: 408px;\n  height: 32px;\n  padding-top: 7px; }\n\n.n20g20-ext-menu .header-menu {\n  opacity: 0; }\n\n.n20g20-ext-menu .n24g24-header-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu {\n  font-size: 12px;\n  line-height: 12px;\n  float: left;\n  margin-left: 5px;\n  padding: 10px 15px 20px 4px;\n  cursor: pointer;\n  border: solid 1px rgba(255, 255, 255, 0);\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") calc(100% - 4px) 13px no-repeat;\n  background-size: 8px 8px; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened {\n  border: solid 1px #d7d7d7;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background: #ffffff url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") calc(100% - 4px) 12px no-repeat;\n  background-size: 8px 8px;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1); }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu > a,\n.n20g20-ext-menu .n24g24-header-menu-with-submenu span {\n  text-decoration: none;\n  border-bottom: 1px dotted #757575; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu a {\n  font-family: Verdana, Arial, sans-serif;\n  text-decoration: none;\n  color: #757575; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a,\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > span {\n  border-bottom: none; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a {\n  position: relative;\n  display: block; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a:after {\n  position: absolute;\n  z-index: 502;\n  bottom: -20px;\n  left: -4px;\n  display: block;\n  width: calc(100% + 19px);\n  height: 21px;\n  content: '';\n  background-color: #ffffff; }\n\n.n20g20-ext-menu ul.n24g24-header-menu-more-content b,\n.n20g20-ext-menu ul.n24g24-header-menu-more-content h3,\n.n20g20-ext-menu ul.n24g24-header-menu-more-content b a,\n.n20g20-ext-menu ul.n24g24-header-menu-more-content h3 a {\n  font-weight: 400;\n  color: #000000; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu .n24g24-header-menu-more-content {\n  font-size: 13px;\n  position: absolute;\n  z-index: 18;\n  top: 45px;\n  left: 0;\n  display: none;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  width: 960px;\n  margin: 0;\n  padding: 10px 0;\n  list-style: none;\n  cursor: default;\n  border: solid 1px #d7d7d7;\n  border-radius: 3px 3px 10px 10px;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1); }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\n.n24g24-header-menu-more-content {\n  display: block; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-4-columns > li {\n  float: left;\n  width: 240px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-3-columns > li {\n  float: left;\n  width: 320px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-3-columns\nli.n24g24-header-menu-more-column2 > div {\n  margin: 0 5px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-3-columns > li.n24g24-header-menu-more-column1 > div {\n  margin: 0 5px 0 10px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-3-columns\nli.n24g24-header-menu-more-column3 > div {\n  margin: 0 10px 0 5px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\n.n24g24-header-menu-more-content\nb {\n  font-family: Verdana, Arial, sans-serif;\n  font-size: 120%;\n  font-weight: 300;\n  line-height: 130%;\n  display: block;\n  margin: 10px 0 5px 0; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\n.n24g24-header-menu-more-content\ndiv > a {\n  font-family: Verdana, Arial, sans-serif;\n  font-size: 100%;\n  line-height: 150%;\n  display: block;\n  margin-top: 3px;\n  padding-left: 10px;\n  color: #777777;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 4px 7px no-repeat; }\n\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened .n24g24-header-menu-more-content div > a:hover {\n  color: #006cb4; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-4-columns\nli.n24g24-header-menu-more-column2 > div,\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-4-columns\nli.n24g24-header-menu-more-column3 > div {\n  margin: 0 5px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-4-columns > li.n24g24-header-menu-more-column1 > div {\n  margin: 0 5px 0 10px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu\n.n24g24-header-menu-more-4-columns\nli.n24g24-header-menu-more-column4 > div {\n  margin: 0 10px 0 5px; }\n\n.n20g20-ext-menu\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\n.n24g24-header-menu-more-content\nb:first-child {\n  margin-top: 0; }\n\n.n20g20 .n22g22-header-functions {\n  float: right;\n  width: 412px;\n  margin-top: 8px; }\n\n.n20g20 .n22g22-header-user-search {\n  width: 195px;\n  float: left;\n  margin-top: 8px;\n  padding: 0;\n  padding-right: 5px;\n  vertical-align: top;\n  -webkit-box-sizing: initial;\n  box-sizing: initial; }\n\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-decoration,\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-cancel-button,\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-results-button,\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-block {\n  position: relative;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  width: 193px;\n  height: 31px;\n  border: 1px solid #b2b2b2;\n  background-color: #ffffff;\n  z-index: 999; }\n\n.n20g20 .n22g22-header-user-search img.n22g22-toggle-search,\n.n20g20 .n22g22-header-user-search span.n22g22-icon-search {\n  width: 25px;\n  height: 31px;\n  cursor: pointer; }\n\n.n20g20 .n22g22-header-user-search img.n22g22-toggle-search {\n  float: right; }\n\n.n20g20 .n22g22-header-user-search span.n22g22-icon-search {\n  float: left;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 50% 50% no-repeat; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-box-input {\n  font-family: Verdana, Arial, sans-serif;\n  font-size: 12px;\n  float: left;\n  width: 139px;\n  height: 29px;\n  padding: 0;\n  color: #757575;\n  border: none;\n  border-radius: 0;\n  outline: 0;\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more {\n  font-size: 12px;\n  position: absolute;\n  z-index: 100;\n  top: 31px;\n  left: -1px;\n  display: none;\n  width: 193px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border: 1px solid #b2b2b2;\n  background-color: #ffffff;\n  box-sizing: content-box; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more li {\n  font-size: 12px;\n  line-height: 12px;\n  margin-top: 5px; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more li:first-child {\n  margin-top: 0; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a {\n  font-family: Verdana, Arial, sans-serif;\n  display: block;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #555555; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a:hover {\n  background-color: #f3f3f3; }\n\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a.n22g22-search-current {\n  color: #ffffff;\n  background-color: #006cb4; }\n\n.n20g20-mobile {\n  margin-bottom: 0; }\n\n.n20g20-mobile .n20g20-wrapper {\n  width: 100%; }\n\n.n20g20-mobile .n20g20-toggle-button {\n  margin: 0;\n  width: 50px;\n  height: 50px;\n  float: left;\n  border: none;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") center center no-repeat #fff;\n  background-size: 19px 20px; }\n\n.n20g20-mobile .n20g20-toggle-button.is-activated {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center center no-repeat #ececec;\n  background-size: 19px 20px; }\n\n.n20g20-mobile .n20g20-logo-webmoney {\n  width: calc(100% - 180px);\n  background-position: center center;\n  margin: 3px 0 0 16px; }\n\n.n20g20-mobile .n20g20-ext-menu {\n  display: none;\n  float: none;\n  padding: 0;\n  height: auto;\n  width: 100%;\n  clear: both;\n  background: #ececec;\n  padding: 0 17px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.n20g20-mobile .n20g20-ext-menu.is-activated {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span {\n  font-family: Verdana,Arial,sans-serif;\n  color: #353535;\n  font-size: 15px;\n  padding: 11px 0 12px;\n  display: block;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") right center no-repeat;\n  background-size: 10px 6px;\n  border-bottom: 1px solid #d8d8d8; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") right center no-repeat;\n  background-size: 10px 6px; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\n  display: block; }\n\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu {\n  float: none;\n  display: none;\n  margin: 0;\n  font-size: 90%;\n  line-height: 130%;\n  margin-left: 20px; }\n\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu a {\n  color: #353535;\n  display: block;\n  font-size: 13px;\n  padding: 9px 0 10px;\n  border-bottom: 1px solid #d8d8d8;\n  font-family: Verdana,Arial,sans-serif;\n  text-decoration: none; }\n\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu .n25g25-sidebar-submenu {\n  display: none; }\n\n.n20g20-mobile {\n  width: 100%;\n  display: block; }\n\n.n20g20-mobile .n22g22-header-user-search {\n  display: block;\n  padding: 0;\n  width: 50px;\n  margin-top: 0;\n  float: right; }\n\n.n20g20-mobile .n22g22-header-user-search .n22g22-toggle-search-button {\n  width: 50px;\n  height: 50px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center center no-repeat #fff;\n  background-size: 22px 22px;\n  float: right;\n  display: block;\n  border: none;\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  margin-right: 0; }\n\n.n20g20-mobile .n22g22-header-user-search .n22g22-toggle-search-button.is-activated + .n22g22-search-block {\n  opacity: 1;\n  visibility: visible;\n  left: 0;\n  width: 100%;\n  overflow: visible; }\n\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block {\n  opacity: 0;\n  visibility: hidden;\n  background-color: #fff;\n  position: absolute;\n  left: 100%;\n  width: 0;\n  border: none;\n  height: 50px;\n  -webkit-transition: left ease 0.3s;\n  transition: left ease 0.3s;\n  overflow: hidden; }\n\n.n20g20-mobile .n22g22-header-user-search span.n22g22-icon-search {\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  float: right;\n  display: block;\n  padding-right: 0;\n  position: relative;\n  z-index: 1;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") center center no-repeat #1e5ba7;\n  background-size: 22px 22px; }\n\n.n20g20-mobile .n22g22-header-user-search .n20g20-close-search-button {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 50px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") center center no-repeat;\n  background-size: 15px 15px;\n  float: left; }\n\n.n20g20-mobile .n22g22-header-user-search div.n22g22-search-block > input[type=search] {\n  float: left;\n  padding: 0;\n  border: 1px solid #fff;\n  background-color: #fff;\n  color: #000;\n  font-size: 12px;\n  outline: 0;\n  font-family: Verdana,Arial,sans-serif;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  height: 28px;\n  margin-top: 10px;\n  border: none;\n  border-bottom: 2px solid #c4c8cc;\n  width: 66%;\n  width: calc(100% - 117px);\n  font-size: 16px;\n  box-shadow: none;\n  outline: 0;\n  margin-left: 7px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.n20g20-mobile .n22g22-header-user-search div.n22g22-search-block > input[type=search]:focus {\n  border-bottom: 2px solid #1e5ba7; }\n\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block .remove_text {\n  content: \"\";\n  width: 40px;\n  height: 50px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") center center no-repeat;\n  background-size: 12px 12px;\n  float: right;\n  position: absolute;\n  top: 50%;\n  right: 61px;\n  margin-top: -25px; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-webkit-input-placeholder {\n  color: #757575;\n  opacity: 1; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]:-ms-input-placeholder {\n  color: #757575;\n  opacity: 1; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-ms-input-placeholder {\n  color: #757575;\n  opacity: 1; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]::placeholder {\n  color: #757575;\n  opacity: 1; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]:-ms-input-placeholder {\n  color: #757575; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-ms-input-placeholder {\n  color: #757575; }\n\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-webkit-input-placeholder {\n  color: #757575; }\n\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block .n22g22-toggle-search {\n  position: absolute;\n  right: 64px;\n  top: 50%;\n  margin-top: -12px;\n  width: 25px;\n  height: 22px; }\n\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more {\n  position: absolute;\n  top: 38px;\n  right: 68px;\n  left: auto;\n  border: 1px solid #c4c8cc;\n  -webkit-box-shadow: 0 4px 10px 0 rgba(21, 21, 20, 0.4);\n  box-shadow: 0 4px 10px 0 rgba(21, 21, 20, 0.4);\n  border-top: none;\n  width: 66%;\n  width: calc(100% - 117px); }\n\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more li a {\n  display: block;\n  text-decoration: none;\n  font-size: 14px;\n  color: #646669;\n  padding: 12px 10px; }\n\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more li a.search-current {\n  color: #fff;\n  background-color: #1e5ba7; }\n\n.n20g20 .n23g23-login-block {\n  margin-top: 8px;\n  width: 200px;\n  float: right; }\n  .n20g20 .n23g23-login-block-buttons, .n20g20 .n23g23-login-block-wrapper {\n    display: none; }\n  .n20g20 .n23g23-login-block.is-logged-in .n23g23-login-block-wrapper {\n    display: block; }\n  .n20g20 .n23g23-login-block.is-not-logged-in .n23g23-login-block-buttons {\n    display: block; }\n  .n20g20 .n23g23-login-block-buttons-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .n20g20 .n23g23-login-block-button {\n    margin: 0;\n    height: 33px;\n    line-height: 33px;\n    text-align: center;\n    text-decoration: none;\n    overflow: hidden;\n    font-size: 12px;\n    font-family: Verdana,Arial,sans-serif; }\n    .n20g20 .n23g23-login-block-button--registration {\n      width: 120px;\n      background-color: #fdc437;\n      color: #5e4200; }\n      .n20g20 .n23g23-login-block-button--registration:hover, .n20g20 .n23g23-login-block-button--registration:active, .n20g20 .n23g23-login-block-button--registration:visited {\n        background-color: #fdc437;\n        color: #5e4200; }\n    .n20g20 .n23g23-login-block-button--login {\n      width: 75px;\n      background-color: #a2bd37;\n      color: #fff; }\n      .n20g20 .n23g23-login-block-button--login:hover, .n20g20 .n23g23-login-block-button--login:active, .n20g20 .n23g23-login-block-button--login:visited {\n        background-color: #a2bd37;\n        color: #fff; }\n  .n20g20 .n23g23-login-block-user-line {\n    display: flex;\n    position: relative;\n    align-items: center;\n    height: 32px;\n    padding-right: 25px;\n    cursor: pointer;\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") right -5px center no-repeat; }\n    .n20g20 .n23g23-login-block-user-line:after {\n      content: \"\";\n      width: 16px;\n      height: 20px;\n      position: absolute;\n      top: 6px;\n      right: 14px;\n      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 47%, white 48%, white 100%); }\n  .n20g20 .n23g23-login-block-user-line-image {\n    display: block;\n    width: 26px;\n    height: 26px; }\n  .n20g20 .n23g23-login-block-user-line-name {\n    white-space: nowrap;\n    color: #757575;\n    font-family: Verdana,Arial,sans-serif;\n    font-size: 12px;\n    border-bottom: 1px dotted #757575;\n    display: inline-block;\n    overflow: hidden;\n    line-height: normal;\n    margin-left: 7px;\n    margin-top: -1px;\n    max-width: 145px; }\n  .n20g20 .n23g23-login-block-overlay {\n    display: none; }\n  .n20g20 .n23g23-login-block-window {\n    position: absolute;\n    width: 290px;\n    height: auto;\n    background: #fff;\n    border: 1px solid #bfbfbf;\n    border-radius: 4px;\n    right: 0;\n    margin-top: 5px;\n    padding: 0;\n    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);\n    display: none;\n    top: 41px;\n    z-index: 99;\n    box-sizing: content-box; }\n    .n20g20 .n23g23-login-block-window:after, .n20g20 .n23g23-login-block-window:before {\n      bottom: 100%;\n      left: 105px;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .n20g20 .n23g23-login-block-window:before {\n      border-color: rgba(191, 191, 191, 0);\n      border-bottom-color: #bfbfbf;\n      border-width: 7px;\n      margin-left: -7px; }\n    .n20g20 .n23g23-login-block-window:after {\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 6px;\n      margin-left: -6px; }\n  .n20g20 .n23g23-login-block-window-login-button {\n    font-size: 12px;\n    color: #454545;\n    display: block;\n    text-decoration: none;\n    background: #f3f3f3 url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") 10px center no-repeat;\n    padding: 8px 10px 8px 40px;\n    opacity: 0.7;\n    font-family: Verdana, Arial, sans-serif;\n    line-height: 33px; }\n    .n20g20 .n23g23-login-block-window-login-button:hover {\n      background-color: #e6e6e6;\n      opacity: 1; }\n  .n20g20 .n23g23-login-block-window-user {\n    padding: 10px;\n    height: 70px;\n    box-sizing: border-box;\n    margin-bottom: 5px; }\n    .n20g20 .n23g23-login-block-window-user-wrapper {\n      display: flex; }\n    .n20g20 .n23g23-login-block-window-user-image-link {\n      width: 50px;\n      height: 50px;\n      display: block;\n      margin-right: 10px; }\n    .n20g20 .n23g23-login-block-window-user-image {\n      width: 100%;\n      display: block; }\n    .n20g20 .n23g23-login-block-window-user-info {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      width: calc(100% - 60px); }\n      .n20g20 .n23g23-login-block-window-user-info-name {\n        display: block;\n        line-height: normal;\n        text-decoration: none;\n        color: #006cb4;\n        font-size: 14px;\n        margin-bottom: 8px;\n        font-family: Verdana, Arial, sans-serif; }\n        .n20g20 .n23g23-login-block-window-user-info-name-text {\n          border-bottom: 1px dotted transparent;\n          position: relative;\n          white-space: nowrap;\n          max-width: 210px;\n          overflow: hidden;\n          display: inline-flex; }\n        .n20g20 .n23g23-login-block-window-user-info-name:after {\n          content: \"\";\n          width: 20px;\n          height: 20px;\n          position: absolute;\n          top: 9px;\n          right: 0;\n          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 47%, white 48%, white 100%); }\n        .n20g20 .n23g23-login-block-window-user-info-name:hover .n23g23-login-block-window-user-info-name-text {\n          border-bottom: 1px dotted #006cb4; }\n      .n20g20 .n23g23-login-block-window-user-info-wrapper {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-end; }\n      .n20g20 .n23g23-login-block-window-user-info-purse {\n        font-size: 10px;\n        color: #546b80;\n        padding: 5px 10px 5px 18px;\n        background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") left center no-repeat;\n        text-decoration: none;\n        display: inline-flex;\n        line-height: normal;\n        opacity: 0.7;\n        font-family: Verdana, Arial, sans-serif; }\n        .n20g20 .n23g23-login-block-window-user-info-purse:hover {\n          opacity: 1; }\n          .n20g20 .n23g23-login-block-window-user-info-purse:hover .n23g23-login-block-window-user-info-purse-text {\n            border-bottom: 1px dotted #546b80; }\n        .n20g20 .n23g23-login-block-window-user-info-purse-text {\n          border-bottom: 1px dotted transparent;\n          text-transform: uppercase;\n          display: block; }\n      .n20g20 .n23g23-login-block-window-user-info-logout {\n        padding: 5px 10px 5px 25px;\n        font-size: 11px;\n        color: #727a81;\n        border-radius: 4px;\n        border: 1px solid #e1e1e1;\n        text-decoration: none;\n        background: #f7f7f7 url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") 10px center no-repeat;\n        display: inline-block;\n        line-height: normal;\n        font-family: Verdana, Arial, sans-serif;\n        margin-bottom: -2px; }\n        .n20g20 .n23g23-login-block-window-user-info-logout:hover {\n          background-color: #e6e6e6; }\n  .n20g20 .n23g23-login-block-window-additional-wmids-item {\n    padding: 10px 10px 6px;\n    border-top: 1px solid #e3e3e3;\n    background: #f3f3f3;\n    display: block;\n    box-sizing: content-box;\n    height: 33px;\n    text-decoration: none; }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item:hover {\n      background-color: #e6e6e6; }\n      .n20g20 .n23g23-login-block-window-additional-wmids-item:hover .n23g23-login-block-window-additional-wmids-item-name:after {\n        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #e7e7e7 47%, #e6e6e6 48%, #e6e6e6 100%); }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item:last-child {\n      border-bottom: 1px solid #e3e3e3; }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item-wrapper {\n      display: flex;\n      align-items: center; }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item-image {\n      display: block;\n      margin-right: 8px;\n      width: 26px; }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item-name {\n      color: #454545;\n      font-size: 12px;\n      line-height: normal;\n      width: 230px;\n      overflow: hidden;\n      position: relative;\n      font-family: Verdana, Arial, sans-serif;\n      text-decoration: none;\n      display: block; }\n      .n20g20 .n23g23-login-block-window-additional-wmids-item-name:after {\n        content: \"\";\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: 0;\n        right: -6px;\n        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #f3f3f3 47%, #f3f3f3 48%, #f3f3f3 100%); }\n    .n20g20 .n23g23-login-block-window-additional-wmids-item-wmid {\n      font-family: Verdana, Arial, sans-serif;\n      display: block;\n      color: #b0b0b0;\n      font-size: 10px;\n      line-height: normal; }\n  .n20g20 .n23g23-login-block-window-settings {\n    font-size: 12px;\n    font-family: Verdana, Arial, sans-serif;\n    color: #454545;\n    display: block;\n    text-decoration: none;\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") 11px center no-repeat;\n    padding: 8px 10px 8px 40px;\n    border-top: 1px solid #e3e3e3;\n    line-height: 33px; }\n    .n20g20 .n23g23-login-block-window-settings:hover {\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + "); }\n  .n20g20 .n23g23-login-block-window-close {\n    display: none;\n    font-size: 12px;\n    font-family: Verdana, Arial, sans-serif;\n    color: #454545;\n    text-decoration: none;\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") 16px center no-repeat;\n    background-size: 12px 11px;\n    padding: 8px 10px 8px 40px;\n    border-top: 1px solid #e3e3e3;\n    line-height: 33px; }\n  .n20g20 .n23g23-login-block-wrapper.is-opened .n23g23-login-block-user-line {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") right 5px center no-repeat; }\n    .n20g20 .n23g23-login-block-wrapper.is-opened .n23g23-login-block-user-line-image {\n      opacity: 0.4; }\n    .n20g20 .n23g23-login-block-wrapper.is-opened .n23g23-login-block-user-line-name {\n      color: #b0b0b0;\n      border-bottom-color: transparent; }\n  .n20g20 .n23g23-login-block-wrapper.is-opened .n23g23-login-block-window {\n    display: block; }\n\n.n20g20-mobile .n23g23-login-block {\n  width: 50px;\n  margin-top: 0; }\n  .n20g20-mobile .n23g23-login-block-button--registration {\n    display: none; }\n  .n20g20-mobile .n23g23-login-block-button--login {\n    width: 50px;\n    height: 50px;\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") center center no-repeat;\n    background-size: 22px 22px;\n    text-indent: -9999px; }\n    .n20g20-mobile .n23g23-login-block-button--login:hover, .n20g20-mobile .n23g23-login-block-button--login:active, .n20g20-mobile .n23g23-login-block-button--login:visited {\n      background-color: transparent; }\n  .n20g20-mobile .n23g23-login-block.is-logged-in {\n    margin-left: -4px; }\n  .n20g20-mobile .n23g23-login-block-user-line {\n    padding-right: 0;\n    background-image: none;\n    align-items: center;\n    justify-content: center;\n    margin-top: 9px; }\n    .n20g20-mobile .n23g23-login-block-user-line:after, .n20g20-mobile .n23g23-login-block-user-line-name {\n      display: none; }\n  .n20g20-mobile .n23g23-login-block-wrapper.is-opened .n23g23-login-block-window,\n  .n20g20-mobile .n23g23-login-block-wrapper.is-opened .n23g23-login-block-overlay {\n    display: block; }\n  .n20g20-mobile .n23g23-login-block-overlay {\n    background: #000000;\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 98;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow-x: auto;\n    overflow: auto;\n    display: none; }\n  .n20g20-mobile .n23g23-login-block-window {\n    z-index: 99;\n    display: none;\n    left: 0;\n    width: 95%;\n    box-sizing: border-box;\n    margin: auto;\n    z-index: 1000;\n    top: 10px;\n    min-width: 280px; }\n    .n20g20-mobile .n23g23-login-block-window:before, .n20g20-mobile .n23g23-login-block-window:after {\n      display: none; }\n  .n20g20-mobile .n23g23-login-block-window-close {\n    display: block; }\n\n.n20g20-mobile .n22g22-header-user-search div.n22g22-search-block > input[type=search] {\n  display: block; }\n", "",{"version":3,"sources":["webpack://./src/webMoneyHeader/webMoneyHeader.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAA;;AAKxB;EACE,WAAW;EACX,mBAAmB;EACnB,sBAAsB,EAAA;EAHxB;IAKI,sBAAsB,EAAA;;AAI1B;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY,EAAA;;AAGd;EACE,cAAc;EACd,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,oBAAoB,EAAA;;AAGtB;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gBAAgB,EAAA;;AAGlB;EACE,UAAU,EAAA;;AAGZ;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,UAAU;EACV,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,eAAe;EACf,wCAAwC;EACxC,+FAAyG;EACzG,wBAAwB,EAAA;;AAG1B;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,4BAA4B;EAC5B,2FAAoG;EACpG,wBAAwB;EACxB,gDAAgD;EACxC,wCAAwC,EAAA;;AAGlD;;EAEE,qBAAqB;EACrB,iCAAiC,EAAA;;AAGnC;EACE,uCAAuC;EACvC,qBAAqB;EACrB,cAAc,EAAA;;AAGhB;;EAEE,mBAAmB,EAAA;;AAGrB;EACE,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,cAAc;EACd,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,yBAAyB,EAAA;;AAG3B;;;;EAIE,gBAAgB;EAChB,cAAc,EAAA;;AAGhB;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,OAAO;EACP,aAAa;EACb,+BAA+B;EACvB,uBAAuB;EAC/B,YAAY;EACZ,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;EAChC,yBAAyB;EACzB,gDAAgD;EACxC,wCAAwC,EAAA;;AAGlD;;;EAGE,cAAc,EAAA;;AAGhB;;;EAGE,WAAW;EACX,YAAY,EAAA;;AAGd;;;EAGE,WAAW;EACX,YAAY,EAAA;;AAGd;;;;EAIE,aAAa,EAAA;;AAGf;;;EAGE,oBAAoB,EAAA;;AAGtB;;;;EAIE,oBAAoB,EAAA;;AAGtB;;;;EAIE,uCAAuC;EACvC,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,oBAAoB,EAAA;;AAGtB;;;;EAIE,uCAAuC;EACvC,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,qEAAyE,EAAA;;AAG3E;EACE,cAAc,EAAA;;AAGhB;;;;;;;;EAQE,aAAa,EAAA;;AAGf;;;EAGE,oBAAoB,EAAA;;AAGtB;;;;EAIE,oBAAoB,EAAA;;AAGtB;;;;EAIE,aAAa,EAAA;;AAGf;EACE,YAAY;EACZ,YAAY;EACZ,eAAe,EAAA;;AAGjB;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;EACnB,mBAAmB,EAAA;;AAG7B;;;;EAIE,wBAAuB,EAAA;;AAGzB;EACE,kBAAkB;EAClB,+BAA+B;EACvB,uBAAuB;EAC/B,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,YAAY,EAAA;;AAGd;;EAEE,WAAW;EACX,YAAY;EACZ,eAAe,EAAA;;AAGjB;EACE,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,qEAAoE,EAAA;;AAGtE;EACE,uCAAuC;EACvC,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,6BAA6B;EAC7B,wBAAwB;EACxB,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,uBAAuB,EAAA;;AAGzB;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe,EAAA;;AAGjB;EACE,aAAa,EAAA;;AAGf;EACE,uCAAuC;EACvC,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,cAAc,EAAA;;AAGhB;EACE,yBAAyB,EAAA;;AAG3B;EACE,cAAc;EACd,yBAAyB,EAAA;;AAG3B;EACE,gBAAgB,EAAA;;AAGlB;EACE,WAAW,EAAA;;AAGb;EACE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,gFAAqE;EACrE,0BAA0B,EAAA;;AAG5B;EACE,mFAA2E;EAC3E,0BAA0B,EAAA;;AAG5B;EACE,yBAAyB;EACzB,kCAAkC;EAClC,oBAAoB,EAAA;;AAGtB;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,YAAY;EACZ,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,8BAA8B;EACtB,sBAAsB,EAAA;;AAGhC;EACE,cAAc,EAAA;;AAGhB;EACE,qCAAqC;EACrC,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,0EAA2D;EAC3D,yBAAyB;EACzB,gCAAgC,EAAA;;AAGlC;EACE,0EAA2D;EAC3D,yBAAyB,EAAA;;AAG3B;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,WAAW;EACX,aAAa;EACb,SAAS;EACT,cAAc;EACd,iBAAiB;EACjB,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,gCAAgC;EAChC,qCAAqC;EACrC,qBAAqB,EAAA;;AAGvB;EACE,aAAa,EAAA;;AAGf;EACE,WAAW;EACX,cAAc,EAAA;;AAGhB;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY;EACZ,gFAAmE;EACnE,0BAA0B;EAC1B,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,eAAe,EAAA;;AAGjB;EACE,UAAU;EACV,mBAAmB;EACnB,OAAO;EACP,WAAW;EACX,iBAAiB,EAAA;;AAGnB;EACE,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,0BAA0B;EAC1B,gBAAgB,EAAA;;AAGlB;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;EACV,mFAAyE;EACzE,0BAA0B,EAAA;;AAG5B;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,YAAY;EACZ,4EAA4D;EAC5D,0BAA0B;EAC1B,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,UAAU;EACV,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,UAAU;EACV,qCAAqC;EACrC,gBAAgB;EAChB,wBAAwB;EACxB,gBAAgB;EAChB,uBAAuB;EACvB,wBAAwB;EACxB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,gCAAgC;EAChC,UAAU;EACV,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB,EAAA;;AAGlB;EACE,gCAAgC,EAAA;;AAGlC;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,4EAA+D;EAC/D,0BAA0B;EAC1B,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,UAAU,EAAA;;AAGZ;EACE,cAAc;EACd,UAAU,EAAA;;AAGZ;EACE,cAAc;EACd,UAAU,EAAA;;AAGZ;EACE,cAAc;EACd,UAAU,EAAA;;AAGZ;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,cAAc,EAAA;;AAGhB;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,iBAAiB;EACjB,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,sDAAsD;EACtD,8CAA8C;EAC9C,gBAAgB;EAChB,UAAU;EACV,yBAAyB,EAAA;;AAG3B;EACE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,kBAAkB,EAAA;;AAGpB;EACE,WAAW;EACX,yBAAyB,EAAA;;AAG3B;EAEI,eAAe;EACf,YAAY;EACZ,YAAY,EAAA;EAJhB;IAOM,aAAa,EAAA;EAPnB;IAWQ,cAAc,EAAA;EAXtB;IAgBQ,cAAc,EAAA;EAhBtB;IAoBM,aAAa;IACb,mBAAmB;IACnB,8BAA8B,EAAA;EAtBpC;IAyBM,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,qCAAqC,EAAA;IAhC3C;MAkCQ,YAAY;MACZ,yBAAyB;MACzB,cAAc,EAAA;MApCtB;QAwCU,yBAAyB;QACzB,cAAc,EAAA;IAzCxB;MA6CQ,WAAW;MACX,yBAAyB;MACzB,WAAW,EAAA;MA/CnB;QAmDU,yBAAyB;QACzB,WAAW,EAAA;EApDrB;IAyDM,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,4FAA+F,EAAA;IA/DrG;MAiEQ,WAAW;MACX,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,QAAQ;MACR,WAAW;MACX,kGAAsI,EAAA;EAvE9I;IA2EM,cAAc;IACd,WAAW;IACX,YAAY,EAAA;EA7ElB;IAgFM,mBAAmB;IACnB,cAAc;IACd,qCAAqC;IACrC,eAAe;IACf,iCAAiC;IACjC,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB,EAAA;EA1FtB;IA6FM,aAAa,EAAA;EA7FnB;IAgGM,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,QAAQ;IACR,eAAe;IACf,UAAU;IACV,8CAA8C;IAC9C,aAAa;IACb,SAAS;IACT,WAAW;IACX,uBAAuB,EAAA;IA7G7B;MA+GQ,YAAY;MACZ,WAAW;MACX,yBAAyB;MACzB,YAAY;MACZ,SAAS;MACT,QAAQ;MACR,kBAAkB;MAClB,oBAAoB,EAAA;IAtH5B;MAyHQ,oCAAoC;MACpC,4BAA4B;MAC5B,iBAAiB;MACjB,iBAAiB,EAAA;IA5HzB;MA+HQ,oCAAoC;MACpC,yBAAyB;MACzB,iBAAiB;MACjB,iBAAiB,EAAA;EAlIzB;IAsIM,eAAe;IACf,cAAc;IACd,cAAc;IACd,qBAAqB;IACrB,kFAAsE;IACtE,0BAA0B;IAC1B,YAAY;IACZ,uCAAuC;IACvC,iBAAiB,EAAA;IA9IvB;MAgJQ,yBAAyB;MACzB,UAAU,EAAA;EAjJlB;IAqJM,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,kBAAkB,EAAA;IAxJxB;MA0JQ,aAAa,EAAA;IA1JrB;MA6JQ,WAAW;MACX,YAAY;MACZ,cAAc;MACd,kBAAkB,EAAA;IAhK1B;MAmKQ,WAAW;MACX,cAAc,EAAA;IApKtB;MAuKQ,aAAa;MACb,sBAAsB;MACtB,8BAA8B;MAC9B,wBAAwB,EAAA;MA1KhC;QA4KU,cAAc;QACd,mBAAmB;QACnB,qBAAqB;QACrB,cAAc;QACd,eAAe;QACf,kBAAkB;QAClB,uCAAuC,EAAA;QAlLjD;UAoLY,qCAAqC;UACrC,kBAAkB;UAClB,mBAAmB;UACnB,gBAAgB;UAChB,gBAAgB;UAChB,oBAAoB,EAAA;QAzLhC;UA4LY,WAAW;UACX,WAAW;UACX,YAAY;UACZ,kBAAkB;UAClB,QAAQ;UACR,QAAQ;UACR,kGAAsI,EAAA;QAlMlJ;UAsMc,iCAAiC,EAAA;MAtM/C;QA2MU,aAAa;QACb,8BAA8B;QAC9B,qBAAqB,EAAA;MA7M/B;QAgNU,eAAe;QACf,cAAc;QACd,0BAA0B;QAC1B,sFAAuE;QACvE,qBAAqB;QACrB,oBAAoB;QACpB,mBAAmB;QACnB,YAAY;QACZ,uCAAuC,EAAA;QAxNjD;UA0NY,UAAU,EAAA;UA1NtB;YA4Nc,iCAAiC,EAAA;QA5N/C;UAgOY,qCAAqC;UACrC,yBAAyB;UACzB,cAAc,EAAA;MAlO1B;QAsOU,0BAA0B;QAC1B,eAAe;QACf,cAAc;QACd,kBAAkB;QAClB,yBAAyB;QACzB,qBAAqB;QACrB,kFAAyE;QACzE,qBAAqB;QACrB,mBAAmB;QACnB,uCAAuC;QACvC,mBAAmB,EAAA;QAhP7B;UAkPY,yBAAyB,EAAA;EAlPrC;IAwPM,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,cAAc;IACd,uBAAuB;IACvB,YAAY;IACZ,qBAAqB,EAAA;IA9P3B;MAgQQ,yBAAyB,EAAA;MAhQjC;QAkQU,wGAAsI,EAAA;IAlQhJ;MAsQQ,gCAAgC,EAAA;IAtQxC;MAyQQ,aAAa;MACb,mBAAmB,EAAA;IA1Q3B;MA6QQ,cAAc;MACd,iBAAiB;MACjB,WAAW,EAAA;IA/QnB;MAkRQ,cAAc;MACd,eAAe;MACf,mBAAmB;MACnB,YAAY;MACZ,gBAAgB;MAChB,kBAAkB;MAClB,uCAAuC;MACvC,qBAAqB;MACrB,cAAc,EAAA;MA1RtB;QA4RU,WAAW;QACX,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,MAAM;QACN,WAAW;QACX,wGAAsI,EAAA;IAlShJ;MAsSQ,uCAAuC;MACvC,cAAc;MACd,cAAc;MACd,eAAe;MACf,mBAAmB,EAAA;EA1S3B;IA8SM,eAAe;IACf,uCAAuC;IACvC,cAAc;IACd,cAAc;IACd,qBAAqB;IACrB,sFAA0E;IAC1E,0BAA0B;IAC1B,6BAA6B;IAC7B,iBAAiB,EAAA;IAtTvB;MAwTQ,0DAAgD,EAAA;EAxTxD;IA4TM,aAAa;IACb,eAAe;IACf,uCAAuC;IACvC,cAAc;IACd,qBAAqB;IACrB,sFAA4E;IAC5E,0BAA0B;IAC1B,0BAA0B;IAC1B,6BAA6B;IAC7B,iBAAiB,EAAA;EArUvB;IA0UU,2FAA4F,EAAA;IA1UtG;MA4UY,YAAY,EAAA;IA5UxB;MA+UY,cAAc;MACd,gCAAgC,EAAA;EAhV5C;IAoVU,cAAc,EAAA;;AAOxB;EAEI,WAAW;EACX,aAAa,EAAA;EAHjB;IAMQ,aAAa,EAAA;EANrB;IASQ,WAAW;IACX,YAAY;IACZ,wFAA8E;IAC9E,0BAA0B;IAC1B,oBAAoB,EAAA;IAb5B;MAiBU,6BAA6B,EAAA;EAjBvC;IAsBM,iBAAiB,EAAA;EAtBvB;IAyBM,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe,EAAA;IA7BrB;MAgCQ,aAAa,EAAA;EAhCrB;;IAuCU,cAAc,EAAA;EAvCxB;IA4CM,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,OAAO;IACP,eAAe;IACf,QAAQ;IACR,MAAM;IACN,WAAW;IACX,OAAO;IACP,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,aAAa,EAAA;EAzDnB;IA4DM,WAAW;IACX,aAAa;IACb,OAAO;IACP,UAAU;IACV,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,gBAAgB,EAAA;IApEtB;MAuEQ,aAAa,EAAA;EAvErB;IA2EM,cAAc,EAAA;;AA3EpB;EA+EI,cAAc,EAAA","sourcesContent":[".test {\r\n  background-color: blue;\r\n}\r\n\r\n\r\n\r\n.n20g20 {\r\n  width: 100%;\r\n  margin-bottom: 16px;\r\n  box-sizing: border-box;\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n}\r\n\r\n.n20g20-wrapper {\r\n  position: relative;\r\n  width: 960px;\r\n  margin: auto;\r\n}\r\n\r\n.n20g20-wrapper:after {\r\n  display: table;\r\n  clear: both;\r\n  content: '';\r\n}\r\n\r\n.n20g20-logo-webmoney {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: block;\r\n  float: left;\r\n  width: 140px;\r\n}\r\n\r\n.n20g20-logo-webmoney object {\r\n  position: relative;\r\n  z-index: -1;\r\n  display: block;\r\n  width: 139px;\r\n  height: 34px;\r\n  margin-top: 7px;\r\n  cursor: pointer;\r\n  pointer-events: none;\r\n}\r\n\r\n.n20g20-ext-menu {\r\n  float: left;\r\n  width: 408px;\r\n  height: 32px;\r\n  padding-top: 7px;\r\n}\r\n\r\n.n20g20-ext-menu .header-menu {\r\n  opacity: 0;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  float: left;\r\n  margin-left: 5px;\r\n  padding: 10px 15px 20px 4px;\r\n  cursor: pointer;\r\n  border: solid 1px rgba(255, 255, 255, 0);\r\n  background: transparent url(\"./images/icon-header-menu-arrow-down-2.svg\") calc(100% - 4px) 13px no-repeat;\r\n  background-size: 8px 8px;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened {\r\n  border: solid 1px #d7d7d7;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  background: #ffffff url(\"./images/n22g22-icon-search-toggle-up.svg\") calc(100% - 4px) 12px no-repeat;\r\n  background-size: 8px 8px;\r\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu > a,\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu span {\r\n  text-decoration: none;\r\n  border-bottom: 1px dotted #757575;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu a {\r\n  font-family: Verdana, Arial, sans-serif;\r\n  text-decoration: none;\r\n  color: #757575;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a,\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > span {\r\n  border-bottom: none;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened > a:after {\r\n  position: absolute;\r\n  z-index: 502;\r\n  bottom: -20px;\r\n  left: -4px;\r\n  display: block;\r\n  width: calc(100% + 19px);\r\n  height: 21px;\r\n  content: '';\r\n  background-color: #ffffff;\r\n}\r\n\r\n.n20g20-ext-menu ul.n24g24-header-menu-more-content b,\r\n.n20g20-ext-menu ul.n24g24-header-menu-more-content h3,\r\n.n20g20-ext-menu ul.n24g24-header-menu-more-content b a,\r\n.n20g20-ext-menu ul.n24g24-header-menu-more-content h3 a {\r\n  font-weight: 400;\r\n  color: #000000;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu .n24g24-header-menu-more-content {\r\n  font-size: 13px;\r\n  position: absolute;\r\n  z-index: 18;\r\n  top: 45px;\r\n  left: 0;\r\n  display: none;\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  width: 960px;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n  list-style: none;\r\n  cursor: default;\r\n  border: solid 1px #d7d7d7;\r\n  border-radius: 3px 3px 10px 10px;\r\n  background-color: #ffffff;\r\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\r\n.n24g24-header-menu-more-content {\r\n  display: block;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-4-columns > li {\r\n  float: left;\r\n  width: 240px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-3-columns > li {\r\n  float: left;\r\n  width: 320px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-3-columns\r\nli.n24g24-header-menu-more-column2 > div {\r\n  margin: 0 5px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-3-columns > li.n24g24-header-menu-more-column1 > div {\r\n  margin: 0 5px 0 10px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-3-columns\r\nli.n24g24-header-menu-more-column3 > div {\r\n  margin: 0 10px 0 5px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\r\n.n24g24-header-menu-more-content\r\nb {\r\n  font-family: Verdana, Arial, sans-serif;\r\n  font-size: 120%;\r\n  font-weight: 300;\r\n  line-height: 130%;\r\n  display: block;\r\n  margin: 10px 0 5px 0;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\r\n.n24g24-header-menu-more-content\r\ndiv > a {\r\n  font-family: Verdana, Arial, sans-serif;\r\n  font-size: 100%;\r\n  line-height: 150%;\r\n  display: block;\r\n  margin-top: 3px;\r\n  padding-left: 10px;\r\n  color: #777777;\r\n  background: url(\"./images/bullet-header-menu-more.svg\") 4px 7px no-repeat;\r\n}\r\n\r\n.n20g20-ext-menu .n24g24-header-menu-with-submenu.n24g24-submenu-opened .n24g24-header-menu-more-content div > a:hover {\r\n  color: #006cb4;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-4-columns\r\nli.n24g24-header-menu-more-column2 > div,\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-4-columns\r\nli.n24g24-header-menu-more-column3 > div {\r\n  margin: 0 5px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-4-columns > li.n24g24-header-menu-more-column1 > div {\r\n  margin: 0 5px 0 10px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu\r\n.n24g24-header-menu-more-4-columns\r\nli.n24g24-header-menu-more-column4 > div {\r\n  margin: 0 10px 0 5px;\r\n}\r\n\r\n.n20g20-ext-menu\r\n.n24g24-header-menu-with-submenu.n24g24-submenu-opened\r\n.n24g24-header-menu-more-content\r\nb:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.n20g20 .n22g22-header-functions {\r\n  float: right;\r\n  width: 412px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search {\r\n  width: 195px;\r\n  float: left;\r\n  margin-top: 8px;\r\n  padding: 0;\r\n  padding-right: 5px;\r\n  vertical-align: top;\r\n  -webkit-box-sizing: initial;\r\n          box-sizing: initial;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-decoration,\r\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-cancel-button,\r\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-results-button,\r\n.n20g20 .n22g22-header-user-search input[type=\"search\"]::-webkit-search-results-decoration {\r\n  -webkit-appearance:none;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-block {\r\n  position: relative;\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  width: 193px;\r\n  height: 31px;\r\n  border: 1px solid #b2b2b2;\r\n  background-color: #ffffff;\r\n  z-index: 999;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search img.n22g22-toggle-search,\r\n.n20g20 .n22g22-header-user-search span.n22g22-icon-search {\r\n  width: 25px;\r\n  height: 31px;\r\n  cursor: pointer;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search img.n22g22-toggle-search {\r\n  float: right;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search span.n22g22-icon-search {\r\n  float: left;\r\n  background: url(\"./images/n22g22-icon-search.svg\") 50% 50% no-repeat;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-box-input {\r\n  font-family: Verdana, Arial, sans-serif;\r\n  font-size: 12px;\r\n  float: left;\r\n  width: 139px;\r\n  height: 29px;\r\n  padding: 0;\r\n  color: #757575;\r\n  border: none;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  background-color: transparent;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more {\r\n  font-size: 12px;\r\n  position: absolute;\r\n  z-index: 100;\r\n  top: 31px;\r\n  left: -1px;\r\n  display: none;\r\n  width: 193px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  border: 1px solid #b2b2b2;\r\n  background-color: #ffffff;\r\n  box-sizing: content-box;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more li {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more li:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a {\r\n  font-family: Verdana, Arial, sans-serif;\r\n  display: block;\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  color: #555555;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a:hover {\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n.n20g20 .n22g22-header-user-search .n22g22-search-more li a.n22g22-search-current {\r\n  color: #ffffff;\r\n  background-color: #006cb4;\r\n}\r\n\r\n.n20g20-mobile{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.n20g20-mobile .n20g20-wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.n20g20-mobile .n20g20-toggle-button {\r\n  margin: 0;\r\n  width: 50px;\r\n  height: 50px;\r\n  float: left;\r\n  border: none;\r\n  background: url(\"./images/menu_btn.png\") center center no-repeat #fff;\r\n  background-size: 19px 20px;\r\n}\r\n\r\n.n20g20-mobile .n20g20-toggle-button.is-activated {\r\n  background: url(\"./images/menu_btn_ac.png\") center center no-repeat #ececec;\r\n  background-size: 19px 20px;\r\n}\r\n\r\n.n20g20-mobile .n20g20-logo-webmoney {\r\n  width: calc(100% - 180px);\r\n  background-position: center center;\r\n  margin: 3px 0 0 16px;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu {\r\n  display: none;\r\n  float: none;\r\n  padding: 0;\r\n  height: auto;\r\n  width: 100%;\r\n  clear: both;\r\n  background: #ececec;\r\n  padding: 0 17px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu.is-activated {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span {\r\n  font-family: Verdana,Arial,sans-serif;\r\n  color: #353535;\r\n  font-size: 15px;\r\n  padding: 11px 0 12px;\r\n  display: block;\r\n  background: url(\"./images/m_ab.png\") right center no-repeat;\r\n  background-size: 10px 6px;\r\n  border-bottom: 1px solid #d8d8d8;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened {\r\n  background: url(\"./images/m_at.png\") right center no-repeat;\r\n  background-size: 10px 6px;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu > span.n24g24-submenu-opened + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu + .n25g25-sidebar-submenu {\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu {\r\n  float: none;\r\n  display: none;\r\n  margin: 0;\r\n  font-size: 90%;\r\n  line-height: 130%;\r\n  margin-left: 20px;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu a {\r\n  color: #353535;\r\n  display: block;\r\n  font-size: 13px;\r\n  padding: 9px 0 10px;\r\n  border-bottom: 1px solid #d8d8d8;\r\n  font-family: Verdana,Arial,sans-serif;\r\n  text-decoration: none;\r\n}\r\n\r\n.n20g20-mobile .n20g20-ext-menu .n25g25-sidebar-submenu .n25g25-sidebar-submenu {\r\n  display: none;\r\n}\r\n\r\n.n20g20-mobile {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search {\r\n  display: block;\r\n  padding: 0;\r\n  width: 50px;\r\n  margin-top: 0;\r\n  float: right;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n22g22-toggle-search-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(\"./images/search.png\") center center no-repeat #fff;\r\n  background-size: 22px 22px;\r\n  float: right;\r\n  display: block;\r\n  border: none;\r\n  padding: 0;\r\n  position: relative;\r\n  z-index: 1;\r\n  margin-right: 0;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n22g22-toggle-search-button.is-activated + .n22g22-search-block {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  left: 0;\r\n  width: 100%;\r\n  overflow: visible;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  left: 100%;\r\n  width: 0;\r\n  border: none;\r\n  height: 50px;\r\n  -webkit-transition: left ease 0.3s;\r\n  transition: left ease 0.3s;\r\n  overflow: hidden;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search span.n22g22-icon-search {\r\n  content: \"\";\r\n  width: 50px;\r\n  height: 50px;\r\n  float: right;\r\n  display: block;\r\n  padding-right: 0;\r\n  position: relative;\r\n  z-index: 1;\r\n  background: url(\"./images/search_ac.png\") center center no-repeat #1e5ba7;\r\n  background-size: 22px 22px;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n20g20-close-search-button {\r\n  content: \"\";\r\n  display: block;\r\n  width: 40px;\r\n  height: 50px;\r\n  background: url(\"./images/back.png\") center center no-repeat;\r\n  background-size: 15px 15px;\r\n  float: left;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search div.n22g22-search-block > input[type=search] {\r\n  float: left;\r\n  padding: 0;\r\n  border: 1px solid #fff;\r\n  background-color: #fff;\r\n  color: #000;\r\n  font-size: 12px;\r\n  outline: 0;\r\n  font-family: Verdana,Arial,sans-serif;\r\n  border-radius: 0;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n  text-overflow: ellipsis;\r\n  -webkit-appearance: none;\r\n  height: 28px;\r\n  margin-top: 10px;\r\n  border: none;\r\n  border-bottom: 2px solid #c4c8cc;\r\n  width: 66%;\r\n  width: calc(100% - 117px);\r\n  font-size: 16px;\r\n  box-shadow: none;\r\n  outline: 0;\r\n  margin-left: 7px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search div.n22g22-search-block > input[type=search]:focus {\r\n  border-bottom: 2px solid #1e5ba7;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block .remove_text {\r\n  content: \"\";\r\n  width: 40px;\r\n  height: 50px;\r\n  background: url(\"./images/close_s.png\") center center no-repeat;\r\n  background-size: 12px 12px;\r\n  float: right;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 61px;\r\n  margin-top: -25px;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-webkit-input-placeholder {\r\n  color: #757575;\r\n  opacity: 1;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]:-ms-input-placeholder {\r\n  color: #757575;\r\n  opacity: 1;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-ms-input-placeholder {\r\n  color: #757575;\r\n  opacity: 1;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]::placeholder {\r\n  color: #757575;\r\n  opacity: 1;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]:-ms-input-placeholder {\r\n  color: #757575;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-ms-input-placeholder {\r\n  color: #757575;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search input[type=search]::-webkit-input-placeholder {\r\n  color: #757575;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search .n22g22-search-block .n22g22-toggle-search {\r\n  position: absolute;\r\n  right: 64px;\r\n  top: 50%;\r\n  margin-top: -12px;\r\n  width: 25px;\r\n  height: 22px;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more {\r\n  position: absolute;\r\n  top: 38px;\r\n  right: 68px;\r\n  left: auto;\r\n  border: 1px solid #c4c8cc;\r\n  -webkit-box-shadow: 0 4px 10px 0 rgba(21, 21, 20, 0.4);\r\n  box-shadow: 0 4px 10px 0 rgba(21, 21, 20, 0.4);\r\n  border-top: none;\r\n  width: 66%;\r\n  width: calc(100% - 117px);\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more li a {\r\n  display: block;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  color: #646669;\r\n  padding: 12px 10px;\r\n}\r\n\r\n.n20g20-mobile .n22g22-header-user-search ul.n22g22-search-more li a.search-current {\r\n  color: #fff;\r\n  background-color: #1e5ba7;\r\n}\r\n\r\n.n20g20 {\r\n  .n23g23-login-block {\r\n    margin-top: 8px;\r\n    width: 200px;\r\n    float: right;\r\n    &-buttons,\r\n    &-wrapper {\r\n      display: none;\r\n    }\r\n    &.is-logged-in {\r\n      .n23g23-login-block-wrapper {\r\n        display: block;\r\n      }\r\n    }\r\n    &.is-not-logged-in {\r\n      .n23g23-login-block-buttons {\r\n        display: block;\r\n      }\r\n    }\r\n    &-buttons-wrapper {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n    }\r\n    &-button {\r\n      margin: 0;\r\n      height: 33px;\r\n      line-height: 33px;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      overflow: hidden;\r\n      font-size: 12px;\r\n      font-family: Verdana,Arial,sans-serif;\r\n      &--registration{\r\n        width: 120px;\r\n        background-color: #fdc437;\r\n        color: #5e4200;\r\n        &:hover,\r\n        &:active,\r\n        &:visited{\r\n          background-color: #fdc437;\r\n          color: #5e4200;\r\n        }\r\n      }\r\n      &--login{\r\n        width: 75px;\r\n        background-color: #a2bd37;\r\n        color: #fff;\r\n        &:hover,\r\n        &:active,\r\n        &:visited{\r\n          background-color: #a2bd37;\r\n          color: #fff;\r\n        }\r\n      }\r\n    }\r\n    &-user-line{\r\n      display: flex;\r\n      position: relative;\r\n      align-items: center;\r\n      height: 32px;\r\n      padding-right: 25px;\r\n      cursor: pointer;\r\n      background: transparent url(\"./images/icon-search-toggle-down.svg\") right -5px center no-repeat;\r\n      &:after{\r\n        content: \"\";\r\n        width: 16px;\r\n        height: 20px;\r\n        position: absolute;\r\n        top: 6px;\r\n        right: 14px;\r\n        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 47%,rgba(255,255,255,1) 48%,rgba(255,255,255,1) 100%);\r\n      }\r\n    }\r\n    &-user-line-image{\r\n      display: block;\r\n      width: 26px;\r\n      height: 26px;\r\n    }\r\n    &-user-line-name{\r\n      white-space: nowrap;\r\n      color: #757575;\r\n      font-family: Verdana,Arial,sans-serif;\r\n      font-size: 12px;\r\n      border-bottom: 1px dotted #757575;\r\n      display: inline-block;\r\n      overflow: hidden;\r\n      line-height: normal;\r\n      margin-left: 7px;\r\n      margin-top: -1px;\r\n      max-width: 145px;\r\n    }\r\n    &-overlay{\r\n      display: none;\r\n    }\r\n    &-window{\r\n      position: absolute;\r\n      width: 290px;\r\n      height: auto;\r\n      background: #fff;\r\n      border: 1px solid #bfbfbf;\r\n      border-radius: 4px;\r\n      right: 0;\r\n      margin-top: 5px;\r\n      padding: 0;\r\n      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);\r\n      display: none;\r\n      top: 41px;\r\n      z-index: 99;\r\n      box-sizing: content-box;\r\n      &:after, &:before {\r\n        bottom: 100%;\r\n        left: 105px;\r\n        border: solid transparent;\r\n        content: \" \";\r\n        height: 0;\r\n        width: 0;\r\n        position: absolute;\r\n        pointer-events: none;\r\n      }\r\n      &:before {\r\n        border-color: rgba(191, 191, 191, 0);\r\n        border-bottom-color: #bfbfbf;\r\n        border-width: 7px;\r\n        margin-left: -7px;\r\n      }\r\n      &:after {\r\n        border-color: rgba(255, 255, 255, 0);\r\n        border-bottom-color: #fff;\r\n        border-width: 6px;\r\n        margin-left: -6px;\r\n      }\r\n    }\r\n    &-window-login-button{\r\n      font-size: 12px;\r\n      color: #454545;\r\n      display: block;\r\n      text-decoration: none;\r\n      background: #f3f3f3 url(\"./images/add_wmid.png\") 10px center no-repeat;\r\n      padding: 8px 10px 8px 40px;\r\n      opacity: 0.7;\r\n      font-family: Verdana, Arial, sans-serif;\r\n      line-height: 33px;\r\n      &:hover{\r\n        background-color: #e6e6e6;\r\n        opacity: 1;\r\n      }\r\n    }\r\n    &-window-user{\r\n      padding: 10px;\r\n      height: 70px;\r\n      box-sizing: border-box;\r\n      margin-bottom: 5px;\r\n      &-wrapper{\r\n        display: flex;\r\n      }\r\n      &-image-link{\r\n        width: 50px;\r\n        height: 50px;\r\n        display: block;\r\n        margin-right: 10px;\r\n      }\r\n      &-image{\r\n        width: 100%;\r\n        display: block;\r\n      }\r\n      &-info{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        width: calc(100% - 60px);\r\n        &-name{\r\n          display: block;\r\n          line-height: normal;\r\n          text-decoration: none;\r\n          color: #006cb4;\r\n          font-size: 14px;\r\n          margin-bottom: 8px;\r\n          font-family: Verdana, Arial, sans-serif;\r\n          &-text{\r\n            border-bottom: 1px dotted transparent;\r\n            position: relative;\r\n            white-space: nowrap;\r\n            max-width: 210px;\r\n            overflow: hidden;\r\n            display: inline-flex;\r\n          }\r\n          &:after{\r\n            content: \"\";\r\n            width: 20px;\r\n            height: 20px;\r\n            position: absolute;\r\n            top: 9px;\r\n            right: 0;\r\n            background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 47%,rgba(255,255,255,1) 48%,rgba(255,255,255,1) 100%);\r\n          }\r\n          &:hover{\r\n            .n23g23-login-block-window-user-info-name-text{\r\n              border-bottom: 1px dotted #006cb4;\r\n            }\r\n          }\r\n        }\r\n        &-wrapper{\r\n          display: flex;\r\n          justify-content: space-between;\r\n          align-items: flex-end;\r\n        }\r\n        &-purse{\r\n          font-size: 10px;\r\n          color: #546b80;\r\n          padding: 5px 10px 5px 18px;\r\n          background: transparent url(\"./images/purse.png\") left center no-repeat;\r\n          text-decoration: none;\r\n          display: inline-flex;\r\n          line-height: normal;\r\n          opacity: 0.7;\r\n          font-family: Verdana, Arial, sans-serif;\r\n          &:hover{\r\n            opacity: 1;\r\n            .n23g23-login-block-window-user-info-purse-text{\r\n              border-bottom: 1px dotted #546b80;\r\n            }\r\n          }\r\n          &-text{\r\n            border-bottom: 1px dotted transparent;\r\n            text-transform: uppercase;\r\n            display: block;\r\n          }\r\n        }\r\n        &-logout{\r\n          padding: 5px 10px 5px 25px;\r\n          font-size: 11px;\r\n          color: #727a81;\r\n          border-radius: 4px;\r\n          border: 1px solid #e1e1e1;\r\n          text-decoration: none;\r\n          background: #f7f7f7 url(\"./images/user_logout.png\") 10px center no-repeat;\r\n          display: inline-block;\r\n          line-height: normal;\r\n          font-family: Verdana, Arial, sans-serif;\r\n          margin-bottom: -2px;\r\n          &:hover{\r\n            background-color: #e6e6e6;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    &-window-additional-wmids-item{\r\n      padding: 10px 10px 6px;\r\n      border-top: 1px solid #e3e3e3;\r\n      background: #f3f3f3;\r\n      display: block;\r\n      box-sizing: content-box;\r\n      height: 33px;\r\n      text-decoration: none;\r\n      &:hover{\r\n        background-color: #e6e6e6;\r\n        .n23g23-login-block-window-additional-wmids-item-name:after{\r\n          background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(231,231,231,1) 47%,rgba(230,230,230,1) 48%,rgba(230,230,230,1) 100%);\r\n        }\r\n      }\r\n      &:last-child{\r\n        border-bottom: 1px solid #e3e3e3;\r\n      }\r\n      &-wrapper{\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n      &-image{\r\n        display: block;\r\n        margin-right: 8px;\r\n        width: 26px;\r\n      }\r\n      &-name{\r\n        color: #454545;\r\n        font-size: 12px;\r\n        line-height: normal;\r\n        width: 230px;\r\n        overflow: hidden;\r\n        position: relative;\r\n        font-family: Verdana, Arial, sans-serif;\r\n        text-decoration: none;\r\n        display: block;\r\n        &:after{\r\n          content: \"\";\r\n          width: 20px;\r\n          height: 20px;\r\n          position: absolute;\r\n          top: 0;\r\n          right: -6px;\r\n          background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(243,243,243,1) 47%,rgba(243,243,243,1) 48%,rgba(243,243,243,1) 100%);\r\n        }\r\n      }\r\n      &-wmid{\r\n        font-family: Verdana, Arial, sans-serif;\r\n        display: block;\r\n        color: #b0b0b0;\r\n        font-size: 10px;\r\n        line-height: normal;\r\n      }\r\n    }\r\n    &-window-settings{\r\n      font-size: 12px;\r\n      font-family: Verdana, Arial, sans-serif;\r\n      color: #454545;\r\n      display: block;\r\n      text-decoration: none;\r\n      background: transparent url(\"./images/settings.png\") 11px center no-repeat;\r\n      padding: 8px 10px 8px 40px;\r\n      border-top: 1px solid #e3e3e3;\r\n      line-height: 33px;\r\n      &:hover{\r\n        background-image: url(\"./images/settings_h.png\");\r\n      }\r\n    }\r\n    &-window-close{\r\n      display: none;\r\n      font-size: 12px;\r\n      font-family: Verdana, Arial, sans-serif;\r\n      color: #454545;\r\n      text-decoration: none;\r\n      background: transparent url(\"./images/user_close.png\") 16px center no-repeat;\r\n      background-size: 12px 11px;\r\n      padding: 8px 10px 8px 40px;\r\n      border-top: 1px solid #e3e3e3;\r\n      line-height: 33px;\r\n    }\r\n    &-wrapper{\r\n      &.is-opened{\r\n        .n23g23-login-block-user-line{\r\n          background: transparent url(\"./images/icon-search-toggle-up.svg\") right 5px center no-repeat;\r\n          &-image{\r\n            opacity: 0.4;\r\n          }\r\n          &-name{\r\n            color: #b0b0b0;\r\n            border-bottom-color: transparent;\r\n          }\r\n        }\r\n        .n23g23-login-block-window{\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.n20g20-mobile {\r\n  .n23g23-login-block {\r\n    width: 50px;\r\n    margin-top: 0;\r\n    &-button {\r\n      &--registration{\r\n        display: none;\r\n      }\r\n      &--login{\r\n        width: 50px;\r\n        height: 50px;\r\n        background: transparent url(\"./images/login-gray.png\") center center no-repeat;\r\n        background-size: 22px 22px;\r\n        text-indent: -9999px;\r\n        &:hover, \r\n        &:active, \r\n        &:visited{\r\n          background-color: transparent;\r\n        }\r\n      }\r\n    }\r\n    &.is-logged-in{\r\n      margin-left: -4px;\r\n    }\r\n    &-user-line{\r\n      padding-right: 0;\r\n      background-image: none;\r\n      align-items: center;\r\n      justify-content: center;\r\n      margin-top: 9px;\r\n      &:after,\r\n      &-name{\r\n        display: none;\r\n      }\r\n    }\r\n    &-wrapper{\r\n      &.is-opened{\r\n        .n23g23-login-block-window,\r\n        .n23g23-login-block-overlay{\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n    &-overlay{\r\n      background: #000000;\r\n      background: rgba(0, 0, 0, 0.6);\r\n      bottom: 0;\r\n      left: 0;\r\n      position: fixed;\r\n      right: 0;\r\n      top: 0;\r\n      z-index: 98;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      overflow-x: auto;\r\n      overflow: auto;\r\n      display: none;\r\n    }\r\n    &-window{\r\n      z-index: 99;\r\n      display: none;\r\n      left: 0;\r\n      width: 95%;\r\n      box-sizing: border-box;\r\n      margin: auto;\r\n      z-index: 1000;\r\n      top: 10px;\r\n      min-width: 280px;\r\n      &:before,\r\n      &:after{\r\n        display: none;\r\n      }\r\n    }\r\n    &-window-close{\r\n      display: block;\r\n    }\r\n  }\r\n  .n22g22-header-user-search div.n22g22-search-block>input[type=search] {\r\n    display: block;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webMoneyHeader/webMoneyHeader.scss":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.scss ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./webMoneyHeader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./webMoneyHeader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



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

/***/ "./src/webMoneyHeader/images/add_wmid.png":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/images/add_wmid.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f881695a36ff8d82d8bc.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/back.png":
/*!********************************************!*\
  !*** ./src/webMoneyHeader/images/back.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e2c88fe34f8a4a5c2de1.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/bullet-header-menu-more.svg":
/*!***************************************************************!*\
  !*** ./src/webMoneyHeader/images/bullet-header-menu-more.svg ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "61f33f17e08717d1525d.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/close_s.png":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/images/close_s.png ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b749b39bfd9750e8a772.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/icon-header-menu-arrow-down-2.svg":
/*!*********************************************************************!*\
  !*** ./src/webMoneyHeader/images/icon-header-menu-arrow-down-2.svg ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "aec4a413dae3d3e8f91b.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/icon-search-toggle-down.svg":
/*!***************************************************************!*\
  !*** ./src/webMoneyHeader/images/icon-search-toggle-down.svg ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0ee4ed65779ce31e0b9e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/icon-search-toggle-up.svg":
/*!*************************************************************!*\
  !*** ./src/webMoneyHeader/images/icon-search-toggle-up.svg ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "6a15dbde234ed4ab67d9.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login-gray.png":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/login-gray.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d26af6233c8c3409a725.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/m_ab.png":
/*!********************************************!*\
  !*** ./src/webMoneyHeader/images/m_ab.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "70759a167a66ad9fadd3.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/m_at.png":
/*!********************************************!*\
  !*** ./src/webMoneyHeader/images/m_at.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1d522872d267c0e87460.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/menu_btn.png":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/images/menu_btn.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "081da0de0ed980bb1bbb.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/menu_btn_ac.png":
/*!***************************************************!*\
  !*** ./src/webMoneyHeader/images/menu_btn_ac.png ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8f9a6996e14714f23854.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/n22g22-icon-search-toggle-up.svg":
/*!********************************************************************!*\
  !*** ./src/webMoneyHeader/images/n22g22-icon-search-toggle-up.svg ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fa5fadeeff78e369e91e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/n22g22-icon-search.svg":
/*!**********************************************************!*\
  !*** ./src/webMoneyHeader/images/n22g22-icon-search.svg ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7bb2fe24cefa63b3d0a0.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/purse.png":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/images/purse.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "47fabe6dd14d0da05b2f.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/search.png":
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/images/search.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0a0a8c8aa047ba401f86.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/search_ac.png":
/*!*************************************************!*\
  !*** ./src/webMoneyHeader/images/search_ac.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "170986ace19b5c01ed96.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/settings.png":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/images/settings.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "17b65b55df222ad70023.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/settings_h.png":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/settings_h.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ce577588b0fc3e342fef.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/user_close.png":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/user_close.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b0558833f20be70bfd3c.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/user_logout.png":
/*!***************************************************!*\
  !*** ./src/webMoneyHeader/images/user_logout.png ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1236ae23997c6bf71e44.png";

/***/ }),

/***/ "./src/webMoneyHeader/images/wm-logo-small.png":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/images/wm-logo-small.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b8fce4b9009d9d4f5726.png";

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "webmoney-header." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "d0ce86014b93ca906ba6"; }
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
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webmoney-layout:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
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
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"webmoney-header": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebmoney_layout"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3001&pathname=%2Fws&logging=info&reconnect=10");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webMoneyHeader/webMoneyHeader.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=webmoney-header.js.map