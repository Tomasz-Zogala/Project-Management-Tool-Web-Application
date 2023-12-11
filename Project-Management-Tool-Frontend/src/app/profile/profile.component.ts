import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(public authService: AuthService) {
  }

}
