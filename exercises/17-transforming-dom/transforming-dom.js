/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

let danger = document.querySelector("[data-danger]");
danger.setAttribute("rol", "alert");
let link = document.querySelector("[linkjs]");
link.setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
);
let changeText = document.querySelector("[data-success]");
changeText.textContent = "I am victorious!";

let backColor = document.querySelector("[data-info]");
backColor.setAttribute("style", "background-color: red");

let textColor = document.querySelector("[changeColor]");
let currentClass = textColor.getAttribute("class");
currentClass = currentClass + " text-dark";
textColor.setAttribute("class", currentClass);

let hideDiv = document.querySelector("[data-hide]");
hideDiv.setAttribute("style", "visibility: hidden");

let alertHide = document.querySelector("[alert-hide]");
alertHide.setAttribute("class", "alert alert-success");

let codeDiv = document.querySelector("[code]");
let button = document.querySelector("#idButton");
if (button.getAttribute("class").includes("btn-primary")) {
  codeDiv.textContent = "✓ blue";
}
