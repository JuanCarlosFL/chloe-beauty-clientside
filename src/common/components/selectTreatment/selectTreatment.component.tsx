import React from 'react';
import { TreatmentForAppointmentVM } from './selectTreatment.model';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio, RadioGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

interface Props {
    treatments: TreatmentForAppointmentVM[];
}

export const SelectTreatmentComponent: React.FC<Props> = (props) => {
    const [value, setValue] = React.useState(1);
    const classes = useStyles();
    const {treatments} = props;

    const handleChange = (event) => {
        setValue(parseInt(event.target.value));
        console.log(event.target.value)
      };

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="tratamientos" name="treatments" value={value} onChange={handleChange}>
                    {treatments.map( treatment => {
                            return <FormControlLabel value={treatment.Id} control={<Radio />} label={treatment.Name} />
                        })
                    }
                </RadioGroup>
            </FormControl>
        </div>
    )
}