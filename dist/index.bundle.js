(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const o=i},315:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,'html{--mainColour: #c90eb0;--heading1: "Ultra", serif;--heading2: "Bebas Neue", Arial, sans-serif;--bodyCopy: "Roboto", Arial, sans-serif}body{margin:0;padding:0;font-size:2rem;font-family:var(--bodyCopy)}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline 5px}h2{font-family:var(--heading2);font-size:6rem}h3{font-family:var(--heading2)}#content{display:grid;grid-template-rows:auto 1fr auto;min-height:100vh}.site-header{font-family:var(--heading1);padding:2rem;background-color:var(--mainColour);color:#fff;display:flex;justify-content:space-between;border-bottom:1.5rem solid #000}.site-header>:first-child{font-size:7rem}.site-header>nav{display:flex;align-items:center;gap:3rem;font-size:3rem}.site-header>nav img{display:none}@media screen and (max-width: 1000px){.site-header>:first-child{font-size:4rem}.site-header nav{font-size:2rem}}@media screen and (max-width: 800px){.site-header{flex-direction:column;align-items:center;gap:2rem}.site-header nav{width:100%;justify-content:space-around}}.main{background-color:#fff;display:grid}.landing{display:flex;justify-content:space-around;align-items:center}.landing>*{padding:2rem}.landing .img-container{max-width:60rem;min-width:20rem}.landing img{max-width:100%;height:auto}.landing h2{margin:1.5rem 0;text-align:center}.landing-info{font-family:var(--bodyCopy);font-size:2rem;max-width:50rem;text-align:justify}.landing-info>div{margin-bottom:1.5rem}@media screen and (max-width: 800px){.landing{flex-direction:column;justify-content:flex-start}}.menu-container{margin-bottom:8rem}.menu-container h2{text-align:center}.menu-grid{padding:0 8rem;display:grid;grid-gap:10rem;grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr))}.product{display:flex;flex-direction:column;align-items:center;gap:2rem;transition:.5s}.product:hover{cursor:pointer;transition:1s;transform:scale(1.3)}.product h3{margin:0;text-align:center;font-family:var(--heading2);font-size:3rem}.img-ph{width:20rem;height:20rem}.img-ph>*{width:100%;height:100%}.contact-container{display:grid;gap:2rem;padding:4rem 4rem 0 4rem;grid-template-areas:"header map" "phone map" "mail map" "hours map"}.contact-container>h2{grid-area:header;margin-top:0;margin-bottom:2rem}.contact-container>h2::after{border:5px solid #000}.contact-container h3{margin:0}.contact-container>:nth-child(2){grid-area:phone}.contact-container>:nth-child(3){grid-area:mail}.contact-container>:nth-child(4){grid-area:hours}.contact-container>:nth-child(5){grid-area:map}.contact-container div{margin-bottom:3rem}.contact-container iframe{width:100%;max-height:100%}@media screen and (max-width: 800px){.contact-container{display:block}.contact-container iframe{min-height:300px}}.site-footer{font-family:var(--heading1);color:#fff;font-size:1.5rem;text-align:center;border-top:1.5rem solid #000;padding:2rem;background-color:var(--mainColour);display:flex;justify-content:center;align-items:center;gap:1rem}@media screen and (max-width: 800px){.site-footer{font-size:1.3rem}}',""]);const o=i},337:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"/* My own additions to normalise.css + general non styling related boilerplate / setup */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n",""]);const o=i},646:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"/*REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT REALLY BIG COMMENT */\n.site-header > nav > :first-child {\n  color: blue;\n}\n\n.site-header {\n  background-color: rgb(27, 126, 18);\n}\n",""]);const o=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],i=0;i<n.length;i++){var s=n[i],c=e.base?s[0]+e.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var m=a(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(o[m].references++,o[m].updater(u)):o.push({identifier:l,updater:g(u,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function m(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function u(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,p=0;function g(n,e){var t,r,i;if(e.singleton){var o=p++;t=h||(h=c(e)),r=m.bind(null,t,o,!1),i=m.bind(null,t,o,!0)}else t=c(e),r=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=s(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=c}}}},569:(n,e,t)=>{function r(){console.log("👀👀👀👀👀👀👀👀👀👀👀")}t.d(e,{Z:()=>r})}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(735);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=t(337);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=t(315);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=t(646);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;class s{constructor(n,e,t){this.imgPath=t,this.name=n,this.imageSrc=this.imgPath+e}get card(){return this._createCard()}_createCard(){const n=document.createElement("div");n.classList.add("product");const e=document.createElement("div");e.classList.add("img-ph");const t=document.createElement("img");t.src=this.imageSrc,e.append(t);const r=document.createElement("h3");return r.textContent=this.name,n.append(e,r),n}}const c=function(n){const e=document.createElement("header");e.classList.add("site-header");const t=document.createElement("div");t.textContent="Eat Burger";const r=document.createElement("nav"),i=document.createElement("img");i.src="./assets/menu_icon.svg";const o=document.createElement("a");o.href="#",o.textContent="Home",o.id="home";const a=document.createElement("a");a.href="#",a.textContent="Menu",a.id="menu";const s=document.createElement("a");return s.href="#",s.textContent="Contact",s.id="contact",r.append(i,o,a,s),e.append(t,r),e}(),d=function(n,e){const t=document.createElement("footer");t.classList.add("site-footer");const r=document.createTextNode("Created 2021 by Dylan. View my Code on"),i=document.createElement("a");i.href="https://github.com/ChargrilledChook/restaurant",i.target="blank";const o=document.createElement("img");return o.src="./assets/GitHub-Mark-Light-32px.png",i.append(o),t.append(r,i),t}(),l=new class{constructor(n,e,t){this.title=n,this.copy=t,this.imgPath=e}get page(){return this.createLanding()}createLanding(){const n=document.createElement("div");n.classList.add("landing");const e=document.createElement("div");e.classList.add("img-container");const t=document.createElement("img");t.src=this.imgPath,e.append(t);const r=document.createElement("div");r.classList.add("landing-info");const i=document.createElement("h2");i.textContent=this.title,r.append(i);const o=document.createElement("div");o.textContent=this.copy[0];const a=document.createElement("div");return a.textContent=this.copy[1],r.append(o,a),n.append(e),n.append(r),n}}("It's burger time!","./assets/burgerVec.png",["Eat burger is a retro-futuristic yet modern take on traditional burger based fine dining. Come in and enjoy our hand selected, de-constructed and re-constructed locally havested sumptuous compositions. Our thrice activated twice distilled beef patties will have your mouth watering and your tastebuds dancing.","Call now or order online and begin your ascent to burger nirvana. Any time is a good time to Eat Burger. Kids eat free!"]),m=new class{constructor(n,e){this.rawProducts=n,this.path=e}get page(){return this._createMenu()}_createMenu(){const n=document.createElement("div");n.classList.add("menu-container");const e=document.createElement("h2");e.textContent="Our Menu",n.append(e);const t=document.createElement("div");t.classList.add("menu-grid");const r=this._createProducts(this.rawProducts);return this._addProducts(t,r),n.append(t),n}_addProducts(n,e){return e.forEach((e=>n.append(e))),n}_createProducts(){return this.rawProducts.map((n=>new s(...n,this.path).card))}}([["Don't call it the Shrimp Burger","burg1.png"],["Feeling Adventurous Burger","burg2.png"],["The Double Bypass Burger","burg3.png"],["Why Did It Cross the Road Burger","burg4.png"],["Doesn't Infringe on Copyright Burger","burg5.png"],["Much Falafel About Nothing Burger","burg6.png"],["Looks Familiar Burger","burg7.png"],["The Eldritch Horror Burger","burg8.png"],["Three's a Crowd Burger","burg9.png"],["Pile on the Poulet Burger","burg10.png"]],"./assets/"),u=new class{constructor(n,e,t,r,i){this.phone=n,this.mail=e,this.hours=t,this.address=r,this.map=i}get page(){return this._createContact()}_createContact(){const n=document.createElement("div");n.classList.add("contact-container");const e=document.createElement("h2");e.textContent="Contact Us";const t=this._createBasicElement("Phone",this.phone),r=this._createBasicElement("E-mail",this.mail),i=this._createBasicElement("Address",this.address),o=this._createBasicElement("Opening Hours",this.hours),a=this._createMap(this.map);return i.append(a),n.append(e,t,r,o,i),n}_createBasicElement(n,e){const t=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("div");return r.textContent=n,i.textContent=e,t.append(r,i),t}_createMap(){const n=document.createElement("iframe");return n.src=this.map,n.width="600",n.height="450",n.style.border="0",n}}(" 0267 XXX XXX","eatBurger@borgers.com","9 - 5 on the 32nd of every month","123 Burger Way Borger Town","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau");(0,t(569).Z)(),function(){const n=function(){const n=document.createElement("div");return n.className="main",n}();n.append(l.page);const e=document.createElement("div");e.id="content",document.body.append(e),e.append(c,n,d)}();const h=document.querySelector(".main"),p=document.querySelector("#home"),g=document.querySelector("#menu"),f=document.querySelector("#contact");function E(){h.innerHTML=""}p.addEventListener("click",(()=>{E(),h.append(l.page)})),g.addEventListener("click",(()=>{E(),h.append(m.page)})),f.addEventListener("click",(()=>{E(),h.append(u.page)}))})()})();