import { lessons } from './lessons.js';
import { renderLesson } from './lessonRenderer.js';
import LessonPagination from './lessonPagination.js';
import { parseHTML } from '../utils.js';

window.addEventListener('load', () => {
  const lessonHeadingElement = document.querySelector('.lesson-header__heading');
  const lessonHeaderElement = document.querySelector('.lesson-header');
  const titleElement = document.querySelector('title');
  const queryParams = new URLSearchParams(window.location.search);
  const tier = queryParams.get('tier') || 1;
  const lessonKey = queryParams.get('lesson_key') || 'RHYTHM_DRUMS';

  if (!lessons[lessonKey]) throw new Error(`Failed to fetch lesson from lesson dictionary by key ${lessonKey}.`);
  if (!lessons[lessonKey].tierFilter[tier]) throw new Error(`Lesson not supported for tier ${tier}.`);

  const lesson = lessons[lessonKey];
  const initialSection = lesson.sections[1];

  lessonHeadingElement.textContent = lesson.title;
  lessonHeaderElement.prepend(
    parseHTML(
      `
        <a aria-label="Homepage" class="lesson-header__link" href="../?tier=${tier}&lesson_key=${lessonKey}">&#x2190 Back</a>
      `,
    ),
  );
  titleElement.textContent = `Youthbeat | ${lesson.title}`;
  renderLesson(initialSection);
  window.lessonPagination = new LessonPagination(lesson, lesson.tierFilter[tier].cutoff);
});
