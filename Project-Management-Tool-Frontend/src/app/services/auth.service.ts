import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {catchError, map, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public loggedUser: User = this.userService.blankUser;
  errorMessage: string = "";

  constructor(private userService: UserService, private router: Router) {
  }

  signIn(email: string, password: string) {
    this.errorMessage = "";
    this.userService.getUserByEmail(email).pipe(
      map((user) => {
        if (user) {
          if (password === user.password) {
            this.loggedUser = user;
            this.isLoggedIn = true;
            this.router.navigate(['/']);
          } else {
            //console.error('Incorrect password');
            alert('Incorrect login data');
          }
        } else {
          //console.error('User not found');
          alert('User not found');
        }
      }),
      catchError((error) => {
        //console.error('Error fetching user:', error);
        alert('Error fetching user');
        return of(null);
      })
    ).subscribe();
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
