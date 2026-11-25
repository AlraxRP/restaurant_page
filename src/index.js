import "./styles.css";

import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { aboutDiv } from "./about.js"
import { contactDiv } from "./contact.js";

let content = document.querySelector("#content");
content.appendChild(homeDiv);

const handlers = {
    home: homeDiv,
    menu: menuDiv,
    about: aboutDiv,
    contact: contactDiv,
};

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        content.replaceChildren();
        content.appendChild(handlers[btn.id]);
    })
});

console.log("Test message");