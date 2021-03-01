import { linkRoutes } from 'core/router';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginComponent } from './login.component';
import * as api from './api/login.api';
import * as viewModel from './login.vm';
import { SessionContext } from 'core/session-context';

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);

  const handleLogin = async (login: viewModel.LoginVm) => {
    const isValid = await api.isValidLogin(login.username, login.password);

    if (isValid) {
      updateLogin(login.username);
      history.push(linkRoutes.menu);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRecoverPassword = () => {
    history.push(linkRoutes.recoverPassword);
  };

  const handleRegister = () => {
    history.push(linkRoutes.register);
  };

  return (
    <>
      <LoginComponent
        onLogin={handleLogin}
        onRecoverPassword={handleRecoverPassword}
        onRegister={handleRegister}
      />
    </>
  );
};
