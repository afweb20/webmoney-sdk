import consts from "./consts";
import local from "./local";
import ml from "common/extensions/ml";
import getLink from "common/extensions/linkStorage";

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
      this.generateSearchDropDown(options)
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
      ml("div", { "class": "n7g-lki n7g-ind" }, local(options, "menuPersonal")),
      ml("div", { "class": "n7g-lki n7g-biz" }, local(options, "menuBusiness"))
    ]);

  },

  generateSearchBlock: function (options) {

    return ml("div", { "class": "n7g-srh" }, [
      ml("div", { "class": "n7g-sbtn" }),
    ]);

  },

  generateLoginBlock: function (options) {

    return ml("div", { "class": "n7g-lgb" }, [

      ml("div", { "class": "n7g-lbs" }, [
        ml("a", {"class": "n7g-lbi n7g-lbi--reg", "href": "#"}, local(options, "buttonSignUp")),
        ml("a", {"class": "n7g-lbi n7g-lbi--log", "href": "#"}, local(options, "buttonLogIn"))
      ]),

      ml("div", {"class": "n7g-lgw" }, [
        ml("div", {"class": "n7g-uln"}, [
          ml("div", {"class": "n7g-unm"}, ""),
          ml("img", {"class": "n7g-uim"})
        ]),
        ml("div", {"class": "n23g23-login-block-overlay"}),
        ml("div", {"class": "n7g-wdw"}, [

          ml("div", {"class": "n7g-usr"}, 
            ml("div", {"class": "n7g-uwr"},[
              ml("a", {"class": "n7g-uil", "href": "#"}, 
                ml("img", {"class": "n7g-uifm"})
              ),
              ml("div", {"class": "n7g-uif"}, [
                ml("a", {"class": "n7g-ufnm", "href": "#"}, 
                  ml("span", {"class": "n7g-unt"}, "")
                )
              ])
            ]) 
          ),

          ml("a", {"class": "n7g-itm n7g-itm--purse", "href": "#"}, local(options, "buttonMyPurse")),
          ml("a", {"class": "n7g-itm n7g-itm--profile", "href": "#"}, "Деловая сеть"),
          ml("a", {"class": "n7g-itm n7g-itm--settings", "href": "#"}, local(options, "buttonLogInSettings")),
          ml("a", {"class": "n7g-itm n7g-itm--logout", "href": "#"}, local(options, "buttonLogOut")),
    
          ml("div", {"class": "n7g-owd"}, "Другие WMID"),

          ml("div", {"class": "n7g-awl"}),
          ml("a", {"class": "n7g-itm n7g-itm--login", "href": "#"}, local(options, "buttonLogInAnotherWmid")),
          // ml("a", {"class": "n23g23-login-block-window-settings", "href": "#"}, local(options, "buttonLogInSettings")),
          // options.view == consts.VIEW_MOBILE ? ml("div", {"class": "n23g23-login-block-window-close"}, local(options, "buttonBack")) : ""
        ])
      ])

    ]);

  },

  generateServicesDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-svs-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-rw" }, [

          ml("div", { "class": "n7g-cnt" }, [

            ml("div", { "class": "n7g-ctm" }, [
              ml("div", { "class": "n7g-mni" }, "Криптовалюты"),
              ml("div", { "class": "n7g-cti" }, [

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/bitcoin.svg") }),
                  ml("span", { "class": "n7g-stl" }, "WMX (Bitcoin)")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/bitcoin-cash.svg") }),
                  ml("span", { "class": "n7g-stl" }, "WMH (Bitcoin Cash)")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/litecoin.svg") }),
                  ml("span", { "class": "n7g-stl" }, "WML (Litecoin)")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/ethereum.svg") }),
                  ml("span", { "class": "n7g-stl" }, "WMF (Ethereum)")
                ])

              ]),
            ]),

            ml("div", { "class": "n7g-ctm" }, [
              ml("div", { "class": "n7g-mni" }, "Заработать"),
              ml("div", { "class": "n7g-cti" }, [

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/video-c.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Платные видеоконсультации")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/indx.svg") }),
                  ml("span", { "class": "n7g-stl" }, "INDX: фондовая биржа")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/softactivation.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Продажа цифровых товаров")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/publicant.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Publicant: опубликовать книгу")
                ])
                
              ]),
            ]),

            ml("div", { "class": "n7g-ctm" }, [
              ml("div", { "class": "n7g-mni" }, "Оплатить"),
              ml("div", { "class": "n7g-cti" }, [

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/apple.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Подарочная карта Apple")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/steam.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Steam")
                ])
                
              ]),
            ]),

            ml("div", { "class": "n7g-ctm" }, [
              ml("div", { "class": "n7g-mni" }, "Для работы"),
              ml("div", { "class": "n7g-cti" }, [

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/video.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Видеозвонки и онлайн-трансляции")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/memo.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Управление закладками")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/files.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Файловое хранилище")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/notes.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Верстка и публикация заметок")
                ])
                
              ])
            ])

          ])

        ])
      )
    );

  },

  // getLink(options, "indx").title
  // getLink(options, "indx").url

  generateIndividualsDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-ind-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuTopUp")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "topUpCash").url }, getLink(options, "topUpCash").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "topUpBankAccount").url }, getLink(options, "topUpBankAccount").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "topUpEMoney").url }, getLink(options, "topUpEMoney").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "topUpPaymentTerminat").url }, getLink(options, "topUpPaymentTerminat").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "topUpMoneyTransfer").url }, getLink(options, "topUpMoneyTransfer").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuRaiseFunds")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "consultations").url }, getLink(options, "consultations").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "softactivation").url }, getLink(options, "softactivation").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "indx").url }, getLink(options, "indx").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "publicant").url }, getLink(options, "publicant").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mestkom").url }, getLink(options, "mestkom").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "cashbox").url }, getLink(options, "cashbox").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "shareholder").url }, getLink(options, "shareholder").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "debtmart").url }, getLink(options, "debtmart").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuForWork")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "video").url }, getLink(options, "video").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "memo").url }, getLink(options, "memo").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "notes").url }, getLink(options, "notes").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "analytics").url }, getLink(options, "analytics").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mail").url }, getLink(options, "mail").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "files").url }, getLink(options, "files").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mentor").url }, getLink(options, "mentor").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuWithdraw")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "withdrawCash").url }, getLink(options, "withdrawCash").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "withdrawToBankCard").url }, getLink(options, "withdrawToBankCard").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "withdrawBankAccount").url }, getLink(options, "withdrawBankAccount").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "withdrawEmoney").url }, getLink(options, "withdrawEmoney").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "withdrawTransfer").url }, getLink(options, "withdrawTransfer").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuWebMoneyOperations")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "exchanger").url }, getLink(options, "exchanger").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "wmCheck").url }, getLink(options, "wmCheck").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "protectedTransactions").url }, getLink(options, "protectedTransactions").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(options, "security").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "escrow").url }, getLink(options, "escrow").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "enum").url }, getLink(options, "enum").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "operationNotification").url }, getLink(options, "operationNotification").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "purseAccessLimiting").url }, getLink(options, "purseAccessLimiting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "expenseLimitsSetting").url }, getLink(options, "expenseLimitsSetting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "restoringControl").url }, getLink(options, "restoringControl").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "advisor").url }, getLink(options, "advisor").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuPayments")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mobileCommunications").url }, getLink(options, "mobileCommunications").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "internetAccess").url }, getLink(options, "internetAccess").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "commercialTv").url }, getLink(options, "commercialTv").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "publicUtilities").url }, getLink(options, "publicUtilities").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "publicServices").url }, getLink(options, "publicServices").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "bankAccountPayments").url }, getLink(options, "bankAccountPayments").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "megastock").url }, getLink(options, "megastock").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "digisellerCatalogOfdigitalGoods").url }, getLink(options, "digisellerCatalogOfdigitalGoods").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "antivirus").url }, getLink(options, "antivirus").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "rebills").url }, getLink(options, "rebills").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuLoan")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "creditService").url }, getLink(options, "creditService").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "debtService").url }, getLink(options, "debtService").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(options, "passport").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "receivePassport").url }, getLink(options, "receivePassport").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "verificationPoints").url }, getLink(options, "verificationPoints").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(options, "arbitrage").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "submitComplaint").url }, getLink(options, "submitComplaint").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "submitClaim").url }, getLink(options, "submitClaim").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "registerContract").url }, getLink(options, "registerContract").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuFundraising")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "charity").url }, getLink(options, "charity").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "crowdfunding").url }, getLink(options, "crowdfunding").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "groupBuying").url }, getLink(options, "groupBuying").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "eventOrganization").url }, getLink(options, "eventOrganization").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuBankCards")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "virtualCards").url }, getLink(options, "virtualCards").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "plasticCards").url }, getLink(options, "plasticCards").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "moneySend").url }, getLink(options, "moneySend").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuWebMoneyTerritory")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "events").url }, getLink(options, "events").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "blog").url }, getLink(options, "blog").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "geo").url }, getLink(options, "geo").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "wiki").url }, getLink(options, "wiki").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(options, "purseManagement2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "keeperStandardMini2").url }, getLink(options, "keeperStandardMini2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "keeperWinProClassic2").url }, getLink(options, "keeperWinProClassic2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "keeperWebProLight2").url }, getLink(options, "keeperWebProLight2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "keeperMobile2").url }, getLink(options, "keeperMobile2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "keeperForSocialNetworks2").url }, getLink(options, "keeperForSocialNetworks2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "enum2").url }, getLink(options, "enum2").title),
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
              ml("div", { "class": "n7g-ttl" }, local(options, "menuForMerchantsRetailers")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "merchant").url }, getLink(options, "merchant").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "paymentsToBankAccounts").url }, getLink(options, "paymentsToBankAccounts").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "megastock2").url }, getLink(options, "megastock2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "digiseller2").url }, getLink(options, "digiseller2").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuForWebsites")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "funding").url }, getLink(options, "funding").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mestcom2").url }, getLink(options, "mestcom2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "cashbox2").url }, getLink(options, "cashbox2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "digiseller3").url }, getLink(options, "digiseller3").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "login").url }, getLink(options, "login").title),
            ]),
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuGeneral")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "masspayment").url }, getLink(options, "masspayment").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "exchanger2").url }, getLink(options, "exchanger2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "contracts").url }, getLink(options, "contracts").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "arbitrage2").url }, getLink(options, "arbitrage2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "escrow2").url }, getLink(options, "escrow2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "creditMarket").url }, getLink(options, "creditMarket").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "reporting").url }, getLink(options, "reporting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "financialSupport2").url }, getLink(options, "financialSupport2").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuForDealersPaymentSystems")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "biz").url }, getLink(options, "biz").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "biz2").url }, getLink(options, "biz2").title),
            ]),
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuCapital")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "shareholder2").url }, getLink(options, "shareholder2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "indx2").url }, getLink(options, "indx2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "debtMarket").url }, getLink(options, "debtMarket").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "capitaller").url }, getLink(options, "capitaller").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuWebMoneyFeatures")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "mentor2").url }, getLink(options, "mentor2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "secureMail").url }, getLink(options, "secureMail").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "files2").url }, getLink(options, "files2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "letterPostingService").url }, getLink(options, "letterPostingService").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "newsline").url }, getLink(options, "newsline").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(options, "menuForDevelopers")),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "programInterfaces").url }, getLink(options, "programInterfaces").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "stylesAndDesign").url }, getLink(options, "stylesAndDesign").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(options, "technicalSupport2").url }, getLink(options, "technicalSupport2").title),
            ]),
          ])
        ])
      )
    );
  },

  generateSearchDropDown : function (options) {

    return ml("div", { "class": "n7g-slv n7g-srch-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, 
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-sctr" }, [
              ml("input", { "class": "n7g-sbxi", "type": "text" }),
              ml("div", { "class": "n7g-sbxb" }, "Найти"),
            ]),
            ml("div", { "class": "n7g-chps" }, 
              ml("div", { "class": "n7g-smr" }, [
                ml("a", { "class": "n7g-sml", "href": "#", "where": consts.SEARCH_WHERE_INFO }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_INFO)),
                ml("a", { "class": "n7g-sml", "href": "#", "where": consts.SEARCH_WHERE_GOODS }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_GOODS)),
                ml("a", { "class": "n7g-sml", "href": "#", "where": consts.SEARCH_WHERE_INOUT }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_INOUT)),
                ml("a", { "class": "n7g-sml", "href": "#", "where": consts.SEARCH_WHERE_WIKI }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_WIKI)),
                ml("a", { "class": "n7g-sml", "href": "#", "where": consts.SEARCH_WHERE_ANT }, local(options, "menuFindTitle_" + consts.SEARCH_WHERE_ANT))
              ])
            )
          ])
        )
      ))
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

    return ml("a", {"class": "n7g-awli", "href": loginUrl}, 
      ml("span", {"class": "n7g-aww"}, [
        ml("img", {"class": "n7g-awi", "src": avatarUrl}),
        ml("span", {"class": "n7g-awif"}, [
          ml("span", {"class": "n7g-awn"}, displayName),
          ml("span", {"class": "n7g-aww"}, wmid)
        ])
      ])
    );
  }
}