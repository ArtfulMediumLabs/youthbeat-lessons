function parseHTML(html) {
  var t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}