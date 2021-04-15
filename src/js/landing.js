function createLanding() {
  const container = document.createElement('div');
  container.classList.add('landing');

  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  img.src = imgPath;
  imageContainer.append(img);

  const info = document.createElement('div');
  info.classList.add('landing-info')
  const heading = document.createElement('h2')
  heading.textContent = headingText;
  info.append(heading);
  const infoText = document.createElement('div');
  infoText.textContent = infoTextText;
  info.append(infoText)

  container.append(imageContainer);
  container.append(info);

  return container;
}

const headingText = 'Do you love BORGER?';
const infoTextText = 'Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger'
const imgPath =  '../src/assets/burger-img.jpg';

export { createLanding };
