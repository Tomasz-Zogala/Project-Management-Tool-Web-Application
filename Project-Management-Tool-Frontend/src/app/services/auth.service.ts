import { Injectable } from '@angular/core';
import { UserService } from "./data/user.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn : boolean = false;

  constructor(private userService : UserService, private router : Router) {
  }
  signIn(email: string, password: string): void {
    const foundUser = this.userService.findUserByEmail(email);

    if (foundUser && foundUser.password === password) {
      this.isLoggedIn = true;
      console.log('Sign in successful');
      this.router.navigate(['/']);
    } else {
      this.isLoggedIn = false;
      console.log('Sign in failed');
    }
  }

  signUp() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
