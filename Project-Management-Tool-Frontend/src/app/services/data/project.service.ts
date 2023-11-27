import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [project1, project2, project3, project4, project5, project6];

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

export interface Project {
  projectId: number;
  companyId: number;
  managerId: number;
  name: string;
  description : string;
  startDate : Date;
  endDate : Date;
  priority : Priority;
  status : Status;
  progress : number;
}

const project1: Project = {
  projectId: 1,
  companyId: 101,
  managerId: 201,
  name: "Project One",
  description: "Description for Project One",
  startDate: new Date(2023, 10, 1),
  endDate: new Date(2023, 10, 30),
  priority: Priority.Low,
  status: Status.NotStarted,
  progress: 0,
};

const project2: Project = {
  projectId: 2,
  companyId: 102,
  managerId: 202,
  name: "Project Two",
  description: "Description for Project Two",
  startDate: new Date(2023, 11, 1),
  endDate: new Date(2023, 11, 31),
  priority: Priority.Medium,
  status: Status.InProgress,
  progress: 50,
};

const project3: Project = {
  projectId: 3,
  companyId: 103,
  managerId: 203,
  name: "Project Three",
  description: "Description for Project Three",
  startDate: new Date(2023, 9, 15),
  endDate: new Date(2023, 10, 15),
  priority: Priority.High,
  status: Status.Completed,
  progress: 100,
};

const project4: Project = {
  projectId: 4,
  companyId: 104,
  managerId: 204,
  name: "Project Four",
  description: "Description for Project Four",
  startDate: new Date(2023, 11, 10),
  endDate: new Date(2023, 11, 20),
  priority: Priority.Low,
  status: Status.InProgress,
  progress: 25,
};

const project5: Project = {
  projectId: 5,
  companyId: 105,
  managerId: 205,
  name: "Project Five",
  description: "Description for Project Five",
  startDate: new Date(2023, 9, 1),
  endDate: new Date(2023, 9, 31),
  priority: Priority.Medium,
  status: Status.NotStarted,
  progress: 0,
};

const project6: Project = {
  projectId: 6,
  companyId: 106,
  managerId: 206,
  name: "Project Six",
  description: "Description for Project Six",
  startDate: new Date(2023, 10, 5),
  endDate: new Date(2023, 11, 5),
  priority: Priority.High,
  status: Status.Archived,
  progress: 100,
};
