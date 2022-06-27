export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var activeClassName = "n7g-is-a";

    var toggleItemElements = rootElement.querySelectorAll("[data-n7g-toggle-item]");

    for (var i = 0; i < toggleItemElements.length; i++) {

      toggleItemElements[i].addEventListener("click", function () {
        this.classList.toggle(activeClassName);
      });
    }
  }
}