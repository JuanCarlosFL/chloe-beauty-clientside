import { generatePath } from 'react-router-dom';

type NavigateFnId = (id: string) => string;

interface BaseRoutes {
  root: string;
  login: string;
  recoverPassword: string;
  register: string;
  loyaltyList: string;
  treatmentList: string | NavigateFnId;
  menu: string;
}

interface SwitchRoutes extends BaseRoutes {
  treatmentList: string;
}
// Estas son las rutas que importa el router component
export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  recoverPassword: '/recover-password',
  register: '/register',
  loyaltyList: '/loyalty-list',
  treatmentList: '/treatment-list/:id',
  menu: '/menu',
};

interface LinkRoutes extends BaseRoutes {
  treatmentList: NavigateFnId;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  treatmentList: id => generatePath(switchRoutes.treatmentList, { id }),
};
