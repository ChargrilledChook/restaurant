function createHeader(){
  const container = document.createElement('header');
  container.classList.add('site-header');

  const heading = document.createTextNode(restaurantTitle)

  const nav = document.createElement('nav');

  const home = document.createTextNode('Home');
  home.id = 'home';

  const menu = document.createTextNode('Menu');
  menu.id = 'menu';

  const contact = document.createTextNode('Contact');
  contact.id = 'contact';

  nav.append(home, menu, contact);
  container.append(heading, nav);

  return container;
}

const restaurantTitle = 'Eat Borger';

export { createHeader }
