export function createFooter(citation) {
  const container = document.createElement("footer");
  container.classList.add("site-footer");

  const byline = document.createTextNode(citation);
  container.append(byline);

  return container;
}
