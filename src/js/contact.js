function createContact() {
  const container = document.createElement('div')

  const textContent = document.createTextNode(contactDetails)
  container.append(textContent)

  return container;
}

export { createContact }


const contactDetails = 'You can call me on my telephone. Or you can call me Mr Telephone.'
