import { lessonSections, loadLessonSection } from './lesson.js';

export class LessonPagination {
  constructor(initialSectionIndex = 0, paginationSelector = '.lesson-pagination__content') {

    this.currentSectionIndex = initialSectionIndex;
    this.pageControlNodes = [];
    
    const pageControl = document.querySelector(paginationSelector);
    const leftArrow = document.createElement("button");
    const rightArrow = document.createElement("button");
    [leftArrow, rightArrow].forEach((arrow, index) => {
        arrow.className = "lesson-pagination__button";
        arrow.addEventListener("click", () => this.updatePagination({ direction: index === 0 ? 'left' : 'right' }));
        arrow.textContent = index === 0 ? "«" : "»";
        pageControl.appendChild(arrow);
    })

    lessonSections.forEach((_lesson, index) => {
      const pageControlNode = document.createElement("button");
      pageControlNode.className = `lesson-pagination__button ${initialSectionIndex === index ? 'lesson-pagination__button--selected' :''}`;
      pageControlNode.textContent = `${index + 1}`;
      pageControl.insertBefore(pageControlNode, pageControl.children[pageControl.children.length - 1]);
      pageControlNode.addEventListener("click", () => this.updatePagination({ sectionIndex: index }));
      this.pageControlNodes.push(pageControlNode);
    });
  }

  /*
  * { direction }: 'left' | 'right'
  * { sectionIndex }: number
  */
  updatePagination({ direction, sectionIndex }){
    let newSectionIndex;

    if (direction === undefined && sectionIndex === undefined) return;
    if (direction && ['left', 'right'].includes(direction)) newSectionIndex = direction === 'left' ? this.currentSectionIndex - 1 : this.currentSectionIndex + 1;
    else if (sectionIndex !== undefined && !isNaN(sectionIndex)) newSectionIndex = sectionIndex;
    
    try {
      loadLessonSection(newSectionIndex); // errors out if lesson index is invalid
      this.pageControlNodes[this.currentSectionIndex].classList.remove('lesson-pagination__button--selected');
      this.pageControlNodes[newSectionIndex].classList.add('lesson-pagination__button--selected');
      this.currentSectionIndex = newSectionIndex;
    } catch{}
  }
}
