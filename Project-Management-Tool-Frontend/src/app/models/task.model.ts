import {User} from './user.model';
import {Project} from './project.model';

export interface Task {
  taskId?: number;
  assignedById: User;
  assignedToId: User;
  projectId: Project;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  priority: string;
  status: string;
  progress: number;
}
