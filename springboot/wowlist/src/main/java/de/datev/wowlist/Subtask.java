package de.datev.wowlist;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.util.UUID;

@Entity
public class Subtask {
    @Id
    UUID id;

    @Column
    String description;

    @ManyToOne
    private Todo todo;

    public Subtask() {
        this.id = UUID.randomUUID();
    }

    public Subtask(String description) {
        this.id = UUID.randomUUID();
        this.description = description;
    }
}
