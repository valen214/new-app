
function importScript(url, callback, isAsync = false){
    const script = document.createElement("script");
    script.src = url;
    script.async = isAsync;
    if(callback instanceof Function) script.onload = callback;
    document.body.appendChild(script);
}
// The core Firebase JS SDK is always required and must be listed first
importScript("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
/*
TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries
*/
importScript("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBMjD8Q60r6AtlhtbkgKw14LModIOx5PyQ",
    authDomain: "main-custom-project.firebaseapp.com",
    databaseURL: "https://main-custom-project.firebaseio.com",
    projectId: "main-custom-project",
    storageBucket: "main-custom-project.appspot.com",
    messagingSenderId: "948862535396",
    appId: "1:948862535396:web:aac36d18e49141f0e88ef1",
    measurementId: "G-TXX96Q5WF3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
