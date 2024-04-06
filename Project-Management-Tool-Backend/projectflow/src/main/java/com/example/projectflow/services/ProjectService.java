package com.example.projectflow.services;

import com.example.projectflow.models.Company;
import com.example.projectflow.models.Project;
import com.example.projectflow.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project projectDetails) {
        Optional<Project> projectOptional = projectRepository.findById(id);

        if (projectOptional.isPresent()) {
            Project existingProject = projectOptional.get();
            existingProject.setCompanyId(projectDetails.getCompanyId());
            existingProject.setManagerId(projectDetails.getManagerId());
            existingProject.setName(projectDetails.getName());
            existingProject.setDescription(projectDetails.getDescription());
            existingProject.setStartDate(projectDetails.getStartDate());
            existingProject.setEndDate(projectDetails.getEndDate());
            existingProject.setPriority(projectDetails.getPriority());
            existingProject.setStatus(projectDetails.getStatus());
            existingProject.setProgress(projectDetails.getProgress());
            existingProject.setArchived(projectDetails.getArchived());
            return projectRepository.save(existingProject);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task with ID " + id + " not found");
            // You can use other HTTP status codes as needed, like HttpStatus.BAD_REQUEST
        }
    }

    public void deleteAllProjects() {
        projectRepository.deleteAll();
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
