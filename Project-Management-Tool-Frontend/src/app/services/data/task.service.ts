import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10, task11, task12];

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

const task4: Task = {
  taskId: 4,
  assignedById: 104,
  assignedToId: 204,
  projectId: 304,
  name: "Task Four",
  description: "Description for Task Four",
  startDate: new Date(2023, 11, 1),
  endDate: new Date(2023, 11, 5),
  priority: Priority.Low,
  status: Status.NotStarted,
  progress: 0,
};

const task5: Task = {
  taskId: 5,
  assignedById: 105,
  assignedToId: 205,
  projectId: 305,
  name: "Task Five",
  description: "Description for Task Five",
  startDate: new Date(2023, 11, 10),
  endDate: new Date(2023, 11, 15),
  priority: Priority.Medium,
  status: Status.InProgress,
  progress: 50,
};

const task6: Task = {
  taskId: 6,
  assignedById: 106,
  assignedToId: 206,
  projectId: 306,
  name: "Task Six",
  description: "Description for Task Six",
  startDate: new Date(2023, 11, 20),
  endDate: new Date(2023, 11, 25),
  priority: Priority.High,
  status: Status.Completed,
  progress: 100,
};

const task7: Task = {
  taskId: 7,
  assignedById: 107,
  assignedToId: 207,
  projectId: 307,
  name: "Task Seven",
  description: "Description for Task Seven",
  startDate: new Date(2023, 11, 5),
  endDate: new Date(2023, 11, 10),
  priority: Priority.Medium,
  status: Status.InProgress,
  progress: 75,
};

const task8: Task = {
  taskId: 8,
  assignedById: 108,
  assignedToId: 208,
  projectId: 308,
  name: "Task Eight",
  description: "Description for Task Eight",
  startDate: new Date(2023, 11, 15),
  endDate: new Date(2023, 11, 20),
  priority: Priority.High,
  status: Status.NotStarted,
  progress: 25,
};

const task9: Task = {
  taskId: 9,
  assignedById: 109,
  assignedToId: 209,
  projectId: 309,
  name: "Task Nine",
  description: "Description for Task Nine",
  startDate: new Date(2023, 11, 25),
  endDate: new Date(2023, 11, 30),
  priority: Priority.Low,
  status: Status.Completed,
  progress: 100,
};

const task10: Task = {
  taskId: 10,
  assignedById: 110,
  assignedToId: 210,
  projectId: 310,
  name: "Task Ten",
  description: "Description for Task Ten",
  startDate: new Date(2023, 12, 5),
  endDate: new Date(2023, 12, 10),
  priority: Priority.Low,
  status: Status.NotStarted,
  progress: 0,
};

const task11: Task = {
  taskId: 11,
  assignedById: 111,
  assignedToId: 211,
  projectId: 311,
  name: "Task Eleven",
  description: "Description for Task Eleven",
  startDate: new Date(2023, 12, 15),
  endDate: new Date(2023, 12, 20),
  priority: Priority.Medium,
  status: Status.InProgress,
  progress: 50,
};

const task12: Task = {
  taskId: 12,
  assignedById: 112,
  assignedToId: 212,
  projectId: 312,
  name: "Task Twelve",
  description: "Description for Task Twelve",
  startDate: new Date(2023, 12, 25),
  endDate: new Date(2023, 12, 30),
  priority: Priority.High,
  status: Status.Completed,
  progress: 100,
};
