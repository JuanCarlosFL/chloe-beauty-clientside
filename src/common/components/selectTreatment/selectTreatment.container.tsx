import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { SelectTreatmentComponent } from './selectTreatment.component';
import { createEmptyTreatment, TreatmentForAppointmentVM } from './selectTreatment.model';
// Constantes que contienen las url que usaremos para traer datos de la api
const url = `${process.env.API_URL}/treatment/GetTreatmentsForAppointment`

export const SelectTreatmentContainer: React.FC = () => {
    // Creamos un array de tratamientos vacío
    const [treatments, setTreatments] = useState<TreatmentForAppointmentVM[]>(createEmptyTreatment());
    // Traemos el token del context
    const { token } = useContext(SessionContext);
    // Función para traerse la colección de tratamientos
    const getTreatmentsForAppointment = async () => {
        const response = await fetch(url, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
        const data: TreatmentForAppointmentVM[] = await response.json();
        setTreatments(data);
    };
    // Cargamos la lista de tratamientos cuando se pinta el componente
    useEffect(() => {
        getTreatmentsForAppointment();
    }, [])
    // Llamamos al componente pasandole por porps la colección de tratamientos
    return (
        <SelectTreatmentComponent treatments={treatments}/>
    );
}