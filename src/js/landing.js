class Landing {
  constructor(title, imgPath, copy) {
    this.title = title;
    this.copy = copy;
    this.imgPath = imgPath;
  }

  get page() {
    return this.createLanding();
  }

  createLanding() {
    const container = document.createElement('div');
    container.classList.add('landing');

    const imageContainer = document.createElement('div')
    const img = document.createElement('img')
    img.src = this.imgPath;
    imageContainer.append(img);

    const info = document.createElement('div');
    info.classList.add('landing-info')

    const heading = document.createElement('h2')
    heading.textContent = this.title;

    info.append(heading);
    const infoText = document.createElement('div');
    infoText.textContent = this.copy;
    info.append(infoText)

    container.append(imageContainer);
    container.append(info);

    return container;
  }
}

export { Landing };
