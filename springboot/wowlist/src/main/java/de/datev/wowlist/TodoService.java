package de.datev.wowlist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
public class TodoService {

    List<Todo> todoList = new ArrayList();
    Logger logger = LoggerFactory.getLogger(TodoController.class);

    public List getTodos() {
        logger.info("LOG: Received request to return all todos, returning " + todoList.size() + " todo(s).");
        return todoList;
    }

    public Todo createTodo(Todo todo) {

        Todo newTodo = new Todo(todo.getDescription(), todo.isDone());

        todoList.add(newTodo);
        logger.info("LOG: added " + todo.getDescription());
        return todo;
    }

    public List<Todo> getTodoList() {
        return todoList;
    }

    public void setTodoList(List<Todo> todoList) {
        this.todoList = todoList;
    }

//    public Todo updateTodo(Todo changedTodo, UUID id) {
//
//        for (Todo todoTemp : todoList) {
//            if (todoTemp.getId().equals(id)) {
//                todoTemp.setDescription(changedTodo.getDescription());
//                return todoTemp;
//            }
//        }
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//    }

    public Todo updateTodo(UUID id, Todo updatedTodo) {
        for (Todo todo : todoList) {
            if (todo.getId().equals(id)) {
                todo.setDescription(updatedTodo.getDescription());
            }
        }
        return updatedTodo;
    }

    public void deleteTodo(UUID id) {
        todoList.removeIf((todo) -> todo.getId().equals(id));
    }
}
//        for (Todo todo : todoList) {
//            if (todo.getId().equals(id)) {
//                todoList.remove(todo);
//            }
//        }
//}
//}
