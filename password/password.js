addEventListener("load", () => {
    Array.from(document.getElementsByClassName("tr-off")).forEach(el => {
        el.classList.remove("tr-off");
    });
});

const verify = () => {
    const passwordField = document.getElementById("password");
    const confirmField = document.getElementById("confirm-password");
    const statusText = document.getElementById("password-status-text");

    const password = passwordField.value;
    const confirmText = confirmField.value;

    if (password !== confirmText) {
        passwordField.classList.add("password-invalid");
        confirmField.classList.add("password-invalid");

        statusText.textContent = "Passwords do not match";
        statusText.classList.remove("password-status-text-valid");
        statusText.classList.remove("hidden");
    }
    else if (password.length == 0) {
        passwordField.classList.remove("password-invalid");
        confirmField.classList.remove("password-invalid");

        statusText.classList.add("hidden");
        statusText.classList.remove("password-status-text-valid");
    }
    else if (password.length < 8) {
        passwordField.classList.add("password-invalid");
        confirmField.classList.add("password-invalid");

        statusText.textContent = "Password is too short";
        statusText.classList.remove("password-status-text-valid");
        statusText.classList.remove("hidden");
    }
    else {
        passwordField.classList.remove("password-invalid");
        confirmField.classList.remove("password-invalid");

        statusText.textContent = "Passwords match";
        statusText.classList.add("password-status-text-valid");
    }
}

document.getElementById("password").addEventListener("input", verify);
document.getElementById("confirm-password").addEventListener("input", verify);
