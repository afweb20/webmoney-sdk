import consts from "./consts";
import device from "./device";
import local from "./local";
import ml from "./ml";
import getLink from "/linkStorage";

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

    return ml("div", { "class": "n9g-ll" },
      [
        ml("a", { "class": "n9g-lll", "href": "#" }, local(options, "menuFooterBusinessNetwork")),
        ml("a", { "class": "n9g-lll", "href": "#" }, local(options, "menuFooterDevelopers")),
        ml("a", { "class": "n9g-lll", "href": "#" }, "Wiki"),
        ml("a", { "class": "n9g-lll", "href": "#" }, local(options, "menuFooterNews"))
      ]);
  },
  
  generateTopPartSocials: function (options) {

    var view = options.view;
    
    var vkIconUrl = require("../images/socials/vk.svg");
    var facebookIconUrl = require("../images/socials/fb.svg");
    var twitterIconUrl = require("../images/socials/tw.svg");
    var odnoklassnikiIconUrl = require("../images/socials/od.svg");
    var youtubeIconUrl = require("../images/socials/yt.svg");
    var instagramIconUrl = require("../images/socials/im.svg");
    var telegramIconUrl = require("../images/socials/tg.svg");
    var showFacebookIcon = false;
    
    if (options.domainType == consts.DOMAIN_TYPE_MONEY || options.lang == consts.LANG_EN) {
      showFacebookIcon = true;
    }

    return ml("div", { "class": "n9g-lr" }, [ 
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--vk", "target": "_blank", "rel": "noopener noreferrer", "href": consts.VKONTAKTE_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": vkIconUrl })) : "",
      showFacebookIcon ? ml("a", { "class": "n9g-lrl n9g-lrl--fb", "target": "_blank", "rel": "noopener noreferrer", "href": consts.FACEBOOK_URL[options.lang] },
        ml("img", { "src": facebookIconUrl })) : "",
      ml("a", { "class": "n9g-lrl n9g-lrl--tw", "target": "_blank", "rel": "noopener noreferrer", "href": consts.TWITTER_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": twitterIconUrl })),
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--od", "target": "_blank", "rel": "noopener noreferrer", "href": consts.ODNOKLASSNIKI_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": odnoklassnikiIconUrl })) : "",
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--yt", "target": "_blank", "rel": "noopener noreferrer", "href": consts.YOUTUBE_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": youtubeIconUrl })) : "",
      options.domainType == consts.DOMAIN_TYPE_MONEY ? ml("a", { "class": "n9g-lrl n9g-lrl--im", "target": "_blank", "rel": "noopener noreferrer", "href": consts.INSTAGRAM_URL[options.lang] },
        ml("img", { "src": instagramIconUrl })) : "",
      options.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--tg", "target": "_blank", "rel": "noopener noreferrer", "href": consts.TELEGRAM_URL[options.lang] },
        ml("img", { "class": "n9g-lri", "src": telegramIconUrl })) : ""
    ])

  },

  generateMiddlePartFooter: function (options) {

    return ml("div", { class: "n9g-mdl" },
      ml("div", { class: "n9g-ctr"}, [
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartAboutSystem(options),
          this.generateMiddlePartPurseManagement(options),
          this.generateMiddlePartWmTerritory(options),
          this.generateMiddlePartContacts(options),
        ]),
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartLegalInformation(options),
          this.generateMiddlePartHelp(options),
          this.generateMiddlePartApps(options)
        ])
      ])
    );

  },

  generateMiddlePartAboutSystem: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "О системе"),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "briefDescription").url }, getLink(options, "briefDescription").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "purseTypes").url }, getLink(options, "purseTypes").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "purseManagement").url }, getLink(options, "purseManagement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "systemFees").url }, getLink(options, "systemFees").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "statistics").url }, getLink(options, "statistics").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "securityAndPrivacy").url }, getLink(options, "securityAndPrivacy").title),
    ]);

  },

  generateMiddlePartPurseManagement: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, getLink(options, "purseManagement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "keeperStandardMini").url }, getLink(options, "keeperStandardMini").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "keeperWinProClassic").url }, getLink(options, "keeperWinProClassic").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "keeperWebProLight").url }, getLink(options, "keeperWebProLight").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "keeperMobile").url }, getLink(options, "keeperMobile").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "keeperForSocialNetworks").url }, getLink(options, "keeperForSocialNetworks").title),
    ]);

  },

  generateMiddlePartLegalInformation: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, getLink(options, "legalInformation").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "webMoneyTransferCode").url }, getLink(options, "webMoneyTransferCode").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "propertyRightsTransferAgreement").url }, getLink(options, "propertyRightsTransferAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "amlAgreement").url }, getLink(options, "amlAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "creditServiceAgreement").url }, getLink(options, "creditServiceAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "wmPursesAgreement").url }, getLink(options, "wmPursesAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "warning").url }, getLink(options, "warning").title),
    ]);

  },

  generateMiddlePartHelp: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Помощь"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Регистрация"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Получение аттестата"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Создание PhotoID"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Обучающие видео"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Задать вопрос"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Финансовая поддержка"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Техническая поддержка"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Сотрудничество"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Форум"),
    ]);

  },

  generateMiddlePartContacts: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Контактная информация"),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "ownerAndAdministrator").url }, getLink(options, "ownerAndAdministrator").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "wmPurseGuarantors").url }, getLink(options, "wmPurseGuarantors").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "contactsForLegalRequests").url }, getLink(options, "contactsForLegalRequests").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "registrars").url }, getLink(options, "registrars").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "wmPursesAgreement").url }, getLink(options, "wmPursesAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(options, "warning").url }, getLink(options, "warning").title),
    ]);

  },

  generateMiddlePartWmTerritory: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Территория WebMoney"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Деловая сеть"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Новости системы"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Интерактивная карта"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Wiki"),
    ]);

  },

  generateMiddlePartApps: function (options) {

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

  }
};