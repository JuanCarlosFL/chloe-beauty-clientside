import { Button, Grid, withStyles } from '@material-ui/core';
import * as viewModel from './login.vm';
import img from '../../assets/logo-imagen-chloe.jpeg';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/form';
import React from 'react';
import { formValidation } from './login.validation';

const ForgotPasswordButton = withStyles(() => ({
  root: {
    color: 'primary',
    justifyContent: 'start',
    fontSize: '12px',
  },
}))(Button);

interface Props {
  onLogin: (login: viewModel.LoginVm) => void;
  onRecoverPassword: () => void;
  onRegister: () => void;
}

export const LoginComponent: React.FC<Props> = props => {
  const { onLogin, onRecoverPassword, onRegister } = props;

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
          initialValues={viewModel.createEmptyLogin()}
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
                <ForgotPasswordButton
                  color="primary"
                  onClick={onRecoverPassword}
                  style={{ marginTop: '10px' }}
                >
                  ¿Olvidó la contraseña?
                </ForgotPasswordButton>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={{ marginTop: '15px' }}
                >
                  Iniciar sesión
                </Button>
                <div style={{ height: 20 }} />
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={onRegister}
                  style={{ marginTop: '10px' }}
                >
                  Regístrate
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
};
