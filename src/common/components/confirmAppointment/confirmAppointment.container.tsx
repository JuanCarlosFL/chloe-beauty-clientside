import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import {ConfirmAppointmentComponent} from './confirmAppointment.component';
// Constantes que contienen las url que usaremos para traer datos de la api
const treatmentUrl = `${process.env.API_URL}/treatment`;
const availabilityUrl = `${process.env.API_URL}/availability`;
// Componente que se encarga de confirmar la cita
export const ConfirmAppointmentContainer: React.FC = () => {
    // Usamos el hook useState para tener el tratamiento y la disponibilidad seleccionada por el cliente
    const [treatment, setTreatment] = useState('');
    const [availability, setAvailability] = useState('');
    // Leemos del contexto el id de person tratamiento, disponibilidad y el token
    const { treatmentId, personId, availabilityId, token} = useContext(SessionContext)
    
    // Función que llama a la api para traerse el tratamiento y actualizarlo
    const getTreatment = async () => {
        const response = await fetch(`${treatmentUrl}/${treatmentId}`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
        const data = await response.json();
        setTreatment(data.Name);
    };

    // Función que llama a la api para traerse la disponibilidad y actualizarla
    const getAvailability = async () => {
        const response = await fetch(`${availabilityUrl}/${availabilityId}`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
        const data = await response.json();
        setAvailability(data.Date);
    }

    // Con el hook useEffect ejecutamos cuando se pinta el componente las funcioses siguientes
    useEffect(() => {
        getTreatment();
        getAvailability();
    }, [])

    // Llamamos al compoenente pasandole el tratamiento y la disponibilidad
    return <ConfirmAppointmentComponent treatment={treatment} availability={availability}/>
}