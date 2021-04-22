import { Loyalty } from './loyalty-list.model';

const url = `${process.env.API_URL}/loyalty`;

export const getLoyalties = async (token: string): Promise<Loyalty[]> => {
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `bearer ${token}`
    } 
  });
  const loyalties: Loyalty[] = await response.json();
  return loyalties;
};
