// Creates a footer component. Should probably refactor to class for parity with other components
// and to have a single api call for all components (ie page) but it's functioning fine as is for now.

export function createFooter(citation, link) {
  const container = document.createElement("footer");
  container.classList.add("site-footer");

  const byline = document.createTextNode(citation);
  const repoLink = document.createElement("a");
  repoLink.href = link;
  repoLink.target = "blank";
  const ghLogo = document.createElement("img");
  ghLogo.src = "./assets/GitHub-Mark-Light-32px.png";
  repoLink.append(ghLogo);

  container.append(byline, repoLink);

  return container;
}
