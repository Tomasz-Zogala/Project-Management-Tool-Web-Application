import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TaskService} from "../services/task.service";
import {AuthService} from "../services/auth.service";
import {Task} from "../models/task.model";
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-task-detailed',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-detailed.component.html',
  styleUrl: './task-detailed.component.scss'
})
export class TaskDetailedComponent implements OnInit {
  tasks: Task[] = [];
  tasksFiltered: Task[] = [];
  projectId: number = 0;
  project: any;
  statusAfterSelection: string = "";
  deleteMode = false;

  constructor(private taskService: TaskService,public authService: AuthService, private route: ActivatedRoute,private router: Router,
              private projectService: ProjectService) {
  }
  ngOnInit() {
    this.projectId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(this.projectId).subscribe(projectById => {
      this.project = projectById
    })
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.loadTaskDetails();
    });
  }
  loadTaskDetails() {
    const userCompanyId = this.authService.loggedUser.userId;
    this.tasksFiltered = this.tasks.filter(task => task.projectId.projectId === this.projectId);
  }
  onSelectedChange(task: Task,status: string){
    this.statusAfterSelection = status;
    console.log(this.statusAfterSelection);
    task.status = this.statusAfterSelection
    this.taskService.updateTask(task).subscribe()
  }
  get displayTasks() {
    return this.tasksFiltered;
  }
  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
  }
  routeToAddTask(){
    this.router.navigate([`/add-task/${this.projectId}`]);
  }


  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.taskId).subscribe({
      next: () => {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks.splice(index, 1);
          this.loadTaskDetails();
        }
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      }
    });

  }

}
