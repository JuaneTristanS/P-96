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

var user_name = localStorage.getItem("users");
var room_name = localStorage.getItem("room list");

function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";

}