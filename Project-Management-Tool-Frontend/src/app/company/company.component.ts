import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company.model";
import {AuthService} from "../services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];

  deleteMode = false;
  constructor(private companyService: CompanyService, public authService: AuthService) {
  }


  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
      this.loadCompanyDetails();
      this.displayCompanies;
    });
  }

  loadCompanyDetails() {
    const userCompanyId = this.authService.loggedUser.companyId.companyId;
    this.filteredCompanies = this.companies.filter(company => company.companyId === userCompanyId);

  }

  get displayCompanies() {
    return this.authService.loggedUser.role === 'Admin' ? this.companies : this.filteredCompanies;
  }

  toggleDelete(): void {
    this.deleteMode = !this.deleteMode;
  }

  deleteCompany(company: Company): void {
    if (company.companyId !== undefined) {
    this.companyService.deleteCompany(company.companyId).subscribe({
      next: () => {
        const index = this.companies.indexOf(company);
        if (index !== -1) {
          this.companies.splice(index, 1);
        }
      },
      error: (err) => {
        console.error('Error deleting company:', err);
      }
    });}
  }

}
