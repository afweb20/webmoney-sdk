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
    var recognize = options.recognize === false ? false : true;
    var wmid = options.wmid == "" || options.wmid == null ? null : options.wmid;
    var loginUrl = options.loginUrl == "" || options.loginUrl == null ? null : options.loginUrl;
    var logoutUrl = options.logoutUrl == "" || options.logoutUrl == null ? null : options.logoutUrl;
    var rid = options.rid == "" || options.rid == null ? null : options.rid;
    var onLoginBlockRendered = this.tryParseOnLoginBlockRendered(options);

    if (rid == null) {
      throw new Error("rid empty");
    }

    var context = {
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

    if (view != consts.VIEW_DESKTOP
      && view != consts.VIEW_MOBILE
      && view != consts.VIEW_ADAPTIVE) {

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

  tryParseOnLoginBlockRendered: function (options) {

    var onLoginBlockRendered = options.onLoginBlockRendered;
    
    if (typeof onLoginBlockRendered != "function") {
      
      onLoginBlockRendered = function (renderedData) {};
    }

    var onLoginBlockRenderedWrapper = function (renderedData) {

      try {

        onLoginBlockRendered(renderedData);
      } catch (error) {

        console.log(error);
      }
    }

    return onLoginBlockRenderedWrapper;
  }
}