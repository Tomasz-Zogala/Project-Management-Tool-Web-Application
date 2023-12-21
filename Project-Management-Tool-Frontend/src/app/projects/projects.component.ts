import {Component, OnInit} from '@angular/core';
import {CommonModule, formatDate} from '@angular/common';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  currentFilter: string = "";

  setFilter(role: string): void {
    this.currentFilter = role;
  }

  selectProject(project : Project) {
    console.log("Clicked in " + project.projectId + " " + project.name);
    this.router.navigate([`projects/${project.projectId}/tasks`]);
  }
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  protected readonly formatDate = formatDate;
}
