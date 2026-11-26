export let contactDiv = document.createElement("div");

let contactHeadline = document.createElement("h1");
contactHeadline.textContent = "Contact";

let contactsContainer = document.createElement("div");

let contactCard = document.createElement("div");
let contactPic = document.createElement("p");
contactPic.textContent = "image";
let contactInfo = document.createElement("div");
let contactName = document.createElement("h2");
contactName.textContent = "Derek Moon";
let contactPhone = document.createElement("p");
contactPhone.textContent = "12394333";
let contactEMail = document.createElement("p");
contactEMail.textContent = "Derek_Moon@mail.com";

contactInfo.appendChild(contactName);
contactInfo.appendChild(contactPhone);
contactInfo.appendChild(contactEMail);

contactCard.appendChild(contactPic);
contactCard.appendChild(contactInfo);

contactsContainer.appendChild(contactCard);


contactDiv.appendChild(contactHeadline);
contactDiv.appendChild(contactsContainer);