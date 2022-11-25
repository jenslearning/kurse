const addTodoButton = document.getElementById("addTodoButton");
const todoTextBox = <HTMLInputElement>document.getElementById("todoTextBox");
const updateTodoTextBox = <HTMLInputElement>document.getElementById("updateTodoTextBox");

addTodoButton?.addEventListener("click", () => {
    const todoItemTemplate = (<HTMLTemplateElement>document.getElementById("todoItemTemplate"));
    const todoItemTemplateContent = todoItemTemplate.content.cloneNode(true) as HTMLElement;

    const todoText = (<HTMLElement>todoItemTemplateContent.querySelector("#todoText"));
    todoText.innerText = todoTextBox.value;

    const removeTodo = <HTMLElement>todoItemTemplateContent.querySelector("#removeTodo");
    removeTodo.addEventListener("click", function () {
        (this.parentNode as HTMLUListElement)?.remove();
    });

    var todoCheckBox = <HTMLInputElement>todoItemTemplateContent.querySelector("#todoCheckBox");
    todoCheckBox.addEventListener("change", () => {
        if (todoCheckBox.checked) {
            todoCheckBox.parentNode!.querySelector("#todoText")!.classList.add("todo-done");
        } else {
            todoCheckBox.parentNode!.querySelector("#todoText")!.classList.remove("todo-done");
        }
    });

    todoText.addEventListener("click", function () {
        document.getElementById("editTodoBlock")!.hidden = false;
        document.getElementById("newTodoBlock")!.hidden = true;

        updateTodoTextBox!.value = this.innerText;
        this.setAttribute("data-todo-edit", "");
    });

    document.getElementById("todoListBox")?.appendChild(todoItemTemplateContent);
    todoTextBox.value = "";
});

document.getElementById("updateTodoButton")?.addEventListener("click", () => {
    document.getElementById("editTodoBlock")!.hidden = true;
    document.getElementById("newTodoBlock")!.hidden = false;

    var todoText = <HTMLElement>document.querySelector("[data-todo-edit]");
    todoText.innerText = updateTodoTextBox.value;

    todoText.removeAttribute("data-todo-edit");
    updateTodoTextBox.value = "";
});