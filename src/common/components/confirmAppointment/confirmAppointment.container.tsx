import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import {ConfirmAppointmentComponent} from './confirmAppointment.component';

const treatmentUrl = `${process.env.API_URL}/treatment`;
const availabilityUrl = `${process.env.API_URL}/availability`;

export const ConfirmAppointmentContainer: React.FC = () => {
    const [treatment, setTreatment] = useState('');
    const [availability, setAvailability] = useState('');
    const { treatmentId, personId, availabilityId} = useContext(SessionContext)
    
    const getTreatment = async () => {
        const response = await fetch(`${treatmentUrl}/${treatmentId}`);
        const data = await response.json();
        setTreatment(data.Name);
    };

    const getAvailability = async () => {
        const response = await fetch(`${availabilityUrl}/${availabilityId}`);
        const data = await response.json();
        setAvailability(data.Date);
    }


    useEffect(() => {
        getTreatment();
        getAvailability();
    }, [])


    return <ConfirmAppointmentComponent treatment={treatment} availability={availability}/>
}