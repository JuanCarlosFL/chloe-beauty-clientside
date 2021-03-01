export interface UserEntity {
  userId: number;
  username: string;
  password: string;
  isActive: boolean;
  personId: number;
  modifiedDate: string;
  person: {
    personId: number;
    name: string;
    surname: string;
    telephone: string;
    address: string;
    town: string;
    postCode: string;
    points: number;
    email: string;
    comments: string;
    contactHow: string;
    deleted: boolean;
    modifiedDate: string;
  };
  usersRoles: [
    {
      userId: number;
      roleId: number;
      modifiedDate: string;
    }
  ];
}
