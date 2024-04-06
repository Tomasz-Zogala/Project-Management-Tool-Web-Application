import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskService} from "../services/task.service";
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {map, switchMap} from "rxjs/operators";
import {Task} from "../models/task.model";
import {ProjectService} from "../services/project.service";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";

@Component({
  selector: 'app-add-task-to-project',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-task-to-project.component.html',
  styleUrl: './add-task-to-project.component.scss'
})
export class AddTaskToProjectComponent implements OnInit {
  task: Task = this.taskService.blankTask;
  projects: any[] = [];
  project: any;
  projectId: number = 0;
  developers: any[] = [];
  managers: any[] = [];
  taskPriorities: string[] = ["Low", "Medium", "High"];
  taskStatus: string[] = ["NotStarted"/*, "InProgress", "Completed"*/];
  constructor(private taskService: TaskService, private projectService: ProjectService,
              private userService: UserService, private router: Router,
              private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projectId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(this.projectId).subscribe(projectById => {
      this.project = projectById
    })
    this.getProjectsForLoggedUserCompany().subscribe(projects => {
      this.projects = projects;
    });
    this.getDevelopers().subscribe(developers => {
      this.developers = developers;
    });
    this.getManagers().subscribe(managers => {
      this.managers = managers;
    });

  }

  getProjectsForLoggedUserCompany(): Observable<any[]> {
    const loggedUserCompanyId = this.authService.loggedUser.companyId.companyId;

    return this.projectService.getAllProjects().pipe(
      map(projects => projects.filter(project => project.companyId.companyId === loggedUserCompanyId))
    );
  }

  getDevelopers(): Observable<any[]> {
    const loggedUserCompanyId = this.authService.loggedUser.companyId.companyId;

    return this.userService.getAllUsers().pipe(
      map(users => users.filter(user => user.role === 'Developer' && user.companyId.companyId === loggedUserCompanyId))
    );
  }

  getManagers(): Observable<any[]> {
    const loggedUserCompanyId = this.authService.loggedUser.companyId.companyId;

    return this.userService.getAllUsers().pipe(
      map(users => users.filter(user => user.role === 'Manager' && user.companyId.companyId === loggedUserCompanyId
        && user.userId === this.authService.loggedUser.userId))
    );
  }

  getProjectWithSelectedId(): Project {
    return this.project;
  }

  addTask(taskForm: NgForm) {
    console.log("!!!!!!!!!!!!" + this.project.projectId)
    if (taskForm.valid) {
      this.projectService.getProjectById(this.project.projectId).pipe(
        switchMap(project => {
          this.task.projectId = project;
          return this.userService.getUserById(taskForm.value.assignedById);
        }),
        switchMap(assignedByUser => {
          this.task.assignedById = assignedByUser;
          return this.userService.getUserById(taskForm.value.assignedToId);
        }),
        switchMap(assignedToUser => {
          this.task.assignedToId = assignedToUser;
          return this.taskService.createTask(this.task);
        })
      ).subscribe({
        next: (createdTask) => {
          console.log('Task created successfully:', createdTask);
          alert('Task created successfully');
          this.router.navigate([`/tasks/${this.project.projectId}`]);
          taskForm.resetForm();
        },
        error: (error) => {
          console.error('Error creating task:', error);
          alert('Error creating task');
        }
      });
    }
  }
}
