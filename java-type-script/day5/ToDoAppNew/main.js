var addTodoButton = document.getElementById("addTodoButton");
addTodoButton.addEventListener("click", function () {
    var _a;
    const todoItemTemplate = document.getElementById("todoItemTemplate").content.cloneNode(true);
    const todoText = todoItemTemplate.querySelector("#todoText");
    todoText.innerText = (_a = document.getElementById("todoTextBox")) === null || _a === void 0 ? void 0 : _a.value;
    // var todoItemTemplate = (<HTMLTemplateElement>document.getElementById("todoItemTemplate")).content.cloneNode(true);
    // //let todoItemTemplate = <HTMLInputElement>document.getElementById("todoTextBox");
    // //let test = todoItemTemplate.value;
    // (todoItemTemplate.querySelector("#todoText")as HTMLElement).innerText = todoItemTemplate.value;
    todoItemTemplate.querySelector("#removeTodo").addEventListener("click", function () {
        this.parentNode.remove();
    });
    var todoCheckBox = todoItemTemplate.querySelector("#todoCheckBox");
    todoCheckBox.addEventListener("change", function () {
        if (this.checked) {
            this.parentNode.querySelector("#todoText").classList.add("todo-done");
        }
        else {
            this.parentNode.querySelector("#todoText").classList.remove("todo-done");
        }
    });
    todoItemTemplate.querySelector("#todoText").addEventListener("click", function () {
        document.getElementById("editTodoBlock").hidden = false;
        document.getElementById("newTodoBlock").hidden = true;
        const updateTodoTextBox = document.getElementById("updateTodoTextBox");
        updateTodoTextBox.value = this.innerText;
        this.setAttribute("data-todo-edit", "");
    });
    document.getElementById("todoListBox").appendChild(todoItemTemplate);
    const todoTextBox = document.getElementById("todoTextBox");
    todoTextBox.value = "";
    //document.getElementById("todoTextBox").value = "";
});
document.getElementById("updateTodoButton").addEventListener("click", function () {
    document.getElementById("editTodoBlock").hidden = true;
    document.getElementById("newTodoBlock").hidden = false;
    const todoText = document.querySelector("[data-todo-edit]");
    todoText.value = this.innerText;
    todoText.removeAttribute("data-todo-edit");
    document.getElementById("updateTodoTextBox").value = "";
});
