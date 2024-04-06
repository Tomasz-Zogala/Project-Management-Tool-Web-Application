import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Company} from "../models/company.model";
import {AuthService} from "../services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  deleteMode = false;
  constructor(private userService: UserService, public authService: AuthService) {}

  currentFilter: string = "";

  setFilter(role: string): void {
    this.currentFilter = role;
  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.loadUserDetails();
      this.displayUser;
    });
  }
  loadUserDetails() {
    const userCompanyId = this.authService.loggedUser.companyId.companyId;
    this.filteredUsers = this.users.filter(user => user.companyId.companyId === userCompanyId);
  }

  get displayUser() {
    return this.authService.loggedUser.role === 'Admin' ? this.users : this.filteredUsers;
  }
  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.userId).subscribe({
      next: () => {
        const index = this.users.indexOf(user);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }
}
