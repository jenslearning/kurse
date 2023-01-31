package de.datev.wowlist;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Todo {

    @Column
    @NotBlank
    private String description;

    @Column
    private boolean done;

    @Id
    private UUID id;

    @OneToMany(mappedBy = "todo", cascade = CascadeType.ALL) // one todo can have multiple subtasks
    private List<Subtask> subtasks = new ArrayList<>();

    public Todo(String description, boolean done) {
        this.description = description;
        this.done = false;
        this.id = UUID.randomUUID();
    }

    // this constructor is required by jpa
    public Todo() {
        this.id = UUID.randomUUID();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void addSubtask(Subtask subtask) {
        this.subtasks.add(subtask);
        subtask.setTodo(this);
    }
}
