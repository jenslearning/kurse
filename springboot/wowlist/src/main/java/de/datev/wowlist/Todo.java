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

    @OneToMany(mappedBy = "todo", cascade = CascadeType.ALL) // one todo can have multiple subtasks, cascade = save not only the todo, but all the subtasks
    private List<Subtask> subtasks = new ArrayList<>();

    @OneToMany(mappedBy = "todo", cascade = CascadeType.ALL)
    private List<Note> notes = new ArrayList<>();

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

    public void addNote(Note note) {
        this.notes.add(note);
        note.setTodo(this);
    }

    public List<Subtask> getSubtasks() {
        return subtasks;
    }

    public void setSubtasks(List<Subtask> subtasks) {
        this.subtasks = subtasks;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }
}
