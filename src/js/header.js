// Creates a header component. This is probably large enough now to either be refactored to a
// class per other components and / or broken up into some smaller helper functions. This is one place
// where some things are hardcoded (ie the pages) but it's highly unlikely to change. Could be extracted to
// be extra thorough, but probably not worth it at this stage.

export function createHeader(restaurantTitle) {
  const container = document.createElement("header");
  container.classList.add("site-header");

  const heading = document.createElement("div");
  heading.textContent = restaurantTitle;

  const nav = document.createElement("nav");

  const navIcon = document.createElement("img");
  navIcon.src = "./assets/menu_icon.svg";

  const home = document.createElement("a");
  home.href = "#";
  home.textContent = "Home";
  home.id = "home";

  const menu = document.createElement("a");
  menu.href = "#";
  menu.textContent = "Menu";
  menu.id = "menu";

  const contact = document.createElement("a");
  contact.href = "#";
  contact.textContent = "Contact";
  contact.id = "contact";

  nav.append(navIcon, home, menu, contact);
  container.append(heading, nav);

  return container;
}
