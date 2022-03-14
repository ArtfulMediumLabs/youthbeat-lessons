/* eslint-disable no-param-reassign */
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

export function generateAccessToken(length = 8) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random()
* charactersLength));
  }
  return result;
}

export function generateSharedLink(accessToken) {
  return `
    ${window.location.origin}?access_token=${accessToken}
  `;
}

export function hideElement(element) {
  element.style.display = 'none';
  element.ariaHidden = true;
}
