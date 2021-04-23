import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { SelectTreatmentComponent } from './selectTreatment.component';
import { createEmptyTreatment, TreatmentForAppointmentVM } from './selectTreatment.model';

const url = `${process.env.API_URL}/treatment/GetTreatmentsForAppointment`

export const SelectTreatmentContainer: React.FC = () => {
    const [treatments, setTreatments] = useState<TreatmentForAppointmentVM[]>(createEmptyTreatment());
    const { token } = useContext(SessionContext);

    const getTreatmentsForAppointment = async () => {
        console.log(url)
        const response = await fetch(url, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });
        const data: TreatmentForAppointmentVM[] = await response.json();
        setTreatments(data);
    };

    useEffect(() => {
        getTreatmentsForAppointment();
    }, [])

    return (
        <SelectTreatmentComponent treatments={treatments}/>
    );
}