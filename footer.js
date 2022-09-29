import { activityLimit } from './constants.js';
import { generateClassLink, parseHTML, removeAllChildNodes } from './utils.js';

export const constructFooter = (user = null) => {
  const footer = document.querySelector('.footer__content');
  const exceededMaxActivityLimit = window.localStorageService.activityCount >= activityLimit;

  removeAllChildNodes(footer);

  // Construct footer based on authentication state
  footer.appendChild(
    user !== null
      ? parseHTML(
        `
          <span>${user.name} | ${user.school} | ${user.city} </span><br/><br/>
          <span>Grade ${user.grade}</span><br/><br/>
          <span>Class URL: <a href="${generateClassLink(window.localStorageService.accessToken)}">${generateClassLink(window.localStorageService.accessToken)}</a><span>
          `,
      )
      : parseHTML(
        `
        This is an educator preview of Youthbeat. Please register before sharing with students.<br/>
          <div class="footer__links">
            <a href="./register" class="footer__link">Register</a>
          </div>
        `,
      ),
  );

  // Append styles
  footer.appendChild(
    parseHTML(
      `
        <style>
          .footer {
            font-family: Verdana, sans-serif;
            margin-top: 20px;
            width: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            min-height: 200px;
          }
          
          .footer__links {
            margin-top: 20px
          }

          .footer__content {
            text-align: center;
          }
          
          .footer__link {
            padding: 5px;
          }
        </style>
     `,
    ),
  );
};
