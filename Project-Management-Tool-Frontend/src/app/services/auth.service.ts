import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {catchError, map, of} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn : boolean = false;
  public loggedUser : User = this.userService.blankUser;

  constructor(private userService : UserService, private router : Router) {
  }
  signIn(email: string, password: string) {
    this.userService.getUserByEmail(email).pipe(
      map((user) => {
        if (user) {
          if (password === user.password) {
            this.loggedUser = user;
            this.isLoggedIn = true;
            this.router.navigate(['/']);
          } else {
            console.error('Incorrect password');
          }
        } else {
          console.error('User not found');
        }
      }),
      catchError((error) => {
        console.error('Error fetching user:', error);
        return of(null);
      })
    ).subscribe();
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
