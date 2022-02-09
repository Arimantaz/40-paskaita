
// const ulElement = document.getElementById();
// const ulElement = document.getElementsByTagName();
// const ulElement = document.getElementsByClassName();

// const element = querySelector()
// console.log(document)

// function addShoppingListEntry() {
//     const inputElemnet = document.getElementById("todo-input");
//     const shoppingListValue = inputElemnet.value;
//     inputElemnet.value = "";
    
//     console.log(shoppingListValue)
// //Sukuria nauja elementa
//     const liElement = document.createElement("li");
//     const ulElement = document.getElementById("todo-list");
//     liElement.innerText = shoppingListValue;
//     ulElement.appendChild(liElement);
   
// const addButton = document.getElementById("todo-button-add");
// addButton.onclick = addShoppingListEntry;
// console.log(addButton);
const productList = [];

function deleteElementInContainer(elementQueryselector, containerElementId){
const elementToDelete = document.querySelector(elementQueryselector);
if (elementToDelete) {
    const container = document.getElementById(containerElementId);
    container.removeChild(elementToDelete);
}
}




function getInputValue() {
// const oldErrorMessege = document.querySelector("#todo-input-field p.error");
// if (oldErrorMessege) {
//     const inputField = document.getElementById("todo-input-field");
//     inputField.removeChild(oldErrorMessege);
// }


     const inputElemnet = document.getElementById ("todo-input");
     const inputValue = inputElemnet.value;
deleteElementInContainer("#todo-input-field p.error, todo-input-field, ");

if (!inputValue) {
    const inputField = document.getElementById("todo-input-field");
    const errorMessage = document.createElement ("p");
    errorMessage.className = "error";
    errorMessage.innerText = "Klaida, iveskite teksta";
    inputField.appendChild(errorMessage);
    return
}

productList.push(inputValue)

const oldWardning = document.querySelector("#todo-app p")
if (oldWardning) {
    const appsection = document.getElementById("todo-app");
    appsection.removeChild(oldWardning);
}

const oldList = document.querySelector("#todo-app ul")
if (oldList) {
    const appsection = document.getElementById("todo-app");
    appsection.removeChild(oldList);
}

const listElement = document.createElement("ul");

for(let index = 0; index < productList.length; index++){
const product = productList[index];
const productElement = document.createElement("li");
productElement.innerText = product;
listElement.appendChild(productElement);
console.log(productElement)
}

const appsection = document.getElementById("todo-app");
appsection.appendChild(listElement);

}
const addButton = document.getElementById("todo-button-add");
addButton.onclick = getInputValue;