import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from "@angular/forms";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  user: User = {
    companyId: {
      address: "",
      ceo: "",
      companyId: 1,
      email: "",
      name: "",
      phone: "",
    },
    dayOfBirth: new Date(),
    email: "",
    experience: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    role: "",
    userId: 0
  }

  constructor(private userService : UserService) {}

  signUp(userForm: NgForm) {
    this.user.firstName = userForm.value.name;
    this.user.email = userForm.value.email;
    this.user.password = userForm.value.password;
  }
}
