export interface UserEntityVM {
  name: string;
  surname: string;
  telephone: string;
  address: string;
  town: string;
  postCode: string;
  points: number;
  email: string;
  comments: string;
  contactHow: string;
  role: Array<number>;
}

export const createEmptyUser = (): UserEntityVM => ({
  name: '',
  surname: '',
  telephone: '',
  address: '',
  town: '',
  postCode: '',
  points: 0,
  email: '',
  comments: '',
  contactHow: '',
  role: [0],
});
