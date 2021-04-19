import { landing } from "./data"
import { createHeader } from "./header"
import { createFooter } from "./footer"


function createMain() {
  const main = document.createElement('div');
  main.className = 'main';
  main.append(landing.page);
  return main;
}

function intialiseSite() {
  const header = createHeader();
  const footer = createFooter();
  const main = createMain();
  const siteContainer = document.querySelector("#content");
  siteContainer.append(header, main, footer);
}

export { intialiseSite }
