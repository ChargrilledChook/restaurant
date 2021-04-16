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

function createProducts(rawProducts) {
  return rawProducts.map(product => new menuItem(...product).card);
}

const rawProductData = [
  ['Coolio', 'burger-img.jpg'],
  ['Bean burger', 'burger2.png'],
  ['Borg', 'burger2.png'],
  ['Noice', 'burger-img.jpg'],
  ['Yeah yeah yeah', 'burger2.png'],
  ['Sick m888', 'burger-img.jpg']
];

const products = createProducts(rawProductData)

export { createMenu };
