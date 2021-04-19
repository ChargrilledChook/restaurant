import { createHeader } from "./header"
import { createFooter } from "./footer"
import { landing } from "./data"


export function intialiseSite() {
  const header = createHeader();

  const main = createMain();
  main.append(landing.page)

  const footer = createFooter();

  const siteContainer = document.querySelector("#content");
  siteContainer.append(header, main, footer);
}

function createMain() {
  const main = document.createElement('div');
  main.className = 'main';
  return main;
};
