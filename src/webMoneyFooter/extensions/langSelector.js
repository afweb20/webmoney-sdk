export default {

  init: function (context) {

    var rootElement = context.rootElement;
    var supportedLangs = context.supportedLangs;

    if (supportedLangs.length > 1) {

      var langSelectorElement = rootElement.querySelector("[data-n9g-lang-selector]");

      langSelectorElement.onclick = function () {

        this.classList.toggle("is-activated");
      };

      window.addEventListener("click", function(event) {

        if (!langSelectorElement.contains(event.target)) {
          langSelectorElement.classList.remove("is-activated");
        }
      });

      var selectLangElements = rootElement.querySelectorAll("[data-n9g-select-lang]");

      for (var i = 0; i < selectLangElements.length; i++) {

        selectLangElements[i].addEventListener("click", function (event) {
          event.preventDefault();

          var lang = event.target.attributes["data-n9g-select-lang"].value;

          if (context.lang != lang) {
            context.onChangeLang(lang);
          }
        });
      }
    }
  }
}