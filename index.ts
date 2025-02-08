const formEl = document.getElementById("newsletter-form") as HTMLFormElement;
const inputEmailField = document.getElementById("email") as HTMLFormElement;
const emailErrorMessageContainer = document.getElementById("email-error") as HTMLFormElement;


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries());
})