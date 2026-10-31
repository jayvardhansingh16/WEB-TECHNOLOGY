
function togglePassword() {
    let password = document.getElementById("password");
    let checkbox = document.getElementById("showPassword");

    if (checkbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Greet user after login
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;

    alert("Welcome, " + username + "! You have logged in successfully.");
});
