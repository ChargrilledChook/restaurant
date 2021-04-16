
function createContact() {
  const container = document.createElement('div')
  container.classList.add('contact-container')
  container.textContent = contactDetails;

  return container;
}

export { createContact }


const contactDetails = 'You can call me on my telephone. Or you can call me Mr Telephone.'
