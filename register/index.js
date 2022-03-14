import { createUser } from '../firestore.js';
import { generateAccessToken, hideElement } from '../utils.js';
import LocalStorageService from '../localStorage.js';
import { queryParams } from '../constants.js';

window.onRegistrationQuestionSubmit = (e) => {
  e.preventDefault();
  const url = new URL(window.location.href);
  url.searchParams.set(queryParams.isTeacher, e.target.answer.value);
  window.location.replace(url.toString());
};

window.onRegistrationFormSubmit = async (e) => {
  e.preventDefault();
  const {
    name, email, school, grade, city, state,
  } = e.target;

  try {
    const accessToken = generateAccessToken();
    await createUser({
      name: name.value,
      email: email.value,
      school: school.value,
      grade: grade.value,
      city: city.value,
      state: state.value,
      accessToken,
    });

    window.localStorageService.accessToken = accessToken;
    window.location.href = '../index.html';
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();
  const registrationForm = document.querySelector('.register__registration-form');
  const registrationQuestion = document.querySelector('.register__registration-question');
  const registrationPrompt = document.querySelector('.register__invalid-registration-prompt');
  const searchParams = new URLSearchParams(window.location.search);
  const isTeacher = searchParams.get(queryParams.isTeacher);

  if (isTeacher === null) {
    hideElement(registrationForm);
    hideElement(registrationPrompt);
  }

  if (isTeacher === 'yes') {
    hideElement(registrationQuestion);
    hideElement(registrationPrompt);
  }

  if (isTeacher === 'no') {
    hideElement(registrationQuestion);
    hideElement(registrationForm);
  }
});
