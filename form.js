const form = document.querySelector("form");
const first_Name = document.querySelector("#fname");
const last_Name = document.querySelector("#lname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

form.addEventListener("reset", () => {
    document.querySelectorAll(".input-group").forEach(g => {
        g.classList.remove("error", "success");
        const err = g.querySelector(".error-message");
        if (err) err.remove();
    });
});

function validateInputs() {
    validateField(first_Name, "First name cannot be blank");
    validateField(last_Name, "Last name cannot be blank");
    validateEmail(email);
    validateSelect(subject, "Please select a subject");
    validateField(message, "Message cannot be blank");
}

function validateField(input, msg) {
    const value = input.value.trim();
    const group = input.parentElement;

    if (value === "") {
        setError(group, msg);
    } else {
        setSuccess(group);
    }
}

function validateSelect(input, msg) {
    const group = input.parentElement;

    if (input.value === "") {
        setError(group, msg);
    } else {
        setSuccess(group);
    }
}

function validateEmail(input) {
    const value = input.value.trim();
    const group = input.parentElement;

    if (value === "") {
        setError(group, "Email cannot be blank");
    } else if (!isEmail(value)) {
        setError(group, "Invalid email format");
    } else {
        setSuccess(group);
    }
}

function setError(group, message) {
    group.classList.remove("success");
    group.classList.add("error");

    let errorText = group.querySelector(".error-message");
    if (!errorText) {
        errorText = document.createElement("div");
        errorText.className = "error-message";
        group.appendChild(errorText);
    }
    errorText.innerText = message;
}

function setSuccess(group) {
    group.classList.remove("error");
    group.classList.add("success");

    const errorText = group.querySelector(".error-message");
    if (errorText) errorText.remove();
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
