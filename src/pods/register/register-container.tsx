import { linkRoutes } from 'core/router';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterComponent } from './register-component';
import { RegisterVM } from './register.vm';
import { registerUser } from './api/register.api';
import { SessionContext } from 'core/session-context';

export const RegisterContainer: React.FC = () => {
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);

  const handleLogin = async (user: RegisterVM) => {
    const isValid: boolean = await registerUser(user);
    if (isValid) {
      updateLogin(user.email);
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
      <RegisterComponent onLogin={handleLogin} onCancel={handleCancel} />
    </>
  );
};
