import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {Company} from "../models/company.model";
import {User} from "../models/user.model";
import {UserService} from "./user.service";
import {CompanyService} from "./company.service";
import {Task} from "../models/task.model";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) {

  }
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
  getProjectById(id: number):  Observable<Project> {
    return this.http.get<Project>((`${this.apiUrl}/${id}`));
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
  updateProject(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/${project.projectId}`;
    return this.http.put<Project>(url, project);
  }

  deleteProject(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  blankProject: Project = {
    projectId: 0,
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
  }
}
