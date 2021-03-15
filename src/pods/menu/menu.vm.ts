export interface UserEntityVM {
  personId: number;
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
  personId: 0,
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
