import { Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsComponent} from "./projects/projects.component";
import {CompanyComponent} from "./company/company.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {TasksComponent} from "./tasks/tasks.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {PageErrorComponent} from "./page-error/page-error.component";
import {RealDatabaseComponent} from "./real-database/real-database.component";

export const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'tickets', component: TasksComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'real-database', component: RealDatabaseComponent },
  { path: '**', component: PageErrorComponent },
];
