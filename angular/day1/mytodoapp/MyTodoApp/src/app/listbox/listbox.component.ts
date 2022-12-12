import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todolist/todolist.component';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss'],
})
export class ListboxComponent {
  @Input()
  todos: Todo[] = [];

  @Input()
  updateTodoIndex = -1;

  @Output()
  editTodoClick = new EventEmitter<number>();

  @Output()
  deleteTodoClick = new EventEmitter<number>();

  editTodo(todoIndex: number) {
    this.editTodoClick.emit(todoIndex);
  }

  deleteTodo(todoIndex: number) {
    this.deleteTodoClick.emit(todoIndex);
  }

  todoStyles(todo: Todo, todoIndex: number) {
    return {
      'todo--editing': todoIndex === this.updateTodoIndex,
      'todo--completed': todo.isCompleted,
    }
  }
}
