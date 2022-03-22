import { UserSchema, cloudFunctionUrl } from './constants.js';

// Translators
function fromFirestoreTranslator(firestoreUser) {
  return {
    email: firestoreUser[UserSchema.email],
    grade: firestoreUser[UserSchema.grade],
    city: firestoreUser[UserSchema.city],
    name: firestoreUser[UserSchema.name],
    state: firestoreUser[UserSchema.state],
    school: firestoreUser[UserSchema.school],
    accessToken: firestoreUser[UserSchema.accessToken],
  };
}

function toFirestoreTranslator(user) {
  return {
    [UserSchema.email]: user.email,
    [UserSchema.grade]: user.grade,
    [UserSchema.city]: user.city,
    [UserSchema.name]: user.name,
    [UserSchema.state]: user.state,
    [UserSchema.school]: user.school,
    [UserSchema.accessToken]: user.accessToken,
  };
}

export async function getUser(accessToken) {
  const response = await fetch(`${cloudFunctionUrl}/user/${accessToken}`);
  if (!response.ok) throw new Error('Error retrieving user');
  const jsonResponse = await response.json();
  return fromFirestoreTranslator(jsonResponse);
}

export async function createUser(user) {
  const response = await fetch(`${cloudFunctionUrl}/user/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toFirestoreTranslator(user)),
  });

  const jsonResponse = await response.json();
  if (!response.ok) throw new Error(jsonResponse.error);
  return fromFirestoreTranslator(jsonResponse);
}
