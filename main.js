function saveData() {
    window.location = "kwitter_room.html";
    var username = document.getElementById("user_name").value;
    localStorage.setItem("users", username);
}