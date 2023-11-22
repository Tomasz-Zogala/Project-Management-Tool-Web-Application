import { Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  { path: '', component: TitlePageComponent },
  // { path: 'tickets', component: TicketsComponent },
  { path: 'projects', component: ProjectsComponent },
  // { path: 'organization', component: OrganizationComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'settings', component: SettingComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];
