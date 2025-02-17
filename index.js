const formEl = document.getElementById("newsletter-form");
const newsletterFormContainer = document.getElementById("newsletter-container");
const successPage = document.getElementById("confirmation-container");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-button");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function validateEmail(e) {
  e.preventDefault();

  const isValid = emailInput.value.trim().match(emailRegex);

  if (isValid) {
    emailInput.classList.add("green");
    newsletterFormContainer.style.display = "none";
    successPage.style.display = "flex";
    userEmail.textContent = emailInput.value;
  } else {
    emailInput.classList.add("red");
    errorMessage.classList.remove("hidden");
  }
};

function returnBack() {
  newsletterFormContainer.style.display = "flex";
  successPage.style.display = "none";
  emailInput.value = "";
  emailInput.classList.remove("red", "green");
  errorMessage.classList.add("hidden");
}


formEl.addEventListener("submit", validateEmail);

dismissBtn.addEventListener("click", returnBack);


