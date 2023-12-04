import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RealUserModel} from "./real-user.module";

@Injectable({
  providedIn: 'root'
})
export class RealUserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {

  }
  getAllUsers(): Observable<RealUserModel[]> {
    return this.http.get<RealUserModel[]>(this.apiUrl);
  }
}
