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

export const routes: Routes = [
  {path: '', component: TitlePageComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: '**', component: PageErrorComponent},
];
