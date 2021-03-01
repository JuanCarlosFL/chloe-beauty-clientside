import { Button, Grid, withStyles } from '@material-ui/core';
import img from '../../assets/logo-imagen-chloe.jpeg';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/form';
import React from 'react';
import { createEmptyRegister, RegisterVM } from './register.vm';
import { formValidation } from './register.validation';
import { centered } from './register.styles';

const CancelButton = withStyles(() => ({
  root: {
    backgroundColor: '#bb2124',
    '&:hover': {
      backgroundColor: '#c4383a',
    },
  },
}))(Button);

interface Props {
  onLogin: (login: RegisterVM) => void;
  onCancel: () => void;
}

export const RegisterComponent: React.FC<Props> = props => {
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
          initialValues={createEmptyRegister()}
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
                <h2 className={centered}>Formulario de registro</h2>
                <TextFieldComponent name="name" label="Nombre" />
                <TextFieldComponent name="surname" label="Apellido" />
                <TextFieldComponent name="email" label="Email" />
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
                    Registrar
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
