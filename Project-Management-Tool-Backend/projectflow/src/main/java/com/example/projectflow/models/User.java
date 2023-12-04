package com.example.projectflow.models;
import com.example.projectflow.models.enums.ExperienceEnum;
import com.example.projectflow.models.enums.RoleEnum;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @ManyToOne
    @JoinColumn(name = "companyId", nullable = false)
    private Company companyId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Date dayOfBirth;
    private String password;

    @Enumerated(EnumType.STRING)
    private RoleEnum role;

    @Enumerated(EnumType.STRING)
    private ExperienceEnum workExperience;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Company getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Company companyId) {
        this.companyId = companyId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(Date dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleEnum getRole() {
        return role;
    }

    public void setRole(RoleEnum role) {
        this.role = role;
    }

    public ExperienceEnum getWorkExperience() {
        return workExperience;
    }

    public void setWorkExperience(ExperienceEnum workExperience) {
        this.workExperience = workExperience;
    }
}
