const validationInput = document.querySelector('#validation-input');

const dataLength = validationInput.getAttribute("data-length");
validationInput.addEventListener("blur", () => {
    if (validationInput.value.length == dataLength) {
        validationInput.classList.remove("invalid");
     validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
 }
});