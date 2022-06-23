import ml from "common/extensions/ml";

export default {
  generate: function (context) {

    var dynCls = "n8g-" + context.dynamicUniqueKey;

    return ml("div", { "class": "n8g", "data-n8g-dynamic-class": dynCls }, [
      this.generateFirstLevel(context),
      this.generateSecondLevel(context)
    ]);
  },

  generateFirstLevel: function (context) {

    var iconUrl = context.iconUrl;
    var title = context.firstLevel.length > 0 ? context.firstLevel[0].title : null;

    return ml("div", { "class": "n8g-ftl" }, 
      ml("div", { "class": "n8g-ctr" }, 
        ml("div", { "class": "n8g-mfbx" }, [
          ml("div", { "class": "n8g-mcn" }, iconUrl != null ? ml("img", { "class": "n8g-icn", "src": iconUrl }) : ""),
          ml("div", { "class": "n8g-mbn", "data-n8g-toggle-menu": "" }, title),
          ml("div", { "class": "n8g-mnu" }, this.generateFirstLevelMenu(context))
        ]) 
      )
    );

  },

  generateFirstLevelMenu: function (context) {

    var firstLevel = context.firstLevel;

    var firstLevelMenuArray = [];

    if (firstLevel == null || firstLevel.length == 0) {
      return null;
    }

    for (var i = 0; i < firstLevel.length; i++) {

      var title = firstLevel[i].title;
      var url = firstLevel[i].url;
      var iconUrl = firstLevel[i].iconUrl;
      var active = firstLevel[i].active;

      var dynamicClass = "n8g-mnl";

      if (active) {

        dynamicClass += " is-activated";
      }

      if (i == 0) {

        dynamicClass += " is-first-element";
      }

      firstLevelMenuArray.push(ml("a", { "href": url, "class": dynamicClass },
        [
          iconUrl != null
          ? ml("span", { "class": "n8g-miw" }, ml("img", { "class": "n8g-mim", "src": iconUrl }))
          : "",
          ml("span", { "class": "n8g-mnt" }, title)
        ]
      ));
    }

    return firstLevelMenuArray;
  },

  generateSecondLevel: function (context) {

    var secondLevel = context.secondLevel;

    if (secondLevel.length > 0) {

      return ml("div", { "class": "n8g-sdl" }, 
        ml("div", { "class": "n8g-ctr" },
          ml("div", { "class": "n8g-slm" }, this.generateSecondLevelMenu(context))
        )
      );
    }
  },

  generateSecondLevelMenu: function (context) {
    
    var secondLevel = context.secondLevel;

    var secondLevelMenuArray = [];

    if (secondLevel == null || secondLevel.length == 0) {
      return secondLevelMenuArray;
    }

    for (var i = 0; i < secondLevel.length; i++) {

      var title = secondLevel[i].title;
      var url = secondLevel[i].url;
      var active = secondLevel[i].active;

      secondLevelMenuArray.push(ml("a", { "href": url, "class": active ? "n8g-sll is-activated"  : "n8g-sll" }, title));
    }

    return secondLevelMenuArray;
  }
}