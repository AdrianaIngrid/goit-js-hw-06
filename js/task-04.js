let counterValue = 0;
const counterValueElem = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", () => {
   counterValue -= 1; 
    counterValueElem.textContent = counterValue;
});
btnIncrement.addEventListener("click", () => {
   counterValue += 1;
   counterValueElem.textContent = counterValue;
});



