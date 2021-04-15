import { createLanding } from "./js/landing"
import { createMenu } from "./js/menu"
import { createContact } from "./js/contact"
// Create header + add event listners

// Create Footer

// Load default module - home page

const mainContent = document.querySelector(".dynamic-load");

mainContent.append(createLanding());

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

function clearDom() {
  mainContent.innerHTML = '';
}

home.addEventListener('click', ()=>{
  clearDom();
  mainContent.append(createLanding());
});

menu.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(createMenu());
});

contact.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(createContact());
});
