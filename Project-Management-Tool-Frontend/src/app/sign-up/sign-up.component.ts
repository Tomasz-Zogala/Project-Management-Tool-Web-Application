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
      ceo: "",
      companyId: 1,
      email: "",
      name: "",
      phone: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      street: "",
      houseNumber: "",
    },
    userId: 0,
    dayOfBirth: new Date(),
    email: "",
    experience: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    role: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
    street: "",
    houseNumber: "",
  }

  constructor(private userService : UserService) {}

  signUp(userForm: NgForm) {
    this.user.firstName = userForm.value.name;
    this.user.email = userForm.value.email;
    this.user.password = userForm.value.password;
  }
}
