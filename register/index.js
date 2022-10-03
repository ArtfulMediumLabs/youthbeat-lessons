import { createUser } from '../firestore.js';
import { hideElement, getBaseUrl } from '../utils.js';
import LocalStorageService from '../localStorage.js';
import { queryParams } from '../constants.js';

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();
  const registrationForm = document.querySelector('.register__registration-form');
  const registrationQuestion = document.querySelector('.register__registration-question');
  const registrationPrompt = document.querySelector('.register__invalid-registration-prompt');
  const registrationFormError = document.querySelector('.register__registration-form-error');
  const searchParams = new URLSearchParams(window.location.search);
  const isTeacher = searchParams.get(queryParams.isTeacher);

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
      const newUser = await createUser({
        name: name.value,
        email: email.value,
        school: school.value,
        grade: grade.value,
        city: city.value,
        state: state.value,
      });

      window.localStorageService.accessToken = newUser.accessToken;
      const lastProduct = window.localStorage.lastProduct;
      const destinationUrl = lastProduct ? `/intro/?${queryParams.sectionKey}=${lastProduct}` : getBaseUrl();
      window.location.href = destinationUrl;
    } catch (error) {
      registrationFormError.textContent = error.message;
    }
  };

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
