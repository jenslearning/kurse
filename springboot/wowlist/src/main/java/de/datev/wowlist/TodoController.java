package de.datev.wowlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController()
//@RequestMapping("/todo")
public class TodoController {

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    final TodoService todoService;



    @GetMapping("/todos")
    public List getTodos() {
        return todoService.getTodos();
    }

    @GetMapping("/todos/query")
    public List getTodoByDescription(@RequestParam("description") String description) {

        return todoService.getTodoByDescription(description);
    }

    @PostMapping("/todos")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createTodos(@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }


    @PutMapping("/todos/{id}")
    public Todo updateTodos(@RequestBody Todo todo, @PathVariable("id") UUID id) {
        return todoService.updateTodo(id, todo);
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodos(@PathVariable("id") UUID id) {
        todoService.deleteTodo(id);
    }

    @PostMapping("/todos/{todoId}/subtasks")
    @ResponseStatus(HttpStatus.CREATED)
    public void createSubtask(@PathVariable UUID todoId, @RequestBody Subtask subtask) {
        todoService.createSubtask(todoId, subtask);
    }

    @PostMapping("/todos/{todoId}/notes")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createNote(@PathVariable UUID todoId, @RequestBody Note note) {
        return todoService.createNote(todoId, note);
    }
}
