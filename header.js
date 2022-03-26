import { activityLimit } from './constants.js';
import { generateClassLink, parseHTML, removeAllChildNodes } from './utils.js';

export const constructHeader = (user = null) => {
  const header = document.querySelector('.header__content');

  removeAllChildNodes(header);

  // Construct header based on authentication state
  if (user === null) {
    header.appendChild(
      parseHTML(
      `
        <p>The educator preview lets you evaluate the resource by trying out different activities (e.g. rhythm, melody), 
        up to a limit of 10 activities. When you’re ready to bring it to your students, it's best to register, as this 
        gives students access to all the activities. However, you could have all your students do the same one or two activities first.</p>
      `)
    );

    // Append styles
    header.appendChild(
      parseHTML(
        `
          <style>
            .header {
              font-family: Verdana, sans-serif;
              margin-bottom: 20px;
              width: 100%;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              box-sizing: border-box;
              min-height: 200px;
            }

            .header__content {
              max-width: 988px;
              padding: 20px;
              text-align: center;
            }
          </style>
      `)
    );
  } 
};