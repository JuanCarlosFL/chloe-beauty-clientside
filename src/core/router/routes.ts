import { generatePath } from 'react-router-dom';

type NavigateFnId = (id: string) => string;

interface BaseRoutes {
  root: string;
  login: string;
  recoverPassword: string;
  register: string;
  loyaltyList: string | NavigateFnId;
  treatmentList: string | NavigateFnId;
  menu: string;
}

interface SwitchRoutes extends BaseRoutes {
  loyaltyList: string;
  treatmentList: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  recoverPassword: '/recover-password',
  register: '/register',
  loyaltyList: '/loyalty-list/:id',
  treatmentList: '/treatment-list/:id',
  menu: '/menu',
};

interface LinkRoutes extends BaseRoutes {
  lolayltyList: NavigateFnId;
  treatmentList: NavigateFnId;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  lolayltyList: id => generatePath(switchRoutes.loyaltyList, { id }),
  treatmentList: id => generatePath(switchRoutes.treatmentList, { id }),
};
