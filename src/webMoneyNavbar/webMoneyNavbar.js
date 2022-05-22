import "url-polyfill"; // IE 11 не поддерживает конструктор URL, который использует webpack 5.
import consts from "./extensions/consts";
import htmlGenerator from "./extensions/htmlGenerator";
import menu from "./extensions/menu";
import randomString from "./extensions/randomString";

require("./webMoneyNavbar.scss");

export default function WebMoneyNavbar() {

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

    var view = this.tryParseView(options);
    var design = this.tryParseDesign(options);
    var primaryColor = this.tryParsePrimaryColor(options);
    var desktopIconUrl = options.desktopIconUrl == "" || options.desktopIconUrl == null ? null : options.desktopIconUrl;
    var mobileIconUrl = options.mobileIconUrl == "" || options.mobileIconUrl == null ? null : options.mobileIconUrl;
    var firstLevel = this.tryParseFirstLevel(options);
    var secondLevel = this.tryParseSecondLevel(options);
    var dynamicUniqueKey = randomString(12);

    options = {
      rootElement: rootElement,
      view: view,
      design: design,
      primaryColor: primaryColor,
      desktopIconUrl: desktopIconUrl,
      mobileIconUrl: mobileIconUrl,
      firstLevel: firstLevel,
      secondLevel: secondLevel,
      dynamicUniqueKey: dynamicUniqueKey
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
    
    menu.init(options);
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

  this.tryParseView = function (options) {

    var view = options.view;

    if (view != consts.VIEW_DESKTOP
      && view != consts.VIEW_MOBILE
      && view != consts.VIEW_ADAPTIVE) {

      view = consts.VIEW_ADAPTIVE;
    }

    return view;
  }

  this.tryParseDesign = function (options) {

    var design = options.design;

    if (design != consts.DESIGN_DEFAULT
      && design != consts.DESIGN_WM_MAIN) {

      design = consts.DESIGN_DEFAULT;
    }

    return design;
  }

  this.tryParsePrimaryColor = function (options) {

    var primaryColor = options.primaryColor;

    if (primaryColor == ""
      || primaryColor == null
      || typeof primaryColor != "string"
      || !/^#([0-9a-fA-F]{3}){1,2}$/.test(primaryColor)) {

      primaryColor = consts.PRIMARY_COLOR_DEFAULT;
    }

    return primaryColor;
  }

  this.tryParseFirstLevel = function (options, lang) {

    var firstLevel = [];

    if (options.firstLevel != null) {

      for (var i = 0; i < options.firstLevel.length; i++) {

        firstLevel.push({
          title: options.firstLevel[i].title != null ? options.firstLevel[i].title : "",
          url: options.firstLevel[i].url != null ? options.firstLevel[i].url : "",
          active: options.firstLevel[i].active === true
        });
      }
    }

    return firstLevel;
  }

  this.tryParseSecondLevel = function (options) {

    var secondLevel = [];

    if (options.secondLevel != null) {

      for (var i = 0; i < options.secondLevel.length; i++) {

        secondLevel.push({
          title: options.secondLevel[i].title != null ? options.secondLevel[i].title : "",
          url: options.secondLevel[i].url != null ? options.secondLevel[i].url : "",
          active: options.secondLevel[i].active === true
        });
      }
    }

    return secondLevel;
  }
}