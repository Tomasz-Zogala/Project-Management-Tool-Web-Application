import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from "../services/task.service";
import {Task} from "../models/task.model";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
