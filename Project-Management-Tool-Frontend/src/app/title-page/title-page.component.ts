import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {
  constructor(public authService: AuthService) {
  }

}
