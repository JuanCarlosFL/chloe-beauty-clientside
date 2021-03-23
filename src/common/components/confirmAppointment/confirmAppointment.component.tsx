import { getFormatDate } from 'core/dates';
import React from 'react';

interface Props {
    treatment: string;
    availability: string;
}

export const ConfirmAppointmentComponent: React.FC<Props> = (props) => {
    const {treatment, availability} = props;
    const hours = new Date(availability).getHours();
    const minutes = new Date(availability).getMinutes();

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <h2>Su cita</h2>
            <h3><strong>Tratamiento:</strong> {treatment}</h3>
            <h3><strong>Día:</strong> {getFormatDate(availability)}</h3>
            <h3><strong>Hora:</strong> { hours < 10 ? '0'+ hours : hours }:{ minutes < 10 ? '0' + minutes : minutes }</h3>
        </div>
    );
}