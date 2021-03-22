import { linkRoutes } from 'core/router';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterComponent } from './register-component';
import { RegisterVM } from './register.vm';
import { registerUser } from './api/register.api';
import { SessionContext } from 'core/session-context';
import { CustomAlert } from 'common/components/Alert';

export const RegisterContainer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway'){
      return
    }
    setOpen(false);
  }

  const handleLogin = async (user: RegisterVM) => {
    const isValid: boolean = await registerUser(user);
    if (isValid) {
      updateLogin(user.email);
      history.push(linkRoutes.menu);
    } else {
      setOpen(true);
    }
  };

  const handleCancel = () => {
    history.push(linkRoutes.login);
  };

  return (
    <>
      <RegisterComponent onLogin={handleLogin} onCancel={handleCancel} />
      <CustomAlert message='Ese usuario ya existe' severity='error' open={open} handleClose={handleClose} />
    </>
  );
};
