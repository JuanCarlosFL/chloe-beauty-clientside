import { UserEntity } from './menu.api.model';
const url = `${process.env.API_URL}/user/get`;

export const getUser = async (userName: string): Promise<UserEntity> => {
  const response = await fetch(`${url}/${userName}`);
  const user = await response.json();
  return user;
};
