import consts from "./consts";
import local from "./local";
import ml from "common/extensions/ml";
import getLink from "common/extensions/linkStorage";

export default {

  generate: function (context) {

    var dynCls = "n9g-" + context.dynamicUniqueKey;

    return ml("div", { class: "n9g n9g-" + context.view, "data-n9g-dynamic-class": dynCls }, [
      this.generateIlliciumBlock(context),
      this.generateTopPartFooter(context),
      this.generateMiddlePartFooter(context),
      this.generateBottomPartFooter(context),
    ]);
    
  },

  generateIlliciumBlock: function (context) {

    if (context.illiciumPlaceId != null && context.illiciumView == consts.ILLICIUM_VIEW_TOP) {

      return ml("div", {"class": "n9g-bnr"}, 
        ml("div", {"class": "n9g-ctr"},
          ml("div", { "id": "place" + context.illiciumPlaceId, "data-role": "illicium", "data-placeid": context.illiciumPlaceId, "class": "illiciumItem n9g-ibr" })
        )
      );
    }
  },

  generateTopPartFooter: function (context) {
    
    return ml("div", { class: "n9g-ln" },
      ml("div", { class: "n9g-ctr" }, 
        ml("div", { class: "n9g-lnf" }, [
          this.generateTopPartLinks(context),
          this.generateTopPartSocials(context)
        ])
      )
    );
  },

  generateTopPartLinks: function (context) {

    return ml("div", { "class": "n9g-ll" },
      [
        ml("a", { "class": "n9g-lll", "href": getLink(context, "events").url }, getLink(context, "events").title),
        ml("a", { "class": "n9g-lll", "href": getLink(context, "developers").url }, getLink(context, "developers").title),
        ml("a", { "class": "n9g-lll", "href": getLink(context, "wiki").url }, getLink(context, "wiki").title),
        ml("a", { "class": "n9g-lll", "href": getLink(context, "news").url }, getLink(context, "news").title)
      ]);
  },
  
  generateTopPartSocials: function (context) {
    
    var vkIconUrl = require("../images/socials/vk.svg");
    var facebookIconUrl = require("../images/socials/fb.svg");
    var twitterIconUrl = require("../images/socials/tw.svg");
    var odnoklassnikiIconUrl = require("../images/socials/od.svg");
    var youtubeIconUrl = require("../images/socials/yt.svg");
    var instagramIconUrl = require("../images/socials/im.svg");
    var telegramIconUrl = require("../images/socials/tg.svg");
    var showFacebookIcon = false;
    
    if (context.domainType == consts.DOMAIN_TYPE_MONEY || context.lang == consts.LANG_EN) {
      showFacebookIcon = true;
    }

    return ml("div", { "class": "n9g-lr" }, [ 
      context.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--vk", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "vk").url },
        ml("img", { "class": "n9g-lri", "src": vkIconUrl })) : "",
      showFacebookIcon ? ml("a", { "class": "n9g-lrl n9g-lrl--fb", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "facebook").url },
        ml("img", { "src": facebookIconUrl })) : "",
      ml("a", { "class": "n9g-lrl n9g-lrl--tw", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "twitter").url },
        ml("img", { "class": "n9g-lri", "src": twitterIconUrl })),
      context.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--od", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "odnoklassniki").url },
        ml("img", { "class": "n9g-lri", "src": odnoklassnikiIconUrl })) : "",
      context.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--yt", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "youTube").url },
        ml("img", { "class": "n9g-lri", "src": youtubeIconUrl })) : "",
      context.domainType == consts.DOMAIN_TYPE_MONEY ? ml("a", { "class": "n9g-lrl n9g-lrl--im", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "instagram").url },
        ml("img", { "src": instagramIconUrl })) : "",
      context.lang == consts.LANG_RU ? ml("a", { "class": "n9g-lrl n9g-lrl--tg", "target": "_blank", "rel": "noopener noreferrer", "href": getLink(context, "telegram").url },
        ml("img", { "class": "n9g-lri", "src": telegramIconUrl })) : ""
    ]);
  },

  generateMiddlePartFooter: function (context) {

    return ml("div", { class: "n9g-mdl" },
      ml("div", { class: "n9g-ctr"}, [
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartAboutSystem(context),
          this.generateMiddlePartInstructions(context),
          // this.generateMiddlePartPurseManagement(context),
          this.generateMiddlePartLegalInformation(context),
          this.generateMiddlePartContacts(context),
        ]),
        ml("div", { class: "n9g-rw"}, [
          this.generateMiddlePartHelp(context),
          this.generateMiddlePartApps(context)
        ])
      ])
    );
  },

  generateMiddlePartAboutSystem: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuAboutWebMoney")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "briefDescription").url }, getLink(context, "briefDescription").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "purseTypes").url }, getLink(context, "purseTypes").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "purseManagement").url }, getLink(context, "purseManagement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "systemFees").url }, getLink(context, "systemFees").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "operationLimits").url }, getLink(context, "operationLimits").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "securityAndPrivacy").url }, getLink(context, "securityAndPrivacy").title),
    ]);
  },

  generateMiddlePartPurseManagement: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuPurseManagement")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "keeperStandardMini").url }, getLink(context, "keeperStandardMini").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "keeperWinProClassic").url }, getLink(context, "keeperWinProClassic").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "keeperWebProLight").url }, getLink(context, "keeperWebProLight").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "keeperMobile").url }, getLink(context, "keeperMobile").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "keeperForSocialNetworks").url }, getLink(context, "keeperForSocialNetworks").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "actionBlock").url }, getLink(context, "actionBlock").title),
    ]);
  },

  generateMiddlePartLegalInformation: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuLegalInformation")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "webMoneyTransferCode").url }, getLink(context, "webMoneyTransferCode").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "propertyRightsTransferAgreement").url }, getLink(context, "propertyRightsTransferAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "amlAgreement").url }, getLink(context, "amlAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "creditServiceAgreement").url }, getLink(context, "creditServiceAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "wmPursesAgreement").url }, getLink(context, "wmPursesAgreement").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "warning").url }, getLink(context, "warning").title),
    ]);
  },

  generateMiddlePartHelp: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuHelp")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "technicalSupport").url }, getLink(context, "technicalSupport").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "financialSupport").url }, getLink(context, "financialSupport").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "forum").url }, getLink(context, "forum").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "AskQuestion").url }, getLink(context, "AskQuestion").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "videoTutorials").url }, getLink(context, "videoTutorials").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "searchPayment").url }, getLink(context, "searchPayment").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "interactiveMap").url }, getLink(context, "interactiveMap").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "changeData").url }, getLink(context, "changeData").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "legalEntityWmid").url }, getLink(context, "legalEntityWmid").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "pretenzIIski").url }, getLink(context, "pretenzIIski").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "repaymentCPurse").url }, getLink(context, "repaymentCPurse").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "controlRecovery").url }, getLink(context, "controlRecovery").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "annullation").url }, getLink(context, "annullation").title),
    ]);
  },

  generateMiddlePartContacts: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuContactInformation")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "ownerAndAdministrator").url }, getLink(context, "ownerAndAdministrator").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "wmPurseGuarantors").url }, getLink(context, "wmPurseGuarantors").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "contactsForLegalRequests").url }, getLink(context, "contactsForLegalRequests").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "registrars").url }, getLink(context, "registrars").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "cooperation").url }, getLink(context, "cooperation").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "downloadSoftware3").url }, getLink(context, "downloadSoftware3").title)
    ]);
  },

  generateMiddlePartInstructions: function (context) {

    return ml("div", { "class": "n9g-cln", "data-n7g-toggle-item": "" }, [
      ml("div", { "class" : "n9g-mtl" }, local(context, "menuInstrucciones")),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "faq").url }, getLink(context, "faq").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "howToRegister").url }, getLink(context, "howToRegister").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "howToCreateWallet").url }, getLink(context, "howToCreateWallet").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "howToTopUp").url }, getLink(context, "howToTopUp").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "howToIden").url }, getLink(context, "howToIden").title),
      ml("a", { "class" : "n9g-mlk", "href" : getLink(context, "videoTutorials").url }, getLink(context, "videoTutorials").title),
      
    ]);
  },

  generateMiddlePartApps: function (context) {

    return ml("div", { "class": "n9g-cln n9g-cln--x2" }, [
      ml("div", { class: "n9g-mtl n9g-smp"}, local(context, "menuMobileApps")),
      ml("div", { class: "n9g-aps n9g-smp" }, [
        ml("a", { class: "n9g-ait", href: getLink(context, "appAppStore").url }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/app-store.svg") })
          ),
          ml("span", { class: "n9g-atx" }, getLink(context, "appAppStore").title)
        ]),
        ml("a", { class: "n9g-ait", href: getLink(context, "appGooglePlay").url }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/google-play.svg") })
          ),
          ml("span", { class: "n9g-atx" }, getLink(context, "appGooglePlay").title)
        ])
      ]),
      ml("div", { class: "n9g-mtl n9g-pc"}, local(context, "menuPcApps")),
      ml("div", { class: "n9g-aps n9g-pc" }, [
        ml("a", { class: "n9g-ait", href: getLink(context, "appWindows").url }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/windows.svg") })
          ),
          ml("span", { class: "n9g-atx" }, getLink(context, "appWindows").title)
        ]),
        ml("a", { class: "n9g-ait", href: getLink(context, "appMacOS").url }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/os-x.svg") })
          ),
          ml("span", { class: "n9g-atx" }, getLink(context, "appMacOS").title)
        ]),
        ml("a", { class: "n9g-ait", href: getLink(context, "appMicrosoftStore").url }, [
          ml("span", { class: "n9g-aim" }, 
            ml("img", { class: "n9g-aig", src: require("../images/apps/windows-store.svg") })
          ),
          ml("span", { class: "n9g-atx" }, getLink(context, "appMicrosoftStore").title)
        ])
      ])
    ]);
  },

  generateBottomPartFooter: function (context) {

    var supportedLangs = context.supportedLangs;
    
    return ml("div", { class: "n9g-btm" }, 
      ml("div", { class: "n9g-ctr" },
        ml("div", { class: "n9g-brw" }, [
          ml("div", { class: "n9g-btp" }, [
            ml("img", { class: "n9g-blg", src: require("../images/logo.svg") }),
            supportedLangs.length > 1 ? this.generateLangSelector(context) : ""
          ]),
          ml("div", { class: "n9g-bbp" }, [
            ml("div", { class: "n9g-cprt"}, "Copyright WebMoney © 1998 - " + new Date().getFullYear() + "."),
            ml("div", { class: "n9g-ctx"}, local(context, "menuFooterCopyrightText")),
          ])
        ])
      )
    );
  },

  generateLangSelector: function (context) {

    var supportedLangs = context.supportedLangs;

    var htmlSelectLangs = [];

    for (var i = 0; i < supportedLangs.length; i++) {

      if (supportedLangs[i] == context.lang) {
        continue;
      }

      htmlSelectLangs.push(
        ml("a",{ "class": "n9g-lgi n9g-f" + supportedLangs[i], "href": "#", "data-n9g-select-lang": supportedLangs[i] }, local(context, "langTitle_" + supportedLangs[i])));
    }

    return ml("div", { "class": "n9g-lngs" },
      ml("div", { "class": "n9g-lgsl", "data-n9g-lang-selector": "" }, [
        ml("span", { "class": "n9g-lgc n9g-f" + context.lang }, local(context, "langTitle_" + context.lang)),
        ml("div", { "class": "n9g-lgl" }, htmlSelectLangs)
      ])
    );
  }
};