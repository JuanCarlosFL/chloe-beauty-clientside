import { Grid } from '@material-ui/core';
import React from 'react';
import * as classes from './header.styles';

export const FooterComponent: React.FC = () => {
  return (
    <div>
      <Grid container className={classes.headerFooter}>
        <p>&copy; Juan Carlos Fuentes Lamas</p>
        <p>2021 - Mijas Costa</p>
      </Grid>
    </div>
  );
};
