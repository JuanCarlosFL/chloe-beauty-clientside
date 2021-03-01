export interface RegisterVM {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const createEmptyRegister = (): RegisterVM => ({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
});
