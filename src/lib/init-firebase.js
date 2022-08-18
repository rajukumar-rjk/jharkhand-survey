import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  persistence: true,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// enableIndexedDbPersistence(db);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// enabling cache
// enableIndexedDbPersistence(db);
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code == "failed-precondition") {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//     console.log("error1");
//   } else if (err.code == "unimplemented") {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//     console.log("error2");
//   }
// });

// enablePersistence(db).catch(function (err) {
//   if (err.code == "failed-precondition") {
//     // Multiple tabs open, persistence can only be enabled
//     // in one tab at a a time.
//     // ...
//   } else if (err.code == "unimplemented") {
//     // The current browser does not support all of the
//     // features required to enable persistence
//     // ...
//   }
// });
export { db, auth };
