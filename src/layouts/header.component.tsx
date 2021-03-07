import { Grid, Button } from '@material-ui/core';
import { linkRoutes } from 'core/router';
import { SessionContext } from 'core/session-context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import img from '../assets/logo-nombre-chloe.jpeg';
import * as classes from './header.styles';

export const HeaderComponent: React.FC = () => {
  const history = useHistory();
  const { login, updateLogin, points, updatePoints } = useContext(
    SessionContext
  );

  const handleLogout = () => {
    updateLogin('');
    updatePoints(0);
    history.push(linkRoutes.login);
  };

  return (
    <div>
      <Grid container className={classes.headerFooter}>
        <img src={img} width={100} alt="logo chloe's beauty" />
        <div className={classes.userData}>
          <p className={classes.format}>
            Hola {login} - Puntos: {points}
          </p>
          <Button variant="contained" onClick={handleLogout}>
            Salir
          </Button>
        </div>
      </Grid>
    </div>
  );
};
