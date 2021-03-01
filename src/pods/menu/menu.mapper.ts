import * as apiModel from './api/menu.api.model';
import * as viewModel from './menu.vm';

export const mapUserFromApiToVm = (
  user: apiModel.UserEntity
): viewModel.UserEntityVM => ({
  name: user.person.name,
  surname: user.person.surname,
  telephone: user.person.telephone,
  address: user.person.address,
  town: user.person.town,
  postCode: user.person.postCode,
  points: user.person.points,
  email: user.person.email,
  comments: user.person.comments,
  contactHow: user.person.contactHow,
  role: user.usersRoles.map(r => r.roleId),
});
