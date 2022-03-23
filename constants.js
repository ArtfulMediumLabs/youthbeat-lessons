export const widgets = Object.freeze({
  DidYouKnow: 'did-you-know',
  MathConnection: 'math-connection',
  LiteracyConnection: 'literacy-connection',
});

export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

export const UserSchema = Object.freeze({
  email: 'email',
  grade: 'grade',
  city: 'city',
  name: 'name',
  state: 'state',
  school: 'school',
  accessToken: 'access_token',
});

export const queryParams = Object.freeze({
  tier: 'tier',
  accessToken: 'access_token',
  sectionKey: 'section_key',
  isTeacher: 'is_teacher',
  message: 'message',
});

export const activityLimit = 10;

export const localStorageKeys = Object.freeze({
  activityCount: 'activity_count',
  accessToken: 'access_token',
});

export const cloudFunctionUrl = 'https://northamerica-northeast1-youth-beat-dev.cloudfunctions.net/app';
