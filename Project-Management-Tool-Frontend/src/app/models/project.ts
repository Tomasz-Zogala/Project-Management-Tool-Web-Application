enum ProjectPriority {
  Low,
  Medium,
  High,
}

enum ProjectStatus {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

// Temporary Project Interface Simplified

interface Project {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectTeam: string[];
  projectPriority: ProjectPriority;
  projectStatus: ProjectStatus;
  projectTasks: string[];
}

// interface Project {
//   projectId: number;
//   projectName: string;
//   projectDescription: string;
//   projectTeam: User[];
//   projectPriority: ProjectPriority;
//   projectStatus: ProjectStatus;
//   projectTasks: Task[];
// }
