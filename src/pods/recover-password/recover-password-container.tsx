import { linkRoutes } from 'core/router';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecoverPasswordComponent } from './recover-password-component';
import { RecoverPasswordVM } from './recover-password.vm';
import { recoverPassword }from './api/recover-password.api';
import { SessionContext } from 'core/session-context';
import { CustomAlert } from 'common/components/Alert';

export const RecoverPasswordContainer: React.FC = () => {
  
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { updateLogin } = useContext(SessionContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway'){
      return
    }
    setOpen(false);
  }

  const handleLogin = async (user: RecoverPasswordVM) => {
    const isValid: boolean = await recoverPassword(user);
    if (isValid) {
      updateLogin(user.username);
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
      <RecoverPasswordComponent onLogin={handleLogin} onCancel={handleCancel} />
      <CustomAlert message='Usuario o contraseña incorrecta' severity='error' open={open} handleClose={handleClose} />
    </>
  );
};
