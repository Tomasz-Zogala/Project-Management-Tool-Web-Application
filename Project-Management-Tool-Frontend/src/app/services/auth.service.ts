import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {catchError, map, of} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn : boolean = false;

  constructor(private userService : UserService) {
  }
  signIn(email: string, password: string) {
    this.userService.getUserByEmail(email).pipe(
      map((user) => {
        if (user) {
          if (password === user.password) {
            this.isLoggedIn = true;
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
