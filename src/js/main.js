/* globals FB */
'use strict';
var React = require('react');
var app = React.createFactory(require('../react/app.jsx'));

var faceBookUser = {
    name: null,
    userId: null
};

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1693718680841593',
        cookie     : true,  // enable cookies to allow the server to access the session
        version    : 'v2.2' // use version 2.2
    });
    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    // These three cases are handled in the callback function.
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        fBInfoAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

function fBInfoAPI() {
    FB.api('/me', function(response) {
        console.log(response);
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.app').style.display = 'block';
        faceBookUser.name = response.name;
        faceBookUser.userId = response.id;
        init();
    });
}

function init() {
    React.render(app({name: faceBookUser.name, userId: faceBookUser.userId}), document.querySelector('.app'));
}
