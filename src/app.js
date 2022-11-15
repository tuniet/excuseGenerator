/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse =
    who[getRandomInt(who.length - 1)] +
    " " +
    what[getRandomInt(what.length - 1)] +
    " " +
    "My homework" +
    " " +
    when[getRandomInt(when.length - 1)];
  document.getElementById("excuse").innerHTML = excuse;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
