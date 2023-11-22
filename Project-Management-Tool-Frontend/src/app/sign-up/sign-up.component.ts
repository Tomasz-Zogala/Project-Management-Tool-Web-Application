import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

    signUp(signUpForm: NgForm) {

    }
}
