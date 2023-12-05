package com.example.projectflow.services;

import com.example.projectflow.models.Task;
import com.example.projectflow.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Optional<Task> taskOptional = taskRepository.findById(id);

        if (taskOptional.isPresent()) {
            Task existingTask = taskOptional.get();
            existingTask.setAssignedById(taskDetails.getAssignedById());
            existingTask.setAssignedToId(taskDetails.getAssignedToId());
            existingTask.setProjectId(taskDetails.getProjectId());
            existingTask.setName(taskDetails.getName());
            existingTask.setDescription(taskDetails.getDescription());
            existingTask.setStartDate(taskDetails.getStartDate());
            existingTask.setEndDate(taskDetails.getEndDate());
            existingTask.setPriority(taskDetails.getPriority());
            existingTask.setStatus(taskDetails.getStatus());
            existingTask.setProgress(taskDetails.getProgress());
            return taskRepository.save(existingTask);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task with ID " + id + " not found");
            // You can use other HTTP status codes as needed, like HttpStatus.BAD_REQUEST
        }
    }

    public void deleteAllTasks() {
        taskRepository.deleteAll();
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}