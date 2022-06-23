import antiCache from "common/extensions/antiCache";
import consts from "./consts";
import htmlGenerator from "./htmlGenerator";

export default {

  init: function (context) {

    var rootElement = context.rootElement;
    
    var loginBlockToggleMenuElement = rootElement.querySelector("[data-n7g-login-block-toggle-menu]");

    loginBlockToggleMenuElement.addEventListener("click", function (event) {
      this.classList.toggle("is-opened");
    });

    window.addEventListener("click", function(event) { 

      if (!loginBlockToggleMenuElement.contains(event.target)) {
        loginBlockToggleMenuElement.classList.remove("is-opened");
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

      var loginBlockWrapperElement = rootElement.querySelector("[data-n7g-login-block-wrapper]");
      loginBlockWrapperElement.classList.remove("is-logged-in");
      loginBlockWrapperElement.classList.add("is-not-logged-in");

      var registrationUrlElement = rootElement.querySelector("[data-n7g-registration-url]");
      var loginUrlElement = rootElement.querySelector("[data-n7g-log-in-url]");

      registrationUrlElement.href = loginBlockData.registrationUrl;
      loginUrlElement.href = loginBlockData.loginUrl;
    } else {

      var rootElement = context.rootElement;

      var loginBlockWrapperElement = rootElement.querySelector("[data-n7g-login-block-wrapper]");
      loginBlockWrapperElement.classList.remove("is-not-logged-in");
      loginBlockWrapperElement.classList.add("is-logged-in");

      var previewElement = rootElement.querySelector("[data-n7g-preview]");
      previewElement.innerText = loginBlockData.preview;
      
      var avatarElements = rootElement.querySelectorAll("[data-n7g-avatar]");

      for (var i = 0; i < avatarElements.length; i++) {

        avatarElements[i].src = loginBlockData.smallAvatarUrl;
      }

      var eventsUrlElements = rootElement.querySelectorAll("[data-n7g-events-url]");

      for (var i = 0; i < eventsUrlElements.length; i++) {

        eventsUrlElements[i].href = loginBlockData.eventsUrl;
      }

      var displayNameElement = rootElement.querySelector("[data-n7g-display-name]");
      displayNameElement.innerText = loginBlockData.displayName;

      var keeperUrlElement = rootElement.querySelector("[data-n7g-keeper-url]");
      keeperUrlElement.href = loginBlockData.keeperUrl;

      var settingsUrlElement = rootElement.querySelector("[data-n7g-settings-url]");
      settingsUrlElement.href = loginBlockData.settingsUrl;

      var logoutUrlElement = rootElement.querySelector("[data-n7g-log-out-url]");
      logoutUrlElement.href = loginBlockData.logoutUrl;
      
      var reloginUrlElement = rootElement.querySelector("[data-n7g-re-login-url]");
      reloginUrlElement.href = loginBlockData.reloginUrl;

      if (loginBlockData.additionalUsers.length > 0) {

        debugger;

        var otherWmidTextElement = rootElement.querySelector("[data-n7g-other-wmid-text]");
        otherWmidTextElement.classList.add("is-visible");

        var otherWmidWrapperElement = rootElement.querySelector("[data-n7g-other-wmid-wrapper]");

        for (var i = 0; i < loginBlockData.additionalUsers.length; i++) {

          var additionalUser = loginBlockData.additionalUsers[i];

          var getneratedLoginBlockWmidItemElement = htmlGenerator.getnerateLoginBlockWmidItem(
            context,
            additionalUser.wmid,
            additionalUser.displayName,
            additionalUser.avatarUrl,
            additionalUser.loginUrl);
          
            otherWmidWrapperElement.appendChild(getneratedLoginBlockWmidItemElement);
        }
      }
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