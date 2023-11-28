import {Injectable} from '@angular/core';
import {User, UserService} from "./data/user.service";
import { Router } from "@angular/router";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn : boolean = false;
  public loggedUser : User = this.userService.blankUser;

  constructor(private userService : UserService, private router : Router) {
  }
  signIn(email: string, password: string): void {
    const foundUser = this.userService.findUserByEmail(email);

    if (foundUser && foundUser.password === password) {
      this.isLoggedIn = true;
      this.loggedUser = foundUser;
      console.log('Sign in successful');
      this.router.navigate(['/']);
    } else {
      this.isLoggedIn = false;
      alert('Invalid email or password. Please try again.');
      console.log('Sign in failed');
    }
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
