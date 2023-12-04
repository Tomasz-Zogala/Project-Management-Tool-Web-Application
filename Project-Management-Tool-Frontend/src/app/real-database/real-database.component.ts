import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealUserService} from "../services/real-user.service";
import {RealUserModel} from "../services/real-user.module";

@Component({
  selector: 'app-real-database',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './real-database.component.html',
  styleUrl: './real-database.component.css'
})
export class RealDatabaseComponent implements OnInit{
  users: RealUserModel[] = [];

  constructor(private userService: RealUserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
