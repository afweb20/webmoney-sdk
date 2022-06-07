import consts from "./consts";

export default {

  init: function (options) {

    var rootElement = options.rootElement;
    var view = options.view;
    var supportedLangs = options.supportedLangs;

    if (view == consts.VIEW_DESKTOP && supportedLangs.length > 1) {

      var n21g21LanguageSelect = rootElement.getElementsByClassName("n9g-lgsl")[0];

      n21g21LanguageSelect.onclick = function () {

        this.classList.toggle("is-activated");
      };

      document.onclick = function (e) {

        if (e.target.className.indexOf("n9g-lgsl") == -1) {

          if (!e.target.closest(".n9g-lgsl")) {

            if (n21g21LanguageSelect.className.indexOf("is-activated") > -1) {

              n21g21LanguageSelect.classList.remove("is-activated");
            }
          }
        }

      };

      var selectLangs = rootElement.getElementsByClassName("n9g-lgi");

      for (var i = 0; i < selectLangs.length; i++) {

        selectLangs[i].addEventListener("click", function (e) {

          var lang = e.target.attributes["data-lang"].value;

          if (options.lang != lang) {

            options.onChangeLang(lang);
          }
        });
      }
    } else if (view == consts.VIEW_MOBILE && supportedLangs.length > 1) {

      var selectLangs = rootElement.getElementsByClassName("n9g-lgi");

      for (var i = 0; i < selectLangs.length; i++) {

        selectLangs[i].addEventListener("click", function (e) {

          var lang = e.target.attributes["data-lang"].value;

          if (options.lang != lang) {

            options.onChangeLang(lang);
          }
        });
      }
    }
  }
}