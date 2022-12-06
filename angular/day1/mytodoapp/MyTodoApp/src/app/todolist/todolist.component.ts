import {Component} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  todoText = '';
  todos: Todo[] = [];
  isEditMode = false;
  updateTodoIndex = -1;

  addTodo() {
    if (!(this.todoText === '')) {
      console.log("NEW item");
      const todo: Todo = {
        text: this.todoText,
        isCompleted: false,
      }
      this.todos.push(todo);
      this.todoText = '';
    } else {
      console.log("no text for new item");
    }
  }

  updateTodo() {
    console.log("UPDATE item nr:  " + this.updateTodoIndex);
    this.todos[this.updateTodoIndex].text = this.todoText;
    this.isEditMode = false;
    this.todoText = '';
    this.updateTodoIndex = -1;
  }

  editTodo(indexTodo: number) {
    console.log("EDIT item nr:  " + indexTodo);
    this.isEditMode = true;
    this.todoText = this.todos[indexTodo].text;
    this.updateTodoIndex = indexTodo;
  }

  deleteTodo(indexTodo: number) {
    console.log("DELETE item nr:  " + indexTodo);
    this.isEditMode = false;
    this.updateTodoIndex = -1;
    this.todoText = '';
    this.todos.splice(indexTodo, 1);
  }

  todoStyles(todo: Todo, todoIndex: number) {
    return {
      'todo--editing': todoIndex === this.updateTodoIndex,
      'todo--completed': todo.isCompleted
    }
  }
}

interface Todo {
  text: string;
  isCompleted: boolean;
}


