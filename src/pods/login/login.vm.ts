export interface LoginVm {
  username: string;
  password: string;
}

export const createEmptyLogin = (): LoginVm => ({
  username: '',
  password: '',
});
