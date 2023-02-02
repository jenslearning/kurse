package de.datev.wowlist;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Note {

    @Id
    UUID id;

    @Column
    String description;

    @ManyToOne
    @JoinColumn(name = "todo_id")
    private Todo todo;

    public Note() {
        this.id = UUID.randomUUID();
    }

    public Note(UUID id, String description) {
        this.id = id;
        this.description = description;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }
}
