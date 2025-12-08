function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function openSignup() {
    document.getElementById("signupPopup").style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

const emailInput = document.getElementById("user");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
         emailError.textContent = "Email should contain @";
        } else {
            emailError.textContent = "";
    }
});

(function () {
    const passwordInput = document.getElementById('password');
    const passError = document.getElementById('passError');
    
    function hasSpecialChar(s) {
        if (!s) return false;
        return /[^A-Za-z0-9]/.test(s);
    }
    function toggleMenu() {
        document.getElementById("mobileMenu").classList.toggle("show");
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            if (passwordInput.value === '') {
                if (passError) passError.textContent = '';
                return;
            }
            if (!hasSpecialChar(passwordInput.value)) {
                if (passError) passError.textContent = 'Password should include at least one special character.';
            } else {
                if (passError) passError.textContent = '';
            }
        });
    }
})();



