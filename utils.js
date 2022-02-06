export function parseHTML(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function emptyPattern() {
  return {
    value: Array(32).fill('-'),
    amplitude: Array(32).fill(0),
    duration: Array(32).fill(0),
  };
}
