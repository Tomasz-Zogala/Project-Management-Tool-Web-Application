import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(public authService: AuthService) {
  }

}
