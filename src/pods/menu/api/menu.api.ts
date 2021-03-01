import { UserEntity } from './menu.api.model';

export const getUser = async (userName: string): Promise<UserEntity> => {
  const response = await fetch(`${process.env.API_URL}/${userName}`);
  const user = await response.json();
  return user[0];
};
