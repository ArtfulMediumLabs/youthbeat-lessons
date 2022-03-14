import { localStorageKeys } from './constants.js';

class LocalStorageService {
  set accessToken(val) {
    localStorage.setItem(localStorageKeys.accessToken, val);
  }

  get accessToken() {
    return localStorage.getItem(localStorageKeys.accessToken);
  }

  set lessonCount(val) {
    localStorage.setItem(localStorageKeys.lessonCount, Number(val));
  }

  get lessonCount() {
    return Number(localStorage.getItem(localStorageKeys.lessonCount)) || 0;
  }
}

export default LocalStorageService;
