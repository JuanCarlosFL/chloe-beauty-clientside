import { Grid } from '@material-ui/core';
import React from 'react';
import img from '../assets/logo-nombre-chloe.jpeg';
import * as classes from './header.styles';

export const HeaderComponent: React.FC = () => {
  return (
    <div>
      <Grid container className={classes.headerFooter}>
        <img src={img} width={100} alt="logo chloe's beauty" />
        <p>Username</p>
      </Grid>
    </div>
  );
};
