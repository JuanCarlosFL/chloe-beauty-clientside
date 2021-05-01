// Constante del endpoint que necesitamos de nuestra api
const url = `${process.env.API_URL}/appointment`;
// Función que trae de la api la colección de tratamientos realizados por el usuario
export const getTreatmentsByUser = async (id: number, token: string) => {
  const response = await fetch(`${url}/${id}`, {
    headers: {
      'Authorization': `bearer ${token}`
    }
  });
  const data = response.json();
  return data;
};
