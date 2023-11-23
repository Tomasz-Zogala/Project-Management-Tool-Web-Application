import { Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsComponent} from "./projects/projects.component";
import {OrganizationComponent} from "./organization/organization.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {NotificationsComponent} from "./notifications/notifications.component";

export const routes: Routes = [
  { path: '', component: TitlePageComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];
