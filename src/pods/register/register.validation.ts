import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { matchField } from '@lemoncode/fonk-match-field-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required.validator,
        message: 'El nombre es obligatorio',
      },
    ],
    surname: [
      {
        validator: Validators.required.validator,
        message: 'El apellido es obligatorio',
      },
    ],
    email: [
      {
        validator: Validators.required.validator,
        message: 'El email es obligatorio',
      },
      {
        validator: Validators.email.validator,
        message: 'Introduzca una dirección de email válida',
      },
    ],
    password: [
      {
        validator: Validators.required.validator,
        message: 'La contraseña es obligatoria',
      },
    ],
    confirmPassword: [
      {
        validator: Validators.required.validator,
        message: 'La contraseña es obligatoria',
      },
      {
        validator: matchField.validator,
        customArgs: { field: 'password' },
        message: 'Las contraseñas deben coincidir',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
