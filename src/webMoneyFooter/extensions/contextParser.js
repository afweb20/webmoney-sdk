import consts from "./consts";

export default {
  tryGetContext: function (options) {

    if (options === null
      || typeof options !== "object") {
      throw new Error("wrong options");
    }

    var rootElement = options.rootElement;

    if (rootElement == null) {
      throw new Error("rootElement empty");
    }

    var testMode = options.testMode === true ? true : false;
    var domainType = this.tryParseDomainType(options);
    var view = this.tryParseView(options);
    var lang = this.tryParseLang(options);
    var supportedLangs = this.tryParseSupportedLangs(options, lang);
    var illiciumPlaceId = options.illiciumPlaceId == "" || options.illiciumPlaceId == null ? null : options.illiciumPlaceId;
    var illiciumView = this.tryParseIlliciumView(options);
    var onChangeLang = this.tryParseOnChangeLang(options);

    var context = {
      rootElement: rootElement,
      testMode: testMode,
      domainType: domainType,
      view: view,
      lang: lang,
      supportedLangs: supportedLangs,
      illiciumPlaceId: illiciumPlaceId,
      illiciumView: illiciumView,
      onChangeLang: onChangeLang
    };

    return context;
  },

  tryParseDomainType: function (options) {

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
  },

  tryParseView: function (options) {

    var view = options.view;

    if (view != consts.VIEW_DESKTOP) {

      view = consts.VIEW_ADAPTIVE;
    }

    return view;
  },

  tryParseLang: function (options) {

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
  },

  tryParseSupportedLangs: function (options, lang) {

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
  },

  tryParseIlliciumView: function (options) {

    var illiciumView = options.illiciumView;

    if (illiciumView != consts.ILLICIUM_VIEW_TOP
      && illiciumView != consts.ILLICIUM_VIEW_BOTTOM) {

      illiciumView = consts.ILLICIUM_VIEW_BOTTOM;
    }

    return illiciumView;
  },

  tryParseOnChangeLang: function (options) {

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