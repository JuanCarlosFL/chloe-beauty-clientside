import React, {useContext, useEffect} from 'react';
import { SessionContext } from 'core/session-context';
import { TreatmentForAppointmentVM } from './selectTreatment.model';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio, RadioGroup } from '@material-ui/core';
// Aplicamos estilos que usaremos en el componente
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    formControl: {
      margin: theme.spacing(3),
    },
}));
// Interface para tipar las props
interface Props {
    treatments: TreatmentForAppointmentVM[];
}

export const SelectTreatmentComponent: React.FC<Props> = (props) => {
  // Traemos la función para actualizar el tratamiento del context
  const {updateTreatmentId} = useContext(SessionContext);
  // Iniciamos un valor a 1
  const [value, setValue] = React.useState(1);
  // Traemos las clases que vamos a usar
  const classes = useStyles();
  // Guardamos la colección de tratamientos que recibimos por props
  const {treatments} = props;
  // Función que se ejecuta cuando el usuario pincha en un tratamiento del radio button
  const handleChange = (event) => {
      // Y actualizamos el valor del radio button y el id del tratamiento
      setValue(parseInt(event.target.value));
      updateTreatmentId(parseInt(event.target.value));
  };
  // Actualizamos el tratamiento cuando se carga el componente
  useEffect(() => {
    updateTreatmentId(value);
  }, [])
  // Componente que pinta el radio button de selección de tratamiento
  return (
      <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup aria-label="tratamientos" name="treatments" value={value} onChange={handleChange}>
                  {/* Iteramos la colección de tratamientos para mostrarlos en el radio button */}
                  {treatments.map( treatment => {
                          return <FormControlLabel key={treatment.Id} value={treatment.Id} control={<Radio />} label={treatment.Name} />
                      })
                  }
              </RadioGroup>
          </FormControl>
      </div>
  )
}