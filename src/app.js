/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here"

function generateName() {
  let subject = [
    "bananas",
    "rockwell",
    "shop",
    "icecream",
    "geeks",
    "gorilla",
    "sky",
    "rainbow"
  ];
  let pronoun = [
    "blue",
    "green",
    "cool",
    "happy",
    "normal",
    "heated",
    "lovely",
    "true",
    "fake",
    "strong"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);

  let result = " " + pronoun[proIndex] + "" + subject[subjIndex];

  return result;
}
window.onload = function() {
  document.getElementById("random-name").innerHTML = generateName() + ".com";
};
