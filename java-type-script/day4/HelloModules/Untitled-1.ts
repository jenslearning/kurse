const todoItemTemplate = (<HTMLTemplateElement>document.getElementById("todoItemTemplate")).content.cloneNode(true) as HTMLElement;
const todoText = todoItemTemplate.querySelector("#todoText") as HTMLElement;
todoText!.innerText = (document.getElementById("todoTextBox") as HTMLInputElement)?.value;
