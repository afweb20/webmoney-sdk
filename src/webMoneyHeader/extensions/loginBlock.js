import antiCache from "common/extensions/antiCache";
import consts from "./consts";
import htmlGenerator from "./htmlGenerator";

export default {

  init: function (context) {

    var rootElement = context.rootElement;
    
    var loginBlockLine = rootElement.getElementsByClassName("n7g-lgw")[0];
    var loginBlockOverlay = rootElement.getElementsByClassName("n23g23-login-block-overlay")[0];

    loginBlockLine.addEventListener("click", function (event) {
      this.classList.toggle("is-opened");
    });

    loginBlockOverlay.addEventListener("click", function (event) {
      this.classList.remove("is-opened");
    });

    window.addEventListener("click", function(e) { 

      if (!document.querySelector(".n7g-lgw").contains(e.target)) {

        if (loginBlockLine.classList.contains("is-opened")) {
          
          loginBlockLine.classList.remove("is-opened");
        }
      } 
    });

    var loginBlockContext = this;

    this.singleSignOn(
      context,
      function (singleSignOnResponse) {

        loginBlockContext.renderLoginBlock(context, singleSignOnResponse)
      },
      function () {
        
        loginBlockContext.renderLoginBlock(context, null);
      });
  },

  singleSignOn: function (context, resolve, reject) {

    try {

      var url = this.getLoginServiceUrl(context) + "/GateKeeper/SingleSignOn.js?type=cors";

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

          try {

            var singleSignOnResponse = JSON.parse(xhr.responseText);
            resolve(singleSignOnResponse);
          } catch {

            reject();
          }

        } else if (xhr.readyState === XMLHttpRequest.DONE) {

          reject();
        }
      };

      xhr.open("GET", url);
      xhr.withCredentials = true;
      xhr.send();
    } catch (error) {
      
      reject();
    }
  },

  renderLoginBlock: function (context, singleSignOnResponse) {

    var loginBlockData = this.getLoginBlockData(context, singleSignOnResponse);

    if (!loginBlockData.loggedOn) {

      var rootElement = context.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n7g-lgb")[0];
      var loginBlockButtonsElement = rootElement.getElementsByClassName("n7g-lbs")[0];
      var loginBlockButtonRegistrationElement = loginBlockButtonsElement.getElementsByClassName("n7g-lbi--reg")[0];
      var loginBlockButtonLoginElement = loginBlockButtonsElement.getElementsByClassName("n7g-lbi--log")[0];

      loginBlockButtonRegistrationElement.href = loginBlockData.registrationUrl;
      loginBlockButtonLoginElement.href = loginBlockData.loginUrl;

      loginBlockElement.classList.remove("is-logged-in");
      loginBlockElement.classList.add("is-not-logged-in");
    } else {

      var rootElement = context.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n7g-lgb")[0];
      var loginBlockWrapperElement = rootElement.getElementsByClassName("n7g-lgw")[0];
      var loginBlockUserLineImageElement = loginBlockWrapperElement.getElementsByClassName("n7g-uim")[0];
      var loginBlockUserLineNameElement = loginBlockWrapperElement.getElementsByClassName("n7g-unm")[0];
      var loginBlockWindowUserImageLinkElement = loginBlockWrapperElement.getElementsByClassName("n7g-uil")[0];
      var loginBlockWindowUserImageElement = loginBlockWrapperElement.getElementsByClassName("n7g-uifm")[0];
      var loginBlockWindowUserInfoNameElement = loginBlockWrapperElement.getElementsByClassName("n7g-ufnm")[0];
      var loginBlockWindowUserInfoNameTextElement = loginBlockWrapperElement.getElementsByClassName("n7g-unt")[0];
      var loginBlockWindowUserInfoPurseElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--purse")[0];
      var loginBlockWindowUserInfoLogoutElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--logout")[0];
      var loginBlockWindowAdditionalWmidsList = loginBlockWrapperElement.getElementsByClassName("n7g-awl")[0];
      var loginBlockWindowLoginButtonElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--login")[0];
      var loginBlockWindowSettingsElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--settings")[0];

      loginBlockUserLineImageElement.src = loginBlockData.smallAvatarUrl;
      loginBlockUserLineNameElement.innerText = loginBlockData.preview;
      
      loginBlockWrapperElement.getElementsByClassName("n7g-itm--profile")[0].href = loginBlockData.eventsUrl;
      loginBlockWindowUserImageLinkElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserImageElement.src = loginBlockData.smallAvatarUrl;
      loginBlockWindowUserInfoNameElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserInfoNameTextElement.innerText = loginBlockData.displayName;
      loginBlockWindowUserInfoPurseElement.href = loginBlockData.keeperUrl;
      loginBlockWindowUserInfoLogoutElement.href = loginBlockData.logoutUrl;
      
      for (var i = 0; i < loginBlockData.additionalUsers.length; i++) {

        var additionalUser = loginBlockData.additionalUsers[i];

        var getneratedLoginBlockWmidItemElement = htmlGenerator.getnerateLoginBlockWmidItem(
          context,
          additionalUser.wmid,
          additionalUser.displayName,
          additionalUser.avatarUrl,
          additionalUser.loginUrl);
        
        loginBlockWindowAdditionalWmidsList.appendChild(getneratedLoginBlockWmidItemElement);
      }
      
      loginBlockWindowLoginButtonElement.href = loginBlockData.reloginUrl;
      loginBlockWindowSettingsElement.href = loginBlockData.settingsUrl;

      loginBlockElement.classList.remove("is-not-logged-in");
      loginBlockElement.classList.add("is-logged-in");
    }

    context.onLoginBlockRendered({
      wmid: loginBlockData.wmid,
      tid: loginBlockData.tid,
      dataFillProgress: loginBlockData.dataFillProgress
    })
  },

  getLoginBlockData: function (context, singleSignOnResponse) {
    
    var wmid = context.wmid;

    if (wmid == null
      && context.recognize
      && singleSignOnResponse != null) {

      if (singleSignOnResponse.wmId != null) {

        wmid = singleSignOnResponse.wmId;
      } else if (singleSignOnResponse.users != null
        && singleSignOnResponse.users.length > 0) {
            
        wmid = singleSignOnResponse.users[0].wmId;
      }
    }

    var currentUser = null;
    var additionalUsers = [];

    if (singleSignOnResponse != null
      && singleSignOnResponse.users != null
      && singleSignOnResponse.users.length > 0) {
        
      for (var i = 0; i < singleSignOnResponse.users.length; i++) {

        var user = singleSignOnResponse.users[i];

        var dataFillProgress = 0;

        if (user.datafill != null) {

          dataFillProgress = user.datafill.progress;
        }

        if (user.wmId == wmid) {

          currentUser = {
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(context, user.wmId)
          };
        } else {

          additionalUsers.push({
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(context, user.wmId)
          });
        }
      }
    }

    if (wmid != null && currentUser == null) {

      currentUser = {
        wmid: wmid,
        displayName: "WMID: " + wmid,
        avatarUrl: this.getAvatarUrl(context, "tiny", wmid),
        keeperType: 0,
        tid: 0,
        dataFillProgress: 0,
        loginUrl: this.getLoginUrl(context, wmid)
      };
    }

    var loginBlockData = null;

    if (currentUser == null) {

      loginBlockData = {
        loggedOn: false,
        wmid: null,
        tid: null,
        dataFillProgress: null,
        registrationUrl: this.getRegistrationUrl(context),
        loginUrl: context.loginUrl != null ? context.loginUrl : this.getLoginUrl(context, null)
      };
    } else {

      loginBlockData = {
        loggedOn: true,
        wmid: currentUser.wmid,
        tid: currentUser.tid,
        dataFillProgress: currentUser.dataFillProgress,
        preview: "WMID: " + currentUser.wmid,
        displayName: currentUser.displayName,
        tinyAvatarUrl: this.getAvatarUrl(context, "tiny", currentUser.wmid),
        smallAvatarUrl: this.getAvatarUrl(context, "small", currentUser.wmid),
        eventsUrl: this.getEventsUrl(context, currentUser.wmid),
        keeperUrl: this.getKeeperUrl(context, currentUser.wmid, currentUser.keeperType),
        logoutUrl: context.logoutUrl != null ? context.logoutUrl : this.getLogoutUrl(context),
        reloginUrl: this.getReloginUrl(context),
        settingsUrl: this.getSettingsUrl(context),
        additionalUsers: additionalUsers
      }
    }

    return loginBlockData;
  },

  getRegistrationUrl: function (context) {

    var registrationUrl = null

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? registrationUrl = "https://start.wmtransfer.com"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? registrationUrl = "https://start.webmoney.ru"
    : registrationUrl = "https://start.web.money");

    return registrationUrl;
  },

  getLoginServiceUrl: function (context) {

    var loginServiceUrl = null;

    context.domainType == consts.DOMAIN_TYPE_MONEY
    ? loginServiceUrl = "https://login.web.money"
    : loginServiceUrl = "https://login.wmtransfer.com";

    context.testMode
    ? loginServiceUrl += "/better"
    : loginServiceUrl += "";

    return loginServiceUrl; 
  },

  getSettingsUrl: function (context) {

    var settingsUrl = this.getLoginServiceUrl(context) + "/GateKeeper/context.aspx";
    
    return settingsUrl;
  },

  getLoginUrl: function (context, wmid) {
    
    var loginUrl = this.getLoginServiceUrl(context) + "/GateKeeper.aspx"
    + "?RID=" + context.rid
    + "&Quiet=1"
    + "&Rnd=" + antiCache.getValue()
    + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());

    if (wmid != null) {

      loginUrl += "&WmId=" + wmid
    }
    
    return loginUrl;
  },

  getReloginUrl: function (context) {

    var reloginUrl = this.getLoginServiceUrl(context) + "/GateKeeper.aspx"
    + "?RID=" + context.rid
    + "&WmId="
    + "&Quiet=0"
    + "&Rnd=" + antiCache.getValue()
    + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    
    return reloginUrl;
  },

  getLogoutUrl: function (context, wmid) {

    var logoutUrl = this.getLoginServiceUrl(context) + "/GateKeeper/LogOff.aspx"
    + "?RID=" + context.rid
    + "&WmId=" + wmid
    + "&Rnd=" + antiCache.getValue()
    + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    
    return logoutUrl;
  },

  getEventsUrl: function (context, wmid) {

    var rid = null;

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? rid = "6F26FAFD-ABAF-4E22-B5A6-A6A400E2D62B"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? rid = "E1D2A3F8-88E6-45DE-9A4C-A68F00BBBA1C"
    : rid = "B94F739D-DBC8-4CA5-9964-A8EA00CF636A");

    var eventsUrl = this.getLoginServiceUrl(context) + "/GateKeeper.aspx"
    + "?RID=" + rid
    + "&WmId=" + wmid
    + "&Quiet=1"
    + "&Rnd=" + antiCache.getValue();
    
    return eventsUrl;
  },

  getKeeperUrl: function (context, wmid, keeperType) {

    var rid = null;

    if (keeperType == "1") {

      if (context.domainType == consts.DOMAIN_TYPE_MONEY) {

        rid = "D65F715A-DDF7-4BB2-8E4F-A8EA011BB678";
      } else if (context.lang == consts.LANG_RU) {

        rid = "535E0FD1-2DB2-4906-B421-A3930133E774";
      } else {

        rid = "FDC51D96-C961-4967-A4CE-A3930133F11F";
      }
    } else {

      if (context.domainType == consts.DOMAIN_TYPE_MONEY) {

        rid = "7544EC73-6BA5-41AC-A397-A8EE007C635C";
      } else if (context.lang == consts.LANG_RU) {

        rid = "448CCF32-1611-45B5-B3A9-A69B00DDDC31";
      } else {

        rid = "010B268D-88D1-4A18-AEDF-A89600EF7B9F";
      }
    }

    var keeperUrl = this.getLoginServiceUrl(context) + "/GateKeeper.aspx"
    + "?RID=" + rid
    + "&WmId=" + wmid
    + "&Quiet=1"
    + "&Rnd=" + antiCache.getValue();
    
    return keeperUrl;
  },

  getAvatarUrl: function (context, size, wmid) {

    var avatarUrl = null;

    context.domainType == consts.DOMAIN_TYPE_WMTRANSFER
    ? avatarUrl = "https://events.wmtransfer.com"
    : (context.domainType == consts.DOMAIN_TYPE_RU
    ? avatarUrl = "https://events.webmoney.ru"
    : avatarUrl = "https://events.web.money");

    avatarUrl += "/open/avatar.aspx?t=Url"; 
    avatarUrl += "&s=" + size;
    avatarUrl += "&w=" + wmid;

    return avatarUrl;
  },

  getReturnUrl: function () {

    var retutnUrl = (location.pathname || "") + (location.search || "") + (location.hash || "");

    return retutnUrl;
  }
}