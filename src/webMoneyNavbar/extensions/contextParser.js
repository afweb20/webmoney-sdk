import randomString from "common/extensions/randomString";
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

    var view = this.tryParseView(options);
    var design = this.tryParseDesign(options);
    var primaryColor = this.tryParsePrimaryColor(options);
    // todo: убрать поддержку легаси входных параметров
    var desktopIconUrl = options.desktopIconUrl == "" || options.desktopIconUrl == null ? null : options.desktopIconUrl;
    var mobileIconUrl = options.mobileIconUrl == "" || options.mobileIconUrl == null ? null : options.mobileIconUrl;
    var firstLevel = this.tryParseFirstLevel(options, desktopIconUrl, mobileIconUrl);
    var secondLevel = this.tryParseSecondLevel(options);
    var dynamicUniqueKey = randomString(12);

    var context = {
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

    return context;
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

  tryParseDesign: function (options) {

    var design = options.design;

    if (design != consts.DESIGN_DEFAULT
      && design != consts.DESIGN_WM_MAIN) {

      design = consts.DESIGN_DEFAULT;
    }

    return design;
  },

  tryParsePrimaryColor: function (options) {

    var primaryColor = options.primaryColor;

    if (primaryColor == ""
      || primaryColor == null
      || typeof primaryColor != "string"
      || !/^#([0-9a-fA-F]{3}){1,2}$/.test(primaryColor)) {

      primaryColor = consts.PRIMARY_COLOR_DEFAULT;
    }

    return primaryColor;
  },

  tryParseFirstLevel: function (options, desktopIconUrl, mobileIconUrl) {

    var firstLevel = [];

    if (options.firstLevel != null) {

      for (var i = 0; i < options.firstLevel.length; i++) {

        firstLevel.push({
          title: options.firstLevel[i].title != null ? options.firstLevel[i].title : "",
          url: options.firstLevel[i].url != null ? options.firstLevel[i].url : "",
          desktopIconUrl: options.firstLevel[i].desktopIconUrl != null ? options.firstLevel[i].desktopIconUrl : null,
          mobileIconUrl: options.firstLevel[i].mobileIconUrl != null ? options.firstLevel[i].mobileIconUrl : null,
          active: options.firstLevel[i].active === true
        });

        // if (i == 0 && desktopIconUrl != null) {
        //   firstLevel[firstLevel.length - 1].desktopIconUrl = desktopIconUrl;
        // }

        // if (i == 0 && mobileIconUrl != null) {
        //   firstLevel[firstLevel.length - 1].mobileIconUrl = mobileIconUrl;
        // }
      }
    }

    return firstLevel;
  },

  tryParseSecondLevel: function (options) {

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