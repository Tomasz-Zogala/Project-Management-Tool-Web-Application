import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  standalone: true,
    imports: [CommonModule, FormsModule ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  submited : boolean = false;

  onSubmit() {
    this.submited = true;
  };

  signIn(signInForm: NgForm) {

  }
}
