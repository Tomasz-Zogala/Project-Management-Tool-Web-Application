import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm } from "@angular/forms";
import {User} from "../models/user";

@Component({
  selector: 'app-sign-in',
  standalone: true,
    imports: [CommonModule, FormsModule ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  submited : boolean = false;

  user : User = {
    username: '',
    password: ''
  };
  onSubmit() {
    this.submited = true;
  };

  signIn(signInForm: NgForm) {

  }
}
