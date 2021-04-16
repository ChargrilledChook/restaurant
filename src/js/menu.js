import { menuItem } from './menuItem'

function createMenu() {
  const container = document.createElement('div');
  container.classList.add('menu-container')
  const title = document.createElement('h2');
  title.textContent = 'Our Menu'
  container.append(title)

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  addProducts(menuGrid, products);
  container.append(menuGrid)
  return container;
}

function addProducts(container, products){
  products.forEach(product => container.append(product));

 return container;
}

const product1 = new menuItem('Coolio', 'burger-img.jpg').card
const product2 = new menuItem('Test', 'burger2.png').card
const product3 = new menuItem('Borg', 'burger2.png').card
const product4 = new menuItem('Noice', 'burger2.png').card
const product5 = new menuItem('Yeah yeah yeah', 'burger2.png').card
const product6 = new menuItem('Test', 'burger2.png').card

const products = [product1, product2, product3, product4, product5, product6]

function createProducts(rawProducts) {
  return rawProducts.map(product => new menuItem(...product).card)
}

const rawProductData = [
  ['Coolio', 'burger-img.jpg'],
  ['Bean burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m8', 'burger-img.jpg']
]
export { createMenu };
