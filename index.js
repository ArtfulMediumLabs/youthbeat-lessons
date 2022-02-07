import { getOrderedLessons } from './lessons.js';
import { parseHTML } from './utils.js';
import { alphabet } from './constants.js';

window.addEventListener('load', () => {
  const lessonList = document.querySelector('.making-music__lesson-list');
  const queryParams = new URLSearchParams(window.location.search);
  const tier = queryParams.get('tier') || 1;

  // Construct list of lesson links
  getOrderedLessons(tier).forEach(({ title, key }, index) => {
    lessonList.appendChild(
      parseHTML(
        `
        <li class="making-music__lesson">
          <a class="making-music__lesson-link" href="./lesson.html?tier=${1}&lesson_key=${key}">${alphabet[index]}. ${title}</a>
        </li>
        `,
      ),
    );
  });
});
