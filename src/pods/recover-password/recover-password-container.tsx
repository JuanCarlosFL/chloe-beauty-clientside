import { linkRoutes } from 'core/router';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecoverPasswordComponent } from './recover-password-component';
import { RecoverPasswordVM } from './recover-password.vm';
import { recoverPassword }from './api/recover-password.api';
import { SessionContext } from 'core/session-context';
import { CustomAlert } from 'common/components/Alert';
import * as api from '../login/api/login.api';

export const RecoverPasswordContainer: React.FC = () => {
  // Creamos una varialbe a false para el alert
  const [open, setOpen] = useState(false);
  // Tramemos el historial del navegador
  const history = useHistory();
  // Y traemos del contexto las funciones para actualizar el login y el token
  const { updateLogin, updateToken } = useContext(SessionContext);
  // Función para cerrar el alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway'){
      return
    }
    setOpen(false);
  }
  // Función que maneja cuando se hace login
  const handleLogin = async (user: RecoverPasswordVM) => {
    // Comprobamos se ha podido actualizar la contraseña correctamente
    const isValid: boolean = await recoverPassword(user);
    if (isValid) {
      // En caso de true generamos un nuevo token y actualizamos el token y el login
      const token = await api.getToken(user.username, user.password);
      updateToken(token);
      updateLogin(user.username);
      history.push(linkRoutes.menu);
    } else {
      // En caso de false abrimos el alert con el mensaje
      setOpen(true);
    }
  };
  // Cuando se pinche en el botón cancelar redirigimos al login de la app
  const handleCancel = () => {
    history.push(linkRoutes.login);
  };
  // Llamamos al componente pasandole por props las funciones y al componente alert
  return (
    <>
      <RecoverPasswordComponent onLogin={handleLogin} onCancel={handleCancel} />
      <CustomAlert message='El usuario no existe' severity='error' open={open} handleClose={handleClose} />
    </>
  );
};
