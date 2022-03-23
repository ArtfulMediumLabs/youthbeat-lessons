// eslint-disable-next-line no-undef
const { subscribers } = pubSub; // Reference to global subscribers object

export const publish = (eventName, data = null) => {
  // return if event is not subscribed
  if (!Array.isArray(subscribers[eventName])) {
    return;
  }

  // Whenever you publish any event, it will trigger callback for all stored event in subscriber object
  subscribers[eventName].forEach((callback) => {
    callback(data);
  });
};

export const subscribe = (eventName, callback) => {
  if (!Array.isArray(subscribers[eventName])) {
    subscribers[eventName] = [];
  }

  subscribers[eventName].push(callback);
};

export const events = {
  activityCountChanged: 'ACTIVITY_COUNT_CHANGED',
};
