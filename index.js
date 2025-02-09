"use strict";
const formEl = document.getElementById("newsletter-form");
const inputEmailField = document.getElementById("email");
const emailErrorMessageContainer = document.getElementById("email-error");
const emailPlaceHolder = document.getElementById("user-email");
const successPage = document.getElementById("subscription-confirmation-section");
const successPageElements = successPage.querySelectorAll("*");
const newsletterFormSection = document.getElementById("newsletter-container");
const dismissBtn = document.getElementById("dismiss-button");
document.addEventListener("DOMContentLoaded", () => {
    const formEl = document.getElementById("newsletter-form");
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(formEl);
        const data = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [
            key,
            value instanceof File ? value.name : String(value),
        ]));
        clearErrors();
        const errors = validateForm(data);
        if (Object.keys(errors).length > 0) {
            displayErrors(errors);
        }
        else {
            successPage.style.display = "flex";
            newsletterFormSection.style.display = "none";
            emailPlaceHolder.textContent = inputEmailField.value;
        }
    });
    function validateForm(data) {
        const errors = {};
        if (!data.email.trim()) {
            errors.email = "Email is required";
        }
        else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
            errors.email = "Enter a valid email address";
        }
        return errors;
    }
    function displayErrors(errors) {
        Object.entries(errors).forEach(([key, message]) => {
            const errorElement = document.getElementById(`${key}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.color = "red";
            }
        });
    }
    function clearErrors() {
        document.querySelectorAll("span[aria-live='polite']").forEach((span) => {
            span.textContent = "";
        });
    }
});
dismissBtn.addEventListener("click", () => {
    successPage.style.display = "none";
    newsletterFormSection.style.display = "flex";
});
