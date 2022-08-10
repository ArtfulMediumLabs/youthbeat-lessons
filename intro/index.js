import { sections } from './sections.js';
import { renderSection } from './sectionRenderer.js';
import SectionPagination from './sectionPagination.js';
import { parseHTML, getBaseUrl } from '../utils.js';
import { queryParams as queryParamKeys, activityLimit } from '../constants.js';

window.addEventListener('load', async () => {
  let user = null;

  // Elements
  const sectionElement = document.querySelector('.section');
  const sectionHeadingElement = document.querySelector('.section-header__heading');
  const sectionHeaderElement = document.querySelector('.section-header');
  const titleElement = document.querySelector('title');

  // Query Params
  const queryParams = new URLSearchParams(window.location.search);
  const sectionKey = queryParams.get(queryParamKeys.sectionKey) || 'RHYTHM_DRUMS';

  // Check for valid section
  if (!sections[sectionKey]) throw new Error(`Failed to fetch section from section dictionary by key ${sectionKey}.`);

  const section = sections[sectionKey];
  const initialActivity = section.activities[1];

  // Construct section
  sectionHeadingElement.textContent = section.title;
  sectionHeaderElement.prepend(
    parseHTML(
      `
        <a aria-label="Homepage" class="section-header__link" href="../${queryParamKeys.sectionKey}=${sectionKey}">&#x2190 Back</a>
      `,
    ),
  );
  titleElement.textContent = `Youthbeat | ${section.title}`;
  renderSection(initialActivity);
  window.sectionPagination = new SectionPagination(section);
});
