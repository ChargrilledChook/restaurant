export class Landing {
  constructor(title, imgPath, copy) {
    this.title = title;
    this.copy = copy;
    this.imgPath = imgPath;
  }

  get page() {
    return this.createLanding();
  }

  // This is bordering on too big and should probably be broken down into separate helper functions
  createLanding() {
    const container = document.createElement("div");
    container.classList.add("landing");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.src = this.imgPath;
    imageContainer.append(img);

    const info = document.createElement("div");
    info.classList.add("landing-info");

    const heading = document.createElement("h2");
    heading.textContent = this.title;

    // If this grows any bigger it should be refactored  to something more programmatic but acceptable for now
    info.append(heading);
    const copy0 = document.createElement("div");
    copy0.textContent = this.copy[0];
    const copy1 = document.createElement("div");
    copy1.textContent = this.copy[1];
    info.append(copy0, copy1);

    container.append(imageContainer);
    container.append(info);

    return container;
  }
}
