import consts from "./consts";
import cookie from "common/extensions/cookie";
import local from "./local";

export default {

  init: function (options) {

    var rootElement = options.rootElement;

    var where = cookie.get(consts.SEARCH_COOKIE_NAME);

    if (where != consts.SEARCH_WHERE_INFO
      && where != consts.SEARCH_WHERE_GOODS
      && where != consts.SEARCH_WHERE_INOUT
      && where != consts.SEARCH_WHERE_WIKI
      && where != consts.SEARCH_WHERE_ANT) {

      where = consts.SEARCH_WHERE_INFO;
    }

    var placeholder = local(options, "menuFindTitle_" + where);

    var searchBoxInput = rootElement.getElementsByClassName("n7g-sbxi")[0];
    var toggleSearch = rootElement.getElementsByClassName("n22g22-toggle-search")[0];
    var iconButton = rootElement.getElementsByClassName("n22g22-icon-search")[0];
    var searchMore = rootElement.getElementsByClassName("n7g-smr")[0];
    var searchMoreList = searchMore.getElementsByTagName("a");
    var toggleSearchButton = rootElement.getElementsByClassName("n22g22-toggle-search-button")[0];
    var closeSearchButton = rootElement.getElementsByClassName("n20g20-close-search-button")[0];
    
    searchBoxInput.value = placeholder;
    searchBoxInput.classList.add("n22g22-watermark");

    this.refreshSearchMore(options, searchMoreList, where);

    searchBoxInput.addEventListener("keypress", function (event) {

      if (event.which == 13) {

        event.preventDefault();
        searchBoxInput.blur();
        iconButton.click();
        return false;
      }
    });

    searchBoxInput.addEventListener("focus", function (event) {

      if (this.value == placeholder) {

        this.classList.remove("n22g22-watermark");
        this.value = "";
      }
    });

    searchBoxInput.addEventListener("blur", function (event) {

      this.value = this.value.trim();

      if (this.value == "") {

        this.classList.add("n22g22-watermark");
        this.value = placeholder;
      }

      // searchMore.style.display = "none";
    });

    // iconButton.addEventListener("click", function (event) {

    //   var value = searchBoxInput.value;

    //   if (value.length > 0) {

    //     if (value != placeholder) {

    //       context.search(options, where, value);

    //     } else {

    //       searchBoxInput.focus();
    //     }
    //   }
    // });

    searchMore.addEventListener("mouseleave", function (event) {

      // searchMore.style.display = "none";
    });

    searchMore.addEventListener("click", function (event) {

      // searchMore.style.display = "none";
      searchBoxInput.focus();
    });

    // toggleSearch.addEventListener("click", function (event) {

    //   var visible = searchMore.style.display == "block";

    //   searchMore.style.display = (!visible ? "block" : "none");
    // });

    var context = this;

    for (var i = 0; i < searchMoreList.length; i++) {

      searchMoreList[i].addEventListener("click", function (event) {

        where = this.attributes["where"].value;
        placeholder = local(options, "menuFindTitle_" + where);

        searchBoxInput.value = placeholder;
        searchBoxInput.focus();
        // searchMore.style.display = "none";
        context.refreshSearchMore(options, searchMoreList, where);
        cookie.set(consts.SEARCH_COOKIE_NAME, where, consts.SEARCH_COOKIE_EX_DAYS);

        return false;
      });
    }

    window.addEventListener("click", function(e) { 

      if (!document.querySelector(".n7g-srh").contains(e.target) && !document.querySelector(".n7g-srch-dd").contains(e.target)) {
        // searchMore.style.display = "none"; 
        document.querySelector(".n7g-srh").classList.remove("is-a");
        document.querySelector(".n7g-srch-dd").classList.remove("is-a");
      } 

    });

    // if (options.view == consts.VIEW_MOBILE) {

    //   toggleSearchButton.addEventListener("click", function (e) {
    //     e.stopPropagation();
    //     !this.classList.contains("is-activated") ? this.classList.add("is-activated") : this.classList.remove("is-activated");
    //   });

    //   closeSearchButton.addEventListener("click", function (e) {
    //     e.stopPropagation();
    //     toggleSearchButton.classList.remove("is-activated");
    //   });
    // }
  },

  refreshSearchMore: function (options, searchMoreList, where) {

    for (var i = 0; i < searchMoreList.length; i++) {

      if (searchMoreList[i].attributes["where"] != null) {

        if (searchMoreList[i].attributes["where"].value == where) {

          searchMoreList[i].classList.add("n7g-sml-a");
        } else {

          searchMoreList[i].classList.remove("n7g-sml-a");
        }
      }
    }
  },

  search: function (options, where, value) {
  
    value = window.encodeURIComponent(value);

    var url = null;
    var searchInfoUrl = null;
    var searchUrl = null;

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? searchInfoUrl = "https://passport.wmtransfer.com/asp/CertView.asp"
    : (options.domainType == consts.DOMAIN_TYPE_RU
    ? searchInfoUrl = "https://passport.webmoney.ru/asp/CertView.asp"
    : searchInfoUrl = "https://passport.web.money/asp/CertView.asp");

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? searchUrl = "https://search.wmtransfer.com"
    : (options.domainType == consts.DOMAIN_TYPE_RU
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
            "&locale=" + options.lang;
        }

        break;

      case consts.SEARCH_WHERE_GOODS:

        url = consts.MEGASTOCK_URL +
          "?search=" + value +
          "&lang=" + options.lang;
        break;

      case consts.SEARCH_WHERE_INOUT:

        var geoUrl = null;

        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? geoUrl = "https://geo.wmtransfer.com/find/geosearchpage.aspx"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? geoUrl = "https://geo.webmoney.ru/find/geosearchpage.aspx"
        : geoUrl = "https://geo.web.money/find/geosearchpage.aspx");

        url = geoUrl +
          "?name=" + value +
          "&userID=" + "0045DF2D-7BD9-44FB-B5A8-9F1E5C08DC4A" +
          "&lang=" + options.lang;
        break;

      case consts.SEARCH_WHERE_WIKI:

        var url = searchUrl +
          "?q=" + value + 
          "&w=" + "webmoney_wiki";
        break;

      case consts.SEARCH_WHERE_ANT:

        var supportUrl = null;

        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? supportUrl = "https://support.wmtransfer.com/asp/index.asp"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? supportUrl = "https://support.webmoney.ru/asp/index.asp"
        : supportUrl = "https://support.web.money/asp/index.asp");

        var url = supportUrl +
          "?ant_question=" + value +
          "&lang=" + (options.lang == consts.LANG_RU ? "rus" : "eng");
        break;
    }

    if (url != null) {

      window.open(url, "_blank");
    }
  }
}