export let aboutDiv = document.createElement("div");

let aboutHeadline = document.createElement("h1");
aboutHeadline.textContent = "About";

let textContainer = document.createElement("div");
let aboutText = document.createElement("p");
aboutText.textContent = "Moon's Donuts was established in 1938 by Derek Moon. Moon's Donuts is a single-story donut shop located in Downtown Raccoon City.";

textContainer.appendChild(aboutText);

aboutDiv.appendChild(aboutHeadline);
aboutDiv.appendChild(textContainer);