export const body = document.querySelector("body");

export const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");

export const titleBar = document.createElement("div");
titleBar.classList.add("titleBar");
const title = document.createElement("h1");
title.classList.add("title");

title.textContent = "ETCH A SKETCH";
titleBar.appendChild(title);

export const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

export const slider = document.createElement("input");
slider.type = "range";
slider.min = "1";
slider.max = "100";
slider.value = "50";
slider.classList.add("slider");

export const colorAndClearContainer = document.createElement("div");
colorAndClearContainer.classList.add("cacc");

export const color = document.createElement("input");
color.type = "color";
color.classList.add("color");

export const clear = document.createElement("button");
clear.textContent = "CLEAR";
