import {Component, OnInit} from '@angular/core';
import {ChucknorrisService} from "../chucknorris.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoText = '';
  todos: Todo[] = [
    {text: 'Garten aufräumen', isCompleted: false},
    {text: 'Garage aufräumen', isCompleted: false},
    {text: 'Dachboden kündigen', isCompleted: false},
    {text: 'Bar putzen', isCompleted: false}
  ];
  isEditMode = false;
  updateTodoIndex = -1;
  jokeText = '';

  constructor(
    private chucknorrisService: ChucknorrisService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.chucknorrisService.reloadJokeEvent.subscribe(() => {
      this.chucknorrisService.reloadJoke().subscribe((joke) => {
        this.jokeText = joke.value;
      });

    });
  }


  addTodo() {
    if (!(this.todoText === '')) {
      const todo: Todo = {
        text: this.todoText,
        isCompleted: false,
      };
      this.todos.push(todo);
      this.todoText = '';
    }

  }

  editTodo(indexTodo: number) {
    this.isEditMode = true;
    this.todoText = this.todos[indexTodo].text;
    this.updateTodoIndex = indexTodo;
  }

  updateTodo() {
    this.todos[this.updateTodoIndex].text = this.todoText;
    this.isEditMode = false;
    this.todoText = '';
    this.updateTodoIndex = -1;
  }

  deleteTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
    this.chucknorrisService.reloadJoke().subscribe(joke => {
      this.jokeText = joke.value
    })
  }

  goToAboutMe() {
    this.router.navigate(['about']);
  }
}

export interface Todo {
  text: string;
  isCompleted: boolean;
}
