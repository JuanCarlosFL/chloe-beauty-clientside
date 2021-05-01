import * as apiModel from './api/menu.api.model';
import * as viewModel from './menu.vm';
// Función para mapear el modelo traído de la api y pasarlo al viewmodel que 
// usaremos en la aplicación, recibe una userEntity
export const mapUserFromApiToVm = (user: apiModel.UserEntity): viewModel.UserEntityVM => {
  // Si el usuario no tiene datos creamos un cliente vacío
  if (user === undefined || user === null) {
    return viewModel.createEmptyUser();
  } else {
    // Sino mapeamos los datos que necesitamos del modelo de la api al del viewmodel
    return {
      personId: user.PersonId,
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
