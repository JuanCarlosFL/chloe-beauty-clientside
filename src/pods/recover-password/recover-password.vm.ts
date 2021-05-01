// Viewmodel para recuperar la contraseña
export interface RecoverPasswordVM {
  username: string;
  password: string;
  confirmPassword: string;
}
// Crea un modelo vacío para la recuperación de la contraseña
export const createEmptyLogin = (): RecoverPasswordVM => ({
  username: '',
  password: '',
  confirmPassword: '',
});
