package com.example.projectflow.repositories;

import com.example.projectflow.models.Project;
import com.example.projectflow.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
