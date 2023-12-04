import { Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsComponent} from "./projects/projects.component";
import {CompanyComponent} from "./company/company.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {TasksComponent} from "./tasks/tasks.component";
import {PageErrorComponent} from "./page-error/page-error.component";
import {UsersComponent} from "./users/users.component";

export const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', component: PageErrorComponent },
];
