import { linkRoutes } from 'core/router';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecoverPasswordComponent } from './recover-password-component';
import { RecoverPasswordVM } from './recover-password.vm';
import { recoverPassword }from './api/recover-password.api';
import { SessionContext } from 'core/session-context';

export const RecoverPasswordContainer: React.FC = () => {
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);

  const handleLogin = async (user: RecoverPasswordVM) => {
    const isValid: boolean = await recoverPassword(user);
    if (isValid) {
      updateLogin(user.username);
      history.push(linkRoutes.menu);
    } else {
      alert('invalid');
    }
  };

  const handleCancel = () => {
    history.push(linkRoutes.login);
  };

  return (
    <>
      <RecoverPasswordComponent onLogin={handleLogin} onCancel={handleCancel} />
    </>
  );
};
