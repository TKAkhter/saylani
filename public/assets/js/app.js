FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
});

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

FB.login(function (response) {
    // handle the response
}, {
    scope: 'public_profile,email'
});

FB.login(function (response) {
    if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
    } else {
        // The person is not logged into your webpage or we are unable to tell. 
    }
});

FB.logout(function (response) {
    // Person is now logged out
});

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