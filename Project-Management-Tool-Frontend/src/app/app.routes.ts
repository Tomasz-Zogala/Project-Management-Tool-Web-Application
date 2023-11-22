import { Routes } from '@angular/router';
import {TitlePageComponent} from "./title-page/title-page.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  { path: '', component: TitlePageComponent },
  // { path: 'tickets', component: TicketComponent },
  // { path: 'projects', component: ProjectComponent },
  // { path: 'organization', component: OrganizationComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'settings', component: SettingComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];
