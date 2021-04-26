/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data */ \"./src/js/data.js\");\n/* harmony import */ var _js_initialiseSite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/initialiseSite */ \"./src/js/initialiseSite.js\");\n\n\n\n(0,_js_initialiseSite__WEBPACK_IMPORTED_MODULE_1__.intialiseSite)();\n\nconst mainContent = document.querySelector('.main')\nconst landingBtn = document.querySelector('#home')\nconst menuBtn = document.querySelector('#menu')\nconst contactBtn = document.querySelector('#contact')\n\nlandingBtn.addEventListener('click', ()=> {\n  clearDom();\n  mainContent.append(_js_data__WEBPACK_IMPORTED_MODULE_0__.landing.page);\n});\n\nmenuBtn.addEventListener('click', ()=> {\n  clearDom();\n  mainContent.append(_js_data__WEBPACK_IMPORTED_MODULE_0__.menu.page);\n});\n\ncontactBtn.addEventListener('click', ()=> {\n  clearDom();\n  mainContent.append(_js_data__WEBPACK_IMPORTED_MODULE_0__.contact.page);\n});\n\nfunction clearDom() {\n  mainContent.innerHTML = '';\n};\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\n  constructor(phone, mail, hours, address, map) {\n    this.phone = phone;\n    this.mail = mail;\n    this.hours = hours;\n    this.address = address;\n    this.map = map;\n  }\n\n  get page() {\n    return this._createContact();\n  };\n\n  _createContact() {\n    const container = document.createElement('div')\n    container.classList.add('contact-container')\n\n    const heading = document.createElement('h2');\n    heading.textContent = 'Contact Us';\n\n    const phone = this._createBasicElement('Phone', this.phone);\n    const email = this._createBasicElement('E-mail', this.mail);\n    const address = this._createBasicElement('Address', this.address);\n    const hours = this._createBasicElement('Opening Hours', this.hours);\n    const map = this._createMap(this.map);\n    address.append(map)\n\n    container.append(heading, phone, email, hours, address);\n\n    return container;\n  }\n\n  _createBasicElement(title, content){\n    const container = document.createElement('div');\n    const titleElt = document.createElement('h3');\n    const contentElt = document.createElement('div');\n\n    titleElt.textContent = title;\n    contentElt.textContent = content;\n\n    container.append(titleElt, contentElt);\n\n    return container;\n  }\n\n  _createMap() {\n    const container = document.createElement('iframe')\n    container.src = this.map;\n    container.width = '600';\n    container.height = '450';\n    // container.loading = 'lazy';\n    container.style.border = '0';\n\n    return container;\n  }\n};\n\n\n//# sourceURL=webpack://restaurant/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"landing\": () => (/* binding */ landing),\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ \"./src/js/landing.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/js/contact.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n\n\n\n\n\n// General\nconst imgPath = \"./assets/\";\n\n// Header =======\nconst title = \"Eat Burger\";\nconst header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__.createHeader)(title);\n\n// Footer =======\n// TODO\n\n// Landing ======\nconst landingTitle = \"It's burger time!\";\nconst heroImage = \"burgerVec.png\";\nconst landingImg = imgPath + heroImage;\nconst landingCopy =\n  \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\";\nconst landing = new _landing_js__WEBPACK_IMPORTED_MODULE_0__.Landing(landingTitle, landingImg, landingCopy);\n\n// Menu =========\nconst testData = [\n  [\"Classy borg\", \"burger-img.jpg\"],\n  [\"Sexy burger\", \"burger2.png\"],\n  [\"Borg\", \"burger2.png\"],\n  [\"Noice\", \"burger-img.jpg\"],\n  [\"Yeah yeah yeah\", \"burger2.png\"],\n  [\"Sick m888\", \"burger-img.jpg\"],\n  [\"Classy borg\", \"burger-img.jpg\"],\n  [\"Sexy burger\", \"burger2.png\"],\n  [\"Borg\", \"burger2.png\"],\n  [\"Noice\", \"burger-img.jpg\"],\n  [\"Yeah yeah yeah\", \"burger2.png\"],\n  [\"Sick m888\", \"burger-img.jpg\"],\n  [\"Classy borg\", \"burger-img.jpg\"],\n  [\"Sexy burger\", \"burger2.png\"],\n  [\"Borg\", \"burger2.png\"],\n  [\"Noice\", \"burger-img.jpg\"],\n  [\"Yeah yeah yeah\", \"burger2.png\"],\n  [\"Sick m888\", \"burger-img.jpg\"],\n  [\"Classy borg\", \"burger-img.jpg\"],\n  [\"Sexy burger\", \"burger2.png\"],\n  [\"Borg\", \"burger2.png\"],\n  [\"Noice\", \"burger-img.jpg\"],\n  [\"Yeah yeah yeah\", \"burger2.png\"],\n  [\"Sick m888\", \"burger-img.jpg\"],\n];\n\nconst rawProductData = [\n  [\"Don't call it the Shrimp Burger\", \"burg1.png\"],\n  [\"Feeling Adventurous Burger\", \"burg2.png\"],\n  [\"The Double Bypass Burger\", \"burg3.png\"],\n  [\"Why Did It Cross the Road Burger\", \"burg4.png\"],\n  [\"Doesn't Infringe on Copyright Burger\", \"burg5.png\"],\n  [\"Much Falafel About Nothing Burger\", \"burg6.png\"],\n  [\"Looks Familiar Burger\", \"burg7.png\"],\n  [\"The Eldritch Horror Burger\", \"burg8.png\"],\n  [\"Three's a Crowd Burger\", \"burg9.png\"],\n  [\"Pile on the Poulet Burger\", \"burg10.png\"],\n];\nconst menu = new _menu_js__WEBPACK_IMPORTED_MODULE_1__.Menu(rawProductData, imgPath);\n\n// Contact ======\n\nconst phone = \" 0267 XXX XXX\";\nconst mail = \"eatBORGER@borgers.com\";\nconst hours = \"9 - 5 on the 32nd of every month\";\nconst address = \"123 BORGER Way BORGER Town\";\nconst map =\n  \"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau\";\nconst contact = new _contact_js__WEBPACK_IMPORTED_MODULE_2__.Contact(phone, mail, hours, address, map);\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/js/data.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter(){\n  const container = document.createElement('footer');\n  container.classList.add('site-footer')\n\n  const byline = document.createTextNode(author);\n  container.append(byline);\n\n  return container;\n}\n\nconst author = 'By Chook';\n\n\n//# sourceURL=webpack://restaurant/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader(restaurantTitle) {\n  const container = document.createElement(\"header\");\n  container.classList.add(\"site-header\");\n\n  const heading = document.createElement(\"div\");\n  heading.textContent = restaurantTitle;\n\n  const nav = document.createElement(\"nav\");\n\n  const navIcon = document.createElement(\"img\");\n  navIcon.src = \"./assets/menu_icon.svg\";\n\n  const home = document.createElement(\"a\");\n  home.href = \"#\";\n  home.textContent = \"Home\";\n  home.id = \"home\";\n\n  const menu = document.createElement(\"a\");\n  menu.href = \"#\";\n  menu.textContent = \"Menu\";\n  menu.id = \"menu\";\n\n  const contact = document.createElement(\"a\");\n  contact.href = \"#\";\n  contact.textContent = \"Contact\";\n  contact.id = \"contact\";\n\n  nav.append(navIcon, home, menu, contact);\n  container.append(heading, nav);\n\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/header.js?");

/***/ }),

/***/ "./src/js/initialiseSite.js":
/*!**********************************!*\
  !*** ./src/js/initialiseSite.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intialiseSite\": () => (/* binding */ intialiseSite)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\n\n\nfunction intialiseSite() {\n  const main = createMain();\n  main.append(_data__WEBPACK_IMPORTED_MODULE_1__.landing.page);\n\n  const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n\n  const siteContainer = document.querySelector(\"#content\");\n  siteContainer.append(_data__WEBPACK_IMPORTED_MODULE_1__.header, main, footer);\n}\n\nfunction createMain() {\n  const main = document.createElement(\"div\");\n  main.className = \"main\";\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/initialiseSite.js?");

/***/ }),

/***/ "./src/js/landing.js":
/*!***************************!*\
  !*** ./src/js/landing.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* binding */ Landing)\n/* harmony export */ });\nclass Landing {\n  constructor(title, imgPath, copy) {\n    this.title = title;\n    this.copy = copy;\n    this.imgPath = imgPath;\n  }\n\n  get page() {\n    return this.createLanding();\n  }\n\n  createLanding() {\n    const container = document.createElement('div');\n    container.classList.add('landing');\n\n    const imageContainer = document.createElement('div')\n    imageContainer.classList.add('img-container');\n    const img = document.createElement('img')\n    img.src = this.imgPath;\n    imageContainer.append(img);\n\n    const info = document.createElement('div');\n    info.classList.add('landing-info')\n\n    const heading = document.createElement('h2')\n    heading.textContent = this.title;\n\n    info.append(heading);\n    const infoText = document.createElement('div');\n    infoText.textContent = this.copy;\n    info.append(infoText)\n\n    container.append(imageContainer);\n    container.append(info);\n\n    return container;\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/landing.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem */ \"./src/js/menuItem.js\");\n\n\nclass Menu {\n  constructor(rawProducts, path) {\n    this.rawProducts = rawProducts;\n    this.path = path;\n  }\n\n  get page() {\n    return this._createMenu();\n  }\n\n  _createMenu() {\n    const container = document.createElement('div');\n    container.classList.add('menu-container');\n\n    const title = document.createElement('h2');\n    title.textContent = 'Our Menu';\n    container.append(title);\n\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menu-grid');\n\n    const products = this._createProducts(this.rawProducts)\n    this._addProducts(menuGrid, products);\n    container.append(menuGrid)\n    return container;\n  }\n\n  _addProducts(container, products){\n    products.forEach(product => container.append(product));\n\n   return container;\n  }\n\n  _createProducts() {\n    return this.rawProducts.map(product => new _menuItem__WEBPACK_IMPORTED_MODULE_0__.menuItem(...product, this.path).card);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/menuItem.js":
/*!****************************!*\
  !*** ./src/js/menuItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItem\": () => (/* binding */ menuItem)\n/* harmony export */ });\nclass menuItem {\n  constructor(name, imageSrc, imgPath) {\n    this.imgPath = imgPath;\n    this.name = name;\n    this.imageSrc = this.imgPath + imageSrc;\n  }\n\n  get card() {\n    return this._createCard();\n  }\n\n  _createCard(){\n    const container = document.createElement('div')\n    container.classList.add('product')\n\n    const imageBox = document.createElement('div');\n    imageBox.classList.add('img-ph')\n\n    const image = document.createElement('img')\n    image.src = this.imageSrc;\n    imageBox.append(image)\n\n    const title = document.createElement('h3');\n    title.textContent = this.name;\n\n    container.append(imageBox, title);\n\n    return container;\n  }\n};\n\n\n//# sourceURL=webpack://restaurant/./src/js/menuItem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;