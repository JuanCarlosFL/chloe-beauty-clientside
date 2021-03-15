import * as viewModel from '../recover-password.vm';
const url = `${process.env.API_URL}/user/recoverpassword`;

export const recoverPassword = async (
  user: viewModel.RecoverPasswordVM
): Promise<boolean> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return false;
  }
};
