import consts from "./consts";

export default {

  init: function (options) {

    if (options.illiciumPlaceId == null
      || options.view != consts.VIEW_ADAPTIVE) {
      return;
    }

    var url = null;

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? url = "https://illicium.wmtransfer.com"
    : url = "https://illicium.web.money";

    url += "/scripts/public/illicium_0_3.js";

    this.loadJs(url, function () {

    });
  },

  loadJs: function (src, onload) {

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;

    if (onload != null) {
      script.onload = onload;
    }

    document.body.appendChild(script);
  }
}