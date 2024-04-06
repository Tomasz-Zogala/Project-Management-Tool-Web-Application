import {Component, OnInit} from '@angular/core';
import {CommonModule, formatDate} from '@angular/common';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Task} from "../models/task.model";
import {TaskService} from "../services/task.service";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  deleteMode = false;
  tasks: Task[] = [];
  dBStatus: string = ""

  constructor(private projectService: ProjectService, private router: Router,
              public authService: AuthService, private taskService: TaskService) {}

  currentFilter: string = "";

  setFilter(role: string): void {
    this.currentFilter = role;
  }

  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
  }

  selectProject(project : Project,event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.statusButtons')) {
      console.log("Clicked in " + project.projectId + " " + project.name);
      this.router.navigate([`/tasks/${project.projectId}`]);
    }


  }
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(projects => {
      for (let project of projects) {
        this.calculateStatusOnInit(project);
      }
      this.projects = projects;
      this.loadProjectDetails();
      this.taskService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks
      });
    });
  }
  loadProjectDetails() {
    const userCompanyId = this.authService.loggedUser.companyId.companyId;
    this.filteredProjects = this.projects.filter(project => project.companyId.companyId === userCompanyId);
    //&& task.projectId.projectId == project.projectId

  }

  get displayProjects() {
    return this.authService.loggedUser.role === 'Admin' ? this.projects : this.filteredProjects;
  }
  archiveButtonClick(project: Project){
    if (project.archived === false) {
      project.archived = true
      this.projectService.updateProject(project).subscribe()
      project.status = "Archived"
    } else if (project.archived === true){
      project.archived = false
      this.projectService.updateProject(project).subscribe()
      this.calculateStatusOnInit(project)
    }
  }
  completeButtonClick(project: Project){
    if(project.progress === 100 && project.status === "InProgress"){
      project.status = "Completed"
      this.projectService.updateProject(project).subscribe()
    } else if (project.status === "Completed") {
      this.calculateStatus(project)
      console.log("Calcu")
    }
  }
  calculateStatus(project: Project){
     if (project.progress === 0){
      project.status = "NotStarted"
      this.projectService.updateProject(project).subscribe()
    } else {
      project.status = "InProgress"
      this.projectService.updateProject(project).subscribe()
    }
  }
  calculateStatusOnInit(project: Project) {
    this.projectService.getProjectById(project.projectId!).subscribe(status => {
      this.dBStatus = status.status;

      if (project.archived === true) {
        project.status = "Archived";
      } else if (this.dBStatus === "Completed") {
        project.status = "Completed";
        this.projectService.updateProject(project).subscribe();
      } else {
        this.calculateStatus(project);
      }
    });
  }
  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.projectId).subscribe({
      next: () => {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
          this.projects.splice(index, 1);
        }
      },
      error: (err) => {
        console.error('Error deleting company:', err);
      }
    });
  }

  getProgressBarWidth(project: Project) {
    return project.progress;
  }

  protected readonly formatDate = formatDate;
}
