import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {Task} from "../models/task.model";
import {User} from "../models/user.model";
import {Company} from "../models/company.model";
import {Project} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  getTaskById(id: number):  Observable<Task> {
    return this.http.get<Task>((`${this.apiUrl}/${id}`));
  }
  deleteTask(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.taskId}`;
    return this.http.put<Task>(url, task);
  }


  blankTask: Task = {
    taskId: undefined,
    assignedById: {
      userId: 1,
      companyId: {
        ceo: "",
        companyId: 1,
        email: "",
        name: "",
        phone: "",
        country: "",
        province: "",
        city: "",
        postalCode: "",
        street: "",
        houseNumber: "",
      },
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dayOfBirth: new Date(),
      password: "",
      role: "",
      experience: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      street: "",
      houseNumber: "",
    },
    assignedToId: {
      userId: 1,
      companyId: {
        ceo: "",
        companyId: 1,
        email: "",
        name: "",
        phone: "",
        country: "",
        province: "",
        city: "",
        postalCode: "",
        street: "",
        houseNumber: "",
      },
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dayOfBirth: new Date(),
      password: "",
      role: "",
      experience: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      street: "",
      houseNumber: "",
    },
    projectId: {
      projectId: 1,
      companyId: {
          ceo: "",
          companyId: 1,
          email: "",
          name: "",
          phone: "",
          country: "",
          province: "",
          city: "",
          postalCode: "",
          street: "",
          houseNumber: "",
        },
      managerId: {
        companyId: {
          ceo: "",
          companyId: 1,
          email: "",
          name: "",
          phone: "",
          country: "",
          province: "",
          city: "",
          postalCode: "",
          street: "",
          houseNumber: "",
        },
        userId: 0,
        dayOfBirth: new Date(),
        email: "",
        experience: "",
        firstName: "",
        lastName: "",
        password: "",
        phone: "",
        role: "",
        country: "",
        province: "",
        city: "",
        postalCode: "",
        street: "",
        houseNumber: "",
      },
      name: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      priority: "",
      status: "",
      progress: 1,
      archived: false
    },
    name: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    priority: "",
    status: "",
    progress: 0,
  };
}
