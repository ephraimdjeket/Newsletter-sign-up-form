const formEl = document.getElementById("newsletter-form") as HTMLFormElement;
const inputEmailField = document.getElementById("email") as HTMLFormElement;
const emailErrorMessageContainer = document.getElementById("email-error") as HTMLFormElement;
const emailPlaceHolder = document.getElementById("user-email") as HTMLElement;
const successPage = document.getElementById("subscription-confirmation-section") as HTMLElement;
const successPageElements: NodeListOf<Element> = successPage.querySelectorAll("*");
const newsletterFormSection = document.getElementById("newsletter-container") as HTMLElement;
const dismissBtn = document.getElementById("dismiss-button") as HTMLElement;


interface FormDataObject {
  [key: string]: string;
}


document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.getElementById("newsletter-form") as HTMLFormElement;

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    interface FormDataObject {
      [key: string]: string;
    }

    const formData = new FormData(formEl);

    const data: FormDataObject = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        value instanceof File ? value.name : String(value),
      ])
    );

    clearErrors();

    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      displayErrors(errors);
    } else {
      successPage.style.display = "flex";
      newsletterFormSection.style.display = "none";
      emailPlaceHolder.textContent = inputEmailField.value;
    }
  });

  function validateForm(data: FormDataObject): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errors.email = "Enter a valid email address";
    }

    return errors;
  }

  function displayErrors(errors: Record<string, string>) {
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
