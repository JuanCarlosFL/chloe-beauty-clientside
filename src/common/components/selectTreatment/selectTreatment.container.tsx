import React, { useEffect, useState } from 'react';
import { SelectTreatmentComponent } from './selectTreatment.component';
import { createEmptyTreatment, TreatmentForAppointmentVM } from './selectTreatment.model';


const url = `${process.env.API_URL}/treatment/GetTreatmentsForAppointment`

export const SelectTreatmentContainer: React.FC = () => {
    const [treatments, setTreatments] = useState<TreatmentForAppointmentVM[]>(createEmptyTreatment());

    const getTreatmentsForAppointment = async () => {
        const response = await fetch(url);
        const data: TreatmentForAppointmentVM[] = await response.json();
        console.log(data);
        setTreatments(data);
    };


    useEffect(() => {


        getTreatmentsForAppointment();

    }, [])

    return (
        <SelectTreatmentComponent treatments={treatments}/>
    );
}