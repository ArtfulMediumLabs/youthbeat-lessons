import { parseHTML, removeAllChildNodes } from '../utils.js';
import { emptyPreset, loadPreset, updatePattern } from './script.js';
import { widgets } from '../constants.js';

export const sectionContentContainer = document.querySelector('.section-content__container');
export const sectionSubHeader = document.querySelector('.section-header__sub-heading');

/*
* activity: Activity
*/
export const renderSection = (activity) => {
  if (activity.pattern) {
    emptyPreset();
    loadPreset(activity.pattern);
    updatePattern();
  }

  removeAllChildNodes(sectionContentContainer);
  sectionSubHeader.textContent = activity.title;
  sectionContentContainer.appendChild(parseHTML(activity.content));

  if (activity.widgets) {
    activity.widgets.forEach((widget) => {
      if (!widget.type || !Object.values(widgets).includes(widget.type)) return;

      const widgetElement = document.createElement('section');
      widgetElement.className = 'widget-element widget-element--disabled';
      widgetElement.addEventListener('click', () => {
        const { oldClass, newClass } = widgetElement.classList.contains('widget-element--disabled')
          ? { oldClass: 'widget-element--disabled', newClass: 'widget-element--enabled' }
          : { oldClass: 'widget-element--enabled', newClass: 'widget-element--disabled' };

        widgetElement.classList.remove(oldClass);
        widgetElement.classList.add(newClass);
      });

      let widgetTitle;
      let widgetIcon;
      const createWidgetIcon = (svgName) => `
        <img src="../assets/${svgName}.svg" class="widget-element__icon" alt="" />
      `;

      if (widget.type === widgets.DidYouKnow) {
        widgetIcon = createWidgetIcon('lightbulb');
        widgetTitle = 'Did you know?';
      } else if (widget.type === widgets.MathConnection) {
        widgetIcon = createWidgetIcon('math-symbol');
        widgetTitle = 'Math Connection';
      } else if (widget.type === widgets.LiteracyConnection) {
        widgetIcon = createWidgetIcon('books');
        widgetTitle = 'Literacy Connection';
      }

      widgetElement.appendChild(parseHTML(
        `
        <header class="widget-element__header">
          ${widgetIcon}
          <span class="widget-element__title">${widgetTitle}</span>
          <img src="../assets/arrow-up.svg" class="widget-element__icon widget-element__arrow-up" alt="" />
          <img src="../assets/arrow-up.svg" class="widget-element__icon widget-element__arrow-down" alt="" />
        </header>
       <div class="widget-element__content">
       ${widget.content}
       </div>
       `,
      ));

      sectionContentContainer.appendChild(widgetElement);
    });
  }
};
