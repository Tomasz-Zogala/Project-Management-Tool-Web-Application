import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {ProjectService} from "../services/project.service";
import {Project} from "../models/project.model";
import {UserService} from "../services/user.service";
import {CompanyService} from "../services/company.service";
import {Router} from "@angular/router";
import {forkJoin, map, Observable, switchMap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {
  projectPriorities: string[] = ["Low", "Medium", "High"];
  projectStatus: string[] = ["NotStarted"/*, "InProgress", "Completed"*/];
  project: Project = this.projectService.blankProject;
  companies: any[] =[];
  users: any[] =[];

  constructor(private projectService: ProjectService, private userService: UserService,
              private companyService: CompanyService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCompaniesForLoggedUser().subscribe(companies => {
      this.companies = companies;
    });
    this.getManagersForLoggedUser().subscribe(users => {
      this.users = users;
    });
  }
  getCompaniesForLoggedUser(): Observable<any[]> {
    const loggedUserCompanyId = this.authService.loggedUser.companyId.companyId;

    return this.companyService.getAllCompanies().pipe(
      map(companies => companies.filter(companies => companies.companyId === loggedUserCompanyId))
    );
  }

  getManagersForLoggedUser(): Observable<any[]> {
    const loggedUserCompanyId = this.authService.loggedUser.companyId.companyId;

    return this.userService.getAllUsers().pipe(
      map(users => users.filter(users => users.companyId.companyId === loggedUserCompanyId
      && users.userId === this.authService.loggedUser.userId))
    );
  }

addProject(projectForm: NgForm) {
  if (projectForm.valid) {
    this.companyService.getCompanyById(projectForm.value.companyId).pipe(
      switchMap(company => {
        this.project.companyId = company;
        return this.userService.getUserById(projectForm.value.managerId);
    }),
      switchMap(users => {
        this.project.managerId = users;
        return this.projectService.createProject(this.project);
      })
    ).subscribe({
      next: (createdProject) => {
        console.log('Project created successfully:', createdProject);
        alert('Project created successfully');
        this.router.navigate([`/projects`]);
        projectForm.resetForm();
      },
      error: error => {
        console.error('Error fetching user or company:', error);
        alert('Error during project preparation');
      }
    });
  }
}

}

// addProject(projectForm: NgForm) {
//   if (projectForm.valid) {
//     forkJoin({
//       user: this.userService.getUserById(projectForm.value.managerId),
//       company: this.companyService.getCompanyById(projectForm.value.companyId)
//     }).subscribe({
//       next: ({ user, company }) => {
//         this.project.managerId = user;
//         this.project.companyId = company;
//         this.projectService.createProject(this.project).subscribe(
//           newProject => {
//             console.log('Project created successfully:', newProject);
//             alert('Project created successfully');
//             this.router.navigate([`/projects`]);
//           },
//           error => {
//             console.error('Error during project creation:', error);
//             alert('Error during project creation');
//           }
//         );
//       },
//       error: error => {
//         console.error('Error fetching user or company:', error);
//         alert('Error during project preparation');
//       }
//     });
//   }
// }
