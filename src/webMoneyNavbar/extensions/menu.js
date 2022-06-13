import consts from "./consts";
import Swiper from "swiper";
import "swiper/css";
var tinycolor = require("tinycolor2");

export default {

  init: function (options) {

    this.appendDynamicStyles(options);

    var view = options.view;
    var firstLevel = options.firstLevel;
    var rootElement = options.rootElement;

    var menuBtn = rootElement.getElementsByClassName("n8g-mbn")[0];

    menuBtn.addEventListener("click", function (e) {

      this.classList.toggle("is-a");

    });

    /*
    if (view == consts.VIEW_MOBILE) {
    
      var rootElement = options.rootElement;

      if (firstLevel.length > 1) {

        var firstLevelButton = rootElement.getElementsByClassName("n30g30-first-level-button")[0];

        firstLevelButton.addEventListener("click", function (event) {
          this.classList.toggle("is-activated");
        });
      }

      var secondLevel = rootElement.getElementsByClassName("n30g30-second-level")[0];
      var secondLevelArrowLeft = rootElement.getElementsByClassName("n30g30-second-level-arrow-left")[0];
      var secondLevelArrowRight = rootElement.getElementsByClassName("n30g30-second-level-arrow-right")[0];

      new Swiper(secondLevel, {
        slidesPerView: "auto",
        on: {
          init: function (swiper) {
            if (swiper.isBeginning && swiper.isEnd){
              secondLevelArrowLeft.classList.add("is-hidden");
              secondLevelArrowRight.classList.add("is-hidden");
            }
            if (!swiper.isBeginning){
              secondLevelArrowLeft.classList.remove("is-hidden");
            }
            if (!swiper.isEnd){
              secondLevelArrowRight.classList.remove("is-hidden");
            }
          },
          progress: function (swiper, progress) {

            if (!swiper.isBeginning && !swiper.isEnd){

              secondLevelArrowLeft.classList.remove("is-hidden");
              secondLevelArrowRight.classList.remove("is-hidden");
            }

            if (swiper.isBeginning){

              secondLevelArrowLeft.classList.add("is-hidden");
              secondLevelArrowRight.classList.remove("is-hidden");
            }

            if (swiper.isEnd){

              secondLevelArrowRight.classList.add("is-hidden");
              secondLevelArrowLeft.classList.remove("is-hidden");
            }
          }
        }
      });
    }
    */
  },

  appendDynamicStyles: function (options) {
    
    var view = options.view;
    var primaryColor = options.primaryColor;
    var primaryColorLighten = tinycolor(primaryColor).saturate(20).lighten(15).toString();
    var primaryColorDarken = tinycolor(primaryColor).darken(15).toString();

    // var gradientBg = "linear-gradient(45deg, " + primaryColor + " 0%, " + primaryColorLighten + " 100%)";
    var gradientBg = "linear-gradient(45deg, " + primaryColorDarken + " 0%, " + primaryColor + " 50%, " + primaryColorLighten + " 100%)";

    // var viewPrefix = ".n8g";
    // if (view == consts.VIEW_MOBILE) {
    //   viewPrefix = ".n30g30.n30g30-mobile";
    // }
    var dynamicPrefix = ".n8g[data-dynamic-class='n8g-" + options.dynamicUniqueKey + "']";

    var styleContent = "";

    // styleContent += dynamicPrefix + " .n8g-mcn {background-color: " + primaryColor + "}";

    styleContent += dynamicPrefix + " .n8g-mcn {background: " + primaryColor + "}";

    styleContent += dynamicPrefix + " .n8g-mnl.is-activated {background-color: " + primaryColor + "}";
    styleContent += dynamicPrefix + " .n8g-mbn {background-color: " + primaryColor + "}";
    
    // if (view == consts.VIEW_MOBILE) {

    //   styleContent += dynamicPrefix + " .n30g30-first-level-button {background-color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated {color: " + primaryColor + "; border-color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated:hover {color: " + primaryColor + "; border-color: " + primaryColor + "}";
    // } else {

    //   styleContent += dynamicPrefix + " .n30g30-first-level-item:hover {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-first-level-item:not(.is-first-element).is-activated {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item:not(.is-activated):hover {color: " + primaryColor + "}";
    //   styleContent += dynamicPrefix + " .n30g30-second-level-item.is-activated {background-color: " + primaryColor + "}";
     
    //   if (options.design == consts.DESIGN_WM_MAIN) {
    //     styleContent += dynamicPrefix + " .n30g30-first-level-item-image-wrapper {background-color: " + primaryColor + "}";
    //   }
    // }

    var styleElement = document.createElement("style");
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}
