import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
}
