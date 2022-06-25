import consts from "./consts";

export default {

  init: function (context) {

    var rootElement = context.rootElement;

    var searchWhere = consts.SEARCH_WHERE_INFO;

    var searchInputElement = rootElement.querySelector("[data-n7g-search-input]");
    var searchButtonElement = rootElement.querySelector("[data-n7g-search-button]");
    var searchWhereElements = rootElement.querySelectorAll("[data-n7g-search-where]");

    this.refreshAllSearchWhere(context, searchWhereElements, searchWhere);

    var searchBlockContext = this;

    for (var i = 0; i < searchWhereElements.length; i++) {

      searchWhereElements[i].addEventListener("click", function (event) {

        searchWhere = this.attributes["data-n7g-search-where"].value;
        searchBlockContext.refreshAllSearchWhere(context, searchWhereElements, searchWhere);
        searchInputElement.focus();

        return false;
      });
    }

    searchButtonElement.addEventListener("click", function (event) {

      var value = searchInputElement.value;

      if (value == null || value == "") {
        searchInputElement.focus();
        return;
      }

      searchBlockContext.search(context, searchWhere, value)
    });

    searchInputElement.addEventListener("keypress", function (event) {

      if (event.which == 13) {
        
        event.preventDefault();
        searchButtonElement.click();
        return false;
      }
    });
  },

  refreshAllSearchWhere: function (context, searchWhereElements, searchWhere) {

    for (var i = 0; i < searchWhereElements.length; i++) {

      if (searchWhereElements[i].attributes["data-n7g-search-where"] != null) {

        if (searchWhereElements[i].attributes["data-n7g-search-where"].value == searchWhere) {

          searchWhereElements[i].classList.add("n7g-sml-a");
        } else {

          searchWhereElements[i].classList.remove("n7g-sml-a");
        }
      }
    }
  },

  search: function (context, where, value) {
  
    value = window.encodeURIComponent(value);

    var url = null;
    var searchInfoUrl = null;
    var searchUrl = null;

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? searchInfoUrl = "https://passport.wmtransfer.com/asp/CertView.asp"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? searchInfoUrl = "https://passport.webmoney.ru/asp/CertView.asp"
    : searchInfoUrl = "https://passport.web.money/asp/CertView.asp");

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? searchUrl = "https://search.wmtransfer.com"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? searchUrl = "https://search.webmoney.ru"
    : searchUrl = "https://search.web.money");

    switch (where) {

      case consts.SEARCH_WHERE_INFO:

        if (/^[RZEUXBYCGD]\d{12}$/i.test(value)) {

          url = searchInfoUrl +
            "?purse=" + value;
        } else if (/^\d{12}$/.test(value)) {

          url = searchInfoUrl +
            "?wmid=" + value;
        } else {

          url = searchUrl +
            "?q=" + value +
            "&locale=" + context.lang;
        }

        break;

      case consts.SEARCH_WHERE_TRANSACTION:

        var merchantUrl = null;

        context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? merchantUrl = "https://merchant.wmtransfer.com/receipts"
        : (context.domainType == consts.DOMAIN_TYPE_RU
        ? merchantUrl = "https://merchant.wmtransfer.com/receipts"
        : merchantUrl = "https://merchant.webmoney.ru/receipts");

        url = merchantUrl +
          "?tid=" + value +
          "&lang=" + context.lang;

        break;

      case consts.SEARCH_WHERE_GOODS:

        url = "https://megastock.ru/searchres.aspx" +
          "?search=" + value +
          "&lang=" + context.lang;
        break;

      case consts.SEARCH_WHERE_INOUT:

        var geoUrl = null;

        context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? geoUrl = "https://geo.wmtransfer.com/find/geosearchpage.aspx"
        : (context.domainType == consts.DOMAIN_TYPE_RU
        ? geoUrl = "https://geo.webmoney.ru/find/geosearchpage.aspx"
        : geoUrl = "https://geo.web.money/find/geosearchpage.aspx");

        url = geoUrl +
          "?name=" + value +
          "&userID=" + "0045DF2D-7BD9-44FB-B5A8-9F1E5C08DC4A" +
          "&lang=" + context.lang;
        break;

      case consts.SEARCH_WHERE_WIKI:

        var url = searchUrl +
          "?q=" + value + 
          "&w=" + "webmoney_wiki";
        break;

      case consts.SEARCH_WHERE_ANT:

        var supportUrl = null;

        context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? supportUrl = "https://support.wmtransfer.com/asp/index.asp"
        : (context.domainType == consts.DOMAIN_TYPE_RU
        ? supportUrl = "https://support.webmoney.ru/asp/index.asp"
        : supportUrl = "https://support.web.money/asp/index.asp");

        var url = supportUrl +
          "?ant_question=" + value +
          "&lang=" + (context.lang == consts.LANG_RU ? "rus" : "eng");
        break;
    }

    if (url != null) {

      window.open(url, "_blank");
    }
  }
}