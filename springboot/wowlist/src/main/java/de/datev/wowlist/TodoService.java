package de.datev.wowlist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;


@Service
public class TodoService {

    private TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    Logger logger = LoggerFactory.getLogger(TodoController.class);

    public List getTodos() {
        logger.info("LOG: Received request to return all todos, returning " + todoRepository.count() + " todo(s).");
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {
        Todo newTodo = new Todo(todo.getDescription(), todo.isDone());
        logger.info("LOG: added " + todo.getDescription());
        return todoRepository.save(newTodo);
    }

    public void setTodoRepository(List<Todo> todoList) {
        this.todoRepository = todoRepository;
    }

    public Todo updateTodo(UUID id, Todo updatedTodo) {
        Todo todoToChange = todoRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatusCode.valueOf(404)));
        todoToChange.setDescription(updatedTodo.getDescription());
        return  todoRepository.findById(id).get();
    }

    public void deleteTodo(UUID id) {
        todoRepository.deleteById(id);
    }

    public List<Todo> getTodoByDescription(String description) {
        return todoRepository.findByDescriptionLikeIgnoreCase(description);
    }

    public void createSubtask(UUID todoId, Subtask subtask) {
        // 1. find the task, that the subtask should be added to
        Todo todoToChange = todoRepository.findById(todoId).orElseThrow(() -> new ResponseStatusException(HttpStatusCode.valueOf(404)));

        // 2. add the subtask
        todoToChange.addSubtask(subtask);

        // 3. save the todo from 1.
        todoRepository.save(todoToChange);
    }

}
