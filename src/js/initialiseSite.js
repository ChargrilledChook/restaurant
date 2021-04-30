// This script simply boostraps the loading of the site, and is intended to be run once.
// This way the header and footer are only loaded once, and we create the main div where we dynamically
// load the other pages. The landing page is also loaded here for convenience.

import { header, landing, footer } from "./data";

export function intialiseSite() {
  const main = createMain();
  main.append(landing.page);

  const siteContainer = document.createElement("div");
  siteContainer.id = "content";
  document.body.append(siteContainer);
  siteContainer.append(header, main, footer);
}

function createMain() {
  const main = document.createElement("div");
  main.className = "main";
  return main;
}
