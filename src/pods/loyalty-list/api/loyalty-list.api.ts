import { Loyalty } from './loyalty-list.model';
// Constante del endpoint que necesitamos de nuestra api
const url = `${process.env.API_URL}/loyalty`;
// Función que trae de la api la colección de ofertas
export const getLoyalties = async (token: string): Promise<Loyalty[]> => {
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `bearer ${token}`
    } 
  });
  const loyalties: Loyalty[] = await response.json();
  return loyalties;
};
