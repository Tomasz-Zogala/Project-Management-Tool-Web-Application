import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectService} from "../services/data/project.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = this.projectService.projects
  constructor(public projectService : ProjectService) {
  }
}
