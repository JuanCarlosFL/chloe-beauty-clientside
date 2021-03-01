import * as viewModel from '../register.vm';

export const registerUser = async (
  user: viewModel.RegisterVM
): Promise<boolean> => {
  console.log({ user });
  const response = await fetch(process.env.API_REGISTER, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
