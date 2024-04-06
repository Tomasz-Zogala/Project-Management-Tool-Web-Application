import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  roles: string[] = ["Developer", "Manager", "Admin"];
  experiences: string[] = ["Junior", "Mid", "Senior"];
  constructor(public authService: AuthService, public userService: UserService) {
  }


  updateProfile(): void {
    this.userService.updateUser(this.authService.loggedUser).subscribe({
      next: updatedUser => {
        // Update the user in authService with the returned updatedUser
        this.authService.loggedUser = updatedUser;
        // Handle successful update, e.g., show a success message
      },
      error: err => {
        // Handle error, e.g., show an error message
        console.error('Error updating user:', err);
      }
    });
  }

  protected readonly update = this.updateProfile;
}
