import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { TitlePageComponent } from "./title-page/title-page.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, SignInComponent, TitlePageComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
