import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.apiUrl}/by-email/${email}`;
    return this.http.get<User>(url);
  }

  blankUser: User = {
    companyId: {
      ceo: "",
      companyId: 1,
      email: "",
      name: "",
      phone: "",
      country: "",
      province: "",
      city: "",
      postalCode: "",
      street: "",
      houseNumber: "",
    },
    userId: 0,
    dayOfBirth: new Date(),
    email: "",
    experience: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    role: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
    street: "",
    houseNumber: "",
  }

}
