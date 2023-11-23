import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10,
    task11, task12, task13, task14, task15, task16, task17, task18, task19, task20, task21];

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

  getStatusName(status: TaskStatus): string {
    return TaskStatus[status];
  }

  getPriorityName(status: TaskPriority): string {
    return TaskPriority[status];
  }
}

enum TaskPriority {
  Low,
  Medium,
  High,
}

enum TaskStatus {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

interface Task {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskPriority: TaskPriority;
  taskStatus: TaskStatus;
  taskProgress?: number;
}

const task1: Task =   {
  taskId: 1,
  taskName: "Task 1",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 1",
  taskProgress: 0,
};

const task2: Task =   {
  taskId: 2,
  taskName: "Task 2",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 2",
  taskProgress: 50,
};

const task3: Task =   {
  taskId: 3,
  taskName: "Task 3",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.Completed,
  taskDescription: "Description for Task 3",
  taskProgress: 100,
};

const task4: Task =   {
  taskId: 4,
  taskName: "Task 4",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.Archived,
  taskDescription: "Description for Task 4",
  taskProgress: 100,
};

const task5: Task =   {
  taskId: 5,
  taskName: "Task 5",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 5",
  taskProgress: 0,
};

const task6: Task =   {
  taskId: 6,
  taskName: "Task 6",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 6",
  taskProgress: 75,
};

const task7: Task =   {
  taskId: 7,
  taskName: "Task 7",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.Completed,
  taskDescription: "Description for Task 7",
  taskProgress: 100,
};

const task8: Task =   {
  taskId: 8,
  taskName: "Task 8",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 8",
  taskProgress: 0,
};

const task9: Task =   {
  taskId: 9,
  taskName: "Task 9",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 9",
  taskProgress: 25,
};

const task10: Task =   {
  taskId: 10,
  taskName: "Task 10",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.Archived,
  taskDescription: "Description for Task 10",
  taskProgress: 100,
};

const task11: Task =   {
  taskId: 11,
  taskName: "Task 11",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.Completed,
  taskDescription: "Description for Task 11",
  taskProgress: 100,
};

const task12: Task =   {
  taskId: 12,
  taskName: "Task 12",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 12",
  taskProgress: 50,
};

const task13: Task =   {
  taskId: 13,
  taskName: "Task 13",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 13",
  taskProgress: 0,
};

const task14: Task =   {
  taskId: 14,
  taskName: "Task 14",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 14",
  taskProgress: 25,
};

const task15: Task =   {
  taskId: 15,
  taskName: "Task 15",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 15",
  taskProgress: 0,
};

const task16: Task =   {
  taskId: 16,
  taskName: "Task 16",
  taskPriority: TaskPriority.Low,
  taskStatus: TaskStatus.Completed,
  taskDescription: "Description for Task 16",
  taskProgress: 100,
};

const task17: Task =   {
  taskId: 17,
  taskName: "Task 17",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.NotStarted,
  taskDescription: "Description for Task 17",
  taskProgress: 0,
};

const task18: Task =   {
  taskId: 18,
  taskName: "Task 18",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.Completed,
  taskDescription: "Description for Task 18",
  taskProgress: 100,
};

const task19: Task =   {
  taskId: 19,
  taskName: "Task 19",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 19",
  taskProgress: 50,
};

const task20: Task =   {
  taskId: 20,
  taskName: "Task 20",
  taskPriority: TaskPriority.Medium,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 20",
  taskProgress: 75,
};

const task21: Task =   {
  taskId: 21,
  taskName: "Task 21",
  taskPriority: TaskPriority.High,
  taskStatus: TaskStatus.InProgress,
  taskDescription: "Description for Task 21",
  taskProgress: 25,
};
