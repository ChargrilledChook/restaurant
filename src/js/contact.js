
function createContact() {
  const container = document.createElement('div')
  container.classList.add('contact-container')

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';

  // const map = document.createElement('div');
  // map.innerHTML = mapData;

  const map = createMap(mapUrl);
  const phone = createBasicElement(phoneTitle, phoneContent);
  const email = createBasicElement(mailTitle, mailContent);
  const address = createBasicElement(addTitle, addContent);

  container.append(heading, phone, email, address, map);

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

function createMap(url) {
  const container = document.createElement('iframe')
  container.src = url;
  container.width = '600';
  container.height = '450';
  container.loading = 'lazy';
  container.style.border = '0';

  return container;
}

const phoneTitle = 'Phone';
const phoneContent = ' 0267 XXX XXX'

const mailTitle = 'E-mail';
const mailContent = 'eatBORGER@borgers.com';

const addTitle = 'Address';
const addContent = '123 BORGER Way BORGER Town';

const mapData = '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59000.70533535844!2d9.285668941264133!3d56.663472316254534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborger!5e0!3m2!1sen!2sau!4v1618795242001!5m2!1sen!2sau'
export { createContact }
