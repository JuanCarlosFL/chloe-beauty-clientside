import * as apiModel from './api/menu.api.model';
import { mapUserFromApiToVm } from './menu.mapper';
import * as viewModel from './menu.vm';

describe('mapper specs', () => {
  it('should return empty user when it feeds undefined', () => {
    // Arrange
   const user: apiModel.UserEntity = undefined;

    // Act
   const result: viewModel.UserEntityVM = mapUserFromApiToVm(user);

    // Assert
   expect(result).toEqual({
     address: "",
     comments: "",
     contactHow: "",
     email: "",
     name: "",
     personId: 0,
     points: 0,
     postCode: "",
     role: [0],
     surname: "",
     telephone: "",
     town: ""
   });
  });

  it('should return empty user when it feeds null', () => {
    // Arrange
   const user: apiModel.UserEntity = null;

    // Act
   const result: viewModel.UserEntityVM = mapUserFromApiToVm(user);

    // Assert
   expect(result).toEqual({
     address: "",
     comments: "",
     contactHow: "",
     email: "",
     name: "",
     personId: 0,
     points: 0,
     postCode: "",
     role: [0],
     surname: "",
     telephone: "",
     town: ""
   });
  });

  it('should return user when it feeds user', () => {
    // Arrange
   const user: apiModel.UserEntity = {
      UserId: 1,
      UserName: "Test username",
      Password: "Test password",
      IsActive: true,
      PersonId: 1,
      ModifiedDate: "Test date",
      Person: {
        PersonId: 1,
        Name: "Test name",
        Surname: "Test surname",
        Telephone: "Test telephone",
        Address: "Test address",
        Town: "Test town",
        PostCode: "Test postCode",
        Points: 0,
        Email: "Test email",
        Comments: "Test comments",
        ContactHow: "Test contactHow",
        Deleted: false,
        ModifiedDate: "Test Modified date",
      },
      UsersRoles: [
        {
          UserId: 1,
          RoleId: 1,
          ModifiedDate: "Test Modified date",
        }
      ],
   }

    // Act
   const result: viewModel.UserEntityVM = mapUserFromApiToVm(user);

    // Assert
   expect(result).toEqual({
     address: "Test address",
     comments: "Test comments",
     contactHow: "Test contactHow",
     email: "Test email",
     name: "Test name",
     personId: 1,
     points: 0,
     postCode: "Test postCode",
     role: [1],
     surname: "Test surname",
     telephone: "Test telephone",
     town: "Test town"
   });
  });
});
