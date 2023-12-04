import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn : boolean = false;

  constructor() {
  }
  signIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
