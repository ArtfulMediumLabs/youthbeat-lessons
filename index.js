import { loadLessonSection } from './lesson.js';
import { LessonPagination } from './lessonPagination.js';

const initialSectionIndex = 0;

window.addEventListener('load', () => {
  loadLessonSection(initialSectionIndex);
  window.lessonPagination = new LessonPagination(initialSectionIndex);
});
