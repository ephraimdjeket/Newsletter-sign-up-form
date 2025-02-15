const formEl = document.getElementById("newsletter-form");
const newsletterFormContainer = document.getElementById("newsletter-container");
const successPage = document.getElementById("confirmation-container");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const validateEmail = (e) => {
  e.preventDefault();

  errorMessage.classList.add("hidden");
  emailInput.classList.remove("red", "green");

  if (emailInput.value.trim().match(emailRegex)) {
    emailInput.classList.add("green");
    newsletterFormContainer.style.display = "none";
    successPage.style.display = "block";

  } else {
    emailInput.classList.add("red");
    errorMessage.classList.remove("hidden");
  }
};

formEl.addEventListener("submit", validateEmail);


