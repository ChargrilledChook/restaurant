import { createHeader } from "./header"
import { createFooter } from "./footer"



export function intialiseSite() {
  const header = createHeader();
  const footer = createFooter();
  const main = createMain();
  const siteContainer = document.querySelector("#content");
  siteContainer.append(header, main, footer);
}

function createMain() {
  const main = document.createElement('div');
  main.className = 'main';
  return main;
};
