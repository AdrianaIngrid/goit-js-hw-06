const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const pasword = form.elements.password.value;
    if (login === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}
