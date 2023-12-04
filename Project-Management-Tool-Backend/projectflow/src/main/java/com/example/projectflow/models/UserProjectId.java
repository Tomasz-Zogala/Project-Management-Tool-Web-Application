package com.example.projectflow.models;

import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class UserProjectId implements Serializable {

    private Long userId;
    private Long projectId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }
}
