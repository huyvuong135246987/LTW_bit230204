document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var icon = document.getElementById('togglePassword').querySelector('i'); 

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye'); 
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        alert("Vui lòng nhập đúng định dạng email.");
        return false;
    }

    if (password.trim() === "") {
        alert("Vui lòng nhập mật khẩu.");
        return false;
    }

    return true;
}
