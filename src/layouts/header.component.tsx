import { Grid, Button } from '@material-ui/core';
import { linkRoutes } from 'core/router';
import { SessionContext } from 'core/session-context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import img from '../assets/img/logo-nombre-chloe.jpeg';
import * as classes from './header.styles';
// Componente que pinta el header del layout
export const HeaderComponent: React.FC = () => {
  const history = useHistory();
  const { login, updateLogin, points, updatePoints } = useContext(
    SessionContext
  );
  // Función que se ejecuta al pinchar en salir, reinicia el login y redirige al root de la app
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
          <Button
            variant="contained"
            onClick={handleLogout}
            className={classes.button}
          >
            Salir
          </Button>
        </div>
      </Grid>
    </div>
  );
};
