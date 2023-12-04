package com.example.projectflow.models;

import com.example.projectflow.models.enums.PriorityEnum;
import com.example.projectflow.models.enums.StatusEnum;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    @ManyToOne
    @JoinColumn(name = "assignedById", nullable = false)
    private User assignedById;

    @ManyToOne
    @JoinColumn(name = "assignedToId", nullable = false)
    private User assignedToId;

    @ManyToOne
    @JoinColumn(name = "projectId", nullable = false)
    private Project projectId;

    private String name;
    private String description;
    private Date startDate;
    private Date endDate;

    @Enumerated(EnumType.STRING)
    private PriorityEnum priority;

    @Enumerated(EnumType.STRING)
    private StatusEnum status;

    private Integer progress;

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public User getAssignedById() {
        return assignedById;
    }

    public void setAssignedById(User assignedById) {
        this.assignedById = assignedById;
    }

    public User getAssignedToId() {
        return assignedToId;
    }

    public void setAssignedToId(User assignedToId) {
        this.assignedToId = assignedToId;
    }

    public Project getProjectId() {
        return projectId;
    }

    public void setProjectId(Project projectId) {
        this.projectId = projectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public PriorityEnum getPriority() {
        return priority;
    }

    public void setPriority(PriorityEnum priority) {
        this.priority = priority;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public Integer getProgress() {
        return progress;
    }

    public void setProgress(Integer progress) {
        this.progress = progress;
    }
}
