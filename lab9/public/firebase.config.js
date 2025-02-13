// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyBbw7ZVBMIo7MKYWfdyOqroJvqRtto_aYk",
    authDomain: "dekdee-d347f.firebaseapp.com",
    projectId: "dekdee-d347f",
    storageBucket: "dekdee-d347f.firebasestorage.app",
    messagingSenderId: "426867906024",
    appId: "1:426867906024:web:cda753b0a6a177796bc05d",
    measurementId: "G-Z8DRDQGNLJ"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}