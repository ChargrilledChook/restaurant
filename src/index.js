import { landing, menu, contact } from "./js/data"
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
  mainContent.append(contact.page);
});

function clearDom() {
  mainContent.innerHTML = '';
};
