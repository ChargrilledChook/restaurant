function createMenu() {
  const container = document.createElement('div');
  container.classList.add('landing');

  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  img.src = '../src/assets/burger-img.jpg'
  imageContainer.append(img);

  const info = document.createElement('div');
  info.classList.add('landing-info')
  const heading = document.createElement('h2')
  heading.textContent = 'How about chicken?'
  info.append(heading);
  const infoText = document.createElement('div');
  infoText.textContent = test;
  info.append(infoText)

  container.append(imageContainer);
  container.append(info);

  return container;
}

const test = 'Test test test test test test'

export { createMenu };
