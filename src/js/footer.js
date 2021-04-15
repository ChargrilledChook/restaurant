function createFooter(){
  const container = document.createElement('footer');
  container.classList.add('site-footer')

  const byline = document.createTextNode(author);
  container.append(byline);

  return container;
}

const author = 'By Chook';

export { createFooter }
