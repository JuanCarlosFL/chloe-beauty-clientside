import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { getUser } from './api';
import { MenuComponent } from './menu.component';
import { mapUserFromApiToVm } from './menu.mapper';
import { createEmptyUser, UserEntityVM } from './menu.vm';

export const MenuContainer: React.FC = () => {
  const [user, setUser] = useState<UserEntityVM>(createEmptyUser());
  const { login, updatePoints, updatePersonId } = useContext(SessionContext);

  const handleLoadData = async () => {
    const apiUser = await getUser(login);
    updatePoints(apiUser.Person.Points);
    updatePersonId(apiUser.PersonId);
    setUser(mapUserFromApiToVm(apiUser));
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <>
      <MenuComponent user={user} />
    </>
  );
};
