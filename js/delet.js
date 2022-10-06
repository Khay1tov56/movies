let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".list");

let todoArray = JSON.parse(window.localStorage.getItem("data")) || [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let elInputValue = elInput.value;

    let obj = {
        id: todoArray.lenght > 0 ? todoArray[todoArray.lenght - 1].id + 1 : 1,
        name: elInputValue,
        isComplete: false,
    }

    if (elInputValue !== "") {
        todoArray.push(obj);
    }

    window.localStorage.setItem("data", JSON.stringify(todoArray));

    elInput.value = "";

    createTodo(todoArray, elList)
})

function createTodo(arr, element) {
    element.innerHTML = "";

    arr.forEach(obj => {

        let elItem = document.createElement("li");
        let elText = document.createElement("p");
        let elButton = document.createElement("button");

        elButton.classList.add("delet");

        elButton.textContent = "delete";
        elText.textContent = obj.name;
        elButton.dataset.id = obj.id;

        elItem.appendChild(elText);
        elItem.appendChild(elButton);
        element.appendChild(elItem);
    });
}

createTodo(todoArray, elList);

elList.addEventListener("click", function (evt) {
    if (evt.target.matches(".delet")) {
        let btnId = Number(evt.target.dataset.id);
        let itemFind = todoArray.findIndex(obj => obj.id === btnId);
        todoArray.splice(itemFind, 1);

        console.log(todoArray);

        window.localStorage.setItem("data", JSON.stringify(todoArray))
        createTodo(todoArray, elList)

    }
})