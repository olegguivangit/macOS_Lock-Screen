// Password is "password"

document.addEventListener("DOMContentLoaded", function () {
    const lockScreen = document.getElementById('lock');
    const passwordSec = document.querySelector('.password');
    const passwordInput = document.getElementById('pass');
    const passwordButton = document.querySelector('.password_btn');
    const loadingBar = document.querySelector('.loading');
    const desktop = document.querySelector('.desktop');

    passwordButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (passwordInput.value === 'password') {
            showLoading();
        } else {
            passwordSec.style.animation = 'shake 0.4s ease-in-out';
            setTimeout(function () {
                passwordSec.style.animation = '';
                passwordInput.value = '';
            }, 400);
        }
    });

    function showLoading() {
        passwordSec.style.opacity = '0';
        loadingBar.classList.add('active');
        setTimeout(function () {
            loadingBar.classList.remove('active');
            showDesktop();
        }, 2000);
    }

    function showDesktop() {
        lockScreen.style.display = 'none';
        desktop.style.display = 'block';
    }
});