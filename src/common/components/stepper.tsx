import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectTreatmentContainer } from './selectTreatment';
import { SelectDateContainer } from './selectDate';
import { ConfirmAppointmentContainer } from './confirmAppointment';

// Stepper de material ui, creamos un array con los textos
function getSteps() {
  return ['Seleccione el tratamiento', 'Seleccione fecha y hora', 'Compruebe los datos'];
}

// Según el paso en el que estemos pintamos el componente correspondiente
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
          <SelectTreatmentContainer />
      );
    case 1:
        return (
            <SelectDateContainer />
        );
    case 2:
        return (
            <ConfirmAppointmentContainer />
        );
    default:
      return 'Unknown stepIndex';
  }
}
// Interface para tipar las props
interface Props {
    close: () => void;
    confirm: () => void;
}

export const CustomStepper: React.FC<Props> = (props) => {
  // Guardamos las funciones que recibimos por props
  let {  close, confirm } = props;
  // Empezamos en el paso 0
  const [activeStep, setActiveStep] = React.useState(0);
  // Guardamos el array con los textos
  const steps = getSteps();
  // Creamos una referencia para el formulario
  const myForm = React.useRef(null);
  // Función que maneja  el avanzar en el step si no hay errores del formulario
  const handleNext = () => {
    if (!myForm.current.checkValidity()) {
      return;
   }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  // Función que retrocede en el step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // Componente que pinta los pasos según se vaya avanzando o retrocediendo
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form ref={myForm} >
          <Typography component={'span'} style={{display: 'flex', flexDirection: 'column' ,minHeight: '250px'}}>{getStepContent(activeStep)}</Typography>
          <Button
            variant="contained" color="secondary"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Volver
          </Button>
            {/* Si es el último paso el botón mostrará Confirmar sino mostrará Siguiente */}
            { activeStep === steps.length - 1 ?
                <Button 
                    variant="contained" color="primary"
                    onClick={confirm}
                    style={{marginLeft: '10px'}}
                >
                    Confirmar
                </Button>
                :
                <Button variant="contained" color="primary" onClick={handleNext} style={{marginLeft: '10px'}} type="submit">
                    Siguiente
                </Button>
            }   
        </form>
    </div>
  );
}