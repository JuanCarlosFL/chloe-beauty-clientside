import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectTreatmentContainer } from './selectTreatment';


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
            <div>
                Seleccione fecha y hora
            </div>
        );
    case 2:
        return (
            <div>
                Compruebe los datos
            </div>
        );
    default:
      return 'Unknown stepIndex';
  }
}

interface Props {
    close: () => void;
}

export const CustomStepper: React.FC<Props> = (props) => {
    let {  close } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

  const handleNext = () => {
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
      <div>
          <Typography>{getStepContent(activeStep)}</Typography>
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
                    onClick={close}>
                    Cerrar
                </Button>
                :
                <Button variant="contained" color="primary" onClick={handleNext} style={{margin: '5px'}}>
                    Siguiente
                </Button>
            }   
        </div>
    </div>
  );
}