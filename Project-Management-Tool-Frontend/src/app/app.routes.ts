import {Routes} from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsComponent} from "./projects/projects.component";
import {CompanyComponent} from "./company/company.component";
import {TasksComponent} from "./tasks/tasks.component";
import {PageErrorComponent} from "./page-error/page-error.component";
import {UsersComponent} from "./users/users.component";
import {ProfileComponent} from "./profile/profile.component";
import {TempComponent} from "./temp/temp.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {TaskDetailedComponent} from "./task-detailed/task-detailed.component";
import {AddTaskToProjectComponent} from "./add-task-to-project/add-task-to-project.component";

export const routes: Routes = [
  {path: '', component: TitlePageComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'projects/:id/tasks', component: TempComponent},
  {path: 'tasks/:id', component: TaskDetailedComponent},
  {path: 'add-task/:id', component: AddTaskToProjectComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'add-project', component: AddProjectComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: '**', component: PageErrorComponent},
];
