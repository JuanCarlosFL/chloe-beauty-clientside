import { SessionContext } from 'core/session-context';
import React, { useContext } from 'react';

export const ConfirmAppointmentComponent: React.FC = () => {
    const { treatmentId, personId, availabilityId} = useContext(SessionContext);
    return (
        <div>
        <p>Tratamiento: {treatmentId}</p>
         <p>   Persona: {personId}</p>
            <p>Disponibilidad: {availabilityId}
        </p>
        </div>
        );
}