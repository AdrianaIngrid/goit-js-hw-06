const colorPallete = document.querySelector(".widget");
const colorBody = document.querySelector("body");
const colorSpan = document.querySelector(".color");

const onClick = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  console.log("click");
  console.log(e.target.dataset.color);
  colorSpan.textContent = e.target.dataset.color;
 
}
colorBody.addEventListener("click", onClick);
const color = document.querySelector("button")
const getHexColor = getRandomHexColor();
color.dataset.color = getHexColor;
colorBody.style.backgroundColor = getHexColor;

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
