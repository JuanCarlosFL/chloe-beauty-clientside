export interface RecoverPasswordVM {
  username: string;
  password: string;
  confirmPassword: string;
}

export const createEmptyLogin = (): RecoverPasswordVM => ({
  username: '',
  password: '',
  confirmPassword: '',
});
