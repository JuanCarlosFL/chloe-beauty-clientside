import * as viewModel from '../recover-password.vm';

export const recoverPassword = async (
  user: viewModel.RecoverPasswordVM
): Promise<boolean> => {
  console.log({ user });
  const response = await fetch(
    'https://localhost:44372/api/user/RecoverPassword',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok){
    const data = await response.json();
    return data;
  } else {
    return false;
  }
};
