export const firebaseConfig = {
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const auth0Config = {
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  // @ts-expect-error TS(2339): Property 'env' does not exist on type 'ImportMeta'... Remove this comment to see the full error message
  domain: import.meta.env.VITE_AUTH0_DOMAIN
};
