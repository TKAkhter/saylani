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


// Connect to Facebook SDK
window.fbAsyncInit = function () {
    FB.init({
        appId: 'APP_ID',
        xfbml: true,
        version: 'v2.6'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//  Create Auth Functions
var provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
    firebase.auth().signInWithPopup(provider)

        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(user)
        }).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
}

function facebookSignout() {
    firebase.auth().signOut()

        .then(function () {
            console.log('Signout successful!')
        }, function (error) {
            console.log('Signout failed')
        });
}

// const {
//     request
// } = require('express');
// // const express = require('express');

// const app = express();

// const port = 5000

// app.get('/', (request, response) => {
//     response.send('dashboard');
// })
// app.listen(port, () => console.log(`Server is running on port localhost:${port}`));