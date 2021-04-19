import { landing } from "./js/data"
import { createMenu } from "./js/menu"
import { createContact } from "./js/contact"
import { intialiseSite } from "./js/initialiseSite"
import { menuItem } from "./js/menuItem"

intialiseSite();

const mainContent = document.querySelector('.main')
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

home.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(landing.page);
});

menu.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(createMenu());
});

contact.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(createContact());
});

function clearDom() {
  mainContent.innerHTML = '';
};
