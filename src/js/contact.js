
function createContact() {
  const container = document.createElement('div')
  container.classList.add('contact-container')

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';

  const phone = createBasicElement(phoneTitle, phoneContent);
  const email = createBasicElement(mailTitle, mailContent);
  const address = createBasicElement(addTitle, addContent);

  container.append(heading, phone, email, address);

  return container;
}

function createBasicElement(title, content){
  const container = document.createElement('div');
  const titleElt = document.createElement('h3');
  const contentElt = document.createElement('div');

  titleElt.textContent = title;
  contentElt.textContent = content;

  container.append(titleElt, contentElt);

  return container;
}

const phoneTitle = 'Phone';
const phoneContent = ' 0267 XXX XXX'

const mailTitle = 'E-mail';
const mailContent = 'eatBORGER@borgers.com';

const addTitle = 'Address';
const addContent = '123 BORGER Way BORGER Town';

export { createContact }
