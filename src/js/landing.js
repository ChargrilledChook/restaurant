function createLanding() {
  const container = document.createElement('div');
  container.classList.add('landing');
  const image = document.createElement('div')
  image.textContent = 'Img goes here';
  const info = document.createElement('div');
  info.classList.add('landing-info')
  const heading = document.createElement('h2')
  heading.textContent = 'Do you love BORGER?'
  info.append(heading);
  const infoText = document.createElement('div');
  infoText.textContent = 'Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger Borger'
  info.append(infoText)
  container.append(image);
  container.append(info);

  return container;
}

const test = 'Test test test test test test'

export { createLanding };
