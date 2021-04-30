// Modelo del login y función que crea un login vacío
export interface LoginVm {
  username: string;
  password: string;
}

export const createEmptyLogin = (): LoginVm => ({
  username: '',
  password: '',
});
