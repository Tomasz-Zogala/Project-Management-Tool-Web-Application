package com.example.projectflow.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class UserControllerTest {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/users")
    @ResponseBody
    public String getUsersAsJson() {
        try {
            return objectMapper.writeValueAsString(this.users);
        } catch (IOException e) {
            e.printStackTrace();
            return "{\"error\": \"Error converting users to JSON\"}";
        }
    }

    public enum Role {
        DEVELOPER, PROJECT_MANAGER, MANAGER, OTHER
    }

    public enum WorkExperience {
        INTERN, JUNIOR, MID, SENIOR
    }

    public interface User {
        int getUserId();
        int getCompanyId();
        String getFirstName();
        String getLastName();
        String getEmail();
        long getPhoneNumber();
        Date getDayOfBirth();
        String getPassword();
        Role getRole();
        WorkExperience getWorkExperience();
    }

    public class UserImpl implements User {
        private int userId;
        private int companyId;
        private String firstName;
        private String lastName;
        private String email;
        private long phoneNumber;
        private Date dayOfBirth;
        private String password;
        private Role role;
        private WorkExperience workExperience;

        public UserImpl(int userId, int companyId, String firstName, String lastName,
                        String email, long phoneNumber, Date dayOfBirth, String password,
                        Role role, WorkExperience workExperience) {
            this.userId = userId;
            this.companyId = companyId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.dayOfBirth = dayOfBirth;
            this.password = password;
            this.role = role;
            this.workExperience = workExperience;
        }

        @Override
        public int getUserId() {
            return userId;
        }

        @Override
        public int getCompanyId() {
            return companyId;
        }

        @Override
        public String getFirstName() {
            return firstName;
        }

        @Override
        public String getLastName() {
            return lastName;
        }

        @Override
        public String getEmail() {
            return email;
        }

        @Override
        public long getPhoneNumber() {
            return phoneNumber;
        }

        @Override
        public Date getDayOfBirth() {
            return dayOfBirth;
        }

        @Override
        public String getPassword() {
            return password;
        }

        @Override
        public Role getRole() {
            return role;
        }

        @Override
        public WorkExperience getWorkExperience() {
            return workExperience;
        }
    }

    public User createUser(int userId, int companyId, String firstName, String lastName,
                           String email, long phoneNumber, Date dayOfBirth, String password,
                           Role role, WorkExperience workExperience) {
        return new UserImpl(userId, companyId, firstName, lastName, email, phoneNumber,
                dayOfBirth, password, role, workExperience);
    }

    User user1 = createUser(1, 1111, "John", "Doe", "john.doe@example.com", 123456789,
            new Date(1990, 5, 15), "securePassword", Role.DEVELOPER, WorkExperience.SENIOR);

    User user2 = createUser(2, 2222, "Jane", "Smith", "jane.smith@example.com", 987654321,
            new Date(1985, 9, 25), "strongPassword", Role.MANAGER, WorkExperience.MID);

    User user3 = createUser(3, 1111, "Joshua", "Jenkins", "joshua.jenkins@example.com", 555666777,
            new Date(1980, 2, 10), "password123", Role.PROJECT_MANAGER, WorkExperience.INTERN);

    User user4 = createUser(4, 3333, "Alice", "Johnson", "alice.johnson@example.com", 111222333,
            new Date(1993, 7, 20), "securePassword123", Role.DEVELOPER, WorkExperience.JUNIOR);

    User user5 = createUser(5, 2222, "Bob", "Miller", "bob.miller@example.com", 444555666,
            new Date(1988, 11, 5), "pass123", Role.DEVELOPER, WorkExperience.SENIOR);

    User user6 = createUser(6, 2222, "Eva", "Brown", "eva.brown@example.com", 777888999,
            new Date(1995, 3, 15), "evaPassword789", Role.MANAGER, WorkExperience.MID);

    User user7 = createUser(7, 1111, "David", "Clark", "david.clark@example.com", 123123123,
            new Date(1990, 1, 1), "davidPassword", Role.OTHER, WorkExperience.SENIOR);

    User user8 = createUser(8, 3333, "Grace", "White", "grace.white@example.com", 456456456,
            new Date(1992, 9, 10), "graceSecurePassword", Role.DEVELOPER, WorkExperience.MID);

    User user9 = createUser(9, 2222, "Sam", "Taylor", "sam.taylor@example.com", 999888777,
            new Date(1987, 4, 25), "samPassword123", Role.MANAGER, WorkExperience.SENIOR);

    User[] users = {user1, user2, user3, user4, user5, user6, user7, user8, user9};
}