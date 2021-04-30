// Interface para tipar la disponibilidad que nos traemos de la api
export interface AvailabilityVM {
    Date: string;
    TimesByDate: [
        {
            Id: number;
            Time: string;
        }
    ]
}

// Función para crear un array de dispobilidades vacía
export const createEmptyAvailability = (): AvailabilityVM[] => {
    return [
        {
            Date: '',
            TimesByDate: [{
              Id: 0,
              Time: ''  
            }]
        }
    ]
}

// Función para crear una disponibilidad vacío
export const createEmptyAvailabilityItem = (): AvailabilityVM => {
    return {
            Date: '',
            TimesByDate: [{
              Id: 0,
              Time: ''  
            }]
        }
    
}