
import consts from "./consts";

export default {

  init: function (options) {

    var view = options.view;

    if (view != consts.VIEW_MOBILE) {
      return;
    }
    
    var rootElement = options.rootElement;
    var url = consts.MENU_URL_MOBILE[options.lang];
  }
}