// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC7GPh2nv1Jg7drd0Cem715MHDtYSN3Quk",
  authDomain: "assignment-node-firebase.firebaseapp.com",
  projectId: "assignment-node-firebase",
  storageBucket: "assignment-node-firebase.appspot.com",
  messagingSenderId: "195333234472",
  appId: "1:195333234472:web:e7d3fc3c3c46db79133a1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Firebase Config

document.addEventListener("DOMContentLoaded", function () {
  const loadEl = document.querySelector("#load");
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.firestore().doc('/foo/bar').get().then(() => { });
  // firebase.functions().httpsCallable('yourFunction')().then(() => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // firebase.analytics(); // call to activate
  // firebase.analytics().logEvent('tutorial_completed');
  // firebase.performance(); // call to activate
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = [
      "auth",
      "database",
      "firestore",
      "functions",
      "messaging",
      "storage",
      "analytics",
      "remoteConfig",
      "performance",
    ].filter((feature) => typeof app[feature] === "function");
    loadEl.textContent = `Firebase SDK loaded with ${features.join(", ")}`;
  } catch (e) {
    console.error(e);
    loadEl.textContent = "Error loading the Firebase SDK, check the console.";
  }
});