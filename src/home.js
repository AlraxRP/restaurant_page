export let homeDiv = document.createElement("div");

import moonsDonuts from "./moons-donut.jpeg"; 

let headlineDiv = document.createElement("div");

let slogan = document.createElement("h2");
slogan.textContent = "Satisfy your hunger!"

let subText = document.createElement("h2");
subText.textContent = "Best donuts in RC since 1938."


let menuFavoritesDiv = document.createElement("div");

let menuFavoritesTitle = document.createElement("h3");
menuFavoritesTitle.textContent = "Fan favorites";

let productContainer = document.createElement("div");

let imageText = document.createElement("img");
imageText.src = moonsDonuts;

let infoContainer = document.createElement("div");

let productName = document.createElement("p");
productName.textContent = "Glazed donut";

let description = document.createElement("p");
description.textContent = "Donut coated with a thin sugar glaze."


headlineDiv.appendChild(slogan);
headlineDiv.appendChild(subText);

infoContainer.appendChild(productName);
infoContainer.appendChild(description);

productContainer.appendChild(imageText);
productContainer.appendChild(infoContainer);

menuFavoritesDiv.appendChild(menuFavoritesTitle);
menuFavoritesDiv.appendChild(productContainer);

homeDiv.appendChild(headlineDiv);
homeDiv.appendChild(menuFavoritesDiv);
