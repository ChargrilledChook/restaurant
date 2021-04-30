// Top level file of the app. Here we import instantiated classes / HTML components from data
// and simply add query selectors and listeners to enable the page switching logic. Initial load
// is handled by initaliseSite.

import "./style.scss";
import "./test.css";
import { landing, menu, contact } from "./js/data";
import { intialiseSite } from "./js/initialiseSite";

intialiseSite();

const mainContent = document.querySelector(".main");
const landingBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

landingBtn.addEventListener("click", () => {
  clearDom();
  mainContent.append(landing.page);
});

menuBtn.addEventListener("click", () => {
  clearDom();
  mainContent.append(menu.page);
});

contactBtn.addEventListener("click", () => {
  clearDom();
  mainContent.append(contact.page);
});

function clearDom() {
  mainContent.innerHTML = "";
}
