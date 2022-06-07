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
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartAboutSystem(options),
          this.generateMiddlePartWmOperations(options),
          this.generateMiddlePartForWork(options),
          this.generateMiddlePartHelp(options),
        ]),
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartSecurity(options),
          this.generateMiddlePartWmTerritory(options),
          this.generateMiddlePartApps(options)
        ])
      ])
    );

  },

  generateMiddlePartAboutSystem: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "О системе"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Краткое описание"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Управление кошельками"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Тарифы системы"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Статистика"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Юридическая информация"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Субъекты системы"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Регистраторы"),
    ]);

  },

  generateMiddlePartWmOperations: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Операции с WebMoney"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Exchanger: обменный пункт"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "WM.Check: оплата без регистрации"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Переводы с протекцией (платежи в два шага)"),
    ]);

  },

  generateMiddlePartForWork: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Для работы"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Видеозвонки и онлайн-трансляции"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Управление закладками"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Верстка и публикация заметок"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Сервис аналитики"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Лента новостей: рассылка"),
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

  generateMiddlePartSecurity: function (options) {

    return ml("div", { "class": "n9g-cln" }, [
      ml("div", { "class" : "n9g-mtl" }, "Безопасность"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Безопасность и конфиденциальность"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Escrow: защищенные сделки"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "E-Num: безопасная авторизация"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Оповещения об операциях"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Ограничение доступа к кошельку"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Настройка расходных лимитов"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Восстановление доступа"),
      ml("a", { "class" : "n9g-mlk", "href" : "#" }, "Advisor: отзывы о сайтах"),
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