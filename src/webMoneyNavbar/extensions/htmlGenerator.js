import consts from "./consts";
import ml from "./ml";

export default {

  generate: function (options) {

    var view = options.view;
    var designClass = "n30g30-design--" + options.design;
    var dynamicClass = "n30g30-" + options.dynamicUniqueKey;
    var firstLevel = options.firstLevel;
    var secondLevel = options.secondLevel;

    if (firstLevel.length == 0 || secondLevel.length == 0) {

      return ml("div", { "class": "n30g30 n30g30-is-empty" });
    } else if (view == consts.VIEW_MOBILE) {

      return ml("div", { "class": "n30g30 n30g30-mobile " + designClass, "data-dynamic-class": dynamicClass },
        ml("div", { "class": "n30g30-wrapper" }, [
          this.generateFirstLevelButton(options),
          ml("div", { "class": "n30g30-first-level" }, this.generateFirstLevel(options)),
          ml("div", { "class": "n30g30-second-level swiper" }, [
            ml("div", { "class": "n30g30-second-level-arrow-left is-hidden" }),
            ml("div", { "class": "n30g30-second-level-line swiper-wrapper" }, this.generateSecondLevel(options)),
            ml("div", { "class": "n30g30-second-level-arrow-right is-hidden" })
          ])
        ])
      );
    } else {

      return ml("div", { "class": "n30g30 " + designClass, "data-dynamic-class": dynamicClass },
        ml("div", { "class": "n30g30-wrapper" }, [
          ml("div", { "class": "n30g30-first-level" }, this.generateFirstLevel(options)),
          ml("div", { "class": "n30g30-second-level" }, this.generateSecondLevel(options))
        ])
      );
    }
  },

  generateFirstLevelButton: function (options) {

    var firstLevel = options.firstLevel;

    if (firstLevel.length <= 1) {
      return "";
    }
    
    var title = firstLevel[0].title;

    return ml("div", { "class": "n30g30-first-level-button " + (firstLevel.length > 1 ? "" : "is-empty") }, [
      options.mobileIconUrl != null ? ml("span", { "class": "n30g30-first-level-item-image-wrapper" },
        ml("img", { "class": "n30g30-first-level-item-image", "src": options.mobileIconUrl })
      ) : "",
      ml("span", { "class": "n30g30-first-level-item-text" }, title)
    ]);
  },

  generateFirstLevel: function (options) {

    var view = options.view;
    var desktopIconUrl = options.desktopIconUrl;
    var firstLevel = options.firstLevel;

    var firstLevelMenuArray = [];

    for (var i = 0; i < firstLevel.length; i++) {

      if (view == consts.VIEW_MOBILE && i == 0) {
        continue;
      }

      var title = firstLevel[i].title;
      var url = firstLevel[i].url;
      var active = firstLevel[i].active;

      var dynamicClass = "n30g30-first-level-item";
      if (active) {
        dynamicClass += " is-activated";
      }
      if (i == 0) {
        dynamicClass += " is-first-element";
      }

      firstLevelMenuArray.push(ml("a", { "href": url, "class": dynamicClass },
        i == 0 && desktopIconUrl != null
        ? [
          ml("span", { "class": "n30g30-first-level-item-image-wrapper" },
            ml("img", { "class": "n30g30-first-level-item-image", "src": desktopIconUrl })
          ),
          ml("span", { "class": "n30g30-first-level-item-text" }, title)
        ]
        : ml("span", { "class": "n30g30-first-level-item-text" }, title)));
    }

    return firstLevelMenuArray;
  },

  generateSecondLevel: function (options) {

    var view = options.view;
    var secondLevel = options.secondLevel;

    var secondLevelMenuArray = [];

    for (var i = 0; i < secondLevel.length; i++) {

      var title = secondLevel[i].title;
      var url = secondLevel[i].url;
      var active = secondLevel[i].active;

      secondLevelMenuArray.push(ml("a", { "href": url, "class": (active ? "n30g30-second-level-item is-activated"  : "n30g30-second-level-item") + (view == consts.VIEW_MOBILE ? " swiper-slide" : "") }, title));
    }

    return secondLevelMenuArray;
  }
}