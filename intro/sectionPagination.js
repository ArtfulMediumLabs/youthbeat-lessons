/* eslint-disable no-param-reassign */
import { renderSection } from './sectionRenderer.js';

class SectionPagination {
  constructor(section, cutoff, paginationSelector = '.section-pagination__content') {
    this.section = section;
    this.activityCutoff = cutoff;
    this.currentActivity = 1;
    this.pageControlNodes = [];

    // Construct pagination
    const pageControl = document.querySelector(paginationSelector);
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    [leftArrow, rightArrow].forEach((arrow, index) => {
      arrow.className = 'section-pagination__button';
      arrow.addEventListener('click', () => this.updatePagination({ direction: index === 0 ? 'left' : 'right' }));
      arrow.textContent = index === 0 ? '«' : '»';
      pageControl.appendChild(arrow);
    });

    for (let i = 1; i <= this.activityCutoff; i += 1) {
      const pageControlNode = document.createElement('button');
      pageControlNode.className = `section-pagination__button ${i === 1 ? 'section-pagination__button--selected' : ''}`;
      pageControlNode.textContent = i;
      pageControl.insertBefore(pageControlNode, pageControl.children[pageControl.children.length - 1]);
      pageControlNode.addEventListener('click', () => this.updatePagination({ activity: i }));
      this.pageControlNodes.push(pageControlNode);
    }
  }

  /*
  * { direction }: 'left' | 'right'
  * { activity }: number
  */
  updatePagination({ direction, activity }) {
    let newActivity;

    if (direction === undefined && activity === undefined) return;
    if (direction && ['left', 'right'].includes(direction)) newActivity = direction === 'left' ? this.currentActivity - 1 : this.currentActivity + 1;
    else if (activity !== undefined && !Number.isNaN(activity)) newActivity = activity;

    if (!this.section.activities[newActivity]) return; // Section activity doesn't exist

    renderSection(this.section.activities[newActivity]);
    this.pageControlNodes[this.currentActivity - 1].classList.remove('section-pagination__button--selected');
    this.pageControlNodes[newActivity - 1].classList.add('section-pagination__button--selected');
    this.currentActivity = newActivity;
  }
}

export default SectionPagination;
