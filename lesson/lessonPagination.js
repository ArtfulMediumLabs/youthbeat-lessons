/* eslint-disable no-param-reassign */
import { renderLesson } from './lessonRenderer.js';

class LessonPagination {
  constructor(lesson, cutoff, paginationSelector = '.lesson-pagination__content') {
    this.lesson = lesson;
    this.sectionCutoff = cutoff;
    this.currentSection = 1;
    this.pageControlNodes = [];

    // Construct pagination
    const pageControl = document.querySelector(paginationSelector);
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    [leftArrow, rightArrow].forEach((arrow, index) => {
      arrow.className = 'lesson-pagination__button';
      arrow.addEventListener('click', () => this.updatePagination({ direction: index === 0 ? 'left' : 'right' }));
      arrow.textContent = index === 0 ? '«' : '»';
      pageControl.appendChild(arrow);
    });

    for (let i = 1; i <= this.sectionCutoff; i += 1) {
      const pageControlNode = document.createElement('button');
      pageControlNode.className = `lesson-pagination__button ${i === 1 ? 'lesson-pagination__button--selected' : ''}`;
      pageControlNode.textContent = i;
      pageControl.insertBefore(pageControlNode, pageControl.children[pageControl.children.length - 1]);
      pageControlNode.addEventListener('click', () => this.updatePagination({ section: i }));
      this.pageControlNodes.push(pageControlNode);
    }
  }

  /*
  * { direction }: 'left' | 'right'
  * { section }: number
  */
  updatePagination({ direction, section }) {
    let newSection;

    if (direction === undefined && section === undefined) return;
    if (direction && ['left', 'right'].includes(direction)) newSection = direction === 'left' ? this.currentSection - 1 : this.currentSection + 1;
    else if (section !== undefined && !Number.isNaN(section)) newSection = section;

    if (!this.lesson.sections[newSection]) return; // Lesson section doesn't exist
    if (newSection > this.sectionCutoff) return; // Lesson section not authorized by tier

    renderLesson(this.lesson.sections[newSection]);
    this.pageControlNodes[this.currentSection - 1].classList.remove('lesson-pagination__button--selected');
    this.pageControlNodes[newSection - 1].classList.add('lesson-pagination__button--selected');
    this.currentSection = newSection;
  }
}

export default LessonPagination;
