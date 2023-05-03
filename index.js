import * as s from "./src/Dom/onUnmount.js";

const myDiv = document.createElement("div");
myDiv.textContent="helloooooo"
function myFunction() {
    console.log("myDiv removed from DOM!");
}

myDiv.onUnmount=myFunction

document.body.append(myDiv)