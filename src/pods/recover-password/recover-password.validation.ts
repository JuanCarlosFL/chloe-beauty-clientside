import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { matchField } from '@lemoncode/fonk-match-field-validator';
// Usamos la librería fonk para validar el formualario
// Los campos son obligatorios, el username tiene que tener formato de email
// Y las contraseñas deben coincidir
const validationSchema: ValidationSchema = {
  field: {
    username: [
      {
        validator: Validators.required.validator,
        message: 'El nombre es obligatorio',
      },
      {
        validator: Validators.email.validator,
        message: 'El usuario debe ser un email válido',
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
