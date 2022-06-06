import consts from "./consts";
import device from "./device";
import local from "./local";
import ml from "./ml";

export default {

  generate: function (options) {

    var view = options.view;

    return ml("div", { class: "n9g" }, [
      this.generateIlliciumBlock(options),
      this.generateTopPartFooter(options),
      this.generateMiddlePartFooter(options),
      this.generateBottomPartFooter(options),
    ]);
    
  },

  generateIlliciumBlock: function (options) {

    if (options.illiciumPlaceId != null && options.illiciumView == consts.ILLICIUM_VIEW_TOP) {

      return ml("div", {"class": "n9g-bnr"}, 
        ml("div", {"class": "n9g-ctr"},
          ml("div", { "id": "place" + options.illiciumPlaceId, "data-role": "illicium", "data-placeid": options.illiciumPlaceId, "class": "illiciumItem n9g-ibr" })
        )
      );

    }


  },

  generateTopPartFooter: function (options) {
    
    return ml("div", { class: "n9g-ln" },
      ml("div", { class: "n9g-ctr" }, 
        ml("div", { class: "n9g-lnf" }, [
          this.generateTopPartLinks(options),
          this.generateTopPartSocials(options)
        ])
      )
    );

  },

  generateTopPartLinks: function (options) {

    var eventsUrl = this.getEventsUrl(options);
    var newsUrl = this.getNewsUrl(options);
    var developersUrl = this.getDevelopersUrl(options);

    return ml("div", { "class": "n9g-ll" },
      [
        ml("a", { "class": "n9g-lll", "href": eventsUrl }, local(options, "menuFooterBusinessNetwork")),
        ml("a", { "class": "n9g-lll", "href": developersUrl }, local(options, "menuFooterDevelopers")),
        ml("a", { "class": "n9g-lll", "href": newsUrl }, "Wiki"),
        ml("a", { "class": "n9g-lll", "href": newsUrl }, local(options, "menuFooterNews"))
      ]);
  },
  
  generateTopPartSocials: function (options) {

    var view = options.view;
    
    var vkIconUrl = require("../images/socials/vk.svg");
    var facebookIconUrl = require("../images/old/socials/gray-facebook.png");
    var twitterIconUrl = require("../images/socials/tw.svg");
    var odnoklassnikiIconUrl = require("../images/socials/od.svg");
    var youtubeIconUrl = require("../images/socials/yt.svg");
    var instagramIconUrl = require("../images/old/socials/gray-instagram.png");
    var telegramIconUrl = require("../images/socials/tg.svg");
    var showFacebookIcon = false;
    
    if (options.domainType == consts.DOMAIN_TYPE_MONEY || options.lang == consts.LANG_EN) {
      showFacebookIcon = true;
    }

    return ml("div", { "class": "n9g-lr" }, [ 
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--vk", "target": "_blank", "rel": "noopener noreferrer", "href": consts.VKONTAKTE_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": vkIconUrl })) : "",
      // showFacebookIcon ? ml("a", { "class": "n21g21-bottom-right-social", "target": "_blank", "rel": "noopener noreferrer", "href": consts.FACEBOOK_URL[options.lang] },
      //   ml("img", { "src": facebookIconUrl })) : "",
      ml("a", { "class": "n9g-lrl n9g-lrl--tw", "target": "_blank", "rel": "noopener noreferrer", "href": consts.TWITTER_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": twitterIconUrl })),
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--od", "target": "_blank", "rel": "noopener noreferrer", "href": consts.ODNOKLASSNIKI_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": odnoklassnikiIconUrl })) : "",
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--yt", "target": "_blank", "rel": "noopener noreferrer", "href": consts.YOUTUBE_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": youtubeIconUrl })) : "",
      // options.domainType == consts.DOMAIN_TYPE_MONEY ? ml("a", { "class": "n21g21-bottom-right-social", "target": "_blank", "rel": "noopener noreferrer", "href": consts.INSTAGRAM_URL[options.lang] },
      //   ml("img", { "src": instagramIconUrl })) : "",
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--tg", "target": "_blank", "rel": "noopener noreferrer", "href": consts.TELEGRAM_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": telegramIconUrl })) : ""
    ])

  },

  generateMiddlePartFooter: function (options) {

    return ml("div", { class: "n9g-mdl" },
      ml("div", { class: "n9g-ctr"}, [
        ml("div", { class: "n9g-rw"}, ""),
        ml("div", { class: "n9g-rw"}, [
          ml("div", { class: "n9g-cln" }, ""),
          ml("div", { class: "n9g-cln" }, ""),
          this.generateMiddlePartApps(options)
        ])
      ])
    );

  },

  generateBottomPartFooter: function (options) {

    var supportedLangs = options.supportedLangs;
    
    return ml("div", { class: "n9g-btm" }, 
      ml("div", { class: "n9g-ctr" },
        ml("div", { class: "n9g-brw" }, [
          ml("div", { class: "n9g-btp" }, [
            ml("img", { class: "n9g-blg", src: require("../images/logo.svg") }),
            supportedLangs.length > 1 ? this.generateLangSelector(options) : ""
          ]),
          ml("div", { class: "n9g-bbp" }, [
            ml("div", { class: "n9g-cprt"}, "Copyright WebMoney © 1998 - " + new Date().getFullYear() + "."),
            ml("div", { class: "n9g-ctx"}, local(options, "menuFooterCopyrightText")),
          ])
        ])
      )
    );

  },

  generateLangSelector: function (options) {

    var supportedLangs = options.supportedLangs;

    var htmlSelectLangs = [];

    for (var i = 0; i < supportedLangs.length; i++) {

      if (supportedLangs[i] == options.lang) {
        continue;
      }

      htmlSelectLangs.push(ml("a", { "class": "n9g-lgi n9g-f" + supportedLangs[i], "href": "#", "data-lang": supportedLangs[i] }, local(options, "langTitle_" + supportedLangs[i]))
      );
    }

    return ml("div", { "class": "n9g-lngs js-lang-selector" },
      ml("div", { "class": "n9g-lgsl", "rel": "toggle-actions" }, [
        ml("span", { "class": "n9g-lgc n9g-f" + options.lang }, local(options, "langTitle_" + options.lang)),
        ml("div", { "class": "n9g-lgl" }, htmlSelectLangs)
      ])
    );
  },

  generateBottomRightLinks: function (options) {

    var cooperationUrl = this.getCooperationUrl(options);
    var pressServiceUrl = this.getPressServiceUrl(options);
    var contactsUrl = this.getContactsUrl(options);
    var supportUrl = this.getSupportUrl(options);

    return ml("div", { "class": "n21g21-bottom-right-links" }, [
      ml("a", { "class": "n21g21-bottom-right-link", "href": cooperationUrl }, local(options, "menuFooterCooperation")),
      ml("a", { "class": "n21g21-bottom-right-link", "href": pressServiceUrl }, local(options, "menuFooterPressCentre")),
      ml("a", { "class": "n21g21-bottom-right-link", "href": contactsUrl }, local(options, "menuFooterContacts")),
      ml("a", { "class": "n21g21-bottom-right-link", "href": supportUrl }, local(options, "menuFooterSupport"))
    ]);

  },

  generateMiddlePartApps: function (options) {

    var appUrl = this.getAppUrl(options);

    return ml("div", { "class": "n9g-cln n9g-cln--x2" }, [
      ml("div", { class: "n9g-mtl"}, "Приложения для смартфонов"),
      ml("div", { class: "n9g-aps" }, [
        ml("a", { class: "n9g-ait", href: "#" }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/app-store.svg") })
          ),
          ml("span", { class: "n9g-atx" }, "App Store")
        ]),
        ml("a", { class: "n9g-ait", href: "#" }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/google-play.svg") })
          ),
          ml("span", { class: "n9g-atx" }, "Google Play")
        ]),
        ml("a", { class: "n9g-ait", href: "#" }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/windows-store.svg") })
          ),
          ml("span", { class: "n9g-atx" }, "Microsoft Store")
        ])
      ]),
      ml("div", { class: "n9g-mtl"}, "Приложения для ПК"),
      ml("div", { class: "n9g-aps" }, [
        ml("a", { class: "n9g-ait", href: "#" }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/windows.svg") })
          ),
          ml("span", { class: "n9g-atx" }, "Windows")
        ]),
        ml("a", { class: "n9g-ait", href: "#" }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/os-x.svg") })
          ),
          ml("span", { class: "n9g-atx" }, "Mac OS")
        ])
      ])
    ])

  },

  generateMobileBlockEvents: function (options) {

    var eventsUrl = this.getEventsUrl(options);

    return ml("div", { "class": "n21g21-top-menu n21g21-top-menu-events" },
      ml("a", { "class": "n21g21-top-menu-link", "href": eventsUrl },
        [
          ml("i", { "class": "n21g21-top-menu-icon" }),
          ml("span", {"class": "n21g21-top-menu-title"}, local(options, "menuFooterBusinessNetwork")),
          ml("div", {"class": "n21g21-block-events-description"}, [
            ml("span", {}, local(options, "menuFooterBusinessNetwork")),
            ml("span", {"class": "n21g21-block-events-description-link"}, local(options, "textFooterEventsLink")),
          ])
        ])
    );
  },

  generateMobileBlockNews: function (options) {

    var newsUrl = this.getNewsUrl(options);

    return ml("div", { "class": "n21g21-top-menu n21g21-top-menu-news" },
      ml("div", { "class": "n21g21-top-menu-link" },
        [
          ml("i", { "class": "n21g21-top-menu-icon" }),
          ml("span", {"class": "n21g21-top-menu-title"}, local(options, "menuFooterNews")),
          ml("div", { "class": "n21g21-news-list" }),
          ml("a", {"class": "n21g21-all-news-link", "href": newsUrl}, local(options, "allNewsLinkText")),
        ])
    )

  },

  generateMobileLinksAndApp: function (options) {

    var deviceIconLink = null;
    var deviceIconClass = null;
    
    if (device.isWindowsDevice()) {

      deviceIconLink = consts.WINDOWS_DEVICE_URL;
      deviceIconClass = "wph_store_footer_" + options.lang;
    } else if (device.isAppleDevice()){

      deviceIconLink = consts.APPLE_DEVICE_URL;
      deviceIconClass = "app_store_footer_" + options.lang;
    } else if (device.isAndroidDevice()){

      deviceIconLink = consts.ANDROID_DEVICE_URL;
      deviceIconClass = "google_play_footer_" + options.lang;
    } else if (device.isAnyDevice()){

      deviceIconLink = consts.ANDROID_DEVICE_URL;
      deviceIconClass = "google_play_footer_" + options.lang;
    }
    
    var supportedLangs = options.supportedLangs;
    var htmlSelectLangs = [];

    for (var i = 0; i < supportedLangs.length; i++) {

      if (supportedLangs[i] == options.lang) {
        continue;
      }

      htmlSelectLangs.push(ml("div", { "class": "n21g21-bottom-language-select-li" },
        ml("a", { "class": "n21g21-bottom-language-select-a n21g21-bottom-lang-" + supportedLangs[i], "href": "#", "data-lang": supportedLangs[i] }, local(options, "langTitle_" + supportedLangs[i]))
      ));
    }

    return ml("div", { "class": "n21g21-bottom-links-app" }, 
      [
        ml("div", { "class": "n21g21-bottom-links-app-wrapper" }, [
          this.generateBottomRightLinks(options),
          ml("a", { "class": deviceIconClass, "href": deviceIconLink })
        ]),
        ml("div", { "class": "n21g21-bottom-links-app-langs" }, htmlSelectLangs)
      ]
    )

  },

  generateMobileCopyright: function (options) {

    return ml("div", { "class": "n21g21-bottom-copyright" }, [
      ml("div", { "class": "n21g21-bottom-copyright-text" }, "© 1998-" + new Date().getFullYear() + ", WebMoney"),
      ml("a", {  "class": "n21g21-bottom-copyright-logo", "href": "/" }),
    ]);

  },

  getEventsUrl: function (options) {
    var url = null;

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? url = "https://events.wmtransfer.com"
    : (options.domainType == consts.DOMAIN_TYPE_RU
    ? url = "https://events.webmoney.ru"
    : url = "https://events.web.money");

    return url
  },

  getNewsUrl: function (options) {
    var url = null;

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? url = "https://news.wmtransfer.com"
    : (options.domainType == consts.DOMAIN_TYPE_RU
    ? url = "https://news.webmoney.ru"
    : url = "https://news.web.money");

    return url
  },

  getDevelopersUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/rus/developers/api.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/rus/developers/api.shtml"
        : url = "https://www.web.money/rus/developers/api.shtml");
        break;
      case consts.LANG_EN:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/eng/developers/api.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/eng/developers/api.shtml"
        : url = "https://www.web.money/eng/developers/api.shtml");
        break;
      case consts.LANG_ES:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/es/developers/api.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/es/developers/api.shtml"
        : url = "https://www.web.money/es/developers/api.shtml");
        break;
      case consts.LANG_PT:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com.br/br/developers/api.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/br/developers/api.shtml"
        : url = "https://www.web.money/br/developers/api.shtml");
        break;
      case consts.LANG_TR:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/tr/developers/api.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/tr/developers/api.shtml"
        : url = "https://www.web.money/tr/developers/api.shtml");
        break;
    }

    return url
  },

  getCooperationUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/rus/cooperation/merchants.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/rus/cooperation/merchants.shtml"
        : url = "https://www.web.money/rus/cooperation/merchants.shtml");
        break;
      case consts.LANG_EN:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/eng/cooperation/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/eng/cooperation/index.shtml"
        : url = "https://www.web.money/eng/cooperation/index.shtml");
        break;
      case consts.LANG_ES:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/es/cooperation/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/es/cooperation/index.shtml"
        : url = "https://www.web.money/es/cooperation/index.shtml");
        break;
      case consts.LANG_PT:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com.br/br/cooperation/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/br/cooperation/index.shtml"
        : url = "https://www.web.money/br/cooperation/index.shtml");
        break;
      case consts.LANG_TR:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/tr/cooperation/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/tr/cooperation/index.shtml"
        : url = "https://www.web.money/tr/cooperation/index.shtml");
        break;
    }

    return url
  },

  getPressServiceUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/rus/support/press-service.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/rus/support/press-service.shtml"
        : url = "https://www.web.money/rus/support/press-service.shtml");
        break;
      case consts.LANG_EN:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/eng/support/press-service.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/eng/support/press-service.shtml"
        : url = "https://www.web.money/eng/support/press-service.shtml");
        break;
      case consts.LANG_ES:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/es/support/press-service.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/es/support/press-service.shtml"
        : url = "https://www.web.money/es/support/press-service.shtml");
        break;
      case consts.LANG_PT:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com.br/br/support/press-servicer.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/br/support/press-servicer.shtml"
        : url = "https://www.web.money/br/support/press-servicer.shtml");
        break;
      case consts.LANG_TR:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/tr/support/press-service.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/tr/support/press-service.shtml"
        : url = "https://www.web.money/tr/support/press-service.shtml");
        break;
    }

    return url
  },

  getContactsUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/rus/support/financial.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/rus/support/financial.shtml"
        : url = "https://www.web.money/rus/support/financial.shtml");
        break;
      case consts.LANG_EN:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/eng/support/tech.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/eng/support/tech.shtml"
        : url = "https://www.web.money/eng/support/tech.shtml");
        break;
      case consts.LANG_ES:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/es/support/tech.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/es/support/tech.shtml"
        : url = "https://www.web.money/es/support/tech.shtml");
        break;
      case consts.LANG_PT:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com.br/br/support/tech.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/br/support/tech.shtml"
        : url = "https://www.web.money/br/support/tech.shtml");
        break;
      case consts.LANG_TR:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/tr/support/tech.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/tr/support/tech.shtml"
        : url = "https://www.web.money/tr/support/tech.shtml");
        break;
    }

    return url
  },

  getSupportUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://support.wmtransfer.com/asp/index.asp"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://support.webmoney.ru/asp/index.asp"
        : url = "https://support.web.money/asp/index.asp");
        break;
      case consts.LANG_EN:
      case consts.LANG_PT:
      case consts.LANG_TR:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://support.wmtransfer.com/asp/index.asp?lang=eng"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://support.webmoney.ru/asp/index.asp?lang=eng"
        : url = "https://support.web.money/asp/index.asp?lang=eng");
        break;
      case consts.LANG_ES:
        url = "mailto:soporte@webmoney.com.mx";
        break;
    }

    return url
  },

  getAppUrl: function (options) {
    var url = null;

    switch (options.lang) {
      case consts.LANG_RU:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/rus/information/manage/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/rus/information/manage/index.shtml"
        : url = "https://www.web.money/rus/information/manage/index.shtml");
        break;
      case consts.LANG_EN:
      case consts.LANG_VN:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/eng/information/manage/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/eng/information/manage/index.shtml"
        : url = "https://www.web.money/eng/information/manage/index.shtml");
        break;
      case consts.LANG_ES:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/es/information/manage/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/es/information/manage/index.shtml"
        : url = "https://www.web.money/es/information/manage/index.shtml");
        break;
      case consts.LANG_PT:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com.br/br/information/manage/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/br/information/manage/index.shtml"
        : url = "https://www.web.money/br/information/manage/index.shtml");
        break;
      case consts.LANG_TR:
        options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
        ? url = "https://www.wmtransfer.com/tr/information/manage/index.shtml"
        : (options.domainType == consts.DOMAIN_TYPE_RU
        ? url = "https://www.webmoney.ru/tr/information/manage/index.shtml"
        : url = "https://www.web.money/tr/information/manage/index.shtml");
        break;
    }

    return url
  },
}