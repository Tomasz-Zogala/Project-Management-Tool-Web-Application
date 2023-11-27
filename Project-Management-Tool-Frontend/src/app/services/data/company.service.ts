import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies : Company[] = [company1, company2, company3]
  constructor() { }
}

export interface Company {
  companyId : number;
  name : string;
  address : string;
  email : string;
  phoneNumber : number;
  ceoName : string;
}

const company1: Company = {
  companyId: 1111,
  name: "Tech Solutions Inc.",
  address: "123 Main Street, Cityville",
  email: "info@techsolutions.com",
  phoneNumber: 111222333,
  ceoName: "John Smith",
};

const company2: Company = {
  companyId: 2222,
  name: "Innovate Tech Hub",
  address: "456 Innovation Avenue, Tech City",
  email: "contact@innovatetechhub.com",
  phoneNumber: 444555666,
  ceoName: "Alice Johnson",
};

const company3: Company = {
  companyId: 3333,
  name: "Global Software Solutions",
  address: "789 Software Street, Codetown",
  email: "info@globalsolutions.com",
  phoneNumber: 777888999,
  ceoName: "David Clark",
};
