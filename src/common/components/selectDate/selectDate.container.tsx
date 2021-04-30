import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { SelectDateComponent } from './selectDate.component';
import { AvailabilityVM, createEmptyAvailability } from './selectDate.model';

// Constante que contiene la url que usaremos para traer datos de la api
const url = `${process.env.API_URL}/availability`

// Función para seleccionar la fecha
export const SelectDateContainer = () => {
    // Creamos un array de disponibilidades vacía
    const [availabilities, setAvailabilites] = useState<AvailabilityVM[]>(createEmptyAvailability());
    // Traemos el token del contexto
    const { token } = useContext(SessionContext);
    // Traemos el listado de disponibilidades de la api
    const getAvailabilities = async () => {
        const response = await fetch(url, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
        const data = await response.json();
        setAvailabilites(data);
    };
    // Ejecutamos la función cuando se pinta el componente
    useEffect(() => {   
        getAvailabilities();
    }, [])
    // LLamamos al componente pasandole por props el array de disponibilidades
    return (
        <SelectDateComponent availabilities = { availabilities }/>
    )
}