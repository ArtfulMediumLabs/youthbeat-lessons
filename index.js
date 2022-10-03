/* eslint-disable indent */
import { getOrderedSections } from './section/sections.js';
import { parseHTML, getBaseUrl } from './utils.js';
import LocalStorageService from './localStorage.js';
import { alphabet, queryParams } from './constants.js';
import { getUser } from './firestore.js';
import { constructHeader } from './header.js';
import { constructFooter } from './footer.js';

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();
  window.localStorage.removeItem("lastProduct");

  // DOM Elements
  const sectionList = document.querySelector('.making-music__section-list');

  // Query Params
  const searchParams = new URLSearchParams(window.location.search);
  const tier = searchParams.get(queryParams.tier) || 1;
  const accessToken = searchParams.get(queryParams.accessToken);

  let user = null;

  // If access token query param, redirect to verify page
  if (accessToken) {
    const url = new URL(`${getBaseUrl()}/verify/`);
    url.searchParams.set(queryParams.accessToken, accessToken);
    window.location.replace(url.toString());
    return;
  }

  if (window.localStorageService.accessToken) {
    try {
      user = await getUser(window.localStorageService.accessToken);
    } catch {}
  }

  // Construct list of section links
  getOrderedSections(tier).forEach(({ title, key }, index) => {
    sectionList.appendChild(
      parseHTML(
        `
          <li class="making-music__section">
            <a class="making-music__section-link" href="./section/?tier=${1}&${queryParams.sectionKey}=${key}">${alphabet[index]}. ${title}</a>
          </li>
        `,
      ),
    );
  });

  
  if (getOrderedSections(tier).length % 2 > 0) {
    sectionList.appendChild(
      parseHTML(
        `
          <li class="making-music__section"></li>
        `,
      ),
    );
  }

  constructHeader(user);
  constructFooter(user);
});
