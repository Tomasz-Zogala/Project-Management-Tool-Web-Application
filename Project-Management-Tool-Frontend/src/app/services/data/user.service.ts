import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router : Router) {
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  addUserToDatabase(user : User) {
    this.router.navigate(['/signin']);
    this.users.push(user);
  }

  getMinimalPossibleUserId(): number {
    const maxUserId = Math.max(...this.users.map(user => user.userId), -1);
    return maxUserId + 1;
  }

  users: User[] = [user1, user2, user3, user4, user5, user6, user7, user8, user9];

  blankUser : User = {
    userId: 0,
    companyId: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    dayOfBirth: new Date(),
    password: '',
    role: Role.Developer,
    workExperience: WorkExperience.Intern
  };
}

export enum Role {
  Developer = 'Developer',
  ProjectManager = 'Project Manager',
  Manager = 'Manager',
  Other = 'Other',
}

export enum WorkExperience {
  Intern = 'Intern',
  Junior = 'Junior',
  Mid = 'Mid',
  Senior = 'Senior',
}

export interface User {
  userId : number;
  companyId : number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dayOfBirth: Date;
  password: string;
  role : Role;
  workExperience : WorkExperience;
}

const user1: User = {
  userId: 1,
  companyId: 1111,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: 123456789,
  dayOfBirth: new Date(1990, 5, 15),
  password: "securePassword",
  role: Role.Developer,
  workExperience: WorkExperience.Senior,
};

const user2: User = {
  userId: 2,
  companyId: 2222,
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phoneNumber: 987654321,
  dayOfBirth: new Date(1985, 9, 25),
  password: "strongPassword",
  role: Role.Manager,
  workExperience: WorkExperience.Mid,
};

const user3: User = {
  userId: 3,
  companyId: 1111,
  firstName: "Joshua",
  lastName: "Jenkins",
  email: "joshua.jenkins@example.com",
  phoneNumber: 555666777,
  dayOfBirth: new Date(1980, 2, 10),
  password: "password123",
  role: Role.ProjectManager,
  workExperience: WorkExperience.Intern,
};

const user4: User = {
  userId: 4,
  companyId: 3333,
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: 111222333,
  dayOfBirth: new Date(1993, 7, 20),
  password: "securePassword123",
  role: Role.Developer,
  workExperience: WorkExperience.Junior,
};

const user5: User = {
  userId: 5,
  companyId: 2222,
  firstName: "Bob",
  lastName: "Miller",
  email: "bob.miller@example.com",
  phoneNumber: 444555666,
  dayOfBirth: new Date(1988, 11, 5),
  password: "pass123",
  role: Role.Developer,
  workExperience: WorkExperience.Senior,
};

const user6: User = {
  userId: 6,
  companyId: 2222,
  firstName: "Eva",
  lastName: "Brown",
  email: "eva.brown@example.com",
  phoneNumber: 777888999,
  dayOfBirth: new Date(1995, 3, 15),
  password: "evaPassword789",
  role: Role.Manager,
  workExperience: WorkExperience.Mid,
};

const user7: User = {
  userId: 7,
  companyId: 1111,
  firstName: "David",
  lastName: "Clark",
  email: "david.clark@example.com",
  phoneNumber: 123123123,
  dayOfBirth: new Date(1990, 1, 1),
  password: "davidPassword",
  role: Role.Other,
  workExperience: WorkExperience.Senior,
};

const user8: User = {
  userId: 8,
  companyId: 3333,
  firstName: "Grace",
  lastName: "White",
  email: "grace.white@example.com",
  phoneNumber: 456456456,
  dayOfBirth: new Date(1992, 9, 10),
  password: "graceSecurePassword",
  role: Role.Developer,
  workExperience: WorkExperience.Mid,
};

const user9: User = {
  userId: 9,
  companyId: 2222,
  firstName: "Sam",
  lastName: "Taylor",
  email: "sam.taylor@example.com",
  phoneNumber: 999888777,
  dayOfBirth: new Date(1987, 4, 25),
  password: "samPassword123",
  role: Role.Manager,
  workExperience: WorkExperience.Senior,
};
