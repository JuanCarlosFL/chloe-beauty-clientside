import * as viewModel from '../register.vm';
const url = `${process.env.API_URL}/user/createuser`;

export const registerUser = async (
  user: viewModel.RegisterVM
): Promise<boolean> => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
