import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { getUser } from './api';
import { MenuComponent } from './menu.component';
import { mapUserFromApiToVm } from './menu.mapper';
import { createEmptyUser, UserEntityVM } from './menu.vm';

const appointmentUrl = `${process.env.API_URL}/appointment`;
const availabilityUrl = `${process.env.API_URL}/availability`;

export const MenuContainer: React.FC = () => {
  const [user, setUser] = useState<UserEntityVM>(createEmptyUser());
  const { login, updatePoints, updatePersonId, personId, treatmentId, availabilityId, token } = useContext(SessionContext);

  const handleLoadData = async () => {
    const apiUser = await getUser(login, token);
    updatePoints(apiUser.Person.Points);
    updatePersonId(apiUser.PersonId);
    setUser(mapUserFromApiToVm(apiUser));
  };

  const appointment = {
    personId,
    treatmentId,
    availabilityId
  };

  const saveAppointment = async () => {
    await fetch(`${appointmentUrl}`, {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: { 
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': `bearer ${token}`
      },
    });
  }

  const deleteAvailability = async () => {
    await fetch(`${availabilityUrl}/${availabilityId}`, {
      method: 'DELETE',
      headers: { 
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': `bearer ${token}`
      },
    });
  }

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <>
      <MenuComponent user={user} saveAppointment={saveAppointment} deleteAvailability={deleteAvailability}/>
    </>
  );
};
