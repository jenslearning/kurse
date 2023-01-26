package de.datev.wowlist;

import java.util.UUID;

public class Todo {

    private String description;
    private boolean done;


    public Todo(String description, boolean done) {
        this.description = description;
        this.done = false;
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

    private UUID id;
}
