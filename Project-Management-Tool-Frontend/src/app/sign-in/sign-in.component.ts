import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm } from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInFormValue: any;

  constructor(public authService: AuthService, private router: Router) {}
  signIn(signInForm : NgForm) {
    this.signInFormValue = signInForm.value;
    this.authService.signIn(signInForm.value.email, signInForm.value.password);
  }
}
