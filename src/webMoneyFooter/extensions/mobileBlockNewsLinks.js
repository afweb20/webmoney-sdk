import ajax from "./ajax";
import consts from "./consts";
import ml from "./ml";

export default {

  init: function (options) {

    var view = options.view;

    if (view != consts.VIEW_MOBILE) {
      return;
    }
    
    var rootElement = options.rootElement;
    var url = consts.RSS_URL[options.lang];

    ajax("GET", url, function (response) {

      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(response,"text/xml");
      var newsItems = xmlDoc.querySelectorAll("item");
      var newsList = rootElement.getElementsByClassName("n21g21-news-list")[0];

      for (var i = 0; i < 2; i++) {

        var newsItemTitle = newsItems[i].querySelector("title");
        var newsItemLink = newsItems[i].querySelector("link");
        var newsItem = ml("a", { "class": "n21g21-news-list-item", "href": newsItemLink.textContent }, newsItemTitle.textContent);
        newsList.append(newsItem);
      }
    });
  }
}