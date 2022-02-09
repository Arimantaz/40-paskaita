let productList = [];


function deleteElementInContainer(elmentQuerySelector, containerElementId) {
    const elementToDelete = document.querySelector(elmentQuerySelector);

    if (elementToDelete) {
        const container = document.getElementById(containerElementId);
        container.removeChild(elementToDelete);
    }
}

function writeErrorMessage() {
    const inputField = document.getElementById("todo-input-field");
    const errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.innerText = "Klaida! Įveskite pirkinio pavadinimą.";
    inputField.appendChild(errorMessage);
}


function renderList() {
    const listElement = document.createElement("ul");

    // productList = ["abc"(0), "xyz"(1), "123"(2)]
    // jo ilgis yra 3

    for (let index = 0; index < productList.length; index++) {
        const productValue = productList[index];
        const productElement = document.createElement("li");
        productElement.innerText = productValue;
        listElement.appendChild(productElement);
    }

    const appSection = document.getElementById("todo-app");
    appSection.appendChild(listElement);
}




function getInputValue() {
    // pasiimame seną žinutę, jei ji yra
    // const oldErrorMessage = document.querySelector("#todo-input-field p.error")
    // // gauname arba "Element" arba "null" (nes gali P elemento viduje nebūti)
    // // jeigu yra sena žinutė, tai ją reikia "išimti"
    // if (oldErrorMessage) {
    //     const inputField = document.getElementById("todo-input-field");
    //     inputField.removeChild(oldErrorMessage);
    // }

    deleteElementInContainer("#todo-input-field p.error", "todo-input-field")

    // VERTĖS PASIĖMIMAS
    const inputElement = document.getElementById("todo-input");
    const inputValue = inputElement.value;
    inputElement.value = "";

    if (!inputValue) {
        writeErrorMessage()
        // Programa sustoja, kai vertės nėra ČIA.
        return
    }
    productList.push(inputValue)

    // ištrinimas seno pranešimo
    // const oldWarning = document.querySelector("#todo-app p");
    // if (oldWarning) {
    //     const appSection = document.getElementById("todo-app");
    //     appSection.removeChild(oldWarning);
    // }
    deleteElementInContainer("#todo-app p", "todo-app")


    // ištrinamas iš html 
    // const oldList = document.querySelector("#todo-app ul");
    // if (oldList) {
    //     const appSection = document.getElementById("todo-app");
    //     appSection.removeChild(oldList);
    // }

    deleteElementInContainer("#todo-app ul", "todo-app")
    renderList()

}

function removeInputValue() {
    productList = []
    const listElement = document.querySelector("#todo-app ul");
     if (listElement) {
        const appSection = document.getElementById("todo-app");
         appSection.removeChild(listElement);
         const inputField = document.getElementById("todo-app");
            const cleanMessage = document.createElement("p");
            cleanMessage.className = "clean";
            cleanMessage.innerText = "Sarasas yra tuscias!!!";
            inputField.appendChild(cleanMessage);
        }   
}

const addButton = document.getElementById("todo-button-add");
addButton.onclick = getInputValue;

const removeButton = document.getElementById("todo-button-clear");
removeButton.onclick = removeInputValue;


/**
 * KĄ PADARYTI
 * 
 * Kitą funckiją, kuri "prikabinta" prie kito mygtuko. 
 * Kuri ištrina sąrašo elementus ir parodo "sąrašas yra tuščias" žinutę.
 * 
 * Jei sąrašas yra tuščias, tai funkcija nieko nedaro.
 * 
 */

