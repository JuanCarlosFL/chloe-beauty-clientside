const url = `${process.env.API_URL}/appointment`;

export const getTreatmentsByUser = async (id: number, token: string) => {
  console.log(token);
  const response = await fetch(`${url}/${id}`, {
    headers: {
      'Authorization': `bearer ${token}`
    }
  });
  const data = response.json();
  return data;
};
