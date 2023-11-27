import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [task1, task2, task3];

  getColorForPriority(priority: number): string {
    switch (priority) {
      case 0:
        return 'green';
      case 1:
        return 'yellow';
      case 2:
        return 'red';
      default:
        return 'black';
    }
  }

  getStatusName(status: Status): string {
    return Status[status];
  }

  getPriorityName(status: Priority): string {
    return Priority[status];
  }

  constructor() { }
}


enum Priority {
  Low,
  Medium,
  High,
}

enum Status {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

interface Task {
  taskId: number;
  assignedById: number;
  assignedToId: number;
  projectId: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  priority: Priority;
  status: Status;
  progress: number;
}

const task1: Task = {
  taskId: 1,
  assignedById: 101,
  assignedToId: 201,
  projectId: 301,
  name: "Task One",
  description: "Description for Task One",
  startDate: new Date(2023, 10, 1),
  endDate: new Date(2023, 10, 5),
  priority: Priority.Low,
  status: Status.NotStarted,
  progress: 0,
};

const task2: Task = {
  taskId: 2,
  assignedById: 102,
  assignedToId: 202,
  projectId: 302,
  name: "Task Two",
  description: "Description for Task Two",
  startDate: new Date(2023, 10, 10),
  endDate: new Date(2023, 10, 15),
  priority: Priority.Medium,
  status: Status.InProgress,
  progress: 50,
};

const task3: Task = {
  taskId: 3,
  assignedById: 103,
  assignedToId: 203,
  projectId: 303,
  name: "Task Three",
  description: "Description for Task Three",
  startDate: new Date(2023, 10, 20),
  endDate: new Date(2023, 10, 25),
  priority: Priority.High,
  status: Status.Completed,
  progress: 100,
};
