enum Status {
  PENDING = 'pending',
  ACTIVE = 'active',
  LOCKED = 'locked',
}

enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

export { Role, Status };

export default interface EntityUser {
  id: number;
  firstName: string;
  lastName: string;
  status: Status;
  role: Role;
}
