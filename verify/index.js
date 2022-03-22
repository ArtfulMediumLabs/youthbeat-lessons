import { getUser } from '../firestore.js';
import LocalStorageService from '../localStorage.js';
import { hideElement } from '../utils.js';
import { queryParams, localStorageKeys } from '../constants.js';

window.addEventListener('load', async () => {
  window.localStorageService = new LocalStorageService();
  const verificationError = document.querySelector('.verify__verification-error');
  const verificationForm = document.querySelector('.verify__verification-form');
  const verificationFormQuestion = document.querySelector('.verify__verification-form-question');
  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get(queryParams.accessToken);

  if (accessToken === null) {
    hideElement(verificationForm);
    return;
  }

  const user = await getUser(accessToken);

  if (user === null) {
    hideElement(verificationForm);
    return;
  }

  hideElement(verificationError);
  verificationFormQuestion.innerHTML = `Are you a student of ${user.name}?`;
  window.onVerifyFormSubmit = (e) => {
    e.preventDefault();

    if (e.target.answer.value === 'yes') {
      window.localStorageService.accessToken = accessToken;
    } else {
      window.localStorageService.deleteKey(localStorageKeys.accessToken);
    }
    window.location = '../';
  };
});
