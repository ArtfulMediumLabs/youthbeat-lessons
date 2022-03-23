import { sections } from './sections.js';
import { renderSection } from './sectionRenderer.js';
import SectionPagination from './sectionPagination.js';
import { parseHTML, getBaseUrl } from '../utils.js';
import LocalStorageService from '../localStorage.js';
import { queryParams as queryParamKeys, activityLimit } from '../constants.js';
import { getUser } from '../firestore.js';
import { constructFooter } from '../footer.js';
import { subscribe, events } from '../pubSub.js';
import { constructModal } from '../modal.js';

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
  const tier = queryParams.get(queryParamKeys.tier) || 1;
  const sectionKey = queryParams.get(queryParamKeys.sectionKey) || 'RHYTHM_DRUMS';

  // Check for valid section
  if (!sections[sectionKey]) throw new Error(`Failed to fetch section from section dictionary by key ${sectionKey}.`);
  if (!sections[sectionKey].tierFilter[tier]) throw new Error(`Section not supported for tier ${tier}.`);

  const section = sections[sectionKey];
  const initialActivity = section.activities[1];

  // Retrieve User
  if (window.localStorageService.accessToken) {
    try {
      user = await getUser(window.localStorageService.accessToken);
    } catch {}
  }

  const checkAuthentication = () => {
    if (user === null && window.localStorageService.activityCount > activityLimit) {
      const modal = constructModal(
        `
        You've viewed all ${activityLimit} activites available to registered users.
        Please <a href="${getBaseUrl()}/register">register</a> to continue.
        `,
      );

      sectionElement.appendChild(modal);
    }
  };

  // Construct section
  sectionHeadingElement.textContent = section.title;
  sectionHeaderElement.prepend(
    parseHTML(
      `
        <a aria-label="Homepage" class="section-header__link" href="../?tier=${tier}&${queryParamKeys.sectionKey}=${sectionKey}">&#x2190 Back</a>
      `,
    ),
  );
  titleElement.textContent = `Youthbeat | ${section.title}`;
  renderSection(initialActivity);
  constructFooter(user);
  checkAuthentication();
  window.sectionPagination = new SectionPagination(section, section.tierFilter[tier].cutoff);

  subscribe(events.activityCountChanged, () => {
    constructFooter(user);
    checkAuthentication();
  });
});
