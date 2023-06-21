import { body, titleBar, gridContainer, slider, color } from "./domElements.js";
import "./style.css";

(function DomPlacement() {
  titleBar.textContent = "asdohu";
  body.appendChild(titleBar);
  body.appendChild(gridContainer);
  body.appendChild(slider);
  body.appendChild(color);
})();

function gridMaker(value) {
  const totalSize = Number.parseFloat(getComputedStyle(gridContainer).width);
  console.log(totalSize / value);
  for (let i = 0; i < value; i++) {
    const row = document.createElement("div");
    gridContainer.appendChild(row);
    row.classList.add("row");
    for (let x = 0; x < value; x++) {
      const cells = document.createElement("div");
      cells.style.width = `${totalSize / value}px`;
      cells.style.height = `${totalSize / value}px`;
      cells.classList.add("cells");
      row.appendChild(cells);
    }
  }
}

function sliderToGridValue() {
  gridMaker(slider.value);
  slider.addEventListener("change", () => {
    gridContainer.innerHTML = "";
    gridMaker(slider.value);
  });
}

function inkColor() {
  let ink = color.value;
  return ink.toString();
}

function etching(cells) {
  cells.addEventListener("mouseenter", (e) => {
    let ink = inkColor();
    cells.style.backgroundColor = ink;
    console.log(e);
  });
}
(() => {
  sliderToGridValue();
})();

let cells = document.querySelectorAll(".cells");
cells.forEach((cell) => {
  let ink = inkColor();
  console.log(ink);
  etching(cell);
});

//fix color and draw function
