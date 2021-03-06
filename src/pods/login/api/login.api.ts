export const getToken = async () => {
  const response = await fetch(process.env.API_TOKEN);
  const data = await response.json();
  return data;
};
const url = `${process.env.API_URL}/user`;

export const isValidLogin = async (
  username: string,
  password: string
): Promise<boolean> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.status == 401) {
    return false;
  }
  return data;
};
