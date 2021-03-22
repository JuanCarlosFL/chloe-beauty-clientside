import React from 'react';
import { SelectDateComponent } from './selectDate.component';
import { AvailabilityVM, createEmptyAvailability } from './selectDate.model';

const url = `${process.env.API_URL}/availability`

export const SelectDateContainer = () => {
    const [availabilities, setAvailabilites] = React.useState<AvailabilityVM[]>(createEmptyAvailability());

    const getAvailabilities = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setAvailabilites(data);
    };

    React.useEffect(() => {
        getAvailabilities();
    }, [])

    return (
        <SelectDateComponent availabilities = { availabilities }/>
    )
}