import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from "@angular/forms";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  user: User = { id: 0, name : "", email : "", password : ""}
  constructor(private userService : UserService) {}

  signUp(userForm: NgForm) {
    this.user.name = userForm.value.name;
    this.user.email = userForm.value.email;
    this.user.password = userForm.value.password;
  }
}
