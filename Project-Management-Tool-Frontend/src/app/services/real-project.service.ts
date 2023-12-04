import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RealProjectService {

  private apiUrl = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) {

  }

  //TODO model
  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
