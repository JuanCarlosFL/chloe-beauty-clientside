import { linkRoutes } from 'core/router';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginComponent } from './login.component';
import * as api from './api/login.api';
import * as viewModel from './login.vm';
import { SessionContext } from 'core/session-context';
import { Button, IconButton, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { CustomAlert } from 'common/components/Alert';

export const LoginContainer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);





  const handleLogin = async (login: viewModel.LoginVm) => {
    const isValid = await api.isValidLogin(login.username, login.password);

    if (isValid) {
      updateLogin(login.username);
      history.push(linkRoutes.menu);
    } else {
      setOpen(true);
      
    }
  };

  const handleRecoverPassword = () => {
    history.push(linkRoutes.recoverPassword);
  };

  const handleRegister = () => {
    history.push(linkRoutes.register);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway'){
      return
    }

    setOpen(false);
  }

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
