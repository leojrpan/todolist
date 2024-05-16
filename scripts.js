let listItem = document.getElementById("list");
let addToDo = document.getElementById("add-todo");
let searchBar = document.getElementById("search-bar");

let listOfToDos = [];

function clearList () {
    while (listItem.firstChild) {
        listItem.removeChild(listItem.firstChild);
    }
}

function showList () {
    for (i = 0; i < listOfToDos.length; i ++) {
        let newToDo = document.createElement("li");
        newToDo.innerHTML = listOfToDos[i];
        newToDo.className = "line";
        listItem.appendChild(newToDo);
    }
}

addToDo.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && addToDo.value != "") {
        clearList();
        listOfToDos.push(addToDo.value);
        addToDo.value = "";
        showList();
    }
})

listItem.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        listOfToDos.pop(e.target);
        e.target.remove();
    }
})