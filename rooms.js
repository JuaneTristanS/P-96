var firebaseConfig = {
    apiKey: "AIzaSyAm3QFGcfQsviaBuzW7dDBPWFVfge8wvF0",
    authDomain: "twitter-9d99c.firebaseapp.com",
    databaseURL: "https://twitter-9d99c-default-rtdb.firebaseio.com",
    projectId: "twitter-9d99c",
    storageBucket: "twitter-9d99c.appspot.com",
    messagingSenderId: "67780661081",
    appId: "1:67780661081:web:5de66162bb73211a064648",
    measurementId: "G-2T2F8Q1W65"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function LogOut() {
    window.location = "index.html";
    localStorage.removeItem("users");
    localStorage.removeItem("room list");
}