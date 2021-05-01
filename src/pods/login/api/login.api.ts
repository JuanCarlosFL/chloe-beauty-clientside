// Constantes de los endpoints que necesitamos de nuestra api
const url = `${process.env.API_URL}/user`;
const tokenUrl = `${process.env.API_URL}/api/jwtauth/requesttoken`;

// Función que valida si el login es correcto
export const isValidLogin = async (username: string, password: string): Promise<boolean> => {
  // Llamamos al endpoint pasándole el username y el password
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  // Si el status es 401 es que no está autorizado y devolvemos false
  if (data.status == 401) {
    return false;
  }
  // Si todo ha ido bien devolvemos los datos recibidos
  return data;
};

// Función que obtiene el token
export const getToken = async (username: string, password: string): Promise<string> => {
  // Llamamos al endpoint del token pasándole el username y el password
  const accessToken = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  // recogemos el token recibido y lo devolvemos
  const token = await accessToken.json();
  return token.token;
};
