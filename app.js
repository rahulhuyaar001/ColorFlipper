const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var bg = document.getElementById("bg");
var btn = document.getElementById("btn");
var value = document.getElementById("value");

setInterval(() => {
    let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[getRandomNumber()];
  }
  value.textContent = color;
  bg.style.backgroundColor = color;
  bg.style.transition = "0.5s"

}, 1000);
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);

}
 

