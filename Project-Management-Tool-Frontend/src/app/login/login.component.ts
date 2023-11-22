import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submited : boolean = false;

  user : User = {
    username: '',
    password: ''
  };
  onSubmit() {
    this.submited = true;
  };
}
