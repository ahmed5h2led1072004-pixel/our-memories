function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const error = document.getElementById('error');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');

    const correctPassword = "972025"; // هنا حط الباسورد اللي تحبه

    if (passwordInput === correctPassword) {
        loginContainer.style.display = "none";
        content.style.display = "block";
    } else {
        error.textContent = "الباسورد خطأ 😢 حاول مرة تانية";
    }
}