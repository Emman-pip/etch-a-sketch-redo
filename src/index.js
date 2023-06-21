import {
  mainContainer,
  body,
  titleBar,
  gridContainer,
  slider,
  color,
  clear,
  colorAndClearContainer,
  mainContainerFr,
} from "./domElements.js";
import "./style.css";

(function DomPlacement() {
  body.appendChild(titleBar);
  body.appendChild(mainContainer);
  mainContainer.appendChild(gridContainer);
  mainContainer.appendChild(slider);
  mainContainer.appendChild(colorAndClearContainer);
  colorAndClearContainer.appendChild(color);
  colorAndClearContainer.appendChild(clear);
})();

function gridMaker(value) {
  gridContainer.innerHTML = "";
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
  useEtchingAndInk();
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

function reset(cells) {
  clear.addEventListener("click", () => {
    cells.style.backgroundColor = "#b6b65a";
  });
}

function etching(cells) {
  reset(cells);
  cells.addEventListener("mouseenter", () => {
    let ink = inkColor();
    cells.style.backgroundColor = ink;
  });
}

function useEtchingAndInk() {
  let cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    let ink = inkColor();
    console.log(ink);
    etching(cell);
  });
}
(() => {
  sliderToGridValue();
  window.addEventListener("resize", () => sliderToGridValue());
})();
