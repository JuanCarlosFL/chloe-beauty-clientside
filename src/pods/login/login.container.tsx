import { linkRoutes } from 'core/router';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginComponent } from './login.component';
import * as api from './api/login.api';
import * as viewModel from './login.vm';
import { SessionContext } from 'core/session-context';
import { CustomAlert } from 'common/components/Alert';

export const LoginContainer: React.FC = () => {
  // Creamos una variable a false
  const [open, setOpen] = useState(false);
  // Guardamos el historial
  const history = useHistory();
  // Traemos del context las funciones para actualizar el login y el token
  const { updateLogin, updateToken } = useContext(SessionContext);

  // Función que maneja cuando hacemos login
  const handleLogin = async (login: viewModel.LoginVm) => {
    // Guaramos el resultado de la función isValid 
    const isValid = await api.isValidLogin(login.username, login.password);
    // Si es true
    if (isValid) {
      // Obtenemos el token
      const token = await api.getToken(login.username, login.password);
      // Actualizamos el token y el username del context
      updateToken(token);
      updateLogin(login.username);
      // Redirigimos el menú
      history.push(linkRoutes.menu);
    } else {
      // Mostramos el alert
      setOpen(true);
    }
  };

  // Si el usuario pincha en recuperar contraseña redirigimos a la ruta correspondiente
  const handleRecoverPassword = () => {
    history.push(linkRoutes.recoverPassword);
  };

  // Si el usuario pincha en registro redirigimos a la ruta correspondiente
  const handleRegister = () => {
    history.push(linkRoutes.register);
  };

  // Si el cliente pincha en cerrar el alert cambiamos el open a false
  const handleClose = (event, reason) => {
    if (reason === 'clickaway'){
      return
    }

    setOpen(false);
  }
  // LLamamos al componente login pasándole las funciones y al componente del alert con el mensaje que queremos que muestre
  return (
    <>
      <LoginComponent
        onLogin={handleLogin}
        onRecoverPassword={handleRecoverPassword}
        onRegister={handleRegister}
      />
      <CustomAlert message='Usuario o contraseña incorrecta' severity='error' open={open} handleClose={handleClose}/>
    </>
  );
};
