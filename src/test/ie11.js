import "core-js/modules/es.array.includes";
import "element-closest-polyfill";

function Test () {

  this.init = () => {

    const pets = ["cat", "dog", "bat"];
    pets.includes("cat");

    console.log("ie 11 includes - ok")
  }
}

var test = new Test();
test.init();


document.onclick = function (e) {

  if (!e.target.closest(".test")) {
    
    console.log("ie 11 closest - ok")
  }
};