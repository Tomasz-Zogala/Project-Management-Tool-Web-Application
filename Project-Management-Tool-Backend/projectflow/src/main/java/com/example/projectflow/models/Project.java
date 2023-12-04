package com.example.projectflow.models;

import com.example.projectflow.models.enums.PriorityEnum;
import com.example.projectflow.models.enums.StatusEnum;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;

    @ManyToOne
    @JoinColumn(name = "companyId", nullable = false)
    private Company companyId;

    @ManyToOne
    @JoinColumn(name = "managerId", nullable = false)
    private User managerId;

    private String name;
    private String description;
    private Date startDate;
    private Date endDate;

    @Enumerated(EnumType.STRING)
    private PriorityEnum priority;

    @Enumerated(EnumType.STRING)
    private StatusEnum status;

    private Integer progress;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Company getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Company companyId) {
        this.companyId = companyId;
    }

    public User getManagerId() {
        return managerId;
    }

    public void setManagerId(User managerId) {
        this.managerId = managerId;
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
