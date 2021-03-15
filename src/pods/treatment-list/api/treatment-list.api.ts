const url = `${process.env.API_URL}/appointment`;

export const getTreatmentsByUser = async (id: number) => {
  const response = await fetch(`${url}/${id}`);
  const data = response.json();
  console.log(data);
  return data;
};
