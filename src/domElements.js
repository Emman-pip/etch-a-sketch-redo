export const body = document.querySelector("body");

export const titleBar = document.createElement("div");
const title = document.createElement("h1");

title.textContent = "ETCH A SKETCH";
titleBar.appendChild(title);

export const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

export const slider = document.createElement("input");
slider.type = "range";
slider.min = "1";
slider.max = "100";
slider.value = "50";

export const color = document.createElement("input");
color.type = "color";
