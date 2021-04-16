import { createLanding } from "./js/landing"
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

function clearDom() {
  mainContent.innerHTML = '';
};

let test = new menuItem('Coolio', 'burger-img.jpg')
let test2 = new menuItem('Test', 'burger2.png')

document.body.append(test.card, test2.card)
