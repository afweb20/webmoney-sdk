import consts from "./consts";
import local from "./local";
import ml from "common/extensions/ml";
import getLink from "common/extensions/linkStorage";

export default {
  generate: function (context) {

    return ml("div", { "class": "n7g" }, [
      ml("div", { "class": "n7g-flv" }, 
        ml("div", { "class": "n7g-ctr" }, [
          ml("div", { "class": "n7g-row n7g-spb" }, [
            ml("div", { "class": "n7g-bgr" }, ""),
            ml("div", { "class": "n7g-lft" }, [
              ml("div", { "class": "n7g-llg" }, 
                this.generateLogo(context)
              ),
              ml("div", { "class": "n7g-mdl" }, [
                ml("div", { "class": "n7g-dtr" }),
                ml("div", { "class": "n7g-svs", "data-n7g-services-toggle-menu": "" }),
                this.generateFirstLevelMenu(context),
                this.generateSearchBlock(context)
              ])
            ]),
            ml("div", { "class": "n7g-rgt" }, 
              this.generateLoginBlock(context)
            )
          ]),
          ml("div", { "class": "n7g-bgr-dd" })
        ])
      ),
      this.generateServicesDropDown(context),
      this.generateIndividualsDropDown(context),
      this.generateBusinessDropDown(context),
      this.generateSearchDropDown(context)
    ]);
  },

  generateLogo: function (context) {
    var logoUrl = null;

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? logoUrl = "https://www.wmtransfer.com"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? logoUrl = "https://www.webmoney.ru"
    : logoUrl = "https://www.web.money");

    return ml("a", { "href": logoUrl, "class": "n7g-lgo" },
      ml("img", { "class": "n7g-lgi", "src": require("../images/wm-logo.svg") }));
  },

  generateFirstLevelMenu: function (context) {

    return ml("div", { "class": "n7g-lks" }, [
      ml("div", { "class": "n7g-lki n7g-ind", "data-n7g-individiuals-toggle-menu": "" }, local(context, "menuPersonal")),
      ml("div", { "class": "n7g-lki n7g-biz" }, local(context, "menuBusiness"))
    ]);
  },

  generateSearchBlock: function (context) {

    return ml("div", { "class": "n7g-srh" }, [
      ml("div", { "class": "n7g-sbtn" }),
    ]);
  },

  generateLoginBlock: function (context) {

    return ml("div", { "class": "n7g-lgb", "data-n7g-login-block-wrapper": "" }, [

      ml("div", { "class": "n7g-lbs" }, [
        ml("a", {"class": "n7g-lbi n7g-lbi--reg", "data-n7g-registration-url": "", "href": "#"}, local(context, "buttonSignUp")),
        ml("a", {"class": "n7g-lbi n7g-lbi--log", "data-n7g-log-in-url": "", "href": "#"}, local(context, "buttonLogIn"))
      ]),

      ml("div", {"class": "n7g-lgw", "data-n7g-login-block-toggle-menu": "" }, [
        ml("div", {"class": "n7g-uln"}, [
          ml("div", {"class": "n7g-unm", "data-n7g-preview": ""}, ""),
          ml("img", {"class": "n7g-uim", "data-n7g-avatar": ""})
        ]),
        ml("div", {"class": "n7g-wdw"}, [

          ml("div", {"class": "n7g-usr"}, 
            ml("div", {"class": "n7g-uwr"},[
              ml("a", {"class": "n7g-uil", "data-n7g-events-url": "", "href": "#"}, 
                ml("img", {"class": "n7g-uifm", "data-n7g-avatar": ""})
              ),
              ml("div", {"class": "n7g-uif"}, [
                ml("a", {"class": "n7g-ufnm", "data-n7g-events-url": "", "href": "#"}, 
                  ml("span", {"class": "n7g-unt", "data-n7g-display-name": ""}, "")
                )
              ])
            ]) 
          ),

          ml("a", {"class": "n7g-itm n7g-itm--purse", "data-n7g-keeper-url": "", "href": "#"}, local(context, "buttonMyPurse")),
          ml("a", {"class": "n7g-itm n7g-itm--profile", "data-n7g-events-url": "", "href": "#"}, "Деловая сеть"),
          ml("a", {"class": "n7g-itm n7g-itm--settings", "data-n7g-settings-url": "", "href": "#"}, local(context, "buttonLogInSettings")),
          ml("a", {"class": "n7g-itm n7g-itm--logout", "data-n7g-log-out-url": "", "href": "#"}, local(context, "buttonLogOut")),
    
          ml("div", {"class": "n7g-owd", "data-n7g-other-wmid-text": ""}, local(context, "otherWmid")),

          ml("div", {"class": "n7g-awl", "data-n7g-other-wmid-wrapper": ""}),
          ml("a", {"class": "n7g-itm n7g-itm--login", "data-n7g-re-login-url": "", "href": "#"}, local(context, "buttonLogInAnotherWmid"))
        ])
      ])
    ]);
  },

  generateServicesDropDown : function (context) {

    return ml("div", { "class": "n7g-slv n7g-svs-dd", "data-n7g-services-drop-down-menu": "" }, 
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
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/mestcom.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Mestcom: продажа рекламы")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/cashbox.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Cashbox: оплата за действия")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/debtmart.svg") }),
                  ml("span", { "class": "n7g-stl" }, "DebtMart: биржа долгов")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/shareholder.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Shareholder: дивиденды, торговля долями")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/loans.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Займы")
                ])
                
              ]),
            ]),

            ml("div", { "class": "n7g-ctm" }, [
              ml("div", { "class": "n7g-mni" }, "Оплатить"),
              ml("div", { "class": "n7g-cti" }, [

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/megastock.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Megastock: каталог продавцов")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/tocard.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Перевод на карту")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/bank.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Банковский перевод")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/mobile.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Мобильная связь")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/games.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Онлайн-игры")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/home.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Коммунальные услуги")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/tv.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Коммерческое телевидение")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/apple.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Подарочная карта Apple")
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
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/mail.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Защищенная почта")
                ]),

                ml("a", { "class": "n7g-svi", "href": "#" }, [
                  ml("img", { "class": "n7g-sic", "src": require("../images/services/events.svg") }),
                  ml("span", { "class": "n7g-stl" }, "Деловая сеть")
                ])
                
              ])
            ])

          ])

        ])
      )
    );

  },

  generateIndividualsDropDown : function (context) {

    return ml("div", { "class": "n7g-slv n7g-ind-dd", "data-n7g-individiuals-drop-down-menu": "" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuTopUp")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "topUpCash").url }, getLink(context, "topUpCash").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "topUpBankAccount").url }, getLink(context, "topUpBankAccount").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "topUpEMoney").url }, getLink(context, "topUpEMoney").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "topUpPaymentTerminat").url }, getLink(context, "topUpPaymentTerminat").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "topUpMoneyTransfer").url }, getLink(context, "topUpMoneyTransfer").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuRaiseFunds")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "consultations").url }, getLink(context, "consultations").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "softactivation").url }, getLink(context, "softactivation").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "indx").url }, getLink(context, "indx").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "publicant").url }, getLink(context, "publicant").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mestkom").url }, getLink(context, "mestkom").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "cashbox").url }, getLink(context, "cashbox").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "shareholder").url }, getLink(context, "shareholder").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "debtmart").url }, getLink(context, "debtmart").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuForWork")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "video").url }, getLink(context, "video").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "memo").url }, getLink(context, "memo").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "notes").url }, getLink(context, "notes").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "analytics").url }, getLink(context, "analytics").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mail").url }, getLink(context, "mail").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "files").url }, getLink(context, "files").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mentor").url }, getLink(context, "mentor").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuWithdraw")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "withdrawCash").url }, getLink(context, "withdrawCash").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "withdrawToBankCard").url }, getLink(context, "withdrawToBankCard").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "withdrawBankAccount").url }, getLink(context, "withdrawBankAccount").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "withdrawEmoney").url }, getLink(context, "withdrawEmoney").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "withdrawTransfer").url }, getLink(context, "withdrawTransfer").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuWebMoneyOperations")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "exchanger").url }, getLink(context, "exchanger").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "wmCheck").url }, getLink(context, "wmCheck").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "protectedTransactions").url }, getLink(context, "protectedTransactions").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(context, "security").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "escrow").url }, getLink(context, "escrow").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "enum").url }, getLink(context, "enum").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "operationNotification").url }, getLink(context, "operationNotification").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "purseAccessLimiting").url }, getLink(context, "purseAccessLimiting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "expenseLimitsSetting").url }, getLink(context, "expenseLimitsSetting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "restoringControl").url }, getLink(context, "restoringControl").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "advisor").url }, getLink(context, "advisor").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuPayments")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mobileCommunications").url }, getLink(context, "mobileCommunications").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "internetAccess").url }, getLink(context, "internetAccess").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "commercialTv").url }, getLink(context, "commercialTv").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "publicUtilities").url }, getLink(context, "publicUtilities").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "publicServices").url }, getLink(context, "publicServices").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "bankAccountPayments").url }, getLink(context, "bankAccountPayments").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "megastock").url }, getLink(context, "megastock").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "digisellerCatalogOfdigitalGoods").url }, getLink(context, "digisellerCatalogOfdigitalGoods").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "antivirus").url }, getLink(context, "antivirus").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "rebills").url }, getLink(context, "rebills").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuLoan")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "creditService").url }, getLink(context, "creditService").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "debtService").url }, getLink(context, "debtService").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(context, "passport").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "receivePassport").url }, getLink(context, "receivePassport").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "verificationPoints").url }, getLink(context, "verificationPoints").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(context, "arbitrage").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "submitComplaint").url }, getLink(context, "submitComplaint").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "submitClaim").url }, getLink(context, "submitClaim").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "registerContract").url }, getLink(context, "registerContract").title),
            ])
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuFundraising")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "charity").url }, getLink(context, "charity").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "crowdfunding").url }, getLink(context, "crowdfunding").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "groupBuying").url }, getLink(context, "groupBuying").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "eventOrganization").url }, getLink(context, "eventOrganization").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuBankCards")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "virtualCards").url }, getLink(context, "virtualCards").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "plasticCards").url }, getLink(context, "plasticCards").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "moneySend").url }, getLink(context, "moneySend").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuWebMoneyTerritory")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "events").url }, getLink(context, "events").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "blog").url }, getLink(context, "blog").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "geo").url }, getLink(context, "geo").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "wiki").url }, getLink(context, "wiki").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, getLink(context, "purseManagement2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "keeperStandardMini2").url }, getLink(context, "keeperStandardMini2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "keeperWinProClassic2").url }, getLink(context, "keeperWinProClassic2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "keeperWebProLight2").url }, getLink(context, "keeperWebProLight2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "keeperMobile2").url }, getLink(context, "keeperMobile2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "keeperForSocialNetworks2").url }, getLink(context, "keeperForSocialNetworks2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "enum2").url }, getLink(context, "enum2").title),
            ])
          ])
        ])
      )
    );

  },
  
  generateBusinessDropDown : function (context) {

    return ml("div", { "class": "n7g-slv n7g-biz-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, [
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuForMerchantsRetailers")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "merchant").url }, getLink(context, "merchant").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "paymentsToBankAccounts").url }, getLink(context, "paymentsToBankAccounts").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "megastock2").url }, getLink(context, "megastock2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "digiseller2").url }, getLink(context, "digiseller2").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuForWebsites")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "funding").url }, getLink(context, "funding").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mestcom2").url }, getLink(context, "mestcom2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "cashbox2").url }, getLink(context, "cashbox2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "digiseller3").url }, getLink(context, "digiseller3").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "login").url }, getLink(context, "login").title),
            ]),
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuGeneral")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "masspayment").url }, getLink(context, "masspayment").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "exchanger2").url }, getLink(context, "exchanger2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "contracts").url }, getLink(context, "contracts").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "arbitrage2").url }, getLink(context, "arbitrage2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "escrow2").url }, getLink(context, "escrow2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "creditMarket").url }, getLink(context, "creditMarket").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "reporting").url }, getLink(context, "reporting").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "financialSupport2").url }, getLink(context, "financialSupport2").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuForDealersPaymentSystems")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "biz").url }, getLink(context, "biz").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "biz2").url }, getLink(context, "biz2").title),
            ]),
          ]),
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuCapital")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "shareholder2").url }, getLink(context, "shareholder2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "indx2").url }, getLink(context, "indx2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "debtMarket").url }, getLink(context, "debtMarket").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "capitaller").url }, getLink(context, "capitaller").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuWebMoneyFeatures")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "mentor2").url }, getLink(context, "mentor2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "secureMail").url }, getLink(context, "secureMail").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "files2").url }, getLink(context, "files2").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "letterPostingService").url }, getLink(context, "letterPostingService").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "newsline").url }, getLink(context, "newsline").title),
            ]),
            ml("div", { "class": "n7g-clm" }, [
              ml("div", { "class": "n7g-ttl" }, local(context, "menuForDevelopers")),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "programInterfaces").url }, getLink(context, "programInterfaces").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "stylesAndDesign").url }, getLink(context, "stylesAndDesign").title),
              ml("a", { "class": "n7g-lnk", "href": getLink(context, "technicalSupport2").url }, getLink(context, "technicalSupport2").title),
            ]),
          ])
        ])
      )
    );
  },

  generateSearchDropDown : function (context) {

    return ml("div", { "class": "n7g-slv n7g-srch-dd" }, 
      ml("div", { "class": "n7g-ctr" }, 
        ml("div", { "class": "n7g-row" }, 
          ml("div", { "class": "n7g-col" }, [
            ml("div", { "class": "n7g-sctr" }, [
              ml("input", { "class": "n7g-sbxi", "type": "text", "placeholder": local(context, "findPlaceholder"), "data-n7g-search-input": "" }),
              ml("div", { "class": "n7g-sbxb", "data-n7g-search-button": ""}, "Найти"),
            ]),
            ml("div", { "class": "n7g-chps" }, 
              ml("div", { "class": "n7g-smr" }, [
                ml("a", { "class": "n7g-sml", "href": "#", "data-n7g-search-where": consts.SEARCH_WHERE_INFO }, local(context, "menuFindTitle_" + consts.SEARCH_WHERE_INFO)),
                ml("a", { "class": "n7g-sml", "href": "#", "data-n7g-search-where": consts.SEARCH_WHERE_GOODS }, local(context, "menuFindTitle_" + consts.SEARCH_WHERE_GOODS)),
                ml("a", { "class": "n7g-sml", "href": "#", "data-n7g-search-where": consts.SEARCH_WHERE_INOUT }, local(context, "menuFindTitle_" + consts.SEARCH_WHERE_INOUT)),
                ml("a", { "class": "n7g-sml", "href": "#", "data-n7g-search-where": consts.SEARCH_WHERE_WIKI }, local(context, "menuFindTitle_" + consts.SEARCH_WHERE_WIKI)),
                ml("a", { "class": "n7g-sml", "href": "#", "data-n7g-search-where": consts.SEARCH_WHERE_ANT }, local(context, "menuFindTitle_" + consts.SEARCH_WHERE_ANT))
              ])
            )
          ])
        )
      ))
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