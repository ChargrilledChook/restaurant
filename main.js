(()=>{"use strict";class e{constructor(e,t){this.imgPath="../src/assets/",this.name=e,this.imageSrc=this.imgPath+t}get card(){return this._createCard()}_createCard(){const e=document.createElement("div");e.classList.add("product");const t=document.createElement("div");t.classList.add("img-ph");const n=document.createElement("img");n.src=this.imageSrc,t.append(n);const c=document.createElement("h3");return c.textContent=this.name,e.append(t,c),e}}const t=new class{constructor(e,t,n){this.title=e,this.copy=n,this.imgPath=t}get page(){return this.createLanding()}createLanding(){const e=document.createElement("div");e.classList.add("landing");const t=document.createElement("div"),n=document.createElement("img");n.src=this.imgPath,t.append(n);const c=document.createElement("div");c.classList.add("landing-info");const r=document.createElement("h2");r.textContent=this.title,c.append(r);const a=document.createElement("div");return a.textContent=this.copy,c.append(a),e.append(t),e.append(c),e}}("We all love BORGER!!","../src/assets/burger-img.jpg"," BORGER borger BORGER borger BORGER borger BORGER borger BORGER borger BORGER borger"),n=new class{constructor(e){this.rawProducts=e}get page(){return this._createMenu()}_createMenu(){const e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("h2");t.textContent="Our Menu",e.append(t);const n=document.createElement("div");n.classList.add("menu-grid");const c=this._createProducts(this.rawProducts);return this._addProducts(n,c),e.append(n),e}_addProducts(e,t){return t.forEach((t=>e.append(t))),e}_createProducts(){return this.rawProducts.map((t=>new e(...t).card))}}([["Classy borg","burger-img.jpg"],["Sexy burger","burger2.png"],["Borg","burger2.png"],["Noice","burger-img.jpg"],["Yeah yeah yeah","burger2.png"],["Sick m888","burger-img.jpg"]]),c=new class{constructor(e,t,n,c){this.phone=e,this.mail=t,this.address=n,this.map=c}get page(){return this._createContact()}_createContact(){const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("h2");t.textContent="Contact Us";const n=this._createBasicElement("Phone",this.phone),c=this._createBasicElement("E-mail",this.mail),r=this._createBasicElement("Address",this.address),a=this._createMap(this.map);return e.append(t,n,c,r,a),e}_createBasicElement(e,t){const n=document.createElement("div"),c=document.createElement("h3"),r=document.createElement("div");return c.textContent=e,r.textContent=t,n.append(c,r),n}_createMap(){const e=document.createElement("iframe");return e.src=this.map,e.width="600",e.height="450",e.loading="lazy",e.style.border="0",e}}(" 0267 XXX XXX","eatBORGER@borgers.com","123 BORGER Way BORGER Town","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau");!function(){const e=function(){const e=document.createElement("header");e.classList.add("site-header");const t=document.createElement("div");t.textContent="Eat Borger";const n=document.createElement("nav"),c=document.createElement("div");c.textContent="Home",c.id="home";const r=document.createElement("div");r.textContent="Menu",r.id="menu";const a=document.createElement("div");return a.textContent="Contact",a.id="contact",n.append(c,r,a),e.append(t,n),e}(),t=function(){const e=document.createElement("footer");e.classList.add("site-footer");const t=document.createTextNode("By Chook");return e.append(t),e}(),n=function(){const e=document.createElement("div");return e.className="main",e}();document.querySelector("#content").append(e,n,t)}();const r=document.querySelector(".main"),a=document.querySelector("#home"),s=document.querySelector("#menu"),o=document.querySelector("#contact");function d(){r.innerHTML=""}r.append(t.page),a.addEventListener("click",(()=>{d(),r.append(t.page)})),s.addEventListener("click",(()=>{d(),r.append(n.page)})),o.addEventListener("click",(()=>{d(),r.append(c.page)}))})();