import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../services/data/user.service";
import {CompanyService} from "../services/data/company.service";

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
  users = this.userService.users;
  companies = this.companyService.companies;
  constructor(public companyService : CompanyService,
              public userService : UserService) {
  }
}
