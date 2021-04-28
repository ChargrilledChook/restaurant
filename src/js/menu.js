// Menu component. imgPath is the asset directory relative to index.html. rawProducts expects a 2D array in the format
// [[productTitle, productFileName], etc]. The class has a method to convert these into menuItem objects and add each
// to the final product.  See data.js for examples.

import { menuItem } from "./menuItem";

export class Menu {
  constructor(rawProducts, imgPath) {
    this.rawProducts = rawProducts;
    this.path = imgPath;
  }

  get page() {
    return this._createMenu();
  }

  _createMenu() {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const title = document.createElement("h2");
    title.textContent = "Our Menu";
    container.append(title);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    const products = this._createProducts(this.rawProducts);
    this._addProducts(menuGrid, products);
    container.append(menuGrid);
    return container;
  }

  _addProducts(container, products) {
    products.forEach((product) => container.append(product));

    return container;
  }

  _createProducts() {
    return this.rawProducts.map(
      (product) => new menuItem(...product, this.path).card
    );
  }
}
