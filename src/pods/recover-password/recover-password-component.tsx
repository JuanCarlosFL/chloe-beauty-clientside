import { Button, Grid, withStyles } from '@material-ui/core';
import img from '../../assets/img/logo-imagen-chloe.jpeg';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/form';
import React from 'react';
import { createEmptyLogin, RecoverPasswordVM } from './recover-password.vm';
import { formValidation } from './recover-password.validation';

const CancelButton = withStyles(() => ({
  root: {
    backgroundColor: '#bb2124',
    '&:hover': {
      backgroundColor: '#c4383a',
    },
  },
}))(Button);

interface Props {
  onLogin: (login: RecoverPasswordVM) => void;
  onCancel: () => void;
}

export const RecoverPasswordComponent: React.FC<Props> = props => {
  const { onLogin, onCancel } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        style={{ padding: '10' }}
      >
        <Formik
          onSubmit={onLogin}
          initialValues={createEmptyLogin()}
          validate={formValidation.validateForm}
        >
          {() => (
            <Form>
              <div style={{ height: 30 }} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: 400,
                  minWidth: 350,
                }}
              >
                <Grid container justify="center">
                  <img src={img} width={200} alt="logo chloe's beauty" />
                </Grid>
                <TextFieldComponent name="username" label="Usuario" />
                <TextFieldComponent
                  name="password"
                  label="Contraseña"
                  type="password"
                />
                <TextFieldComponent
                  name="confirmPassword"
                  label="Repetir Contraseña"
                  type="password"
                />
                <Grid container justify="space-between" spacing={2}>
                  <Button
                    type="submit"
                    size="medium"
                    color="primary"
                    variant="contained"
                    style={{ marginTop: '25px' }}
                  >
                    Recuperar contraseña
                  </Button>
                  <div style={{ height: 20 }} />
                  <CancelButton
                    color="secondary"
                    size="medium"
                    variant="contained"
                    onClick={onCancel}
                    style={{ marginTop: '25px' }}
                  >
                    Cancelar
                  </CancelButton>
                </Grid>
              </div>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
};
