import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {CompanyService} from "../services/company.service";
import {map, Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  companies: any[] =[];
  roles: string[] = ["Developer", "Manager", "Admin"];
  experiences: string[] = ["Junior", "Mid", "Senior"];
  user: User = this.userService.blankUser;

  constructor(private userService: UserService, private companyService: CompanyService,
              private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
      this.getCompaniesForAdmin().subscribe(companies => {
          this.companies = companies;
      });

  }
    getCompaniesForAdmin(): Observable<any[]> {
        return this.companyService.getAllCompanies();
    }


    signUp(userForm: NgForm) {
        if (userForm.valid) {
            this.companyService.getCompanyById(userForm.value.companyId)
                .pipe(
                    switchMap(company => {
                        this.user.companyId = company;
                        return this.userService.createUser(this.user);
                    })
                ).subscribe({
                    next: (createdUser) => {
                        console.log('User created successfully:', createdUser);
                        alert('User created successfully');
                        this.router.navigate([`/users`]);
                        userForm.resetForm();
                    },
                    error: (error) => {
                        console.error('Error creating user:', error);
                        alert('Error creating user');
                    }
                });
        }
    }
}
