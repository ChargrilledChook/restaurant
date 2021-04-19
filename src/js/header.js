export function createHeader(){
  const container = document.createElement('header');
  container.classList.add('site-header');

  const heading = document.createElement('div');
  heading.textContent = restaurantTitle;

  const nav = document.createElement('nav');

  const home = document.createElement('div');
  home.textContent = 'Home';
  home.id = 'home';

  const menu = document.createElement('div');
  menu.textContent = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('div');
  contact.textContent = 'Contact';
  contact.id = 'contact';

  nav.append(home, menu, contact);
  container.append(heading, nav);

  return container;
}

const restaurantTitle = 'Eat Borger';
