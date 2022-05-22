export default {
  isAndroidDevice: function () {
    return navigator.userAgent.match(/Android/i);
  },

  isAppleDevice: function () {
    return navigator.userAgent.match(/iPhone|iPod/i);
  },

  isOperaDevice: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },

  isWindowsDevice: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },

  isAnyDevice: function () {
    return this.isAndroidDevice() || this.isAppleDevice() || this.isOperaDevice() || this.isWindowsDevice();
  }
}