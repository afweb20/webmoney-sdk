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
    var primaryColor = this.tryParsePrimaryColor(options);
    var iconUrl = this.tryParseIconUrl(options);
    var firstLevel = this.tryParseFirstLevel(options);
    var secondLevel = this.tryParseSecondLevel(options);
    var dynamicUniqueKey = randomString(12);

    var context = {
      rootElement: rootElement,
      view: view,
      primaryColor: primaryColor,
      iconUrl: iconUrl,
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

  tryParseIconUrl: function (options) {

    var iconUrl = options.iconUrl == "" || options.iconUrl == null ? null : options.iconUrl;
    var desktopIconUrl = options.desktopIconUrl == "" || options.desktopIconUrl == null ? null : options.desktopIconUrl;
    var mobileIconUrl = options.mobileIconUrl == "" || options.mobileIconUrl == null ? null : options.mobileIconUrl;

    if (iconUrl == null && mobileIconUrl != null) {

      iconUrl = mobileIconUrl;
    } if (iconUrl == null && desktopIconUrl != null) {

      iconUrl = desktopIconUrl;
    }

    return iconUrl;
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

  tryParseFirstLevel: function (options) {

    var firstLevel = [];

    if (options.firstLevel != null) {

      for (var i = 0; i < options.firstLevel.length; i++) {

        var iconUrl = options.firstLevel[i].iconUrl == "" || options.firstLevel[i].iconUrl == null ? null : options.firstLevel[i].iconUrl;
        var desktopIconUrl = options.firstLevel[i].desktopIconUrl == "" || options.firstLevel[i].desktopIconUrl == null ? null : options.firstLevel[i].desktopIconUrl;
        var mobileIconUrl = options.firstLevel[i].mobileIconUrl == "" || options.firstLevel[i].mobileIconUrl == null ? null : options.firstLevel[i].mobileIconUrl;

        if (iconUrl == null && mobileIconUrl != null) {

          iconUrl = mobileIconUrl;
        } if (iconUrl == null && desktopIconUrl != null) {
    
          iconUrl = desktopIconUrl;
        }

        firstLevel.push({
          title: options.firstLevel[i].title != null ? options.firstLevel[i].title : "",
          url: options.firstLevel[i].url != null ? options.firstLevel[i].url : "",
          iconUrl: iconUrl,
          active: options.firstLevel[i].active === true
        });
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