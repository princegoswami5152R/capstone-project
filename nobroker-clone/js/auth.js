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



// Siqnup 

const emailInput1 = document.getElementById("user1");
const emailError1 = document.getElementById("emailError1");

emailInput1.addEventListener("input", function () {
    if (!emailInput1.value.includes("@")) {
         emailError1.textContent = "Email should contain @";
        } else {
            emailError1.textContent = "";
    }
});
(function () {
    const passwordInput1 = document.getElementById('password1');
    const passError1 = document.getElementById('passError1');

    function hasSpecialChar(s) {
        if (!s) return false;
        return /[^A-Za-z0-9]/.test(s);
    }

    if (passwordInput1) {
        passwordInput1.addEventListener('input', function () {
            if (passwordInput1.value === '') {
                if (passError1) passError1.textContent = '';
                return;
            }
            if (!hasSpecialChar(passwordInput1.value)) {
                if (passError1) passError1.textContent = 'Password should include at least one special character.';
            } else {
                if (passError1) passError1.textContent = '';
            }
        });
    }
})();
