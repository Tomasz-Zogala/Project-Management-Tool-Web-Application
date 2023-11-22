enum UserRole {
  Admin,
  Manager,
  Employee,
}

interface User {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  projects: Project[];
}
