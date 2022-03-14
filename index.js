/* eslint-disable indent */
import { getOrderedLessons } from './lesson/lessons.js';
import { parseHTML, generateSharedLink, hideElement } from './utils.js';
import LocalStorageService from './localStorage.js';
import { alphabet, lessonLimit, queryParams } from './constants.js';
import { getUser } from './firestore.js';

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();

  // DOM Elements
  const lessonList = document.querySelector('.making-music__lesson-list');
  const footer = document.querySelector('.making-music__content');
  const lessonListHeading = document.querySelector('.making-music__lessons-heading');

  // Query Params
  const searchParams = new URLSearchParams(window.location.search);
  const tier = searchParams.get(queryParams.tier) || 1;
  const accessToken = searchParams.get(queryParams.accessToken);

  let user = null;
  let isLoggedIn = false;
  const exceededMaxLessons = window.localStorageService.lessonCount >= lessonLimit;

  // If access token query param, redirect to verify page
  if (accessToken) {
    const url = new URL(`${window.location.origin}/verify/`);
    url.searchParams.set(queryParams.accessToken, accessToken);
    window.location.replace(url.toString());
    return;
  }

  if (window.localStorageService.accessToken) {
    try {
      user = await getUser(window.localStorageService.accessToken);
      isLoggedIn = user !== null; // if user is null, no user was found with access token
    } catch (error) {
      console.log(error);
    }
  }

  // Construct list of lesson links
  if (isLoggedIn || !exceededMaxLessons) {
    getOrderedLessons(tier).forEach(({ title, key }, index) => {
      lessonList.appendChild(
        parseHTML(
          `
            <li class="making-music__lesson">
              <a class="making-music__lesson-link" onClick="window.localStorageService.lessonCount = window.localStorageService.lessonCount + 1;" href="./lesson/index.html?tier=${1}&lesson_key=${key}">${alphabet[index]}. ${title}</a>
            </li>
          `,
        ),
      );
    });
  } else {
    hideElement(lessonListHeading);
  }

  // Construct footer based on authentication state
  footer.appendChild(
    isLoggedIn
      ? parseHTML(
        `
          <span>${user.name} | ${user.school} | ${user.city} </span><br/><br/>
          <span>Grade ${user.grade}</span><br/><br/>
          <span>Shared URL: <a href="${generateSharedLink(window.localStorageService.accessToken)}">${generateSharedLink(window.localStorageService.accessToken)}</a><span?
        `,
      )
      : parseHTML(
        `
          This is an educator preview of Youthbeat. 
          ${exceededMaxLessons
            ? `You have viewed all ${lessonLimit} lessons available to unregistered viewers.`
            : `You have ${lessonLimit - window.localStorageService.lessonCount} lessons remaining.`}
          Register to access all free lessons.<br/>
          <div class="making-music__footer-links">
            <a href="./register" class="making-music__footer-link">Register</a>
          </div>
        `,
      ),
  );
});
