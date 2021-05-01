import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Loyalty } from './api';
import { Button } from '@material-ui/core';
import * as classes from './loyalty-list.styles';

// Interface para tipar las props
interface Props {
  onBack: () => void;
  loyalties: Loyalty[];
}

export const LoyaltyListComponent: React.FC<Props> = props => {
  // Guardamos la función para volver y la colección de ofertas recibidas por props
  const { onBack, loyalties } = props;
  // Pintamos una tabla con el contenido de la colección
  return (
    <div className={classes.container}>
      <h3 style={{ textAlign: 'center' }}>Ofertas</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tratamiento</TableCell>
              <TableCell align="right">Puntos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Iteramos la colección para pintar cada fila de la tabla */}
            {loyalties.map(loyalty => (
              <TableRow key={loyalty.Name}>
                <TableCell component="th" scope="row">
                  {loyalty.Name}
                </TableCell>
                <TableCell align="right">{loyalty.Points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={onBack}
      >
        Volver
      </Button>
    </div>
  );
};
