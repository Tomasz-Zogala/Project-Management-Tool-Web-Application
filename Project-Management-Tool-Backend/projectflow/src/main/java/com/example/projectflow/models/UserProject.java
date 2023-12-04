package com.example.projectflow.models;

import jakarta.persistence.*;

@Entity
public class UserProject {

    @EmbeddedId
    private UserProjectId id;

    public UserProjectId getId() {
        return id;
    }

    public void setId(UserProjectId id) {
        this.id = id;
    }
}