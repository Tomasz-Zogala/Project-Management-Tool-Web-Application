import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from "../services/data/task.service";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tasks = this.taskDataService.tasks;

  constructor(public taskDataService : TaskService) {
  }
}
