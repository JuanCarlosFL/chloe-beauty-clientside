// Modelo del registro de usuario
export interface RegisterVM {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
// Función para crear un registro vacío
export const createEmptyRegister = (): RegisterVM => ({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
});
