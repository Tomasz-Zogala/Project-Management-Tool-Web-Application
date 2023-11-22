import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isLoggedIn : boolean = true;

}
