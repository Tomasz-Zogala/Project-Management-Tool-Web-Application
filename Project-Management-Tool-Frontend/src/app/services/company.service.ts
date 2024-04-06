import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) {

  }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }
  getCompanyById(id: number):  Observable<Company> {
    return this.http.get<Company>((`${this.apiUrl}/${id}`));
  }
  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  blankCompany: Company = {
    companyId: undefined,
    name: "",
    email: "",
    phone: "",
    ceo: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
    street: "",
    houseNumber: "",
  }
}
