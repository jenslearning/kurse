package de.datev.wowlist;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Subtask {
    @Id
    UUID id;

    @Column
    String description;

    @ManyToOne
    @JoinColumn(name = "todo_id")
    private Todo todo;


    public Subtask() {
        this.id = UUID.randomUUID();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Todo getTodo() {
        return todo;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }
}
