package com.example.projectflow.repositories;
import com.example.projectflow.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}