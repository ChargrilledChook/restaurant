// Helper class for the menu component. Name is name of product as it appears on the site,
// imgSrc is the name of the file ie burger.png and path is the directory relative
// to index.html where images are stored.

export class menuItem {
  constructor(name, imageSrc, imgPath) {
    this.imgPath = imgPath;
    this.name = name;
    this.imageSrc = this.imgPath + imageSrc;
  }

  get card() {
    return this._createCard();
  }

  // REVIEW - Slightly large and should probably be broken down into smaller helper functions
  _createCard() {
    const container = document.createElement("div");
    container.classList.add("product");

    const imageBox = document.createElement("div");
    imageBox.classList.add("img-ph");

    const image = document.createElement("img");
    image.src = this.imageSrc;
    imageBox.append(image);

    const title = document.createElement("h3");
    title.textContent = this.name;

    container.append(imageBox, title);

    return container;
  }
}
