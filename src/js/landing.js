// Landing page component. Needs a page heading, file name for the hero imgage and two strings / paragraphs of copy in
// in an array ie ['copy1', 'copy2']. The copy implementation is a bit stiff and is a good candidate for refactoring but
// serves it's job fine for now

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

    // If this grows any bigger it should be refactored  to something more programmatic but acceptable for now.
    // Currently hardcoded this way to present body copy in two paragraphs
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
