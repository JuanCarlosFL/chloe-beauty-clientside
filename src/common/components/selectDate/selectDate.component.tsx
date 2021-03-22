import { FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getFormatDate } from 'core/dates';
import { SessionContext } from 'core/session-context';
import React, { useContext } from 'react';
import { AvailabilityVM } from './selectDate.model';

interface Props {
    availabilities: AvailabilityVM[];
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    formControl: {
      minWidth: 120,
      display: 'flex',
      margin: '0 auto',
      maxWidth: '200px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const SelectDateComponent: React.FC<Props> = (props) => {
    const { updateAvailabilityId }= useContext(SessionContext);
    const { availabilities } = props;
    const classes = useStyles();
    const [ availabilityByDate, setAvailabilityByDate ] = React.useState<AvailabilityVM>(availabilities[0])
    const [ value, setValue ] = React.useState(1);

    const handleChange = (event) => {
        const availability = availabilities.filter(e => e.Date === event.target.value)[0];
        setAvailabilityByDate(availability);
        setValue(value)
    };
    
    const handleValue = (event) => {
        setValue(parseInt(event.target.value));
        updateAvailabilityId(event.target.value);
    }

    
    return (
        <>
        <FormControl required className={classes.formControl}>
            <Select
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                value={availabilityByDate.Date}
                name={getFormatDate(availabilityByDate.Date)}
            >
                <MenuItem value={availabilityByDate.Date}>
                    <em>Elija Fecha</em>
                </MenuItem>
                { availabilities.map(item => <MenuItem key={item.Date} value={item.Date}>{getFormatDate(item.Date)}</MenuItem>) }
            </Select>
        </FormControl>
        <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup aria-label="horas" name="hours" value={value} onChange={handleValue}>
                { availabilityByDate.Date !== '' ? availabilityByDate.TimesByDate.map( time => {
                        return <FormControlLabel key={time.Id} value={time.Id} control={<Radio required={true}/>} label={time.Time} />
                    }) : null
                }
            </RadioGroup>
        </FormControl>
        </div>

        </>
    );
}