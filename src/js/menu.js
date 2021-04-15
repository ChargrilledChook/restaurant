function createMenu() {
  const container = document.createElement('div');
  container.classList.add('landing');

  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  img.src = imgPath;
  imageContainer.append(img);

  const info = document.createElement('div');
  info.classList.add('landing-info')
  const heading = document.createElement('h2')
  heading.textContent = 'How about chicken?'
  info.append(heading);
  const infoText = document.createElement('div');
  infoText.textContent = placeholderText;
  info.append(infoText)

  container.append(imageContainer);
  container.append(info);

  return container;
}

const imgPath = '../src/assets/burger2.png';
const placeholderText = ' 🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔'
export { createMenu };
