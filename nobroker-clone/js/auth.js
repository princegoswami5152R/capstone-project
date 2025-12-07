// js/auth.js

function openModal(type) {
    document.getElementById("authModal").style.display = "flex";

    if (type === 'login') {
        document.getElementById("modalTitle").textContent = "Login";
        document.getElementById("submitBtn").textContent = "Login";
        document.getElementById("switchText").innerHTML = `Don't have an account? <span onclick="openModal('signup')" class="link">Sign Up</span>`;
    } else {
        document.getElementById("modalTitle").textContent = "Sign Up";
        document.getElementById("submitBtn").textContent = "Sign Up";
        document.getElementById("switchText").innerHTML = `Already have an account? <span onclick="openModal('login')" class="link">Login</span>`;
    }
}

function closeModal() {
    document.getElementById("authModal").style.display = "none";
}

// Click outside modal to close karega
window.onclick = function(e) {
    const modal = document.getElementById("authModal");
    if (e.target === modal) {
        closeModal();
    }
}

// Form submit (bas alert dikhayega, real login nahi hai)
document.getElementById("authForm").onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    alert("Welcome, " + username + "! You are now logged in");
    closeModal();
    document.getElementById("authForm").reset();
}