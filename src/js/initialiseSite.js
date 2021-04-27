import { header, landing, footer } from "./data";

export function intialiseSite() {
  const main = createMain();
  main.append(landing.page);

  const siteContainer = document.querySelector("#content");
  siteContainer.append(header, main, footer);
}

function createMain() {
  const main = document.createElement("div");
  main.className = "main";
  return main;
}
