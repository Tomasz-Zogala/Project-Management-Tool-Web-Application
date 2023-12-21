import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../models/task.model";
import {TaskService} from "../services/task.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.scss'
})
export class TempComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
