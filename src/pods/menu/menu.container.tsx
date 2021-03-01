import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { getUser } from './api';
import { MenuComponent } from './menu.component';
import { mapUserFromApiToVm } from './menu.mapper';
import { createEmptyUser, UserEntityVM } from './menu.vm';

export const MenuContainer: React.FC = () => {
  const [user, setUser] = useState<UserEntityVM>(createEmptyUser());
  const { login } = useContext(SessionContext);

  const handleLoadData = async () => {
    const data = await trackPromise(getUser(login));
    console.log(data);
    const viewModel = mapUserFromApiToVm(data);
    console.log(viewModel);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <>
      <MenuComponent />
    </>
  );
};
