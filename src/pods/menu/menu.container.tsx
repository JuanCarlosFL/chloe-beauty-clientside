import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { getUser } from './api';
import { MenuComponent } from './menu.component';
import { mapUserFromApiToVm } from './menu.mapper';
import { createEmptyUser, UserEntityVM } from './menu.vm';

export const MenuContainer: React.FC = () => {
  const [user, setUser] = useState<UserEntityVM>(createEmptyUser());
  const { login } = useContext(SessionContext);

  const handleLoadData = async () => {
    const data = await getUser(login);
    console.log(data);
    debugger;
    const viewModel = mapUserFromApiToVm(data);
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
