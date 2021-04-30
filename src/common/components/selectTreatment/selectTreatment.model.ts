// Interface para tipar los tratamientos
export interface TreatmentForAppointmentVM {
    Id: number;
    Duration: number;
    Name: string;
    Price: number;
    Points?: number;
}

// Función para crear un tratamiento vacío
export const createEmptyTreatment = (): TreatmentForAppointmentVM[] => ([
    {
        Id: 0,
        Duration: 0,
        Name: '',
        Price: 0,
        Points: 0
    }
])