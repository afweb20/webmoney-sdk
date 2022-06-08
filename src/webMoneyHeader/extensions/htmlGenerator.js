import consts from "./consts";
import local from "./local";
import ml from "./ml";

export default {
  generate: function (options) {

    return ml("div", { "class": "n7g" }, [
      ml("div", { "class": "n7g-flv" }, 
        ml("div", { "class": "n7g-ctr" }, 
          ml("div", { "class": "n7g-row" }, [
            ml("div", { "class": "n7g-lft" }, 
              this.generateLogo(options)
            ),
            ml("div", { "class": "n7g-mdl" }, [
              ml("div", { "class": "n7g-dtr" }),
              ml("div", { "class": "n7g-svs" }),
              ml("div", { "class": "n7g-lks" })
            ]),
            ml("div", { "class": "n7g-rgt" }, 
              "3"
            )
          ])
        )
      )
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

  generateSearchBlock: function (options) {

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

  generateLoginBlock: function (options) {

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