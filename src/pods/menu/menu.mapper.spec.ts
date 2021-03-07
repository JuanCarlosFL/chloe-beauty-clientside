import * as apiModel from './api/menu.api.model';
import { mapUserFromApiToVm } from './menu.mapper';
import * as viewModel from './menu.vm';

describe('mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    // Arrange
   const user: apiModel.UserEntity = undefined;

    // Act
   const result: viewModel.UserEntityVM = mapUserFromApiToVm(user);

    // Assert
   expect(result).toEqual({
     UserId: "",
     UserName: "",
     Password: "",
     IsActive: false,
     PersonId: 0,
     ModifiedDate: "",
     Person: null,
     UsersRoles: []
   });
  });
});
