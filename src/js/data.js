import { Landing } from './landing.js'
import { Menu } from './menu.js'

// General
const imgPath = '../src/assets/'

// Landing ======
const landingTitle = 'We all love BORGER!!'
const landingImg = imgPath + 'burger-img.jpg';
const landingCopy = ' BORGER borger BORGER borger BORGER borger BORGER borger BORGER borger BORGER borger'
const landing = new Landing(landingTitle, landingImg, landingCopy);

// Menu =========
const rawProductData = [
  ['Classy borg', 'burger-img.jpg'],
  ['Sexy burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m888', 'burger-img.jpg']
];
const menu = new Menu(rawProductData);

// Contact ======
export { landing, menu }
