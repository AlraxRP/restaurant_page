import "./styles.css";

import { homeDiv } from "./home.js";

let content = document.querySelector("#content");
content.appendChild(homeDiv);

console.log("Test message");