import * as viewModel from '../recover-password.vm';
const url = `${process.env.API_URL}/user/recoverpassword`;
// Función que recupera la contraseña, pasándole como parámetro los datos del usuario
export const recoverPassword = async (user: viewModel.RecoverPasswordVM): Promise<boolean> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // Si la respuesta de la api es satisfactoria devolvemos true sino devolvemos false
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return false;
  }
};
