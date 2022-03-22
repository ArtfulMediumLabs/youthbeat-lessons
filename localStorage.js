import { localStorageKeys } from './constants.js';
import { publish, events } from './pubSub.js';

class LocalStorageService {
  set accessToken(val) {
    localStorage.setItem(localStorageKeys.accessToken, val);
  }

  get accessToken() {
    return localStorage.getItem(localStorageKeys.accessToken);
  }

  set activityCount(val) {
    localStorage.setItem(localStorageKeys.activityCount, Number(val));
    publish(events.activityCountChanged, null);
  }

  get activityCount() {
    return Number(localStorage.getItem(localStorageKeys.activityCount)) || 0;
  }

  deleteKey(val) {
    return localStorageKeys.deleteKey(val);
  }
}

export default LocalStorageService;
