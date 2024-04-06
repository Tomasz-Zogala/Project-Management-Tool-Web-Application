import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Company} from "../models/company.model";
import {CompanyService} from "../services/company.service";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent {
  company: Company = this.companyService.blankCompany;

  constructor(private companyService: CompanyService, private router: Router, private authService: AuthService) {
  }


  addCompany(projectForm: NgForm) {
    if (projectForm.valid) {
      this.companyService.createCompany(this.company).subscribe(
        newCompany => {
          console.log('Company created successfully:', newCompany);
          alert('Company created successfully');
          this.router.navigate([`/companies`]);
        },
        error => {
          console.error('Error during company creation:', error);
          alert('Error during company creation');
        }
      );
    }
  }
}
