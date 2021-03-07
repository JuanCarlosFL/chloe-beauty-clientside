import * as apiModel from './api/menu.api.model';
import * as viewModel from './menu.vm';

export const mapUserFromApiToVm = (
  user: apiModel.UserEntity
): viewModel.UserEntityVM => {

  if (user === undefined || user === null) {
    return viewModel.createEmptyUser();
  } else {
    return {
      name: user.Person.Name,
      surname: user.Person.Surname,
      telephone: user.Person.Telephone,
      address: user.Person.Address,
      town: user.Person.Town,
      postCode: user.Person.PostCode,
      points: user.Person.Points,
      email: user.Person.Email,
      comments: user.Person.Comments,
      contactHow: user.Person.ContactHow,
      role: user.UsersRoles.map(r => r.RoleId),
    };
  }
};
