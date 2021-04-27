export class Contact {
  constructor(phone, mail, hours, address, map) {
    this.phone = phone;
    this.mail = mail;
    this.hours = hours;
    this.address = address;
    this.map = map;
  }

  get page() {
    return this._createContact();
  }

  _createContact() {
    const container = document.createElement("div");
    container.classList.add("contact-container");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    const phone = this._createBasicElement("Phone", this.phone);
    const email = this._createBasicElement("E-mail", this.mail);
    const address = this._createBasicElement("Address", this.address);
    const hours = this._createBasicElement("Opening Hours", this.hours);
    const map = this._createMap(this.map);
    address.append(map);

    container.append(heading, phone, email, hours, address);

    return container;
  }

  _createBasicElement(title, content) {
    const container = document.createElement("div");
    const titleElt = document.createElement("h3");
    const contentElt = document.createElement("div");

    titleElt.textContent = title;
    contentElt.textContent = content;

    container.append(titleElt, contentElt);

    return container;
  }

  _createMap() {
    const container = document.createElement("iframe");
    container.src = this.map;
    container.width = "600";
    container.height = "450";
    container.style.border = "0";

    return container;
  }
}
