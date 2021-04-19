import { landing, menu } from "./js/data"
import { createContact } from "./js/contact"
import { intialiseSite } from "./js/initialiseSite"

intialiseSite();

const mainContent = document.querySelector('.main')
const landingBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const contactBtn = document.querySelector('#contact')
mainContent.append(landing.page);

landingBtn.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(landing.page);
});

menuBtn.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(menu.page);
});

contactBtn.addEventListener('click', ()=> {
  clearDom();
  mainContent.append(createContact());
});

function clearDom() {
  mainContent.innerHTML = '';
};
