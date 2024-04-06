import {Company} from './company.model';
import {User} from './user.model';

export interface Project {
  projectId?: number;
  companyId: Company;
  managerId: User;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  priority: string;
  status: string;
  progress: number;
  archived: boolean;
}
