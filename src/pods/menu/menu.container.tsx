import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { getUser } from './api';
import { MenuComponent } from './menu.component';
import { mapUserFromApiToVm } from './menu.mapper';
import { createEmptyUser, UserEntityVM } from './menu.vm';
// Constantes de los endpoints que necesitamos de nuestra api
const appointmentUrl = `${process.env.API_URL}/appointment`;
const availabilityUrl = `${process.env.API_URL}/availability`;

export const MenuContainer: React.FC = () => {
  // Creamos un usuario vacío
  const [user, setUser] = useState<UserEntityVM>(createEmptyUser());
  // Traemos todo lo necesario del context
  const { login, updatePoints, updatePersonId, personId, treatmentId, availabilityId, token } = useContext(SessionContext);
  // Función que inicia todos los datos
  const handleLoadData = async () => {
    // Tramemos los datos del usuario y actualizamos los puntos, el person Id y mapeamos los datos
    const apiUser = await getUser(login, token);
    updatePoints(apiUser.Person.Points);
    updatePersonId(apiUser.PersonId);
    setUser(mapUserFromApiToVm(apiUser));
  };
  // Objeto que vamos a pasar al endpoint del POST para crear la cita
  const appointment = {
    personId,
    treatmentId,
    availabilityId
  };
  // Función para guardar la cita, llamamos al POST de la cita pasándole el objeto a guardar
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
  // Función que borra una disponiblididad pasándole el id
  const deleteAvailability = async () => {
    await fetch(`${availabilityUrl}/${availabilityId}`, {
      method: 'DELETE',
      headers: { 
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': `bearer ${token}`
      },
    });
  }
  // Cargamos los datos cuando se pinta el componente
  useEffect(() => {
    handleLoadData();
  }, []);
  // LLamamos al componente pasándole por props las funciones para guardar y borrar la cita
  return (
    <>
      <MenuComponent user={user} saveAppointment={saveAppointment} deleteAvailability={deleteAvailability}/>
    </>
  );
};
