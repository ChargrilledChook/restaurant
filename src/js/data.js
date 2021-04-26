import { Landing } from "./landing.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

// General
const imgPath = "./assets/";

// Header =======
// TODO

// Footer =======
// TODO

// Landing ======
const landingTitle = "It's burger time!";
const heroImage = "burgerVec.png";
const landingImg = imgPath + heroImage;
const landingCopy =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const landing = new Landing(landingTitle, landingImg, landingCopy);

// Menu =========
const testData = [
  ["Classy borg", "burger-img.jpg"],
  ["Sexy burger", "burger2.png"],
  ["Borg", "burger2.png"],
  ["Noice", "burger-img.jpg"],
  ["Yeah yeah yeah", "burger2.png"],
  ["Sick m888", "burger-img.jpg"],
  ["Classy borg", "burger-img.jpg"],
  ["Sexy burger", "burger2.png"],
  ["Borg", "burger2.png"],
  ["Noice", "burger-img.jpg"],
  ["Yeah yeah yeah", "burger2.png"],
  ["Sick m888", "burger-img.jpg"],
  ["Classy borg", "burger-img.jpg"],
  ["Sexy burger", "burger2.png"],
  ["Borg", "burger2.png"],
  ["Noice", "burger-img.jpg"],
  ["Yeah yeah yeah", "burger2.png"],
  ["Sick m888", "burger-img.jpg"],
  ["Classy borg", "burger-img.jpg"],
  ["Sexy burger", "burger2.png"],
  ["Borg", "burger2.png"],
  ["Noice", "burger-img.jpg"],
  ["Yeah yeah yeah", "burger2.png"],
  ["Sick m888", "burger-img.jpg"],
];

const rawProductData = [
  ["Don't call it the Shrimp Burger", "burg1.png"],
  ["Feeling Adventurous Burger", "burg2.png"],
  ["The Double Bypass Burger", "burg3.png"],
  ["Why Did It Cross the Road Burger", "burg4.png"],
  ["Doesn't Infringe on Copyright Burger", "burg5.png"],
  ["Much Felafel About Nothing Burger", "burg6.png"],
  ["Looks Familiar Burger", "burg7.png"],
  ["The Eldritch Horror Burger", "burg8.png"],
  ["Three's a Crowd Burger", "burg9.png"],
  ["Pile on the Poulet Burger", "burg10.png"],
];
const menu = new Menu(rawProductData, imgPath);

// Contact ======

const phone = " 0267 XXX XXX";
const mail = "eatBORGER@borgers.com";
const hours = "9 - 5 on the 32nd of every month";
const address = "123 BORGER Way BORGER Town";
const map =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau";
const contact = new Contact(phone, mail, hours, address, map);

export { landing, menu, contact };
