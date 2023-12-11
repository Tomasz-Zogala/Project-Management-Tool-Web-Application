import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {CompanyService} from "../services/company.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  user: User = this.userService.blankUser;

  constructor(private userService: UserService) {
  }

  signUp(userForm: NgForm) {
  }
}
