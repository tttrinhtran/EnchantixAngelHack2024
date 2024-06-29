// util/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgl265xCCH0anw3otwcTyae9TR2tKQy6s",
  authDomain: "angelhack-7ce02.firebaseapp.com",
  projectId: "angelhack-7ce02",
  storageBucket: "angelhack-7ce02.appspot.com",
  messagingSenderId: "852781996086",
  appId: "1:852781996086:web:4fe6e60f5bf9cfa092a097",
  measurementId: "G-Q22ZWL3BZT"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
