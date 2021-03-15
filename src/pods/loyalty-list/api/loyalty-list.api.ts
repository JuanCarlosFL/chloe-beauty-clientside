import { Loyalty } from './loyalty-list.model';

const url = `${process.env.API_URL}/loyalty`;

export const getLoyalties = async (): Promise<Loyalty[]> => {
  const response = await fetch(url);
  const loyalties: Loyalty[] = await response.json();
  return loyalties;
};
