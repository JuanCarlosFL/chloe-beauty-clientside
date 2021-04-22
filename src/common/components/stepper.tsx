import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectTreatmentContainer } from './selectTreatment';
import { SelectDateContainer } from './selectDate';
import { ConfirmAppointmentContainer } from './confirmAppointment';


function getSteps() {
  return ['Seleccione el tratamiento', 'Seleccione fecha y hora', 'Compruebe los datos'];
}

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

interface Props {
    close: () => void;
    confirm: () => void;
}

export const CustomStepper: React.FC<Props> = (props) => {
    let {  close, confirm } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const myForm = React.useRef(null);

  const handleNext = () => {
    if (!myForm.current.checkValidity()) {
      return;
   }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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