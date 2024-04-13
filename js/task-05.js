const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (writeName) => {
    
    nameOutput.textContent = writeName.currentTarget.value;
    if (nameInput === "") {
        return console.log("Hello, Anonymous!");
    }
    
});