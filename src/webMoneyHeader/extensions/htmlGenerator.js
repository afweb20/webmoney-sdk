import consts from "./consts";
import local from "./local";
import ml from "./ml";
var tinycolor = require("tinycolor2");

export default {
  generate: function (options) {

    return ml("div", { "class": "n7g" }, [
      ml("div", { "class": "n7g-flv" }, 
        ml("div", { "class": "n7g-ctr" }, [
          ml("div", { "class": "n7g-row n7g-spb" }, [
            ml("div", { "class": "n7g-bgr" }, ""),
            ml("div", { "class": "n7g-lft" }, [
              ml("div", { "class": "n7g-llg" }, 
                this.generateLogo(options)
              ),
              ml("div", { "class": "n7g-mdl" }, [
                ml("div", { "class": "n7g-dtr" }),
                ml("div", { "class": "n7g-svs" }),
                this.generateFirstLevelMenu(options),
                this.generateSearchBlock(options)
              ])
            ]),
            ml("div", { "class": "n7g-rgt" }, 
              this.generateLoginBlock(options)
            )
          ]),
          ml("div", { "class": "n7g-bgr-dd" })
        ])
      ),
      this.generateServicesDropDown(options),
      this.generateIndividualsDropDown(options),
      this.generateBusinessDropDown(options),
    ]);

    // return ml("div", { "class": options.view == consts.VIEW_MOBILE ? "n20g20 n20g20-mobile" : "n20g20" },
    //   ml("div", { "class": "n20g20-wrapper" }, [
    //     options.view == consts.VIEW_MOBILE ? ml("div", { "class": "n20g20-toggle-button" }) : "",
    //     this.generateLogo(options),
    //     options.view == consts.VIEW_MOBILE ? "" : this.generateMenu(options),
    //     this.generateLoginBlock(options),
    //     this.generateSearchBlock(options),
    //     options.view == consts.VIEW_MOBILE ? this.generateMenu(options) : ""
    //   ])
    // );
  },

  generateLogo: function (options) {
    var logoUrl = null;

    options.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? logoUrl = "https://www.wmtransfer.com"
    : (options.domainType == consts.DOMAIN_TYPE_RU
    ? logoUrl = "https://www.webmoney.ru"
    : logoUrl = "https://www.web.money/");

    return ml("a", { "href": logoUrl, "class": "n7g-lgo" },
      ml("img", { "class": "n7g-lgi", "src": require("../images/wm-logo.svg") }));
  },

  generateFirstLevelMenu: function (options) {

    return ml("div", { "class": "n7g-lks" }, [
      ml("div", { "class": "n7g-lki n7g-ind" }, "Частным лицам"),
      ml("div", { "class": "n7g-lki n7g-biz" }, "Для бизнеса")
    ]);

  },

  generateSearchBlock: function (options) {

    return ml("div", { "class": "n7g-srh" },
      ml("div", { "class": "n7g-sbtn" }, )
    );

  },

  generateLoginBlock: function (options) {

    return ml("div", { "class": "n7g-lgb" },
      ml("div", { "class": "n7g-lbs" }, [
        ml("a", {"class": "n7g-lbi n7g-lbi--reg", "href": "#"}, local(options, "buttonSignUp")),
        ml("a", {"class": "n7g-lbi n7g-lbi--log", "href": "#"}, local(options, "buttonLogIn"))
      ])
    );

  },

  generateServicesDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-svs-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [

          ml("a", { "class": "n7g-svi", "href": "#" }, [
            ml("span", { "class": "n7g-sim", "style": this.generateBgGradient("#6200ea") }, 
              ml("img", { "class": "n7g-simg", "src": require("../images/services/video.png") })
            ),
            ml("span", { "class": "n7g-stl" }, "Видеозвонки и онлайн-трансляции")
          ]),

          ml("a", { "class": "n7g-svi", "href": "#" }, [
            ml("span", { "class": "n7g-sim", "style": this.generateBgGradient("#d6879f") }, 
              ml("img", { "class": "n7g-simg", "src": require("../images/services/debtmart.png") })
            ),
            ml("span", { "class": "n7g-stl" }, "DebtMart: Биржа долгов")
          ]),

          ml("a", { "class": "n7g-svi", "href": "#" }, [
            ml("span", { "class": "n7g-sim", "style": this.generateBgGradient("#b77368") }, 
              ml("img", { "class": "n7g-simg", "src": require("../images/services/funding.png") })
            ),
            ml("span", { "class": "n7g-stl" }, "Благотворительность")
          ]),

          ml("a", { "class": "n7g-svi", "href": "#" }, [
            ml("span", { "class": "n7g-sim", "style": this.generateBgGradient("#e59733") }, 
              ml("img", { "class": "n7g-simg", "src": require("../images/services/escrow.png") })
            ),
            ml("span", { "class": "n7g-stl" }, "Escrow: защищенные сделки")
          ])

        ])
      )
    );

  },

  generateIndividualsDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-ind-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Заработать"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Платные видеоконсультации"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Продажа цифровых товаров"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "INDX: фондовая биржа"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Publicant: опубликовать книгу"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Mestcom: продажа рекламы"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "CashBox: оплата за действия"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Shareholder: дивиденды и торговля долями"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "DebtMart: Биржа долгов"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Вывести"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Наличными"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "На банковскую карту"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "На банковский счет"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Электронными деньгами"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Денежным переводом"),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Одолжить"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Кредитный сервис"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Долговой сервис"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Пополнить"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Наличными"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "С банковского счета"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Электронными деньгами"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Через терминал"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Денежным переводом"),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Сбор средств"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Благотворительность"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Краудфандинг"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Коллективные покупки"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Организация мероприятий"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Оплатить"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Мобильная связь"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Доступ в Интернет"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Коммерческое телевидение"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Коммунальные услуги"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Государственные услуги, штрафы, налоги"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Платежи по банковским реквизитам"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Digiseller: цифровые товары"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Антивирус: программы по подписке"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Rebills: автоплатежи"),
            ])
          ])
        ])
      )
    );

  },
  
  generateBusinessDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-biz-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Магазинам"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Merchant: создать магазин"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Прием платежей на банковский счет"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Megastock: каталог магазинов"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Digiseller: цифровые товары"),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Сайтам"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Mestcom: продажа рекламы"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Cashbox: покупка действий на сайте"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Login: авторизация по WMID"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Общие"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Masspayment: массовые выплаты"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Exchanger: обменный пункт"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Контракты: регистрация текстов Соглашений"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Арбитраж: разрешение споров"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Escrow: защищенные сделки"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Кредитная биржа"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Отчетность"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Служба финансовой поддержки"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Возможности WebMoney"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Mentor: контроль исполнения задач"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Защищенная почта"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Файловое хранилище"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Отправка «бумажных» писем"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Лента новостей: рассылка"),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Юридическим лицам"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Выплаты участникам системы"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Прием платежей"),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Капитал"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Shareholder: вложение средств"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "INDX: фондовая биржа"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Продажа долгов"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Capitaller: управление средствами"),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, "Разработчикам"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "API: программные интерфейсы"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Дизайн и стили"),
              ml("a", { "class": "n7g-lnk", "href": "#" }, "Техническая поддержка"),
            ])
          ])
        ])
      )
    );
  },

  generateMenu: function (options) {

    return ml("div", { "class": "n20g20-ext-menu" },
      ml("ul", { "class": "n24g24-header-menu clearfix" },
        [
          ml("li", { "class": "n24g24-header-menu-with-submenu" },
            ml("a", {}, local(options, "menuAboutWebMoney"))),
          ml("li", { "class": "n24g24-header-menu-with-submenu" },
            ml("a", {}, local(options, "menuPersonal"))),
          ml("li", { "class": "n24g24-header-menu-with-submenu" },
            ml("a", {}, local(options, "menuBusiness"))),
          ml("li", { "class": "n24g24-header-menu-with-submenu" },
            ml("a", {}, local(options, "menuHelp")))
        ]));
  },

  generateBgGradient: function (color) {

    var primaryColor = color;
    var primaryColorLighten = tinycolor(primaryColor).saturate(20).lighten(15).toString();
    var primaryColorDarken = tinycolor(primaryColor).darken(15).toString();

    var gradientBg = "background: linear-gradient(45deg, " + primaryColorDarken + " 0%, " + primaryColor + " 50%, " + primaryColorLighten + " 100%)";

    return gradientBg;

  },

  generateSearchBlock2: function (options) {

    return ml("div", { "class": "n22g22-header-user-search" },
      [options.view == consts.VIEW_MOBILE ? ml("div", { "class": "n22g22-toggle-search-button" }) : "",
      ml("div", { "class": "n22g22-search-block" }, [
        ml("span", { "class": "n20g20-close-search-button" }),
        ml("img", { "alt": "search options", "src": require("../images/icon-search-toggle-down.svg"), "class": "n22g22-toggle-search" }),
        ml("span", { "class": "n22g22-icon-search n20-g20-search-button" }),
        ml("input", { "class": "n22g22-search-box-input n20g20-search-box", "type": "search" }),
        ml("ul", { "class": "n22g22-search-more" }, [
          ml("li", {},
            ml("a", { "href": "#", "where": consts.SEARCH_WHERE_INFO }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_INFO))),
          ml("li", {},
            ml("a", { "href": "#", "where": consts.SEARCH_WHERE_GOODS }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_GOODS))),
          ml("li", {},
            ml("a", { "href": "#", "where": consts.SEARCH_WHERE_INOUT }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_INOUT))),
          ml("li", {},
            ml("a", { "href": "#", "where": consts.SEARCH_WHERE_WIKI }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_WIKI))),
          ml("li", {},
            ml("a", { "href": "#", "where": consts.SEARCH_WHERE_ANT }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_ANT)))
        ])
      ])]
    );
  },

  generateLoginBlock2: function (options) {

    // todo: Локализация.
    
    return ml("div", {"class": "n23g23-login-block"}, [

      ml("div", {"class": "n23g23-login-block-buttons"},
        ml("div", {"class": "n23g23-login-block-buttons-wrapper"}, [
          ml("a", {"class": "n23g23-login-block-button n23g23-login-block-button--registration", "href": "#"}, local(options, "buttonSignUp")),
          ml("a", {"class": "n23g23-login-block-button n23g23-login-block-button--login", "href": "#"}, local(options, "buttonLogIn"))
        ])
      ),

      ml("div", {"class": "n23g23-login-block-wrapper" }, [
        ml("div", {"class": "n23g23-login-block-user-line"}, [
          ml("img", {"class": "n23g23-login-block-user-line-image"}),
          ml("div", {"class": "n23g23-login-block-user-line-name"}, "")
        ]),
        ml("div", {"class": "n23g23-login-block-overlay"}),
        ml("div", {"class": "n23g23-login-block-window"}, [
          ml("div", {"class": "n23g23-login-block-window-user"}, 
            ml("div", {"class": "n23g23-login-block-window-user-wrapper"},[
              ml("a", {"class": "n23g23-login-block-window-user-image-link", "href": "#"}, 
                ml("img", {"class": "n23g23-login-block-window-user-image"})
              ),
              ml("div", {"class": "n23g23-login-block-window-user-info"}, [
                ml("a", {"class": "n23g23-login-block-window-user-info-name", "href": "#"}, 
                  ml("span", {"class": "n23g23-login-block-window-user-info-name-text"}, "")
                ),
                ml("div", {"class": "n23g23-login-block-window-user-info-wrapper"}, [
                  ml("a", {"class": "n23g23-login-block-window-user-info-purse", "href": "#"}, 
                    ml("span", {"class": "n23g23-login-block-window-user-info-purse-text"}, local(options, "buttonMyPurse"))
                  ),
                  ml("a", {"class": "n23g23-login-block-window-user-info-logout", "href": "#"}, local(options, "buttonLogOut")),
                ])
              ])
            ]) 
          ),
          ml("div", {"class": "n23g23-login-block-window-additional-wmids-list"}),
          ml("a", {"class": "n23g23-login-block-window-login-button", "href": "#"}, local(options, "buttonLogInAnotherWmid")),
          ml("a", {"class": "n23g23-login-block-window-settings", "href": "#"}, local(options, "buttonLogInSettings")),
          options.view == consts.VIEW_MOBILE ? ml("div", {"class": "n23g23-login-block-window-close"}, local(options, "buttonBack")) : ""
        ])
      ])

    ]);
  },

  getnerateLoginBlockWmidItem: function (options, wmid, displayName, avatarUrl, loginUrl) {

    return ml("a", {"class": "n23g23-login-block-window-additional-wmids-item", "href": loginUrl}, 
      ml("span", {"class": "n23g23-login-block-window-additional-wmids-item-wrapper"}, [
        ml("img", {"class": "n23g23-login-block-window-additional-wmids-item-image", "src": avatarUrl}),
        ml("span", {"class": "n23g23-login-block-window-additional-wmids-item-info"}, [
          ml("span", {"class": "n23g23-login-block-window-additional-wmids-item-name"}, displayName),
          ml("span", {"class": "n23g23-login-block-window-additional-wmids-item-wmid"}, wmid)
        ])
      ])
    );
  }
}