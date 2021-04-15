// function createContact() {
//   const container = document.createElement('div')

//   const textContent = document.createTextNode(contactDetails)
//   container.append(textContent)

//   return container;
// }

function createContact() {
  const container = document.createElement('div')
  container.classList.add('menu-container')
  container.innerHTML =
  `<div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div><div class="product"><div class="img-ph"></div><h3>Product</h3></div>`

  return container;
}

export { createContact }


const contactDetails = 'You can call me on my telephone. Or you can call me Mr Telephone.'


// Testing purposes only

const testHTML = `<div class="menu-container><div class="product"><div class="img-ph><h3>Product</h3></div></div></div>`
