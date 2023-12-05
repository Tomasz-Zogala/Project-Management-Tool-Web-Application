import { Company } from './company.model';

export interface User {
  userId?: number;
  companyId: Company;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dayOfBirth: Date;
  password: string;
  role: string;
  experience: string;
}
