import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTreatmentsByUser } from './api';
import * as classes from './treatment.list.styles';
import { Button } from '@material-ui/core';

const rows = getTreatmentsByUser();

interface Props {
  onBack: () => void;
}

export const TreatmentListComponent: React.FC<Props> = props => {
  const { onBack } = props;
  return (
    <div className={classes.container}>
      <h3 style={{ textAlign: 'center' }}>Hola Pepe</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tratamiento</TableCell>
              <TableCell align="right">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
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
