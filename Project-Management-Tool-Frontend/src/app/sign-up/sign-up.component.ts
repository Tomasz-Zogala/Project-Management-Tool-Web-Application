import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from "@angular/forms";
import {UserService, User, Role, WorkExperience} from "../services/data/user.service";
import {CompanyService} from "../services/data/company.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  user: User = this.userService.blankUser;
  roles: string[] = Object.values(Role);
  workExperiences: string[] = Object.values(WorkExperience);
  constructor(public userService: UserService, public companyService: CompanyService) {}

  signUp(userForm: NgForm) {
    this.user.userId = this.userService.getMinimalPossibleUserId();
    this.user.firstName = userForm.value.firstName;
    this.user.lastName = userForm.value.lastName;
    this.user.email = userForm.value.email;
    this.user.phoneNumber = userForm.value.phoneNumber;
    this.user.dayOfBirth = userForm.value.dayOfBirth;
    this.user.password = userForm.value.password;
    this.user.role = userForm.value.role;
    this.user.workExperience = userForm.value.workExperience;
    this.user.companyId = userForm.value.companyId;

    this.userService.addUserToDatabase(this.user);
    console.log(this.userService.users);
  }
}
