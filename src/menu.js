export let menuDiv = document.createElement("div");

let menuHeadline = document.createElement("h1");
menuHeadline.textContent = "Menu";

let menuContainer = document.createElement("div");

let menuCard = document.createElement("div");

let productName = document.createElement("h2");
productName.textContent = "Glazed donut";

let productImage = document.createElement("p");
productImage.textContent = "Image";

let productInfoContainer = document.createElement("div");

let productInfo = document.createElement("p");
productInfo.textContent = "Donut coated with a thin sugar glaze."

let productPrice = document.createElement("p");
productPrice.textContent = "$1.99";

productInfoContainer.appendChild(productInfo);
productInfoContainer.appendChild(productPrice);

menuCard.appendChild(productName);
menuCard.appendChild(productImage);
menuCard.appendChild(productInfoContainer);


menuContainer.appendChild(menuCard);


menuDiv.appendChild(menuHeadline);
menuDiv.appendChild(menuContainer);