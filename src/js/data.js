import { Landing } from './landing.js'
import { Menu } from './menu.js'
import { Contact } from './contact.js'

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
  ['Sick m888', 'burger-img.jpg'],
  ['Classy borg', 'burger-img.jpg'],
  ['Sexy burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m888', 'burger-img.jpg'],
  ['Classy borg', 'burger-img.jpg'],
  ['Sexy burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m888', 'burger-img.jpg'],
  ['Classy borg', 'burger-img.jpg'],
  ['Sexy burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m888', 'burger-img.jpg']
];
const menu = new Menu(rawProductData);

// Contact ======

const phone = ' 0267 XXX XXX'
const mail = 'eatBORGER@borgers.com';
const address = '123 BORGER Way BORGER Town';
const map = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau';
const contact = new Contact(phone, mail, address, map)

export { landing, menu, contact }
