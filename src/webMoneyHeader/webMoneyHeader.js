import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import consts from "./extensions/consts";
import htmlGenerator from "./extensions/htmlGenerator";
import loginBlock from "./extensions/loginBlock";
import menu from "./extensions/menu";
import searchBlock from "./extensions/searchBlock";

require("./webMoneyHeader.scss");

export default function WebMoneyHeader() {

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

    // menu.init(options);
    // searchBlock.init(options);
    // loginBlock.init(options);
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

  this.tryParseOnLoginBlockRendered = function (options) {

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