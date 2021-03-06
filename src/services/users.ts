import DomainUser, { Status, Role } from 'domain/User';

class User implements DomainUser {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public status: Status,
    public role: Role,
  ) {}

  public introduce() {
    return `${this.id}: ${this.firstName} ${this.lastName}`;
  }

  public hasStatus = (status: Status) => this.status == status;

  public hasRole = (role: Role) => this.role == role;
}

class Users {
  public static serialize(entity: DomainUser): User {
    return entity as User;
  }
}

export { User };

export default Users;
