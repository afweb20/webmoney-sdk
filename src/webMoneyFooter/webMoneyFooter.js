import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import "element-closest-polyfill"; // IE 11 не поддерживает closest.
import consts from "./extensions/consts";
import htmlGenerator from "./extensions/htmlGenerator";
import illiciumAsync from "./extensions/illiciumAsync";
import langSelector from "./extensions/langSelector";
import mobileBlockMenu from "./extensions/mobileBlockMenu";
import mobileBlockNewsLinks from "./extensions/mobileBlockNewsLinks";

require("./webMoneyFooter.scss");

export default function WebMoneyFooter() {

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

    if (options.view == consts.VIEW_ADAPTIVE) {

      this.initAdaptive(options);
    } else {

      this.initNotAdaptive(options);
    }
  }

  this.initNotAdaptive = function (options) {

    var generatedElement = htmlGenerator.generate(options);
    options.rootElement.innerHTML = "";
    options.rootElement.appendChild(generatedElement);

    langSelector.init(options);
    mobileBlockNewsLinks.init(options);
    mobileBlockMenu.init(options);
    illiciumAsync.init(options);
  }

  this.initAdaptive = function (options) {

    var desktopMinClientWidth = 960;

    if (document.documentElement.clientWidth < desktopMinClientWidth) {

      options.view = consts.VIEW_MOBILE;
      this.initNotAdaptive(options);
    } else {

      options.view = consts.VIEW_DESKTOP;
      this.initNotAdaptive(options);
    }

    var context = this;

    window.addEventListener("resize", function () {

      var clientWidth = document.documentElement.clientWidth;
      
      if (clientWidth < desktopMinClientWidth && options.view == consts.VIEW_DESKTOP) {

        options.view = consts.VIEW_MOBILE;
        context.initNotAdaptive(options);
      } else if (clientWidth >= desktopMinClientWidth && options.view == consts.VIEW_MOBILE) {

        options.view = consts.VIEW_DESKTOP;
        context.initNotAdaptive(options);
      }
    });
  }

  this.tryParseDomainType = function (options) {

    var domainType = options.domainType;

    if (domainType != consts.DOMAIN_TYPE_WMTRANSFER
      && domainType != consts.DOMAIN_TYPE_MONEY
      && domainType != consts.DOMAIN_TYPE_RU) {
      
      try {

        var hostname = window.location.hostname;
        
        if (hostname.indexOf("wmtransfer") != -1) {
    
          domainType = consts.DOMAIN_TYPE_WMTRANSFER;
        } else if (hostname.indexOf("ru") != -1) {

          domainType = consts.DOMAIN_TYPE_RU;
        } else {

          domainType = consts.DOMAIN_TYPE_MONEY;
        }
      } catch {

        domainType = consts.DOMAIN_TYPE_MONEY;
      }
    }

    return domainType;
  }

  this.tryParseView = function (options) {

    var view = options.view;

    if (view != consts.VIEW_DESKTOP
      && view != consts.VIEW_MOBILE
      && view != consts.VIEW_ADAPTIVE) {

      view = consts.VIEW_ADAPTIVE;
    }

    return view;
  }

  this.tryParseLang = function (options) {

    var lang = options.lang;

    if (lang != consts.LANG_RU
      && lang != consts.LANG_EN
      && lang != consts.LANG_ES
      && lang != consts.LANG_PT
      && lang != consts.LANG_TR
      && lang != consts.LANG_VN) {

      lang = consts.LANG_EN;
    }

    return lang;
  }

  this.tryParseSupportedLangs = function (options, lang) {

    var supportedLangs = [];

    if (options.supportedLangs != null) {

      supportedLangs = options.supportedLangs.filter(function (supportedLangItem) {

        if (supportedLangItem != consts.LANG_RU
          && supportedLangItem != consts.LANG_EN
          && supportedLangItem != consts.LANG_ES
          && supportedLangItem != consts.LANG_PT
          && supportedLangItem != consts.LANG_TR
          && supportedLangItem != consts.LANG_VN) {

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
  }

  this.tryParseIlliciumView = function (options) {

    var illiciumView = options.illiciumView;

    if (illiciumView != consts.ILLICIUM_VIEW_TOP
      && illiciumView != consts.ILLICIUM_VIEW_BOTTOM) {

        illiciumView = consts.ILLICIUM_VIEW_BOTTOM;
    }

    return illiciumView;
  }

  this.tryParseFastMenu = function (options) {

    var fastMenu = options.fastMenu;

    if (fastMenu != consts.FASTMENU_VISIBLE
      && fastMenu != consts.FASTMENU_HIDDEN) {

        fastMenu = consts.FASTMENU_VISIBLE;
    }

    return fastMenu;
  }

  this.tryParseOnChangeLang = function (options) {

    var onChangeLang = options.onChangeLang;
    
    if (typeof onChangeLang != "function") {
      
      onChangeLang = function (lang) {};
    }

    var onChangeLangWrapper = function (lang) {

      try {

        onChangeLang(lang);
      } catch (error) {

        console.log(error);
      }
    }

    return onChangeLangWrapper;
  }
}