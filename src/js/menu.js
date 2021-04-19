import { menuItem } from './menuItem';

export class Menu {
  constructor(rawProducts) {
    this.rawProducts = rawProducts;
  }

  get page() {
    return this._createMenu();
  }

  _createMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const title = document.createElement('h2');
    title.textContent = 'Our Menu';
    container.append(title);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const products = this._createProducts(this.rawProducts)
    this._addProducts(menuGrid, products);
    container.append(menuGrid)
    return container;
  }

  _addProducts(container, products){
    products.forEach(product => container.append(product));

   return container;
  }

  _createProducts() {
    return this.rawProducts.map(product => new menuItem(...product).card);
  }
}
