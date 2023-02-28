/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here"

function generateName() {
  let subject = ["Johanna", "Jessica", "Nicole", "Elizabeth"];
  let pronoun = ["is", "must be"];
  let adjetive = ["beautiful", "nice", "cool", "pretty"];

  let subjIndex = Math.floor(Math.random() * subject.length);
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adjetive.length);

  let result =
    " " +
    subject[subjIndex] +
    " " +
    pronoun[proIndex] +
    " " +
    adjetive[adjIndex];

  return result;
}
window.onload = function() {
  document.getElementById("name").innerHTML = generateName();
};

console.log("Hello Rigo from the console!");
