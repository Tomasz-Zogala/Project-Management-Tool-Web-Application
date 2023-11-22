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
  taskDescription?: string;
  taskPriority: TaskPriority;
  taskStatus: TaskStatus;
  taskProgress?: number;
}
