const togglePw = document.getElementById("togglePw");
const passwordField = document.getElementById("password");

togglePw.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePw.classList.remove("uil-eye-slash");
        togglePw.classList.add("uil-eye");
    } else {
        passwordField.type = "password";
        togglePw.classList.remove("uil-eye");
        togglePw.classList.add("uil-eye-slash");
    }
});

document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    window.location.href = 'welcome.html';
};