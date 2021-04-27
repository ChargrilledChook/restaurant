import { Landing } from "./landing.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";
import { createHeader } from "./header.js";
import { createFooter } from "./footer.js";

// General
const imgPath = "./assets/";

// Header =======
const title = "Eat Burger";
const header = createHeader(title);

// Footer =======
const citation =
  "Created 2021 by Dylan using vanilla Javascript. View my Code on Github.";
const footer = createFooter(citation);

// Landing ======
const landingTitle = "It's burger time!";
const heroImage = "burgerVec.png";
const landingImg = imgPath + heroImage;
const landingCopy = [
  "Eat burger is a retro-futuristic, yet modern take on traditional burger based fine dining. Come in and enjoy our hand selected, de-constructed and re-constructed locally havested sumptuous compositions. Our thrice activated twice distilled beef patties will have your mouth watering.",
  "Call now or order online and begin your ascent to burger nirvana. Any time is a good time to Eat Burger. Kids eat free!",
];
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
  ["Much Falafel About Nothing Burger", "burg6.png"],
  ["Looks Familiar Burger", "burg7.png"],
  ["The Eldritch Horror Burger", "burg8.png"],
  ["Three's a Crowd Burger", "burg9.png"],
  ["Pile on the Poulet Burger", "burg10.png"],
];
const menu = new Menu(rawProductData, imgPath);

// Contact ======

const phone = " 0267 XXX XXX";
const mail = "eatBurger@borgers.com";
const hours = "9 - 5 on the 32nd of every month";
const address = "123 Burger Way Borger Town";
const map =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau";
const contact = new Contact(phone, mail, hours, address, map);

export { header, landing, menu, contact, footer };
