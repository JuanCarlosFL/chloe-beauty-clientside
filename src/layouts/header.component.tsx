import { Grid } from '@material-ui/core';
import { SessionContext } from 'core/session-context';
import React, { useContext } from 'react';
import img from '../assets/logo-nombre-chloe.jpeg';
import * as classes from './header.styles';

export const HeaderComponent: React.FC = () => {
  const { login } = useContext(SessionContext);
  return (
    <div>
      <Grid container className={classes.headerFooter}>
        <img src={img} width={100} alt="logo chloe's beauty" />
        <p>{login}</p>
      </Grid>
    </div>
  );
};
