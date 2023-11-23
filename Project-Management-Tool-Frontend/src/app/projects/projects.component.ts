import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [project1, project2, project3, project4, project5, project6];

  getColorForPriority(priority: number): string {
    switch (priority) {
      case 0:
        return 'green';
      case 1:
        return 'yellow';
      case 2:
        return 'red';
      default:
        return 'black'; // or any default color
    }
  }

  getStatusName(status: ProjectStatus): string {
    return ProjectStatus[status];
  }

  getPriorityName(status: ProjectPriority): string {
    return ProjectPriority[status];
  }

}

// Temporary model
enum ProjectPriority {
  Low,
  Medium,
  High,
}

enum ProjectStatus {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

interface Project {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectTeam: string[];
  projectPriority: ProjectPriority;
  projectStatus: ProjectStatus;
  projectTasks: string[];
  projectProgress: number;
}

// Flat Data

const project1: Project = {
  projectId: 1,
  projectName: 'Project A',
  projectDescription: 'Description for Project A',
  projectTeam: ['Employee 1', 'Employee 2'],
  projectPriority: ProjectPriority.High,
  projectStatus: ProjectStatus.NotStarted,
  projectTasks: ['Task 1', 'Task 2'],
  projectProgress: 0
};

const project2: Project = {
  projectId: 2,
  projectName: 'Project B',
  projectDescription: 'Description for Project B',
  projectTeam: ['Employee 3', 'Employee 4'],
  projectPriority: ProjectPriority.Medium,
  projectStatus: ProjectStatus.InProgress,
  projectTasks: ['Task 3', 'Task 4'],
  projectProgress: 75
};

const project3: Project = {
  projectId: 3,
  projectName: 'Project C',
  projectDescription: 'Description for Project C',
  projectTeam: ['Employee 5', 'Employee 6'],
  projectPriority: ProjectPriority.Low,
  projectStatus: ProjectStatus.Archived,
  projectTasks: ['Task 5', 'Task 6'],
  projectProgress: 100
};

const project4: Project = {
  projectId: 4,
  projectName: 'Project D',
  projectDescription: 'Description for Project D',
  projectTeam: ['Employee 7', 'Employee 8'],
  projectPriority: ProjectPriority.High,
  projectStatus: ProjectStatus.InProgress,
  projectTasks: ['Task 7', 'Task 8'],
  projectProgress: 25
};

const project5: Project = {
  projectId: 5,
  projectName: 'Project E',
  projectDescription: 'Description for Project E',
  projectTeam: ['Employee 9', 'Employee 10'],
  projectPriority: ProjectPriority.Medium,
  projectStatus: ProjectStatus.Completed,
  projectTasks: ['Task 9', 'Task 10'],
  projectProgress: 100
};

const project6: Project = {
  projectId: 6,
  projectName: 'Project F',
  projectDescription: 'Description for Project F',
  projectTeam: ['Employee 11', 'Employee 12'],
  projectPriority: ProjectPriority.Low,
  projectStatus: ProjectStatus.Archived,
  projectTasks: ['Task 11', 'Task 12'],
  projectProgress: 100
};

