var formEl = document.getElementById("newsletter-form");
var inputEmailField = document.getElementById("email");
var emailErrorMessageContainer = document.getElementById("email-error");
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(formEl);
    console.log(formData);
});
