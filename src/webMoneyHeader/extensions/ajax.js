export default function (method, url, successCallback, errorCallback) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {

    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      var response = xhr.responseText;

      successCallback(response);

    } else if (xhr.readyState === XMLHttpRequest.DONE) {

      errorCallback();
    }
  };

  xhr.open(method, url);
  xhr.send();
}