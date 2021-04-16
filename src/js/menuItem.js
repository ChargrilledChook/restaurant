class menuItem {
  constructor(name, imageSrc) {
    this.name = name;
    this.imageSrc = imageSrc;
  }

  get card() {
    return this._createCard();
  }

  _createCard(){
    const container = document.createElement('div')
    container.classList.add('product')

    const imageBox = document.createElement('div');
    imageBox.classList.add('img-ph')

    const image = document.createElement('img')
    image.src = this.imageSrc;
    imageBox.append(image)

    const title = document.createElement('h3');
    title.textContent = this.name;

    container.append(imageBox, title);

    return container;
  }
}

export { menuItem }
