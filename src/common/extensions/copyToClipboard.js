export default function (value) {
  
  var inputElement = document.createElement('textarea');
  var focusElement = document.activeElement;
  
  inputElement.value = value;
  
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);
  focusElement.focus();
}