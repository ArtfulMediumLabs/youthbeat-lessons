import { sections } from './sections.js';
import { renderSection } from './sectionRenderer.js';
import SectionPagination from './sectionPagination.js';
import { parseHTML, getBaseUrl } from '../utils.js';
import LocalStorageService from '../localStorage.js';
import { getUser } from '../firestore.js';
import { queryParams as queryParamKeys, activityLimit } from '../constants.js';
import { constructFooter } from '../footer.js';

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();
  let user = null;

  // Elements
  const sectionElement = document.querySelector('.section');
  const sectionHeadingElement = document.querySelector('.section-header__heading');
  const sectionHeaderElement = document.querySelector('.section-header');
  const titleElement = document.querySelector('title');

  // Query Params
  const queryParams = new URLSearchParams(window.location.search);
  const sectionKey = queryParams.get(queryParamKeys.sectionKey) || 'BASICS';

  // Check for valid section
  if (!sections[sectionKey]) throw new Error(`Failed to fetch section from section dictionary by key ${sectionKey}.`);

  const section = sections[sectionKey];
  const initialActivity = section.activities[1];

  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get(queryParamKeys.accessToken);

  if (accessToken) {
    window.localStorageService.accessToken = accessToken;
  }

  // Retrieve User
  if (window.localStorageService.accessToken) {
    try {
      user = await getUser(window.localStorageService.accessToken);
    } catch {
      window.localStorage.removeItem("accessToken");
    }
  }

  // Construct section
  sectionHeadingElement.textContent = section.title;

  // if (section.hasOwnProperty('image') && section.image) {
  //   var img = document.createElement("img");
  //   img.src = "../assets/" + section.image;
  //   var src = document.getElementById("header");
  //   sectionHeaderElement.prepend(img);
  // }

  /*
  sectionHeaderElement.prepend(
    parseHTML(
      `
        <a aria-label="Homepage" class="section-header__link" href="../${queryParamKeys.sectionKey}=${sectionKey}">&#x2190 Back</a>
      `,
    ),
  );
  */
  titleElement.textContent = `Youthbeat | ${section.title}`;
  renderSection(initialActivity);
  window.sectionPagination = new SectionPagination(section);
  
  if (['PREVIEW','BASICS','MUSIC_CREATION','MATH'].includes(sectionKey)){
    window.localStorage.lastProduct = sectionKey;
    const productPath =  `/intro/?${queryParamKeys.sectionKey}=${sectionKey}`;
    constructFooter(user, productPath);
  }
});
