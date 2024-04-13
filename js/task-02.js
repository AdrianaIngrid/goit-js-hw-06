const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//const listItems = ingredients.map((ingredient) => {
 // const curentli = document.createElement("li");
 // curentli.innerText = ingredient;
 // return curentli;
//});
//const ul = document.getElementById("ingredients");
//listItems.forEach((item) => ul.appendChild(item));

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((item) => {
  const liItem = document.createElement("li");
liItem.classList.add("item");
  liItem.textContent = `${item}`;
ingredientsList.appendChild(liItem);
});
