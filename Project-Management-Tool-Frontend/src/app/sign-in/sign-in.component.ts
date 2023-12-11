import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor(private authService: AuthService) {
  }

  signIn(signInForm: NgForm) {
    this.authService.signIn(signInForm.value.email, signInForm.value.password);
  }

  logOut() {
  }
}
