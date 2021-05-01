import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Treatment } from './api';
import * as classes from './treatment.list.styles';
import { Button } from '@material-ui/core';
import { getFormatDate } from 'core/dates';
// Interface para tipar las props
interface Props {
  onBack: () => void;
  treatmentHistory: Treatment[];
}

export const TreatmentListComponent: React.FC<Props> = props => {
  // Guardamos la función para volver y la colección recibida por props
  const { onBack, treatmentHistory } = props;
  // Pintamos una tabla con el contenido de la colección
  return (
    <div className={classes.container}>
      <h3 style={{ textAlign: 'center' }}>Historial de tratamientos</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tratamiento</TableCell>
              <TableCell align="right">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {treatmentHistory.map(treatment => (
              <TableRow key={treatment.Name}>
                <TableCell component="th" scope="row">
                  {treatment.Name}
                </TableCell>
                <TableCell align="right">
                  { getFormatDate(treatment.Date) }
                </TableCell>
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
