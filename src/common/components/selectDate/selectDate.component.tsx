import { FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getFormatDate } from 'core/dates';
import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect } from 'react';
import { AvailabilityVM } from './selectDate.model';
// Interface para tipar las props
interface Props {
    availabilities: AvailabilityVM[];
};
// Modificamos los etilos para el componente
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
    // Traemos del contexto la función para actualizar la disponibilidad
    const { updateAvailabilityId }= useContext(SessionContext);
    // Alamacenamos el array de disponibilidades que recibimos por props
    const { availabilities } = props;
    // Importamos las clases que vamos a usar
    const classes = useStyles();
    // Seleccionamos por defecto la primera disponibilidad y la almacenamos
    const [ availabilityByDate, setAvailabilityByDate ] = React.useState<AvailabilityVM>(availabilities[0])
    // Iniciamos una variable con valor 1
    const [ value, setValue ] = React.useState(1);

    // Función ejecutaremos cada vez que el cliente modifque el select de la fecha
    const handleChange = (event) => {
        // Actualizamos la disponibilidad con la fecha que elija el cliente
        const availability = availabilities.filter(e => e.Date === event.target.value)[0];
        setAvailabilityByDate(availability);
        // Y actualizamos el id de la disponibilidad seleccionada
        updateAvailabilityId(availabilities[0].TimesByDate[0].Id);
        // Actualizamos el valor de select
        setValue(value)
    };
    
    // Función que se ejecutará cuando el cliente cambie el valor del radio button
    const handleValue = (event) => {
        // Y actualiza el valor del select y del id de la disponibilidad
        setValue(parseInt(event.target.value));
        updateAvailabilityId(event.target.value);
    }
    
    // Componente que pinta un select con la fecha y un radio button con las horas disponibles para esa fecha
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
                    {/* Iteramos las disponibilidades para poner las fechas en el select */}
                    { availabilities.map(item => <MenuItem key={item.Date} value={item.Date}>{getFormatDate(item.Date)}</MenuItem>) }
                </Select>
            </FormControl>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup aria-label="horas" name="hours" value={value} onChange={handleValue}>
                        {/* Si la fecha tiene horas iteramos para rellenar el radio button con las horas disponibles */}
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