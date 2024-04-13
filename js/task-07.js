const fontsizeControl = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");
fontsizeControl.addEventListener("input", (event) => {
    spanText.style.fontSize = event.currentTarget.value +"px";
   
    
});