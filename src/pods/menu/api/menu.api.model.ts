export interface UserEntity {
  UserId: number;
  UserName: string;
  Password: string;
  IsActive: boolean;
  PersonId: number;
  ModifiedDate: string;
  Person: {
    PersonId: number;
    Name: string;
    Surname: string;
    Telephone: string;
    Address: string;
    Town: string;
    PostCode: string;
    Points: number;
    Email: string;
    Comments: string;
    ContactHow: string;
    Deleted: boolean;
    ModifiedDate: string;
  };
  UsersRoles: [
    {
      UserId: number;
      RoleId: number;
      ModifiedDate: string;
    }
  ];
}
